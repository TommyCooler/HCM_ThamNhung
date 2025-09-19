import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Scale, ArrowDown, AlertTriangle } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { label: 'Vụ án lớn', value: '100+', icon: AlertTriangle },
    { label: 'Tổng thiệt hại', value: '500+ tỷ', icon: Scale },
    { label: 'Cán bộ xử lý', value: '1000+', icon: Users },
  ];

  const scrollToContent = () => {
    const element = document.querySelector('#theory');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-primary-100 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-secondary-100 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -50, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent-100 rounded-full opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-gradient">
                "Tham nhũng là từ trong Đảng mà ra"
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium mb-4">
              Thách thức trong việc xây dựng Đảng và Nhà nước
            </p>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Phân tích tư tưởng Hồ Chí Minh về xây dựng Đảng trong sạch, vững mạnh 
              và Nhà nước của dân, do dân, vì dân trong bối cảnh chống tham nhũng hiện nay
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft-lg border border-white/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContent}
                className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
              >
                <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Khám phá nội dung</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-300 flex items-center space-x-2 group"
              >
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Tìm hiểu thêm</span>
              </motion.button>
            </div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={scrollToContent}
              className="flex flex-col items-center space-y-2 text-gray-500 hover:text-primary-600 cursor-pointer transition-colors"
            >
              <span className="text-sm font-medium">Cuộn xuống để xem thêm</span>
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;