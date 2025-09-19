# Website Thuyết Trình: "Tham nhũng là từ trong Đảng mà ra"

## 📋 Mô tả dự án

Website thuyết trình về chủ đề **"Tham nhũng là từ trong Đảng mà ra"** - Thách thức trong việc xây dựng Đảng và Nhà nước hiện nay. Dự án được xây dựng dựa trên tư tưởng Hồ Chí Minh về xây dựng Đảng trong sạch, vững mạnh và Nhà nước của dân, do dân, vì dân.

## 🎯 Mục tiêu

- Phân tích tư tưởng Hồ Chí Minh về xây dựng Đảng và Nhà nước
- Trình bày thực trạng tham nhũng và tác hại hiện nay
- Đề xuất giải pháp phòng chống tham nhũng
- Tạo giao diện web hiện đại, tương tác cho bài thuyết trình

## 🚀 Công nghệ sử dụng

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Animation**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **UI Components**: Radix UI

## 📁 Cấu trúc dự án

```
src/
├── components/
│   ├── Header.tsx          # Header với navigation
│   ├── Hero.tsx            # Section hero chính
│   ├── MainContent.tsx     # Container cho các section
│   ├── Footer.tsx          # Footer
│   └── sections/
│       ├── TheorySection.tsx      # Tư tưởng Hồ Chí Minh
│       ├── RealitySection.tsx     # Thực trạng tham nhũng
│       ├── SolutionsSection.tsx   # Giải pháp phòng chống
│       ├── EventsSection.tsx      # Sự kiện và văn kiện
│       └── ConclusionSection.tsx  # Kết luận
├── App.tsx                 # Component chính
├── main.tsx               # Entry point
├── index.css              # Global styles
└── App.css               # App-specific styles
```

## 🎨 Tính năng chính

### 1. **Giao diện hiện đại**
- Design system với màu sắc phù hợp chủ đề
- Responsive design cho mọi thiết bị
- Animation mượt mà với Framer Motion
- Typography đẹp mắt với font Inter

### 2. **Nội dung tương tác**
- **Tư tưởng Hồ Chí Minh**: Tabs để trình bày các khía cạnh khác nhau
- **Thực trạng tham nhũng**: Biểu đồ thống kê, các vụ án lớn
- **Giải pháp**: Các giải pháp cụ thể với chi tiết mở rộng
- **Sự kiện**: Timeline các sự kiện quan trọng
- **Kết luận**: Tổng kết và thông điệp

### 3. **Tính năng UX**
- Smooth scrolling giữa các section
- Mobile-friendly navigation
- Interactive charts và data visualization
- Expandable content sections

## 🛠️ Cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js 18+ 
- npm hoặc yarn

### Cài đặt
```bash
# Clone repository
git clone <repository-url>
cd HCM_ThamNhung

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview build
npm run preview
```

### Scripts có sẵn
- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build
- `npm run lint` - Chạy ESLint

## 📱 Responsive Design

Website được thiết kế responsive cho:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: < 768px

## 🎨 Color Scheme

- **Primary (Red)**: Màu đỏ cho chủ đề chống tham nhũng
- **Secondary (Blue)**: Màu xanh cho chính phủ, nhà nước
- **Accent (Gold)**: Màu vàng cho thành công, tích cực
- **Neutral (Gray)**: Màu xám cho text và background

## 📊 Nội dung chính

### 1. Tư tưởng Hồ Chí Minh
- Nhà nước trong sạch, vững mạnh
- Kiểm soát quyền lực nhà nước
- Phòng, chống tiêu cực
- Biện pháp phòng chống

### 2. Thực trạng tham nhũng
- Thống kê số liệu
- Các vụ án lớn (Việt Á, Vạn Thịnh Phát, FLC)
- Nguyên nhân và tác hại

### 3. Giải pháp
- Xây dựng Đảng trong sạch, vững mạnh
- Xây dựng Nhà nước trong sạch, vững mạnh
- Huy động nhân dân tham gia giám sát

### 4. Sự kiện quan trọng
- Nghị quyết Trung ương 4 khóa XII
- Đại hội Đảng XIII
- Chiến dịch "đốt lò"
- Ban Chỉ đạo Trung ương

## 🤝 Đóng góp

Dự án này được tạo ra cho mục đích học tập và thuyết trình. Nếu có góp ý hoặc cải thiện, vui lòng tạo issue hoặc pull request.

## 📄 License

Dự án này được tạo ra cho mục đích học tập và không có mục đích thương mại.

## 👨‍💻 Tác giả

**Sinh viên FPT HCM**  
Môn học: Tư tưởng Hồ Chí Minh  
Chủ đề 04: Tham nhũng và xây dựng Đảng