import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Scale, BookOpen, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      id: 0,
      title: 'Xây dựng Đảng trong sạch, vững mạnh',
      icon: Shield,
      color: 'primary',
      content: {
        description: 'Vận dụng tư tưởng Hồ Chí Minh vào công tác xây dựng Đảng thật sự trong sạch, vững mạnh.',
        aspects: [
          {
            title: 'Phương diện đường lối',
            description: 'Đề ra đường lối và chủ trương đúng đắn dựa trên nền tảng chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh.',
            points: [
              'Dựa trên nền tảng chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh',
              'Vận dụng sáng tạo phù hợp với hoàn cảnh đất nước',
              'Thể chế hóa đường lối thành hành động tích cực'
            ]
          },
          {
            title: 'Phương diện tổ chức, thực hiện',
            description: 'Tổ chức thực hiện tốt đường lối, chủ trương của Đảng.',
            points: [
              'Thể chế hóa đường lối thành hành động của toàn bộ hệ thống chính trị',
              'Phát huy vai trò của đội ngũ cán bộ, đảng viên',
              'Nêu cao tinh thần trách nhiệm của đội ngũ cán bộ chiến lược'
            ]
          },
          {
            title: 'Công tác chỉnh đốn Đảng',
            description: 'Chú trọng hơn nữa công tác chỉnh đốn Đảng.',
            points: [
              'Sự thành công phụ thuộc vào chất lượng và sự trong sạch của Đảng',
              'Thường xuyên chỉnh đốn nội bộ',
              'Đảng viên xứng đáng vừa là người lãnh đạo, vừa là đầy tớ trung thành của nhân dân'
            ]
          }
        ]
      }
    },
    {
      id: 1,
      title: 'Xây dựng Nhà nước trong sạch, vững mạnh',
      icon: Scale,
      color: 'secondary',
      content: {
        description: 'Xây dựng Nhà nước Việt Nam thật sự trong sạch, vững mạnh theo tư tưởng Hồ Chí Minh.',
        aspects: [
          {
            title: 'Hoàn thiện pháp luật',
            description: 'Đẩy mạnh việc hoàn thiện pháp luật gắn với tổ chức thi hành pháp luật.',
            points: [
              'Bảo đảm pháp luật vừa là công cụ quản lý xã hội, vừa là công cụ để nhân dân làm chủ',
              'Tiếp tục hoàn thiện hệ thống pháp luật',
              'Tôn trọng, bảo đảm, bảo vệ quyền con người, quyền và nghĩa vụ của công dân',
              'Bịt kín "lỗ hổng" dễ phát sinh tham nhũng'
            ]
          },
          {
            title: 'Kiểm soát quyền lực nhà nước',
            description: 'Thực hiện kiểm soát quyền lực nhà nước hiệu quả.',
            points: [
              'Có cơ chế phân công, phối hợp rõ ràng giữa các cơ quan lập pháp, hành pháp và tư pháp',
              'Xác định rõ quyền hạn, trách nhiệm của mỗi cơ quan và người đứng đầu',
              'Đảm bảo quyền lực thật sự là của dân, do dân, vì dân'
            ]
          },
          {
            title: 'Xây dựng đội ngũ cán bộ, công chức',
            description: 'Xây dựng đội ngũ cán bộ, công chức có chất lượng cao.',
            points: [
              'Có bản lĩnh chính trị vững vàng, phẩm chất đạo đức trong sáng',
              'Trình độ chuyên môn cao',
              'Đánh giá và bổ nhiệm dựa vào bản lĩnh chính trị, đạo đức và hiệu quả công việc',
              'Có chính sách thu hút nhân tài'
            ]
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Huy động nhân dân tham gia giám sát',
      icon: Users,
      color: 'accent',
      content: {
        description: 'Phát huy vai trò của nhân dân trong công tác phòng, chống tham nhũng.',
        aspects: [
          {
            title: 'Nâng cao dân trí và ý thức pháp luật',
            description: 'Tăng cường giáo dục, nâng cao nhận thức của nhân dân.',
            points: [
              'Nâng cao dân trí, ý thức pháp luật và tinh thần đấu tranh của nhân dân',
              'Tạo điều kiện để nhân dân tham gia giám sát',
              'Bảo vệ người tố cáo tham nhũng'
            ]
          },
          {
            title: 'Ứng dụng công nghệ và cải cách hành chính',
            description: 'Sử dụng công nghệ để minh bạch hóa hoạt động công.',
            points: [
              'Minh bạch hóa quản lý công',
              'Đẩy mạnh chính phủ điện tử, chuyển đổi số',
              'Giảm tiếp xúc trực tiếp giữa cán bộ và người dân/doanh nghiệp',
              'Hạn chế tiêu cực thông qua công nghệ'
            ]
          },
          {
            title: 'Tăng cường đấu tranh phòng, chống tham nhũng',
            description: 'Đẩy mạnh cuộc đấu tranh phòng, chống tham nhũng, lãng phí, quan liêu.',
            points: [
              'Đấu tranh phòng, chống tham nhũng, lãng phí, quan liêu hách dịch, cửa quyền',
              'Thực hành tiết kiệm trong các cơ quan nhà nước',
              'Thực hành tiết kiệm trong đội ngũ cán bộ, công chức'
            ]
          }
        ]
      }
    }
  ];

  const [expandedAspects, setExpandedAspects] = useState<number[]>([]);

  const toggleAspect = (aspectIndex: number) => {
    setExpandedAspects(prev => 
      prev.includes(aspectIndex) 
        ? prev.filter(i => i !== aspectIndex)
        : [...prev, aspectIndex]
    );
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-gradient-primary',
          text: 'text-primary-600',
          bgLight: 'bg-primary-50',
          border: 'border-primary-200'
        };
      case 'secondary':
        return {
          bg: 'bg-gradient-secondary',
          text: 'text-secondary-600',
          bgLight: 'bg-secondary-50',
          border: 'border-secondary-200'
        };
      case 'accent':
        return {
          bg: 'bg-gradient-to-r from-accent-500 to-accent-600',
          text: 'text-accent-600',
          bgLight: 'bg-accent-50',
          border: 'border-accent-200'
        };
      default:
        return {
          bg: 'bg-gradient-primary',
          text: 'text-primary-600',
          bgLight: 'bg-primary-50',
          border: 'border-primary-200'
        };
    }
  };

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Giải pháp phòng chống tham nhũng
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Vận dụng tư tưởng Hồ Chí Minh vào công tác xây dựng Đảng và xây dựng nhà nước 
            trong bối cảnh chống tham nhũng hiện nay.
          </p>
        </motion.div>

        {/* Solution tabs */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {solutions.map((solution, index) => {
              const colors = getColorClasses(solution.color);
              return (
                <motion.button
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setActiveSolution(solution.id)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeSolution === solution.id
                      ? `${colors.bg} text-white shadow-lg`
                      : `bg-gray-100 text-gray-700 hover:bg-gray-200`
                  }`}
                >
                  <solution.icon className="w-5 h-5" />
                  <span className="hidden sm:block">{solution.title}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Solution content */}
          <motion.div
            key={activeSolution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-soft-lg"
          >
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 ${getColorClasses(solutions[activeSolution].color).bg} rounded-xl flex items-center justify-center`}>
                  <solutions[activeSolution].icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {solutions[activeSolution].title}
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {solutions[activeSolution].content.description}
              </p>
            </div>

            <div className="space-y-6">
              {solutions[activeSolution].content.aspects.map((aspect, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-6 shadow-soft border ${getColorClasses(solutions[activeSolution].color).border}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {aspect.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {aspect.description}
                      </p>
                      
                      {aspect.points.length > 0 && (
                        <motion.button
                          onClick={() => toggleAspect(index)}
                          className={`flex items-center space-x-2 ${getColorClasses(solutions[activeSolution].color).text} hover:opacity-80 font-medium transition-colors`}
                        >
                          <span>
                            {expandedAspects.includes(index) ? 'Ẩn chi tiết' : 'Xem chi tiết'}
                          </span>
                          {expandedAspects.includes(index) ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </motion.button>
                      )}
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedAspects.includes(index) ? 'auto' : 0,
                      opacity: expandedAspects.includes(index) ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {expandedAspects.includes(index) && aspect.points.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <ul className="space-y-3">
                          {aspect.points.map((point, pointIndex) => (
                            <motion.li
                              key={pointIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: pointIndex * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle className={`w-5 h-5 ${getColorClasses(solutions[activeSolution].color).text} mt-0.5 flex-shrink-0`} />
                              <span className="text-gray-600">{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Nguyên tắc cốt lõi</h3>
            <p className="text-xl opacity-90">
              "Đảng với dân như cá với nước, có dân là sống, thoát ly dân là chết"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Đảng trong sạch</h4>
              <p className="text-sm opacity-90">
                Xây dựng Đảng thật sự trong sạch, vững mạnh, xứng đáng là người cầm quyền
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Nhà nước của dân</h4>
              <p className="text-sm opacity-90">
                Nhà nước của dân, do dân, vì dân, mọi quyền lực thuộc về nhân dân
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Kiểm soát quyền lực</h4>
              <p className="text-sm opacity-90">
                Kiểm soát chặt chẽ quyền lực nhà nước để đảm bảo không bị lạm dụng
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;