import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Users, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const RealitySection: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const corruptionCases = [
    {
      id: 0,
      name: 'Vụ án Việt Á',
      company: 'Công ty Việt Á - sản xuất kit xét nghiệm',
      damage: '1.100 tỷ đồng',
      description: 'Vụ án liên quan đến việc đưa hối lộ và vi phạm quy định về đấu thầu trong việc mua sắm kit xét nghiệm COVID-19.',
      defendants: [
        { name: 'Phan Quốc Việt', position: 'Tổng giám đốc Công ty Việt Á', sentence: '29 năm tù' },
        { name: 'Nguyễn Thanh Long', position: 'cựu Bộ trưởng Bộ Y tế', sentence: '18 năm tù' },
        { name: 'Chu Ngọc Anh', position: 'cựu Bộ trưởng Bộ Khoa học & Công nghệ', sentence: '3 năm tù' },
        { name: 'Vũ Đình Hiệp', position: 'Phó Tổng giám đốc Việt Á', sentence: '15 năm tù' }
      ],
      impact: 'Gây thiệt hại lớn cho ngân sách nhà nước và ảnh hưởng đến công tác phòng chống dịch COVID-19'
    },
    {
      id: 1,
      name: 'Vụ án Vạn Thịnh Phát',
      company: 'Tập đoàn Vạn Thịnh Phát, liên quan Ngân hàng SCB',
      damage: '677.000 tỷ đồng',
      description: 'Vụ án tham ô tài sản lớn nhất trong lịch sử Việt Nam, liên quan đến việc chiếm dụng tiền gửi của khách hàng.',
      defendants: [
        { name: 'Trương Mỹ Lan', position: 'Chủ tịch HĐQT Vạn Thịnh Phát', sentence: 'Tử hình' },
        { name: 'Các bị cáo khác', position: 'Cán bộ ngân hàng và liên quan', sentence: 'Từ 3-20 năm tù' }
      ],
      impact: 'Gây mất niềm tin của người dân vào hệ thống ngân hàng và ảnh hưởng nghiêm trọng đến nền kinh tế'
    },
    {
      id: 2,
      name: 'Vụ án FLC',
      company: 'Tập đoàn FLC - thao túng thị trường chứng khoán',
      damage: '2.000 tỷ đồng',
      description: 'Vụ án lừa đảo chiếm đoạt tài sản và thao túng thị trường chứng khoán, gây thiệt hại cho gần 28.000 nhà đầu tư.',
      defendants: [
        { name: 'Trịnh Văn Quyết', position: 'cựu Chủ tịch FLC', sentence: '21 năm tù' },
        { name: 'Các bị cáo khác', position: 'Cán bộ và nhân viên liên quan', sentence: 'Từ 2-15 năm tù' }
      ],
      impact: 'Gây thiệt hại lớn cho nhà đầu tư và làm mất ổn định thị trường chứng khoán'
    }
  ];

  const corruptionStats = [
    { year: '2018', cases: 120, damage: 500 },
    { year: '2019', cases: 135, damage: 750 },
    { year: '2020', cases: 150, damage: 1200 },
    { year: '2021', cases: 180, damage: 2000 },
    { year: '2022', cases: 200, damage: 3500 },
    { year: '2023', cases: 220, damage: 5000 },
  ];

  const sectorData = [
    { name: 'Kinh tế - Đầu tư', value: 35, color: '#dc2626' },
    { name: 'Đất đai - Bất động sản', value: 25, color: '#ea580c' },
    { name: 'Y tế - Giáo dục', value: 20, color: '#d97706' },
    { name: 'Ngân hàng - Tài chính', value: 15, color: '#ca8a04' },
    { name: 'Khác', value: 5, color: '#65a30d' },
  ];

  const [expandedDefendants, setExpandedDefendants] = useState<number[]>([]);

  const toggleDefendants = (caseId: number) => {
    setExpandedDefendants(prev => 
      prev.includes(caseId) 
        ? prev.filter(id => id !== caseId)
        : [...prev, caseId]
    );
  };

  return (
    <section id="reality" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Thực trạng tham nhũng và{' '}
            <span className="text-gradient">tác hại hiện nay</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Phân tích thực trạng tham nhũng trong các cơ quan Đảng và Nhà nước hiện nay 
            và lý giải vì sao tham nhũng là nguy cơ đe dọa sự tồn vong của Đảng và chế độ.
          </p>
        </motion.div>

        {/* Statistics overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white rounded-2xl p-6 shadow-soft-lg text-center">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">220+</div>
            <div className="text-sm text-gray-600">Vụ án năm 2023</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-soft-lg text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">5.000+</div>
            <div className="text-sm text-gray-600">Tỷ đồng thiệt hại</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-soft-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1.000+</div>
            <div className="text-sm text-gray-600">Cán bộ xử lý</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-soft-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-sm text-gray-600">Lĩnh vực bị ảnh hưởng</div>
          </div>
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-soft-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Xu hướng tham nhũng theo năm</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={corruptionStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="cases" fill="#dc2626" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Pie chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-soft-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Tham nhũng theo lĩnh vực</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sectorData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sectorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Major cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Các vụ án tham nhũng lớn
          </h3>
          
          <div className="space-y-6">
            {corruptionCases.map((case_, index) => (
              <motion.div
                key={case_.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-soft-lg border-2 transition-all duration-300 ${
                  activeCase === case_.id 
                    ? 'border-primary-500 shadow-xl' 
                    : 'border-gray-100 hover:border-primary-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {case_.name}
                    </h4>
                    <p className="text-lg text-gray-600 mb-2">{case_.company}</p>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">
                        Thiệt hại: {case_.damage}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCase(case_.id)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      activeCase === case_.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {activeCase === case_.id ? 'Đang xem' : 'Xem chi tiết'}
                  </motion.button>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {case_.description}
                </p>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Tác động:</h5>
                  <p className="text-gray-600 text-sm">{case_.impact}</p>
                </div>

                <motion.button
                  onClick={() => toggleDefendants(case_.id)}
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors mb-4"
                >
                  <span>
                    {expandedDefendants.includes(case_.id) ? 'Ẩn danh sách bị cáo' : 'Xem danh sách bị cáo'}
                  </span>
                  {expandedDefendants.includes(case_.id) ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedDefendants.includes(case_.id) ? 'auto' : 0,
                    opacity: expandedDefendants.includes(case_.id) ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {expandedDefendants.includes(case_.id) && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h6 className="font-semibold text-gray-900 mb-3">Các bị cáo chính:</h6>
                      <div className="space-y-2">
                        {case_.defendants.map((defendant, idx) => (
                          <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                            <div>
                              <div className="font-medium text-gray-900">{defendant.name}</div>
                              <div className="text-sm text-gray-600">{defendant.position}</div>
                            </div>
                            <div className="text-sm font-semibold text-red-600">
                              {defendant.sentence}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Causes and impacts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-soft-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nguyên nhân chính</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Suy thoái về tư tưởng chính trị, đạo đức</div>
                  <div className="text-gray-600 text-sm">Một bộ phận cán bộ, đảng viên không giữ vững lập trường</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Cơ chế kiểm soát quyền lực chưa chặt chẽ</div>
                  <div className="text-gray-600 text-sm">Tạo kẽ hở để kẻ xấu lạm dụng</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Pháp luật còn kẽ hở</div>
                  <div className="text-gray-600 text-sm">Tạo điều kiện cho tham nhũng phát triển</div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-soft-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tác hại nghiêm trọng</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Xói mòn lòng tin của nhân dân</div>
                  <div className="text-gray-600 text-sm">Làm mất niềm tin vào sự trong sạch của bộ máy</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Hủy hoại đạo đức xã hội</div>
                  <div className="text-gray-600 text-sm">Tạo ra "văn hóa phong bì", "chạy chức, chạy quyền"</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Đe dọa sự tồn vong của Đảng và chế độ</div>
                  <div className="text-gray-600 text-sm">Có thể dẫn đến mất ổn định chính trị</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealitySection;