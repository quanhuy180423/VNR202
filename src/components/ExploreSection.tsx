"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Flag,
  BookOpen,
  Target,
  Zap,
  Shield,
  ArrowRight,
  X,
  Quote,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

import { LucideIcon } from "lucide-react";

interface KeyFigure {
  name: string;
  role: string;
  image: string;
}

interface HistoricalEvent {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  heroImage: string;
  icon: LucideIcon;
  color: string;
  category: string;
  detailedInfo: {
    fullTitle: string;
    timeline: string;
    location: string;
    context: string;
    keyPoints: string[];
    significance: string;
    keyFigures: KeyFigure[];
    gallery: string[];
    quote: string;
    connections: {
      previous: string | null;
      next: string | null;
    };
  };
}

const ExploreSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cấp độ 1: Thông tin Review - Hiển thị trên Timeline/Card
  const historicalEvents = [
    {
      id: "dcsvn-founding",
      title: "Thành lập ĐCSVN",
      date: "3/2/1930",
      shortDescription:
        "Bước ngoặt vĩ đại, chấm dứt khủng hoảng đường lối cứu nước",
      heroImage:
        "https://www.ntu.edu.vn/uploads/56/images/news/9115/img/dang-cong-san-viet-nam-ra-doi-la-buoc-ngoat-v-dai-trong-lich-su-cach-mang-viet-n.jpg",
      icon: Flag,
      color: "red",
      category: "Chính trị",
      // Cấp độ 2: Thông tin Chi tiết
      detailedInfo: {
        fullTitle: "Hội nghị Hợp nhất thành lập Đảng Cộng sản Việt Nam",
        timeline: "3-7/2/1930",
        location: "Cửu Long, Hương Cảng (Hong Kong), Trung Quốc",
        context:
          "Sự thất bại liên tiếp của các con đường cứu nước trước đó đã tạo ra một khoảng trống sâu sắc về hệ tư tưởng và tổ chức. Ba tổ chức cộng sản riêng rẽ đe dọa làm phân mảnh phong trào.",
        keyPoints: [
          "Hợp nhất 3 tổ chức cộng sản thành Đảng Cộng sản Việt Nam",
          "Thông qua Cương lĩnh chính trị đầu tiên do Nguyễn Ái Quốc soạn thảo",
          "Xác định con đường: tư sản dân quyền cách mạng và thổ địa cách mạng",
          "Khẳng định vai trò lãnh đạo của giai cấp công nhân",
        ],
        significance:
          "Chấm dứt thời kỳ khủng hoảng, bế tắc về đường lối cứu nước kéo dài hàng chục năm. Đây là sự chuẩn bị tất yếu đầu tiên, có tính quyết định cho mọi thắng lợi về sau.",
        keyFigures: [
          {
            name: "Nguyễn Ái Quốc",
            role: "Chủ trì hội nghị",
            image:
              "https://api.toploigiai.vn/storage/uploads/nguyen-ai-quoc-vao-dang-xa-hoi-phap-nam-nao_1",
          },
          {
            name: "Trịnh Đình Cửu",
            role: "Đại biểu ĐDCSĐ",
            image:
              "https://tusachonline.files.wordpress.com/2021/03/e4d4e-115-1.jpg",
          },
          {
            name: "Nguyễn Đức Cảnh",
            role: "Đại biểu ĐDCSĐ",
            image:
              "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/8/11/940787/Nguyen-Duc-Canh.jpg",
          },
          {
            name: "Châu Văn Liêm",
            role: "Đại biểu ANCSĐ",
            image:
              "https://tse4.mm.bing.net/th/id/OIP.AU1L1AuMS2jNKvaaUWeA9QHaJk?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
          },
        ],
        gallery: [
          "https://www.ntu.edu.vn/uploads/56/images/news/9115/img/dang-cong-san-viet-nam-ra-doi-la-buoc-ngoat-v-dai-trong-lich-su-cach-mang-viet-n.jpg",
          "https://th.bing.com/th/id/R.46ce69161bfeaeab250cef0730b618d4?rik=qGuC2xwMToSKVg&pid=ImgRaw&r=0",
          "https://tapchicongsan.org.vn/documents/20182/21413683/thanh+l%E1%BA%ADp+%C4%90%E1%BA%A3ng+%E1%BB%9F+H%C6%B0%C6%A1ng+C%E1%BA%A3ng.jpg/63e086b2-3d72-41e5-836b-9d3d6532adc0?t=1581328399958",
        ],
        quote:
          "Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản.",
        connections: {
          previous: null,
          next: "soviet-nghe-tinh",
        },
      },
    },
    {
      id: "soviet-nghe-tinh",
      title: "Xô viết Nghệ-Tĩnh",
      date: "1930-1931",
      shortDescription:
        "Cuộc tập dượt đầu tiên, thành lập chính quyền Xô viết của dân",
      heroImage:
        "https://bna.1cdn.vn/2024/10/27/slide-1-tranh-xo-viet-nghe-tinh.jpg",
      icon: Users,
      color: "orange",
      category: "Phong trào",
      detailedInfo: {
        fullTitle: "Cao trào Cách mạng 1930-1931 và Xô viết Nghệ-Tĩnh",
        timeline: "1930-1931 (đỉnh cao 5-9/1930)",
        location: "Nghệ An, Hà Tĩnh (trung tâm), lan rộng cả nước",
        context:
          "Cuộc khủng hoảng kinh tế 1929-1933 đẩy đời sống công nhân, nông dân vào bước đường cùng. Sự ra đời của Đảng kịp thời biến sự phẫn uất thành hành động cách mạng có tổ chức.",
        keyPoints: [
          "Biểu tình 8.000 nông dân Hưng Nguyên ngày 12/9/1930",
          "Thành lập chính quyền Xô viết ở nhiều thôn xã",
          "Chia ruộng đất công, bãi bỏ thuế vô lý",
          "Mở lớp xóa mù chữ, bài trừ hủ tục",
        ],
        significance:
          "Cuộc tập dượt đầu tiên cho Cách mạng tháng Tám. Khẳng định vai trò lãnh đạo của Đảng và sức mạnh liên minh công-nông. Để lại bài học quý báu về xây dựng chính quyền.",
        keyFigures: [
          {
            name: "Nguyễn Phong Sắc",
            role: "Lãnh đạo phong trào",
            image:
              "https://cdnmedia.baotintuc.vn/Upload/DmtgOUlHWBO5POIHzIwr1A/files/2022/02/01/nguyen-phong-sac-01022022a.jpg",
          },
          {
            name: "Trần Phú",
            role: "Tổng Bí thư",
            image: "https://bbt.1cdn.vn/2024/05/01/tran-phu.jpg",
          },
        ],
        gallery: [
          "https://th.bing.com/th/id/R.7631bb8b57ad4ed87ef488bb7e885e2f?rik=yiDWUWdT2Lol0w&riu=http%3a%2f%2fcualo.vn%2fwp-content%2fuploads%2f2021%2f09%2fLC6B0E1BBA3c-C491E1BB93-phong-trC3A0o-XC3B4-viE1BABFt-NghE1BB87-TC4A9nh1930-1931.jpg&ehk=ydIz4%2fWDBfqvfoR99DZnA2hsDze5O7%2f4qAhWXjbzaRc%3d&risl=&pid=ImgRaw&r=0",
          "https://bbt.1cdn.vn/2024/09/11/2.jpg",
          "https://th.bing.com/th/id/R.f47cab783f20270d75203d2463503f33?rik=t3c3LuuF1Rt7Qg&riu=http%3a%2f%2ftuyengiaoangiang.vn%2fimages%2f2022%2fThang9%2fTrangve-XVNT.jpg&ehk=Nz2tP%2foTyjXLqVebynHLHooBP0v4Sc%2ff5%2bcj1PgIVMI%3d&risl=&pid=ImgRaw&r=0",
        ],
        quote: "Đả đảo chủ nghĩa đế quốc! Đả đảo phong kiến!",
        connections: {
          previous: "dcsvn-founding",
          next: "democratic-movement",
        },
      },
    },
    {
      id: "democratic-movement",
      title: "Phong trào Dân chủ",
      date: "1936-1939",
      shortDescription:
        "Cuộc tập dượt thứ hai, xây dựng đội quân chính trị hùng hậu",
      heroImage:
        "https://luatduonggia.vn/wp-content/uploads/2024/11/y-nghia-lich-su-va-bai-hoc-cua-phong-trao-dan-chu-1936-1939.jpg",
      icon: BookOpen,
      color: "yellow",
      category: "Phong trào",
      detailedInfo: {
        fullTitle: "Phong trào Mặt trận Dân chủ Đông Dương",
        timeline: "1936-1939",
        location: "Cả nước, đặc biệt Hà Nội, Sài Gòn, Huế",
        context:
          "Mặt trận Bình dân Pháp lên cầm quyền, nới lỏng chính sách thuộc địa. Chủ nghĩa phát xít đe dọa hòa bình thế giới, cần thành lập Mặt trận chống phát xít.",
        keyPoints: [
          "Thành lập Mặt trận Dân chủ Đông Dương (1938)",
          "Phong trào Đông Dương Đại hội thu thập dân nguyện",
          "Xuất bản báo chí công khai (Dân chúng, Lao động)",
          "Mít tinh 25.000 người tại Khu Đấu Xảo (1/5/1938)",
        ],
        significance:
          "Cuộc tập dượt thứ hai, tích lũy kinh nghiệm đấu tranh công khai, hợp pháp. Xây dựng đội quân chính trị hùng hậu gồm hàng triệu người, chuẩn bị cho Tổng khởi nghĩa.",
        keyFigures: [
          {
            name: "Hà Huy Tập",
            role: "Tổng Bí thư",
            image:
              "https://media.vov.vn/sites/default/files/styles/large/public/2021-04/tong_bi_thu_ha_huy_tap_ii.mp4_.png",
          },
          {
            name: "Lê Hồng Phong",
            role: "Tổng Bí thư",
            image:
              "https://th.bing.com/th/id/R.01a3de02e7056bcf6352b747257a3395?rik=QGymUomyFiSWcg&pid=ImgRaw&r=0",
          },
          {
            name: "Nguyễn Văn Cừ",
            role: "Tổng Bí thư",
            image: "https://bbt.1cdn.vn/2022/07/08/van.png",
          },
        ],
        gallery: [
          "https://xonnews.net/uploads/worigin/2020/12/08/phong-trao-dan-chu-1936-den-1939-1.jpg",
          "https://www.dinhnghia.com.vn/wp-content/uploads/2022/08/phong-trao-dan-chu-1936-den-1939-noi-dung-tinh-chat-ket-qua-y-nghia-2.jpg",
          "https://cdn2.olm.vn/docviewer/file/dethi/lichsu/5f048b82ee1d1.jpg",
        ],
        quote:
          "Chống phát xít, chống chiến tranh đế quốc, chống bọn phản động thuộc địa và tay sai, đòi tự do, dân chủ, cơm áo và hòa bình.",
        connections: {
          previous: "soviet-nghe-tinh",
          next: "viet-minh-founding",
        },
      },
    },
    {
      id: "viet-minh-founding",
      title: "Thành lập Việt Minh",
      date: "19/5/1941",
      shortDescription:
        "Hồ Chí Minh về nước, thành lập mặt trận đoàn kết toàn dân",
      heroImage:
        "https://th.bing.com/th/id/R.bbbdfcd18f4a16c2c22345e719954d09?rik=%2brYsb1JuH1eqSA&riu=http%3a%2f%2fbaoquankhu4.com.vn%2fupload%2f18269%2f20210518%2fBac_Ho_va_cac_dai_bieu_tai_dai_hoi_toan_quoc_thong_nhat_Viet_minh_____Lien_Viet_tu_3_den_7-3-1951_in_trang_4_-_y_co_9x5_87cm_8ea4f6634b.jpg&ehk=iJztIsjintOuTeeR3gEc5lT1ORneFM%2bN8T%2fardTLaT0%3d&risl=&pid=ImgRaw&r=0",
      icon: Shield,
      color: "green",
      category: "Tổ chức",
      detailedInfo: {
        fullTitle:
          "Hội nghị Trung ương 8 và sự thành lập Mặt trận Việt Nam Độc lập Đồng minh",
        timeline: "10-19/5/1941",
        location: "Pác Bó, Hà Quảng, Cao Bằng",
        context:
          "Chiến tranh thế giới thứ hai bùng nổ, Pháp đầu hàng Đức, Nhật xâm lược Đông Dương. Nhân dân Việt Nam rơi vào cảnh 'một cổ hai tròng'. Hồ Chí Minh về nước sau 30 năm.",
        keyPoints: [
          "Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu",
          "Tạm gác khẩu hiệu cách mạng ruộng đất",
          "Thành lập Mặt trận Việt Nam Độc lập Đồng minh",
          "Xúc tiến chuẩn bị khởi nghĩa vũ trang",
        ],
        significance:
          "Hoàn chỉnh chuyển hướng chiến lược, tạo ra sức mạnh tổng hợp của toàn dân tộc. Chuẩn bị trực tiếp và quyết định cho thắng lợi Cách mạng tháng Tám.",
        keyFigures: [
          {
            name: "Hồ Chí Minh",
            role: "Chủ trì hội nghị",
            image:
              "https://th.bing.com/th/id/R.f77abb2760888c51077a411eb73ca994?rik=kA2S7wvPHE1D3A&pid=ImgRaw&r=0",
          },
          {
            name: "Trường Chinh",
            role: "Tổng Bí thư",
            image:
              "https://file3.qdnd.vn/data/images/0/2025/01/27/upload_2237/truong%20chinh.png?dpi=150&quality=100&w=870",
          },
          {
            name: "Hoàng Văn Thụ",
            role: "Ủy viên Trung ương",
            image:
              "https://th.bing.com/th/id/R.55879510cab18020df15a332721b1692?rik=VmAM%2fZpbV2miPw&pid=ImgRaw&r=0",
          },
          {
            name: "Võ Nguyên Giáp",
            role: "Ủy viên Trung ương",
            image:
              "https://th.bing.com/th/id/R.e81d98a946937fc6f592d98e61fab31b?rik=d2JQXO6dxqGIjw&riu=http%3a%2f%2fredsvn.net%2fwp-content%2fuploads%2f2019%2f02%2fGeneralGiap-MAIN-PHOTO1.jpg&ehk=Z9JSLElpW846tizd9%2f7HIDE2zsJLCR%2fyrm3LOaR0rQE%3d&risl=&pid=ImgRaw&r=0",
          },
        ],
        gallery: [
          "https://tse1.mm.bing.net/th/id/OIP.xXc29rT2Sa9hSfPZacH6rAHaHn?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
          "https://baotanglichsu.vn/DataFiles/News/Tintuc_cgs_vn_20145148h7m17s.jpg",
          "https://th.bing.com/th/id/R.bbbdfcd18f4a16c2c22345e719954d09?rik=%2brYsb1JuH1eqSA&riu=http%3a%2f%2fbaoquankhu4.com.vn%2fupload%2f18269%2f20210518%2fBac_Ho_va_cac_dai_bieu_tai_dai_hoi_toan_quoc_thong_nhat_Viet_minh_____Lien_Viet_tu_3_den_7-3-1951_in_trang_4_-_y_co_9x5_87cm_8ea4f6634b.jpg&ehk=iJztIsjintOuTeeR3gEc5lT1ORneFM%2bN8T%2fardTLaT0%3d&risl=&pid=ImgRaw&r=0",
        ],
        quote: "Trong lúc này quyền lợi dân tộc giải phóng cao hơn hết thảy.",
        connections: {
          previous: "democratic-movement",
          next: "august-revolution",
        },
      },
    },
  ];

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedEvent.detailedInfo.gallery.length
      );
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedEvent.detailedInfo.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="explore" ref={ref} className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-red-900/20 to-slate-900"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Khám Phá
            <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              Lịch Sử
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Hành trình 15 năm chuẩn bị (1930-1945) - Từ thành lập Đảng đến thắng
            lợi Cách mạng tháng Tám
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-yellow-500 to-green-500"></div>

          {/* Events */}
          <div className="space-y-20">
            {historicalEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Event Card - Cấp độ 1: Thông tin Review */}
                <div className="w-5/12">
                  <div
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-red-500/50 transition-all duration-300 group cursor-pointer hover:scale-105"
                    onClick={() => {
                      setSelectedEvent(event);
                      setCurrentImageIndex(0);
                    }}
                  >
                    {/* Hero Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={event.heroImage}
                        alt={event.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {event.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-${event.color}-500 to-${event.color}-600 rounded-full flex items-center justify-center`}
                        >
                          <event.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-red-300 font-semibold text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date}
                        </span>
                        <ArrowRight className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {event.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center">
                  <div
                    className={`w-6 h-6 bg-gradient-to-r from-${event.color}-500 to-${event.color}-600 rounded-full border-4 border-white shadow-lg z-10`}
                  ></div>
                </div>

                {/* Empty Space */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal - Cấp độ 2: Thông tin Chi tiết */}
        <Dialog.Root
          open={!!selectedEvent}
          onOpenChange={() => setSelectedEvent(null)}
        >
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50" />
            <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-6xl max-h-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 overflow-y-auto">
              <Dialog.Title className="sr-only">
                {selectedEvent?.detailedInfo.fullTitle ||
                  "Chi tiết sự kiện lịch sử"}
              </Dialog.Title>
              <Dialog.Close className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white/70 hover:text-white hover:bg-white/20 transition-colors z-10">
                <X className="h-6 w-6" />
              </Dialog.Close>

              {selectedEvent && (
                <div>
                  {/* Module Hero */}
                  <div className="relative h-80 overflow-hidden rounded-t-2xl">
                    <Image
                      src={
                        selectedEvent.detailedInfo.gallery[currentImageIndex]
                      }
                      alt={selectedEvent.detailedInfo.fullTitle}
                      width={1200}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Gallery Navigation */}
                    {selectedEvent.detailedInfo.gallery.length > 1 && (
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <button
                          onClick={prevImage}
                          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    )}

                    {/* Hero Content */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        {selectedEvent.detailedInfo.fullTitle}
                      </h2>
                      <div className="flex flex-wrap gap-4 text-gray-300">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-red-400" />
                          {selectedEvent.detailedInfo.timeline}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
                          {selectedEvent.detailedInfo.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Module Nội dung chính */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                          <BookOpen className="w-6 h-6 mr-3 text-red-400" />
                          Bối cảnh
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {selectedEvent.detailedInfo.context}
                        </p>

                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                          <Target className="w-6 h-6 mr-3 text-yellow-400" />
                          Diễn biến chính
                        </h3>
                        <ul className="space-y-3">
                          {selectedEvent.detailedInfo.keyPoints.map(
                            (point, index) => (
                              <li
                                key={index}
                                className="flex items-start text-gray-300"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {point}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                          <Zap className="w-6 h-6 mr-3 text-green-400" />Ý nghĩa
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {selectedEvent.detailedInfo.significance}
                        </p>
                      </div>
                    </div>

                    {/* Module Khám phá */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                        <Users className="w-6 h-6 mr-3 text-blue-400" />
                        Nhân vật liên quan
                      </h3>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {selectedEvent.detailedInfo.keyFigures.map(
                          (figure, index) => (
                            <div
                              key={index}
                              className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
                            >
                              <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden border-2 border-white/20">
                                <Image
                                  src={figure.image}
                                  alt={figure.name}
                                  width={64}
                                  height={64}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <h4 className="text-white font-semibold text-sm mb-1">
                                {figure.name}
                              </h4>
                              <p className="text-gray-400 text-xs">
                                {figure.role}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Trích dẫn nổi bật */}
                    <div className="bg-gradient-to-r from-red-900/30 to-yellow-900/30 rounded-2xl p-6 mb-8 border border-red-500/30">
                      <div className="flex items-start">
                        <Quote className="w-8 h-8 text-red-400 mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <blockquote className="text-white text-lg italic leading-relaxed mb-3">
                            &ldquo;{selectedEvent.detailedInfo.quote}&rdquo;
                          </blockquote>
                          <cite className="text-red-300 text-sm">
                            - Trích dẫn lịch sử
                          </cite>
                        </div>
                      </div>
                    </div>

                    {/* Module Kết nối */}
                    <div className="flex justify-between items-center pt-6 border-t border-white/20">
                      <div>
                        {selectedEvent.detailedInfo.connections.previous && (
                          <button
                            onClick={() => {
                              const prevEvent = historicalEvents.find(
                                (e) =>
                                  e.id ===
                                  selectedEvent.detailedInfo.connections
                                    .previous
                              );
                              if (prevEvent) {
                                setSelectedEvent(prevEvent);
                                setCurrentImageIndex(0);
                              }
                            }}
                            className="flex items-center text-gray-300 hover:text-white transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5 mr-2" />
                            Sự kiện trước
                          </button>
                        )}
                      </div>
                      <div>
                        {selectedEvent.detailedInfo.connections.next && (
                          <button
                            onClick={() => {
                              const nextEvent = historicalEvents.find(
                                (e) =>
                                  e.id ===
                                  selectedEvent.detailedInfo.connections.next
                              );
                              if (nextEvent) {
                                setSelectedEvent(nextEvent);
                                setCurrentImageIndex(0);
                              }
                            }}
                            className="flex items-center text-gray-300 hover:text-white transition-colors"
                          >
                            Sự kiện tiếp theo
                            <ChevronRight className="w-5 h-5 ml-2" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
};

export default ExploreSection;
