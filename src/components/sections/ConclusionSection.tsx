import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Heart, ArrowRight, CheckCircle, AlertTriangle, Target } from 'lucide-react';

const ConclusionSection: React.FC = () => {
  const keyPoints = [
    {
      icon: Shield,
      title: 'Cuộc chiến sinh tử',
      description: 'Phòng, chống tham nhũng không chỉ là nhiệm vụ cấp bách mà là cuộc chiến sinh tử, mang ý nghĩa chiến lược lâu dài.',
      color: 'red'
    },
    {
      icon: AlertTriangle,
      title: 'Chống giặc nội xâm',
      description: 'Đây là cuộc chiến "chống giặc nội xâm", quyết định sự sống còn của chế độ và tương lai của dân tộc.',
      color: 'orange'
    },
    {
      icon: Target,
      title: 'Xây dựng Nhà nước pháp quyền',
      description: 'Cuộc chiến này phải được thực hiện song song với việc xây dựng Nhà nước pháp quyền xã hội chủ nghĩa.',
      color: 'blue'
    }
  ];

  const responsibilities = [
    {
      title: 'Trách nhiệm của Đảng',
      items: [
        'Lãnh đạo toàn diện công cuộc chống tham nhũng',
        'Xây dựng Đảng trong sạch, vững mạnh',
        'Kiểm soát chặt chẽ quyền lực nhà nước',
        'Nêu gương trong việc tuân thủ pháp luật'
      ],
      icon: Shield,
      color: 'primary'
    },
    {
      title: 'Trách nhiệm của Nhà nước',
      items: [
        'Hoàn thiện hệ thống pháp luật chống tham nhũng',
        'Xây dựng cơ chế kiểm soát quyền lực hiệu quả',
        'Đào tạo đội ngũ cán bộ, công chức liêm chính',
        'Tạo môi trường minh bạch, công khai'
      ],
      icon: Users,
      color: 'secondary'
    },
    {
      title: 'Trách nhiệm của nhân dân',
      items: [
        'Tham gia giám sát, đấu tranh chống tham nhũng',
        'Nâng cao ý thức pháp luật và đạo đức',
        'Tố cáo các hành vi tham nhũng, tiêu cực',
        'Ủng hộ các chủ trương, chính sách chống tham nhũng'
      ],
      icon: Heart,
      color: 'accent'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red':
        return {
          bg: 'bg-red-100',
          text: 'text-red-600',
          border: 'border-red-200'
        };
      case 'orange':
        return {
          bg: 'bg-orange-100',
          text: 'text-orange-600',
          border: 'border-orange-200'
        };
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200'
        };
      case 'primary':
        return {
          bg: 'bg-primary-100',
          text: 'text-primary-600',
          border: 'border-primary-200'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-100',
          text: 'text-secondary-600',
          border: 'border-secondary-200'
        };
      case 'accent':
        return {
          bg: 'bg-accent-100',
          text: 'text-accent-600',
          border: 'border-accent-200'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-200'
        };
    }
  };

  return (
    <section id="conclusion" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kết luận
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tổng kết và khẳng định tầm quan trọng của công cuộc chống tham nhũng 
            trong việc xây dựng Đảng và Nhà nước theo tư tưởng Hồ Chí Minh.
          </p>
        </motion.div>

        {/* Key points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {keyPoints.map((point, index) => {
            const colors = getColorClasses(point.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-soft-lg border ${colors.border} hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <point.icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white mb-16"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Thông điệp cốt lõi
            </h3>
            <blockquote className="text-xl italic leading-relaxed mb-6">
              "Đảng với dân như cá với nước, có dân là sống, thoát ly dân là chết"
            </blockquote>
            <p className="text-lg opacity-90 leading-relaxed">
              Muốn thắng lợi trong cuộc chiến chống tham nhũng, phải có sự đồng lòng của cả Đảng, 
              Nhà nước và nhân dân. Mọi người dân và mỗi cán bộ, đảng viên đều có trách nhiệm 
              trong cuộc chiến này. Đặc biệt, cán bộ giữ chức vụ càng cao, trách nhiệm nêu gương càng lớn.
            </p>
          </div>
        </motion.div>

        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Trách nhiệm của các chủ thể
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {responsibilities.map((responsibility, index) => {
              const colors = getColorClasses(responsibility.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-6 shadow-soft-lg border ${colors.border} hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                      <responsibility.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {responsibility.title}
                    </h4>
                  </div>
                  
                  <ul className="space-y-3">
                    {responsibility.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: itemIndex * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-600">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Hành động ngay hôm nay
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Chống tham nhũng không thể chỉ trông chờ vào lãnh đạo cấp cao mà cần đến sự đồng lòng 
              của toàn xã hội – từ Đảng, Nhà nước đến từng công dân. Mỗi người chúng ta đều có thể 
              góp phần vào công cuộc này.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
              >
                <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Tìm hiểu thêm</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-300 flex items-center space-x-2 group"
              >
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Chia sẻ</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Final quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl font-medium text-gray-700 italic leading-relaxed mb-4">
              "Tham nhũng, lãng phí như một loại 'ung nhọt' đang từng ngày bào mòn sức mạnh, 
              làm suy yếu ý chí và làm xói mòn niềm tin của nhân dân vào Đảng và Nhà nước."
            </blockquote>
            <p className="text-lg text-gray-600">
              Do đó, công cuộc này đòi hỏi sự kiên định, dũng cảm và quyết tâm không ngừng, 
              bởi thất bại đồng nghĩa với việc ta tự đánh mất chính mình.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConclusionSection;