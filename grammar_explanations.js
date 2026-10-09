// ==========================================================================
// NIHONGO SENSEI - GRAMMAR EXPLANATIONS & VOCABULARY HINTS MODULE
// Cung cấp giải thích chi tiết cho bài tập trắc nghiệm & gợi ý từ vựng cho bài tập dịch
// Tự động phân tích thể chia (Conjugation), Trợ từ (Particles) & Từ vựng (Vocab)
// ==========================================================================

window.GrammarExplanations = (function() {
    'use strict';

    // 1. TỪ ĐIỂN TỔNG HỢP N5 - N3
    const DICT = {
    "私": "Tôi",
    "田中さん": "Anh/chị Tanaka",
    "山田さん": "Anh/chị Yamada",
    "佐藤さん": "Anh/chị Sato",
    "先生": "Thầy cô giáo",
    "学生": "Học sinh, sinh viên",
    "医者": "Bác sĩ",
    "社長": "Giám đốc, người đứng đầu công ty",
    "友達": "Bạn bè",
    "家族": "Gia đình",
    "子供": "Trẻ con (danh từ)",
    "両親": "Bố mẹ",
    "彼女": "Cô ấy / Bạn gái",
    "彼": "Anh ấy / Bạn trai",
    "独身": "Độc thân (chưa lập gia đình)",
    "結婚": "Kết hôn, cưới hỏi",
    "夫婦": "Vợ chồng",
    "若者": "Giới trẻ, thanh niên",
    "高齢者": "Người cao tuổi",
    "客": "Khách hàng",
    "警察": "Cảnh sát",
    "運転手": "Tài xế",
    "ドライバー": "Người lái xe",
    "建築家": "Kiến trúc sư",
    "猫": "Con mèo",
    "犬": "Con chó",
    "飼い主": "Chủ nuôi",
    "人々": "Mọi người",
    "外国人": "Người nước ngoài",
    "日本人": "Người Nhật",
    "赤ちゃん": "Em bé",
    "赤ん坊": "Trẻ sơ sinh",
    "無職": "Thất nghiệp (Danh từ)",
    "本人": "Bản thân người đó",
    "自身": "Bản thân",
    "自分": "Tự mình",
    "二人": "Hai người",
    "一人": "Một người",
    "本": "Quyển sách",
    "写真": "Bức ảnh",
    "病院": "Bệnh viện",
    "薬": "Thuốc",
    "風呂": "Bồn tắm, nước tắm",
    "お風呂": "Bồn tắm, nước tắm",
    "スープ": "Món súp, canh",
    "アイス": "Kem (ice cream)",
    "記憶": "Ký ức",
    "道": "Con đường",
    "洗濯物": "Quần áo giặt, đồ phơi",
    "店": "Cửa hàng, tiệm",
    "庭": "Khu vườn",
    "部屋": "Căn phòng",
    "ホテル": "Khách sạn",
    "ビル": "Tòa nhà",
    "家": "Ngôi nhà",
    "学校": "Trường học",
    "大学": "Trường đại học",
    "教室": "Phòng học",
    "食堂": "Nhà ăn, quán ăn",
    "会社": "Công ty",
    "駅": "Nhà ga",
    "空港": "Sân bay",
    "スーパー": "Siêu thị",
    "コンビニ": "Cửa hàng tiện lợi",
    "図書館": "Thư viện",
    "銀行": "Ngân hàng",
    "郵便局": "Bưu điện",
    "公園": "Công viên",
    "海": "Biển",
    "山": "Núi",
    "富士山": "Núi Phú Sĩ",
    "湖": "Hồ nước",
    "川": "Dòng sông",
    "手紙": "Bức thư",
    "電話": "Điện thoại",
    "携帯電話": "Điện thoại di động",
    "スマートフォン": "Điện thoại thông minh",
    "車": "Xe hơi, ô tô",
    "バス": "Xe buýt",
    "電車": "Tàu điện",
    "自転車": "Xe đạp",
    "荷物": "Hành lý",
    "お土産": "Quà lưu niệm",
    "切符": "Vé",
    "財布": "Ví tiền",
    "お金": "Tiền bạc",
    "鍵": "Chìa khóa",
    "傘": "Cái ô, cái dù",
    "眼鏡": "Kính mắt",
    "時計": "Đồng hồ",
    "机": "Cái bàn",
    "椅子": "Cái ghế",
    "窓": "Cửa sổ",
    "ドア": "Cửa ra vào",
    "テレビ": "Tivi",
    "パソコン": "Máy vi tính",
    "映画": "Bộ phim",
    "音楽": "Âm nhạc",
    "歌": "Bài hát",
    "料理": "Món ăn",
    "ご飯": "Cơm, bữa ăn",
    "朝ご飯": "Bữa sáng",
    "昼ご飯": "Bữa trưa",
    "晩ご飯": "Bữa tối",
    "肉": "Thịt",
    "魚": "Cá",
    "野菜": "Rau củ",
    "果物": "Hoa quả, trái cây",
    "パン": "Bánh mì",
    "卵": "Trứng",
    "牛乳": "Sữa bò",
    "お茶": "Trà",
    "水": "Nước",
    "コーヒー": "Cà phê",
    "お酒": "Rượu",
    "服": "Quần áo",
    "靴": "Giày",
    "帽子": "Mũ, nón",
    "日記": "Nhật ký",
    "文章": "Đoạn văn, bài văn",
    "言葉": "Từ vựng, lời nói",
    "意味": "Ý nghĩa",
    "質問": "Câu hỏi",
    "問題": "Vấn đề, bài tập",
    "テスト": "Bài kiểm tra",
    "試験": "Kỳ thi",
    "宿題": "Bài tập về nhà",
    "仕事": "Công việc",
    "会議": "Cuộc họp",
    "計画": "Kế hoạch",
    "予定": "Dự định",
    "約束": "Lời hứa, hẹn ước",
    "事故": "Vụ tai nạn",
    "火事": "Hỏa hoạn, cháy",
    "地震": "Động đất",
    "台風": "Bão",
    "雨": "Cơn mưa",
    "雪": "Tuyết",
    "風": "Gió",
    "天気": "Thời tiết",
    "気温": "Nhiệt độ",
    "時間": "Thời gian",
    "今": "Bây giờ",
    "今日": "Hôm nay",
    "明日": "Ngày mai",
    "昨日": "Hôm qua",
    "毎日": "Mỗi ngày",
    "今週": "Tuần này",
    "先週": "Tuần trước",
    "来週": "Tuần sau",
    "今月": "Tháng này",
    "先月": "Tháng trước",
    "来月": "Tháng sau",
    "今年": "Năm nay",
    "去年": "Năm ngoái",
    "来年": "Năm sau",
    "朝": "Buổi sáng",
    "昼": "Buổi trưa",
    "夜": "Buổi tối, đêm",
    "春": "Mùa xuân",
    "夏": "Mùa hè",
    "秋": "Mùa thu",
    "冬": "Mùa đông",
    "冬休み": "Kỳ nghỉ đông (Danh từ)",
    "夏休み": "Kỳ nghỉ hè",
    "春休み": "Kỳ nghỉ xuân",
    "休み": "Ngày nghỉ",
    "旅行": "Du lịch",
    "出張": "Chuyến công tác",
    "散歩": "Đi dạo",
    "買い物": "Mua sắm",
    "練習": "Luyện tập",
    "勉強": "Học tập",
    "復習": "Ôn tập",
    "予習": "Chuẩn bị bài",
    "趣味": "Sở thích",
    "スポーツ": "Thể thao",
    "ゲーム": "Trò chơi, game",
    "夢": "Giấc mơ, ước mơ",
    "力": "Sức lực",
    "体力": "Thể lực",
    "健康": "Sức khỏe",
    "病気": "Bệnh tật",
    "熱": "Sốt, nhiệt độ",
    "風邪": "Cảm cúm",
    "頭": "Đầu",
    "目": "Mắt",
    "耳": "Tai",
    "口": "Miệng",
    "手": "Tay",
    "足": "Chân",
    "体": "Cơ thể",
    "心": "Trái tim, tấm lòng",
    "気持ち": "Tâm trạng, cảm giác",
    "気分": "Cảm giác, sức khỏe",
    "声": "Giọng nói, tiếng",
    "音": "Âm thanh",
    "色": "Màu sắc",
    "形": "Hình dáng",
    "味": "Hương vị",
    "におい": "Mùi",
    "値段": "Giá cả",
    "物価": "Giá cả vật giá",
    "給料": "Tiền lương",
    "文化": "Văn hóa",
    "歴史": "Lịch sử",
    "経済": "Kinh tế",
    "社会": "Xã hội",
    "世界": "Thế giới",
    "国": "Đất nước",
    "町": "Thị trấn, thành phố",
    "村": "Ngôi làng",
    "理由": "Lý do",
    "原因": "Nguyên nhân",
    "結果": "Kết quả",
    "方法": "Phương pháp, cách thức",
    "意見": "Ý kiến",
    "考え": "Suy nghĩ",
    "事実": "Sự thật",
    "本当": "Sự thật, thật sự",
    "嘘": "Lời nói dối",
    "冗談": "Lời nói đùa",
    "秘密": "Bí mật",
    "喧嘩": "Cãi vã, đánh nhau",
    "準備": "Chuẩn bị",
    "成功": "Thành công",
    "失敗": "Thất bại",
    "注意": "Chú ý, cẩn thận",
    "不注意": "Không chú ý, bất cẩn",
    "経験": "Kinh nghiệm",
    "留守": "Vắng nhà (Danh từ)",
    "免許": "Bằng lái, giấy phép",
    "迷惑": "Phiền phức, làm phiền",
    "可能性": "Khả năng",
    "挑戦": "Thử thách, thử sức",
    "後悔": "Hối hận",
    "全力": "Hết sức, toàn lực",
    "地図": "Bản đồ",
    "案内": "Hướng dẫn",
    "説明": "Giải thích",
    "紹介": "Giới thiệu",
    "相談": "Thảo luận, trao đổi",
    "連絡": "Liên lạc",
    "報告": "Báo cáo",
    "返事": "Trả lời, phản hồi",
    "挨拶": "Chào hỏi",
    "お礼": "Lời cảm ơn",
    "お詫び": "Lời xin lỗi",
    "お祝い": "Chúc mừng",
    "贈り物": "Món quà",
    "プレゼント": "Món quà",
    "パーティー": "Bữa tiệc",
    "コンサート": "Buổi hòa nhạc",
    "展覧会": "Triển lãm",
    "美術館": "Bảo tàng mỹ thuật",
    "博物館": "Bảo tàng lịch sử",
    "行く": "Đi",
    "来る": "Đến",
    "帰る": "Về",
    "食べる": "Ăn",
    "飲む": "Uống",
    "見る": "Xem / Nhìn (Thể nguyên mẫu V-る)",
    "聞く": "Nghe, hỏi",
    "読む": "Đọc",
    "書く": "Viết",
    "話す": "Nói chuyện",
    "買う": "Mua",
    "売る": "Bán",
    "会う": "Gặp gỡ",
    "待つ": "Chờ đợi",
    "持つ": "Cầm, mang",
    "呼ぶ": "Gọi",
    "使う": "Sử dụng",
    "置く": "Đặt, để",
    "作る": "Làm, chế tạo",
    "知る": "Biết",
    "住む": "Sinh sống",
    "働く": "Làm việc",
    "休む": "Nghỉ ngơi (Thể nguyên mẫu V-る)",
    "起きる": "Thức dậy (Thể nguyên mẫu V-る)",
    "寝る": "Đi ngủ",
    "座る": "Ngồi",
    "立つ": "Đứng",
    "歩く": "Đi bộ",
    "走る": "Chạy",
    "泳ぐ": "Bơi",
    "乗る": "Lên xe, đi xe",
    "降りる": "Xuống xe",
    "入る": "Đi vào",
    "出る": "Đi ra",
    "開ける": "Mở (tha động từ)",
    "閉める": "Đóng (tha động từ)",
    "開く": "Mở (tự động từ)",
    "閉まる": "Đóng (tự động từ)",
    "消す": "Tắt",
    "つける": "Bật",
    "始める": "Bắt đầu",
    "終わる": "Kết thúc",
    "洗う": "Rửa, giặt",
    "干す": "Phơi",
    "歌う": "Hát",
    "弾く": "Chơi đàn",
    "遊ぶ": "Chơi đùa",
    "教える": "Dạy, chỉ bảo",
    "習う": "Học tập",
    "貸す": "Cho mượn",
    "借りる": "Mượn",
    "返す": "Trả lại",
    "送る": "Gửi",
    "払う": "Thanh toán, trả tiền",
    "手伝う": "Giúp đỡ",
    "探す": "Tìm kiếm",
    "見つける": "Tìm thấy",
    "無くす": "Làm mất",
    "落とす": "Làm rơi",
    "拾う": "Nhặt được",
    "捨てる": "Vứt đi",
    "忘れる": "Quên",
    "思い出す": "Nhớ ra",
    "覚える": "Ghi nhớ",
    "考える": "Suy nghĩ",
    "分かる": "Hiểu",
    "困る": "Khó khăn, bối rối",
    "急ぐ": "Gấp gáp, vội vã",
    "遅れる": "Muộn, trễ",
    "間に合う": "Kịp giờ",
    "着く": "Đến nơi",
    "止まる": "Dừng lại",
    "動く": "Chuyển động",
    "壊れる": "Bị hỏng",
    "直す": "Sửa chữa",
    "治る": "Khỏi bệnh",
    "勝つ": "Thắng",
    "負ける": "Thua",
    "泣く": "Khóc",
    "笑う": "Cười",
    "怒る": "Tức giận",
    "喜ぶ": "Vui mừng",
    "驚く": "Ngạc nhiên",
    "信じる": "Tin tưởng",
    "頼む": "Nhờ vả",
    "断る": "Từ chối",
    "受ける": "Nhận, dự thi",
    "受かる": "Đỗ, thi đỗ",
    "落ちる": "Trượt, ngã",
    "通る": "Đi qua, thông qua",
    "通う": "Đi lại thường xuyên",
    "届く": "Được chuyển đến",
    "届ける": "Giao đến",
    "案内する": "Hướng dẫn",
    "説明する": "Giải thích",
    "紹介する": "Giới thiệu",
    "掃除する": "Dọn dẹp",
    "洗濯する": "Giặt giũ",
    "料理する": "Nấu ăn",
    "旅行する": "Đi du lịch",
    "練習する": "Luyện tập",
    "勉強する": "Học tập",
    "復習する": "Ôn tập",
    "予習する": "Chuẩn bị bài",
    "散歩する": "Đi dạo",
    "買い物する": "Mua sắm",
    "準備する": "Chuẩn bị",
    "注意する": "Chú ý",
    "連絡する": "Liên lạc",
    "報告する": "Báo cáo",
    "相談する": "Bàn bạc",
    "約束する": "Hẹn ước",
    "成功する": "Thành công",
    "失敗する": "Thất bại",
    "生活する": "Sinh hoạt",
    "出発する": "Xuất phát",
    "到着する": "Đến nơi",
    "運転する": "Lái xe",
    "溶ける": "Tan chảy (thể nguyên mẫu V-る)",
    "冷める": "Nguội đi",
    "散る": "Rơi, rụng (hoa)",
    "空く": "Vắng, trống",
    "混む": "Đông đúc",
    "壊す": "Làm hỏng",
    "汚す": "Làm bẩn",
    "片付ける": "Dọn dẹp ngăn nắp",
    "片付く": "Được dọn dẹp",
    "倒れる": "Ngã, đổ",
    "倒す": "Đốn ngã, lật đổ",
    "育てる": "Nuôi nấng",
    "育つ": "Lớn lên",
    "増える": "Tăng lên",
    "減る": "Giảm đi",
    "変わる": "Thay đổi",
    "変える": "Đổi",
    "続ける": "Tiếp tục",
    "続く": "Kéo dài",
    "残る": "Còn lại",
    "残す": "Để lại",
    "比べる": "So sánh",
    "決める": "Quyết định",
    "決まる": "Được quyết định",
    "選ぶ": "Chọn lựa",
    "進む": "Tiến lên",
    "下がる": "Hạ xuống",
    "上がる": "Tăng lên",
    "下げる": "Hạ bớt",
    "集める": "Thu thập",
    "集まる": "Tập trung",
    "伝える": "Truyền đạt",
    "伝わる": "Được truyền đạt",
    "慣れる": "Quen thuộc",
    "諦める": "Bỏ cuộc",
    "願う": "Cầu mong",
    "祈る": "Cầu nguyện",
    "感じる": "Cảm thấy",
    "試す": "Thử nghiệm",
    "確かめる": "Xác nhận",
    "喜ばせる": "Làm ai vui",
    "大きい": "To, lớn",
    "小さい": "Nhỏ, bé",
    "高い": "Cao / Đắt",
    "安い": "Rẻ",
    "新しい": "Mới mẻ, còn nguyên vẹn (Tính từ đuôi い dạng nguyên thể)",
    "古い": "Cũ",
    "いい": "Tốt",
    "よい": "Tốt",
    "良い": "Tốt",
    "悪い": "Xấu, tồi",
    "暑い": "Nóng (thời tiết)",
    "熱い": "Nóng (nhiệt độ đồ vật)",
    "寒い": "Lạnh (thời tiết)",
    "冷たい": "Lạnh (đồ vật, cảm giác)",
    "温かい": "Ấm áp (Tính từ đuôi い dạng nguyên thể)",
    "暖かい": "Ấm áp",
    "涼しい": "Mát mẻ",
    "難しい": "Khó",
    "易しい": "Dễ",
    "優しい": "Hiền lành",
    "遠い": "Xa",
    "近い": "Gần",
    "早い": "Sớm",
    "速い": "Nhanh",
    "遅い": "Chậm, muộn",
    "多い": "Nhiều",
    "少ない": "Ít",
    "美味しい": "Ngon",
    "まずい": "Dở",
    "甘い": "Ngọt",
    "辛い": "Cay / Khổ sở",
    "苦い": "Đắng",
    "塩辛い": "Mặn",
    "酸っぱい": "Chua",
    "広い": "Rộng",
    "狭い": "Hẹp",
    "明るい": "Sáng sủa",
    "暗い": "Tối tăm",
    "重い": "Nặng",
    "軽い": "Nhẹ",
    "楽しい": "Vui vẻ",
    "面白い": "Thú vị",
    "つまらない": "Chán ngắt",
    "嬉しい": "Vui sướng",
    "悲しい": "Buồn bã",
    "寂しい": "Cô đơn",
    "恥ずかしい": "Xấu hổ",
    "羨ましい": "Ghen tị",
    "危ない": "Nguy hiểm",
    "痛い": "Đau",
    "忙しい": "Bận rộn",
    "若い": "Trẻ trung (Tính từ đuôi い dạng nguyên thể)",
    "厳しい": "Nghiêm khắc",
    "詳しい": "Chi tiết, tường tận",
    "正しい": "Đúng đắn",
    "珍しい": "Hiếm có",
    "素晴らしい": "Tuyệt vời",
    "きつい": "Chật / Khắc nghiệt",
    "元気": "Khỏe mạnh",
    "暇": "Rảnh rỗi",
    "静か": "Yên tĩnh",
    "賑やか": "Náo nhiệt",
    "便利": "Tiện lợi",
    "不便": "Bất tiện",
    "上手": "Giỏi",
    "下手": "Kém, vụng",
    "好き": "Thích",
    "嫌い": "Ghét",
    "大切": "Quan trọng",
    "大事": "Quan trọng",
    "簡単": "Đơn giản",
    "複雑": "Phức tạp",
    "必要": "Cần thiết",
    "親切": "Tốt bụng, thân thiện",
    "有名": "Nổi tiếng",
    "綺麗": "Đẹp / Sạch sẽ",
    "きれい": "Đẹp / Sạch sẽ",
    "危険": "Nguy hiểm",
    "安全": "An toàn",
    "特別": "Đặc biệt",
    "真面目": "Chăm chỉ, nghiêm túc",
    "素敵": "Tuyệt vời, đáng yêu",
    "自由": "Tự do",
    "丁寧": "Lịch sự",
    "変": "Kỳ lạ",
    "楽": "Thoải mái, nhàn nhã",
    "だめ": "Không được",
    "無理": "Quá sức, vô lý",
    "は": "Trợ từ chủ đề câu (thì, là, ở)",
    "が": "Trợ từ chỉ chủ ngữ ngữ pháp / tác nhân hành động / đối tượng tính từ",
    "を": "Trợ từ chỉ tân ngữ trực tiếp (đối tượng chịu sự tác động của hành động)",
    "に": "Trợ từ chỉ thời gian, nơi chốn đến/tồn tại, mục đích, đối tượng tiếp nhận",
    "で": "Trợ từ chỉ nơi diễn ra hành động, phương tiện, cách thức, nguyên nhân",
    "へ": "Trợ từ chỉ phương hướng di chuyển (hướng về phía...)",
    "と": "Trợ từ 'và' (liệt kê), 'cùng với', nội dung trích dẫn",
    "も": "Trợ từ 'cũng', hoặc nhấn mạnh 'đến mức / ngay cả'",
    "から": "Trợ từ 'từ' (thời gian, địa điểm) hoặc 'vì/do' (nguyên nhân)",
    "まで": "Trợ từ 'đến / cho đến' (thời gian, địa điểm)",
    "までに": "Trợ từ 'trước khi / muộn nhất là' (hạn chót thực hiện hành động)",
    "より": "Trợ từ so sánh 'hơn so với'",
    "ほど": "Trợ từ 'đến mức / khoảng chừng'",
    "ばかり": "Trợ từ 'toàn là / chỉ toàn / vừa mới'",
    "だけ": "Trợ từ 'chỉ' (giới hạn phạm vi)",
    "しか": "Trợ từ 'chỉ' (luôn đi với thể phủ định)",
    "なら": "Nếu là... (giả định)",
    "でも": "Dù là / hay là / ngay cả...",
    "こそ": "Chính là / nhất định (nhấn mạnh)",
    "さえ": "Ngay cả / thậm chí / chỉ cần...",
    "のに": "Mặc dù... thế mà... / Để làm gì",
    "ので": "Bởi vì, do (nguyên nhân khách quan)",
    "の": "Trợ từ sở hữu (của) hoặc danh từ hóa",
    "な": "Trợ từ liên kết tính từ đuôi -na với danh từ",
    "だ": "Trợ từ khẳng định (thì, là)",
    "うちに": "Trong lúc, nhân lúc (tranh thủ khi trạng thái chưa đổi)",
    "あいだ": "Trong suốt khoảng thời gian (song song liên tục)",
    "あいだに": "Trong lúc (hành động ngắn chen ngang)",
    "からに": "Vì / Kể từ khi",
    "ところ": "Đúng vào thời điểm, sắp sửa / đang / vừa mới",
    "とおり": "Theo đúng như...",
    "どおり": "Theo đúng như...",
    "によって": "Tùy theo / Bằng cách / Do nguyên nhân",
    "によっては": "Tùy vào từng trường hợp...",
    "たびに": "Cứ mỗi lần / Mỗi khi...",
    "ば": "Nếu (thể điều kiện)",
    "ついでに": "Nhân tiện, tiện thể làm việc khác",
    "くらい": "Đến mức / Khoảng chừng",
    "ぐらい": "Đến mức / Khoảng chừng",
    "くらいなら": "Nếu phải... thì thà... còn hơn",
    "にかぎる": "Tốt nhất là / Là nhất",
    "に対して": "Đối với... / Trái ngược với...",
    "反面": "Nhưng mặt khác / Trái lại...",
    "一方": "Một mặt thì... / Ngày càng...",
    "一方で": "Một mặt thì... mặt khác lại...",
    "というより": "Nói đúng hơn là...",
    "代わりに": "Thay vì / Bù lại...",
    "ために": "Vì / Để mà...",
    "による": "Do / Bởi...",
    "ことから": "Vì, từ việc...",
    "おかげで": "Nhờ có... (kết quả tích cực)",
    "せいで": "Tại vì, do (tiêu cực)",
    "のだから": "Vì là... / Bởi vì thực tế là...",
    "んだから": "Vì là... (văn nói thân mật)",
    "ては": "Nếu cứ... thì sẽ (tiêu cực)",
    "のでは": "Nếu mà... thì sẽ (tiêu cực)",
    "たとえ": "Cho dù...",
    "ても": "Dù có... đi chăng nữa",
    "からでないと": "Nếu chưa... thì không thể...",
    "からでなければ": "Nếu chưa... thì không thể...",
    "限る": "Tốt nhất là / Chỉ giới hạn ở",
    "に限る": "Tốt nhất là / Là nhất",
    "代わり": "Thay thế, bù lại",
    "の代わりに": "Thay vì / Bù lại",
    "おかげ": "Nhờ có (tích cực)",
    "せい": "Do, tại",
    "ため": "Vì, do / Để",
    "のために": "Vì, do / Để phục vụ cho",
    "のなら": "Nếu quả thực là...",
    "ごとに": "Cứ mỗi, cứ cách...",
    "始まらない": "Chưa bắt đầu (thể phủ định V-ない)",
    "終わらない": "Chưa kết thúc (thể phủ định V-ない)",
    "見ない": "Không xem / Không nhìn (thể phủ định V-ない)",
    "買わない": "Không mua (thể phủ định V-ない)",
    "暗くならない": "Trời chưa tối (thể phủ định)",
    "暑くならない": "Trời chưa nóng (thể phủ định)",
    "寒くならない": "Trời chưa lạnh (thể phủ định)",
    "明るくならない": "Trời chưa sáng (thể phủ định)",
    "弱くて": "Yếu ớt và... (thể て của tính từ đuôi い)",
    "新しくて": "Mới mẻ và... (thể て của tính từ đuôi い)",
    "古くて": "Cũ kỹ và... (thể て của tính từ đuôi い)",
    "若くて": "Trẻ trung và... (thể て của tính từ đuôi い)",
    "溶けない": "Chưa tan chảy (thể phủ định V-ない - ĐÁP ÁN ĐÚNG)",
    "溶けなくて": "Chưa tan và... (thể て phủ định)",
    "溶けた": "Đã tan chảy (thể quá khứ V-た)",
    "子供だ": "Là trẻ con (thể ngắn khẳng định)",
    "子供の": "Khi là trẻ con (Danh từ + の)",
    "子供な": "Sai ngữ pháp (danh từ không nối bằng な)",
    "下手だ": "Kém, vụng về (thể ngắn khẳng định)",
    "下手の": "Sai ngữ pháp (tính từ đuôi な không nối bằng の)",
    "下手に": "Một cách vụng về / Vụng về (phó từ)",
    "下手な": "Kém, vụng về (dạng bổ nghĩa danh từ của tính từ đuôi な)",
    "温かくて": "Ấm áp và... (Thể て của tính từ đuôi い, dùng nối câu)",
    "温かかった": "Đã từng ấm (Thể quá khứ của tính từ đuôi い)",
    "温かく": "Một cách ấm áp (Phó từ / thể liên từ bổ nghĩa cho động từ)",
    "新しかった": "Đã từng mới (Thể quá khứ của tính từ đuôi い)",
    "新しく": "Một cách mới mẻ (Phó từ của tính từ đuôi い)",
    "起きた": "Đã thức dậy (Thể quá khứ V-た)",
    "起きている": "Đang thức, đang tỉnh táo (Thể diễn tiến V-ている)",
    "起きて": "Thức dậy và... (Thể V-て nối câu)",
    "冬休みだ": "Là kỳ nghỉ đông (Thể khẳng định)",
    "冬休みな": "Sai ngữ pháp (danh từ không đi với な)",
    "冬休む": "Sai ngữ pháp (không có động từ này)",
    "若かった": "Đã từng trẻ (Thể quá khứ của tính từ đuôi い)",
    "若く": "Một cách trẻ trung (Phó từ của tính từ đuôi い)",
    "若くない": "Không còn trẻ (Thể phủ định của tính từ đuôi い)",
    "見た": "Đã xem / Đã nhìn (Thể quá khứ V-た)",
    "見て": "Xem và... / Nhìn và... (Thể V-て nối câu)",
    "見ている": "Đang xem / Đang nhìn (Thể diễn tiến V-ている)",
    "無職だ": "Là người thất nghiệp (Thể khẳng định)",
    "無職する": "Sai ngữ pháp",
    "無職な": "Sai ngữ pháp",
    "留守な": "Sai ngữ pháp",
    "留守だ": "Là vắng nhà",
    "留守する": "Vắng nhà (Động từ)",
    "浴びた": "Đã tắm (Thể quá khứ V-た)",
    "浴びる": "Tắm (Thể nguyên mẫu V-る)",
    "浴びて": "Tắm và... (Thể V-て)",
    "浴びている": "Đang tắm (Thể diễn tiến V-ている)",
    "休んで": "Nghỉ ngơi và... (Thể V-て)",
    "休んでいる": "Đang nghỉ ngơi (Thể diễn tiến V-ている)",
    "休んだ": "Đã nghỉ ngơi (Thể quá khứ V-た)",
    "このお茶": "Món trà này",
    "このパン": "Cái bánh mì này",
    "この水": "Nước này",
    "この薬": "Loại thuốc này",
    "オリーブオイル": "Dầu ô liu",
    "カメラ": "Máy ảnh",
    "カーテン": "Rèm cửa",
    "カーナビ": "Hệ thống định vị ô tô",
    "ゴミ箱": "Thùng rác",
    "サッカー": "Môn bóng đá",
    "サボる": "Trốn học, trốn việc",
    "システム": "Hệ thống",
    "ジュース": "Nước ngọt, nước hoa quả",
    "ノート": "Vở ghi bài",
    "ハンカチ": "Khăn tay",
    "ファストフード": "Thức ăn nhanh",
    "プロ": "Chuyên nghiệp",
    "プール": "Bể bơi",
    "ペン": "Bút mực",
    "レシピ": "Công thức nấu ăn",
    "一冊": "Một cuốn (sách)",
    "一匹": "Một con (động vật nhỏ)",
    "一言": "Một lời nói",
    "一階": "Tầng một",
    "不利": "Bất lợi",
    "不利な": "Bất lợi (Tính từ đuôi な)",
    "不十分な": "Không đầy đủ (Tính từ đuôi な)",
    "不十分に": "Một cách không đầy đủ (Phó từ)",
    "不真面目": "Không nghiêm túc",
    "不真面目な": "Không nghiêm túc (Tính từ đuôi な)",
    "中止にする": "Quyết định hủy bỏ",
    "中止になる": "Bị hủy bỏ",
    "交通ルール": "Luật giao thông",
    "人": "Con người, người",
    "人生": "Cuộc đời",
    "代休": "Nghỉ bù",
    "休憩": "Nghỉ giải lao",
    "休日": "Ngày nghỉ",
    "体質": "Thể chất, cơ địa",
    "停電": "Mất điện",
    "冷蔵庫": "Tủ lạnh",
    "凍る": "Đóng băng",
    "切れる": "Hết hạn, bị đứt",
    "到着時間": "Thời gian đến nơi",
    "制服": "Đồng phục",
    "刺激的な": "Mang tính kích thích (Tính từ đuôi な)",
    "割れる": "Bị vỡ (cốc, kính)",
    "劇場": "Nhà hát",
    "合格する": "Thi đỗ",
    "名前": "Tên",
    "命令": "Mệnh lệnh",
    "品質": "Chất lượng sản phẩm",
    "喉": "Cổ họng",
    "嘘をつく": "Nói dối",
    "堪能": "Thành thạo, giỏi giang",
    "塩": "Muối",
    "外れる": "Bị tuột, bị lệch",
    "外資系企業": "Doanh nghiệp có vốn đầu tư nước ngoài",
    "夜中": "Nửa đêm",
    "天気予報": "Dự báo thời tiết",
    "契約書": "Bản hợp đồng",
    "好きな色": "Màu sắc yêu thích",
    "嬉しさ": "Niềm vui sướng (danh từ hóa)",
    "季節": "Mùa, thời tiết các mùa",
    "安い給料": "Mức lương thấp",
    "実験": "Thí nghiệm",
    "家賃": "Tiền thuê nhà",
    "寄る": "Ghé qua, tạt vào",
    "少なさ": "Sự ít ỏi",
    "居酒屋": "Quán nhậu kiểu Nhật",
    "山頂": "Đỉnh núi",
    "工場": "Nhà máy, công xưởng",
    "広い部屋": "Căn phòng rộng rãi",
    "手頃な": "Giá cả vừa phải, phải chăng",
    "拭く": "Lau chùi",
    "掃除": "Dọn dẹp, vệ sinh",
    "授業": "Tiết học, buổi học",
    "教科書": "Sách giáo khoa",
    "新商品": "Sản phẩm mới",
    "新聞": "Báo chí",
    "新聞紙": "Giấy báo",
    "旅行中": "Trong chuyến du lịch",
    "早起き": "Dậy sớm",
    "映画館": "Rạp chiếu phim",
    "昼休み": "Nghỉ trưa",
    "昼寝": "Ngủ trưa",
    "景色": "Phong cảnh",
    "晴れる": "Trời nắng, tạnh ráo",
    "曖昧な": "Mơ hồ, không rõ ràng",
    "曲": "Bản nhạc, bài hát",
    "本当のこと": "Sự thật",
    "枯れる": "Bị héo, bị khô cạn",
    "染める": "Nhuộm (tóc, vải)",
    "欲しい": "Muốn có",
    "正直": "Thành thật, trung thực",
    "残業": "Làm thêm giờ (OT)",
    "水泳": "Bơi lội",
    "汚れる": "Bị bẩn",
    "洗濯": "Giặt giũ",
    "浅い": "Nông, cạn",
    "海底": "Đáy biển",
    "消しゴム": "Cục tẩy",
    "深呼吸する": "Hít thở sâu",
    "渋滞": "Tắc đường",
    "温泉": "Suối nước nóng",
    "湯船": "Bồn tắm ngâm mình",
    "熱心": "Nhiệt tình, hăng hái",
    "燃える": "Cháy, bốc hỏa",
    "片付け": "Thu dọn, dọn dẹp",
    "環境": "Môi trường",
    "痛む": "Bị đau nhức",
    "登山": "Leo núi",
    "着替え": "Thay quần áo",
    "睡眠": "Giấc ngủ",
    "砂糖": "Đường ăn",
    "社員": "Nhân viên công ty",
    "空き缶": "Vỏ lon rỗng",
    "笑顔": "Nụ cười rạng rỡ",
    "筆箱": "Hộp bút",
    "紙くず": "Mẩu giấy vụn",
    "紙の本": "Sách in giấy",
    "美しい": "Xinh đẹp, tuyệt mỹ",
    "脱ぐ": "Cởi (quần áo, giày)",
    "自然": "Tự nhiên, thiên nhiên",
    "花瓶": "Lọ hoa, bình hoa",
    "苦労": "Vất vả, gian khổ",
    "行動が遅い": "Hành động chậm chạp",
    "褒める": "Khen ngợi",
    "見える": "Nhìn thấy (tự nhiên lọt vào mắt)",
    "視界": "Tầm nhìn",
    "親友": "Bạn thân",
    "観光": "Tham quan, du lịch",
    "言葉遣い": "Cách dùng từ, lời ăn tiếng nói",
    "試合": "Trận đấu",
    "読書": "Đọc sách",
    "謝る": "Xin lỗi",
    "貴重": "Quý giá",
    "足が速い": "Chạy nhanh",
    "足跡": "Dấu chân",
    "車窓": "Cửa sổ xe",
    "辞書": "Từ điển",
    "返答": "Câu trả lời, hồi âm",
    "退屈": "Nhàm chán, buồn tẻ",
    "遅刻する": "Đến muộn, đi trễ",
    "遊園地": "Khu vui chơi giải trí",
    "運動": "Vận động, thể dục",
    "運転": "Lái xe",
    "道路": "Đường sá",
    "高機能な": "Nhiều chức năng hiện đại",
    "黒板": "Bảng đen"
};

    // 2. TỪ ĐIỂN TRỢ TỪ CƠ BẢN & CHỨC NĂNG
    const PARTICLES = {
        "は": "Trợ từ chủ đề câu (nhấn mạnh vị ngữ, biểu thị sự việc là đề tài chính)",
        "が": "Trợ từ chỉ chủ ngữ ngữ pháp / tác nhân thực hiện hành động / đối tượng của tính từ, khả năng",
        "を": "Trợ từ chỉ tân ngữ trực tiếp (đối tượng chịu sự tác động trực tiếp của hành động)",
        "に": "Trợ từ chỉ thời gian, nơi chốn đến/tồn tại, mục đích, đối tượng tiếp nhận",
        "で": "Trợ từ chỉ nơi diễn ra hành động, phương tiện, phương pháp, cách thức, nguyên nhân",
        "へ": "Trợ từ chỉ phương hướng di chuyển (hướng về phía...)",
        "と": "Trợ từ 'và' (liệt kê toàn bộ), 'cùng với' (bạn đồng hành), nội dung trích dẫn",
        "も": "Trợ từ 'cũng', hoặc dùng để nhấn mạnh mức độ ('đến mức / ngay cả')",
        "から": "Trợ từ chỉ điểm xuất phát 'từ' (thời gian, nơi chốn) hoặc 'vì/do' (nguyên nhân)",
        "まで": "Trợ từ 'đến / cho đến' (giới hạn thời gian, địa điểm)",
        "までに": "Trợ từ 'trước khi / muộn nhất là' (hạn chót thực hiện hành động trước thời điểm đó)",
        "より": "Trợ từ so sánh 'hơn so với'",
        "ほど": "Trợ từ 'đến mức', 'như là', 'khoảng chừng'",
        "ばかり": "Trợ từ 'toàn là / chỉ toàn', hoặc 'vừa mới xong'",
        "だけ": "Trợ từ 'chỉ' (giới hạn phạm vi, số lượng cụ thể)",
        "しか": "Trợ từ 'chỉ' (luôn đi với thể phủ định 〜しか...ない)",
        "なら": "Nếu là... (điều kiện giả định dựa trên chủ đề được nhắc tới)",
        "でも": "Dù là / hay là / ngay cả...",
        "こそ": "Chính là / nhất định (nhấn mạnh sự kiên quyết)",
        "さえ": "Ngay cả / thậm chí / chỉ cần...",
        "のに": "Mặc dù... thế mà... (tiếc nuối, bất mãn) / Dùng để làm gì (mục đích)",
        "ので": "Bởi vì, do (nêu nguyên nhân khách quan, lịch sự)",
        "の": "Trợ từ sở hữu (của) hoặc danh từ hóa hành động",
        "な": "Trợ từ liên kết tính từ đuôi -na với danh từ",
        "だ": "Trợ từ khẳng định thể thông thường (thì, là)"
    };

    // 3. QUY TẮC KẾT HỢP NGỮ PHÁP (COMBINATION RULES)
    const GRAMMAR_RULES = {
        "うちに": {
            desc: "Mẫu 〜うちに (Trong lúc / Nhân lúc) diễn tả hành động tranh thủ làm gì trước khi trạng thái thuận lợi thay đổi.",
            combination: "Động từ (V-る / V-ている / V-ない) + うちに<br>Tính từ đuôi い (giữ nguyên い) + うちに<br>Tính từ đuôi な (+ な) + うちに<br>Danh từ (+ の) + うちに",
            hints: "Nếu trước うちに là tính từ đuôi い thì giữ nguyên đuôi い; nếu là danh từ thì phải có の; nếu là tính từ đuôi な thì phải có な; nếu là động từ phủ định thì dùng V-ない (trước khi sự việc tiêu cực xảy ra)."
        },
        "あいだ": {
            desc: "Mẫu 〜あいだ (Trong suốt khoảng thời gian...) diễn tả hai hành động hoặc trạng thái diễn ra liên tục song song trong suốt một khoảng thời gian.",
            combination: "Động từ (V-ている) + あいだ<br>Danh từ (+ の) + あいだ",
            hints: "Vế sau luôn là hành động hoặc trạng thái tiếp diễn liên tục suốt thời gian đó (thường đi với ずっと)."
        },
        "あいだに": {
            desc: "Mẫu 〜あいだに (Trong lúc... thì...) diễn tả một hành động ngắn xảy ra hoặc kết thúc trong một khoảng thời gian dài hơn.",
            combination: "Động từ (V-ている / V-る) + あいだに<br>Danh từ (+ の) + あいだに",
            hints: "Khác với あいだ, vế sau của あいだに là hành động có tính khoảnh khắc, kết thúc nhanh (như 来た, 掃除した, 読んだ)."
        },
        "てからでないと": {
            desc: "Mẫu 〜てからでないと / 〜てからでなければ (Nếu chưa... thì không thể...) diễn tả điều kiện tiên quyết.",
            combination: "Động từ thể て (V-て) + からでないと / からでなければ",
            hints: "Luôn đi với động từ thể て (V-て). Vế sau luôn mang ý nghĩa phủ định hoặc tiêu cực (không thể làm được gì)."
        },
        "ところ": {
            desc: "Mẫu 〜ところ diễn tả thời điểm chuẩn bị, đang hoặc vừa mới hoàn thành hành động.",
            combination: "V-る + ところ: Sắp sửa làm gì<br>V-ている + ところ: Đang làm gì<br>V-た + ところ: Vừa mới làm xong",
            hints: "Chú ý trạng từ trong câu: これから/今から (sắp) -> V-る; 今 (đang) -> V-ている; たった今 (vừa mới) -> V-た."
        },
        "とおり": {
            desc: "Mẫu 〜とおり / どおり (Theo đúng như...) diễn tả việc làm điều gì theo đúng hướng dẫn, suy nghĩ hoặc kế hoạch.",
            combination: "V-る / V-た + とおり<br>Danh từ (+ の) + とおり<br>Danh từ + どおり",
            hints: "Nếu đi trực tiếp sau danh từ không có の thì thường biến âm thành どおり (như 予定どおり, 計画どおり)."
        },
        "によって": {
            desc: "Mẫu 〜によって (Tùy theo / Bằng cách / Do nguyên nhân / Bởi ai sáng tác).",
            combination: "Danh từ (N) + によって / によっては<br>N + による + N",
            hints: "Tùy theo sự khác nhau ở danh từ N mà kết quả, tình huống vế sau cũng thay đổi."
        },
        "たびに": {
            desc: "Mẫu 〜たびに (Cứ mỗi lần... lại...) diễn tả hành vi luôn lặp lại mỗi khi có dịp.",
            combination: "Động từ (V-る) + たびに<br>Danh từ (+ の) + たびに",
            hints: "Chỉ đi với động từ nguyên thể (V-る) hoặc Danh từ + の. Không dùng với các hiện tượng tự nhiên không thể kiểm soát."
        },
        "ば〜ほど": {
            desc: "Mẫu 〜ば〜ほど (Càng... thì càng...) diễn tả mức độ tăng dần của hai vế.",
            combination: "V-ば + V-るほど<br>A-ければ + A-いほど<br>A-なら + A-なほど<br>N + であればあるほど",
            hints: "Động từ hoặc tính từ ở hai vế thường là cùng một từ, vế đầu chia thể điều kiện (ば/なら), vế sau đi với ほど."
        },
        "ついでに": {
            desc: "Mẫu 〜ついでに (Nhân tiện / Tiện thể...) diễn tả việc làm thêm một hành động phụ nhân lúc đang làm hành động chính.",
            combination: "Động từ (V-る / V-た) + ついでに<br>Danh từ (+ の) + ついでに",
            hints: "Vế trước là hành động chính đã định làm từ trước, vế sau là việc phụ tiện thể làm luôn."
        },
        "くらい": {
            desc: "Mẫu 〜くらい / ぐらい / ほど (Đến mức...) diễn tả mức độ cao của sự việc thông qua ví dụ so sánh.",
            combination: "V-る / V-ない + くらい<br>A-i / A-na (+ な) + くらい<br>Danh từ (N) + くらい",
            hints: "Dùng để biểu thị mức độ cao của sự việc hoặc cảm xúc."
        },
        "にかぎる": {
            desc: "Mẫu 〜にかぎる (Tốt nhất là... / Là nhất) diễn tả quan điểm chủ quan của người nói về lựa chọn tốt nhất.",
            combination: "Động từ (V-る / V-ない) + にかぎる<br>Danh từ (N) + にかぎる",
            hints: "Biểu đạt ý 'không có gì bằng...', mang tính đánh giá chủ quan cá nhân."
        },
        "に対して": {
            desc: "Mẫu 〜に対して (Đối với... / Trái ngược với...).",
            combination: "Danh từ (N) + に対して<br>N + に対する + N",
            hints: "Dùng để chỉ đối tượng hướng tới của hành động, hoặc thể hiện sự tương phản, đối lập giữa hai sự vật/hiện tượng."
        },
        "反面": {
            desc: "Mẫu 〜反面 (Mặt khác / Trái lại...) diễn tả hai mặt trái ngược của cùng một sự việc.",
            combination: "V-thể thông thường + 反面<br>A-i + 反面<br>A-na (+ な/である) + 反面<br>N (+ である) + 反面",
            hints: "Cùng một đối tượng nhưng có cả ưu điểm và nhược điểm hoặc hai đặc tính đối lập."
        },
        "一方": {
            desc: "Mẫu 〜一方（で） (Một mặt thì... mặt khác lại... / Ngày càng...).",
            combination: "Thể thông thường + 一方で<br>A-na (+ な/である) + 一方で<br>V-る + 一方だ (ngày càng...)",
            hints: "Dùng để so sánh hai khía cạnh khác nhau hoặc nói về xu hướng diễn tiến một chiều."
        },
        "代わりに": {
            desc: "Mẫu 〜代わりに (Thay vì... / Bù lại...).",
            combination: "Động từ (V-る) + 代わりに<br>Danh từ (+ の) + 代わりに",
            hints: "Dùng khi không làm việc này mà làm việc khác, hoặc làm việc khác để bù đắp, đền đáp."
        },
        "ため": {
            desc: "Mẫu 〜ため（に） (Vì, do... / Để mà...).",
            combination: "Thể thông thường + ために<br>A-na (+ な) + ために<br>Danh từ (+ の) + ために",
            hints: "Biểu thị nguyên nhân, lý do khách quan (văn viết trang trọng) hoặc mục đích hành động."
        },
        "おかげで": {
            desc: "Mẫu 〜おかげで (Nhờ có... / Nhờ trời...) dẫn đến kết quả tốt đẹp.",
            combination: "Thể thông thường + おかげで<br>A-na (+ な) + おかげで<br>Danh từ (+ の) + おかげで",
            hints: "Luôn dùng khi kết quả vế sau là điều may mắn, tích cực, có lợi."
        },
        "せいで": {
            desc: "Mẫu 〜せいで (Tại vì... / Do...) dẫn đến kết quả xấu, mang sắc thái đổ lỗi.",
            combination: "Thể thông thường + せいで<br>A-na (+ な) + せいで<br>Danh từ (+ の) + せいで",
            hints: "Luôn dùng khi kết quả vế sau là điều tiêu cực, thất bại, phiền toái."
        },
        "のだから": {
            desc: "Mẫu 〜のだから / 〜んだから (Vì là... / Bởi vì sự thật hiển nhiên là...).",
            combination: "Thể thông thường + のだから<br>A-na (+ な) + のだから<br>Danh từ (+ な) + のだから",
            hints: "Dùng khi cả người nói và người nghe đều đã biết rõ sự thật, vế sau thường là lời khuyên, đề nghị hoặc kết luận tất yếu."
        },
        "なら": {
            desc: "Mẫu 〜なら / のなら (Nếu... thì...).",
            combination: "Thể thông thường + なら<br>Danh từ (N) + なら (không thêm だ)",
            hints: "Dùng để đưa ra lời khuyên, nhận xét hoặc đề nghị dựa trên thông tin mà đối phương vừa nêu."
        },
        "ては": {
            desc: "Mẫu 〜ては / のでは (Nếu cứ... thì sẽ...) cảnh báo hậu quả tiêu cực.",
            combination: "Động từ thể て (V-て) + は<br>A-i (-くて) + は<br>A-na / Danh từ (+ では)<br>Thể thông thường + のでは",
            hints: "Vế sau luôn là kết quả xấu, sự thất bại, nguy hiểm hoặc bất tiện."
        },
        "さえ": {
            desc: "Mẫu 〜さえ〜ば / たら (Chỉ cần... là đủ...).",
            combination: "Danh từ + さえ + Động từ thể ば/たら<br>Động từ (bỏ ます) + さえすれば",
            hints: "Nhấn mạnh chỉ cần một điều kiện duy nhất này được đáp ứng thì mọi chuyện sẽ ổn thỏa."
        },
        "たとえ": {
            desc: "Mẫu たとえ〜ても (Cho dù... đi chăng nữa...).",
            combination: "たとえ + V-ても<br>たとえ + A-くても<br>たとえ + A-na / Danh từ + でも",
            hints: "Dùng để giả định tình huống khó khăn, cực đoan nhất nhưng quyết tâm hoặc sự thật vẫn không thay đổi."
        }
    };

    // 4. HÀM GIẢI NGHĨA PHƯƠNG ÁN LỰA CHỌN (RESOLVE OPTION MEANING)
    function resolveOptionMeaning(opt, g, ex) {
        if (!opt) return "Lựa chọn không hợp lệ";
        const clean = opt.replace(/<[^>]*>/g, '').trim();

        // Check Particles
        if (PARTICLES[clean]) {
            return PARTICLES[clean];
        }

        // Check Direct Dict
        if (DICT[clean]) {
            return DICT[clean];
        }

        // Check Common Grammars
        for (const [gk, ginfo] of Object.entries(GRAMMAR_RULES)) {
            if (clean === gk) {
                return `Mẫu ngữ pháp 〜${gk}: ${ginfo.desc.split('(')[1] ? ginfo.desc.split('(')[1].split(')')[0] : ginfo.desc}`;
            }
        }

        // Check A-i Inflections
        if (clean.endsWith("くて")) {
            const stem = clean.slice(0, -2) + "い";
            const baseMean = DICT[stem] || stem;
            return `${baseMean} và... / Vì ${baseMean.toLowerCase()} (Thể て của tính từ đuôi い, dùng để liên kết câu)`;
        }
        if (clean.endsWith("かった")) {
            const stem = clean.slice(0, -3) + "い";
            const baseMean = DICT[stem] || stem;
            return `Đã từng ${baseMean.toLowerCase()} (Thể quá khứ của tính từ đuôi い)`;
        }
        if (clean.endsWith("く")) {
            const stem = clean.slice(0, -1) + "い";
            const baseMean = DICT[stem] || stem;
            return `Một cách ${baseMean.toLowerCase()} (Phó từ / Dạng liên từ của tính từ đuôi い, bổ nghĩa cho động từ)`;
        }
        if (clean.endsWith("くない")) {
            const stem = clean.slice(0, -3) + "い";
            const baseMean = DICT[stem] || stem;
            return `Không ${baseMean.toLowerCase()} (Thể phủ định của tính từ đuôi い)`;
        }
        if (clean.endsWith("くなかった")) {
            const stem = clean.slice(0, -5) + "い";
            const baseMean = DICT[stem] || stem;
            return `Đã không ${baseMean.toLowerCase()} (Thể quá khứ phủ định của tính từ đuôi い)`;
        }
        if (clean.endsWith("さ")) {
            const stem = clean.slice(0, -1) + "い";
            const baseMean = DICT[stem] || stem;
            return `Độ ${baseMean.toLowerCase()} / Sự ${baseMean.toLowerCase()} (Danh từ hóa tính từ đuôi い)`;
        }

        // Check A-na / Noun Inflections
        if (clean.endsWith("な")) {
            const stem = clean.slice(0, -1);
            if (DICT[stem]) {
                return `${DICT[stem]} (Dạng bổ nghĩa danh từ của tính từ đuôi な)`;
            }
        }
        if (clean.endsWith("だ")) {
            const stem = clean.slice(0, -1);
            if (DICT[stem]) {
                return `Là ${DICT[stem].toLowerCase()} (Thể ngắn khẳng định)`;
            }
        }
        if (clean.endsWith("に")) {
            const stem = clean.slice(0, -1);
            if (DICT[stem]) {
                return `Một cách ${DICT[stem].toLowerCase()} (Phó từ của tính từ đuôi な, bổ nghĩa cho động từ)`;
            }
        }
        if (clean.endsWith("の")) {
            const stem = clean.slice(0, -1);
            if (DICT[stem]) {
                return `Của / Khi là ${DICT[stem].toLowerCase()} (Danh từ + trợ từ の)`;
            }
        }

        // Check Verb Inflections
        const vRules = [
            ["ている", "Đang {m} (Thể diễn tiến V-ている)"],
            ["ていた", "Đã đang {m} (Thể diễn tiến quá khứ V-ていた)"],
            ["て", "Làm {m} và... / Sau khi {m} (Thể V-て liên kết câu)"],
            ["で", "Làm {m} và... (Thể V-て biến âm)"],
            ["た", "Đã {m} (Thể quá khứ V-た)"],
            ["だ", "Đã {m} (Thể quá khứ V-た biến âm)"],
            ["ない", "Không / Chưa {m} (Thể phủ định V-ない)"],
            ["なかった", "Đã không / Đã chưa {m} (Thể quá khứ phủ định)"],
            ["ば", "Nếu {m} (Thể điều kiện V-ば)"],
            ["たら", "Nếu / Sau khi {m} (Thể điều kiện V-たら)"],
            ["ても", "Cho dù có {m} đi chăng nữa (Thể nhượng bộ)"],
            ["でも", "Cho dù có {m} đi chăng nữa (Thể nhượng bộ)"],
            ["られる", "Được / Bị / Có thể {m} (Thể bị động hoặc thể khả năng)"],
            ["られない", "Không thể / Không được {m} (Thể phủ định khả năng / bị động)"],
            ["させる", "Bắt / Cho phép {m} (Thể sai khiến)"]
        ];

        for (const [suf, rulePattern] of vRules) {
            if (clean.endsWith(suf)) {
                for (const [vk, vm] of Object.entries(DICT)) {
                    if (vk.length >= 2 && clean.startsWith(vk.slice(0, -1))) {
                        return rulePattern.replace('{m}', vm.toLowerCase());
                    }
                }
            }
        }

        // Prefix match
        for (const [wk, wm] of Object.entries(DICT)) {
            if (wk.length >= 2 && clean.startsWith(wk)) {
                return `${wm} (${clean})`;
            }
        }

        return `Từ vựng: ${clean}`;
    }

    // 5. HÀM SINH GIẢI THÍCH TRẮC NGHIỆM CHI TIẾT (GET MCQ EXPLANATION)
    function getMCQExplanation(ex, g) {
        const correctIdx = ex.answer;
        const correctOpt = ex.options[correctIdx] || '';
        const cleanCorrect = correctOpt.replace(/<[^>]*>/g, '').trim();

        // 1. Phân tích 4 lựa chọn
        const optionsAnalysis = ex.options.map((opt, i) => {
            const isCorrect = i === correctIdx;
            const meaning = resolveOptionMeaning(opt, g, ex);
            return {
                index: i + 1,
                rawText: opt,
                cleanText: opt.replace(/<[^>]*>/g, '').trim(),
                isCorrect: isCorrect,
                meaning: meaning
            };
        });

        // 2. Tìm quy tắc ngữ pháp tương ứng
        let ruleInfo = null;
        if (g && g.structure) {
            for (const [k, v] of Object.entries(GRAMMAR_RULES)) {
                if (g.structure.includes(k)) {
                    ruleInfo = v;
                    break;
                }
            }
        }

        // 3. Xây dựng lý do giải thích chi tiết
        let reasonHtml = '';

        // Phần A: Phân tích quy tắc kết hợp
        if (ruleInfo) {
            reasonHtml += `<p><strong>📌 Quy tắc kết hợp ngữ pháp:</strong> ${ruleInfo.desc}</p>`;
            reasonHtml += `<div style="background: rgba(0, 243, 255, 0.08); border-left: 3px solid var(--neon-cyan); padding: 0.6rem 0.9rem; border-radius: 4px; margin: 0.5rem 0; font-size: 0.95rem; line-height: 1.5;">${ruleInfo.combination}</div>`;
            if (ruleInfo.hints) {
                reasonHtml += `<p style="color: #94a3b8; font-size: 0.92rem;"><i class="fa-solid fa-circle-info"></i> ${ruleInfo.hints}</p>`;
            }
        } else {
            reasonHtml += `<p><strong>📌 Ngữ cảnh câu:</strong> Trong cấu trúc <code>${g ? g.structure : ''}</code> (${g ? g.meaning : ''}), câu hỏi kiểm tra sự kết hợp chuẩn xác về trợ từ, thể chia hoặc từ vựng tương thích.</p>`;
        }

        // Phần B: Vì sao chọn đáp án này
        const correctOptAnalysis = optionsAnalysis[correctIdx];
        reasonHtml += `<p style="margin-top: 0.8rem;"><strong>✅ Vì sao chọn "${cleanCorrect}":</strong><br>`;
        reasonHtml += `Lựa chọn <strong>${cleanCorrect}</strong> mang ý nghĩa: <em>${correctOptAnalysis ? correctOptAnalysis.meaning : ''}</em>. Đây là dạng kết hợp ngữ pháp chính xác nhất với chỗ trống trong câu, tạo nên sự mạch lạc và tự nhiên cả về cấu trúc lẫn ý nghĩa.</p>`;

        // Phần C: Phân tích các phương án khác sai vì sao
        const incorrectOpts = optionsAnalysis.filter(o => !o.isCorrect);
        if (incorrectOpts.length > 0) {
            reasonHtml += `<p style="margin-top: 0.6rem;"><strong>❌ Phân tích các phương án còn lại:</strong></p><ul style="padding-left: 1.2rem; margin: 0.3rem 0; color: #94a3b8; font-size: 0.92rem; line-height: 1.5;">`;
            incorrectOpts.forEach(o => {
                reasonHtml += `<li><strong>Lựa chọn ${o.index} (${o.cleanText}):</strong> ${o.meaning} &rarr; <em>Sai ngữ pháp hoặc không phù hợp với ngữ cảnh của câu.</em></li>`;
            });
            reasonHtml += `</ul>`;
        }

        // Phần D: Dịch câu hoàn chỉnh
        let filledQuestion = ex.question.replace(/＿＿＿|（　　）|＿/g, ` <strong style="color: #00f3ff; text-decoration: underline;">${cleanCorrect}</strong> `);
        filledQuestion = filledQuestion.replace(/<ruby>[^<]+<rt>[^<]+<\/rt><\/ruby>/g, (m) => m.replace(/<[^>]*>/g, ''));
        reasonHtml += `<p style="margin-top: 0.8rem; background: rgba(0,0,0,0.3); padding: 0.5rem 0.8rem; border-radius: 6px;"><i class="fa-solid fa-language text-neon-yellow"></i> <strong>Câu hoàn chỉnh:</strong> ${filledQuestion}</p>`;

        return {
            options: optionsAnalysis,
            correctIndex: correctIdx + 1,
            correctOption: cleanCorrect,
            reason: reasonHtml
        };
    }

    // 3.5 BẢNG PRESET TỪ VỰNG CHO 145 CÂU DỊCH (TRANSLATION PRESETS)
    const TRANSLATION_PRESETS = {
        "Nhân lúc chưa mưa, hãy phơi đồ đi.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜うちに</span>",
                "cleanWord": "うちに",
                "reading": "うちに",
                "meaning": "Trong lúc, nhân lúc (tranh thủ) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>雨<rt>あめ</rt></ruby>",
                "cleanWord": "雨",
                "reading": "あめ",
                "meaning": "Cơn mưa (Danh từ)"
            },
            {
                "word": "<ruby>降<rt>ふ</rt></ruby>る",
                "cleanWord": "降る",
                "reading": "ふる",
                "meaning": "Rơi (mưa, tuyết) (Động từ)"
            },
            {
                "word": "<ruby>洗<rt>せん</rt></ruby><ruby>濯<rt>たく</rt></ruby><ruby>物<rt>もの</rt></ruby>",
                "cleanWord": "洗濯物",
                "reading": "せんたくもの",
                "meaning": "Quần áo giặt, đồ phơi (Danh từ)"
            },
            {
                "word": "<ruby>干<rt>ほ</rt></ruby>す",
                "cleanWord": "干す",
                "reading": "ほす",
                "meaning": "Phơi (quần áo) (Động từ)"
            }
        ],
        "Nhân lúc đường còn vắng, hãy xuất phát thôi.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜うちに</span>",
                "cleanWord": "うちに",
                "reading": "うちに",
                "meaning": "Trong lúc, nhân lúc (tranh thủ) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>道<rt>みち</rt></ruby>",
                "cleanWord": "道",
                "reading": "みち",
                "meaning": "Con đường (Danh từ)"
            },
            {
                "word": "<ruby>空<rt>す</rt></ruby>く",
                "cleanWord": "空く",
                "reading": "すく",
                "meaning": "Vắng vẻ, thoáng đãng (Động từ)"
            },
            {
                "word": "<ruby>出<rt>しゅっ</rt></ruby><ruby>発<rt>ぱつ</rt></ruby>する",
                "cleanWord": "出発する",
                "reading": "しゅっぱつする",
                "meaning": "Xuất phát, khởi hành (Động từ)"
            }
        ],
        "Trong lúc còn làm việc ở đây, tôi muốn học hỏi nhiều thứ.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜うちに</span>",
                "cleanWord": "うちに",
                "reading": "うちに",
                "meaning": "Trong lúc, nhân lúc (tranh thủ) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>働<rt>はたら</rt></ruby>く",
                "cleanWord": "働く",
                "reading": "はたらく",
                "meaning": "Làm việc (Động từ)"
            },
            {
                "word": "<ruby>色<rt>いろ</rt></ruby><ruby>々<rt>いろ</rt></ruby>",
                "cleanWord": "色々",
                "reading": "いろいろ",
                "meaning": "Nhiều loại, đa dạng (Tính từ đuôi な / Phó từ)"
            },
            {
                "word": "<ruby>学<rt>まな</rt></ruby>ぶ",
                "cleanWord": "学ぶ",
                "reading": "まなぶ",
                "meaning": "Học hỏi, tiếp thu (Động từ)"
            }
        ],
        "Nhân lúc còn sáng, hãy dọn dẹp vườn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜うちに</span>",
                "cleanWord": "うちに",
                "reading": "うちに",
                "meaning": "Trong lúc, nhân lúc (tranh thủ) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>明<rt>あか</rt></ruby>るい",
                "cleanWord": "明るい",
                "reading": "あかるい",
                "meaning": "Sáng sủa, trời còn sáng (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>庭<rt>にわ</rt></ruby>",
                "cleanWord": "庭",
                "reading": "にわ",
                "meaning": "Khu vườn (Danh từ)"
            },
            {
                "word": "<ruby>掃<rt>そう</rt></ruby><ruby>除<rt>じ</rt></ruby>する",
                "cleanWord": "掃除する",
                "reading": "そうじする",
                "meaning": "Dọn dẹp, vệ sinh (Động từ)"
            }
        ],
        "Nhân lúc cửa hàng chưa đóng cửa, tôi phải đi mua đồ.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜うちに</span>",
                "cleanWord": "うちに",
                "reading": "うちに",
                "meaning": "Trong lúc, nhân lúc (tranh thủ) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>店<rt>みせ</rt></ruby>",
                "cleanWord": "店",
                "reading": "みせ",
                "meaning": "Cửa hàng, tiệm (Danh từ)"
            },
            {
                "word": "<ruby>閉<rt>し</rt></ruby>まる",
                "cleanWord": "閉まる",
                "reading": "しまる",
                "meaning": "Đóng cửa (Tự động từ)"
            },
            {
                "word": "<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>",
                "cleanWord": "買い物",
                "reading": "かいもの",
                "meaning": "Mua sắm (Danh từ)"
            },
            {
                "word": "<ruby>行<rt>い</rt></ruby>く",
                "cleanWord": "行く",
                "reading": "いく",
                "meaning": "Đi (Động từ)"
            }
        ],
        "Trong suốt lúc đợi bạn, tôi đã đọc sách.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜あいだ</span>",
                "cleanWord": "あいだ",
                "reading": "あいだ",
                "meaning": "Trong suốt khoảng thời gian... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>",
                "cleanWord": "友達",
                "reading": "ともだち",
                "meaning": "Bạn bè (Danh từ)"
            },
            {
                "word": "<ruby>待<rt>ま</rt></ruby>つ",
                "cleanWord": "待つ",
                "reading": "まつ",
                "meaning": "Chờ đợi (Động từ)"
            },
            {
                "word": "<ruby>本<rt>ほん</rt></ruby>",
                "cleanWord": "本",
                "reading": "ほん",
                "meaning": "Quyển sách (Danh từ)"
            },
            {
                "word": "<ruby>読<rt>よ</rt></ruby>む",
                "cleanWord": "読む",
                "reading": "よむ",
                "meaning": "Đọc (Động từ)"
            }
        ],
        "Trong suốt kỳ nghỉ dài, tôi không gặp ai cả.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜あいだ</span>",
                "cleanWord": "あいだ",
                "reading": "あいだ",
                "meaning": "Trong suốt khoảng thời gian... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>長<rt>なが</rt></ruby>い",
                "cleanWord": "長い",
                "reading": "ながい",
                "meaning": "Dài (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>休<rt>やす</rt></ruby>み",
                "cleanWord": "休み",
                "reading": "やすみ",
                "meaning": "Kỳ nghỉ, ngày nghỉ (Danh từ)"
            },
            {
                "word": "<ruby>誰<rt>だれ</rt></ruby>",
                "cleanWord": "誰",
                "reading": "だれ",
                "meaning": "Ai, người nào (Đại từ)"
            },
            {
                "word": "<ruby>会<rt>あ</rt></ruby>う",
                "cleanWord": "会う",
                "reading": "あう",
                "meaning": "Gặp gỡ (Động từ)"
            }
        ],
        "Trong suốt thời gian sống ở Nhật, tôi luôn nhớ nhà.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜あいだ</span>",
                "cleanWord": "あいだ",
                "reading": "あいだ",
                "meaning": "Trong suốt khoảng thời gian... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>",
                "cleanWord": "日本",
                "reading": "にほん",
                "meaning": "Nước Nhật (Danh từ)"
            },
            {
                "word": "<ruby>住<rt>す</rt></ruby>む",
                "cleanWord": "住む",
                "reading": "すむ",
                "meaning": "Sinh sống (Động từ)"
            },
            {
                "word": "<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>",
                "cleanWord": "家族",
                "reading": "かぞく",
                "meaning": "Gia đình (Danh từ)"
            },
            {
                "word": "<ruby>恋<rt>こい</rt></ruby>しい",
                "cleanWord": "恋しい",
                "reading": "こいしい",
                "meaning": "Nhớ nhung (Tính từ đuôi い)"
            }
        ],
        "Trong suốt lúc đi bộ, hai người không nói gì cả.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜あいだ</span>",
                "cleanWord": "あいだ",
                "reading": "あいだ",
                "meaning": "Trong suốt khoảng thời gian... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>歩<rt>ある</rt></ruby>く",
                "cleanWord": "歩く",
                "reading": "あるく",
                "meaning": "Đi bộ (Động từ)"
            },
            {
                "word": "<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>",
                "cleanWord": "二人",
                "reading": "ふたり",
                "meaning": "Hai người (Danh từ)"
            },
            {
                "word": "<ruby>話<rt>はな</rt></ruby>す",
                "cleanWord": "話す",
                "reading": "はなす",
                "meaning": "Nói chuyện (Động từ)"
            }
        ],
        "Trong suốt thời gian làm bài thi, không được dùng điện thoại.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜あいだ</span>",
                "cleanWord": "あいだ",
                "reading": "あいだ",
                "meaning": "Trong suốt khoảng thời gian... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "テスト",
                "cleanWord": "テスト",
                "reading": "テスト",
                "meaning": "Bài kiểm tra (Danh từ)"
            },
            {
                "word": "<ruby>携<rt>けい</rt></ruby><ruby>帯<rt>たい</rt></ruby><ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>",
                "cleanWord": "携帯電話",
                "reading": "けいたいでんわ",
                "meaning": "Điện thoại di động (Danh từ)"
            },
            {
                "word": "<ruby>使<rt>つか</rt></ruby>う",
                "cleanWord": "使う",
                "reading": "つかう",
                "meaning": "Sử dụng, dùng (Động từ)"
            }
        ],
        "Trong lúc đi vắng thì có bưu kiện được giao đến.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜あいだに</span>",
                "cleanWord": "あいだに",
                "reading": "あいだに",
                "meaning": "Trong lúc... thì... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>留<rt>る</rt></ruby><ruby>守<rt>す</rt></ruby>",
                "cleanWord": "留守",
                "reading": "るす",
                "meaning": "Vắng nhà (Danh từ)"
            },
            {
                "word": "<ruby>荷<rt>に</rt></ruby><ruby>物<rt>もの</rt></ruby>",
                "cleanWord": "荷物",
                "reading": "にもつ",
                "meaning": "Hành lý, kiện hàng (Danh từ)"
            },
            {
                "word": "<ruby>届<rt>とど</rt></ruby>く",
                "cleanWord": "届く",
                "reading": "とどく",
                "meaning": "Được giao đến (Động từ)"
            }
        ],
        "Trong lúc ở Nhật, tôi muốn thử leo núi Phú Sĩ một lần.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜あいだに</span>",
                "cleanWord": "あいだに",
                "reading": "あいだに",
                "meaning": "Trong lúc... thì... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>",
                "cleanWord": "日本",
                "reading": "にほん",
                "meaning": "Nước Nhật (Danh từ)"
            },
            {
                "word": "<ruby>富<rt>ふ</rt></ruby><ruby>士<rt>じ</rt></ruby><ruby>山<rt>さん</rt></ruby>",
                "cleanWord": "富士山",
                "reading": "ふじさん",
                "meaning": "Núi Phú Sĩ (Danh từ)"
            },
            {
                "word": "<ruby>登<rt>のぼ</rt></ruby>る",
                "cleanWord": "登る",
                "reading": "のぼる",
                "meaning": "Leo, trèo (núi) (Động từ)"
            }
        ],
        "Trong lúc đang đọc sách, tôi đã ngủ quên mất.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜あいだに</span>",
                "cleanWord": "あいだに",
                "reading": "あいだに",
                "meaning": "Trong lúc... thì... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>本<rt>ほん</rt></ruby>",
                "cleanWord": "本",
                "reading": "ほん",
                "meaning": "Quyển sách (Danh từ)"
            },
            {
                "word": "<ruby>読<rt>よ</rt></ruby>む",
                "cleanWord": "読む",
                "reading": "よむ",
                "meaning": "Đọc (Động từ)"
            },
            {
                "word": "<ruby>寝<rt>ね</rt></ruby>る",
                "cleanWord": "寝る",
                "reading": "ねる",
                "meaning": "Đi ngủ (Động từ)"
            }
        ],
        "Trong lúc tôi đang gọi điện thoại thì xe buýt đã rời đi.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜あいだに</span>",
                "cleanWord": "あいだに",
                "reading": "あいだに",
                "meaning": "Trong lúc... thì... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>電<rt>điện</rt></ruby><ruby>話<rt>わ</rt></ruby>",
                "cleanWord": "電話",
                "reading": "でんわ",
                "meaning": "Điện thoại (Danh từ)"
            },
            {
                "word": "かける",
                "cleanWord": "かける",
                "reading": "かける",
                "meaning": "Gọi (điện thoại) (Động từ)"
            },
            {
                "word": "バス",
                "cleanWord": "バス",
                "reading": "バス",
                "meaning": "Xe buýt (Danh từ)"
            },
            {
                "word": "<ruby>出<rt>しゅっ</rt></ruby><ruby>発<rt>ぱつ</rt></ruby>する",
                "cleanWord": "出発する",
                "reading": "しゅっぱつする",
                "meaning": "Xuất phát, khởi hành (Động từ)"
            }
        ],
        "Trong lúc vợ đi mua sắm, tôi dọn dẹp nhà cửa.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜あいだに</span>",
                "cleanWord": "あいだに",
                "reading": "あいだに",
                "meaning": "Trong lúc... thì... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>妻<rt>つま</rt></ruby>",
                "cleanWord": "妻",
                "reading": "つま",
                "meaning": "Vợ (Danh từ)"
            },
            {
                "word": "<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>",
                "cleanWord": "買い物",
                "reading": "かいもの",
                "meaning": "Mua sắm (Danh từ)"
            },
            {
                "word": "<ruby>家<rt>いえ</rt></ruby>",
                "cleanWord": "家",
                "reading": "いえ",
                "meaning": "Ngôi nhà (Danh từ)"
            },
            {
                "word": "<ruby>掃<rt>そう</rt></ruby><ruby>除<rt>じ</rt></ruby>する",
                "cleanWord": "掃除する",
                "reading": "そうじする",
                "meaning": "Dọn dẹp, vệ sinh (Động từ)"
            }
        ],
        "Nếu chưa trả tiền thì không thể nhận hàng được.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜てからでないと / 〜てからでなければ</span>",
                "cleanWord": "てからでないと / 〜てからでなければ",
                "reading": "てからでないと / 〜てからでなければ",
                "meaning": "Nếu chưa ... thì không thể ... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "お<ruby>金<rt>かね</rt></ruby>",
                "cleanWord": "お金",
                "reading": "おかね",
                "meaning": "Tiền bạc (Danh từ)"
            },
            {
                "word": "<ruby>払<rt>はら</rt></ruby>う",
                "cleanWord": "払う",
                "reading": "はらう",
                "meaning": "Trả tiền, thanh toán (Động từ)"
            },
            {
                "word": "<ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>",
                "cleanWord": "商品",
                "reading": "しょうひん",
                "meaning": "Hàng hóa, sản phẩm (Danh từ)"
            },
            {
                "word": "<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>る",
                "cleanWord": "受け取る",
                "reading": "うけとる",
                "meaning": "Tiếp nhận, nhận lấy (Động từ)"
            }
        ],
        "Nếu chưa hỏi ý kiến giáo viên thì không thể về nhà.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜てからでないと / 〜てからでなければ</span>",
                "cleanWord": "てからでないと / 〜てからでなければ",
                "reading": "てからでないと / 〜てからでなければ",
                "meaning": "Nếu chưa ... thì không thể ... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>",
                "cleanWord": "先生",
                "reading": "せんせい",
                "meaning": "Thầy cô giáo (Danh từ)"
            },
            {
                "word": "<ruby>聞<rt>き</rt></ruby>く",
                "cleanWord": "聞く",
                "reading": "きく",
                "meaning": "Hỏi, nghe (Động từ)"
            },
            {
                "word": "<ruby>帰<rt>かえ</rt></ruby>る",
                "cleanWord": "帰る",
                "reading": "かえる",
                "meaning": "Trở về (Động từ)"
            }
        ],
        "Nếu bệnh chưa khỏi thì không thể đi làm.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜てからでないと / 〜てからでなければ</span>",
                "cleanWord": "てからでないと / 〜てからでなければ",
                "reading": "てからでないと / 〜てからでなければ",
                "meaning": "Nếu chưa ... thì không thể ... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>病<rt>びょう</rt></ruby><ruby>気<rt>き</rt></ruby>",
                "cleanWord": "病気",
                "reading": "びょうき",
                "meaning": "Bệnh tật, ốm đau (Danh từ)"
            },
            {
                "word": "<ruby>治<rt>なお</rt></ruby>る",
                "cleanWord": "治る",
                "reading": "なおる",
                "meaning": "Khỏi bệnh (Động từ)"
            },
            {
                "word": "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>",
                "cleanWord": "仕事",
                "reading": "しごと",
                "meaning": "Công việc (Danh từ)"
            },
            {
                "word": "<ruby>行<rt>い</rt></ruby>く",
                "cleanWord": "行く",
                "reading": "いく",
                "meaning": "Đi (Động từ)"
            }
        ],
        "Nếu chưa lấy bằng lái thì tôi không thể lái xe.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜てからでないと / 〜てからでなければ</span>",
                "cleanWord": "てからでないと / 〜てからでなければ",
                "reading": "てからでないと / 〜てからでなければ",
                "meaning": "Nếu chưa ... thì không thể ... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>免<rt>めん</rt></ruby><ruby>許<rt>きょ</rt></ruby>",
                "cleanWord": "免許",
                "reading": "めんきょ",
                "meaning": "Bằng lái, giấy phép (Danh từ)"
            },
            {
                "word": "<ruby>取<rt>と</rt></ruby>る",
                "cleanWord": "取る",
                "reading": "とる",
                "meaning": "Lấy, nhận được (bằng lái) (Động từ)"
            },
            {
                "word": "<ruby>運<rt>うん</rt></ruby><ruby>転<rt>てん</rt></ruby>する",
                "cleanWord": "運転する",
                "reading": "うんてんする",
                "meaning": "Lái xe (Động từ)"
            }
        ],
        "Nếu sếp chưa về thì tôi không thể về được.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜てからでないと / 〜てからでなければ</span>",
                "cleanWord": "てからでないと / 〜てからでなければ",
                "reading": "てからでないと / 〜てからでなければ",
                "meaning": "Nếu chưa ... thì không thể ... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>上<rt>じょう</rt></ruby><ruby>司<rt>し</rt></ruby>",
                "cleanWord": "上司",
                "reading": "じょうし",
                "meaning": "Cấp trên, sếp (Danh từ)"
            },
            {
                "word": "<ruby>帰<rt>かえ</rt></ruby>る",
                "cleanWord": "帰る",
                "reading": "かえる",
                "meaning": "Trở về (Động từ)"
            }
        ],
        "Tôi vừa mới ăn cơm xong.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ところ</span>",
                "cleanWord": "ところ",
                "reading": "ところ",
                "meaning": "Đúng vào thời điểm, sắp sửa, đang, vừa mới... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>今<rt>いま</rt></ruby>",
                "cleanWord": "今",
                "reading": "いま",
                "meaning": "Bây giờ (Danh từ / Phó từ)"
            },
            {
                "word": "ご<ruby>飯<rt>はん</rt></ruby>",
                "cleanWord": "ご飯",
                "reading": "ごはん",
                "meaning": "Cơm, bữa ăn (Danh từ)"
            },
            {
                "word": "<ruby>食<rt>た</rt></ruby>べる",
                "cleanWord": "食べる",
                "reading": "たべる",
                "meaning": "Ăn (Động từ)"
            }
        ],
        "Tôi chuẩn bị ra khỏi nhà bây giờ.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ところ</span>",
                "cleanWord": "ところ",
                "reading": "ところ",
                "meaning": "Đúng vào thời điểm, sắp sửa, đang, vừa mới... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>今<rt>いま</rt></ruby>",
                "cleanWord": "今",
                "reading": "いま",
                "meaning": "Bây giờ (Danh từ / Phó từ)"
            },
            {
                "word": "<ruby>家<rt>いえ</rt></ruby>",
                "cleanWord": "家",
                "reading": "いえ",
                "meaning": "Ngôi nhà (Danh từ)"
            },
            {
                "word": "<ruby>出<rt>で</rt></ruby>る",
                "cleanWord": "出る",
                "reading": "でる",
                "meaning": "Đi ra, rời khỏi (Động từ)"
            }
        ],
        "Tôi đang trong lúc họp thì có điện thoại.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ところ</span>",
                "cleanWord": "ところ",
                "reading": "ところ",
                "meaning": "Đúng vào thời điểm, sắp sửa, đang, vừa mới... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>",
                "cleanWord": "会議",
                "reading": "かいぎ",
                "meaning": "Cuộc họp (Danh từ)"
            },
            {
                "word": "<ruby>電<rt>điện</rt></ruby><ruby>話<rt>わ</rt></ruby>",
                "cleanWord": "電話",
                "reading": "でんわ",
                "meaning": "Điện thoại (Danh từ)"
            },
            {
                "word": "かかる",
                "cleanWord": "かかる",
                "reading": "かかる",
                "meaning": "Đổ chuông, gọi đến (Động từ)"
            }
        ],
        "Tôi vừa mới đến ga thì tàu xuất phát.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ところ</span>",
                "cleanWord": "ところ",
                "reading": "ところ",
                "meaning": "Đúng vào thời điểm, sắp sửa, đang, vừa mới... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>駅<rt>えき</rt></ruby>",
                "cleanWord": "駅",
                "reading": "えき",
                "meaning": "Nhà ga (Danh từ)"
            },
            {
                "word": "<ruby>着<rt>つ</rt></ruby>く",
                "cleanWord": "着く",
                "reading": "つく",
                "meaning": "Đến nơi, tới ga (Động từ)"
            },
            {
                "word": "<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>",
                "cleanWord": "電車",
                "reading": "でんしゃ",
                "meaning": "Tàu điện (Danh từ)"
            },
            {
                "word": "<ruby>出<rt>しゅっ</rt></ruby><ruby>発<rt>ぱつ</rt></ruby>する",
                "cleanWord": "出発する",
                "reading": "しゅっぱつする",
                "meaning": "Xuất phát, khởi hành (Động từ)"
            }
        ],
        "Đúng lúc tôi đang ngủ trưa thì bạn đến.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ところ</span>",
                "cleanWord": "ところ",
                "reading": "ところ",
                "meaning": "Đúng vào thời điểm, sắp sửa, đang, vừa mới... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>昼寝<rt>ひるね</rt></ruby>",
                "cleanWord": "昼寝",
                "reading": "ひるね",
                "meaning": "Ngủ trưa (Danh từ)"
            },
            {
                "word": "<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>",
                "cleanWord": "友達",
                "reading": "ともだち",
                "meaning": "Bạn bè (Danh từ)"
            },
            {
                "word": "<ruby>来<rt>く</rt></ruby>る",
                "cleanWord": "来る",
                "reading": "くる",
                "meaning": "Đến (Động từ)"
            }
        ],
        "Hãy làm đúng theo như những gì tôi nói.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜とおり / どおり</span>",
                "cleanWord": "とおり / どおり",
                "reading": "とおり / どおり",
                "meaning": "Làm ... đúng như / Theo đúng như ... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>私<rt>わたし</rt></ruby>",
                "cleanWord": "私",
                "reading": "わたし",
                "meaning": "Tôi (Đại từ)"
            },
            {
                "word": "<ruby>言<rt>い</rt></ruby>う",
                "cleanWord": "言う",
                "reading": "いう",
                "meaning": "Nói (Động từ)"
            },
            {
                "word": "やる",
                "cleanWord": "やる",
                "reading": "やる",
                "meaning": "Làm (Động từ)"
            }
        ],
        "Đúng như dự báo, trời đã mưa.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜とおり / どおり</span>",
                "cleanWord": "とおり / どおり",
                "reading": "とおり / どおり",
                "meaning": "Làm ... đúng như / Theo đúng như ... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>予<rt>よ</rt></ruby><ruby>報<rt>ほう</rt></ruby>",
                "cleanWord": "予報",
                "reading": "よほう",
                "meaning": "Dự báo (Danh từ)"
            },
            {
                "word": "<ruby>雨<rt>あめ</rt></ruby>",
                "cleanWord": "雨",
                "reading": "あめ",
                "meaning": "Cơn mưa (Danh từ)"
            },
            {
                "word": "<ruby>降<rt>ふ</rt></ruby>る",
                "cleanWord": "降る",
                "reading": "ふる",
                "meaning": "Rơi (mưa, tuyết) (Động từ)"
            }
        ],
        "Tôi đã gấp giấy đúng theo như bản hướng dẫn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜とおり / どおり</span>",
                "cleanWord": "とおり / どおり",
                "reading": "とおり / どおり",
                "meaning": "Làm ... đúng như / Theo đúng như ... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby><ruby>書<rt>しょ</rt></ruby>",
                "cleanWord": "説明書",
                "reading": "せつめいしょ",
                "meaning": "Sách hướng dẫn (Danh từ)"
            },
            {
                "word": "<ruby>紙<rt>かみ</rt></ruby>",
                "cleanWord": "紙",
                "reading": "かみ",
                "meaning": "Giấy (Danh từ)"
            },
            {
                "word": "<ruby>折<rt>お</rt></ruby>る",
                "cleanWord": "折る",
                "reading": "おる",
                "meaning": "Gấp, xếp (giấy) (Động từ)"
            }
        ],
        "Mọi việc đã diễn ra đúng theo kế hoạch.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜とおり / どおり</span>",
                "cleanWord": "とおり / どおり",
                "reading": "とおり / どおり",
                "meaning": "Làm ... đúng như / Theo đúng như ... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>予<rt>よ</rt></ruby><ruby>定<rt>てい</rt></ruby>",
                "cleanWord": "予定",
                "reading": "よてい",
                "meaning": "Dự định, kế hoạch (Danh từ)"
            },
            {
                "word": "<ruby>進<rt>すす</rt></ruby>む",
                "cleanWord": "進む",
                "reading": "すすむ",
                "meaning": "Tiến triển, tiến lên (Động từ)"
            }
        ],
        "Hãy hát đúng theo bài hát này.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜とおり / どおり</span>",
                "cleanWord": "とおり / どおり",
                "reading": "とおり / どおり",
                "meaning": "Làm ... đúng như / Theo đúng như ... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>歌<rt>うた</rt></ruby>",
                "cleanWord": "歌",
                "reading": "うた",
                "meaning": "Bài hát (Danh từ)"
            },
            {
                "word": "<ruby>歌<rt>うた</rt></ruby>う",
                "cleanWord": "歌う",
                "reading": "うたう",
                "meaning": "Hát (Động từ)"
            }
        ],
        "Tùy theo mùa mà khung cảnh thay đổi rất nhiều.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜によって / によっては</span>",
                "cleanWord": "によって / によっては",
                "reading": "によって / によっては",
                "meaning": "Tùy theo / Tùy vào... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>季<rt>き</rt></ruby><ruby>節<rt>せつ</rt></ruby>",
                "cleanWord": "季節",
                "reading": "きせつ",
                "meaning": "Mùa trong năm (Danh từ)"
            },
            {
                "word": "<ruby>風<rt>ふう</rt></ruby><ruby>景<rt>けい</rt></ruby>",
                "cleanWord": "風景",
                "reading": "ふうけい",
                "meaning": "Phong cảnh (Danh từ)"
            },
            {
                "word": "<ruby>変<rt>か</rt></ruby>わる",
                "cleanWord": "変わる",
                "reading": "かわる",
                "meaning": "Thay đổi (Tự động từ)"
            }
        ],
        "Tùy từng người mà cũng có người không ăn thịt.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜によって / によっては</span>",
                "cleanWord": "によって / によっては",
                "reading": "によって / によっては",
                "meaning": "Tùy theo / Tùy vào... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>人<rt>ひと</rt></ruby>",
                "cleanWord": "人",
                "reading": "ひと",
                "meaning": "Người (Danh từ)"
            },
            {
                "word": "<ruby>肉<rt>にく</rt></ruby>",
                "cleanWord": "肉",
                "reading": "にく",
                "meaning": "Thịt (Danh từ)"
            },
            {
                "word": "<ruby>食<rt>た</rt></ruby>べる",
                "cleanWord": "食べる",
                "reading": "たべる",
                "meaning": "Ăn (Động từ)"
            }
        ],
        "Truyện này được viết bởi một nhà văn nổi tiếng.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜によって / によっては</span>",
                "cleanWord": "によって / によっては",
                "reading": "によって / によっては",
                "meaning": "Tùy theo / Tùy vào... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>物<rt>もの</rt></ruby><ruby>語<rt>がたり</rt></ruby>",
                "cleanWord": "物語",
                "reading": "ものがたり",
                "meaning": "Câu chuyện, truyện (Danh từ)"
            },
            {
                "word": "<ruby>有<rt>ゆう</rt></ruby><ruby>名<rt>めい</rt></ruby>",
                "cleanWord": "有名",
                "reading": "ゆうめい",
                "meaning": "Nổi tiếng (Tính từ đuôi な)"
            },
            {
                "word": "<ruby>作<rt>さっ</rt></ruby><ruby>家<rt>か</rt></ruby>",
                "cleanWord": "作家",
                "reading": "さっか",
                "meaning": "Tác giả, nhà văn (Danh từ)"
            },
            {
                "word": "<ruby>書<rt>か</rt></ruby>く",
                "cleanWord": "書く",
                "reading": "かく",
                "meaning": "Viết (Động từ)"
            }
        ],
        "Do tai nạn mà đường đã bị đóng cửa.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜によって / によっては</span>",
                "cleanWord": "によって / によっては",
                "reading": "によって / によっては",
                "meaning": "Tùy theo / Tùy vào... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>事<rt>じ</rt></ruby><ruby>故<rt>こ</rt></ruby>",
                "cleanWord": "事故",
                "reading": "じこ",
                "meaning": "Tai nạn (Danh từ)"
            },
            {
                "word": "<ruby>道<rt>どう</rt></ruby><ruby>路<rt>ろ</rt></ruby>",
                "cleanWord": "道路",
                "reading": "どうろ",
                "meaning": "Đường sá, con đường (Danh từ)"
            },
            {
                "word": "<ruby>閉<rt>へい</rt></ruby><ruby>鎖<rt>さ</rt></ruby>する",
                "cleanWord": "閉鎖する",
                "reading": "へいさする",
                "meaning": "Phong tỏa, đóng cửa (Động từ)"
            }
        ],
        "Tùy vào kết quả thảo luận mà kế hoạch sẽ thay đổi.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜によって / によっては</span>",
                "cleanWord": "によって / によっては",
                "reading": "によって / によっては",
                "meaning": "Tùy theo / Tùy vào... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>い",
                "cleanWord": "話し合い",
                "reading": "はなしあい",
                "meaning": "Thảo luận, bàn bạc (Danh từ)"
            },
            {
                "word": "<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby>",
                "cleanWord": "結果",
                "reading": "けっか",
                "meaning": "Kết quả (Danh từ)"
            },
            {
                "word": "<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>",
                "cleanWord": "計画",
                "reading": "けいかく",
                "meaning": "Kế hoạch (Danh từ)"
            },
            {
                "word": "<ruby>変<rt>か</rt></ruby>わる",
                "cleanWord": "変わる",
                "reading": "かわる",
                "meaning": "Thay đổi (Tự động từ)"
            }
        ],
        "Cứ mỗi lần xem bộ phim này, tôi lại khóc.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜たびに</span>",
                "cleanWord": "たびに",
                "reading": "たびに",
                "meaning": "Cứ mỗi lần / Mỗi khi... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>",
                "cleanWord": "映画",
                "reading": "えいが",
                "meaning": "Bộ phim (Danh từ)"
            },
            {
                "word": "<ruby>見<rt>み</rt></ruby>る",
                "cleanWord": "見る",
                "reading": "みる",
                "meaning": "Xem, nhìn (Động từ)"
            },
            {
                "word": "<ruby>泣<rt>な</rt></ruby>く",
                "cleanWord": "泣く",
                "reading": "なく",
                "meaning": "Khóc (Động từ)"
            }
        ],
        "Cứ mỗi lần có kỳ nghỉ, tôi lại về quê.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜たびに</span>",
                "cleanWord": "たびに",
                "reading": "たびに",
                "meaning": "Cứ mỗi lần / Mỗi khi... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>休<rt>きゅう</rt></ruby><ruby>暇<rt>か</rt></ruby>",
                "cleanWord": "休暇",
                "reading": "きゅうか",
                "meaning": "Kỳ nghỉ (Danh từ)"
            },
            {
                "word": "<ruby>故<rt>こ</rt></ruby><ruby>郷<rt>きょう</rt></ruby>",
                "cleanWord": "故郷",
                "reading": "こきょう",
                "meaning": "Quê hương (Danh từ)"
            },
            {
                "word": "<ruby>帰<rt>かえ</rt></ruby>る",
                "cleanWord": "帰る",
                "reading": "かえる",
                "meaning": "Trở về (Động từ)"
            }
        ],
        "Cứ mỗi lần uống trà này, tôi lại nhớ đến bà ngoại.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜たびに</span>",
                "cleanWord": "たびに",
                "reading": "たびに",
                "meaning": "Cứ mỗi lần / Mỗi khi... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "お<ruby>茶<rt>ちゃ</rt></ruby>",
                "cleanWord": "お茶",
                "reading": "おちゃ",
                "meaning": "Trà (Danh từ)"
            },
            {
                "word": "<ruby>飲<rt>の</rt></ruby>む",
                "cleanWord": "飲む",
                "reading": "のむ",
                "meaning": "Uống (Động từ)"
            },
            {
                "word": "<ruby>祖<rt>そ</rt></ruby><ruby>母<rt>ぼ</rt></ruby>",
                "cleanWord": "祖母",
                "reading": "そぼ",
                "meaning": "Bà nội / Bà ngoại (Danh từ)"
            },
            {
                "word": "<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す",
                "cleanWord": "思い出す",
                "reading": "おもいだす",
                "meaning": "Nhớ về, hồi tưởng (Động từ)"
            }
        ],
        "Cứ mỗi lần tập luyện, anh ấy trở nên mạnh hơn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜たびに</span>",
                "cleanWord": "たびに",
                "reading": "たびに",
                "meaning": "Cứ mỗi lần / Mỗi khi... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>する",
                "cleanWord": "練習する",
                "reading": "れんしゅうする",
                "meaning": "Luyện tập (Động từ)"
            },
            {
                "word": "<ruby>彼<rt>かれ</rt></ruby>",
                "cleanWord": "彼",
                "reading": "かれ",
                "meaning": "Anh ấy (Đại từ)"
            },
            {
                "word": "もっと",
                "cleanWord": "もっと",
                "reading": "もっと",
                "meaning": "Hơn nữa (Phó từ)"
            },
            {
                "word": "<ruby>強<rt>つよ</rt></ruby>い",
                "cleanWord": "強い",
                "reading": "つよい",
                "meaning": "Mạnh mẽ (Tính từ đuôi い)"
            }
        ],
        "Cứ mỗi lần gặp nhau, chúng tôi cùng ăn tối.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜たびに</span>",
                "cleanWord": "たびに",
                "reading": "たびに",
                "meaning": "Cứ mỗi lần / Mỗi khi... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>会<rt>あ</rt></ruby>う",
                "cleanWord": "会う",
                "reading": "あう",
                "meaning": "Gặp gỡ (Động từ)"
            },
            {
                "word": "<ruby>夕<rt>ゆう</rt></ruby><ruby>食<rt>しょく</rt></ruby>",
                "cleanWord": "夕食",
                "reading": "ゆうしょく",
                "meaning": "Bữa tối (Danh từ)"
            },
            {
                "word": "<ruby>食<rt>た</rt></ruby>べる",
                "cleanWord": "食べる",
                "reading": "たべる",
                "meaning": "Ăn (Động từ)"
            }
        ],
        "Càng luyện tập nhiều thì càng giỏi.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ば〜ほど</span>",
                "cleanWord": "ば〜ほど",
                "reading": "ば〜ほど",
                "meaning": "Càng... càng... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>する",
                "cleanWord": "練習する",
                "reading": "れんしゅうする",
                "meaning": "Luyện tập (Động từ)"
            },
            {
                "word": "<ruby>上<rt>じょう</rt></ruby><ruby>手<rt>ず</rt></ruby>",
                "cleanWord": "上手",
                "reading": "じょうず",
                "meaning": "Giỏi, thành thạo (Tính từ đuôi な)"
            }
        ],
        "Thức ăn càng tươi thì càng ngon.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ば〜ほど</span>",
                "cleanWord": "ば〜ほど",
                "reading": "ば〜ほど",
                "meaning": "Càng... càng... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>",
                "cleanWord": "食べ物",
                "reading": "たべもの",
                "meaning": "Thức ăn (Danh từ)"
            },
            {
                "word": "<ruby>新<rt>しん</rt></ruby><ruby>鮮<rt>せん</rt></ruby>",
                "cleanWord": "新鮮",
                "reading": "しんせん",
                "meaning": "Tươi sống, tươi mới (Tính từ đuôi な)"
            },
            {
                "word": "<ruby>美<rt>おい</rt></ruby>しい",
                "cleanWord": "美味しい",
                "reading": "おいしい",
                "meaning": "Ngon miệng (Tính từ đuôi い)"
            }
        ],
        "Giá càng rẻ thì càng mua nhiều.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ば〜ほど</span>",
                "cleanWord": "ば〜ほど",
                "reading": "ば〜ほど",
                "meaning": "Càng... càng... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>値<rt>ね</rt></ruby><ruby>段<rt>だん</rt></ruby>",
                "cleanWord": "値段",
                "reading": "ねだん",
                "meaning": "Giá cả (Danh từ)"
            },
            {
                "word": "<ruby>安<rt>やす</rt></ruby>い",
                "cleanWord": "安い",
                "reading": "やすい",
                "meaning": "Rẻ (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>買<rt>か</rt></ruby>う",
                "cleanWord": "買う",
                "reading": "かう",
                "meaning": "Mua (Động từ)"
            }
        ],
        "Phòng càng rộng thì càng thoải mái.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ば〜ほど</span>",
                "cleanWord": "ば〜ほど",
                "reading": "ば〜ほど",
                "meaning": "Càng... càng... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>",
                "cleanWord": "部屋",
                "reading": "へや",
                "meaning": "Căn phòng (Danh từ)"
            },
            {
                "word": "<ruby>広<rt>ひろ</rt></ruby>い",
                "cleanWord": "広い",
                "reading": "ひろい",
                "meaning": "Rộng rãi (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>快<rt>かい</rt></ruby><ruby>適<rt>てき</rt></ruby>",
                "cleanWord": "快適",
                "reading": "かいてき",
                "meaning": "Thoải mái, tiện nghi (Tính từ đuôi な)"
            }
        ],
        "Càng hiểu biết thì càng cẩn thận hơn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ば〜ほど</span>",
                "cleanWord": "ば〜ほど",
                "reading": "ば〜ほど",
                "meaning": "Càng... càng... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>知<rt>ち</rt></ruby><ruby>識<rt>しき</rt></ruby>",
                "cleanWord": "知識",
                "reading": "ちしき",
                "meaning": "Kiến thức, tri thức (Danh từ)"
            },
            {
                "word": "ある",
                "cleanWord": "ある",
                "reading": "ある",
                "meaning": "Có (Động từ)"
            },
            {
                "word": "<ruby>慎<rt>しん</rt></ruby><ruby>重<rt>ちょう</rt></ruby>",
                "cleanWord": "慎重",
                "reading": "しんちょう",
                "meaning": "Thận trọng (Tính từ đuôi な)"
            }
        ],
        "Nhân tiện đi siêu thị, tôi đã mua thuốc.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ついでに</span>",
                "cleanWord": "ついでに",
                "reading": "ついでに",
                "meaning": "Nhân tiện / Tiện thể... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "スーパー",
                "cleanWord": "スーパー",
                "reading": "スーパー",
                "meaning": "Siêu thị (Danh từ)"
            },
            {
                "word": "<ruby>行<rt>い</rt></ruby>く",
                "cleanWord": "行く",
                "reading": "いく",
                "meaning": "Đi (Động từ)"
            },
            {
                "word": "<ruby>薬<rt>くすり</rt></ruby>",
                "cleanWord": "薬",
                "reading": "くすり",
                "meaning": "Thuốc (Danh từ)"
            },
            {
                "word": "<ruby>買<rt>か</rt></ruby>う",
                "cleanWord": "買う",
                "reading": "かう",
                "meaning": "Mua (Động từ)"
            }
        ],
        "Nhân tiện đi công tác Tokyo, tôi đã ghé thăm một người bạn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ついでに</span>",
                "cleanWord": "ついでに",
                "reading": "ついでに",
                "meaning": "Nhân tiện / Tiện thể... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>出<rt>しゅっ</rt></ruby><ruby>張<rt>ちょう</rt></ruby>",
                "cleanWord": "出張",
                "reading": "しゅっちょう",
                "meaning": "Đi công tác (Danh từ)"
            },
            {
                "word": "<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>",
                "cleanWord": "友達",
                "reading": "ともだち",
                "meaning": "Bạn bè (Danh từ)"
            },
            {
                "word": "<ruby>訪<rt>たず</rt></ruby>ねる",
                "cleanWord": "訪ねる",
                "reading": "たずねる",
                "meaning": "Ghé thăm (Động từ)"
            }
        ],
        "Nhân tiện đi thư viện, bạn có thể trả quyển sách này không?": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ついでに</span>",
                "cleanWord": "ついでに",
                "reading": "ついでに",
                "meaning": "Nhân tiện / Tiện thể... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>図<rt>と</rt></ruby><ruby>書<rt>しょ</rt></ruby><ruby>館<rt>かん</rt></ruby>",
                "cleanWord": "図書館",
                "reading": "としょかん",
                "meaning": "Thư viện (Danh từ)"
            },
            {
                "word": "<ruby>本<rt>ほん</rt></ruby>",
                "cleanWord": "本",
                "reading": "ほん",
                "meaning": "Quyển sách (Danh từ)"
            },
            {
                "word": "<ruby>返<rt>かえ</rt></ruby>す",
                "cleanWord": "返す",
                "reading": "かえす",
                "meaning": "Trả lại (Động từ)"
            },
            {
                "word": "<ruby>行<rt>い</rt></ruby>く",
                "cleanWord": "行く",
                "reading": "いく",
                "meaning": "Đi (Động từ)"
            }
        ],
        "Nhân tiện dắt chó đi dạo, tôi ghé vào cửa hàng tiện lợi.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ついでに</span>",
                "cleanWord": "ついでに",
                "reading": "ついでに",
                "meaning": "Nhân tiện / Tiện thể... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>犬<rt>いぬ</rt></ruby>",
                "cleanWord": "犬",
                "reading": "いぬ",
                "meaning": "Con chó (Danh từ)"
            },
            {
                "word": "<ruby>散<rt>さん</rt></ruby><ruby>歩<rt>ぽ</rt></ruby>",
                "cleanWord": "散歩",
                "reading": "さんぽ",
                "meaning": "Đi dạo (Danh từ)"
            },
            {
                "word": "コンビニ",
                "cleanWord": "コンビニ",
                "reading": "コンビニ",
                "meaning": "Cửa hàng tiện lợi (Danh từ)"
            },
            {
                "word": "<ruby>寄<rt>よ</rt></ruby>る",
                "cleanWord": "寄る",
                "reading": "よる",
                "meaning": "Ghé qua, tạt vào (Động từ)"
            }
        ],
        "Nhân tiện ra ngoài mua cà phê, mua giúp tôi cái bánh nhé.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ついでに</span>",
                "cleanWord": "ついでに",
                "reading": "ついでに",
                "meaning": "Nhân tiện / Tiện thể... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "コーヒー",
                "cleanWord": "コーヒー",
                "reading": "コーヒー",
                "meaning": "Cà phê (Danh từ)"
            },
            {
                "word": "<ruby>買<rt>か</rt></ruby>う",
                "cleanWord": "買う",
                "reading": "かう",
                "meaning": "Mua (Động từ)"
            },
            {
                "word": "<ruby>私<rt>わたし</rt></ruby>",
                "cleanWord": "私",
                "reading": "わたし",
                "meaning": "Tôi (Đại từ)"
            },
            {
                "word": "パン",
                "cleanWord": "パン",
                "reading": "パン",
                "meaning": "Bánh mì (Danh từ)"
            }
        ],
        "Buồn cười đến mức chảy cả nước mắt.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらい / ほど</span>",
                "cleanWord": "くらい / ぐらい / ほど",
                "reading": "くらい / ぐらい / ほど",
                "meaning": "Đến mức... / Đến mức độ như... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>涙<rt>なみだ</rt></ruby>",
                "cleanWord": "涙",
                "reading": "なみだ",
                "meaning": "Nước mắt (Danh từ)"
            },
            {
                "word": "<ruby>出<rt>で</rt></ruby>る",
                "cleanWord": "出る",
                "reading": "でる",
                "meaning": "Đi ra, rời khỏi (Động từ)"
            },
            {
                "word": "<ruby>大<rt>おお</rt></ruby><ruby>笑<rt>わら</rt></ruby>い",
                "cleanWord": "大笑い",
                "reading": "おおわらい",
                "meaning": "Cười lớn, cười to (Danh từ)"
            }
        ],
        "Đã đi bộ nhiều đến mức chân mỏi rã rời.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらい / ほど</span>",
                "cleanWord": "くらい / ぐらい / ほど",
                "reading": "くらい / ぐらい / ほど",
                "meaning": "Đến mức... / Đến mức độ như... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>足<rt>あし</rt></ruby>",
                "cleanWord": "足",
                "reading": "あし",
                "meaning": "Chân (Danh từ)"
            },
            {
                "word": "<ruby>棒<rt>ぼう</rt></ruby>",
                "cleanWord": "棒",
                "reading": "ぼう",
                "meaning": "Cây gậy, que (Danh từ)"
            },
            {
                "word": "<ruby>歩<rt>ある</rt></ruby>く",
                "cleanWord": "歩く",
                "reading": "あるく",
                "meaning": "Đi bộ (Động từ)"
            }
        ],
        "Món ớt này cay đến mức lưỡi tê dại.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらい / ほど</span>",
                "cleanWord": "くらい / ぐらい / ほど",
                "reading": "くらい / ぐらい / ほど",
                "meaning": "Đến mức... / Đến mức độ như... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "トウガラシ",
                "cleanWord": "トウガラシ",
                "reading": "トウガラシ",
                "meaning": "Quả ớt (Danh từ)"
            },
            {
                "word": "<ruby>舌<rt>した</rt></ruby>",
                "cleanWord": "舌",
                "reading": "した",
                "meaning": "Cái lưỡi (Danh từ)"
            },
            {
                "word": "しびれる",
                "cleanWord": "しびれる",
                "reading": "しびれる",
                "meaning": "Tê dại (Động từ)"
            },
            {
                "word": "<ruby>辛<rt>から</rt></ruby>い",
                "cleanWord": "辛い",
                "reading": "からい",
                "meaning": "Cay (vị cay) (Tính từ đuôi い)"
            }
        ],
        "Đau đầu đến mức không thể tập trung làm việc.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらい / ほど</span>",
                "cleanWord": "くらい / ぐらい / ほど",
                "reading": "くらい / ぐらい / ほど",
                "meaning": "Đến mức... / Đến mức độ như... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>",
                "cleanWord": "仕事",
                "reading": "しごと",
                "meaning": "Công việc (Danh từ)"
            },
            {
                "word": "<ruby>集<rt>しゅう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>する",
                "cleanWord": "集中する",
                "reading": "しゅうちゅうする",
                "meaning": "Tập trung (Động từ)"
            },
            {
                "word": "<ruby>頭<rt>あたま</rt></ruby>",
                "cleanWord": "頭",
                "reading": "あたま",
                "meaning": "Đầu (Danh từ)"
            },
            {
                "word": "<ruby>痛<rt>いた</rt></ruby>い",
                "cleanWord": "痛い",
                "reading": "いたい",
                "meaning": "Đau đớn (Tính từ đuôi い)"
            }
        ],
        "Bận rộn đến mức muốn nhờ cả mèo giúp một tay.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらい / ほど</span>",
                "cleanWord": "くらい / ぐらい / ほど",
                "reading": "くらい / ぐらい / ほど",
                "meaning": "Đến mức... / Đến mức độ như... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>猫<rt>ねこ</rt></ruby>",
                "cleanWord": "猫",
                "reading": "ねこ",
                "meaning": "Con mèo (Danh từ)"
            },
            {
                "word": "<ruby>手<rt>て</rt></ruby>",
                "cleanWord": "手",
                "reading": "て",
                "meaning": "Bàn tay (Danh từ)"
            },
            {
                "word": "<ruby>借<rt>か</rt></ruby>りる",
                "cleanWord": "借りる",
                "reading": "かりる",
                "meaning": "Vay, mượn, nhờ (Động từ)"
            },
            {
                "word": "<ruby>忙<rt>いそが</rt></ruby>しい",
                "cleanWord": "忙しい",
                "reading": "いそがしい",
                "meaning": "Bận rộn (Tính từ đuôi い)"
            }
        ],
        "Không có gì quý giá bằng sức khỏe.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらい / ほど...はない / はいない</span>",
                "cleanWord": "くらい / ぐらい / ほど...はない / はいない",
                "reading": "くらい / ぐらい / ほど...はない / はいない",
                "meaning": "Không có... bằng... / Là nhất... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>健<rt>けん</rt></ruby><ruby>康<rt>こう</rt></ruby>",
                "cleanWord": "健康",
                "reading": "けんこう",
                "meaning": "Sức khỏe (Danh từ)"
            },
            {
                "word": "<ruby>貴<rt>き</rt></ruby><ruby>重<rt>ちょう</rt></ruby>",
                "cleanWord": "貴重",
                "reading": "きちょう",
                "meaning": "Quý giá (Tính từ đuôi な)"
            }
        ],
        "Không có ai hát hay và truyền cảm bằng người đó.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらい / ほど...はない / はいない</span>",
                "cleanWord": "くらい / ぐらい / ほど...はない / はいない",
                "reading": "くらい / ぐらい / ほど...はない / はいない",
                "meaning": "Không có... bằng... / Là nhất... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>人<rt>ひと</rt></ruby>",
                "cleanWord": "人",
                "reading": "ひと",
                "meaning": "Người (Danh từ)"
            },
            {
                "word": "<ruby>歌<rt>うた</rt></ruby>",
                "cleanWord": "歌",
                "reading": "うた",
                "meaning": "Bài hát (Danh từ)"
            },
            {
                "word": "<ruby>上<rt>じょう</rt></ruby><ruby>手<rt>ず</rt></ruby>",
                "cleanWord": "上手",
                "reading": "じょうず",
                "meaning": "Giỏi, thành thạo (Tính từ đuôi な)"
            },
            {
                "word": "<ruby>歌<rt>か</rt></ruby><ruby>手<rt>しゅ</rt></ruby>",
                "cleanWord": "歌手",
                "reading": "かしゅ",
                "meaning": "Ca sĩ (Danh từ)"
            }
        ],
        "Không có cảm giác nào nhẹ nhõm bằng việc trả xong nợ.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらい / ほど...はない / はいない</span>",
                "cleanWord": "くらい / ぐらい / ほど...はない / はいない",
                "reading": "くらい / ぐらい / ほど...はない / はいない",
                "meaning": "Không có... bằng... / Là nhất... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>借<rt>しゃっ</rt></ruby><ruby>金<rt>きん</rt></ruby>",
                "cleanWord": "借金",
                "reading": "しゃっきん",
                "meaning": "Khoản nợ, tiền nợ (Danh từ)"
            },
            {
                "word": "<ruby>返<rt>へん</rt></ruby><ruby>済<rt>さい</rt></ruby>",
                "cleanWord": "返済",
                "reading": "へんさい",
                "meaning": "Sự trả nợ (Danh từ)"
            },
            {
                "word": "<ruby>瞬<rt>しゅん</rt></ruby><ruby>間<rt>かん</rt></ruby>",
                "cleanWord": "瞬間",
                "reading": "しゅんかん",
                "meaning": "Khoảnh khắc (Danh từ)"
            }
        ],
        "Không có nơi nào ngắm hoàng hôn đẹp bằng bờ biển này.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらい / ほど...はない / はいない</span>",
                "cleanWord": "くらい / ぐらい / ほど...はない / はいない",
                "reading": "くらい / ぐらい / ほど...はない / はいない",
                "meaning": "Không có... bằng... / Là nhất... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>海<rt>かい</rt></ruby><ruby>岸<rt>がん</rt></ruby>",
                "cleanWord": "海岸",
                "reading": "かいがん",
                "meaning": "Bờ biển (Danh từ)"
            },
            {
                "word": "<ruby>夕<rt>ゆう</rt></ruby><ruby>日<rt>ひ</rt></ruby>",
                "cleanWord": "夕日",
                "reading": "ゆうひ",
                "meaning": "Hoàng hôn (Danh từ)"
            },
            {
                "word": "きれい",
                "cleanWord": "きれい",
                "reading": "きれい",
                "meaning": "Đẹp, sạch sẽ (Tính từ đuôi な)"
            },
            {
                "word": "<ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>",
                "cleanWord": "場所",
                "reading": "ばしょ",
                "meaning": "Nơi chốn, địa điểm (Danh từ)"
            }
        ],
        "Không có nỗi buồn nào sâu sắc bằng việc mất đi người thân.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらい / ほど...はない / はいない</span>",
                "cleanWord": "くらい / ぐらい / ほど...はない / はいない",
                "reading": "くらい / ぐらい / ほど...はない / はいない",
                "meaning": "Không có... bằng... / Là nhất... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>",
                "cleanWord": "家族",
                "reading": "かぞく",
                "meaning": "Gia đình (Danh từ)"
            },
            {
                "word": "<ruby>失<rt>うしな</rt></ruby>う",
                "cleanWord": "失う",
                "reading": "うしなう",
                "meaning": "Mất mát, đánh mất (Động từ)"
            },
            {
                "word": "<ruby>深<rt>ふか</rt></ruby>い",
                "cleanWord": "深い",
                "reading": "ふかい",
                "meaning": "Sâu sắc (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>悲<rt>かな</rt></ruby>しみ",
                "cleanWord": "悲しみ",
                "reading": "かなしみ",
                "meaning": "Nỗi buồn (Danh từ)"
            }
        ],
        "Nếu phải nói dối thì thà tôi im lặng còn hơn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらいなら</span>",
                "cleanWord": "くらい / ぐらいなら",
                "reading": "くらい / ぐらいなら",
                "meaning": "Nếu phải làm... thì thà... còn hơn (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>嘘<rt>うそ</rt></ruby>",
                "cleanWord": "嘘",
                "reading": "うそ",
                "meaning": "Lời nói dối (Danh từ)"
            },
            {
                "word": "つく",
                "cleanWord": "つく",
                "reading": "つく",
                "meaning": "Nói (dối - 嘘をつく) (Động từ)"
            },
            {
                "word": "<ruby>黙<rt>だま</rt></ruby>る",
                "cleanWord": "黙る",
                "reading": "だまる",
                "meaning": "Im lặng (Động từ)"
            },
            {
                "word": "いい",
                "cleanWord": "いい",
                "reading": "いい",
                "meaning": "Tốt, đẹp (Tính từ đuôi い)"
            }
        ],
        "Nếu phải lãng phí thời gian thì thà ở nhà ngủ một giấc còn hơn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらいなら</span>",
                "cleanWord": "くらい / ぐらいなら",
                "reading": "くらい / ぐらいなら",
                "meaning": "Nếu phải làm... thì thà... còn hơn (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>",
                "cleanWord": "時間",
                "reading": "じかん",
                "meaning": "Thời gian (Danh từ)"
            },
            {
                "word": "<ruby>無<rt>む</rt></ruby><ruby>駄<rt>だ</rt></ruby>",
                "cleanWord": "無駄",
                "reading": "むだ",
                "meaning": "Lãng phí (Tính từ đuôi な / Danh từ)"
            },
            {
                "word": "<ruby>家<rt>いえ</rt></ruby>",
                "cleanWord": "家",
                "reading": "いえ",
                "meaning": "Ngôi nhà (Danh từ)"
            },
            {
                "word": "<ruby>寝<rt>ね</rt></ruby>る",
                "cleanWord": "寝る",
                "reading": "ねる",
                "meaning": "Đi ngủ (Động từ)"
            }
        ],
        "Nếu phải ăn đồ nguội ngắt thì tôi thà ăn mì gói nóng còn hơn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらいなら</span>",
                "cleanWord": "くらい / ぐらいなら",
                "reading": "くらい / ぐらいなら",
                "meaning": "Nếu phải làm... thì thà... còn hơn (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>冷<rt>つめ</rt></ruby>たい",
                "cleanWord": "冷たい",
                "reading": "つめたい",
                "meaning": "Lạnh, nguội (Tính từ đuôi い)"
            },
            {
                "word": "ご<ruby>飯<rt>はん</rt></ruby>",
                "cleanWord": "ご飯",
                "reading": "ごはん",
                "meaning": "Cơm, bữa ăn (Danh từ)"
            },
            {
                "word": "<ruby>熱<rt>あつ</rt></ruby>い",
                "cleanWord": "熱い",
                "reading": "あつい",
                "meaning": "Nóng (đồ ăn, thức uống) (Tính từ đuôi い)"
            },
            {
                "word": "ラーメン",
                "cleanWord": "ラーメン",
                "reading": "ラーメン",
                "meaning": "Mì Ramen (Danh từ)"
            }
        ],
        "Nếu phải từ bỏ ước mơ thì thà vất vả nỗ lực đến cùng.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらいなら</span>",
                "cleanWord": "くらい / ぐらいなら",
                "reading": "くらい / ぐらいなら",
                "meaning": "Nếu phải làm... thì thà... còn hơn (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>夢<rt>ゆめ</rt></ruby>",
                "cleanWord": "夢",
                "reading": "ゆめ",
                "meaning": "Giấc mơ, ước mơ (Danh từ)"
            },
            {
                "word": "<ruby>諦<rt>あきら</rt></ruby>める",
                "cleanWord": "諦める",
                "reading": "あきらめる",
                "meaning": "Từ bỏ (Động từ)"
            },
            {
                "word": "<ruby>努<rt>ど</rt></ruby><ruby>力<rt>りょく</rt></ruby>",
                "cleanWord": "努力",
                "reading": "どりょく",
                "meaning": "Sự nỗ lực (Danh từ)"
            }
        ],
        "Nếu phải mua đồ dởm thì thà nhịn để dành tiền mua đồ tốt.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜くらい / ぐらいなら</span>",
                "cleanWord": "くらい / ぐらいなら",
                "reading": "くらい / ぐらいなら",
                "meaning": "Nếu phải làm... thì thà... còn hơn (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>粗<rt>そ</rt></ruby><ruby>悪<rt>あく</rt></ruby><ruby>品<rt>ひん</rt></ruby>",
                "cleanWord": "粗悪品",
                "reading": "そあくひん",
                "meaning": "Hàng kém chất lượng (Danh từ)"
            },
            {
                "word": "<ruby>買<rt>か</rt></ruby>う",
                "cleanWord": "買う",
                "reading": "かう",
                "meaning": "Mua (Động từ)"
            },
            {
                "word": "<ruby>貯<rt>ちょ</rt></ruby><ruby>金<rt>きん</rt></ruby>",
                "cleanWord": "貯金",
                "reading": "ちょきん",
                "meaning": "Tiền tiết kiệm (Danh từ)"
            },
            {
                "word": "<ruby>良<rt>よ</rt></ruby>い",
                "cleanWord": "良い",
                "reading": "よい",
                "meaning": "Tốt, đẹp (Tính từ đuôi い)"
            }
        ],
        "Ngày nghỉ mà được ngủ nướng thì đúng là sướng nhất.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜にかぎる</span>",
                "cleanWord": "にかぎる",
                "reading": "にかぎる",
                "meaning": "Là nhất / Tốt nhất là... / Chẳng có gì bằng... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>休<rt>やす</rt></ruby>み",
                "cleanWord": "休み",
                "reading": "やすみ",
                "meaning": "Kỳ nghỉ, ngày nghỉ (Danh từ)"
            },
            {
                "word": "<ruby>日<rt>ひ</rt></ruby>",
                "cleanWord": "日",
                "reading": "ひ",
                "meaning": "Ngày (Danh từ)"
            },
            {
                "word": "<ruby>昼寝<rt>ひるね</rt></ruby>",
                "cleanWord": "昼寝",
                "reading": "ひるね",
                "meaning": "Ngủ trưa (Danh từ)"
            }
        ],
        "Đói bụng thì chỉ có ăn cơm nóng là ngon nhất.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜にかぎる</span>",
                "cleanWord": "にかぎる",
                "reading": "にかぎる",
                "meaning": "Là nhất / Tốt nhất là... / Chẳng có gì bằng... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "お<ruby>腹<rt>なか</rt></ruby>",
                "cleanWord": "お腹",
                "reading": "おなか",
                "meaning": "Bụng (Danh từ)"
            },
            {
                "word": "<ruby>炊<rt>た</rt></ruby>きたて",
                "cleanWord": "炊きたて",
                "reading": "たきたて",
                "meaning": "Cơm vừa nấu chín tới (Danh từ)"
            },
            {
                "word": "ご<ruby>飯<rt>はん</rt></ruby>",
                "cleanWord": "ご飯",
                "reading": "ごはん",
                "meaning": "Cơm, bữa ăn (Danh từ)"
            }
        ],
        "Mùa đông lạnh giá thì ăn lẩu cùng bạn bè là tuyệt nhất.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜にかぎる</span>",
                "cleanWord": "にかぎる",
                "reading": "にかぎる",
                "meaning": "Là nhất / Tốt nhất là... / Chẳng có gì bằng... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>寒<rt>さむ</rt></ruby>い",
                "cleanWord": "寒い",
                "reading": "さむい",
                "meaning": "Lạnh lẽo (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>冬<rt>ふゆ</rt></ruby>",
                "cleanWord": "冬",
                "reading": "ふゆ",
                "meaning": "Mùa đông (Danh từ)"
            },
            {
                "word": "<ruby>仲<rt>なか</rt></ruby><ruby>間<rt>ま</rt></ruby>",
                "cleanWord": "仲間",
                "reading": "なかま",
                "meaning": "Bạn bè, chiến hữu (Danh từ)"
            },
            {
                "word": "<ruby>鍋<rt>なべ</rt></ruby>",
                "cleanWord": "鍋",
                "reading": "なべ",
                "meaning": "Món lẩu, cái nồi (Danh từ)"
            }
        ],
        "Khi đau đầu, tốt nhất là nghỉ ngơi ở nơi yên tĩnh.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜にかぎる</span>",
                "cleanWord": "にかぎる",
                "reading": "にかぎる",
                "meaning": "Là nhất / Tốt nhất là... / Chẳng có gì bằng... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>頭<rt>ず</rt></ruby><ruby>痛<rt>つう</rt></ruby>",
                "cleanWord": "頭痛",
                "reading": "ずつう",
                "meaning": "Cơn đau đầu (Danh từ)"
            },
            {
                "word": "<ruby>静<rt>しず</rt></ruby>か",
                "cleanWord": "静か",
                "reading": "しずか",
                "meaning": "Yên tĩnh (Tính từ đuôi な)"
            },
            {
                "word": "<ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>",
                "cleanWord": "場所",
                "reading": "ばしょ",
                "meaning": "Nơi chốn, địa điểm (Danh từ)"
            },
            {
                "word": "<ruby>休<rt>やす</rt></ruby>む",
                "cleanWord": "休む",
                "reading": "やすむ",
                "meaning": "Nghỉ ngơi (Động từ)"
            }
        ],
        "Khi muốn giải tỏa stress thì chạy bộ là cách tốt nhất.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜にかぎる</span>",
                "cleanWord": "にかぎる",
                "reading": "にかぎる",
                "meaning": "Là nhất / Tốt nhất là... / Chẳng có gì bằng... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "ストレス",
                "cleanWord": "ストレス",
                "reading": "ストレス",
                "meaning": "Căng thẳng, stress (Danh từ)"
            },
            {
                "word": "<ruby>発<rt>はっ</rt></ruby><ruby>散<rt>さん</rt></ruby>",
                "cleanWord": "発散",
                "reading": "はっさん",
                "meaning": "Sự giải tỏa (Danh từ)"
            },
            {
                "word": "ジョギング",
                "cleanWord": "ジョギング",
                "reading": "ジョギング",
                "meaning": "Chạy bộ (Danh từ)"
            }
        ],
        "Đối với ý kiến của cấp dưới, giám đốc lắng nghe rất nghiêm túc.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜に対して</span>",
                "cleanWord": "に対して",
                "reading": "に対して",
                "meaning": "Đối với... / Trái ngược với... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>部<rt>ぶ</rt></ruby><ruby>下<rt>か</rt></ruby>",
                "cleanWord": "部下",
                "reading": "ぶか",
                "meaning": "Cấp dưới (Danh từ)"
            },
            {
                "word": "<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>",
                "cleanWord": "意見",
                "reading": "いけん",
                "meaning": "Ý kiến (Danh từ)"
            },
            {
                "word": "<ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>",
                "cleanWord": "社長",
                "reading": "しゃちょう",
                "meaning": "Giám đốc công ty (Danh từ)"
            },
            {
                "word": "<ruby>傾<rt>かたむ</rt></ruby>ける",
                "cleanWord": "傾ける",
                "reading": "かたむける",
                "meaning": "Lắng nghe, nghiêng về (Động từ)"
            }
        ],
        "Trái ngược với giá cả đắt đỏ ở thành phố, nông thôn chi phí sinh hoạt lại rẻ.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜に対して</span>",
                "cleanWord": "に対して",
                "reading": "に対して",
                "meaning": "Đối với... / Trái ngược với... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>都<rt>と</rt></ruby><ruby>会<rt>かい</rt></ruby>",
                "cleanWord": "都会",
                "reading": "とかい",
                "meaning": "Thành thị, đô thị (Danh từ)"
            },
            {
                "word": "<ruby>物<rt>ぶっ</rt></ruby><ruby>価<rt>か</rt></ruby>",
                "cleanWord": "物価",
                "reading": "ぶっか",
                "meaning": "Vật giá (Danh từ)"
            },
            {
                "word": "<ruby>田<rt>い</rt></ruby><ruby>舎<rt>なか</rt></ruby>",
                "cleanWord": "田舎",
                "reading": "いなか",
                "meaning": "Nông thôn, quê (Danh từ)"
            },
            {
                "word": "<ruby>安<rt>やす</rt></ruby>い",
                "cleanWord": "安い",
                "reading": "やすい",
                "meaning": "Rẻ (Tính từ đuôi い)"
            }
        ],
        "Bố mẹ không nên nổi giận một cách vô lý đối với con cái.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜に対して</span>",
                "cleanWord": "に対して",
                "reading": "に対して",
                "meaning": "Đối với... / Trái ngược với... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>親<rt>おや</rt></ruby>",
                "cleanWord": "親",
                "reading": "おや",
                "meaning": "Cha mẹ, phụ huynh (Danh từ)"
            },
            {
                "word": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>",
                "cleanWord": "子供",
                "reading": "こども",
                "meaning": "Con cái, trẻ em (Danh từ)"
            },
            {
                "word": "<ruby>理<rt>り</rt></ruby><ruby>不<rt>ふ</rt></ruby><ruby>尽<rt>じん</rt></ruby>",
                "cleanWord": "理不尽",
                "reading": "りふじん",
                "meaning": "Vô lý, phi lý (Tính từ đuôi な / Danh từ)"
            },
            {
                "word": "<ruby>怒<rt>おこ</rt></ruby>る",
                "cleanWord": "怒る",
                "reading": "おこる",
                "meaning": "Tức giận, nổi giận (Động từ)"
            }
        ],
        "Trái ngược với doanh số bán hàng tháng trước giảm, tháng này lại tăng mạnh.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜に対して</span>",
                "cleanWord": "に対して",
                "reading": "に対して",
                "meaning": "Đối với... / Trái ngược với... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>先<rt>せん</rt></ruby><ruby>月<rt>げつ</rt></ruby>",
                "cleanWord": "先月",
                "reading": "せんげつ",
                "meaning": "Tháng trước (Danh từ)"
            },
            {
                "word": "<ruby>売<rt>うり</rt></ruby><ruby>上<rt>あげ</rt></ruby>",
                "cleanWord": "売上",
                "reading": "うりあげ",
                "meaning": "Doanh số, doanh thu (Danh từ)"
            },
            {
                "word": "<ruby>落<rt>お</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>む",
                "cleanWord": "落ち込む",
                "reading": "おちこむ",
                "meaning": "Sụt giảm (Động từ)"
            },
            {
                "word": "<ruby>伸<rt>の</rt></ruby>びる",
                "cleanWord": "伸びる",
                "reading": "のびる",
                "meaning": "Tăng trưởng, kéo dài (Động từ)"
            }
        ],
        "Đối với môi trường tự nhiên, chúng ta cần phải có trách nhiệm bảo vệ.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜に対して</span>",
                "cleanWord": "に対して",
                "reading": "に対して",
                "meaning": "Đối với... / Trái ngược với... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>自<rt>し</rt></ruby><ruby>然<rt>ぜん</rt></ruby>",
                "cleanWord": "自然",
                "reading": "しぜん",
                "meaning": "Tự nhiên (Danh từ)"
            },
            {
                "word": "<ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby>",
                "cleanWord": "環境",
                "reading": "かんきょう",
                "meaning": "Môi trường (Danh từ)"
            },
            {
                "word": "<ruby>保<rt>ほ</rt></ruby><ruby>護<rt>ご</rt></ruby>する",
                "cleanWord": "保護する",
                "reading": "ほごする",
                "meaning": "Bảo vệ (Động từ)"
            },
            {
                "word": "<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>",
                "cleanWord": "責任",
                "reading": "せきにん",
                "meaning": "Trách nhiệm (Danh từ)"
            }
        ],
        "Công việc tự do tuy được tự chủ thời gian nhưng mặt khác thu nhập lại không ổn định.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜反面</span>",
                "cleanWord": "反面",
                "reading": "反面",
                "meaning": "Nhưng mặt khác / Trái lại... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "フリーランス",
                "cleanWord": "フリーランス",
                "reading": "フリーランス",
                "meaning": "Người làm nghề tự do (Danh từ)"
            },
            {
                "word": "<ruby>多<rt>おお</rt></ruby>い",
                "cleanWord": "多い",
                "reading": "おおい",
                "meaning": "Nhiều (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>収<rt>しゅう</rt></ruby><ruby>入<rt>にゅう</rt></ruby>",
                "cleanWord": "収入",
                "reading": "しゅうにゅう",
                "meaning": "Thu nhập (Danh từ)"
            },
            {
                "word": "<ruby>不<rt>ふ</rt></ruby><ruby>安<rt>あん</rt></ruby><ruby>定<rt>てい</rt></ruby>",
                "cleanWord": "不安定",
                "reading": "ふあんてい",
                "meaning": "Bấp bênh, không ổn định (Tính từ đuôi な)"
            }
        ],
        "Căn nhà này tuy có sân vườn rộng nhưng mặt khác việc dọn dẹp lại vô cùng vất vả.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜反面</span>",
                "cleanWord": "反面",
                "reading": "反面",
                "meaning": "Nhưng mặt khác / Trái lại... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>庭<rt>にわ</rt></ruby>",
                "cleanWord": "庭",
                "reading": "にわ",
                "meaning": "Khu vườn (Danh từ)"
            },
            {
                "word": "<ruby>広<rt>ひろ</rt></ruby>い",
                "cleanWord": "広い",
                "reading": "ひろい",
                "meaning": "Rộng rãi (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>手<rt>て</rt></ruby><ruby>入<rt>い</rt></ruby>れ",
                "cleanWord": "手入れ",
                "reading": "ていれ",
                "meaning": "Chăm sóc, bảo dưỡng (Danh từ)"
            },
            {
                "word": "<ruby>大<rt>たい</rt></ruby><ruby>変<rt>へん</rt></ruby>",
                "cleanWord": "大変",
                "reading": "たいへん",
                "meaning": "Vất vả, khó khăn (Tính từ đuôi な)"
            }
        ],
        "Trí tuệ nhân tạo tuy làm việc hiệu quả nhưng mặt khác cũng tiềm ẩn nguy cơ mất việc làm.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜反面</span>",
                "cleanWord": "反面",
                "reading": "反面",
                "meaning": "Nhưng mặt khác / Trái lại... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "AI",
                "cleanWord": "AI",
                "reading": "AI",
                "meaning": "Trí tuệ nhân tạo (Danh từ)"
            },
            {
                "word": "<ruby>効<rt>こう</rt></ruby><ruby>率<rt>りつ</rt></ruby><ruby>的<rt>てき</rt></ruby>",
                "cleanWord": "効率的",
                "reading": "こうりつてき",
                "meaning": "Hiệu quả (Tính từ đuôi な)"
            },
            {
                "word": "<ruby>雇<rt>こ</rt></ruby><ruby>用<rt>よう</rt></ruby>",
                "cleanWord": "雇用",
                "reading": "こよう",
                "meaning": "Việc làm, việc tuyển dụng (Danh từ)"
            },
            {
                "word": "<ruby>奪<rt>うば</rt></ruby>う",
                "cleanWord": "奪う",
                "reading": "うばう",
                "meaning": "Cướp đi, lấy mất (Động từ)"
            }
        ],
        "Anh ấy tuy tốt bụng và hiền lành nhưng mặt khác lại thiếu sự quyết đoán.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜反面</span>",
                "cleanWord": "反面",
                "reading": "反面",
                "meaning": "Nhưng mặt khác / Trái lại... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>彼<rt>かれ</rt></ruby>",
                "cleanWord": "彼",
                "reading": "かれ",
                "meaning": "Anh ấy (Đại từ)"
            },
            {
                "word": "<ruby>優<rt>やさ</rt></ruby>しい",
                "cleanWord": "優しい",
                "reading": "やさしい",
                "meaning": "Hiền lành, tốt bụng (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>決<rt>けつ</rt></ruby><ruby>断<rt>だん</rt></ruby><ruby>力<rt>りょく</rt></ruby>",
                "cleanWord": "決断力",
                "reading": "けつだんりょく",
                "meaning": "Sự quyết đoán (Danh từ)"
            },
            {
                "word": "<ruby>欠<rt>か</rt></ruby>ける",
                "cleanWord": "欠ける",
                "reading": "かける",
                "meaning": "Thiếu sót (Động từ)"
            }
        ],
        "Sống ở nước ngoài tuy học hỏi được nhiều điều nhưng mặt khác rào cản ngôn ngữ cũng rất lớn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜反面</span>",
                "cleanWord": "反面",
                "reading": "反面",
                "meaning": "Nhưng mặt khác / Trái lại... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>海<rt>かい</rt></ruby><ruby>外<rt>がい</rt></ruby>",
                "cleanWord": "海外",
                "reading": "かいがい",
                "meaning": "Nước ngoài (Danh từ)"
            },
            {
                "word": "<ruby>学<rt>まな</rt></ruby>ぶ",
                "cleanWord": "学ぶ",
                "reading": "まなぶ",
                "meaning": "Học hỏi, tiếp thu (Động từ)"
            },
            {
                "word": "<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>",
                "cleanWord": "言葉",
                "reading": "ことば",
                "meaning": "Ngôn ngữ, từ ngữ (Danh từ)"
            },
            {
                "word": "<ruby>苦<rt>く</rt></ruby><ruby>労<rt>ろう</rt></ruby>する",
                "cleanWord": "苦労する",
                "reading": "くろうする",
                "meaning": "Vất vả, khó nhọc (Động từ)"
            }
        ],
        "Một mặt giáo viên rất nghiêm khắc trong giờ học, mặt khác ngoài giờ lại rất thân thiện.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜一方（で）</span>",
                "cleanWord": "一方（で）",
                "reading": "一方（で）",
                "meaning": "Một mặt thì... mặt khác lại... / Đồng thời... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>",
                "cleanWord": "先生",
                "reading": "せんせい",
                "meaning": "Thầy cô giáo (Danh từ)"
            },
            {
                "word": "<ruby>授<rt>じゅ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>",
                "cleanWord": "授業中",
                "reading": "じゅぎょうちゅう",
                "meaning": "Trong giờ học (Danh từ)"
            },
            {
                "word": "<ruby>厳<rt>きび</rt></ruby>しい",
                "cleanWord": "厳しい",
                "reading": "きびしい",
                "meaning": "Nghiêm khắc (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>放<rt>ほう</rt></ruby><ruby>課<rt>か</rt></ruby><ruby>後<rt>ご</rt></ruby>",
                "cleanWord": "放課後",
                "reading": "ほうかご",
                "meaning": "Sau giờ học (Danh từ)"
            }
        ],
        "Công nghệ tiện lợi hơn, nhưng một mặt lại làm giảm giao tiếp trực tiếp giữa con người.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜一方（で）</span>",
                "cleanWord": "一方（で）",
                "reading": "一方（で）",
                "meaning": "Một mặt thì... mặt khác lại... / Đồng thời... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>便<rt>べん</rt></ruby><ruby>利<rt>り</rt></ruby>",
                "cleanWord": "便利",
                "reading": "べんり",
                "meaning": "Tiện lợi (Tính từ đuôi な)"
            },
            {
                "word": "<ruby>直<rt>ちょく</rt></ruby><ruby>接<rt>せつ</rt></ruby>",
                "cleanWord": "直接",
                "reading": "ちょくせつ",
                "meaning": "Trực tiếp (Phó từ / Tính từ đuôi な)"
            },
            {
                "word": "<ruby>対<rt>たい</rt></ruby><ruby>話<rt>わ</rt></ruby>",
                "cleanWord": "対話",
                "reading": "たいわ",
                "meaning": "Đối thoại, trò chuyện (Danh từ)"
            },
            {
                "word": "<ruby>減<rt>へ</rt></ruby>る",
                "cleanWord": "減る",
                "reading": "へる",
                "meaning": "Giảm đi (Động từ)"
            }
        ],
        "Anh ấy vừa đi làm công ty, mặt khác lại điều hành một kênh YouTube riêng.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜一方（で）</span>",
                "cleanWord": "一方（で）",
                "reading": "一方（で）",
                "meaning": "Một mặt thì... mặt khác lại... / Đồng thời... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>",
                "cleanWord": "会社員",
                "reading": "かいしゃいん",
                "meaning": "Nhân viên công ty (Danh từ)"
            },
            {
                "word": "<ruby>働<rt>はたら</rt></ruby>く",
                "cleanWord": "働く",
                "reading": "はたらく",
                "meaning": "Làm việc (Động từ)"
            },
            {
                "word": "<ruby>自<rt>じ</rt></ruby><ruby>身<rt>しん</rt></ruby>",
                "cleanWord": "自身",
                "reading": "じしん",
                "meaning": "Bản thân (Danh từ)"
            },
            {
                "word": "<ruby>運<rt>うん</rt></ruby><ruby>営<rt>えい</rt></ruby>する",
                "cleanWord": "運営する",
                "reading": "うんえいする",
                "meaning": "Vận hành, điều hành (Động từ)"
            }
        ],
        "Kinh tế phát triển mang lại đời sống sung túc, mặt khác ô nhiễm môi trường lại gia tăng.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜一方（で）</span>",
                "cleanWord": "一方（で）",
                "reading": "一方（で）",
                "meaning": "Một mặt thì... mặt khác lại... / Đồng thời... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>経<rt>けい</rt></ruby><ruby>済<rt>ざい</rt></ruby>",
                "cleanWord": "経済",
                "reading": "けいざい",
                "meaning": "Kinh tế (Danh từ)"
            },
            {
                "word": "<ruby>発<rt>はっ</rt></ruby><ruby>展<rt>てん</rt></ruby>する",
                "cleanWord": "発展する",
                "reading": "はってんする",
                "meaning": "Phát triển (Động từ)"
            },
            {
                "word": "<ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby><ruby>汚<rt>お</rt></ruby><ruby>染<rt>せん</rt></ruby>",
                "cleanWord": "環境汚染",
                "reading": "かんきょうおせん",
                "meaning": "Ô nhiễm môi trường (Danh từ)"
            },
            {
                "word": "<ruby>深<rt>しん</rt></ruby><ruby>刻<rt>こく</rt></ruby><ruby>化<rt>か</rt></ruby>する",
                "cleanWord": "深刻化する",
                "reading": "しんこくかする",
                "meaning": "Trở nên nghiêm trọng (Động từ)"
            }
        ],
        "Một mặt anh ấy muốn chuyển việc sang công ty lớn, mặt khác lại lo lắng về môi trường làm việc mới.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜一方（で）</span>",
                "cleanWord": "一方（で）",
                "reading": "一方（で）",
                "meaning": "Một mặt thì... mặt khác lại... / Đồng thời... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>大<rt>おお</rt></ruby><ruby>手<rt>て</rt></ruby><ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>",
                "cleanWord": "大手企業",
                "reading": "おおてきぎょう",
                "meaning": "Doanh nghiệp lớn (Danh từ)"
            },
            {
                "word": "<ruby>転<rt>てん</rt></ruby><ruby>職<rt>しょく</rt></ruby>する",
                "cleanWord": "転職する",
                "reading": "てんしょくする",
                "meaning": "Chuyển việc (Động từ)"
            },
            {
                "word": "<ruby>職<rt>しょく</rt></ruby><ruby>場<rt>ば</rt></ruby>",
                "cleanWord": "職場",
                "reading": "しょくば",
                "meaning": "Nơi làm việc (Danh từ)"
            },
            {
                "word": "<ruby>不<rt>ふ</rt></ruby><ruby>安<rt>あん</rt></ruby>",
                "cleanWord": "不安",
                "reading": "ふあん",
                "meaning": "Sự bất an, lo lắng (Danh từ / Tính từ な)"
            }
        ],
        "Căn phòng này nói đúng hơn là chật hẹp chứ không phải là ấm cúng.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜というより</span>",
                "cleanWord": "というより",
                "reading": "というより",
                "meaning": "Nói đúng hơn là... / Không hẳn là A mà là B... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>",
                "cleanWord": "部屋",
                "reading": "へや",
                "meaning": "Căn phòng (Danh từ)"
            },
            {
                "word": "アットホーム",
                "cleanWord": "アットホーム",
                "reading": "アットホーム",
                "meaning": "Ấm cúng, thân mật (Tính từ đuôi な)"
            },
            {
                "word": "<ruby>狭<rt>せま</rt></ruby>い",
                "cleanWord": "狭い",
                "reading": "せまい",
                "meaning": "Chật hẹp (Tính từ đuôi い)"
            }
        ],
        "Tôi không hẳn là bận, nói đúng hơn là lười biếng không muốn làm thôi.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜というより</span>",
                "cleanWord": "というより",
                "reading": "というより",
                "meaning": "Nói đúng hơn là... / Không hẳn là A mà là B... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>忙<rt>いそが</rt></ruby>しい",
                "cleanWord": "忙しい",
                "reading": "いそがしい",
                "meaning": "Bận rộn (Tính từ đuôi い)"
            },
            {
                "word": "サボる",
                "cleanWord": "サボる",
                "reading": "サボる",
                "meaning": "Trốn việc, lười biếng (Động từ)"
            }
        ],
        "Món ăn này nói đúng hơn là vị thanh đạm chứ không phải là nhạt nhẽo.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜というより</span>",
                "cleanWord": "というより",
                "reading": "というより",
                "meaning": "Nói đúng hơn là... / Không hẳn là A mà là B... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>",
                "cleanWord": "料理",
                "reading": "りょうり",
                "meaning": "Món ăn (Danh từ)"
            },
            {
                "word": "<ruby>薄<rt>うす</rt></ruby><ruby>味<rt>あじ</rt></ruby>",
                "cleanWord": "薄味",
                "reading": "うすあじ",
                "meaning": "Vị thanh đạm, nhạt (Danh từ)"
            },
            {
                "word": "<ruby>上<rt>じょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>",
                "cleanWord": "上品",
                "reading": "じょうひん",
                "meaning": "Trang nhã, tao nhã (Tính từ đuôi な)"
            },
            {
                "word": "<ruby>味<rt>あじ</rt></ruby>",
                "cleanWord": "味",
                "reading": "あじ",
                "meaning": "Hương vị (Danh từ)"
            }
        ],
        "Anh ấy nói đúng hơn là bướng bỉnh chứ không phải là kiên trì.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜というより</span>",
                "cleanWord": "というより",
                "reading": "というより",
                "meaning": "Nói đúng hơn là... / Không hẳn là A mà là B... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>彼<rt>かれ</rt></ruby>",
                "cleanWord": "彼",
                "reading": "かれ",
                "meaning": "Anh ấy (Đại từ)"
            },
            {
                "word": "<ruby>粘<rt>ねば</rt></ruby>り<ruby>強<rt>づよ</rt></ruby>い",
                "cleanWord": "粘り強い",
                "reading": "ねばりづよい",
                "meaning": "Kiên trì, dai sức (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>意<rt>い</rt></ruby><ruby>地<rt>じ</rt></ruby>っ<ruby>張<rt>ぱ</rt></ruby>り",
                "cleanWord": "意地っ張り",
                "reading": "いじっぱり",
                "meaning": "Bướng bỉnh, cố chấp (Tính từ đuôi な / Danh từ)"
            }
        ],
        "Bài thi này nói đúng hơn là quá dài chứ không hẳn là khó.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜というより</span>",
                "cleanWord": "というより",
                "reading": "というより",
                "meaning": "Nói đúng hơn là... / Không hẳn là A mà là B... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "テスト",
                "cleanWord": "テスト",
                "reading": "テスト",
                "meaning": "Bài kiểm tra (Danh từ)"
            },
            {
                "word": "<ruby>難<rt>むずか</rt></ruby>しい",
                "cleanWord": "難しい",
                "reading": "むずかしい",
                "meaning": "Khó khăn, phức tạp (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>",
                "cleanWord": "問題",
                "reading": "もんだい",
                "meaning": "Vấn đề (Danh từ)"
            },
            {
                "word": "<ruby>多<rt>おお</rt></ruby>い",
                "cleanWord": "多い",
                "reading": "おおい",
                "meaning": "Nhiều (Tính từ đuôi い)"
            }
        ],
        "Tôi đã đi đón em gái thay cho mẹ đang bị bận rộn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜代わりに</span>",
                "cleanWord": "代わりに",
                "reading": "代わりに",
                "meaning": "Thay vì / Bù lại / Trái ngược với A thì B... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>母<rt>はは</rt></ruby>",
                "cleanWord": "母",
                "reading": "はは",
                "meaning": "Mẹ (Danh từ)"
            },
            {
                "word": "<ruby>妹<rt>いもうと</rt></ruby>",
                "cleanWord": "妹",
                "reading": "いもうと",
                "meaning": "Em gái (Danh từ)"
            },
            {
                "word": "<ruby>迎<rt>むか</rt></ruby>える",
                "cleanWord": "迎える",
                "reading": "むかえる",
                "meaning": "Đón tiếp, đi đón (Động từ)"
            },
            {
                "word": "<ruby>行<rt>い</rt></ruby>く",
                "cleanWord": "行く",
                "reading": "いく",
                "meaning": "Đi (Động từ)"
            }
        ],
        "Thay vì ăn ngoài ở nhà hàng đắt đỏ, tôi tự nấu ăn ở nhà.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜代わりに</span>",
                "cleanWord": "代わりに",
                "reading": "代わりに",
                "meaning": "Thay vì / Bù lại / Trái ngược với A thì B... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>高<rt>たか</rt></ruby>い",
                "cleanWord": "高い",
                "reading": "たかい",
                "meaning": "Cao, đắt đỏ (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>外<rt>がい</rt></ruby><ruby>食<rt>しょく</rt></ruby>",
                "cleanWord": "外食",
                "reading": "がいしょく",
                "meaning": "Ăn ngoài, ăn tiệm (Danh từ)"
            },
            {
                "word": "<ruby>家<rt>いえ</rt></ruby>",
                "cleanWord": "家",
                "reading": "いえ",
                "meaning": "Ngôi nhà (Danh từ)"
            },
            {
                "word": "<ruby>自<rt>じ</rt></ruby><ruby>炊<rt>すい</rt></ruby>",
                "cleanWord": "自炊",
                "reading": "じすい",
                "meaning": "Tự nấu ăn (Danh từ)"
            }
        ],
        "Căn hộ này tuy xa nhà ga một chút nhưng bù lại phòng ốc rất rộng rãi.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜代わりに</span>",
                "cleanWord": "代わりに",
                "reading": "代わりに",
                "meaning": "Thay vì / Bù lại / Trái ngược với A thì B... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "アパート",
                "cleanWord": "アパート",
                "reading": "アパート",
                "meaning": "Căn hộ, chung cư (Danh từ)"
            },
            {
                "word": "<ruby>遠<rt>とお</rt></ruby>い",
                "cleanWord": "遠い",
                "reading": "とおい",
                "meaning": "Xa xôi (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>",
                "cleanWord": "部屋",
                "reading": "へや",
                "meaning": "Căn phòng (Danh từ)"
            },
            {
                "word": "<ruby>広<rt>ひろ</rt></ruby>い",
                "cleanWord": "広い",
                "reading": "ひろい",
                "meaning": "Rộng rãi (Tính từ đuôi い)"
            }
        ],
        "Đổi lại việc dọn dẹp phòng cho anh trai, tôi được anh ấy cho tiền tiêu vặt.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜代わりに</span>",
                "cleanWord": "代わりに",
                "reading": "代わりに",
                "meaning": "Thay vì / Bù lại / Trái ngược với A thì B... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>兄<rt>あに</rt></ruby>",
                "cleanWord": "兄",
                "reading": "あに",
                "meaning": "Anh trai (Danh từ)"
            },
            {
                "word": "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>",
                "cleanWord": "部屋",
                "reading": "へや",
                "meaning": "Căn phòng (Danh từ)"
            },
            {
                "word": "<ruby>掃<rt>そう</rt></ruby><ruby>除<rt>じ</rt></ruby>する",
                "cleanWord": "掃除する",
                "reading": "そうじする",
                "meaning": "Dọn dẹp, vệ sinh (Động từ)"
            },
            {
                "word": "お<ruby>小<rt>こ</rt></ruby><ruby>遣<rt>づか</rt></ruby>い",
                "cleanWord": "お小遣い",
                "reading": "おこづかい",
                "meaning": "Tiền tiêu vặt (Danh từ)"
            }
        ],
        "Thay vì dùng tiền mặt, ngày nay nhiều người dùng thanh toán điện tử.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜代わりに</span>",
                "cleanWord": "代わりに",
                "reading": "代わりに",
                "meaning": "Thay vì / Bù lại / Trái ngược với A thì B... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>現<rt>げん</rt></ruby><ruby>金<rt>きん</rt></ruby>",
                "cleanWord": "現金",
                "reading": "げんきん",
                "meaning": "Tiền mặt (Danh từ)"
            },
            {
                "word": "キャッシュレス<ruby>決<rt>けっ</rt></ruby><ruby>済<rt>さい</rt></ruby>",
                "cleanWord": "キャッシュレス決済",
                "reading": "キャッシュレスけっさい",
                "meaning": "Thanh toán không tiền mặt (Danh từ)"
            },
            {
                "word": "<ruby>利<rt>り</rt></ruby><ruby>用<rt>よう</rt></ruby>する",
                "cleanWord": "利用する",
                "reading": "りようする",
                "meaning": "Sử dụng (Động từ)"
            },
            {
                "word": "<ruby>増<rt>ふ</rt></ruby>える",
                "cleanWord": "増える",
                "reading": "ふえる",
                "meaning": "Gia tăng (Động từ)"
            }
        ],
        "Do cơn mưa to đột ngột nên lễ hội pháo hoa đã bị hoãn lại.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ため（に）</span>",
                "cleanWord": "ため（に）",
                "reading": "ため（に）",
                "meaning": "Vì, bởi, do... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>突<rt>とつ</rt></ruby><ruby>然<rt>ぜん</rt></ruby>",
                "cleanWord": "突然",
                "reading": "とつぜん",
                "meaning": "Đột nhiên, bất ngờ (Phó từ)"
            },
            {
                "word": "<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>",
                "cleanWord": "大雨",
                "reading": "おおあめ",
                "meaning": "Mưa to (Danh từ)"
            },
            {
                "word": "<ruby>花<rt>はな</rt></ruby><ruby>火<rt>び</rt></ruby><ruby>大<rt>たい</rt></ruby><ruby>会<rt>かい</rt></ruby>",
                "cleanWord": "花火大会",
                "reading": "はなびたいかい",
                "meaning": "Lễ hội pháo hoa (Danh từ)"
            },
            {
                "word": "<ruby>延<rt>えん</rt></ruby><ruby>期<rt>き</rt></ruby>",
                "cleanWord": "延期",
                "reading": "えんき",
                "meaning": "Sự hoãn lại (Danh từ)"
            }
        ],
        "Do mắt kém nên ông tôi không thể lái xe ô tô.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ため（に）</span>",
                "cleanWord": "ため（に）",
                "reading": "ため（に）",
                "meaning": "Vì, bởi, do... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>目<rt>め</rt></ruby>",
                "cleanWord": "目",
                "reading": "め",
                "meaning": "Mắt (Danh từ)"
            },
            {
                "word": "<ruby>悪<rt>わる</rt></ruby>い",
                "cleanWord": "悪い",
                "reading": "わるい",
                "meaning": "Xấu, kém (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>祖<rt>そ</rt></ruby><ruby>父<rt>ふ</rt></ruby>",
                "cleanWord": "祖父",
                "reading": "そふ",
                "meaning": "Ông nội / Ông ngoại (Danh từ)"
            },
            {
                "word": "<ruby>運<rt>うん</rt></ruby><ruby>転<rt>てん</rt></ruby>する",
                "cleanWord": "運転する",
                "reading": "うんてんする",
                "meaning": "Lái xe (Động từ)"
            }
        ],
        "Chuyến bay đã phải hạ cánh khẩn cấp vì động cơ bị trục trặc.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ため（に）</span>",
                "cleanWord": "ため（に）",
                "reading": "ため（に）",
                "meaning": "Vì, bởi, do... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "エンジン",
                "cleanWord": "エンジン",
                "reading": "エンジン",
                "meaning": "Động cơ máy (Danh từ)"
            },
            {
                "word": "<ruby>故<rt>こ</rt></ruby><ruby>障<rt>しょう</rt></ruby>",
                "cleanWord": "故障",
                "reading": "こしょう",
                "meaning": "Hỏng hóc, sự cố (Danh từ)"
            },
            {
                "word": "<ruby>飛<rt>ひ</rt></ruby><ruby>行<rt>こう</rt></ruby><ruby>機<rt>き</rt></ruby>",
                "cleanWord": "飛行機",
                "reading": "ひこうき",
                "meaning": "Máy bay (Danh từ)"
            },
            {
                "word": "<ruby>緊<rt>きん</rt></ruby><ruby>急<rt>きゅう</rt></ruby><ruby>着<rt>ちゃく</rt></ruby><ruby>陸<rt>りく</rt></ruby>",
                "cleanWord": "緊急着陸",
                "reading": "きんきゅうちゃくりく",
                "meaning": "Hạ cánh khẩn cấp (Danh từ)"
            }
        ],
        "Vì quá lo lắng nên đêm qua tôi hoàn toàn không ngủ được.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ため（に）</span>",
                "cleanWord": "ため（に）",
                "reading": "ため（に）",
                "meaning": "Vì, bởi, do... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>不<rt>ふ</rt></ruby><ruby>安<rt>あん</rt></ruby>",
                "cleanWord": "不安",
                "reading": "ふあん",
                "meaning": "Sự bất an, lo lắng (Danh từ / Tính từ な)"
            },
            {
                "word": "<ruby>昨<rt>ゆう</rt></ruby><ruby>夜<rt>べ</rt></ruby>",
                "cleanWord": "昨夜",
                "reading": "ゆうべ",
                "meaning": "Tối qua, đêm qua (Danh từ)"
            },
            {
                "word": "<ruby>眠<rt>ねむ</rt></ruby>る",
                "cleanWord": "眠る",
                "reading": "ねむる",
                "meaning": "Ngủ say (Động từ)"
            }
        ],
        "Đường bị đóng băng trơn trượt do nhiệt độ giảm mạnh.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ため（に）</span>",
                "cleanWord": "ため（に）",
                "reading": "ため（に）",
                "meaning": "Vì, bởi, do... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>気<rt>き</rt></ruby><ruby>温<rt>おん</rt></ruby>",
                "cleanWord": "気温",
                "reading": "きおん",
                "meaning": "Nhiệt độ không khí (Danh từ)"
            },
            {
                "word": "<ruby>下<rt>さ</rt></ruby>がる",
                "cleanWord": "下がる",
                "reading": "さがる",
                "meaning": "Hạ xuống, giảm (Động từ)"
            },
            {
                "word": "<ruby>道<rt>どう</rt></ruby><ruby>路<rt>ろ</rt></ruby>",
                "cleanWord": "道路",
                "reading": "どうろ",
                "meaning": "Đường sá, con đường (Danh từ)"
            },
            {
                "word": "<ruby>凍<rt>とう</rt></ruby><ruby>結<rt>けつ</rt></ruby>",
                "cleanWord": "凍結",
                "reading": "とうけつ",
                "meaning": "Đóng băng (Danh từ)"
            }
        ],
        "Nhờ/Bằng việc trao đổi ý kiến qua lại, một ý tưởng mới đã được sinh ra.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜によって・による</span>",
                "cleanWord": "によって・による",
                "reading": "によって・による",
                "meaning": "Vì, do... / Bằng, thông qua... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>",
                "cleanWord": "意見",
                "reading": "いけん",
                "meaning": "Ý kiến (Danh từ)"
            },
            {
                "word": "<ruby>交<rt>か</rt></ruby>わす",
                "cleanWord": "交わす",
                "reading": "かわす",
                "meaning": "Trao đổi, giao nhau (Động từ)"
            },
            {
                "word": "<ruby>新<rt>あたら</rt></ruby>しい",
                "cleanWord": "新しい",
                "reading": "あたらしい",
                "meaning": "Mới mẻ (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>生<rt>う</rt></ruby>まれる",
                "cleanWord": "生まれる",
                "reading": "うまれる",
                "meaning": "Sinh ra, nảy sinh (Động từ)"
            }
        ],
        "Vụ tai nạn do bất cẩn của người lái xe đã được điều tra.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜によって・による</span>",
                "cleanWord": "によって・による",
                "reading": "によって・による",
                "meaning": "Vì, do... / Bằng, thông qua... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "ドライバー",
                "cleanWord": "ドライバー",
                "reading": "ドライバー",
                "meaning": "Tài xế, người lái xe (Danh từ)"
            },
            {
                "word": "<ruby>不<rt>ふ</rt></ruby><ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>",
                "cleanWord": "不注意",
                "reading": "ふちゅうい",
                "meaning": "Bất cẩn, sơ suất (Tính từ đuôi な / Danh từ)"
            },
            {
                "word": "<ruby>事<rt>じ</rt></ruby><ruby>故<rt>こ</rt></ruby>",
                "cleanWord": "事故",
                "reading": "じこ",
                "meaning": "Tai nạn (Danh từ)"
            },
            {
                "word": "<ruby>調<rt>ちょう</rt></ruby><ruby>査<rt>さ</rt></ruby>する",
                "cleanWord": "調査する",
                "reading": "ちょうさする",
                "meaning": "Điều tra (Động từ)"
            }
        ],
        "Cách suy nghĩ của mỗi người sẽ khác nhau tùy theo quốc gia và văn hóa.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜によって・による</span>",
                "cleanWord": "によって・による",
                "reading": "によって・による",
                "meaning": "Vì, do... / Bằng, thông qua... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>国<rt>くに</rt></ruby>",
                "cleanWord": "国",
                "reading": "くに",
                "meaning": "Đất nước, quốc gia (Danh từ)"
            },
            {
                "word": "<ruby>文<rt>ぶん</rt></ruby><ruby>化<rt>か</rt></ruby>",
                "cleanWord": "文化",
                "reading": "ぶんか",
                "meaning": "Văn hóa (Danh từ)"
            },
            {
                "word": "<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>",
                "cleanWord": "考え方",
                "reading": "かんがえかた",
                "meaning": "Cách suy nghĩ (Danh từ)"
            },
            {
                "word": "<ruby>異<rt>こと</rt></ruby>なる",
                "cleanWord": "異なる",
                "reading": "ことなる",
                "meaning": "Khác biệt, khác nhau (Động từ)"
            }
        ],
        "Bằng cách luyện tập mỗi ngày, anh ấy đã có thể nói chuyện lưu loát.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜によって・による</span>",
                "cleanWord": "によって・による",
                "reading": "によって・による",
                "meaning": "Vì, do... / Bằng, thông qua... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby>",
                "cleanWord": "毎日",
                "reading": "まいにち",
                "meaning": "Mỗi ngày, hằng ngày (Danh từ / Phó từ)"
            },
            {
                "word": "<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>する",
                "cleanWord": "練習する",
                "reading": "れんしゅうする",
                "meaning": "Luyện tập (Động từ)"
            },
            {
                "word": "スムーズ",
                "cleanWord": "スムーズ",
                "reading": "スムーズ",
                "meaning": "Trôi chảy, mượt mà (Tính từ đuôi な)"
            },
            {
                "word": "<ruby>話<rt>はな</rt></ruby>す",
                "cleanWord": "話す",
                "reading": "はなす",
                "meaning": "Nói chuyện (Động từ)"
            }
        ],
        "Tòa nhà này được thiết kế bởi một kiến trúc sư nổi tiếng thế giới.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜によって・による</span>",
                "cleanWord": "によって・による",
                "reading": "によって・による",
                "meaning": "Vì, do... / Bằng, thông qua... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>建<rt>たて</rt></ruby><ruby>物<rt>もの</rt></ruby>",
                "cleanWord": "建物",
                "reading": "たてもの",
                "meaning": "Tòa nhà, công trình (Danh từ)"
            },
            {
                "word": "<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby><ruby>的<rt>てき</rt></ruby>な",
                "cleanWord": "世界的な",
                "reading": "せかいてきな",
                "meaning": "Mang tầm thế giới (Tính từ đuôi な)"
            },
            {
                "word": "<ruby>建<rt>けん</rt></ruby><ruby>築<rt>ちく</rt></ruby><ruby>家<rt>か</rt></ruby>",
                "cleanWord": "建築家",
                "reading": "けんちくか",
                "meaning": "Kiến trúc sư (Danh từ)"
            },
            {
                "word": "<ruby>設<rt>せっ</rt></ruby><ruby>計<rt>keい</rt></ruby>する",
                "cleanWord": "設計する",
                "reading": "せっけいする",
                "meaning": "Thiết kế (Động từ)"
            }
        ],
        "Từ việc lá cây bắt đầu ngả vàng, tôi cảm nhận được mùa thu đang đến gần.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜から・ことから</span>",
                "cleanWord": "から・ことから",
                "reading": "から・ことから",
                "meaning": "Vì, từ việc... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>木<rt>き</rt></ruby>の<ruby>葉<rt>は</rt></ruby>",
                "cleanWord": "木の葉",
                "reading": "きのは",
                "meaning": "Lá cây (Danh từ)"
            },
            {
                "word": "<ruby>色<rt>いろ</rt></ruby>づく",
                "cleanWord": "色づく",
                "reading": "いろづく",
                "meaning": "Đổi màu, ngả vàng (Động từ)"
            },
            {
                "word": "<ruby>秋<rt>あき</rt></ruby>",
                "cleanWord": "秋",
                "reading": "あき",
                "meaning": "Mùa thu (Danh từ)"
            },
            {
                "word": "<ruby>感<rt>かん</rt></ruby>じる",
                "cleanWord": "感じる",
                "reading": "かんじる",
                "meaning": "Cảm nhận, cảm thấy (Động từ)"
            }
        ],
        "Từ việc giá cả rẻ và đồ ăn ngon, quán ăn này lúc nào cũng đông khách.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜から・ことから</span>",
                "cleanWord": "から・ことから",
                "reading": "から・ことから",
                "meaning": "Vì, từ việc... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>安<rt>やす</rt></ruby>い",
                "cleanWord": "安い",
                "reading": "やすい",
                "meaning": "Rẻ (Tính từ đuôi い)"
            },
            {
                "word": "おいしい",
                "cleanWord": "おいしい",
                "reading": "おいしい",
                "meaning": "Ngon (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>食<rt>しょく</rt></ruby><ruby>堂<rt>どう</rt></ruby>",
                "cleanWord": "食堂",
                "reading": "しょくどう",
                "meaning": "Quán ăn, nhà ăn (Danh từ)"
            },
            {
                "word": "<ruby>混<rt>こ</rt></ruby>む",
                "cleanWord": "混む",
                "reading": "こむ",
                "meaning": "Đông đúc, chen chúc (Động từ)"
            }
        ],
        "Do một lời nói đùa vô ý mà đã phát triển thành một cuộc cãi vã to.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜から・ことから</span>",
                "cleanWord": "から・ことから",
                "reading": "から・ことから",
                "meaning": "Vì, từ việc... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>冗<rt>じょう</rt></ruby><ruby>談<rt>だん</rt></ruby>",
                "cleanWord": "冗談",
                "reading": "じょうだん",
                "meaning": "Lời nói đùa (Danh từ)"
            },
            {
                "word": "<ruby>大<rt>おお</rt></ruby>きい",
                "cleanWord": "大きい",
                "reading": "おおきい",
                "meaning": "To lớn (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>喧<rt>けん</rt></ruby><ruby>嘩<rt>か</rt></ruby>",
                "cleanWord": "喧嘩",
                "reading": "けんか",
                "meaning": "Cãi vã, đánh nhau (Danh từ)"
            },
            {
                "word": "<ruby>発<rt>はっ</rt></ruby><ruby>展<rt>てん</rt></ruby>する",
                "cleanWord": "発展する",
                "reading": "はってんする",
                "meaning": "Phát triển (Động từ)"
            }
        ],
        "Từ việc chú mèo luôn đợi ở cửa sổ, chúng tôi biết được nó rất nhớ chủ.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜から・ことから</span>",
                "cleanWord": "から・ことから",
                "reading": "から・ことから",
                "meaning": "Vì, từ việc... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>猫<rt>ねこ</rt></ruby>",
                "cleanWord": "猫",
                "reading": "ねこ",
                "meaning": "Con mèo (Danh từ)"
            },
            {
                "word": "<ruby>窓<rt>まど</rt></ruby><ruby>辺<rt>べ</rt></ruby>",
                "cleanWord": "窓辺",
                "reading": "まどべ",
                "meaning": "Bên cửa sổ (Danh từ)"
            },
            {
                "word": "<ruby>飼<rt>か</rt></ruby>い<ruby>主<rt>ぬし</rt></ruby>",
                "cleanWord": "飼い主",
                "reading": "かいぬし",
                "meaning": "Chủ nuôi (Danh từ)"
            },
            {
                "word": "わかる",
                "cleanWord": "わかる",
                "reading": "わかる",
                "meaning": "Biết, hiểu ra (Động từ)"
            }
        ],
        "Vì hồ nước này có hình quả tim nên nó được gọi là Hồ Tình Yêu.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜から・ことから</span>",
                "cleanWord": "から・ことから",
                "reading": "から・ことから",
                "meaning": "Vì, từ việc... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>湖<rt>みずうみ</rt></ruby>",
                "cleanWord": "湖",
                "reading": "みずうみ",
                "meaning": "Hồ nước (Danh từ)"
            },
            {
                "word": "<ruby>形<rt>かたち</rt></ruby>",
                "cleanWord": "形",
                "reading": "かたち",
                "meaning": "Hình dáng (Danh từ)"
            },
            {
                "word": "<ruby>愛<rt>あい</rt></ruby>",
                "cleanWord": "愛",
                "reading": "あい",
                "meaning": "Tình yêu (Danh từ)"
            },
            {
                "word": "<ruby>呼<rt>よ</rt></ruby>ぶ",
                "cleanWord": "呼ぶ",
                "reading": "よぶ",
                "meaning": "Gọi, mời (Động từ)"
            }
        ],
        "Nhờ có bạn bè giúp đỡ mà tôi đã vượt qua được khoảng thời gian khó khăn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜おかげで / 〜せいで</span>",
                "cleanWord": "おかげで / 〜せいで",
                "reading": "おかげで / 〜せいで",
                "meaning": "Nhờ... (tốt) / Tại... (xấu) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>",
                "cleanWord": "友達",
                "reading": "ともだち",
                "meaning": "Bạn bè (Danh từ)"
            },
            {
                "word": "<ruby>助<rt>たす</rt></ruby>ける",
                "cleanWord": "助ける",
                "reading": "たすける",
                "meaning": "Giúp đỡ (Động từ)"
            },
            {
                "word": "<ruby>時<rt>じ</rt></ruby><ruby>期<rt>き</rt></ruby>",
                "cleanWord": "時期",
                "reading": "じき",
                "meaning": "Thời kỳ, giai đoạn (Danh từ)"
            },
            {
                "word": "<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>える",
                "cleanWord": "乗り越える",
                "reading": "のりこえる",
                "meaning": "Vượt qua (Động từ)"
            }
        ],
        "Tại xem phim đến khuya nên sáng nay tôi không thể dậy nổi.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜おかげで / 〜せいで</span>",
                "cleanWord": "おかげで / 〜せいで",
                "reading": "おかげで / 〜せいで",
                "meaning": "Nhờ... (tốt) / Tại... (xấu) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>夜<rt>よ</rt></ruby><ruby>更<rt>ふ</rt></ruby>かしする",
                "cleanWord": "夜更かしする",
                "reading": "よふかしする",
                "meaning": "Thức khuya (Động từ)"
            },
            {
                "word": "<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>",
                "cleanWord": "映画",
                "reading": "えいが",
                "meaning": "Bộ phim (Danh từ)"
            },
            {
                "word": "<ruby>今<rt>け</rt></ruby><ruby>朝<rt>さ</rt></ruby>",
                "cleanWord": "今朝",
                "reading": "けさ",
                "meaning": "Sáng nay (Danh từ)"
            },
            {
                "word": "<ruby>起<rt>お</rt></ruby>きる",
                "cleanWord": "起きる",
                "reading": "おきる",
                "meaning": "Thức dậy (Động từ)"
            }
        ],
        "Nhờ uống thuốc đều đặn nên bệnh của tôi đã khỏi hoàn toàn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜おかげで / 〜せいで</span>",
                "cleanWord": "おかげで / 〜せいで",
                "reading": "おかげで / 〜せいで",
                "meaning": "Nhờ... (tốt) / Tại... (xấu) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>薬<rt>くすり</rt></ruby>",
                "cleanWord": "薬",
                "reading": "くすり",
                "meaning": "Thuốc (Danh từ)"
            },
            {
                "word": "<ruby>飲<rt>の</rt></ruby>む",
                "cleanWord": "飲む",
                "reading": "のむ",
                "meaning": "Uống (Động từ)"
            },
            {
                "word": "<ruby>病<rt>びょう</rt></ruby><ruby>気<rt>き</rt></ruby>",
                "cleanWord": "病気",
                "reading": "びょうき",
                "meaning": "Bệnh tật, ốm đau (Danh từ)"
            },
            {
                "word": "<ruby>治<rt>なお</rt></ruby>る",
                "cleanWord": "治る",
                "reading": "なおる",
                "meaning": "Khỏi bệnh (Động từ)"
            }
        ],
        "Tại người đông quá nên tôi đã bị say xe buýt.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜おかげで / 〜せいで</span>",
                "cleanWord": "おかげで / 〜せいで",
                "reading": "おかげで / 〜せいで",
                "meaning": "Nhờ... (tốt) / Tại... (xấu) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>人<rt>ひと</rt></ruby>",
                "cleanWord": "人",
                "reading": "ひと",
                "meaning": "Người (Danh từ)"
            },
            {
                "word": "<ruby>多<rt>おお</rt></ruby>い",
                "cleanWord": "多い",
                "reading": "おおい",
                "meaning": "Nhiều (Tính từ đuôi い)"
            },
            {
                "word": "バス",
                "cleanWord": "バス",
                "reading": "バス",
                "meaning": "Xe buýt (Danh từ)"
            },
            {
                "word": "<ruby>酔<rt>よ</rt></ruby>う",
                "cleanWord": "酔う",
                "reading": "よう",
                "meaning": "Say xe, say sóng (Động từ)"
            }
        ],
        "Nhờ chiếc điện thoại thông minh này mà công việc của tôi trở nên tiện lợi hơn nhiều.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜おかげで / 〜せいで</span>",
                "cleanWord": "おかげで / 〜せいで",
                "reading": "おかげで / 〜せいで",
                "meaning": "Nhờ... (tốt) / Tại... (xấu) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "スマートフォン",
                "cleanWord": "スマートフォン",
                "reading": "スマートフォン",
                "meaning": "Điện thoại thông minh (Danh từ)"
            },
            {
                "word": "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>",
                "cleanWord": "仕事",
                "reading": "しごと",
                "meaning": "Công việc (Danh từ)"
            },
            {
                "word": "<ruby>便<rt>べん</rt></ruby><ruby>利<rt>り</rt></ruby>",
                "cleanWord": "便利",
                "reading": "べんり",
                "meaning": "Tiện lợi (Tính từ đuôi な)"
            }
        ],
        "Vì là đồ bạn thích nên hãy ăn nhiều vào nhé.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜のだから / 〜んだから</span>",
                "cleanWord": "のだから / 〜んだから",
                "reading": "のだから / 〜んだから",
                "meaning": "Vì là... / Bởi vì thực tế là... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>好<rt>す</rt></ruby>き",
                "cleanWord": "好き",
                "reading": "すき",
                "meaning": "Yêu thích (Tính từ đuôi な)"
            },
            {
                "word": "<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>",
                "cleanWord": "料理",
                "reading": "りょうり",
                "meaning": "Món ăn (Danh từ)"
            },
            {
                "word": "<ruby>遠<rt>えん</rt></ruby><ruby>慮<rt>りょ</rt></ruby>する",
                "cleanWord": "遠慮する",
                "reading": "えんりょする",
                "meaning": "Khách khí, ngần ngại (Động từ)"
            },
            {
                "word": "<ruby>食<rt>た</rt></ruby>べる",
                "cleanWord": "食べる",
                "reading": "たべる",
                "meaning": "Ăn (Động từ)"
            }
        ],
        "Đã cất công chuẩn bị rồi nên nhất định phải làm cho thành công.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜のだから / 〜んだから</span>",
                "cleanWord": "のだから / 〜んだから",
                "reading": "のだから / 〜んだから",
                "meaning": "Vì là... / Bởi vì thực tế là... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "せっかく",
                "cleanWord": "せっかく",
                "reading": "せっかく",
                "meaning": "Đã cất công, bõ công (Phó từ)"
            },
            {
                "word": "<ruby>準<rt>じゅん</rt></ruby><ruby>備<rt>び</rt></ruby>する",
                "cleanWord": "準備する",
                "reading": "じゅんびする",
                "meaning": "Chuẩn bị (Động từ)"
            },
            {
                "word": "<ruby>絶<rt>ぜっ</rt></ruby><ruby>対<rt>たい</rt></ruby>に",
                "cleanWord": "絶対に",
                "reading": "ぜったいに",
                "meaning": "Nhất định, tuyệt đối (Phó từ)"
            },
            {
                "word": "<ruby>成<rt>せい</rt></ruby><ruby>功<rt>こう</rt></ruby>する",
                "cleanWord": "成功する",
                "reading": "せいこうする",
                "meaning": "Thành công (Động từ)"
            }
        ],
        "Vì đây là vấn đề của chính bạn nên bạn phải tự mình suy nghĩ.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜のだから / 〜んだから</span>",
                "cleanWord": "のだから / 〜んだから",
                "reading": "のだから / 〜んだから",
                "meaning": "Vì là... / Bởi vì thực tế là... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>自<rt>じ</rt></ruby><ruby>身<rt>しん</rt></ruby>",
                "cleanWord": "自身",
                "reading": "じしん",
                "meaning": "Bản thân (Danh từ)"
            },
            {
                "word": "<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>",
                "cleanWord": "問題",
                "reading": "もんだい",
                "meaning": "Vấn đề (Danh từ)"
            },
            {
                "word": "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>",
                "cleanWord": "自分",
                "reading": "じぶん",
                "meaning": "Tự mình, bản thân (Danh từ)"
            },
            {
                "word": "<ruby>考<rt>かんが</rt></ruby>える",
                "cleanWord": "考える",
                "reading": "かんがえる",
                "meaning": "Suy nghĩ (Động từ)"
            }
        ],
        "Vì thời tiết đẹp thế này nên chúng ta đi dạo một chút đi.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜のだから / 〜んだから</span>",
                "cleanWord": "のだから / 〜んだから",
                "reading": "のだから / 〜んだから",
                "meaning": "Vì là... / Bởi vì thực tế là... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "いい",
                "cleanWord": "いい",
                "reading": "いい",
                "meaning": "Tốt, đẹp (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>天<rt>てん</rt></ruby><ruby>気<rt>き</rt></ruby>",
                "cleanWord": "天気",
                "reading": "てんき",
                "meaning": "Thời tiết (Danh từ)"
            },
            {
                "word": "<ruby>散<rt>さん</rt></ruby><ruby>歩<rt>ぽ</rt></ruby>する",
                "cleanWord": "散歩する",
                "reading": "さんぽする",
                "meaning": "Đi dạo (Động từ)"
            },
            {
                "word": "<ruby>行<rt>い</rt></ruby>く",
                "cleanWord": "行く",
                "reading": "いく",
                "meaning": "Đi (Động từ)"
            }
        ],
        "Bởi vì đã hứa rồi nên dù có khó khăn tôi cũng sẽ thực hiện.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜のだから / 〜んだから</span>",
                "cleanWord": "のだから / 〜んだから",
                "reading": "のだから / 〜んだから",
                "meaning": "Vì là... / Bởi vì thực tế là... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>約<rt>やく</rt></ruby><ruby>束<rt>そく</rt></ruby>する",
                "cleanWord": "約束する",
                "reading": "やくそくする",
                "meaning": "Hứa hẹn (Động từ)"
            },
            {
                "word": "<ruby>大<rt>たい</rt></ruby><ruby>変<rt>へん</rt></ruby>",
                "cleanWord": "大変",
                "reading": "たいへん",
                "meaning": "Vất vả, khó khăn (Tính từ đuôi な)"
            },
            {
                "word": "<ruby>実<rt>じっ</rt></ruby><ruby>行<rt>こう</rt></ruby>する",
                "cleanWord": "実行する",
                "reading": "じっこうする",
                "meaning": "Thực hiện, tiến hành (Động từ)"
            }
        ],
        "Nếu là tiếng Nhật thì tôi có thể nói được một chút.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜なら / のなら</span>",
                "cleanWord": "なら / のなら",
                "reading": "なら / のなら",
                "meaning": "Nếu... thì... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>語<rt>ご</rt></ruby>",
                "cleanWord": "日本語",
                "reading": "にほんご",
                "meaning": "Tiếng Nhật (Danh từ)"
            },
            {
                "word": "<ruby>少<rt>すこ</rt></ruby>し",
                "cleanWord": "少し",
                "reading": "すこし",
                "meaning": "Một chút (Phó từ)"
            },
            {
                "word": "<ruby>話<rt>はな</rt></ruby>す",
                "cleanWord": "話す",
                "reading": "はなす",
                "meaning": "Nói chuyện (Động từ)"
            }
        ],
        "Nếu không hiểu thì hãy hỏi thầy giáo bất cứ lúc nào nhé.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜なら / のなら</span>",
                "cleanWord": "なら / のなら",
                "reading": "なら / のなら",
                "meaning": "Nếu... thì... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>分<rt>わ</rt></ruby>かる",
                "cleanWord": "分かる",
                "reading": "わかる",
                "meaning": "Hiểu (Động từ)"
            },
            {
                "word": "いつでも",
                "cleanWord": "いつでも",
                "reading": "いつでも",
                "meaning": "Bất cứ lúc nào (Phó từ)"
            },
            {
                "word": "<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>",
                "cleanWord": "先生",
                "reading": "せんせい",
                "meaning": "Thầy cô giáo (Danh từ)"
            },
            {
                "word": "<ruby>聞<rt>き</rt></ruby>く",
                "cleanWord": "聞く",
                "reading": "きく",
                "meaning": "Hỏi, nghe (Động từ)"
            }
        ],
        "Nếu mua quà lưu niệm thì cửa hàng đằng kia tốt đấy.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜なら / のなら</span>",
                "cleanWord": "なら / のなら",
                "reading": "なら / のなら",
                "meaning": "Nếu... thì... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "お<ruby>土<rt>み</rt></ruby><ruby>産<rt>やげ</rt></ruby>",
                "cleanWord": "お土産",
                "reading": "おみやげ",
                "meaning": "Quà lưu niệm (Danh từ)"
            },
            {
                "word": "<ruby>買<rt>か</rt></ruby>う",
                "cleanWord": "買う",
                "reading": "かう",
                "meaning": "Mua (Động từ)"
            },
            {
                "word": "<ruby>店<rt>みせ</rt></ruby>",
                "cleanWord": "店",
                "reading": "みせ",
                "meaning": "Cửa hàng, tiệm (Danh từ)"
            },
            {
                "word": "いい",
                "cleanWord": "いい",
                "reading": "いい",
                "meaning": "Tốt, đẹp (Tính từ đuôi い)"
            }
        ],
        "Nếu bạn đi siêu thị thì mua giúp tôi một hộp sữa bò nhé.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜なら / のなら</span>",
                "cleanWord": "なら / のなら",
                "reading": "なら / のなら",
                "meaning": "Nếu... thì... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "スーパー",
                "cleanWord": "スーパー",
                "reading": "スーパー",
                "meaning": "Siêu thị (Danh từ)"
            },
            {
                "word": "<ruby>行<rt>い</rt></ruby>く",
                "cleanWord": "行く",
                "reading": "いく",
                "meaning": "Đi (Động từ)"
            },
            {
                "word": "<ruby>牛<rt>ぎゅう</rt></ruby><ruby>乳<rt>にゅう</rt></ruby>",
                "cleanWord": "牛乳",
                "reading": "ぎゅうにゅう",
                "meaning": "Sữa bò (Danh từ)"
            },
            {
                "word": "<ruby>買<rt>か</rt></ruby>う",
                "cleanWord": "買う",
                "reading": "かう",
                "meaning": "Mua (Động từ)"
            }
        ],
        "Nếu có thời gian rảnh thì chúng ta cùng đi uống cà phê nhé.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜なら / のなら</span>",
                "cleanWord": "なら / のなら",
                "reading": "なら / のなら",
                "meaning": "Nếu... thì... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>",
                "cleanWord": "時間",
                "reading": "じかん",
                "meaning": "Thời gian (Danh từ)"
            },
            {
                "word": "ある",
                "cleanWord": "ある",
                "reading": "ある",
                "meaning": "Có (Động từ)"
            },
            {
                "word": "コーヒー",
                "cleanWord": "コーヒー",
                "reading": "コーヒー",
                "meaning": "Cà phê (Danh từ)"
            },
            {
                "word": "<ruby>飲<rt>の</rt></ruby>む",
                "cleanWord": "飲む",
                "reading": "のむ",
                "meaning": "Uống (Động từ)"
            }
        ],
        "Nếu cứ chơi game suốt thế này thì mắt sẽ kém đi đấy.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ては / のでは</span>",
                "cleanWord": "ては / のでは",
                "reading": "ては / のでは",
                "meaning": "Nếu... thì sẽ... (kết quả tiêu cực) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "ゲーム",
                "cleanWord": "ゲーム",
                "reading": "ゲーム",
                "meaning": "Trò chơi điện tử, game (Danh từ)"
            },
            {
                "word": "<ruby>目<rt>め</rt></ruby>",
                "cleanWord": "目",
                "reading": "め",
                "meaning": "Mắt (Danh từ)"
            },
            {
                "word": "<ruby>悪<rt>わる</rt></ruby>い",
                "cleanWord": "悪い",
                "reading": "わるい",
                "meaning": "Xấu, kém (Tính từ đuôi い)"
            }
        ],
        "Lười biếng như vậy thì không thể giỏi tiếng Nhật được đâu.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ては / のでは</span>",
                "cleanWord": "ては / のでは",
                "reading": "ては / のでは",
                "meaning": "Nếu... thì sẽ... (kết quả tiêu cực) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>怠<rt>なま</rt></ruby>ける",
                "cleanWord": "怠ける",
                "reading": "なまける",
                "meaning": "Lười biếng (Động từ)"
            },
            {
                "word": "<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>語<rt>ご</rt></ruby>",
                "cleanWord": "日本語",
                "reading": "にほんご",
                "meaning": "Tiếng Nhật (Danh từ)"
            },
            {
                "word": "<ruby>上<rt>じょう</rt></ruby><ruby>手<rt>ず</rt></ruby>",
                "cleanWord": "上手",
                "reading": "じょうず",
                "meaning": "Giỏi, thành thạo (Tính từ đuôi な)"
            }
        ],
        "Phòng bừa bộn thế này thì không thể mời bạn bè đến được.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ては / のでは</span>",
                "cleanWord": "ては / のでは",
                "reading": "ては / のでは",
                "meaning": "Nếu... thì sẽ... (kết quả tiêu cực) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>散<rt>ち</rt></ruby>らかる",
                "cleanWord": "散らかる",
                "reading": "ちらかる",
                "meaning": "Bừa bộn, lộn xộn (Động từ)"
            },
            {
                "word": "<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>",
                "cleanWord": "友達",
                "reading": "ともだち",
                "meaning": "Bạn bè (Danh từ)"
            },
            {
                "word": "<ruby>呼<rt>よ</rt></ruby>ぶ",
                "cleanWord": "呼ぶ",
                "reading": "よぶ",
                "meaning": "Gọi, mời (Động từ)"
            }
        ],
        "Nếu không có bằng lái xe thì công việc này sẽ rất khó khăn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ては / のでは</span>",
                "cleanWord": "ては / のでは",
                "reading": "ては / のでは",
                "meaning": "Nếu... thì sẽ... (kết quả tiêu cực) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>免<rt>めん</rt></ruby><ruby>許<rt>きょ</rt></ruby>",
                "cleanWord": "免許",
                "reading": "めんきょ",
                "meaning": "Bằng lái, giấy phép (Danh từ)"
            },
            {
                "word": "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>",
                "cleanWord": "仕事",
                "reading": "しごと",
                "meaning": "Công việc (Danh từ)"
            },
            {
                "word": "<ruby>困<rt>こま</rt></ruby>る",
                "cleanWord": "困る",
                "reading": "こまる",
                "meaning": "Khó khăn, bối rối (Động từ)"
            }
        ],
        "Cứ hay quên như thế thì sẽ gây phiền phức cho người khác đấy.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ては / のでは</span>",
                "cleanWord": "ては / のでは",
                "reading": "ては / のでは",
                "meaning": "Nếu... thì sẽ... (kết quả tiêu cực) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>忘<rt>わす</rt></ruby>れっぽい",
                "cleanWord": "忘れっぽい",
                "reading": "わすれっぽい",
                "meaning": "Hay quên, đãng trí (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>人<rt>ひと</rt></ruby>",
                "cleanWord": "人",
                "reading": "ひと",
                "meaning": "Người (Danh từ)"
            },
            {
                "word": "<ruby>迷<rt>めい</rt></ruby><ruby>惑<rt>わく</rt></ruby>",
                "cleanWord": "迷惑",
                "reading": "めいわく",
                "meaning": "Phiền hà, làm phiền (Danh từ / Tính từ đuôi な)"
            },
            {
                "word": "かける",
                "cleanWord": "かける",
                "reading": "かける",
                "meaning": "Gọi (điện thoại) (Động từ)"
            }
        ],
        "Chỉ cần có sức khỏe thì việc gì cũng có thể vượt qua được.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜さえ〜ば / たら</span>",
                "cleanWord": "さえ〜ば / たら",
                "reading": "さえ〜ば / たら",
                "meaning": "Chỉ cần... là... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>健<rt>けん</rt></ruby><ruby>康<rt>こう</rt></ruby>",
                "cleanWord": "健康",
                "reading": "けんこう",
                "meaning": "Sức khỏe (Danh từ)"
            },
            {
                "word": "ある",
                "cleanWord": "ある",
                "reading": "ある",
                "meaning": "Có (Động từ)"
            },
            {
                "word": "<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>える",
                "cleanWord": "乗り越える",
                "reading": "のりこえる",
                "meaning": "Vượt qua (Động từ)"
            }
        ],
        "Chỉ cần hiểu được ý nghĩa của từ này là đọc được cả bài văn.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜さえ〜ば / たら</span>",
                "cleanWord": "さえ〜ば / たら",
                "reading": "さえ〜ば / たら",
                "meaning": "Chỉ cần... là... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>",
                "cleanWord": "言葉",
                "reading": "ことば",
                "meaning": "Ngôn ngữ, từ ngữ (Danh từ)"
            },
            {
                "word": "<ruby>意<rt>い</rt></ruby><ruby>味<rt>み</rt></ruby>",
                "cleanWord": "意味",
                "reading": "いみ",
                "meaning": "Ý nghĩa (Danh từ)"
            },
            {
                "word": "<ruby>文<rt>ぶん</rt></ruby><ruby>章<rt>しょう</rt></ruby>",
                "cleanWord": "文章",
                "reading": "ぶんしょう",
                "meaning": "Đoạn văn, bài văn (Danh từ)"
            },
            {
                "word": "<ruby>読<rt>よ</rt></ruby>む",
                "cleanWord": "読む",
                "reading": "よむ",
                "meaning": "Đọc (Động từ)"
            }
        ],
        "Chỉ cần nói ra sự thật thì cảnh sát sẽ không bắt bạn đâu.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜さえ〜ば / たら</span>",
                "cleanWord": "さえ〜ば / たら",
                "reading": "さえ〜ば / たら",
                "meaning": "Chỉ cần... là... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>",
                "cleanWord": "本当",
                "reading": "ほんとう",
                "meaning": "Sự thật (Danh từ)"
            },
            {
                "word": "<ruby>話<rt>はな</rt></ruby>す",
                "cleanWord": "話す",
                "reading": "はなす",
                "meaning": "Nói chuyện (Động từ)"
            },
            {
                "word": "<ruby>警<rt>けい</rt></ruby><ruby>察<rt>さつ</rt></ruby>",
                "cleanWord": "警察",
                "reading": "けいさつ",
                "meaning": "Cảnh sát (Danh từ)"
            },
            {
                "word": "<ruby>捕<rt>つか</rt></ruby>まえる",
                "cleanWord": "捕まえる",
                "reading": "つかまえる",
                "meaning": "Bắt giữ, tóm lấy (Động từ)"
            }
        ],
        "Chỉ cần yên tĩnh thì phòng nào tôi cũng thích.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜さえ〜ば / たら</span>",
                "cleanWord": "さえ〜ば / たら",
                "reading": "さえ〜ば / たら",
                "meaning": "Chỉ cần... là... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>静<rt>しず</rt></ruby>か",
                "cleanWord": "静か",
                "reading": "しずか",
                "meaning": "Yên tĩnh (Tính từ đuôi な)"
            },
            {
                "word": "ある",
                "cleanWord": "ある",
                "reading": "ある",
                "meaning": "Có (Động từ)"
            },
            {
                "word": "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>",
                "cleanWord": "部屋",
                "reading": "へや",
                "meaning": "Căn phòng (Danh từ)"
            },
            {
                "word": "いい",
                "cleanWord": "いい",
                "reading": "いい",
                "meaning": "Tốt, đẹp (Tính từ đuôi い)"
            }
        ],
        "Chỉ cần cố gắng hết sức thì dù kết quả thế nào cũng không hối tiếc.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜さえ〜ば / たら</span>",
                "cleanWord": "さえ〜ば / たら",
                "reading": "さえ〜ば / たら",
                "meaning": "Chỉ cần... là... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>全<rt>ぜん</rt></ruby><ruby>力<rt>りょく</rt></ruby>",
                "cleanWord": "全力",
                "reading": "ぜんりょく",
                "meaning": "Toàn lực, hết sức (Danh từ)"
            },
            {
                "word": "<ruby>出<rt>だ</rt></ruby>す",
                "cleanWord": "出す",
                "reading": "だす",
                "meaning": "Đưa ra, dốc hết (Động từ)"
            },
            {
                "word": "<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby>",
                "cleanWord": "結果",
                "reading": "けっか",
                "meaning": "Kết quả (Danh từ)"
            },
            {
                "word": "<ruby>後<rt>こう</rt></ruby><ruby>悔<rt>かい</rt></ruby>する",
                "cleanWord": "後悔する",
                "reading": "こうかいする",
                "meaning": "Hối hận, tiếc nuối (Động từ)"
            }
        ],
        "Cho dù có bị mọi người chê cười, tôi vẫn sẽ theo đuổi ước mơ.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜たとえ〜ても</span>",
                "cleanWord": "たとえ〜ても",
                "reading": "たとえ〜ても",
                "meaning": "Cho dù... đi chăng nữa... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "みんな",
                "cleanWord": "みんな",
                "reading": "みんな",
                "meaning": "Mọi người (Danh từ)"
            },
            {
                "word": "<ruby>笑<rt>わら</rt></ruby>う",
                "cleanWord": "笑う",
                "reading": "わらう",
                "meaning": "Cười, chê cười (Động từ)"
            },
            {
                "word": "<ruby>夢<rt>ゆめ</rt></ruby>",
                "cleanWord": "夢",
                "reading": "ゆめ",
                "meaning": "Giấc mơ, ước mơ (Danh từ)"
            },
            {
                "word": "<ruby>追<rt>お</rt></ruby>いかける",
                "cleanWord": "追いかける",
                "reading": "おいかける",
                "meaning": "Đuổi theo, theo đuổi (Động từ)"
            }
        ],
        "Cho dù không có tiền, tôi vẫn muốn được đi học đại học.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜たとえ〜ても</span>",
                "cleanWord": "たとえ〜ても",
                "reading": "たとえ〜ても",
                "meaning": "Cho dù... đi chăng nữa... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "お<ruby>金<rt>かね</rt></ruby>",
                "cleanWord": "お金",
                "reading": "おかね",
                "meaning": "Tiền bạc (Danh từ)"
            },
            {
                "word": "<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>",
                "cleanWord": "大学",
                "reading": "だいがく",
                "meaning": "Trường đại học (Danh từ)"
            },
            {
                "word": "<ruby>進<rt>しん</rt></ruby><ruby>学<rt>がく</rt></ruby>する",
                "cleanWord": "進学する",
                "reading": "しんがくする",
                "meaning": "Học lên đại học (Động từ)"
            }
        ],
        "Cho dù chỉ có 1% cơ hội, tôi cũng sẽ thử sức.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜たとえ〜ても</span>",
                "cleanWord": "たとえ〜ても",
                "reading": "たとえ〜ても",
                "meaning": "Cho dù... đi chăng nữa... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>可<rt>か</rt></ruby><ruby>能<rt>のう</rt></ruby><ruby>性<rt>せい</rt></ruby>",
                "cleanWord": "可能性",
                "reading": "かのうせい",
                "meaning": "Khả năng, xác suất (Danh từ)"
            },
            {
                "word": "<ruby>挑<rt>ちょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>する",
                "cleanWord": "挑戦する",
                "reading": "ちょうせんする",
                "meaning": "Thử thách, thử sức (Động từ)"
            }
        ],
        "Cho dù kết quả thế nào, tôi cũng sẽ không bao giờ hối hận.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜たとえ〜ても</span>",
                "cleanWord": "たとえ〜ても",
                "reading": "たとえ〜ても",
                "meaning": "Cho dù... đi chăng nữa... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby>",
                "cleanWord": "結果",
                "reading": "けっか",
                "meaning": "Kết quả (Danh từ)"
            },
            {
                "word": "<ruby>決<rt>けっ</rt></ruby>して",
                "cleanWord": "決して",
                "reading": "けっして",
                "meaning": "Tuyệt đối (không), nhất quyết (Phó từ)"
            },
            {
                "word": "<ruby>後<rt>こう</rt></ruby><ruby>悔<rt>かい</rt></ruby>する",
                "cleanWord": "後悔する",
                "reading": "こうかいする",
                "meaning": "Hối hận, tiếc nuối (Động từ)"
            }
        ],
        "Cho dù một mình ở nơi đất khách, tôi vẫn sẽ mạnh mẽ sống tốt.": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜たとえ〜ても</span>",
                "cleanWord": "たとえ〜ても",
                "reading": "たとえ〜ても",
                "meaning": "Cho dù... đi chăng nữa... (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>外<rt>がい</rt></ruby><ruby>国<rt>こく</rt></ruby>",
                "cleanWord": "外国",
                "reading": "がいこく",
                "meaning": "Nước ngoài (Danh từ)"
            },
            {
                "word": "<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>",
                "cleanWord": "一人",
                "reading": "ひとり",
                "meaning": "Một mình, một người (Danh từ)"
            },
            {
                "word": "<ruby>強<rt>つよ</rt></ruby>い",
                "cleanWord": "強い",
                "reading": "つよい",
                "meaning": "Mạnh mẽ (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>生<rt>い</rt></ruby>きる",
                "cleanWord": "生きる",
                "reading": "いきる",
                "meaning": "Sống, sinh tồn (Động từ)"
            }
        ],
        "Nếu nói ra sớm hơn thì mọi chuyện đã không rắc rối thế này rồi, thế mà...": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ば / 〜たら / 〜なら（〜のに）</span>",
                "cleanWord": "ば / 〜たら / 〜なら（〜のに）",
                "reading": "ば / 〜たら / 〜なら（〜のに）",
                "meaning": "Nếu... thì đã... thế mà (Giả định trái thực tế, thể hiện sự tiếc nuối) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "もっと",
                "cleanWord": "もっと",
                "reading": "もっと",
                "meaning": "Hơn nữa (Phó từ)"
            },
            {
                "word": "<ruby>早<rt>はや</rt></ruby>く",
                "cleanWord": "早く",
                "reading": "はやく",
                "meaning": "Sớm, nhanh chóng (Phó từ)"
            },
            {
                "word": "<ruby>言<rt>い</rt></ruby>う",
                "cleanWord": "言う",
                "reading": "いう",
                "meaning": "Nói (Động từ)"
            },
            {
                "word": "<ruby>大<rt>たい</rt></ruby><ruby>変<rt>へん</rt></ruby>",
                "cleanWord": "大変",
                "reading": "たいへん",
                "meaning": "Vất vả, khó khăn (Tính từ đuôi な)"
            }
        ],
        "Nếu có bản đồ thì đã không bị lạc đường rồi, thế mà...": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ば / 〜たら / 〜なら（〜のに）</span>",
                "cleanWord": "ば / 〜たら / 〜なら（〜のに）",
                "reading": "ば / 〜たら / 〜なら（〜のに）",
                "meaning": "Nếu... thì đã... thế mà (Giả định trái thực tế, thể hiện sự tiếc nuối) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>地<rt>ち</rt></ruby><ruby>図<rt>ず</rt></ruby>",
                "cleanWord": "地図",
                "reading": "ちず",
                "meaning": "Bản đồ (Danh từ)"
            },
            {
                "word": "<ruby>道<rt>みち</rt></ruby>",
                "cleanWord": "道",
                "reading": "みち",
                "meaning": "Con đường (Danh từ)"
            },
            {
                "word": "<ruby>迷<rt>まよ</rt></ruby>う",
                "cleanWord": "迷う",
                "reading": "まよう",
                "meaning": "Lạc (đường), phân vân (Động từ)"
            }
        ],
        "Nếu không uống rượu thì đã có thể tự lái xe về nhà rồi, thế mà...": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ば / 〜たら / 〜なら（〜のに）</span>",
                "cleanWord": "ば / 〜たら / 〜なら（〜のに）",
                "reading": "ば / 〜たら / 〜なら（〜のに）",
                "meaning": "Nếu... thì đã... thế mà (Giả định trái thực tế, thể hiện sự tiếc nuối) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "お<ruby>酒<rt>さけ</rt></ruby>",
                "cleanWord": "お酒",
                "reading": "おさけ",
                "meaning": "Rượu (Danh từ)"
            },
            {
                "word": "<ruby>飲<rt>の</rt></ruby>む",
                "cleanWord": "飲む",
                "reading": "のむ",
                "meaning": "Uống (Động từ)"
            },
            {
                "word": "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>",
                "cleanWord": "自分",
                "reading": "じぶん",
                "meaning": "Tự mình, bản thân (Danh từ)"
            },
            {
                "word": "<ruby>運<rt>うん</rt></ruby><ruby>転<rt>てん</rt></ruby>する",
                "cleanWord": "運転する",
                "reading": "うんてんする",
                "meaning": "Lái xe (Động từ)"
            }
        ],
        "Nếu thời tiết đẹp thì đã có thể chụp được nhiều ảnh đẹp rồi, thế mà...": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ば / 〜たら / 〜なら（〜のに）</span>",
                "cleanWord": "ば / 〜たら / 〜なら（〜のに）",
                "reading": "ば / 〜たら / 〜なら（〜のに）",
                "meaning": "Nếu... thì đã... thế mà (Giả định trái thực tế, thể hiện sự tiếc nuối) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>天<rt>てん</rt></ruby><ruby>気<rt>き</rt></ruby>",
                "cleanWord": "天気",
                "reading": "てんき",
                "meaning": "Thời tiết (Danh từ)"
            },
            {
                "word": "<ruby>良<rt>よ</rt></ruby>い",
                "cleanWord": "良い",
                "reading": "よい",
                "meaning": "Tốt, đẹp (Tính từ đuôi い)"
            },
            {
                "word": "<ruby>写<rt>しゃ</rt></ruby><ruby>真<rt>しん</rt></ruby>",
                "cleanWord": "写真",
                "reading": "しゃしん",
                "meaning": "Bức ảnh (Danh từ)"
            },
            {
                "word": "<ruby>撮<rt>と</rt></ruby>る",
                "cleanWord": "撮る",
                "reading": "とる",
                "meaning": "Chụp ảnh (Động từ)"
            }
        ],
        "Nếu tôi biết chuyện đó thì tôi đã báo cho bạn rồi, thế mà...": [
            {
                "word": "<span style='color: #facc15; font-weight: bold;'>〜ば / 〜たら / 〜なら（〜のに）</span>",
                "cleanWord": "ば / 〜たら / 〜なら（〜のに）",
                "reading": "ば / 〜たら / 〜なら（〜のに）",
                "meaning": "Nếu... thì đã... thế mà (Giả định trái thực tế, thể hiện sự tiếc nuối) (Mẫu ngữ pháp trọng tâm)"
            },
            {
                "word": "<ruby>知<rt>し</rt></ruby>る",
                "cleanWord": "知る",
                "reading": "しる",
                "meaning": "Biết (Động từ)"
            },
            {
                "word": "あなた",
                "cleanWord": "あなた",
                "reading": "あなた",
                "meaning": "Bạn (Đại từ)"
            },
            {
                "word": "<ruby>教<rt>おし</rt></ruby>える",
                "cleanWord": "教える",
                "reading": "おしえる",
                "meaning": "Dạy, chỉ bảo, cho biết (Động từ)"
            }
        ]
    };

    // 6. HÀM TRÍCH XUẤT TỪ VỰNG GỢI Ý BÀI DỊCH (TRANSLATION HINTS)
    function getTranslationVocabHints(ex, g) {
        if (!ex || !ex.jp) return [];

        // Check if there is a preset for this translation sentence
        if (ex.vi && TRANSLATION_PRESETS) {
            const cleanVI = ex.vi.trim();
            if (TRANSLATION_PRESETS[cleanVI]) {
                return TRANSLATION_PRESETS[cleanVI];
            }
            // Fuzzy search by substring
            for (const [k, v] of Object.entries(TRANSLATION_PRESETS)) {
                if (cleanVI.includes(k) || k.includes(cleanVI)) {
                    return v;
                }
            }
        }

        const hints = [];
        const seenWords = new Set();

        // 1. Mẫu ngữ pháp trọng tâm
        if (g && g.structure) {
            const cleanStruct = g.structure.replace(/〜|~/g, '').trim();
            hints.push({
                word: `<span style="color: #facc15; font-weight: bold;">${g.structure}</span>`,
                cleanWord: cleanStruct,
                reading: cleanStruct,
                meaning: `${g.meaning || 'Mẫu ngữ pháp trọng tâm'} (Cấu trúc đang học)`
            });
            seenWords.add(cleanStruct);
        }

        // 2. Bóc tách thẻ <ruby> kèm okurigana Hiragana liền kề (chuẩn hóa về dạng nguyên thể)
        const rubyPattern = /<ruby>([^<]+)<rt>([^<]+)<\/rt><\/ruby>([ぁ-んァ-ヶ]*)/g;
        let match;
        while ((match = rubyPattern.exec(ex.jp)) !== null) {
            const kanjiPart = match[1];
            const readingPart = match[2];
            let okurigana = match[3] || '';

            // Cắt bỏ đuôi chia thể và mẫu ngữ pháp bám theo (ví dụ: をしているところ, ないうちに, ませんでした)
            okurigana = okurigana.replace(/(をしているところ|ているところ|ている|ていた|ました|ません|なかった|なくて|ないで|ところ|うちに|あいだ|とおり|から|ので).*$/, '');

            let fullKanji = kanjiPart + okurigana;
            let fullReading = readingPart + okurigana;
            let fullRubyTag = okurigana ? `<ruby>${kanjiPart}<rt>${readingPart}</rt></ruby>${okurigana}` : `<ruby>${kanjiPart}<rt>${readingPart}</rt></ruby>`;

            // Tra cứu từ điển dạng nguyên thể
            let meaning = DICT[fullKanji];
            if (!meaning) {
                meaning = DICT[kanjiPart];
                if (meaning) {
                    fullKanji = kanjiPart;
                    fullReading = readingPart;
                    fullRubyTag = `<ruby>${kanjiPart}<rt>${readingPart}</rt></ruby>`;
                }
            }
            if (!meaning) {
                // Thử tìm động từ nguyên mẫu trong DICT
                for (const [vk, vm] of Object.entries(DICT)) {
                    if (vk.length >= 2 && (fullKanji.startsWith(vk.slice(0, -1)) || vk.startsWith(kanjiPart))) {
                        fullKanji = vk;
                        fullRubyTag = `<ruby>${kanjiPart}<rt>${readingPart}</rt></ruby>${vk.slice(kanjiPart.length)}`;
                        meaning = vm;
                        break;
                    }
                }
            }
            if (!meaning) {
                meaning = resolveOptionMeaning(fullKanji, g, ex);
            }

            if (seenWords.has(fullKanji)) continue;
            seenWords.add(fullKanji);

            hints.push({
                word: fullRubyTag,
                cleanWord: fullKanji,
                reading: fullReading,
                meaning: meaning || 'Từ vựng quan trọng'
            });
        }

        // 3. Tra cứu thêm các từ Katakana hoặc từ vựng Hiragana đặc biệt
        const katakanaPattern = /([ァ-ヶー]{2,})/g;
        let kMatch;
        while ((kMatch = katakanaPattern.exec(ex.jp)) !== null) {
            const word = kMatch[1];
            if (seenWords.has(word)) continue;
            seenWords.add(word);
            const m = DICT[word] || 'Từ mượn / Katakana';
            hints.push({
                word: `<strong style="color: #67e8f9;">${word}</strong>`,
                cleanWord: word,
                reading: word,
                meaning: m
            });
        }

        return hints;
    }

    // 7. RENDER HTML KHỐI GIẢI THÍCH TRẮC NGHIỆM
    function renderMCQExplanationHtml(ex, g) {
        const data = getMCQExplanation(ex, g);

        let optionsRowsHtml = data.options.map(item => `
            <div class="exp-opt-item ${item.isCorrect ? 'is-correct' : ''}">
                <div class="exp-opt-badge">${item.index}</div>
                <div class="exp-opt-content">
                    <div class="exp-opt-word">${item.rawText} ${item.isCorrect ? '<span class="correct-tag"><i class="fa-solid fa-check"></i> Đáp án đúng</span>' : ''}</div>
                    <div class="exp-opt-meaning"><i class="fa-solid fa-arrow-right"></i> ${item.meaning}</div>
                </div>
            </div>
        `).join('');

        return `
            <div class="exercise-explanation-panel glass-panel">
                <div class="exp-header">
                    <span class="exp-badge text-neon-cyan"><i class="fa-solid fa-list-check"></i> NGHĨA 4 LỰA CHỌN</span>
                </div>
                <div class="exp-options-grid">
                    ${optionsRowsHtml}
                </div>
                <div class="exp-reason-box mt-2">
                    <div class="exp-reason-title text-neon-green">
                        <i class="fa-solid fa-circle-check"></i> <strong>GIẢI THÍCH ĐÁP ÁN ĐÚNG (LỰA CHỌN ${data.correctIndex}):</strong>
                    </div>
                    <div class="exp-reason-body">
                        ${data.reason}
                    </div>
                </div>
            </div>
        `;
    }

    // 8. RENDER HTML KHỐI GỢI Ý TỪ VỰNG BÀI DỊCH
    function renderTranslationHintsHtml(ex, g) {
        const hints = getTranslationVocabHints(ex, g);

        if (!hints || hints.length === 0) {
            return `
                <div class="translation-hints-panel glass-panel">
                    <div class="text-secondary"><i class="fa-solid fa-circle-info"></i> Hãy vận dụng mẫu ngữ pháp <strong>${g ? g.structure : ''}</strong> để hoàn thành câu dịch.</div>
                </div>
            `;
        }

        let chipsHtml = hints.map(h => `
            <div class="vocab-hint-chip">
                <span class="vh-word">${h.word}</span>
                <span class="vh-colon">:</span>
                <span class="vh-meaning">${h.meaning}</span>
            </div>
        `).join('');

        return `
            <div class="translation-hints-panel glass-panel">
                <div class="vh-header text-neon-yellow">
                    <i class="fa-solid fa-lightbulb"></i> <strong>GỢI Ý TỪ VỰNG CHO CÂU DỊCH:</strong>
                </div>
                <div class="vocab-hints-grid">
                    ${chipsHtml}
                </div>
            </div>
        `;
    }

    return {
        DICT,
        PARTICLES,
        GRAMMAR_RULES,
        resolveOptionMeaning,
        getMCQExplanation,
        getTranslationVocabHints,
        renderMCQExplanationHtml,
        renderTranslationHintsHtml
    };
})();
