import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer, Space, Typography, Badge, Avatar } from 'antd';
import {
  HomeOutlined,
  BookOutlined,
  AlertOutlined,
  SolutionOutlined,
  HistoryOutlined,
  CheckCircleOutlined,
  MenuOutlined,
  BellOutlined,
  SearchOutlined,
  UserOutlined,
  FlagOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { key: 'home', label: 'Trang chủ', icon: <HomeOutlined />, href: '#home' },
    { key: 'theory', label: 'Tư tưởng HCM', icon: <BookOutlined />, href: '#theory' },
    { key: 'reality', label: 'Thực trạng', icon: <AlertOutlined />, href: '#reality' },
    { key: 'solutions', label: 'Giải pháp', icon: <SolutionOutlined />, href: '#solutions' },
    { key: 'events', label: 'Sự kiện', icon: <HistoryOutlined />, href: '#events' },
    { key: 'conclusion', label: 'Kết luận', icon: <CheckCircleOutlined />, href: '#conclusion' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <AntHeader
      className={`fixed w-full z-50 px-0 transition-all duration-500 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'white',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        height: 'auto',
        padding: '0.5rem 0'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <div className="w-10 h-10 bg-gradient rounded-lg shadow-lg flex items-center justify-center">
                <FlagOutlined className="text-white text-xl" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 border border-red-200 rounded-lg opacity-50"
              />
            </motion.div>
            <div className="hidden sm:block">
              <Text strong className="text-lg">
                <span className="text-gradient">Chống Tham Nhũng</span>
              </Text>
              <Text className="block text-sm text-gray-500">
                Xây dựng Đảng trong sạch
              </Text>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Menu
              mode="horizontal"
              className="border-0 bg-transparent"
              items={navigationItems.map(item => ({
                key: item.key,
                label: (
                  <a onClick={() => scrollToSection(item.href)}>
                    <Space>
                      {item.icon}
                      {item.label}
                    </Space>
                  </a>
                ),
              }))}
            />
          </div>

          {/* Actions */}
          <Space size="middle" className="flex items-center">
            {/* Search */}
            <Button
              type="text"
              icon={<SearchOutlined />}
              onClick={() => setIsSearchVisible(!isSearchVisible)}
              className="flex items-center justify-center w-10 h-10"
            />

            {/* Notifications */}
            <Badge count={5} size="small">
              <Button
                type="text"
                icon={<BellOutlined />}
                className="flex items-center justify-center w-10 h-10"
              />
            </Badge>

            {/* Settings */}
            <Button
              type="text"
              icon={<SettingOutlined />}
              className="hidden sm:flex items-center justify-center w-10 h-10"
            />

            {/* User Avatar */}
            <Avatar
              icon={<UserOutlined />}
              className="bg-gradient cursor-pointer hidden sm:flex"
            />

            {/* Mobile Menu Button */}
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10"
            />
          </Space>
        </div>

        {/* Search Bar - Expandable */}
        <motion.div
          initial={false}
          animate={{ height: isSearchVisible ? 'auto' : 0, opacity: isSearchVisible ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="py-3">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation Drawer */}
      <Drawer
        title={
          <Space>
            <Avatar icon={<UserOutlined />} className="bg-gradient" />
            <div>
              <Text strong>Menu chính</Text>
              <Text className="block text-sm text-gray-500">Điều hướng</Text>
            </div>
          </Space>
        }
        placement="right"
        onClose={() => setIsMobileMenuOpen(false)}
        open={isMobileMenuOpen}
        width={300}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline"
          className="border-0"
          items={navigationItems.map(item => ({
            key: item.key,
            icon: item.icon,
            label: (
              <a onClick={() => scrollToSection(item.href)}>
                {item.label}
              </a>
            ),
          }))}
        />

        {/* <Divider /> */}

        <div className="px-4 py-2">
          <Space direction="vertical" className="w-full">
            <Button block icon={<SettingOutlined />}>
              Cài đặt
            </Button>
            <Button block icon={<UserOutlined />} type="primary">
              Đăng nhập
            </Button>
          </Space>
        </div>
      </Drawer>
    </AntHeader>
  );
};

export default Header;