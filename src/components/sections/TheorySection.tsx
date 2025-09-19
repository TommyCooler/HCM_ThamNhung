import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Scale, ChevronDown, ChevronUp } from 'lucide-react';

const TheorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: 'Nhà nước trong sạch, vững mạnh',
      icon: Shield,
      content: {
        title: 'Kiểm soát quyền lực nhà nước',
        description: 'Để bảo đảm tất cả mọi quyền lực thuộc về nhân dân, cần kiểm soát quyền lực nhà nước.',
        points: [
          {
            title: 'Kiểm soát từ Đảng',
            description: 'Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Nhà nước và xã hội, do đó có quyền và trách nhiệm kiểm tra, giám sát công việc của các cơ quan nhà nước và cán bộ.',
            details: [
              'Kiểm tra phải có hệ thống và do những người có uy tín thực hiện',
              'Thực hiện kiểm soát cả từ trên xuống và từ dưới lên'
            ]
          },
          {
            title: 'Phát huy vai trò kiểm soát quyền lực của nhân dân',
            description: 'Nhân dân là chủ thể tối cao của quyền lực nhà nước, nên có quyền kiểm soát quyền lực đó.',
            details: [
              'Nếu không có sự giúp sức của nhân dân, Đảng không thể làm được việc gì',
              'Các công việc phải "dựa hẳn vào quần chúng"',
              'Hoan nghênh quần chúng đôn đốc và kiểm tra'
            ]
          },
          {
            title: 'Kiểm soát nội bộ Nhà nước',
            description: 'Ngay trong Hiến pháp năm 1946, Hồ Chí Minh đã đề cập đến các hình thức kiểm soát bên trong Nhà nước.',
            details: [
              'Nghị viện nhân dân có quyền "Kiểm soát và phê bình Chính phủ"',
              '"Bộ trưởng nào không được Nghị viện tín nhiệm thì phải từ chức"'
            ]
          }
        ]
      }
    },
    {
      id: 1,
      title: 'Phòng, chống tiêu cực',
      icon: Scale,
      content: {
        title: 'Các tiêu cực cần phòng chống',
        description: 'Hồ Chí Minh xác định một số tiêu cực cần phải đề phòng, khắc phục và để đảm bảo sự trong sạch của chính quyền.',
        points: [
          {
            title: 'Đặc quyền, đặc lợi',
            description: 'Là hành vi lợi dụng chức quyền để hách dịch, cửa quyền với dân, hoặc vơ vét tiền của cho cá nhân.',
            details: []
          },
          {
            title: 'Tham ô, lãng phí, quan liêu',
            description: 'Người coi đây là "giặc nội xâm", "giặc ở trong lòng" nguy hiểm hơn cả giặc ngoại xâm.',
            details: [
              'Tham ô: "lấy của công dùng vào việc tư, quên cả thanh liêm, đạo đức"',
              'Lãng phí: bao gồm lãng phí sức lao động, thời gian và tiền của',
              'Quan liêu: nguồn gốc của tham ô, lãng phí, làm cho cán bộ xa rời thực tế'
            ]
          },
          {
            title: '"Tư túng," "chia rẽ," "kiêu ngạo"',
            description: 'Những căn bệnh này gây mất đoàn kết, làm suy yếu bộ máy, gây rối cho công tác.',
            details: [
              'Tư túng: kéo bè, kéo cánh, đẩy người tài đức ra ngoài',
              'Chia rẽ: bênh vực lớp này, chống lại lớp khác',
              'Kiêu ngạo: tưởng mình là thần thánh, cử chỉ "quan cách mạng"'
            ]
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Biện pháp phòng chống',
      icon: Users,
      content: {
        title: 'Các biện pháp phòng, chống tiêu cực',
        description: 'Hồ Chí Minh đưa ra nhiều biện pháp để phòng, chống tiêu cực trong bộ máy nhà nước.',
        points: [
          {
            title: 'Nâng cao trình độ dân chủ trong xã hội',
            description: 'Tạo điều kiện để nhân dân tham gia quản lý nhà nước và xã hội.',
            details: []
          },
          {
            title: 'Pháp luật và kỷ luật nghiêm minh',
            description: 'Pháp luật của Nhà nước, kỷ luật của Đảng phải nghiêm minh.',
            details: []
          },
          {
            title: 'Phạt nghiêm minh và giáo dục đạo đức',
            description: 'Phạt nghiêm minh, nghiêm khắc, đúng người đúng tội là cần thiết và coi trọng giáo dục đạo đức.',
            details: [
              'Lấy giáo dục, cảm hóa làm chủ yếu',
              'Cán bộ phải đi trước làm gương'
            ]
          },
          {
            title: 'Huy động sức mạnh yêu nước',
            description: 'Huy động sức mạnh của chủ nghĩa yêu nước vào cuộc chiến chống lại tiêu cực.',
            details: []
          }
        ]
      }
    }
  ];

  const [expandedPoints, setExpandedPoints] = useState<number[]>([]);

  const togglePoint = (index: number) => {
    setExpandedPoints(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="theory" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tư tưởng Hồ Chí Minh về{' '}
            <span className="text-gradient">Đảng và Nhà nước</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Phân tích sâu sắc tư tưởng của Chủ tịch Hồ Chí Minh về xây dựng Đảng trong sạch, 
            vững mạnh và Nhà nước của dân, do dân, vì dân trong bối cảnh chống tham nhũng hiện nay.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="hidden sm:block">{tab.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-soft-lg"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {tabs[activeTab].content.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {tabs[activeTab].content.description}
              </p>
            </div>

            <div className="space-y-6">
              {tabs[activeTab].content.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-soft border border-gray-100"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {point.description}
                      </p>
                      
                      {point.details.length > 0 && (
                        <motion.button
                          onClick={() => togglePoint(index)}
                          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                        >
                          <span>
                            {expandedPoints.includes(index) ? 'Ẩn chi tiết' : 'Xem chi tiết'}
                          </span>
                          {expandedPoints.includes(index) ? (
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
                      height: expandedPoints.includes(index) ? 'auto' : 0,
                      opacity: expandedPoints.includes(index) ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {expandedPoints.includes(index) && point.details.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <ul className="space-y-2">
                          {point.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600">{detail}</span>
                            </li>
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
      </div>
    </section>
  );
};

export default TheorySection;