"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, createElement } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Crown,
  Flag,
  SwordsIcon,
  BookOpen,
  Target,
  Zap,
  Shield,
  Building,
  ArrowRight,
  X,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [selectedPreparation, setSelectedPreparation] = useState(null);

  // 15-year preparation phases (1930-1945)
  const preparationPhases = [
    {
      id: "founding",
      period: "1930-1935",
      title: "Sự Ra Đời và Cuộc Tổng Diễn Tập Đầu Tiên",
      description: "Thành lập ĐCSVN và cao trào Xô viết Nghệ Tĩnh",
      icon: Flag,
      color: "red",
      progress: 20,
      imgUrl:
        "https://nld.mediacdn.vn/2020/2/3/dang-cong-san-viet-nam-ra-doi-15807892076481528607632.jpg",
      detailedContent: {
        overview:
          "Sự kiện Đảng Cộng sản Việt Nam ra đời vào ngày 3 tháng 2 năm 1930 là một bước ngoặt lịch sử vĩ đại, chấm dứt cuộc khủng hoảng sâu sắc về đường lối cứu nước kéo dài hàng thập kỷ ở Việt Nam.",
        keyEvents: [
          "3/2/1930: Thành lập Đảng Cộng sản Việt Nam",
          "1930-1931: Cao trào cách mạng và Xô viết Nghệ Tĩnh",
          "1932-1935: Giai đoạn thoái trào và phục hồi",
        ],
        achievements: [
          "Có đường lối đúng đắn, khoa học kết hợp độc lập dân tộc và chủ nghĩa xã hội",
          "Khẳng định vai trò lãnh đạo của Đảng và sức mạnh liên minh công-nông",
          "Thành lập chính quyền Xô viết ở cấp xã, thôn lần đầu tiên",
          "Rút kinh nghiệm về khởi nghĩa vũ trang và xây dựng chính quyền",
        ],
        significance:
          "Cuộc tổng diễn tập đầu tiên cho Cách mạng tháng Tám, thể hiện sức mạnh quật khởi của liên minh công-nông và để lại những bài học quý báu về xây dựng chính quyền và mặt trận dân tộc thống nhất.",
      },
    },
    {
      id: "democratic",
      period: "1936-1939",
      title: "Cuộc Tổng Diễn Tập Thứ Hai - Đấu Tranh Dân Chủ",
      description: "Mặt trận Dân chủ Đông Dương và phong trào dân chủ",
      icon: Users,
      color: "yellow",
      progress: 45,
      imgUrl:
        "https://image.vtv.vn/resize/th/upload/2021/08/11/mat-tran-dan-chu-dong-duong-8-1628686976-1628687089598.jpg",
      detailedContent: {
        overview:
          "Giai đoạn đấu tranh dân chủ với sự thành lập Mặt trận Dân chủ Đông Dương, tập hợp đông đảo các tầng lớp nhân dân để đấu tranh công khai, hợp pháp và nửa hợp pháp.",
        context:
          "Tình hình thế giới có những thay đổi quan trọng: chủ nghĩa phát xít xuất hiện, đe dọa hòa bình thế giới. Tại Pháp, Mặt trận Nhân dân lên cầm quyền và ban hành một số chính sách tiến bộ cho các thuộc địa.",
        strategy:
          "Đảng tạm gác các khẩu hiệu đấu tranh giành độc lập dân tộc và ruộng đất, thay vào đó là các khẩu hiệu đòi tự do, dân sinh, dân chủ, cơm áo và hòa bình.",
        achievements: [
          "Xây dựng được 'đội quân chính trị' hùng hậu gồm hàng triệu người",
          "Tích lũy kinh nghiệm đấu tranh bằng các hình thức phong phú",
          "Rèn luyện kỹ năng tổ chức và lãnh đạo quần chúng",
          "Chuẩn bị lực lượng sẵn sàng cho cuộc chiến đấu quyết liệt hơn",
        ],
        significance:
          "Cuộc tổng diễn tập thứ hai giúp Đảng tích lũy kinh nghiệm quý báu trong việc tổ chức và lãnh đạo quần chúng đấu tranh bằng các hình thức từ biểu tình, bãi công đến đấu tranh nghị trường.",
      },
    },
    {
      id: "preparation",
      period: "1939-1945",
      title: "Cuộc Tổng Diễn Tập Cuối Cùng - Trực Tiếp Chuẩn Bị",
      description: "Việt Minh, lực lượng vũ trang và cao trào kháng Nhật",
      icon: Shield,
      color: "green",
      progress: 90,
      imgUrl:
        "https://cdnimg.vietnamplus.vn/uploaded/wbvhtw/2020_05_19/vn010.jpg",
      detailedContent: {
        overview:
          "Giai đoạn chuẩn bị toàn diện và quyết định nhất cho thắng lợi của Cách mạng tháng Tám với sự chuyển hướng chiến lược đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.",
        strategicShift:
          "Đảng quyết định tạm gác khẩu hiệu cách mạng ruộng đất, chỉ tịch thu ruộng đất của đế quốc và Việt gian để tập trung mũi nhọn vào kẻ thù chính là đế quốc Pháp-Nhật.",
        vietMinh:
          "Thành lập Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh) vào ngày 19/5/1941 với các tổ chức quần chúng mang tên 'Cứu quốc', tạo thành khối đại đoàn kết dân tộc vững chắc.",
        militaryForce:
          "Xây dựng lực lượng vũ trang từ các đội du kích, phát triển và thống nhất thành Việt Nam Giải phóng quân (4/1945).",
        bases:
          "Xây dựng và mở rộng các căn cứ địa cách mạng, đặc biệt là Khu giải phóng Việt Bắc, trở thành 'hình ảnh thu nhỏ của nước Việt Nam mới'.",
        significance:
          "Sau đảo chính 9/3/1945, phát động cao trào kháng Nhật cứu nước, thành lập các Ủy ban Dân tộc giải phóng làm chính quyền tiền khởi nghĩa.",
      },
    },
  ];

  const timelineEvents = [
    {
      id: "march-coup",
      date: "9/3/1945",
      title: "Đảo chính Nhật-Pháp",
      description: "Nhật Bản lật đổ chính quyền Pháp, độc chiếm Đông Dương",
      icon: SwordsIcon,
      color: "red",
      imgUrl:
        "https://nld.mediacdn.vn/2020/3/9/nhat-dao-chinh-phap-15838072776471924411639.jpg",
      details:
        "Cuộc đảo chính này đã loại bỏ kẻ thù trực tiếp của cách mạng Việt Nam và tạo ra cơ hội cho phong trào kháng Nhật cứu nước phát triển mạnh mẽ.",
      detailedContent: {
        overview:
          "Sự kiện Nhật đảo chính Pháp (9/3/1945) đã tạo ra một cuộc khủng hoảng chính trị sâu sắc và khoảng trống quyền lực quan trọng.",
        immediate:
          "Ngay lập tức, Ban Thường vụ Trung ương Đảng ra Chỉ thị lịch sử 'Nhật - Pháp bắn nhau và hành động của chúng ta', phát động cao trào kháng Nhật cứu nước.",
        significance:
          "Đây là tiền đề trực tiếp cho tổng khởi nghĩa, tạo điều kiện thuận lợi để Đảng và nhân dân chuẩn bị giành chính quyền.",
      },
    },
    {
      id: "tan-trao",
      date: "13-15/8/1945",
      title: "Hội nghị Tân Trào",
      description: "Đảng quyết định phát động Tổng khởi nghĩa toàn quốc",
      icon: Users,
      color: "yellow",
      imgUrl: "https://tuyengiao.vn/Uploads/2023/8/15/33/hoi-nghi-tan-trao.jpg",
      details:
        "Hội nghị toàn quốc của Đảng tại Tân Trào quyết định thành lập Ủy ban Khởi nghĩa toàn quốc và ban bố Quân lệnh số 1.",
      detailedContent: {
        overview:
          "Hội nghị toàn quốc của Đảng tại Tân Trào từ ngày 13-15/8/1945 đã đưa ra quyết định lịch sử phát động Tổng khởi nghĩa toàn quốc.",
        decisions: [
          "Thành lập Ủy ban Khởi nghĩa toàn quốc",
          "Ban bố Quân lệnh số 1 kêu gọi toàn dân khởi nghĩa",
          "Xác định chiến lược giành chính quyền từng bước",
        ],
        significance:
          "Đây là quyết định then chốt mở màn cho 15 ngày vàng son của dân tộc Việt Nam.",
      },
    },
    {
      id: "hanoi",
      date: "19/8/1945",
      title: "Khởi nghĩa Hà Nội",
      description: "Hàng vạn quần chúng nhân dân giành chính quyền thủ đô",
      icon: Flag,
      color: "green",
      imgUrl:
        "https://tuyengiao.vn/Uploads/2020/8/18/33/khoi-nghia-ha-noi-2.jpg",
      details:
        "Thắng lợi tại Hà Nội có ý nghĩa quyết định, mở đường cho cả nước và tạo hiệu ứng domino lan tỏa toàn quốc.",
      detailedContent: {
        overview:
          "Cuộc khởi nghĩa Hà Nội ngày 19/8/1945 là sự kiện có ý nghĩa quyết định trong toàn bộ Cách mạng tháng Tám.",
        process:
          "Hàng vạn quần chúng nhân dân thủ đô đã vùng lên giành chính quyền từ tay kẻ thù, biến Hà Nội thành trung tâm của cách mạng.",
        impact:
          "Thắng lợi tại thủ đô đã tạo hiệu ứng domino mạnh mẽ, thúc đẩy phong trào khởi nghĩa lan rộng ra toàn quốc.",
        significance:
          "Đây là chiến thắng mở đường, khẳng định ý chí và quyết tâm của toàn dân tộc trong việc giành lấy độc lập.",
      },
    },
    {
      id: "hue",
      date: "23/8/1945",
      title: "Khởi nghĩa Huế",
      description: "Nhân dân Thừa Thiên-Huế chiếm kinh thành cố đô",
      icon: Crown,
      color: "purple",
      imgUrl:
        "https://baotayninh.vn/Uploads/Images/2021/8/23/23/vua-bao-dai-thoai-vi.jpg",
      details:
        "Thắng lợi ở Huế mang ý nghĩa biểu tượng to lớn, chấm dứt chế độ phong kiến hàng ngàn năm của Việt Nam.",
      detailedContent: {
        overview:
          "Cuộc khởi nghĩa Huế ngày 23/8/1945 có ý nghĩa biểu tượng đặc biệt quan trọng trong lịch sử dân tộc.",
        symbolic:
          "Việc giành được kinh thành cố đô Huế đồng nghĩa với việc chấm dứt hoàn toàn chế độ phong kiến đã tồn tại hàng ngàn năm ở Việt Nam.",
        abdication:
          "Vua Bảo Đại thoái vị và giao ấn tín cho chính quyền cách mạng, thể hiện sự chuyển giao quyền lực hòa bình.",
        significance:
          "Thắng lợi ở Huế khẳng định tính chính nghĩa của cách mạng và sự ủng hộ của toàn thể nhân dân.",
      },
    },
    {
      id: "saigon",
      date: "25/8/1945",
      title: "Khởi nghĩa Sài Gòn",
      description: "Hàng triệu người Nam Bộ giành chính quyền",
      icon: MapPin,
      color: "blue",
      imgUrl:
        "https://nld.mediacdn.vn/2015/8/25/khoi-nghia-o-sai-gon-1440433336797.jpg",
      details:
        "Cuộc khởi nghĩa quy mô lớn nhất, thể hiện sức mạnh đoàn kết của nhân dân Nam Bộ và các tỉnh lân cận.",
      detailedContent: {
        overview:
          "Cuộc khởi nghĩa Sài Gòn ngày 25/8/1945 là cuộc khởi nghĩa có quy mô lớn nhất trong toàn bộ Cách mạng tháng Tám.",
        scale:
          "Hàng triệu người dân Nam Bộ và các tỉnh lân cận đã tham gia, thể hiện sức mạnh đoàn kết to lớn của nhân dân miền Nam.",
        challenges:
          "Dù gặp nhiều khó khăn do tình hình phức tạp ở Nam Bộ, nhân dân vẫn kiên quyết đấu tranh giành chính quyền.",
        significance:
          "Thắng lợi ở Sài Gòn hoàn thành bức tranh khởi nghĩa toàn quốc, khẳng định đây là một cuộc cách mạng thực sự của toàn dân.",
      },
    },
    {
      id: "independence",
      date: "2/9/1945",
      title: "Tuyên ngôn Độc lập",
      description: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập",
      icon: Flag,
      color: "red",
      imgUrl:
        "https://cdn.tgdd.vn/Files/2022/07/26/1450679/nguon-goc-y-nghia-ngay-cach-mang-thang-tam-thanh-cong-202207262209323836.jpg",
      details:
        "Tại Quảng trường Ba Đình, nước Việt Nam Dân chủ Cộng hòa chính thức ra đời trước toàn thế giới.",
      detailedContent: {
        overview:
          "Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đã đọc Tuyên ngôn Độc lập, tuyên bố sự ra đời của nước Việt Nam Dân chủ Cộng hòa.",
        atmosphere:
          "Hàng trăm nghìn người dân Hà Nội và các vùng lân cận đã tập trung về Quảng trường Ba Đình để chứng kiến khoảnh khắc lịch sử.",
        content:
          "Tuyên ngôn khẳng định quyền bình đẳng của các dân tộc, quyền sống, quyền tự do và quyền mưu cầu hạnh phúc của mỗi người.",
        significance:
          "Đây là đỉnh cao của Cách mạng tháng Tám, đánh dấu Việt Nam chính thức trở thành một quốc gia độc lập trên bản đồ thế giới.",
      },
    },
  ];

  return (
    <section
      id="timeline"
      ref={ref}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-slate-900/50"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Dòng Thời Gian
            <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              Cách Mạng
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            15 năm chuẩn bị gian khổ và 15 ngày vàng son thay đổi vận mệnh dân
            tộc
          </p>
        </motion.div>

        {/* 15-Year Preparation Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Mười Lăm Năm Tôi Luyện (1930-1945)
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {preparationPhases.map((phase, index) => (
              <Dialog.Root key={phase.id}>
                <Dialog.Trigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300 group hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br from-${phase.color}-500 to-${phase.color}-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-3xl font-bold ${
                            phase.color === "red"
                              ? "text-red-400"
                              : phase.color === "yellow"
                              ? "text-yellow-400"
                              : "text-green-400"
                          } mb-1`}
                        >
                          {phase.progress}%
                        </div>
                        <div className="text-gray-400 text-sm">
                          {phase.period}
                        </div>
                      </div>
                    </div>

                    <h4 className="text-white font-bold text-lg mb-3 leading-tight">
                      {phase.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="flex items-center text-red-400 text-sm font-medium">
                      <span>Xem chi tiết</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${phase.progress}%` } : {}
                        }
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.3 }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          phase.color === "red"
                            ? "from-red-500 to-red-400"
                            : phase.color === "yellow"
                            ? "from-yellow-500 to-yellow-400"
                            : "from-green-500 to-green-400"
                        }`}
                      />
                    </div>
                  </motion.div>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
                  <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-4xl max-h-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 p-8 overflow-y-auto">
                    <Dialog.Close className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white/70 hover:text-white hover:bg-white/20 transition-colors">
                      <X className="h-5 w-5" />
                    </Dialog.Close>

                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br from-${phase.color}-500 to-${phase.color}-600 rounded-xl flex items-center justify-center mr-4`}
                        >
                          <phase.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <span className="text-red-300 font-semibold text-sm">
                            {phase.period}
                          </span>
                          <h2 className="text-2xl font-bold text-white">
                            {phase.title}
                          </h2>
                        </div>
                      </div>

                      {/* Phase Image */}
                      {phase.imgUrl && (
                        <div className="mb-6 rounded-xl overflow-hidden">
                          <Image
                            src={phase.imgUrl}
                            alt={phase.title}
                            width={800}
                            height={400}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      )}
                    </div>

                    <div className="space-y-6 text-gray-300">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">
                          Tổng quan
                        </h3>
                        <p className="leading-relaxed">
                          {phase.detailedContent.overview}
                        </p>
                      </div>

                      {phase.detailedContent.keyEvents && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Sự kiện quan trọng
                          </h3>
                          <ul className="space-y-2">
                            {phase.detailedContent.keyEvents.map((event, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-red-400 mr-2">•</span>
                                <span>{event}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {phase.detailedContent.achievements && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Thành tựu đạt được
                          </h3>
                          <ul className="space-y-2">
                            {phase.detailedContent.achievements.map(
                              (achievement, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-green-400 mr-2">•</span>
                                  <span>{achievement}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {phase.detailedContent.context && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Bối cảnh
                          </h3>
                          <p className="leading-relaxed">
                            {phase.detailedContent.context}
                          </p>
                        </div>
                      )}

                      {phase.detailedContent.strategy && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Chiến lược
                          </h3>
                          <p className="leading-relaxed">
                            {phase.detailedContent.strategy}
                          </p>
                        </div>
                      )}

                      {phase.detailedContent.vietMinh && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Mặt trận Việt Minh
                          </h3>
                          <p className="leading-relaxed">
                            {phase.detailedContent.vietMinh}
                          </p>
                        </div>
                      )}

                      {phase.detailedContent.militaryForce && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Lực lượng vũ trang
                          </h3>
                          <p className="leading-relaxed">
                            {phase.detailedContent.militaryForce}
                          </p>
                        </div>
                      )}

                      {phase.detailedContent.bases && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Căn cứ địa
                          </h3>
                          <p className="leading-relaxed">
                            {phase.detailedContent.bases}
                          </p>
                        </div>
                      )}

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">
                          Ý nghĩa lịch sử
                        </h3>
                        <p className="leading-relaxed">
                          {phase.detailedContent.significance}
                        </p>
                      </div>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            ))}
          </div>
        </motion.div>

        {/* 15 Days Revolution Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Mười Lăm Ngày Vàng Son (8-9/1945)
          </h3>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Timeline */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-yellow-500 to-green-500"></div>

                <div className="space-y-8">
                  {timelineEvents.map((event, index) => (
                    <Dialog.Root key={event.id}>
                      <Dialog.Trigger asChild>
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: 0.8 + index * 0.1,
                          }}
                          onClick={() => setSelectedEvent(index)}
                          className={`relative cursor-pointer group ${
                            selectedEvent === index ? "scale-105" : ""
                          } transition-all duration-300`}
                        >
                          {/* Timeline Dot */}
                          <div
                            className={`absolute left-4 w-4 h-4 rounded-full border-4 border-white bg-${
                              event.color
                            }-500 group-hover:scale-125 transition-transform duration-300 ${
                              selectedEvent === index
                                ? "ring-4 ring-white/30"
                                : ""
                            }`}
                          ></div>

                          {/* Content Card */}
                          <div className="ml-16 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-red-500/50 transition-all duration-300 group-hover:bg-white/15">
                            <div className="flex items-start space-x-4">
                              <div
                                className={`w-12 h-12 bg-gradient-to-br from-${event.color}-500 to-${event.color}-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                              >
                                <event.icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center space-x-3">
                                    <Calendar className="w-4 h-4 text-red-300" />
                                    <span className="text-red-300 font-semibold text-sm">
                                      {event.date}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-red-400 group-hover:translate-x-1 transition-transform duration-200" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-300 transition-colors duration-300">
                                  {event.title}
                                </h3>
                                <p className="text-gray-300 text-sm">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </Dialog.Trigger>

                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
                        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-4xl max-h-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 p-8 overflow-y-auto">
                          <Dialog.Close className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white/70 hover:text-white hover:bg-white/20 transition-colors">
                            <X className="h-5 w-5" />
                          </Dialog.Close>

                          <div className="mb-6">
                            <div className="flex items-center mb-4">
                              <div
                                className={`w-16 h-16 bg-gradient-to-br from-${event.color}-500 to-${event.color}-600 rounded-xl flex items-center justify-center mr-4`}
                              >
                                <event.icon className="w-8 h-8 text-white" />
                              </div>
                              <div>
                                <span className="text-red-300 font-semibold text-sm">
                                  {event.date}
                                </span>
                                <h2 className="text-2xl font-bold text-white">
                                  {event.title}
                                </h2>
                              </div>
                            </div>

                            {/* Event Image */}
                            {event.imgUrl && (
                              <div className="mb-6 rounded-xl overflow-hidden">
                                <Image
                                  src={event.imgUrl}
                                  alt={event.title}
                                  width={800}
                                  height={400}
                                  className="w-full h-64 object-cover"
                                />
                              </div>
                            )}
                          </div>

                          <div className="space-y-6 text-gray-300">
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-3">
                                Tổng quan
                              </h3>
                              <p className="leading-relaxed">
                                {event.detailedContent.overview}
                              </p>
                            </div>

                            {event.detailedContent.decisions && (
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                  Các quyết định quan trọng
                                </h3>
                                <ul className="space-y-2">
                                  {event.detailedContent.decisions.map(
                                    (decision, i) => (
                                      <li key={i} className="flex items-start">
                                        <span className="text-yellow-400 mr-2">
                                          •
                                        </span>
                                        <span>{decision}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}

                            {event.detailedContent.process && (
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                  Diễn biến
                                </h3>
                                <p className="leading-relaxed">
                                  {event.detailedContent.process}
                                </p>
                              </div>
                            )}

                            {event.detailedContent.impact && (
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                  Tác động
                                </h3>
                                <p className="leading-relaxed">
                                  {event.detailedContent.impact}
                                </p>
                              </div>
                            )}

                            {event.detailedContent.symbolic && (
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                  Ý nghĩa biểu tượng
                                </h3>
                                <p className="leading-relaxed">
                                  {event.detailedContent.symbolic}
                                </p>
                              </div>
                            )}

                            {event.detailedContent.scale && (
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                  Quy mô
                                </h3>
                                <p className="leading-relaxed">
                                  {event.detailedContent.scale}
                                </p>
                              </div>
                            )}

                            {event.detailedContent.atmosphere && (
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                  Không khí lịch sử
                                </h3>
                                <p className="leading-relaxed">
                                  {event.detailedContent.atmosphere}
                                </p>
                              </div>
                            )}

                            <div>
                              <h3 className="text-lg font-semibold text-white mb-3">
                                Ý nghĩa lịch sử
                              </h3>
                              <p className="leading-relaxed">
                                {event.detailedContent.significance}
                              </p>
                            </div>
                          </div>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  ))}
                </div>
              </div>
            </div>

            {/* Detail Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="lg:sticky lg:top-32 lg:h-fit"
            >
              <div className="bg-gradient-to-br from-slate-800/60 to-red-900/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Chi tiết sự kiện
                </h3>

                <motion.div
                  key={selectedEvent}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-${timelineEvents[selectedEvent].color}-500 to-${timelineEvents[selectedEvent].color}-600 rounded-xl flex items-center justify-center`}
                    >
                      {createElement(timelineEvents[selectedEvent].icon, {
                        className: "w-8 h-8 text-white",
                      })}
                    </div>
                    <div>
                      <p className="text-red-300 font-semibold">
                        {timelineEvents[selectedEvent].date}
                      </p>
                      <h4 className="text-white font-bold text-xl">
                        {timelineEvents[selectedEvent].title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {timelineEvents[selectedEvent].details}
                  </p>

                  <div className="border-t border-white/20 pt-6">
                    <h5 className="text-white font-semibold mb-3">
                      Ý nghĩa lịch sử chung
                    </h5>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Thể hiện sức mạnh đoàn kết của toàn dân tộc</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Khẳng định ý chí độc lập dân tộc</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Mở ra kỷ nguyên mới cho Việt Nam</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-red-400 mb-2">15</div>
            <div className="text-gray-300">Năm chuẩn bị</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-yellow-400 mb-2">15</div>
            <div className="text-gray-300">Ngày khởi nghĩa</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-gray-300">Thành công</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
