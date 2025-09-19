import React, { useState } from 'react';
import { Typography, Card, Row, Col, Steps, List, Space, Tag, Button } from 'antd';
import {
  SafetyOutlined,
  BookOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  FlagOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

const SolutionsSection: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      id: 0,
      title: 'Tăng cường lãnh đạo của Đảng',
      icon: <SafetyOutlined className="text-2xl" />,
      color: 'red',
      content: {
        description: 'Tăng cường sự lãnh đạo của Đảng trong công tác phòng, chống tham nhũng.',
        points: [
          'Nâng cao vai trò lãnh đạo, chỉ đạo của các cấp ủy Đảng',
          'Phát huy vai trò nêu gương của cán bộ, đảng viên',
          'Tăng cường công tác kiểm tra, giám sát của Đảng'
        ],
        steps: [
          'Hoàn thiện cơ chế kiểm soát quyền lực',
          'Đổi mới phương thức lãnh đạo của Đảng',
          'Nâng cao hiệu quả công tác tự kiểm tra, tự giám sát'
        ]
      }
    },
    {
      id: 1,
      title: 'Hoàn thiện thể chế',
      icon: <BookOutlined className="text-2xl" />,
      color: 'blue',
      content: {
        description: 'Tiếp tục hoàn thiện thể chế về kinh tế - xã hội và phòng, chống tham nhũng.',
        points: [
          'Hoàn thiện chính sách, pháp luật về phòng, chống tham nhũng',
          'Khắc phục những sơ hở, bất cập trong cơ chế, chính sách',
          'Tăng cường tính minh bạch, trách nhiệm giải trình'
        ],
        steps: [
          'Rà soát, sửa đổi các văn bản quy phạm pháp luật',
          'Xây dựng cơ chế phòng ngừa tham nhũng',
          'Hoàn thiện cơ chế kiểm soát tài sản, thu nhập'
        ]
      }
    },
    {
      id: 2,
      title: 'Phát huy vai trò nhân dân',
      icon: <TeamOutlined className="text-2xl" />,
      color: 'gold',
      content: {
        description: 'Phát huy vai trò của nhân dân trong đấu tranh phòng, chống tham nhũng.',
        points: [
          'Tăng cường công tác giám sát của nhân dân',
          'Phát huy vai trò của báo chí, truyền thông',
          'Bảo vệ người tố cáo tham nhũng'
        ],
        steps: [
          'Xây dựng cơ chế phản ánh, tố cáo',
          'Tăng cường công khai, minh bạch',
          'Bảo đảm quyền tiếp cận thông tin'
        ]
      }
    }
  ];

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
              <FlagOutlined className="text-4xl text-red-600" />
            </div>
            <Title level={2} className="!mb-4">
              <span className="text-gradient">Giải pháp phòng chống tham nhũng</span>
            </Title>
            <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vận dụng tư tưởng Hồ Chí Minh vào công tác xây dựng Đảng và xây dựng nhà nước 
              trong bối cảnh chống tham nhũng hiện nay.
            </Paragraph>
          </Space>
        </motion.div>

        {/* Solutions Grid */}
        <Row gutter={[24, 24]} className="mb-16">
          {solutions.map((solution, index) => (
            <Col xs={24} md={8} key={solution.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  hoverable
                  className={`h-full cursor-pointer transition-shadow ${
                    activeSolution === solution.id ? 'shadow-2xl ring-2 ring-red-500' : 'shadow-lg'
                  }`}
                  onClick={() => setActiveSolution(solution.id)}
                >
                  <Space direction="vertical" size="middle" className="w-full">
                    <div className={`p-3 rounded-full bg-${solution.color}-50 inline-block`}>
                      {solution.icon}
                    </div>
                    <Title level={3} className="!mb-2 !text-xl">
                      {solution.title}
                    </Title>
                    <Paragraph type="secondary" className="!mb-0">
                      {solution.content.description}
                    </Paragraph>
                    <Tag color={solution.color}>Xem chi tiết</Tag>
                  </Space>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Active Solution Details */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
          <Row gutter={[32, 32]}>
            {/* Key Points */}
            <Col xs={24} md={12}>
              <Space direction="vertical" size="large" className="w-full">
                <Title level={4} className="flex items-center gap-2">
                  <CheckCircleOutlined className="text-red-500" />
                  Điểm chính
                </Title>
                <List
                  dataSource={solutions[activeSolution].content.points}
                  renderItem={(item, index) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <List.Item>
                        <Space>
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          <Text>{item}</Text>
                        </Space>
                      </List.Item>
                    </motion.div>
                  )}
                />
              </Space>
            </Col>

            {/* Implementation Steps */}
            <Col xs={24} md={12}>
              <Space direction="vertical" size="large" className="w-full">
                <Title level={4} className="flex items-center gap-2">
                  <ArrowRightOutlined className="text-red-500" />
                  Các bước thực hiện
                </Title>
                <Steps
                  direction="vertical"
                  current={-1}
                  items={solutions[activeSolution].content.steps.map(step => ({
                    title: step,
                    status: 'wait'
                  }))}
                />
              </Space>
            </Col>
          </Row>

          {/* Action Button */}
          <div className="text-center mt-8">
            <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
              Tìm hiểu thêm
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SolutionsSection;