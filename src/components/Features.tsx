import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Bot, 
  Zap, 
  Shield, 
  MessageCircle, 
  Settings, 
  BarChart3,
  Smartphone,
  Globe,
  Database,
  Users
} from 'lucide-react';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Bot,
      title: "Умные боты",
      description: "Искусственный интеллект для обработки запросов и автоматизации задач",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Быстрая разработка",
      description: "От идеи до готового бота за 7 дней с полной настройкой",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "Защищенные API и шифрование данных для вашего спокойствия",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "24/7 Поддержка",
      description: "Круглосуточная техническая поддержка и консультации",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Settings,
      title: "Гибкая настройка",
      description: "Индивидуальная настройка под ваши бизнес-процессы",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Аналитика",
      description: "Детальная статистика и отчеты по работе бота",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Smartphone,
      title: "Мобильная адаптация",
      description: "Отличная работа на всех устройствах и платформах",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Globe,
      title: "Мультиязычность",
      description: "Поддержка множества языков для международного бизнеса",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Database,
      title: "Интеграция",
      description: "Подключение к CRM, платежным системам и другим сервисам",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Масштабируемость",
      description: "Боты готовы к росту и увеличению нагрузки",
      color: "from-blue-400 to-cyan-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="features" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Возможности наших{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Telegram ботов
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создаем ботов, которые не просто отвечают на сообщения, 
            а становятся полноценными помощниками для вашего бизнеса
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div>
                                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Готовы начать?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Оставьте заявку и получите бесплатную консультацию по разработке 
              Telegram бота для вашего бизнеса
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Получить консультацию
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
