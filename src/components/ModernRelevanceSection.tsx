"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, Users, Sparkles, ArrowRight } from "lucide-react";

const ModernRelevanceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const modernExamples = [
    {
      icon: Shield,
      title: "Chống đại dịch COVID-19",
      description: 'Tinh thần "chống dịch như chống giặc"',
      details:
        "Toàn dân đoàn kết, y bác sĩ tình nguyện, chia sẻ khó khăn cùng nhau vượt qua đại dịch",
      year: "2020-2022",
    },
    {
      icon: Heart,
      title: "Thiên tai bão lũ",
      description: 'Tinh thần "lá lành đùm lá rách"',
      details:
        "Cả nước hướng về miền Trung, quyên góp, cứu trợ, xây dựng lại vùng bão lũ",
      year: "Hàng năm",
    },
    {
      icon: Users,
      title: "Xây dựng đất nước",
      description: "Khối đại đoàn kết toàn dân tộc",
      details: "Cùng nhau xây dựng Việt Nam phồn vinh, hạnh phúc, hùng cường",
      year: "1945-2025",
    },
  ];

  const principles = [
    {
      title: "Đại đoàn kết dân tộc",
      description: "Sức mạnh từ sự đồng lòng của toàn dân",
      icon: Users,
    },
    {
      title: "Tinh thần yêu nước",
      description: "Tình yêu quê hương, đất nước sâu sắc",
      icon: Heart,
    },
    {
      title: "Ý chí vượt khó",
      description: "Quyết tâm vượt qua mọi thử thách",
      icon: Shield,
    },
    {
      title: "Tương lai tươi sáng",
      description: "Hy vọng và khát vọng phát triển",
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="modern"
      ref={ref}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/50 to-slate-900/50"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Sức Sống
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              {" "}
              Đương Đại
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tinh thần Cách mạng tháng Tám tiếp tục tỏa sáng trong thời đại mới
          </p>
        </motion.div>

        {/* Modern Examples */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Những Minh Chứng Sống Động
          </motion.h3>

          <div className="space-y-8">
            {modernExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <example.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl">
                          {example.title}
                        </h4>
                        <p className="text-red-300 text-sm">{example.year}</p>
                      </div>
                    </div>

                    <p className="text-yellow-300 font-semibold mb-4 text-lg">
                      {example.description}
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                      {example.details}
                    </p>
                  </div>
                </div>

                {/* Visual */}
                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="relative h-64 lg:h-80 bg-gradient-to-br from-red-900/40 to-yellow-900/40 rounded-2xl backdrop-blur-sm border border-red-500/20 overflow-hidden">
                    {/* Decorative elements specific to each example */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <example.icon className="w-12 h-12 text-white" />
                      </motion.div>
                    </div>

                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        className="absolute w-2 h-2 bg-white/60 rounded-full"
                        style={{
                          left: `${20 + i * 12}%`,
                          top: `${30 + (i % 3) * 20}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Principles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Những Giá Trị Cốt Lõi
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-800/60 to-red-900/40 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-bold mb-2">{principle.title}</h4>
                <p className="text-gray-300 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="bg-gradient-to-br from-red-900/60 to-yellow-900/60 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Cùng Nhau Xây Dựng Tương Lai
          </h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Với tinh thần Cách mạng tháng Tám, chúng ta tiếp tục đoàn kết, phấn
            đấu xây dựng một Việt Nam phồn vinh, hạnh phúc và hùng cường
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <span>Tìm hiểu thêm</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              Chia sẻ câu chuyện
            </button>
          </div> */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "56.25%",
              paddingBottom: 0,
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src="https://www.canva.com/design/DAG2g8kJXhI/uX7W8lTUvFvnODJBMg_2aA/view?embed"
              allowFullScreen
              allow="fullscreen"
              title="Cách mạng tháng 8 năm 1945"
            ></iframe>
          </div>
          <a
            href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAG2g8kJXhI&#x2F;uX7W8lTUvFvnODJBMg_2aA&#x2F;view?utm_content=DAG2g8kJXhI&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
            target="_blank"
            rel="noopener"
          >
            CÁCH MẠNG THÁNG 8 NĂM 1945
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernRelevanceSection;
