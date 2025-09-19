import React from 'react';
import { Layout, Typography, Row, Col, Space, Button, Divider, List } from 'antd';
import {
  GithubOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  ArrowUpOutlined,
  FlagOutlined,
  HeartOutlined,
  CopyrightOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Trang chủ', href: '#home' },
    { label: 'Tư tưởng HCM', href: '#theory' },
    { label: 'Thực trạng', href: '#reality' },
    { label: 'Giải pháp', href: '#solutions' },
    { label: 'Sự kiện', href: '#events' },
    { label: 'Kết luận', href: '#conclusion' }
  ];

  const resources = [
    'Văn kiện Đảng',
    'Tài liệu tham khảo',
    'Báo cáo nghiên cứu',
    'Thống kê số liệu'
  ];

  const principles = [
    'Đảng trong sạch, vững mạnh',
    'Nhà nước của dân, do dân, vì dân',
    'Kiểm soát quyền lực',
    'Phòng chống tham nhũng'
  ];

  const socialLinks = [
    { icon: <GithubOutlined />, href: '#' },
    { icon: <FacebookOutlined />, href: '#' },
    { icon: <TwitterOutlined />, href: '#' },
    { icon: <LinkedinOutlined />, href: '#' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AntFooter className="bg-gradient pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <Row gutter={[48, 32]} className="mb-12">
          {/* Brand Column */}
          <Col xs={24} md={8}>
            <Space direction="vertical" size="large" className="w-full">
              <Space size="middle">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <FlagOutlined className="text-2xl text-red-600" />
                </div>
                <div>
                  <Title level={4} className="!text-white !mb-0">
                    Chống Tham Nhũng
                  </Title>
                  <Text className="text-white/80">
                    Xây dựng Đảng trong sạch
                  </Text>
                </div>
              </Space>
              <Text className="text-white/80">
                Website thuyết trình về chủ đề "Tham nhũng là từ trong Đảng mà ra" - 
                Thách thức trong việc xây dựng Đảng và Nhà nước hiện nay.
              </Text>
              <Space wrap>
                {socialLinks.map((link, index) => (
                  <Link key={index} href={link.href}>
                    <Button
                      type="text"
                      icon={link.icon}
                      className="text-white hover:text-white/80"
                    />
                  </Link>
                ))}
              </Space>
            </Space>
          </Col>

          {/* Quick Links */}
          <Col xs={24} md={8}>
            <Title level={4} className="!text-white !mb-6">
              Điều hướng
            </Title>
            <Row gutter={[16, 16]}>
              {quickLinks.map((link, index) => (
                <Col span={12} key={index}>
                  <Link href={link.href} className="text-white/80 hover:text-white">
                    {link.label}
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Resources */}
          <Col xs={24} md={8}>
            <Title level={4} className="!text-white !mb-6">
              Tài nguyên
            </Title>
            <List
              dataSource={resources}
              renderItem={(item) => (
                <List.Item className="!border-white/10">
                  <Text className="text-white/80">{item}</Text>
                </List.Item>
              )}
            />
          </Col>
        </Row>

        {/* Principles */}
        <div className="mb-12">
          <Divider className="!border-white/10" />
          <Row gutter={[16, 16]} justify="center" className="text-center">
            {principles.map((principle, index) => (
              <Col key={index}>
                <Space>
                  <HeartOutlined className="text-red-300" />
                  <Text className="text-white/90">{principle}</Text>
                </Space>
              </Col>
            ))}
          </Row>
          <Divider className="!border-white/10" />
        </div>

        {/* Bottom Bar */}
        <Row justify="space-between" align="middle">
          <Col>
            <Space>
              <CopyrightOutlined />
              <Text className="text-white/80">
                2025 Chống Tham Nhũng. All rights reserved.
              </Text>
            </Space>
          </Col>
          <Col>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                type="text"
                icon={<ArrowUpOutlined />}
                onClick={scrollToTop}
                className="text-white hover:text-white/80"
              >
                Về đầu trang
              </Button>
            </motion.div>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer;