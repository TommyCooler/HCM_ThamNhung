import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- BIỂU TƯỢỢNG (ICONS) ---
type IconProps = { className?: string };
const ScaleIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </svg>
);
const AlertTriangleIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const TargetIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const NewspaperIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4" />
    <path d="M16 2v20" />
    <path d="M8 7h4" />
    <path d="M8 12h4" />
    <path d="M8 17h4" />
  </svg>
);
const ShieldCheckIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const UsersIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const BuildingIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);
const CheckCircle = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const FlameIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);
const DollarSignIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);
const TrendingUpIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);
const Volume2Icon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
  </svg>
);

// --- CÁC THÀNH PHẦN (COMPONENTS) ---

const colorClasses = {
  red: {
    text: "text-red-400",
    border: "border-red-500/50",
    ring: "focus:ring-red-400",
  },
  purple: {
    text: "text-purple-400",
    border: "border-purple-500/50",
    ring: "focus:ring-purple-400",
  },
  green: {
    text: "text-green-400",
    border: "border-green-500/50",
    ring: "focus:ring-green-400",
  },
};

const CardAudioPlayer = ({
  src,
  color,
}: {
  src: string;
  color: "red" | "purple" | "green";
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const specificColorClasses = colorClasses[color] || colorClasses.red;

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      document.querySelectorAll("audio").forEach((audio) => audio.pause());
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => {
      if (audio?.paused && isPlaying) setIsPlaying(false);
    };
    audio?.addEventListener("ended", handleEnded);
    audio?.addEventListener("pause", handlePause);
    return () => {
      audio?.removeEventListener("ended", handleEnded);
      audio?.removeEventListener("pause", handlePause);
    };
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src={src} />
      <motion.button
        onClick={togglePlayPause}
        className={`absolute top-4 right-4 z-20 w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-300 border border-slate-700 shadow-md hover:bg-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 ${specificColorClasses.ring}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isPlaying ? "Tạm dừng tóm tắt" : "Nghe tóm tắt"}
      >
        <Volume2Icon
          className={`w-5 h-5 transition-colors ${
            isPlaying ? specificColorClasses.text : "text-slate-400"
          }`}
        />
      </motion.button>
    </>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SectionHeader = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    className="text-center mb-16 max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.5 }}
  >
    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
      {title}
    </h2>
    <p className="text-lg text-slate-400">{children}</p>
  </motion.div>
);

// CẬP NHẬT PROPS: THÊM `imageSrc` VÀ SỬA LỖI `penalties`
type CaseStudyCardProps = {
  title: string;
  company: string;
  penalties: readonly string[];
  damage: string;
  color: "red" | "purple" | "green";
  isActive: boolean;
  audioSrc: string;
  imageSrc: string;
};

const CaseStudyCard = ({
  title,
  company,
  penalties,
  damage,
  color,
  isActive,
  audioSrc,
  imageSrc,
}: CaseStudyCardProps) => {
  const colorHex: { [key: string]: string } = {
    red: "#f87171",
    purple: "#c084fc",
    green: "#4ade80",
  };
  const gradientColor = colorHex[color] || "#67e8f9";
  const specificColorClasses = colorClasses[color] || colorClasses.red;

  return (
    <motion.div
      className="relative w-[550px] md:w-[700px]"
      variants={{
        active: { opacity: 1, scale: 1, filter: "blur(0px)" },
        inactive: { opacity: 0.5, scale: 0.85, filter: "blur(4px)" },
      }}
      animate={isActive ? "active" : "inactive"}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="relative rounded-xl p-[2px] overflow-hidden w-full h-full">
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute inset-[-200%] w-[500%] h-[500%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.5 },
                rotate: { duration: 5, repeat: Infinity, ease: "linear" },
              }}
              style={{
                background: `conic-gradient(from 0deg, transparent 0%, ${gradientColor} 5%, transparent 15%)`,
              }}
            />
          )}
        </AnimatePresence>
        {/* CẬP NHẬT LAYOUT: THÊM `overflow-hidden` VÀ `flex-col` */}
        <div
          className={`relative bg-slate-900 rounded-[10px] h-full flex flex-col overflow-hidden`}
        >
          <CardAudioPlayer src={audioSrc} color={color} />

          {/* THÊM KHỐI HIỂN THỊ HÌNH ẢNH */}
          <div className="relative h-48 w-full">
            <img
              src={imageSrc}
              alt={`Minh họa vụ án ${title}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>

          {/* KHỐI NỘI DUNG VĂN BẢN */}
          <div className="flex flex-col flex-grow p-6">
            <div className={`border-b ${specificColorClasses.border} pb-4`}>
              <h4 className={`text-3xl font-bold ${specificColorClasses.text}`}>
                {title}
              </h4>
              <p className="text-lg text-slate-400 font-medium mt-1">
                {company}
              </p>
            </div>
            <div className="pt-4 space-y-4 text-lg flex-grow">
              <div>
                <strong className="text-slate-200">Hình phạt tiêu biểu:</strong>
                <ul className="list-disc list-inside text-slate-300 mt-2 space-y-2">
                  {penalties.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <strong className="text-slate-200">Thiệt hại:</strong>
                <p className="text-slate-300">{damage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HorizontalSnapCarousel = () => {
  // CẬP NHẬT DỮ LIỆU: THÊM `imageSrc` CHO MỖI VỤ ÁN
  const caseStudies = [
    {
      title: "Vụ án Việt Á",
      company: "Sản xuất kit xét nghiệm",
      penalties: ["Phan Quốc Việt: 29 năm tù", "Nguyễn Thanh Long: 18 năm tù"],
      damage: "Hơn 1.100 tỷ đồng",
      color: "red",
      audioSrc: "/audios/vu-an-viet-a.mp3",
      imageSrc: "/images/vu-an-viet-a.png",
    },
    {
      title: "Vụ án Vạn Thịnh Phát",
      company: "Tập đoàn Vạn Thịnh Phát & SCB",
      penalties: [
        "Trương Mỹ Lan: Tử hình",
        "Các bị cáo khác: 3 năm - chung thân",
      ],
      damage: "~498.000 tỷ đồng",
      color: "purple",
      audioSrc: "/audios/vu-an-van-thinh-phat.mp3",
      imageSrc: "/images/vu-an-van-thinh-phat.png",
    },
    {
      title: "Vụ án FLC",
      company: "Thao túng thị trường chứng khoán",
      penalties: ["Trịnh Văn Quyết: 21 năm tù"],
      damage: "Gần 2.000 tỷ đồng",
      color: "green",
      audioSrc: "/audios/vu-an-flc.mp3",
      imageSrc: "/images/vu-an-flc.png",
    },
  ] as const;

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }
      if (e.deltaY > 0) {
        if (currentIndex < caseStudies.length - 1) {
          e.preventDefault();
          isAnimating.current = true;
          setCurrentIndex((prev) => prev + 1);
        }
      } else {
        if (currentIndex > 0) {
          e.preventDefault();
          isAnimating.current = true;
          setCurrentIndex((prev) => prev - 1);
        }
      }
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [currentIndex, caseStudies.length]);

  const cardWidth = 700;
  const gap = 32;
  const cardOffset = cardWidth + gap;
  return (
    <div
      ref={containerRef}
      className="h-[90vh] flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="w-full">
        <motion.div
          className="flex"
          style={{ paddingLeft: `calc(50% - ${cardWidth / 2}px)` }}
          animate={{ x: -currentIndex * cardOffset }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          onAnimationComplete={() => {
            isAnimating.current = false;
          }}
        >
          <div className="flex gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.title}
                isActive={index === currentIndex}
                {...study}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center gap-3 mt-8">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating.current) {
                isAnimating.current = true;
                setCurrentIndex(index);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-cyan-400 scale-125" : "bg-slate-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const StatsGrid = () => {
  // text-red-400 text-blue-400 text-cyan-400 text-orange-400
  const stats = [
    {
      title: "Tổng số vụ án",
      value: "3,467",
      description: "Tăng 23% so với năm trước",
      icon: <FlameIcon className="w-10 h-10 text-red-400" />,
      colorClass: "text-red-400",
    },
    {
      title: "Thiệt hại kinh tế",
      value: "1,234.5 tỷ",
      description: "Đã thu hồi 60%",
      icon: <DollarSignIcon className="w-10 h-10 text-blue-400" />,
      colorClass: "text-blue-400",
    },
    {
      title: "Cán bộ liên quan",
      value: "5,678",
      description: "Từ cấp phó phòng trở lên",
      icon: <UsersIcon className="w-10 h-10 text-cyan-400" />,
      colorClass: "text-cyan-400",
    },
    {
      title: "Tăng trưởng số vụ",
      value: "23.4%",
      description: "So với cùng kỳ năm trước",
      icon: <TrendingUpIcon className="w-10 h-10 text-orange-400" />,
      colorClass: "text-orange-400",
    },
  ];
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.title}
          variants={itemVariants}
          className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 text-center flex flex-col items-center"
        >
          <div className="mb-4">{stat.icon}</div>
          <p className="text-sm text-slate-400 mb-1">{stat.title}</p>
          <p className={`text-4xl font-bold ${stat.colorClass} mb-2`}>
            {stat.value}
          </p>
          <p className="text-sm text-slate-500">{stat.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

const EventsTimeline = () => {
  const events = [
    {
      tag: "Nghị quyết",
      year: "2016",
      title: "Nghị quyết Trung ương 4 khóa XII",
      description:
        'Một bước đột phá trong công tác xây dựng, chỉnh đốn Đảng, tập trung ngăn chặn suy thoái tư tưởng, đạo đức - "cái gốc" của tham nhũng.',
    },
    {
      tag: "Đại hội",
      year: "2021",
      title: "Đại hội Đảng XIII và Kết luận 21",
      description:
        "Tiếp tục khẳng định và đẩy mạnh toàn diện công tác phòng, chống tham nhũng, xem đây là nhiệm vụ trọng tâm hàng đầu.",
    },
    {
      tag: "Chiến dịch",
      year: "",
      title: 'Chiến dịch "đốt lò"',
      description:
        'Xử lý nhiều vụ án tham nhũng lớn, phức tạp, không có "vùng cấm", "ngoại lệ", củng cố niềm tin của nhân dân.',
    },
    {
      tag: "Tổ chức",
      year: "",
      title: "Ban Chỉ đạo Trung ương",
      description:
        "Thể hiện sự lãnh đạo tập trung, quyết liệt của Đảng trong việc chỉ đạo, đôn đốc, kiểm tra, giám sát công tác phòng, chống tham nhũng.",
    },
  ];
  return (
    <div className="relative max-w-5xl mx-auto">
      <div
        className="absolute left-1/2 top-0 h-full w-px bg-slate-700/50"
        aria-hidden="true"
      ></div>
      <div className="relative pt-2">
        {events.map((item, index) => (
          <motion.div
            key={item.title}
            className={`relative mb-12 flex items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
              }`}
            >
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-700 relative shadow-lg">
                <div
                  className={`absolute top-1/2 -mt-3 w-6 h-6 bg-slate-900 border-slate-700 transform rotate-45 ${
                    index % 2 === 0
                      ? "-right-3 border-t border-r"
                      : "-left-3 border-b border-l"
                  }`}
                ></div>
                <div className="flex items-center gap-2 mb-2 justify-start">
                  {item.year && (
                    <span className="text-sm font-bold bg-purple-900/50 text-purple-400 px-2 py-1 rounded">
                      {item.year}
                    </span>
                  )}
                  <span className="text-sm font-bold bg-slate-700 text-slate-300 px-2 py-1 rounded">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-base">{item.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 -ml-4 w-8 h-8 flex items-center justify-center bg-slate-800 rounded-full border-2 border-purple-500">
              <NewspaperIcon className="w-4 h-4 text-purple-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SolutionsGrid = () => {
  // text-green-400
  const solutions = [
    {
      title: "Xây dựng Đảng",
      icon: <ShieldCheckIcon className="w-10 h-10 text-green-400" />,
      points: [
        "Đường lối đúng đắn",
        "Thực hiện tốt chủ trương",
        "Chỉnh đốn Đảng thường xuyên",
        "Phát triển Đảng trong sinh viên",
      ],
      colorClass: "text-green-400",
    },
    {
      title: "Xây dựng Nhà nước",
      icon: <BuildingIcon className="w-10 h-10 text-green-400" />,
      points: [
        "Hoàn thiện pháp luật",
        "Kiểm soát quyền lực nhà nước",
        "Xây dựng đội ngũ cán bộ",
        "Đẩy mạnh đấu tranh phòng chống",
      ],
      colorClass: "text-green-400",
    },
    {
      title: "Giải pháp mở rộng",
      icon: <UsersIcon className="w-10 h-10 text-green-400" />,
      points: [
        "Huy động nhân dân giám sát",
        "Bảo vệ người tố cáo",
        "Ứng dụng công nghệ, chuyển đổi số",
      ],
      colorClass: "text-green-400",
    },
  ];
  return (
    <motion.div
      className="grid md:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {solutions.map((item) => (
        <motion.div
          key={item.title}
          variants={itemVariants}
          className="relative p-8 bg-slate-900/50 rounded-2xl border border-slate-700 overflow-hidden"
        >
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-400/0"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              {item.icon}
              <h3 className={`text-3xl font-bold ${item.colorClass}`}>
                {item.title}
              </h3>
            </div>
            <ul className="space-y-4">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

type HeaderProps = {
  sections: { id: string; title: string }[];
  activeSection: string;
};
const Header = ({ sections, activeSection }: HeaderProps) => (
  <header className="sticky top-0 z-50 py-4">
    <div className="container mx-auto px-6">
      <nav className="hidden md:flex bg-slate-800/60 backdrop-blur-xl rounded-full border border-slate-700 justify-center items-center p-2 shadow-lg max-w-2xl mx-auto">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 outline-none focus:ring-2 focus:ring-cyan-400 ${
              activeSection === section.id
                ? "bg-cyan-500 text-slate-900 shadow-md"
                : "text-slate-300 hover:bg-slate-700/50"
            }`}
          >
            {section.title}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

const TypingTitle = ({ text }: { text: string }) => {
  const letters = Array.from(text);
  const [key, setKey] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setKey((prevKey) => prevKey + 1);
    }, 6000);
    return () => clearTimeout(timer);
  }, [key]);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: i * 0.5 },
    }),
  };
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring" as const, damping: 12, stiffness: 100 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 12, stiffness: 100 },
    },
  };
  return (
    <motion.h2
      key={key}
      className="text-4xl md:text-6xl font-extrabold text-slate-100 mt-2 flex flex-wrap justify-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400"
          variants={child}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default function App() {
  const sections: { id: string; title: string }[] = [
    { id: "intro", title: "Mở đầu" },
    { id: "hcm-ideology", title: "Tư tưởng HCM" },
    { id: "corruption-status", title: "Thực trạng" },
    { id: "solutions", title: "Giải pháp" },
    { id: "events", title: "Sự kiện" },
    { id: "conclusion", title: "Kết luận" },
  ];
  const [activeSection, setActiveSection] = useState("intro");
  useEffect(() => {
    const observerOptions = { rootMargin: "-40% 0px -60% 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="bg-slate-950 font-sans text-slate-300 relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[10vh] -left-[10vw] w-[40vw] h-[40vw] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[50vh] right-0 w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      <div className="relative z-10">
        <Header sections={sections} activeSection={activeSection} />
        <main className="container mx-auto px-6 py-12">
          <div className="text-center pt-16 pb-24 min-h-[70vh] flex flex-col justify-center">
            <TypingTitle text="“... Tham nhũng là từ trong Đảng mà ra....”" />
            <motion.p
              className="text-lg text-slate-400 mt-6 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              Thách thức nào cho việc xây dựng Đảng và Nhà nước hiện nay?
            </motion.p>
          </div>

          <section id="intro" className="mb-24 space-y-12">
            <SectionHeader title="Mở đầu">
              Khi bàn về tham nhũng, chúng ta không chỉ muốn vạch ra cái xấu.
              Quan trọng hơn, đây là cơ hội để phân tích, học hỏi và cùng nhau
              suy nghĩ về giải pháp cho một bộ máy nhà nước trong sạch, vững
              mạnh.
            </SectionHeader>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <ScaleIcon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  Tham nhũng là gì?
                </h3>
                <p>
                  Là khi người có quyền lực lợi dụng vị trí để trục lợi cá nhân.
                  Đây là lúc quyền lực bị biến thành lợi ích riêng.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <AlertTriangleIcon className="w-12 h-12 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  Vì sao nguy hiểm?
                </h3>
                <p>
                  Nó là một căn bệnh ăn mòn bộ máy nhà nước, phá vỡ niềm tin của
                  nhân dân và kìm hãm sự phát triển đất nước.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <TargetIcon className="w-12 h-12 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  Mục tiêu
                </h3>
                <p>
                  Làm rõ mối nguy, phân tích tư tưởng Hồ Chí Minh và đề xuất
                  giải pháp, vì chống tham nhũng cần sự đồng lòng của toàn xã
                  hội.
                </p>
              </motion.div>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-32"></div>

          <section id="hcm-ideology" className="mb-24">
            <SectionHeader title="Tư tưởng Hồ Chí Minh về Đảng và Nhà nước">
              Để xây dựng một nhà nước "của dân, do dân, và vì dân", Hồ Chí Minh
              đã chỉ rõ sự cần thiết phải kiểm soát quyền lực và quyết liệt
              phòng, chống các căn bệnh tiêu cực từ trong bộ máy.
            </SectionHeader>
            <div className="space-y-12">
              <motion.div
                className="p-8 bg-slate-900/50 rounded-2xl border border-slate-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-3xl text-yellow-400 mb-4">
                  Kiểm soát quyền lực
                </h3>
                <p className="text-lg text-slate-300 mb-4">
                  Để bảo đảm mọi quyền lực thuộc về nhân dân, việc kiểm soát
                  quyền lực nhà nước là tất yếu.
                </p>
                <blockquote className="text-lg p-4 bg-slate-800/70 rounded-lg border-l-4 border-yellow-500 italic text-slate-300 mb-8">
                  “dân ghét các ông chủ tịch, các ông ủy viên vì cái tật ngông
                  nghênh, cậy thế, cậy quyển... nắm được chút quyền trong tay
                  vẫn hay lạm dụng”.
                </blockquote>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 bg-slate-800/70 rounded-lg">
                    <ShieldCheckIcon className="w-10 h-10 mx-auto mb-3 text-yellow-400" />
                    <h4 className="font-bold text-xl text-slate-100">
                      Từ Đảng
                    </h4>
                    <p className="text-slate-400">
                      Lãnh đạo, kiểm tra, giám sát
                    </p>
                  </div>
                  <div className="p-6 bg-slate-800/70 rounded-lg">
                    <UsersIcon className="w-10 h-10 mx-auto mb-3 text-yellow-400" />
                    <h4 className="font-bold text-xl text-slate-100">
                      Từ Nhân dân
                    </h4>
                    <p className="text-slate-400">Kiểm soát, đôn đốc</p>
                  </div>
                  <div className="p-6 bg-slate-800/70 rounded-lg">
                    <BuildingIcon className="w-10 h-10 mx-auto mb-3 text-yellow-400" />
                    <h4 className="font-bold text-xl text-slate-100">
                      Nội bộ Nhà nước
                    </h4>
                    <p className="text-slate-400">Cơ chế kiểm soát chéo</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="p-8 bg-slate-900/50 rounded-2xl border border-slate-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-3xl text-yellow-400 mb-4">
                  Phòng, chống tiêu cực
                </h3>
                <p className="text-lg text-slate-300 mb-4">
                  <span className="text-red-400 font-semibold">
                    Tham ô, lãng phí, quan liêu
                  </span>{" "}
                  bị coi là “giặc nội xâm”, nguy hiểm hơn giặc ngoại xâm.
                </p>
                <div className="text-lg p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300 font-semibold mb-6">
                  Muốn trừ sạch bệnh tham ô, lãng phí thì trước hết phải tẩy
                  sạch bệnh quan liêu.
                </div>
                <p className="text-lg text-slate-300">
                  Các bệnh khác như{" "}
                  <span className="text-slate-100 font-semibold">
                    “Tư túng,” “chia rẽ,” “kiêu ngạo”
                  </span>{" "}
                  cũng gây mất đoàn kết, làm suy yếu nghiêm trọng bộ máy.
                </p>
              </motion.div>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-32"></div>

          <section id="corruption-status" className="mb-24">
            <SectionHeader title="Thực trạng tham nhũng và tác hại hiện nay">
              Tham nhũng ngày càng tinh vi, có tổ chức và mang tính hệ thống,
              xuất hiện ở nhiều lĩnh vực. Các vụ án lớn cho thấy mức độ nghiêm
              trọng của vấn đề.
            </SectionHeader>
            <StatsGrid />
            <HorizontalSnapCarousel />
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-32"></div>

          <section id="solutions" className="mb-24">
            <SectionHeader title="Vận dụng tư tưởng Hồ Chí Minh và giải pháp">
              Cuộc chiến chống "giặc nội xâm" đòi hỏi sự kết hợp đồng bộ giữa
              việc xây dựng, chỉnh đốn Đảng, hoàn thiện nhà nước pháp quyền và
              huy động sức mạnh của toàn dân.
            </SectionHeader>
            <SolutionsGrid />
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-32"></div>

          <section id="events" className="mb-24">
            <SectionHeader title="Những sự kiện, văn kiện liên quan">
              Các Nghị quyết, Kết luận của Đảng cùng với chiến dịch "đốt lò"
              quyết liệt đã thể hiện sự nhất quán và quyết tâm chính trị rất cao
              trong công cuộc phòng, chống tham nhũng.
            </SectionHeader>
            <EventsTimeline />
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-32"></div>

          <section id="conclusion" className="mb-24 text-center">
            <SectionHeader title="Kết luận">
              Phòng, chống tham nhũng là cuộc chiến sinh tử, quyết định sự sống
              còn của chế độ. Thất bại đồng nghĩa với việc ta tự đánh mất chính
              mình.
            </SectionHeader>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div
                variants={itemVariants}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700"
              >
                <h4 className="text-2xl font-bold text-cyan-400 mb-3">
                  Khẳng định
                </h4>
                <p>
                   Phòng, chống tham nhũng không chỉ là một nhiệm vụ cấp bách, mà là một cuộc chiến sinh tử, mang ý nghĩa chiến lược lâu dài. Đây là cuộc chiến “chống giặc nội xâm”, quyết định sự sống còn của chế độ và tương lai của dân tộc.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700"
              >
                <h4 className="text-2xl font-bold text-cyan-400 mb-3">
                  Thông điệp
                </h4>
                <p>
                  Muốn thắng lợi, phải có sự đồng lòng của cả Đảng, Nhà nước và nhân dân. “Đảng với dân như cá với nước, có dân là sống, thoát ly dân là chết”. 
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700"
              >
                <h4 className="text-2xl font-bold text-cyan-400 mb-3">
                  Trách nhiệm
                </h4>
                <p>
                  Mọi người dân và mỗi cán bộ, đảng viên đều có trách nhiệm trong cuộc chiến này. Đặc biệt, cán bộ giữ chức vụ càng cao, trách nhiệm nêu gương càng lớn.
                </p>
              </motion.div>
            </motion.div>
          </section>
        </main>
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h5 className="text-lg font-bold text-white mb-4">
                Quyết tâm, kiên trì đấu tranh
              </h5>
              <p className="text-sm">
                "Phòng, chống tham nhũng, tiêu cực không có vùng cấm, không có
                ngoại lệ, bất kể người đó là ai."
              </p>
              <p className="text-sm mt-2 font-semibold">- Tổng Bí thư Nguyễn Phú Trọng -</p>
            </div>

            <div>
              <h5 className="text-lg font-bold text-white mb-4">
                Liên kết hữu ích
              </h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Văn bản pháp luật</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Tin tức & Sự kiện</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Báo cáo & Thống kê</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Kênh tố giác tham nhũng</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-bold text-white mb-4">Thông tin</h5>
              <p className="text-sm">
                Trang thông tin tuyên truyền về công tác phòng, chống tham nhũng, tiêu cực.
              </p>
              <p className="text-sm mt-2">
                Góp phần xây dựng Đảng và Nhà nước ta ngày càng trong sạch, vững mạnh.
              </p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>
              Bản quyền thuộc về Ban Nội chính Trung ương. Phát triển bởi Gemini.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}