"use client";

import { motion } from "framer-motion";
import { Heart, Github, Mail, MapPin, Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Tài liệu",
      items: [
        { label: "Lịch sử Cách mạng", href: "#timeline" },
        { label: "Ý nghĩa lịch sử", href: "#significance" },
        { label: "Sức sống hiện đại", href: "#modern" },
        { label: "Bối cảnh thế giới", href: "#context" },
      ],
    },
    {
      title: "Thông tin",
      items: [
        { label: "Về dự án", href: "#about" },
        { label: "Liên hệ", href: "#contact" },
        { label: "Đóng góp", href: "#contribute" },
        { label: "Phản hồi", href: "#feedback" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900 to-red-900/20"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 border-b border-white/10">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold">Cách mạng tháng Tám</h3>
                  <p className="text-red-200">Kỷ niệm 80 năm (1945 - 2025)</p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-300 leading-relaxed mb-6 max-w-md"
              >
                Trang web kỷ niệm 80 năm Cách mạng tháng Tám - sự kiện vĩ đại mở
                ra kỷ nguyên độc lập dân tộc gắn liền với chủ nghĩa xã hội.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Việt Nam</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="text-sm">Tự hào dân tộc</span>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {links.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <h4 className="text-white font-bold mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-red-300 transition-colors duration-200 text-sm"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Cách mạng tháng Tám. Được xây dựng với{" "}
              <Heart className="w-4 h-4 text-red-400 inline mx-1" />
              để tôn vinh lịch sử dân tộc.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-6"
            >
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/10 pt-8 pb-4"
        >
          <blockquote className="text-center">
            <p className="text-gray-300 italic text-lg mb-2">
              &ldquo;Không có gì quý hơn độc lập tự do&rdquo;
            </p>
            <cite className="text-red-300 font-semibold text-sm">
              - Chủ tịch Hồ Chí Minh
            </cite>
          </blockquote>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </footer>
  );
};

export default Footer;
