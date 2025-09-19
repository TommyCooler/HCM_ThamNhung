import React from 'react';
import { Typography, Card, Row, Col, Statistic, Timeline, Table, Tag, Space, Progress, Button } from 'antd';
import {
  AlertOutlined,
  DollarOutlined,
  RiseOutlined,
  TeamOutlined,
  FileTextOutlined,
  ExclamationCircleOutlined,
  ArrowUpOutlined,
  FlagOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

const RealitySection: React.FC = () => {
  // Dữ liệu thống kê
  const statistics = [
    {
      title: 'Tổng số vụ án',
      value: 3467,
      prefix: <AlertOutlined />,
      valueStyle: { color: '#cf1322' },
      description: 'Tăng 23% so với năm trước'
    },
    {
      title: 'Thiệt hại kinh tế',
      value: 1234.5,
      prefix: <DollarOutlined />,
      suffix: 'tỷ',
      valueStyle: { color: '#096dd9' },
      description: 'Đã thu hồi 60%'
    },
    {
      title: 'Cán bộ liên quan',
      value: 5678,
      prefix: <TeamOutlined />,
      valueStyle: { color: '#08979c' },
      description: 'Từ cấp phó phòng trở lên'
    },
    {
      title: 'Tăng trưởng số vụ',
      value: 23.4,
      prefix: <RiseOutlined />,
      suffix: '%',
      valueStyle: { color: '#d48806' },
      description: 'So với cùng kỳ năm trước'
    }
  ];

  // Dữ liệu các vụ án điển hình
  const cases = [
    {
      key: '1',
      name: 'Vụ án Việt Á',
      type: 'Y tế',
      amount: '4000 tỷ',
      status: 'Đang xét xử',
      severity: 'Đặc biệt nghiêm trọng'
    },
    {
      key: '2',
      name: 'Vụ án FLC',
      type: 'Chứng khoán',
      amount: '1500 tỷ',
      status: 'Đã kết án',
      severity: 'Rất nghiêm trọng'
    },
    {
      key: '3',
      name: 'Vụ án AIC',
      type: 'Y tế',
      amount: '2500 tỷ',
      status: 'Đang điều tra',
      severity: 'Đặc biệt nghiêm trọng'
    }
  ];

  // Timeline các sự kiện
  const timelineItems = [
    {
      color: 'red',
      children: (
        <>
          <Text strong>Khởi tố vụ án Việt Á</Text>
          <br />
          <Text type="secondary">12/2021 - Phát hiện sai phạm trong việc nâng khống giá kit test</Text>
        </>
      )
    },
    {
      color: 'blue',
      children: (
        <>
          <Text strong>Mở rộng điều tra vụ FLC</Text>
          <br />
          <Text type="secondary">03/2022 - Phát hiện thêm nhiều sai phạm trong lĩnh vực chứng khoán</Text>
        </>
      )
    },
    {
      color: 'green',
      children: (
        <>
          <Text strong>Kết án vụ án AIC</Text>
          <br />
          <Text type="secondary">06/2022 - Tuyên án các bị cáo trong vụ án tham nhũng tại AIC</Text>
        </>
      )
    }
  ];

  // Columns cho bảng vụ án
  const columns = [
    {
      title: 'Tên vụ án',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <Text strong>{text}</Text>
    },
    {
      title: 'Lĩnh vực',
      dataIndex: 'type',
      key: 'type',
      render: (text: string) => <Tag color="blue">{text}</Tag>
    },
    {
      title: 'Thiệt hại',
      dataIndex: 'amount',
      key: 'amount',
      render: (text: string) => (
        <Text type="danger">
          <DollarOutlined /> {text}
        </Text>
      )
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (text: string) => {
        const color = text === 'Đã kết án' ? 'success' : text === 'Đang xét xử' ? 'processing' : 'warning';
        return <Tag color={color}>{text}</Tag>;
      }
    },
    {
      title: 'Mức độ',
      dataIndex: 'severity',
      key: 'severity',
      render: (text: string) => <Tag color="red">{text}</Tag>
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-white">
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
              <span className="text-gradient">Thực trạng tham nhũng</span>
            </Title>
            <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
              Phân tích thực trạng tham nhũng trong các cơ quan Đảng và Nhà nước hiện nay 
              và lý giải vì sao tham nhũng là nguy cơ đe dọa sự tồn vong của Đảng và chế độ.
            </Paragraph>
          </Space>
        </motion.div>

        {/* Statistics Cards */}
        <Row gutter={[24, 24]} className="mb-16">
          {statistics.map((stat, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hoverable className="h-full shadow-card shadow-card-hover">
                  <Statistic
                    title={stat.title}
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    valueStyle={stat.valueStyle}
                  />
                  <Text type="secondary">{stat.description}</Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Main Content */}
        <Row gutter={[32, 32]}>
          {/* Left Column - Cases Table */}
          <Col xs={24} lg={16}>
            <Card
              title={
                <Space>
                  <FileTextOutlined />
                  <span>Các vụ án điển hình</span>
                </Space>
              }
              className="shadow-card"
            >
              <Table
                dataSource={cases}
                columns={columns}
                pagination={false}
                className="mb-4"
              />
              <div className="text-center mt-4">
                <Button type="primary" icon={<ArrowUpOutlined />}>
                  Xem thêm vụ án
                </Button>
                </div>
            </Card>
          </Col>

          {/* Right Column - Timeline */}
          <Col xs={24} lg={8}>
            <Card
              title={
                <Space>
                  <ExclamationCircleOutlined />
                  <span>Diễn biến quan trọng</span>
                </Space>
              }
              className="shadow-card"
            >
              <Timeline items={timelineItems} />
            </Card>

            {/* Progress Stats */}
            <Card className="mt-6 shadow-card">
              <Space direction="vertical" size="large" className="w-full">
                <div>
                  <Text>Tỷ lệ thu hồi tài sản</Text>
                  <Progress percent={60} status="active" strokeColor="#1890ff" />
                </div>
                <div>
                  <Text>Tỷ lệ xử lý vụ án</Text>
                  <Progress percent={75} status="active" strokeColor="#52c41a" />
                </div>
                <div>
                  <Text>Tỷ lệ kết án</Text>
                  <Progress percent={85} status="active" strokeColor="#722ed1" />
                </div>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default RealitySection;