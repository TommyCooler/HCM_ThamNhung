import React from 'react';
import { Typography, Button, Row, Col, Statistic, Card, Space } from 'antd';
import {
  FlagOutlined,
  TeamOutlined,
  AlertOutlined,
  DollarOutlined,
  ArrowDownOutlined,
  SafetyOutlined,
  AimOutlined,
  FileProtectOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  const stats = [
    {
      title: 'Vụ án điều tra',
      value: 1500,
      prefix: '+',
      icon: <FileProtectOutlined className="text-2xl text-blue-500" />,
      description: 'Số vụ án tham nhũng đã và đang điều tra'
    },
    {
      title: 'Thu hồi tài sản',
      value: 1000,
      suffix: ' tỷ',
      icon: <DollarOutlined className="text-2xl text-green-500" />,
      description: 'Tổng giá trị tài sản đã thu hồi từ tham nhũng'
    },
    {
      title: 'Cán bộ xử lý',
      value: 2500,
      prefix: '+',
      icon: <TeamOutlined className="text-2xl text-orange-500" />,
      description: 'Số cán bộ, đảng viên bị xử lý kỷ luật'
    }
  ];

  const features = [
    {
      icon: <SafetyOutlined className="text-2xl" />,
      title: 'Đảng trong sạch',
      description: 'Xây dựng Đảng trong sạch, vững mạnh là nhiệm vụ then chốt'
    },
    {
      icon: <AimOutlined className="text-2xl" />,
      title: 'Không vùng cấm',
      description: 'Kiên quyết xử lý tham nhũng không có vùng cấm, không có ngoại lệ'
    },
    {
      icon: <AlertOutlined className="text-2xl" />,
      title: 'Phòng ngừa',
      description: 'Chú trọng công tác phòng ngừa, ngăn chặn từ sớm, từ xa'
    }
  ];

  const scrollToContent = () => {
    const element = document.querySelector('#theory');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-gradient">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <Row gutter={[32, 48]} className="items-center mb-16">
          {/* Left Column - Text Content */}
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Space direction="vertical" size="large" className="w-full">
                {/* Flag Icon */}
                <div className="inline-block p-4 bg-white rounded-full shadow-lg">
                  <FlagOutlined className="text-4xl text-red-600" />
                </div>

                {/* Headings */}
                <div>
                  <Title level={1} className="!text-5xl !mb-6">
                    <span className="text-gradient">Tham nhũng là từ trong Đảng mà ra</span>
                  </Title>
                  <Title level={2} className="!text-2xl !font-normal !text-gray-700 !mb-8">
                    Thách thức trong việc xây dựng Đảng và Nhà nước
                  </Title>
                  <Paragraph className="text-lg text-gray-600">
                    Phân tích tư tưởng Hồ Chí Minh về xây dựng Đảng trong sạch, vững mạnh 
                    và Nhà nước của dân, do dân, vì dân trong bối cảnh chống tham nhũng hiện nay.
                  </Paragraph>
                </div>

                {/* CTA Buttons */}
                <Space size="middle">
                  <Button
                    type="primary"
                    size="large"
                    onClick={scrollToContent}
                    icon={<ArrowDownOutlined />}
                    className="shadow-lg"
                  >
                    Khám phá chi tiết
                  </Button>
                  <Button size="large">Tìm hiểu thêm</Button>
                </Space>
              </Space>
            </motion.div>
          </Col>

          {/* Right Column - Stats */}
          <Col xs={24} lg={12}>
            <Row gutter={[16, 16]}>
              {stats.map((stat, index) => (
                <Col xs={24} md={8} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card hoverable className="text-center h-full shadow-card shadow-card-hover">
                      <Space direction="vertical" size="middle" className="w-full">
                        {stat.icon}
                        <Statistic
                          title={stat.title}
                          value={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                        <Paragraph type="secondary" className="!mb-0">
                          {stat.description}
                        </Paragraph>
                      </Space>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Features */}
        <Row gutter={[32, 32]} className="mt-24">
          {features.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Card hoverable className="text-center h-full shadow-card shadow-card-hover">
                  <Space direction="vertical" size="middle" className="w-full">
                    {feature.icon}
                    <Title level={3} className="!mb-2 !text-xl">
                      {feature.title}
                    </Title>
                    <Paragraph type="secondary" className="!mb-0">
                      {feature.description}
                    </Paragraph>
                  </Space>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center cursor-pointer"
        onClick={scrollToContent}
      >
        <Paragraph type="secondary">Cuộn xuống để xem thêm</Paragraph>
        <ArrowDownOutlined className="text-xl text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;