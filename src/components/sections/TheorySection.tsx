import React from 'react';
import { Typography, Card, Row, Col, Tabs, List, Space, Tag, Divider } from 'antd';
import {
  SafetyOutlined,
  TeamOutlined,
  ControlOutlined,
  FlagOutlined,
  CheckCircleOutlined,
  BulbOutlined,
  AuditOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

const TheorySection: React.FC = () => {
  const theories = [
    {
      key: '1',
      label: 'Nhà nước trong sạch',
      icon: <SafetyOutlined />,
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
          }
        ]
      }
    },
    {
      key: '2',
      label: 'Phòng chống tiêu cực',
      icon: <ControlOutlined />,
      content: {
        title: 'Các biện pháp phòng chống',
        description: 'Tập trung vào các biện pháp phòng ngừa và đấu tranh chống tiêu cực.',
        points: [
          {
            title: 'Phòng ngừa từ gốc',
            description: 'Tập trung vào việc xây dựng cơ chế phòng ngừa từ sớm, từ xa.',
            details: [
              'Hoàn thiện cơ chế, chính sách',
              'Tăng cường công tác giáo dục, đào tạo',
              'Xây dựng văn hóa liêm chính'
            ]
          },
          {
            title: 'Đấu tranh không khoan nhượng',
            description: 'Kiên quyết đấu tranh chống mọi biểu hiện tiêu cực.',
            details: [
              'Xử lý nghiêm minh mọi hành vi tiêu cực',
              'Không có vùng cấm, không có ngoại lệ',
              'Phát huy vai trò của truyền thông'
            ]
          }
        ]
      }
    },
    {
      key: '3',
      label: 'Vai trò của nhân dân',
      icon: <TeamOutlined />,
      content: {
        title: 'Phát huy sức mạnh nhân dân',
        description: 'Nhân dân là chủ thể của công cuộc đấu tranh chống tham nhũng, tiêu cực.',
        points: [
          {
            title: 'Giám sát từ nhân dân',
            description: 'Tăng cường vai trò giám sát của nhân dân đối với hoạt động của Đảng và Nhà nước.',
            details: [
              'Lắng nghe ý kiến của nhân dân',
              'Phát huy dân chủ cơ sở',
              'Bảo vệ người tố cáo'
            ]
          },
          {
            title: 'Phản biện xã hội',
            description: 'Phát huy vai trò phản biện của các tổ chức xã hội và người dân.',
            details: [
              'Tổ chức đối thoại với nhân dân',
              'Tiếp thu ý kiến đóng góp',
              'Công khai, minh bạch thông tin'
            ]
          }
        ]
      }
    }
  ];

  const renderTheoryContent = (content: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Space direction="vertical" size="large" className="w-full">
        <Card className="shadow-card">
          <Space direction="vertical" size="middle" className="w-full">
            <Title level={3}>{content.title}</Title>
            <Paragraph className="text-lg">{content.description}</Paragraph>
          </Space>
        </Card>

        {content.points.map((point: any, index: number) => (
          <Card key={index} className="shadow-card">
            <Space direction="vertical" size="middle" className="w-full">
              <div className="flex items-center gap-3">
                <BulbOutlined className="text-2xl text-yellow-500" />
                <Title level={4} className="!mb-0">{point.title}</Title>
              </div>
              <Paragraph>{point.description}</Paragraph>
              <Divider />
              <List
                dataSource={point.details}
                renderItem={(detail: string, detailIndex: number) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: detailIndex * 0.1 }}
                  >
                    <List.Item>
                      <Space>
                        <CheckCircleOutlined className="text-green-500" />
                        <Text>{detail}</Text>
                      </Space>
                    </List.Item>
                  </motion.div>
                )}
              />
            </Space>
          </Card>
        ))}
      </Space>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-white to-red-50">
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
              <span className="text-gradient">Tư tưởng Hồ Chí Minh</span>
            </Title>
            <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
              Phân tích sâu sắc tư tưởng của Chủ tịch Hồ Chí Minh về xây dựng Đảng trong sạch,
              vững mạnh và Nhà nước của dân, do dân, vì dân.
            </Paragraph>
          </Space>
        </motion.div>

        {/* Theory Content */}
        <Row justify="center">
          <Col xs={24} xl={20}>
            <Card className="shadow-xl">
              <Tabs
                defaultActiveKey="1"
                items={theories.map(theory => ({
                  key: theory.key,
                  label: (
                    <Space>
                      {theory.icon}
                      {theory.label}
                    </Space>
                  ),
                  children: renderTheoryContent(theory.content),
                }))}
              />
            </Card>
          </Col>
        </Row>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient text-white shadow-xl">
            <Space direction="vertical" size="middle" className="w-full text-center">
              <AuditOutlined className="text-4xl" />
              <Title level={3} className="!text-white !mb-0">
                Kết luận quan trọng
              </Title>
              <Paragraph className="!text-white/90 text-lg">
                Tư tưởng Hồ Chí Minh về xây dựng Đảng và Nhà nước trong sạch, vững mạnh 
                là kim chỉ nam cho công cuộc đấu tranh phòng, chống tham nhũng hiện nay.
              </Paragraph>
              <div className="flex flex-wrap justify-center gap-3">
                <Tag color="orange">Đảng trong sạch</Tag>
                <Tag color="green">Nhà nước vững mạnh</Tag>
                <Tag color="blue">Quyền lực nhân dân</Tag>
                <Tag color="purple">Đấu tranh tham nhũng</Tag>
              </div>
            </Space>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TheorySection;