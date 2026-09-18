const tarotCards = [
  {id:0, name:"The Fool", vietnameseName:"Kẻ Khờ", symbol:"○", upright:{meaning:"Bạn đang đứng trước một khởi đầu mới đầy tự do và tiềm năng. Quá khứ đã khép lại, vũ trụ mời gọi bạn bước đi với niềm tin trong sáng, dám thử, dám mơ. Đây là lúc buông bỏ sợ hãi và lắng nghe tiếng gọi phiêu lưu của tâm hồn.", yesNo:"YES", keywords:["Khởi đầu mới","Tự do","Niềm tin","Phiêu lưu"]}, reversed:{meaning:"Bạn đang do dự, sợ rủi ro hoặc hành động thiếu suy nghĩ. Kẻ Khờ ngược cảnh báo sự liều lĩnh mù quáng, trì hoãn hoặc bỏ lỡ cơ hội vì thiếu chuẩn bị. Hãy dừng lại, cân nhắc kỹ trước khi nhảy.", yesNo:"NO", keywords:["Liều lĩnh","Do dự","Thiếu chuẩn bị","Bỏ lỡ"]}},
  {id:1, name:"The Magician", vietnameseName:"Nhà Ảo Thuật", symbol:"∞", upright:{meaning:"Bạn có đủ công cụ, kỹ năng và ý chí để biến ý tưởng thành hiện thực. Đây là thời điểm hành động tập trung, tận dụng tài nguyên và khẳng định năng lực bản thân.", yesNo:"YES", keywords:["Sáng tạo","Ý chí","Biến ước mơ thành thật","Tập trung"]}, reversed:{meaning:"Năng lượng bị phân tán, thiếu tự tin hoặc có sự thao túng. Bạn có thể đang lạm dụng tài năng hoặc bị người khác dẫn dắt. Cần trung thực với bản thân và dùng sức mạnh đúng chỗ.", yesNo:"NO", keywords:["Thao túng","Thiếu định hướng","Lãng phí tài năng","Ảo tưởng"]}},
  {id:2, name:"The High Priestess", vietnameseName:"Nữ Tư Tế", symbol:"☽", upright:{meaning:"Trực giác của bạn đang rất mạnh. Hãy lắng nghe tiếng nói bên trong, giữ sự bí ẩn và kiên nhẫn chờ đợi sự thật hé lộ. Tri thức ẩn sâu sẽ dẫn đường.", yesNo:"MAYBE", keywords:["Trực giác","Bí ẩn","Tiềm thức","Khôn ngoan"]}, reversed:{meaning:"Bạn đang phớt lờ trực giác, giữ bí mật quá mức hoặc cảm thấy mất kết nối với nội tâm. Hãy mở lòng, chia sẻ và tin vào cảm nhận của mình.", yesNo:"NO", keywords:["Mất trực giác","Bí mật","Cô lập","Hoang mang"]}},
  {id:3, name:"The Empress", vietnameseName:"Nữ Hoàng", symbol:"♀", upright:{meaning:"Sự trù phú, nuôi dưỡng và sáng tạo đang nở rộ. Tình cảm, tài chính và các dự án đều có cơ hội phát triển tươi tốt nếu bạn chăm sóc bằng yêu thương.", yesNo:"YES", keywords:["Trù phú","Nuôi dưỡng","Sáng tạo","Yêu thương"]}, reversed:{meaning:"Sự phụ thuộc, thiếu tự chăm sóc hoặc sáng tạo bị kìm hãm. Bạn có thể đang cho đi quá nhiều mà quên bản thân. Cần cân bằng cho-nhận.", yesNo:"NO", keywords:["Phụ thuộc","Kiệt sức","Bế tắc sáng tạo","Thiếu cân bằng"]}},
  {id:4, name:"The Emperor", vietnameseName:"Hoàng Đế", symbol:"♔", upright:{meaning:"Kỷ luật, cấu trúc và lãnh đạo giúp bạn làm chủ tình huống. Đã đến lúc lập kế hoạch rõ ràng, đặt ranh giới và hành động với trách nhiệm.", yesNo:"YES", keywords:["Kỷ luật","Ổn định","Lãnh đạo","Cấu trúc"]}, reversed:{meaning:"Cứng nhắc, kiểm soát quá mức hoặc thiếu kỷ luật. Quyền lực có thể bị lạm dụng hoặc bạn đang chống lại hệ thống. Hãy linh hoạt hơn.", yesNo:"NO", keywords:["Độc đoán","Cứng nhắc","Mất kiểm soát","Thiếu kỷ luật"]}},
  {id:5, name:"The Hierophant", vietnameseName:"Giáo Hoàng", symbol:"✠", upright:{meaning:"Truyền thống, niềm tin và người thầy xuất hiện. Học hỏi từ hệ thống, tôn trọng quy tắc và tìm kiếm sự hướng dẫn tâm linh sẽ giúp bạn vững bước.", yesNo:"YES", keywords:["Truyền thống","Niềm tin","Hướng dẫn","Giáo dục"]}, reversed:{meaning:"Bạn đang thách thức chuẩn mực, cảm thấy gò bó bởi khuôn mẫu hoặc thiếu người dẫn đường. Đã đến lúc tự định nghĩa con đường riêng.", yesNo:"NO", keywords:["Phá cách","Gò bó","Hoài nghi","Nổi loạn"]}},
  {id:6, name:"The Lovers", vietnameseName:"Tình Nhân", symbol:"♥", upright:{meaning:"Lựa chọn từ trái tim và sự hòa hợp. Tình yêu, đối tác hoặc quyết định quan trọng cần sự chân thành và đồng điệu giá trị. Lắng nghe con tim.", yesNo:"YES", keywords:["Tình yêu","Hòa hợp","Lựa chọn","Đồng điệu"]}, reversed:{meaning:"Mất cân bằng trong mối quan hệ, lựa chọn sai lệch hoặc xung đột giá trị. Cần trung thực về điều mình thực sự muốn.", yesNo:"NO", keywords:["Bất hòa","Lựa chọn sai","Mất cân bằng","Thiếu chân thành"]}},
  {id:7, name:"The Chariot", vietnameseName:"Cỗ Xe", symbol:"➤", upright:{meaning:"Quyết tâm và ý chí đưa bạn tiến nhanh về đích. Kiểm soát cảm xúc, giữ hướng đi và bạn sẽ chiến thắng thử thách.", yesNo:"YES", keywords:["Quyết tâm","Chiến thắng","Kiểm soát","Tiến lên"]}, reversed:{meaning:"Mất phương hướng, thiếu kiểm soát hoặc quá hung hăng. Bạn có thể đang cố quá sức hoặc đi chệch đường. Hãy phanh lại và định hướng lại.", yesNo:"NO", keywords:["Mất lái","Thiếu định hướng","Hung hăng","Trì hoãn"]}},
  {id:8, name:"Strength", vietnameseName:"Sức Mạnh", symbol:"🦁", upright:{meaning:"Sức mạnh nội tâm, lòng can đảm dịu dàng và sự kiên nhẫn sẽ giúp bạn thuần hóa khó khăn. Hãy mềm mại nhưng kiên định.", yesNo:"YES", keywords:["Can đảm","Kiên nhẫn","Nội lực","Dịu dàng"]}, reversed:{meaning:"Tự nghi ngờ, kiệt sức hoặc kiểm soát cảm xúc kém. Bạn đang thiếu tự tin hoặc dùng sức mạnh sai cách. Cần sạc lại năng lượng.", yesNo:"NO", keywords:["Tự ti","Kiệt sức","Mất kiểm soát","Sợ hãi"]}},
  {id:9, name:"The Hermit", vietnameseName:"Ẩn Sĩ", symbol:"◐", upright:{meaning:"Đã đến lúc rút lui, chiêm nghiệm và tìm ánh sáng nội tâm. Sự cô độc có chủ đích giúp bạn hiểu rõ bản thân và con đường phía trước.", yesNo:"NO", keywords:["Chiêm nghiệm","Cô độc","Tìm kiếm","Ánh sáng nội tâm"]}, reversed:{meaning:"Cô lập quá mức, sợ cô đơn hoặc tránh né sự thật. Bạn có thể đang tách mình khỏi người khác quá lâu. Hãy mở cửa trở lại.", yesNo:"NO", keywords:["Cô lập","Trốn tránh","Mất phương hướng","Khép kín"]}},
  {id:10, name:"Wheel of Fortune", vietnameseName:"Vòng Quay Vận Mệnh", symbol:"◎", upright:{meaning:"Vận mệnh đang xoay chuyển có lợi cho bạn. Chu kỳ mới, cơ hội bất ngờ và may mắn đang đến. Hãy đón nhận thay đổi với niềm tin.", yesNo:"YES", keywords:["Vận may","Chu kỳ","Thay đổi","Cơ hội"]}, reversed:{meaning:"Vận xui tạm thời, kháng cự thay đổi hoặc chu kỳ trì trệ. Mọi thứ có vẻ ngoài tầm kiểm soát - hãy kiên nhẫn và thích nghi.", yesNo:"NO", keywords:["Vận xui","Trì trệ","Kháng cự","Bất ổn"]}},
  {id:11, name:"Justice", vietnameseName:"Công Lý", symbol:"⚖", upright:{meaning:"Sự thật và công bằng được thực thi. Quyết định cần dựa trên lý trí, bằng chứng và đạo đức. Gieo gì gặt nấy.", yesNo:"YES", keywords:["Công bằng","Sự thật","Trách nhiệm","Cân bằng"]}, reversed:{meaning:"Bất công, thiên vị hoặc trốn tránh trách nhiệm. Bạn có thể đang tự dối mình hoặc chịu hệ quả từ lựa chọn thiếu công bằng.", yesNo:"NO", keywords:["Bất công","Thiên vị","Trốn tránh","Mất cân bằng"]}},
  {id:12, name:"The Hanged Man", vietnameseName:"Người Treo Ngược", symbol:"⁂", upright:{meaning:"Tạm dừng để nhìn mọi thứ từ góc khác. Buông bỏ, hy sinh nhỏ cho bài học lớn và chờ thời điểm thích hợp sẽ mang lại giác ngộ.", yesNo:"MAYBE", keywords:["Buông bỏ","Góc nhìn mới","Tạm dừng","Giác ngộ"]}, reversed:{meaning:"Trì hoãn vô ích, hy sinh không được ghi nhận hoặc sợ thay đổi góc nhìn. Bạn đang kháng cự việc buông bỏ cần thiết.", yesNo:"NO", keywords:["Trì trệ","Hy sinh vô ích","Kháng cự","Mắc kẹt"]}},
  {id:13, name:"Death", vietnameseName:"Cái Chết", symbol:"✕", upright:{meaning:"Kết thúc cần thiết để tái sinh. Buông bỏ cái cũ, lột xác và chào đón chuyển hóa mạnh mẽ. Đây không phải mất mát mà là làm mới.", yesNo:"NO", keywords:["Chuyển hóa","Kết thúc","Tái sinh","Buông bỏ"]}, reversed:{meaning:"Sợ thay đổi, bám víu quá khứ hoặc chuyển hóa bị trì hoãn. Bạn đang kháng cự sự kết thúc cần thiết khiến bản thân mắc kẹt.", yesNo:"NO", keywords:["Sợ thay đổi","Bám víu","Trì hoãn","Mắc kẹt"]}},
  {id:14, name:"Temperance", vietnameseName:"Tiết Độ", symbol:"≋", upright:{meaning:"Cân bằng, điều độ và hòa hợp là chìa khóa. Pha trộn các khía cạnh đối lập, kiên nhẫn và giữ trung dung sẽ mang lại bình an.", yesNo:"MAYBE", keywords:["Cân bằng","Điều độ","Hòa hợp","Kiên nhẫn"]}, reversed:{meaning:"Mất cân bằng, thái quá hoặc thiếu kiên nhẫn. Bạn đang dao động giữa hai cực đoan. Cần tiết chế và tìm nhịp điệu riêng.", yesNo:"NO", keywords:["Mất cân bằng","Thái quá","Thiếu kiên nhẫn","Lệch lạc"]}},
  {id:15, name:"The Devil", vietnameseName:"Ác Quỷ", symbol:"⛧", upright:{meaning:"Cảnh báo về ràng buộc, cám dỗ hoặc mô thức độc hại. Bạn có thể đang bị trói bởi nỗi sợ, vật chất hoặc mối quan hệ không lành mạnh. Nhận diện để thoát ra.", yesNo:"NO", keywords:["Ràng buộc","Cám dỗ","Phụ thuộc","Bóng tối"]}, reversed:{meaning:"Giải phóng khỏi xiềng xích, nhận thức được sự phụ thuộc và bắt đầu buông bỏ. Bạn đang lấy lại quyền tự chủ.", yesNo:"YES", keywords:["Giải phóng","Tỉnh thức","Buông bỏ","Tự chủ"]}},
  {id:16, name:"The Tower", vietnameseName:"Tòa Tháp", symbol:"⚡", upright:{meaning:"Sự sụp đổ đột ngột để lộ sự thật. Cấu trúc giả tạo sụp đổ, dù sốc nhưng mở đường cho nền móng chân thật hơn.", yesNo:"NO", keywords:["Sụp đổ","Thức tỉnh","Biến động","Giải phóng"]}, reversed:{meaning:"Tránh được thảm họa trong gang tấc hoặc sợ sụp đổ nên trì hoãn thay đổi. Đôi khi bạn đang kháng cự cú sốc cần thiết.", yesNo:"NO", keywords:["Trì hoãn sụp đổ","Sợ thay đổi","Kháng cự","Căng thẳng"]}},
  {id:17, name:"The Star", vietnameseName:"Ngôi Sao", symbol:"✶", upright:{meaning:"Hy vọng, chữa lành và niềm tin trở lại. Sau giông bão, ánh sao dẫn đường cho bạn với sự bình yên và cảm hứng mới.", yesNo:"YES", keywords:["Hy vọng","Chữa lành","Niềm tin","Cảm hứng"]}, reversed:{meaning:"Mất niềm tin, thất vọng hoặc cảm thấy lạc lối. Ánh sao vẫn đó nhưng bạn chưa nhìn thấy. Hãy chăm sóc niềm tin nhỏ bé trong tim.", yesNo:"NO", keywords:["Mất hy vọng","Thất vọng","Lạc lối","Thiếu niềm tin"]}},
  {id:18, name:"The Moon", vietnameseName:"Mặt Trăng", symbol:"☾", upright:{meaning:"Trực giác, giấc mơ và điều ẩn giấu nổi lên. Mọi thứ chưa rõ ràng, hãy tin vào cảm nhận và cẩn trọng với ảo ảnh.", yesNo:"MAYBE", keywords:["Trực giác","Ảo ảnh","Tiềm thức","Bí ẩn"]}, reversed:{meaning:"Ảo ảnh tan biến, sự thật dần lộ ra nhưng vẫn còn hoang mang. Bạn đang thoát khỏi nỗi sợ vô hình.", yesNo:"NO", keywords:["Vỡ mộng","Hoang mang","Giải ảo","Lo âu"]}},
  {id:19, name:"The Sun", vietnameseName:"Mặt Trời", symbol:"☀", upright:{meaning:"Niềm vui, thành công và năng lượng rực rỡ. Mọi thứ sáng rõ, bạn được vũ trụ chúc phúc với sự lạc quan và thành tựu.", yesNo:"YES", keywords:["Niềm vui","Thành công","Rực rỡ","Lạc quan"]}, reversed:{meaning:"Niềm vui bị che mờ tạm thời, thiếu tự tin hoặc thành công đến chậm. Ánh mặt trời vẫn ở đó - chỉ cần bạn mở rèm.", yesNo:"YES", keywords:["Che mờ","Thiếu tự tin","Trì hoãn vui vẻ","Tự ti"]}},
  {id:20, name:"Judgement", vietnameseName:"Phán Xét", symbol:"♫", upright:{meaning:"Tiếng gọi thức tỉnh, tha thứ và tái sinh. Đã đến lúc nhìn lại, buông bỏ phán xét cũ và bước sang chương mới với sự rõ ràng.", yesNo:"YES", keywords:["Thức tỉnh","Tái sinh","Tha thứ","Tiếng gọi"]}, reversed:{meaning:"Tự phán xét quá khắt khe, bỏ lỡ tiếng gọi hoặc sợ thay đổi. Bạn đang trì hoãn sự tha thứ cho bản thân.", yesNo:"NO", keywords:["Tự phán xét","Bỏ lỡ","Sợ thay đổi","Trì hoãn"]}},
  {id:21, name:"The World", vietnameseName:"Thế Giới", symbol:"◉", upright:{meaning:"Hoàn thành, viên mãn và hội nhập. Một chu kỳ khép lại trọn vẹn, bạn sẵn sàng bước sang tầm cao mới với sự toàn vẹn.", yesNo:"YES", keywords:["Hoàn thành","Viên mãn","Hội nhập","Thành tựu"]}, reversed:{meaning:"Chưa hoàn tất, thiếu khép lại hoặc cảm giác dang dở. Bạn gần đích nhưng cần thêm một bước cuối để trọn vẹn.", yesNo:"NO", keywords:["Dang dở","Chưa hoàn tất","Thiếu khép lại","Trì hoãn"]}},
];
// gán image cho 22 Ẩn Chính (Rider-Waite Wikimedia - Special:FilePath)
const majorFiles = ["RWS_Tarot_00_Fool.jpg","RWS_Tarot_01_Magician.jpg","RWS_Tarot_02_High_Priestess.jpg","RWS_Tarot_03_Empress.jpg","RWS_Tarot_04_Emperor.jpg","RWS_Tarot_05_Hierophant.jpg","RWS_Tarot_06_Lovers.jpg","RWS_Tarot_07_Chariot.jpg","RWS_Tarot_08_Strength.jpg","RWS_Tarot_09_Hermit.jpg","RWS_Tarot_10_Wheel_of_Fortune.jpg","RWS_Tarot_11_Justice.jpg","RWS_Tarot_12_Hanged_Man.jpg","RWS_Tarot_13_Death.jpg","RWS_Tarot_14_Temperance.jpg","RWS_Tarot_15_Devil.jpg","RWS_Tarot_16_Tower.jpg","RWS_Tarot_17_Star.jpg","RWS_Tarot_18_Moon.jpg","RWS_Tarot_19_Sun.jpg","RWS_Tarot_20_Judgement.jpg","RWS_Tarot_21_World.jpg"];
tarotCards.forEach(c => {
  if (c.id <= 21) c.image = `https://commons.wikimedia.org/wiki/Special:FilePath/${majorFiles[c.id]}`;
});
// --- Ẩn Phụ (Minor Arcana) - 56 lá, tự động sinh ---
(() => {
  const suits = [
    {en:"Wands", vi:"Gậy", sym:"♣", theme:"lửa, hành động và đam mê"},
    {en:"Cups", vi:"Cốc", sym:"♥", theme:"nước, cảm xúc và tình yêu"},
    {en:"Swords", vi:"Kiếm", sym:"♠", theme:"khí, tư duy và sự thật"},
    {en:"Pentacles", vi:"Tiền", sym:"♦", theme:"đất, vật chất và ổn định"},
  ];
  const ranks = [
    {en:"Ace", vi:"Át", kwU:["Khởi đầu","Cơ hội","Tiềm năng"], kwR:["Trì hoãn","Bỏ lỡ","Thiếu khởi sắc"], meanU:"khởi đầu thuần khiết và cơ hội mới đang mở ra", meanR:"cơ hội bị trì hoãn hoặc thiếu động lực để bắt đầu"},
    {en:"Two", vi:"Hai", kwU:["Cân bằng","Lựa chọn","Hợp tác"], kwR:["Mất cân bằng","Do dự","Lệch hướng"], meanU:"cần cân bằng và đưa ra lựa chọn hợp tác", meanR:"mất cân bằng, do dự giữa hai hướng"},
    {en:"Three", vi:"Ba", kwU:["Phát triển","Hợp tác","Mở rộng"], kwR:["Trì trệ","Thiếu hợp tác","Cô lập"], meanU:"sự hợp tác và nền tảng đang phát triển tích cực", meanR:"thiếu hợp tác, phát triển bị đình trệ"},
    {en:"Four", vi:"Bốn", kwU:["Ổn định","Nền tảng","Nghỉ ngơi"], kwR:["Bế tắc","Gò bó","Bất ổn"], meanU:"sự ổn định và củng cố nền tảng", meanR:"cảm giác bế tắc, gò bó hoặc nền tảng lung lay"},
    {en:"Five", vi:"Năm", kwU:["Xung đột","Thử thách","Mất mát"], kwR:["Hòa giải","Tránh né","Hồi phục"], meanU:"xung đột và thử thách đòi hỏi đối diện", meanR:"xung đột dần được hòa giải hoặc đang tránh né đối diện"},
    {en:"Six", vi:"Sáu", kwU:["Hài hòa","Chia sẻ","Hồi phục"], kwR:["Bất bình đẳng","Vong ơn","Mất cân bằng cho nhận"], meanU:"sự hài hòa, cho nhận cân bằng và hồi phục", meanR:"cho nhận mất cân bằng, cảm giác bất công"},
    {en:"Seven", vi:"Bảy", kwU:["Kiên trì","Đánh giá","Thử thách"], kwR:["Nản lòng","Thiếu kiên nhẫn","Bỏ cuộc"], meanU:"cần kiên trì đánh giá và bảo vệ thành quả", meanR:"thiếu kiên trì, dễ nản hoặc muốn bỏ cuộc"},
    {en:"Eight", vi:"Tám", kwU:["Nỗ lực","Chuyển động","Tiến triển"], kwR:["Trì trệ","Kiệt sức","Thiếu tập trung"], meanU:"nỗ lực không ngừng và tiến triển rõ rệt", meanR:"cảm giác kiệt sức, tiến trình bị trì trệ"},
    {en:"Nine", vi:"Chín", kwU:["Kiên nhẫn","Gần đích","Viên mãn"], kwR:["Bất an","Thiếu kiên nhẫn","Cô đơn"], meanU:"gần đạt viên mãn, cần kiên nhẫn thêm chút nữa", meanR:"bất an, thiếu kiên nhẫn dù đã gần đích"},
    {en:"Ten", vi:"Mười", kwU:["Kết thúc","Thành tựu","Gánh nặng"], kwR:["Quá tải","Buông bỏ","Kết thúc khó"], meanU:"kết thúc một chu kỳ, vừa thành tựu vừa gánh nặng", meanR:"quá tải, khó buông bỏ hoặc kết thúc nặng nề"},
    {en:"Page", vi:"Cậu Bé", kwU:["Tò mò","Tin tức","Học hỏi"], kwR:["Thiếu chín chắn","Trì hoãn tin tức","Non nớt"], meanU:"tin tức mới, sự tò mò và ham học hỏi", meanR:"thiếu chín chắn, tin tức chậm hoặc học hỏi hời hợt"},
    {en:"Knight", vi:"Hiệp Sĩ", kwU:["Hành động","Đam mê","Tốc độ"], kwR:["Vội vã","Thiếu kiên định","Hung hăng"], meanU:"hành động quyết liệt, đam mê theo đuổi mục tiêu", meanR:"hành động vội vã, thiếu kiên định hoặc hung hăng"},
    {en:"Queen", vi:"Nữ Hoàng", kwU:["Nuôi dưỡng","Thành thạo","Trực giác"], kwR:["Kiểm soát","Thiếu tự tin","Phụ thuộc"], meanU:"năng lượng nuôi dưỡng, thành thạo và trực giác tinh tế", meanR:"kiểm soát quá mức hoặc thiếu tự tin vào khả năng"},
    {en:"King", vi:"Vua", kwU:["Làm chủ","Lãnh đạo","Ổn định"], kwR:["Độc đoán","Thiếu trách nhiệm","Lạm quyền"], meanU:"sự làm chủ, lãnh đạo vững vàng và ổn định", meanR:"độc đoán, lạm quyền hoặc thiếu trách nhiệm"},
  ];
  const numMap = {Ace:"01", Two:"02", Three:"03", Four:"04", Five:"05", Six:"06", Seven:"07", Eight:"08", Nine:"09", Ten:"10", Page:"11", Knight:"12", Queen:"13", King:"14"};
  const filePrefixMap = {Wands:"Wands", Cups:"Cups", Swords:"Swords", Pentacles:"Pents"};
  let id = 22;
  for (const s of suits) {
    for (const r of ranks) {
      const isWandsCups = s.en==="Wands" || s.en==="Cups";
      // giảm MAYBE: chỉ chọn YES/NO, giữ MAYBE cho lá thuần trung lập
      let yesU = isWandsCups ? "YES" : "NO";
      if (["Five","Nine"].includes(r.en)) yesU = "NO";
      if (["Page","Knight","Ace"].includes(r.en)) yesU = "YES";
      const yesR = "NO";
      // giữ MAYBE cho lá thuần trung lập, fix 7 Tiền (Seven of Pentacles) upright phải là YES
      if ((s.en==="Swords" && r.en==="Two") || (s.en==="Cups" && r.en==="Seven")) yesU = "MAYBE";
      if (s.en==="Pentacles" && r.en==="Seven") yesU = "YES";
      const uprightMean = `Năng lượng ${s.theme} kết hợp với ${r.meanU}. Lá ${r.vi} ${s.vi} cho thấy giai đoạn liên quan đến ${s.vi.toLowerCase()} đang được kích hoạt, mang đến cơ hội để bạn thể hiện và cân bằng.`;
      const reversedMean = `Khi ngược, lá ${r.vi} ${s.vi} cho thấy ${r.meanR} trong lĩnh vực ${s.vi.toLowerCase()}. Năng lượng ${s.theme} bị cản trở, bạn cần nhìn lại cách mình đang sử dụng và cân bằng.`;
      const imgFile = `${filePrefixMap[s.en]}${numMap[r.en]}.jpg`;
      tarotCards.push({
        id: id++,
        name: `${r.en} of ${s.en}`,
        vietnameseName: `${r.vi} ${s.vi}`,
        symbol: s.sym,
        image: `https://commons.wikimedia.org/wiki/Special:FilePath/${imgFile}`,
        upright: { meaning: uprightMean, yesNo: yesU, keywords: r.kwU },
        reversed: { meaning: reversedMean, yesNo: yesR, keywords: r.kwR }
      });
    }
  }
})();
// --- Ghi đè Yes/No/Maybe theo bảng chuẩn người dùng (78 lá) ---
(() => {
  const m = {
    "The Fool":{u:"MAYBE",r:"NO"},"The Magician":{u:"YES",r:"NO"},"The High Priestess":{u:"MAYBE",r:"NO"},"The Empress":{u:"YES",r:"MAYBE"},"The Emperor":{u:"YES",r:"NO"},"The Hierophant":{u:"YES",r:"NO"},"The Lovers":{u:"YES",r:"NO"},"The Chariot":{u:"YES",r:"NO"},"Strength":{u:"YES",r:"NO"},"The Hermit":{u:"NO",r:"MAYBE"},"Wheel of Fortune":{u:"YES",r:"NO"},"Justice":{u:"MAYBE",r:"NO"},"The Hanged Man":{u:"NO",r:"YES"},"Death":{u:"NO",r:"MAYBE"},"Temperance":{u:"YES",r:"NO"},"The Devil":{u:"NO",r:"YES"},"The Tower":{u:"NO",r:"NO"},"The Star":{u:"YES",r:"MAYBE"},"The Moon":{u:"NO",r:"MAYBE"},"The Sun":{u:"YES",r:"YES"},"Judgement":{u:"YES",r:"NO"},"The World":{u:"YES",r:"MAYBE"},
    "Ace of Wands":{u:"YES",r:"MAYBE"},"Two of Wands":{u:"YES",r:"MAYBE"},"Three of Wands":{u:"YES",r:"MAYBE"},"Four of Wands":{u:"YES",r:"YES"},"Five of Wands":{u:"NO",r:"MAYBE"},"Six of Wands":{u:"YES",r:"NO"},"Seven of Wands":{u:"YES",r:"NO"},"Eight of Wands":{u:"YES",r:"NO"},"Nine of Wands":{u:"MAYBE",r:"NO"},"Ten of Wands":{u:"NO",r:"MAYBE"},"Page of Wands":{u:"YES",r:"MAYBE"},"Knight of Wands":{u:"YES",r:"NO"},"Queen of Wands":{u:"YES",r:"MAYBE"},"King of Wands":{u:"YES",r:"NO"},
    "Ace of Cups":{u:"YES",r:"NO"},"Two of Cups":{u:"YES",r:"NO"},"Three of Cups":{u:"YES",r:"MAYBE"},"Four of Cups":{u:"NO",r:"YES"},"Five of Cups":{u:"NO",r:"YES"},"Six of Cups":{u:"YES",r:"MAYBE"},"Seven of Cups":{u:"MAYBE",r:"YES"},"Eight of Cups":{u:"NO",r:"MAYBE"},"Nine of Cups":{u:"YES",r:"MAYBE"},"Ten of Cups":{u:"YES",r:"MAYBE"},"Page of Cups":{u:"YES",r:"NO"},"Knight of Cups":{u:"YES",r:"MAYBE"},"Queen of Cups":{u:"YES",r:"MAYBE"},"King of Cups":{u:"YES",r:"NO"},
    "Ace of Swords":{u:"YES",r:"NO"},"Two of Swords":{u:"MAYBE",r:"MAYBE"},"Three of Swords":{u:"NO",r:"MAYBE"},"Four of Swords":{u:"NO",r:"YES"},"Five of Swords":{u:"NO",r:"MAYBE"},"Six of Swords":{u:"YES",r:"MAYBE"},"Seven of Swords":{u:"NO",r:"YES"},"Eight of Swords":{u:"NO",r:"YES"},"Nine of Swords":{u:"NO",r:"MAYBE"},"Ten of Swords":{u:"NO",r:"MAYBE"},"Page of Swords":{u:"MAYBE",r:"NO"},"Knight of Swords":{u:"YES",r:"NO"},"Queen of Swords":{u:"YES",r:"NO"},"King of Swords":{u:"YES",r:"NO"},
    "Ace of Pentacles":{u:"YES",r:"MAYBE"},"Two of Pentacles":{u:"MAYBE",r:"NO"},"Three of Pentacles":{u:"YES",r:"NO"},"Four of Pentacles":{u:"YES",r:"NO"},"Five of Pentacles":{u:"NO",r:"MAYBE"},"Six of Pentacles":{u:"YES",r:"NO"},"Seven of Pentacles":{u:"MAYBE",r:"NO"},"Eight of Pentacles":{u:"YES",r:"MAYBE"},"Nine of Pentacles":{u:"YES",r:"MAYBE"},"Ten of Pentacles":{u:"YES",r:"NO"},"Page of Pentacles":{u:"YES",r:"NO"},"Knight of Pentacles":{u:"YES",r:"NO"},"Queen of Pentacles":{u:"YES",r:"MAYBE"},"King of Pentacles":{u:"YES",r:"NO"}
  };
  tarotCards.forEach(c=>{ if(m[c.name]){ c.upright.yesNo=m[c.name].u; c.reversed.yesNo=m[c.name].r; } });
})();
const positions = [
  {title:"Quá khứ", sub:"Gốc rễ", desc:"Năng lượng đã qua ảnh hưởng đến hiện tại"},
  {title:"Hiện tại", sub:"Thử thách", desc:"Bài học và trở ngại đang diễn ra"},
  {title:"Tương lai", sub:"Lời khuyên", desc:"Hướng đi và kết quả tiềm năng"}
];
let shuffled = [];
let picked = [null,null,null];
let pickedReversed = [false,false,false];
let phase = "idle";
let fanCardCount = 15;
const deckStack = document.getElementById('deckStack');
const fanContainer = document.getElementById('fanContainer');
const deckView = document.getElementById('deckView');
const fanView = document.getElementById('fanView');
const shuffleBtn = document.getElementById('shuffleBtn');
const revealBtn = document.getElementById('revealBtn');
const resetBtn = document.getElementById('resetBtn');
const readAgainBtn = document.getElementById('readAgainBtn');
const headerReset = document.getElementById('headerReset');
const instructionTitle = document.getElementById('instructionTitle');
const instructionText = document.getElementById('instructionText');
const pickCounter = document.getElementById('pickCounter');
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
const step1Label = document.getElementById('step1Label');
const step2Label = document.getElementById('step2Label');
const step3Label = document.getElementById('step3Label');
const resultsSection = document.getElementById('resultsSection');
const resultsGrid = document.getElementById('resultsGrid');
const overallBox = document.getElementById('overallBox');
const questionInput = document.getElementById('questionInput');
const questionBadge = document.getElementById('questionBadge');
const flyLayer = document.getElementById('flyLayer');

