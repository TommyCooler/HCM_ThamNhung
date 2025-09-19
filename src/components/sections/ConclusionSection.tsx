import React from 'react';
import { Typography, Card, Row, Col, Space, Button, List, Tag, Divider } from 'antd';
import {
  SafetyOutlined,
  TeamOutlined,
  HeartOutlined,
  FlagOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  WarningOutlined,
  ThunderboltOutlined,
  StarOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

const ConclusionSection: React.FC = () => {
  const keyPoints = [
    {
      icon: <SafetyOutlined className="text-red-500" />,
      title: 'Cuộc chiến sinh tử',
      description: 'Phòng, chống tham nhũng không chỉ là nhiệm vụ cấp bách mà là cuộc chiến sinh tử, mang ý nghĩa chiến lược lâu dài.',
      tags: ['Chiến lược', 'Cấp bách', 'Lâu dài']
    },
    {
      icon: <TeamOutlined className="text-blue-500" />,
      title: 'Trách nhiệm toàn dân',
      description: 'Đấu tranh chống tham nhũng là trách nhiệm của toàn Đảng, toàn dân, của cả hệ thống chính trị.',
      tags: ['Toàn dân', 'Hệ thống', 'Đồng bộ']
    },
    {
      icon: <HeartOutlined className="text-pink-500" />,
      title: 'Niềm tin nhân dân',
      description: 'Củng cố niềm tin của nhân dân vào sự lãnh đạo của Đảng và quản lý của Nhà nước.',
      tags: ['Niềm tin', 'Lãnh đạo', 'Quản lý']
    }
  ];

  const responsibilities = [
    {
      icon: <WarningOutlined className="text-yellow-500" />,
      title: 'Tăng cường giám sát',
      description: 'Phát huy vai trò giám sát của nhân dân và các cơ quan dân cử.',
      action: 'Thực hiện ngay'
    },
    {
      icon: <ThunderboltOutlined className="text-purple-500" />,
      title: 'Xử lý nghiêm minh',
      description: 'Kiên quyết xử lý nghiêm minh các vụ việc tham nhũng, không có vùng cấm.',
      action: 'Ưu tiên cao'
    },
    {
      icon: <StarOutlined className="text-orange-500" />,
      title: 'Hoàn thiện thể chế',
      description: 'Tiếp tục hoàn thiện thể chế về phòng, chống tham nhũng.',
      action: 'Liên tục'
    }
  ];

  return (
    <section className="py-20 bg-gradient">
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
              <FlagOutlined className="text-4xl text-red-600" />
            </div>
            <Title level={2} className="!text-white !mb-4">
              Kết luận và kiến nghị
            </Title>
            <Paragraph className="!text-white/90 text-lg max-w-3xl mx-auto">
              Tổng kết và khẳng định tầm quan trọng của công cuộc chống tham nhũng 
              trong việc xây dựng Đảng và Nhà nước theo tư tưởng Hồ Chí Minh.
            </Paragraph>
          </Space>
        </motion.div>

        {/* Key Points */}
        <Row gutter={[24, 24]} className="mb-16">
          {keyPoints.map((point, index) => (
            <Col xs={24} md={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hoverable className="h-full shadow-card shadow-card-hover">
                  <Space direction="vertical" size="middle" className="w-full">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4">
                        {point.icon}
                      </div>
                      <Title level={3} className="!mb-2">
                        {point.title}
                      </Title>
                    </div>
                    <Paragraph className="text-gray-600 text-center">
                      {point.description}
                    </Paragraph>
                    <div className="flex flex-wrap justify-center gap-2">
                      {point.tags.map((tag, tagIndex) => (
                        <Tag key={tagIndex} color="blue">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </Space>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Responsibilities */}
        <Row gutter={[32, 32]} className="mb-16">
          <Col xs={24} lg={16}>
            <Card className="shadow-xl h-full">
              <Title level={3} className="!mb-8 flex items-center gap-2">
                <CheckCircleOutlined className="text-green-500" />
                Trách nhiệm và giải pháp
              </Title>
              <List
                dataSource={responsibilities}
                renderItem={(item, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <List.Item>
                      <Space direction="vertical" size="middle" className="w-full">
                        <Space size="middle">
                          {item.icon}
                          <Text strong>{item.title}</Text>
                          <Tag color="red">{item.action}</Tag>
                        </Space>
                        <Paragraph className="!mb-0 text-gray-600">
                          {item.description}
                        </Paragraph>
                      </Space>
                    </List.Item>
                  </motion.div>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card className="shadow-xl h-full bg-gradient text-white">
              <Space direction="vertical" size="large" className="w-full">
                <Title level={3} className="!text-white !mb-0">
                  Hành động ngay
                </Title>
                <Divider className="!bg-white/20" />
                <Paragraph className="!text-white/90">
                  Mỗi cán bộ, đảng viên và người dân cần:
                </Paragraph>
                <List
                  dataSource={[
                    'Nâng cao cảnh giác với tham nhũng',
                    'Tích cực tham gia phát hiện, tố cáo',
                    'Gương mẫu thực hiện các quy định',
                    'Tuyên truyền, vận động người khác'
                  ]}
                  renderItem={(item) => (
                    <List.Item className="!border-white/20">
                      <Space>
                        <ArrowRightOutlined />
                        <Text className="!text-white">{item}</Text>
                      </Space>
                    </List.Item>
                  )}
                />
                <Button
                  type="default"
                  size="large"
                  ghost
                  icon={<ArrowRightOutlined />}
                  className="mt-4"
                >
                  Tìm hiểu thêm
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="text-center shadow-2xl bg-white/95 backdrop-blur-sm">
            <Space direction="vertical" size="large" className="w-full">
              <Title level={2} className="!mb-0">
                Hãy chung tay đấu tranh
              </Title>
              <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mỗi người dân là một chiến sĩ trong cuộc chiến chống tham nhũng. 
                Hãy cùng nhau xây dựng một Đảng trong sạch, vững mạnh và một đất nước phát triển.
              </Paragraph>
              <Space size="middle">
                <Button type="primary" size="large" icon={<TeamOutlined />}>
                  Tham gia ngay
                </Button>
                <Button size="large" icon={<ArrowRightOutlined />}>
                  Tìm hiểu thêm
                </Button>
              </Space>
            </Space>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ConclusionSection;