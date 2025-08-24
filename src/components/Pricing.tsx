import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Старт",
      icon: Zap,
      price: isAnnual ? "25,000₽" : "30,000₽",
      originalPrice: "30,000₽",
      description: "Идеально для малого бизнеса",
      features: [
        "Базовый функционал бота",
        "До 1000 пользователей",
        "Базовые команды",
        "Email поддержка",
        "Доставка за 10 дней"
      ],
      color: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      name: "Бизнес",
      icon: Star,
      price: isAnnual ? "50,000₽" : "60,000₽",
      originalPrice: "60,000₽",
      description: "Для растущего бизнеса",
      features: [
        "Все функции Старт",
        "До 10,000 пользователей",
        "Интеграция с CRM",
        "Приоритетная поддержка",
        "Аналитика и отчеты",
        "Доставка за 7 дней",
        "Обучение персонала"
      ],
      color: "from-blue-500 to-cyan-600",
      popular: true
    },
    {
      name: "Премиум",
      icon: Crown,
      price: isAnnual ? "100,000₽" : "120,000₽",
      originalPrice: "120,000₽",
      description: "Для крупных компаний",
      features: [
        "Все функции Бизнес",
        "Неограниченное количество пользователей",
        "Индивидуальная разработка",
        "24/7 поддержка",
        "Интеграция с любыми сервисами",
        "Доставка за 5 дней",
        "Персональный менеджер",
        "Бесплатные обновления 1 год"
      ],
      color: "from-indigo-500 to-blue-600",
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-100 to-blue-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Тарифные{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              планы
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Выберите подходящий план для вашего бизнеса. 
            Все планы включают полную разработку и настройку бота.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Месячная оплата
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 ${
                isAnnual ? 'bg-cyan-600' : 'bg-gray-300'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`text-lg ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Годовая оплата
              <span className="ml-2 text-sm text-green-600 font-medium">
                (Скидка 17%)
              </span>
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >


              <div className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${
                plan.popular ? 'border-purple-200' : 'border-gray-100'
              } h-full`}>
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {isAnnual && (
                        <span className="text-lg text-gray-500 line-through">
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">
                      {isAnnual ? 'за год' : 'за проект'}
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + featureIndex * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                                className={`w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-200 ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl'
                  : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
              }`}
                >
                  Выбрать план
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Нужен индивидуальный план?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения ваших уникальных требований 
              и получения персонального предложения
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Обсудить проект
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
