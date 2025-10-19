"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Flag } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const stats = [
    { icon: Calendar, label: "Thời gian", value: "15 ngày" },
    { icon: MapPin, label: "Diễn ra tại", value: "Toàn quốc" },
    { icon: Users, label: "Khởi nghĩa", value: "Toàn dân" },
    { icon: Flag, label: "Kết quả", value: "Độc lập" },
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,red_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,yellow_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-red-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-red-500/30"
            >
              <span className="text-red-300 text-sm font-medium">
                Tháng 8 năm 1945
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-red-300 to-yellow-300 bg-clip-text text-transparent">
                Cách mạng
              </span>
              <br />
              <span className="text-white">Tháng Tám</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Cuộc Tổng khởi nghĩa vĩ đại của dân tộc Việt Nam, mở ra kỷ nguyên
              độc lập dân tộc gắn liền với chủ nghĩa xã hội
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Khám phá lịch sử
              </button>
              <button className="border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                Dòng thời gian
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-red-900/40 to-yellow-900/40 rounded-3xl backdrop-blur-sm border border-red-500/20 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
              <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-500/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-500/30 rounded-full blur-xl"></div>

              {/* Central Star */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="https://cdn.tgdd.vn/Files/2022/07/26/1450679/nguon-goc-y-nghia-ngay-cach-mang-thang-tam-thanh-cong-202207262209323836.jpg"
                  alt="Cách mạng tháng Tám 1945"
                  width={600}
                  height={600}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
              </div>

              {/* Orbiting Elements */}
              {/* <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-400 rounded-full"></div>
                  <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full"></div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-red-500/50 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-red-300 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
