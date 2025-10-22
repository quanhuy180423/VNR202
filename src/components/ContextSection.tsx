"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Swords,
  Users,
  Calendar,
  TrendingDown,
  Flag,
  BookOpen,
  Target,
  Shield,
  Zap,
  X,
  ArrowRight,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

const ContextSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const globalCrisisEvents = [
    {
      id: "great-depression",
      date: "1929-1933",
      title: "Đại Suy Thoái Toàn Cầu",
      description:
        "Khủng hoảng kinh tế làm suy yếu chủ nghĩa đế quốc, tăng cường bóc lột thuộc địa",
      icon: TrendingDown,
      imgUrl:
        "https://www.dinhnghia.com.vn/wp-content/uploads/2022/08/cuoc-khung-hoang-kinh-te-1929-den-1933-dac-diem-nguyen-nhan-va-hau-qua-7.jpg",
      detailedContent: {
        overview:
          "Cuộc Đại Suy thoái 1929-1933 không đơn thuần là một sự kiện kinh tế mà là một cú sốc mang tính hệ thống đã làm suy yếu về cơ bản trật tự thế giới tư bản-đế quốc.",
        impacts: [
          "Tàn phá nặng nề nền kinh tế của các quốc gia tư bản chủ nghĩa",
          "Dẫn đến tình trạng thất nghiệp hàng loạt và bất ổn xã hội",
          "Sự sụt giảm mạnh về sản xuất, đẩy lùi sức sản xuất hàng chục năm",
          "Hàng trăm triệu người rơi vào cảnh đói khổ",
        ],
        consequences:
          "Cuộc khủng hoảng đã gây ra hai hệ quả sâu sắc: tạo điều kiện cho chủ nghĩa phát xít lên nắm quyền và làm xuất hiện hai khối đế quốc đối lập.",
        vietnamImpact:
          "Các cường quốc đế quốc đã phản ứng bằng cách tăng cường bóc lột các thuộc địa để bù đắp những tổn thất ở chính quốc. Chính sách 'trút gánh nặng' này là cơ chế trung tâm kết nối cuộc khủng hoảng toàn cầu với tình hình cụ thể ở Việt Nam.",
      },
    },
    {
      id: "fascism-rise",
      date: "1930s",
      title: "Sự Trỗi Dậy Phát Xít",
      description:
        "Đức, Ý, Nhật phát triển chủ nghĩa phát xít, thách thức trật tự thế giới",
      icon: Shield,
      imgUrl:
        "https://img.quizur.com/f/img631a9f10305b14.89851635.jpg?lastEdited=1662689044",
      detailedContent: {
        overview:
          "Sự trỗi dậy của chủ nghĩa phát xít, một hệ quả trực tiếp của trật tự sau Thế chiến thứ nhất và cuộc Đại Suy thoái, đã tạo ra một hình thức chủ nghĩa đế quốc mới, hung hăng.",
        countries: [
          "Ý: Mussolini lên nắm quyền với tham vọng khôi phục Đế chế La Mã",
          "Đức: Hitler và Đảng Nazi xây dựng Reich thứ ba",
          "Nhật Bản: Chủ nghĩa quân phiệt với tham vọng bành trướng ở châu Á",
        ],
        impact:
          "Cuộc xâm lược Trung Quốc của Nhật đã đưa lực lượng của họ đến sát biên giới Việt Nam, tạo ra một mối đe dọa trực tiếp đối với Đông Dương thuộc Pháp.",
        significance:
          "Điều này tạo ra một sự thay đổi cơ bản từ một động lực lưỡng cực (kẻ cai trị và người bị trị) sang một động lực tam cực (Pháp, Nhật, và Việt Nam).",
      },
    },
    {
      id: "world-war-ii",
      date: "1940-1945",
      title: "Chiến Tranh Thế Giới II",
      description:
        "Xung đột toàn cầu tạo cơ hội cho các phong trào giải phóng thuộc địa",
      icon: Globe,
      imgUrl:
        "https://tse3.mm.bing.net/th/id/OIP.pUccQ963mmGdXSG-WXguOAHaFH?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      detailedContent: {
        overview:
          "Sự bùng nổ của Chiến tranh thế giới thứ hai vào tháng 9 năm 1939, theo sau là sự thất bại nhanh chóng của Pháp trước Đức, đã khiến các thuộc địa của Pháp như Việt Nam trở nên dễ bị tổn thương.",
        keyEvents: [
          "Tháng 9/1939: Bùng nổ chiến tranh thế giới",
          "Tháng 6/1940: Pháp đầu hàng Đức",
          "Tháng 12/1941: Nhật Bản tấn công Trân Châu Cảng",
          "1941-1945: Nhật Bản càn quét Đông Nam Á",
        ],
        opportunity:
          "Cuộc chiến đã biến câu hỏi về độc lập của Việt Nam từ một cuộc đấu tranh thuần túy chống thực dân thành một bộ phận của một cuộc chiến tranh chống phát xít toàn cầu lớn hơn.",
        alliance:
          "Điều này cho phép chính nghĩa của Việt Nam liên kết với các lực lượng Đồng minh hùng mạnh.",
      },
    },
    {
      id: "cpv-founding",
      date: "1930",
      title: "Thành Lập ĐCSVN",
      description:
        "Đảng Cộng sản Việt Nam ra đời, mang lại đường lối cách mạng khoa học",
      icon: Flag,
      imgUrl:
        "https://www.ntu.edu.vn/uploads/56/images/news/9115/img/dang-cong-san-viet-nam-ra-doi-la-buoc-ngoat-v-dai-trong-lich-su-cach-mang-viet-n.jpg",
      detailedContent: {
        overview:
          "Việc thành lập Đảng Cộng sản Việt Nam vào ngày 3 tháng 2 năm 1930 là bước ngoặt quan trọng nhất trong lịch sử hiện đại của phong trào giải phóng dân tộc Việt Nam.",
        background:
          "Sự xuất hiện tự phát của ba tổ chức cộng sản riêng biệt vào năm 1929 đe dọa làm phân mảnh phong trào. Sự can thiệp quyết định của Nguyễn Ái Quốc là yếu tố cần thiết để vượt qua chủ nghĩa bè phái.",
        unification:
          "Hội nghị hợp nhất tại Hương Cảng từ ngày 6 tháng 1 đến ngày 7 tháng 2 năm 1930 đã thống nhất ba tổ chức thành Đảng Cộng sản Việt Nam.",
        significance: [
          "Chấm dứt cuộc khủng hoảng về đường lối kéo dài hàng thập kỷ",
          "Cung cấp lý thuyết khoa học - chủ nghĩa Mác-Lênin",
          "Kết nối với phong trào chống đế quốc toàn cầu",
          "Đặt nền móng cho tất cả các thắng lợi sau này",
        ],
      },
    },
  ];

  const vietnamEvolution = [
    {
      period: "1897-1929",
      title: "Khai Thác Thuộc Địa",
      description: "Pháp thiết lập nền kinh tế bóc lột, tạo cơ cấu mất cân đối",
      progress: 25,
      imgUrl:
        "https://www.sejarahbali.com/public/uploads/berita/Berita_221709090945_gubernur-jenderal-banifacius-cornelis-de-jonge-1935.webp",
      color: "red",
    },
    {
      period: "1929-1939",
      title: "Khủng Hoảng Sâu Sắc",
      description:
        "Đại Suy thoái làm lộ bản chất ký sinh của chủ nghĩa thực dân",
      progress: 50,
      imgUrl:
        "https://th.bing.com/th/id/R.c99ddfc74d768267334c6e143c1f5376?rik=N9jW5cuzciY7mw&riu=http%3a%2f%2fbloximages.newyork1.vip.townnews.com%2fstltoday.com%2fcontent%2ftncms%2fassets%2fv3%2feditorial%2fa%2f84%2fa8499312-8548-11df-a95c-0017a4a78c22%2f4c2cef7012d95.image.jpg&ehk=Th9V%2b%2fJ63wzgGrV6bdDhmYmsqR3DaQANpdexfi5SuTY%3d&risl=&pid=ImgRaw&r=0",
      color: "orange",
    },
    {
      period: "1930-1940",
      title: "Chuẩn Bị Cách Mạng",
      description: "Đảng xây dựng lực lượng, tổ chức quần chúng và căn cứ địa",
      progress: 75,
      imgUrl:
        "https://sohanews.sohacdn.com/2019/3/18/photo-1-15529177987151072136844.jpg",
      color: "yellow",
    },
    {
      period: "1940-1945",
      title: "Thời Cơ Chín Muồi",
      description:
        "Khoảng trống quyền lực, điều kiện thuận lợi cho Tổng khởi nghĩa",
      progress: 100,
      imgUrl:
        "https://th.bing.com/th/id/R.0bec9deb87fe41388480ef1a0d115e4c?rik=suoXK0J0kYPqaw&riu=http%3a%2f%2futt.edu.vn%2fuploads%2ffile-manager%2fimages%2fimage001(45).jpg&ehk=Cwj9zVLrzrcbruCEe9iF44k%2b92wjE%2fpsroDvDne%2ftpg%3d&risl=&pid=ImgRaw&r=0",
      color: "green",
    },
  ];

  const worldEvents = [
    {
      id: "germany-surrender",
      date: "Tháng 5/1945",
      title: "Đức phát xít đầu hàng",
      description: "Chiến tranh ở châu Âu kết thúc",
      icon: Globe,
      imgUrl:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/ADFF/production/_103534544_gettyimages-106501675.jpg",
      detailedContent: {
        overview:
          "Sự đầu hàng của Đức phát xít đã chấm dứt chiến tranh ở châu Âu, tạo ra những thay đổi lớn trong cục diện thế giới.",
        impact:
          "Điều này đã giải phóng một lượng lớn lực lượng Đồng minh có thể chuyển hướng sang chiến trường Thái Bình Dương, tăng áp lực lên Nhật Bản.",
        significance:
          "Việc kết thúc chiến tranh ở châu Âu đã làm thay đổi cán cân quyền lực toàn cầu và tạo điều kiện cho các phong trào giải phóng dân tộc.",
      },
    },
    {
      id: "japan-coup",
      date: "9/3/1945",
      title: "Đảo chính Nhật-Pháp",
      description: "Nhật độc chiếm hoàn toàn Đông Dương",
      icon: Swords,
      imgUrl:
        "https://nghiencuulichsudotcom.files.wordpress.com/2021/03/japanese-soldier-confronted-by-french-civilians_1945.jpg",
      detailedContent: {
        overview:
          "Cuộc đảo chính ngày 9 tháng 3 năm 1945 là sự kiện then chốt tạo ra khoảng trống quyền lực ở Đông Dương.",
        background:
          "Liên minh không bền vững giữa Pháp và Nhật cuối cùng đã tan vỡ. Khi cuộc chiến quay lưng lại với phe Trục, Nhật Bản lo sợ Pháp sẽ có động thái ủng hộ phe Đồng minh.",
        process:
          "Nhật Bản đã tiến hành một cuộc đảo chính, lật đổ hoàn toàn chính quyền Pháp ở Đông Dương.",
        consequence:
          "Sự kiện này đã tạo ra một khoảng trống quyền lực quan trọng, mở ra thời cơ ngàn năm có một cho cách mạng Việt Nam.",
        opportunity:
          "Cuộc đảo chính này đã loại bỏ kẻ thù trực tiếp của cách mạng Việt Nam và tạo ra cơ hội cho phong trào kháng Nhật cứu nước phát triển mạnh mẽ.",
      },
    },
    {
      id: "soviet-war",
      date: "8/8/1945",
      title: "Liên Xô tuyên chiến",
      description: "Tấn công quân Quan Đông ở Mãn Châu",
      icon: Users,
      imgUrl:
        "https://nghiencuuquocte.org/wp-content/uploads/2016/08/harbin.jpg",
      detailedContent: {
        overview:
          "Liên Xô tuyên chiến với Nhật Bản và tấn công quân Quan Đông ở Mãn Châu, mở ra mặt trận mới.",
        strategic:
          "Cuộc tấn công này đã làm sụp đổ hoàn toàn khả năng kháng cự của Nhật Bản ở lục địa châu Á.",
        impact:
          "Việc Liên Xô tham chiến đã đẩy nhanh quá trình đầu hàng của Nhật Bản và tạo ra những thay đổi căn bản trong cục diện Đông Á.",
        timing:
          "Thời điểm này trùng hợp với việc Hoa Kỳ thả bom nguyên tử xuống Hiroshima, tạo áp lực kép buộc Nhật phải đầu hàng.",
      },
    },
    {
      id: "japan-surrender",
      date: "14/8/1945",
      title: "Nhật hoàng đầu hàng",
      description: "Tạo ra khoảng trống quyền lực",
      icon: Calendar,
      imgUrl:
        "https://4.bp.blogspot.com/-xk_fKAVWrDk/W4Os3TTBipI/AAAAAAAADxM/aL5BitBudyEcu-xhks_2KrY2jLg1rMvoQCK4BGAYYCw/s1600/2Truman-Bom-Atom-dan-Serangan-11-September-1024x649.jpg",
      detailedContent: {
        overview:
          "Lời tuyên bố đầu hàng của Nhật hoàng Hirohito đã chính thức chấm dứt Chiến tranh thế giới thứ hai và tạo ra khoảng trống quyền lực ở Đông Dương.",
        context:
          "Sau khi Hoa Kỳ thả bom nguyên tử xuống Hiroshima (6/8) và Nagasaki (9/8), cùng với việc Liên Xô tuyên chiến, Nhật Bản buộc phải đầu hàng.",
        opportunity:
          "Khoảng trống quyền lực này đã tạo ra cơ hội lịch sử cho Đảng Cộng sản Việt Nam phát động Tổng khởi nghĩa tháng Tám.",
        significance:
          "Đây là thời điểm 'ngàn năm có một' mà Hồ Chí Minh đã nhận định, khi cả hai thế lực thống trị (Pháp và Nhật) đều không còn khả năng kiểm soát tình hình.",
      },
    },
  ];

  return (
    <section
      id="context"
      ref={ref}
      className="py-12 sm:py-16 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-red-900/50"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Bối Cảnh
            <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              Lịch Sử
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Sự hội tụ của các lực lượng toàn cầu và điều kiện trong nước đã tạo
            ra thời cơ &ldquo;ngàn năm có một&rdquo; cho Cách mạng tháng Tám
          </p>
        </motion.div>

        {/* Historical Crisis Context */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Lò Luyện Cách Mạng: 1930-1945
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {globalCrisisEvents.map((event, index) => (
              <Dialog.Root key={index}>
                <Dialog.Trigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-red-500/50 transition-all duration-300 group hover:scale-105 cursor-pointer"
                  >
                    {/* Card Image */}
                    {event.imgUrl && (
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={event.imgUrl}
                          alt={event.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <event.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-red-300 font-semibold text-sm mb-2">
                        {event.date}
                      </div>
                      <h4 className="text-white font-bold mb-3 text-lg">
                        {event.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {event.description}
                      </p>
                      <div className="flex items-center text-red-400 text-sm font-medium">
                        <span>Xem chi tiết</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </motion.div>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
                  <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-4xl max-h-[85vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 p-8 overflow-y-auto">
                    <Dialog.Title className="sr-only">
                      {event.title}
                    </Dialog.Title>
                    <Dialog.Close className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white/70 hover:text-white hover:bg-white/20 transition-colors">
                      <X className="h-5 w-5" />
                    </Dialog.Close>

                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                          <event.icon className="w-6 h-6 text-white" />
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

                      {event.detailedContent.impacts && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Tác động
                          </h3>
                          <ul className="space-y-2">
                            {event.detailedContent.impacts.map((impact, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-red-400 mr-2">•</span>
                                <span>{impact}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {event.detailedContent.countries && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Các quốc gia
                          </h3>
                          <ul className="space-y-2">
                            {event.detailedContent.countries.map(
                              (country, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-yellow-400 mr-2">
                                    •
                                  </span>
                                  <span>{country}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {event.detailedContent.keyEvents && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Sự kiện quan trọng
                          </h3>
                          <ul className="space-y-2">
                            {event.detailedContent.keyEvents.map(
                              (keyEvent, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-blue-400 mr-2">•</span>
                                  <span>{keyEvent}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {event.detailedContent.significance && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Ý nghĩa lịch sử
                          </h3>
                          {Array.isArray(event.detailedContent.significance) ? (
                            <ul className="space-y-2">
                              {event.detailedContent.significance.map(
                                (sig, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-green-400 mr-2">
                                      •
                                    </span>
                                    <span>{sig}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          ) : (
                            <p className="leading-relaxed">
                              {event.detailedContent.significance}
                            </p>
                          )}
                        </div>
                      )}

                      {event.detailedContent.consequences && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Hệ quả
                          </h3>
                          <p className="leading-relaxed">
                            {event.detailedContent.consequences}
                          </p>
                        </div>
                      )}

                      {event.detailedContent.vietnamImpact && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">
                            Tác động đến Việt Nam
                          </h3>
                          <p className="leading-relaxed">
                            {event.detailedContent.vietnamImpact}
                          </p>
                        </div>
                      )}
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            ))}
          </div>
        </motion.div>

        {/* Vietnam Evolution Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Quá Trình Chuẩn Bị và Phát Triển
          </h3>

          <div className="space-y-6">
            {vietnamEvolution.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <div className="flex">
                  {/* Image Section */}
                  <div className="w-1/3 relative">
                    <Image
                      src={phase.imgUrl}
                      alt={phase.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/60"></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          {phase.title}
                        </h4>
                        <span className="text-red-300 font-semibold text-sm">
                          {phase.period}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {phase.progress}%
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{phase.description}</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${phase.progress}%` } : {}
                        }
                        transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          phase.color === "red"
                            ? "from-red-500 to-red-400"
                            : phase.color === "orange"
                            ? "from-orange-500 to-orange-400"
                            : phase.color === "yellow"
                            ? "from-yellow-500 to-yellow-400"
                            : "from-green-500 to-green-400"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: World Context 1945 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              Cục Diện Thế Giới 1945
            </h3>

            <div className="space-y-6">
              {worldEvents.map((event, index) => (
                <Dialog.Root key={index}>
                  <Dialog.Trigger asChild>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-red-500/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                    >
                      {/* Background Image with Overlay */}
                      {event.imgUrl && (
                        <div className="absolute inset-0 rounded-xl overflow-hidden">
                          <Image
                            src={event.imgUrl}
                            alt={event.title}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>
                      )}

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <event.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-red-300 font-semibold text-sm">
                                {event.date}
                              </span>
                              <ArrowRight className="w-4 h-4 text-red-400 group-hover:translate-x-1 transition-transform duration-200" />
                            </div>
                            <h4 className="text-white font-bold mb-2">
                              {event.title}
                            </h4>
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
                    <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-4xl max-h-[85vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 p-8 overflow-y-auto">
                      <Dialog.Title className="sr-only">
                        {event.title}
                      </Dialog.Title>
                      <Dialog.Close className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white/70 hover:text-white hover:bg-white/20 transition-colors">
                        <X className="h-5 w-5" />
                      </Dialog.Close>

                      <div className="mb-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                            <event.icon className="w-6 h-6 text-white" />
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

                        {event.detailedContent.background && (
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                              Bối cảnh
                            </h3>
                            <p className="leading-relaxed">
                              {event.detailedContent.background}
                            </p>
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

                        {event.detailedContent.consequence && (
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                              Hệ quả
                            </h3>
                            <p className="leading-relaxed">
                              {event.detailedContent.consequence}
                            </p>
                          </div>
                        )}

                        {event.detailedContent.opportunity && (
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                              Cơ hội lịch sử
                            </h3>
                            <p className="leading-relaxed">
                              {event.detailedContent.opportunity}
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

                        {event.detailedContent.strategic && (
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                              Ý nghĩa chiến lược
                            </h3>
                            <p className="leading-relaxed">
                              {event.detailedContent.strategic}
                            </p>
                          </div>
                        )}

                        {event.detailedContent.timing && (
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                              Thời điểm quan trọng
                            </h3>
                            <p className="leading-relaxed">
                              {event.detailedContent.timing}
                            </p>
                          </div>
                        )}

                        {event.detailedContent.context && (
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                              Bối cảnh lịch sử
                            </h3>
                            <p className="leading-relaxed">
                              {event.detailedContent.context}
                            </p>
                          </div>
                        )}

                        {event.detailedContent.significance && (
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                              Ý nghĩa lịch sử
                            </h3>
                            <p className="leading-relaxed">
                              {event.detailedContent.significance}
                            </p>
                          </div>
                        )}
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              ))}
            </div>
          </motion.div>

          {/* Right: Vietnam Strategic Analysis */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              Chiến Lược Cách Mạng
            </h3>

            {/* Historical Quote from Cương Lĩnh */}
            <div className="bg-gradient-to-br from-red-900/40 to-yellow-900/40 rounded-2xl p-8 border border-red-500/30 backdrop-blur-sm">
              <blockquote className="text-white text-lg italic leading-relaxed mb-4">
                &ldquo;Tiến hành tư sản dân quyền cách mạng và thổ địa cách mạng
                để đi tới xã hội cộng sản&rdquo;
              </blockquote>
              <cite className="text-red-300 font-semibold">
                - Cương lĩnh chính trị đầu tiên của ĐCSVN (1930)
              </cite>
            </div>

            {/* Strategic Foundations */}
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-white font-bold mb-3 flex items-center">
                  <Target className="w-5 h-5 text-red-400 mr-3" />
                  Mục tiêu chiến lược
                </h4>
                <p className="text-gray-300 text-sm">
                  Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến, giành độc
                  lập dân tộc hoàn toàn
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-white font-bold mb-3 flex items-center">
                  <Users className="w-5 h-5 text-yellow-400 mr-3" />
                  Mặt trận dân tộc thống nhất
                </h4>
                <p className="text-gray-300 text-sm">
                  Nòng cốt công-nông, đoàn kết tất cả lực lượng yêu nước
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-white font-bold mb-3 flex items-center">
                  <BookOpen className="w-5 h-5 text-blue-400 mr-3" />
                  Hệ tư tưởng khoa học
                </h4>
                <p className="text-gray-300 text-sm">
                  Chủ nghĩa Mác-Lênin được vận dụng sáng tạo vào điều kiện Việt
                  Nam
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-white font-bold mb-3 flex items-center">
                  <Zap className="w-5 h-5 text-green-400 mr-3" />
                  Thời cơ lịch sử
                </h4>
                <p className="text-gray-300 text-sm">
                  Khoảng trống quyền lực sau đảo chính 9/3 và đầu hàng của Nhật
                </p>
              </div>
            </div>

            {/* Key Quote */}
            <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-2xl p-6 border border-green-500/30 backdrop-blur-sm">
              <blockquote className="text-white italic leading-relaxed mb-3">
                &ldquo;Thời cơ ngàn năm có một đã đến. Toàn quốc đồng bào hãy
                đứng dậy!&rdquo;
              </blockquote>
              <cite className="text-green-300 font-semibold text-sm">
                - Lời kêu gọi Tổng khởi nghĩa
              </cite>
            </div>
          </motion.div>
        </div>

        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-red-400 mb-2">1929</div>
            <div className="text-gray-300 text-sm">Đại Suy thoái</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">1930</div>
            <div className="text-gray-300 text-sm">Thành lập ĐCSVN</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-green-400 mb-2">15</div>
            <div className="text-gray-300 text-sm">Năm chuẩn bị</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">1945</div>
            <div className="text-gray-300 text-sm">Thắng lợi</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContextSection;