function shuffleArray(a){
  const arr=[...a];
  for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]] }
  return arr;
}
function renderDeckStack(){
  deckStack.innerHTML='';
  for(let i=0;i<9;i++){
    const el=document.createElement('div');
    el.className='absolute inset-0 card-back rounded-[18px]';
    el.style.transform=`translate(${i*0.6}px, ${-i*0.7}px) rotate(${(i-4)*0.5}deg)`;
    el.style.zIndex=i;
    el.innerHTML=`
      <div class="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div class="w-9 h-9 rounded-full border border-[#E8C96A]/20 flex items-center justify-center bg-[#E8C96A]/10"><span class="text-[#E8C96A] text-[13px]">✦</span></div>
        <div class="text-[7px] tracking-[0.18em] text-[#E8C96A]/60 font-semibold">TAROT</div>
        <div class="w-8 h-px bg-[#E8C96A]/20"></div>
        <div class="text-[6.5px] tracking-[0.16em] text-white/25">LU'S</div>
      </div>`;
    deckStack.appendChild(el);
  }
}
renderDeckStack();
function updateProgress(){
  const c = picked.filter(Boolean).length;
  const d3 = document.getElementById('dot3');
  const s3 = document.getElementById('step3Label');
  if(phase==='idle' || phase==='shuffling'){
    dot1.classList.add('active'); dot1.classList.remove('done');
    if(dot2) dot2.classList.remove('active','done');
    if(d3) d3.classList.remove('active','done');
    step1Label.className='text-[#E8C96A]';
    if(step2Label) step2Label.className='text-white/30';
    if(s3) s3.className='text-white/30';
  } else if(phase==='picking' || phase==='readyToReveal'){
    dot1.classList.add('done'); dot1.classList.remove('active');
    if(dot2) dot2.classList.add('active');
    if(d3) d3.classList.remove('active','done');
    step1Label.className='text-white/30';
    if(step2Label) step2Label.className='text-white/30';
    if(s3) s3.className='text-white/30';
  } else if(phase==='revealed'){
    dot1.classList.add('done'); dot1.classList.remove('active');
    if(dot2){ dot2.classList.remove('done'); dot2.classList.add('active'); }
    if(d3){ d3.classList.add('done'); d3.classList.add('active'); }
    step1Label.className='text-white/30';
    if(step2Label) step2Label.className='text-[#E8C96A]';
    if(s3) s3.className='text-white/30';
  }
  if(c>0){ pickCounter.classList.remove('hidden'); pickCounter.textContent=`Đã chọn ${c}/3`; } else pickCounter.classList.add('hidden');
}
function buildFan(){
  fanContainer.innerHTML='';
  const n = fanCardCount;
  const center=(n-1)/2;
  const isMobile = window.innerWidth < 640;
  // on very small screens reduce cards to avoid overflow
  const visible = isMobile && window.innerWidth < 380 ? 11 : n;
  shuffled.forEach((card, i)=>{
    if(i>=visible) return;
    const effCenter = (visible-1)/2;
    const offset = (i-effCenter)*(isMobile? 24: 44);
    const rot = (i-effCenter)*(isMobile? 2.8: 2.4);
    const y = Math.abs(i-effCenter)*(isMobile? 5: 6);
    const wrapper=document.createElement('div');
    wrapper.className='fan-card';
    wrapper.dataset.cardId=card.id;
    wrapper.style.zIndex=10+i;
    if(i===Math.floor(visible/2)) wrapper.style.zIndex=30;
    wrapper.style.transform=`translateX(-50%) translateX(${offset}px) translateY(${y}px) rotate(${rot}deg)`;
    wrapper.innerHTML=`
      <div class="card-shell" style="pointer-events:none">
        <div class="card-inner"><div class="card-face card-back">
          <div class="absolute inset-0 flex flex-col items-center justify-center gap-1">
            <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#E8C96A]/20 flex items-center justify-center bg-[#E8C96A]/10"><span class="text-[#E8C96A] text-[11px] sm:text-[13px]">✦</span></div>
            <div class="text-[6px] sm:text-[7px] tracking-[0.18em] text-[#E8C96A]/60 font-semibold">LU'S</div>
          </div>
        </div></div>
      </div>`;
    wrapper.addEventListener('mouseenter', ()=>{ if(!wrapper.classList.contains('picked')) gsap.to(wrapper,{y:-14,duration:0.24,ease:"power2.out",overwrite:true}) });
    wrapper.addEventListener('mouseleave', ()=>{ if(!wrapper.classList.contains('picked')) gsap.to(wrapper,{y:0,duration:0.24,ease:"power2.out"}) });
    wrapper.addEventListener('click', ()=> handlePick(wrapper, card));
    fanContainer.appendChild(wrapper);
  });
  // center scroll for container
  requestAnimationFrame(()=>{
    const vp=document.getElementById('fanViewport');
    if(vp) vp.scrollLeft=(vp.scrollWidth - vp.clientWidth)/2;
  });
}
function setupFanDrag(){
  const vp=document.getElementById('fanViewport');
  if(!vp || vp.dataset.dragSetup) return;
  vp.dataset.dragSetup="1";
  let isDown=false, startX, scrollLeft;
  vp.addEventListener('mousedown', e=>{isDown=true; vp.classList.add('cursor-grabbing'); startX=e.pageX - vp.offsetLeft; scrollLeft=vp.scrollLeft});
  vp.addEventListener('mouseleave', ()=>{isDown=false; vp.classList.remove('cursor-grabbing')});
  vp.addEventListener('mouseup', ()=>{isDown=false; vp.classList.remove('cursor-grabbing')});
  vp.addEventListener('mousemove', e=>{if(!isDown) return; e.preventDefault(); const x=e.pageX - vp.offsetLeft; const walk=(x - startX)*1.4; vp.scrollLeft=scrollLeft - walk});
  vp.addEventListener('touchstart', e=>{startX=e.touches[0].pageX - vp.offsetLeft; scrollLeft=vp.scrollLeft}, {passive:true});
  vp.addEventListener('touchmove', e=>{const x=e.touches[0].pageX - vp.offsetLeft; const walk=(x - startX)*1.2; vp.scrollLeft=scrollLeft - walk}, {passive:true});
}
function handleShuffle(){
  if(phase==='shuffling') return;
  phase='shuffling'; updateProgress();
  // reset previous reading
  resultsSection.classList.add('hidden'); resultsGrid.innerHTML=''; overallBox.innerHTML='';
  for(let i=0;i<3;i++){ renderSlot(i,null,false); document.getElementById(`slot-${i}`).classList.remove('filled'); }
  picked=[null,null,null]; pickedReversed=[false,false,false];
  revealBtn.style.display='none'; resetBtn.classList.add('hidden');
  document.getElementById('hintText').textContent='Đang xào bài...';
  instructionTitle.textContent='Đang xào bài...';
  instructionText.textContent='Vũ trụ đang chọn 3 lá dành cho bạn...';
  shuffleBtn.disabled=true; shuffleBtn.classList.add('opacity-60');
  const cards = deckStack.children;
  const tl=gsap.timeline({onComplete:()=>{
    shuffled = shuffleArray(tarotCards);
    const chosen = shuffled.slice(0,3);
    picked = chosen;
    pickedReversed = picked.map(()=> Math.random()<0.5);
    // keep deck visible, ensure fan stays hidden (no manual pick)
    deckView.classList.remove('hidden');
    fanView.classList.add('hidden');
    // fill 3 slots with backs sequentially then auto flip
    chosen.forEach((card, idx)=>{
      setTimeout(()=>{
        const slotEl=document.getElementById(`slot-${idx}`);
        renderSlot(idx, card,false);
        slotEl.classList.add('filled');
        gsap.fromTo(slotEl,{scale:0.92, y:12, opacity:0},{scale:1, y:0, opacity:1, duration:0.45, ease:"back.out(1.2)"});
        if(idx===2){
          setTimeout(()=>{
            phase='readyToReveal';
            updateProgress();
            handleReveal();
          }, 420);
        }
      }, idx*260);
    });
    instructionTitle.textContent='Đã chọn 3 lá ngẫu nhiên - đang mở bài...';
    instructionText.textContent='3 lá đã được chọn ngẫu nhiên.';
    shuffleBtn.disabled=false; shuffleBtn.classList.remove('opacity-60');
  }});
  for(let i=0;i<cards.length;i++){ tl.to(cards[i],{x:(Math.random()-0.5)*140,y:(Math.random()-0.5)*40,rotation:(Math.random()-0.5)*18,duration:0.20,ease:"power2.inOut"},i*0.04); }
  tl.to(cards,{x:0,y:0,rotation:(i)=>(i-4)*0.5,duration:0.24,ease:"power2.out",stagger:0.015});
}
function handlePick(wrapper, card){
  if(phase!=='picking' && phase!=='readyToReveal') return;
  if(wrapper.classList.contains('picked')) return;
  const nextIndex = picked.findIndex(p=>p===null); if(nextIndex===-1) return;
  wrapper.classList.add('picked'); wrapper.style.pointerEvents='none';
  gsap.to(wrapper,{opacity:0,scale:0.88,duration:0.16});
  const rect = wrapper.getBoundingClientRect();
  const slotEl = document.getElementById(`slot-${nextIndex}`);
  const slotRect = slotEl.getBoundingClientRect();
  const fly = document.createElement('div');
  fly.style.position='fixed'; fly.style.left=rect.left+'px'; fly.style.top=rect.top+'px'; fly.style.width=rect.width+'px'; fly.style.height=rect.height+'px'; fly.style.zIndex=60;
  fly.innerHTML=`<div class="card-shell" style="width:100%;height:100%"><div class="card-inner"><div class="card-face card-back"><div class="absolute inset-0 flex items-center justify-center"><span class="text-[#E8C96A]">✦</span></div></div></div></div>`;
  flyLayer.appendChild(fly);
  picked[nextIndex]=card;
  gsap.to(fly,{left:slotRect.left,top:slotRect.top,width:slotRect.width,height:slotRect.height,duration:0.58,ease:"power3.inOut",onComplete:()=>{
    fly.remove(); renderSlot(nextIndex, card,false); slotEl.classList.add('filled');
    if(picked.every(p=>p!==null)){
      phase='readyToReveal';
      instructionTitle.textContent='Đã chọn đủ 3 lá - đang mở bài...';
      instructionText.textContent='Vũ trụ đang hé lộ thông điệp cho bạn.';
      revealBtn.style.display='none';
      updateProgress();
      setTimeout(()=> handleReveal(), 650);
    } else {
      instructionTitle.textContent=`Đã chọn ${picked.filter(Boolean).length}/3 - chọn tiếp`;
      gsap.fromTo(slotEl,{scale:0.97},{scale:1,duration:0.32,ease:"back.out(1.4)"});
    }
    updateProgress();
  }});
}
function renderSlot(index, card, showFront){
  const slotEl=document.getElementById(`slot-${index}`);
  if(!card){ slotEl.innerHTML=`<div class="slot-inner flex-col gap-1"><span class="text-[10px] tracking-[0.14em] font-semibold text-white/25">0${index+1}</span><span class="text-[9px] tracking-[0.16em] font-semibold text-[#E8C96A]/70">CHỜ CHỌN</span></div>`; slotEl.classList.remove('filled'); return; }
  if(!showFront){
    slotEl.innerHTML=`
      <div class="card-shell flipped" style="width:100%;height:100%"><div class="card-inner">
        <div class="card-face card-back" style="border-width:1.2px"><div class="absolute inset-0 flex flex-col items-center justify-center gap-1.5"><div class="w-6 h-6 rounded-full border border-[#E8C96A]/20 flex items-center justify-center bg-[#E8C96A]/10"><span class="text-[#E8C96A] text-[10px]">✦</span></div><div class="text-[6px] tracking-[0.18em] text-[#E8C96A]/60 font-semibold">TAROT</div><div class="w-6 h-px bg-[#E8C96A]/20"></div><div class="text-[5.5px] tracking-[0.16em] text-white/25">LU'S</div></div></div>
        <div class="card-face card-front p-2.5 flex flex-col"><div class="text-[7px] tracking-[0.14em] text-amber-700 font-semibold">${positions[index].title.toUpperCase()}</div><div class="flex-1 flex flex-col items-center justify-center gap-1 text-center"><div class="w-11 h-11 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-lg">${card.symbol}</div><div class="font-semibold text-[11px] text-slate-900">${card.vietnameseName}</div><div class="text-[10px] text-slate-500">${card.name}</div></div><div class="h-px bg-amber-200/50"></div><div class="text-[7px] text-center tracking-[0.1em] text-amber-700/70 font-medium pt-1">MAJOR ARCANA - ${String(card.id).padStart(2,'0')}</div></div>
      </div></div>`;
    slotEl.querySelector('.card-shell').classList.remove('flipped'); slotEl.dataset.cardId=card.id; return;
  }
}
function handleReveal(){
  if(phase!=='readyToReveal') return;
  phase='revealed'; updateProgress();
  revealBtn.disabled=true; revealBtn.classList.add('opacity-50','cursor-not-allowed');
  instructionTitle.textContent='Bài đã được lật - khám phá thông điệp';
  instructionText.textContent='Mỗi vị trí mang một thông điệp riêng.';
  pickedReversed = picked.map(()=> Math.random()<0.5);
  picked.forEach((card, idx)=>{
    const slotEl=document.getElementById(`slot-${idx}`); const isReversed = pickedReversed[idx];
    setTimeout(()=>{
      slotEl.innerHTML=`
        <div class="card-shell ${isReversed?'reversed':''}" style="width:100%;height:100%"><div class="card-inner">
          <div class="card-face card-back"><div class="absolute inset-0 flex items-center justify-center"><span class="text-[#E8C96A] text-lg">✦</span></div></div>
          <div class="card-face card-front ${isReversed?'reversed':''} p-0 overflow-hidden">
            <img src="${card.image}" alt="${card.vietnameseName}" class="w-full h-full object-cover" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="hidden w-full h-full items-center justify-center bg-[#FFFCF0] text-slate-900 text-lg">${card.symbol}</div>
          </div>
        </div></div>`;
      requestAnimationFrame(()=> setTimeout(()=> slotEl.querySelector('.card-shell').classList.add('flipped'),30));
      gsap.fromTo(slotEl,{scale:0.97},{scale:1,duration:0.45,ease:"back.out(1.3)"});
      if(idx===2) setTimeout(()=> buildResults(),820);
    }, idx*380);
  });
}
function buildResults(){
  resultsSection.classList.remove('hidden'); resultsGrid.innerHTML='';
  const question = questionInput.value.trim();
  const yesCount = picked.map((c,i)=> pickedReversed[i]? c.reversed.yesNo : c.upright.yesNo).filter(v=>v==='YES').length;
  const noCount = picked.map((c,i)=> pickedReversed[i]? c.reversed.yesNo : c.upright.yesNo).filter(v=>v==='NO').length;
  let overallTitle, overallDesc, overallColor;
  if(yesCount>=2){ overallTitle='Năng lượng tổng thể: TÍCH CỰC - CÂU TRẢ LỜI LÀ CÓ'; overallDesc='Hai hoặc ba lá nghiêng về YES. Vũ trụ đang ủng hộ bạn tiến bước.'; overallColor='bg-emerald-500'; }
  else if(noCount>=2){ overallTitle='Năng lượng tổng thể: THỬ THÁCH - CẦN CÂN NHẮC'; overallDesc='Năng lượng NO chiếm ưu thế. Chậm lại và chuẩn bị kỹ hơn.'; overallColor='bg-rose-500'; }
  else { overallTitle='Năng lượng tổng thể: TRUNG LẬP - CÓ THỂ / TÙY DUYÊN'; overallDesc='Thông điệp là MAYBE - kết quả phụ thuộc vào lựa chọn của bạn.'; overallColor='bg-amber-500'; }
  overallBox.innerHTML=`
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div class="flex-1">
        <div class="inline-flex px-3 py-1 rounded-full ${overallColor} text-white text-[11px] font-bold tracking-[0.08em]">${overallTitle}</div>
        <p class="text-white/60 text-[13px] leading-relaxed mt-2">${overallDesc}</p>
        ${question?`<div class="mt-2 text-[12px] text-[#E8C96A]/90"><span class="text-white/30">Câu hỏi:</span> “${question}”</div>`:''}
      </div>
      <div class="flex gap-2 shrink-0">
        <div class="px-3 py-2 rounded-xl bg-white text-slate-900 text-center min-w-[66px]"><div class="text-[9px] tracking-[0.12em] font-bold text-slate-500">YES</div><div class="text-base font-bold text-emerald-600">${yesCount}/3</div></div>
        <div class="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-center min-w-[66px]"><div class="text-[9px] tracking-[0.12em] font-bold text-white/40">MAYBE</div><div class="text-base font-bold text-white">${3-yesCount-noCount}/3</div></div>
        <div class="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-center min-w-[66px]"><div class="text-[9px] tracking-[0.12em] font-bold text-white/40">NO</div><div class="text-base font-bold text-rose-400">${noCount}/3</div></div>
      </div>
    </div>`;
  picked.forEach((card, idx)=>{
    const isReversed = pickedReversed[idx]; const data = isReversed? card.reversed : card.upright; const pos = positions[idx];
    let badgeClass='', badgeText='';
    if(data.yesNo==='YES'){ badgeClass='bg-emerald-500 text-white'; badgeText='YES - CÓ'; }
    else if(data.yesNo==='NO'){ badgeClass='bg-rose-500 text-white'; badgeText='NO - KHÔNG'; }
    else { badgeClass='bg-amber-400 text-slate-900'; badgeText='MAYBE - CÓ THỂ'; }
    const el=document.createElement('div');
    el.className='glass-minimal rounded-2xl overflow-hidden flex flex-col';
    el.innerHTML=`
      <div class="p-5 flex-1 flex flex-col">
        <span class="inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.08em] ${badgeClass} self-start">${badgeText}</span>
        <div class="mt-3 flex gap-3">
          <div class="w-[64px] h-[96px] sm:w-[72px] sm:h-[108px] rounded-lg overflow-hidden border border-white/10 shrink-0 bg-white">
            <img src="${card.image}" alt="${card.vietnameseName}" class="w-full h-full object-cover ${isReversed?'rotate-180':''}" loading="lazy" onerror="this.style.display='none'">
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-[10px] tracking-[0.12em] font-semibold text-[#E8C96A]">${pos.title.toUpperCase()} - ${pos.sub.toUpperCase()}</div>
            <div class="font-display font-bold text-[15px] leading-tight mt-1 text-white">${card.vietnameseName} <span class="font-normal text-white/45 text-[12px]">- ${card.name}</span></div>
            <div class="text-[11px] text-white/30 mt-0.5">${pos.desc}</div>
          </div>
        </div>
        <div class="flex items-center gap-2 mt-3">
          <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold ${isReversed?'bg-rose-500/15 text-rose-300 border border-rose-500/20':'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20'}">${isReversed?'DẠNG NGƯỢC': 'DẠNG XUÔI'}</span>
          <span class="text-[11px] text-white/30">${isReversed?'Năng lượng đảo chiều':'Năng lượng thuận'}</span>
        </div>
        <div class="flex flex-wrap gap-1.5 mt-3">
          ${data.keywords.map(k=>`<span class="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] text-white/70">#${k}</span>`).join('')}
        </div>
        <div class="mt-4 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
          <div class="text-[10px] font-bold tracking-[0.12em] text-[#E8C96A] mb-1">GIẢI NGHĨA</div>
          <p class="text-[13px] leading-relaxed text-white/75">${data.meaning}</p>
        </div>
        <div class="mt-3 pt-3 border-t border-white/10">
          <div class="text-[11px] font-medium text-white/45">Lời khuyên cho vị trí ${pos.title.toLowerCase()}:</div>
          <p class="text-[12px] leading-relaxed text-white/60 mt-1">${getAdvice(idx, card, isReversed)}</p>
        </div>
      </div>`;
    resultsGrid.appendChild(el);
  });
  setTimeout(()=> resultsSection.scrollIntoView({behavior:'smooth',block:'start'}),180);
  gsap.from(resultsGrid.children,{y:20,opacity:0,duration:0.45,stagger:0.08,ease:"power2.out"});
}
function getAdvice(idx, card, rev){
  const adv=[
    rev?`Quá khứ với năng lượng ngược cho thấy bài học chưa khép lại. Hãy nhìn lại mô thức cũ của ${card.vietnameseName} và tha thứ cho bản thân trước khi tiến tới.`:`Quá khứ với ${card.vietnameseName} là nền tảng. Hãy trân trọng bài học đó - nó chính là gốc rễ nâng đỡ hiện tại.`,
    rev?`Hiện tại đang bị thử thách bởi bóng tối của ${card.vietnameseName}. Đừng chống lại, hãy quan sát và điều chỉnh với tỉnh thức.`:`Hiện tại, ${card.vietnameseName} mời bạn hành động với phẩm chất tích cực của lá bài. Đây là chìa khóa vượt qua thử thách.`,
    rev?`Tương lai ngược nhắc bạn chuẩn bị kỹ hơn. Nếu tiếp tục như hiện tại, năng lượng ${card.vietnameseName} có thể đảo chiều - hãy chủ động thay đổi.`:`Tương lai với ${card.vietnameseName} rất hứa hẹn nếu bạn giữ vững năng lượng hiện tại. Vũ trụ đang mở lối - hãy bước đi với niềm tin.`
  ]; return adv[idx];
}
function resetAll(){
  picked=[null,null,null]; pickedReversed=[false,false,false]; shuffled=[]; phase='idle';
  deckView.classList.remove('hidden'); fanView.classList.add('hidden'); fanContainer.innerHTML='';
  for(let i=0;i<3;i++) renderSlot(i,null,false);
  resultsSection.classList.add('hidden'); resultsGrid.innerHTML=''; overallBox.innerHTML='';
  revealBtn.disabled=true;
  revealBtn.style.display='';
  revealBtn.className='px-7 py-3 rounded-full font-semibold text-[13px] bg-white/[0.06] text-white/25 border border-white/10 cursor-not-allowed transition inline-flex items-center gap-2';
  revealBtn.innerHTML=`<span>✧</span> Lật bài <span class="text-[11px] font-normal opacity-60">(cần 3 lá)</span>`;
  resetBtn.classList.add('hidden'); shuffleBtn.disabled=false; shuffleBtn.classList.remove('opacity-60');
  instructionTitle.textContent='Sẵn sàng cho hành trình nhỏ?';
  instructionText.textContent='Nhấn “Xào bài & Trải bài” để bắt đầu. Hít sâu và nghĩ về câu hỏi của bạn.';
  document.getElementById('hintText').textContent='Chọn đủ 3 lá để mở khóa - mỗi lá 50% xuôi / ngược';
  renderDeckStack(); updateProgress(); window.scrollTo({top:0,behavior:'smooth'});
}
shuffleBtn.addEventListener('click', handleShuffle);
revealBtn.addEventListener('click', handleReveal);
resetBtn.addEventListener('click', resetAll);
readAgainBtn.addEventListener('click', resetAll);
headerReset.addEventListener('click', resetAll);
questionInput.addEventListener('input', ()=>{
  const v=questionInput.value.trim();
  if(!v){ questionBadge.classList.add('hidden'); return; }
  questionBadge.textContent=`Câu hỏi: “${v.slice(0,36)}${v.length>36?'...':''}”`;
  questionBadge.classList.remove('hidden');
});
function updatePlaceholder(){ questionInput.placeholder = window.innerWidth < 640 ? "Bạn muốn hỏi điều gì?..." : "Bạn muốn hỏi điều gì? (ví dụ: Con đường sự nghiệp sắp tới...)"; }
updatePlaceholder();
window.addEventListener('resize', updatePlaceholder);
document.getElementById('copyGptBtn').addEventListener('click', async ()=>{
  const q = questionInput.value.trim() || "Không có câu hỏi cụ thể";
  const cards = picked.map((c,i)=>{
    if(!c) return "";
    const rev = pickedReversed[i] ? " ngược" : "";
    return `${c.name.toLowerCase()}${rev}`;
  }).filter(Boolean).join(", ");
  const text = `Câu hỏi: ${q}\nTrải bài: ${cards}`;
  try{
    await navigator.clipboard.writeText(text);
  }catch(e){
    const ta=document.createElement('textarea'); ta.value=text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
  }
  const toast=document.getElementById('copyToast');
  const btn=document.getElementById('copyGptBtn');
  toast.classList.remove('hidden');
  const orig=btn.innerHTML;
  btn.innerHTML=`<span class="text-[14px]">✓</span> Đã copy`;
  setTimeout(()=>{ toast.classList.add('hidden'); btn.innerHTML=orig; }, 2200);
});
updateProgress();
let resizeTO; window.addEventListener('resize', ()=>{
  clearTimeout(resizeTO); resizeTO=setTimeout(()=>{
    if(phase==='picking' || phase==='readyToReveal') buildFan();
  },120);
});