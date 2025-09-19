import React, { useState } from 'react';
import { Typography, Card, Row, Col, Timeline, Space, Tag, Button, Divider, List } from 'antd';
import {
  CalendarOutlined,
  FileTextOutlined,
  TeamOutlined,
  FlagOutlined,
  ArrowRightOutlined,
  HistoryOutlined,
  LinkOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text, Link } = Typography;

const EventsSection: React.FC = () => {
  const [expandedEvents, setExpandedEvents] = useState<number[]>([]);

  const events = [
    {
      id: 0,
      title: 'Nghị quyết Trung ương 4 khóa XII (2016)',
      type: 'Nghị quyết',
      date: '2016',
      icon: FileTextOutlined,
      color: 'red',
      content: {
        description: 'Nghị quyết số 04-NQ/TW của Ban Chấp hành Trung ương khóa XII là một bước đột phá trong công tác xây dựng, chỉnh đốn Đảng.',
        keyPoints: [
          'Tập trung vào việc ngăn chặn, đẩy lùi sự suy thoái về tư tưởng chính trị, đạo đức, lối sống',
          'Chống các biểu hiện "tự diễn biến", "tự chuyển hóa" trong nội bộ',
          'Được xem là "cái gốc" của tham nhũng và tiêu cực',
          'Tạo nền tảng cho cuộc chiến chống tham nhũng quyết liệt'
        ],
        documents: [
          'Nghị quyết số 04-NQ/TW ngày 30/10/2016',
          'Hướng dẫn thực hiện Nghị quyết 04-NQ/TW'
        ]
      }
    },
    {
      id: 1,
      title: 'Đại hội Đảng XIII (2021)',
      type: 'Đại hội',
      date: '2021',
      icon: TeamOutlined,
      color: 'blue',
      content: {
        description: 'Văn kiện Đại hội XIII tiếp tục khẳng định tầm quan trọng của công tác phòng, chống tham nhũng.',
        keyPoints: [
          'Xem phòng, chống tham nhũng là một trong những nhiệm vụ trọng tâm hàng đầu',
          'Kết luận số 21-KL/TW của Hội nghị Trung ương 4 khóa XIII',
          'Cụ thể hóa và tiếp tục đẩy mạnh tinh thần Nghị quyết Trung ương 4 khóa XII',
          'Đặt trọng tâm vào việc xây dựng, chỉnh đốn Đảng và hệ thống chính trị toàn diện'
        ],
        documents: [
          'Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII',
          'Kết luận số 21-KL/TW ngày 25/10/2021'
        ]
      }
    }
  ];

  const timelineItems = events.map((event, index) => ({
    color: event.color,
    dot: <event.icon className="text-lg" />,
    children: (
      <Card
        hoverable
        className="w-full shadow-lg hover:shadow-xl transition-shadow"
        bodyStyle={{ padding: 0 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Card Header */}
          <div className="p-6 border-b border-gray-100">
            <Space direction="vertical" size="small" className="w-full">
              <Space size="middle" className="w-full justify-between">
                <Tag color={event.color} icon={<CalendarOutlined />}>
                  {event.date}
                </Tag>
                <Tag color={event.color === 'red' ? 'orange' : 'cyan'}>
                  {event.type}
                </Tag>
              </Space>
              <Title level={4} className="!mb-2">
                {event.title}
              </Title>
              <Paragraph className="!mb-0 text-gray-600">
                {event.content.description}
              </Paragraph>
            </Space>
          </div>

          {/* Card Content */}
          <motion.div
            initial={false}
            animate={{
              height: expandedEvents.includes(event.id) ? 'auto' : 0,
              opacity: expandedEvents.includes(event.id) ? 1 : 0
            }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-gray-50">
              <Space direction="vertical" size="large" className="w-full">
                {/* Key Points */}
                <div>
                  <Title level={5} className="flex items-center gap-2 !mb-4">
                    <CheckCircleOutlined className="text-green-500" />
                    Điểm chính
                  </Title>
                  <List
                    dataSource={event.content.keyPoints}
                    renderItem={(point, pointIndex) => (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: pointIndex * 0.1 }}
                      >
                        <List.Item>
                          <Space>
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <Text>{point}</Text>
                          </Space>
                        </List.Item>
                      </motion.div>
                    )}
                  />
                </div>

                <Divider className="!my-4" />

                {/* Documents */}
                <div>
                  <Title level={5} className="flex items-center gap-2 !mb-4">
                    <FileTextOutlined className="text-blue-500" />
                    Văn bản liên quan
                  </Title>
                  <List
                    dataSource={event.content.documents}
                    renderItem={(doc, docIndex) => (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: docIndex * 0.1 }}
                      >
                        <List.Item>
                          <Link href="#" className="flex items-center gap-2">
                            <LinkOutlined />
                            <Text>{doc}</Text>
                          </Link>
                        </List.Item>
                      </motion.div>
                    )}
                  />
                </div>
              </Space>
            </div>
          </motion.div>

          {/* Card Footer */}
          <div className="p-4 flex justify-between items-center border-t border-gray-100">
            <Space>
              <ClockCircleOutlined className="text-gray-400" />
              <Text type="secondary">Cập nhật: 2 tháng trước</Text>
            </Space>
            <Button
              type="link"
              onClick={() => {
                setExpandedEvents(prev =>
                  prev.includes(event.id)
                    ? prev.filter(id => id !== event.id)
                    : [...prev, event.id]
                );
              }}
            >
              {expandedEvents.includes(event.id) ? 'Thu gọn' : 'Xem thêm'}
            </Button>
          </div>
        </motion.div>
      </Card>
    )
  }));

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Space direction="vertical" size="large" className="w-full">
            <div className="inline-block p-4 bg-white rounded-full shadow-lg">
              <HistoryOutlined className="text-4xl text-red-600" />
            </div>
            <Title level={2} className="!mb-4">
              <span className="text-gradient">Sự kiện và văn kiện quan trọng</span>
            </Title>
            <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
              Những sự kiện, văn kiện liên quan đến chủ đề tham nhũng và xây dựng Đảng trong sạch,
              vững mạnh.
            </Paragraph>
          </Space>
        </motion.div>

        {/* Timeline */}
        <Row justify="center">
          <Col xs={24} xl={20}>
            <Card className="shadow-xl">
              <Timeline
                mode="alternate"
                items={timelineItems}
              />
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Space direction="vertical" size="large" className="w-full">
            <Title level={3} className="!mb-4">
              Tìm hiểu thêm
            </Title>
            <Space size="middle">
              <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
                Xem tất cả sự kiện
              </Button>
              <Button size="large" icon={<FileTextOutlined />}>
                Tải về báo cáo
              </Button>
            </Space>
          </Space>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;