import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, Users, Shield, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const EventsSection: React.FC = () => {

  const events = [
    {
      id: 0,
      title: 'Nghị quyết Trung ương 4 khóa XII (2016)',
      type: 'Nghị quyết',
      date: '2016',
      icon: FileText,
      color: 'primary',
      content: {
        description: 'Nghị quyết số 04-NQ/TW của Ban Chấp hành Trung ương khóa XII là một bước đột phá trong công tác xây dựng, chỉnh đốn Đảng.',
        keyPoints: [
          'Tập trung vào việc ngăn chặn, đẩy lùi sự suy thoái về tư tưởng chính trị, đạo đức, lối sống',
          'Chống các biểu hiện "tự diễn biến", "tự chuyển hóa" trong nội bộ',
          'Được xem là "cái gốc" của tham nhũng và tiêu cực',
          'Tạo nền tảng cho cuộc chiến chống tham nhũng quyết liệt'
        ],
        impact: 'Đánh dấu bước ngoặt quan trọng trong công tác xây dựng, chỉnh đốn Đảng, tạo tiền đề cho các hoạt động chống tham nhũng mạnh mẽ sau này.',
        documents: [
          'Nghị quyết số 04-NQ/TW ngày 30/10/2016',
          'Hướng dẫn thực hiện Nghị quyết 04-NQ/TW'
        ]
      }
    },
    {
      id: 1,
      title: 'Đại hội Đảng XIII (2021) và Kết luận 21',
      type: 'Đại hội & Kết luận',
      date: '2021',
      icon: Users,
      color: 'secondary',
      content: {
        description: 'Văn kiện Đại hội XIII tiếp tục khẳng định tầm quan trọng của công tác phòng, chống tham nhũng.',
        keyPoints: [
          'Xem phòng, chống tham nhũng là một trong những nhiệm vụ trọng tâm hàng đầu',
          'Kết luận số 21-KL/TW của Hội nghị Trung ương 4 khóa XIII',
          'Cụ thể hóa và tiếp tục đẩy mạnh tinh thần Nghị quyết Trung ương 4 khóa XII',
          'Đặt trọng tâm vào việc xây dựng, chỉnh đốn Đảng và hệ thống chính trị toàn diện'
        ],
        impact: 'Tạo động lực mạnh mẽ cho công cuộc chống tham nhũng, khẳng định quyết tâm của Đảng trong việc xây dựng hệ thống chính trị trong sạch.',
        documents: [
          'Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII',
          'Kết luận số 21-KL/TW ngày 25/10/2021'
        ]
      }
    },
    {
      id: 2,
      title: 'Chiến dịch "đốt lò"',
      type: 'Chiến dịch',
      date: '2016-2024',
      icon: Shield,
      color: 'accent',
      content: {
        description: 'Thuật ngữ dân gian gắn liền với công cuộc đấu tranh phòng, chống tham nhũng quyết liệt dưới sự chỉ đạo của cố Tổng Bí thư Nguyễn Phú Trọng.',
        keyPoints: [
          'Xử lý nhiều vụ án tham nhũng lớn, phức tạp',
          'Bao gồm cả những cán bộ cấp cao',
          'Không có "vùng cấm", không có "ngoại lệ"',
          'Củng cố niềm tin của nhân dân vào sự lãnh đạo của Đảng và Nhà nước'
        ],
        impact: 'Tạo ra làn sóng mạnh mẽ trong công tác chống tham nhũng, xử lý nhiều vụ án lớn, khôi phục niềm tin của nhân dân.',
        documents: [
          'Báo cáo tổng kết chiến dịch chống tham nhũng',
          'Danh sách các vụ án đã xử lý'
        ]
      }
    },
    {
      id: 3,
      title: 'Ban Chỉ đạo Trung ương về phòng, chống tham nhũng',
      type: 'Cơ quan chuyên trách',
      date: 'Thành lập và kiện toàn',
      icon: Shield,
      color: 'primary',
      content: {
        description: 'Được thành lập và kiện toàn, Ban Chỉ đạo Trung ương có vai trò quan trọng trong việc chỉ đạo, đôn đốc, kiểm tra, giám sát công tác phòng, chống tham nhũng.',
        keyPoints: [
          'Chỉ đạo, đôn đốc, kiểm tra, giám sát công tác phòng, chống tham nhũng trên toàn quốc',
          'Thể hiện sự lãnh đạo tập trung của Đảng trong cuộc chiến chống tham nhũng',
          'Phối hợp chặt chẽ giữa các cơ quan, tổ chức',
          'Tạo cơ chế thống nhất trong công tác chống tham nhũng'
        ],
        impact: 'Tạo ra cơ chế chỉ đạo thống nhất, hiệu quả trong công tác chống tham nhũng, đảm bảo sự phối hợp chặt chẽ giữa các cơ quan.',
        documents: [
          'Quyết định thành lập Ban Chỉ đạo',
          'Quy chế hoạt động của Ban Chỉ đạo'
        ]
      }
    }
  ];

  const [expandedEvents, setExpandedEvents] = useState<number[]>([]);

  const toggleEvent = (eventId: number) => {
    setExpandedEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
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
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sự kiện và văn kiện quan trọng
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Những sự kiện, văn kiện liên quan đến chủ đề tham nhũng và xây dựng Đảng trong sạch, vững mạnh.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
            
            <div className="space-y-12">
              {events.map((event, index) => {
                const colors = getColorClasses(event.color);
                const isExpanded = expandedEvents.includes(event.id);
                
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-start ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-6 w-4 h-4 ${colors.bg} rounded-full border-4 border-white shadow-lg z-10`}></div>
                    
                    {/* Content */}
                    <div className={`ml-16 ${index % 2 === 0 ? 'mr-0' : 'ml-0 mr-16'} flex-1`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`bg-white rounded-2xl p-6 shadow-soft-lg border ${colors.border} hover:shadow-xl transition-all duration-300 cursor-pointer`}
                        onClick={() => toggleEvent(event.id)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 ${colors.bgLight} rounded-xl flex items-center justify-center`}>
                              <event.icon className={`w-6 h-6 ${colors.text}`} />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-1">
                                {event.title}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{event.date}</span>
                                </span>
                                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                                  {event.type}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </motion.button>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4">
                          {event.content.description}
                        </p>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {isExpanded && (
                            <div className="space-y-6 pt-4 border-t border-gray-100">
                              {/* Key points */}
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Điểm nổi bật:</h4>
                                <ul className="space-y-2">
                                  {event.content.keyPoints.map((point, pointIndex) => (
                                    <motion.li
                                      key={pointIndex}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.2, delay: pointIndex * 0.1 }}
                                      className="flex items-start space-x-3"
                                    >
                                      <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 flex-shrink-0`}></div>
                                      <span className="text-gray-600">{point}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>

                              {/* Impact */}
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Tác động:</h4>
                                <p className="text-gray-600 leading-relaxed">
                                  {event.content.impact}
                                </p>
                              </div>

                              {/* Documents */}
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Tài liệu liên quan:</h4>
                                <div className="space-y-2">
                                  {event.content.documents.map((doc, docIndex) => (
                                    <motion.div
                                      key={docIndex}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.2, delay: docIndex * 0.1 }}
                                      className="flex items-center space-x-2 text-sm text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
                                    >
                                      <FileText className="w-4 h-4" />
                                      <span>{doc}</span>
                                      <ExternalLink className="w-3 h-3" />
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Tổng kết</h3>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Các sự kiện và văn kiện này thể hiện quyết tâm mạnh mẽ của Đảng và Nhà nước 
              trong công cuộc chống tham nhũng, xây dựng Đảng trong sạch, vững mạnh và 
              Nhà nước của dân, do dân, vì dân theo tư tưởng Hồ Chí Minh.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;