"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Heart, Trophy, Star, Users, Crown } from "lucide-react";

const SignificanceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const nationalSignificance = [
    {
      icon: Crown,
      title: "Chấm dứt chế độ phong kiến",
      description: "Kết thúc hàng ngàn năm chế độ quân chủ chuyên chế",
    },
    {
      icon: Users,
      title: "Giải phóng dân tộc",
      description: "Đập tan xiềng xích thực dân Pháp và phát xít Nhật",
    },
    {
      icon: Star,
      title: "Thành lập nhà nước mới",
      description: "Ra đời nước Việt Nam Dân chủ Cộng hòa",
    },
  ];

  const worldSignificance = [
    {
      icon: Globe,
      title: "Thắng lợi đầu tiên",
      description: "Dân tộc thuộc địa đầu tiên tự lực giành độc lập",
    },
    {
      icon: Trophy,
      title: "Cổ vũ thế giới",
      description: "Thúc đẩy phong trào giải phóng dân tộc toàn cầu",
    },
    {
      icon: Heart,
      title: "Chân lý thời đại",
      description: "Chứng minh sức mạnh của đoàn kết và ý chí độc lập",
    },
  ];

  const lessons = [
    "Giương cao ngọn cờ độc lập dân tộc",
    "Xây dựng khối đại đoàn kết toàn dân",
    "Kết hợp sức mạnh dân tộc với sức mạnh thời đại",
    "Sử dụng linh hoạt các hình thức đấu tranh",
  ];

  return (
    <section
      id="significance"
      ref={ref}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-amber-900/50"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ý Nghĩa
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              {" "}
              Lịch Sử
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tầm vóc và giá trị vĩnh hằng của Cách mạng tháng Tám đối với dân tộc
            Việt Nam và thế giới
          </p>
        </motion.div>

        {/* National Significance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Đối với Dân tộc Việt Nam
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {nationalSignificance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-red-900/40 to-yellow-900/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-bold text-xl mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* World Significance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Đối với Thế Giới
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {worldSignificance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-bold text-xl mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-br from-slate-800/60 to-red-900/60 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center mb-20"
        >
          <blockquote className="text-2xl lg:text-3xl font-bold text-white italic mb-6 leading-relaxed">
            &ldquo;Cách mạng tháng Tám mở ra kỷ nguyên độc lập dân tộc gắn liền
            với chủ nghĩa xã hội&rdquo;
          </blockquote>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-4"></div>
          <p className="text-red-300 font-semibold">
            Ý nghĩa lịch sử vĩ đại của cuộc cách mạng
          </p>
        </motion.div>

        {/* Lessons Learned */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Bài Học Kinh Nghiệm
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {lessons.map((lesson, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-white font-semibold">{lesson}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-red-400 mb-2">80+</div>
            <div className="text-gray-300 text-sm">Năm xóa bỏ thực dân</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
            <div className="text-gray-300 text-sm">Năm kết thúc phong kiến</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-green-400 mb-2">1</div>
            <div className="text-gray-300 text-sm">Dân tộc tiên phong</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
            <div className="text-gray-300 text-sm">Giá trị vĩnh hằng</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignificanceSection;
