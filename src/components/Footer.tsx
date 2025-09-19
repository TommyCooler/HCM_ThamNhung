import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Scale, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Tư tưởng HCM', href: '#theory' },
    { name: 'Thực trạng', href: '#reality' },
    { name: 'Giải pháp', href: '#solutions' },
    { name: 'Sự kiện', href: '#events' },
  ];

  const principles = [
    'Đảng trong sạch, vững mạnh',
    'Nhà nước của dân, do dân, vì dân',
    'Kiểm soát quyền lực',
    'Phòng chống tham nhũng',
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600 to-secondary-600" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full opacity-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Chống Tham Nhũng</h3>
                  <p className="text-sm text-gray-400">Xây dựng Đảng trong sạch</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Phân tích tư tưởng Hồ Chí Minh về xây dựng Đảng trong sạch, vững mạnh 
                và Nhà nước của dân, do dân, vì dân trong bối cảnh chống tham nhũng hiện nay.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                  <Scale className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                  <Shield className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold mb-6">Liên kết nhanh</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-primary-600 rounded-full group-hover:scale-150 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold mb-6">Nguyên tắc cốt lõi</h4>
              <ul className="space-y-3">
                {principles.map((principle, index) => (
                  <motion.li
                    key={principle}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0" />
                    <span className="text-gray-300">{principle}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold mb-6">Thông tin liên hệ</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">
                      Đại học FPT HCM
                    </p>
                    <p className="text-gray-400 text-xs">
                      Môn học: Tư tưởng Hồ Chí Minh
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Scale className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">
                      Chủ đề 04
                    </p>
                    <p className="text-gray-400 text-xs">
                      Tham nhũng và xây dựng Đảng
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 text-gray-400"
            >
              <Heart className="w-4 h-4 text-primary-500" />
              <span className="text-sm">
                Được tạo với tình yêu và sự tôn trọng tư tưởng Hồ Chí Minh
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-6"
            >
              <span className="text-sm text-gray-400">
                © 2024 HCM Tham Nhung. All rights reserved.
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;