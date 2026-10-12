// ==========================================================================
// NIHONGO SENSEI - DOKKAI (READING COMPREHENSION) MODULE
// Quản lý và giảng dạy Đọc hiểu N3 (JLPT N3 Dokkai)
// ==========================================================================

const DOKKAI_STORAGE_DONE_KEY = 'nihongo_dokkai_completed_lessons';

// Kho dữ liệu Đọc Hiểu N3 (Bao gồm đầy đủ 5 dạng bài)
const dokkaiDataset = {
    "N3": {
        "dientu": [
            {
                id: "dokkai-n3-dientu-01",
                lessonNumber: 1,
                title: "しゃべる自動販売機 (Máy bán hàng tự động biết nói)",
                timeLimit: 360, // 6 phút
                passage: `
                    <p>みなさんは、<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>がしゃべったと<ruby>聞<rt>き</rt></ruby>いたら、<ruby>信<rt>しん</rt></ruby>じられますか。<ruby>ほとんど<rt></rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>がしゃべるはずはないと<ruby>言<rt>い</rt></ruby>って、<ruby>笑<rt>わら</rt></ruby>うでしょう。<span class="cloze-blank" data-qid="19">[ 19a ]</span>、しゃべる<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>は<ruby>本当<rt>ほんとう</rt></ruby>に<span class="cloze-blank" data-qid="19">[ 19b ]</span>。</p>
                    <p>わたしの<ruby>家<rt>いえ</rt></ruby>の<ruby>近所<rt>きんじょ</rt></ruby>には<ruby>一台<rt>いちだい</rt></ruby>の<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>があります。ふつうの<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>の<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>に<ruby>見<rt>み</rt></ruby>えますが、<span class="cloze-blank" data-qid="20">[ 20 ]</span> <ruby>自動販売機<rt>じどうはんばいき</rt></ruby>は<ruby>話<rt>はな</rt></ruby>すことができます。たとえば、<ruby>朝<rt>あさ</rt></ruby>、<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>に<ruby>立<rt>た</rt></ruby>つと、「おはようございます」と<ruby>話<rt>はな</rt></ruby>しかけてきたり、<ruby>買<rt>か</rt></ruby>った<ruby>後<rt>あと</rt></ruby>には、「いってらっしゃい」と<ruby>言<rt>い</rt></ruby>ってくれたりします。それから、<ruby>夜<rt>よる</rt></ruby>、<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>を<ruby>買<rt>か</rt></ruby>った<ruby>人<rt>ひと</rt></ruby>に、「お<ruby>疲<rt>つか</rt></ruby>れさまでした。」と<span class="cloze-blank" data-qid="21">[ 21 ]</span>のを<ruby>見<rt>み</rt></ruby>たことがあります。</p>
                    <p><ruby>最初<rt>さいしょ</rt></ruby>はとてもびっくりしました。<ruby>機械<rt>きかい</rt></ruby>がしゃべるのは、アニメや<ruby>映画<rt>えいが</rt></ruby>の<ruby>中<rt>なか</rt></ruby>だけだと<ruby>思<rt>おも</rt></ruby>っていたからです。わたしがよく<ruby>見<rt>み</rt></ruby>る<ruby>機械<rt>きかい</rt></ruby>も<ruby>人間<rt>にんげん</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じようにしゃべったり、<ruby>歩<rt>ある</rt></ruby>いたりしています。<span class="cloze-blank" data-qid="22">[ 22 ]</span>、<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>に<ruby>話<rt>はな</rt></ruby>しかけられるなんて、まるでアニメの<ruby>世界<rt>せかい</rt></ruby>にいるようだと<ruby>思<rt>おも</rt></ruby>いました。</p>
                    <p><ruby>今<rt>いま</rt></ruby>は、<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>が「いってらっしゃい」と<ruby>話<rt>はな</rt></ruby>しかけてくるのにも<ruby>慣<rt>な</rt></ruby>れて、<ruby>心<rt>こころ</rt></ruby>で「いってきます」と<ruby>答<rt>こた</rt></ruby>えています。もしいつか、<ruby>歩<rt>ある</rt></ruby>く<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>ができても、<ruby>今<rt>いま</rt></ruby>はもう <span class="cloze-blank" data-qid="23">[ 23 ]</span> かもしれません。</p>
                `,
                fullTranslation: `Mọi người nếu nghe nói rằng máy bán hàng tự động biết nói thì có tin được không? Hầu hết mọi người đều sẽ bảo rằng máy bán hàng tự động làm sao mà biết nói được, rồi cười xòa. THẾ NHƯNG MÀ (ところが), máy bán hàng tự động biết nói thực sự LẠI CÓ TỒN TẠI (あるのです).\n\nỞ gần nhà tôi có một chiếc máy bán hàng tự động. Trông nó giống như một chiếc máy bán nước bình thường, nhưng chiếc máy bán hàng tự động NÀY (この) lại có thể nói chuyện. Ví dụ, vào buổi sáng khi đứng cạnh máy, nó sẽ bắt chuyện chào "Chào buổi sáng", hay sau khi mua hàng xong nó sẽ chúc "Bạn đi nhé". Hơn nữa, vào buổi tối, tôi từng thấy nó ĐANG NÓI (言っている) "Bạn đã vất vả rồi" với người vừa mua nước.\n\nBan đầu tôi đã vô cùng ngạc nhiên, vì tôi từng nghĩ máy móc biết nói chỉ có trong phim hoạt hình hay điện ảnh mà thôi. Những cỗ máy tôi hay xem trong phim cũng vừa nói chuyện, vừa đi lại giống như con người. DO ĐÓ (ですから), khi được một chiếc máy bán hàng tự động bắt chuyện, tôi cảm thấy như mình đang ở trong thế giới hoạt hình vậy.\n\nBây giờ, tôi đã quen với việc máy bán hàng tự động chào "Bạn đi nhé", và trong lòng tôi cũng đáp lại "Tôi đi đây". Giả sử một ngày nào đó có xuất hiện máy bán hàng tự động biết đi chăng nữa, thì có lẽ bây giờ tôi CŨNG SẼ KHÔNG CÒN NGẠC NHIÊN NỮA (おどろかない).`,
                vocabulary: [
                    { word: "自動販売機", hiragana: "じどうはんばいき", meaning: "Máy bán hàng tự động" },
                    { word: "しゃべる", hiragana: "しゃべる", meaning: "Nói chuyện / Tán gẫu" },
                    { word: "話しかける", hiragana: "はなしかける", meaning: "Bắt chuyện / Mở lời" },
                    { word: "いってらっしゃい", hiragana: "いってらっしゃい", meaning: "Bạn đi nhé (Lời chúc người đi đường cẩn thận)" },
                    { word: "お疲れさまでした", hiragana: "おつかれさまでした", meaning: "Bạn đã vất vả rồi (Lời chào sau ngày làm việc)" },
                    { word: "慣れる", hiragana: "なれる", meaning: "Quen với..." },
                    { word: "おどろく", hiragana: "おどろく", meaning: "Ngạc nhiên / Kinh ngạc" }
                ],
                grammarNotes: [
                    { pattern: "〜はずはない", meaning: "Làm sao mà... được / Chắc chắn không có chuyện..." },
                    { pattern: "〜ところが〜のです", meaning: "Thế nhưng / Trớ trêu thay... thực tế là..." },
                    { pattern: "〜てくれる", meaning: "Ai đó làm việc gì cho mình (thể hiện sự cảm kích)" },
                    { pattern: "〜のを見る", meaning: "Nhìn thấy việc / cảnh ai đó đang làm gì" },
                    { pattern: "〜なんて", meaning: "Cái thứ như... / Đến mức như... (sự ngạc nhiên)" },
                    { pattern: "まるで〜ようだ", meaning: "Cứ như thể là... / Giống hệt như là..." }
                ],
                questions: [
                    {
                        id: 19,
                        blankLabel: "[ 19a ] ... [ 19b ]",
                        question: "【19】 に入る最も適当なものはどれですか。",
                        options: [
                            "a ところが ／ b あるのです",
                            "a なぜなら ／ b あるからです",
                            "a でも ／ b あるでしょうか",
                            "a たとえば ／ b あるとしましょう"
                        ],
                        optionsAnalysis: [
                            {
                                option: "a ところが ／ b あるのです",
                                meaning: "a: Thế nhưng mà, trớ trêu thay ／ b: Lại có tồn tại đấy (khẳng định sự thật)",
                                analysis: "Hợp ngữ cảnh: Vế trước nói mọi người cười không tin, 'Thế nhưng mà' (ところが) thực tế 'lại có tồn tại' (あるのです)."
                            },
                            {
                                option: "a なぜなら ／ b あるからです",
                                meaning: "a: Bởi vì là ／ b: Vì có tồn tại (giải thích nguyên nhân)",
                                analysis: "Sai logic: 'なぜなら...から' dùng giải thích lý do cho câu trước, không hợp với câu trước là mọi người cười không tin."
                            },
                            {
                                option: "a でも ／ b あるでしょうか",
                                meaning: "a: Nhưng ／ b: Liệu có tồn tại không nhỉ? (câu hỏi nghi vấn)",
                                analysis: "Sai: 'あるでしょうか' đặt câu hỏi nghi vấn, trong khi tác giả đang muốn khẳng định sự thật là có máy như vậy."
                            },
                            {
                                option: "a たとえば ／ b あるとしましょう",
                                meaning: "a: Ví dụ như ／ b: Giả sử là có tồn tại đi (giả định tưởng tượng)",
                                analysis: "Sai ngữ cảnh: Không phải là đưa ra ví dụ hay giả định tưởng tượng, mà là câu chuyện thực tế."
                            }
                        ],
                        answer: 0,
                        evidence: "「ほとんどの人は、自動販売機がしゃべるはずはないと言って、笑うでしょう。[ 19a ]、しゃべる自動販売機は本当に [ 19b ]。」",
                        explanation: "Đáp án 1 đúng. Vế trước nêu định kiến hầu hết mọi người không tin và cười. Liên từ 'ところが' (Thế nhưng mà / Ngược lại với suy nghĩ thông thường đó) diễn đạt sự tương phản bất ngờ, kết hợp với cấu trúc '〜のです' dùng để giải thích/khẳng định một sự thật thực tế ('thực sự có tồn tại đấy')."
                    },
                    {
                        id: 20,
                        blankLabel: "[ 20 ]",
                        question: "【20】 に入る最も適当なものはどれですか。",
                        options: [
                            "ある",
                            "一台",
                            "この",
                            "ふつうの"
                        ],
                        optionsAnalysis: [
                            {
                                option: "ある",
                                meaning: "Có một / Nào đó (thường dùng dạng ある日, ある人...)",
                                analysis: "Sai ngữ pháp: 'ある + N' chỉ dùng cho danh từ không xác định; ở đây tác giả đang chỉ đích danh chiếc máy vừa nói."
                            },
                            {
                                option: "一台",
                                meaning: "Một chiếc / Một cái (lượng từ đếm đồ vật/máy móc)",
                                analysis: "Sai: '一台の' đã dùng ở câu mở đầu; đứng trước danh từ làm chủ ngữ trong câu này không dùng trơ trọi '一台 + N'."
                            },
                            {
                                option: "この",
                                meaning: "Này (từ chỉ định đứng trước danh từ: chiếc máy này)",
                                analysis: "ĐÚNG: 'この自動販売機' dùng để chỉ định chính chiếc máy ở gần nhà tác giả vừa được giới thiệu ở câu trước."
                            },
                            {
                                option: "ふつうの",
                                meaning: "Bình thường / Thông thường",
                                analysis: "Sai ý nghĩa: Vế trước đã nói 'Trông giống máy bình thường NHƯNG...', vế sau không thể lại nói 'máy bình thường biết nói'."
                            }
                        ],
                        answer: 2,
                        evidence: "「ふつうの飲み物の自動販売機に見えますが、[ 20 ] 自動販売機は話すことができます。」",
                        explanation: "Đáp án 3 (この) đúng. 'この' đứng trước danh từ '自動販売機' để chỉ định chính chiếc máy bán hàng ở gần nhà tác giả vừa được nhắc đến ở câu trước."
                    },
                    {
                        id: 21,
                        blankLabel: "[ 21 ]",
                        question: "【21】 に入る最も適当なものはどれですか。",
                        options: [
                            "言っている",
                            "言って帰る",
                            "言われている",
                            "言われて帰る"
                        ],
                        optionsAnalysis: [
                            {
                                option: "言っている",
                                meaning: "Đang nói (thể tiếp diễn V-ている)",
                                analysis: "ĐÚNG: Cấu trúc '[Hành động đang diễn ra] + のを見る' (Nhìn thấy/chứng kiến cảnh ai đó đang nói lời chào sau khi mua hàng)."
                            },
                            {
                                option: "言って帰る",
                                meaning: "Nói rồi đi về (hành động nối tiếp)",
                                analysis: "Sai: Máy bán hàng tự động đứng yên một chỗ, không thể tự 'đi về' (帰る)."
                            },
                            {
                                option: "言われている",
                                meaning: "Được nói / Bị nói (thể bị động V-られる)",
                                analysis: "Sai: Máy bán hàng là chủ thể phát ra lời nói chào người mua hàng, không phải dạng bị động."
                            },
                            {
                                option: "言われて帰る",
                                meaning: "Bị/Được nói rồi đi về (bị động + nối tiếp)",
                                analysis: "Sai cả về bị động lẫn hành động 'đi về'."
                            }
                        ],
                        answer: 0,
                        evidence: "「夜、飲み物を買った人に、「お疲れさまでした。」と [ 21 ] のを見たことがあります。」",
                        explanation: "Đáp án 1 (言っている) đúng. Cấu trúc '[Hành động đang diễn ra] + のを見る' (Chứng kiến cảnh ai đó đang nói/làm gì) sử dụng thể tiếp diễn V-ている."
                    },
                    {
                        id: 22,
                        blankLabel: "[ 22 ]",
                        question: "【22】 に入る最も適当なものはどれですか。",
                        options: [
                            "一方",
                            "ですから",
                            "それなのに",
                            "そのうえ"
                        ],
                        optionsAnalysis: [
                            {
                                option: "一方",
                                meaning: "Mặt khác / Ngược lại (dùng để so sánh 2 khía cạnh đối lập)",
                                analysis: "Sai liên từ: Câu sau không đối lập hay nêu mặt trái với câu trước."
                            },
                            {
                                option: "ですから",
                                meaning: "Do đó / Vì vậy (= だから, chỉ quan hệ nguyên nhân - kết quả)",
                                analysis: "ĐÚNG: Vế trước nói thường xem robot biết nói trong phim, 'Do đó' (ですから) khi gặp máy biết nói ngoài đời thì cảm giác như lạc vào anime."
                            },
                            {
                                option: "それなのに",
                                meaning: "Mặc dù vậy / Thế mà (bất mãn, trái ngược kỳ vọng)",
                                analysis: "Sai: Hai vế câu mang tính đồng thuận, bổ trợ cảm xúc chứ không mâu thuẫn trái ngược."
                            },
                            {
                                option: "そのうえ",
                                meaning: "Hơn nữa / Thêm vào đó (bổ sung thông tin cùng chiều)",
                                analysis: "Không chính xác: Câu sau là cảm xúc/kết luận rút ra từ câu trước chứ không đơn thuần là liệt kê thêm sự việc."
                            }
                        ],
                        answer: 1,
                        evidence: "「わたしがよく見る機械も人間と同じようにしゃべったり、歩いたりしています。[ 22 ]、自動販売機に話しかけられるなんて、まるでアニメの世界にいるようだと思いました。」",
                        explanation: "Đáp án 2 (ですから) đúng. 'ですから' (= だから / したがって) biểu thị quan hệ nguyên nhân - kết quả: Người viết quen nhìn thấy robot biết nói trong phim -> Do đó (ですから) khi gặp máy bán nước biết nói ngoài đời thì cảm giác như lạc vào anime."
                    },
                    {
                        id: 23,
                        blankLabel: "[ 23 ]",
                        question: "【23】 に入る最も適当なものはどれですか。",
                        options: [
                            "信じない",
                            "言い返さない",
                            "しゃべらない",
                            "おどろかない"
                        ],
                        optionsAnalysis: [
                            {
                                option: "信じない",
                                meaning: "Không tin",
                                analysis: "Không hợp ngữ cảnh: Tác giả đã tận mắt thấy máy biết nói và quen rồi, không nói về việc tin hay không tin."
                            },
                            {
                                option: "言い返さない",
                                meaning: "Không đáp lại / Không cãi lại",
                                analysis: "Không hợp nghĩa: Ở đoạn trước tác giả nói mình có đáp lại trong lòng ('いってきますと答えています')."
                            },
                            {
                                option: "しゃべらない",
                                meaning: "Không nói chuyện",
                                analysis: "Sai chủ ngữ và ngữ cảnh: Tác giả đang nói về cảm xúc ngạc nhiên của bản thân mình."
                            },
                            {
                                option: "おどろかない",
                                meaning: "Không ngạc nhiên / Không kinh ngạc",
                                analysis: "ĐÚNG: 'おどろく' = ngạc nhiên. Vì tác giả đã quá quen với máy biết nói rồi ('慣れて'), nên dù tương lai có máy biết đi thì 'bây giờ cũng sẽ không còn ngạc nhiên nữa' (今はもうおどろかないかもしれません)."
                            }
                        ],
                        answer: 3,
                        evidence: "「自動販売機が「いってらっしゃい」と話しかけてくるのにも慣れて…もしいつか、歩く自動販売機ができても、今はもう [ 23 ] かもしれません。」",
                        explanation: "Đáp án 4 (おどろかない) đúng. 'おどろかない' = không ngạc nhiên. Vì tác giả đã quá quen với máy biết nói rồi ('慣れて'), nên dù tương lai có xuất hiện máy biết đi thì giờ đây cũng 'sẽ không còn ngạc nhiên nữa'."
                    }
                ]
            },
            {
                id: "dokkai-n3-dientu-02",
                lessonNumber: 2,
                title: "東京の電車 (Tàu điện ở Tokyo)",
                timeLimit: 360,
                passage: `
                    <p><ruby>東京<rt>とうきょう</rt></ruby>に<ruby>来<rt>き</rt></ruby>て、<ruby>電車<rt>でんしゃ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>がとても<ruby>多<rt>おお</rt></ruby>いのにびっくりしました。ラッシュアワーは、<ruby>駅<rt>えき</rt></ruby>も<ruby>電車<rt>でんしゃ</rt></ruby>も<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>混雑<rt>こんざつ</rt></ruby>しています。<ruby>最初<rt>さいしょ</rt></ruby>は、<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>くて<ruby>大変<rt>たいへん</rt></ruby>なのに、なぜみんなが<ruby>電車<rt>でんしゃ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>おうとするのか<ruby>不思議<rt>ふしぎ</rt></ruby>でした。しかし、<ruby>東京<rt>とうきょう</rt></ruby>に<ruby>来<rt>き</rt></ruby>て３か<ruby>月<rt>げつ</rt></ruby>たって、その<ruby>理由<rt>りゆう</rt></ruby>が <span class="cloze-blank" data-qid="19">[ 19 ]</span>。</p>
                    <p>まず、<ruby>東京<rt>とうきょう</rt></ruby>には、１０<ruby>種類<rt>しゅるい</rt></ruby><ruby>以上<rt>いじょう</rt></ruby>の<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>走<rt>はし</rt></ruby>っていて、<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>駅<rt>えき</rt></ruby>は６００<ruby>以上<rt>いじょう</rt></ruby>あります。たくさん<ruby>駅<rt>えき</rt></ruby>があるから、どこへでも<ruby>行<rt>い</rt></ruby>くことができます。<span class="cloze-blank" data-qid="20">[ 20 ]</span>、<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れることも<ruby>少<rt>すく</rt></ruby>ないし、あまり<ruby>待<rt>ま</rt></ruby>たなくてもすぐに<ruby>次<rt>つぎ</rt></ruby>の<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>来<rt>き</rt></ruby>ます。<ruby>実際<rt>じっさい</rt></ruby>に、わたしが<ruby>使<rt>つか</rt></ruby>っている<ruby>電車<rt>でんしゃ</rt></ruby>は、ラッシュアワーには３<ruby>分<rt>ぷん</rt></ruby>に１<ruby>本<rt>ぽん</rt></ruby><ruby>来<rt>き</rt></ruby>ます。<span class="cloze-blank" data-qid="21">[ 21 ]</span> なら、みんなが<ruby>使<rt>つか</rt></ruby>いたくなる<ruby>気持<rt>きも</rt></ruby>ちもわかります。</p>
                    <p>しかし、<ruby>今<rt>いま</rt></ruby>でもわからないことが<ruby>一つ<rt>ひとつ</rt></ruby>あります。<ruby>東京<rt>とうきょう</rt></ruby>では<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>次々<rt>つぎつぎ</rt></ruby><ruby>来<rt>く</rt></ruby>るから、<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>を<ruby>気<rt>き</rt></ruby>にして<ruby>急<rt>いそ</rt></ruby>ぐ<ruby>必要<rt>ひつよう</rt></ruby>はないはずです。ところが、<ruby>駅<rt>えき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>や<ruby>階段<rt>かいだん</rt></ruby>、ホームを、とても<ruby>急<rt>いそ</rt></ruby>いで<ruby>歩<rt>ある</rt></ruby>いている<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いです。わたしは、これが <span class="cloze-blank" data-qid="22">[ 22 ]</span> わかりません。<ruby>日本<rt>にほん</rt></ruby>に<ruby>長<rt>なが</rt></ruby>く<ruby>住<rt>す</rt></ruby>んでいたら、わたしも<ruby>同<rt>おな</rt></ruby>じように <span class="cloze-blank" data-qid="23">[ 23 ]</span>。<ruby>留学<rt>りゅうがく</rt></ruby><ruby>生活<rt>せいかつ</rt></ruby>が<ruby>終<rt>お</rt></ruby>わるころには、<ruby>答<rt>こた</rt></ruby>えがわかるのかもしれません。</p>
                `,
                fullTranslation: `Khi đến Tokyo, tôi đã rất ngạc nhiên vì có quá nhiều người sử dụng tàu điện. Vào giờ cao điểm, cả nhà ga lẫn tàu điện thực sự vô cùng đông đúc, chen chúc. Ban đầu, tôi thấy thật kỳ lạ rằng dù đông người vất vả như thế, tại sao mọi người lại cứ cố dùng tàu điện làm gì. Nhưng sau khi đến Tokyo được 3 tháng, lý do đó [ 19 ] TÔI ĐÃ DẦN DẦN HIỂU RA (わかってきました).\n\nTrước hết, ở Tokyo có hơn 10 loại tàu điện đang chạy, và có hơn 600 nhà ga tàu điện. Vì có rất nhiều ga nên bạn có thể đi tới bất cứ đâu. [ 20 ] HƠN NỮA (それから), tàu điện cũng rất ít khi bị trễ giờ, và không cần phải đợi lâu thì chuyến tàu tiếp theo cũng sẽ tới ngay. Trên thực tế, chuyến tàu tôi đang sử dụng cứ vào giờ cao điểm là 3 phút có 1 chuyến. Nếu là [ 21 ] LOẠI TÀU ĐIỆN NHƯ THẾ NÀY (こういう電車), thì tôi cũng hiểu được cảm giác muốn sử dụng của mọi người.\n\nThế nhưng, ngay cả bây giờ tôi vẫn có một điều chưa hiểu được. Ở Tokyo, tàu điện cứ nối đuôi nhau đến liên tục, nên đáng lẽ ra chẳng cần phải bận tâm đến giờ tàu mà vội vã làm gì. Ấy vậy mà, có rất nhiều người lại đi bộ vô cùng vội vã trong nhà ga, trên cầu thang và ở sân ga. Tôi không hiểu điều này [ 22 ] LÀ VÌ SAO / TẠI SAO LẠI NHƯ THẾ (なぜなのか). Nếu sống ở Nhật lâu, liệu tôi [ 23 ] CŨNG SẼ TRỞ NÊN NHƯ VẬY KHÔNG NHỈ (なるのでしょうか)? Có lẽ đến khi kết thúc cuộc sống du học, tôi sẽ hiểu được câu trả lời.`,
                vocabulary: [
                    { word: "混雑", hiragana: "こんざつ", meaning: "Đông đúc / Hỗn loạn / Chen chúc" },
                    { word: "不思議", hiragana: "ふしぎ", meaning: "Kỳ lạ / Khó hiểu" },
                    { word: "種類", hiragana: "しゅるい", meaning: "Chủng loại / Loại" },
                    { word: "次々", hiragana: "つぎつぎ", meaning: "Liên tục / Hết cái này đến cái khác" },
                    { word: "急ぐ", hiragana: "いそぐ", meaning: "Vội vã / Khẩn trương" },
                    { word: "階段", hiragana: "かいだん", meaning: "Cầu thang" },
                    { word: "ホーム", hiragana: "ホーム", meaning: "Sân ga (Platform)" },
                    { word: "留学生活", hiragana: "りゅうがくせいかつ", meaning: "Cuộc sống du học" }
                ],
                grammarNotes: [
                    { pattern: "〜のに", meaning: "Mặc dù... thế mà... (ngạc nhiên, trái kỳ vọng)" },
                    { pattern: "〜てくる / 〜てきた", meaning: "Sự biến đổi dần dần từ quá khứ đến hiện tại (dần hiểu ra)" },
                    { pattern: "〜ば / 〜たら...なら", meaning: "Nếu là... thì..." },
                    { pattern: "〜はずだ / 〜はずはない", meaning: "Chắc chắn là... / Đáng lẽ ra là..." },
                    { pattern: "〜のでしょうか", meaning: "Liệu có... không nhỉ? (tự vấn bản thân)" }
                ],
                questions: [
                    {
                        id: 19,
                        blankLabel: "[ 19 ]",
                        question: "【19】 に入る最も適当なものはどれですか。",
                        options: [
                            "わかってくるはずです",
                            "わかっていくそうです",
                            "わかってきました",
                            "わかっていったようです"
                        ],
                        optionsAnalysis: [
                            {
                                option: "わかってくるはずです",
                                meaning: "Chắc chắn sẽ dần hiểu ra (phỏng đoán tương lai)",
                                analysis: "Sai thì: Người viết đã ở Tokyo được 3 tháng và đang kể về nhận thức thực tế hiện tại, không phải phỏng đoán tương lai."
                            },
                            {
                                option: "わかっていくそうです",
                                meaning: "Nghe nói là sẽ dần hiểu ra (truyền văn / hướng tương lai)",
                                analysis: "Sai chủ ngữ: Đây là cảm nhận trực tiếp của bản thân người viết, không dùng thể nghe kể lại (そうです)."
                            },
                            {
                                option: "わかってきました",
                                meaning: "Đã dần dần hiểu ra (sự biến đổi dần từ quá khứ kéo dài đến hiện tại)",
                                analysis: "ĐÚNG: Cấu trúc 'V-てきた' diễn tả sự chuyển biến tâm lý/nhận thức diễn ra từ từ sau 3 tháng sống ở Tokyo."
                            },
                            {
                                option: "わかっていったようです",
                                meaning: "Có vẻ như đã hiểu ra (hướng xa dần / phỏng đoán)",
                                analysis: "Sai hướng biến đổi: 'V-ていく' hướng xa khỏi hiện tại, không phù hợp cho nhận thức tích lũy đến hiện tại."
                            }
                        ],
                        answer: 2,
                        evidence: "「最初は、人が多くて大変なのに、なぜみんなが電車を使おうとするのか不思議でした。しかし、東京に来て３か月たって、その理由が [ 19 ]。」",
                        explanation: "Đáp án 3 (わかってきました) đúng. Ban đầu tác giả thấy lạ lùng, nhưng sau 3 tháng trải nghiệm thì lý do đó 'đã dần dần sáng tỏ / tôi đã dần hiểu ra' (V-てきた diễn tả sự biến đổi kéo dài từ quá khứ đến hiện tại)."
                    },
                    {
                        id: 20,
                        blankLabel: "[ 20 ]",
                        question: "【20】 に入る最も適当なものはどれですか。",
                        options: [
                            "したがって",
                            "つまり",
                            "たとえば",
                            "それから"
                        ],
                        optionsAnalysis: [
                            {
                                option: "したがって",
                                meaning: "Do đó / Vì vậy (chỉ kết quả tất yếu, văn phong trang trọng)",
                                analysis: "Sai quan hệ liên từ: Câu sau là một ưu điểm độc lập khác của tàu điện (đúng giờ, không phải chờ lâu), không phải kết quả của việc có nhiều ga."
                            },
                            {
                                option: "つまり",
                                meaning: "Tức là / Tóm lại là (dùng để giải thích lại hoặc tóm tắt ý trước)",
                                analysis: "Sai: Câu sau không phải là lời diễn giải lại câu trước."
                            },
                            {
                                option: "たとえば",
                                meaning: "Ví dụ như (đưa ra ví dụ minh họa)",
                                analysis: "Sai: Câu sau không phải ví dụ minh họa cho việc có hơn 600 ga."
                            },
                            {
                                option: "それから",
                                meaning: "Hơn nữa / Thêm vào đó / Sau đó (bổ sung thêm luận điểm/yếu tố tích cực)",
                                analysis: "ĐÚNG: Sau khi nêu ưu điểm 1 (mạng lưới ga rộng khắp), tác giả dùng 'それから' để bổ sung thêm ưu điểm 2 (ít trễ giờ, tàu tới liên tục)."
                            }
                        ],
                        answer: 3,
                        evidence: "「たくさん駅があるから、どこへでも行くことができます。[ 20 ]、電車が遅れることも少ないし、あまり待たなくてもすぐに次の電車が来ます。」",
                        explanation: "Đáp án 4 (それから) đúng. 'それから' đóng vai trò liên từ bổ sung (Hơn nữa / Thêm vào đó), kết nối hai luận điểm về sự tiện lợi của tàu điện Tokyo: (1) Ga nhiều đi đâu cũng tới, (2) Tàu đúng giờ và chạy liên tục."
                    },
                    {
                        id: 21,
                        blankLabel: "[ 21 ]",
                        question: "【21】 に入る最も適当なものはどれですか。",
                        options: [
                            "ある電車",
                            "そこの電車",
                            "こういう電車",
                            "どちらかの電車"
                        ],
                        optionsAnalysis: [
                            {
                                option: "ある電車",
                                meaning: "Một loại tàu điện nào đó (chỉ chung chung không xác định)",
                                analysis: "Sai: Tác giả đang chỉ một loại phương tiện cụ thể với những đặc tính vừa nêu ở trên."
                            },
                            {
                                option: "そこの電車",
                                meaning: "Tàu điện ở chỗ đó",
                                analysis: "Không tự nhiên: 'そこ' chỉ địa điểm, không dùng để tóm tắt các tính chất, ưu điểm vừa liệt kê."
                            },
                            {
                                option: "こういう電車",
                                meaning: "Loại tàu điện như thế này (chỉ các tính chất: tiện, nhanh, đúng giờ vừa nêu)",
                                analysis: "ĐÚNG: 'こういう + N' (Loại N như thế này) dùng để tóm lược toàn bộ những đặc điểm tốt của tàu điện Tokyo vừa được trình bày ở các câu trước."
                            },
                            {
                                option: "どちらかの電車",
                                meaning: "Một trong hai loại tàu điện",
                                analysis: "Sai: Bài viết không đưa ra sự lựa chọn giữa hai phương án."
                            }
                        ],
                        answer: 2,
                        evidence: "「実際に、わたしが使っている電車は、ラッシュアワーには３分に１本来ます。[ 21 ] なら、みんなが使いたくなる気持ちもわかります。」",
                        explanation: "Đáp án 3 (こういう電車) đúng. 'こういう電車' mang nghĩa 'loại tàu điện như thế này' (tiện lợi, mạng lưới rộng, đúng giờ và cứ 3 phút lại có 1 chuyến). Nếu là tàu điện tiện như vậy thì việc mọi người đổ xô đi là điều dễ hiểu."
                    },
                    {
                        id: 22,
                        blankLabel: "[ 22 ]",
                        question: "【22】 に入る最も適当なものはどれですか。",
                        options: [
                            "答えなのか",
                            "なぜなのか",
                            "理由なのか",
                            "だれなのか"
                        ],
                        optionsAnalysis: [
                            {
                                option: "答えなのか",
                                meaning: "Là câu trả lời",
                                analysis: "Sai cấu trúc ngữ nghĩa: Không ai nói 'Tôi không hiểu điều này có phải là câu trả lời hay không'."
                            },
                            {
                                option: "なぜなのか",
                                meaning: "Là vì sao / Tại sao lại như thế",
                                analysis: "ĐÚNG: Mẫu câu 'これがなぜなのかわかりません' (Tôi không hiểu tại sao lại như vậy) thể hiện sự thắc mắc về nguyên nhân mọi người vội vã dù tàu chạy liên tục."
                            },
                            {
                                option: "理由なのか",
                                meaning: "Là lý do",
                                analysis: "Sai cách diễn đạt: Nếu dùng '理由' thì phải là 'その理由がわかりません', không nói 'これが理由なのかわかりません'."
                            },
                            {
                                option: "だれなのか",
                                meaning: "Là ai (hỏi về con người)",
                                analysis: "Sai: Tác giả đang thắc mắc về nguyên nhân của hành vi vội vã, không hỏi về danh tính của người nào."
                            }
                        ],
                        answer: 1,
                        evidence: "「ところが、駅の中や階段、ホームを、とても急いで歩いている人が多いです。わたしは、これが [ 22 ] わかりません。」",
                        explanation: "Đáp án 2 (なぜなのか) đúng. Tác giả thắc mắc tại sao tàu cứ 3 phút tới 1 chuyến không sợ trễ, mà mọi người trong ga lại đi lại vội vã đến vậy -> 'わたしは、これがなぜなのかわかりません' (Tôi không hiểu tại sao lại như thế)."
                    },
                    {
                        id: 23,
                        blankLabel: "[ 23 ]",
                        question: "【23】 に入る最も適当なものはどれですか。",
                        options: [
                            "なるのでしょうか",
                            "なったでしょう",
                            "なってしまうのです",
                            "なってしまいました"
                        ],
                        optionsAnalysis: [
                            {
                                option: "なるのでしょうか",
                                meaning: "Liệu có trở nên như vậy không nhỉ? (tự vấn bản thân / phỏng đoán tương lai)",
                                analysis: "ĐÚNG: Kết hợp với giả định '日本に長く住んでいたら' (nếu sống ở Nhật lâu) và câu sau 'có lẽ sau này sẽ hiểu', thể hiện sự băn khoăn tự hỏi về tương lai của chính mình."
                            },
                            {
                                option: "なったでしょう",
                                meaning: "Chắc là đã trở thành (phỏng đoán quá khứ)",
                                analysis: "Sai thì: Giả định 'nếu sống lâu' hướng tới tương lai du học sau này, không dùng thì quá khứ."
                            },
                            {
                                option: "なってしまうのです",
                                meaning: "Sẽ lỡ trở thành (khẳng định dứt khoát / giải thích)",
                                analysis: "Sai sắc thái: Câu này là câu tự hỏi băn khoăn, không phải lời khẳng định chắc chắn."
                            },
                            {
                                option: "なってしまいました",
                                meaning: "Đã lỡ trở thành (quá khứ hoàn thành)",
                                analysis: "Sai thì: Hiện tại người viết vẫn chưa hiểu và chưa hành động vội vã như vậy."
                            }
                        ],
                        answer: 0,
                        evidence: "「日本に長く住んでいたら、わたしも同じように [ 23 ]。留学生活が終わるころには、答えがわかるのかもしれません。」",
                        explanation: "Đáp án 1 (なるのでしょうか) đúng. Người viết đặt ra câu hỏi tự vấn cho tương lai: 'Nếu sống ở Nhật lâu hơn nữa, liệu sau này tôi cũng sẽ trở nên vội vã giống như họ không nhỉ?' (〜のでしょうか dùng diễn tả sự tự vấn, trăn trở nhẹ nhàng)."
                    }
                ]
            },
            {
                id: "dokkai-n3-dientu-03",
                lessonNumber: 3,
                title: "夜でも「おはよう」 (Dù là ban đêm cũng nói \"Ohayou\")",
                timeLimit: 360,
                passage: `
                    <p><ruby>韓国<rt>かんこく</rt></ruby>で、<ruby>日本語<rt>にほんご</rt></ruby>の「おはよう」は<ruby>朝<rt>あさ</rt></ruby>のあいさつだと<ruby>習<rt>なら</rt></ruby>ったのですが、<ruby>日本<rt>にほん</rt></ruby>に<ruby>留学<rt>りゅうがく</rt></ruby>して、<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>先輩<rt>せんぱい</rt></ruby>や<ruby>友達<rt>ともだち</rt></ruby>が<ruby>朝<rt>あさ</rt></ruby><ruby>以外<rt>いがい</rt></ruby>でも<ruby>使<rt>つか</rt></ruby>っているのを<ruby>聞<rt>き</rt></ruby>いて<ruby>驚<rt>おどろ</rt></ruby>きました。<ruby>先輩<rt>せんぱい</rt></ruby>や<ruby>友達<rt>ともだち</rt></ruby>が<ruby>間違<rt>まちが</rt></ruby>っているのでしょうか。<span class="cloze-blank" data-qid="19">[ 19 ]</span>、わたしが<ruby>習<rt>なら</rt></ruby>ったことがまちがっているのでしょうか。</p>
                    <p>ある<ruby>日<rt>ひ</rt></ruby>の<ruby>午後<rt>ごご</rt></ruby>、<ruby>学校<rt>がっこう</rt></ruby>で<ruby>先輩<rt>せんぱい</rt></ruby>に「おはよう。」と <span class="cloze-blank" data-qid="20">[ 20 ]</span>。<ruby>起<rt>お</rt></ruby>きてすぐに<ruby>来<rt>き</rt></ruby>たから、<ruby>間違<rt>まちが</rt></ruby>えて「おはよう」と<ruby>言<rt>い</rt></ruby>ったのだと<ruby>思<rt>おも</rt></ruby>いました。しかしその<ruby>後<rt>あと</rt></ruby>で、<ruby>昼<rt>ひる</rt></ruby>でも<ruby>夜<rt>よる</rt></ruby>でも「おはよう」と<ruby>言<rt>い</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>が、<ruby>周<rt>まわ</rt></ruby>りの<ruby>友達<rt>ともだち</rt></ruby>にもいることに<ruby>気<rt>き</rt></ruby>が <span class="cloze-blank" data-qid="21">[ 21 ]</span>。<ruby>友達<rt>ともだち</rt></ruby>に<ruby>理由<rt>りゆう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いたら、<ruby>人<rt>ひと</rt></ruby>が２４<ruby>時間<rt>じかん</rt></ruby><ruby>働<rt>はたら</rt></ruby>いているホテルやコンビニでは、<ruby>出勤<rt>しゅっきん</rt></ruby>したとき、<ruby>時間<rt>じかん</rt></ruby>に<ruby>関係<rt>かんけい</rt></ruby>なく「おはよう」を<ruby>使<rt>つか</rt></ruby>うということを<ruby>教<rt>おし</rt></ruby>えてくれました。<ruby>確<rt>たし</rt></ruby>かに、<span class="cloze-blank" data-qid="22">[ 22 ]</span> <ruby>先輩<rt>せんぱい</rt></ruby>もコンビニで<ruby>働<rt>はたら</rt></ruby>いています。そういう<ruby>所<rt>ところ</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>いている<ruby>人<rt>ひと</rt></ruby>が、<ruby>仕事<rt>しごと</rt></ruby>で<ruby>使<rt>つか</rt></ruby>う「おはよう」を、<ruby>学校<rt>がっこう</rt></ruby>でも<ruby>使<rt>つか</rt></ruby>ってしまっているのでしょう。</p>
                    <p><ruby>先輩<rt>せんぱい</rt></ruby>や<ruby>友達<rt>ともだち</rt></ruby>がなぜ<ruby>朝<rt>あさ</rt></ruby>ではないのに「おはよう」を<ruby>使<rt>つか</rt></ruby>っているのか、わかりました。そして、<ruby>教室<rt>きょうしつ</rt></ruby>で<ruby>習<rt>なら</rt></ruby>ったのとは<ruby>違<rt>ちが</rt></ruby>う<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>も あるということを <span class="cloze-blank" data-qid="23">[ 23 ]</span>。ほかにもこんな<ruby>例<rt>れい</rt></ruby>はあるでしょうか、<ruby>調<rt>しら</rt></ruby>べてみたいです。</p>
                `,
                fullTranslation: `Ở Hàn Quốc, tôi được học rằng lời chào "Ohayou" trong tiếng Nhật là câu chào vào buổi sáng, nhưng khi sang Nhật du học, tôi đã rất ngạc nhiên khi nghe các anh chị tiền bối và bạn bè người Nhật sử dụng nó cả vào những lúc không phải buổi sáng. Liệu có phải các tiền bối và bạn bè đang dùng sai chăng? [ 19 ] HAY LÀ (それとも) những điều tôi đã học bị sai chăng?\n\nVào một buổi chiều nọ, ở trường tôi ĐÃ ĐƯỢC TIỀN BỐI CHÀO (言われました) "Ohayou". Tôi đã nghĩ chắc là do tiền bối vừa ngủ dậy là đến trường ngay nên đã buột miệng chào nhầm "Ohayou". Nhưng sau đó, tôi ĐÃ NHẬN RA RẰNG (気がついたのです) xung quanh tôi cũng có những người bạn nói "Ohayou" dù là buổi trưa hay buổi tối. Khi tôi hỏi bạn bè về lý do, họ đã giải thích cho tôi rằng ở những nơi làm việc 24/24 như khách sạn hay cửa hàng tiện lợi (combini), khi bắt đầu vào ca làm việc (xuất cần), người ta sẽ dùng "Ohayou" mà không cần quan tâm đến thời gian thực tế. Quả thực, người tiền bối [ 22 ] ĐÓ (その先輩) cũng đang làm thêm ở cửa hàng tiện lợi. Có lẽ những người làm việc ở những nơi như vậy đã vô tình quen miệng dùng câu "Ohayou" trong công việc mang lên cả trường học.\n\nTôi đã hiểu được lý do tại sao các tiền bối và bạn bè lại dùng "Ohayou" dù không phải là buổi sáng. Và tôi [ 23 ] ĐÃ BIẾT ĐƯỢC RẰNG (知りました) ngoài đời cũng có những cách dùng khác với những gì được học trên lớp. Không biết là còn có những ví dụ nào như thế này nữa không, tôi rất muốn tìm hiểu thêm.`,
                vocabulary: [
                    { word: "先輩", hiragana: "せんぱい", meaning: "Tiền bối / Đàn anh, đàn chị" },
                    { word: "朝以外", hiragana: "あさいがい", meaning: "Ngoài buổi sáng ra" },
                    { word: "驚く", hiragana: "おどろく", meaning: "Kinh ngạc / Ngạc nhiên" },
                    { word: "気がつく", hiragana: "きがつく", meaning: "Nhận ra / Để ý thấy" },
                    { word: "出勤", hiragana: "しゅっきん", meaning: "Đi làm / Bắt đầu ca làm việc" },
                    { word: "関係なく", hiragana: "かんけいなく", meaning: "Không liên quan / Bất kể..." },
                    { word: "確かに", hiragana: "たしかに", meaning: "Quả thực là / Đúng thật là" },
                    { word: "調べる", hiragana: "しらべる", meaning: "Tìm hiểu / Tra cứu" }
                ],
                grammarNotes: [
                    { pattern: "〜のでしょうか", meaning: "Liệu có phải là... không nhỉ? (nghi vấn, băn khoăn)" },
                    { pattern: "〜それとも〜", meaning: "Hoặc là / Hay là (liên từ nối 2 câu hỏi lựa chọn)" },
                    { pattern: "〜に V-られる", meaning: "Thể bị động: Bị/Được ai đó tác động hành động" },
                    { pattern: "〜に気がつく", meaning: "Để ý thấy / Nhận ra sự việc gì đó" },
                    { pattern: "〜に関係なく", meaning: "Bất chấp / Không liên quan đến..." },
                    { pattern: "〜てしまう", meaning: "Lỡ làm việc gì / Thói quen vô ý khó bỏ" }
                ],
                questions: [
                    {
                        id: 19,
                        blankLabel: "[ 19 ]",
                        question: "【19】 に入る最も適当なものはどれですか。",
                        options: [
                            "ところで",
                            "ところが",
                            "それなら",
                            "それとも"
                        ],
                        optionsAnalysis: [
                            {
                                option: "ところで",
                                meaning: "Nhân tiện / Tiện thể (chuyển sang chủ đề mới)",
                                analysis: "Sai: Câu sau vẫn đang tiếp tục băn khoăn về vấn đề đúng/sai của câu trước, không phải chuyển chủ đề."
                            },
                            {
                                option: "ところが",
                                meaning: "Thế nhưng / Trái lại (tương phản kết quả bất ngờ)",
                                analysis: "Sai: Không diễn tả kết quả thực tế đối lập với dự đoán."
                            },
                            {
                                option: "それなら",
                                meaning: "Nếu vậy thì / Nếu thế thì (giả định dựa trên tiền đề)",
                                analysis: "Sai: Câu sau không phải là hệ quả rút ra từ câu trước."
                            },
                            {
                                option: "それとも",
                                meaning: "Hoặc là / Hay là (liên từ kết nối 2 câu hỏi lựa chọn A hay B)",
                                analysis: "ĐÚNG: Nối 2 câu hỏi băn khoăn: 'Tiền bối nhầm chăng? [ 19 ] Hay là kiến thức mình học bị nhầm chăng?' (Aでしょうか。それとも、Bでしょうか。)"
                            }
                        ],
                        answer: 3,
                        evidence: "「先輩や友達が間違っているのでしょうか。[ 19 ]、わたしが習ったことがまちがっているのでしょうか。」",
                        explanation: "Đáp án 4 (それとも) đúng. 'それとも' dùng để liên kết hai câu hỏi nghi vấn mang tính lựa chọn A hay B: 'Có phải tiền bối nhầm không? Hay là (それとも) những gì mình học bị nhầm?'."
                    },
                    {
                        id: 20,
                        blankLabel: "[ 20 ]",
                        question: "【20】 に入る最も適当なものはどれですか。",
                        options: [
                            "言いました",
                            "言わせました",
                            "言われました",
                            "言えました"
                        ],
                        optionsAnalysis: [
                            {
                                option: "言いました",
                                meaning: "Đã nói (chủ ngữ là người nói)",
                                analysis: "Sai: Tác giả là người nghe tiền bối chào, câu sau giải thích 'Tôi nghĩ tiền bối nhầm' chứng tỏ tiền bối là người phát ra lời nói."
                            },
                            {
                                option: "言わせました",
                                meaning: "Đã bắt/cho nói (thể sai khiến)",
                                analysis: "Sai: Tác giả không bắt tiền bối phải nói câu đó."
                            },
                            {
                                option: "言われました",
                                meaning: "Đã được/bị nói (thể bị động: 先輩に言われました)",
                                analysis: "ĐÚNG: Cấu trúc bị động '[Người thực hiện] に [Lời nói] と言われる' (Được/Bị ai đó nói với lời chào...)."
                            },
                            {
                                option: "言えました",
                                meaning: "Đã có thể nói (thể khả năng)",
                                analysis: "Sai: Không nói về năng lực phát âm hay khả năng nói."
                            }
                        ],
                        answer: 2,
                        evidence: "「ある日の午後、学校で先輩に「おはよう。」と [ 20 ]。起きてすぐに来たから、間違えて「おはよう」と言ったのだと思いました。」",
                        explanation: "Đáp án 3 (言われました) đúng. Trợ từ '先輩に' kết hợp với ngữ cảnh tác giả tiếp nhận lời chào từ tiền bối -> Cần dùng thể bị động '先輩に「おはよう」と言われました' (Tôi đã được tiền bối chào 'Ohayou')."
                    },
                    {
                        id: 21,
                        blankLabel: "[ 21 ]",
                        question: "【21】 に入る最も適当なものはどれですか。",
                        options: [
                            "ついたのです",
                            "ついたからです",
                            "ついたせいです",
                            "ついたおかげです"
                        ],
                        optionsAnalysis: [
                            {
                                option: "ついたのです",
                                meaning: "Đã nhận ra đấy (cụm 気がつく chia thể 〜のです kể lại sự thật/nhận thức)",
                                analysis: "ĐÚNG: Cụm thành ngữ '気がつく' (để ý thấy/nhận ra), kết hợp với đuôi '〜のです' dùng trong văn kể chuyện để tường thuật một sự việc phát hiện mới."
                            },
                            {
                                option: "ついたからです",
                                meaning: "Bởi vì đã nhận ra (mệnh đề giải thích lý do)",
                                analysis: "Sai: Câu này là một mắt xích kể diễn biến sự việc, không phải câu trả lời lý do cho câu hỏi nào trước đó."
                            },
                            {
                                option: "ついたせいです",
                                meaning: "Do/Tại vì đã nhận ra (đổ lỗi cho hậu quả tiêu cực)",
                                analysis: "Sai ý nghĩa và ngữ cảnh."
                            },
                            {
                                option: "ついたおかげです",
                                meaning: "Nhờ ơn đã nhận ra (mang lại kết quả may mắn)",
                                analysis: "Sai cấu trúc ngữ cảnh."
                            }
                        ],
                        answer: 0,
                        evidence: "「しかしその後で、昼でも夜でも「おはよう」と言う人が、周りの友達にもいることに気が [ 21 ]。友達に理由を聞いたら…」",
                        explanation: "Đáp án 1 (ついたのです) đúng. Cụm '〜ことに気がつく' nghĩa là nhận ra/để ý thấy điều gì. Đuôi '〜のです' được sử dụng để tường thuật lại bước chuyển biến trong nhận thức của người viết."
                    },
                    {
                        id: 22,
                        blankLabel: "[ 22 ]",
                        question: "【22】 に入る最も適当なものはどれですか。",
                        options: [
                            "以下の",
                            "その",
                            "留学した",
                            "驚いた"
                        ],
                        optionsAnalysis: [
                            {
                                option: "以下の",
                                meaning: "Dưới đây / Sau đây",
                                analysis: "Sai: Không ai nói 'tiền bối dưới đây'."
                            },
                            {
                                option: "その",
                                meaning: "Đó / Ấy (từ chỉ định nhắc lại đối tượng vừa đề cập ở đoạn trước)",
                                analysis: "ĐÚNG: 'その先輩' dùng để chỉ đích danh người tiền bối đã chào tác giả vào buổi chiều ở đoạn văn thứ hai."
                            },
                            {
                                option: "留学した",
                                meaning: "Đã du học",
                                analysis: "Sai: Tiền bối là người Nhật bản xứ, không phải đối tượng đi du học."
                            },
                            {
                                option: "驚いた",
                                meaning: "Đã ngạc nhiên",
                                analysis: "Sai ngữ pháp: Không ghép '驚いた先輩' để biểu thị nghĩa này."
                            }
                        ],
                        answer: 1,
                        evidence: "「確かに、[ 22 ] 先輩もコンビニで働いています。そういう所で働いている人が、仕事で使う「おはよう」を、学校でも使ってしまっているのでしょう。」",
                        explanation: "Đáp án 2 (その) đúng. 'その先輩' (Người tiền bối đó) là từ chỉ định liên kết văn mạch, nhắc lại đúng người tiền bối đã chào tác giả vào buổi chiều được nói tới ở đoạn 2."
                    },
                    {
                        id: 23,
                        blankLabel: "[ 23 ]",
                        question: "【23】 に入る最も適当なものはどれですか。",
                        options: [
                            "知ったのでしょう",
                            "知るはずです",
                            "知っていました",
                            "知りました"
                        ],
                        optionsAnalysis: [
                            {
                                option: "知ったのでしょう",
                                meaning: "Chắc là đã biết chăng (phỏng đoán người khác)",
                                analysis: "Sai chủ ngữ: Tác giả đang khẳng định nhận thức của chính bản thân mình, không dùng phỏng đoán 'のでしょう'."
                            },
                            {
                                option: "知るはずです",
                                meaning: "Chắc chắn sẽ biết (suy đoán tương lai)",
                                analysis: "Sai thì: Đây là điều tác giả vừa mới nhận thức được sau khi nghe bạn giải thích."
                            },
                            {
                                option: "知っていました",
                                meaning: "Đã biết từ trước (quá khứ liên tục)",
                                analysis: "Sai: Trước đó tác giả không hề biết và rất ngạc nhiên, đến bây giờ mới vỡ lẽ nhận biết được."
                            },
                            {
                                option: "知りました",
                                meaning: "Tôi đã biết được / Đã nhận biết được (thể khẳng định nhận thức đạt được)",
                                analysis: "ĐÚNG: Đi liền với 'わかりました' ở câu trước để đúc kết lại bài học nhận thức mới: 'Tôi đã hiểu... và tôi đã biết được rằng (知りました) có những cách dùng khác với lớp học'."
                            }
                        ],
                        answer: 3,
                        evidence: "「先輩や友達がなぜ朝ではないのに「おはよう」を使っているのか、わかりました。そして、教室で習ったのとは違う使い方も あるということを [ 23 ]。」",
                        explanation: "Đáp án 4 (知りました) đúng. '〜ということを知りました' thể hiện tác giả đã tiếp thu và nhận biết được một nét văn hóa/cách sử dụng ngôn ngữ thực tế mới mẻ mà trường lớp chưa dạy."
                    }
                ]
            },
            {
                id: "dokkai-n3-dientu-04",
                lessonNumber: 4,
                title: "私が好きな日本の料理 (Món ăn Nhật Bản tôi yêu thích)",
                timeLimit: 360,
                passage: `
                    <p>わたしが<ruby>好<rt>す</rt></ruby>きな<ruby>日本<rt>にほん</rt></ruby>の<ruby>料理<rt>りょうり</rt></ruby>は「<ruby>納豆<rt>なっとう</rt></ruby>スパゲティ」です。わたしは２<ruby>年前<rt>ねんまえ</rt></ruby>に<ruby>初<rt>はじ</rt></ruby>めて<ruby>納豆<rt>なっとう</rt></ruby>を<ruby>見<rt>み</rt></ruby>ました。イタリアの<ruby>大学<rt>だいがく</rt></ruby>で<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>していたとき、<ruby>先生<rt>せんせい</rt></ruby>がパーティーに<ruby>納豆<rt>なっとう</rt></ruby>を <span class="cloze-blank" data-qid="19">[ 19 ]</span>。けれど、そのときはにおいが<ruby>強<rt>つよ</rt></ruby>くて<ruby>食<rt>た</rt></ruby>べられませんでした。</p>
                    <p><span class="cloze-blank" data-qid="20">[ 20 ]</span>、<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>て<ruby>友達<rt>ともだち</rt></ruby>とレストランに<ruby>行<rt>い</rt></ruby>ったとき、<ruby>友達<rt>ともだち</rt></ruby>の<ruby>納豆<rt>なっとう</rt></ruby>スパゲティを<ruby>少<rt>すこ</rt></ruby>し<ruby>食<rt>た</rt></ruby>べさせてもらって<ruby>驚<rt>おどろ</rt></ruby>きました。<ruby>ほとんど<rt></rt></ruby>においがなく、とてもおいしかったからです。それから、<ruby>週<rt>しゅう</rt></ruby>に３、４<ruby>回<rt>かい</rt></ruby>そのレストランに<ruby>行<rt>い</rt></ruby>って、<ruby>納豆<rt>なっとう</rt></ruby>スパゲティを <span class="cloze-blank" data-qid="21">[ 21 ]</span>。しばらくすると、ほかのスパゲティも<ruby>気<rt>き</rt></ruby>になり<ruby>始<rt>はじ</rt></ruby>めました。<ruby>日本<rt>にほん</rt></ruby>には、イタリアにない<ruby>味<rt>あじ</rt></ruby>のスパゲティがあります。<ruby>梅<rt>うめ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>ったものやしょうゆ<ruby>味<rt>あじ</rt></ruby>のものです。わたしは、<span class="cloze-blank" data-qid="22">[ 22 ]</span> も<ruby>食<rt>た</rt></ruby>べてみました。でも、やはり<ruby>納豆<rt>なっとう</rt></ruby>スパゲティがいちばんおいしかったです。<ruby>最近<rt>さいきん</rt></ruby>は<ruby>納豆<rt>なっとう</rt></ruby>を<ruby>買<rt>か</rt></ruby>ってきて、<ruby>自分<rt>じぶん</rt></ruby>でも<ruby>作<rt>つく</rt></ruby>って<ruby>食<rt>た</rt></ruby>べています。</p>
                    <p><ruby>帰国<rt>きこく</rt></ruby>したら、<ruby>友達<rt>ともだち</rt></ruby>や<ruby>家族<rt>かぞく</rt></ruby>に<ruby>納豆<rt>なっとう</rt></ruby>スパゲティを <span class="cloze-blank" data-qid="23">[ 23 ]</span>。みんなきっとびっくりするでしょう。</p>
                `,
                fullTranslation: `Món ăn Nhật Bản mà tôi yêu thích là "Mì Spaghetti Natto" (Mì Ý đậu tương lên men). Lần đầu tiên tôi nhìn thấy Natto là cách đây 2 năm trước. Khi đang học tiếng Nhật tại một trường đại học ở Ý, THẦY GIÁO ĐÃ MANG NATTO ĐẾN BUỔI TIỆC CHO CHÚNG TÔI (持ってきてくださったのです). Nhưng lúc đó mùi của nó nồng quá nên tôi đã không thể ăn được.\n\nTHẾ NHƯNG (ところが), khi sang Nhật và đi ăn nhà hàng cùng bạn bè, tôi đã được bạn cho ăn thử một chút mì Spaghetti Natto và vô cùng ngạc nhiên. Bởi vì nó hầu như không có mùi nồng và lại cực kỳ ngon miệng. Kể từ đó, tôi thường đến nhà hàng ấy 3-4 lần mỗi tuần và ĐÃ BẮT ĐẦU CÓ THÓI QUEN GỌI MÓN (頼むようになりました) mì Spaghetti Natto. Được một thời gian, tôi cũng bắt đầu chú ý đến các món Spaghetti khác. Ở Nhật Bản có những hương vị mì Ý mà ở nước Ý không hề có, chẳng hạn như loại dùng quả mơ (Ume) hay loại vị nước tương Shoyu. Tôi cũng đã ăn thử NHỮNG LOẠI MÌ SPAGHETTI NHƯ THẾ (そういうスパゲティ). Tuy vậy, quả nhiên mì Spaghetti Natto vẫn là ngon nhất. Gần đây, tôi còn mua Natto về và tự mình làm món này để ăn.\n\nSau khi về nước, TÔI MUỐN LÀM MÓN NÀY CHO GIA ĐÌNH VÀ BẠN BÈ ĂN (作ってあげたいです). Mọi người chắc chắn sẽ rất ngạc nhiên cho mà xem.`,
                vocabulary: [
                    { word: "納豆", hiragana: "なっとう", meaning: "Natto (Đậu tương lên men Nhật Bản)" },
                    { word: "におい", hiragana: "におい", meaning: "Mùi hương / Mùi vị" },
                    { word: "食べさせてもらう", hiragana: "たべさせてもらう", meaning: "Được ai đó cho phép / cho ăn thử" },
                    { word: "気になる", hiragana: "きになる", meaning: "Để ý / Quan tâm / Bận tâm" },
                    { word: "梅", hiragana: "うめ", meaning: "Quả mơ Nhật" },
                    { word: "しょうゆ", hiragana: "しょうゆ", meaning: "Nước tương Shoyu" },
                    { word: "やはり", hiragana: "やはり", meaning: "Quả nhiên là / Rốt cuộc vẫn là..." },
                    { word: "帰国", hiragana: "きこく", meaning: "Về nước" }
                ],
                grammarNotes: [
                    { pattern: "〜てくださる", meaning: "Kính ngữ: Người bề trên làm việc gì cho mình/nhóm mình" },
                    { pattern: "〜ところが", meaning: "Thế nhưng / Trái lại (chuyển ý tương phản kết quả bất ngờ)" },
                    { pattern: "〜使役受身 / 〜させてもらう", meaning: "Được ai đó cho phép thực hiện hành động" },
                    { pattern: "〜ようになる", meaning: "Trở nên... / Bắt đầu có thói quen làm gì (thay đổi trạng thái/hành vi)" },
                    { pattern: "〜てあげる / 〜てあげたい", meaning: "Làm việc gì cho ai đó / Muốn làm việc gì cho ai đó" }
                ],
                questions: [
                    {
                        id: 19,
                        blankLabel: "[ 19 ]",
                        question: "【19】 に入る最も適当なものはどれですか。",
                        options: [
                            "持ってきてくださったのです",
                            "持ってきてくださったそうです",
                            "持っていかれたと思います",
                            "持っていかれたはずです"
                        ],
                        optionsAnalysis: [
                            {
                                option: "持ってきてくださったのです",
                                meaning: "Thầy giáo đã mang đến cho đấy (kính ngữ くださる + 〜のです giải thích/kể lại)",
                                analysis: "ĐÚNG: Thầy giáo (người trên) mang Natto đến buổi tiệc (hướng về phía người nói: 持って来る) cho học sinh (くださる)."
                            },
                            {
                                option: "持ってきてくださったそうです",
                                meaning: "Nghe nói là thầy giáo đã mang đến (truyền văn)",
                                analysis: "Sai: Tác giả là người trực tiếp tham gia buổi tiệc và chứng kiến, không phải nghe kể lại."
                            },
                            {
                                option: "持っていかれたと思います",
                                meaning: "Tôi nghĩ là thầy đã mang đi",
                                analysis: "Sai hướng di chuyển: '持って行く' là mang đi nơi khác, trong khi ở đây là mang đến buổi tiệc nơi tác giả có mặt ('持って来る')."
                            },
                            {
                                option: "持っていかれたはずです",
                                meaning: "Chắc chắn là thầy đã mang đi",
                                analysis: "Sai cả về hướng động từ (行く) lẫn sắc thái suy đoán."
                            }
                        ],
                        answer: 0,
                        evidence: "「イタリアの大学で日本語を勉強していたとき、先生がパーティーに納豆を [ 19 ]。けれど、そのときはにおいが強くて食べられませんでした。」",
                        explanation: "Đáp án 1 (持ってきてくださったのです) đúng. Diễn tả hành động của thầy giáo (bề trên) mang đồ đến nơi tổ chức tiệc cho người nói -> dùng kính ngữ cho nhận '持ってきてくださる' kết hợp đuôi trần thuật '〜のです'."
                    },
                    {
                        id: 20,
                        blankLabel: "[ 20 ]",
                        question: "【20】 に入る最も適当なものはどれですか。",
                        options: [
                            "そのうえ",
                            "たとえば",
                            "ところが",
                            "ちなみに"
                        ],
                        optionsAnalysis: [
                            {
                                option: "そのうえ",
                                meaning: "Hơn nữa / Thêm vào đó (bổ sung cùng chiều)",
                                analysis: "Sai: Hai đoạn văn có sự chuyển biến tương phản rõ rệt (trước không ăn được -> sau lại thấy rất ngon)."
                            },
                            {
                                option: "たとえば",
                                meaning: "Ví dụ như",
                                analysis: "Sai: Đoạn 2 không phải ví dụ minh họa cho đoạn 1."
                            },
                            {
                                option: "ところが",
                                meaning: "Thế nhưng / Trái lại (thể hiện sự chuyển hướng tương phản bất ngờ)",
                                analysis: "ĐÚNG: Đoạn trước nêu việc ở Ý không thể ăn được vì mùi nồng, 'Thế nhưng' (ところが) khi sang Nhật ăn thử mì Spaghetti Natto thì lại thấy cực ngon."
                            },
                            {
                                option: "ちなみに",
                                meaning: "Nhân tiện / Nói thêm",
                                analysis: "Sai: Không dùng để chuyển đoạn mang tính bước ngoặt cảm xúc."
                            }
                        ],
                        answer: 2,
                        evidence: "「けれど、そのときはにおいが強くて食べられませんでした。[ 20 ]、日本に来て友達とレストランに行ったとき、友達の納豆スパゲティを少し食べさせてもらって驚きました。」",
                        explanation: "Đáp án 3 (ところが) đúng. 'ところが' là liên từ diễn tả sự tương phản ngoài dự tính: Trước đây không ăn nổi Natto, thế nhưng (ところが) khi sang Nhật ăn món mì Spaghetti Natto thì bất ngờ thấy ngon miệng."
                    },
                    {
                        id: 21,
                        blankLabel: "[ 21 ]",
                        question: "【21】 に入る最も適当なものはどれですか。",
                        options: [
                            "頼んだほうがいいです",
                            "頼むようになりました",
                            "頼もうと思っています",
                            "頼まなければなりません"
                        ],
                        optionsAnalysis: [
                            {
                                option: "頼んだほうがいいです",
                                meaning: "Nên gọi món (khuyên bảo người khác)",
                                analysis: "Sai: Tác giả đang kể về thói quen của chính bản thân mình."
                            },
                            {
                                option: "頼むようになりました",
                                meaning: "Đã trở nên thường xuyên gọi món (sự thay đổi thói quen/hành vi)",
                                analysis: "ĐÚNG: Cấu trúc 'V-るようになる' diễn tả sự hình thành một thói quen mới sau khi phát hiện ra món ăn ngon ('mỗi tuần đến 3-4 lần và thường xuyên gọi món này')."
                            },
                            {
                                option: "頼もうと思っています",
                                meaning: "Đang có ý định sẽ gọi món",
                                analysis: "Sai thì: Đây là thói quen đã và đang thực hiện trong quá khứ, không phải dự định tương lai."
                            },
                            {
                                option: "頼まなければなりません",
                                meaning: "Phải gọi món (bắt buộc)",
                                analysis: "Sai: Không có sự ép buộc nào ở đây, xuất phát từ sở thích cá nhân."
                            }
                        ],
                        answer: 1,
                        evidence: "「それから、週に３、４回そのレストランに行って、納豆スパゲティを [ 21 ]。」",
                        explanation: "Đáp án 2 (頼むようになりました) đúng. Cấu trúc 'V-るようになる' thể hiện sự thay đổi trạng thái/thói quen từ chỗ chưa từng ăn chuyển sang thường xuyên gọi món mì này."
                    },
                    {
                        id: 22,
                        blankLabel: "[ 22 ]",
                        question: "【22】 に入る最も適当なものはどれですか。",
                        options: [
                            "スパゲティ",
                            "その店のスパゲティ",
                            "納豆スパゲティ",
                            "そういうスパゲティ"
                        ],
                        optionsAnalysis: [
                            {
                                option: "スパゲティ",
                                meaning: "Mì Spaghetti (chung chung)",
                                analysis: "Chưa chính xác: Không thể hiện được sự liên kết với các vị mì Ý đặc biệt ở Nhật vừa nêu ở câu trước."
                            },
                            {
                                option: "その店のスパゲティ",
                                meaning: "Mì Spaghetti của quán đó",
                                analysis: "Sai trọng tâm: Trọng tâm là thử các vị độc lạ kiểu Nhật (vị mơ, vị xì dầu)."
                            },
                            {
                                option: "納豆スパゲティ",
                                meaning: "Mì Spaghetti Natto",
                                analysis: "Sai: Tác giả đang nói về việc thử 'các loại Spaghetti khác' (ほかのスパゲティ) ngoài Natto."
                            },
                            {
                                option: "そういうスパゲティ",
                                meaning: "Những loại mì Spaghetti như thế (chỉ mì vị mơ, vị xì dầu vừa nêu)",
                                analysis: "ĐÚNG: 'そういう + N' (Loại N như thế) dùng để chỉ định các loại Spaghetti có hương vị độc đáo kiểu Nhật (梅やしょうゆ味) vừa liệt kê ở câu trước."
                            }
                        ],
                        answer: 3,
                        evidence: "「日本には、イタリアにない味のスパゲティがあります。梅を使ったものやしょうゆ味のものです。わたしは、[ 22 ] も食べてみました。」",
                        explanation: "Đáp án 4 (そういうスパゲティ) đúng. 'そういうスパゲティ' (Những loại mì Spaghetti như vậy) liên kết trực tiếp với các loại Spaghetti vị mơ và vị nước tương Shoyu vừa được giới thiệu ở câu trước đó."
                    },
                    {
                        id: 23,
                        blankLabel: "[ 23 ]",
                        question: "【23】 に入る最も適当なものはどれですか。",
                        options: [
                            "作ってもらえました",
                            "作らせてやりました",
                            "作らせてくれます",
                            "作ってあげたいです"
                        ],
                        optionsAnalysis: [
                            {
                                option: "作ってもらえました",
                                meaning: "Đã được làm cho ăn (nhận ơn)",
                                analysis: "Sai chiều hành động: Người làm nấu ăn là tác giả, đối tượng thụ hưởng là gia đình và bạn bè."
                            },
                            {
                                option: "作らせてやりました",
                                meaning: "Đã bắt/cho làm",
                                analysis: "Sai sắc thái và ngữ nghĩa."
                            },
                            {
                                option: "作らせてくれます",
                                meaning: "Sẽ cho phép tôi làm",
                                analysis: "Sai ngữ cảnh."
                            },
                            {
                                option: "作ってあげたいです",
                                meaning: "Tôi muốn nấu/làm cho mọi người ăn (V-てあげたい biểu thị mong muốn làm điều tốt cho người khác)",
                                analysis: "ĐÚNG: Tác giả tự nấu món mì Spaghetti Natto cho bạn bè và gia đình ở quê nhà thưởng thức sau khi về nước -> '作ってあげたいです'."
                            }
                        ],
                        answer: 3,
                        evidence: "「帰国したら、友達や家族に納豆スパゲティを [ 23 ]。みんなきっとびっくりするでしょう。」",
                        explanation: "Đáp án 4 (作ってあげたいです) đúng. Tác giả muốn tự tay nấu món ăn yêu thích này để thiết đãi bạn bè và gia đình khi về nước -> dùng cấu trúc 'V-てあげる' chia thể mong muốn '作ってあげたいです'."
                    }
                ]
            },
            {
                id: "dokkai-n3-dientu-05",
                lessonNumber: 5,
                title: "お菓子の箱 (Hộp bánh kẹo)",
                timeLimit: 360,
                passage: `
                    <p>わたしは<ruby>一<rt>ひと</rt></ruby>つの<ruby>お菓子<rt>おかし</rt></ruby>の<ruby>箱<rt>はこ</rt></ruby>を<ruby>捨<rt>す</rt></ruby>てずに<ruby>持<rt>も</rt></ruby>っています。わたしにとっては<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>箱<rt>はこ</rt></ruby>なのです。</p>
                    <p>４<ruby>月<rt>がつ</rt></ruby>に<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>て、<ruby>初<rt>はじ</rt></ruby>めて<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったとき、<ruby>桜<rt>さくら</rt></ruby>の<ruby>絵<rt>え</rt></ruby>の<ruby>箱<rt>はこ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ったお<ruby>菓子<rt>かし</rt></ruby>を<ruby>買<rt>か</rt></ruby>いました。<ruby>桜<rt>さくら</rt></ruby><ruby>味<rt>あじ</rt></ruby>の <span class="cloze-blank" data-qid="19">[ 19 ]</span>。きれいな<ruby>箱<rt>はこ</rt></ruby>だったので、<ruby>日本<rt>にほん</rt></ruby>で<ruby>初<rt>はじ</rt></ruby>めて<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>をした<ruby>記念<rt>きねん</rt></ruby>に<ruby>持<rt>も</rt></ruby>っていることにしました。</p>
                    <p><ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったとき、<ruby>久<rt>ひさ</rt></ruby>しぶりにそのチョコレートが<ruby>食<rt>た</rt></ruby>べたくなって、<ruby>店<rt>みせ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しました。<span class="cloze-blank" data-qid="20">[ 20 ]</span>、いくら<ruby>探<rt>さが</rt></ruby>しても、<ruby>見<rt>み</rt></ruby>つけられませんでした。<ruby>店<rt>みせ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>聞<rt>き</rt></ruby>いたら、「<ruby>桜<rt>さくら</rt></ruby><ruby>味<rt>あじ</rt></ruby>のお<ruby>菓子<rt>かし</rt></ruby>は<ruby>春<rt>はる</rt></ruby>にしか<ruby>売<rt>う</rt></ruby>っていないんです。<ruby>今<rt>いま</rt></ruby>は、スイカ<ruby>味<rt>あじ</rt></ruby>やソーダ<ruby>味<rt>あじ</rt></ruby>の<ruby>夏<rt>なつ</rt></ruby>のお<ruby>菓子<rt>かし</rt></ruby>が<ruby>並<rt>なら</rt></ruby>んでいますよ。」と<ruby>言<rt>い</rt></ruby>われました。<ruby>秋<rt>あき</rt></ruby>や<ruby>冬<rt>ふゆ</rt></ruby>にだけ<ruby>売<rt>う</rt></ruby>られるお<ruby>菓子<rt>かし</rt></ruby>もあるそうです。</p>
                    <p><ruby>日本<rt>にほん</rt></ruby>には <span class="cloze-blank" data-qid="21">[ 21 ]</span> お<ruby>菓子<rt>かし</rt></ruby>があると<ruby>知<rt>し</rt></ruby>って<ruby>驚<rt>おどろ</rt></ruby>きました。<ruby>四季<rt>しき</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>でお<ruby>菓子<rt>かし</rt></ruby>もかわるのです。また、<ruby>店<rt>みせ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、<ruby>日本人<rt>にほんじん</rt></ruby>は<ruby>桜<rt>さくら</rt></ruby><ruby>味<rt>あじ</rt></ruby>のお<ruby>菓子<rt>かし</rt></ruby>を<ruby>見<rt>み</rt></ruby>ると<ruby>春<rt>はる</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じるということも <span class="cloze-blank" data-qid="22">[ 22 ]</span>。でも、わたしは<ruby>桜<rt>さくら</rt></ruby>の<ruby>絵<rt>え</rt></ruby>の<ruby>箱<rt>はこ</rt></ruby>を<ruby>見<rt>み</rt></ruby>ると、<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>たころの<ruby>自分<rt>じぶん</rt></ruby>を<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>します。わたしは、あのころの<ruby>新鮮<rt>しんせん</rt></ruby>な<ruby>気持<rt>きも</rt></ruby>ちを<ruby>忘<rt>わす</rt></ruby>れたくありません。だから、これからもずっと、<ruby>桜<rt>さくら</rt></ruby>の<ruby>絵<rt>え</rt></ruby>の<ruby>箱<rt>はこ</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にしようと <span class="cloze-blank" data-qid="23">[ 23 ]</span>。</p>
                `,
                fullTranslation: `Tôi có giữ lại một chiếc hộp bánh kẹo mà không nỡ vứt đi. Đối với tôi, đó là một chiếc hộp vô cùng đặc biệt.\n\nVào tháng 4 khi vừa sang Nhật, lần đầu tiên đi mua sắm, tôi đã mua một hộp bánh có in hình hoa anh đào. [ 19 ] ĐÓ LÀ MỘT THANH SOCOLA (チョコレートでした) vị hoa anh đào. Vì là chiếc hộp rất đẹp nên tôi đã quyết định giữ lại làm kỷ niệm cho lần đầu tiên đi mua sắm tại Nhật Bản.\n\nTuần trước, khi đi mua đồ, đã lâu lắm rồi tôi mới lại thấy thèm ăn thanh socola ấy nên đã tìm quanh cửa hàng. [ 20 ] THẾ NHƯNG (ところが), dù có tìm bao nhiêu đi nữa tôi vẫn không thể tìm thấy. Khi hỏi nhân viên bán hàng thì tôi được trả lời rằng: "Bánh kẹo vị hoa anh đào chỉ bán vào mùa xuân thôi. Bây giờ là đang bày bán các loại bánh kẹo mùa hè vị dưa hấu và vị soda rồi ạ." Nghe nói cũng có cả những loại bánh kẹo chỉ bán vào mùa thu hay mùa đông nữa.\n\nTôi đã rất ngạc nhiên khi biết rằng ở Nhật Bản có [ 21 ] NHỮNG LOẠI BÁNH KẸO NHƯ VẬY (そういうお菓子). Bánh kẹo cũng thay đổi theo sự chuyển biến của 4 mùa. Hơn nữa, người bán hàng [ 22 ] CŨNG ĐÃ NÓI CHO TÔI BIẾT RẰNG (教えてくれました) người Nhật hễ thấy bánh kẹo vị hoa anh đào là cảm nhận được mùa xuân về. Thế nhưng, tôi hễ nhìn chiếc hộp in hình hoa anh đào là lại nhớ về bản thân mình trong những ngày đầu tiên đến Nhật Bản. Tôi không muốn quên đi cảm giác tươi mới, bỡ ngỡ của những ngày tháng ấy. Vì vậy, tôi [ 23 ] LUÔN TỰ NHỦ / ĐANG NGHĨ RẰNG (思っています) từ nay về sau sẽ luôn trân trọng giữ gìn chiếc hộp in hình hoa anh đào này.`,
                vocabulary: [
                    { word: "お菓子", hiragana: "おかし", meaning: "Bánh kẹo" },
                    { word: "捨てずに", "hiragana": "すてずに", meaning: "Không vứt đi (＝捨てないで)" },
                    { word: "記念", "hiragana": "きねん", meaning: "Kỷ niệm" },
                    { word: "久しぶり", "hiragana": "ひさしぶり", meaning: "Lâu ngày / Lâu rồi mới..." },
                    { word: "並ぶ", "hiragana": "ならぶ", meaning: "Bày bán / Xếp hàng" },
                    { word: "四季", "hiragana": "しき", meaning: "Bốn mùa (Xuân, Hạ, Thu, Đông)" },
                    { word: "新鮮", "hiragana": "しんせん", meaning: "Tươi mới / Mới mẻ" },
                    { word: "大切にする", "hiragana": "たいせつにする", meaning: "Trân trọng / Giữ gìn cẩn thận" }
                ],
                grammarNotes: [
                    { pattern: "〜ずに", meaning: "Không làm việc A mà làm việc B (＝ないで)" },
                    { pattern: "〜ことにする", meaning: "Quyết định làm gì (do bản thân quyết định)" },
                    { pattern: "〜ところが", meaning: "Thế nhưng / Trái lại (tương phản kết quả ngoài dự kiến)" },
                    { pattern: "〜しか…ない", meaning: "Chỉ... (đi với phủ định biểu thị ý chỉ có duy nhất)" },
                    { pattern: "〜てくれる", meaning: "Ai đó làm việc gì tốt đẹp cho mình" },
                    { pattern: "〜ようと思う / 思っている", meaning: "Dự định làm gì / Đang tâm niệm, nung nấu ý định làm gì" }
                ],
                questions: [
                    {
                        id: 19,
                        blankLabel: "[ 19 ]",
                        question: "【19】 に入る最も適当なものはどれですか。",
                        options: [
                            "チョコレートでした",
                            "チョコレートにしてみます",
                            "チョコレートのことでした",
                            "チョコレートにするつもりです"
                        ],
                        optionsAnalysis: [
                            {
                                option: "チョコレートでした",
                                meaning: "Đó là một thanh socola (kể lại định danh món bánh đã mua trong quá khứ)",
                                analysis: "ĐÚNG: Tác giả kể lại món bánh kẹo vị hoa anh đào đã mua hồi tháng 4 ('桜味のチョコレートでした')."
                            },
                            {
                                option: "チョコレートにしてみます",
                                meaning: "Tôi sẽ thử chọn socola xem sao",
                                analysis: "Sai thì: Đây là hành động đã xảy ra trong quá khứ khi mua hàng lần đầu, không dùng thì tương lai thử làm."
                            },
                            {
                                option: "チョコレートのことでした",
                                meaning: "Đó là chuyện về socola",
                                analysis: "Sai cách diễn đạt: Không tự nhiên khi giới thiệu tên món đồ đã mua."
                            },
                            {
                                option: "チョコレートにするつもりです",
                                meaning: "Tôi dự định sẽ chọn socola",
                                analysis: "Sai thì: Không phải là dự định tương lai."
                            }
                        ],
                        answer: 0,
                        evidence: "「桜の絵の箱に入ったお菓子を買いました。桜味の [ 19 ]。きれいな箱だったので、日本で初めて買い物をした記念に持っていることにしました。」",
                        explanation: "Đáp án 1 (チョコレートでした) đúng. Tác giả đang tường thuật lại món đồ mình đã mua trong quá khứ vào tháng 4, đó chính là một thanh socola vị hoa anh đào."
                    },
                    {
                        id: 20,
                        blankLabel: "[ 20 ]",
                        question: "【20】 に入る最も適当なものはどれですか。",
                        options: [
                            "それで",
                            "そのうえ",
                            "ちなみに",
                            "ところが"
                        ],
                        optionsAnalysis: [
                            {
                                option: "それで",
                                meaning: "Vì thế / Do đó (kết quả tự nhiên)",
                                analysis: "Sai: Hành động đi tìm nhưng không thấy là sự việc tương phản ngoài mong đợi, không dùng 'それで'."
                            },
                            {
                                option: "そのうえ",
                                meaning: "Hơn nữa / Thêm vào đó (bổ sung cùng chiều)",
                                analysis: "Sai: Hai vế mang tính chất đối lập kết quả."
                            },
                            {
                                option: "ちなみに",
                                meaning: "Nhân tiện / Nói thêm",
                                analysis: "Sai: Không dùng để chuyển ý trong mạch kể hành động tìm kiếm."
                            },
                            {
                                option: "ところが",
                                meaning: "Thế nhưng / Trái lại (tương phản kết quả thực tế ngoài dự tính)",
                                analysis: "ĐÚNG: Tìm kiếm trong quán ('店の中を探しました'), thế nhưng ('ところが') dù tìm bao nhiêu cũng không thấy ('いくら探しても、見つけられませんでした')."
                            }
                        ],
                        answer: 3,
                        evidence: "「久しぶりにそのチョコレートが食べたくなって、店の中を探しました。[ 20 ]、いくら探しても、見つけられませんでした。」",
                        explanation: "Đáp án 4 (ところが) đúng. 'ところが' là liên từ biểu thị kết quả thực tế diễn ra trái ngược với hành động hoặc mong muốn trước đó (đã vào tìm nhưng trái lại không thấy đâu)."
                    },
                    {
                        id: 21,
                        blankLabel: "[ 21 ]",
                        question: "【21】 に入る最も適当なものはどれですか。",
                        options: [
                            "ある",
                            "この",
                            "そういう",
                            "どちらにも"
                        ],
                        optionsAnalysis: [
                            {
                                option: "ある",
                                meaning: "Có một số / Một loại nào đó (chung chung)",
                                analysis: "Không phù hợp: Tác giả đang khái quát hóa lại đặc điểm bánh kẹo thay đổi theo mùa vừa được nhân viên giải thích."
                            },
                            {
                                option: "この",
                                meaning: "Cái này (chỉ vật gần)",
                                analysis: "Sai: Không dùng 'このお菓子' vì đang nói chung về nhóm các loại bánh kẹo mang tính mùa vụ."
                            },
                            {
                                option: "そういう",
                                meaning: "Loại như thế / Kiểu như vậy (chỉ các loại bánh kẹo theo mùa vừa nêu)",
                                analysis: "ĐÚNG: 'そういうお菓子' (Những loại bánh kẹo như thế) tóm tắt lại các loại bánh kẹo chỉ bán theo mùa (mùa xuân có hoa anh đào, mùa hè có dưa hấu/soda, mùa thu đông có vị riêng)."
                            },
                            {
                                option: "どちらにも",
                                meaning: "Ở cả hai bên",
                                analysis: "Sai nghĩa: Ở đây đang nói về 4 mùa chứ không phải 2 bên đối lập."
                            }
                        ],
                        answer: 2,
                        evidence: "「秋や冬にだけ売られるお菓子もあるそうです。日本には [ 21 ] お菓子があると知って驚きました。四季の変化でお菓子もかわるのです。」",
                        explanation: "Đáp án 3 (そういう) đúng. 'そういうお菓子' (Những loại bánh kẹo như thế) dùng để chỉ các loại bánh kẹo thay đổi theo 4 mùa xuân, hạ, thu, đông vừa được người bán hàng kể ở trên."
                    },
                    {
                        id: 22,
                        blankLabel: "[ 22 ]",
                        question: "【22】 に入る最も適当なものはどれですか。",
                        options: [
                            "教えられました",
                            "教えてもらいました",
                            "教えさせられました",
                            "教えてくれました"
                        ],
                        optionsAnalysis: [
                            {
                                option: "教えられました",
                                meaning: "Đã bị chỉ dạy (thể bị động thông thường)",
                                analysis: "Không phù hợp sắc thái: Người bán hàng nhiệt tình chia sẻ nét văn hóa cho tác giả, cần thể hiện sự cho nhận tốt đẹp."
                            },
                            {
                                option: "教えてもらいました",
                                meaning: "Tôi đã được chỉ dạy (chủ ngữ là 私は)",
                                analysis: "Sai chủ ngữ: Trong câu, chủ ngữ gắn với 'は' là '店の人は' (người bán hàng), nên động từ phải hướng từ người bán hàng sang tác giả ('〜てくれました')."
                            },
                            {
                                option: "教えさせられました",
                                meaning: "Bị ép buộc phải dạy (sai khiến bị động)",
                                analysis: "Hoàn toàn sai ngữ nghĩa."
                            },
                            {
                                option: "教えてくれました",
                                meaning: "Người bán hàng đã chỉ cho tôi biết (chủ ngữ 店の人は làm việc gì tốt cho tôi)",
                                analysis: "ĐÚNG: Cấu trúc '[Người khác] が/は [Người nói] に 〜てくれる' (Người bán hàng đã chỉ cho tôi biết thêm rằng...)."
                            }
                        ],
                        answer: 3,
                        evidence: "「また、店の人は、日本人は桜味のお菓子を見ると春を感じるということも [ 22 ]。」",
                        explanation: "Đáp án 4 (教えてくれました) đúng. Vì chủ ngữ trong câu là '店の人は' (người bán hàng làm việc có lợi cho người nói) nên phải dùng cấu trúc '〜てくれました' (Đã kể/chỉ cho tôi biết)."
                    },
                    {
                        id: 23,
                        blankLabel: "[ 23 ]",
                        question: "【23】 に入る最も適当なものはどれですか。",
                        options: [
                            "思いましょう",
                            "思っています",
                            "思うのではありませんか",
                            "思ってもしかたありません"
                        ],
                        optionsAnalysis: [
                            {
                                option: "思いましょう",
                                meaning: "Chúng ta hãy nghĩ thế nào (thể rủ rê)",
                                analysis: "Sai: Tác giả đang thể hiện quyết tâm cá nhân của chính mình."
                            },
                            {
                                option: "思っています",
                                meaning: "Tôi đang nghĩ như vậy / Luôn tâm niệm như vậy (ý chí lâu dài)",
                                analysis: "ĐÚNG: Mẫu câu 'V-(意向形) と思っています' (大切にしようと思っています) diễn tả ý chí, nguyện vọng được duy trì liên tục từ quá khứ đến hiện tại và tương lai ('これからもずっと')."
                            },
                            {
                                option: "思うのではありませんか",
                                meaning: "Chẳng phải là nghĩ như vậy sao (câu hỏi vặn)",
                                analysis: "Sai ngữ cảnh."
                            },
                            {
                                option: "思ってもしかたありません",
                                meaning: "Dù có nghĩ thế cũng chẳng ích gì",
                                analysis: "Sai ý nghĩa hoàn toàn."
                            }
                        ],
                        answer: 1,
                        evidence: "「わたしは、あのころの新鮮な気持ちを忘れたくありません。だから、これからもずっと、桜の絵の箱を大切にしようと [ 23 ]。」",
                        explanation: "Đáp án 2 (思っています) đúng. Cấu trúc 'V-ようと思っています' kết hợp với 'これからもずっと' diễn tả ý định vững chắc, luôn tâm niệm sẽ giữ gìn và trân trọng chiếc hộp bánh kỷ niệm này."
                    }
                ]
            },
            {
                id: "dokkai-n3-dientu-06",
                lessonNumber: 6,
                title: "日本のアニメとわたし (Anime Nhật Bản và tôi)",
                timeLimit: 360,
                passage: `
                    <p><ruby>先月<rt>せんげつ</rt></ruby>、クラスメート５<ruby>人<rt>にん</rt></ruby>とカラオケに<ruby>行<rt>い</rt></ruby>きました。みんな<ruby>違<rt>ちが</rt></ruby>う<ruby>国<rt>くに</rt></ruby>から<ruby>来<rt>き</rt></ruby>ているので、わたしはみんながわかる<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>歌<rt>うた</rt></ruby>いたいと<ruby>思<rt>おも</rt></ruby>いました。<span class="cloze-blank" data-qid="19">[ 19 ]</span>、<ruby>日本<rt>にほん</rt></ruby>のアニメの<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>うことにしました。みんなの<ruby>知<rt>し</rt></ruby>らない<ruby>歌<rt>うた</rt></ruby>かもしれないと<ruby>心配<rt>しんぱい</rt></ruby>しましたが、その<ruby>必要<rt>ひつよう</rt></ruby>はありませんでした。わたしが<ruby>歌<rt>うた</rt></ruby>い<ruby>始<rt>はじ</rt></ruby>めたら、みんながいっしょに <span class="cloze-blank" data-qid="20">[ 20 ]</span>。みんなも<ruby>自分<rt>じぶん</rt></ruby>の<ruby>国<rt>くに</rt></ruby>でそのアニメを<ruby>見<rt>み</rt></ruby>ていたそうです。</p>
                    <p>カラオケに<ruby>行<rt>い</rt></ruby>ったクラスメートとは、カラオケに<ruby>行<rt>い</rt></ruby>くまで<ruby>授業<rt>じゅぎょう</rt></ruby><ruby>以外<rt>いがい</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>をあまりしませんでした。しかし、カラオケに<ruby>行<rt>い</rt></ruby>って <span class="cloze-blank" data-qid="21">[ 21 ]</span> を<ruby>見<rt>み</rt></ruby>ていたとわかってから、わたしたちはアニメについて<ruby>話<rt>はな</rt></ruby>すようになりました。そして、<ruby>今<rt>いま</rt></ruby>はほかのいろいろな<ruby>話<rt>はなし</rt></ruby>もできる<ruby>友<rt>とも</rt></ruby>だちになれました。<ruby>日本<rt>にほん</rt></ruby>のアニメによってわたしの<ruby>世界<rt>せかい</rt></ruby>は<ruby>広<rt>ひろ</rt></ruby>がったのです。</p>
                    <p><ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>く</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に、わたしはアニメを<ruby>見<rt>み</rt></ruby>ながら、<ruby>日本<rt>にほん</rt></ruby>のことをいろいろ<ruby>知<rt>し</rt></ruby>りました。しかし、そのときは、アニメは<ruby>楽<rt>たの</rt></ruby>しむだけのものだと<ruby>思<rt>おも</rt></ruby>っていました。<ruby>今<rt>いま</rt></ruby>は<ruby>違<rt>ちが</rt></ruby>います。<ruby>日本<rt>にほん</rt></ruby>のアニメがあったから、わたしはカラオケに<ruby>行<rt>い</rt></ruby>った５<ruby>人<rt>にん</rt></ruby>と<ruby>前<rt>まえ</rt></ruby>よりも <span class="cloze-blank" data-qid="22">[ 22 ]</span>。<ruby>今<rt>いま</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>のアニメは<ruby>自分<rt>じぶん</rt></ruby>にとって、<ruby>新<rt>あたら</rt></ruby>しい<ruby>世界<rt>せかい</rt></ruby>のドアを<ruby>開<rt>ひら</rt></ruby>いてくれる <span class="cloze-blank" data-qid="23">[ 23 ]</span>。</p>
                `,
                fullTranslation: `Tháng trước, tôi đã đi hát karaoke cùng với 5 người bạn cùng lớp. Vì mọi người đến từ những quốc gia khác nhau, nên tôi muốn hát một bài tiếng Nhật mà ai cũng có thể hiểu được. [ 19 ] VÌ VẬY / THẾ LÀ (そこで), tôi đã quyết định chọn hát một bài hát anime Nhật Bản. Tôi đã lo lắng rằng có thể mọi người không biết bài hát này, nhưng hóa ra chẳng cần phải lo như vậy. Khi tôi vừa bắt đầu cất giọng hát, mọi người đã cùng [ 20 ] HÁT THEO / HÒA GIỌNG CÙNG (歌い出した). Nghe nói mọi người cũng đều từng xem bộ anime đó ở đất nước của mình.\n\nVới những người bạn cùng lớp đi karaoke hôm đó, trước khi đi thì hầu như chúng tôi chẳng mấy khi nói chuyện ngoài giờ học. Thế nhưng, sau khi đi karaoke và biết được rằng mọi người đều từng xem [ 21 ] CÙNG MỘT BỘ ANIME (同じアニメ), chúng tôi đã bắt đầu trò chuyện với nhau về anime. Và giờ đây, chúng tôi đã trở thành những người bạn có thể tâm sự đủ mọi chuyện khác nữa. Nhờ có anime Nhật Bản mà thế giới của tôi đã được rộng mở.\n\nTrước khi sang Nhật, tôi vừa xem anime vừa biết thêm được rất nhiều điều về Nhật Bản. Nhưng lúc đó, tôi chỉ nghĩ đơn thuần anime là thứ để giải trí thôi. Bây giờ thì khác rồi. Chính nhờ có anime Nhật Bản mà tôi [ 22 ] ĐÃ CÓ THỂ TRỞ NÊN THÂN THIẾT HƠN (親しくなることができたのです) với 5 người bạn đi karaoke hôm ấy so với trước đây. Giờ đây đối với bản thân tôi, tôi [ 23 ] LUÔN NGHĨ RẰNG (ものなのだと思っています) anime Nhật Bản chính là thứ mở ra cánh cửa dẫn tới những thế giới mới.`,
                vocabulary: [
                    { word: "クラスメート", hiragana: "クラスメート", meaning: "Bạn cùng lớp (Classmate)" },
                    { word: "歌い始める", hiragana: "うたいはじめる", meaning: "Bắt đầu hát" },
                    { word: "歌い出す", hiragana: "うたいだす", meaning: "Cất tiếng hát / Bắt đầu hát òa lên" },
                    { word: "授業以外", hiragana: "じゅぎょういがい", meaning: "Ngoài giờ học" },
                    { word: "〜によって", hiragana: "〜によって", meaning: "Nhờ vào / Do..." },
                    { word: "広がる", hiragana: "ひろがる", meaning: "Mở rộng ra / Lan rộng" },
                    { word: "親しい", hiragana: "したしい", meaning: "Thân thiết / Gần gũi" },
                    { word: "ドアを開く", hiragana: "ドアをひらく", meaning: "Mở ra cánh cửa" }
                ],
                grammarNotes: [
                    { pattern: "〜そこで", meaning: "Do đó / Vì vậy / Thế là (nêu giải pháp/hành động tiếp theo dựa trên tình huống trước)" },
                    { pattern: "〜V-始める / V-出す", meaning: "Bắt đầu làm gì / Bộc phát hành động bất chợt" },
                    { pattern: "〜ようになる", meaning: "Bắt đầu có thói quen / Chuyển biến trạng thái" },
                    { pattern: "〜ことができる", meaning: "Có thể làm gì (thể khả năng)" },
                    { pattern: "〜ものだ / ものなのだと思っている", meaning: "Luôn tâm niệm / Đinh ninh rằng đó là điều có ý nghĩa đặc biệt" }
                ],
                questions: [
                    {
                        id: 19,
                        blankLabel: "[ 19 ]",
                        question: "【19】 に入る最も適当なものはどれですか。",
                        options: [
                            "そこで",
                            "それでも",
                            "ところで",
                            "ところが"
                        ],
                        optionsAnalysis: [
                            {
                                option: "そこで",
                                meaning: "Do đó / Vì vậy / Thế là (đưa ra hành động giải quyết tình huống ở câu trước)",
                                analysis: "ĐÚNG: Xuất phát từ mong muốn hát bài tiếng Nhật mà bạn bè các nước đều hiểu -> 'Do đó / Thế là' (そこで) quyết định chọn bài hát anime."
                            },
                            {
                                option: "それでも",
                                meaning: "Mặc dù vậy / Dù thế (nhượng bộ)",
                                analysis: "Sai: Hai câu không có quan hệ tương phản đối lập."
                            },
                            {
                                option: "ところで",
                                meaning: "Nhân tiện / Tiện thể (chuyển chủ đề)",
                                analysis: "Sai: Câu sau là hành động cụ thể hóa mong muốn của câu trước, không phải đổi chủ đề."
                            },
                            {
                                option: "ところが",
                                meaning: "Thế nhưng / Trái lại (kết quả bất ngờ)",
                                analysis: "Sai logic nhân quả."
                            }
                        ],
                        answer: 0,
                        evidence: "「みんな違う国から来ているので、わたしはみんながわかる日本語で歌いたいと思いました。[ 19 ]、日本のアニメの歌を歌うことにしました。」",
                        explanation: "Đáp án 1 (そこで) đúng. 'そこで' biểu thị quan hệ logic: dựa trên tình huống/mong muốn nêu ở câu trước (muốn hát bài ai cũng hiểu), người viết đưa ra quyết định hành động tiếp theo (chọn hát bài hát anime)."
                    },
                    {
                        id: 20,
                        blankLabel: "[ 20 ]",
                        question: "【20】 に入る最も適当なものはどれですか。",
                        options: [
                            "歌い出したせいです",
                            "歌い出したからです",
                            "歌い出しただけです",
                            "歌い出した"
                        ],
                        optionsAnalysis: [
                            {
                                option: "歌い出したせいです",
                                meaning: "Tại vì/Do đã cất tiếng hát (đổ lỗi hậu quả xấu)",
                                analysis: "Sai: Đây là kỷ niệm vui vẻ, không dùng '〜せいで'."
                            },
                            {
                                option: "歌い出したからです",
                                meaning: "Bởi vì đã cất tiếng hát (mệnh đề giải thích lý do)",
                                analysis: "Sai: Câu này là câu trần thuật hành động chính của sự việc, không phải câu trả lời lý do cho câu hỏi nào."
                            },
                            {
                                option: "歌い出しただけです",
                                meaning: "Chỉ cất tiếng hát thôi (hạn định)",
                                analysis: "Sai ý nghĩa và ngữ cảnh."
                            },
                            {
                                option: "歌い出した",
                                meaning: "Đã cùng cất tiếng hát theo / Hòa giọng hát cùng (V-出す diễn tả hành động bộc phát)",
                                analysis: "ĐÚNG: Khi tác giả bắt đầu hát ('わたしが歌い始めたら'), mọi người đã đồng thanh cất tiếng hát theo ('みんながいっしょに歌い出した')."
                            }
                        ],
                        answer: 3,
                        evidence: "「わたしが歌い始めたら、みんながいっしょに [ 20 ]。みんなも自分の国でそのアニメを見ていたそうです。」",
                        explanation: "Đáp án 4 (歌い出した) đúng. Cấu trúc 'V-(bỏ ます) + 出す' diễn tả hành động bất chợt bộc phát/bắt đầu diễn ra một cách tự nhiên. Khi tác giả cất lời, mọi người cùng hào hứng hòa giọng hát theo ('いっしょに歌い出した')."
                    },
                    {
                        id: 21,
                        blankLabel: "[ 21 ]",
                        question: "【21】 に入る最も適当なものはどれですか。",
                        options: [
                            "自分のアニメ",
                            "みんなのアニメ",
                            "違う国のアニメ",
                            "同じアニメ"
                        ],
                        optionsAnalysis: [
                            {
                                option: "自分のアニメ",
                                meaning: "Anime của riêng mình",
                                analysis: "Sai: Các bạn cùng xem chung một bộ anime nên mới hát chung được."
                            },
                            {
                                option: "みんなのアニメ",
                                meaning: "Anime của mọi người",
                                analysis: "Không tự nhiên trong tiếng Nhật."
                            },
                            {
                                option: "違う国のアニメ",
                                meaning: "Anime của các nước khác nhau",
                                analysis: "Sai: Đây là anime của Nhật Bản mà cả nhóm cùng xem."
                            },
                            {
                                option: "同じアニメ",
                                meaning: "Cùng một bộ Anime",
                                analysis: "ĐÚNG: Mọi người nhận ra rằng dù đến từ các nước khác nhau nhưng đều đã từng xem 'cùng một bộ anime' ('同じアニメを見ていた')."
                            }
                        ],
                        answer: 3,
                        evidence: "「しかし、カラオケに行って [ 21 ] を見ていたとわかってから、わたしたちはアニメについて話すようになりました。」",
                        explanation: "Đáp án 4 (同じアニメ) đúng. '同じアニメ' (Cùng một bộ anime) là điểm chung kết nối những người bạn đến từ các quốc gia khác nhau, giúp họ mở đầu cho những cuộc trò chuyện thân thiết sau này."
                    },
                    {
                        id: 22,
                        blankLabel: "[ 22 ]",
                        question: "【22】 に入る最も適当なものはどれですか。",
                        options: [
                            "親しくなることができたのです",
                            "親しくなったほしいのです",
                            "親しくなれそうだったのです",
                            "親しくなってみたいのです"
                        ],
                        optionsAnalysis: [
                            {
                                option: "親しくなることができたのです",
                                meaning: "Đã có thể trở nên thân thiết hơn (khả năng + khẳng định sự thật)",
                                analysis: "ĐÚNG: Nhờ có cầu nối anime mà tác giả 'đã có thể trở nên thân thiết hơn trước rất nhiều' với 5 người bạn cùng lớp ('親しくなることができたのです')."
                            },
                            {
                                option: "親しくなったほしいのです",
                                meaning: "Sai ngữ pháp (phải là 親しくなってほしい, và không dùng cho chính mình)",
                                analysis: "Sai ngữ pháp hoàn toàn."
                            },
                            {
                                option: "親しくなれそうだったのです",
                                meaning: "Có vẻ suýt nữa thân thiết (chưa thành hiện thực)",
                                analysis: "Sai: Thực tế hiện tại họ đã thành bạn bè thân thiết có thể nói mọi chuyện."
                            },
                            {
                                option: "親しくなってみたいのです",
                                meaning: "Muốn thử trở nên thân thiết",
                                analysis: "Sai thì: Đây là thành quả đã đạt được chứ không phải nguyện vọng thử làm."
                            }
                        ],
                        answer: 0,
                        evidence: "「日本のアニメがあったから、わたしはカラオケにいった５人と前よりも [ 22 ]。」",
                        explanation: "Đáp án 1 (親しくなることができたのです) đúng. Cấu trúc 'V-ることができる' (có thể làm được gì) chia quá khứ kèm '〜のです' dùng để đúc kết một kết quả tích cực đã thành hiện thực: nhờ anime mà đã có thể kết thân với bạn bè."
                    },
                    {
                        id: 23,
                        blankLabel: "[ 23 ]",
                        question: "【23】 に入る最も適当なものはどれですか。",
                        options: [
                            "ものなのだと思いますか",
                            "ものだったと思うそうです",
                            "ものなのだと思っています",
                            "ものだと思ったかもしれません"
                        ],
                        optionsAnalysis: [
                            {
                                option: "ものなのだと思いますか",
                                meaning: "Bạn có nghĩ là... không? (hỏi người đọc)",
                                analysis: "Sai: Tác giả đang bày tỏ cảm nghĩ và quan điểm của chính bản thân mình."
                            },
                            {
                                option: "ものだったと思うそうです",
                                meaning: "Nghe nói là đã nghĩ...",
                                analysis: "Sai truyền văn."
                            },
                            {
                                option: "ものなのだと思っています",
                                meaning: "Tôi luôn nghĩ/tin rằng đó là thứ... (quan điểm/nhận thức hiện tại)",
                                analysis: "ĐÚNG: Đi với '今は' ở đầu câu để khẳng định nhận thức trưởng thành hiện nay: 'Đối với bản thân tôi, tôi luôn nghĩ rằng anime là thứ mở ra cánh cửa dẫn tới thế giới mới'."
                            },
                            {
                                option: "ものだと思ったかもしれません",
                                meaning: "Có lẽ đã nghĩ là...",
                                analysis: "Sai: Đây là niềm tin vững chắc của tác giả, không dùng phỏng đoán mơ hồ '〜かもしれません'."
                            }
                        ],
                        answer: 2,
                        evidence: "「今は日本のアニメは自分にとって、新しい世界のドアを開いてくれる [ 23 ]。」",
                        explanation: "Đáp án 3 (ものなのだと思っています) đúng. Cấu trúc '〜と思っています' (Tôi luôn nghĩ rằng / Tôi tin rằng) thể hiện quan điểm, nhận thức sâu sắc hiện tại của tác giả về giá trị của anime đối với bản thân."
                    }
                ]
            },
            {
                id: "dokkai-n3-dientu-07",
                lessonNumber: 7,
                title: "温かいトイレ (Bồn cầu ấm áp)",
                timeLimit: 360,
                passage: `
                    <p><ruby>冬休<rt>ふゆやす</rt></ruby>みにホームステイをした<ruby>家<rt>いえ</rt></ruby>でトイレを<ruby>使<rt>つか</rt></ruby>ったときのことです。お<ruby>手洗<rt>てあら</rt></ruby>いに<ruby>入<rt>はい</rt></ruby>ると、<ruby>自動的<rt>じどうてき</rt></ruby>にトイレのふたが<ruby>開<rt>あ</rt></ruby>いて、びっくりしました。それに、<ruby>座<rt>すわ</rt></ruby>るところが<ruby>温<rt>あたた</rt></ruby>かかったので、またびっくりしました。びっくりしたのは <span class="cloze-blank" data-qid="19">[ 19 ]</span> だけではありません。<ruby>立<rt>た</rt></ruby>つと、<ruby>自動的<rt>じどうてき</rt></ruby>に<ruby>水<rt>みず</rt></ruby>が<ruby>流<rt>なが</rt></ruby>れて、ふたが<ruby>閉<rt>し</rt></ruby>まったのです。<ruby>不思議<rt>ふしぎ</rt></ruby>でした。その<ruby>一方<rt>いっぽう</rt></ruby>で、こんなトイレが<ruby>必要<rt>ひつよう</rt></ruby>なのだろうかと <span class="cloze-blank" data-qid="20">[ 20 ]</span>。</p>
                    <p>ところが、ホストファミリーのおばあさんの<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いて、<ruby>考<rt>かんが</rt></ruby>えが<ruby>変<rt>か</rt></ruby>わりました。おばあさんは、<ruby>急<rt>きゅう</rt></ruby>に<ruby>冷<rt>つめ</rt></ruby>たいところに<ruby>座<rt>すわ</rt></ruby>ると<ruby>体<rt>からだ</rt></ruby>に<ruby>良<rt>よ</rt></ruby>くないのだと<ruby>言<rt>い</rt></ruby>っていました。<ruby>温<rt>あたた</rt></ruby>かいと<ruby>安心<rt>あんしん</rt></ruby>して <span class="cloze-blank" data-qid="21">[ 21 ]</span>。ふたを<ruby>開<rt>あ</rt></ruby>けるのに<ruby>腰<rt>こし</rt></ruby>を<ruby>曲<rt>ま</rt></ruby>げなくていいのも<ruby>楽<rt>らく</rt></ruby>だと<ruby>言<rt>い</rt></ruby>っていました。</p>
                    <p>わたしは、<ruby>座<rt>すわ</rt></ruby>るところが<ruby>冷<rt>つめ</rt></ruby>たくても<ruby>気<rt>き</rt></ruby>にならないし、ふたの<ruby>開閉<rt>かいへい</rt></ruby>も<ruby>大変<rt>たいへん</rt></ruby>ではありません。<span class="cloze-blank" data-qid="22">[ 22 ]</span>、お<ruby>年寄<rt>としよ</rt></ruby>りには<ruby>簡単<rt>かんたん</rt></ruby>なことではないでしょう。このトイレは、お<ruby>年寄<rt>としよ</rt></ruby>りに<ruby>優<rt>やさ</rt></ruby>しいトイレだと<ruby>思<rt>おも</rt></ruby>いました。</p>
                    <p><ruby>日本<rt>にほん</rt></ruby>はお<ruby>年寄<rt>としよ</rt></ruby>りが<ruby>多<rt>おお</rt></ruby>いので、こういうトイレ <span class="cloze-blank" data-qid="23">[ 23 ]</span> <ruby>作<rt>つく</rt></ruby>られたのでしょうか。わたしの<ruby>国<rt>くに</rt></ruby>では<ruby>見<rt>み</rt></ruby>たことがありませんが、<ruby>最近<rt>さいきん</rt></ruby><ruby>腰<rt>こし</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>いと<ruby>言<rt>い</rt></ruby>っている<ruby>祖母<rt>そぼ</rt></ruby>にも<ruby>使<rt>つか</rt></ruby>わせてあげたいです。</p>
                `,
                fullTranslation: `Đây là câu chuyện khi tôi sử dụng nhà vệ sinh ở gia đình homestay vào kỳ nghỉ đông. Vừa bước vào phòng vệ sinh, nắp bồn cầu đã tự động mở ra khiến tôi vô cùng kinh ngạc. Thêm vào đó, chỗ ngồi lại ấm áp nên tôi lại càng bất ngờ hơn. Điều làm tôi ngạc nhiên không chỉ có [ 19 ] NHỮNG ĐIỀU ĐÓ (それ). Khi tôi đứng dậy, nước tự động xả và nắp bồn cầu tự đóng lại. Thật là kỳ diệu. Nhưng mặt khác, tôi [ 20 ] ĐÃ TỪNG NGHĨ RẰNG (思いました) liệu có cần thiết phải có một chiếc bồn cầu như thế này hay không.\n\nThế nhưng, sau khi nghe bà cụ trong gia đình chủ nhà nói chuyện, suy nghĩ của tôi đã hoàn toàn thay đổi. Bà cụ nói rằng nếu đột ngột ngồi vào chỗ lạnh thì sẽ không tốt cho sức khỏe. Nếu bồn cầu ấm áp thì [ 21 ] NGHE NÓI LÀ CÓ THỂ YÊN TÂM NGỒI XUỐNG (座れるのだそうです). Bà còn nói thêm rằng không phải cúi gập lưng để mở nắp bồn cầu cũng rất khỏe và đỡ mệt.\n\nĐối với tôi, dù chỗ ngồi có lạnh thì tôi cũng không để tâm, và việc đóng mở nắp cũng chẳng có gì vất vả. [ 22 ] TUY NHIÊN (しかし), đối với người cao tuổi thì đó không phải là chuyện đơn giản. Tôi nhận ra chiếc bồn cầu này là sản phẩm rất thấu hiểu và thân thiện với người già.\n\nỞ Nhật Bản có rất nhiều người cao tuổi, có lẽ vì thế mà loại bồn cầu như thế này [ 23 ] ĐÃ ĐƯỢC TẠO RA (が作られた) chăng? Ở đất nước tôi chưa từng thấy loại bồn cầu này, nhưng tôi rất muốn cho người bà dạo này hay kêu đau lưng của mình được dùng thử.`,
                vocabulary: [
                    { word: "お手洗い", hiragana: "おてあらい", meaning: "Nhà vệ sinh / Phòng vệ sinh" },
                    { word: "自動的", hiragana: "じどうてき", meaning: "Tự động / Mang tính tự động" },
                    { word: "開閉", hiragana: "かいへい", meaning: "Đóng mở" },
                    { word: "腰を曲げる", hiragana: "こしをまげる", meaning: "Cúi lưng / Gập lưng" },
                    { word: "お年寄り", hiragana: "おとしより", meaning: "Người cao tuổi / Người già" },
                    { word: "優しい", hiragana: "やさしい", meaning: "Thân thiện / Nhân ái / Dễ chịu" },
                    { word: "祖母", hiragana: "そぼ", meaning: "Bà (của mình)" },
                    { word: "使わせてあげたい", hiragana: "つかわせてあげたい", meaning: "Muốn cho (bà) được dùng thử" }
                ],
                grammarNotes: [
                    { pattern: "〜その一方で", meaning: "Mặt khác / Trái lại (so sánh 2 mặt đối lập)" },
                    { pattern: "〜ところが", meaning: "Thế nhưng / Trái lại (chuyển biến bất ngờ)" },
                    { pattern: "〜のだそうだ / 〜そうだ", meaning: "Nghe nói là... (truyền đạt lại lời người khác)" },
                    { pattern: "〜使役形 + てあげる", meaning: "Cho phép ai đó làm gì vì lợi ích của họ" }
                ],
                questions: [
                    {
                        id: 19,
                        blankLabel: "[ 19 ]",
                        question: "【19】 に入る最も適当なものはどれですか。",
                        options: [
                            "水",
                            "トイレ",
                            "その家",
                            "それ"
                        ],
                        optionsAnalysis: [
                            {
                                option: "水",
                                meaning: "Nước",
                                analysis: "Sai: Chi tiết nước xả xuất hiện ở câu sau, không dùng để chỉ hai điều bất ngờ ở câu trước."
                            },
                            {
                                option: "トイレ",
                                meaning: "Nhà vệ sinh",
                                analysis: "Sai nghĩa: Không nói 'điều ngạc nhiên không chỉ có nhà vệ sinh'."
                            },
                            {
                                option: "その家",
                                meaning: "Ngôi nhà đó",
                                analysis: "Sai: Tác giả đang nói về các tính năng tự động của bồn cầu."
                            },
                            {
                                option: "それ",
                                meaning: "Điều đó / Việc đó (đại từ chỉ các sự việc bất ngờ vừa kể: nắp tự mở + bệ ngồi ấm)",
                                analysis: "ĐÚNG: 'びっくりしたのはそれだけではありません' (Điều làm tôi ngạc nhiên không chỉ có thế), 'それ' thay thế cho 2 điều ngạc nhiên vừa kể ở trên."
                            }
                        ],
                        answer: 3,
                        evidence: "「自動的にトイレのふたが開いて、びっくりしました。それに、座るところが温かかったので、またびっくりしました。びっくりしたのは [ 19 ] だけではありません。立つと、自動的に水が流れて、ふたが閉まったのです。」",
                        explanation: "Đáp án 4 (それ) đúng. Đại từ chỉ định 'それ' (điều đó/chuyện đó) dùng để tóm lược lại các hiện tượng kỳ lạ khiến tác giả ngạc nhiên vừa được nêu ở 2 câu trước (nắp tự mở, bệ ngồi ấm áp)."
                    },
                    {
                        id: 20,
                        blankLabel: "[ 20 ]",
                        question: "【20】 に入る最も適当なものはどれですか。",
                        options: [
                            "思っています",
                            "思いました",
                            "思ったところです",
                            "思います"
                        ],
                        optionsAnalysis: [
                            {
                                option: "思っています",
                                meaning: "Đang nghĩ (hiện tại tiếp diễn)",
                                analysis: "Sai thì: Câu sau nói 'sau khi nghe bà cụ nói thì suy nghĩ của tôi ĐÃ THAY ĐỔI' -> Đây là suy nghĩ trong quá khứ trước khi đổi ý."
                            },
                            {
                                option: "思いました",
                                meaning: "Đã nghĩ như vậy (quá khứ)",
                                analysis: "ĐÚNG: Lúc mới trải nghiệm xong, tác giả đã từng băn khoăn tự hỏi 'liệu có cần chiếc bồn cầu hiện đại thế này không' ('〜思いました')."
                            },
                            {
                                option: "思ったところです",
                                meaning: "Vừa mới nghĩ xong",
                                analysis: "Sai thì và ngữ cảnh kể chuyện quá khứ."
                            },
                            {
                                option: "思います",
                                meaning: "Nghĩ (thì hiện tại)",
                                analysis: "Sai: Hiện tại tác giả không còn nghĩ như vậy nữa vì đã hiểu được công dụng cho người già."
                            }
                        ],
                        answer: 1,
                        evidence: "「その一方で、こんなトイレが必要なのだろうかと [ 20 ]。ところが、ホストファミリーのおばあさんの話を聞いて、考えが変わりました。」",
                        explanation: "Đáp án 2 (思いました) đúng. Đây là suy nghĩ ban đầu của tác giả trong quá khứ (trước khi nghe bà cụ giải thích và thay đổi quan điểm) -> chia thì quá khứ '思いました'."
                    },
                    {
                        id: 21,
                        blankLabel: "[ 21 ]",
                        question: "【21】 に入る最も適当なものはどれですか。",
                        options: [
                            "座ってしまうからです",
                            "座るからです",
                            "座れることだそうです",
                            "座れるのだそうです"
                        ],
                        optionsAnalysis: [
                            {
                                option: "座ってしまうからです",
                                meaning: "Vì lỡ ngồi xuống",
                                analysis: "Sai ý nghĩa và sắc thái lỡ làng."
                            },
                            {
                                option: "座るからです",
                                meaning: "Bởi vì ngồi",
                                analysis: "Sai: Đây là lời trích dẫn lại ý kiến của bà cụ, không phải giải thích lý do đơn thuần."
                            },
                            {
                                option: "座れることだそうです",
                                meaning: "Nghe nói là việc có thể ngồi",
                                analysis: "Không tự nhiên trong ngữ pháp tiếng Nhật."
                            },
                            {
                                option: "座れるのだそうです",
                                meaning: "Nghe nói là có thể yên tâm ngồi xuống đấy (khả năng 座れる + truyền văn 〜のだそうです)",
                                analysis: "ĐÚNG: Kết hợp động từ khả năng '座れる' (có thể ngồi một cách yên tâm không sợ sốc nhiệt) với mẫu truyền đạt lời bà cụ '〜のだそうです' (nghe bà cụ kể lại như thế)."
                            }
                        ],
                        answer: 3,
                        evidence: "「おばあさんは、急に冷たいところに座ると体に良くないのだと言っていました。温かいと安心して [ 21 ]。」",
                        explanation: "Đáp án 4 (座れるのだそうです) đúng. Động từ chia thể khả năng '安心して座れる' (có thể an tâm ngồi xuống) kết hợp với đuôi truyền văn '〜のだそうです' (nghe bà kể lại rằng như vậy) hoàn toàn ăn khớp với văn cảnh."
                    },
                    {
                        id: 22,
                        blankLabel: "[ 22 ]",
                        question: "【22】 に入る最も適当なものはどれですか。",
                        options: [
                            "なぜなら",
                            "ちなみに",
                            "しかし",
                            "また"
                        ],
                        optionsAnalysis: [
                            {
                                option: "なぜなら",
                                meaning: "Bởi vì là",
                                analysis: "Sai: Câu sau không giải thích lý do cho câu trước."
                            },
                            {
                                option: "ちなみに",
                                meaning: "Nhân tiện / Nói thêm",
                                analysis: "Sai ngữ cảnh."
                            },
                            {
                                option: "しかし",
                                meaning: "Tuy nhiên / Thế nhưng (đối lập giữa người trẻ và người già)",
                                analysis: "ĐÚNG: Với người trẻ ('わたしは') thì lạnh hay đóng mở nắp không sao, 'Thế nhưng' (しかし) với người già ('お年寄りには') thì đó không phải chuyện đơn giản."
                            },
                            {
                                option: "また",
                                meaning: "Ngoài ra / Hơn nữa",
                                analysis: "Sai: Hai câu mang tính chất tương phản rõ rệt."
                            }
                        ],
                        answer: 2,
                        evidence: "「わたしは、座るところが冷たくても気にならないし、ふたの開閉も大変ではありません。[ 22 ]、お年寄りには簡単なことではないでしょう。」",
                        explanation: "Đáp án 3 (しかし) đúng. Liên từ 'しかし' tạo thế tương phản giữa hai đối tượng: người trẻ như tác giả thì thấy bình thường, nhưng đối với người cao tuổi thì việc chịu lạnh hay cúi gập lưng đóng mở nắp là việc rất khó khăn."
                    },
                    {
                        id: 23,
                        blankLabel: "[ 23 ]",
                        question: "【23】 に入る最も適当なものはどれですか。",
                        options: [
                            "が",
                            "に",
                            "で",
                            "から"
                        ],
                        optionsAnalysis: [
                            {
                                option: "が",
                                meaning: "Trợ từ が (chỉ chủ ngữ tiếp nhận hành động trong câu bị động)",
                                analysis: "ĐÚNG: Cấu trúc bị động '[Vật/Chủ ngữ] が 作られた' (Loại bồn cầu như thế này ĐÃ ĐƯỢC LÀM RA: こういうトイレが作られた)."
                            },
                            {
                                option: "に",
                                meaning: "Trợ từ に",
                                analysis: "Sai: Không dùng 'トイレに作られた'."
                            },
                            {
                                option: "で",
                                meaning: "Trợ từ で",
                                analysis: "Sai."
                            },
                            {
                                option: "から",
                                meaning: "Trợ từ から",
                                analysis: "Sai ngữ pháp."
                            }
                        ],
                        answer: 0,
                        evidence: "「日本はお年寄りが多いので、こういうトイレ [ 23 ] 作られたのでしょうか。」",
                        explanation: "Đáp án 1 (が) đúng. Trong câu bị động 'V-られた', đối tượng/sự vật được tạo ra đóng vai trò chủ ngữ đi với trợ từ 'が' -> 'こういうトイレが作られた' (Loại bồn cầu như thế này được làm ra)."
                    }
                ]
            },
            {
                id: "dokkai-n3-dientu-08",
                lessonNumber: 8,
                title: "大川和子先生への手紙 (Bức thư gửi cô giáo Okawa Kazuko)",
                timeLimit: 360,
                passage: `
                    <p>２０１３<ruby>年<rt>ねん</rt></ruby>５<ruby>月<rt>がつ</rt></ruby>５<ruby>日<rt>にち</rt></ruby><br><ruby>大川<rt>おおかわ</rt></ruby><ruby>和子<rt>かずこ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby></p>
                    <p>ごぶさたしております。お<ruby>元気<rt>げんき</rt></ruby>ですか。<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>て１か<ruby>月<rt>げつ</rt></ruby>がたち、やっと<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いてきました。<ruby>今<rt>いま</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>で<ruby>大<rt>おお</rt></ruby>きな<ruby>問題<rt>もんだい</rt></ruby>はありません。<ruby>留学<rt>りゅうがく</rt></ruby><ruby>前<rt>まえ</rt></ruby>に、<ruby>先生<rt>せんせい</rt></ruby>がいろいろと<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>教<rt>おし</rt></ruby>えてくださったからだと<ruby>思<rt>おも</rt></ruby>います。<ruby>本当<rt>ほんとう</rt></ruby>に <span class="cloze-blank" data-qid="19">[ 19 ]</span>。</p>
                    <p><ruby>生活<rt>せいかつ</rt></ruby>には<ruby>慣<rt>な</rt></ruby>れましたが、<ruby>学校<rt>がっこう</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>は<ruby>大変<rt>たいへん</rt></ruby>です。<span class="cloze-blank" data-qid="20">[ 20 ]</span> <ruby>大変<rt>たいへん</rt></ruby>だとは<ruby>思<rt>おも</rt></ruby>いませんでした。<ruby>授業<rt>じゅぎょう</rt></ruby>の<ruby>予習<rt>よしゅう</rt></ruby><ruby>復習<rt>ふくしゅう</rt></ruby>と<ruby>宿題<rt>しゅくだい</rt></ruby>で<ruby>毎日<rt>まいにち</rt></ruby>とても<ruby>忙<rt>いそが</rt></ruby>しくしています。<ruby>自宅<rt>じたく</rt></ruby>と<ruby>学校<rt>がっこう</rt></ruby>の<ruby>往復<rt>おうふく</rt></ruby>だけで、そのほかの<ruby>場所<rt>ばしょ</rt></ruby>にはほとんど<ruby>出<rt>で</rt></ruby>かけたことがありません。</p>
                    <p><span class="cloze-blank" data-qid="21">[ 21 ]</span>、せっかく<ruby>日本<rt>にほん</rt></ruby>にやってきたのだから、<ruby>勉強<rt>べんきょう</rt></ruby>だけではもったいないとも<ruby>思<rt>おも</rt></ruby>います。<ruby>日本<rt>にほん</rt></ruby>にいる<ruby>間<rt>あいだ</rt></ruby>に、<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>だけでなく、いろいろな<ruby>場所<rt>ばしょ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>って、いろいろな<ruby>経験<rt>けいけん</rt></ruby>がしたいです。だから、これからはできるだけ <span class="cloze-blank" data-qid="22">[ 22 ]</span>。</p>
                    <p><ruby>夏休<rt>なつやす</rt></ruby>みは<ruby>帰国<rt>きこく</rt></ruby>せず、<ruby>日本<rt>にほん</rt></ruby><ruby>国内<rt>こくない</rt></ruby>を<ruby>旅行<rt>りょこう</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>です。<ruby>先生<rt>せんせい</rt></ruby>の<ruby>出身地<rt>しゅっしんち</rt></ruby>の<ruby>京都<rt>きょうと</rt></ruby>にも<ruby>行<rt>い</rt></ruby>こうと<ruby>思<rt>おも</rt></ruby>っているのですが、おすすめの<ruby>場所<rt>ばしょ</rt></ruby>はありますか。もしあったら、<span class="cloze-blank" data-qid="23">[ 23 ]</span>。</p>
                    <p>それでは、またご<ruby>連絡<rt>れんらく</rt></ruby>いたします。お<ruby>元気<rt>げんき</rt></ruby>でお<ruby>過<rt>す</rt></ruby>ごしください。<br>ミツケヴィチ ユーリヤ</p>
                `,
                fullTranslation: `Ngày 5 tháng 5 năm 2013\nKính gửi cô giáo Okawa Kazuko,\n\nĐã lâu rồi em chưa liên lạc với cô. Cô vẫn khỏe mạnh chứ ạ? Đã một tháng trôi qua kể từ khi em sang Nhật, và cuộc sống cuối cùng cũng đã dần ổn định. Hiện tại, sinh hoạt tại Nhật Bản của em không gặp phải vấn đề gì lớn. Em nghĩ đó là nhờ trước khi đi du học, cô đã tận tình chỉ bảo cho em rất nhiều điều. [ 19 ] EM THẬT SỰ CẢM ƠN CÔ VÌ ĐÃ GIÚP ĐỠ EM RẤT NHIỀU (お世話になりました).\n\nEm đã quen với cuộc sống thường ngày, nhưng việc học ở trường thì quả thực rất vất vả. Em đã không nghĩ rằng việc học lại vất vả [ 20 ] ĐẾN MỨC NHƯ THẾ NÀY (こんなに). Mỗi ngày em đều vô cùng bận rộn với việc chuẩn bị bài trước, ôn tập và làm bài tập về nhà. Em chỉ đi đi về về giữa nhà và trường học, hầu như chưa từng đi ra ngoài những nơi nào khác.\n\n[ 21 ] THẾ NHƯNG (でも), vì đã cất công sang tận Nhật Bản rồi, nên em nghĩ nếu chỉ có mỗi học thôi thì thật là lãng phí. Trong thời gian ở Nhật Bản, không chỉ học tiếng Nhật, em còn muốn đi đến nhiều nơi và tích lũy thật nhiều trải nghiệm phong phú. Vì vậy, từ nay về sau [ 22 ] EM DỰ ĐỊNH SẼ CỐ GẮNG RA NGOÀI NHIỀU HƠN (出かけるようにするつもりです).\n\nVào kỳ nghỉ hè, em dự định không về nước mà sẽ đi du lịch trong nước Nhật. Em cũng đang định đến Kyoto - quê hương của cô giáo, không biết cô có địa điểm nào gợi ý cho em không ạ? Nếu có, [ 23 ] CÔ CÓ THỂ CHỈ BẢO / GIỚI THIỆU CHO EM ĐƯỢC KHÔNG Ạ (教えてくださいませんか)?\n\nEm xin phép dừng bút và sẽ liên lạc lại với cô sau ạ. Chúc cô luôn dồi dào sức khỏe.\nMitskevich Yuliya`,
                vocabulary: [
                    { word: "ごぶさたしております", hiragana: "ごぶさたしております", meaning: "Đã lâu không liên lạc (kính ngữ)" },
                    { word: "落ち着く", hiragana: "おちつく", meaning: "Ổn định / Bình tĩnh" },
                    { word: "予習復習", hiragana: "よしゅうふくしゅう", meaning: "Chuẩn bị bài và ôn tập bài" },
                    { word: "往復", hiragana: "おうふく", meaning: "Khứ hồi / Đi đi về về" },
                    { word: "せっかく", hiragana: "せっかく", meaning: "Đã cất công / Khó khăn lắm mới..." },
                    { word: "もったいない", hiragana: "もったいない", meaning: "Lãng phí / Uổng phí" },
                    { word: "出身地", hiragana: "しゅっしんち", meaning: "Quê quán / Nơi sinh ra" },
                    { word: "お過ごしください", hiragana: "おすごしください", meaning: "Chúc (cô) sinh hoạt / trải qua những ngày..." }
                ],
                grammarNotes: [
                    { pattern: "〜お世話になりました", meaning: "Lời cảm ơn kính ngữ: Cảm ơn đã giúp đỡ tôi trong suốt thời gian qua" },
                    { pattern: "〜こんなに + Tính từ / Động từ", meaning: "Đến mức như thế này (chỉ mức độ cao ngoài dự tính)" },
                    { pattern: "〜ようにする + つもりだ", meaning: "Dự định sẽ cố gắng tạo thói quen làm gì" },
                    { pattern: "〜てくださいませんか", meaning: "Thỉnh cầu lịch sự: Cô có thể vui lòng làm việc gì cho em được không ạ?" }
                ],
                questions: [
                    {
                        id: 19,
                        blankLabel: "[ 19 ]",
                        question: "【19】 に入る最も適当なものはどれですか。",
                        options: [
                            "お願いします",
                            "どうぞお構いなく",
                            "お世話になりました",
                            "お久しぶりです"
                        ],
                        optionsAnalysis: [
                            {
                                option: "お願いします",
                                meaning: "Xin nhờ cậy (dùng khi bắt đầu nhờ vả việc gì)",
                                analysis: "Sai ngữ cảnh: Tác giả đang bày tỏ sự biết ơn đối với sự chỉ bảo trước đây của cô giáo."
                            },
                            {
                                option: "どうぞお構いなく",
                                meaning: "Xin đừng bận tâm (khách sáo khi được chủ nhà tiếp đãi)",
                                analysis: "Sai hoàn toàn ngữ nghĩa."
                            },
                            {
                                option: "お世話になりました",
                                meaning: "Em đã nhận được rất nhiều sự giúp đỡ / chỉ bảo của cô (lời cảm ơn trang trọng)",
                                analysis: "ĐÚNG: Sau khi nhắc lại việc cô giáo đã tận tình hướng dẫn trước khi du học ('先生がいろいろと丁寧に教えてくださった'), tác giả dùng '本当にお世話になりました' để bày tỏ lòng biết ơn sâu sắc."
                            },
                            {
                                option: "お久しぶりです",
                                meaning: "Đã lâu không gặp",
                                analysis: "Sai: Ở đầu thư đã dùng câu chào trang trọng 'ごぶさたしております', không lặp lại ở đây."
                            }
                        ],
                        answer: 2,
                        evidence: "「留学前に、先生がいろいろと丁寧に教えてくださったからだと思います。本当に [ 19 ]。」",
                        explanation: "Đáp án 3 (お世話になりました) đúng. Mẫu câu chào trang trọng 'お世話になりました' (Em đã nhận được rất nhiều sự giúp đỡ chỉ bảo của cô) thể hiện lòng tri ân của học sinh đối với sự tận tình dạy bảo của cô giáo trước khi lên đường sang Nhật."
                    },
                    {
                        id: 20,
                        blankLabel: "[ 20 ]",
                        question: "【20】 に入る最も適当なものはどれですか。",
                        options: [
                            "あれは",
                            "こんなに",
                            "それより",
                            "どちらも"
                        ],
                        optionsAnalysis: [
                            {
                                option: "あれは",
                                meaning: "Cái kia",
                                analysis: "Sai ngữ pháp khi đi với '大変だとは思いませんでした'."
                            },
                            {
                                option: "こんなに",
                                meaning: "Đến mức như thế này (phó từ chỉ mức độ vất vả thực tế vượt ngoài dự tính)",
                                analysis: "ĐÚNG: Mẫu 'こんなに大変だとは思いませんでした' (Tôi không nghĩ là việc học lại vất vả ĐẾN MỨC NHƯ THẾ NÀY)."
                            },
                            {
                                option: "それより",
                                meaning: "Hơn thế nữa / Hơn việc đó",
                                analysis: "Sai logic diễn đạt."
                            },
                            {
                                option: "どちらも",
                                meaning: "Cả hai đều",
                                analysis: "Sai: Không có hai sự vật nào được đưa ra so sánh ở đây."
                            }
                        ],
                        answer: 1,
                        evidence: "「生活には慣れましたが、学校の勉強は大変です。[ 20 ] 大変だとは思いませんでした。」",
                        explanation: "Đáp án 2 (こんなに) đúng. Phó từ 'こんなに' (đến mức như thế này) bổ nghĩa cho mức độ vất vả của việc học thực tế mà tác giả đang đối mặt: 'Tôi không ngờ việc học lại vất vả đến mức này'."
                    },
                    {
                        id: 21,
                        blankLabel: "[ 21 ]",
                        question: "【21】 に入る最も適当なものはどれですか。",
                        options: [
                            "でも",
                            "たぶん",
                            "例えば",
                            "ところで"
                        ],
                        optionsAnalysis: [
                            {
                                option: "でも",
                                meaning: "Thế nhưng / Tuy nhiên (liên từ nối tương phản)",
                                analysis: "ĐÚNG: Đoạn trước nói ngày nào cũng chỉ đi đi về về giữa nhà và trường không đi đâu, 'Thế nhưng' (でも) cất công sang Nhật mà chỉ học thôi thì lãng phí quá -> Chuyển ý hợp lý."
                            },
                            {
                                option: "たぶん",
                                meaning: "Có lẽ",
                                analysis: "Sai: 'たぶん' là phó từ phỏng đoán, không đứng đầu câu làm liên từ chuyển đoạn."
                            },
                            {
                                option: "例えば",
                                meaning: "Ví dụ như",
                                analysis: "Sai: Câu sau không phải ví dụ minh họa."
                            },
                            {
                                option: "ところで",
                                meaning: "Nhân tiện / Tiện thể",
                                analysis: "Sai: Không dùng để nối hai suy nghĩ mang tính đối lập về thái độ sống."
                            }
                        ],
                        answer: 0,
                        evidence: "「自宅と学校の往復だけで、そのほかの場所にはほとんど出かけたことがありません。[ 21 ]、せっかく日本にやってきたのだから、勉強だけではもったいないとも思います。」",
                        explanation: "Đáp án 1 (でも) đúng. 'でも' là liên từ tương phản, kết nối thực trạng hiện tại (chỉ ru rú học tập ở nhà) với nhận thức mong muốn thay đổi (đã sang Nhật thì chỉ học thôi là uổng phí)."
                    },
                    {
                        id: 22,
                        blankLabel: "[ 22 ]",
                        question: "【22】 に入る最も適当なものはどれですか。",
                        options: [
                            "出かけたがるはずです",
                            "出かけるそうです",
                            "出かけるようにするつもりです",
                            "出かけてほしいのです"
                        ],
                        optionsAnalysis: [
                            {
                                option: "出かけたがるはずです",
                                meaning: "Chắc là người ta muốn ra ngoài (〜がる dùng cho ngôi thứ ba)",
                                analysis: "Sai chủ ngữ: Tác giả đang nói về quyết tâm của chính mình."
                            },
                            {
                                option: "出かけるそうです",
                                meaning: "Nghe nói là sẽ ra ngoài (truyền văn)",
                                analysis: "Sai: Không dùng truyền văn cho hành động của bản thân."
                            },
                            {
                                option: "出かけるようにするつもりです",
                                meaning: "Tôi dự định sẽ cố gắng ra ngoài nhiều hơn (V-ようにする + つもりです)",
                                analysis: "ĐÚNG: Đi sau 'だから、これからはできるだけ' để thể hiện quyết tâm và dự định thay đổi lối sống của bản thân ('Tôi dự định sẽ cố gắng đi ra ngoài nhiều hơn')."
                            },
                            {
                                option: "出かけてほしいのです",
                                meaning: "Tôi muốn ai đó đi ra ngoài (〜てほしい mong muốn người khác làm)",
                                analysis: "Sai chủ thể hành động: Tác giả muốn tự mình đi trải nghiệm."
                            }
                        ],
                        answer: 2,
                        evidence: "「いろいろな場所へ行って、いろいろな経験がしたいです。だから、これからはできるだけ [ 22 ]。」",
                        explanation: "Đáp án 3 (出かけるようにするつもりです) đúng. Kết hợp '〜ようにする' (cố gắng nỗ lực thực hiện một hành vi) với '〜つもりです' (dự định của bản thân) tạo thành câu biểu thị quyết tâm thay đổi lối sống."
                    },
                    {
                        id: 23,
                        blankLabel: "[ 23 ]",
                        question: "【23】 に入る最も適当なものはどれですか。",
                        options: [
                            "教えてはいかがですか",
                            "教えていただきませんか",
                            "教えてもよろしいでしょうか",
                            "教えてくださいませんか"
                        ],
                        optionsAnalysis: [
                            {
                                option: "教えてはいかがですか",
                                meaning: "Cô hãy chỉ bảo xem sao (lời khuyên/gợi ý cho người khác)",
                                analysis: "Không phù hợp: Học sinh không dùng thể này để nhờ vả giáo viên."
                            },
                            {
                                option: "教えていただきませんか",
                                meaning: "Sai ngữ pháp (phải là 教えていただけませんか / いただきませんか không tự nhiên)",
                                analysis: "Sai cấu trúc ngữ pháp."
                            },
                            {
                                option: "教えてもよろしいでしょうか",
                                meaning: "Em chỉ/dạy cho cô có được không (xin phép bản thân thực hiện)",
                                analysis: "Sai chiều hành động: Người chỉ địa điểm gợi ý là cô giáo."
                            },
                            {
                                option: "教えてくださいませんか",
                                meaning: "Cô có thể chỉ bảo / giới thiệu cho em được không ạ (thỉnh cầu lịch sự trang trọng)",
                                analysis: "ĐÚNG: Cấu trúc thỉnh cầu lịch sự 'V-てくださいませんか' dùng khi học sinh nhờ giáo viên chỉ dẫn hoặc gợi ý địa điểm du lịch."
                            }
                        ],
                        answer: 3,
                        evidence: "「先生の出身地の京都にも行こうと思っているのですが、おすすめの場所はありますか。もしあったら、[ 23 ]。」",
                        explanation: "Đáp án 4 (教えてくださいませんか) đúng. Đây là mẫu câu thỉnh cầu kính ngữ lịch sự, phù hợp nhất khi học trò nhờ cô giáo chia sẻ hoặc gợi ý những địa điểm tham quan đẹp ở quê hương của cô."
                    }
                ]
            },
            {
                id: "dokkai-n3-dientu-09",
                lessonNumber: 9,
                title: "日本で感動したこと (Điều khiến tôi cảm động tại Nhật Bản)",
                timeLimit: 360,
                passage: `
                    <p><ruby>先月<rt>せんげつ</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>へのプレゼントを<ruby>買<rt>か</rt></ruby>いに<ruby>初<rt>はじ</rt></ruby>めて<ruby>日本<rt>にほん</rt></ruby>のデパートに<ruby>行<rt>い</rt></ruby>きました。わたしは、<ruby>食器<rt>しょっき</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>で<ruby>見<rt>み</rt></ruby>つけたかわいいコップを<ruby>買<rt>か</rt></ruby>うことにしました。<span class="cloze-blank" data-qid="19">[ 19 ]</span> をレジに<ruby>持<rt>も</rt></ruby>っていったとき、びっくりすることが<ruby>起<rt>お</rt></ruby>きたのです。</p>
                    <p>レジで<ruby>店員<rt>てんいん</rt></ruby>さんにコップを<ruby>渡<rt>わた</rt></ruby>すと、「ご<ruby>自宅用<rt>じたくよう</rt></ruby>ですか。」と<ruby>聞<rt>き</rt></ruby>かれました。<ruby>意味<rt>いみ</rt></ruby>がわからず<ruby>答<rt>こた</rt></ruby>えられないわたしを<ruby>見<rt>み</rt></ruby>て、<ruby>店員<rt>てんいん</rt></ruby>さんは「<ruby>家<rt>いえ</rt></ruby>で<ruby>使<rt>つか</rt></ruby>いますか、プレゼントですか。」と <span class="cloze-blank" data-qid="20">[ 20 ]</span>。わたしは、なぜそんなことを<ruby>聞<rt>き</rt></ruby>くのだろうと<ruby>思<rt>おも</rt></ruby>いながら、「プレゼントです。」と<ruby>答<rt>こた</rt></ruby>えました。<span class="cloze-blank" data-qid="21">[ 21 ]</span>、<ruby>店員<rt>てんいん</rt></ruby>さんはコップを<ruby>箱<rt>はこ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れ、<ruby>紙<rt>かみ</rt></ruby>を<ruby>一<rt>いち</rt></ruby><ruby>枚<rt>まい</rt></ruby><ruby>取<rt>と</rt></ruby>り<ruby>出<rt>だ</rt></ruby>しました。そして、その<ruby>紙<rt>かみ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>箱<rt>はこ</rt></ruby>を<ruby>置<rt>お</rt></ruby>いて<ruby>包<rt>つつ</rt></ruby>み<ruby>始<rt>はじ</rt></ruby>めました。テープを<ruby>使<rt>つか</rt></ruby>わず、<ruby>紙<rt>かみ</rt></ruby>を<ruby>折<rt>お</rt></ruby>って<ruby>包<rt>つつ</rt></ruby>んでいきます。<ruby>最後<rt>さいご</rt></ruby>だけ<ruby>短<rt>みじか</rt></ruby>いテープでとめ、１５<ruby>秒<rt>びょう</rt></ruby>ぐらいで<ruby>完成<rt>かんせい</rt></ruby>しました。<ruby>短<rt>みじか</rt></ruby>い<ruby>時間<rt>じかん</rt></ruby>で<ruby>包<rt>つつ</rt></ruby>んだのに、<ruby>紙<rt>かみ</rt></ruby>は<ruby>箱<rt>はこ</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>にぴったり<ruby>合<rt>あ</rt></ruby>っています。<ruby>最初<rt>さいしょ</rt></ruby>からきれいに <span class="cloze-blank" data-qid="22">[ 22 ]</span>。</p>
                    <p><ruby>帰国<rt>きこく</rt></ruby>したら<ruby>家族<rt>かぞく</rt></ruby>にこの<ruby>話<rt>はなし</rt></ruby>をしたいです。でも、<ruby>言葉<rt>ことば</rt></ruby>だけでは<ruby>伝<rt>つた</rt></ruby>わらないでしょう。だから、デパートでお<ruby>土産<rt>みやげ</rt></ruby>を<ruby>買<rt>か</rt></ruby>って<ruby>包<rt>つつ</rt></ruby>んでもらい、<ruby>家族<rt>かぞく</rt></ruby>に <span class="cloze-blank" data-qid="23">[ 23 ]</span>。</p>
                `,
                fullTranslation: `Tháng trước, lần đầu tiên tôi đến một trung tâm thương mại (department store) của Nhật Bản để mua quà tặng cho bạn bè. Tôi đã quyết định mua một chiếc cốc xinh xắn tìm thấy ở quầy đồ gia dụng. Khi mang [ 19 ] CHIẾC CỐC ĐÓ (それ) ra quầy thu ngân, một điều bất ngờ đã xảy ra.\n\nKhi tôi đưa chiếc cốc cho nhân viên thu ngân, tôi được hỏi: "Quý khách mua dùng cho gia đình (ご自宅用) ạ?". Thấy tôi không hiểu nghĩa và chưa trả lời được, nhân viên bán hàng [ 20 ] ĐÃ NÓI LẠI DỄ HIỂU HƠN CHO TÔI (言い直してくれました) rằng: "Bạn mua dùng ở nhà hay là làm quà tặng ạ?". Tôi vừa tự hỏi sao người ta lại hỏi thế, vừa trả lời: "Là quà tặng ạ". [ 21 ] NGAY SAU ĐÓ (すると), nhân viên liền đặt chiếc cốc vào hộp và rút ra một tờ giấy bọc. Rồi họ đặt chiếc hộp lên trên tờ giấy và bắt đầu gói. Họ không dùng băng dính mà cứ thế khéo léo gấp các mép giấy lại để bọc chiếc hộp. Chỉ đến bước cuối cùng mới dán một mẩu băng dính ngắn, và chỉ mất tầm 15 giây là hoàn thành xong. Dù gói trong thời gian rất ngắn nhưng tờ giấy bọc lại ôm sát vừa in với hình dáng của hộp, [ 22 ] TRÔNG CỨ NHƯ LÀ (包まれていたみたいでした) đã được đóng gói tuyệt đẹp ngay từ đầu vậy.\n\nSau khi về nước tôi rất muốn kể câu chuyện này cho gia đình. Nhưng có lẽ chỉ bằng lời nói thì khó mà truyền tải hết được. Vì vậy, tôi [ 23 ] ĐANG DỰ ĐỊNH SẼ (見せようと思っています) mua quà lưu niệm ở trung tâm thương mại, nhờ họ gói bọc cẩn thận rồi mang về cho gia đình xem.`,
                vocabulary: [
                    { word: "食器売り場", hiragana: "しょっきうりば", meaning: "Quầy bán đồ gia dụng / Bát đĩa cốc chén" },
                    { word: "自宅用", hiragana: "じたくよう", meaning: "Dùng cho gia đình / Tự dùng ở nhà" },
                    { word: "言い直す", hiragana: "いいなおす", meaning: "Nói lại / Diễn đạt lại" },
                    { word: "包む", hiragana: "つつむ", meaning: "Gói / Bọc" },
                    { word: "折る", hiragana: "おる", meaning: "Gấp / Xếp" },
                    { word: "完成", hiragana: "かんせい", meaning: "Hoàn thành" },
                    { word: "ぴったり", hiragana: "ぴったり", meaning: "Vừa vặn / Vừa khít" },
                    { word: "お土産", hiragana: "おみやげ", meaning: "Quà lưu niệm / Quà biếu" }
                ],
                grammarNotes: [
                    { pattern: "〜V-直す", meaning: "Làm lại hành động gì đó (nói lại, viết lại, làm lại)" },
                    { pattern: "〜てくれる", meaning: "Ai đó làm việc gì tốt cho mình" },
                    { pattern: "〜すると", meaning: "Thế rồi / Ngay sau đó (chỉ hành động/sự việc diễn ra nối tiếp)" },
                    { pattern: "〜みたいだ / みたいだった", meaning: "Trông như là / Cứ như thể là... (so sánh ví von)" },
                    { pattern: "〜ようと思う / 思っている", meaning: "Dự định làm gì (ý chí của bản thân)" }
                ],
                questions: [
                    {
                        id: 19,
                        blankLabel: "[ 19 ]",
                        question: "【19】 に入る最も適当なものはどれですか。",
                        options: [
                            "それ",
                            "あれ",
                            "そっち",
                            "あっち"
                        ],
                        optionsAnalysis: [
                            {
                                option: "それ",
                                meaning: "Cái đó (đại từ chỉ đồ vật vừa được đề cập ở câu trước)",
                                analysis: "ĐÚNG: 'それ' thay thế cho chiếc cốc xinh xắn vừa tìm thấy ở quầy bát đĩa ('かわいいコップ')."
                            },
                            {
                                option: "あれ",
                                meaning: "Cái kia (chỉ vật ở xa cả hai người)",
                                analysis: "Sai đại từ chỉ định."
                            },
                            {
                                option: "そっち",
                                meaning: "Phía đó / Hướng đó",
                                analysis: "Sai: Không dùng từ chỉ phương hướng cho đồ vật mang ra thanh toán."
                            },
                            {
                                option: "あっち",
                                meaning: "Phía kia / Hướng kia",
                                analysis: "Sai."
                            }
                        ],
                        answer: 0,
                        evidence: "「わたしは、食器売り場で見つけたかわいいコップを買うことにしました。[ 19 ] をレジに持っていったとき、びっくりすることが起きたのです。」",
                        explanation: "Đáp án 1 (それ) đúng. Đại từ chỉ định 'それ' (cái đó) thay thế cho 'chiếc cốc xinh xắn' (かわいいコップ) vừa được nói đến ở câu trước khi mang ra quầy tính tiền."
                    },
                    {
                        id: 20,
                        blankLabel: "[ 20 ]",
                        question: "【20】 に入る最も適当なものはどれですか。",
                        options: [
                            "言い返しました",
                            "言い直しませんでした",
                            "言い返さないでくれました",
                            "言い直してくれました"
                        ],
                        optionsAnalysis: [
                            {
                                option: "言い返しました",
                                meaning: "Đã cãi lại / Đáp trả lại",
                                analysis: "Sai hoàn toàn ngữ nghĩa và thái độ phục vụ khách hàng."
                            },
                            {
                                option: "言い直しませんでした",
                                meaning: "Đã không nói lại",
                                analysis: "Sai: Nhân viên đã diễn giải lại bằng câu đơn giản '家で使いますか、プレゼントですか'."
                            },
                            {
                                option: "言い返さないでくれました",
                                meaning: "Đã không cãi lại tôi",
                                analysis: "Sai ngữ nghĩa."
                            },
                            {
                                option: "言い直してくれました",
                                meaning: "Đã nói lại/diễn đạt lại một cách dễ hiểu cho tôi (V-直す + てくれる)",
                                analysis: "ĐÚNG: Thấy khách nước ngoài chưa hiểu từ 'ご自宅用', nhân viên đã tâm lý đổi sang câu hỏi đơn giản hơn để giúp đỡ tác giả ('〜言い直してくれました')."
                            }
                        ],
                        answer: 3,
                        evidence: "「意味がわからず答えられないわたしを見て、店員さんは「家で使いますか、プレゼントですか。」と [ 20 ]。」",
                        explanation: "Đáp án 4 (言い直してくれました) đúng. Động từ '言い直す' (nói lại bằng cách khác dễ hiểu hơn) kết hợp với '〜てくれました' (làm giúp cho người nói) phản ánh sự ân cần, chu đáo của nhân viên bán hàng Nhật Bản."
                    },
                    {
                        id: 21,
                        blankLabel: "[ 21 ]",
                        question: "【21】 に入る最も適当なものはどれですか。",
                        options: [
                            "実は",
                            "すると",
                            "ところで",
                            "例えば"
                        ],
                        optionsAnalysis: [
                            {
                                option: "実は",
                                meaning: "Thực ra là (tiết lộ sự thật bất ngờ)",
                                analysis: "Sai ngữ cảnh."
                            },
                            {
                                option: "すると",
                                meaning: "Ngay sau đó / Thế là (nối tiếp hành động phản ứng liền kề)",
                                analysis: "ĐÚNG: Sau khi tác giả vừa trả lời 'Là quà tặng', 'Ngay sau đó / Thế là' (すると) nhân viên liền bắt tay vào lấy hộp và giấy gói quà."
                            },
                            {
                                option: "ところで",
                                meaning: "Nhân tiện (chuyển chủ đề)",
                                analysis: "Sai: Đây là chuỗi hành vi thanh toán liên tục."
                            },
                            {
                                option: "例えば",
                                meaning: "Ví dụ như",
                                analysis: "Sai logic."
                            }
                        ],
                        answer: 1,
                        evidence: "「「プレゼントです。」と答えました。[ 21 ]、店員さんはコップを箱に入れ、紙を一枚取り出しました。」",
                        explanation: "Đáp án 2 (すると) đúng. Liên từ 'すると' biểu thị hành động xảy ra ngay tiếp theo sau một sự việc hoặc lời nói vừa dứt (vừa nghe xong câu trả lời thì lập tức bắt đầu quy trình gói quà)."
                    },
                    {
                        id: 22,
                        blankLabel: "[ 22 ]",
                        question: "【22】 に入る最も適当なものはどれですか。",
                        options: [
                            "包まれていたものでした",
                            "包まれていたことでした",
                            "包まれていたみたいでした",
                            "包まれていたからでした"
                        ],
                        optionsAnalysis: [
                            {
                                option: "包まれていたものでした",
                                meaning: "Là thứ đã được gói",
                                analysis: "Sai cấu trúc miêu tả trạng thái."
                            },
                            {
                                option: "包まれていたことでした",
                                meaning: "Là chuyện đã được gói",
                                analysis: "Không tự nhiên trong tiếng Nhật."
                            },
                            {
                                option: "包まれていたみたいでした",
                                meaning: "Trông như thể / Cứ như là đã được gói đẹp đẽ từ trước (so sánh ví von 〜みたいだ)",
                                analysis: "ĐÚNG: Giấy gói ôm khít hoàn hảo, tạo cảm giác 'như thể đã được gói đẹp đẽ từ trước vậy' (きれいに包まれていたみたいでした)."
                            },
                            {
                                option: "包まれていたからでした",
                                meaning: "Bởi vì đã được gói",
                                analysis: "Sai quan hệ nguyên nhân kết quả."
                            }
                        ],
                        answer: 2,
                        evidence: "「短い時間で包んだのに、紙は箱の形にぴったり合っています。最初からきれいに [ 22 ]。」",
                        explanation: "Đáp án 3 (包まれていたみたいでした) đúng. Cấu trúc so sánh ví von '〜みたいでした' (trông như thể là / cứ như là) dùng để khen ngợi trình độ gói quà điêu luyện, nhanh chóng mà vừa khít như thể đã được đóng gói hoàn chỉnh từ trước."
                    },
                    {
                        id: 23,
                        blankLabel: "[ 23 ]",
                        question: "【23】 に入る最も適当なものはどれですか。",
                        options: [
                            "見せるだろうと思っていました",
                            "見せようと思っています",
                            "見せるだろうと思うはずです",
                            "見せようと思ったかもしれません"
                        ],
                        optionsAnalysis: [
                            {
                                option: "見せるだろうと思っていました",
                                meaning: "Tôi đã nghĩ là chắc sẽ cho xem (quá khứ)",
                                analysis: "Sai thì: Đây là kế hoạch, ý định tương lai khi về nước."
                            },
                            {
                                option: "見せようと思っています",
                                meaning: "Tôi đang dự định cho gia đình xem (V-ようと思っている thể hiện ý chí hiện tại)",
                                analysis: "ĐÚNG: Thể hiện nguyện vọng và kế hoạch: mua đồ nhờ gói rồi mang về tận mắt cho gia đình xem ('見せようと思っています')."
                            },
                            {
                                option: "見せるだろうと思うはずです",
                                meaning: "Chắc chắn sẽ nghĩ là...",
                                analysis: "Sai cấu trúc diễn đạt ý chí cá nhân."
                            },
                            {
                                option: "見せようと思ったかもしれません",
                                meaning: "Có lẽ đã định cho xem",
                                analysis: "Sai thì và sắc thái phỏng đoán mờ nhạt."
                            }
                        ],
                        answer: 1,
                        evidence: "「だから、デパートでお土産を買って包んでもらい、家族に [ 23 ]。」",
                        explanation: "Đáp án 2 (見せようと思っています) đúng. Cấu trúc ý chí 'V-ようと思っています' biểu thị kế hoạch và dự định thực tế của tác giả (sẽ mua quà được gói sẵn đem về cho người nhà xem)."
                    }
                ]
            },
            {
                id: "dokkai-n3-dientu-10",
                lessonNumber: 10,
                title: "ごみの捨て方 (Cách vứt rác)",
                timeLimit: 360,
                passage: `
                    <p><ruby>日本<rt>にほん</rt></ruby>ではごみは、「<ruby>燃<rt>も</rt></ruby>えるごみ」 「<ruby>燃<rt>も</rt></ruby>えないごみ」 「リサイクルできる<ruby>物<rt>もの</rt></ruby>」などに<ruby>分<rt>わ</rt></ruby>けて<ruby>出<rt>だ</rt></ruby>さなければいけません。でも、<ruby>日本<rt>にほん</rt></ruby>で<ruby>初<rt>はじ</rt></ruby>めてごみを<ruby>出<rt>だ</rt></ruby>すとき、わたしはそのルールのことがまだあまりよくわかっていませんでした。それで、ごみを<ruby>分<rt>わ</rt></ruby>けずに <span class="cloze-blank" data-qid="19">[ 19 ]</span>。</p>
                    <p><ruby>朝<rt>あさ</rt></ruby>、<ruby>出<rt>で</rt></ruby>かけるとき、アパートの<ruby>前<rt>まえ</rt></ruby>の<ruby>決<rt>き</rt></ruby>められた<ruby>場所<rt>ばしょ</rt></ruby>にごみを<ruby>出<rt>だ</rt></ruby>しました。<span class="cloze-blank" data-qid="20">[ 20 ]</span>、<ruby>夕方<rt>ゆうがた</rt></ruby><ruby>帰宅<rt>きたく</rt></ruby>すると、わたしのごみは<ruby>回収<rt>かいしゅう</rt></ruby>されずに<ruby>残<rt>のこ</rt></ruby>っていました。</p>
                    <p>その<ruby>日<rt>ひ</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>、<ruby>大家<rt>おおや</rt></ruby>さんが<ruby>来<rt>き</rt></ruby>て、<ruby>紙<rt>かみ</rt></ruby>などの「<ruby>燃<rt>も</rt></ruby>えるごみ」、ガラスなどの「<ruby>燃<rt>も</rt></ruby>えないごみ」、ペットボトルなどの「リサイクルできる<ruby>物<rt>もの</rt></ruby>」を<ruby>分<rt>わ</rt></ruby>けなければいけない<ruby>理由<rt>りゆう</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>してくれました。ごみの<ruby>中<rt>なか</rt></ruby>には、もう<ruby>一度<rt>いちど</rt></ruby><ruby>資源<rt>しげん</rt></ruby>として<ruby>使<rt>つか</rt></ruby>える<ruby>物<rt>もの</rt></ruby> <span class="cloze-blank" data-qid="21">[ 21 ]</span> たくさんあります。それをきちんと<ruby>分<rt>わ</rt></ruby>ければ、<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>地球<rt>ちきゅう</rt></ruby>の<ruby>資源<rt>しげん</rt></ruby>が<ruby>守<rt>まも</rt></ruby>れるということがわかりました。</p>
                    <p>それ<ruby>以降<rt>いこう</rt></ruby>は、きちんとごみを <span class="cloze-blank" data-qid="22">[ 22 ]</span>。<ruby>最近<rt>さいきん</rt></ruby>は<ruby>物<rt>もの</rt></ruby>を<ruby>買<rt>か</rt></ruby>うときに、これは<ruby>燃<rt>も</rt></ruby>えるか、リサイクルできるか、と<ruby>考<rt>かんが</rt></ruby>えたりもします。ごみを<ruby>分<rt>わ</rt></ruby>けるのは<ruby>少<rt>すこ</rt></ruby>し<ruby>大変<rt>たいへん</rt></ruby>です。でも、<ruby>今<rt>いま</rt></ruby>まで<ruby>深<rt>ふか</rt></ruby>く<ruby>考<rt>かんが</rt></ruby>えたことのなかった<ruby>環境<rt>かんきょう</rt></ruby><ruby>問題<rt>もんだい</rt></ruby>が<ruby>少<rt>すこ</rt></ruby>し<ruby>身近<rt>みぢか</rt></ruby>になったような <span class="cloze-blank" data-qid="23">[ 23 ]</span>。</p>
                `,
                fullTranslation: `Ở Nhật Bản, rác thải bắt buộc phải phân loại thành "Rác cháy được", "Rác không cháy được", "Đồ có thể tái chế"... rồi mới được mang đi vứt. Thế nhưng, khi lần đầu vứt rác ở Nhật, tôi vẫn chưa hiểu rõ về quy tắc đó. Vì vậy, [ 19 ] TÔI ĐÃ LỠ VỨT RÁC MÀ KHÔNG PHÂN LOẠI (出してしまったのです).\n\nBuổi sáng lúc đi ra ngoài, tôi đã mang rác vứt ở đúng nơi quy định trước tòa nhà chung cư. [ 20 ] THẾ NHƯNG (ところが), chiều tối khi về nhà thì túi rác của tôi vẫn bị bỏ lại mà không được thu gom.\n\nTối hôm đó, bác chủ nhà trọ đã đến và giải thích cho tôi lý do vì sao phải phân loại "Rác cháy được" như giấy, "Rác không cháy được" như thủy tinh, và "Đồ có thể tái chế" như chai nhựa PET. Trong rác [ 21 ] CŨNG CÓ RẤT NHIỀU (物もたくさんあります) đồ vật có thể tái sử dụng làm tài nguyên một lần nữa. Tôi đã hiểu ra rằng nếu phân loại cẩn thận thì chúng ta có thể bảo vệ được nguồn tài nguyên quý giá của Trái Đất.\n\nKể từ sau lần đó, [ 22 ] TÔI LUÔN CỐ GẮNG DUY TRÌ THÓI QUEN (分けるようにしています) phân loại rác một cách cẩn thận. Gần đây, khi mua sắm đồ đạc, tôi cũng thường hay nghĩ xem món đồ này có cháy được không, hay có tái chế được không. Việc phân loại rác quả thực có hơi vất vả một chút. Nhưng tôi [ 23 ] CÓ CẢM GIÁC RẰNG (気がします) vấn đề môi trường - điều mà trước đây tôi chưa từng nghĩ sâu sắc - dường như đã trở nên gần gũi hơn với bản thân mình.`,
                vocabulary: [
                    { word: "燃えるごみ", hiragana: "もえるごみ", meaning: "Rác cháy được (rác hữu cơ, giấy vụn...)" },
                    { word: "燃えないごみ", hiragana: "もえないごみ", meaning: "Rác không cháy được (thủy tinh, kim loại...)" },
                    { word: "回収", hiragana: "かいしゅう", meaning: "Thu gom / Thu hồi" },
                    { word: "大家さん", hiragana: "おおやさん", meaning: "Chủ nhà trọ / Chủ nhà cho thuê" },
                    { word: "資源", hiragana: "しげん", meaning: "Tài nguyên" },
                    { word: "守る", hiragana: "まもる", meaning: "Bảo vệ / Gìn giữ" },
                    { word: "環境問題", hiragana: "かんきょうもんだい", meaning: "Vấn đề môi trường" },
                    { word: "身近", hiragana: "みぢか", meaning: "Gần gũi / Thân thuộc" }
                ],
                grammarNotes: [
                    { pattern: "〜てしまう", meaning: "Lỡ làm việc gì đó ngoài ý muốn (sự tiếc nuối)" },
                    { pattern: "〜ところが", meaning: "Thế nhưng / Trái lại (chuyển biến kết quả bất ngờ)" },
                    { pattern: "〜ようにしている", meaning: "Luôn cố gắng duy trì thói quen thực hiện việc gì" },
                    { pattern: "〜ような気がする", meaning: "Có cảm giác dường như là... / Thấy mang máng như là..." }
                ],
                questions: [
                    {
                        id: 19,
                        blankLabel: "[ 19 ]",
                        question: "【19】 に入る最も適当なものはどれですか。",
                        options: [
                            "出してしまったのです",
                            "出してしまったからです",
                            "出してしまったかもしれません",
                            "出してしまったからかもしれません"
                        ],
                        optionsAnalysis: [
                            {
                                option: "出してしまったのです",
                                meaning: "Tôi đã lỡ mang rác đi vứt đấy (thể tiếc nuối 〜てしまう + 〜のです trần thuật sự thật)",
                                analysis: "ĐÚNG: Kể lại sự việc đã lỡ vứt rác sai quy định trong quá khứ do chưa nắm rõ luật ('ごみを分けずに出してしまったのです')."
                            },
                            {
                                option: "出してしまったからです",
                                meaning: "Bởi vì đã lỡ vứt rác (mệnh đề giải thích lý do)",
                                analysis: "Sai: Câu trước đã có 'それで' (vì vậy) nêu nguyên nhân rồi, câu này là kết quả hành động chứ không phải mệnh đề lý do."
                            },
                            {
                                option: "出してしまったかもしれません",
                                meaning: "Có lẽ đã lỡ vứt rác (phỏng đoán)",
                                analysis: "Sai: Đây là hành vi thực tế của chính tác giả, không dùng phỏng đoán mơ hồ."
                            },
                            {
                                option: "出してしまったからかもしれません",
                                meaning: "Có lẽ là vì đã lỡ vứt rác",
                                analysis: "Sai cấu trúc ngữ cảnh."
                            }
                        ],
                        answer: 0,
                        evidence: "「日本で初めてごみを出すとき、わたしはそのルールのことがまだあまりよくわかっていませんでした。それで、ごみを分けずに [ 19 ]。」",
                        explanation: "Đáp án 1 (出してしまったのです) đúng. Cấu trúc 'V-てしまう' diễn tả một hành động lỡ lầm trong quá khứ do chưa hiểu luật, kết hợp với '〜のです' dùng để tường thuật lại sự việc đã xảy ra."
                    },
                    {
                        id: 20,
                        blankLabel: "[ 20 ]",
                        question: "【20】 に入る最も適当なものはどれですか。",
                        options: [
                            "また",
                            "たとえば",
                            "それに",
                            "ところが"
                        ],
                        optionsAnalysis: [
                            {
                                option: "また",
                                meaning: "Ngoài ra / Hơn nữa",
                                analysis: "Sai: Hai câu có quan hệ tương phản đối lập."
                            },
                            {
                                option: "たとえば",
                                meaning: "Ví dụ như",
                                analysis: "Sai: Câu sau không phải ví dụ minh họa."
                            },
                            {
                                option: "それに",
                                meaning: "Thêm vào đó / Hơn nữa",
                                analysis: "Sai logic."
                            },
                            {
                                option: "ところが",
                                meaning: "Thế nhưng / Trái lại (tương phản kết quả thực tế ngoài dự tính)",
                                analysis: "ĐÚNG: Buổi sáng đem rác ra vứt đúng chỗ quy định, 'Thế nhưng' (ところが) buổi tối về thì rác vẫn bị bỏ lại không ai thu gom."
                            }
                        ],
                        answer: 3,
                        evidence: "「朝、出かけるとき、アパートの前の決められた場所にごみを出しました。[ 20 ]、夕方帰宅すると、わたしのごみは回収されずに残っていました。」",
                        explanation: "Đáp án 4 (ところが) đúng. 'ところが' là liên từ diễn tả sự việc xảy ra trái ngược với dự tính thông thường (đã mang rác ra bãi rác nhưng chiều về lại thấy bị bỏ lại không được thu gom)."
                    },
                    {
                        id: 21,
                        blankLabel: "[ 21 ]",
                        question: "【21】 に入る最も適当なものはどれですか。",
                        options: [
                            "も",
                            "と",
                            "だけ",
                            "より"
                        ],
                        optionsAnalysis: [
                            {
                                option: "も",
                                meaning: "Trợ từ も (cũng có rất nhiều...)",
                                analysis: "ĐÚNG: '使える物もたくさんあります' (cũng có rất nhiều thứ có thể tái chế làm tài nguyên), trợ từ 'も' nhấn mạnh số lượng phong phú của rác tái chế."
                            },
                            {
                                option: "と",
                                meaning: "Và / Cùng với",
                                analysis: "Sai ngữ pháp khi đi với 'たくさんあります'."
                            },
                            {
                                option: "だけ",
                                meaning: "Chỉ có",
                                analysis: "Sai nghĩa: Rác bao gồm nhiều loại, không chỉ có riêng đồ tái chế."
                            },
                            {
                                option: "より",
                                meaning: "Hơn là",
                                analysis: "Sai: Không có sự so sánh hơn kém ở đây."
                            }
                        ],
                        answer: 0,
                        evidence: "「ごみの中には、もう一度資源として使える物 [ 21 ] たくさんあります。」",
                        explanation: "Đáp án 1 (も) đúng. Trợ từ 'も' kết hợp với 'たくさんあります' để biểu thị ý 'trong rác cũng có rất nhiều đồ dùng có thể tái sử dụng được'."
                    },
                    {
                        id: 22,
                        blankLabel: "[ 22 ]",
                        question: "【22】 に入る最も適当なものはどれですか。",
                        options: [
                            "分けられることになります",
                            "分けるようにしています",
                            "分けようと思っていました",
                            "分けられるだろうと思います"
                        ],
                        optionsAnalysis: [
                            {
                                option: "分けられることになります",
                                meaning: "Trở thành quy định được phân loại",
                                analysis: "Sai: Chủ ngữ là tác giả, đang nói về nỗ lực hình thành thói quen của bản thân."
                            },
                            {
                                option: "分けるようにしています",
                                meaning: "Tôi luôn cố gắng duy trì việc phân loại (thói quen nỗ lực của bản thân)",
                                analysis: "ĐÚNG: Cấu trúc 'V-るようにしている' đi sau 'それ以降は' (kể từ đó trở đi) thể hiện sự nỗ lực duy trì thói quen tốt."
                            },
                            {
                                option: "分けようと思っていました",
                                meaning: "Tôi đã từng định phân loại (quá khứ)",
                                analysis: "Sai: Đây là thói quen đang được thực hiện đều đặn ở hiện tại."
                            },
                            {
                                option: "分けられるだろうと思います",
                                meaning: "Tôi nghĩ là chắc sẽ có thể phân loại",
                                analysis: "Sai: Không diễn đạt được sự rèn luyện thói quen kiên trì."
                            }
                        ],
                        answer: 1,
                        evidence: "「それ以降は、きちんとごみを [ 22 ]。最近は物を買うときに、これは燃えるか、リサイクルできるか、と考えたりもします。」",
                        explanation: "Đáp án 2 (分けるようにしています) đúng. Cấu trúc 'V-るようにしている' diễn tả hành động bản thân luôn chủ động cố gắng duy trì thành một thói quen nếp sống hàng ngày."
                    },
                    {
                        id: 23,
                        blankLabel: "[ 23 ]",
                        question: "【23】 に入る最も適当なものはどれですか。",
                        options: [
                            "気がするそうです",
                            "気がしたのでしょうか",
                            "気がします",
                            "気がしたようです"
                        ],
                        optionsAnalysis: [
                            {
                                option: "気がするそうです",
                                meaning: "Nghe nói là có cảm giác (truyền văn)",
                                analysis: "Sai: Tác giả đang bày tỏ cảm nhận của chính bản thân mình."
                            },
                            {
                                option: "気がしたのでしょうか",
                                meaning: "Liệu có cảm giác thế chăng (câu hỏi)",
                                analysis: "Sai ngữ cảnh trần thuật."
                            },
                            {
                                option: "気がします",
                                meaning: "Tôi có cảm giác là... (cảm nhận trực tiếp ở hiện tại)",
                                analysis: "ĐÚNG: Mẫu câu '〜ような気がします' (Tôi có cảm giác dường như là...) thể hiện sự chuyển biến trong nhận thức, thấy vấn đề môi trường trở nên gần gũi với mình hơn."
                            },
                            {
                                option: "気がしたようです",
                                meaning: "Có vẻ như đã có cảm giác",
                                analysis: "Sai: Nhận thức này là cảm xúc thực tế hiện tại của tác giả, không dùng phỏng đoán quá khứ."
                            }
                        ],
                        answer: 2,
                        evidence: "「でも、今まで深く考えたことのなかった環境問題が少し身近になったような [ 23 ]。」",
                        explanation: "Đáp án 3 (気がします) đúng. Cấu trúc '〜ような気がします' (Tôi có cảm giác như là...) đúc kết lại cảm nhận sâu sắc của người viết: qua việc phân loại rác hàng ngày, ý thức bảo vệ môi trường đã trở nên gần gũi và thực tế hơn đối với bản thân."
                    }
                ]
            }
        ],
        "doanvan": [
            {
                id: "dokkai-n3-doanvan-01",
                lessonNumber: 1,
                title: "テニスクラブのメール (Email gửi CLB Tennis)",
                timeLimit: 180,
                passage: `
                    <p>これはテニスクラブのメンバーに<ruby>届<rt>とど</rt></ruby>いたメールである。</p>
                    <p>メンバーの<ruby>中山<rt>なかやま</rt></ruby><ruby>夏子<rt>なつこ</rt></ruby>さんが、<ruby>市<rt>し</rt></ruby>の<ruby>大会<rt>たいかい</rt></ruby>で<ruby>優勝<rt>ゆうしょう</rt></ruby>して<ruby>県<rt>けん</rt></ruby><ruby>大会<rt>たいかい</rt></ruby>に<ruby>出<rt>で</rt></ruby>ることになりました。<ruby>三<rt>さん</rt></ruby><ruby>位<rt>い</rt></ruby><ruby>以内<rt>いない</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ったら、<ruby>次<rt>つぎ</rt></ruby>は<ruby>全国<rt>ぜんこく</rt></ruby><ruby>大会<rt>たいかい</rt></ruby>です。<ruby>全国<rt>ぜんこく</rt></ruby><ruby>大会<rt>たいかい</rt></ruby>に<ruby>出<rt>で</rt></ruby>られるように、みんなで<ruby>応援<rt>おうえん</rt></ruby>に<ruby>行<rt>い</rt></ruby>きましょう。</p>
                    <p><ruby>県<rt>けん</rt></ruby><ruby>大会<rt>たいかい</rt></ruby>は１９<ruby>日<rt>にち</rt></ruby>(<ruby>日<rt>にち</rt></ruby>)、<ruby>午前<rt>ごぜん</rt></ruby>１０<ruby>時<rt>じ</rt></ruby>から<ruby>県<rt>けん</rt></ruby>の<ruby>運動<rt>うんどう</rt></ruby><ruby>公園<rt>こうえん</rt></ruby>で<ruby>行<rt>おこな</rt></ruby>われます。</p>
                    <p><ruby>当日<rt>とうじつ</rt></ruby>は<ruby>午後<rt>ごご</rt></ruby>５<ruby>時<rt>じ</rt></ruby>から、<ruby>食事会<rt>しょくじかい</rt></ruby>をしたいと<ruby>考<rt>かんが</rt></ruby>えています。<ruby>参加<rt>さんか</rt></ruby>を<ruby>希望<rt>きぼう</rt></ruby>する<ruby>方<rt>かた</rt></ruby>は、１７<ruby>日<rt>にち</rt></ruby>までにメールをください。</p>
                    <p><ruby>試合<rt>しあい</rt></ruby>について<ruby>詳<rt>くわ</rt></ruby>しいことがわかったら、またお<ruby>知<rt>し</rt></ruby>らせします。</p>
                `,
                fullTranslation: `Đây là email gửi tới các thành viên của câu lạc bộ tennis.\n\nThành viên Nakayama Natsuko đã vô địch giải đấu cấp thành phố và sẽ tham gia thi đấu tại giải cấp tỉnh. Nếu lọt vào top 3, tiếp theo sẽ là giải vô địch toàn quốc. Để cổ vũ cho bạn ấy có thể tiến vào giải toàn quốc, mọi người hãy cùng nhau đi cổ vũ nhé.\n\nGiải đấu cấp tỉnh sẽ được tổ chức vào Chủ Nhật ngày 19, từ 10 giờ sáng tại Công viên Thể thao của tỉnh.\n\nVào ngày hôm đó, chúng tôi dự định sẽ tổ chức một buổi liên hoan ăn uống từ 5 giờ chiều. Những ai mong muốn tham gia xin vui lòng gửi email đăng ký trước ngày 17.\n\nKhi có thông tin chi tiết hơn về trận đấu, chúng tôi sẽ thông báo lại sau.`,
                vocabulary: [
                    { word: "優勝", hiragana: "ゆうしょう", meaning: "Vô địch / Đoạt giải nhất" },
                    { word: "県大会", hiragana: "けんたいかい", meaning: "Giải đấu cấp tỉnh" },
                    { word: "三位以内", hiragana: "さんいいない", meaning: "Trong top 3 / Từ hạng 3 trở lên" },
                    { word: "全国大会", hiragana: "ぜんこくたいかい", meaning: "Giải đấu toàn quốc" },
                    { word: "応援", hiragana: "おうえん", meaning: "Cổ vũ / Động viên" },
                    { word: "食事会", hiragana: "しょくじかい", meaning: "Buổi liên hoan ăn uống" },
                    { word: "呼びかける", hiragana: "よびかける", meaning: "Kêu gọi / Vận động" }
                ],
                grammarNotes: [
                    { pattern: "〜ことになる", meaning: "Được quyết định là / Trở thành..." },
                    { pattern: "〜ように", meaning: "Để mà (chỉ mục đích)" },
                    { pattern: "〜までに", meaning: "Trước thời hạn nào đó" }
                ],
                questions: [
                    {
                        id: 1,
                        question: "問：田村さんはこのメールで、テニスクラブのメンバーにどんなことを呼びかけているか。",
                        options: [
                            "市の大会に中山さんの応援に行き、その後で食事会をしましょう。",
                            "県大会に中山さんの応援に行き、その後で食事会をしましょう。",
                            "県大会の前に食事会をし、中山さんが全国大会に出られるように応援しましょう。",
                            "全国大会の前に食事会をし、中山さんが全国大会で優勝できるように応援しましょう。"
                        ],
                        optionsAnalysis: [
                            {
                                option: "市の大会に中山さんの応援に行き、その後で食事会をしましょう。",
                                meaning: "Hãy đi cổ vũ bạn Nakayama ở giải thành phố, và sau đó cùng nhau liên hoan ăn uống.",
                                analysis: "Sai: Nakayama đã vô địch giải thành phố rồi ('市の大会で優勝して'), giải đấu sắp tới là giải cấp tỉnh."
                            },
                            {
                                option: "県大会に中山さんの応援に行き、その後で食事会をしましょう。",
                                meaning: "Hãy đi cổ vũ bạn Nakayama ở giải cấp tỉnh, và sau đó cùng nhau liên hoan ăn uống.",
                                analysis: "ĐÚNG: Khớp hoàn toàn với nội dung kêu gọi đi cổ vũ giải tỉnh lúc 10h sáng ngày 19 ('県大会は19日... みんなで応援に行きましょう') và liên hoan vào 5h chiều cùng ngày ('当日は午後5時から、食事会をしたい')."
                            },
                            {
                                option: "県大会の前に食事会をし、中山さんが全国大会に出られるように応援しましょう。",
                                meaning: "Hãy tổ chức ăn uống trước giải tỉnh và cổ vũ để Nakayama có thể vào giải toàn quốc.",
                                analysis: "Sai thời điểm: Buổi ăn uống diễn ra vào lúc 5h chiều cùng ngày sau trận đấu, không phải trước giải tỉnh."
                            },
                            {
                                option: "全国大会の前に食事会をし、中山さんが全国大会で優勝できるように応援しましょう。",
                                meaning: "Hãy tổ chức ăn uống trước giải toàn quốc...",
                                analysis: "Sai: Hiện tại Nakayama mới chuẩn bị thi đấu giải cấp tỉnh để tranh vé vào giải toàn quốc."
                            }
                        ],
                        answer: 1,
                        evidence: "「県大会に出ることになりました。...みんなで応援に行きましょう。県大会は19日(日)、午前10時から県の運動公園で行われます。当日は午後5時から、食事会をしたいと考えています。」",
                        explanation: "Đáp án 2 đúng. Người viết email kêu gọi mọi người cùng đến Công viên Thể thao của tỉnh vào ngày 19 để cổ vũ Nakayama ở giải cấp tỉnh, sau đó tham gia buổi liên hoan ăn uống vào lúc 5 giờ chiều cùng ngày."
                    }
                ]
            },
            {
                id: "dokkai-n3-doanvan-02",
                lessonNumber: 2,
                title: "髪の役割 (Vai trò của tóc)",
                timeLimit: 180,
                passage: `
                    <p><ruby>髪<rt>かみ</rt></ruby>がわたしたちの<ruby>頭<rt>あたま</rt></ruby>を<ruby>守<rt>まも</rt></ruby>っていることはよく<ruby>知<rt>し</rt></ruby>られている。しかし、<ruby>髪<rt>かみ</rt></ruby>の<ruby>役割<rt>やくわり</rt></ruby>（<ruby>注<rt>ちゅう</rt></ruby>１）はほかにもある。</p>
                    <p>わたしたちの<ruby>体<rt>からだ</rt></ruby>には、<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>などから<ruby>毒<rt>どく</rt></ruby>になるものが<ruby>入<rt>はい</rt></ruby>ってきてしまうことがある。それらは、<ruby>血液<rt>けつえき</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れに<ruby>乗<rt>の</rt></ruby>って<ruby>髪<rt>かみ</rt></ruby>に<ruby>運<rt>はこ</rt></ruby>ばれ、<ruby>髪<rt>かみ</rt></ruby>の<ruby>毛<rt>け</rt></ruby><ruby>一本<rt>いっぽん</rt></ruby><ruby>一本<rt>いっぽん</rt></ruby>にたまっていく。そして、<ruby>時間<rt>じかん</rt></ruby>がたって<ruby>髪<rt>かみ</rt></ruby>が<ruby>自然<rt>しぜん</rt></ruby>に<ruby>抜<rt>ぬ</rt></ruby>ける（<ruby>注<rt>ちゅう</rt></ruby>２）とき、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>体<rt>からだ</rt></ruby>から<ruby>出<rt>で</rt></ruby>ていくのだ。<ruby>髪<rt>かみ</rt></ruby>は、<ruby>何<rt>なに</rt></ruby>かにぶつかったときなどに<ruby>頭<rt>あたま</rt></ruby>を<ruby>守<rt>まも</rt></ruby>っているだけではないのである。</p>
                    <p class="dokkai-notes">（<ruby>注<rt>ちゅう</rt></ruby>１）<ruby>役割<rt>やくわり</rt></ruby>：ここでは、<ruby>仕事<rt>しごと</rt></ruby><br>（<ruby>注<rt>ちゅう</rt></ruby>２）<ruby>抜<rt>ぬ</rt></ruby>ける：<ruby>取<rt>と</rt></ruby>れる</p>
                `,
                fullTranslation: `Việc tóc bảo vệ đầu của chúng ta là điều được nhiều người biết đến. Tuy nhiên, vai trò (chú thích 1) của tóc vẫn còn có những điều khác nữa.\n\nTrong cơ thể chúng ta, đôi khi có những chất độc hại xâm nhập vào từ thức ăn... Những chất này sẽ đi theo dòng chảy của máu và được vận chuyển đến tóc, rồi tích tụ lại trong từng sợi tóc một. Và rồi, sau một thời gian, khi tóc rụng tự nhiên (chú thích 2), các chất độc đó cũng sẽ cùng theo tóc thoát ra ngoài cơ thể. Tóc không chỉ đơn thuần là bảo vệ đầu khi chúng ta va đập vào vật gì đó.\n\n(Chú thích 1) 役割 (Vai trò): Ở đây có nghĩa là chức năng/nhiệm vụ.\n(Chú thích 2) 抜ける (Rụng): Tóc rụng ra/rời ra.`,
                vocabulary: [
                    { word: "役割", hiragana: "やくわり", meaning: "Vai trò / Nhiệm vụ" },
                    { word: "血液", hiragana: "けつえき", meaning: "Máu / Huyết dịch" },
                    { word: "毒", hiragana: "どく", meaning: "Chất độc / Độc tố" },
                    { word: "たまる", hiragana: "たまる", meaning: "Tích tụ / Dồn ứ lại" },
                    { word: "抜ける", hiragana: "ぬける", meaning: "Rụng / Tuột ra" },
                    { word: "ぶつかる", hiragana: "ぶつかる", meaning: "Va chạm / Đâm vào" }
                ],
                grammarNotes: [
                    { pattern: "〜だけでなく〜も / 〜だけではない", meaning: "Không chỉ có... mà còn..." },
                    { pattern: "〜に乗って", meaning: "Nương theo dòng / Đi theo..." }
                ],
                questions: [
                    {
                        id: 1,
                        question: "問：ほかにもあるとあるが、それはどんなことか。",
                        options: [
                            "体に悪いものが頭から入らないようにすること。",
                            "体にいいものを少しずつためておくこと。",
                            "体に毒になるものをためて体の外へ出すこと。",
                            "何かにぶつかったときなどに頭を守ること。"
                        ],
                        optionsAnalysis: [
                            {
                                option: "体に悪いものが頭から入らないようにすること。",
                                meaning: "Ngăn chặn các chất có hại cho cơ thể không xâm nhập từ đầu vào.",
                                analysis: "Sai: Bài đọc nêu chất độc đi vào từ đường ăn uống ('食べ物などから'), không phải từ đầu."
                            },
                            {
                                option: "体にいいものを少しずつためておくこと。",
                                meaning: "Tích trữ dần dần các chất tốt cho cơ thể.",
                                analysis: "Sai: Tóc tích tụ các chất độc hại ('毒になるもの') chứ không phải chất tốt."
                            },
                            {
                                option: "体に毒になるものをためて体の外へ出すこと。",
                                meaning: "Tích tụ các chất độc hại đối với cơ thể và thải chúng ra bên ngoài.",
                                analysis: "ĐÚNG: Khớp chính xác với quá trình '毒になるもの... 髪の毛一本一本にたまっていく。そして、時間がたって髪が自然に抜けるとき、一緒に体から出ていくのだ'."
                            },
                            {
                                option: "何かにぶつかったときなどに頭を守ること。",
                                meaning: "Bảo vệ đầu khi va chạm vào vật gì đó.",
                                analysis: "Sai: Đây là vai trò cơ bản vốn đã được biết đến nhiều ('よく知られている'), không phải vai trò 'khác nữa' mà tác giả muốn làm rõ."
                            }
                        ],
                        answer: 2,
                        evidence: "「毒になるものが入ってきてしまうことがある。それらは、血液の流れに乗って髪に運ばれ、髪の毛一本一本にたまっていく。そして、時間がたって髪が自然に抜けるとき、一緒に体から出ていくのだ。」",
                        explanation: "Đáp án 3 đúng. Ngoài chức năng bảo vệ đầu khỏi va đập cơ học, tóc còn có vai trò gom các chất độc hại từ thức ăn qua đường máu tích tụ vào sợi tóc, rồi đào thải ra ngoài cơ thể theo chu kỳ rụng tóc tự nhiên."
                    }
                ]
            },
            {
                id: "dokkai-n3-doanvan-03",
                lessonNumber: 3,
                title: "町内のゴミ拾い活動 (Hoạt động nhặt rác trong khu phố)",
                timeLimit: 180,
                passage: `
                    <p><ruby>町<rt>まち</rt></ruby>の<ruby>掲示板<rt>けいじばん</rt></ruby>に、このお<ruby>知<rt>し</rt></ruby>らせがはってある。</p>
                    <p>１３<ruby>日<rt>にち</rt></ruby>９<ruby>時<rt>じ</rt></ruby>に<ruby>集合<rt>しゅうごう</rt></ruby>してください。<br>
                    <ruby>集合<rt>しゅうごう</rt></ruby><ruby>場所<rt>ばしょ</rt></ruby>： <ruby>第一<rt>だいいち</rt></ruby><ruby>公園<rt>こうえん</rt></ruby><br>
                    <ruby>活動<rt>かつどう</rt></ruby><ruby>内容<rt>ないよう</rt></ruby>： <ruby>町内<rt>ちょうない</rt></ruby>のゴミ<ruby>拾<rt>ひろ</rt></ruby>い<br>
                    <ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>： <ruby>手袋<rt>てぶくろ</rt></ruby>（<ruby>掃除用<rt>そうじよう</rt></ruby>に<ruby>必<rt>かなら</rt></ruby>ず<ruby>持<rt>も</rt></ruby>ってきてください）<br>
                    ※ゴミ<ruby>袋<rt>ぶくろ</rt></ruby>はこちらでも<ruby>用意<rt>ようい</rt></ruby>しますが、ご<ruby>自宅<rt>じたく</rt></ruby>にあれば、お<ruby>持<rt>も</rt></ruby>ちください。<br>
                    <ruby>参加<rt>さんか</rt></ruby><ruby>方法<rt>ほうほう</rt></ruby>： <ruby>当日<rt>とうじつ</rt></ruby>、<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>集合<rt>しゅうごう</rt></ruby><ruby>場所<rt>ばしょ</rt></ruby>に<ruby>来<rt>き</rt></ruby>てください。<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みは<ruby>不要<rt>ふよう</rt></ruby>です。<br>
                    ※<ruby>大雨<rt>おおあめ</rt></ruby>などで<ruby>中止<rt>ちゅうし</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>の<ruby>連絡<rt>れんらく</rt></ruby>を<ruby>希望<rt>きぼう</rt></ruby>する<ruby>方<rt>かた</rt></ruby>は、<ruby>前日<rt>ぜんじつ</rt></ruby>までにメールでお<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みください。<br>
                    ・<ruby>活動<rt>かつどう</rt></ruby><ruby>終了<rt>しゅうりょう</rt></ruby><ruby>後<rt>ご</rt></ruby>、お<ruby>茶<rt>ちゃ</rt></ruby>、ジュースをお<ruby>配<rt>くば</rt></ruby>りします。</p>
                `,
                fullTranslation: `Bảng thông báo của thị trấn có dán tờ thông báo này:\n\nXin hãy tập trung lúc 9 giờ ngày 13.\n- Địa điểm tập trung: Công viên số 1 (Đệ Nhất Công Viên)\n- Nội dung hoạt động: Nhặt rác trong khu phố\n- Đồ cần mang theo: Găng tay (BẮT BUỘC phải mang theo để dọn vệ sinh)\n  * Túi đựng rác phía chúng tôi cũng có chuẩn bị, nhưng nếu ở nhà có sẵn thì xin vui lòng mang theo.\n- Cách thức tham gia: Vào ngày hôm đó, hãy đến trực tiếp địa điểm tập trung. KHÔNG CẦN đăng ký trước.\n  * Những ai mong muốn nhận thông báo trong trường hợp trời mưa to phải hủy hoạt động thì xin vui lòng đăng ký qua email trước ngày hôm đó.\n- Sau khi kết thúc hoạt động, chúng tôi sẽ phát trà và nước hoa quả.`,
                vocabulary: [
                    { word: "掲示板", hiragana: "けいじばん", meaning: "Bảng thông báo" },
                    { word: "ゴミ拾い", hiragana: "ごみひろい", meaning: "Nhặt rác" },
                    { word: "手袋", hiragana: "てぶくろ", meaning: "Găng tay / Bao tay" },
                    { word: "不要", hiragana: "ふよう", meaning: "Không cần thiết / Không cần" },
                    { word: "中止", hiragana: "ちゅうし", meaning: "Hủy bỏ / Hoãn" },
                    { word: "お配りする", hiragana: "おくばりする", meaning: "Phát / Phân phát (khiêm nhường ngữ)" }
                ],
                grammarNotes: [
                    { pattern: "〜必ず (かならず)", meaning: "Nhất định / Bắt buộc phải làm gì" },
                    { pattern: "〜は不要です", meaning: "Không cần phải làm gì" },
                    { pattern: "〜をご希望の方は", meaning: "Dành cho những ai có nguyện vọng..." }
                ],
                questions: [
                    {
                        id: 1,
                        question: "問：「ゴミゼロ活動」に参加したい人全員が、必ずしなければならないことは何か。",
                        options: [
                            "12日までにメールで申し込み、13日の9時に手袋を持って第一公園に行く。",
                            "12日までにメールで申し込み、13日の9時に手袋とゴミ袋を持って第一公園に行く。",
                            "13日の9時に手袋を持って第一公園に行く。",
                            "13日の9時に手袋とゴミ袋を持って第一公園に行く。"
                        ],
                        optionsAnalysis: [
                            {
                                option: "12日までにメールで申し込み、13日の9時に手袋を持って第一公園に行く。",
                                meaning: "Đăng ký qua email trước ngày 12 và mang theo găng tay đến Công viên số 1 vào 9 giờ ngày 13.",
                                analysis: "Sai: Việc đăng ký qua email trước ngày diễn ra (ngày 12) là không bắt buộc ('申し込みは不要です'), chỉ dành cho người muốn nhận thông báo hủy khi mưa to."
                            },
                            {
                                option: "12日までにメールで申し込み、13日の9時に手袋とゴミ袋を持って第一公園に行く。",
                                meaning: "Đăng ký qua email trước ngày 12 và mang theo cả găng tay lẫn túi đựng rác...",
                                analysis: "Sai: Vừa sai việc bắt buộc đăng ký email, vừa sai việc bắt buộc mang theo túi rác."
                            },
                            {
                                option: "13日の9時に手袋を持って第一公園に行く。",
                                meaning: "Mang theo găng tay và đến Công viên số 1 vào lúc 9 giờ ngày 13.",
                                analysis: "ĐÚNG: Khớp hoàn toàn với thông báo: không cần đăng ký trước ('申し込みは不要'), găng tay là vật dụng bắt buộc duy nhất ('手袋（掃除用に必ず持ってきてください）'), và địa điểm là Công viên số 1 lúc 9h ngày 13."
                            },
                            {
                                option: "13日の9時に手袋とゴミ袋を持って第一公園に行く。",
                                meaning: "Mang theo cả găng tay và túi đựng rác đến Công viên số 1 vào 9 giờ ngày 13.",
                                analysis: "Sai: Túi rác ban tổ chức đã có chuẩn bị ('ゴミ袋はこちらでも用意しますが'), chỉ khuyến khích mang thêm nếu nhà có sẵn chứ không bắt buộc ('必ず')."
                            }
                        ],
                        answer: 2,
                        evidence: "「持ち物： 手袋（掃除用に必ず持ってきてください）」「参加方法： 当日、直接集合場所に来てください。申し込みは不要です。」",
                        explanation: "Đáp án 3 đúng. Thông báo ghi rõ 'không cần đăng ký trước' (申し込みは不要), và đồ dùng mang theo chỉ có găng tay là 'bắt buộc mang' (必ず持ってきてください), còn túi rác thì ban tổ chức đã chuẩn bị sẵn nên không bắt buộc."
                    }
                ]
            },
            {
                id: "dokkai-n3-doanvan-04",
                lessonNumber: 4,
                title: "新入社員の採用試験 (Bài thi tuyển dụng nhân viên mới)",
                timeLimit: 180,
                passage: `
                    <p><ruby>最近<rt>さいきん</rt></ruby>、テレビで、<ruby>面白<rt>おもしろ</rt></ruby>いやり<ruby>方<rt>かた</rt></ruby>で<ruby>新入<rt>しんにゅう</rt></ruby><ruby>社員<rt>しゃいん</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぶ<ruby>会社<rt>かいしゃ</rt></ruby>が<ruby>紹介<rt>しょうかい</rt></ruby>されていた。その<ruby>会社<rt>かいしゃ</rt></ruby>は、<ruby>手術用<rt>しゅじゅつよう</rt></ruby><ruby>機械<rt>きかい</rt></ruby>の<ruby>細<rt>こま</rt></ruby>かい<ruby>部品<rt>ぶひん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>っているのだが、<ruby>入社<rt>にゅうしゃ</rt></ruby><ruby>試験<rt>しけん</rt></ruby>のときに<ruby>焼<rt>や</rt></ruby>き<ruby>魚<rt>ざかな</rt></ruby><ruby>定食<rt>ていしょく</rt></ruby>を<ruby>食<rt>た</rt></ruby>べさせるそうだ。<ruby>社長<rt>しゃちょう</rt></ruby>によると、はしを<ruby>上手<rt>じょうず</rt></ruby>に<ruby>使<rt>つか</rt></ruby>って、<ruby>小<rt>ちい</rt></ruby>さい<ruby>骨<rt>ほね</rt></ruby>をきれいに<ruby>取<rt>と</rt></ruby>りながら<ruby>魚<rt>さかな</rt></ruby>が<ruby>食<rt>た</rt></ruby>べられる<ruby>人<rt>ひと</rt></ruby>には、<ruby>細<rt>こま</rt></ruby>かい<ruby>物<rt>もの</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る<ruby>仕事<rt>しごと</rt></ruby>もきちんとできる<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いのだそうだ。わたしは、チェックポイントは<ruby>食事<rt>しょくじ</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>のマナーや<ruby>話<rt>はなし</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>などだろうと<ruby>思<rt>おも</rt></ruby>って<ruby>見<rt>み</rt></ruby>ていたので、<ruby>意外<rt>いがい</rt></ruby>だったが、なるほどと<ruby>思<rt>おも</rt></ruby>った。</p>
                `,
                fullTranslation: `Gần đây, trên tivi có giới thiệu về một công ty có cách tuyển chọn nhân viên mới rất thú vị. Công ty đó chuyên sản xuất các linh kiện nhỏ cho máy móc phẫu thuật, nhưng nghe nói trong kỳ thi tuyển dụng, họ lại cho các ứng viên ăn một suất cơm cá nướng. Theo lời vị giám đốc, những người biết dùng đũa khéo léo, vừa gỡ sạch những chiếc xương nhỏ vừa ăn cá thì thường có nhiều người làm tốt cả công việc chế tạo các chi tiết nhỏ tinh xảo. Tôi cứ ngỡ điểm cần kiểm tra sẽ là quy tắc ứng xử (manner) trong bữa ăn hay nội dung trò chuyện, nên thấy thật bất ngờ, nhưng ngẫm lại thì thấy quả đúng là như vậy.`,
                vocabulary: [
                    { word: "新入社員", hiragana: "しんにゅうしゃいん", meaning: "Nhân viên mới vào công ty" },
                    { word: "手術用機械", hiragana: "しゅじゅつようきかい", meaning: "Máy móc dùng trong phẫu thuật" },
                    { word: "細かい部品", hiragana: "こまかいぶひん", meaning: "Linh kiện nhỏ / Chi tiết tinh xảo" },
                    { word: "焼き魚定食", hiragana: "やきざかなていしょく", meaning: "Suất cơm phần cá nướng" },
                    { word: "骨を取る", hiragana: "ほねをとる", meaning: "Gỡ xương (cá)" },
                    { word: "意外", hiragana: "いがい", meaning: "Bất ngờ / Ngoài dự tính" },
                    { word: "なるほど", hiragana: "なるほど", meaning: "Hóa ra là vậy / Đúng là như thế" }
                ],
                grammarNotes: [
                    { pattern: "〜によると〜そうだ", meaning: "Theo nguồn tin... nghe nói là... (truyền văn)" },
                    { pattern: "V-させる", meaning: "Thể sai khiến (cho phép làm / bắt làm)" },
                    { pattern: "〜ながら", meaning: "Vừa... vừa... (hai hành động đồng thời)" }
                ],
                questions: [
                    {
                        id: 1,
                        question: "問：焼き魚定食を食べさせるのはどうしてか。",
                        options: [
                            "手術用の機械が好きな人を選びたいから。",
                            "細かい物がうまく作れる人を選びたいから。",
                            "マナーが身についている人を選びたいから。",
                            "上手に話ができる面白い人を選びたいから。"
                        ],
                        optionsAnalysis: [
                            {
                                option: "手術用の機械が好きな人を選びたいから。",
                                meaning: "Vì muốn chọn những người yêu thích máy phẫu thuật.",
                                analysis: "Sai: Việc ăn cá nướng không nhằm mục đích kiểm tra sở thích về máy móc."
                            },
                            {
                                option: "細かい物がうまく作れる人を選びたいから。",
                                meaning: "Vì muốn chọn những người có khả năng chế tạo khéo léo các chi tiết nhỏ tinh xảo.",
                                analysis: "ĐÚNG: Khớp chính xác với giải thích của giám đốc: 'はしを上手に使って、小さい骨をきれいに取りながら魚が食べられる人には、細かい物を作る仕事もきちんとできる人が多い' (người dùng đũa khéo gỡ xương cá thường làm tốt công việc gia công đồ tỉ mỉ)."
                            },
                            {
                                option: "マナーが身についている人を選びたいから。",
                                meaning: "Vì muốn chọn những người nắm vững quy tắc ứng xử/manner trong bữa ăn.",
                                analysis: "Sai: Đây chỉ là suy đoán ban đầu của tác giả ('食事中のマナー...だろうと思って見ていたので、意外だった'), không phải mục đích thực sự của công ty."
                            },
                            {
                                option: "上手に話ができる面白い人を選びたいから。",
                                meaning: "Vì muốn chọn những người nói chuyện hay và thú vị.",
                                analysis: "Sai: Bài đọc không nhắc tới tiêu chí này."
                            }
                        ],
                        answer: 1,
                        evidence: "「その会社は、手術用機械の細かい部品を作っているのだが... はしを上手に使って、小さい骨をきれいに取りながら魚が食べられる人には、細かい物を作る仕事もきちんとできる人が多いのだそうだ。」",
                        explanation: "Đáp án 2 đúng. Công ty cho ứng viên ăn cơm cá nướng để quan sát sự khéo léo của đôi tay khi dùng đũa gỡ xương cá nhỏ, từ đó tuyển chọn những người có khả năng làm tốt công việc sản xuất các linh kiện máy phẫu thuật đòi hỏi độ tỉ mỉ, chính xác cao."
                    }
                ]
            },
            {
                id: "dokkai-n3-doanvan-05",
                lessonNumber: 5,
                title: "たかしへのメモ (Mảnh giấy nhắn gửi Takashi)",
                timeLimit: 180,
                passage: `
                    <p>たかしさんの<ruby>家<rt>いえ</rt></ruby>のテーブルの<ruby>上<rt>うえ</rt></ruby>に、このメモがある。</p>
                    <p>たかしへ<br><ruby>急<rt>きゅう</rt></ruby>な<ruby>用事<rt>ようじ</rt></ruby>で、ちょっとおじいちゃんの<ruby>所<rt>ところ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>かなければならなくなりました。７<ruby>時<rt>じ</rt></ruby>までには<ruby>帰<rt>かえ</rt></ruby>れると<ruby>思<rt>おも</rt></ruby>うけど、おなかがすいて<ruby>待<rt>ま</rt></ruby>てなかったら、<ruby>昨日<rt>きのう</rt></ruby>のカレーの<ruby>残<rt>のこ</rt></ruby>りを<ruby>温<rt>あたた</rt></ruby>めて<ruby>食<rt>た</rt></ruby>べてください。<br>それから、<ruby>洗濯物<rt>せんたくもの</rt></ruby>が<ruby>干<rt>ほ</rt></ruby>したままになっているから、<ruby>取<rt>と</rt></ruby>り<ruby>込<rt>こ</rt></ruby>んでおいてね。<ruby>時間<rt>じかん</rt></ruby>があったら、たたんでおいてください。おいしいケーキでも<ruby>買<rt>か</rt></ruby>って<ruby>帰<rt>かえ</rt></ruby>るね。</p>
                `,
                fullTranslation: `Trên bàn ở nhà của bạn Takashi có mảnh giấy nhắn này:\n\nGửi Takashi,\nVì có việc gấp nên mẹ phải đến chỗ của ông một lát. Mẹ nghĩ là khoảng trước 7 giờ mẹ sẽ về được, nhưng nếu con đói bụng không chờ được thì hãy hâm nóng chỗ cà ri còn thừa từ hôm qua rồi ăn nhé.\nThêm nữa, quần áo giặt vẫn đang phơi ở ngoài, nên con hãy cất/thu quần áo vào nhà giúp mẹ nhé. Nếu có thời gian thì con gấp lại luôn giúp mẹ. Mẹ sẽ mua bánh ngọt ngon về cho con nhé.`,
                vocabulary: [
                    { word: "急な用事", hiragana: "きゅうなようじ", meaning: "Việc bận đột xuất / Việc gấp" },
                    { word: "温める", hiragana: "あたためる", meaning: "Hâm nóng / Làm ấm" },
                    { word: "洗濯物", hiragana: "せんたくもの", meaning: "Quần áo giặt" },
                    { word: "干す", hiragana: "ほす", meaning: "Phơi (quần áo)" },
                    { word: "取り込む", hiragana: "とりこむ", meaning: "Thu gom vào / Cất (quần áo phơi) vào nhà" },
                    { word: "たたむ", hiragana: "たたむ", meaning: "Gấp (quần áo, chăn màn)" }
                ],
                grammarNotes: [
                    { pattern: "〜なければならなくなる", meaning: "Trở nên buộc phải làm gì (do hoàn cảnh đưa đẩy)" },
                    { pattern: "〜たまま", meaning: "Giữ nguyên trạng thái..." },
                    { pattern: "〜ておく", meaning: "Làm sẵn việc gì đó trước" }
                ],
                questions: [
                    {
                        id: 1,
                        question: "問：このメモを読んで、たかしさんがしなければならないことは何か。",
                        options: [
                            "おじいちゃんの所へ行く。",
                            "昨日のカレーの残りを温めて食べる。",
                            "洗濯物を取り込む。",
                            "ケーキを買って帰る。"
                        ],
                        optionsAnalysis: [
                            {
                                option: "おじいちゃんの所へ行く。",
                                meaning: "Đi đến chỗ của ông.",
                                analysis: "Sai: Người đi đến chỗ của ông là mẹ ('ちょっとおじいちゃんの所へ行かなければならなくなりました')."
                            },
                            {
                                option: "昨日のカレーの残りを温めて食べる。",
                                meaning: "Hâm nóng phần cà ri thừa hôm qua để ăn.",
                                analysis: "Sai: Đây là hành động tùy chọn kèm điều kiện ('おなかがすいて待てなかったら' - nếu đói bụng không đợi được), không phải việc bắt buộc."
                            },
                            {
                                option: "洗濯物を取り込む。",
                                meaning: "Thu cất quần áo phơi vào nhà.",
                                analysis: "ĐÚNG: Khớp với lời nhờ vả trực tiếp: '洗濯物が干したままになっているから、取り込んでおいてね' (Quần áo đang phơi ngoài đó nên con cất vào nhà nhé). Việc gấp quần áo chỉ làm nếu có thời gian rảnh."
                            },
                            {
                                option: "ケーキを買って帰る。",
                                meaning: "Mua bánh ngọt mang về nhà.",
                                analysis: "Sai: Người mua bánh ngọt mang về là mẹ ('おいしいケーキでも買って帰るね')."
                            }
                        ],
                        answer: 2,
                        evidence: "「それから、洗濯物が干したままになっているから、取り込んでおいてね。時間があったら、たたんでおいてください。」",
                        explanation: "Đáp án 3 đúng. Trong mảnh giấy nhắn, việc mẹ dặn dò Takashi bắt buộc phải làm trước là thu cất quần áo phơi ngoài trời vào nhà ('取り込んでおいてね'). Việc ăn cơm chỉ là tùy chọn nếu đói, còn việc gấp quần áo chỉ làm khi có thời gian rảnh."
                    }
                ]
            },
            {
                id: "dokkai-n3-doanvan-06",
                lessonNumber: 6,
                title: "美術館のパスポートカード (Thẻ Passport Bảo tàng Mỹ thuật)",
                timeLimit: 180,
                passage: `
                    <p><ruby>美術館<rt>びじゅつかん</rt></ruby>のチケット<ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>に、この<ruby>案内<rt>あんない</rt></ruby>がはってある。</p>
                    <p><ruby>山森<rt>やまもり</rt></ruby><ruby>市<rt>し</rt></ruby><ruby>美術館<rt>びじゅつかん</rt></ruby>では、１<ruby>年<rt>ねん</rt></ruby>に<ruby>何<rt>なん</rt></ruby><ruby>回<rt>かい</rt></ruby>でも<ruby>入館<rt>にゅうかん</rt></ruby>できる「パスポートカード」を<ruby>用意<rt>ようい</rt></ruby>しています。<br>
                    <ruby>価格<rt>かかく</rt></ruby>： <ruby>大人<rt>おとな</rt></ruby>5,000<ruby>円<rt>えん</rt></ruby>　<ruby>高校生<rt>こうこうせい</rt></ruby>3,000<ruby>円<rt>えん</rt></ruby>　<ruby>小中学生<rt>しょうちゅうがくせい</rt></ruby>1,000<ruby>円<rt>えん</rt></ruby><br>
                    <ruby>期限<rt>きげん</rt></ruby>： お<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>み<ruby>当日<rt>とうじつ</rt></ruby>から１<ruby>年間<rt>ねんかん</rt></ruby><br>
                    <ruby>必要<rt>ひつよう</rt></ruby><ruby>書類<rt>しょるい</rt></ruby>： <ruby>顔<rt>かお</rt></ruby><ruby>写真<rt>しゃしん</rt></ruby>、<ruby>申込書<rt>もうしこみしょ</rt></ruby><br>
                    ※カードができるまで<ruby>多少<rt>たしょう</rt></ruby><ruby>時間<rt>じかん</rt></ruby>がかかりますので、カードはお<ruby>帰<rt>かえ</rt></ruby>りの<ruby>時<rt>とき</rt></ruby>にお<ruby>渡<rt>わた</rt></ruby>しします。１６<ruby>時<rt>じ</rt></ruby><ruby>以降<rt>いこう</rt></ruby>に<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>まれた<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>翌日<rt>よくじつ</rt></ruby><ruby>以降<rt>いこう</rt></ruby>のお<ruby>渡<rt>わた</rt></ruby>しになります。<br>
                    ※カードが<ruby>不要<rt>ふよう</rt></ruby>になっても、お<ruby>金<rt>かね</rt></ruby>はお<ruby>返<rt>かえ</rt></ruby>しできません。<br>
                    ※カードの<ruby>作<rt>つく</rt></ruby>り<ruby>直<rt>なお</rt></ruby>し(<ruby>無<rt>な</rt></ruby>くした<ruby>場合<rt>ばあい</rt></ruby>など)には、もう<ruby>一度<rt>いちど</rt></ruby><ruby>料金<rt>りょうきん</rt></ruby>がかかります。</p>
                `,
                fullTranslation: `Tại quầy bán vé của viện bảo tàng mỹ thuật có dán bảng thông báo này:\n\nBảo tàng Mỹ thuật thành phố Yamamori có phát hành "Thẻ Passport" cho phép vào tham quan bảo tàng không giới hạn số lần trong 1 năm.\n- Giá vé: Người lớn: 5.000 yên | Học sinh cấp 3: 3.000 yên | Học sinh tiểu học & THCS: 1.000 yên\n- Thời hạn: 1 năm kể từ ngày đăng ký\n- Giấy tờ cần thiết: Ảnh chân dung, Đơn đăng ký\n* Vì quá trình làm thẻ mất một khoảng thời gian nhất định, nên thẻ sẽ được trao khi quý khách ra về. Trường hợp đăng ký sau 16 giờ, thẻ sẽ được trao từ ngày hôm sau trở đi.\n* Ngay cả khi không còn nhu cầu sử dụng thẻ nữa, tiền cũng không được hoàn trả lại.\n* Việc làm lại thẻ (trường hợp bị mất...) sẽ phải chịu phí thêm một lần nữa.`,
                vocabulary: [
                    { word: "入館", hiragana: "にゅうかん", meaning: "Vào viện bảo tàng / Tham quan" },
                    { word: "期限", hiragana: "きげん", meaning: "Thời hạn" },
                    { word: "多少", hiragana: "たしょう", meaning: "Một chút / Phần nào" },
                    { word: "お渡しする", hiragana: "おわたしする", meaning: "Trao / Đưa cho (khiêm nhường ngữ)" },
                    { word: "以降", hiragana: "いこう", meaning: "Kể từ sau đó trở đi" },
                    { word: "翌日", hiragana: "よくじつ", meaning: "Ngày hôm sau" },
                    { word: "作り直し", hiragana: "つくりなおし", meaning: "Làm lại / Cấp lại" }
                ],
                grammarNotes: [
                    { pattern: "〜何回でも (なんかいでも)", meaning: "Bao nhiêu lần cũng được / Không giới hạn số lần" },
                    { pattern: "〜当日から〜年間", meaning: "Kể từ ngày... trong vòng... năm" },
                    { pattern: "〜お返しできません", meaning: "Không thể hoàn trả lại (kính ngữ)" }
                ],
                questions: [
                    {
                        id: 1,
                        question: "問：この案内から、「パスポートカード」について、どんなことがわかるか。",
                        options: [
                            "作った年の12月末までなら、何回でもカードを使うことができる。",
                            "16時までに申し込めば、その日にカードを受け取ることができる。",
                            "期限内にカードを返すと、残りの期間分のお金を返してもらえる。",
                            "カードをなくしても、1年以内であれば、無料で作り直してもらえる。"
                        ],
                        optionsAnalysis: [
                            {
                                option: "作った年の12月末までなら、何回でもカードを使うことができる。",
                                meaning: "Có thể sử dụng thẻ không giới hạn số lần cho đến cuối tháng 12 của năm làm thẻ.",
                                analysis: "Sai: Hạn sử dụng là 1 năm tính từ ngày đăng ký ('お申し込み当日から1年間'), không phụ thuộc vào cuối tháng 12."
                            },
                            {
                                option: "16時までに申し込めば、その日にカードを受け取ることができる。",
                                meaning: "Nếu đăng ký trước 16 giờ, có thể nhận được thẻ ngay trong ngày hôm đó.",
                                analysis: "ĐÚNG: Khớp chính xác với thông báo: 'カードはお帰りの時にお渡しします。16時以降に申し込まれた場合は、翌日以降のお渡しになります' -> Tức là nếu đăng ký trước 16h thì sẽ nhận thẻ lúc ra về trong ngày."
                            },
                            {
                                option: "期限内にカードを返すと、残りの期間分のお金を返してもらえる。",
                                meaning: "Nếu trả lại thẻ trong thời hạn thì được hoàn lại tiền của thời gian còn lại.",
                                analysis: "Sai: Thông báo quy định rõ không hoàn trả tiền dù không dùng nữa ('カードが不要になっても、お金はお返しできません')."
                            },
                            {
                                option: "カードをなくしても、1年以内であれば、無料で作り直してもらえる。",
                                meaning: "Dù làm mất thẻ, nếu trong vòng 1 năm thì được làm lại miễn phí.",
                                analysis: "Sai: Làm lại thẻ sẽ mất phí như ban đầu ('カードの作り直しには、もう一度料金がかかります')."
                            }
                        ],
                        answer: 1,
                        evidence: "「カードはお帰りの時にお渡しします。16時以降に申し込まれた場合は、翌日以降のお渡しになります。」",
                        explanation: "Đáp án 2 đúng. Quy định ghi rõ nếu đăng ký sau 16 giờ mới phải nhận vào ngày hôm sau, do đó những ai đăng ký trước 16 giờ sẽ được nhận thẻ ngay lúc ra về trong ngày hôm đó."
                    }
                ]
            },
            {
                id: "dokkai-n3-doanvan-07",
                lessonNumber: 7,
                title: "東京マラソン (Giải Marathon Tokyo)",
                timeLimit: 180,
                passage: `
                    <p><ruby>毎年<rt>まいとし</rt></ruby>３<ruby>万人<rt>まんにん</rt></ruby><ruby>以上<rt>いじょう</rt></ruby>が<ruby>参加<rt>さんか</rt></ruby>する「<ruby>東京<rt>とうきょう</rt></ruby>マラソン」は、<ruby>人気<rt>にんき</rt></ruby>が<ruby>高<rt>たか</rt></ruby>く、<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>んでもなかなか<ruby>出<rt>で</rt></ruby>られない。わたしも<ruby>去年<rt>きょねん</rt></ruby>やっと<ruby>出<rt>で</rt></ruby>られ、４２.１９５キロを<ruby>最後<rt>さいご</rt></ruby>まで<ruby>走<rt>はし</rt></ruby>ることができた。<ruby>特<rt>とく</rt></ruby>に<ruby>印象<rt>いんしょう</rt></ruby>に<ruby>残<rt>のこ</rt></ruby>ったのは、<ruby>新宿<rt>しんじゅく</rt></ruby>や<ruby>銀座<rt>ぎんざ</rt></ruby>などの、いつもは<ruby>車<rt>くるま</rt></ruby>でいっぱいの<ruby>大都会<rt>だいとかい</rt></ruby>の<ruby>道<rt>みち</rt></ruby>を<ruby>走<rt>はし</rt></ruby>ることの<ruby>気持<rt>きも</rt></ruby>ちよさだった。<ruby>大勢<rt>おおぜい</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>の<ruby>応援<rt>おうえん</rt></ruby>を<ruby>受<rt>う</rt></ruby>け、<ruby>高<rt>たか</rt></ruby>いビルや<ruby>周<rt>まわ</rt></ruby>りの<ruby>景色<rt>けしき</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながら、<ruby>車<rt>くるま</rt></ruby>の<ruby>通行<rt>つうこう</rt></ruby>が<ruby>禁止<rt>きんし</rt></ruby>された<ruby>車道<rt>しゃどう</rt></ruby>を<ruby>走<rt>はし</rt></ruby>るのは<ruby>予想<rt>よそう</rt></ruby><ruby>以上<rt>いじょう</rt></ruby>に<ruby>楽<rt>たの</rt></ruby>しく、これが「<ruby>東京<rt>とうきょう</rt></ruby>マラソン」の<ruby>人気<rt>にんき</rt></ruby>の<ruby>秘密<rt>ひみつ</rt></ruby>なのだと<ruby>思<rt>おも</rt></ruby>った。<ruby>機会<rt>きかい</rt></ruby>があれば、ぜひまた<ruby>出<rt>で</rt></ruby>たいと<ruby>思<rt>おも</rt></ruby>っている。</p>
                `,
                fullTranslation: `Giải chạy "Tokyo Marathon" với hơn 3 vạn người tham gia mỗi năm là giải đấu vô cùng được ưa chuộng, dù có nộp đơn đăng ký cũng khó lòng mà được tham gia. Năm ngoái tôi cũng đã may mắn được tham dự và chạy hết quãng đường 42.195 km đến tận đích cuối cùng. Điều đọng lại ấn tượng sâu sắc nhất đối với tôi chính là cảm giác sảng khoái tuyệt vời khi được chạy trên những con đường đại đô thị như Shinjuku hay Ginza - nơi mà ngày thường lúc nào cũng ken đặc xe cộ. Nhận được sự cổ vũ của đông đảo mọi người, vừa ngắm nhìn những tòa nhà chọc trời và phong cảnh xung quanh, vừa sải bước chạy trên lòng đường cấm xe cộ lưu thông quả thực vui sướng vượt ngoài sức tưởng tượng, và tôi nghĩ đó chính là bí quyết tạo nên sức hút của Tokyo Marathon. Nếu có cơ hội, tôi nhất định muốn tham gia một lần nữa.`,
                vocabulary: [
                    { word: "大都会", hiragana: "だいとかい", meaning: "Đại đô thị / Thành phố lớn" },
                    { word: "印象に残る", hiragana: "いんしょうにのこる", meaning: "Đọng lại ấn tượng sâu sắc" },
                    { word: "大勢", hiragana: "おおぜい", meaning: "Đông đảo (người)" },
                    { word: "通行禁止", hiragana: "つうこうきんし", meaning: "Cấm lưu thông / Cấm đi lại" },
                    { word: "車道", hiragana: "しゃどう", meaning: "Lòng đường xe chạy" },
                    { word: "予想以上", hiragana: "よそういじょう", meaning: "Vượt ngoài dự tính / Hơn cả tưởng tượng" },
                    { word: "秘密", hiragana: "ひみつ", meaning: "Bí quyết / Bí mật" }
                ],
                grammarNotes: [
                    { pattern: "〜なかなか〜ない", meaning: "Mãi mà không... / Rất khó để..." },
                    { pattern: "〜ながら", meaning: "Vừa... vừa... (hành động đồng thời)" },
                    { pattern: "〜ぜひ〜たい", meaning: "Nhất định muốn làm gì" }
                ],
                questions: [
                    {
                        id: 1,
                        question: "問：この文章を書いた人がぜひまた出たいと思っている理由は何か。",
                        options: [
                            "何回も申し込めば、自分も「東京マラソン」に出られることがわかったから。",
                            "頑張れば、自分も42.195キロを最後まで走れることがわかったから。",
                            "車が走っていない大都会の車道を走るのが気持ちよく、予想以上に楽しかったから。",
                            "大勢の人の応援を受け、車でいっぱいの道を走ることが、予想以上に楽しかったから。"
                        ],
                        optionsAnalysis: [
                            {
                                option: "何回も申し込めば、自分も「東京マラソン」に出られることがわかったから。",
                                meaning: "Vì hiểu ra rằng nếu đăng ký nhiều lần thì mình cũng sẽ được tham gia Tokyo Marathon.",
                                analysis: "Sai: Bài đọc nêu '申し込んでもなかなか出られない' (rất khó trúng tuyển), không phải lý do tác giả muốn chạy lại."
                            },
                            {
                                option: "頑張れば、自分も42.195キロを最後まで走れることがわかったから。",
                                meaning: "Vì biết rằng chỉ cần cố gắng thì bản thân cũng chạy hết được 42.195km.",
                                analysis: "Sai: Đây chỉ là kết quả thành tích năm ngoái, không phải lý do cốt lõi tạo nên mong muốn tham gia tiếp."
                            },
                            {
                                option: "車が走っていない大都会の車道を走るのが気持ちよく、予想以上に楽しかったから。",
                                meaning: "Vì cảm giác được chạy trên lòng đường đại đô thị không có xe cộ rất sảng khoái và vui ngoài sức tưởng tượng.",
                                analysis: "ĐÚNG: Khớp chính xác với tâm đắc của tác giả: 'いつもは車でいっぱいの大都会の道を走ることの気持ちよさ... 車の通行が禁止された車道を走るのは予想以上に楽しく... これが人気の秘密... ぜひまた出たい'."
                            },
                            {
                                option: "大勢の人の応援を受け、車でいっぱいの道を走ることが、予想以上に楽しかったから。",
                                meaning: "Vì nhận được sự cổ vũ của nhiều người và chạy trên con đường ngập tràn xe cộ...",
                                analysis: "Sai: Khi diễn ra giải chạy thì xe cộ bị cấm lưu thông ('通行が禁止された車道'), không có chuyện chạy giữa dòng xe cộ ken đặc."
                            }
                        ],
                        answer: 2,
                        evidence: "「いつもは車でいっぱいの大都会の道を走ることの気持ちよさだった。...車の通行が禁止された車道を走るのは予想以上に楽しく、これが「東京マラソン」の人気の秘密なのだと思った。機会があれば、ぜひまた出たいと思っている。」",
                        explanation: "Đáp án 3 đúng. Tác giả cảm thấy vô cùng phấn khích và thích thú khi được thoải mái sải bước trên những trục đường đại đô thị lớn vốn ngày thường xe cộ ken đặc nay được cấm xe hoàn toàn để phục vụ giải chạy."
                    }
                ]
            },
            {
                id: "dokkai-n3-doanvan-08",
                lessonNumber: 8,
                title: "言葉の変化（「夜ご飯」） (Sự thay đổi của từ ngữ)",
                timeLimit: 180,
                passage: `
                    <p>「<ruby>夜<rt>よる</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>」という<ruby>言葉<rt>ことば</rt></ruby>を<ruby>初<rt>はじ</rt></ruby>めて<ruby>聞<rt>き</rt></ruby>いた。<ruby>最近<rt>さいきん</rt></ruby>、「<ruby>晩<rt>ばん</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>」の<ruby>代<rt>か</rt></ruby>わりに<ruby>使<rt>つか</rt></ruby>われるようになってきたらしい。<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>が「<ruby>晩<rt>ばん</rt></ruby>」から「<ruby>夜<rt>よる</rt></ruby>」へとだんだん<ruby>遅<rt>おそ</rt></ruby>くなり、<ruby>言葉<rt>ことば</rt></ruby>も<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>変化<rt>へんか</rt></ruby>してきたそうだが、「<ruby>晩<rt>ばん</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>」という<ruby>言葉<rt>ことば</rt></ruby>が<ruby>当<rt>あ</rt></ruby>たり<ruby>前<rt>まえ</rt></ruby>のわたしは、「<ruby>夜<rt>よる</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>」という<ruby>言葉<rt>ことば</rt></ruby>を<ruby>変<rt>へん</rt></ruby>だと<ruby>感<rt>かん</rt></ruby>じる。しかし、「<ruby>晩<rt>ばん</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>」も「<ruby>夕<rt>ゆう</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>」の<ruby>代<rt>か</rt></ruby>わりに<ruby>使<rt>つか</rt></ruby>われるようになった<ruby>言葉<rt>ことば</rt></ruby>だそうだ。「<ruby>夕<rt>ゆう</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>」が<ruby>当<rt>あ</rt></ruby>たり<ruby>前<rt>まえ</rt></ruby>だった<ruby>人<rt>ひと</rt></ruby>たちも、わたしと<ruby>同<rt>おな</rt></ruby>じように<ruby>感<rt>かん</rt></ruby>じたかもしれない。</p>
                `,
                fullTranslation: `Lần đầu tiên tôi được nghe thấy từ "Yogohan" (Cơm tối/Cơm đêm). Dạo gần đây, có vẻ như từ này bắt đầu được dùng để thay thế cho từ "Bangohan" (Cơm chiều muộn). Nghe nói do thời gian dùng bữa tối ngày càng muộn dần từ "chiều tối" (晩) sang "đêm" (夜), nên ngôn ngữ cũng biến đổi theo cùng. Thế nhưng, đối với một người vốn coi từ "Bangohan" là chuyện đương nhiên như tôi, thì lại cảm thấy từ "Yogohan" thật kỳ lạ. Tuy nhiên, nghe nói bản thân từ "Bangohan" trước đây cũng là từ xuất hiện để thay thế cho từ "Yugohan" (Cơm chập tối). Có lẽ những người mà thời xưa vốn xem từ "Yugohan" là đương nhiên, thì cũng từng có cảm giác y hệt như tôi bây giờ.`,
                vocabulary: [
                    { word: "代わりに", hiragana: "かわりに", meaning: "Thay vì / Thay cho" },
                    { word: "変化", hiragana: "へんか", meaning: "Biến đổi / Thay đổi" },
                    { word: "当たり前", hiragana: "あたりまえ", meaning: "Hiển nhiên / Đương nhiên / Lẽ dĩ nhiên" },
                    { word: "感じる", hiragana: "かんじる", meaning: "Cảm thấy / Cảm nhận" },
                    { word: "夕ご飯", hiragana: "ゆうごはん", meaning: "Cơm tối (thời điểm chập tối)" },
                    { word: "晩ご飯", hiragana: "ばんごはん", meaning: "Cơm tối (thời điểm tối muộn)" },
                    { word: "夜ご飯", hiragana: "よるごはん", meaning: "Cơm tối/Cơm đêm" }
                ],
                grammarNotes: [
                    { pattern: "〜ようになる", meaning: "Dần trở nên... / Bắt đầu..." },
                    { pattern: "〜らしい", meaning: "Dường như / Nghe có vẻ là..." },
                    { pattern: "〜かもしれない", meaning: "Có lẽ là / Có thể là..." }
                ],
                questions: [
                    {
                        id: 1,
                        question: "問：「夕ご飯」が当たり前だった人たちも、私と同じように感じたとあるが、「夕ご飯」が当たり前だった人たちは、どのように感じたのか。",
                        options: [
                            "「夜ご飯」という言葉は変だ。",
                            "「晩ご飯」という言葉は変だ。",
                            "「夕ご飯」という言葉は変だ。",
                            "「ご飯」という言葉は変だ。"
                        ],
                        optionsAnalysis: [
                            {
                                option: "「夜ご飯」という言葉は変だ。",
                                meaning: "Từ 'Yogohan' (Cơm đêm) thật kỳ lạ.",
                                analysis: "Sai: Đây là cảm nhận của tác giả ở hiện tại khi nghe từ mới '夜ご飯', không phải cảm nhận của thế hệ trước thời chỉ dùng '夕ご飯'."
                            },
                            {
                                option: "「晩ご飯」という言葉は変だ。",
                                meaning: "Từ 'Bangohan' (Cơm tối muộn) thật kỳ lạ.",
                                analysis: "ĐÚNG: Logic so sánh tương đồng: Tác giả (quen dùng '晩ご飯') thấy từ mới thay thế '夜ご飯' là kỳ lạ -> Tương tự, người thế hệ trước (quen dùng '夕ご飯') khi nghe thấy từ mới thay thế là '晩ご飯' ('「晩ご飯」も「夕ご飯」の代わりに使われるようになった') thì cũng cảm thấy từ '晩ご飯' là kỳ lạ."
                            },
                            {
                                option: "「夕ご飯」という言葉は変だ。",
                                meaning: "Từ 'Yugohan' thật kỳ lạ.",
                                analysis: "Sai: Họ coi '夕ご飯' là đương nhiên ('当たり前') nên không thể thấy nó kỳ lạ."
                            },
                            {
                                option: "「ご飯」という言葉は変だ。",
                                meaning: "Từ 'Gohan' thật kỳ lạ.",
                                analysis: "Sai hoàn toàn."
                            }
                        ],
                        answer: 1,
                        evidence: "「「晩ご飯」という言葉が当たり前の私は、「夜ご飯」という言葉を変だと感じる。しかし、「晩ご飯」も「夕ご飯」の代わりに使われるようになった言葉だそうだ。「夕ご飯」が当たり前だった人たちも、私と同じように感じたかもしれない。」",
                        explanation: "Đáp án 2 đúng. Tác giả liên tưởng: nếu bản thân mình (quen dùng '晩ご飯') thấy từ mới xuất hiện '夜ご飯' thật kỳ lạ, thì những người thời xưa (quen dùng '夕ご飯') khi lần đầu nghe từ mới xuất hiện là '晩ご飯' có lẽ cũng từng cảm thấy từ '晩ご飯' thật kỳ lạ y như vậy."
                    }
                ]
            },
            {
                id: "dokkai-n3-doanvan-09",
                lessonNumber: 9,
                title: "交流会のメール (Email thông báo buổi giao lưu)",
                timeLimit: 180,
                passage: `
                    <p>これは<ruby>交流会<rt>こうりゅうかい</rt></ruby>の<ruby>出席<rt>しゅっせき</rt></ruby><ruby>予定者<rt>よていしゃ</rt></ruby>に<ruby>届<rt>とど</rt></ruby>いたメールである。</p>
                    <p><ruby>交流会<rt>こうりゅうかい</rt></ruby>にご<ruby>出席<rt>しゅっせき</rt></ruby>のみなさん<br>
                    こんにちは、<ruby>田中<rt>たなか</rt></ruby>です。<br>
                    <ruby>今週<rt>こんしゅう</rt></ruby><ruby>土曜日<rt>どようび</rt></ruby>の<ruby>交流会<rt>こうりゅうかい</rt></ruby>は、「ナポリ」 というイタリア<ruby>料理<rt>りょうり</rt></ruby>のレストランにしました。１２<ruby>時<rt>じ</rt></ruby>からです。「ナポリ」の<ruby>場所<rt>ばしょ</rt></ruby>ですが、<ruby>地下鉄<rt>ちかてつ</rt></ruby><ruby>南北線<rt>なんぼくせん</rt></ruby>の<ruby>朝日<rt>あさひ</rt></ruby><ruby>駅<rt>えき</rt></ruby>から<ruby>歩<rt>ある</rt></ruby>いて１０<ruby>分<rt>ぷん</rt></ruby>ぐらいのところにあります。わかりにくい<ruby>場所<rt>ばしょ</rt></ruby>にあるので、みんなで<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>店<rt>みせ</rt></ruby>に<ruby>向<rt>む</rt></ruby>かおうと<ruby>思<rt>おも</rt></ruby>います。<ruby>朝日<rt>あさひ</rt></ruby><ruby>駅<rt>えき</rt></ruby>の１<ruby>番<rt>ばん</rt></ruby><ruby>出口<rt>でぐち</rt></ruby>に１１<ruby>時<rt>じ</rt></ruby>４５<ruby>分<rt>ふん</rt></ruby>に<ruby>集合<rt>しゅうごう</rt></ruby>してください。<ruby>車<rt>くるま</rt></ruby>で<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>行<rt>い</rt></ruby>く<ruby>人<rt>ひと</rt></ruby>は、<ruby>前日<rt>ぜんじつ</rt></ruby>までにメールをください。<br>
                    それでは、<ruby>楽<rt>たの</rt></ruby>しみにしています。</p>
                `,
                fullTranslation: `Đây là email gửi tới những người dự định tham gia buổi giao lưu:\n\nKính gửi các bạn tham dự buổi giao lưu,\nXin chào mọi người, mình là Tanaka.\nBuổi giao lưu vào Thứ Bảy tuần này sẽ diễn ra tại nhà hàng đồ Ý tên là "Napoli", bắt đầu từ 12 giờ. Về địa điểm của quán "Napoli", quán cách ga Asahi tuyến tàu điện ngầm Namboku khoảng 10 phút đi bộ. Vì quán ở vị trí hơi khó tìm nên mình định mọi người sẽ cùng nhau đi tới quán. Xin hãy tập trung tại Cửa ra số 1 của ga Asahi vào lúc 11 giờ 45 phút. Những ai tự đi thẳng đến quán bằng ô tô thì vui lòng gửi email cho mình trước ngày diễn ra nhé.\nRất mong chờ được gặp mọi người.`,
                vocabulary: [
                    { word: "交流会", hiragana: "こうりゅうかい", meaning: "Buổi giao lưu / Buổi gặp mặt" },
                    { word: "予定者", hiragana: "よていしゃ", meaning: "Người dự định tham gia" },
                    { word: "南北線", hiragana: "なんぼくせん", meaning: "Tuyến tàu điện ngầm Nam Bắc" },
                    { word: "出口", hiragana: "でぐち", meaning: "Cửa ra / Lối ra" },
                    { word: "向かう", hiragana: "むかう", meaning: "Hướng về / Đi về phía..." },
                    { word: "前日", hiragana: "ぜんじつ", meaning: "Ngày hôm trước" }
                ],
                grammarNotes: [
                    { pattern: "〜にする", meaning: "Quyết định chọn (địa điểm, món ăn...)" },
                    { pattern: "〜前日までに", meaning: "Trước ngày diễn ra (chỉ thời hạn)" },
                    { pattern: "〜楽しみにしています", meaning: "Rất mong đợi / Háo hức chờ đón" }
                ],
                questions: [
                    {
                        id: 1,
                        question: "問：このメールを見て、交流会に出席する人はどうしなければならないか。",
                        options: [
                            "地下鉄で行く場合は、朝日駅の1番出口に12時までに行く。",
                            "地下鉄で行く場合は、「ナポリ」に直接12時までに行く。",
                            "車で行く場合は、今週の金曜日までに田中さんに連絡する。",
                            "車で行く場合は、今週の金曜日までに「ナポリ」 に連絡する。"
                        ],
                        optionsAnalysis: [
                            {
                                option: "地下鉄で行く場合は、朝日駅の1番出口に12時までに行く。",
                                meaning: "Nếu đi bằng tàu điện ngầm thì đến cửa số 1 ga Asahi trước 12 giờ.",
                                analysis: "Sai giờ tập trung: Tập trung tại ga Asahi lúc 11h45 ('11時45分に集合'), 12h là giờ bắt đầu ăn ở nhà hàng."
                            },
                            {
                                option: "地下鉄で行く場合は、「ナポリ」に直接12時までに行く。",
                                meaning: "Nếu đi bằng tàu điện ngầm thì đi thẳng đến quán Napoli trước 12 giờ.",
                                analysis: "Sai: Đi tàu điện ngầm phải tập trung tại ga Asahi để cùng đi bộ tới vì quán khó tìm ('わかりにくい場所にあるので、みんなで一緒に店に向かおう')."
                            },
                            {
                                option: "車で行く場合は、今週の金曜日までに田中さんに連絡する。",
                                meaning: "Nếu đi bằng ô tô thì liên lạc với anh Tanaka trước thứ Sáu tuần này.",
                                analysis: "ĐÚNG: Buổi giao lưu diễn ra vào Thứ Bảy ('今週土曜日'), người đi ô tô phải gửi mail trước ngày diễn ra ('前日までにメールをください' -> tức là trước Thứ Sáu) cho Tanaka (người gửi mail)."
                            },
                            {
                                option: "車で行く場合は、今週の金曜日までに「ナポリ」 に連絡する。",
                                meaning: "Nếu đi bằng ô tô thì liên lạc cho quán Napoli trước thứ Sáu.",
                                analysis: "Sai người nhận liên lạc: Phải liên lạc cho Tanaka (trưởng ban tổ chức) chứ không phải liên lạc cho nhà hàng Napoli."
                            }
                        ],
                        answer: 2,
                        evidence: "「今週土曜日の交流会は... 12時からです。...車で直接行く人は、前日までにメールをください。」",
                        explanation: "Đáp án 3 đúng. Buổi họp mặt tổ chức vào thứ Bảy nên 'ngày hôm trước' (前日) là thứ Sáu. Ai tự đi bằng ô tô phải gửi mail thông báo cho Tanaka trước thứ Sáu tuần này."
                    }
                ]
            },
            {
                id: "dokkai-n3-doanvan-10",
                lessonNumber: 10,
                title: "すし一番の大会 (Cuộc thi Sushi Ichiban)",
                timeLimit: 180,
                passage: `
                    <p>これはある<ruby>国<rt>くに</rt></ruby>で<ruby>行<rt>おこな</rt></ruby>われた、すしの<ruby>大会<rt>たいかい</rt></ruby>についての<ruby>記事<rt>きじ</rt></ruby>である。</p>
                    <p><ruby>先日<rt>せんじつ</rt></ruby>、「すし<ruby>一番<rt>いちばん</rt></ruby>」という<ruby>大会<rt>たいかい</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>われ、<ruby>各地<rt>かくち</rt></ruby>から<ruby>集<rt>あつ</rt></ruby>まった１５<ruby>人<rt>にん</rt></ruby>のすし<ruby>屋<rt>や</rt></ruby>が、すしを<ruby>作<rt>つく</rt></ruby>るはやさと、<ruby>皿<rt>さら</rt></ruby>に<ruby>並<rt>なら</rt></ruby>べたすしの<ruby>全体的<rt>ぜんたいてき</rt></ruby>な<ruby>美<rt>うつく</rt></ruby>しさを<ruby>競争<rt>きょうそう</rt></ruby>した。<br>
                    <ruby>参加者<rt>さんかしゃ</rt></ruby>のほとんどは、１０<ruby>年<rt>ねん</rt></ruby><ruby>以上<rt>いじょう</rt></ruby>の<ruby>経験<rt>けいけん</rt></ruby>がある<ruby>人<rt>ひと</rt></ruby>たちだったが、<ruby>今年<rt>ことし</rt></ruby>の<ruby>優勝者<rt>ゆうしょうしゃ</rt></ruby>は、すし<ruby>屋<rt>や</rt></ruby>になって５<ruby>年<rt>ねん</rt></ruby><ruby>目<rt>め</rt></ruby>の２７<ruby>歳<rt>さい</rt></ruby>の<ruby>若者<rt>わかもの</rt></ruby>だった。<br>
                    <ruby>優勝者<rt>ゆうしょうしゃ</rt></ruby>には<ruby>日本<rt>にほん</rt></ruby><ruby>旅行<rt>りょこう</rt></ruby>がプレゼントされ、<ruby>旅行<rt>りょこう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>には、<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>日本<rt>にほん</rt></ruby><ruby>料理<rt>りょうり</rt></ruby><ruby>店<rt>てん</rt></ruby>で<ruby>食事<rt>しょくじ</rt></ruby>をしたり、<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>っているところを<ruby>見学<rt>けんがく</rt></ruby>したりすることになっている。<ruby>優勝者<rt>ゆうしょうしゃ</rt></ruby>は、<ruby>日本<rt>にほん</rt></ruby>に<ruby>初<rt>はじ</rt></ruby>めて<ruby>行<rt>い</rt></ruby>くので、とてもうれしいと<ruby>語<rt>かた</rt></ruby>った。</p>
                `,
                fullTranslation: `Đây là bài báo viết về một cuộc thi làm sushi được tổ chức tại một quốc gia:\n\nVừa qua, cuộc thi mang tên "Sushi Ichiban" đã diễn ra, với sự góp mặt của 15 đầu bếp sushi đến từ khắp các địa phương, cùng nhau tranh tài về tốc độ nắm sushi cũng như vẻ đẹp tổng thể của đĩa sushi khi bày biện.\nHầu hết các thí sinh tham gia đều là những người có trên 10 năm kinh nghiệm trong nghề, nhưng người giành chức vô địch năm nay lại là một chàng trai trẻ 27 tuổi mới vào nghề sushi được 5 năm.\nQuán quân cuộc thi được tặng một chuyến du lịch Nhật Bản. Trong chuyến đi, người này sẽ được thưởng thức ẩm thực tại các nhà hàng Nhật Bản nổi tiếng và tham quan trực tiếp quy trình chế biến món ăn. Vị quán quân chia sẻ rằng đây là lần đầu tiên được đến Nhật Bản nên cảm thấy vô cùng vui sướng.`,
                vocabulary: [
                    { word: "記事", hiragana: "きじ", meaning: "Bài báo / Phóng sự" },
                    { word: "各地", hiragana: "かくち", meaning: "Các nơi / Khắp các địa phương" },
                    { word: "全体的", hiragana: "ぜんたいてき", meaning: "Tính tổng thể / Nhìn chung" },
                    { word: "競争", hiragana: "きょうそう", meaning: "Cạnh tranh / Thi đấu" },
                    { word: "若者", hiragana: "わかもの", meaning: "Người trẻ tuổi / Thanh niên" },
                    { word: "見学", hiragana: "けんがく", meaning: "Tham quan học tập" },
                    { word: "語る", hiragana: "かたる", meaning: "Kể / Chia sẻ / Tâm sự" }
                ],
                grammarNotes: [
                    { pattern: "〜だけでなく / 〜だけでは", meaning: "Không chỉ riêng... / Chỉ... thì không..." },
                    { pattern: "〜ことになっている", meaning: "Được quy định / Lên lịch trình làm gì" },
                    { pattern: "〜目 (〜め)", meaning: "Thứ... / Năm thứ..." }
                ],
                questions: [
                    {
                        id: 1,
                        question: "問：この記事から、「すし一番」という大会についてどんなことがわかるか。",
                        options: [
                            "すしをはやく作るだけでは、優勝することができない。",
                            "参加するには、すし屋として10年以上の経験が必要だ。",
                            "優勝者は、日本の有名なすし屋で働くことができる。",
                            "参加できるのは、日本に行ったことがない人だけである。"
                        ],
                        optionsAnalysis: [
                            {
                                option: "すしをはやく作るだけでは、優勝することができない。",
                                meaning: "Chỉ làm sushi nhanh thôi thì không thể giành chiến thắng.",
                                analysis: "ĐÚNG: Cuộc thi chấm cả hai yếu tố: tốc độ làm ('すしを作るはやさ') VÀ độ thẩm mỹ khi bày ra đĩa ('皿に並べたすしの全体的な美しさ'), do đó chỉ nhanh thôi là không đủ để vô địch."
                            },
                            {
                                option: "参加するには、すし屋として10年以上の経験が必要だ。",
                                meaning: "Để tham gia cần phải có trên 10 năm kinh nghiệm.",
                                analysis: "Sai: Người vô địch năm nay mới chỉ làm nghề được 5 năm ('すし屋になって5年目')."
                            },
                            {
                                option: "優勝者は、日本の有名なすし屋で働くことができる。",
                                meaning: "Người vô địch có thể làm việc tại quán sushi nổi tiếng ở Nhật.",
                                analysis: "Sai: Quán quân được đi du lịch, ăn uống và tham quan ('食事をしたり、料理を作っているところを見学したりする'), không phải được vào làm việc."
                            },
                            {
                                option: "参加できるのは、日本に行ったことがない人だけである。",
                                meaning: "Chỉ những ai chưa từng đến Nhật mới được tham gia.",
                                analysis: "Sai: Bài viết không đưa ra điều kiện này; việc người vô địch lần đầu đi Nhật chỉ là trường hợp cá nhân của anh ấy."
                            }
                        ],
                        answer: 0,
                        evidence: "「15人のすし屋が、すしを作るはやさと、皿に並べたすしの全体的な美しさを競争した。」",
                        explanation: "Đáp án 1 đúng. Tiêu chí của cuộc thi là đánh giá đồng thời cả tốc độ làm sushi lẫn tính thẩm mỹ tổng thể của đĩa thức ăn, do đó thí sinh chỉ làm nhanh mà không đẹp thì không thể vô địch."
                    }
                ]
            },
            {
                id: "dokkai-n3-doanvan-11",
                lessonNumber: 11,
                title: "図書館からのお知らせ (Thông báo từ thư viện Fuji)",
                timeLimit: 180,
                passage: `
                    <p>これは<ruby>図書館<rt>としょかん</rt></ruby>からのお<ruby>知<rt>し</rt></ruby>らせである。</p>
                    <p>ふじ<ruby>図書館<rt>としょかん</rt></ruby>をご<ruby>利用<rt>りよう</rt></ruby>の<ruby>皆様<rt>みなさま</rt></ruby>へ<br>
                    いつもふじ<ruby>図書館<rt>としょかん</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>していただき、ありがとうございます。<br>
                    <ruby>本<rt>ほん</rt></ruby>、ＣＤの<ruby>整理<rt>せいり</rt></ruby>を<ruby>以下<rt>いか</rt></ruby>の<ruby>日程<rt>にってい</rt></ruby>で<ruby>行<rt>おこな</rt></ruby>います。この<ruby>整理<rt>せいり</rt></ruby><ruby>期間<rt>きかん</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>は、<ruby>図書館<rt>としょかん</rt></ruby>は<ruby>休館<rt>きゅうかん</rt></ruby>いたします。ご<ruby>注意<rt>ちゅうい</rt></ruby>ください。<br>
                    １２<ruby>月<rt>がつ</rt></ruby>９<ruby>日<rt>にち</rt></ruby>(<ruby>月<rt>げつ</rt></ruby>)～１２<ruby>月<rt>がつ</rt></ruby>１２<ruby>日<rt>にち</rt></ruby>(<ruby>木<rt>もく</rt></ruby>)<br>
                    <ruby>休館<rt>きゅうかん</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>は<ruby>窓口<rt>まどぐち</rt></ruby>での<ruby>返却<rt>へんきゃく</rt></ruby>はできません。<ruby>本<rt>ほん</rt></ruby>は<ruby>入口<rt>いりぐち</rt></ruby><ruby>横<rt>よこ</rt></ruby>にある<ruby>返却用<rt>へんきゃくよう</rt></ruby>の<ruby>図書館<rt>としょかん</rt></ruby>ポストに<ruby>入<rt>い</rt></ruby>れてください。ＣＤについては、ポストの<ruby>利用<rt>りよう</rt></ruby>はできませんので、１２<ruby>月<rt>がつ</rt></ruby>１３<ruby>日<rt>にち</rt></ruby><ruby>以降<rt>いこう</rt></ruby>、<ruby>窓口<rt>まどぐち</rt></ruby>にお<ruby>返<rt>かえ</rt></ruby>しください。<br>
                    ご<ruby>協力<rt>きょうりょく</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いいたします。<br>
                    １１<ruby>月<rt>がつ</rt></ruby>２９<ruby>日<rt>にち</rt></ruby>　ふじ<ruby>図書館<rt>としょかん</rt></ruby></p>
                `,
                fullTranslation: `Đây là thông báo từ thư viện:\n\nKính gửi quý bạn đọc sử dụng Thư viện Fuji,\nXin chân thành cảm ơn quý khách đã luôn sử dụng Thư viện Fuji.\nChúng tôi sẽ tiến hành sắp xếp lại sách và đĩa CD theo lịch trình dưới đây. Trong suốt thời gian sắp xếp này, thư viện sẽ tạm đóng cửa (nghỉ phục vụ). Xin quý vị lưu ý.\nThời gian: Từ Thứ Hai ngày 9/12 đến Thứ Năm ngày 12/12\nTrong thời gian đóng cửa, quý khách không thể trả sách tại quầy giao dịch. Đối với SÁCH, xin vui lòng bỏ vào hòm trả sách của thư viện đặt bên cạnh lối vào. Đối với ĐĨA CD, quý khách không được bỏ vào hòm thư, mà xin vui lòng trả trực tiếp tại quầy giao dịch từ ngày 13/12 trở đi.\nRất mong nhận được sự hợp tác của quý bạn đọc.\nNgày 29 tháng 11 - Thư viện Fuji`,
                vocabulary: [
                    { word: "整理", hiragana: "せいり", meaning: "Sắp xếp / Chỉnh lý" },
                    { word: "日程", hiragana: "にってい", meaning: "Lịch trình / Thời gian biểu" },
                    { word: "休館", hiragana: "きゅうかん", meaning: "Đóng cửa (bảo tàng, thư viện)" },
                    { word: "窓口", hiragana: "まどぐち", meaning: "Quầy giao dịch" },
                    { word: "返却", hiragana: "へんきゃく", meaning: "Trả lại (sách, đồ mượn)" },
                    { word: "ポスト", hiragana: "ぽすと", meaning: "Hòm thư / Hòm trả sách" }
                ],
                grammarNotes: [
                    { pattern: "〜期間中 (きかんちゅう)", meaning: "Trong suốt khoảng thời gian..." },
                    { pattern: "〜については", meaning: "Về phần... / Đối với..." },
                    { pattern: "〜以降 (いこう)", meaning: "Từ sau ngày đó trở đi" }
                ],
                questions: [
                    {
                        id: 1,
                        question: "問：このお知らせでは、利用者にどうするように言っているか。",
                        options: [
                            "本もCDも整理期間が終わってから窓口に返す。",
                            "本もCDも整理期間中は図書館ポストに入れる。",
                            "整理期間中、本は窓口に返し、CDは整理期間が終わってから窓口に返す。",
                            "整理期間中、本は図書館ポストに入れ、CDは整理期間が終わってから窓口に返す。"
                        ],
                        optionsAnalysis: [
                            {
                                option: "本もCDも整理期間が終わってから窓口に返す。",
                                meaning: "Cả sách và đĩa CD đều đợi hết thời gian sắp xếp rồi mới trả ở quầy.",
                                analysis: "Sai: Sách có thể trả bất cứ lúc nào trong thời gian đóng cửa bằng cách bỏ vào hòm thư ('本は...図書館ポストに入れてください')."
                            },
                            {
                                option: "本もCDも整理期間中は図書館ポストに入れる。",
                                meaning: "Cả sách và CD đều bỏ vào hòm thư viện trong thời gian sắp xếp.",
                                analysis: "Sai: Đĩa CD bị cấm bỏ vào hòm thư ('CDについては、ポストの利用はできません')."
                            },
                            {
                                option: "整理期間中、本は窓口に返し、CDは整理期間が終わってから窓口に返す。",
                                meaning: "Trong thời gian sắp xếp, sách trả ở quầy, CD trả ở quầy sau khi kết thúc.",
                                analysis: "Sai: Trong thời gian đóng cửa, quầy giao dịch không nhận sách ('休館中は窓口での返却はできません')."
                            },
                            {
                                option: "整理期間中、本は図書館ポストに入れ、CDは整理期間が終わってから窓口に返す。",
                                meaning: "Trong thời gian sắp xếp, sách bỏ vào hòm thư viện, còn đĩa CD trả tại quầy sau khi thời gian sắp xếp kết thúc.",
                                analysis: "ĐÚNG: Khớp chính xác với cả 2 quy định: sách bỏ hòm trả sách cạnh cửa ra vào, đĩa CD đợi ngày 13/12 (sau khi hết đợt nghỉ 9-12/12) trả tại quầy."
                            }
                        ],
                        answer: 3,
                        evidence: "「本は入口横にある返却用の図書館ポストに入れてください。CDについては、ポストの利用はできませんので、12月13日以降、窓口にお返しください。」",
                        explanation: "Đáp án 4 đúng. Trong 4 ngày đóng cửa chỉnh lý (9/12-12/12), người đọc trả sách vào hòm thư bên cạnh lối vào, riêng đĩa CD dễ vỡ nên không được bỏ hòm thư mà phải đợi ngày mở cửa lại (13/12) trả trực tiếp tại quầy."
                    }
                ]
            },
            {
                id: "dokkai-n3-doanvan-12",
                lessonNumber: 12,
                title: "ほかとは違う絵 (Bức tranh khác biệt)",
                timeLimit: 180,
                passage: `
                    <p>ロビーには、子どもたちが<ruby>描<rt>えが</rt></ruby>いた「<ruby>緑<rt>みどり</rt></ruby>の<ruby>丘<rt>おか</rt></ruby>から<ruby>見<rt>み</rt></ruby>た<ruby>町<rt>まち</rt></ruby>の<ruby>景色<rt>けしき</rt></ruby>」の<ruby>絵<rt>え</rt></ruby>が<ruby>飾<rt>かざ</rt></ruby>られていた。その<ruby>中<rt>なか</rt></ruby>に<ruby>一<rt>ひと</rt></ruby>つ、ほかとは<ruby>違<rt>ちが</rt></ruby>う<ruby>絵<rt>え</rt></ruby>があった。ほかの<ruby>絵<rt>え</rt></ruby>には<ruby>丘<rt>おか</rt></ruby>から<ruby>見<rt>み</rt></ruby>える<ruby>家<rt>いえ</rt></ruby>や<ruby>木<rt>き</rt></ruby>などが<ruby>描<rt>えが</rt></ruby>かれているのに、その<ruby>絵<rt>え</rt></ruby>だけは、<ruby>紙<rt>かみ</rt></ruby><ruby>全体<rt>ぜんたい</rt></ruby>が<ruby>青<rt>あお</rt></ruby>い<ruby>色<rt>いろ</rt></ruby>で<ruby>塗<rt>ぬ</rt></ruby>られ、あちらこちらに<ruby>白<rt>しろ</rt></ruby>いものが<ruby>描<rt>えが</rt></ruby>かれていた。たぶん、この<ruby>絵<rt>え</rt></ruby>を<ruby>描<rt>えが</rt></ruby>いた子どもは、<ruby>丘<rt>おか</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>から<ruby>町<rt>まち</rt></ruby>を<ruby>見<rt>み</rt></ruby>ているうちに<ruby>空<rt>そら</rt></ruby>の<ruby>青<rt>あお</rt></ruby>さと<ruby>流<rt>なが</rt></ruby>れていく<ruby>雲<rt>くも</rt></ruby>に<ruby>心<rt>こころ</rt></ruby>をひかれていったのだろう。そして、その<ruby>空<rt>そら</rt></ruby>の<ruby>美<rt>うつく</rt></ruby>しさを<ruby>紙<rt>かみ</rt></ruby>いっぱいに<ruby>描<rt>えが</rt></ruby>いたのではないだろうか。</p>
                `,
                fullTranslation: `Tại sảnh chờ có trưng bày những bức tranh với chủ đề "Phong cảnh thị trấn nhìn từ ngọn đồi xanh" do các em thiếu nhi vẽ. Trong số đó có một bức tranh hoàn toàn khác biệt với những bức còn lại. Trong khi những bức tranh khác đều vẽ nhà cửa và cây cối nhìn thấy từ ngọn đồi, thì riêng bức tranh đó toàn bộ mặt giấy lại được phủ một màu xanh biếc, điểm xuyết rải rác đây đó là những mảng màu trắng. Có lẽ đứa trẻ vẽ bức tranh này trong lúc ngắm nhìn thị trấn từ đỉnh đồi đã bị cuốn hút tâm hồn bởi nền trời xanh ngắt và những áng mây bồng bềnh lướt trôi. Và rồi, phải chăng em đã vẽ trọn vẹn vẻ đẹp của bầu trời ấy phủ kín khắp cả trang giấy?`,
                vocabulary: [
                    { word: "丘", hiragana: "おか", meaning: "Ngọn đồi" },
                    { word: "飾る", hiragana: "かざる", meaning: "Trang trí / Trưng bày" },
                    { word: "塗る", hiragana: "ぬる", meaning: "Tô (màu) / Quét (sơn)" },
                    { word: "あちらこちら", hiragana: "あちらこちら", meaning: "Đây đó / Rải rác khắp nơi" },
                    { word: "心をひかれる", hiragana: "こころをひかれる", meaning: "Bị cuốn hút / Bị mê hoặc tâm hồn" },
                    { word: "紙いっぱいに", hiragana: "かみいっぱいに", meaning: "Tràn ngập khắp mặt giấy" }
                ],
                grammarNotes: [
                    { pattern: "〜のに", meaning: "Thế mà / Mặc dù... nhưng..." },
                    { pattern: "〜ているうちに", meaning: "Trong lúc đang... thì (có sự thay đổi)" },
                    { pattern: "〜のではないだろうか", meaning: "Phải chăng là... / Có lẽ là... (dự đoán mang tính khẳng định nhẹ nhàng)" }
                ],
                questions: [
                    {
                        id: 1,
                        question: "問：ほかとは違う絵を描いた子どもについて、この文章を書いた人はどう言っているか。",
                        options: [
                            "ほかの子どもと同じような絵は描きたくなかったのだろう。",
                            "そのとき最も印象的だったものをそのまま描いたのだろう。",
                            "丘から見える家や木を上手に描くことができなかったのだろう。",
                            "空を描いているうちに、紙が足りなくなってしまったのだろう。"
                        ],
                        optionsAnalysis: [
                            {
                                option: "ほかの子どもと同じような絵は描きたくなかったのだろう。",
                                meaning: "Chắc là đứa trẻ không muốn vẽ bức tranh giống như các bạn khác.",
                                analysis: "Sai: Tác giả không hề nói đứa trẻ cố tình muốn tạo sự khác biệt hay ghét vẽ giống bạn."
                            },
                            {
                                option: "そのとき最も印象的だったものをそのまま描いたのだろう。",
                                meaning: "Chắc là đứa trẻ đã vẽ đúng theo thứ để lại ấn tượng sâu đậm nhất với mình lúc đó.",
                                analysis: "ĐÚNG: Đứa trẻ bị cuốn hút tâm trí bởi bầu trời xanh và mây trôi ('空の青さと流れていく雲に心をひかれていった'), tức là thứ gây ấn tượng nhất, và đã vẽ trọn vẹn vẻ đẹp đó ra giấy."
                            },
                            {
                                option: "丘から見える家や木を上手に描くことができなかったのだろう。",
                                meaning: "Chắc là đứa trẻ không thể vẽ đẹp nhà cửa và cây cối.",
                                analysis: "Sai: Tác giả không đánh giá thấp kỹ năng vẽ của đứa trẻ."
                            },
                            {
                                option: "空を描いているうちに、紙が足りなくなってしまったのだろう。",
                                meaning: "Chắc là trong lúc vẽ bầu trời thì bị thiếu giấy.",
                                analysis: "Sai hoàn toàn: '紙いっぱいに描いた' nghĩa là em chủ ý vẽ bầu trời phủ kín toàn bộ trang giấy."
                            }
                        ],
                        answer: 1,
                        evidence: "「丘の上から町を見ているうちに空の青さと流れていく雲に心をひかれていったのだろう。そして、その空の美しさを紙いっぱいに描いたのではないだろうか。」",
                        explanation: "Đáp án 2 đúng. Người viết cảm nhận rằng đứa trẻ trong lúc đứng trên đồi đã bị vẻ đẹp của bầu trời xanh biếc và những đám mây trôi làm rung động sâu sắc (thứ ấn tượng nhất), nên em đã vẽ lại trọn vẹn cảnh tượng tươi đẹp đó ngập tràn khắp trang giấy."
                    }
                ]
            }
        ],
        "trungvan": [
    {
        "id":  "dokkai-n3-trungvan-01",
        "level":  "N3",
        "category":  "trungvan",
        "categoryName":  "Trung văn (Đoạn văn vừa)",
        "lessonNumber":  1,
        "title":  "お年玉で買ったラジカセ (Chiếc đài cassette mua bằng tiền mừng tuổi)",
        "timeLimit":  360,
        "passage":  "\u003cp\u003e\u003cruby\u003e子\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eどものころ、\u003cruby\u003e両親\u003crt\u003eりょうしん\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e祖父母\u003crt\u003eそふぼ\u003c/rt\u003e\u003c/ruby\u003eからお\u003cruby\u003e年玉\u003crt\u003eとしだま\u003c/rt\u003e\u003c/ruby\u003eをもらうことは、お\u003cruby\u003e正月\u003crt\u003eしょうがつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e楽\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eしみの\u003cruby\u003e一\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eつだった。もらったお\u003cruby\u003e金\u003crt\u003eかね\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e漫画\u003crt\u003eまんが\u003c/rt\u003e\u003c/ruby\u003eやゲームなどを\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eうこともあったが、\u003cruby\u003e貯金\u003crt\u003eちょきん\u003c/rt\u003e\u003c/ruby\u003eをすることのほうが\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eかった。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003eから２０\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e以上\u003crt\u003eいじょう\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eになるが、\u003cruby\u003e中学\u003crt\u003eちゅうがく\u003c/rt\u003e\u003c/ruby\u003e２\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003eのとき、お\u003cruby\u003e年玉\u003crt\u003eとしだま\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e欲\u003crt\u003eほ\u003c/rt\u003e\u003c/ruby\u003eしいと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eっていたラジカセを\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eうことにした。その\u003cruby\u003e年\u003crt\u003eとし\u003c/rt\u003e\u003c/ruby\u003eのお\u003cruby\u003e年玉\u003crt\u003eとしだま\u003c/rt\u003e\u003c/ruby\u003eだけでは\u003cruby\u003e足\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eりなかったので、\u003cruby\u003e貯金\u003crt\u003eちょきん\u003c/rt\u003e\u003c/ruby\u003eをおろさなければならなかった。そのラジカセで、\u003cruby\u003e勉強\u003crt\u003eべんきょう\u003c/rt\u003e\u003c/ruby\u003eするときも\u003cruby\u003e寝\u003crt\u003eね\u003c/rt\u003e\u003c/ruby\u003eるときも、\u003cruby\u003e毎日\u003crt\u003eまいにち\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e大好\u003crt\u003eだいす\u003c/rt\u003e\u003c/ruby\u003eきな\u003cruby\u003e歌手\u003crt\u003eかしゅ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e歌\u003crt\u003eうた\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eいていた。ラジカセは、①\u003cu\u003eいつもわたしのそばにあった\u003c/u\u003e。しかし、\u003cruby\u003e高校\u003crt\u003eこうこう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e入学\u003crt\u003eにゅうがく\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e祝\u003crt\u003eいわ\u003c/rt\u003e\u003c/ruby\u003eいにＣＤプレーヤーをもらうと、ラジカセは\u003cruby\u003e使\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eわなくなってしまった。\u003c/p\u003e\u003cp\u003eそのラジカセは、だれにも\u003cruby\u003e使\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eわれないまま、１０\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e以上\u003crt\u003eいじょう\u003c/rt\u003e\u003c/ruby\u003eわたしの\u003cruby\u003e部屋\u003crt\u003eへや\u003c/rt\u003e\u003c/ruby\u003eにあった。ラジカセを\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eると、いつも\u003cruby\u003e母\u003crt\u003eはは\u003c/rt\u003e\u003c/ruby\u003eは、「これは②\u003cu\u003e\u003cruby\u003e必要\u003crt\u003eひつよう\u003c/rt\u003e\u003c/ruby\u003eのない\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003eだったね\u003c/u\u003e。もうちょっと\u003cruby\u003e待\u003crt\u003eま\u003c/rt\u003e\u003c/ruby\u003eっていたら、ＣＤプレーヤーをもらえたんだから。」と\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eって\u003cruby\u003e笑\u003crt\u003eわら\u003c/rt\u003e\u003c/ruby\u003eっていた。しかし、わたしはそうは\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eわない。\u003cruby\u003e自分\u003crt\u003eじぶん\u003c/rt\u003e\u003c/ruby\u003eがそのときに\u003cruby\u003e本当\u003crt\u003eほんとう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e欲\u003crt\u003eほ\u003c/rt\u003e\u003c/ruby\u003eしい\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eったのだから、いい\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003eをしたと、\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003eでも\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eっている。\u003c/p\u003e",
        "fullTranslation":  "Khi còn nhỏ, việc nhận tiền mừng tuổi (Otoshidama) từ bố mẹ và ông bà là một trong những niềm vui lớn trong dịp Tết. Dù thỉnh thoảng tôi cũng dùng số tiền nhận được để mua truyện tranh hoặc trò chơi điện tử, nhưng phần lớn tôi đều đem gửi tiết kiệm.\n\nCách đây hơn 20 năm, vào năm học lớp 8 (Trung học cơ sở năm 2), tôi đã quyết định dùng tiền mừng tuổi để mua một chiếc đài cassette (radicase) mà tôi hằng ao ước từ trước. Vì số tiền mừng tuổi năm đó không đủ nên tôi đã phải rút cả tiền tiết kiệm ra. Với chiếc đài cassette ấy, cả lúc học bài lẫn lúc đi ngủ, ngày nào tôi cũng nghe các bài hát của ca sĩ mà mình yêu thích nhất. Chiếc đài cassette khi ấy (1) luôn luôn ở bên cạnh tôi. Thế nhưng, khi lên cấp 3 được tặng một chiếc máy nghe đĩa CD làm quà nhập học, tôi đã không còn dùng đến chiếc đài cassette nữa.\n\nChiếc đài cassette đó cứ thế nằm yên trong phòng tôi hơn 10 năm mà không ai dùng tới. Mỗi lần nhìn thấy chiếc đài, mẹ tôi lại cười và bảo: \u0027Cái này đúng là (2) một món đồ mua không cần thiết nhỉ. Nếu con ráng đợi thêm chút nữa thì đã được tặng máy nghe đĩa CD rồi\u0027. Nhưng tôi lại không nghĩ như vậy. Bởi vì vào thời điểm đó, tôi đã mua được món đồ mà bản thân thực sự khao khát muốn có, nên cho đến tận bây giờ, tôi vẫn nghĩ đó là một lần mua sắm tuyệt vời.",
        "vocabulary":  [
                           {
                               "word":  "お年玉",
                               "hiragana":  "おとしだま",
                               "meaning":  "Tiền mừng tuổi / Tiền lì xì đầu năm"
                           },
                           {
                               "word":  "祖父母",
                               "hiragana":  "そふぼ",
                               "meaning":  "Ông bà (nói chung)"
                           },
                           {
                               "word":  "貯金をおろす",
                               "hiragana":  "ちょきんをおろす",
                               "meaning":  "Rút tiền tiết kiệm"
                           },
                           {
                               "word":  "ラジカセ",
                               "hiragana":  "らじかせ",
                               "meaning":  "Đài cassette kèm radio"
                           },
                           {
                               "word":  "入学祝い",
                               "hiragana":  "にゅうがくいわい",
                               "meaning":  "Quà mừng nhập học / đỗ trường"
                           },
                           {
                               "word":  "買い物をした",
                               "hiragana":  "かいものをした",
                               "meaning":  "Đã mua sắm (một món đồ đáng giá)"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜たまま",
                                 "meaning":  "Để nguyên trạng thái... không thay đổi"
                             },
                             {
                                 "pattern":  "〜たら〜たのに / 〜たら〜たんだから",
                                 "meaning":  "Nếu... thì đã... rồi (tiếc nuối hoặc giả định)"
                             },
                             {
                                 "pattern":  "〜からといって / 〜のだから",
                                 "meaning":  "Chính bởi vì... nên..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「いつもわたしのそばにあった」とあるが、どうしてか。",
                              "options":  [
                                              "両親や祖父母からの大切なプレゼントだったから",
                                              "ラジカセを使っていつも勉強をしていたから",
                                              "大好きな歌手の歌をいつも聞いていたから",
                                              "入学祝いにもらった物で、高価だったから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "両親や祖父母からの大切なプレゼントだったから",
                                                          "meaning":  "Vì đó là món quà quý giá từ bố mẹ và ông bà tặng.",
                                                          "analysis":  "Sai: Chiếc đài do tác giả tự rút tiền tiết kiệm và tiền mừng tuổi ra mua, không phải quà tặng."
                                                      },
                                                      {
                                                          "option":  "ラジカセを使っていつも勉強をしていたから",
                                                          "meaning":  "Vì luôn sử dụng đài cassette để học tập.",
                                                          "analysis":  "Sai: Tác giả dùng để nghe nhạc lúc học chứ không phải bản thân chiếc đài là công cụ học tập duy nhất."
                                                      },
                                                      {
                                                          "option":  "大好きな歌手の歌をいつも聞いていたから",
                                                          "meaning":  "Vì tác giả luôn dùng nó để nghe các bài hát của ca sĩ mình yêu thích.",
                                                          "analysis":  "ĐÚNG: Khớp hoàn toàn với câu liền trước: \u0027そのラジカセで、勉強するときも寝るときも、毎日大好きな歌手の歌を聞いていた。ラジカセは、いつもわたしのそばにあった\u0027."
                                                      },
                                                      {
                                                          "option":  "入学祝いにもらった物で、高価だったから",
                                                          "meaning":  "Vì là món quà mừng nhập học đắt tiền được tặng.",
                                                          "analysis":  "Sai: Món quà mừng nhập học là máy nghe đĩa CD (CDプレーヤー), không phải chiếc đài cassette này."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「そのラジカセで、勉強するときも寝るときも、毎日大好きな歌手の歌を聞いていた。ラジカセは、①いつもわたしのそばにあった。」",
                              "explanation":  "Đáp án 3 đúng. Tác giả nghe bài hát của ca sĩ yêu thích cả khi học lẫn khi đi ngủ mỗi ngày nên chiếc đài cassette lúc nào cũng gắn bó bên cạnh tác giả."
                          },
                          {
                              "id":  2,
                              "question":  "問2：母が、②「必要のない買い物だった」と言っているのは、どうしてか。",
                              "options":  [
                                              "まったく利用しなかったから",
                                              "短い間しか使わなかったから",
                                              "母には必要がない物だったから",
                                              "勉強には関係ない物だったから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "まったく利用しなかったから",
                                                          "meaning":  "Vì hoàn toàn không sử dụng chút nào.",
                                                          "analysis":  "Sai: Tác giả từng sử dụng nó mỗi ngày suốt những năm cấp 2."
                                                      },
                                                      {
                                                          "option":  "短い間しか使わなかったから",
                                                          "meaning":  "Vì chỉ sử dụng trong một khoảng thời gian ngắn.",
                                                          "analysis":  "ĐÚNG: Mua năm lớp 8 nhưng đến khi lên cấp 3 được tặng máy CD là không dùng nữa (\u0027使わなくなってしまった\u0027), sau đó để không hơn 10 năm. Mẹ bảo \u0027ráng đợi thêm chút nữa thì đã được tặng máy CD\u0027 ý chỉ mua đài chỉ dùng được một thời gian ngắn đã bỏ xó."
                                                      },
                                                      {
                                                          "option":  "母には必要がない物だったから",
                                                          "meaning":  "Vì đối với người mẹ thì đó là đồ không cần thiết.",
                                                          "analysis":  "Sai: Mẹ nhận xét trên góc độ sử dụng của người con."
                                                      },
                                                      {
                                                          "option":  "勉強には関係ない物だったから",
                                                          "meaning":  "Vì đó là món đồ không liên quan tới việc học.",
                                                          "analysis":  "Sai: Mẹ không hề phàn nàn về việc liên quan đến học tập."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「高校の入学祝いにCDプレーヤーをもらうと、ラジカセは使わなくなってしまった。そのラジカセは、だれにも使われないまま、10年以上わたしの部屋にあった。ラジカセを見ると、いつも母は、「これは必要のない買い物だったね。もうちょっと待っていたら、CDプレーヤーをもらえたんだから。」と言って笑っていた。」",
                              "explanation":  "Đáp án 2 đúng. Chiếc đài chỉ được dùng trong thời gian ngắn từ lớp 8 đến khi vào cấp 3, sau đó bị bỏ xó suốt 10 năm vì có máy CD thay thế, nên mẹ mới cười bảo đó là món đồ mua lãng phí không cần thiết."
                          },
                          {
                              "id":  3,
                              "question":  "問3：「わたし」は、今、ラジカセを買ったことをどう考えているか。",
                              "options":  [
                                              "本当に欲しくて買ったのだから、満足だ。",
                                              "勉強に必要だったから、いい買い物だった。",
                                              "CDプレーヤーを買ったほうがよかった。",
                                              "本当に欲しい物を買ったほうがよかった。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "本当に欲しくて買ったのだから、満足だ。",
                                                          "meaning":  "Vì đã mua được món đồ thực sự khao khát vào thời điểm đó nên rất hài lòng.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với câu kết: \u0027自分がそのときに本当に欲しい物を買ったのだから、いい買い物をしたと、今でも思っている\u0027 (Bởi vì đã mua được món đồ mình thực sự muốn có lúc ấy nên đến giờ vẫn thấy đó là mua sắm đúng đắn)."
                                                      },
                                                      {
                                                          "option":  "勉強に必要だったから、いい買い物だった。",
                                                          "meaning":  "Vì cần thiết cho việc học nên là món mua sắm tốt.",
                                                          "analysis":  "Sai: Tác giả mua vì đam mê ca hát và khao khát sở hữu, không phải vì cần cho việc học."
                                                      },
                                                      {
                                                          "option":  "CDプレーヤーを買ったほうがよかった。",
                                                          "meaning":  "Đáng lẽ nên mua máy nghe đĩa CD thì hơn.",
                                                          "analysis":  "Sai: Máy CD là quà được tặng sau đó, tác giả không hối hận vì đã mua cassette."
                                                      },
                                                      {
                                                          "option":  "本当に欲しい物を買ったほうがよかった。",
                                                          "meaning":  "Đáng lẽ nên mua món đồ thực sự muốn có thì hơn.",
                                                          "analysis":  "Sai: Tác giả ĐÃ mua món đồ thực sự muốn có rồi (\u0027本当に欲しい物を買ったのだから\u0027)."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「しかし、わたしはそうは思わない。自分がそのときに本当に欲しい物を買ったのだから、いい買い物をしたと、今でも思っている。」",
                              "explanation":  "Đáp án 1 đúng. Dù thời gian sử dụng không dài nhưng vì đã thỏa mãn ước muốn cháy bỏng vào đúng thời điểm tuổi trẻ nên tác giả vẫn luôn cảm thấy mãn nguyện và coi đó là một quyết định mua sắm tuyệt vời."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-trungvan-02",
        "level":  "N3",
        "category":  "trungvan",
        "categoryName":  "Trung văn (Đoạn văn vừa)",
        "lessonNumber":  2,
        "title":  "空き家を活用する町 (Thị trấn tận dụng nhà bỏ hoang)",
        "timeLimit":  360,
        "passage":  "\u003cp\u003e\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e住\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eむ\u003cruby\u003e町\u003crt\u003eまち\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e囲\u003crt\u003eかこ\u003c/rt\u003e\u003c/ruby\u003eまれた\u003cruby\u003e美\u003crt\u003eうつく\u003c/rt\u003e\u003c/ruby\u003eしいところですが、\u003cruby\u003e最近\u003crt\u003eさいきん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e人口\u003crt\u003eじんこう\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e減少\u003crt\u003eげんしょう\u003c/rt\u003e\u003c/ruby\u003eしてきて、だれも\u003cruby\u003e住\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eんでいない\u003cruby\u003e空\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eき\u003cruby\u003e家\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e増\u003crt\u003eふ\u003c/rt\u003e\u003c/ruby\u003eえています。\u003cruby\u003e東京\u003crt\u003eとうきょう\u003c/rt\u003e\u003c/ruby\u003eなどの\u003cruby\u003e大都会\u003crt\u003eだいとかい\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e出\u003crt\u003eで\u003c/rt\u003e\u003c/ruby\u003eていく\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eくなったからです。でも、\u003cruby\u003e空\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eき\u003cruby\u003e家\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e中\u003crt\u003eなか\u003c/rt\u003e\u003c/ruby\u003eには、まだ\u003cruby\u003e十分\u003crt\u003eじゅうぶん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e住\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eめる\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eくあります。\u003c/p\u003e\u003cp\u003eそこで、\u003cruby\u003e町\u003crt\u003eまち\u003c/rt\u003e\u003c/ruby\u003eでは、このような\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003eをホームページで\u003cruby\u003e全国\u003crt\u003eぜんこく\u003c/rt\u003e\u003c/ruby\u003eに①\u003cu\u003e\u003cruby\u003e紹介\u003crt\u003eしょうかい\u003c/rt\u003e\u003c/ruby\u003eしはじめました\u003c/u\u003e。だれかが\u003cruby\u003e住\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eんでくれたら、\u003cruby\u003e空\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eき\u003cruby\u003e家\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e減\u003crt\u003eへ\u003c/rt\u003e\u003c/ruby\u003eって\u003cruby\u003e人口\u003crt\u003eじんこう\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e増\u003crt\u003eふ\u003c/rt\u003e\u003c/ruby\u003eやせ、\u003cruby\u003e町\u003crt\u003eまち\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e元気\u003crt\u003eげんき\u003c/rt\u003e\u003c/ruby\u003eになると\u003cruby\u003e考\u003crt\u003eかんが\u003c/rt\u003e\u003c/ruby\u003eえたのです。\u003cruby\u003e空\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eき\u003cruby\u003e家\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e持\u003crt\u003eも\u003c/rt\u003e\u003c/ruby\u003eっている\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eったり\u003cruby\u003e貸\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eしたりしたいときには、\u003cruby\u003e相談\u003crt\u003eそうだん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e受\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eけ、\u003cruby\u003e新\u003crt\u003eあたら\u003c/rt\u003e\u003c/ruby\u003eしく\u003cruby\u003e住\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eもうとする\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e直\u003crt\u003eなお\u003c/rt\u003e\u003c/ruby\u003eしたいと\u003cruby\u003e考\u003crt\u003eかんが\u003c/rt\u003e\u003c/ruby\u003eえたときには、\u003cruby\u003e町\u003crt\u003eまち\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e少\u003crt\u003eすこ\u003c/rt\u003e\u003c/ruby\u003eしお\u003cruby\u003e金\u003crt\u003eかね\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e出\u003crt\u003eだ\u003c/rt\u003e\u003c/ruby\u003eすそうです。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e紹介\u003crt\u003eしょうかい\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eまってまだ\u003cruby\u003e半年\u003crt\u003eはんとし\u003c/rt\u003e\u003c/ruby\u003eですが、\u003cruby\u003e三家族\u003crt\u003eさんかぞく\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e東京\u003crt\u003eとうきょう\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e移\u003crt\u003eうつ\u003c/rt\u003e\u003c/ruby\u003eってきました。\u003cruby\u003e引\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eっ\u003cruby\u003e越\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eしてきた\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eたちは、\u003cruby\u003e畑\u003crt\u003eはたけ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e借\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eりて\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e作\u003crt\u003eづく\u003c/rt\u003e\u003c/ruby\u003eりを\u003cruby\u003e楽\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eしんだり、\u003cruby\u003e子供\u003crt\u003eこども\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e中\u003crt\u003eなか\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e遊\u003crt\u003eあそ\u003c/rt\u003e\u003c/ruby\u003eばせたりできるので、\u003cruby\u003e来\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eてよかったと\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eっているそうです。\u003cruby\u003e希望者\u003crt\u003eきぼうしゃ\u003c/rt\u003e\u003c/ruby\u003eは、ほかにもいると\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eきました。これからも\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e町\u003crt\u003eまち\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e良\u003crt\u003eよ\u003c/rt\u003e\u003c/ruby\u003eさを\u003cruby\u003e知\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eって、ここに\u003cruby\u003e移\u003crt\u003eうつ\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e住\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eむ\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e増\u003crt\u003eふ\u003c/rt\u003e\u003c/ruby\u003eえてくれるとうれしいです。\u003c/p\u003e",
        "fullTranslation":  "Thị trấn nơi tôi sinh sống là một vùng đất tươi đẹp được bao bọc bởi thiên nhiên, nhưng gần đây dân số đang giảm dần và số lượng nhà bỏ hoang không có người ở ngày càng tăng lên. Nguyên nhân là do nhiều người chuyển lên các đại đô thị như Tokyo sinh sống. Tuy nhiên, trong số những ngôi nhà bỏ hoang đó, vẫn còn rất nhiều căn nhà hoàn toàn có thể ở tốt được.\n\nVì vậy, chính quyền thị trấn đã bắt đầu (1) giới thiệu những ngôi nhà như thế này trên trang web ra khắp cả nước. Họ nghĩ rằng nếu có ai đó đến sinh sống thì nhà bỏ hoang sẽ giảm bớt, dân số cũng tăng lên và thị trấn sẽ trở nên tràn đầy sức sống. Khi chủ sở hữu nhà bỏ hoang muốn bán hoặc cho thuê, thị trấn sẽ tiếp nhận tư vấn; và khi những người mới chuyển đến muốn sửa chữa lại nhà, thị trấn sẽ hỗ trợ một phần kinh phí.\n\nChương trình giới thiệu mới bắt đầu được nửa năm nhưng đã có 3 gia đình chuyển từ Tokyo về đây. Những người chuyển đến đều chia sẻ rằng họ rất vui vì đã đến đây, bởi họ có thể thuê ruộng để trồng rau và cho con cái vui chơi thỏa thích giữa thiên nhiên trong lành. Tôi nghe nói vẫn còn nhiều người khác đang có nguyện vọng chuyển đến. Tôi rất hy vọng trong tương lai sẽ có thêm nhiều người nhận ra nét đẹp của thị trấn này và chuyển về đây sinh sống.",
        "vocabulary":  [
                           {
                               "word":  "空き家",
                               "hiragana":  "あきや",
                               "meaning":  "Nhà bỏ hoang / Nhà không có người ở"
                           },
                           {
                               "word":  "減少",
                               "hiragana":  "げんしょう",
                               "meaning":  "Giảm sút / Suy giảm"
                           },
                           {
                               "word":  "元気にする",
                               "hiragana":  "げんきにする",
                               "meaning":  "Làm cho sôi động, tràn đầy sức sống"
                           },
                           {
                               "word":  "畑",
                               "hiragana":  "はたけ",
                               "meaning":  "Ruộng / Vườn trồng rau"
                           },
                           {
                               "word":  "移り住む",
                               "hiragana":  "うつりすむ",
                               "meaning":  "Chuyển đến định cư sinh sống"
                           },
                           {
                               "word":  "希望者",
                               "hiragana":  "きぼうしゃ",
                               "meaning":  "Người có nguyện vọng"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜によって / 〜からだ",
                                 "meaning":  "Là bởi vì... (giải thích nguyên nhân)"
                             },
                             {
                                 "pattern":  "〜ようとする",
                                 "meaning":  "Đang định / Có ý định làm gì..."
                             },
                             {
                                 "pattern":  "〜てくれるとうれしい",
                                 "meaning":  "Nếu... làm được việc đó cho thì rất vui"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「紹介しはじめました」とあるが、それはどうしてか。",
                              "options":  [
                                              "自然の中で生活したい人に頼まれたから",
                                              "空き家を持っている人に頼まれたから",
                                              "町の美しさを人々に知ってもらいたいから",
                                              "空き家を減らして町の人口を増やしたいから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "自然の中で生活したい人に頼まれたから",
                                                          "meaning":  "Vì được những người muốn sống giữa thiên nhiên nhờ vả.",
                                                          "analysis":  "Sai: Đây là sáng kiến chủ động của chính quyền thị trấn, không phải do ai nhờ."
                                                      },
                                                      {
                                                          "option":  "空き家を持っている人に頼まれたから",
                                                          "meaning":  "Vì được các chủ nhà bỏ hoang nhờ giúp đỡ.",
                                                          "analysis":  "Sai: Thị trấn chủ động lập trang web để hồi sinh địa phương."
                                                      },
                                                      {
                                                          "option":  "町の美しさを人々に知ってもらいたいから",
                                                          "meaning":  "Vì muốn mọi người biết đến vẻ đẹp của thị trấn.",
                                                          "analysis":  "Sai: Giới thiệu vẻ đẹp chỉ là phương tiện, mục đích cốt lõi là tăng dân số."
                                                      },
                                                      {
                                                          "option":  "空き家を減らして町の人口を増やしたいから",
                                                          "meaning":  "Vì muốn giảm bớt số nhà bỏ hoang và tăng dân số cho thị trấn.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với lý do: \u0027だれかが住んでくれたら、空き家が減って人口も増やせ、町が元気になると考えたのです\u0027."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「だれかが住んでくれたら、空き家が減って人口も増やせ、町が元気になると考えたのです。」",
                              "explanation":  "Đáp án 4 đúng. Thị trấn lập website giới thiệu các căn nhà trống với mục tiêu thu hút người dân đến ở, qua đó vừa giải quyết tình trạng nhà bỏ hoang vừa gia tăng quy mô dân số giúp thị trấn hồi sinh."
                          },
                          {
                              "id":  2,
                              "question":  "問2：町は、空き家の紹介以外に、例えばどんなことをしているか。",
                              "options":  [
                                              "紹介する前に、空き家をきれいに直しておくこと",
                                              "空き家を買って、安く貸したり売ったりすること",
                                              "家賃を安くするように、空き家を貸す人に頼むこと",
                                              "空き家を借りる人に、家を修理するお金を少し出すこと"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "紹介する前に、空き家をきれいに直しておくこと",
                                                          "meaning":  "Sửa sang sạch đẹp nhà hoang trước khi giới thiệu.",
                                                          "analysis":  "Sai: Thị trấn không tự sửa trước."
                                                      },
                                                      {
                                                          "option":  "空き家を買って、安く貸したり売ったりすること",
                                                          "meaning":  "Mua lại nhà hoang rồi bán hoặc cho thuê giá rẻ.",
                                                          "analysis":  "Sai: Thị trấn chỉ làm cầu nối tư vấn, không bỏ tiền mua gom nhà."
                                                      },
                                                      {
                                                          "option":  "家賃を安くするように、空き家を貸す人に頼むこと",
                                                          "meaning":  "Yêu cầu chủ nhà giảm giá tiền thuê.",
                                                          "analysis":  "Sai: Không có thông tin này."
                                                      },
                                                      {
                                                          "option":  "空き家を借りる人に、家を修理するお金を少し出すこと",
                                                          "meaning":  "Hỗ trợ một phần tiền sửa nhà cho người chuyển đến ở/thuê nhà.",
                                                          "analysis":  "ĐÚNG: Khớp với chính sách: \u0027新しく住もうとする人が家を直したいと考えたときには、町が少しお金を出すそうです\u0027."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「空き家を持っている人が家を売ったり貸したりしたいときには、相談を受け、新しく住もうとする人が家を直したいと考えたときには、町が少しお金を出すそうです。」",
                              "explanation":  "Đáp án 4 đúng. Ngoài việc đăng tin quảng bá, thị trấn còn tiếp nhận tư vấn cho chủ nhà và trợ cấp một phần kinh phí sửa chữa cho những cư dân mới muốn tu bổ lại căn nhà."
                          },
                          {
                              "id":  3,
                              "question":  "問3：空き家の紹介の結果を知って、「私」はどう思っているか。",
                              "options":  [
                                              "この方法は良いようだが、この町に人が増える方法はほかにもありそうだ。",
                                              "この方法はうまくいっているようだし、今後もこの町に人が増え続ければいい。",
                                              "半年で三家族しか引っ越してきていないので、この町の良さはなかなか伝わらない。",
                                              "自然を楽しむ人が増えたので、今後はこの町の良さが全国に知られていくだろう。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "この方法は良いようだが、この町に人が増える方法はほかにもありそうだ。",
                                                          "meaning":  "Cách này có vẻ tốt nhưng chắc có thêm nhiều cách khác để tăng dân số.",
                                                          "analysis":  "Sai: Tác giả không hề tìm kiếm phương án khác mà hoàn toàn ủng hộ dự án này."
                                                      },
                                                      {
                                                          "option":  "この方法はうまくいっているようだし、今後もこの町に人が増え続ければいい。",
                                                          "meaning":  "Cách này đang tiến triển rất thuận lợi và mong rằng sau này lượng người chuyển đến sẽ tiếp tục tăng.",
                                                          "analysis":  "ĐÚNG: Dự án mới 6 tháng đã có 3 gia đình đến ở rất vui vẻ (\u0027来てよかったと言っている\u0027), nhiều người khác đang đăng ký (\u0027希望者は、ほかにもいる\u0027), và tác giả kỳ vọng: \u0027これからも私の町の良さを知って、ここに移り住む人が増えてくれるとうれしい\u0027."
                                                      },
                                                      {
                                                          "option":  "半年で三家族しか引っ越してきていないので、この町の良さはなかなか伝わらない。",
                                                          "meaning":  "Nửa năm mà mới có 3 gia đình chuyển đến nên nét đẹp của thị trấn mãi không truyền tải được.",
                                                          "analysis":  "Sai: \u0027mới nửa năm mà đã có 3 hộ\u0027 là tín hiệu rất tích cực, không mang nghĩa chê ít."
                                                      },
                                                      {
                                                          "option":  "自然を楽しむ人が増えたので、今後はこの町の良さが全国に知られていくだろう。",
                                                          "meaning":  "Vì người yêu thiên nhiên tăng lên nên nét đẹp sẽ được cả nước biết đến.",
                                                          "analysis":  "Sai trọng tâm: Mục tiêu tác giả vui mừng là người chuyển đến định cư (移り住む人) gia tăng."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「紹介が始まってまだ半年ですが、三家族が東京から移ってきました。...来てよかったと言っているそうです。希望者は、ほかにもいると聞きました。これからも私の町の良さを知って、ここに移り住む人が増えてくれるとうれしいです。」",
                              "explanation":  "Đáp án 2 đúng. Tác giả nhận thấy dự án quảng bá nhà trống đang đem lại kết quả ban đầu rất khả quan khi người chuyển đến đều hài lòng và nhiều người khác đang quan tâm, đồng thời bày tỏ mong muốn dân cư sẽ tiếp tục gia tăng trong tương lai."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-trungvan-03",
        "level":  "N3",
        "category":  "trungvan",
        "categoryName":  "Trung văn (Đoạn văn vừa)",
        "lessonNumber":  3,
        "title":  "パソコン用めがね (Kính dùng cho máy tính)",
        "timeLimit":  360,
        "passage":  "\u003cp\u003e\u003cruby\u003e昨日\u003crt\u003eきのう\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e会社\u003crt\u003eかいしゃ\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e前田\u003crt\u003eまえだ\u003c/rt\u003e\u003c/ruby\u003eさんがめがねをかけているのを\u003cruby\u003e初\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめて\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eました。「あれ、\u003cruby\u003e目\u003crt\u003eめ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e悪\u003crt\u003eわる\u003c/rt\u003e\u003c/ruby\u003eかったんですか。」と\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eくと、「いや、パソコン\u003cruby\u003e用\u003crt\u003eよう\u003c/rt\u003e\u003c/ruby\u003eめがねだよ。」というのです。「\u003cruby\u003e何\u003crt\u003eなん\u003c/rt\u003e\u003c/ruby\u003eですか、それ。」と\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eうと、「えっ、\u003cruby\u003e知\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eらないの。」と①\u003cu\u003e\u003cruby\u003e驚\u003crt\u003eおどろ\u003c/rt\u003e\u003c/ruby\u003eかれてしまいました\u003c/u\u003e。このめがねは、パソコンから\u003cruby\u003e出\u003crt\u003eで\u003c/rt\u003e\u003c/ruby\u003eている\u003cruby\u003e青\u003crt\u003eあお\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e光\u003crt\u003eひかり\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e目\u003crt\u003eめ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e守\u003crt\u003eまも\u003c/rt\u003e\u003c/ruby\u003eってくれて、パソコンが\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eやすくなるのだそうです。\u003cruby\u003e前田\u003crt\u003eまえだ\u003c/rt\u003e\u003c/ruby\u003eさんは、\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじ\u003cruby\u003e課\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e今川\u003crt\u003eいまがわ\u003c/rt\u003e\u003c/ruby\u003eさんも\u003cruby\u003e持\u003crt\u003eも\u003c/rt\u003e\u003c/ruby\u003eっていると\u003cruby\u003e教\u003crt\u003eおし\u003c/rt\u003e\u003c/ruby\u003eえてくれました。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e昼休\u003crt\u003eひるやす\u003c/rt\u003e\u003c/ruby\u003eみに\u003cruby\u003e今川\u003crt\u003eいまがわ\u003c/rt\u003e\u003c/ruby\u003eさんのパソコン\u003cruby\u003e用\u003crt\u003eよう\u003c/rt\u003e\u003c/ruby\u003eめがねをかけさせてもらいました。\u003cruby\u003e今川\u003crt\u003eいまがわ\u003c/rt\u003e\u003c/ruby\u003eさんのはレンズに\u003cruby\u003e色\u003crt\u003eいろ\u003c/rt\u003e\u003c/ruby\u003eがついていましたが、かけてみると、パソコンがとても\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eやすく\u003cruby\u003e感\u003crt\u003eかん\u003c/rt\u003e\u003c/ruby\u003eじました。これは、\u003cruby\u003e普通\u003crt\u003eふつう\u003c/rt\u003e\u003c/ruby\u003eのサングラスとしても\u003cruby\u003e使\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eえるのだそうです。\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eはまぶしい\u003cruby\u003e光\u003crt\u003eひかり\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e苦手\u003crt\u003eにがて\u003c/rt\u003e\u003c/ruby\u003eなので、\u003cruby\u003e外出\u003crt\u003eがいしゅつ\u003c/rt\u003e\u003c/ruby\u003eするときにはいつもサングラスを\u003cruby\u003e持\u003crt\u003eも\u003c/rt\u003e\u003c/ruby\u003eち\u003cruby\u003e歩\u003crt\u003eある\u003c/rt\u003e\u003c/ruby\u003eいています。こんな\u003cruby\u003e便利\u003crt\u003eべんり\u003c/rt\u003e\u003c/ruby\u003eなものなら、ぜひ\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eもこれと\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじものを\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eいたいと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eいました。\u003cruby\u003e今川\u003crt\u003eいまがわ\u003c/rt\u003e\u003c/ruby\u003eさんがお\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e場所\u003crt\u003eばしょ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e教\u003crt\u003eおし\u003c/rt\u003e\u003c/ruby\u003eえてくれたので、\u003cruby\u003e今度\u003crt\u003eこんど\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e日曜日\u003crt\u003eにちようび\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eいに\u003cruby\u003e行\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eくつもりです。\u003c/p\u003e",
        "fullTranslation":  "Hôm qua ở công ty, lần đầu tiên tôi nhìn thấy anh Maeda đeo kính. Khi tôi hỏi: \u0027Ủa, mắt anh bị kém đi ạ?\u0027, thì anh ấy trả lời: \u0027Không, đây là kính chuyên dùng cho máy tính đấy\u0027. Tôi hỏi tiếp: \u0027Kính đó là gì thế ạ?\u0027, thì anh ấy ngạc nhiên thốt lên: \u0027Hả, cậu không biết sao?\u0027. Nghe nói loại kính này giúp bảo vệ mắt khỏi ánh sáng xanh phát ra từ màn hình máy tính, giúp nhìn màn hình dễ chịu hơn nhiều. Anh Maeda còn cho tôi biết chị Imagawa cùng phòng ban với tôi cũng có một chiếc.\n\nVào giờ nghỉ trưa, tôi đã mượn chị Imagawa đeo thử chiếc kính máy tính của chị ấy. Tròng kính của chị Imagawa có phủ một lớp màu, khi đeo vào tôi thấy màn hình máy tính hiển thị rất dễ nhìn. Nghe nói chiếc kính này còn có thể dùng như một chiếc kính râm thông thường. Vì tôi vốn rất sợ ánh sáng chói nên lúc nào ra ngoài cũng mang theo kính râm. Nếu có món đồ tiện lợi đến thế này thì nhất định tôi cũng muốn mua một chiếc y hệt như vậy. Chị Imagawa đã chỉ cho tôi địa chỉ cửa hàng, nên Chủ nhật tới tôi dự định sẽ đi mua.",
        "vocabulary":  [
                           {
                               "word":  "パソコン用めがね",
                               "hiragana":  "ぱそこんようめがね",
                               "meaning":  "Kính dùng cho máy tính (chống ánh sáng xanh)"
                           },
                           {
                               "word":  "青い光",
                               "hiragana":  "あおいひかり",
                               "meaning":  "Ánh sáng xanh (Blue light)"
                           },
                           {
                               "word":  "レンズ",
                               "hiragana":  "れんず",
                               "meaning":  "Tròng kính / Mắt kính"
                           },
                           {
                               "word":  "サングラス",
                               "hiragana":  "さんぐらす",
                               "meaning":  "Kính râm / Kính mát"
                           },
                           {
                               "word":  "まぶしい",
                               "hiragana":  "まぶしい",
                               "meaning":  "Chói chang / Chói mắt"
                           },
                           {
                               "word":  "持ち歩く",
                               "hiragana":  "もちあるく",
                               "meaning":  "Mang theo bên mình khi đi lại"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜用 (〜よう)",
                                 "meaning":  "Dành cho / Chuyên dụng cho..."
                             },
                             {
                                 "pattern":  "〜てくれる / 〜て守ってくれる",
                                 "meaning":  "Làm gì đó mang lại lợi ích cho ai"
                             },
                             {
                                 "pattern":  "〜としても使える",
                                 "meaning":  "Có thể sử dụng với vai trò / tư cách như là..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：驚かれてしまいましたとあるが、どうしてか。",
                              "options":  [
                                              "「私」がパソコン用めがねをかけて仕事をしていたから",
                                              "前田さんのパソコン用めがねを見て、目が悪かったのかと「私」が聞いたから",
                                              "「私」がパソコン用めがねについて知らなかったから",
                                              "今川さんもパソコン用めがねを持っていることを「私」が知らなかったから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "「私」がパソコン用めがねをかけて仕事をしていたから",
                                                          "meaning":  "Vì tác giả đeo kính máy tính khi làm việc.",
                                                          "analysis":  "Sai: Người đeo kính là Maeda, tác giả chưa có kính."
                                                      },
                                                      {
                                                          "option":  "前田さんのパソコン用めがねを見て、目が悪かったのかと「私」が聞いたから",
                                                          "meaning":  "Vì tác giả nhìn thấy kính Maeda và hỏi có phải mắt kém không.",
                                                          "analysis":  "Sai: Khi nghe hỏi mắt kém thì Maeda chỉ giải thích, chỉ khi tác giả hỏi \u0027Cái đó là cái gì?\u0027 thì Maeda mới ngạc nhiên."
                                                      },
                                                      {
                                                          "option":  "「私」がパソコン用めがねについて知らなかったから",
                                                          "meaning":  "Vì tác giả hoàn toàn không biết về loại kính chuyên dụng cho máy tính.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với đoạn hội thoại: \u0027「何ですか、それ。」と言うと、「えっ、知らないの。」と驚かれてしまいました\u0027."
                                                      },
                                                      {
                                                          "option":  "今川さんもパソコン用めがねを持っていることを「私」が知らなかったから",
                                                          "meaning":  "Vì tác giả không biết chị Imagawa cũng có kính này.",
                                                          "analysis":  "Sai: Chi tiết Imagawa được Maeda kể sau đó."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「「何ですか、それ。」と言うと、「えっ、知らないの。」と驚かれてしまいました。」",
                              "explanation":  "Đáp án 3 đúng. Anh Maeda ngạc nhiên vì loại kính chống ánh sáng xanh này rất phổ biến nhưng tác giả lại không hề hay biết gì về nó."
                          },
                          {
                              "id":  2,
                              "question":  "問2：この文章によると、前田さんと今川さんのパソコン用めがねの違いは何か。",
                              "options":  [
                                              "青い光から目を守ってくれるかどうか",
                                              "パソコンが見やすくなるかどうか",
                                              "レンズに色がついているかどうか",
                                              "目が悪い人のためのめがねかどうか"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "青い光から目を守ってくれるかどうか",
                                                          "meaning":  "Có bảo vệ mắt khỏi ánh sáng xanh hay không.",
                                                          "analysis":  "Sai: Cả hai loại kính máy tính đều có công dụng chống ánh sáng xanh."
                                                      },
                                                      {
                                                          "option":  "パソコンが見やすくなるかどうか",
                                                          "meaning":  "Có giúp nhìn máy tính dễ hơn hay không.",
                                                          "analysis":  "Sai: Cả hai đều giúp nhìn màn hình rõ và đỡ mỏi."
                                                      },
                                                      {
                                                          "option":  "レンズに色がついているかどうか",
                                                          "meaning":  "Tròng kính có màu hay không.",
                                                          "analysis":  "ĐÚNG: Kính của Imagawa có tròng phủ màu (\u0027今川さんのはレンズに色がついていましたが\u0027) và dùng được như kính râm, còn kính thông thường của Maeda là loại không màu."
                                                      },
                                                      {
                                                          "option":  "目が悪い人のためのめがねかどうか",
                                                          "meaning":  "Có phải kính dành cho người mắt kém hay không.",
                                                          "analysis":  "Sai: Cả hai đều không phải kính thuốc có độ cận/viễn."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「今川さんのはレンズに色がついていましたが、かけてみると、パソコンがとても見やすく感じました。これは、普通のサングラスとしても使えるのだそうです。」",
                              "explanation":  "Đáp án 3 đúng. Kính của chị Imagawa khác ở chỗ tròng kính có màu (lens có màu) nên vừa chống ánh sáng xanh màn hình vừa kiêm luôn chức năng kính râm che nắng."
                          },
                          {
                              "id":  3,
                              "question":  "問3：「私」は今度の日曜日に何を買いに行くつもりか。",
                              "options":  [
                                              "外出用に作られた、あまり色がついていないサングラス",
                                              "外出用に作られた、色がついた普通のサングラス",
                                              "外出したときにも使える、色がついていないパソコン用めがね",
                                              "外出したときにも使える、色がついたパソコン用めがね"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "外出用に作られた、あまり色がついていないサングラス",
                                                          "meaning":  "Kính râm ít màu dùng khi ra ngoài.",
                                                          "analysis":  "Sai loại kính."
                                                      },
                                                      {
                                                          "option":  "外出用に作られた、色がついた普通のサングラス",
                                                          "meaning":  "Kính râm thông thường có màu chuyên dùng khi ra ngoài.",
                                                          "analysis":  "Sai: Tác giả vốn đã có kính râm, nay muốn mua kính máy tính kiêm kính râm."
                                                      },
                                                      {
                                                          "option":  "外出したときにも使える、色がついていないパソコン用めがね",
                                                          "meaning":  "Kính máy tính không màu dùng được khi ra ngoài.",
                                                          "analysis":  "Sai: Kính không màu thì không che được ánh nắng chói khi đi ngoài đường."
                                                      },
                                                      {
                                                          "option":  "外出したときにも使える、色がついたパソコン用めがね",
                                                          "meaning":  "Kính máy tính có màu, có thể sử dụng cả khi ra ngoài đường.",
                                                          "analysis":  "ĐÚNG: Tác giả muốn mua chiếc kính y hệt của chị Imagawa (\u0027これと同じものを買いたい\u0027) - tức là kính máy tính có tròng màu vừa làm việc vừa che nắng ngoài trời."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「今川さんのはレンズに色がついていました... 普通のサングラスとしても使えるのだそうです。私はまぶしい光が苦手なので、外出するときにはいつもサングラスを持ち歩いています。こんな便利なものなら、ぜひ私もこれと同じものを買いたいと思いました。」",
                              "explanation":  "Đáp án 4 đúng. Vì sợ ánh sáng chói khi ra ngoài và muốn làm việc thoải mái với máy tính, tác giả quyết định mua loại kính máy tính tròng có màu giống chị Imagawa để tích hợp cả 2 công dụng tiện lợi."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-trungvan-04",
        "level":  "N3",
        "category":  "trungvan",
        "categoryName":  "Trung văn (Đoạn văn vừa)",
        "lessonNumber":  4,
        "title":  "文鳥の言語実験 (Thí nghiệm phân biệt ngôn ngữ của loài chim)",
        "timeLimit":  360,
        "passage":  "\u003cp\u003e\u003cruby\u003e人間\u003crt\u003eにんげん\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e二\u003crt\u003eふた\u003c/rt\u003e\u003c/ruby\u003eつの\u003cruby\u003e知\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eらない\u003cruby\u003e言語\u003crt\u003eげんご\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eいたとき、その\u003cruby\u003e内容\u003crt\u003eないよう\u003c/rt\u003e\u003c/ruby\u003eはわからなくても、\u003cruby\u003e違\u003crt\u003eちが\u003c/rt\u003e\u003c/ruby\u003eう\u003cruby\u003e言語\u003crt\u003eげんご\u003c/rt\u003e\u003c/ruby\u003eだということはわかる。\u003cruby\u003e猿\u003crt\u003eさる\u003c/rt\u003e\u003c/ruby\u003eにも\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじ\u003cruby\u003e力\u003crt\u003eちから\u003c/rt\u003e\u003c/ruby\u003eがあるという\u003cruby\u003e報告\u003crt\u003eほうこく\u003c/rt\u003e\u003c/ruby\u003eがある。では、\u003cruby\u003e鳥類\u003crt\u003eちょうるい\u003c/rt\u003e\u003c/ruby\u003eはどうだろうか。\u003c/p\u003e\u003cp\u003eこのことを\u003cruby\u003e文鳥\u003crt\u003eぶんちょう\u003c/rt\u003e\u003c/ruby\u003eという\u003cruby\u003e鳥\u003crt\u003eとり\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e調\u003crt\u003eしら\u003c/rt\u003e\u003c/ruby\u003eべた\u003cruby\u003e実験\u003crt\u003eじっけん\u003c/rt\u003e\u003c/ruby\u003eがある。\u003cruby\u003e実験\u003crt\u003eじっけん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめる\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eに、まず、\u003cruby\u003e英語\u003crt\u003eえいご\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e中国語\u003crt\u003eちゅうごくご\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじように\u003cruby\u003e話\u003crt\u003eはな\u003c/rt\u003e\u003c/ruby\u003eせる\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eに、それぞれの\u003cruby\u003e言語\u003crt\u003eげんご\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e翻訳\u003crt\u003eほんやく\u003c/rt\u003e\u003c/ruby\u003eされた、ある\u003cruby\u003e日本\u003crt\u003eにほん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e小説\u003crt\u003eしょうせつ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e読\u003crt\u003eよ\u003c/rt\u003e\u003c/ruby\u003eんでもらって\u003cruby\u003e録音\u003crt\u003eろくおん\u003c/rt\u003e\u003c/ruby\u003eする（\u003cruby\u003e注\u003crt\u003eちゅう\u003c/rt\u003e\u003c/ruby\u003e）。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e次\u003crt\u003eつぎ\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e文鳥\u003crt\u003eぶんちょう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e訓練\u003crt\u003eくんれん\u003c/rt\u003e\u003c/ruby\u003eである。\u003cruby\u003e文鳥\u003crt\u003eぶんちょう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e棒\u003crt\u003eぼう\u003c/rt\u003e\u003c/ruby\u003eが２\u003cruby\u003e本\u003crt\u003eほん\u003c/rt\u003e\u003c/ruby\u003eある\u003cruby\u003e箱\u003crt\u003eはこ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e入\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eれ、１\u003cruby\u003e本\u003crt\u003eほん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e止\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eまらせておく。そして、\u003cruby\u003e録音\u003crt\u003eろくおん\u003c/rt\u003e\u003c/ruby\u003eした\u003cruby\u003e声\u003crt\u003eこえ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eかせる。\u003cruby\u003e英語\u003crt\u003eえいご\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eいてもう１\u003cruby\u003e本\u003crt\u003eほん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e棒\u003crt\u003eぼう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e移\u003crt\u003eうつ\u003c/rt\u003e\u003c/ruby\u003eったら、えさをやる。\u003cruby\u003e中国語\u003crt\u003eちゅうごくご\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eいてもう１\u003cruby\u003e本\u003crt\u003eほん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e棒\u003crt\u003eぼう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e移\u003crt\u003eうつ\u003c/rt\u003e\u003c/ruby\u003eっても、えさはやらない。\u003c/p\u003e\u003cp\u003eこのような\u003cruby\u003e訓練\u003crt\u003eくんれん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e後\u003crt\u003eあと\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e実験\u003crt\u003eじっけん\u003c/rt\u003e\u003c/ruby\u003eをすると、\u003cruby\u003e文鳥\u003crt\u003eぶんちょう\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e約\u003crt\u003eやく\u003c/rt\u003e\u003c/ruby\u003e７５％の\u003cruby\u003e割合\u003crt\u003eわりあい\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e正\u003crt\u003eただ\u003c/rt\u003e\u003c/ruby\u003eしく\u003cruby\u003e動\u003crt\u003eうご\u003c/rt\u003e\u003c/ruby\u003eいた（\u003cruby\u003e実験\u003crt\u003eじっけん\u003c/rt\u003e\u003c/ruby\u003eでは、\u003cruby\u003e英語\u003crt\u003eえいご\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eいて\u003cruby\u003e移\u003crt\u003eうつ\u003c/rt\u003e\u003c/ruby\u003eったとき、または\u003cruby\u003e中国語\u003crt\u003eちゅうごくご\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eいて\u003cruby\u003e移\u003crt\u003eうつ\u003c/rt\u003e\u003c/ruby\u003eらなかったときを\u003cruby\u003e正解\u003crt\u003eせいかい\u003c/rt\u003e\u003c/ruby\u003eにした）。\u003cruby\u003e別\u003crt\u003eべつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e小説\u003crt\u003eしょうせつ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e使\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eった\u003cruby\u003e実験\u003crt\u003eじっけん\u003c/rt\u003e\u003c/ruby\u003eでも、\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじように\u003cruby\u003e区別\u003crt\u003eくべつ\u003c/rt\u003e\u003c/ruby\u003eできたそうだ。\u003cruby\u003e文鳥\u003crt\u003eぶんちょう\u003c/rt\u003e\u003c/ruby\u003eがなぜ\u003cruby\u003e区別\u003crt\u003eくべつ\u003c/rt\u003e\u003c/ruby\u003eできるのかまだわからないが、この\u003cruby\u003e研究\u003crt\u003eけんきゅう\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e人間\u003crt\u003eにんげん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e言語\u003crt\u003eげんご\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e謎\u003crt\u003eなぞ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e解\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eく\u003cruby\u003e鍵\u003crt\u003eかぎ\u003c/rt\u003e\u003c/ruby\u003eになるかもしれないと\u003cruby\u003e考\u003crt\u003eかんが\u003c/rt\u003e\u003c/ruby\u003eえられている。\u003c/p\u003e\u003cp\u003e（\u003cruby\u003e注\u003crt\u003eちゅう\u003c/rt\u003e\u003c/ruby\u003e）\u003cruby\u003e録音\u003crt\u003eろくおん\u003c/rt\u003e\u003c/ruby\u003eする：ＣＤやカセットテープなどに\u003cruby\u003e声\u003crt\u003eこえ\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e音\u003crt\u003eおと\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e記録\u003crt\u003eきろく\u003c/rt\u003e\u003c/ruby\u003eする\u003c/p\u003e",
        "fullTranslation":  "Khi con người nghe hai ngôn ngữ mà mình chưa từng biết, dù không hiểu nội dung nhưng ta vẫn nhận biết được đó là hai ngôn ngữ khác nhau. Đã có báo cáo chỉ ra rằng loài khỉ cũng sở hữu khả năng tương tự. Vậy thì loài chim thì sao?\n\nCó một thí nghiệm đã nghiên cứu điều này trên loài chim sẻ Java (chim Manju - Buncho). Trước khi bắt đầu thí nghiệm, đầu tiên các nhà nghiên cứu nhờ một người có thể nói trôi chảy cả tiếng Anh lẫn tiếng Trung đọc một cuốn tiểu thuyết Nhật Bản đã được dịch sang hai thứ tiếng đó rồi ghi âm lại.\n\nTiếp theo là quá trình huấn luyện chim sẻ Java. Họ nhốt chú chim vào một chiếc lồng có 2 thanh gỗ đậu, cho chim đậu trên 1 thanh. Sau đó, họ phát đoạn ghi âm cho chim nghe. Khi nghe thấy tiếng Anh, nếu chim nhảy sang thanh gỗ còn lại thì sẽ được thưởng thức ăn. Khi nghe thấy tiếng Trung, dù chim có nhảy sang thanh còn lại cũng không được thưởng thức ăn.\n\nSau đợt huấn luyện này, khi tiến hành thí nghiệm thực tế, chim sẻ Java đã phản xạ chính xác với tỷ lệ khoảng 75% (trong thí nghiệm, trường hợp nghe tiếng Anh rồi nhảy sang thanh kia, hoặc nghe tiếng Trung và đứng yên không nhảy đều được tính là đáp án chính xác). Ngay cả khi đổi sang cuốn tiểu thuyết khác, chim sẻ vẫn phân biệt được chính xác tương tự. Dù chưa rõ nguyên nhân vì sao chim sẻ Java có thể phân biệt được hai ngôn ngữ, nhưng nghiên cứu này được kỳ vọng có thể trở thành chìa khóa để giải mã bí ẩn về ngôn ngữ của loài người.",
        "vocabulary":  [
                           {
                               "word":  "鳥類",
                               "hiragana":  "ちょうるい",
                               "meaning":  "Loài chim / Lớp chim"
                           },
                           {
                               "word":  "文鳥",
                               "hiragana":  "ぶんちょう",
                               "meaning":  "Chim sẻ Java (chim Manju)"
                           },
                           {
                               "word":  "止まる",
                               "hiragana":  "とまる",
                               "meaning":  "Đậu lại (trên cành cây, thanh gỗ)"
                           },
                           {
                               "word":  "えさ",
                               "hiragana":  "えさ",
                               "meaning":  "Thức ăn (cho chim, thú nuôi)"
                           },
                           {
                               "word":  "区別",
                               "hiragana":  "くべつ",
                               "meaning":  "Phân biệt"
                           },
                           {
                               "word":  "謎を解く鍵",
                               "hiragana":  "なぞをとくかぎ",
                               "meaning":  "Chìa khóa giải mã bí ẩn"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜ておく",
                                 "meaning":  "Làm sẵn việc gì đó / Để nguyên trạng thái đó"
                             },
                             {
                                 "pattern":  "〜ても〜ない",
                                 "meaning":  "Dù có... thì cũng không..."
                             },
                             {
                                 "pattern":  "〜割合で (わりあいで)",
                                 "meaning":  "Với tỷ lệ là..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：実験で文鳥に聞かせたものは何か。",
                              "options":  [
                                              "ある日本の小説を、一人の人が英語で読んだものと、別の人が中国語で読んだもの",
                                              "ある日本の小説を、一人の人が、英語で読んだものと中国語で読んだもの",
                                              "ある日本の小説を、一人の人が、英語と中国語と日本語を交ぜて読んだもの",
                                              "ある日本の小説を、一人の人が、日本語で読んだものと中国語か英語で読んだもの"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "ある日本の小説を、一人の人が英語で読んだものと、別の人が中国語で読んだもの",
                                                          "meaning":  "Một tiểu thuyết Nhật Bản do một người đọc bằng tiếng Anh và một người khác đọc bằng tiếng Trung.",
                                                          "analysis":  "Sai: Chỉ một người duy nhất biết cả 2 thứ tiếng đọc cả bản tiếng Anh lẫn tiếng Trung (\u0027英語も中国語も同じように話せる人に...読んでもらって\u0027)."
                                                      },
                                                      {
                                                          "option":  "ある日本の小説を、一人の人が、英語で読んだものと中国語で読んだもの",
                                                          "meaning":  "Một cuốn tiểu thuyết Nhật Bản do cùng MỘT NGƯỜI đọc bằng tiếng Anh và tiếng Trung.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với mô tả: một người nói giỏi cả 2 thứ tiếng đọc bản dịch của cùng một tác phẩm."
                                                      },
                                                      {
                                                          "option":  "ある日本の小説を、一人の人が、英語と中国語と日本語を交ぜて読んだもの",
                                                          "meaning":  "Một người đọc trộn lẫn tiếng Anh, tiếng Trung và tiếng Nhật.",
                                                          "analysis":  "Sai: Đọc riêng biệt từng ngôn ngữ đã dịch, không trộn lẫn."
                                                      },
                                                      {
                                                          "option":  "ある日本の小説を、一人の人が、日本語で読んだものと中国語か英語で読んだもの",
                                                          "meaning":  "Một người đọc bằng tiếng Nhật và một trong 2 thứ tiếng Trung/Anh.",
                                                          "analysis":  "Sai: Đọc bằng tiếng Anh và tiếng Trung."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「英語も中国語も同じように話せる人に、それぞれの言語に翻訳された、ある日本の小説を読んでもらって録音する」",
                              "explanation":  "Đáp án 2 đúng. Thí nghiệm sử dụng giọng đọc của cùng MỘT NGƯỜI thành thạo cả hai thứ tiếng đọc bản dịch tiếng Anh và tiếng Trung của một tiểu thuyết Nhật Bản để loại trừ yếu tố khác biệt về chất giọng cá nhân."
                          },
                          {
                              "id":  2,
                              "question":  "問2：実験で、文鳥がえさをもらったのは、例えばどういうときか。",
                              "options":  [
                                              "英語を聞いて、一本の棒からもう一本の棒に移ったとき",
                                              "中国語を聞いて、一本の棒からもう一本の棒に移ったとき",
                                              "英語を聞いても中国語を聞いても、一本の棒からもう一本の棒に移ったとき",
                                              "英語を聞いても中国語を聞いても、一本の棒からもう一本の棒に移らなかったとき"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "英語を聞いて、一本の棒からもう一本の棒に移ったとき",
                                                          "meaning":  "Khi nghe thấy tiếng Anh và nhảy từ thanh gỗ này sang thanh gỗ còn lại.",
                                                          "analysis":  "ĐÚNG: Quy tắc huấn luyện: \u0027英語を聞いてもう1本の棒に移ったら、えさをやる\u0027 (nghe tiếng Anh nhảy sang thanh kia thì cho ăn)."
                                                      },
                                                      {
                                                          "option":  "中国語を聞いて、一本の棒からもう一本の棒に移ったとき",
                                                          "meaning":  "Khi nghe tiếng Trung và nhảy sang thanh gỗ còn lại.",
                                                          "analysis":  "Sai: Nghe tiếng Trung dù nhảy cũng không được cho ăn (\u0027中国語を聞いて...移っても、えさはやらない\u0027)."
                                                      },
                                                      {
                                                          "option":  "英語を聞いても中国語を聞いても、一本の棒からもう一本の棒に移ったとき",
                                                          "meaning":  "Khi nghe bất kể tiếng Anh hay tiếng Trung đều nhảy sang thanh kia.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "英語を聞いても中国語を聞いても、一本の棒からもう一本の棒に移らなかったとき",
                                                          "meaning":  "Khi nghe cả tiếng Anh lẫn tiếng Trung đều không nhảy sang thanh kia.",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「英語を聞いてもう1本の棒に移ったら、えさをやる。中国語を聞いてもう1本の棒に移っても、えさはやらない。」",
                              "explanation":  "Đáp án 1 đúng. Chim sẻ được nhận phần thưởng thức ăn khi nghe đoạn ghi âm tiếng Anh và có phản xạ nhảy sang thanh gỗ còn lại."
                          },
                          {
                              "id":  3,
                              "question":  "問3：実験でわかったことは何か。",
                              "options":  [
                                              "文鳥が人間の言葉の内容がわかる理由",
                                              "文鳥が人間の言葉の通りに動けること",
                                              "文鳥が二つの言語を区別できる理由",
                                              "文鳥が二つの言語を区別できること"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "文鳥が人間の言葉の内容がわかる理由",
                                                          "meaning":  "Lý do chim sẻ hiểu được nội dung ngôn ngữ của con người.",
                                                          "analysis":  "Sai: Chim sẻ không hiểu nội dung ngữ nghĩa."
                                                      },
                                                      {
                                                          "option":  "文鳥が人間の言葉の通りに動けること",
                                                          "meaning":  "Việc chim sẻ có thể cử động theo mệnh lệnh lời nói của con người.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "文鳥が二つの言語を区別できる理由",
                                                          "meaning":  "Lý do vì sao chim sẻ có thể phân biệt được 2 ngôn ngữ.",
                                                          "analysis":  "Sai: Bài đọc nêu rõ lý do vẫn CHƯA ĐƯỢC LÀM RÕ (\u0027文鳥がなぜ区別できるのかまだわからない\u0027)."
                                                      },
                                                      {
                                                          "option":  "文鳥が二つの言語を区別できること",
                                                          "meaning":  "Việc chim sẻ có khả năng phân biệt được 2 ngôn ngữ khác nhau.",
                                                          "analysis":  "ĐÚNG: Kết quả thí nghiệm với 75% độ chính xác và lặp lại trên tiểu thuyết khác chứng minh loài chim này có khả năng phân biệt được 2 ngôn ngữ."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「文鳥は約75%の割合で正しく動いた... 別の小説を使った実験でも、同じように区別できたそうだ。」",
                              "explanation":  "Đáp án 4 đúng. Thí nghiệm đã chứng minh được sự thật rằng chim sẻ Java có khả năng phân biệt hai ngôn ngữ khác nhau (mặc dù cơ chế và lý do vì sao chúng phân biệt được thì khoa học hiện vẫn chưa giải mã xong)."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-trungvan-05",
        "level":  "N3",
        "category":  "trungvan",
        "categoryName":  "Trung văn (Đoạn văn vừa)",
        "lessonNumber":  5,
        "title":  "新しいタイプのピーマン (Giống ớt chuông kiểu mới)",
        "timeLimit":  360,
        "passage":  "\u003cp\u003e\u003cruby\u003e最近\u003crt\u003eさいきん\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e新\u003crt\u003eあたら\u003c/rt\u003e\u003c/ruby\u003eしいタイプのピーマンが\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e並\u003crt\u003eなら\u003c/rt\u003e\u003c/ruby\u003eぶようになりました。このピーマンは、\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003eまでのものとは\u003cruby\u003e形\u003crt\u003eかたち\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e味\u003crt\u003eあじ\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e違\u003crt\u003eちが\u003c/rt\u003e\u003c/ruby\u003eっています。これまでピーマンというと、\u003cruby\u003e苦\u003crt\u003eにが\u003c/rt\u003e\u003c/ruby\u003eさと\u003cruby\u003e強\u003crt\u003eつよ\u003c/rt\u003e\u003c/ruby\u003eいにおいのため、\u003cruby\u003e子\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eどもにとっては、\u003cruby\u003e嫌\u003crt\u003eきら\u003c/rt\u003e\u003c/ruby\u003eいな\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e一\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eつでした。\u003c/p\u003e\u003cp\u003eしかし、この\u003cruby\u003e新\u003crt\u003eあたら\u003c/rt\u003e\u003c/ruby\u003eしいタイプのピーマンは、ほとんど\u003cruby\u003e苦\u003crt\u003eにが\u003c/rt\u003e\u003c/ruby\u003eくなくて、においもあまりしません。\u003cruby\u003e小学生\u003crt\u003eしょうがくせい\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e試食\u003crt\u003eししょく\u003c/rt\u003e\u003c/ruby\u003eしてもらったら、\u003cruby\u003e約\u003crt\u003eやく\u003c/rt\u003e\u003c/ruby\u003e８\u003cruby\u003e割\u003crt\u003eわり\u003c/rt\u003e\u003c/ruby\u003eが、\u003cruby\u003e生\u003crt\u003eなま\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e食\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eべても①\u003cu\u003eおいしい\u003c/u\u003eと\u003cruby\u003e答\u003crt\u003eこた\u003c/rt\u003e\u003c/ruby\u003eえたそうです。\u003cruby\u003e子\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eどもも\u003cruby\u003e好\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eきになれるピーマンの\u003cruby\u003e誕生\u003crt\u003eたんじょう\u003c/rt\u003e\u003c/ruby\u003eです。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e実\u003crt\u003eじつ\u003c/rt\u003e\u003c/ruby\u003eは、この\u003cruby\u003e新\u003crt\u003eあたら\u003c/rt\u003e\u003c/ruby\u003eしいタイプのピーマンの\u003cruby\u003e研究\u003crt\u003eけんきゅう\u003c/rt\u003e\u003c/ruby\u003eには、１０\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003eもかかっています。その②\u003cu\u003e\u003cruby\u003e出発点\u003crt\u003eしゅっぱつてん\u003c/rt\u003e\u003c/ruby\u003e\u003c/u\u003eは、\u003cruby\u003e外国産\u003crt\u003eがいこくさん\u003c/rt\u003e\u003c/ruby\u003eのとうがらしです。これは\u003cruby\u003e日本人\u003crt\u003eにほんじん\u003c/rt\u003e\u003c/ruby\u003eには\u003cruby\u003e辛\u003crt\u003eから\u003c/rt\u003e\u003c/ruby\u003eすぎるものでしたが、\u003cruby\u003e偶然\u003crt\u003eぐうぜん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e辛\u003crt\u003eから\u003c/rt\u003e\u003c/ruby\u003eくないものが\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eつかったのです。\u003c/p\u003e\u003cp\u003eその後、そのとうがらしの\u003cruby\u003e良\u003crt\u003eよ\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e点\u003crt\u003eてん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eして、\u003cruby\u003e新\u003crt\u003eあたら\u003c/rt\u003e\u003c/ruby\u003eしいタイプのピーマンが\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eられたということです。この\u003cruby\u003e新\u003crt\u003eあたら\u003c/rt\u003e\u003c/ruby\u003eしいタイプのピーマンが\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eられるまでは、\u003cruby\u003e親\u003crt\u003eおや\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e子\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eどもにピーマンを\u003cruby\u003e食\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eべさせるのは\u003cruby\u003e大変\u003crt\u003eたいへん\u003c/rt\u003e\u003c/ruby\u003eでした。そんな\u003cruby\u003e親\u003crt\u003eおや\u003c/rt\u003e\u003c/ruby\u003eたちも、\u003cruby\u003e楽\u003crt\u003eらく\u003c/rt\u003e\u003c/ruby\u003eになると\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eって\u003cruby\u003e喜\u003crt\u003eよろこ\u003c/rt\u003e\u003c/ruby\u003eんでいるそうです。\u003c/p\u003e",
        "fullTranslation":  "Dạo gần đây, một giống ớt chuông kiểu mới đã bắt đầu xuất hiện trên các kệ hàng. Loại ớt chuông này khác biệt cả về hình dáng lẫn hương vị so với các loại ớt trước đây. Từ trước đến nay, hễ nhắc đến ớt chuông, vì vị đắng ngắt và mùi hăng nồng nặc nên đây luôn là một trong những loại rau củ bị trẻ em ghét nhất.\n\nThế nhưng, giống ớt chuông kiểu mới này hầu như không hề đắng và mùi hăng cũng không còn nhiều. Khi cho học sinh tiểu học ăn thử, có tới khoảng 80% các em trả lời rằng ăn sống cũng cảm thấy (1) ngon miệng. Đây chính là sự ra đời của giống ớt chuông mà trẻ em cũng có thể yêu thích.\n\nThực ra, công trình nghiên cứu ra giống ớt chuông kiểu mới này đã tiêu tốn tới 10 năm. (2) Điểm khởi đầu của nghiên cứu này bắt nguồn từ một giống ớt cay ngoại nhập. Giống ớt này vốn quá cay đối với người Nhật, nhưng các nhà nghiên cứu đã tình cờ phát hiện ra những cá thể ớt hoàn toàn không cay.\n\nSau đó, họ đã tận dụng những ưu điểm của giống ớt đó để lai tạo thành công giống ớt chuông kiểu mới này. Trước khi giống ớt này ra đời, các bậc phụ huynh rất vất vả trong việc dỗ dành con cái ăn ớt chuông. Giờ đây, các bậc cha mẹ cũng đang rất vui mừng vì công việc cho con ăn rau đã trở nên dễ dàng và nhẹ nhàng hơn nhiều.",
        "vocabulary":  [
                           {
                               "word":  "ピーマン",
                               "hiragana":  "ぴーまん",
                               "meaning":  "Ớt chuông / Ớt ngọt"
                           },
                           {
                               "word":  "試食",
                               "hiragana":  "ししょく",
                               "meaning":  "Ăn thử / Nếm thử"
                           },
                           {
                               "word":  "誕生",
                               "hiragana":  "たんじょう",
                               "meaning":  "Sự ra đời / Khởi sinh"
                           },
                           {
                               "word":  "出発点",
                               "hiragana":  "しゅっぱつてん",
                               "meaning":  "Điểm xuất phát / Điểm khởi đầu"
                           },
                           {
                               "word":  "とうがらし",
                               "hiragana":  "とうがらし",
                               "meaning":  "Ớt (cay)"
                           },
                           {
                               "word":  "偶然",
                               "hiragana":  "ぐうぜん",
                               "meaning":  "Tình cờ / Ngẫu nhiên"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜というと",
                                 "meaning":  "Hễ nhắc đến... thì nghĩ ngay tới..."
                             },
                             {
                                 "pattern":  "〜割 (〜わり)",
                                 "meaning":  "Phần mười (8割 = 80%)"
                             },
                             {
                                 "pattern":  "〜させる",
                                 "meaning":  "Thể sai khiến (cho phép / bắt ai làm gì)"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「おいしい」と答えたのはなぜか。",
                              "options":  [
                                              "においは強いが、苦くなかったから",
                                              "においがあまりなくて、苦さもほとんどなかったから",
                                              "苦かったが、においがあまりしなかったから",
                                              "ほとんど苦くなくて、においが全くなかったから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "においは強いが、苦くなかったから",
                                                          "meaning":  "Mùi hăng nồng nhưng không đắng.",
                                                          "analysis":  "Sai: Mùi hăng cũng không còn nhiều."
                                                      },
                                                      {
                                                          "option":  "においがあまりなくて、苦さもほとんどなかったから",
                                                          "meaning":  "Vì mùi hăng không nhiều và vị đắng hầu như không có.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với mô tả: \u0027ほとんど苦くなくて、においもあまりしません... 8割が、生で食べてもおいしいと答えた\u0027."
                                                      },
                                                      {
                                                          "option":  "苦かったが、においがあまりしなかったから",
                                                          "meaning":  "Vị đắng nhưng mùi không nồng.",
                                                          "analysis":  "Sai: Ớt mới không bị đắng."
                                                      },
                                                      {
                                                          "option":  "ほとんど苦くなくて、においが全くなかったから",
                                                          "meaning":  "Hầu như không đắng và hoàn toàn không có mùi.",
                                                          "analysis":  "Sai: Bài viết ghi \u0027においもあまりしません\u0027 (mùi không nhiều) chứ không phải \u0027hoàn toàn không có mùi\u0027 (全くなかった)."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「しかし、この新しいタイプのピーマンは、ほとんど苦くなくて、においもあまりしません。小学生に試食してもらったら、約8割が、生で食べてもおいしいと答えたそうです。」",
                              "explanation":  "Đáp án 2 đúng. Trẻ em thấy ngon miệng và ăn được sống là vì giống ớt mới này đã loại bỏ được 2 nhược điểm lớn nhất: hầu như không đắng và giảm thiểu tối đa mùi hăng đặc trưng."
                          },
                          {
                              "id":  2,
                              "question":  "問2：②「出発点」とあるが、何が出発点となったのか。",
                              "options":  [
                                              "外国産のとうがらしから、偶然新しいタイプのとうがらしを作ることができたこと。",
                                              "外国産のピーマンから、偶然新しいタイプのピーマンを作ることができたこと。",
                                              "外国産の辛いとうがらしの中から、偶然辛くないものが見つかったこと。",
                                              "外国産の辛いピーマンの中から、偶然辛くないものが見つかったこと。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "外国産のとうがらしから、偶然新しいタイプのとうがらしを作ることができたこと。",
                                                          "meaning":  "Tình cờ tạo ra giống ớt cay kiểu mới từ ớt ngoại nhập.",
                                                          "analysis":  "Sai mục tiêu: Tạo ra ớt chuông (ピーマン), không phải ớt cay (とうがらし)."
                                                      },
                                                      {
                                                          "option":  "外国産のピーマンから、偶然新しいタイプのピーマンを作ることができたこと。",
                                                          "meaning":  "Tình cờ tạo ra ớt chuông kiểu mới từ ớt chuông ngoại nhập.",
                                                          "analysis":  "Sai: Bắt đầu từ ớt cay (とうがらし)."
                                                      },
                                                      {
                                                          "option":  "外国産の辛いとうがらしの中から、偶然辛くないものが見つかったこと。",
                                                          "meaning":  "Tình cờ tìm thấy những cá thể không cay trong giống ớt cay ngoại nhập.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với chi tiết: \u0027その出発点は、外国産のとうがらしです。これは日本人には辛すぎるものでしたが、偶然辛くないものが見つかったのです\u0027."
                                                      },
                                                      {
                                                          "option":  "外国産の辛いピーマンの中から、偶然辛くないものが見つかったこと。",
                                                          "meaning":  "Tình cờ tìm thấy cá thể không cay trong ớt chuông ngoại nhập.",
                                                          "analysis":  "Sai: Nguồn gốc là từ cây ớt cay (とうがらし)."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「その出発点は、外国産のとうがらしです。これは日本人には辛すぎるものでしたが、偶然辛くないものが見つかったのです。」",
                              "explanation":  "Đáp án 3 đúng. Khởi nguồn của 10 năm nghiên cứu chính là sự kiện tình cờ tìm thấy một quả/cây ớt không cay nằm lẫn trong giống ớt cay ngoại nhập, từ đó nhà khoa học mới nảy ra ý tưởng tận dụng đặc tính này."
                          },
                          {
                              "id":  3,
                              "question":  "問3：この文章のテーマは何か。",
                              "options":  [
                                              "子どもも好きになれるピーマン",
                                              "子どもに野菜を食べさせる方法",
                                              "新しいタイプのとうがらし",
                                              "新しい野菜を作る研究の難しさ"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "子どもも好きになれるピーマン",
                                                          "meaning":  "Giống ớt chuông mà trẻ em cũng có thể yêu thích.",
                                                          "analysis":  "ĐÚNG: Toàn bộ bài văn xoay quanh sự ra đời (\u0027子どもも好きになれるピーマンの誕生\u0027), quá trình nghiên cứu và lợi ích của giống ớt chuông ngọt mới này."
                                                      },
                                                      {
                                                          "option":  "子どもに野菜を食べさせる方法",
                                                          "meaning":  "Phương pháp cho trẻ em ăn rau.",
                                                          "analysis":  "Sai: Bài văn không bàn về các phương pháp/mẹo dỗ trẻ ăn rau nói chung."
                                                      },
                                                      {
                                                          "option":  "新しいタイプのとうがらし",
                                                          "meaning":  "Giống ớt cay kiểu mới.",
                                                          "analysis":  "Sai: Đối tượng chính là ớt chuông (ピーマン)."
                                                      },
                                                      {
                                                          "option":  "新しい野菜を作る研究の難しさ",
                                                          "meaning":  "Sự gian nan trong nghiên cứu tạo giống rau củ mới.",
                                                          "analysis":  "Sai: Bài viết tập trung vào thành quả và đặc tính của giống ớt mới, không nhằm phân tích sự vất vả."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「子どもも好きになれるピーマンの誕生です。...この新しいタイプのピーマンが作られるまでは、親が子どもにピーマンを食べさせるのは大変でした。」",
                              "explanation":  "Đáp án 1 đúng. Chủ đề xuyên suốt của bài đọc là giới thiệu về sự ra đời, nguồn gốc và ý nghĩa tích cực của giống ớt chuông không đắng dành cho trẻ em."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-trungvan-06",
        "level":  "N3",
        "category":  "trungvan",
        "categoryName":  "Trung văn (Đoạn văn vừa)",
        "lessonNumber":  6,
        "title":  "スポーツクラブに通う母 (Người mẹ đi tập thể thao)",
        "timeLimit":  360,
        "passage":  "\u003cp\u003eスポーツクラブは\u003cruby\u003e運動\u003crt\u003eうんどう\u003c/rt\u003e\u003c/ruby\u003eするために\u003cruby\u003e行\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eくところだ。しかし、\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e母\u003crt\u003eはは\u003c/rt\u003e\u003c/ruby\u003eにとっては、それ\u003cruby\u003e以上\u003crt\u003eいじょう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e場所\u003crt\u003eばしょ\u003c/rt\u003e\u003c/ruby\u003eであった。８５\u003cruby\u003e歳\u003crt\u003eさい\u003c/rt\u003e\u003c/ruby\u003eになる\u003cruby\u003e母\u003crt\u003eはは\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003e、スポーツグラブに\u003cruby\u003e通\u003crt\u003eかよ\u003c/rt\u003e\u003c/ruby\u003eっている。\u003cruby\u003e実\u003crt\u003eじつ\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e母\u003crt\u003eはは\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e半年\u003crt\u003eはんとし\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e転\u003crt\u003eころ\u003c/rt\u003e\u003c/ruby\u003eんで\u003cruby\u003e腕\u003crt\u003eうで\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e骨折\u003crt\u003eこっせつ\u003c/rt\u003e\u003c/ruby\u003eし、それ\u003cruby\u003e以来\u003crt\u003eいらい\u003c/rt\u003e\u003c/ruby\u003eすっかり\u003cruby\u003e元気\u003crt\u003eげんき\u003c/rt\u003e\u003c/ruby\u003eをなくしてしまっていた。\u003cruby\u003e食欲\u003crt\u003eしょくよく\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e落\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eち、\u003cruby\u003e体重\u003crt\u003eたいじゅう\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e減\u003crt\u003eへ\u003c/rt\u003e\u003c/ruby\u003eった。\u003cruby\u003e骨折\u003crt\u003eこっせつ\u003c/rt\u003e\u003c/ruby\u003eは３\u003cruby\u003e週間\u003crt\u003eしゅうかん\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e治\u003crt\u003eなお\u003c/rt\u003e\u003c/ruby\u003eったが、\u003cruby\u003e腕\u003crt\u003eうで\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e動\u003crt\u003eうご\u003c/rt\u003e\u003c/ruby\u003eかす\u003cruby\u003e訓練\u003crt\u003eくんれん\u003c/rt\u003e\u003c/ruby\u003eのための\u003cruby\u003e病院\u003crt\u003eびょういん\u003c/rt\u003e\u003c/ruby\u003eへはあまり\u003cruby\u003e行\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eきたがらなかった。\u003c/p\u003e\u003cp\u003eところが、そんな\u003cruby\u003e母\u003crt\u003eはは\u003c/rt\u003e\u003c/ruby\u003eがある\u003cruby\u003e日\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e友達\u003crt\u003eともだち\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e誘\u003crt\u003eさそ\u003c/rt\u003e\u003c/ruby\u003eわれて\u003cruby\u003e近\u003crt\u003eちか\u003c/rt\u003e\u003c/ruby\u003eくのスポーツクラブに\u003cruby\u003e通\u003crt\u003eかよ\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめた。すると、たった１か\u003cruby\u003e月\u003crt\u003eげつ\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e全\u003crt\u003eまった\u003c/rt\u003e\u003c/ruby\u003eく\u003cruby\u003e違\u003crt\u003eちが\u003c/rt\u003e\u003c/ruby\u003eう\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eのように\u003cruby\u003e元気\u003crt\u003eげんき\u003c/rt\u003e\u003c/ruby\u003eになったのだ。\u003cruby\u003e病院\u003crt\u003eびょういん\u003c/rt\u003e\u003c/ruby\u003eでもスポーツクラブでも、\u003cruby\u003e無理\u003crt\u003eむり\u003c/rt\u003e\u003c/ruby\u003eをせずにできるトレーニングを\u003cruby\u003e一人一人\u003crt\u003eひとりひとり\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e考\u003crt\u003eかんが\u003c/rt\u003e\u003c/ruby\u003eえてくれる。しかし、\u003cruby\u003e元気\u003crt\u003eげんき\u003c/rt\u003e\u003c/ruby\u003eな\u003cruby\u003e若\u003crt\u003eわか\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eたちと\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじ\u003cruby\u003e場所\u003crt\u003eばしょ\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e運動\u003crt\u003eうんどう\u003c/rt\u003e\u003c/ruby\u003eしたり、\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじくらいの\u003cruby\u003e年\u003crt\u003eとし\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e仲間\u003crt\u003eなかま\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e一緒\u003crt\u003eいっしょ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e頑張\u003crt\u003eがんば\u003c/rt\u003e\u003c/ruby\u003eったりすることは、スポーツクラブだからできたのである。そして、それが\u003cruby\u003e母\u003crt\u003eはは\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e生\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eきる\u003cruby\u003e力\u003crt\u003eちから\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e引\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eき\u003cruby\u003e出\u003crt\u003eだ\u003c/rt\u003e\u003c/ruby\u003eしてくれたのだろう。\u003c/p\u003e\u003cp\u003eスポーツクラブは\u003cruby\u003e運動\u003crt\u003eうんどう\u003c/rt\u003e\u003c/ruby\u003eするだけの\u003cruby\u003e場所\u003crt\u003eばしょ\u003c/rt\u003e\u003c/ruby\u003eではない。それ\u003cruby\u003e以上\u003crt\u003eいじょう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e価値\u003crt\u003eかち\u003c/rt\u003e\u003c/ruby\u003eがあるのだ。\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e母\u003crt\u003eはは\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e通\u003crt\u003eかよ\u003c/rt\u003e\u003c/ruby\u003eうスポーツクラブに\u003cruby\u003e心\u003crt\u003eこころ\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e感謝\u003crt\u003eかんしゃ\u003c/rt\u003e\u003c/ruby\u003eしている。\u003c/p\u003e",
        "fullTranslation":  "Câu lạc bộ thể thao là nơi người ta đến để tập luyện vận động. Thế nhưng, đối với mẹ tôi, đó còn là một nơi chốn mang nhiều ý nghĩa hơn thế. Mẹ tôi năm nay 85 tuổi, hiện đang theo tập tại một câu lạc bộ thể thao gần nhà. Thực ra, nửa năm trước mẹ tôi bị trượt ngã gãy xương cánh tay, và kể từ đó bà hoàn toàn mất đi vẻ hoạt bát, vui vẻ thường ngày. Mẹ ăn uống kém đi và bị sút cân. Vết gãy xương đã lành sau 3 tuần, nhưng mẹ rất ngại và không chịu đến bệnh viện để tập phục hồi chức năng vận động cánh tay.\n\nThế nhưng một ngày nọ, mẹ được bạn bè rủ rê và bắt đầu đi tới câu lạc bộ thể thao gần nhà. Và rồi, chỉ vỏn vẹn trong 1 tháng, mẹ đã hồi phục khỏe khoắn, vui tươi như biến thành một con người hoàn toàn khác. Dù là bệnh viện hay câu lạc bộ thể thao, người ta đều thiết kế những bài tập vừa sức cho từng người một. Tuy nhiên, việc được vận động trong cùng một không gian tràn đầy năng lượng với những người trẻ tuổi, và cùng nỗ lực rèn luyện bên những người bạn đồng niên - đó là điều chỉ câu lạc bộ thể thao mới có thể mang lại. Và chính điều đó có lẽ đã khơi dậy nguồn sinh lực sống mạnh mẽ trong mẹ tôi.\n\nCâu lạc bộ thể thao không đơn thuần chỉ là nơi để vận động thể chất. Nơi đó còn ẩn chứa những giá trị to lớn hơn nhiều. Giờ đây, tôi vô cùng biết ơn câu lạc bộ thể thao mà mẹ tôi đang theo tập.",
        "vocabulary":  [
                           {
                               "word":  "骨折",
                               "hiragana":  "こっせつ",
                               "meaning":  "Gãy xương"
                           },
                           {
                               "word":  "食欲",
                               "hiragana":  "しょくよく",
                               "meaning":  "Sự thèm ăn / Cảm giác ngon miệng"
                           },
                           {
                               "word":  "訓練",
                               "hiragana":  "くんれん",
                               "meaning":  "Tập luyện / Phục hồi chức năng"
                           },
                           {
                               "word":  "無理をせずに",
                               "hiragana":  "むりをせずに",
                               "meaning":  "Vừa sức / Không quá sức"
                           },
                           {
                               "word":  "引き出す",
                               "hiragana":  "ひきだす",
                               "meaning":  "Khơi dậy / Đánh thức / Kéo ra"
                           },
                           {
                               "word":  "生きる力",
                               "hiragana":  "いきるちから",
                               "meaning":  "Nghị lực sống / Sinh lực sống"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜以来 (〜いらい)",
                                 "meaning":  "Kể từ sau khi... (suốt từ đó đến nay)"
                             },
                             {
                                 "pattern":  "〜たがる / 〜たがらない",
                                 "meaning":  "Ngại / Không muốn làm gì (biểu hiện mong muốn ngôi thứ ba)"
                             },
                             {
                                 "pattern":  "〜だからこそ / 〜だからできた",
                                 "meaning":  "Chính vì là... nên mới có thể..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：母が元気をなくした原因は何か。",
                              "options":  [
                                              "食欲が落ちたから",
                                              "体重が減ったから",
                                              "腕を骨折したから",
                                              "けがが治らないから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "食欲が落ちたから",
                                                          "meaning":  "Vì ăn không ngon miệng.",
                                                          "analysis":  "Sai: Ăn kém và sụt cân là hậu quả kéo theo sau khi bị gãy tay."
                                                      },
                                                      {
                                                          "option":  "体重が減ったから",
                                                          "meaning":  "Vì bị sụt cân.",
                                                          "analysis":  "Sai: Hậu quả kéo theo."
                                                      },
                                                      {
                                                          "option":  "腕を骨折したから",
                                                          "meaning":  "Vì bị gãy xương cánh tay.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với nguyên nhân khởi phát: \u0027母は半年前に転んで腕を骨折し、それ以来すっかり元気をなくしてしまっていた\u0027."
                                                      },
                                                      {
                                                          "option":  "けがが治らないから",
                                                          "meaning":  "Vì vết thương mãi không lành.",
                                                          "analysis":  "Sai: Vết gãy xương đã khỏi hẳn sau 3 tuần (\u0027骨折は3週間で治った\u0027)."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「実は、母は半年前に転んで腕を骨折し、それ以来すっかり元気をなくしてしまっていた。」",
                              "explanation":  "Đáp án 3 đúng. Sự cố trượt ngã khiến cánh tay bị gãy xương nửa năm trước chính là nguyên nhân trực tiếp khiến người mẹ suy sụp tinh thần và mất đi sự năng động thường ngày."
                          },
                          {
                              "id":  2,
                              "question":  "問2：母が病院ではなく、スポーツクラブで元気になれたのはなぜか。",
                              "options":  [
                                              "無理をせずにできるトレーニングを自分用に作ってもらったから",
                                              "若い人たちがいるところで運動したり、仲間と頑張ったりできたから",
                                              "たった1か月で効果が出るようなトレーニングを考えてもらったから",
                                              "元気な人と仲間になったり、若い人たちと同じ運動をしたりしたから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "無理をせずにできるトレーニングを自分用に作ってもらったから",
                                                          "meaning":  "Được thiết kế bài tập vừa sức cho riêng mình.",
                                                          "analysis":  "Sai: Bệnh viện cũng làm được điều này (\u0027病院でもスポーツクラブでも...考えてくれる\u0027)."
                                                      },
                                                      {
                                                          "option":  "若い人たちがいるところで運動したり、仲間と頑張ったりできたから",
                                                          "meaning":  "Được vận động tại nơi có những người trẻ năng động và cùng nỗ lực bên bạn bè đồng niên.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với lý do: \u0027元気な若い人たちと同じ場所で運動したり、同じくらいの年の仲間と一緒に頑張ったりすることは、スポーツクラブだからできたのである\u0027."
                                                      },
                                                      {
                                                          "option":  "たった1か月で効果が出るようなトレーニングを考えてもらったから",
                                                          "meaning":  "Được thiết kế bài tập chỉ trong 1 tháng là có hiệu quả.",
                                                          "analysis":  "Sai: 1 tháng là thời gian thực tế mẹ hồi phục, không phải tiêu chí bài tập."
                                                      },
                                                      {
                                                          "option":  "元気な人と仲間になったり、若い人たちと同じ運動をしたりしたから",
                                                          "meaning":  "Tập cùng bài tập giống người trẻ...",
                                                          "analysis":  "Sai: Bài đọc nêu \u0027cùng địa điểm\u0027 (同じ場所) chứ không phải \u0027tập cùng bài tập nặng giống người trẻ\u0027."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「しかし、元気な若い人たちと同じ場所で運動したり、同じくらいの年の仲間と一緒に頑張ったりすることは、スポーツクラブだからできたのである。そして、それが母の生きる力を引き出してくれたのだろう。」",
                              "explanation":  "Đáp án 2 đúng. Môi trường tràn đầy sức trẻ và sự đồng hành khích lệ từ những người bạn già cùng trang lứa tại CLB thể thao là điều bệnh viện không có, và đó chính là yếu tố kích thích tinh thần sống vui khỏe của mẹ."
                          },
                          {
                              "id":  3,
                              "question":  "問3：この文章を書いた人は、スポーツクラブにはどんな特別な価値があると考えているか。",
                              "options":  [
                                              "自分は生きる価値のある人間だと気づかせてくれる。",
                                              "運動不足にならないようにしてくれる。",
                                              "けがを早く治す方法を考えてくれる。",
                                              "生きる力を引き出してくれる。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "自分は生きる価値のある人間だと気づかせてくれる。",
                                                          "meaning":  "Giúp nhận ra mình là con người có giá trị để sống.",
                                                          "analysis":  "Sai lệch ý tác giả."
                                                      },
                                                      {
                                                          "option":  "運動不足にならないようにしてくれる。",
                                                          "meaning":  "Giúp không bị thiếu vận động.",
                                                          "analysis":  "Sai: Đây là chức năng thể chất thông thường, không phải giá trị đặc biệt \u0027hơn thế nữa\u0027 (それ以上)."
                                                      },
                                                      {
                                                          "option":  "けがを早く治す方法を考えてくれる。",
                                                          "meaning":  "Nghĩ cách chữa lành chấn thương nhanh chóng.",
                                                          "analysis":  "Sai: Đây là nhiệm vụ của bệnh viện."
                                                      },
                                                      {
                                                          "option":  "生きる力を引き出してくれる。",
                                                          "meaning":  "Khơi dậy và đánh thức sinh lực sống mạnh mẽ.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với thông điệp: \u0027それが母の生きる力を引き出してくれたのだろう。スポーツクラブは運動するだけの場所ではない。それ以上の価値があるのだ\u0027."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「そして、それが母の生きる力を引き出してくれたのだろう。スポーツクラブは運動するだけの場所ではない。それ以上の価値があるのだ。」",
                              "explanation":  "Đáp án 4 đúng. Giá trị vượt bậc ngoài việc rèn luyện thể lực của CLB thể thao chính là khả năng truyền cảm hứng, kết nối xã hội và đánh thức niềm vui, nghị lực sống của con người."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-trungvan-07",
        "level":  "N3",
        "category":  "trungvan",
        "categoryName":  "Trung văn (Đoạn văn vừa)",
        "lessonNumber":  7,
        "title":  "母の教育方針 (Lời cảm ơn gửi người mẹ năm xưa)",
        "timeLimit":  360,
        "passage":  "\u003cp\u003e\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e子\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eどものころから、\u003cruby\u003e絵\u003crt\u003eえ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e描\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eくのが\u003cruby\u003e好\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eきで、よく\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e絵\u003crt\u003eえ\u003c/rt\u003e\u003c/ruby\u003eをほめられていました。でも、\u003cruby\u003e国語\u003crt\u003eこくご\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e数学\u003crt\u003eすうがく\u003c/rt\u003e\u003c/ruby\u003eなどの\u003cruby\u003e勉強\u003crt\u003eべんきょう\u003c/rt\u003e\u003c/ruby\u003eはあまりよくできませんでした。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e中学\u003crt\u003eちゅうがく\u003c/rt\u003e\u003c/ruby\u003e２\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003eのとき、\u003cruby\u003e母\u003crt\u003eはは\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eは「\u003cruby\u003e愛\u003crt\u003eあい\u003c/rt\u003e\u003c/ruby\u003eさんは\u003cruby\u003e美術\u003crt\u003eびじゅつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e成績\u003crt\u003eせいせき\u003c/rt\u003e\u003c/ruby\u003eはいいんですが、ほかの\u003cruby\u003e勉強\u003crt\u003eべんきょう\u003c/rt\u003e\u003c/ruby\u003eももっと\u003cruby\u003e頑張\u003crt\u003eがんば\u003c/rt\u003e\u003c/ruby\u003eらないといけませんね。」と\u003cruby\u003e先生\u003crt\u003eせんせい\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eわれました。\u003cruby\u003e母\u003crt\u003eはは\u003c/rt\u003e\u003c/ruby\u003eは「\u003cruby\u003e愛\u003crt\u003eあい\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e頑張\u003crt\u003eがんば\u003c/rt\u003e\u003c/ruby\u003eって\u003cruby\u003e勉強\u003crt\u003eべんきょう\u003c/rt\u003e\u003c/ruby\u003eしているんですが、テストで\u003cruby\u003e点\u003crt\u003eてん\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e取\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eれません。でも、\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eはそれでいいと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eっているんです。\u003cruby\u003e愛\u003crt\u003eあい\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e絵\u003crt\u003eえ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e好\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eきだし\u003cruby\u003e上手\u003crt\u003eじょうず\u003c/rt\u003e\u003c/ruby\u003eなので、それを\u003cruby\u003e伸\u003crt\u003eの\u003c/rt\u003e\u003c/ruby\u003eばしてやりたいんです。」と\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eってくれました。すると、\u003cruby\u003e先生\u003crt\u003eせんせい\u003c/rt\u003e\u003c/ruby\u003eも「①\u003cu\u003eお\u003cruby\u003e母\u003crt\u003eかあ\u003c/rt\u003e\u003c/ruby\u003eさんのお\u003cruby\u003e考\u003crt\u003eかんが\u003c/rt\u003e\u003c/ruby\u003eえは、よくわかりました\u003c/u\u003e。じゃ、\u003cruby\u003e愛\u003crt\u003eあい\u003c/rt\u003e\u003c/ruby\u003eさん、\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003eでわからないことがあったら、いつでも\u003cruby\u003e先生\u003crt\u003eせんせい\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e質問\u003crt\u003eしつもん\u003c/rt\u003e\u003c/ruby\u003eしてね。」と\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eいました。\u003c/p\u003e\u003cp\u003eそれから、\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e先生\u003crt\u003eせんせい\u003c/rt\u003e\u003c/ruby\u003eによく\u003cruby\u003e質問\u003crt\u003eしつもん\u003c/rt\u003e\u003c/ruby\u003eをするようになりましたが、\u003cruby\u003e成績\u003crt\u003eせいせき\u003c/rt\u003e\u003c/ruby\u003eはあまり\u003cruby\u003e変\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eわりませんでした。それでも、\u003cruby\u003e母\u003crt\u003eはは\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e決\u003crt\u003eけっ\u003c/rt\u003e\u003c/ruby\u003eして\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eに「\u003cruby\u003e勉強\u003crt\u003eべんきょう\u003c/rt\u003e\u003c/ruby\u003eは？」とは\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eわずに、\u003cruby\u003e自由\u003crt\u003eじゆう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e絵\u003crt\u003eえ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e描\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eかせてくれました。\u003c/p\u003e\u003cp\u003eその後、\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e美術\u003crt\u003eびじゅつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e専門\u003crt\u003eせんもん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e学校\u003crt\u003eがっこう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e卒業\u003crt\u003eそつぎょう\u003c/rt\u003e\u003c/ruby\u003eし、\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e好\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eきな\u003cruby\u003e絵\u003crt\u003eえ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e描\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eくことを\u003cruby\u003e仕事\u003crt\u003eしごと\u003c/rt\u003e\u003c/ruby\u003eにしています。②\u003cu\u003eあの\u003cruby\u003e時\u003crt\u003eとき\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e母\u003crt\u003eはは\u003c/rt\u003e\u003c/ruby\u003eに「ありがとう」と\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eいたいです\u003c/u\u003e。\u003c/p\u003e",
        "fullTranslation":  "Từ khi còn nhỏ, tôi đã rất thích vẽ tranh và thường được mọi người khen ngợi về những bức vẽ của mình. Thế nhưng, việc học các môn như Quốc ngữ hay Toán học thì tôi lại không giỏi lắm.\n\nVào năm học lớp 8, mẹ và tôi được giáo viên chủ nhiệm nhắc nhở: \u0027Em Ai có thành tích môn Mỹ thuật rất tốt, nhưng các môn học khác cũng cần phải cố gắng nhiều hơn nữa đấy\u0027. Mẹ tôi liền đỡ lời: \u0027Cháu Ai nhà tôi cũng rất chăm chỉ học bài nhưng đi thi lại không đạt điểm cao. Thế nhưng tôi nghĩ như vậy cũng không sao cả. Cháu rất thích vẽ và có năng khiếu vẽ đẹp, nên tôi muốn bồi dưỡng và phát triển thế mạnh đó cho con\u0027. Nghe vậy, giáo viên nói: \u0027(1) Thầy đã hiểu rõ quan điểm của bác rồi. Vậy Ai này, trong giờ học nếu có chỗ nào chưa hiểu, em cứ thoải mái hỏi thầy bất cứ lúc nào nhé\u0027.\n\nKể từ đó, tôi thường xuyên đặt câu hỏi cho giáo viên hơn, nhưng điểm số các môn cũng không thay đổi là bao. Dẫu vậy, mẹ tuyệt đối không bao giờ cằn nhằn \u0027Đã học bài chưa?\u0027 mà luôn tạo điều kiện cho tôi được tự do vẽ tranh.\n\nSau này, tôi đã tốt nghiệp trường chuyên môn mỹ thuật và hiện tại tôi đang làm công việc vẽ tranh mà mình hằng yêu thích. Tôi thực sự muốn gửi lời (2) \u0027Con cảm ơn mẹ\u0027 đến người mẹ của tôi năm ấy.",
        "vocabulary":  [
                           {
                               "word":  "美術",
                               "hiragana":  "びじゅつ",
                               "meaning":  "Mỹ thuật / Hội họa"
                           },
                           {
                               "word":  "伸ばす",
                               "hiragana":  "のばす",
                               "meaning":  "Nuôi dưỡng / Phát triển (năng khiếu)"
                           },
                           {
                               "word":  "決して〜ない",
                               "hiragana":  "けっして〜ない",
                               "meaning":  "Tuyệt đối không bao giờ..."
                           },
                           {
                               "word":  "専門学校",
                               "hiragana":  "せんもんがっこう",
                               "meaning":  "Trường chuyên môn / Trường trung cấp nghề"
                           },
                           {
                               "word":  "仕事にする",
                               "hiragana":  "しごとにする",
                               "meaning":  "Chọn làm nghề nghiệp mưu sinh"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜てやる / 〜てやりたい",
                                 "meaning":  "Làm điều gì đó tốt đẹp cho người dưới/con cái"
                             },
                             {
                                 "pattern":  "〜ずに (〜ないで)",
                                 "meaning":  "Không làm việc gì mà..."
                             },
                             {
                                 "pattern":  "〜させる",
                                 "meaning":  "Cho phép ai đó làm gì (thể sai khiến)"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：中学生のころの「私」は、どんな子どもだったか。",
                              "options":  [
                                              "絵を描くのが好きで、どの科目の成績も悪くない子どもだった。",
                                              "絵は上手だったが、美術以外の勉強はあまりできない子どもだった。",
                                              "絵ばかり描いていたが、美術の成績はあまりよくない子どもだった。",
                                              "絵が得意で、どの科目の勉強も頑張っていて、先生にほめられる子どもだった。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "絵を描くのが好きで、どの科目の成績も悪くない子どもだった。",
                                                          "meaning":  "Thích vẽ tranh và thành tích môn nào cũng không tệ.",
                                                          "analysis":  "Sai: Các môn khác học không tốt."
                                                      },
                                                      {
                                                          "option":  "絵は上手だったが、美術以外の勉強はあまりできない子どもだった。",
                                                          "meaning":  "Vẽ tranh rất đẹp nhưng việc học các môn ngoài mỹ thuật thì không giỏi.",
                                                          "analysis":  "ĐÚNG: Khớp với đoạn đầu: \u0027絵を描くのが好きで、よく人に絵をほめられていました。でも、国語や数学などの勉強はあまりよくできませんでした\u0027."
                                                      },
                                                      {
                                                          "option":  "絵ばかり描いていたが、美術の成績はあまりよくない子どもだった。",
                                                          "meaning":  "Chỉ toàn vẽ tranh nhưng thành tích mỹ thuật không tốt.",
                                                          "analysis":  "Sai: Thành tích mỹ thuật rất tốt (\u0027美術の成績はいい\u0027)."
                                                      },
                                                      {
                                                          "option":  "絵が得意で、どの科目の勉強も頑張っていて、先生にほめられる子どもだった。",
                                                          "meaning":  "Môn nào cũng giỏi và được thầy khen ngợi.",
                                                          "analysis":  "Sai: Bị thầy nhắc nhở vì các môn khác yếu."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「絵を描くのが好きで、よく人に絵をほめられていました。 でも、国語や数学などの勉強はあまりよくできませんでした。」",
                              "explanation":  "Đáp án 2 đúng. Thời học cấp 2, tác giả là người có năng khiếu vẽ xuất sắc nhưng các môn học văn hóa khác lại tiếp thu chậm và điểm số không cao."
                          },
                          {
                              "id":  2,
                              "question":  "問2：①「お母さんのお考え」とあるが、それはどのような考えか。",
                              "options":  [
                                              "上手な科目でいい成績が取れなくてもいいので、娘には得意なことをやらせたい。",
                                              "娘には得意なことをやらせたいが、テストでもいい点が取れるようにさせたい。",
                                              "授業でわからないことがあったら、娘が先生に質問できるようにしてほしい。",
                                              "娘には、苦手な勉強も得意なことも、もっと一生懸命に頑張ってほしい。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "上手な科目でいい成績が取れなくてもいいので、娘には得意なことをやらせたい。",
                                                          "meaning":  "Dù không đạt điểm tốt ở các môn khác cũng không sao, chỉ cần để con gái phát huy điều con có sở trường.",
                                                          "analysis":  "ĐÚNG: Mẹ chia sẻ: \u0027愛は頑張って勉強しているんですが、テストで点が取れません。でも、私はそれでいいと思っているんです。愛は絵が好きだし上手なので、それを伸ばしてやりたいんです\u0027."
                                                      },
                                                      {
                                                          "option":  "娘には得意なことをやらせたいが、テストでもいい点が取れるようにさせたい。",
                                                          "meaning":  "Muốn con làm điều mình thích nhưng vẫn phải đạt điểm cao trong bài thi.",
                                                          "analysis":  "Sai: Mẹ chấp nhận việc con không đạt điểm cao (\u0027テストで点が取れません。でも、私はそれでいい\u0027)."
                                                      },
                                                      {
                                                          "option":  "授業でわからないことがあったら、娘が先生に質問できるようにしてほしい。",
                                                          "meaning":  "Mong giáo viên cho con đặt câu hỏi khi không hiểu bài.",
                                                          "analysis":  "Sai: Đây là lời đề nghị của giáo viên sau đó."
                                                      },
                                                      {
                                                          "option":  "娘には、苦手な勉強も得意なことも、もっと一生懸命に頑張ってほしい。",
                                                          "meaning":  "Muốn con nỗ lực hết mình ở cả môn yếu lẫn môn giỏi.",
                                                          "analysis":  "Sai: Mẹ không tạo áp lực học môn văn hóa."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「愛は頑張って勉強しているんですが、テストで点が取れません。 でも、私はそれでいいと思っているんです。 愛は絵が好きだし上手なので、それを伸ばしてやりたいんです。」",
                              "explanation":  "Đáp án 1 đúng. Quan điểm giáo dục của người mẹ là tôn trọng cá tính và tập trung bồi dưỡng năng khiếu hội họa nổi trội của con gái, thay vì ép buộc con phải đạt điểm cao ở những môn văn hóa mà con không có sở trường."
                          },
                          {
                              "id":  3,
                              "question":  "問3：②「あの時の母に『ありがとう』と言いたい」とあるが、今、「私」がそう思っているのはどうしてか。",
                              "options":  [
                                              "母が先生に「私」は絵がとても上手だと言ってくれたおかげで、自信を持って生きられる人間になれたから",
                                              "母が成績がよくないことは悪いことではないと教えてくれたおかげで、広い考えを持てるようになったから",
                                              "母が「私」の成績を気にせずに、絵を描く力を伸ばしたいと考えてくれたおかげで、好きな道に進むことができたから。",
                                              "母が「私」に質問することの大切さを教えてくれたおかげで、積極的な行動ができる人間になれたから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "母が先生に「私」は絵がとても上手だと言ってくれたおかげで、自信を持って生きられる人間になれたから",
                                                          "meaning":  "Nhờ mẹ khen vẽ đẹp nên trở thành người sống tự tin.",
                                                          "analysis":  "Sai trọng tâm nghề nghiệp."
                                                      },
                                                      {
                                                          "option":  "母が成績がよくないことは悪いことではないと教えてくれたおかげで、広い考えを持てるようになったから",
                                                          "meaning":  "Nhờ mẹ dạy điểm kém không phải chuyện xấu...",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "母が「私」の成績を気にせずに、絵を描く力を伸ばしたいと考えてくれたおかげで、好きな道に進むことができたから。",
                                                          "meaning":  "Nhờ mẹ không bận tâm đến điểm số mà luôn tạo điều kiện phát triển năng khiếu vẽ, giúp tác giả có thể theo đuổi con đường mình yêu thích.",
                                                          "analysis":  "ĐÚNG: Khớp hoàn toàn với đoạn kết: nhờ sự bao dung và định hướng của mẹ mà tác giả đã học trường mỹ thuật và hiện làm công việc vẽ tranh hằng mơ ước (\u0027好きな絵を描くことを仕事にしています\u0027)."
                                                      },
                                                      {
                                                          "option":  "母が「私」に質問することの大切さを教えてくれたおかげで、積極的な行動ができる人間になれたから",
                                                          "meaning":  "Nhờ mẹ dạy tầm quan trọng của việc đặt câu hỏi...",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「それでも、母は決して私に「勉強は?」 とは言わずに、自由に絵を描かせてくれました。その後、私は美術の専門学校を卒業し、今は、好きな絵を描くことを仕事にしています。あの時の母に「ありがとう」と言いたいです。」",
                              "explanation":  "Đáp án 3 đúng. Tác giả biết ơn người mẹ vì mẹ đã không trách mắng chuyện điểm số mà luôn tạo mọi điều kiện để tác giả thỏa sức vẽ tranh, mở đường cho tác giả theo đuổi đam mê và thành công với nghề vẽ hiện tại."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-trungvan-08",
        "level":  "N3",
        "category":  "trungvan",
        "categoryName":  "Trung văn (Đoạn văn vừa)",
        "lessonNumber":  8,
        "title":  "商品の「売り方」と「買い方」 (Cách bán và cách mua sản phẩm)",
        "timeLimit":  360,
        "passage":  "\u003cp\u003e\u003cruby\u003e以前\u003crt\u003eいぜん\u003c/rt\u003e\u003c/ruby\u003eからあった\u003cruby\u003e商品\u003crt\u003eしょうひん\u003c/rt\u003e\u003c/ruby\u003eが、\u003cruby\u003e急\u003crt\u003eきゅう\u003c/rt\u003e\u003c/ruby\u003eによく\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eれるようになることがある。\u003c/p\u003e\u003cp\u003eその\u003cruby\u003e理由\u003crt\u003eりゆう\u003c/rt\u003e\u003c/ruby\u003eとして、まず\u003cruby\u003e挙\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eげられるのは、\u003cruby\u003e企業\u003crt\u003eきぎょう\u003c/rt\u003e\u003c/ruby\u003eがそれまでと「\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003e」を\u003cruby\u003e変\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eえたことだ。\u003cruby\u003e例\u003crt\u003eたと\u003c/rt\u003e\u003c/ruby\u003eえば、「\u003cruby\u003e疲\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eれたサラリーマンのための\u003cruby\u003e飲\u003crt\u003eの\u003c/rt\u003e\u003c/ruby\u003eみ\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003e」として\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eっていた①\u003cu\u003e\u003cruby\u003e健康\u003crt\u003eけんこう\u003c/rt\u003e\u003c/ruby\u003eドリンク\u003c/u\u003eがある。このドリンクを、\u003cruby\u003e美\u003crt\u003eうつく\u003c/rt\u003e\u003c/ruby\u003eしい\u003cruby\u003e女性\u003crt\u003eじょせい\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e歌手\u003crt\u003eかしゅ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e使\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eって\u003cruby\u003e宣伝\u003crt\u003eせんでん\u003c/rt\u003e\u003c/ruby\u003eしたら、\u003cruby\u003e若\u003crt\u003eわか\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e女性\u003crt\u003eじょせい\u003c/rt\u003e\u003c/ruby\u003eもよく\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eうようになったそうだ。また、\u003cruby\u003e商品\u003crt\u003eしょうひん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e名前\u003crt\u003eなまえ\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e容器\u003crt\u003eようき\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e色\u003crt\u003eいろ\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e形\u003crt\u003eかたち\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e変\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eえたりするだけで、\u003cruby\u003e発売\u003crt\u003eはつばい\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e何\u003crt\u003eなん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003eもたった\u003cruby\u003e製品\u003crt\u003eせいひん\u003c/rt\u003e\u003c/ruby\u003eが、また\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eれ\u003cruby\u003e出\u003crt\u003eだ\u003c/rt\u003e\u003c/ruby\u003eすようになることもある。②\u003cu\u003eイメージの\u003cruby\u003e力\u003crt\u003eちから\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e大\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eきい\u003c/u\u003e。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e一方\u003crt\u003eいっぽう\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e次\u003crt\u003eつぎ\u003c/rt\u003e\u003c/ruby\u003eのような\u003cruby\u003e例\u003crt\u003eれい\u003c/rt\u003e\u003c/ruby\u003eもある。\u003cruby\u003e日本中\u003crt\u003eにほんじゅう\u003c/rt\u003e\u003c/ruby\u003eどこでも\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eられている\u003cruby\u003e安\u003crt\u003eやす\u003c/rt\u003e\u003c/ruby\u003eいチョコレートが、ある\u003cruby\u003e町\u003crt\u003eまち\u003c/rt\u003e\u003c/ruby\u003eで、ある\u003cruby\u003e時期\u003crt\u003eじき\u003c/rt\u003e\u003c/ruby\u003eにだけ、\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e切\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eれるようになった。そのチョコレート\u003cruby\u003e会社\u003crt\u003eがいしゃ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e調\u003crt\u003eしら\u003c/rt\u003e\u003c/ruby\u003eべてみると、その\u003cruby\u003e町\u003crt\u003eまち\u003c/rt\u003e\u003c/ruby\u003eでは、\u003cruby\u003e高校生\u003crt\u003eこうこうせい\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e間\u003crt\u003eあいだ\u003c/rt\u003e\u003c/ruby\u003eに「このチョコレートを\u003cruby\u003e持\u003crt\u003eも\u003c/rt\u003e\u003c/ruby\u003eっていると、\u003cruby\u003e試験\u003crt\u003eしけん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e合格\u003crt\u003eごうかく\u003c/rt\u003e\u003c/ruby\u003eする」といううわさが\u003cruby\u003e広\u003crt\u003eひろ\u003c/rt\u003e\u003c/ruby\u003eがり、みんな\u003cruby\u003e試験\u003crt\u003eしけん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eってかばんにつめていた。これは、「\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003e」ではなく③\u003cu\u003e「\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003e」\u003c/u\u003eが\u003cruby\u003e変\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eわったことで\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eれるようになった\u003cruby\u003e例\u003crt\u003eれい\u003c/rt\u003e\u003c/ruby\u003eだと\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eえるだろう。\u003c/p\u003e",
        "fullTranslation":  "Có những sản phẩm vốn đã có mặt từ trước trên thị trường, nhưng đột nhiên lại trở nên bán rất chạy.\n\nLý do đầu tiên có thể kể đến là doanh nghiệp đã thay đổi \u0027cách bán\u0027 so với trước đây. Chẳng hạn, có một loại (1) nước uống bổ dưỡng vốn được bán với định vị là \u0027thức uống dành cho giới nhân viên công sở mệt mỏi\u0027. Khi sản phẩm này được quảng cáo thông qua một nữ ca sĩ xinh đẹp, nghe nói đối tượng nữ giới trẻ tuổi cũng bắt đầu mua rất nhiều. Ngoài ra, chỉ cần thay đổi tên gọi hoặc màu sắc, hình dáng bao bì đựng, những sản phẩm đã ra mắt nhiều năm lại bắt đầu bán chạy trở lại. Quả thực, (2) sức mạnh của hình ảnh thương hiệu là vô cùng to lớn.\n\nMặt khác, cũng có những ví dụ như thế này: Một loại sô-cô-la giá rẻ vốn được bán khắp mọi nơi trên nước Nhật, bỗng nhiên lại cháy hàng tại một thị trấn vào một thời điểm nhất định trong năm. Khi công ty sản xuất sô-cô-la tiến hành điều tra, họ phát hiện ra rằng trong giới học sinh cấp 3 tại thị trấn đó rộ lên tin đồn: \u0027Nếu mang theo thanh sô-cô-la này bên mình thì sẽ thi đỗ\u0027, nên trước mỗi kỳ thi ai nấy đều mua bỏ vào cặp sách. Có thể nói, đây là ví dụ về một sản phẩm bán chạy không phải do \u0027cách bán\u0027 mà là do (3) \u0027cách mua\u0027 của khách hàng đã thay đổi.",
        "vocabulary":  [
                           {
                               "word":  "健康ドリンク",
                               "hiragana":  "けんこうどりんく",
                               "meaning":  "Nước uống bổ dưỡng / Nước tăng lực"
                           },
                           {
                               "word":  "宣伝",
                               "hiragana":  "せんでん",
                               "meaning":  "Quảng cáo / Tuyên truyền"
                           },
                           {
                               "word":  "容器",
                               "hiragana":  "ようき",
                               "meaning":  "Vỏ hộp / Bao bì chứa đựng"
                           },
                           {
                               "word":  "売り切れる",
                               "hiragana":  "うりきれる",
                               "meaning":  "Bán hết sạch / Cháy hàng"
                           },
                           {
                               "word":  "合格する",
                               "hiragana":  "ごうかくする",
                               "meaning":  "Thi đỗ / Trúng tuyển"
                           },
                           {
                               "word":  "うわさ",
                               "hiragana":  "うわさ",
                               "meaning":  "Tin đồn / Lời đồn đại"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜として",
                                 "meaning":  "Với tư cách là... / Dưới danh nghĩa là..."
                             },
                             {
                                 "pattern":  "〜だけでなく / 〜だけで",
                                 "meaning":  "Chỉ cần... là đã..."
                             },
                             {
                                 "pattern":  "〜一方 (〜いっぽう)",
                                 "meaning":  "Mặt khác / Ngược lại..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「健康ドリンク」がよく売れるように、会社は何を変えたか。",
                              "options":  [
                                              "宣伝のしかた",
                                              "容器の形",
                                              "商品の名前",
                                              "商品の効果"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "宣伝のしかた",
                                                          "meaning":  "Cách thức quảng cáo.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác: \u0027このドリンクを、美しい女性の歌手を使って宣伝したら、若い女性もよく買うようになったそうだ\u0027 (dùng nữ ca sĩ xinh đẹp để quảng cáo -\u003e thay đổi cách thức PR quảng cáo)."
                                                      },
                                                      {
                                                          "option":  "容器の形",
                                                          "meaning":  "Hình dáng vỏ đựng.",
                                                          "analysis":  "Sai: Đây là ví dụ chung bổ sung phía sau, không phải chi tiết của nước tăng lực."
                                                      },
                                                      {
                                                          "option":  "商品の名前",
                                                          "meaning":  "Tên của sản phẩm.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "商品の効果",
                                                          "meaning":  "Hiệu quả của sản phẩm.",
                                                          "analysis":  "Sai: Thành phần và công dụng sản phẩm không đổi."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「このドリンクを、美しい女性の歌手を使って宣伝したら、若い女性もよく買うようになったそうだ。」",
                              "explanation":  "Đáp án 1 đúng. Doanh nghiệp đã thay đổi phương thức quảng cáo bằng việc mời nữ ca sĩ trẻ đẹp làm đại diện hình ảnh, mở rộng tệp khách hàng sang giới nữ trẻ tuổi."
                          },
                          {
                              "id":  2,
                              "question":  "問2：②「イメージの力は大きい」とあるが、なぜそう言えるのか。",
                              "options":  [
                                              "イメージを変えただけで、その製品の効果も上がったと感じさせることができるから",
                                              "製品が持っている良いイメージは、何年たっても変える必要がないから",
                                              "古い製品のイメージと違う、全く新しい製品を発売したら、よく売れたから",
                                              "同じ製品に前とは違うイメージを与えたことで、よく売れるようになったから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "イメージを変えただけで、その製品の効果も上がったと感じさせることができるから",
                                                          "meaning":  "Chỉ cần đổi hình ảnh là khiến người ta cảm thấy hiệu quả tăng lên.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "製品が持っている良いイメージは、何年たっても変える必要がないから",
                                                          "meaning":  "Hình ảnh đẹp thì không cần thay đổi sau nhiều năm.",
                                                          "analysis":  "Sai: Ngược lại, việc đổi mới hình ảnh làm sản phẩm cũ bán chạy lại."
                                                      },
                                                      {
                                                          "option":  "古い製品のイメージと違う、全く新しい製品を発売したら、よく売れたから",
                                                          "meaning":  "Tung ra sản phẩm hoàn toàn mới.",
                                                          "analysis":  "Sai: Vẫn là sản phẩm cũ (\u0027発売から何年もたった製品\u0027)."
                                                      },
                                                      {
                                                          "option":  "同じ製品に前とは違うイメージを与えたことで、よく売れるようになったから",
                                                          "meaning":  "Bằng cách mang lại cho cùng một sản phẩm một hình ảnh mới khác trước, sản phẩm đã bán rất chạy.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với lý giải: \u0027商品の名前や容器の色や形を変えたりするだけで、発売から何年もたった製品が、また売れ出すようになる... イメージの力は大きい\u0027."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「また、商品の名前や容器の色や形を変えたりするだけで、発売から何年もたった製品が、また売れ出すようになることもある。イメージの力は大きい。」",
                              "explanation":  "Đáp án 4 đúng. Sức mạnh của hình ảnh (image) nằm ở chỗ chỉ cần thay đổi diện mạo, tên gọi hoặc cách định vị tiếp thị, một sản phẩm cũ vốn đã bão hòa vẫn có thể tạo ra làn sóng tiêu dùng mới mạnh mẽ."
                          },
                          {
                              "id":  3,
                              "question":  "問3：③「買い方」が変わったとあるが、どのように変わったのか。",
                              "options":  [
                                              "うわさに影響されずに、自分が好きなチョコレートを買うようになった。",
                                              "高いチョコレートよりも、安いチョコレートを買うようになった。",
                                              "あるチョコレートを、食べる目的以外でも買うようになった。",
                                              "試験に合格するため、時期を選ばずチョコレートを買うようになった。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "うわさに影響されずに、自分が好きなチョコレートを買うようになった。",
                                                          "meaning":  "Không bị ảnh hưởng bởi tin đồn mà tự mua loại mình thích.",
                                                          "analysis":  "Sai: Học sinh mua chính vì tin đồn thi cử."
                                                      },
                                                      {
                                                          "option":  "高いチョコレートよりも、安いチョコレートを買うようになった。",
                                                          "meaning":  "Mua socola rẻ thay vì socola đắt.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "あるチョコレートを、食べる目的以外でも買うようになった。",
                                                          "meaning":  "Người mua bắt đầu mua một loại socola với mục đích khác ngoài việc ăn uống (mua để làm bùa may mắn khi đi thi).",
                                                          "analysis":  "ĐÚNG: Học sinh mua socola không phải để thưởng thức mà bỏ vào cặp làm bùa cầu may trước kỳ thi (\u0027「このチョコレートを持っていると、試験に合格する」といううわさが広がり、みんな試験前に買ってかばんに入れていた\u0027)."
                                                      },
                                                      {
                                                          "option":  "試験に合格するため、時期を選ばずチョコレートを買うようになった。",
                                                          "meaning":  "Mua quanh năm không kể thời điểm.",
                                                          "analysis":  "Sai: Chỉ mua vào dịp trước kỳ thi (\u0027ある時期にだけ\u0027)."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「その町では、高校生の間に「このチョコレートを持っていると、試験に合格する」といううわさが広がり、みんな試験前に買ってかばんに入れていた。これは、「売り方」ではなく「買い方」が変わったことで売れるようになった例だと言えるだろう。」",
                              "explanation":  "Đáp án 3 đúng. \u0027Cách mua\u0027 thay đổi nghĩa là mục đích tiêu dùng đã chuyển từ việc mua bánh kẹo để ăn sang mua như một vật phẩm cầu may mắn thi đỗ cho vào cặp sách trước ngày thi."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-trungvan-09",
        "level":  "N3",
        "category":  "trungvan",
        "categoryName":  "Trung văn (Đoạn văn vừa)",
        "lessonNumber":  9,
        "title":  "ドアの開閉と夫婦の習慣 (Thói quen đóng mở cửa trong gia đình)",
        "timeLimit":  360,
        "passage":  "\u003cp\u003e\u003cruby\u003e結婚\u003crt\u003eけっこん\u003c/rt\u003e\u003c/ruby\u003eして\u003cruby\u003e妻\u003crt\u003eつま\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e一緒\u003crt\u003eいっしょ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e住\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eみ\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめたころ、こんなことがあった。\u003cruby\u003e閉\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eめたと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eったトイレや\u003cruby\u003e部屋\u003crt\u003eへや\u003c/rt\u003e\u003c/ruby\u003eのドアが、しばらくして\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eると、\u003cruby\u003e開\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eいているのだ。①\u003cu\u003eおかしいなあ\u003c/u\u003eと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eいながら、もう\u003cruby\u003e一度\u003crt\u003eいちど\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e閉\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eめておいても、\u003cruby\u003e少\u003crt\u003eすこ\u003c/rt\u003e\u003c/ruby\u003eしたつと、また\u003cruby\u003e開\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eいている。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e妻\u003crt\u003eつま\u003c/rt\u003e\u003c/ruby\u003eにドアのことを\u003cruby\u003e尋\u003crt\u003eたず\u003c/rt\u003e\u003c/ruby\u003eねてみると、「もちろん、そこを\u003cruby\u003e使\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eっていない\u003cruby\u003e時\u003crt\u003eとき\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e開\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eけておくわよ。」と\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eうので、②\u003cu\u003eびっくり\u003c/u\u003e。\u003cruby\u003e犯人\u003crt\u003eはんにん\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e妻\u003crt\u003eつま\u003c/rt\u003e\u003c/ruby\u003eだったのだ。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e父親\u003crt\u003eちちおや\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e仕事\u003crt\u003eしごと\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e都合\u003crt\u003eつごう\u003c/rt\u003e\u003c/ruby\u003eで、\u003cruby\u003e外国\u003crt\u003eがいこく\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e生活\u003crt\u003eせいかつ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e長\u003crt\u003eなが\u003c/rt\u003e\u003c/ruby\u003eかった\u003cruby\u003e妻\u003crt\u003eつま\u003c/rt\u003e\u003c/ruby\u003eは、ドアはいつも\u003cruby\u003e開\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eけておくようにと\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eわれて\u003cruby\u003e育\u003crt\u003eそだ\u003c/rt\u003e\u003c/ruby\u003eったそうだ。\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eはずっと「ドアは\u003cruby\u003e必\u003crt\u003eかなら\u003c/rt\u003e\u003c/ruby\u003eず\u003cruby\u003e閉\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eめなさい。」と\u003cruby\u003e注意\u003crt\u003eちゅうい\u003c/rt\u003e\u003c/ruby\u003eされてきたので、その\u003cruby\u003e違\u003crt\u003eちが\u003c/rt\u003e\u003c/ruby\u003eいに\u003cruby\u003e驚\u003crt\u003eおどろ\u003c/rt\u003e\u003c/ruby\u003eいてしまった。しかし、\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eわれてみれば\u003cruby\u003e確\u003crt\u003eたし\u003c/rt\u003e\u003c/ruby\u003eかに、\u003cruby\u003e外国\u003crt\u003eがいこく\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e映画\u003crt\u003eえいが\u003c/rt\u003e\u003c/ruby\u003eやテレビドラマでは、トイレや\u003cruby\u003e部屋\u003crt\u003eへや\u003c/rt\u003e\u003c/ruby\u003eのドアが\u003cruby\u003e開\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eけたままになっていることが\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eかった。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e結婚\u003crt\u003eけっこん\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e育\u003crt\u003eそだ\u003c/rt\u003e\u003c/ruby\u003eち\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e習慣\u003crt\u003eしゅうかん\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e違\u003crt\u003eちが\u003c/rt\u003e\u003c/ruby\u003eう\u003cruby\u003e二人\u003crt\u003eふたり\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e一緒\u003crt\u003eいっしょ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e生活\u003crt\u003eせいかつ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめるのだから、\u003cruby\u003e最初\u003crt\u003eさいしょ\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e違\u003crt\u003eちが\u003c/rt\u003e\u003c/ruby\u003eいに\u003cruby\u003e驚\u003crt\u003eおどろ\u003c/rt\u003e\u003c/ruby\u003eくことが\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eいだろう。しかし、それも\u003cruby\u003e長\u003crt\u003eなが\u003c/rt\u003e\u003c/ruby\u003eく\u003cruby\u003e一緒\u003crt\u003eいっしょ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e生活\u003crt\u003eせいかつ\u003c/rt\u003e\u003c/ruby\u003eしていると、ほとんど\u003cruby\u003e気\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eにならなくなってくる。\u003c/p\u003e\u003cp\u003eあれから２０\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003e。\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003eでは、\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003eのドアは、すべて\u003cruby\u003e開\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eけたままになっている。\u003c/p\u003e",
        "fullTranslation":  "Hồi mới cưới và bắt đầu dọn về sống chung với vợ, tôi đã gặp phải một chuyện thế này. Những cánh cửa nhà vệ sinh hay cửa phòng mà tôi rõ ràng nhớ là mình đã đóng, vậy mà một lúc sau nhìn lại thì thấy chúng đang mở toang. Dù vừa tự nhủ (1) \u0027Kỳ lạ thật đấy\u0027 vừa đóng cửa lại lần nữa, nhưng chỉ một lát sau lại thấy cửa mở ra.\n\nĐến khi tôi hỏi vợ về chuyện những cánh cửa, cô ấy trả lời: \u0027Đương nhiên rồi, những lúc không dùng đến thì phải mở cửa ra chứ!\u0027, khiến tôi (2) vô cùng sửng sốt. Hóa ra \u0027thủ phạm\u0027 mở cửa chính là vợ tôi.\n\nDo tính chất công việc của bố, vợ tôi có thời gian dài sinh sống ở nước ngoài từ nhỏ và được dạy dỗ rằng cửa phòng thì lúc nào cũng nên để mở. Trong khi đó, tôi từ bé luôn bị người lớn nhắc nhở: \u0027Cửa ra vào nhất định phải đóng lại\u0027, nên tôi vô cùng ngỡ ngàng trước sự khác biệt này. Nhưng ngẫm lại lời vợ nói thì quả đúng vậy thật, trong các bộ phim điện ảnh hay phim truyền hình nước ngoài, cửa phòng ngủ hay cửa nhà vệ sinh thường xuyên được để mở như vậy.\n\nHôn nhân là sự khởi đầu chung sống của hai con người có môi trường giáo dục và thói quen sinh hoạt hoàn toàn khác nhau, nên ban đầu chắc chắn sẽ có nhiều điều bỡ ngỡ trước sự khác biệt. Thế nhưng, khi đã gắn bó chung sống lâu dài bên nhau, những điều đó dần dà sẽ hầu như chẳng còn khiến ta bận tâm nữa.\n\nThấm thoát đã 20 năm trôi qua kể từ ngày ấy. Giờ đây, mọi cánh cửa trong ngôi nhà của tôi đều luôn được mở toang như thế.",
        "vocabulary":  [
                           {
                               "word":  "尋ねる",
                               "hiragana":  "たずねる",
                               "meaning":  "Hỏi / Thăm dò"
                           },
                           {
                               "word":  "犯人",
                               "hiragana":  "はんにん",
                               "meaning":  "Thủ phạm (người làm ra hành động)"
                           },
                           {
                               "word":  "都合",
                               "hiragana":  "つごう",
                               "meaning":  "Hoàn cảnh / Điều kiện công việc"
                           },
                           {
                               "word":  "育ち方",
                               "hiragana":  "そだちかた",
                               "meaning":  "Môi trường giáo dục / Cách nuôi dạy lớn lên"
                           },
                           {
                               "word":  "習慣",
                               "hiragana":  "しゅうかん",
                               "meaning":  "Thói quen / Tập quán sinh hoạt"
                           },
                           {
                               "word":  "気にならなくなる",
                               "hiragana":  "きにならなくなる",
                               "meaning":  "Không còn để tâm / Không còn thấy phiền lòng"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜言われてみれば",
                                 "meaning":  "Nghĩ lại lời ai nói thì thấy quả đúng là..."
                             },
                             {
                                 "pattern":  "〜たままになっている",
                                 "meaning":  "Đang ở trong tình trạng giữ nguyên..."
                             },
                             {
                                 "pattern":  "〜てくる",
                                 "meaning":  "Dần dần biến đổi theo thời gian (kéo dài đến hiện tại)"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「おかしいなあと思いながら」とあるが、どうしてそう思ったのか。",
                              "options":  [
                                              "開けようとしたら、ドアが自然に開いたから",
                                              "ドアを閉めても、少したつと、開いていたから",
                                              "どんなに強い力でドアを閉めても、きちんと閉まらないから",
                                              "ドアを開けておいても、しばらくすると、閉まっていたから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "開けようとしたら、ドアが自然に開いたから",
                                                          "meaning":  "Khi định mở thì cửa tự động mở ra.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "ドアを閉めても、少したつと、開いていたから",
                                                          "meaning":  "Dù đã đóng cửa lại nhưng chỉ một lát sau cửa lại mở ra.",
                                                          "analysis":  "ĐÚNG: Khớp với chi tiết: \u0027閉めたと思ったトイレや部屋のドアが、しばらくして見ると、開いているのだ。おかしいなあと思いながら、もう一度閉めておいても、少したつと、また開いている\u0027."
                                                      },
                                                      {
                                                          "option":  "どんなに強い力でドアを閉めても、きちんと閉まらないから",
                                                          "meaning":  "Dù đóng mạnh cỡ nào cửa cũng không khép kín.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "ドアを開けておいても、しばらくすると、閉まっていたから",
                                                          "meaning":  "Để cửa mở một lúc sau lại tự đóng lại.",
                                                          "analysis":  "Sai ngược chiều."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「閉めたと思ったトイレや部屋のドアが、しばらくして見ると、開いているのだ。①おかしいなあと思いながら、もう一度閉めておいても、少したつと、また開いている。」",
                              "explanation":  "Đáp án 2 đúng. Tác giả thấy lạ lùng vì rõ ràng mình vừa mới đóng cửa lại cẩn thận, thế nhưng chỉ chốc lát sau quay lại đã thấy cửa mở toang ra."
                          },
                          {
                              "id":  2,
                              "question":  "問2：②「びっくり」とあるが、それはどうしてか。",
                              "options":  [
                                              "ドアを開けていたのが、妻だとわかったから",
                                              "妻も、ドアが開いているのが変だと感じていたから",
                                              "自分は犯人ではないと、妻が言い出したから",
                                              "妻は、「私」が犯人だと思っていたから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "ドアを開けていたのが、妻だとわかったから",
                                                          "meaning":  "Vì biết được người mở cửa chính là vợ mình.",
                                                          "analysis":  "ĐÚNG: Khi hỏi vợ thì vợ thản nhiên bảo không dùng phòng thì phải mở cửa, tác giả mới ngỡ ngàng nhận ra \u0027thủ phạm\u0027 mở cửa bấy lâu chính là vợ (\u0027犯人は妻だったのだ\u0027)."
                                                      },
                                                      {
                                                          "option":  "妻も、ドアが開いているのが変だと感じていたから",
                                                          "meaning":  "Vì vợ cũng thấy lạ khi cửa mở.",
                                                          "analysis":  "Sai: Vợ chủ động mở cửa và coi đó là điều hiển nhiên."
                                                      },
                                                      {
                                                          "option":  "自分は犯人ではないと、妻が言い出したから",
                                                          "meaning":  "Vì vợ phân trần mình không phải thủ phạm.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "妻は、「私」が犯人だと思っていたから",
                                                          "meaning":  "Vì vợ nghĩ tác giả là thủ phạm.",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「妻にドアのことを尋ねてみると、「もちろん、そこを使っていない時は、開けておくわよ。」と言うので、②びっくり。犯人は妻だったのだ。」",
                              "explanation":  "Đáp án 1 đúng. Tác giả giật mình kinh ngạc khi phát hiện ra chính người vợ mới cưới là người liên tục đi mở toang tất cả các cánh cửa trong nhà do thói quen sinh hoạt từ nhỏ."
                          },
                          {
                              "id":  3,
                              "question":  "問3：この文章を書いた人が言っていることはどれか。",
                              "options":  [
                                              "結婚は習慣が違う二人が一緒に生活するのだから、何でもよく話し合ったほうがいい。",
                                              "結婚では、二人の生活習慣に違いがあっても、そのたびに驚かないほうがいい。",
                                              "結婚した直後は習慣の違いに驚くことがあるが、次第に気にならなくなっていく。",
                                              "結婚生活が長くなると、初めは新鮮に感じたことでも嫌になってくることが多い。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "結婚は習慣が違う二人が一緒に生活するのだから、何でもよく話し合ったほうがいい。",
                                                          "meaning":  "Nên luôn trao đổi kỹ mọi chuyện.",
                                                          "analysis":  "Sai: Bài viết không đưa ra lời khuyên về đàm phán/nói chuyện."
                                                      },
                                                      {
                                                          "option":  "結婚では、二人の生活習慣に違いがあっても、そのたびに驚かないほうがいい。",
                                                          "meaning":  "Không nên ngạc nhiên trước các khác biệt.",
                                                          "analysis":  "Sai: Ngạc nhiên lúc đầu là điều tự nhiên."
                                                      },
                                                      {
                                                          "option":  "結婚した直後は習慣の違いに驚くことがあるが、次第に気にならなくなっていく。",
                                                          "meaning":  "Mới kết hôn có thể bỡ ngỡ trước sự khác biệt về thói quen, nhưng sống lâu bên nhau thì sẽ dần không còn bận tâm nữa.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với đúc kết của tác giả: \u0027最初は違いに驚くことが多いだろう。しかし、それも長く一緒に生活していると、ほとんど気にならなくなってくる\u0027."
                                                      },
                                                      {
                                                          "option":  "結婚生活が長くなると、初めは新鮮に感じたことでも嫌になってくることが多い。",
                                                          "meaning":  "Sống lâu lại thấy ghét những điều mới mẻ lúc đầu.",
                                                          "analysis":  "Sai lệch hoàn toàn thông điệp hạnh phúc sau 20 năm của bài văn."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「結婚は、育ち方も習慣も違う二人が一緒に生活を始めるのだから、最初は違いに驚くことが多いだろう。しかし、それも長く一緒に生活していると、ほとんど気にならなくなってくる。」",
                              "explanation":  "Đáp án 3 đúng. Thông điệp tác giả gửi gắm qua câu chuyện cánh cửa là trong hôn nhân, những khác biệt ban đầu về thói quen theo thời gian sống chung sẽ dần được hòa hợp và không còn là vấn đề làm phiền lòng nhau nữa."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-trungvan-10",
        "level":  "N3",
        "category":  "trungvan",
        "categoryName":  "Trung văn (Đoạn văn vừa)",
        "lessonNumber":  10,
        "title":  "「朝の読書」活動 (Hoạt động đọc sách buổi sáng)",
        "timeLimit":  360,
        "passage":  "\u003cp\u003e\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e勤\u003crt\u003eつと\u003c/rt\u003e\u003c/ruby\u003eめている\u003cruby\u003e中学校\u003crt\u003eちゅうがっこう\u003c/rt\u003e\u003c/ruby\u003eでは５\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eに「\u003cruby\u003e朝\u003crt\u003eあさ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e読書\u003crt\u003eどくしょ\u003c/rt\u003e\u003c/ruby\u003e」を\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめました。\u003cruby\u003e毎朝\u003crt\u003eまいあさ\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e教室\u003crt\u003eきょうしつ\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e生徒\u003crt\u003eせいと\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e教師\u003crt\u003eきょうし\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e全員\u003crt\u003eぜんいん\u003c/rt\u003e\u003c/ruby\u003eがそれぞれ\u003cruby\u003e読書\u003crt\u003eどくしょ\u003c/rt\u003e\u003c/ruby\u003eをします。\u003c/p\u003e\u003cp\u003e「\u003cruby\u003e朝\u003crt\u003eあさ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e読書\u003crt\u003eどくしょ\u003c/rt\u003e\u003c/ruby\u003e」は、３０\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003eぐらい\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eに、ある\u003cruby\u003e高校\u003crt\u003eこうこう\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eまりました。たった１０\u003cruby\u003e分間\u003crt\u003eふんかん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e活動\u003crt\u003eかつどう\u003c/rt\u003e\u003c/ruby\u003eですが、これを\u003cruby\u003e続\u003crt\u003eつづ\u003c/rt\u003e\u003c/ruby\u003eけているうちに、\u003cruby\u003e遅刻\u003crt\u003eちこく\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e中\u003crt\u003eちゅう\u003c/rt\u003e\u003c/ruby\u003eのおしゃべりが\u003cruby\u003e減\u003crt\u003eへ\u003c/rt\u003e\u003c/ruby\u003eり、\u003cruby\u003e成績\u003crt\u003eせいせき\u003c/rt\u003e\u003c/ruby\u003eやクラブ\u003cruby\u003e活動\u003crt\u003eかつどう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e対\u003crt\u003eたい\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e姿勢\u003crt\u003eしせい\u003c/rt\u003e\u003c/ruby\u003eにも\u003cruby\u003e効果\u003crt\u003eこうか\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e現\u003crt\u003eあらわ\u003c/rt\u003e\u003c/ruby\u003eれてきたそうです。そして「\u003cruby\u003e朝\u003crt\u003eあさ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e読書\u003crt\u003eどくしょ\u003c/rt\u003e\u003c/ruby\u003e」は、\u003cruby\u003e次第\u003crt\u003eしだい\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e全国\u003crt\u003eぜんこく\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e小中学校\u003crt\u003eしょうちゅうがっこう\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e高校\u003crt\u003eこうこう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e広\u003crt\u003eひろ\u003c/rt\u003e\u003c/ruby\u003eがっていきました。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e生徒\u003crt\u003eせいと\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e嫌\u003crt\u003eいや\u003c/rt\u003e\u003c/ruby\u003eがらずに\u003cruby\u003e積極的\u003crt\u003eせっきょくてき\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e参加\u003crt\u003eさんか\u003c/rt\u003e\u003c/ruby\u003eするのは、やり\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e工夫\u003crt\u003eくふう\u003c/rt\u003e\u003c/ruby\u003eがあるからです。\u003cruby\u003e生徒\u003crt\u003eせいと\u003c/rt\u003e\u003c/ruby\u003eだけでなく\u003cruby\u003e教師\u003crt\u003eきょうし\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e一緒\u003crt\u003eいっしょ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e毎日\u003crt\u003eまいにち\u003c/rt\u003e\u003c/ruby\u003eやる。\u003cruby\u003e自分\u003crt\u003eじぶん\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e好\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eきな\u003cruby\u003e本\u003crt\u003eほん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e選\u003crt\u003eえら\u003c/rt\u003e\u003c/ruby\u003eぶ。\u003cruby\u003e読書\u003crt\u003eどくしょ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e後\u003crt\u003eご\u003c/rt\u003e\u003c/ruby\u003eに、\u003cruby\u003e意見\u003crt\u003eいけん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e交換\u003crt\u003eこうかん\u003c/rt\u003e\u003c/ruby\u003eしたり、\u003cruby\u003e感想文\u003crt\u003eかんそうぶん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e書\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eいたりしない。\u003cruby\u003e静\u003crt\u003eしず\u003c/rt\u003e\u003c/ruby\u003eかに\u003cruby\u003e本\u003crt\u003eほん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e読\u003crt\u003eよ\u003c/rt\u003e\u003c/ruby\u003eむだけです。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e学校\u003crt\u003eがっこう\u003c/rt\u003e\u003c/ruby\u003eでも「\u003cruby\u003e朝\u003crt\u003eあさ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e読書\u003crt\u003eどくしょ\u003c/rt\u003e\u003c/ruby\u003e」の\u003cruby\u003e効果\u003crt\u003eこうか\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e現\u003crt\u003eあらわ\u003c/rt\u003e\u003c/ruby\u003eれています。\u003cruby\u003e生徒\u003crt\u003eせいと\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e集中\u003crt\u003eしゅうちゅう\u003c/rt\u003e\u003c/ruby\u003eして\u003cruby\u003e学習\u003crt\u003eがくしゅう\u003c/rt\u003e\u003c/ruby\u003eするようになりました。また、\u003cruby\u003e漫画\u003crt\u003eまんが\u003c/rt\u003e\u003c/ruby\u003eしか\u003cruby\u003e読\u003crt\u003eよ\u003c/rt\u003e\u003c/ruby\u003eまなかった\u003cruby\u003e生徒\u003crt\u003eせいと\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e小説\u003crt\u003eしょうせつ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e好\u003crt\u003eず\u003c/rt\u003e\u003c/ruby\u003eきになったり、テレビばかり\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eていた\u003cruby\u003e生徒\u003crt\u003eせいと\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e新聞\u003crt\u003eしんぶん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e読\u003crt\u003eよ\u003c/rt\u003e\u003c/ruby\u003eむようになったりしました。\u003c/p\u003e\u003cp\u003eたった１０\u003cruby\u003e分間\u003crt\u003eふんかん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e活動\u003crt\u003eかつどう\u003c/rt\u003e\u003c/ruby\u003eではありますが、その\u003cruby\u003e効果\u003crt\u003eこうか\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e大\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eきさに\u003cruby\u003e驚\u003crt\u003eおどろ\u003c/rt\u003e\u003c/ruby\u003eいています。\u003c/p\u003e",
        "fullTranslation":  "Trường cấp 2 nơi tôi đang công tác đã bắt đầu triển khai hoạt động \u0027Đọc sách buổi sáng\u0027 từ 5 năm trước. Mỗi buổi sáng trước giờ học, tại phòng học, toàn bộ học sinh và giáo viên đều tự mình đọc sách.\n\nPhong trào \u0027Đọc sách buổi sáng\u0027 bắt đầu từ khoảng 30 năm trước tại một trường cấp 3. Dù chỉ là một hoạt động vỏn vẹn trong 10 phút, nhưng trong quá trình duy trì hoạt động này, tình trạng đi học muộn hay nói chuyện riêng trong lớp đã giảm hẳn, đồng thời mang lại hiệu quả tích cực rõ rệt tới thành tích học tập và tinh thần tham gia các câu lạc bộ ngoại khóa. Và rồi, phong trào \u0027Đọc sách buổi sáng\u0027 đã dần dần lan rộng ra các trường tiểu học, THCS và THPT trên khắp cả nước.\n\nSở dĩ học sinh hào hứng, tích cực tham gia mà không hề tỏ ra khó chịu là nhờ vào những bí quyết sáng tạo trong cách thức tổ chức: Không chỉ học sinh mà cả giáo viên cũng cùng đọc sách mỗi ngày; Học sinh được tự do lựa chọn cuốn sách mình yêu thích; Sau khi đọc xong, tuyệt đối không bắt học sinh phải trao đổi ý kiến hay viết bài cảm nhận. Tất cả chỉ đơn giản là ngồi yên tĩnh đọc sách.\n\nTại ngôi trường của tôi, hiệu quả của \u0027Đọc sách buổi sáng\u0027 cũng đang thể hiện rõ rệt. Học sinh đã biết tập trung cao độ vào việc học. Thêm vào đó, những học sinh trước đây chỉ xem truyện tranh nay đã trở nên yêu thích tiểu thuyết, còn những em tối ngày dán mắt vào ti vi cũng đã bắt đầu tập thói quen đọc báo.\n\nDù chỉ là một hoạt động ngắn ngủi 10 phút, nhưng tôi thực sự kinh ngạc trước những hiệu quả to lớn mà nó mang lại.",
        "vocabulary":  [
                           {
                               "word":  "勤める",
                               "hiragana":  "つとめる",
                               "meaning":  "Làm việc / Công tác tại..."
                           },
                           {
                               "word":  "遅刻",
                               "hiragana":  "ちこく",
                               "meaning":  "Đi muộn / Đi trễ"
                           },
                           {
                               "word":  "姿勢",
                               "hiragana":  "しせい",
                               "meaning":  "Tư thế / Thái độ đối với công việc"
                           },
                           {
                               "word":  "工夫",
                               "hiragana":  "くふう",
                               "meaning":  "Bí quyết / Cách cải tiến sáng tạo"
                           },
                           {
                               "word":  "感想文",
                               "hiragana":  "かんそうぶん",
                               "meaning":  "Bài văn cảm nghĩ / Bài thu hoạch"
                           },
                           {
                               "word":  "集中する",
                               "hiragana":  "しゅうちゅうする",
                               "meaning":  "Tập trung cao độ"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜ているうちに",
                                 "meaning":  "Trong quá trình duy trì... thì (kết quả xuất hiện)"
                             },
                             {
                                 "pattern":  "〜だけでなく〜も",
                                 "meaning":  "Không chỉ... mà còn..."
                             },
                             {
                                 "pattern":  "〜ばかり",
                                 "meaning":  "Chỉ toàn là... (tần suất cao)"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：「朝の読書」は、毎朝何をするのか。",
                              "options":  [
                                              "授業が始まる前に10分間、教師と生徒がそれぞれ本を読む。",
                                              "学校に来る前に、生徒が家で10分間本を読んでくる。",
                                              "授業前の10分間、教師が生徒たちに本を読んで聞かせる。",
                                              "教師が教室に来る前に、生徒がそれぞれ10分間本を読む。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "授業が始まる前に10分間、教師と生徒がそれぞれ本を読む。",
                                                          "meaning":  "Trước khi buổi học bắt đầu 10 phút, giáo viên và học sinh cùng tự đọc cuốn sách của riêng mình.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với mô tả: \u0027毎朝、授業前に教室で生徒も教師も全員がそれぞれ読書をします... たった10分間の活動\u0027."
                                                      },
                                                      {
                                                          "option":  "学校に来る前に、生徒が家で10分間本を読んでくる。",
                                                          "meaning":  "Học sinh đọc sách 10 phút ở nhà trước khi đến trường.",
                                                          "analysis":  "Sai địa điểm: Đọc tại phòng học ở trường (\u0027教室で\u0027)."
                                                      },
                                                      {
                                                          "option":  "授業前の10分間、教師が生徒たちに本を読んで聞かせる。",
                                                          "meaning":  "Giáo viên đọc sách cho học sinh nghe.",
                                                          "analysis":  "Sai: Cả giáo viên và học sinh đều tự đọc sách riêng của mình (\u0027それぞれ読書をします\u0027)."
                                                      },
                                                      {
                                                          "option":  "教師が教室に来る前に、生徒がそれぞれ10分間本を読む。",
                                                          "meaning":  "Học sinh đọc trước khi giáo viên vào lớp.",
                                                          "analysis":  "Sai: Giáo viên cùng tham gia đọc trực tiếp cùng học sinh."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「毎朝、授業前に教室で生徒も教師も全員がそれぞれ読書をします。...たった10分間の活動ですが...」",
                              "explanation":  "Đáp án 1 đúng. Hoạt động diễn ra trong 10 phút ngay tại phòng học trước giờ vào tiết, trong đó tất cả học sinh và giáo viên cùng tự chọn và đọc cuốn sách của riêng mình."
                          },
                          {
                              "id":  2,
                              "question":  "問2：やり方に工夫があるのは、例えばどんなことか。",
                              "options":  [
                                              "読書の後、教師と一緒に意見を交換する。",
                                              "本を読んだ後に、感じたことを書く。",
                                              "毎日自分が読みたい時間に読めばいい。",
                                              "自分が読みたいと思う本を読むだけでいい。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "読書の後、教師と一緒に意見を交換する。",
                                                          "meaning":  "Trao đổi ý kiến với giáo viên sau khi đọc.",
                                                          "analysis":  "Sai: Quy định là KHÔNG trao đổi ý kiến (\u0027意見を交換したり...しない\u0027)."
                                                      },
                                                      {
                                                          "option":  "本を読んだ後に、感じたことを書く。",
                                                          "meaning":  "Viết cảm nghĩ sau khi đọc sách.",
                                                          "analysis":  "Sai: Quy định là KHÔNG bắt viết bài cảm nhận (\u0027感想文を書いたりしない\u0027)."
                                                      },
                                                      {
                                                          "option":  "毎日自分が読みたい時間に読めばいい。",
                                                          "meaning":  "Đọc vào bất kỳ thời gian nào mình thích.",
                                                          "analysis":  "Sai: Thời gian cố định 10 phút trước giờ học."
                                                      },
                                                      {
                                                          "option":  "自分が読みたいと思う本を読むだけでいい。",
                                                          "meaning":  "Chỉ cần đọc cuốn sách mà bản thân mình muốn đọc (và không bị áp lực bài tập).",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với điểm sáng tạo giúp học sinh hào hứng: \u0027自分で好きな本を選ぶ。読書後に、意見を交換したり、感想文を書いたりしない。静かに本を読むだけです\u0027."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「自分で好きな本を選ぶ。読書後に、意見を交換したり、感想文を書いたりしない。静かに本を読むだけです。」",
                              "explanation":  "Đáp án 4 đúng. Bí quyết giúp học sinh không bị áp lực mà tự giác đọc sách là các em được tự do chọn sách theo sở thích và sau khi đọc không bị ép phải viết thu hoạch hay phát biểu ý kiến."
                          },
                          {
                              "id":  3,
                              "question":  "問3：この文章によると、「私」の学校では、「朝の読書」の効果として、例えばどのようなものがあったか。",
                              "options":  [
                                              "授業に遅れる生徒が減った。",
                                              "生徒が勉強に集中するようになった。",
                                              "漫画の本を読む生徒がいなくなった。",
                                              "生徒が積極的に意見交換するようになった。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "授業に遅れる生徒が減った。",
                                                          "meaning":  "Học sinh đi học muộn giảm đi.",
                                                          "analysis":  "Sai đối tượng: Đây là kết quả ở trường cấp 3 khởi xướng 30 năm trước (\u0027ある高校で...遅刻や...減り\u0027), không phải kết quả riêng được kể ở trường tác giả."
                                                      },
                                                      {
                                                          "option":  "生徒が勉強に集中するようになった。",
                                                          "meaning":  "Học sinh biết tập trung hơn vào việc học.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với báo cáo thực tế tại trường tác giả: \u0027私の学校でも「朝の読書」の効果が現れています。生徒は集中して学習するようになりました\u0027."
                                                      },
                                                      {
                                                          "option":  "漫画の本を読む生徒がいなくなった。",
                                                          "meaning":  "Không còn học sinh nào đọc truyện tranh nữa.",
                                                          "analysis":  "Sai: Chỉ nêu các em đọc thêm tiểu thuyết, không có ý là cấm tiệt hay biến mất truyện tranh."
                                                      },
                                                      {
                                                          "option":  "生徒が積極的に意見交換するようになった。",
                                                          "meaning":  "Học sinh tích cực trao đổi ý kiến.",
                                                          "analysis":  "Sai: Hoạt động đọc sách này không tổ chức trao đổi ý kiến."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「私の学校でも「朝の読書」の効果が現れています。生徒は集中して学習するようになりました。」",
                              "explanation":  "Đáp án 2 đúng. Hiệu quả trực tiếp được người viết ghi nhận tại chính ngôi trường mình công tác là học sinh đã rèn luyện được khả năng tập trung cao độ vào việc học và mở rộng sở thích đọc sách, đọc báo."
                          }
                      ]
    }
],
        "truongvan": [
    {
        "id":  "dokkai-n3-truongvan-01",
        "level":  "N3",
        "category":  "truongvan",
        "categoryName":  "Trường văn (Bài đọc dài)",
        "lessonNumber":  1,
        "title":  "においの力とその利用 (Sức mạnh của mùi hương và ứng dụng)",
        "timeLimit":  600,
        "passage":  "\u003cp\u003eにおいは、\u003cruby\u003e過去\u003crt\u003eかこ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e経験\u003crt\u003eけいけん\u003c/rt\u003e\u003c/ruby\u003eをその\u003cruby\u003e時\u003crt\u003eとき\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e気持\u003crt\u003eきも\u003c/rt\u003e\u003c/ruby\u003eちとともに\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e出\u003crt\u003eだ\u003c/rt\u003e\u003c/ruby\u003eさせることがある。\u003cruby\u003e音楽\u003crt\u003eおんがく\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eいたり、\u003cruby\u003e景色\u003crt\u003eけしき\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eたりしたときも\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじようなことがあるが、においのほうがもっと\u003cruby\u003e強\u003crt\u003eつよ\u003c/rt\u003e\u003c/ruby\u003eい。においには、\u003cruby\u003e何\u003crt\u003eなに\u003c/rt\u003e\u003c/ruby\u003eのにおいかと\u003cruby\u003e考\u003crt\u003eかんが\u003c/rt\u003e\u003c/ruby\u003eえさせる\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eに、\u003cruby\u003e体\u003crt\u003eからだ\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e心\u003crt\u003eこころ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e動\u003crt\u003eうご\u003c/rt\u003e\u003c/ruby\u003eかす\u003cruby\u003e力\u003crt\u003eちから\u003c/rt\u003e\u003c/ruby\u003eがあるようだ。\u003c/p\u003e\u003cp\u003eにおいの①\u003cu\u003eこのような\u003cruby\u003e特徴\u003crt\u003eとくちょう\u003c/rt\u003e\u003c/ruby\u003e\u003c/u\u003eは、いろいろな\u003cruby\u003e形\u003crt\u003eかたち\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eされる。\u003cruby\u003e体\u003crt\u003eからだ\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e心\u003crt\u003eこころ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e休\u003crt\u003eやす\u003c/rt\u003e\u003c/ruby\u003eませたり、\u003cruby\u003e集中\u003crt\u003eしゅうちゅう\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e力\u003crt\u003eちから\u003c/rt\u003e\u003c/ruby\u003eをつけたりするためにも\u003cruby\u003e使\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eわれるが、\u003cruby\u003e最近\u003crt\u003eさいきん\u003c/rt\u003e\u003c/ruby\u003eでは\u003cruby\u003e次\u003crt\u003eつぎ\u003c/rt\u003e\u003c/ruby\u003eのような\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e方法\u003crt\u003eほうほう\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e増\u003crt\u003eふ\u003c/rt\u003e\u003c/ruby\u003eえている。\u003cruby\u003e例\u003crt\u003eたと\u003c/rt\u003e\u003c/ruby\u003eえば、あるスーパーで、\u003cruby\u003e人工的\u003crt\u003eじんこうてき\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eられたカレーのにおいを\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e場\u003crt\u003eば\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e流\u003crt\u003eなが\u003c/rt\u003e\u003c/ruby\u003eしたら、カレーの\u003cruby\u003e材料\u003crt\u003eざいりょう\u003c/rt\u003e\u003c/ruby\u003eがいつもより３\u003cruby\u003e割\u003crt\u003eわり\u003c/rt\u003e\u003c/ruby\u003eぐらい\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eく\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eれたそうだ。においが、その\u003cruby\u003e味\u003crt\u003eあじ\u003c/rt\u003e\u003c/ruby\u003eやそれを\u003cruby\u003e食\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eべたときの\u003cruby\u003e満足感\u003crt\u003eまんぞくかん\u003c/rt\u003e\u003c/ruby\u003eをはっきりと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e出\u003crt\u003eだ\u003c/rt\u003e\u003c/ruby\u003eさせ、また\u003cruby\u003e食\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eべたいと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eわせたからだろう。また、\u003cruby\u003e衣類\u003crt\u003eいるい\u003c/rt\u003e\u003c/ruby\u003eのような、においのしない\u003cruby\u003e商品\u003crt\u003eしょうひん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e場\u003crt\u003eば\u003c/rt\u003e\u003c/ruby\u003eに、\u003cruby\u003e人工的\u003crt\u003eじんこうてき\u003c/rt\u003e\u003c/ruby\u003eな\u003cruby\u003e花\u003crt\u003eはな\u003c/rt\u003e\u003c/ruby\u003eのにおいを\u003cruby\u003e流\u003crt\u003eなが\u003c/rt\u003e\u003c/ruby\u003eしている\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eもあるそうだ。においによって\u003cruby\u003e商品\u003crt\u003eしょうひん\u003c/rt\u003e\u003c/ruby\u003eのイメージを\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eろうとしているのだ。\u003c/p\u003e\u003cp\u003eこれらの\u003cruby\u003e話\u003crt\u003eはなし\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eいたときは、においに②\u003cu\u003eそんな\u003cruby\u003e使\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eいかた\u003c/u\u003eがあったのかと\u003cruby\u003e驚\u003crt\u003eおどろ\u003c/rt\u003e\u003c/ruby\u003eいた。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e専門家\u003crt\u003eせんもんか\u003c/rt\u003e\u003c/ruby\u003eによると、\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003eではほとんどのにおいが\u003cruby\u003e人工的\u003crt\u003eじんこうてき\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eれるそうだ。しかし、\u003cruby\u003e人工的\u003crt\u003eじんこうてき\u003c/rt\u003e\u003c/ruby\u003eなにおいは\u003cruby\u003e本当\u003crt\u003eほんとう\u003c/rt\u003e\u003c/ruby\u003eのカレーや\u003cruby\u003e花\u003crt\u003eはな\u003c/rt\u003e\u003c/ruby\u003eのにおいではない。\u003cruby\u003e小学生\u003crt\u003eしょうがくせい\u003c/rt\u003e\u003c/ruby\u003eにある\u003cruby\u003e実験\u003crt\u003eじっけん\u003c/rt\u003e\u003c/ruby\u003eをしたら、\u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003eのイチゴのにおいよりも、\u003cruby\u003e人工的\u003crt\u003eじんこうてき\u003c/rt\u003e\u003c/ruby\u003eなイチゴのにおいのほうを\u003cruby\u003e本当\u003crt\u003eほんとう\u003c/rt\u003e\u003c/ruby\u003eのイチゴのにおいだと思ってしまう子どもが多かったそうだ。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eられたにおいばかりに\u003cruby\u003e囲\u003crt\u003eかこ\u003c/rt\u003e\u003c/ruby\u003eまれていると、それに\u003cruby\u003e慣\u003crt\u003eな\u003c/rt\u003e\u003c/ruby\u003eれてしまい、\u003cruby\u003e本当\u003crt\u003eほんとう\u003c/rt\u003e\u003c/ruby\u003eのにおいが\u003cruby\u003e忘\u003crt\u003eわす\u003c/rt\u003e\u003c/ruby\u003eれられていく。\u003cruby\u003e人工的\u003crt\u003eじんこうてき\u003c/rt\u003e\u003c/ruby\u003eなにおいを\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e可能性\u003crt\u003eかのうせい\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e広\u003crt\u003eひろ\u003c/rt\u003e\u003c/ruby\u003eがることはいいことではあるが、\u003cruby\u003e本当\u003crt\u003eほんとう\u003c/rt\u003e\u003c/ruby\u003eのにおいも\u003cruby\u003e忘\u003crt\u003eわす\u003c/rt\u003e\u003c/ruby\u003eれないようにしたい。\u003c/p\u003e",
        "fullTranslation":  "Mùi hương đôi khi có thể gợi nhắc lại những trải nghiệm trong quá khứ cùng với cảm xúc ở thời điểm đó. Khi nghe nhạc hay ngắm nhìn phong cảnh, chúng ta cũng có cảm giác tương tự, nhưng mùi hương lại mang lại tác động mạnh mẽ hơn nhiều. Có vẻ như mùi hương có sức mạnh tác động trực tiếp lên thể xác và tâm trí chúng ta trước cả khi ta kịp suy nghĩ xem đó là mùi gì.\n\n(1) Đặc trưng này của mùi hương được ứng dụng dưới nhiều hình thức khác nhau. Mùi hương không chỉ được dùng để giúp cơ thể và tâm trí thư giãn, hay tăng cường khả năng tập trung, mà dạo gần đây, các phương thức ứng dụng sau đang ngày một gia tăng: Chẳng hạn, tại một siêu thị nọ, khi cho tỏa mùi hương cà ri nhân tạo vào khu vực bán hàng, nguyên liệu nấu cà ri đã bán chạy hơn bình thường khoảng 30%. Đó là bởi vì mùi hương đã gợi nhớ rõ nét hương vị thơm ngon và cảm giác thỏa mãn khi ăn món đó, khiến người mua khao khát muốn ăn lại. Ngoài ra, nghe nói có những cửa hàng còn cho tỏa mùi hương hoa nhân tạo vào các quầy bán quần áo – vốn là mặt hàng không có mùi tự nhiên – nhằm xây dựng hình ảnh thương hiệu ấn tượng cho sản phẩm.\n\nKhi nghe những câu chuyện này, tôi đã vô cùng ngạc nhiên khi biết mùi hương lại có (2) cách sử dụng độc đáo đến vậy.\n\nTheo các chuyên gia, ngày nay hầu như mọi loại mùi hương đều có thể được tạo ra bằng phương pháp nhân tạo. Thế nhưng, mùi nhân tạo không phải là mùi hương thực sự của món cà ri hay bông hoa. Khi tiến hành một thử nghiệm với các em học sinh tiểu học, có rất nhiều em lại lầm tưởng mùi dâu tây nhân tạo mới chính là mùi dâu tây thật, thay vì quả dâu tây tự nhiên.\n\nNếu chúng ta cứ bị bao quanh bởi toàn những mùi hương nhân tạo, ta sẽ dần quen với chúng và lãng quên đi mùi hương chân thực của tự nhiên. Mặc dù việc mở rộng tiềm năng ứng dụng của mùi hương nhân tạo là điều tốt, nhưng chúng ta cũng không nên quên đi những mùi hương chân thật của cuộc sống.",
        "vocabulary":  [
                           {
                               "word":  "におい",
                               "hiragana":  "におい",
                               "meaning":  "Mùi hương / Mùi vị"
                           },
                           {
                               "word":  "満足感",
                               "hiragana":  "まんぞくかん",
                               "meaning":  "Cảm giác thỏa mãn / Sự hài lòng"
                           },
                           {
                               "word":  "人工的",
                               "hiragana":  "じんこうてき",
                               "meaning":  "Nhân tạo (do con người tạo ra)"
                           },
                           {
                               "word":  "衣類",
                               "hiragana":  "いるい",
                               "meaning":  "Quần áo / Hàng may mặc"
                           },
                           {
                               "word":  "囲まれる",
                               "hiragana":  "かこまれる",
                               "meaning":  "Bị bao vây / Bao quanh bởi..."
                           },
                           {
                               "word":  "可能性",
                               "hiragana":  "かのうせい",
                               "meaning":  "Khả năng / Tiềm năng ứng dụng"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜とともに",
                                 "meaning":  "Cùng với... (đồng thời diễn ra)"
                             },
                             {
                                 "pattern":  "〜させる",
                                 "meaning":  "Làm cho / Khiến cho ai đó (thể sai khiến)"
                             },
                             {
                                 "pattern":  "〜ばかり",
                                 "meaning":  "Chỉ toàn là... / Suốt ngày chỉ..."
                             },
                             {
                                 "pattern":  "〜ようにしたい",
                                 "meaning":  "Muốn cố gắng duy trì làm sao để..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「このような特徴」とあるが、それは何か。",
                              "options":  [
                                              "他の感覚よりも強く体や心に影響を与えること",
                                              "運動したくなるような気持ちにさせること",
                                              "消費行動を強く起こさせること",
                                              "何のにおいかを考えさせること"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "他の感覚よりも強く体や心に影響を与えること",
                                                          "meaning":  "Tác động lên thể xác và tâm trí mạnh mẽ hơn các giác quan khác.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với đoạn 1: mùi hương tác động mạnh hơn âm nhạc hay thị giác (\u0027音楽を聞いたり...景色を見たりしたときも同じようなことがあるが、においのほうがもっと強い...体や心を動かす力がある\u0027)."
                                                      },
                                                      {
                                                          "option":  "運動したくなるような気持ちにさせること",
                                                          "meaning":  "Làm cho người ta muốn vận động thể thao.",
                                                          "analysis":  "Sai: \u0027体や心を動かす\u0027 nghĩa bóng là làm rung động tâm trí và thể chất, không phải vận động thể thao."
                                                      },
                                                      {
                                                          "option":  "消費行動を強く起こさせること",
                                                          "meaning":  "Kích thích hành vi mua sắm mạnh mẽ.",
                                                          "analysis":  "Sai: Đây là kết quả ứng dụng sau đó, không phải bản chất đặc trưng tâm sinh lý nêu ở đoạn 1."
                                                      },
                                                      {
                                                          "option":  "何のにおいかを考えさせること",
                                                          "meaning":  "Bắt người ta phải suy nghĩ xem đó là mùi gì.",
                                                          "analysis":  "Sai: Bài viết nhấn mạnh tác động xảy ra \u0027trước khi kịp suy nghĩ\u0027 (\u0027何のにおいかと考えさせる前に\u0027)."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「音楽を聞いたり、景色を見たりしたときも同じようなことがあるが、においのほうがもっと強い。においには、何のにおいかと考えさせる前に、体や心を動かす力があるようだ。」",
                              "explanation":  "Đáp án 1 đúng. \u0027Đặc trưng này\u0027 chỉ sức mạnh tác động tâm lý và thể chất trực tiếp, mãnh liệt và tức thì của khứu giác so với thị giác và thính giác."
                          },
                          {
                              "id":  2,
                              "question":  "問2：この文章によると、最近、においのどんな利用の仕方が増えているか。",
                              "options":  [
                                              "体や心を休ませるために利用する。",
                                              "集中する力をつけるために利用する。",
                                              "商品を売るために利用する。",
                                              "客に満足感を持たせるために利用する。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "体や心を休ませるために利用する。",
                                                          "meaning":  "Dùng để thư giãn thể xác và tinh thần.",
                                                          "analysis":  "Sai: Đây là cách dùng truyền thống vốn có (\u0027体や心を休ませたり...ためにも使われるが\u0027)."
                                                      },
                                                      {
                                                          "option":  "集中する力をつけるために利用する。",
                                                          "meaning":  "Dùng để tăng cường độ tập trung.",
                                                          "analysis":  "Sai: Đây cũng là cách dùng thông thường từ trước."
                                                      },
                                                      {
                                                          "option":  "商品を売るために利用する。",
                                                          "meaning":  "Dùng vào mục đích bán hàng (thương mại).",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với các ví dụ mới gia tăng gần đây: tỏa mùi cà ri để bán nguyên liệu nhiều hơn 30%, tỏa mùi hoa ở quầy quần áo để tạo hình ảnh tiếp thị sản phẩm."
                                                      },
                                                      {
                                                          "option":  "客に満足感を持たせるために利用する。",
                                                          "meaning":  "Dùng để mang lại cảm giác thỏa mãn cho khách hàng.",
                                                          "analysis":  "Sai: Mùi hương gợi lại cảm giác thỏa mãn cũ để thôi thúc khách mua thêm đồ."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「最近では次のような利用方法が増えている。例えば、あるスーパーで、人工的に作られたカレーのにおいを売り場に流したら、カレーの材料がいつもより3割ぐらい多く売れたそうだ。」",
                              "explanation":  "Đáp án 3 đúng. Xu hướng mới gia tăng gần đây là ứng dụng mùi hương vào tiếp thị thương mại nhằm kích thích nhu cầu mua sắm và gia tăng doanh số bán hàng."
                          },
                          {
                              "id":  3,
                              "question":  "問3：②「そんな使いかた」とあるが、それは、例えばどのような方法か。",
                              "options":  [
                                              "客の目の前でおいしそうなカレーを作る。",
                                              "食料品売り場に人工的なカレーのにおいを流す。",
                                              "衣類の売り場にいいにおいの花を飾る。",
                                              "人工的な花のにおいのついた衣類を作る。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "客の目の前でおいしそうなカレーを作る。",
                                                          "meaning":  "Nấu cà ri ngay trước mặt khách.",
                                                          "analysis":  "Sai: Siêu thị dùng mùi hương nhân tạo tỏa ra."
                                                      },
                                                      {
                                                          "option":  "食料品売り場に人工的なカレーのにおいを流す。",
                                                          "meaning":  "Cho tỏa mùi cà ri nhân tạo vào khu vực bán thực phẩm.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với ví dụ: \u0027あるスーパーで、人工的に作られたカレーのにおいを売り場に流したら、カレーの材料がいつもより3割ぐらい多く売れた\u0027."
                                                      },
                                                      {
                                                          "option":  "衣類の売り場にいいにおいの花を飾る。",
                                                          "meaning":  "Trang trí hoa thật thơm ở quầy quần áo.",
                                                          "analysis":  "Sai: Tỏa mùi hoa nhân tạo, không phải cắm hoa thật."
                                                      },
                                                      {
                                                          "option":  "人工的な花のにおいのついた衣類を作る。",
                                                          "meaning":  "Sản xuất quần áo có tẩm sẵn mùi hoa nhân tạo.",
                                                          "analysis":  "Sai: Quần áo vốn không có mùi, chỉ là tỏa mùi trong không gian quầy bán."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「あるスーパーで、人工的に作られたカレーのにおいを売り場に流したら、カレーの材料がいつもより3割ぐらい多く売れたそうだ。...これらの話を聞いたときは、においにそんな使いかたがあったのかと驚いた。」",
                              "explanation":  "Đáp án 2 đúng. Tác giả ngạc nhiên trước phương pháp dùng mùi cà ri nhân tạo nhân tạo hóa tỏa khắp quầy thực phẩm để thúc đẩy doanh số nguyên liệu cà ri."
                          },
                          {
                              "id":  4,
                              "question":  "問4：においについて、この文章を書いた人はどう言っているか。",
                              "options":  [
                                              "においによって、不要な商品を買わされることがあるから、注意したほうがいい。",
                                              "においには不思議な力があるから、もっといろいろなところで利用したほうがいい。",
                                              "人工的なにおいを利用するのもいいが、本当のにおいも大切にしたほうがいい。",
                                              "人工的なにおいはなるべく使わないようにして、本当のにおいに慣れたほうがいい。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "においによって、不要な商品を買わされることがあるから、注意したほうがいい。",
                                                          "meaning":  "Nên cẩn thận vì mùi hương có thể làm mình mua đồ không cần thiết.",
                                                          "analysis":  "Sai: Tác giả không phê phán việc mua sắm."
                                                      },
                                                      {
                                                          "option":  "においには不思議な力があるから、もっといろいろなところで利用したほうがいい。",
                                                          "meaning":  "Nên ứng dụng mùi hương nhiều hơn nữa khắp mọi nơi.",
                                                          "analysis":  "Sai lệch thông điệp cảnh báo ở cuối bài."
                                                      },
                                                      {
                                                          "option":  "人工的なにおいを利用するのもいいが、本当のにおいも大切にしたほうがいい。",
                                                          "meaning":  "Tận dụng mùi hương nhân tạo cũng tốt, nhưng cần trân trọng và không quên đi mùi hương chân thực tự nhiên.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với kết luận: \u0027人工的なにおいを利用する可能性が広がることはいいことではあるが、本当のにおいも忘れないようにしたい\u0027."
                                                      },
                                                      {
                                                          "option":  "人工的なにおいはなるべく使わないようにして、本当のにおいに慣れたほうがいい。",
                                                          "meaning":  "Nên hạn chế tối đa việc dùng mùi nhân tạo.",
                                                          "analysis":  "Sai: Tác giả vẫn công nhận việc mở rộng tiềm năng mùi nhân tạo là điều tốt."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「人工的なにおいを利用する可能性が広がることはいいことではあるが、本当のにおいも忘れないようにしたい。」",
                              "explanation":  "Đáp án 3 đúng. Quan điểm của tác giả là ủng hộ việc ứng dụng khoa học công nghệ mùi hương nhân tạo nhưng đồng thời nhắc nhở con người phải gìn giữ sự nhạy cảm và trân trọng những hương vị tự nhiên đích thực."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-truongvan-02",
        "level":  "N3",
        "category":  "truongvan",
        "categoryName":  "Trường văn (Bài đọc dài)",
        "lessonNumber":  2,
        "title":  "ジョギングの楽しみ方 (Cách tận hưởng môn chạy bộ)",
        "timeLimit":  600,
        "passage":  "\u003cp\u003eジョギングは、\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eることを\u003cruby\u003e楽\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eしむスポーツです。せっかくジョギングを\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめても、２\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003eか３\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003eでやめてしまう\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eがいます。①\u003cu\u003eそういう\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003e\u003c/u\u003eは、\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eる\u003cruby\u003e楽\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eしみを\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eつけられないまま、\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eることは\u003cruby\u003e苦\u003crt\u003eくる\u003c/rt\u003e\u003c/ruby\u003eしいものだと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eってしまうのです。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eる\u003cruby\u003e楽\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eしみは、\u003cruby\u003e目標\u003crt\u003eもくひょう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e少\u003crt\u003eすこ\u003c/rt\u003e\u003c/ruby\u003eしずつ\u003cruby\u003e高\u003crt\u003eたか\u003c/rt\u003e\u003c/ruby\u003eめていくことで\u003cruby\u003e生\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eまれます。\u003cruby\u003e例\u003crt\u003eたと\u003c/rt\u003e\u003c/ruby\u003eえば「２キロを１５\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e以内\u003crt\u003eいない\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eる」という\u003cruby\u003e目標\u003crt\u003eもくひょう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e決\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eめ、それに向けて\u003cruby\u003e計画\u003crt\u003eけいかく\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e立\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eてる。\u003cruby\u003e目標\u003crt\u003eもくひょう\u003c/rt\u003e\u003c/ruby\u003eのとおり\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eれたら、②\u003cu\u003e\u003cruby\u003e次\u003crt\u003eつぎ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e目標\u003crt\u003eもくひょう\u003c/rt\u003e\u003c/ruby\u003e\u003c/u\u003eを\u003cruby\u003e決\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eめる。この\u003cruby\u003e繰\u003crt\u003eく\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e返\u003crt\u003eかえ\u003c/rt\u003e\u003c/ruby\u003eしが\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eる\u003cruby\u003e楽\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eしみを\u003cruby\u003e生\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eむのです。\u003c/p\u003e\u003cp\u003eそれには、\u003cruby\u003e計画\u003crt\u003eけいかく\u003c/rt\u003e\u003c/ruby\u003eをしっかり\u003cruby\u003e立\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eてることが\u003cruby\u003e大切\u003crt\u003eたいせつ\u003c/rt\u003e\u003c/ruby\u003eです。③\u003cu\u003eこれからジョギングを\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめようと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eっている\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003e\u003c/u\u003eは、\u003cruby\u003e次\u003crt\u003eつぎ\u003c/rt\u003e\u003c/ruby\u003eのようにするといいでしょう。まず、\u003cruby\u003e最初\u003crt\u003eさいしょ\u003c/rt\u003e\u003c/ruby\u003eの１か月は、とにかく２キロを、１キロ１０\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e程度\u003crt\u003eていど\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e速\u003crt\u003eはや\u003c/rt\u003e\u003c/ruby\u003eさで\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eることから\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめます。これは、\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eるより\u003cruby\u003e歩\u003crt\u003eある\u003c/rt\u003e\u003c/ruby\u003eくのに\u003cruby\u003e近\u003crt\u003eちか\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e速\u003crt\u003eはや\u003c/rt\u003e\u003c/ruby\u003eさです。これなら、\u003cruby\u003e初\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめて\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eる\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eにも\u003cruby\u003e難\u003crt\u003eむずか\u003c/rt\u003e\u003c/ruby\u003eしくありません。\u003cruby\u003e疲\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eれたら、\u003cruby\u003e歩\u003crt\u003eある\u003c/rt\u003e\u003c/ruby\u003eいてもいいのです。\u003cruby\u003e次第\u003crt\u003eしだい\u003c/rt\u003e\u003c/ruby\u003eに、１キロを８\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003e、７\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003eとスピードを\u003cruby\u003e上\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eげていきます。１キロ７\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e速\u003crt\u003eはや\u003c/rt\u003e\u003c/ruby\u003eさで\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eると「\u003cruby\u003e歩\u003crt\u003eある\u003c/rt\u003e\u003c/ruby\u003eき」よりも「\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eり」に\u003cruby\u003e近\u003crt\u003eちか\u003c/rt\u003e\u003c/ruby\u003eくなります。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e次\u003crt\u003eつぎ\u003c/rt\u003e\u003c/ruby\u003eの１か月はかかる\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e気\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eにしないで２キロを\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eり、\u003cruby\u003e次\u003crt\u003eつぎ\u003c/rt\u003e\u003c/ruby\u003eの１か月は３キロを\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eるというように、\u003cruby\u003e少\u003crt\u003eすこ\u003c/rt\u003e\u003c/ruby\u003eしずつ\u003cruby\u003e距離\u003crt\u003eきょり\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e延\u003crt\u003eの\u003c/rt\u003e\u003c/ruby\u003eばしていきます。\u003cruby\u003e個人差\u003crt\u003eこじんさ\u003c/rt\u003e\u003c/ruby\u003eがありますので、\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eる\u003cruby\u003e距離\u003crt\u003eきょり\u003c/rt\u003e\u003c/ruby\u003eもスピードも、\u003cruby\u003e自分\u003crt\u003eじぶん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e力\u003crt\u003eちから\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e合\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eわせて\u003cruby\u003e無理\u003crt\u003eむり\u003c/rt\u003e\u003c/ruby\u003eのない\u003cruby\u003e計画\u003crt\u003eけいかく\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e立\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eててください。\u003c/p\u003e\u003cp\u003e１キロ５\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e速\u003crt\u003eはや\u003c/rt\u003e\u003c/ruby\u003eさで\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e続\u003crt\u003eつづ\u003c/rt\u003e\u003c/ruby\u003eけられたら、マラソンの\u003cruby\u003e大会\u003crt\u003eたいかい\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e出\u003crt\u003eで\u003c/rt\u003e\u003c/ruby\u003eる\u003cruby\u003e力\u003crt\u003eちから\u003c/rt\u003e\u003c/ruby\u003eがあると言っていいでしょう。\u003c/p\u003e\u003cp\u003eこのように、\u003cruby\u003e目標\u003crt\u003eもくひょう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e決\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eめ、\u003cruby\u003e計画\u003crt\u003eけいかく\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e立\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eてて\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eることで、ジョギングを\u003cruby\u003e楽\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eしむことができるのです。\u003c/p\u003e",
        "fullTranslation":  "Chạy bộ (jogging) là một môn thể thao để tận hưởng niềm vui vận động. Thế nhưng, có những người dù cất công bắt đầu chạy bộ lại bỏ cuộc chỉ sau 2 đến 3 ngày. (1) Những người như vậy chưa kịp tìm thấy niềm vui của việc chạy bộ mà đã vội nghĩ rằng chạy bộ là một việc vô cùng khổ sở, mệt nhọc.\n\nNiềm vui khi chạy bộ được sinh ra từ việc từng bước nâng cao mục tiêu của bản thân. Ví dụ, ta đặt mục tiêu \u0027chạy 2km trong vòng 15 phút\u0027 và lập kế hoạch hướng tới mục tiêu đó. Khi đã chạy đạt mục tiêu, ta lại đặt tiếp (2) mục tiêu tiếp theo. Chính vòng lặp chinh phục này sẽ tạo nên niềm say mê chạy bộ.\n\nĐể làm được điều đó, việc lập kế hoạch vững chắc là rất quan trọng. (3) Những người chuẩn bị bắt đầu chạy bộ nên thực hiện như sau: Trước hết, trong tháng đầu tiên, hãy bắt đầu bằng việc chạy 2km với tốc độ khoảng 10 phút/km. Tốc độ này gần với đi bộ hơn là chạy. Với mức độ này thì người mới bắt đầu cũng không thấy khó khăn. Nếu mệt, bạn hoàn toàn có thể đi bộ. Sau đó, dần dần tăng tốc độ lên 8 phút/km rồi 7 phút/km. Khi đạt tốc độ 7 phút/km thì đã gần với \u0027chạy thực sự\u0027 hơn là đi bộ.\n\nTháng tiếp theo, bạn chạy 2km mà không cần bận tâm về thời gian, rồi tháng sau nữa nâng lên 3km, cứ thế từng bước kéo dài cự ly chạy. Vì thể lực mỗi người mỗi khác, hãy lập một kế hoạch vừa sức với khả năng của mình cho cả cự ly lẫn tốc độ.\n\nNếu có thể duy trì chạy liên tục với tốc độ 5 phút/km, có thể nói bạn đã đủ thể lực để tham gia các giải chạy marathon.\n\nBằng cách xác định mục tiêu và lập kế hoạch tập luyện bài bản như vậy, bạn hoàn toàn có thể tận hưởng trọn vẹn niềm vui của môn chạy bộ.",
        "vocabulary":  [
                           {
                               "word":  "ジョギング",
                               "hiragana":  "じょぎんぐ",
                               "meaning":  "Chạy bộ rèn luyện sức khỏe (jogging)"
                           },
                           {
                               "word":  "苦しい",
                               "hiragana":  "くるしい",
                               "meaning":  "Đau khổ / Cực nhọc / Khó chịu"
                           },
                           {
                               "word":  "目標",
                               "hiragana":  "もくひょう",
                               "meaning":  "Mục tiêu phấn đấu"
                           },
                           {
                               "word":  "繰り返し",
                               "hiragana":  "くりかえし",
                               "meaning":  "Sự lặp đi lặp lại"
                           },
                           {
                               "word":  "個人差",
                               "hiragana":  "こじんさ",
                               "meaning":  "Sự khác biệt thể chất giữa từng cá nhân"
                           },
                           {
                               "word":  "延ばす",
                               "hiragana":  "のばす",
                               "meaning":  "Kéo dài (khoảng cách, cự ly)"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜たまま",
                                 "meaning":  "Trong trạng thái giữ nguyên..."
                             },
                             {
                                 "pattern":  "〜に向けて",
                                 "meaning":  "Hướng tới / Nhằm đạt được..."
                             },
                             {
                                 "pattern":  "〜によって / 〜ことで",
                                 "meaning":  "Bằng cách làm gì đó..."
                             },
                             {
                                 "pattern":  "〜に合わせて",
                                 "meaning":  "Phù hợp với / Thích ứng với..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「そういう人」とあるが、何を指しているか。",
                              "options":  [
                                              "ジョギングを始めたばかりの人",
                                              "ジョギングを始めてすぐやめる人",
                                              "ジョギングを苦しいと思っている人",
                                              "ジョギングを楽しむことのできる人"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "ジョギングを始めたばかりの人",
                                                          "meaning":  "Người vừa mới bắt đầu chạy bộ.",
                                                          "analysis":  "Sai: Chỉ nêu người mới bắt đầu nói chung, chưa thể hiện hành vi bỏ cuộc."
                                                      },
                                                      {
                                                          "option":  "ジョギングを始めてすぐやめる人",
                                                          "meaning":  "Người vừa bắt đầu chạy bộ đã bỏ cuộc ngay (sau 2-3 ngày).",
                                                          "analysis":  "ĐÚNG: Khớp với câu liền trước: \u0027せっかくジョギングを始めても、2日か3日でやめてしまう人がいます。そういう人は...\u0027."
                                                      },
                                                      {
                                                          "option":  "ジョギングを苦しいと思っている人",
                                                          "meaning":  "Người nghĩ chạy bộ là cực khổ.",
                                                          "analysis":  "Sai: Đây là suy nghĩ kéo theo của người bỏ cuộc, không phải đối tượng được đại từ chỉ định thay thế."
                                                      },
                                                      {
                                                          "option":  "ジョギングを楽しむことのできる人",
                                                          "meaning":  "Người có thể tận hưởng việc chạy bộ.",
                                                          "analysis":  "Sai hoàn toàn ngược nghĩa."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「せっかくジョギングを始めても、2日か3日でやめてしまう人がいます。そういう人は、走る楽しみを見つけられないまま、走ることは苦しいものだと思ってしまうのです。」",
                              "explanation":  "Đáp án 2 đúng. Đại từ \u0027những người như vậy\u0027 (そういう人) chỉ đích danh những người vừa mới bắt đầu chạy bộ được 2-3 ngày đã vội bỏ dở vì thấy mệt mỏi."
                          },
                          {
                              "id":  2,
                              "question":  "問2：②「次の目標」とあるが、どんな目標か。",
                              "options":  [
                                              "一生懸命速いスピードで走るという目標",
                                              "一生懸命長い距離を走るという目標",
                                              "今までより少し高い目標",
                                              "今までよりかなり高い目標"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "一生懸命速いスピードで走るという目標",
                                                          "meaning":  "Mục tiêu dốc sức chạy tốc độ thật nhanh.",
                                                          "analysis":  "Sai lệch phương pháp."
                                                      },
                                                      {
                                                          "option":  "一生懸命長い距離を走るという目標",
                                                          "meaning":  "Mục tiêu chạy cự ly thật dài.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "今までより少し高い目標",
                                                          "meaning":  "Mục tiêu cao hơn mức vừa đạt được một chút (từng bước nâng cao).",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với nguyên tắc: \u0027走る楽しみは、目標を少しずつ高めていくことで生まれます... 目標のとおり走れたら、次の目標を決める\u0027."
                                                      },
                                                      {
                                                          "option":  "今までよりかなり高い目標",
                                                          "meaning":  "Mục tiêu cao hơn trước rất nhiều.",
                                                          "analysis":  "Sai: Nếu đặt mục tiêu quá cao (かなり高い) sẽ gây quá tải và dễ bỏ cuộc, bài viết nhấn mạnh \u0027từng chút một\u0027 (少しずつ)."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「走る楽しみは、目標を少しずつ高めていくことで生まれます。...目標のとおり走れたら、次の目標を決める。この繰り返しが走る楽しみを生むのです。」",
                              "explanation":  "Đáp án 3 đúng. \u0027Mục tiêu tiếp theo\u0027 là mục tiêu được nâng cao lên một nấc vừa sức so với mục tiêu trước đó để duy trì cảm giác hào hứng chinh phục mà không bị quá tải."
                          },
                          {
                              "id":  3,
                              "question":  "問3：③「これからジョギングを始めようと思っている人」に合っているのはどのような計画だと言っているか。",
                              "options":  [
                                              "まず1キロを7分で走り、次第に速度を上げ、1キロを5分で走れるようにする。",
                                              "まず2キロを10分で走り、次第に距離を延ばし、マラソンの距離が走れるようにする。",
                                              "まず時間を気にせず1キロを走り、次第に距離を延ばし、3キロを走れるようにする。",
                                              "まず歩くような速さで2キロを走り、次第に速度を上げ、少しずつ距離を延ばす。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "まず1キロを7分で走り、次第に速度を上げ、1キロを5分で走れるようにする。",
                                                          "meaning":  "Bắt đầu chạy 1km trong 7 phút...",
                                                          "analysis":  "Sai: Khởi đầu bằng 2km tốc độ 10 phút/km."
                                                      },
                                                      {
                                                          "option":  "まず2キロを10分で走り...",
                                                          "meaning":  "Chạy 2km trong 10 phút...",
                                                          "analysis":  "Sai số liệu: 1km mất 10 phút (2km mất 20 phút), không phải 2km trong 10 phút."
                                                      },
                                                      {
                                                          "option":  "まず時間を気にせず1キロを走り...",
                                                          "meaning":  "Chạy 1km không quan tâm thời gian...",
                                                          "analysis":  "Sai cự ly."
                                                      },
                                                      {
                                                          "option":  "まず歩くような速さで2キロを走り、次第に速度を上げ、少しずつ距離を延ばす。",
                                                          "meaning":  "Bắt đầu chạy 2km với tốc độ như đi bộ (10 phút/km), sau đó dần tăng tốc độ và từng bước kéo dài cự ly.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với lộ trình tập luyện từng bước được hướng dẫn ở đoạn 3 và đoạn 4."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「まず、最初の1か月は、とにかく2キロを、1キロ10分程度の速さで走ることから始めます。これは、走るより歩くのに近い速さです。...次第に、1キロを8分、7分とスピードを上げていきます。...少しずつ距離を延ばしていきます。」",
                              "explanation":  "Đáp án 4 đúng. Người mới tập nên bắt đầu nhẹ nhàng với cự ly 2km ở tốc độ thư thả tương đương đi bộ (10 phút/km), sau đó mới tăng dần vận tốc và tăng dần quãng đường."
                          },
                          {
                              "id":  4,
                              "question":  "問4：この文章全体のテーマは、何か。",
                              "options":  [
                                              "ジョギングのルール",
                                              "ジョギングの楽しみ方",
                                              "走ることの大切さ",
                                              "走ることの難しさ"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "ジョギングのルール",
                                                          "meaning":  "Luật lệ của môn chạy bộ.",
                                                          "analysis":  "Sai: Chạy bộ không có luật thi đấu trong bài."
                                                      },
                                                      {
                                                          "option":  "ジョギングの楽しみ方",
                                                          "meaning":  "Cách thức để tận hưởng và tìm thấy niềm vui trong môn chạy bộ.",
                                                          "analysis":  "ĐÚNG: Bài viết phân tích nguyên nhân người tập bỏ cuộc, chỉ ra cách đặt mục tiêu từng bước và lộ trình tập luyện bài bản để tận hưởng chạy bộ lâu dài (\u0027このように、目標を決め、計画を立てて走ることで、ジョギングを楽しむことができるのです\u0027)."
                                                      },
                                                      {
                                                          "option":  "走ることの大切さ",
                                                          "meaning":  "Tầm quan trọng của việc chạy.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "走ることの難しさ",
                                                          "meaning":  "Sự khó khăn của việc chạy.",
                                                          "analysis":  "Sai: Bài viết hướng dẫn giải pháp khắc phục khó khăn."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「このように、目標を決め、計画を立てて走ることで、ジョギングを楽しむことができるのです。」",
                              "explanation":  "Đáp án 2 đúng. Chủ đề chính xuyên suốt toàn bài là chia sẻ phương pháp lập kế hoạch và nâng cao mục tiêu để tìm thấy và duy trì niềm vui khi tham gia môn chạy bộ."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-truongvan-03",
        "level":  "N3",
        "category":  "truongvan",
        "categoryName":  "Trường văn (Bài đọc dài)",
        "lessonNumber":  3,
        "title":  "野菜工場の特徴と将来 (Đặc điểm và tương lai của nhà máy trồng rau)",
        "timeLimit":  600,
        "passage":  "\u003cp\u003e\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e工場\u003crt\u003eこうじょう\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e電気\u003crt\u003eでんき\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e光\u003crt\u003eひかり\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e育\u003crt\u003eそだ\u003c/rt\u003e\u003c/ruby\u003eてる\u003cruby\u003e工場\u003crt\u003eこうじょう\u003c/rt\u003e\u003c/ruby\u003eです。\u003cruby\u003e屋内\u003crt\u003eおくない\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e上下\u003crt\u003eじょうげ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e何段\u003crt\u003eなんだん\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e棚\u003crt\u003eたな\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e重\u003crt\u003eかさ\u003c/rt\u003e\u003c/ruby\u003eねて\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eり、そこで\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e育\u003crt\u003eそだ\u003c/rt\u003e\u003c/ruby\u003eてます。それぞれの\u003cruby\u003e棚\u003crt\u003eたな\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eれるので、\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじ\u003cruby\u003e広\u003crt\u003eひろ\u003c/rt\u003e\u003c/ruby\u003eさの\u003cruby\u003e場所\u003crt\u003eばしょ\u003c/rt\u003e\u003c/ruby\u003eでも\u003cruby\u003e畑\u003crt\u003eはたけ\u003c/rt\u003e\u003c/ruby\u003eより①\u003cu\u003e\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eくの\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e生産\u003crt\u003eせいさん\u003c/rt\u003e\u003c/ruby\u003eすることができます\u003c/u\u003e。\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e工場\u003crt\u003eこうじょう\u003c/rt\u003e\u003c/ruby\u003eでは、\u003cruby\u003e畑\u003crt\u003eはたけ\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e違\u003crt\u003eちが\u003c/rt\u003e\u003c/ruby\u003eって②\u003cu\u003e\u003cruby\u003e環境\u003crt\u003eかんきょう\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e人間\u003crt\u003eにんげん\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eれます\u003c/u\u003e。\u003cruby\u003e例\u003crt\u003eたと\u003c/rt\u003e\u003c/ruby\u003eえば、\u003cruby\u003e工場\u003crt\u003eこうじょう\u003c/rt\u003e\u003c/ruby\u003eでは\u003cruby\u003e温度\u003crt\u003eおんど\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e湿度\u003crt\u003eしつど\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e光\u003crt\u003eひかり\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e浴\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eびる\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e決\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eめられるので、\u003cruby\u003e外\u003crt\u003eそと\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e天気\u003crt\u003eてんき\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e影響\u003crt\u003eえいきょう\u003c/rt\u003e\u003c/ruby\u003eされずに\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e育\u003crt\u003eそだ\u003c/rt\u003e\u003c/ruby\u003eちます。\u003cruby\u003e冬\u003crt\u003eふゆ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e夏\u003crt\u003eなつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eることも\u003cruby\u003e可能\u003crt\u003eかのう\u003c/rt\u003e\u003c/ruby\u003eです。\u003c/p\u003e\u003cp\u003eまた、\u003cruby\u003e工場\u003crt\u003eこうじょう\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e虫\u003crt\u003eむし\u003c/rt\u003e\u003c/ruby\u003eなどが\u003cruby\u003e入\u003crt\u003eはい\u003c/rt\u003e\u003c/ruby\u003eりにくいので、\u003cruby\u003e農薬\u003crt\u003eのうやく\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e注\u003crt\u003eちゅう\u003c/rt\u003e\u003c/ruby\u003e）を\u003cruby\u003e使\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eう\u003cruby\u003e必要\u003crt\u003eひつよう\u003c/rt\u003e\u003c/ruby\u003eがありません。ですから、\u003cruby\u003e工場\u003crt\u003eこうじょう\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eられた\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e安心\u003crt\u003eあんしん\u003c/rt\u003e\u003c/ruby\u003eして\u003cruby\u003e食\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eべられます。\u003cruby\u003e畑\u003crt\u003eはたけ\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e育\u003crt\u003eそだ\u003c/rt\u003e\u003c/ruby\u003eった\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eより\u003cruby\u003e栄養\u003crt\u003eえいよう\u003c/rt\u003e\u003c/ruby\u003eがあるものもあるそうです。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eる\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eにとっても、いい\u003cruby\u003e点\u003crt\u003eてん\u003c/rt\u003e\u003c/ruby\u003eがあります。\u003cruby\u003e畑\u003crt\u003eはたけ\u003c/rt\u003e\u003c/ruby\u003eでは\u003cruby\u003e作物\u003crt\u003eさくもつ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e地面\u003crt\u003eじめん\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e育\u003crt\u003eそだ\u003c/rt\u003e\u003c/ruby\u003eてますから、\u003cruby\u003e長時間\u003crt\u003eちょうじかん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e腰\u003crt\u003eこし\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e曲\u003crt\u003eま\u003c/rt\u003e\u003c/ruby\u003eげて\u003cruby\u003e働\u003crt\u003eはたら\u003c/rt\u003e\u003c/ruby\u003eかなければならず、\u003cruby\u003e足\u003crt\u003eあし\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e腰\u003crt\u003eこし\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e痛\u003crt\u003eいた\u003c/rt\u003e\u003c/ruby\u003eくなります。しかし、\u003cruby\u003e工場\u003crt\u003eこうじょう\u003c/rt\u003e\u003c/ruby\u003eでは\u003cruby\u003e棚\u003crt\u003eたな\u003c/rt\u003e\u003c/ruby\u003eを、\u003cruby\u003e仕事\u003crt\u003eしごと\u003c/rt\u003e\u003c/ruby\u003eがしやすい\u003cruby\u003e高\u003crt\u003eたか\u003c/rt\u003e\u003c/ruby\u003eさにすることができるので、\u003cruby\u003e楽\u003crt\u003eらく\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e仕事\u003crt\u003eしごと\u003c/rt\u003e\u003c/ruby\u003eができます。\u003c/p\u003e\u003cp\u003eこう\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eてくると、いいことばかりのようですが、\u003cruby\u003e問題\u003crt\u003eもんだい\u003c/rt\u003e\u003c/ruby\u003eもあります。まず、\u003cruby\u003e工場\u003crt\u003eこうじょう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eるのにかなりの\u003cruby\u003e建設費\u003crt\u003eけんせつひ\u003c/rt\u003e\u003c/ruby\u003eがかかります。そして、\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eるには、\u003cruby\u003e電気\u003crt\u003eでんき\u003c/rt\u003e\u003c/ruby\u003eやエアコンを\u003cruby\u003e長時間\u003crt\u003eちょうじかん\u003c/rt\u003e\u003c/ruby\u003eつけておく\u003cruby\u003e必要\u003crt\u003eひつよう\u003c/rt\u003e\u003c/ruby\u003eがあるので、\u003cruby\u003e電気代\u003crt\u003eでんきだい\u003c/rt\u003e\u003c/ruby\u003eもかかります。また、\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eれる\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e種類\u003crt\u003eしゅるい\u003c/rt\u003e\u003c/ruby\u003eもまだ\u003cruby\u003e少\u003crt\u003eすく\u003c/rt\u003e\u003c/ruby\u003eないし、\u003cruby\u003e畑\u003crt\u003eはたけ\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e育\u003crt\u003eそだ\u003c/rt\u003e\u003c/ruby\u003eてた\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eのほうが\u003cruby\u003e味\u003crt\u003eあじ\u003c/rt\u003e\u003c/ruby\u003eがいいと\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eう\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eもいます。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e現在\u003crt\u003eげんざい\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e国\u003crt\u003eくに\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e大学\u003crt\u003eだいがく\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e企業\u003crt\u003eきぎょう\u003c/rt\u003e\u003c/ruby\u003eなどが\u003cruby\u003e協力\u003crt\u003eきょうりょく\u003c/rt\u003e\u003c/ruby\u003eして、このような\u003cruby\u003e問題\u003crt\u003eもんだい\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e解決\u003crt\u003eかいけつ\u003c/rt\u003e\u003c/ruby\u003eするための\u003cruby\u003e新\u003crt\u003eあたら\u003c/rt\u003e\u003c/ruby\u003eしい\u003cruby\u003e技術\u003crt\u003eぎじゅつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e研究\u003crt\u003eけんきゅう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e行\u003crt\u003eおこな\u003c/rt\u003e\u003c/ruby\u003eっています。\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eがかかるかもしれませんが、\u003cruby\u003e日本\u003crt\u003eにほん\u003c/rt\u003e\u003c/ruby\u003eのように\u003cruby\u003e山\u003crt\u003eやま\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eく、\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eできる\u003cruby\u003e土地\u003crt\u003eとち\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e少\u003crt\u003eすく\u003c/rt\u003e\u003c/ruby\u003eない\u003cruby\u003e国\u003crt\u003eくに\u003c/rt\u003e\u003c/ruby\u003eでは、\u003cruby\u003e今後\u003crt\u003eこんご\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e工場\u003crt\u003eこうじょう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eした\u003cruby\u003e作物\u003crt\u003eさくもつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e生産\u003crt\u003eせいさん\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e増\u003crt\u003eふ\u003c/rt\u003e\u003c/ruby\u003eやしていかなければならないでしょう。\u003c/p\u003e\u003cp class=\"annotation-text\"\u003e（注）農薬：ここでは、野菜を虫や病気から守るための薬\u003c/p\u003e",
        "fullTranslation":  "Nhà máy trồng rau là cơ sở sản xuất rau sạch bằng nguồn ánh sáng nhân tạo từ đèn điện. Bên trong nhà máy, người ta xếp chồng nhiều tầng kệ lên nhau và trồng rau trên các tầng kệ đó. Do có thể canh tác trên từng tầng kệ riêng biệt nên trên cùng một diện tích mặt bằng, nhà máy (1) có thể sản xuất sản lượng rau lớn hơn nhiều so với ruộng đồng truyền thống. Tại nhà máy trồng rau, khác với ngoài ruộng, (2) con người có thể tự mình thiết lập môi trường sống cho cây. Chẳng hạn, trong nhà máy, nhiệt độ, độ ẩm và thời gian chiếu sáng cho rau đều có thể điều chỉnh theo ý muốn, giúp rau sinh trưởng ổn định mà không bị ảnh hưởng bởi thời tiết bên ngoài. Thậm chí việc trồng các loại rau mùa hè vào giữa mùa đông cũng hoàn toàn khả thi.\n\nNgoài ra, do côn trùng và sâu bọ khó xâm nhập vào bên trong nhà máy, người ta hoàn toàn không cần phải sử dụng đến thuốc bảo vệ thực vật (thuốc trừ sâu). Vì vậy, rau trồng từ nhà máy rất an toàn và tạo sự an tâm khi thưởng thức. Nghe nói còn có loại rau dinh dưỡng hơn cả rau trồng trên ruộng đồng.\n\nĐối với người trực tiếp sản xuất rau, mô hình này cũng đem lại nhiều tiện ích. Ngoài đồng ruộng, hoa màu được trồng dưới mặt đất nên người nông dân phải khom lưng làm việc suốt thời gian dài dẫn tới đau chân mỏi lưng. Nhưng trong nhà máy, các kệ trồng có thể được bố trí ở độ cao vừa tầm tay làm việc, giúp người lao động thao tác vô cùng nhẹ nhàng, thoải mái.\n\nNhìn qua thì có vẻ toàn là ưu điểm, thế nhưng mô hình này vẫn còn tồn tại những vấn đề. Trước hết, chi phí xây dựng ban đầu của một nhà máy là rất lớn. Tiếp đó, để trồng rau, người ta phải bật hệ thống đèn điện và máy điều hòa nhiệt độ trong suốt thời gian dài nên tiêu tốn rất nhiều tiền điện. Ngoài ra, số lượng chủng loại rau có thể trồng vẫn còn hạn chế và cũng có người nhận xét rằng rau trồng ngoài đồng ruộng tự nhiên có hương vị thơm ngon hơn.\n\nHiện nay, nhà nước, các trường đại học và các doanh nghiệp đang cùng nhau hợp tác nghiên cứu những công nghệ mới nhằm giải quyết các thách thức này. Dù có thể mất nhiều thời gian, nhưng tại một quốc gia nhiều đồi núi và khan hiếm đất canh tác như Nhật Bản, trong tương lai, việc gia tăng sản lượng nông sản bằng các nhà máy trồng rau chắc chắn sẽ là một hướng đi tất yếu.",
        "vocabulary":  [
                           {
                               "word":  "野菜工場",
                               "hiragana":  "やさいこうじょう",
                               "meaning":  "Nhà máy trồng rau (nông nghiệp công nghệ cao)"
                           },
                           {
                               "word":  "棚を重ねる",
                               "hiragana":  "たなをかさねる",
                               "meaning":  "Xếp chồng các tầng kệ"
                           },
                           {
                               "word":  "農薬",
                               "hiragana":  "のうやく",
                               "meaning":  "Thuốc trừ sâu / Thuốc bảo vệ thực vật"
                           },
                           {
                               "word":  "腰を曲げる",
                               "hiragana":  "こしをまげる",
                               "meaning":  "Khom lưng / Cúi lưng"
                           },
                           {
                               "word":  "建設費",
                               "hiragana":  "けんせつひ",
                               "meaning":  "Chi phí xây dựng cơ bản"
                           },
                           {
                               "word":  "土地",
                               "hiragana":  "とち",
                               "meaning":  "Đất đai / Diện tích đất canh tác"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜に影響されずに",
                                 "meaning":  "Không bị ảnh hưởng bởi..."
                             },
                             {
                                 "pattern":  "〜にとっても",
                                 "meaning":  "Đối với... cũng (đem lại lợi ích/ý nghĩa)"
                             },
                             {
                                 "pattern":  "〜ていかなければならない",
                                 "meaning":  "Cần phải tiếp tục thực hiện... trong tương lai"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「多くの野菜を生産することができます」とあるが、どうしてか。",
                              "options":  [
                                              "棚を重ねて使って育てるから",
                                              "電気の光を使って育てるから",
                                              "広い場所で育てているから",
                                              "建物の中で育てているから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "棚を重ねて使って育てるから",
                                                          "meaning":  "Vì rau được trồng trên nhiều tầng kệ xếp chồng lên nhau theo chiều thẳng đứng.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác: \u0027屋内に上下に何段も棚を重ねて作り、そこで野菜を育てます。それぞれの棚で野菜が作れるので、同じ広さの場所でも畑より多くの野菜を生産することができます\u0027."
                                                      },
                                                      {
                                                          "option":  "電気の光を使って育てるから",
                                                          "meaning":  "Vì dùng ánh sáng đèn điện.",
                                                          "analysis":  "Sai: Đèn điện cung cấp ánh sáng quang hợp, không phải yếu tố tăng diện tích canh tác."
                                                      },
                                                      {
                                                          "option":  "広い場所で育てているから",
                                                          "meaning":  "Vì trồng ở nơi rộng lớn.",
                                                          "analysis":  "Sai: Bài viết nêu \u0027cùng diện tích\u0027 (同じ広さの場所)."
                                                      },
                                                      {
                                                          "option":  "建物の中で育てているから",
                                                          "meaning":  "Vì trồng bên trong tòa nhà.",
                                                          "analysis":  "Sai: Chưa nêu được cơ chế nhiều tầng kệ (vertical farming)."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「屋内に上下に何段も棚を重ねて作り、そこで野菜を育てます。それぞれの棚で野菜が作れるので、同じ広さの場所でも畑より多くの野菜を生産することができます。」",
                              "explanation":  "Đáp án 1 đúng. Nhờ thiết kế các tầng kệ xếp chồng nhiều tầng lên nhau trong không gian thẳng đứng, nhà máy tối ưu hóa diện tích và sản xuất được khối lượng rau vượt trội so với diện tích mặt đất tương đương ngoài đồng ruộng."
                          },
                          {
                              "id":  2,
                              "question":  "問2：②「環境も人間が作れます」とあるが、それは、例えばどうすることか。",
                              "options":  [
                                              "野菜がよく育つように、エアコンで適当な温度にする。",
                                              "野菜が虫に食べられないように、棚の高さを工夫する。",
                                              "野菜に太陽の光がよく当たるように、棚の置き方を工夫する。",
                                              "野菜を作る人が働きやすいように、温度をいつも同じにしておく。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "野菜がよく育つように、エアコンで適当な温度にする。",
                                                          "meaning":  "Dùng điều hòa để duy trì nhiệt độ thích hợp giúp rau phát triển tối ưu.",
                                                          "analysis":  "ĐÚNG: Khớp với giải thích: \u0027工場では温度や湿度、野菜が光を浴びる時間も決められるので、外の天気に影響されずに野菜が育ちます\u0027."
                                                      },
                                                      {
                                                          "option":  "野菜が虫に食べられないように、棚の高さを工夫する。",
                                                          "meaning":  "Thay đổi chiều cao kệ để tránh sâu bọ.",
                                                          "analysis":  "Sai: Chiều cao kệ là để người làm đỡ mỏi lưng."
                                                      },
                                                      {
                                                          "option":  "野菜に太陽の光がよく当たるように、棚の置き方を工夫する。",
                                                          "meaning":  "Bố trí kệ để đón ánh nắng mặt trời.",
                                                          "analysis":  "Sai: Nhà máy dùng ánh sáng đèn điện (電気の光), không dùng ánh nắng mặt trời."
                                                      },
                                                      {
                                                          "option":  "野菜を作る人が働きやすいように、温度をいつも同じにしておく。",
                                                          "meaning":  "Giữ nhiệt độ cho người lao động dễ làm việc.",
                                                          "analysis":  "Sai mục tiêu: Kiểm soát môi trường là để rau phát triển tốt."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「野菜工場では、畑と違って環境も人間が作れます。例えば、工場では温度や湿度、野菜が光を浴びる時間も決められるので、外の天気に影響されずに野菜が育ちます。」",
                              "explanation":  "Đáp án 1 đúng. \u0027Con người tự tạo môi trường\u0027 nghĩa là chủ động điều chỉnh toàn bộ nhiệt độ, độ ẩm và thời gian chiếu sáng bằng thiết bị nhân tạo để cây trồng phát triển tốt nhất mà không phụ thuộc vào thời tiết."
                          },
                          {
                              "id":  3,
                              "question":  "問3：工場で作った野菜について、この文章を書いた人はどう言っているか。",
                              "options":  [
                                              "畑で作るより安く作れるが、栄養が少ない。",
                                              "季節に関係なく作れるが、一度にたくさん作れない。",
                                              "安心して食べられるが、作るのにお金がかかる。",
                                              "いろいろな種類があるが、味はあまりよくない。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "畑で作るより安く作れるが、栄養が少ない。",
                                                          "meaning":  "Chi phí rẻ hơn và ít dinh dưỡng.",
                                                          "analysis":  "Sai: Chi phí đắt hơn và có loại giàu dinh dưỡng hơn."
                                                      },
                                                      {
                                                          "option":  "季節に関係なく作れるが、一度にたくさん作れない。",
                                                          "meaning":  "Trồng quanh năm nhưng không làm được nhiều cùng lúc.",
                                                          "analysis":  "Sai: Sản lượng rất nhiều."
                                                      },
                                                      {
                                                          "option":  "安心して食べられるが、作るのにお金がかかる。",
                                                          "meaning":  "Ăn an toàn tuyệt đối (do không có thuốc sâu), nhưng chi phí sản xuất (xây dựng, tiền điện) rất tốn kém.",
                                                          "analysis":  "ĐÚNG: Tổng hợp chuẩn xác 2 khía cạnh: Điểm tốt là không thuốc trừ sâu nên ăn an tâm (\u0027安心して食べられます\u0027), điểm hạn chế là tốn chi phí xây dựng và tiền điện (\u0027建設費がかかります...電気代もかかります\u0027)."
                                                      },
                                                      {
                                                          "option":  "いろいろな種類があるが、味はあまりよくない。",
                                                          "meaning":  "Nhiều chủng loại nhưng vị không ngon.",
                                                          "analysis":  "Sai: Số lượng chủng loại hiện còn ít (\u0027作れる野菜の種類もまだ少ない\u0027)."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「農薬を使う必要がありません。ですから、工場で作られた野菜は安心して食べられます。...まず、工場を作るのにかなりの建設費がかかります。そして、野菜を作るには、電気やエアコンを長時間つけておく必要があるので、電気代もかかります。」",
                              "explanation":  "Đáp án 3 đúng. Đánh giá của tác giả về rau nhà máy là mang lại sự an tâm tuyệt đối cho người tiêu dùng vì không cần thuốc trừ sâu, nhưng rào cản lớn là chi phí đầu tư xây dựng và điện năng vận hành còn rất cao."
                          },
                          {
                              "id":  4,
                              "question":  "問4：野菜工場について、この文章を書いた人はどう考えているか。",
                              "options":  [
                                              "研究に時間がかかるので、今まで以上に畑で育てた野菜の生産を増やす必要がある。",
                                              "いい点もあるが問題が多く、工場以外で野菜を作る新しい技術を考える必要がある。",
                                              "問題はあるがいい点も多く、将来は工場での野菜の生産を増やしていく必要がある。",
                                              "研究が行われる問題が解決してきたので、すぐに野菜工場の建設を始める必要がある。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "研究に時間がかかるので、今まで以上に畑で育てた野菜の生産を増やす必要がある。",
                                                          "meaning":  "Cần tăng sản lượng rau ngoài đồng ruộng.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "いい点もあるが問題が多く、工場以外で野菜を作る新しい技術を考える必要がある。",
                                                          "meaning":  "Nên tìm công nghệ khác ngoài nhà máy.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "問題はあるがいい点も多く、将来は工場での野菜の生産を増やしていく必要がある。",
                                                          "meaning":  "Dù còn tồn tại vấn đề nhưng ưu điểm rất lớn, trong tương lai cần tiếp tục đẩy mạnh sản xuất rau từ nhà máy.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với thông điệp kết bài: \u0027日本のように山が多く、利用できる土地が少ない国では、今後、野菜工場を利用した作物の生産も増やしていかなければならないでしょう\u0027."
                                                      },
                                                      {
                                                          "option":  "研究が行われる問題が解決してきたので、すぐに野菜工場の建設を始める必要がある。",
                                                          "meaning":  "Các vấn đề đã giải quyết xong nên cần xây ngay lập tức.",
                                                          "analysis":  "Sai: Nghiên cứu vẫn đang trong quá trình thực hiện (\u0027研究を行っています。時間がかかるかもしれませんが\u0027)."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「日本のように山が多く、利用できる土地が少ない国では、今後、野菜工場を利用した作物の生産も増やしていかなければならないでしょう。」",
                              "explanation":  "Đáp án 3 đúng. Với đặc thù địa hình Nhật Bản nhiều núi ít đất nông nghiệp, tác giả tin tưởng rằng dù còn thách thức về chi phí nhưng việc mở rộng sản xuất rau từ nhà máy công nghệ cao là định hướng tương lai bắt buộc."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-truongvan-04",
        "level":  "N3",
        "category":  "truongvan",
        "categoryName":  "Trường văn (Bài đọc dài)",
        "lessonNumber":  4,
        "title":  "新幹線の正確さと運転士の技術 (Độ chính xác của Shinkansen và tay nghề lái tàu)",
        "timeLimit":  600,
        "passage":  "\u003cp\u003e\u003cruby\u003e日本\u003crt\u003eにほん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e電車\u003crt\u003eでんしゃ\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e時刻表\u003crt\u003eじこくひょう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e通\u003crt\u003eとお\u003c/rt\u003e\u003c/ruby\u003eりに\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eると\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eいていたが、\u003cruby\u003e初\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめて\u003cruby\u003e新幹線\u003crt\u003eしんかんせん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e乗\u003crt\u003eの\u003c/rt\u003e\u003c/ruby\u003eったときも、\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e着\u003crt\u003eつ\u003c/rt\u003e\u003c/ruby\u003eく\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eがぴったりだったので、\u003cruby\u003e驚\u003crt\u003eおどろ\u003c/rt\u003e\u003c/ruby\u003eいた。\u003cruby\u003e速\u003crt\u003eはや\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e速度\u003crt\u003eそくど\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e長\u003crt\u003eなが\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e距離\u003crt\u003eきょり\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eっているのに、ほかの\u003cruby\u003e電車\u003crt\u003eでんしゃ\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじように\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eれて、①\u003cu\u003e\u003cruby\u003e本当\u003crt\u003eほんとう\u003c/rt\u003e\u003c/ruby\u003eにすごいと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eった\u003c/u\u003e。\u003cruby\u003e何百\u003crt\u003eなんびゃく\u003c/rt\u003e\u003c/ruby\u003eキロもある\u003cruby\u003e長\u003crt\u003eなが\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e距離\u003crt\u003eきょり\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e遅\u003crt\u003eおく\u003c/rt\u003e\u003c/ruby\u003eれたり\u003cruby\u003e早\u003crt\u003eはや\u003c/rt\u003e\u003c/ruby\u003eすぎたりせずに、どうやって\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eっているのだろう。\u003cruby\u003e鉄道\u003crt\u003eてつどう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e会社\u003crt\u003eがいしゃ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e勤\u003crt\u003eつと\u003c/rt\u003e\u003c/ruby\u003eめている\u003cruby\u003e知\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e合\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eいに\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eいてみた。\u003c/p\u003e\u003cp\u003e②\u003cu\u003e\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eいて\u003cruby\u003e驚\u003crt\u003eおどろ\u003c/rt\u003e\u003c/ruby\u003eいた\u003c/u\u003eのだが、\u003cruby\u003e新幹線\u003crt\u003eしんかんせん\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e停車\u003crt\u003eていしゃ\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e到着\u003crt\u003eとうちゃく\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e出発\u003crt\u003eしゅっぱつ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eだけではなく、\u003cruby\u003e停車\u003crt\u003eていしゃ\u003c/rt\u003e\u003c/ruby\u003eしない\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e通\u003crt\u003eとお\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e過\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eぎる\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eも、８\u003cruby\u003e時\u003crt\u003eじ\u003c/rt\u003e\u003c/ruby\u003e５\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003e１５\u003cruby\u003e秒\u003crt\u003eびょう\u003c/rt\u003e\u003c/ruby\u003eや８\u003cruby\u003e時\u003crt\u003eじ\u003c/rt\u003e\u003c/ruby\u003e５\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003e３０\u003cruby\u003e秒\u003crt\u003eびょう\u003c/rt\u003e\u003c/ruby\u003eのように、１５\u003cruby\u003e秒\u003crt\u003eびょう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e単位\u003crt\u003eたんい\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e決\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eまっているのだそうだ。\u003cruby\u003e運転士\u003crt\u003eうんてんし\u003c/rt\u003e\u003c/ruby\u003eは、その\u003cruby\u003e細\u003crt\u003eこま\u003c/rt\u003e\u003c/ruby\u003eかく\u003cruby\u003e決\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eめられた\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e守\u003crt\u003eまも\u003c/rt\u003e\u003c/ruby\u003eるため、いつも③\u003cu\u003e\u003cruby\u003e速度\u003crt\u003eそくど\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e考\u003crt\u003eかんが\u003c/rt\u003e\u003c/ruby\u003eえながら\u003cruby\u003e運転\u003crt\u003eうんてん\u003c/rt\u003e\u003c/ruby\u003eしている\u003c/u\u003e。\u003cruby\u003e停車駅\u003crt\u003eていしゃえき\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e数\u003crt\u003eすう\u003c/rt\u003e\u003c/ruby\u003eキロメートル\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eからホームに\u003cruby\u003e入\u003crt\u003eはい\u003c/rt\u003e\u003c/ruby\u003eるまでは、コンピューターが\u003cruby\u003e速度\u003crt\u003eそくど\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e決\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eめて\u003cruby\u003e運転\u003crt\u003eうんてん\u003c/rt\u003e\u003c/ruby\u003eするが、それ\u003cruby\u003e以外\u003crt\u003eいがい\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e運転士\u003crt\u003eうんてんし\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e運転\u003crt\u003eうんてん\u003c/rt\u003e\u003c/ruby\u003eする。\u003cruby\u003e次\u003crt\u003eつぎ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e着\u003crt\u003eつ\u003c/rt\u003e\u003c/ruby\u003eくまでの\u003cruby\u003e残\u003crt\u003eのこ\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e距離\u003crt\u003eきょり\u003c/rt\u003e\u003c/ruby\u003eをいつも\u003cruby\u003e意識\u003crt\u003eいしき\u003c/rt\u003e\u003c/ruby\u003eし、\u003cruby\u003e頭\u003crt\u003eあたま\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e中\u003crt\u003eなか\u003c/rt\u003e\u003c/ruby\u003eでいちばん\u003cruby\u003e適当\u003crt\u003eてきとう\u003c/rt\u003e\u003c/ruby\u003eな\u003cruby\u003e速度\u003crt\u003eそくど\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e計算\u003crt\u003eけいさん\u003c/rt\u003e\u003c/ruby\u003eして\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eらせているのだそうだ。\u003cruby\u003e最後\u003crt\u003eさいご\u003c/rt\u003e\u003c/ruby\u003eにホームの\u003cruby\u003e決\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eまった\u003cruby\u003e位置\u003crt\u003eいち\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e電車\u003crt\u003eでんしゃ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e止\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eめるのも、\u003cruby\u003e運転士\u003crt\u003eうんてんし\u003c/rt\u003e\u003c/ruby\u003eだ。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e運転士\u003crt\u003eうんてんし\u003c/rt\u003e\u003c/ruby\u003eになるためには、\u003cruby\u003e厳\u003crt\u003eきび\u003c/rt\u003e\u003c/ruby\u003eしいトレーニングが\u003cruby\u003e必要\u003crt\u003eひつよう\u003c/rt\u003e\u003c/ruby\u003eで、\u003cruby\u003e特\u003crt\u003eとく\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e距離\u003crt\u003eきょり\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e適当\u003crt\u003eてきとう\u003c/rt\u003e\u003c/ruby\u003eな\u003cruby\u003e速度\u003crt\u003eそくど\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e計算\u003crt\u003eけいさん\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e訓練\u003crt\u003eくんれん\u003c/rt\u003e\u003c/ruby\u003eをしっかり\u003cruby\u003e受\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eけなければならないそうだ。\u003cruby\u003e新幹線\u003crt\u003eしんかんせん\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e時刻表\u003crt\u003eじこくひょう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e通\u003crt\u003eとお\u003c/rt\u003e\u003c/ruby\u003eりに\u003cruby\u003e走\u003crt\u003eはし\u003c/rt\u003e\u003c/ruby\u003eれるのは、\u003cruby\u003e運転士\u003crt\u003eうんてんし\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e厳\u003crt\u003eきび\u003c/rt\u003e\u003c/ruby\u003eしいトレーニングのおかげなのだ。この\u003cruby\u003e話\u003crt\u003eはなし\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eいてから、\u003cruby\u003e新幹線\u003crt\u003eしんかんせん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e乗\u003crt\u003eの\u003c/rt\u003e\u003c/ruby\u003eると、\u003cruby\u003e速度\u003crt\u003eそくど\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e微妙\u003crt\u003eびみょう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e変\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eわるたびに、「ああ、\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e運転士\u003crt\u003eうんてんし\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e適当\u003crt\u003eてきとう\u003c/rt\u003e\u003c/ruby\u003eな\u003cruby\u003e速度\u003crt\u003eそくど\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e計算\u003crt\u003eけいさん\u003c/rt\u003e\u003c/ruby\u003eして、\u003cruby\u003e速度\u003crt\u003eそくど\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e変\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eえたんだ。」と\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eい、\u003cruby\u003e旅\u003crt\u003eたび\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e以前\u003crt\u003eいぜん\u003c/rt\u003e\u003c/ruby\u003eより\u003cruby\u003e楽\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eしめるようになった。\u003c/p\u003e",
        "fullTranslation":  "Tôi từng nghe nói tàu điện ở Nhật Bản luôn chạy chuẩn theo lịch trình giờ giấc, nhưng lần đầu tiên được bước lên tàu cao tốc Shinkansen, tôi vẫn vô cùng sửng sốt khi thấy tàu cập ga với độ chính xác đến từng giây. Dù chạy với vận tốc cực nhanh trên một quãng đường rất dài, tàu vẫn vận hành chính xác giờ giấc hệt như các tuyến tàu điện nội đô thông thường, khiến tôi (1) cảm thấy thực sự quá đỗi khâm phục. Làm thế nào mà trên quãng đường dài hàng trăm kilômét, tàu lại không hề bị trễ hay đến sớm dù chỉ một chút? Tôi đã đem thắc mắc này đi hỏi một người quen đang làm việc tại công ty đường sắt.\n\n(2) Khi nghe câu trả lời, tôi đã vô cùng ngạc nhiên: Đối với tàu Shinkansen, không chỉ giờ đến và giờ xuất phát tại các ga dừng đón khách, mà ngay cả thời điểm tàu chạy lướt qua các ga không dừng cũng được quy định chi tiết tới từng đơn vị 15 giây (ví dụ đúng 8 giờ 5 phút 15 giây hay 8 giờ 5 phút 30 giây). Để tuân thủ biểu đồ giờ giấc chi tiết đến từng giây đó, người lái tàu phải luôn (3) tính toán tốc độ trong lúc điều khiển. Ngoại trừ đoạn vài kilômét trước khi vào sân ga được máy tính hỗ trợ kiểm soát tốc độ, toàn bộ quãng đường còn lại đều do bàn tay người lái tàu trực tiếp điều khiển. Người lái tàu phải luôn ý thức được thời gian còn lại và cự ly tới ga tiếp theo, từ đó liên tục tính toán trong đầu vận tốc tối ưu nhất để vận hành đoàn tàu. Thao tác hãm phanh để dừng tàu chuẩn xác tại vị trí đã định trên sân ga cũng hoàn toàn do tài xế đảm nhiệm.\n\nĐể trở thành lái tàu Shinkansen, họ phải trải qua quá trình huấn luyện vô cùng khắt khe, đặc biệt là bài tập rèn luyện kỹ năng nhẩm tính tốc độ thích hợp dựa trên cự ly và thời gian. Tàu Shinkansen có thể vận hành chuẩn xác theo từng giây như vậy chính là nhờ vào sự khổ luyện của các tài xế. Kể từ sau khi biết câu chuyện này, mỗi lần bước lên tàu Shinkansen, mỗi khi cảm nhận tốc độ tàu thay đổi một chút, tôi lại tự nhủ: \u0027À, bác tài vừa tính toán lại tốc độ thích hợp và điều chỉnh tay ga đấy\u0027, và chuyến đi trở nên thú vị hơn trước rất nhiều.",
        "vocabulary":  [
                           {
                               "word":  "時刻表",
                               "hiragana":  "じこくひょう",
                               "meaning":  "Bảng giờ tàu / Lịch trình chạy tàu"
                           },
                           {
                               "word":  "新幹線",
                               "hiragana":  "しんかんせん",
                               "meaning":  "Tàu cao tốc Shinkansen"
                           },
                           {
                               "word":  "停車駅",
                               "hiragana":  "ていしゃえき",
                               "meaning":  "Ga dừng đỗ đón/trả khách"
                           },
                           {
                               "word":  "通り過ぎる",
                               "hiragana":  "とおりすぎる",
                               "meaning":  "Chạy vượt qua / Lướt qua không dừng"
                           },
                           {
                               "word":  "運転士",
                               "hiragana":  "うんてんし",
                               "meaning":  "Người lái tàu / Tài xế đoàn tàu"
                           },
                           {
                               "word":  "微妙に",
                               "hiragana":  "びみょうに",
                               "meaning":  "Một cách tinh tế / Chút xíu khó nhận thấy"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜通りに (〜とおりに)",
                                 "meaning":  "Đúng theo... / Y như (lịch trình, dự định)"
                             },
                             {
                                 "pattern":  "〜だけでなく〜も",
                                 "meaning":  "Không chỉ... mà ngay cả..."
                             },
                             {
                                 "pattern":  "〜のおかげで / 〜のおかげだ",
                                 "meaning":  "Nhờ có... (biết ơn, mang lại kết quả tốt)"
                             },
                             {
                                 "pattern":  "〜たびに",
                                 "meaning":  "Mỗi lần... thì lại..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「本当にすごいと思った」とあるが、何をすごいと思ったのか。",
                              "options":  [
                                              "新幹線以外の電車が時間ぴったりに走っていること",
                                              "新幹線以外の電車がかなり長い距離を走っていること",
                                              "新幹線が時間ぴったりに走っていること",
                                              "新幹線が速い速度で長い距離を走っていること"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "新幹線以外の電車が時間ぴったりに走っていること",
                                                          "meaning":  "Tàu điện thường chạy đúng giờ.",
                                                          "analysis":  "Sai: Tác giả ấn tượng với tàu Shinkansen."
                                                      },
                                                      {
                                                          "option":  "新幹線以外の電車がかなり長い距離を走っていること",
                                                          "meaning":  "Tàu điện thường chạy quãng đường dài.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "新幹線が時間ぴったりに走っていること",
                                                          "meaning":  "Tàu Shinkansen chạy chuẩn xác giờ giấc từng giây dù đi cự ly dài và tốc độ cao.",
                                                          "analysis":  "ĐÚNG: Khớp với câu mở đầu: \u0027初めて新幹線に乗ったときも、駅に着く時間がぴったりだったので、驚いた。速い速度で長い距離を走っているのに、ほかの電車と同じように走れて、本当にすごいと思った\u0027."
                                                      },
                                                      {
                                                          "option":  "新幹線が速い速度で長い距離を走っていること",
                                                          "meaning":  "Tàu Shinkansen chạy tốc độ nhanh trên đường dài.",
                                                          "analysis":  "Sai: Chưa nêu được điểm mấu chốt là chạy đúng giờ tuyệt đối (時間ぴったり)."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「初めて新幹線に乗ったときも、駅に着く時間がぴったりだったので、驚いた。速い速度で長い距離を走っているのに、ほかの電車と同じように走れて、本当にすごいと思った。」",
                              "explanation":  "Đáp án 3 đúng. Điều khiến tác giả khâm phục chính là việc tàu Shinkansen dù di chuyển với vận tốc cực lớn trên hành trình hàng trăm km nhưng vẫn cập ga chính xác từng giây như những chuyến tàu ngắn trong thành phố."
                          },
                          {
                              "id":  2,
                              "question":  "問2：②「聞いて驚いた」とあるが、何に驚いたのか。",
                              "options":  [
                                              "到着、出発時間、駅を通り過ぎる時間が非常に細かく決められていること",
                                              "到着、出発時間、駅を通り過ぎる時間が駅の時刻表に書かれていること",
                                              "到着、出発時間、駅を通り過ぎる時間を知り合いが決めていたこと",
                                              "到着、出発時間、駅を通り過ぎる時間をコンピューターが計算していたこと"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "到着、出発時間、駅を通り過ぎる時間が非常に細かく決められていること",
                                                          "meaning":  "Giờ đến, giờ đi và thời điểm chạy lướt qua các ga không dừng được quy định vô cùng chi tiết (tới đơn vị 15 giây).",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với giải thích: \u0027新幹線は、停車する駅の到着時間、出発時間だけではなく、停車しない駅を通り過ぎる時間も... 15秒単位で決まっているのだそうだ\u0027."
                                                      },
                                                      {
                                                          "option":  "到着、出発時間、駅を通り過ぎる時間が駅の時刻表に書かれていること",
                                                          "meaning":  "Các mốc thời gian được ghi trên bảng giờ tàu ở nhà ga.",
                                                          "analysis":  "Sai: Giờ chạy qua ga không dừng là biểu đồ kỹ thuật nội bộ, không niêm yết công khai cho khách xem."
                                                      },
                                                      {
                                                          "option":  "到着、出発時間、駅を通り過ぎる時間を知り合いが決めていたこと",
                                                          "meaning":  "Người quen của tác giả là người quyết định các mốc giờ.",
                                                          "analysis":  "Sai: Người quen chỉ là người giải thích thông tin."
                                                      },
                                                      {
                                                          "option":  "到着、出発時間、駅を通り過ぎる時間をコンピューターが計算していたこと",
                                                          "meaning":  "Máy tính tính toán toàn bộ thời gian.",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「聞いて驚いたのだが、新幹線は、停車する駅の到着時間、出発時間だけではなく、停車しない駅を通り過ぎる時間も、8時5分15秒や8時5分30秒のように、15秒単位で決まっているのだそうだ。」",
                              "explanation":  "Đáp án 1 đúng. Tác giả kinh ngạc khi biết quy chuẩn vận hành của Shinkansen chi tiết đến mức ấn định chính xác cả từng giây tàu chạy lướt qua các nhà ga không dừng trên tuyến."
                          },
                          {
                              "id":  3,
                              "question":  "問3：③「速度を考えながら運転している」とあるが、それができるようになるためにどんな訓練を受けるか。",
                              "options":  [
                                              "距離と時間から、頭の中でちょうどよい速度を計算する訓練",
                                              "コンピューターで、距離と時間から適当な速度を計算する訓練",
                                              "コンピューターが計算して決めた速度を守って、時刻表の通りに運転する訓練",
                                              "正しい位置に止められるように、ホームに入るまでの速度を計算して運転する訓練"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "距離と時間から、頭の中でちょうどよい速度を計算する訓練",
                                                          "meaning":  "Huấn luyện khả năng nhẩm tính tốc độ chuẩn xác nhất trong đầu dựa trên thời gian và cự ly còn lại.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với mô tả huấn luyện: \u0027特に距離と時間から適当な速度を計算する訓練をしっかり受けなければならないそうだ... 頭の中でいちばん適当な速度を計算して走らせている\u0027."
                                                      },
                                                      {
                                                          "option":  "コンピューターで、距離と時間から適当な速度を計算する訓練",
                                                          "meaning":  "Huấn luyện dùng máy tính tính toán.",
                                                          "analysis":  "Sai: Tài xế tự tính nhẩm trong đầu khi lái (\u0027頭の中で...計算して\u0027)."
                                                      },
                                                      {
                                                          "option":  "コンピューターが計算して決めた速度を守って、時刻表の通りに運転する訓練",
                                                          "meaning":  "Huấn luyện tuân thủ tốc độ máy tính đưa ra.",
                                                          "analysis":  "Sai: Máy tính chỉ can thiệp vài km trước sân ga, còn lại do lái tàu tự chủ."
                                                      },
                                                      {
                                                          "option":  "正しい位置に止められるように、ホームに入るまでの速度を計算して運転する訓練",
                                                          "meaning":  "Tính tốc độ vào sân ga.",
                                                          "analysis":  "Sai: Không bao quát toàn bộ hành trình."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「次の駅に着くまでの残り時間と距離をいつも意識し、頭の中でいちばん適当な速度を計算して走らせているのだそうだ。...特に距離と時間から適当な速度を計算する訓練をしっかり受けなければならないそうだ。」",
                              "explanation":  "Đáp án 1 đúng. Kỹ năng cốt lõi được đào tạo nghiêm ngặt là khả năng nhẩm tính trong đầu liên tục để điều chỉnh vận tốc sao cho đoàn tàu tới từng mốc tọa độ đúng từng giây."
                          },
                          {
                              "id":  4,
                              "question":  "問4：この文章を書いた人が最も言いたいことは何ですか。",
                              "options":  [
                                              "新幹線を時間の通りに運転することができない運転士には、厳しいトレーニングが必要である。",
                                              "コンピューターによる正しい速度計算が、新幹線を時刻表の通りに走らせているのだ。",
                                              "厳しい訓練を受けた運転士が速度計算をしているから、新幹線は時刻表の通りに走れるのだ。",
                                              "ほかの電車よりも微妙な速度の変化を楽しむことができるのが、日本の新幹線なのである。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "新幹線を時間の通りに運転することができない運転士には、厳しいトレーニングが必要である。",
                                                          "meaning":  "Cần huấn luyện người không lái đúng giờ.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "コンピューターによる正しい速度計算が、新幹線を時刻表の通りに走らせているのだ。",
                                                          "meaning":  "Máy tính giúp tàu chạy đúng giờ.",
                                                          "analysis":  "Sai: Yếu tố quyết định là tay nghề tài xế."
                                                      },
                                                      {
                                                          "option":  "厳しい訓練を受けた運転士が速度計算をしているから、新幹線は時刻表の通りに走れるのだ。",
                                                          "meaning":  "Chính nhờ những người lái tàu được trải qua đào tạo khắt khe liên tục tính toán tốc độ mà Shinkansen mới có thể vận hành chuẩn xác giờ giấc từng giây.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với thông điệp cốt lõi: \u0027新幹線が時刻表の通りに走れるのは、運転士の厳しいトレーニングのおかげなのだ\u0027."
                                                      },
                                                      {
                                                          "option":  "ほかの電車よりも微妙な速度の変化を楽しむことができるのが、日本の新幹線なのである。",
                                                          "meaning":  "Tận hưởng sự thay đổi tốc độ là nét đặc sắc nhất của Shinkansen.",
                                                          "analysis":  "Sai: Đây chỉ là cảm nhận cá nhân thêm của tác giả sau khi hiểu chuyện."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「新幹線が時刻表の通りに走れるのは、運転士の厳しいトレーニングのおかげなのだ。」",
                              "explanation":  "Đáp án 3 đúng. Thông điệp chính mà bài viết muốn tôn vinh là sự chính xác tuyệt đối của Shinkansen không phải phép màu tự động hóa mà đến từ trình độ chuyên môn, sự tập trung cao độ và công sức khổ luyện của đội ngũ lái tàu."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-truongvan-05",
        "level":  "N3",
        "category":  "truongvan",
        "categoryName":  "Trường văn (Bài đọc dài)",
        "lessonNumber":  5,
        "title":  "引っ越しと思い出の品 (Chuyển nhà và những kỷ vật thời gian)",
        "timeLimit":  600,
        "passage":  "\u003cp\u003e\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eたち\u003cruby\u003e夫婦\u003crt\u003eふうふ\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e明日\u003crt\u003eあす\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e引\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eっ\u003cruby\u003e越\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eしの\u003cruby\u003e日\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e迎\u003crt\u003eむか\u003c/rt\u003e\u003c/ruby\u003eえる。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e今度\u003crt\u003eこんど\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e住\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eむ\u003cruby\u003e息子\u003crt\u003eむすこ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e広\u003crt\u003eひろ\u003c/rt\u003e\u003c/ruby\u003eくないので、\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003eはできるだけ\u003cruby\u003e減\u003crt\u003eへ\u003c/rt\u003e\u003c/ruby\u003eらすつもりで\u003cruby\u003e片付\u003crt\u003eかたづ\u003c/rt\u003e\u003c/ruby\u003eけ\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめたが、これが\u003cruby\u003e意外\u003crt\u003eいがい\u003c/rt\u003e\u003c/ruby\u003eに①\u003cu\u003e\u003cruby\u003e難\u003crt\u003eむずか\u003c/rt\u003e\u003c/ruby\u003eしかった\u003c/u\u003e。\u003cruby\u003e自分\u003crt\u003eじぶん\u003c/rt\u003e\u003c/ruby\u003eたちの\u003cruby\u003e着\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eなくなった\u003cruby\u003e服\u003crt\u003eふく\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e古\u003crt\u003eふる\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e靴\u003crt\u003eくつ\u003c/rt\u003e\u003c/ruby\u003eなどはすぐに\u003cruby\u003e捨\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eてられるのだが、\u003cruby\u003e押\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e入\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eれの\u003cruby\u003e奥\u003crt\u003eおく\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e段\u003crt\u003eだん\u003c/rt\u003e\u003c/ruby\u003eボール\u003cruby\u003e箱\u003crt\u003eばこ\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e次々\u003crt\u003eつぎつぎ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e出\u003crt\u003eで\u003c/rt\u003e\u003c/ruby\u003eてくる\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003eはそうではない。「これは\u003cruby\u003e何\u003crt\u003eなに\u003c/rt\u003e\u003c/ruby\u003eだろう。」「それはあの\u003cruby\u003e時\u003crt\u003eとき\u003c/rt\u003e\u003c/ruby\u003eの。」などと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e出\u003crt\u003eで\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e語\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003eっているうちに、\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eがたってしまう。そして、\u003cruby\u003e捨\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eてられなくなる。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e例\u003crt\u003eたと\u003c/rt\u003e\u003c/ruby\u003eえば、\u003cruby\u003e小\u003crt\u003eちい\u003c/rt\u003e\u003c/ruby\u003eさな\u003cruby\u003e黄色\u003crt\u003eきいろ\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e靴\u003crt\u003eくつ\u003c/rt\u003e\u003c/ruby\u003e。これは\u003cruby\u003e息子\u003crt\u003eむすこ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e初\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめて\u003cruby\u003e履\u003crt\u003eは\u003c/rt\u003e\u003c/ruby\u003eいた\u003cruby\u003e靴\u003crt\u003eくつ\u003c/rt\u003e\u003c/ruby\u003eだ。\u003cruby\u003e息子\u003crt\u003eむすこ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e小\u003crt\u003eちい\u003c/rt\u003e\u003c/ruby\u003eさかったころを\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e出\u003crt\u003eだ\u003c/rt\u003e\u003c/ruby\u003eして\u003cruby\u003e本当\u003crt\u003eほんとう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e懐\u003crt\u003eなつ\u003c/rt\u003e\u003c/ruby\u003eかしくなる。ついこの\u003cruby\u003e間\u003crt\u003eあいだ\u003c/rt\u003e\u003c/ruby\u003eまで\u003cruby\u003e子供\u003crt\u003eこども\u003c/rt\u003e\u003c/ruby\u003eだった\u003cruby\u003e息子\u003crt\u003eむすこ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e新\u003crt\u003eあたら\u003c/rt\u003e\u003c/ruby\u003eしい\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e建\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eてて、\u003cruby\u003e一緒\u003crt\u003eいっしょ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e住\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eむと\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eってくれた。\u003cruby\u003e優\u003crt\u003eやさ\u003c/rt\u003e\u003c/ruby\u003eしい\u003cruby\u003e子\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e育\u003crt\u003eそだ\u003c/rt\u003e\u003c/ruby\u003eってくれたとうれしくなったり、\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e過\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eぎるのがあまりに\u003cruby\u003e早\u003crt\u003eはや\u003c/rt\u003e\u003c/ruby\u003eくて\u003cruby\u003e少\u003crt\u003eすこ\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e悲\u003crt\u003eかな\u003c/rt\u003e\u003c/ruby\u003eしくなったり・・・。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e家族\u003crt\u003eかぞく\u003c/rt\u003e\u003c/ruby\u003eのアルバムや\u003cruby\u003e古\u003crt\u003eふる\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e手紙\u003crt\u003eてがみ\u003c/rt\u003e\u003c/ruby\u003eなどが\u003cruby\u003e出\u003crt\u003eで\u003c/rt\u003e\u003c/ruby\u003eてきても、②\u003cu\u003e\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじことになる\u003c/u\u003e。\u003cruby\u003e片付\u003crt\u003eかたづ\u003c/rt\u003e\u003c/ruby\u003eけは\u003cruby\u003e引\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eっ\u003cruby\u003e越\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eしの１\u003cruby\u003e週間\u003crt\u003eしゅうかん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eになっても\u003cruby\u003e終\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eわらず、\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003eもほとんど\u003cruby\u003e減\u003crt\u003eへ\u003c/rt\u003e\u003c/ruby\u003eらせなかった。\u003c/p\u003e\u003cp\u003eでも、これではだめだということになり、\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eたちは③\u003cu\u003e\u003cruby\u003e考\u003crt\u003eかんが\u003c/rt\u003e\u003c/ruby\u003eえをまったく\u003cruby\u003e変\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eえることにした\u003c/u\u003e。\u003cruby\u003e今度\u003crt\u003eこんど\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e広\u003crt\u003eひろ\u003c/rt\u003e\u003c/ruby\u003eくないし、\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eたちにとっては\u003cruby\u003e大事\u003crt\u003eだいじ\u003c/rt\u003e\u003c/ruby\u003eな\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003eでも\u003cruby\u003e息子\u003crt\u003eむすこ\u003c/rt\u003e\u003c/ruby\u003eたちにとってはそうではないだろう。それで、\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e出\u003crt\u003eで\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003eは、アルバム\u003cruby\u003e以外\u003crt\u003eいがい\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e全部\u003crt\u003eぜんぶ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e捨\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eてることにした。\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eたちの\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e出\u003crt\u003eで\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e段\u003crt\u003eだん\u003c/rt\u003e\u003c/ruby\u003eボール\u003cruby\u003e箱\u003crt\u003eばこ\u003c/rt\u003e\u003c/ruby\u003eではなく、\u003cruby\u003e心\u003crt\u003eこころ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e中\u003crt\u003eなか\u003c/rt\u003e\u003c/ruby\u003eにしまっておけばいいのだ。\u003c/p\u003e\u003cp\u003eしかし、この３\u003cruby\u003e週間\u003crt\u003eしゅうかん\u003c/rt\u003e\u003c/ruby\u003eはとても\u003cruby\u003e楽\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eしかった。\u003cruby\u003e歩\u003crt\u003eある\u003c/rt\u003e\u003c/ruby\u003eいてきた\u003cruby\u003e人生\u003crt\u003eじんせい\u003c/rt\u003e\u003c/ruby\u003eをもう\u003cruby\u003e一度\u003crt\u003eいちど\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e出\u003crt\u003eだ\u003c/rt\u003e\u003c/ruby\u003eすことができたからである。そして、\u003cruby\u003e持\u003crt\u003eも\u003c/rt\u003e\u003c/ruby\u003eち\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e整理\u003crt\u003eせいり\u003c/rt\u003e\u003c/ruby\u003eもすることができた。\u003cruby\u003e頼\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eんでおいた\u003cruby\u003e引\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eっ\u003cruby\u003e越\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eしのトラックは、\u003cruby\u003e少\u003crt\u003eすこ\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e大\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eきすぎたかもしれないが、それはそれでいい。\u003c/p\u003e",
        "fullTranslation":  "Ngày mai là ngày hai vợ chồng chúng tôi chính thức chuyển nhà.\n\nVì căn nhà mới của con trai không được rộng rãi cho lắm nên chúng tôi bắt đầu dọn dẹp với dự định sẽ cắt giảm đồ đạc càng nhiều càng tốt. Thế nhưng việc này (1) khó khăn ngoài sức tưởng tượng. Quần áo không còn mặc hay giày dép cũ của hai vợ chồng thì có thể vứt đi ngay được, nhưng những món đồ lần lượt xuất hiện từ các thùng các-tông dưới đáy tủ âm tường thì lại không đơn giản như thế. Hai vợ chồng cứ mải mê nhắc lại những kỷ niệm xưa: \u0027Cái này là gì ấy nhỉ?\u0027, \u0027À, cái đó là hồi ấy đấy!\u0027... khiến thời gian trôi qua vùn vụt. Và rồi, chúng tôi lại không nỡ vứt đi.\n\nChẳng hạn như đôi giày nhỏ màu vàng. Đây là đôi giày đầu tiên mà con trai tôi tập đi. Nhìn lại đôi giày nhỏ, tôi bồi hồi nhớ lại quãng thời gian con còn thơ bé. Đứa con trai mới hôm nào còn là một đứa trẻ, giờ đã tự xây được ngôi nhà mới khang trang và ngỏ lời đón bố mẹ về ở chung. Vừa cảm thấy hạnh phúc vì con đã lớn khôn thành một đứa trẻ hiếu thảo, tôi lại vừa cảm thấy man mác buồn vì thời gian trôi qua quá đỗi nhanh chóng...\n\nNgay cả khi lôi ra những cuốn album gia đình hay những lá thư cũ, (2) tình cảnh cũng lặp lại y như vậy. Việc dọn dẹp đồ đạc cho đến tận một tuần trước ngày chuyển nhà vẫn chưa đâu vào đâu và số lượng đồ đạc hầu như chẳng giảm được là bao.\n\nThế nhưng, nhận thấy cứ như thế này thì không ổn, chúng tôi (3) quyết định thay đổi hoàn toàn suy nghĩ. Nhà mới không rộng, vả lại những món đồ đối với chúng tôi là quý giá nhưng đối với vợ chồng con trai có lẽ lại không như vậy. Vì thế, chúng tôi quyết định vứt bỏ toàn bộ những kỷ vật xưa, ngoại trừ album ảnh gia đình. Kỷ niệm của đời người đâu cần cất trong những thùng các-tông chật chội, chỉ cần cất giữ trọn vẹn trong sâu thẳm trái tim là đủ.\n\nThế nhưng, 3 tuần chuẩn bị vừa qua thực sự là khoảng thời gian vô cùng vui vẻ và ý nghĩa. Bởi lẽ, chúng tôi đã có dịp cùng nhau nhìn lại trọn vẹn chặng đường đời đã đi qua, đồng thời cũng sắp xếp gọn gàng lại hành trang sống của mình. Chiếc xe tải chuyển nhà đã đặt trước có lẽ hơi quá to so với số đồ ít ỏi còn lại, nhưng thôi như thế cũng chẳng sao.",
        "vocabulary":  [
                           {
                               "word":  "引っ越し",
                               "hiragana":  "ひっこし",
                               "meaning":  "Chuyển nhà"
                           },
                           {
                               "word":  "押し入れ",
                               "hiragana":  "おしいれ",
                               "meaning":  "Tủ âm tường kiểu Nhật"
                           },
                           {
                               "word":  "段ボール箱",
                               "hiragana":  "だんぼーるばこ",
                               "meaning":  "Thùng các-tông"
                           },
                           {
                               "word":  "懐かしい",
                               "hiragana":  "なつかしい",
                               "meaning":  "Hoài niệm / Nhớ nhung bồi hồi"
                           },
                           {
                               "word":  "しまう",
                               "hiragana":  "しまう",
                               "meaning":  "Cất giữ / Thu dọn vào nơi an toàn"
                           },
                           {
                               "word":  "整理",
                               "hiragana":  "せいり",
                               "meaning":  "Thu dọn / Sắp xếp ngăn nắp"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜ているうちに",
                                 "meaning":  "Trong lúc đang mải làm gì thì (thời gian trôi qua / biến đổi)"
                             },
                             {
                                 "pattern":  "〜ことになる",
                                 "meaning":  "Rơi vào tình trạng... / Dẫn đến kết cục..."
                             },
                             {
                                 "pattern":  "〜ことにする",
                                 "meaning":  "Quyết định làm gì đó (quyết định chủ quan)"
                             },
                             {
                                 "pattern":  "〜ばいい",
                                 "meaning":  "Chỉ cần... là được"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「難しかった」とあるが、何が難しかったのか。",
                              "options":  [
                                              "息子の家に引っ越しすると決めること",
                                              "引っ越しのために物をできるだけ減らすこと",
                                              "押し入れに入っていた物を次々に出すこと",
                                              "しまっておいた物が何だったか思い出すこと"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "息子の家に引っ越しすると決めること",
                                                          "meaning":  "Quyết định chuyển về ở nhà con trai.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "引っ越しのために物をできるだけ減らすこと",
                                                          "meaning":  "Việc giảm bớt đồ đạc nhiều nhất có thể để chuẩn bị chuyển nhà.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với đoạn đầu: \u0027物はできるだけ減らすつもりで片付け始めたが、これが意外に難しかった\u0027."
                                                      },
                                                      {
                                                          "option":  "押し入れに入っていた物を次々に出すこと",
                                                          "meaning":  "Lôi đồ trong tủ ra ngoài.",
                                                          "analysis":  "Sai: Lôi đồ ra rất dễ, cái khó là quyết định vứt bỏ."
                                                      },
                                                      {
                                                          "option":  "しまっておいた物が何だったか思い出すこと",
                                                          "meaning":  "Nhớ lại món đồ cất giữ là gì.",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「今度住む息子の家は広くないので、物はできるだけ減らすつもりで片付け始めたが、これが意外に①難しかった。」",
                              "explanation":  "Đáp án 2 đúng. Việc khó khăn ngoài dự tính chính là việc thanh lọc và giảm bớt đồ đạc, bởi vì món đồ nào trong quá khứ cũng gắn liền với những kỷ niệm sâu sắc khiến hai vợ chồng không nỡ vứt bỏ."
                          },
                          {
                              "id":  2,
                              "question":  "問2：②「同じことになる」とあるが、どうなるのか。",
                              "options":  [
                                              "片付けに時間がかかってしまい、思い出が十分に語り合えなくなる。",
                                              "時間のたつのが早く、片付けが間に合わなくなりそうで、嫌になる。",
                                              "いろいろと思い出話をしてしまい、結局、捨てることができなくなる。",
                                              "今住んでいる家の良さをあれこれ話してしまい、悲しい気持ちになる。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "片付けに時間がかかってしまい、思い出が十分に語り合えなくなる。",
                                                          "meaning":  "Mất thời gian dọn dẹp nên không nói chuyện kỷ niệm được.",
                                                          "analysis":  "Sai: Hai vợ chồng mải nói chuyện kỷ niệm quá nhiều."
                                                      },
                                                      {
                                                          "option":  "時間のたつのが早く、片付けが間に合わなくなりそうで、嫌になる。",
                                                          "meaning":  "Thấy ghét vì không kịp dọn.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "いろいろと思い出話をしてしまい、結局、捨てることができなくなる。",
                                                          "meaning":  "Mải mê ôn lại bao câu chuyện kỷ niệm xưa cũ và kết cục là lại không thể vứt bỏ món đồ nào.",
                                                          "analysis":  "ĐÚNG: Tình trạng lặp lại giống như khi nhìn đôi giày nhỏ: \u0027思い出を語っているうちに、時間がたってしまう。そして、捨てられなくなる... 家族のアルバムや古い手紙などが出てきても、同じことになる\u0027."
                                                      },
                                                      {
                                                          "option":  "今住んでいる家の良さをあれこれ話してしまい、悲しい気持ちになる。",
                                                          "meaning":  "Nói về điểm tốt của nhà cũ rồi thấy buồn.",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「思い出を語っているうちに、時間がたってしまう。そして、捨てられなくなる。...家族のアルバムや古い手紙などが出てきても、②同じことになる。」",
                              "explanation":  "Đáp án 3 đúng. \u0027Tình cảnh lặp lại tương tự\u0027 nghĩa là hễ cứ nhìn thấy đồ vật kỷ niệm (như album, thư từ) là hai vợ chồng lại ngồi ôn lại kỷ niệm cũ, thời gian trôi qua mà đồ đạc vẫn không vứt đi được món nào."
                          },
                          {
                              "id":  3,
                              "question":  "問3：③「考えをまったく変えることにした」とあるが、どうすることにしたのか。",
                              "options":  [
                                              "アルバムだけを残して、思い出の物をみんな捨てる。",
                                              "息子たちにも相談して、持っていく物を初めから選び直す。",
                                              "荷物が多くなってもかまわないから、すべての物を持っていく。",
                                              "思い出の物をできるだけ持っていけるように、ほかの荷物を減らす。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "アルバムだけを残して、思い出の物をみんな捨てる。",
                                                          "meaning":  "Chỉ giữ lại album ảnh, còn lại vứt bỏ toàn bộ những món đồ kỷ niệm khác.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với quyết định dứt khoát: \u0027それで、思い出の物は、アルバム以外は全部捨てることにした。私たちの思い出は段ボール箱ではなく、心の中にしまっておけばいいのだ\u0027."
                                                      },
                                                      {
                                                          "option":  "息子たちにも相談して...",
                                                          "meaning":  "Bàn bạc với con trai để chọn lại từ đầu.",
                                                          "analysis":  "Sai: Tác giả tự quyết định, không bàn với con."
                                                      },
                                                      {
                                                          "option":  "荷物が多くなってもかまわないから...",
                                                          "meaning":  "Mang hết toàn bộ đồ đi.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "思い出の物をできるだけ持っていけるように...",
                                                          "meaning":  "Giảm đồ khác để mang đồ kỷ niệm.",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「それで、思い出の物は、アルバム以外は全部捨てることにした。私たちの思い出は段ボール箱ではなく、心の中にしまっておけばいいのだ。」",
                              "explanation":  "Đáp án 1 đúng. Thay đổi suy nghĩ mang tính bước ngoặt là họ nhận ra kỷ niệm thật sự được cất giữ trong tâm hồn chứ không phải ở thùng các-tông, nên đã quyết định buông bỏ hết đồ đạc kỷ niệm và chỉ giữ lại duy nhất cuốn album."
                          },
                          {
                              "id":  4,
                              "question":  "問4：引っ越しの準備について、「私」はどう思っているか。",
                              "options":  [
                                              "大変だったが、楽しい時間でもあり、持ち物も減らすことができてよかった。",
                                              "大変だったが、荷物を息子と整理しながら、自分の人生を伝えられてよかった。",
                                              "楽しかったが、荷物が減らせたので、もっと小さなトラックを頼んだほうがよかった。",
                                              "楽しかったが、もっと計画を立ててから、荷物を整理したほうがよかった。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "大変だったが、楽しい時間でもあり、持ち物も減らすことができてよかった。",
                                                          "meaning":  "Dù vất vả nhưng đó là khoảng thời gian vui vẻ ý nghĩa (được nhìn lại cuộc đời) và cũng đã thành công trong việc thu dọn, giảm bớt hành trang.",
                                                          "analysis":  "ĐÚNG: Khớp với đoạn kết: \u0027しかし、この三週間はとても楽しかった。歩いてきた人生をもう一度思い出すことができたからである。そして、持ち物の整理もすることができた\u0027."
                                                      },
                                                      {
                                                          "option":  "大変だったが、荷物を息子と整理しながら...",
                                                          "meaning":  "Cùng con trai dọn dẹp và truyền tải cuộc đời cho con.",
                                                          "analysis":  "Sai: Chỉ có hai vợ chồng dọn với nhau."
                                                      },
                                                      {
                                                          "option":  "楽しかったが、荷物が減らせたので、もっと小さなトラックを頼んだほうがよかった。",
                                                          "meaning":  "Tiếc nuối vì đáng lẽ nên thuê xe nhỏ hơn.",
                                                          "analysis":  "Sai: Tác giả thản nhiên đón nhận (\u0027それはそれでいい\u0027 - như thế cũng chẳng sao)."
                                                      },
                                                      {
                                                          "option":  "楽しかったが、もっと計画を立ててから...",
                                                          "meaning":  "Giá như lập kế hoạch trước khi dọn.",
                                                          "analysis":  "Sai: Không có sự nuối tiếc."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「しかし、この三週間はとても楽しかった。歩いてきた人生をもう一度思い出すことができたからである。そして、持ち物の整理もすることができた。頼んでおいた引っ越しのトラックは、少し大きすぎたかもしれないが、それはそれでいい。」",
                              "explanation":  "Đáp án 1 đúng. Đánh giá tổng thể của tác giả về 3 tuần dọn nhà chuyển đi là một trải nghiệm ấm áp, vui vẻ khi được nhìn lại cả quãng đời đã qua và đã hoàn thành tốt đẹp việc tinh gọn hành trang sống."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-truongvan-06",
        "level":  "N3",
        "category":  "truongvan",
        "categoryName":  "Trường văn (Bài đọc dài)",
        "lessonNumber":  6,
        "title":  "脱サラそば屋の挑戦 (Bỏ việc công sở đi mở quán mì Soba)",
        "timeLimit":  600,
        "passage":  "\u003cp\u003e\u003cruby\u003e最近\u003crt\u003eさいきん\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e長\u003crt\u003eなが\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e間\u003crt\u003eあいだ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e働\u003crt\u003eはたら\u003c/rt\u003e\u003c/ruby\u003eいた\u003cruby\u003e会社\u003crt\u003eかいしゃ\u003c/rt\u003e\u003c/ruby\u003eをやめて、\u003cruby\u003e日本\u003crt\u003eにほん\u003c/rt\u003e\u003c/ruby\u003eそば\u003cruby\u003e屋\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめる\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e増\u003crt\u003eふ\u003c/rt\u003e\u003c/ruby\u003eえているそうだ。\u003cruby\u003e今年\u003crt\u003eことし\u003c/rt\u003e\u003c/ruby\u003eの４\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e奥\u003crt\u003eおく\u003c/rt\u003e\u003c/ruby\u003eさんと\u003cruby\u003e二人\u003crt\u003eふたり\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e中村\u003crt\u003eなかむら\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅前\u003crt\u003eえきまえ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e小\u003crt\u003eちい\u003c/rt\u003e\u003c/ruby\u003eさな\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e開\u003crt\u003eひら\u003c/rt\u003e\u003c/ruby\u003eいた「そば\u003cruby\u003e屋\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003eしんしゅう」のご\u003cruby\u003e主人\u003crt\u003eしゅじん\u003c/rt\u003e\u003c/ruby\u003e、①\u003cu\u003e\u003cruby\u003e森\u003crt\u003eもり\u003c/rt\u003e\u003c/ruby\u003eさんもその\u003cruby\u003e一人\u003crt\u003eひとり\u003c/rt\u003e\u003c/ruby\u003eだ\u003c/u\u003e。「\u003cruby\u003e収入\u003crt\u003eしゅうにゅう\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e減\u003crt\u003eへ\u003c/rt\u003e\u003c/ruby\u003eったけど、\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003eはやってよかったと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eっています」と、\u003cruby\u003e森\u003crt\u003eもり\u003c/rt\u003e\u003c/ruby\u003eさんは\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eう。\u003c/p\u003e\u003cp\u003e②\u003cu\u003eそば\u003cruby\u003e屋\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e開\u003crt\u003eひら\u003c/rt\u003e\u003c/ruby\u003eく\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eいのはなぜか\u003c/u\u003e。そば\u003cruby\u003e屋\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003eは、てんぷら\u003cruby\u003e屋\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003eやすし\u003cruby\u003e屋\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e中華\u003crt\u003eちゅうか\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e料理店\u003crt\u003eりょうりてん\u003c/rt\u003e\u003c/ruby\u003eやフランス\u003cruby\u003e料理店\u003crt\u003eりょうりてん\u003c/rt\u003e\u003c/ruby\u003eなどに\u003cruby\u003e比\u003crt\u003eくら\u003c/rt\u003e\u003c/ruby\u003eべると、あつかう\u003cruby\u003e材料\u003crt\u003eざいりょう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e種類\u003crt\u003eしゅるい\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e少\u003crt\u003eすく\u003c/rt\u003e\u003c/ruby\u003eなく、\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003eもそれほど\u003cruby\u003e難\u003crt\u003eむずか\u003c/rt\u003e\u003c/ruby\u003eしくない。また、\u003cruby\u003e最近\u003crt\u003eさいきん\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e健康\u003crt\u003eけんこう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e気\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eをつける\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e増\u003crt\u003eふ\u003c/rt\u003e\u003c/ruby\u003eえ、\u003cruby\u003e外食\u003crt\u003eがいしょく\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e時\u003crt\u003eとき\u003c/rt\u003e\u003c/ruby\u003eにそばのような\u003cruby\u003e体\u003crt\u003eからだ\u003c/rt\u003e\u003c/ruby\u003eにいい\u003cruby\u003e食\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eべ\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e選\u003crt\u003eえら\u003c/rt\u003e\u003c/ruby\u003eぶ\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eくなっているからだ。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e森\u003crt\u003eもり\u003c/rt\u003e\u003c/ruby\u003eさん\u003cruby\u003e夫婦\u003crt\u003eふうふ\u003c/rt\u003e\u003c/ruby\u003eは、１\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003eぐらい\u003cruby\u003e知\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e合\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eいのそば\u003cruby\u003e屋\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e手伝\u003crt\u003eてつだ\u003c/rt\u003e\u003c/ruby\u003eいながらそばの\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e勉強\u003crt\u003eべんきょう\u003c/rt\u003e\u003c/ruby\u003eし、\u003cruby\u003e自分\u003crt\u003eじぶん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e開\u003crt\u003eひら\u003c/rt\u003e\u003c/ruby\u003eいた。だが、いつも\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじ\u003cruby\u003e味\u003crt\u003eあじ\u003c/rt\u003e\u003c/ruby\u003eのおいしいそばを\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e続\u003crt\u003eつづ\u003c/rt\u003e\u003c/ruby\u003eけることは\u003cruby\u003e本当\u003crt\u003eほんとう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e難\u003crt\u003eむずか\u003c/rt\u003e\u003c/ruby\u003eしそうだ。\u003c/p\u003e\u003cp\u003e「そば\u003cruby\u003e屋\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003eしんしゅう」の\u003cruby\u003e開店\u003crt\u003eかいてん\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e午前\u003crt\u003eごぜん\u003c/rt\u003e\u003c/ruby\u003e１０\u003cruby\u003e時\u003crt\u003eじ\u003c/rt\u003e\u003c/ruby\u003eだが、\u003cruby\u003e森\u003crt\u003eもり\u003c/rt\u003e\u003c/ruby\u003eさんは\u003cruby\u003e朝\u003crt\u003eあさ\u003c/rt\u003e\u003c/ruby\u003e６\u003cruby\u003e時\u003crt\u003eじ\u003c/rt\u003e\u003c/ruby\u003eには\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e入\u003crt\u003eはい\u003c/rt\u003e\u003c/ruby\u003eり、\u003cruby\u003e準備\u003crt\u003eじゅんび\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめる。そして、\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e終\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eわってからも、\u003cruby\u003e毎晩\u003crt\u003eまいばん\u003c/rt\u003e\u003c/ruby\u003eおいしいそばの\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e熱心\u003crt\u003eねっしん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e研究\u003crt\u003eけんきゅう\u003c/rt\u003e\u003c/ruby\u003eしている。「お\u003cruby\u003e客\u003crt\u003eきゃく\u003c/rt\u003e\u003c/ruby\u003eさんの『おいしかったよ』という\u003cruby\u003e言葉\u003crt\u003eことば\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eくと、\u003cruby\u003e疲\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eれも\u003cruby\u003e消\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eえるんですよ」と、\u003cruby\u003e森\u003crt\u003eもり\u003c/rt\u003e\u003c/ruby\u003eさん。その\u003cruby\u003e横\u003crt\u003eよこ\u003c/rt\u003e\u003c/ruby\u003eで「③\u003cu\u003e\u003cruby\u003e大変\u003crt\u003eたいへん\u003c/rt\u003e\u003c/ruby\u003eですよ\u003c/u\u003e。\u003cruby\u003e夫\u003crt\u003eおっと\u003c/rt\u003e\u003c/ruby\u003eとけんかをしても、\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eではにこにこしていなければなりませんから」と、\u003cruby\u003e奥\u003crt\u003eおく\u003c/rt\u003e\u003c/ruby\u003eさんが\u003cruby\u003e笑\u003crt\u003eわら\u003c/rt\u003e\u003c/ruby\u003eう。\u003c/p\u003e\u003cp\u003eサラリーマン\u003cruby\u003e時代\u003crt\u003eじだい\u003c/rt\u003e\u003c/ruby\u003eにはできなかった\u003cruby\u003e経験\u003crt\u003eけいけん\u003c/rt\u003e\u003c/ruby\u003eをしている\u003cruby\u003e森\u003crt\u003eもり\u003c/rt\u003e\u003c/ruby\u003eさんは、\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003e、そば\u003cruby\u003e屋\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e経営\u003crt\u003eけいえい\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e心\u003crt\u003eこころ\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e楽\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eしんでいる\u003cruby\u003e様子\u003crt\u003eようす\u003c/rt\u003e\u003c/ruby\u003eだ。いろいろ\u003cruby\u003e苦労\u003crt\u003eくろう\u003c/rt\u003e\u003c/ruby\u003eはありそうだが、これも\u003cruby\u003e人生\u003crt\u003eじんせい\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e一\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eつの\u003cruby\u003e選択\u003crt\u003eせんたく\u003c/rt\u003e\u003c/ruby\u003eだろう。\u003c/p\u003e",
        "fullTranslation":  "Gần đây, nghe nói số người nghỉ việc sau nhiều năm cống hiến cho công ty để ra mở quán mì soba truyền thống Nhật Bản ngày càng gia tăng. Vào tháng 4 năm nay, anh Mori – ông chủ quán \u0027Soba Shinshu\u0027, người vừa cùng vợ mở một quán ăn nhỏ trước ga Nakamura – (1) cũng là một trong số những người như vậy. \u0027Thu nhập tuy có giảm so với trước, nhưng hiện tại tôi thấy thật may mắn và đúng đắn khi đã quyết định làm việc này\u0027, anh Mori chia sẻ.\n\n(2) Vì sao lại có nhiều người lựa chọn mở quán mì soba đến vậy? So với các nhà hàng tempura, sushi, ẩm thực Trung Hoa hay món Pháp, quán mì soba xử lý ít chủng loại nguyên liệu hơn và quy trình chế biến cũng không quá phức tạp. Hơn nữa, gần đây xu hướng quan tâm chăm sóc sức khỏe ngày càng cao, nên khi đi ăn ngoài, số người ưu tiên lựa chọn những món ăn lành mạnh cho cơ thể như mì soba cũng tăng lên.\n\nVợ chồng anh Mori đã dành khoảng 1 năm phụ việc tại quán soba của một người quen để học nghề nấu mì rồi mới tự mở quán của riêng mình. Dẫu vậy, việc duy trì liên tục hương vị thơm ngon ổn định cho từng bát mì dường như là điều vô cùng gian nan.\n\nQuán \u0027Soba Shinshu\u0027 mở cửa đón khách lúc 10 giờ sáng, nhưng anh Mori đã có mặt từ 6 giờ sáng để bắt đầu công tác chuẩn bị. Và ngay cả sau khi đóng cửa quán, tối nào anh cũng miệt mài nghiên cứu cách nấu mì sao cho ngon hơn nữa. \u0027Mỗi khi nghe thực khách khen ngợi \"Mì ngon lắm!\" là mọi mệt mỏi trong tôi đều tan biến hết\u0027, anh Mori bộc bạch. Đứng bên cạnh, người vợ mỉm cười tiếp lời: \u0027(3) Vất vả lắm đấy chứ, bởi vì dù hai vợ chồng có vừa cãi nhau đi chăng nữa thì khi đứng trước mặt khách trong quán vẫn luôn phải tươi cười rạng rỡ\u0027.\n\nĐang trải qua những trải nghiệm phong phú mà thời làm nhân viên văn phòng không bao giờ có được, anh Mori dường như đang thực sự tận hưởng niềm đam mê kinh doanh quán mì từ tận đáy lòng. Dẫu biết sẽ còn nhiều gian nan phía trước, nhưng đây chắc chắn là một sự lựa chọn tuyệt vời của đời người.",
        "vocabulary":  [
                           {
                               "word":  "日本そば",
                               "hiragana":  "にほんそば",
                               "meaning":  "Mì kiều mạch truyền thống Nhật Bản (Soba)"
                           },
                           {
                               "word":  "収入",
                               "hiragana":  "しゅうにゅう",
                               "meaning":  "Thu nhập"
                           },
                           {
                               "word":  "外食",
                               "hiragana":  "がいしょく",
                               "meaning":  "Ăn ngoài / Ăn tiệm"
                           },
                           {
                               "word":  "開店",
                               "hiragana":  "かいてん",
                               "meaning":  "Mở cửa quán / Khai trương"
                           },
                           {
                               "word":  "にこにこする",
                               "hiragana":  "にこにこする",
                               "meaning":  "Cười tươi / Niềm nở"
                           },
                           {
                               "word":  "選択",
                               "hiragana":  "せんたく",
                               "meaning":  "Sự lựa chọn (con đường sống)"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜に比べると",
                                 "meaning":  "So với... thì..."
                             },
                             {
                                 "pattern":  "〜ながら",
                                 "meaning":  "Vừa làm việc này vừa làm việc kia"
                             },
                             {
                                 "pattern":  "〜てよかった",
                                 "meaning":  "Thật may mắn / Thật tốt vì đã làm gì..."
                             },
                             {
                                 "pattern":  "〜なければならない",
                                 "meaning":  "Bắt buộc phải làm gì..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「森さんもその一人だ」とあるが、これはどのような意味か。",
                              "options":  [
                                              "森さんも会社をやめてそば屋を開いた人の一人である。",
                                              "森さんも今年の4月にそば屋を開いた人の一人である。",
                                              "森さんも奥さんと二人で店を開いた人の一人である。",
                                              "森さんも中村駅の近くに店を開いた人の一人である。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "森さんも会社をやめてそば屋を開いた人の一人である。",
                                                          "meaning":  "Anh Mori cũng là một trong số những người bỏ công việc văn phòng để ra mở quán mì soba.",
                                                          "analysis":  "ĐÚNG: Khớp với câu mở đầu: \u0027長い間働いた会社をやめて、日本そば屋を始める人が増えているそうだ。...森さんもその一人だ\u0027."
                                                      },
                                                      {
                                                          "option":  "森さんも今年の4月にそば屋を開いた人の一人である。",
                                                          "meaning":  "Anh Mori mở quán vào tháng 4.",
                                                          "analysis":  "Sai: Tháng 4 là mốc thời gian riêng của anh Mori, không phải trào lưu chung."
                                                      },
                                                      {
                                                          "option":  "森さんも奥さんと二人で店を開いた人の一人である。",
                                                          "meaning":  "Mở quán cùng vợ.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "森さんも中村駅の近くに店を開いた人の一人である。",
                                                          "meaning":  "Mở quán gần ga Nakamura.",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「最近、長い間働いた会社をやめて、日本そば屋を始める人が増えているそうだ。今年の4月、奥さんと二人で中村駅前に小さな店を開いた「そば屋しんしゅう」のご主人、森さんもその一人だ。」",
                              "explanation":  "Đáp án 1 đúng. Cụm từ \u0027anh Mori cũng là một người trong số đó\u0027 ám chỉ hiện tượng nhiều người sau thời gian dài làm công ăn lương đã quyết định nghỉ việc công sở để khởi nghiệp mở quán mì soba."
                          },
                          {
                              "id":  2,
                              "question":  "問2：②「そば屋を開く人が多い」とあるが、その理由は何だと言っているか。",
                              "options":  [
                                              "最近、長い間働いた会社をやめさせられる人が増えているから。",
                                              "会社員をしているより、そば屋を開いたほうが確実に収入が増えるから。",
                                              "そばは、ほかの料理に比べると簡単にできるし、外食の中で人気があるから。",
                                              "てんぷらやすしなどに比べると、そばは値段が安いので、食べる人が多いから。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "最近、長い間働いた会社をやめさせられる人が増えているから。",
                                                          "meaning":  "Do bị sa thải khỏi công ty.",
                                                          "analysis":  "Sai: Họ tự nguyện nghỉ việc."
                                                      },
                                                      {
                                                          "option":  "会社員をしているより、そば屋を開いたほうが確実に収入が増えるから。",
                                                          "meaning":  "Thu nhập chắc chắn cao hơn đi làm công sở.",
                                                          "analysis":  "Sai: Anh Mori thừa nhận thu nhập bị giảm (\u0027収入は減った\u0027)."
                                                      },
                                                      {
                                                          "option":  "そばは、ほかの料理に比べると簡単にできるし、外食の中で人気があるから。",
                                                          "meaning":  "So với các món khác thì mì soba ít nguyên liệu dễ làm hơn, đồng thời là món ăn lành mạnh đang rất được ưa chuộng khi đi ăn tiệm.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác 2 lý do ở đoạn 2: nguyên liệu ít cách làm không quá khó (\u0027材料の種類も少なく、作り方もそれほど難しくない\u0027) và xu hướng khách ăn ngoài chuộng món tốt cho sức khỏe (\u0027体にいい食べ物を選ぶ人も多くなっている\u0027)."
                                                      },
                                                      {
                                                          "option":  "てんぷらやすしなどに比べると、そばは値段が安いので、食べる人が多いから。",
                                                          "meaning":  "Vì giá rẻ hơn tempura, sushi.",
                                                          "analysis":  "Sai: Bài viết không đề cập đến yếu tố giá rẻ."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「そば屋は、てんぷら屋やすし屋、中華料理店やフランス料理店などに比べると、あつかう材料の種類も少なく、作り方もそれほど難しくない。また、最近は健康に気をつける人が増え、外食の時にそばのような体にいい食べ物を選ぶ人も多くなっているからだ。」",
                              "explanation":  "Đáp án 3 đúng. Hai lý do chính khiến nhiều người chọn mở quán mì soba là quy trình chế biến nguyên liệu tương đối tinh gọn dễ tiếp cận hơn các món phức tạp khác, cùng với nhu cầu tiêu thụ tăng cao từ những thực khách chú trọng ăn uống lành mạnh."
                          },
                          {
                              "id":  3,
                              "question":  "問3：③「大変ですよ」とあるが、ここでは何が大変なのか。",
                              "options":  [
                                              "いつも同じ味でおいしいそばを作り続けなければならないこと。",
                                              "朝6時から店を開けるための準備を始めなければならないこと。",
                                              "おいしいそばの作り方を毎晩研究しなければならないこと。",
                                              "どんなことがあっても店では笑顔でいなければならないこと。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "いつも同じ味でおいしいそばを作り続けなければならないこと。",
                                                          "meaning":  "Phải duy trì hương vị thơm ngon ổn định.",
                                                          "analysis":  "Sai: Đây là nhận xét chung của tác giả."
                                                      },
                                                      {
                                                          "option":  "朝6時から店を開けるための準備を始めなければならないこと。",
                                                          "meaning":  "Phải chuẩn bị từ 6h sáng.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "おいしいそばの作り方を毎晩研究しなければならないこと。",
                                                          "meaning":  "Mỗi tối phải nghiên cứu cách làm mì.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "どんなことがあっても店では笑顔でいなければならないこと。",
                                                          "meaning":  "Dù có chuyện gì xảy ra (kể cả vợ chồng vừa cãi cọ nhau) thì khi đứng trong quán phục vụ khách vẫn phải luôn tươi cười rạng rỡ.",
                                                          "analysis":  "ĐÚNG: Lời của người vợ: \u0027「大変ですよ。夫とけんかをしても、店ではにこにこしていなければなりませんから」と、奥さんが笑う\u0027."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「その横で「大変ですよ。夫とけんかをしても、店ではにこにこしていなければなりませんから」と、奥さんが笑う。」",
                              "explanation":  "Đáp án 4 đúng. Điểm \u0027vất vả\u0027 mà người vợ hóm hỉnh chia sẻ chính là tính chuyên nghiệp trong dịch vụ: dù vợ chồng có vừa xích mích cãi nhau xong thì bước ra quầy trước mặt khách vẫn bắt buộc phải niềm nở, tươi cười."
                          },
                          {
                              "id":  4,
                              "question":  "問4：森さんは今、そば屋を開いたことをどう言っているか。",
                              "options":  [
                                              "毎日楽しいが、収入が減ったので、やらないほうがよかった。",
                                              "忙しいし、夫婦げんかも増えたので、やらないほうがよかった。",
                                              "特に大変なことや、難しいこともないので、やってよかった。",
                                              "毎日疲れるし、おいしいそばを作るのは大変だが、やってよかった。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "毎日楽しいが、収入が減ったので、やらないほうがよかった。",
                                                          "meaning":  "Lẽ ra không nên làm vì thu nhập giảm.",
                                                          "analysis":  "Sai: Anh Mori bảo \u0027làm là đúng đắn\u0027 (\u0027やってよかった\u0027)."
                                                      },
                                                      {
                                                          "option":  "忙しいし、夫婦げんかも増えたので、やらないほうがよかった。",
                                                          "meaning":  "Lẽ ra không nên làm.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "特に大変なことや、難しいこともないので、やってよかった。",
                                                          "meaning":  "Không có gì khó khăn nên thấy tốt.",
                                                          "analysis":  "Sai: Việc làm mì ngon rất khó và chuẩn bị rất sớm."
                                                      },
                                                      {
                                                          "option":  "毎日疲れるし、おいしいそばを作るのは大変だが、やってよかった。",
                                                          "meaning":  "Dù mỗi ngày đều mệt mỏi và làm mì ngon rất gian nan, nhưng anh vẫn cảm thấy thật may mắn và đúng đắn khi đã mở quán.",
                                                          "analysis":  "ĐÚNG: Tổng hợp chuẩn xác: \u0027収入は減ったけど、今はやってよかったと思っています... お客さんの『おいしかったよ』という言葉を聞くと、疲れも消えるんですよ\u0027."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「「収入は減ったけど、今はやってよかったと思っています」と、森さんは言う。...「お客さんの『おいしかったよ』という言葉を聞くと、疲れも消えるんですよ」」",
                              "explanation":  "Đáp án 4 đúng. Dù công việc vất vả dậy sớm thức khuya và thu nhập có giảm so với trước, nhưng niềm vui khi được khách khen ngon và sự tự do làm chủ cuộc sống khiến anh Mori hoàn toàn hài lòng với quyết định của mình."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-truongvan-07",
        "level":  "N3",
        "category":  "truongvan",
        "categoryName":  "Trường văn (Bài đọc dài)",
        "lessonNumber":  7,
        "title":  "新しい農業の形「あおぞら」 (Mô hình nông nghiệp kiểu mới)",
        "timeLimit":  600,
        "passage":  "\u003cp\u003e\u003cruby\u003e現在\u003crt\u003eげんざい\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e日本\u003crt\u003eにほん\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e農業\u003crt\u003eのうぎょう\u003c/rt\u003e\u003c/ruby\u003eをしている\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e約\u003crt\u003eやく\u003c/rt\u003e\u003c/ruby\u003e２００\u003cruby\u003e万人\u003crt\u003eまんにん\u003c/rt\u003e\u003c/ruby\u003e。４０\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e比\u003crt\u003eくら\u003c/rt\u003e\u003c/ruby\u003eべると、その\u003cruby\u003e数\u003crt\u003eかず\u003c/rt\u003e\u003c/ruby\u003eは３\u003cruby\u003e分\u003crt\u003eぶん\u003c/rt\u003e\u003c/ruby\u003eの１\u003cruby\u003e以下\u003crt\u003eいか\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e減\u003crt\u003eへ\u003c/rt\u003e\u003c/ruby\u003eっている。そして、\u003cruby\u003e農業\u003crt\u003eのうぎょう\u003c/rt\u003e\u003c/ruby\u003eをしている\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eの６０％\u003cruby\u003e以上\u003crt\u003eいじょう\u003c/rt\u003e\u003c/ruby\u003eは６５\u003cruby\u003e歳\u003crt\u003eさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e以上\u003crt\u003eいじょう\u003c/rt\u003e\u003c/ruby\u003eのお\u003cruby\u003e年寄\u003crt\u003eとしよ\u003c/rt\u003e\u003c/ruby\u003eりだ。①\u003cu\u003eこの\u003cruby\u003e状態\u003crt\u003eじょうたい\u003c/rt\u003e\u003c/ruby\u003e\u003c/u\u003eを\u003cruby\u003e変\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eえようと、\u003cruby\u003e最近\u003crt\u003eさいきん\u003c/rt\u003e\u003c/ruby\u003eいろいろな\u003cruby\u003e農業\u003crt\u003eのうぎょう\u003c/rt\u003e\u003c/ruby\u003eのやり\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e考\u003crt\u003eかんが\u003c/rt\u003e\u003c/ruby\u003eえられているそうだ。\u003c/p\u003e\u003cp\u003eその\u003cruby\u003e一\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eつは、これまでのように\u003cruby\u003e家族\u003crt\u003eかぞく\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e農業\u003crt\u003eのうぎょう\u003c/rt\u003e\u003c/ruby\u003eをするのではなく、\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eくの\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e働\u003crt\u003eはたら\u003c/rt\u003e\u003c/ruby\u003eく「\u003cruby\u003e会社\u003crt\u003eかいしゃ\u003c/rt\u003e\u003c/ruby\u003e」の\u003cruby\u003e形\u003crt\u003eかたち\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e農業\u003crt\u003eのうぎょう\u003c/rt\u003e\u003c/ruby\u003eをするというものだ。このような\u003cruby\u003e会社\u003crt\u003eかいしゃ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e一\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eつに「あおぞら」がある。「あおぞら」では\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003eまでにない②\u003cu\u003eいくつかの\u003cruby\u003e工夫\u003crt\u003eくふう\u003c/rt\u003e\u003c/ruby\u003e\u003c/u\u003eによって、\u003cruby\u003e若者\u003crt\u003eわかもの\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e働\u003crt\u003eはたら\u003c/rt\u003e\u003c/ruby\u003eきやすい\u003cruby\u003e環境\u003crt\u003eかんきょう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eっている。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e第一\u003crt\u003eだいいち\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e工夫\u003crt\u003eくふう\u003c/rt\u003e\u003c/ruby\u003eは「\u003cruby\u003e決\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eまった\u003cruby\u003e給料\u003crt\u003eきゅうりょう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e払\u003crt\u003eはら\u003c/rt\u003e\u003c/ruby\u003eうこと」。\u003cruby\u003e農業\u003crt\u003eのうぎょう\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e相手\u003crt\u003eあいて\u003c/rt\u003e\u003c/ruby\u003eなので、どうしても\u003cruby\u003e収入\u003crt\u003eしゅうにゅう\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e時\u003crt\u003eとき\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e少\u003crt\u003eすく\u003c/rt\u003e\u003c/ruby\u003eない\u003cruby\u003e時\u003crt\u003eとき\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e出\u003crt\u003eで\u003c/rt\u003e\u003c/ruby\u003eてしまう。しかし、１\u003cruby\u003e年中\u003crt\u003eねんじゅう\u003c/rt\u003e\u003c/ruby\u003eいろいろな\u003cruby\u003e種類\u003crt\u003eしゅるい\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eることで、\u003cruby\u003e一\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eつがだめでも\u003cruby\u003e他\u003crt\u003eほか\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eでカバーできるようにし、\u003cruby\u003e毎月\u003crt\u003eまいつき\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじ\u003cruby\u003e給料\u003crt\u003eきゅうりょう\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e払\u003crt\u003eはら\u003c/rt\u003e\u003c/ruby\u003eえるようにする。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e第二\u003crt\u003eだいに\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e工夫\u003crt\u003eくふう\u003c/rt\u003e\u003c/ruby\u003eは「\u003cruby\u003e休\u003crt\u003eやす\u003c/rt\u003e\u003c/ruby\u003eめるようにすること」。\u003cruby\u003e社員\u003crt\u003eしゃいん\u003c/rt\u003e\u003c/ruby\u003eはみんな\u003cruby\u003e違\u003crt\u003eちが\u003c/rt\u003e\u003c/ruby\u003eう\u003cruby\u003e日\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e休\u003crt\u003eやす\u003c/rt\u003e\u003c/ruby\u003eみを\u003cruby\u003e取\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eる。\u003cruby\u003e社員\u003crt\u003eしゃいん\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e大勢\u003crt\u003eおおぜい\u003c/rt\u003e\u003c/ruby\u003eいるので、それぞれが\u003cruby\u003e順番\u003crt\u003eじゅんばん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e休\u003crt\u003eやす\u003c/rt\u003e\u003c/ruby\u003eみを\u003cruby\u003e取\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eるようにすれば、それほど\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eくはないが、みんながきちんと\u003cruby\u003e休\u003crt\u003eやす\u003c/rt\u003e\u003c/ruby\u003eめるのだ。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e第三\u003crt\u003eだいさん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e工夫\u003crt\u003eくふう\u003c/rt\u003e\u003c/ruby\u003eは「\u003cruby\u003e農業\u003crt\u003eのうぎょう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e教\u003crt\u003eおし\u003c/rt\u003e\u003c/ruby\u003eえること」。\u003cruby\u003e土\u003crt\u003eつち\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e触\u003crt\u003eさわ\u003c/rt\u003e\u003c/ruby\u003eったことが\u003cruby\u003e全然\u003crt\u003eぜんぜん\u003c/rt\u003e\u003c/ruby\u003eないような\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eには、\u003cruby\u003e経験者\u003crt\u003eけいけんしゃ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e農業\u003crt\u003eのうぎょう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e一\u003crt\u003eいち\u003c/rt\u003e\u003c/ruby\u003eからきちんと\u003cruby\u003e教\u003crt\u003eおし\u003c/rt\u003e\u003c/ruby\u003eえる。\u003c/p\u003e\u003cp\u003eこのような\u003cruby\u003e工夫\u003crt\u003eくふう\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e若者\u003crt\u003eわかもの\u003c/rt\u003e\u003c/ruby\u003eにも\u003cruby\u003e伝\u003crt\u003eつた\u003c/rt\u003e\u003c/ruby\u003eわり、③\u003cu\u003e「あおぞら」には\u003cruby\u003e毎年\u003crt\u003eまいとし\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e農業\u003crt\u003eのうぎょう\u003c/rt\u003e\u003c/ruby\u003eにチャレンジしたいという\u003cruby\u003e若者\u003crt\u003eわかもの\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e大勢\u003crt\u003eおおぜい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e入\u003crt\u003eはい\u003c/rt\u003e\u003c/ruby\u003eってきて\u003c/u\u003e、\u003cruby\u003e経営\u003crt\u003eけいえい\u003c/rt\u003e\u003c/ruby\u003eもうまくいっているそうだ。\u003c/p\u003e\u003cp\u003eそして、それは\u003cruby\u003e新\u003crt\u003eあたら\u003c/rt\u003e\u003c/ruby\u003eしい\u003cruby\u003e農業\u003crt\u003eのうぎょう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e形\u003crt\u003eかたち\u003c/rt\u003e\u003c/ruby\u003eとして\u003cruby\u003e期待\u003crt\u003eきたい\u003c/rt\u003e\u003c/ruby\u003eされている。\u003c/p\u003e",
        "fullTranslation":  "Hiện nay, số lượng người làm nông nghiệp tại Nhật Bản là khoảng 2 triệu người. So với 40 năm trước, con số đó đã sụt giảm xuống dưới 1/3. Đáng chú ý, hơn 60% số người làm nông hiện nay là những người cao tuổi từ 65 tuổi trở lên. Nhằm thay đổi (1) thực trạng này, gần đây nhiều mô hình canh tác nông nghiệp mới đang được nghiên cứu triển khai.\n\nMột trong những mô hình đó là chuyển từ cách làm nông theo hộ gia đình truyền thống sang hình thức \u0027công ty doanh nghiệp nông nghiệp\u0027 với nhiều nhân viên cùng làm việc. \u0027Aozora\u0027 là một trong những công ty tiêu biểu như vậy. Tại \u0027Aozora\u0027, nhờ vào (2) một số cải tiến mang tính đột phá chưa từng có trước đây, họ đã tạo ra một môi trường làm việc vô cùng thuận lợi và hấp dẫn đối với giới trẻ:\n\nCải tiến thứ nhất là \u0027trả mức lương ổn định hàng tháng\u0027. Nông nghiệp vốn phụ thuộc vào thiên nhiên nên thu nhập thường bấp bênh lúc nhiều lúc ít. Tuy nhiên, bằng cách trồng xen canh nhiều chủng loại rau quanh năm, nếu vụ mùa của loại rau này không tốt thì sẽ có loại khác bù lại, nhờ đó công ty đảm bảo chi trả mức lương cố định đều đặn mỗi tháng cho nhân viên.\n\nCải tiến thứ hai là \u0027đảm bảo chế độ nghỉ ngơi\u0027. Các nhân viên sẽ chia nhau nghỉ vào những ngày khác nhau. Do có đông nhân viên, khi luân phiên sắp xếp ca nghỉ, dù số ngày nghỉ chưa phải là quá nhiều nhưng ai nấy đều được nghỉ ngơi đầy đủ, hợp lý.\n\nCải tiến thứ ba là \u0027đào tạo bài bản nghề nông\u0027. Đối với những người trẻ chưa từng chạm tay vào đất cát bao giờ, những người đi trước giàu kinh nghiệm sẽ tận tình chỉ dạy từng bước từ con số không.\n\nNhững cải tiến sáng tạo này đã lan tỏa rộng rãi đến giới trẻ, giúp (3) công ty \u0027Aozora\u0027 hàng năm thu hút rất đông thanh niên muốn thử sức với nghề nông xin gia nhập, và hoạt động kinh doanh cũng diễn ra vô cùng thuận lợi.\n\nMô hình này đang được kỳ vọng sẽ trở thành tương lai phát triển mới cho nền nông nghiệp hiện đại.",
        "vocabulary":  [
                           {
                               "word":  "農業",
                               "hiragana":  "のうぎょう",
                               "meaning":  "Nông nghiệp / Nghề nông"
                           },
                           {
                               "word":  "お年寄り",
                               "hiragana":  "おとしより",
                               "meaning":  "Người cao tuổi"
                           },
                           {
                               "word":  "工夫",
                               "hiragana":  "くふう",
                               "meaning":  "Sự cải tiến sáng tạo / Sáng kiến"
                           },
                           {
                               "word":  "カバーする",
                               "hiragana":  "かばーする",
                               "meaning":  "Bù đắp / Gánh vác thay (cover)"
                           },
                           {
                               "word":  "順番に",
                               "hiragana":  "じゅんばんに",
                               "meaning":  "Theo thứ tự / Lần lượt luân phiên"
                           },
                           {
                               "word":  "チャレンジする",
                               "hiragana":  "ちゃれんじする",
                               "meaning":  "Thử sức / Thử thách bản thân"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜のではなく",
                                 "meaning":  "Không phải là... mà là..."
                             },
                             {
                                 "pattern":  "〜によって",
                                 "meaning":  "Nhờ vào... / Bằng phương tiện..."
                             },
                             {
                                 "pattern":  "〜ようにする",
                                 "meaning":  "Cố gắng làm sao để..."
                             },
                             {
                                 "pattern":  "〜として期待される",
                                 "meaning":  "Được kỳ vọng với tư cách là..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「この状態」とあるが、何か。",
                              "options":  [
                                              "農業をする人が大きく減って、半分以上がお年寄りになったこと",
                                              "農業をする人が大きく減って、半分以上が若者になったこと",
                                              "農業をする人が少し減って、お年寄りの割合が増えていること",
                                              "農業をする人が少し減って、若者の割合が増えていること"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "農業をする人が大きく減って、半分以上がお年寄りになったこと",
                                                          "meaning":  "Số người làm nông giảm mạnh (xuống dưới 1/3) và hơn một nửa (trên 60%) là người cao tuổi.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với số liệu đoạn 1: \u002740年前に比べると、その数は3分の1以下に減っている。そして、農業をしている人の60%以上は65歳以上のお年寄りだ\u0027."
                                                      },
                                                      {
                                                          "option":  "農業をする人が大きく減って、半分以上が若者になったこと",
                                                          "meaning":  "Hơn một nửa là thanh niên.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "農業をする人が少し減って...",
                                                          "meaning":  "Số người làm nông giảm nhẹ...",
                                                          "analysis":  "Sai: Giảm hơn 2/3 (3分の1以下) là giảm rất mạnh (大きく減って), không phải giảm nhẹ (少し減って)."
                                                      },
                                                      {
                                                          "option":  "農業をする人が少し減って、若者の割合が増えていること",
                                                          "meaning":  "Giảm nhẹ và tỷ lệ giới trẻ tăng.",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「現在、日本で農業をしている人は、約200万人。40年前に比べると、その数は3分の1以下に減っている。そして、農業をしている人の60%以上は65歳以上のお年寄りだ。この状態を変えようと...」",
                              "explanation":  "Đáp án 1 đúng. \u0027Thực trạng này\u0027 chỉ hiện tượng già hóa và sụt giảm lao động nghiêm trọng trong ngành nông nghiệp Nhật Bản: lực lượng lao động giảm hơn 67% và trên 60% người làm nông đã ngoài 65 tuổi."
                          },
                          {
                              "id":  2,
                              "question":  "問2：②「いくつかの工夫」とあるが、例えばどんな工夫か。",
                              "options":  [
                                              "多い月や少ない月があるが、毎月給料が払えるようにする。",
                                              "一年中、一種類の野菜を作り続けるようにする。",
                                              "社員みんなが、土曜日と日曜日に休めるようにする。",
                                              "経験がない人には、農業の基礎から教えるようにする。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "多い月や少ない月があるが、毎月給料が払えるようにする。",
                                                          "meaning":  "Lương tháng nhiều tháng ít.",
                                                          "analysis":  "Sai: Công ty chi trả mức lương cố định đều đặn (\u0027毎月同じ給料が払える\u0027)."
                                                      },
                                                      {
                                                          "option":  "一年中、一種類の野菜を作り続けるようにする。",
                                                          "meaning":  "Trồng duy nhất một loại rau quanh năm.",
                                                          "analysis":  "Sai: Trồng nhiều loại rau khác nhau (\u0027いろいろな種類の野菜を作る\u0027)."
                                                      },
                                                      {
                                                          "option":  "社員みんなが、土曜日と日曜日に休めるようにする。",
                                                          "meaning":  "Cùng nghỉ thứ 7 và Chủ nhật.",
                                                          "analysis":  "Sai: Luân phiên nghỉ các ngày khác nhau (\u0027みんな違う日に休みを取る\u0027)."
                                                      },
                                                      {
                                                          "option":  "経験がない人には、農業の基礎から教えるようにする。",
                                                          "meaning":  "Đối với người chưa có kinh nghiệm thì đào tạo chỉ dạy bài bản từ những bước cơ bản đầu tiên.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với cải tiến thứ 3: \u0027土に触ったことが全然ないような人には、経験者が農業を一からきちんと教える\u0027."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「第三の工夫は「農業を教えること」。土に触ったことが全然ないような人には、経験者が農業を一からきちんと教える。」",
                              "explanation":  "Đáp án 4 đúng. Một trong những sáng kiến quan trọng giúp thu hút người trẻ thành phố là chính sách đào tạo tận tình từ con số không của những người giàu kinh nghiệm dành cho người mới bước vào nghề."
                          },
                          {
                              "id":  3,
                              "question":  "問3：③「あおぞら」には毎年農業にチャレンジしたいという若者が大勢入ってきてとあるが、それはどうしてだと言っているか。",
                              "options":  [
                                              "「あおぞら」では、休みをたくさん取ることができるから",
                                              "「あおぞら」では、会社経営の方法を教えてもらえるから",
                                              "「あおぞら」は、昔からの農業のやり方を守っているから",
                                              "「あおぞら」は、仕事がしやすい環境を作っているから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "「あおぞら」では、休みをたくさん取ることができるから",
                                                          "meaning":  "Được nghỉ rất nhiều.",
                                                          "analysis":  "Sai: Bài viết nêu \u0027ngày nghỉ không quá nhiều\u0027 (それほど多くはないが)."
                                                      },
                                                      {
                                                          "option":  "「あおぞら」では、会社経営の方法を教えてもらえるから",
                                                          "meaning":  "Được dạy phương pháp quản trị doanh nghiệp.",
                                                          "analysis":  "Sai: Dạy kỹ thuật nông nghiệp."
                                                      },
                                                      {
                                                          "option":  "「あおぞら」は、昔からの農業のやり方を守っているから",
                                                          "meaning":  "Gìn giữ phương pháp làm nông cổ truyền.",
                                                          "analysis":  "Sai: Đổi mới theo mô hình doanh nghiệp hiện đại."
                                                      },
                                                      {
                                                          "option":  "「あおぞら」は、仕事がしやすい環境を作っているから",
                                                          "meaning":  "Công ty đã tạo ra một môi trường làm việc thuận lợi, ổn định và thân thiện cho người lao động trẻ.",
                                                          "analysis":  "ĐÚNG: Khớp với đúc kết: \u0027若者も働きやすい環境を作っている... このような工夫は若者にも伝わり、「あおぞら」には毎年農業にチャレンジしたいという若者が大勢入ってきて\u0027."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「「あおぞら」では今までにないいくつかの工夫によって、若者も働きやすい環境を作っている。...このような工夫は若者にも伝わり、「あおぞら」には毎年農業にチャレンジしたいという若者が大勢入ってきて...」",
                              "explanation":  "Đáp án 4 đúng. Nhờ xây dựng được môi trường làm việc chuyên nghiệp với thu nhập ổn định, ngày nghỉ rõ ràng và được hướng dẫn tận tình, Aozora đã trở thành điểm đến lý tưởng cho thế hệ trẻ."
                          },
                          {
                              "id":  4,
                              "question":  "問4：この文章全体のテーマは、何か。",
                              "options":  [
                                              "お年寄りと農業",
                                              "これからの農業",
                                              "家族で行う農業",
                                              "経験者に教わる農業"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "お年寄りと農業",
                                                          "meaning":  "Người cao tuổi và nông nghiệp.",
                                                          "analysis":  "Sai: Đây chỉ là bối cảnh khởi đầu."
                                                      },
                                                      {
                                                          "option":  "これからの農業",
                                                          "meaning":  "Tương lai và hướng đi mới của ngành nông nghiệp hiện đại.",
                                                          "analysis":  "ĐÚNG: Toàn bộ bài viết bàn về việc khắc phục khó khăn của nông nghiệp truyền thống và hướng tới mô hình doanh nghiệp hóa hiện đại (\u0027新しい農業の形として期待されている\u0027)."
                                                      },
                                                      {
                                                          "option":  "家族で行う農業",
                                                          "meaning":  "Nông nghiệp hộ gia đình.",
                                                          "analysis":  "Sai: Bài viết đề cập việc chuyển đổi khỏi mô hình hộ gia đình."
                                                      },
                                                      {
                                                          "option":  "経験者に教わる農業",
                                                          "meaning":  "Học nghề nông từ người đi trước.",
                                                          "analysis":  "Sai: Đây chỉ là 1 trong 3 sáng kiến nhỏ."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「そして、それは新しい農業の形として期待されている。」",
                              "explanation":  "Đáp án 2 đúng. Bài văn tập trung giới thiệu và khẳng định triển vọng của mô hình doanh nghiệp nông nghiệp kiểu mới - giải pháp tương lai giúp vực dậy ngành nông nghiệp Nhật Bản."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-truongvan-08",
        "level":  "N3",
        "category":  "truongvan",
        "categoryName":  "Trường văn (Bài đọc dài)",
        "lessonNumber":  8,
        "title":  "名古屋での新生活と発見 (Cuộc sống mới và những phát hiện thú vị ở Nagoya)",
        "timeLimit":  600,
        "passage":  "\u003cp\u003e１１\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e初\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめに\u003cruby\u003e名古屋\u003crt\u003eなごや\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e引\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eっ\u003cruby\u003e越\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eして\u003cruby\u003e来\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eて、１\u003cruby\u003e週間\u003crt\u003eしゅうかん\u003c/rt\u003e\u003c/ruby\u003eがたちました。\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e日本\u003crt\u003eにほん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e住\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eんでもう２\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003eになるので\u003cruby\u003e日本\u003crt\u003eにほん\u003c/rt\u003e\u003c/ruby\u003eについていろいろを\u003cruby\u003e知\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eっていると\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eっていましたが、まだ\u003cruby\u003e知\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eらないことがけっこうあります。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e今朝\u003crt\u003eけさ\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e近\u003crt\u003eちか\u003c/rt\u003e\u003c/ruby\u003eくの\u003cruby\u003e公園\u003crt\u003eこうえん\u003c/rt\u003e\u003c/ruby\u003eへ\u003cruby\u003e散歩\u003crt\u003eさんぽ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e行\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eってみました。\u003cruby\u003e木\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e葉\u003crt\u003eは\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e赤\u003crt\u003eあか\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e黄色\u003crt\u003eきいろ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e変\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eわり、とてもきれいでした。\u003cruby\u003e歩\u003crt\u003eある\u003c/rt\u003e\u003c/ruby\u003eいていると、\u003cruby\u003e遠\u003crt\u003eとお\u003c/rt\u003e\u003c/ruby\u003eくに\u003cruby\u003e白\u003crt\u003eしろ\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e雪\u003crt\u003eゆき\u003c/rt\u003e\u003c/ruby\u003eのようなものがたくさんついている\u003cruby\u003e木\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eえました。\u003cruby\u003e何\u003crt\u003eなに\u003c/rt\u003e\u003c/ruby\u003eかと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eって、①\u003cu\u003e\u003cruby\u003e近\u003crt\u003eちか\u003c/rt\u003e\u003c/ruby\u003eくに\u003cruby\u003e行\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eってみる\u003c/u\u003eと、それは\u003cruby\u003e桜\u003crt\u003eさくら\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e似\u003crt\u003eに\u003c/rt\u003e\u003c/ruby\u003eた\u003cruby\u003e小\u003crt\u003eちい\u003c/rt\u003e\u003c/ruby\u003eさな\u003cruby\u003e花\u003crt\u003eはな\u003c/rt\u003e\u003c/ruby\u003eでした。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e通\u003crt\u003eとお\u003c/rt\u003e\u003c/ruby\u003eりかかった\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eに「\u003cruby\u003e何\u003crt\u003eなん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e木\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eですか」と\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eくと、「\u003cruby\u003e桜\u003crt\u003eさくら\u003c/rt\u003e\u003c/ruby\u003eですよ。『\u003cruby\u003e四季桜\u003crt\u003eしきざくら\u003c/rt\u003e\u003c/ruby\u003e』といって、\u003cruby\u003e秋\u003crt\u003eあき\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e冬\u003crt\u003eふゆ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e咲\u003crt\u003eさ\u003c/rt\u003e\u003c/ruby\u003eくのです。」と\u003cruby\u003e教\u003crt\u003eおし\u003c/rt\u003e\u003c/ruby\u003eえてくれました。\u003cruby\u003e桜\u003crt\u003eさくら\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e春\u003crt\u003eはる\u003c/rt\u003e\u003c/ruby\u003eにだけ\u003cruby\u003e咲\u003crt\u003eさ\u003c/rt\u003e\u003c/ruby\u003eくと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eっていたので、②\u003cu\u003eとてもびっくりしました\u003c/u\u003e。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e公園\u003crt\u003eこうえん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e出\u003crt\u003eで\u003c/rt\u003e\u003c/ruby\u003eると、\u003cruby\u003e喫茶店\u003crt\u003eきっさてん\u003c/rt\u003e\u003c/ruby\u003eがあったので、\u003cruby\u003e入\u003crt\u003eはい\u003c/rt\u003e\u003c/ruby\u003eってみました。コーヒーとトーストを\u003cruby\u003e頼\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eむと、ウエイトレスに「モーニング・サービスにしますか。」と\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eかれました。\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e意味\u003crt\u003eいみ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e分\u003crt\u003eわ\u003c/rt\u003e\u003c/ruby\u003eからず、\u003cruby\u003e黙\u003crt\u003eだま\u003c/rt\u003e\u003c/ruby\u003eっていると、ウエイトレスは「\u003cruby\u003e朝\u003crt\u003eあさ\u003c/rt\u003e\u003c/ruby\u003e１１\u003cruby\u003e時\u003crt\u003eじ\u003c/rt\u003e\u003c/ruby\u003eまでにコーヒーか\u003cruby\u003e紅茶\u003crt\u003eこうちゃ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e頼\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eむと、\u003cruby\u003e無料\u003crt\u003eむりょう\u003c/rt\u003e\u003c/ruby\u003eでトーストと\u003cruby\u003e卵\u003crt\u003eたまご\u003c/rt\u003e\u003c/ruby\u003eとサラダがつくんです。」と\u003cruby\u003e説明\u003crt\u003eせつめい\u003c/rt\u003e\u003c/ruby\u003eしてくれました。これは、\u003cruby\u003e名古屋\u003crt\u003eなごや\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e始\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eまったサービスなのだそうです。\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eはそのときまで、\u003cruby\u003e喫茶店\u003crt\u003eきっさてん\u003c/rt\u003e\u003c/ruby\u003eにそのようなサービスがあることを\u003cruby\u003e知\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eりませんでした。おなかがすいていたので、③\u003cu\u003eとてもうれしかったです\u003c/u\u003e。\u003c/p\u003e\u003cp\u003eこれからまたどんな\u003cruby\u003e経験\u003crt\u003eけいけん\u003c/rt\u003e\u003c/ruby\u003eができるか、とても\u003cruby\u003e楽\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eしみです。\u003c/p\u003e",
        "fullTranslation":  "Đầu tháng 11, tôi chuyển nhà đến thành phố Nagoya và thấm thoát đã được một tuần. Tôi đã sinh sống ở Nhật Bản được 2 năm rồi nên cứ ngỡ mình đã hiểu rất nhiều về đất nước này, thế nhưng thực ra vẫn còn rất nhiều điều tôi chưa từng biết đến.\n\nSáng nay, tôi ra công viên gần nhà đi dạo. Những tán lá cây đã chuyển sang sắc đỏ và vàng rực rỡ, trông vô cùng đẹp mắt. Đang rảo bước, tôi chợt nhìn thấy từ đằng xa có một cái cây bám đầy những đốm trắng trông như tuyết. Tò mò không biết đó là gì, (1) tôi tiến lại gần xem thử thì hóa ra đó là những bông hoa nhỏ rất giống hoa anh đào.\n\nTôi hỏi một người đi đường ngang qua: \u0027Đây là cây gì vậy bác?\u0027, người đó liền niềm nở giải thích: \u0027Hoa anh đào đấy cháu. Loại này gọi là \"Shikizakura\" (Anh đào bốn mùa), nở rộ từ mùa thu kéo dài sang mùa đông\u0027. Trước giờ tôi cứ đinh ninh hoa anh đào chỉ nở vào mùa xuân, nên khi nghe xong (2) tôi đã vô cùng ngạc nhiên.\n\nRời khỏi công viên, thấy có một quán cà phê, tôi liền ghé vào. Khi tôi gọi một cốc cà phê và bánh mì nướng (toast), cô phục vụ liền hỏi: \u0027Quý khách có muốn dùng Morning Service không ạ?\u0027. Thấy tôi chưa hiểu ý và ngập ngừng im lặng, cô phục vụ liền giải thích: \u0027Nếu quý khách gọi cà phê hoặc hồng trà trước 11 giờ sáng, quán sẽ tặng kèm miễn phí bánh mì nướng, trứng luộc và salad ạ\u0027. Nghe nói đây là nét văn hóa dịch vụ độc đáo xuất phát từ chính Nagoya. Cho đến tận lúc đó, tôi hoàn toàn không biết tại các quán cà phê lại có dịch vụ tuyệt vời như vậy. Đang lúc bụng đói cồn cào nên (3) tôi cảm thấy vô cùng sung sướng.\n\nTôi cảm thấy vô cùng háo hức và mong chờ những trải nghiệm mới mẻ tiếp theo trong những ngày tháng sắp tới ở nơi đây.",
        "vocabulary":  [
                           {
                               "word":  "散歩",
                               "hiragana":  "さんぽ",
                               "meaning":  "Đi dạo / Tản bộ"
                           },
                           {
                               "word":  "四季桜",
                               "hiragana":  "しきざくら",
                               "meaning":  "Hoa anh đào bốn mùa (nở vào thu đông)"
                           },
                           {
                               "word":  "喫茶店",
                               "hiragana":  "きっさてん",
                               "meaning":  "Quán cà phê giải khát truyền thống"
                           },
                           {
                               "word":  "トースト",
                               "hiragana":  "とーすと",
                               "meaning":  "Bánh mì nướng giòn"
                           },
                           {
                               "word":  "モーニング・サービス",
                               "hiragana":  "もーにんぐさーびす",
                               "meaning":  "Combo ăn sáng tặng kèm miễn phí khi gọi đồ uống"
                           },
                           {
                               "word":  "無料",
                               "hiragana":  "むりょう",
                               "meaning":  "Miễn phí"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜てみる",
                                 "meaning":  "Thử làm việc gì đó"
                             },
                             {
                                 "pattern":  "〜によると / 〜といって",
                                 "meaning":  "Gọi là... / Theo như..."
                             },
                             {
                                 "pattern":  "〜おなかがすく",
                                 "meaning":  "Bụng đói cồn cào"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「近くに行ってみると」とあるが、どうして行ってみたのか。",
                              "options":  [
                                              "きれいな木の葉をもっと近くで、見たかったから",
                                              "白い花の木の名前が何か知りたかったから",
                                              "もっとそばで、雪を見たかったから",
                                              "白いものが何か知りたかったから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "きれいな木の葉をもっと近くで、見たかったから",
                                                          "meaning":  "Muốn ngắm lá cây đẹp ở cự ly gần.",
                                                          "analysis":  "Sai: Tò mò về thứ màu trắng như tuyết."
                                                      },
                                                      {
                                                          "option":  "白い花の木の名前が何か知りたかったから",
                                                          "meaning":  "Muốn biết tên cây hoa trắng.",
                                                          "analysis":  "Sai: Lúc ở xa tác giả chưa biết đó là hoa trắng, chỉ thấy đốm trắng như tuyết."
                                                      },
                                                      {
                                                          "option":  "もっとそばで、雪を見たかったから",
                                                          "meaning":  "Muốn lại gần ngắm tuyết.",
                                                          "analysis":  "Sai: Tháng 11 chưa có tuyết rơi."
                                                      },
                                                      {
                                                          "option":  "白いものが何か知りたかったから",
                                                          "meaning":  "Muốn biết vật màu trắng bám đầy trên cây từ xa là thứ gì.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với tâm lý: \u0027遠くに白い雪のようなものがたくさんついている木が見えました。何かと思って、近くに行ってみると...\u0027."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「遠くに白い雪のようなものがたくさんついている木が見えました。何かと思って、近くに行ってみると、それは桜に似た小さな花でした。」",
                              "explanation":  "Đáp án 4 đúng. Tác giả tiến lại gần vì tò mò muốn xác minh xem những đốm màu trắng bám đầy cành cây ở phía xa trông như tuyết kia rốt cuộc là thứ gì."
                          },
                          {
                              "id":  2,
                              "question":  "問2：②「とてもびっくりしました」とあるが、どうしてか。",
                              "options":  [
                                              "秋に咲く種類の桜があることを知ったから",
                                              "いろいろな色の桜があることがわかったから",
                                              "桜は春にだけ咲くと言うことがわかったから",
                                              "通りかかった人がその桜の名前を知っていたから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "秋に咲く種類の桜があることを知ったから",
                                                          "meaning":  "Vì biết được có một giống hoa anh đào nở vào mùa thu đông.",
                                                          "analysis":  "ĐÚNG: Tác giả ngạc nhiên vì trước giờ cứ nghĩ hoa anh đào chỉ nở mùa xuân: \u0027「『四季桜』といって、秋から冬に咲くのです。」... 桜は春にだけ咲くと思っていたので、とてもびっくりしました\u0027."
                                                      },
                                                      {
                                                          "option":  "いろいろな色の桜があることがわかったから",
                                                          "meaning":  "Biết có nhiều màu hoa anh đào.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "桜は春にだけ咲くと言うことがわかったから",
                                                          "meaning":  "Biết hoa chỉ nở mùa xuân.",
                                                          "analysis":  "Sai ngược: Đây là suy nghĩ cũ của tác giả."
                                                      },
                                                      {
                                                          "option":  "通りかかった人がその桜の名前を知っていたから",
                                                          "meaning":  "Vì người đi đường biết tên hoa.",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「「桜ですよ。『四季桜』といって、秋から冬に咲くのです。」と教えてくれました。桜は春にだけ咲くと思っていたので、とてもびっくりしました。」",
                              "explanation":  "Đáp án 1 đúng. Tác giả kinh ngạc vì phá vỡ định kiến bấy lâu rằng hoa anh đào chỉ nở vào mùa xuân, nay được tận mắt chứng kiến giống hoa Shikizakura nở rực rỡ vào giữa mùa thu đông."
                          },
                          {
                              "id":  3,
                              "question":  "問3：③「とてもうれしかったです」とあるが、何がうれしかったのか。",
                              "options":  [
                                              "コーヒー代だけでトーストなども食べられたこと",
                                              "「モーニング・サービス」と言うのが何か分かったこと",
                                              "名古屋で「モーニング・サービス」が生まれたこと",
                                              "トーストを頼んだらコーヒーがただで飲めたこと"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "コーヒー代だけでトーストなども食べられたこと",
                                                          "meaning":  "Chỉ cần trả tiền một ly cà phê là được thưởng thức thêm cả bánh mì nướng, trứng và salad miễn phí.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác: \u0027朝11時までにコーヒーか紅茶を頼むと、無料でトーストと卵とサラダがつくんです... おなかがすいていたので、とてもうれしかったです\u0027."
                                                      },
                                                      {
                                                          "option":  "「モーニング・サービス」と言うのが何か分かったこと",
                                                          "meaning":  "Hiểu ra nghĩa của từ Morning Service.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "名古屋で「モーニング・サービス」が生まれたこと",
                                                          "meaning":  "Dịch vụ ra đời tại Nagoya.",
                                                          "analysis":  "Sai: Đây là thông tin nền."
                                                      },
                                                      {
                                                          "option":  "トーストを頼んだらコーヒーがただで飲めたこと",
                                                          "meaning":  "Gọi bánh mì được miễn phí cà phê.",
                                                          "analysis":  "Sai ngược chiều: Gọi cà phê được tặng kèm bánh mì."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「「朝11時までにコーヒーか紅茶を頼むと、無料でトーストと卵とサラダがつくんです。」...おなかがすいていたので、とてもうれしかったです。」",
                              "explanation":  "Đáp án 1 đúng. Niềm vui của tác giả đến từ việc đang lúc đói bụng lại được phục vụ cả một bữa ăn sáng thịnh soạn (bánh mì, trứng, salad) hoàn toàn miễn phí chỉ với tiền mua một ly nước uống."
                          },
                          {
                              "id":  4,
                              "question":  "問4：この文章を書いた人は、日本の生活についてどう思っているか。",
                              "options":  [
                                              "まだまだいろいろな発見ができそうで、面白い。",
                                              "驚くことがけっこうあって、落ち着かない。",
                                              "自分の国と似ているところがあって、楽しい。",
                                              "分からないことがたくさんあって、生活しにくい。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "まだまだいろいろな発見ができそうで、面白い。",
                                                          "meaning":  "Cảm thấy cuộc sống còn rất nhiều điều thú vị để khám phá và vô cùng hào hứng.",
                                                          "analysis":  "ĐÚNG: Thể hiện rõ qua đoạn đầu và câu kết: \u0027まだ知らないことがけっこうあります... これからまたどんな経験ができるか、とても楽しみです\u0027."
                                                      },
                                                      {
                                                          "option":  "驚くことがけっこうあって、落ち着かない。",
                                                          "meaning":  "Nhiều bất ngờ làm tâm lý bất an.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "自分の国と似ているところがあって、楽しい。",
                                                          "meaning":  "Giống với quê hương.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "分からないことがたくさんあって、生活しにくい。",
                                                          "meaning":  "Nhiều điều không biết nên khó sống.",
                                                          "analysis":  "Sai lệch hoàn toàn thái độ tích cực của tác giả."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「私は日本に住んでもう2年になるので日本についていろいろを知っていると思っていましたが、まだ知らないことがけっこうあります。...これからまたどんな経験ができるか、とても楽しみです。」",
                              "explanation":  "Đáp án 1 đúng. Tác giả có cái nhìn rất lạc quan và hào hứng với cuộc sống tại Nhật Bản, luôn chào đón những trải nghiệm văn hóa bất ngờ và những phát hiện mới mẻ trong cuộc sống thường nhật."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-truongvan-09",
        "level":  "N3",
        "category":  "truongvan",
        "categoryName":  "Trường văn (Bài đọc dài)",
        "lessonNumber":  9,
        "title":  "忘れられないおかゆの味 (Hương vị bát cháo trắng khó phai)",
        "timeLimit":  600,
        "passage":  "\u003cp\u003e\u003cruby\u003e先日\u003crt\u003eせんじつ\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e大学\u003crt\u003eだいがく\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時代\u003crt\u003eじだい\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e友人\u003crt\u003eゆうじん\u003c/rt\u003e\u003c/ruby\u003eたちと、\u003cruby\u003e卒業\u003crt\u003eそつぎょう\u003c/rt\u003e\u003c/ruby\u003eして２０\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003eたった\u003cruby\u003e記念\u003crt\u003eきねん\u003c/rt\u003e\u003c/ruby\u003eに、フランス\u003cruby\u003e料理\u003crt\u003eりょうり\u003c/rt\u003e\u003c/ruby\u003eの①\u003cu\u003eレストラン\u003c/u\u003eで\u003cruby\u003e食事\u003crt\u003eしょくじ\u003c/rt\u003e\u003c/ruby\u003eをした。この\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e予約\u003crt\u003eよやく\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e取\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eれないことで\u003cruby\u003e有名\u003crt\u003eゆうめい\u003c/rt\u003e\u003c/ruby\u003eで、\u003cruby\u003e夜\u003crt\u003eよる\u003c/rt\u003e\u003c/ruby\u003eのコースはスープからデザートまでどれも\u003cruby\u003e本当\u003crt\u003eほんとう\u003c/rt\u003e\u003c/ruby\u003eにおいしく、サービスも\u003cruby\u003e一流\u003crt\u003eいちりゅう\u003c/rt\u003e\u003c/ruby\u003eだった。だれかが「\u003cruby\u003e値段\u003crt\u003eねだん\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e一流\u003crt\u003eいちりゅう\u003c/rt\u003e\u003c/ruby\u003eだよね。」と\u003cruby\u003e笑\u003crt\u003eわら\u003c/rt\u003e\u003c/ruby\u003eわせた。\u003c/p\u003e\u003cp\u003eいつのまにか\u003cruby\u003e話\u003crt\u003eはなし\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003eまで\u003cruby\u003e食\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eべた\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e中\u003crt\u003eなか\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e一番\u003crt\u003eいちばん\u003c/rt\u003e\u003c/ruby\u003eおいしかった\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e何\u003crt\u003eなに\u003c/rt\u003e\u003c/ruby\u003eか、に\u003cruby\u003e移\u003crt\u003eうつ\u003c/rt\u003e\u003c/ruby\u003eっていた。「Ｔホテルのすし」「レストランＫで\u003cruby\u003e食\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eべたステーキ」など、\u003cruby\u003e有名\u003crt\u003eゆうめい\u003c/rt\u003e\u003c/ruby\u003eなお\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e料理\u003crt\u003eりょうり\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e次々\u003crt\u003eつぎつぎ\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e出\u003crt\u003eで\u003c/rt\u003e\u003c/ruby\u003eてくる\u003cruby\u003e中\u003crt\u003eなか\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e山下\u003crt\u003eやました\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e君\u003crt\u003eくん\u003c/rt\u003e\u003c/ruby\u003eが「\u003cruby\u003e僕\u003crt\u003eぼく\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003eまで\u003cruby\u003e一番\u003crt\u003eいちばん\u003c/rt\u003e\u003c/ruby\u003eおいしいと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eったのは、おかゆだなあ。」と\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eったので、みんな②\u003cu\u003eびっくりしてしまった\u003c/u\u003e。\u003c/p\u003e\u003cp\u003eそれは、\u003cruby\u003e彼\u003crt\u003eかれ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e学生\u003crt\u003eがくせい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時代\u003crt\u003eじだい\u003c/rt\u003e\u003c/ruby\u003e、アパートで\u003cruby\u003e一人暮\u003crt\u003eひとりぐ\u003c/rt\u003e\u003c/ruby\u003eらしをしていたころの\u003cruby\u003e話\u003crt\u003eはなし\u003c/rt\u003e\u003c/ruby\u003eだった。ある\u003cruby\u003e時\u003crt\u003eとき\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e風邪\u003crt\u003eかぜ\u003c/rt\u003e\u003c/ruby\u003eで４０\u003cruby\u003e度\u003crt\u003eど\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e熱\u003crt\u003eねつ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e出\u003crt\u003eだ\u003c/rt\u003e\u003c/ruby\u003eし、３\u003cruby\u003e日\u003crt\u003eみっか\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e大学\u003crt\u003eだいがく\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e休\u003crt\u003eやす\u003c/rt\u003e\u003c/ruby\u003eんでしまったことがあったそうだ。\u003cruby\u003e熱\u003crt\u003eねつ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e下\u003crt\u003eさ\u003c/rt\u003e\u003c/ruby\u003eがらず、ずっと\u003cruby\u003e部屋\u003crt\u003eへや\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e寝\u003crt\u003eね\u003c/rt\u003e\u003c/ruby\u003eていたのだが、\u003cruby\u003e同\u003crt\u003eおな\u003c/rt\u003e\u003c/ruby\u003eじクラスの\u003cruby\u003e友達\u003crt\u003eともだち\u003c/rt\u003e\u003c/ruby\u003eがようすをみに\u003cruby\u003e来\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eてくれ、おかゆを\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eってくれた。それまでは\u003cruby\u003e何\u003crt\u003eなに\u003c/rt\u003e\u003c/ruby\u003eものどを\u003cruby\u003e通\u003crt\u003eとお\u003c/rt\u003e\u003c/ruby\u003eらなかったのだが、ようやく\u003cruby\u003e熱\u003crt\u003eねつ\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e下\u003crt\u003eさ\u003c/rt\u003e\u003c/ruby\u003eがり、\u003cruby\u003e初\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめて\u003cruby\u003e口\u003crt\u003eくち\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e入\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eれたのが、\u003cruby\u003e友達\u003crt\u003eともだち\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eってくれた③\u003cu\u003eおかゆ\u003c/u\u003eだった。お\u003cruby\u003e米\u003crt\u003eこめ\u003c/rt\u003e\u003c/ruby\u003eだけで\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eった\u003cruby\u003e白\u003crt\u003eしろ\u003c/rt\u003e\u003c/ruby\u003eくて\u003cruby\u003e柔\u003crt\u003eやわ\u003c/rt\u003e\u003c/ruby\u003eらかいおかゆで、\u003cruby\u003e卵\u003crt\u003eたまご\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e野菜\u003crt\u003eやさい\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e何\u003crt\u003eなに\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e入\u003crt\u003eはい\u003c/rt\u003e\u003c/ruby\u003eっていなかった。しかし、その\u003cruby\u003e時\u003crt\u003eとき\u003c/rt\u003e\u003c/ruby\u003eはそれが\u003cruby\u003e心\u003crt\u003eこころ\u003c/rt\u003e\u003c/ruby\u003eからおいしいと\u003cruby\u003e感\u003crt\u003eかん\u003c/rt\u003e\u003c/ruby\u003eじられ、２０\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e以上\u003crt\u003eいじょう\u003c/rt\u003e\u003c/ruby\u003eたった\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003eでも④\u003cu\u003e\u003cruby\u003e忘\u003crt\u003eわす\u003c/rt\u003e\u003c/ruby\u003eれられない\u003c/u\u003eのだと\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eう。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eが、\u003cruby\u003e彼\u003crt\u003eかれ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e隣\u003crt\u003eとなり\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e座\u003crt\u003eすわ\u003c/rt\u003e\u003c/ruby\u003eっている\u003cruby\u003e奥\u003crt\u003eおく\u003c/rt\u003e\u003c/ruby\u003eさんに「その\u003cruby\u003e友達\u003crt\u003eともだち\u003c/rt\u003e\u003c/ruby\u003eというのは、\u003cruby\u003e良子\u003crt\u003eよしこ\u003c/rt\u003e\u003c/ruby\u003eさん、\u003cruby\u003e君\u003crt\u003eきみ\u003c/rt\u003e\u003c/ruby\u003eだったんじゃないの？」と\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eくと、\u003cruby\u003e奥\u003crt\u003eおく\u003c/rt\u003e\u003c/ruby\u003eさんは「\u003cruby\u003e実\u003crt\u003eじつ\u003c/rt\u003e\u003c/ruby\u003eは、そうなんです。」と\u003cruby\u003e言\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eって\u003cruby\u003e笑\u003crt\u003eわら\u003c/rt\u003e\u003c/ruby\u003eった。\u003c/p\u003e",
        "fullTranslation":  "Hôm trước, nhân dịp kỷ niệm 20 năm ngày tốt nghiệp ra trường, tôi cùng nhóm bạn thân thời đại học đã tụ tập ăn tối tại một (1) nhà hàng món Pháp sang trọng. Nhà hàng này vốn nổi tiếng tới mức rất khó đặt bàn; thực đơn buổi tối từ món súp khai vị cho đến món tráng miệng món nào cũng ngon tuyệt đỉnh và dịch vụ phục vụ thuộc hàng đẳng cấp bậc nhất. Một người trong nhóm đùa: \u0027Và hóa đơn tính tiền chắc cũng thuộc hàng đẳng cấp nhất luôn nhỉ!\u0027, làm cả bàn phá lên cười.\n\nChẳng biết từ lúc nào, câu chuyện của chúng tôi chuyển sang chủ đề: Món ăn ngon nhất mà mỗi người từng được thưởng thức trong đời là gì? Giữa lúc mọi người thi nhau kể về những món ăn hảo hạng tại các nhà hàng danh tiếng như \u0027sushi ở khách sạn 5 sao T\u0027, \u0027món bò bít tết tại nhà hàng K\u0027... thì cậu bạn Yamashita lại cất lời: \u0027Món mà tớ thấy ngon nhất trong đời từ trước đến nay lại chính là món cháo trắng\u0027, khiến tất cả chúng tôi (2) vô cùng sửng sốt.\n\nĐó là câu chuyện thời sinh viên khi Yamashita còn sống một mình trong căn phòng trọ nhỏ. Lần đó, cậu bị cảm sốt cao tới 40 độ và phải nghỉ học đại học suốt 3 ngày liền. Cơn sốt li bì không dứt, cậu nằm bẹp trong phòng một mình, may sao có một người bạn cùng lớp ghé qua thăm và nấu cho cậu một bát cháo. Suốt mấy ngày trước đó cổ họng cậu chẳng thể nuốt nổi thứ gì, đến khi cơn sốt vừa hạ, thứ đầu tiên cậu nếm được chính là (3) bát cháo do người bạn ấy nấu. Đó chỉ là một bát cháo trắng nấu thuần bằng gạo mềm ấm, không hề có thêm trứng hay rau củ gì. Thế nhưng vào khoảnh khắc ấy, cậu cảm nhận được vị ngon sâu sắc từ tận đáy lòng, và ngay cả bây giờ khi đã hơn 20 năm trôi qua, hương vị ấy vẫn (4) không thể nào phai mờ trong tâm trí cậu.\n\nTôi liền quay sang hỏi người vợ đang ngồi ngay cạnh cậu ấy: \u0027Người bạn năm xưa đó có phải là em không hả Yoshiko?\u0027, cô vợ mỉm cười bẽn lẽn: \u0027Thực ra đúng là em đấy anh ạ\u0027.",
        "vocabulary":  [
                           {
                               "word":  "一流",
                               "hiragana":  "いちりゅう",
                               "meaning":  "Đẳng cấp nhất / Thượng hạng"
                           },
                           {
                               "word":  "おかゆ",
                               "hiragana":  "おかゆ",
                               "meaning":  "Cháo (nấu từ gạo)"
                           },
                           {
                               "word":  "一人暮らし",
                               "hiragana":  "ひとりぐらし",
                               "meaning":  "Sống một mình / Độc thân"
                           },
                           {
                               "word":  "のどを通る",
                               "hiragana":  "のどをとおる",
                               "meaning":  "Nuốt trôi qua cổ họng (ăn uống được)"
                           },
                           {
                               "word":  "柔らかい",
                               "hiragana":  "やわらかい",
                               "meaning":  "Mềm mại / Dễ tiêu"
                           },
                           {
                               "word":  "心から",
                               "hiragana":  "こころから",
                               "meaning":  "Từ tận đáy lòng"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜記念に (〜きねんに)",
                                 "meaning":  "Nhân dịp kỷ niệm..."
                             },
                             {
                                 "pattern":  "〜いつのまにか",
                                 "meaning":  "Chẳng biết từ lúc nào (tự nhiên chuyển biến)"
                             },
                             {
                                 "pattern":  "〜てくれる",
                                 "meaning":  "Ai đó làm việc gì tốt đẹp cho mình"
                             },
                             {
                                 "pattern":  "〜んじゃないの",
                                 "meaning":  "Chẳng phải là... hay sao? (phỏng đoán thân mật)"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：この文章によると、①「レストラン」はどんなレストランだったか。",
                              "options":  [
                                              "いつも込んでいるが、値段は高くなく、味もサービスもまあまあである。",
                                              "値段は高いが、人気があり、味もサービスも素晴らしい。",
                                              "おいしくて人気があるが、値段が高く、サービスはあまり良くない。",
                                              "予約が取りにくいが、おいしくて値段も安く、サービスも良い。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "いつも込んでいるが、値段は高くなく、味もサービスもまあまあである。",
                                                          "meaning":  "Đông khách nhưng giá không cao, vị và dịch vụ tàm tạm.",
                                                          "analysis":  "Sai: Giá đắt và dịch vụ cực tốt."
                                                      },
                                                      {
                                                          "option":  "値段は高いが、人気があり、味もサービスも素晴らしい。",
                                                          "meaning":  "Giá cả đắt đỏ nhưng vô cùng nổi tiếng, hương vị món ăn lẫn chất lượng dịch vụ đều tuyệt vời.",
                                                          "analysis":  "ĐÚNG: Khớp hoàn toàn với mô tả đoạn 1: nổi tiếng khó đặt bàn (\u0027予約が取れないことで有名\u0027), món nào cũng ngon tuyệt đỉnh (\u0027どれも本当においしく\u0027), dịch vụ hạng nhất (\u0027サービスも一流\u0027), và giá cả cũng đắt đỏ hàng đầu (\u0027値段も一流\u0027)."
                                                      },
                                                      {
                                                          "option":  "おいしくて人気があるが、値段が高く、サービスはあまり良くない。",
                                                          "meaning":  "Ngon và nổi tiếng nhưng dịch vụ không tốt.",
                                                          "analysis":  "Sai: Dịch vụ thượng hạng."
                                                      },
                                                      {
                                                          "option":  "予約が取りにくいが、おいしくて値段も安く、サービスも良い。",
                                                          "meaning":  "Khó đặt bàn nhưng giá rẻ.",
                                                          "analysis":  "Sai: Giá rất đắt (\u0027値段も一流\u0027)."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「この店は予約が取れないことで有名で、夜のコースはスープからデザートまでどれも本当においしく、サービスも一流だった。だれかが「値段も一流だよね。」と笑わせた。」",
                              "explanation":  "Đáp án 2 đúng. Nhà hàng Pháp nơi nhóm bạn họp mặt là một nhà hàng cao cấp nức tiếng, khó đặt chỗ, đồ ăn tinh tế thơm ngon, dịch vụ chuyên nghiệp tuyệt đỉnh tương xứng với mức giá đắt đỏ."
                          },
                          {
                              "id":  2,
                              "question":  "問2：②「びっくりしてしまった」とあるが、なぜか。",
                              "options":  [
                                              "山下君が、みんなが聞いたこともない珍しい料理の名前を言ったから",
                                              "山下君が、今日レストランで食べたおかゆのことを言ったから",
                                              "山下君が、みんなが予想もしていなかった料理の名前を言ったから",
                                              "山下君が、40度の熱を出したときにおかゆを食べたと言ったから"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "山下君が、みんなが聞いたこともない珍しい料理の名前を言ったから",
                                                          "meaning":  "Nêu tên một món ăn quý hiếm chưa ai nghe bao giờ.",
                                                          "analysis":  "Sai: Món cháo (おかゆ) ai cũng biết và rất bình dân."
                                                      },
                                                      {
                                                          "option":  "山下君が、今日レストランで食べたおかゆのことを言ったから",
                                                          "meaning":  "Nói về món cháo ăn ở nhà hàng hôm nay.",
                                                          "analysis":  "Sai: Nhà hàng Pháp không phục vụ cháo."
                                                      },
                                                      {
                                                          "option":  "山下君が、みんなが予想もしていなかった料理の名前を言ったから",
                                                          "meaning":  "Yamashita đã nêu tên một món ăn hoàn toàn bất ngờ ngoài dự đoán của mọi người (giữa lúc ai cũng kể về những món cao lương mỹ vị sang trọng).",
                                                          "analysis":  "ĐÚNG: Trong khi mọi người đua nhau kể sushi khách sạn 5 sao, bít tết đắt tiền thì Yamashita bất ngờ chọn món cháo trắng bình dân giản dị nhất."
                                                      },
                                                      {
                                                          "option":  "山下君が、40度の熱を出したときにおかゆを食べたと言ったから",
                                                          "meaning":  "Vì Yamashita bảo từng sốt 40 độ.",
                                                          "analysis":  "Sai: Đây là câu chuyện giải thích phía sau."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「「Tホテルのすし」「レストランKで食べたステーキ」など、有名なお店の料理が次々と出てくる中、山下君が「僕が今まで一番おいしいと思ったのは、おかゆだなあ。」と言ったので、みんなびっくりしてしまった。」",
                              "explanation":  "Đáp án 3 đúng. Mọi người đều ngỡ ngàng vì câu trả lời của Yamashita quá đỗi mộc mạc và nằm ngoài mọi dự đoán thông thường trong bối cảnh bữa tiệc sang trọng."
                          },
                          {
                              "id":  3,
                              "question":  "問3：③「おかゆ」を作った人は誰か。",
                              "options":  [
                                              "良子さんの友達",
                                              "「私」の友達の山下君",
                                              "「私」の奥さんの良子さん",
                                              "山下君の奥さんの良子さん"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "良子さんの友達",
                                                          "meaning":  "Bạn của chị Yoshiko.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "「私」の友達の山下君",
                                                          "meaning":  "Yamashita, bạn của tác giả.",
                                                          "analysis":  "Sai: Yamashita là người được nấu cho ăn."
                                                      },
                                                      {
                                                          "option":  "「私」の奥さんの良子さん",
                                                          "meaning":  "Chị Yoshiko, vợ của tác giả.",
                                                          "analysis":  "Sai: Yoshiko là vợ của Yamashita."
                                                      },
                                                      {
                                                          "option":  "山下君の奥さんの良子さん",
                                                          "meaning":  "Chị Yoshiko – người vợ đang ngồi cạnh anh Yamashita.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với đoạn kết: người bạn cùng lớp ghé phòng trọ nấu cháo năm xưa chính là người vợ Yoshiko hiện tại của Yamashita (\u0027私が、彼の隣に座っている奥さんに「その友達というのは、良子さん、君だったんじゃないの?」と聞くと、奥さんは「実は、そうなんです。」と言って笑った\u0027)."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「私が、彼の隣に座っている奥さんに「その友達というのは、良子さん、君だったんじゃないの?」と聞くと、奥さんは「実は、そうなんです。」と言って笑った。」",
                              "explanation":  "Đáp án 4 đúng. Người bạn cùng lớp tận tình nấu bát cháo ấm lòng năm nào cho chàng sinh viên ốm li bì chính là cô bạn Yoshiko, người sau này đã nên duyên vợ chồng cùng Yamashita."
                          },
                          {
                              "id":  4,
                              "question":  "問4：④「忘れられない」とあるが、何が忘れられないのか。",
                              "options":  [
                                              "風邪のときに作ってもらったおかゆの味",
                                              "風邪のときに食べた卵や野菜が入った栄養いっぱいのおかゆの味",
                                              "友達がおかゆを作って、風邪をひいた自分の見舞いに来てくれたこと",
                                              "友達が作ってくれたおかゆのおかげで、早く風邪がよくなったこと"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "風邪のときに作ってもらったおかゆの味",
                                                          "meaning":  "Hương vị thơm ngon ấm áp từ tận đáy lòng của bát cháo trắng được bạn nấu cho ăn lúc bị ốm.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với trọng tâm: \u0027初めて口に入れたのが、友達が作ってくれたおかゆだった... その時はそれが心からおいしいと感じられ、20年以上たった今でも忘れられないのだと言う\u0027."
                                                      },
                                                      {
                                                          "option":  "風邪のときに食べた卵や野菜が入った栄養いっぱいのおかゆの味",
                                                          "meaning":  "Vị cháo đầy đủ dinh dưỡng có trứng và rau.",
                                                          "analysis":  "Sai: Bát cháo chỉ có gạo trắng, không có trứng rau gì (\u0027卵も野菜も何も入っていなかった\u0027)."
                                                      },
                                                      {
                                                          "option":  "友達がおかゆを作って、風邪をひいた自分の見舞いに来てくれたこと",
                                                          "meaning":  "Việc bạn đến thăm.",
                                                          "analysis":  "Sai trọng tâm: Chủ đề đang nói về món ăn có hương vị ngon nhất đời (一番おいしかった物)."
                                                      },
                                                      {
                                                          "option":  "友達が作ってくれたおかゆのおかげで、早く風邪がよくなったこと",
                                                          "meaning":  "Nhờ cháo mà nhanh khỏi ốm.",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「初めて口に入れたのが、友達が作ってくれたおかゆだった。お米だけで作った白くて柔らかいおかゆで、卵も野菜も何も入っていなかった。しかし、その時はそれが心からおいしいと感じられ、20年以上たった今でも忘れられないのだと言う。」",
                              "explanation":  "Đáp án 1 đúng. Điều không thể nào quên chính là cảm giác ngon miệng và ấm áp ngập tràn yêu thương từ hương vị của bát cháo trắng đơn sơ mà người bạn gái nấu cho giữa lúc anh đau ốm bơ vơ một mình."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-truongvan-10",
        "level":  "N3",
        "category":  "truongvan",
        "categoryName":  "Trường văn (Bài đọc dài)",
        "lessonNumber":  10,
        "title":  "古着のリサイクルと新しい技術 (Tái chế quần áo cũ và công nghệ dệt mới)",
        "timeLimit":  600,
        "passage":  "\u003cp\u003e\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003eには①\u003cu\u003e\u003cruby\u003e眠\u003crt\u003eねむ\u003c/rt\u003e\u003c/ruby\u003eっている\u003cruby\u003e服\u003crt\u003eふく\u003c/rt\u003e\u003c/ruby\u003e\u003c/u\u003eがたくさんある。サイズが\u003cruby\u003e合\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eわなくなったり、\u003cruby\u003e流行\u003crt\u003eりゅうこう\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e変\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eわったりして、もう\u003cruby\u003e着\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eなくなったものだ。\u003cruby\u003e流行遅\u003crt\u003eりゅうこうおく\u003c/rt\u003e\u003c/ruby\u003eれのものは、\u003cruby\u003e家族\u003crt\u003eかぞく\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e友達\u003crt\u003eともだち\u003c/rt\u003e\u003c/ruby\u003eにあげたくても\u003cruby\u003e誰\u003crt\u003eだれ\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e欲\u003crt\u003eほ\u003c/rt\u003e\u003c/ruby\u003eしがらないし、\u003cruby\u003e古着\u003crt\u003eふるぎ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eっているリサイクル\u003cruby\u003e店\u003crt\u003eてん\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eってくれない。\u003cruby\u003e捨\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eてるのはもったいないと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eっている\u003cruby\u003e間\u003crt\u003eあいだ\u003c/rt\u003e\u003c/ruby\u003eに、\u003cruby\u003e着\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eない\u003cruby\u003e服\u003crt\u003eふく\u003c/rt\u003e\u003c/ruby\u003eがどんどん\u003cruby\u003e増\u003crt\u003eふ\u003c/rt\u003e\u003c/ruby\u003eえてしまったのである。\u003c/p\u003e\u003cp\u003eところが、\u003cruby\u003e先日\u003crt\u003eせんじつ\u003c/rt\u003e\u003c/ruby\u003e、②\u003cu\u003eこんなサービス\u003c/u\u003eをしている\u003cruby\u003e衣料品\u003crt\u003eいりょうひん\u003c/rt\u003e\u003c/ruby\u003eメーカー（\u003cruby\u003e注\u003crt\u003eちゅう\u003c/rt\u003e\u003c/ruby\u003e１）があると\u003cruby\u003e知\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eった。このメーカーの\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e着\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eなくなった\u003cruby\u003e服\u003crt\u003eふく\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e持\u003crt\u003eも\u003c/rt\u003e\u003c/ruby\u003eっていくと、その\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e使\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eえる\u003cruby\u003e割引券\u003crt\u003eわりびきけん\u003c/rt\u003e\u003c/ruby\u003eをくれるのだ。これなら、\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e中\u003crt\u003eなか\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e片付\u003crt\u003eかたづ\u003c/rt\u003e\u003c/ruby\u003eくし、\u003cruby\u003e割引券\u003crt\u003eわりびきけん\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e服\u003crt\u003eふく\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e安\u003crt\u003eやす\u003c/rt\u003e\u003c/ruby\u003eく\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eえる。\u003c/p\u003e\u003cp\u003eでは、\u003cruby\u003e客\u003crt\u003eきゃく\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e持\u003crt\u003eも\u003c/rt\u003e\u003c/ruby\u003eっていった\u003cruby\u003e古\u003crt\u003eふる\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e服\u003crt\u003eふく\u003c/rt\u003e\u003c/ruby\u003eはどうなるのだろうか。\u003cruby\u003e以前\u003crt\u003eいぜん\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e古\u003crt\u003eふる\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e服\u003crt\u003eふく\u003c/rt\u003e\u003c/ruby\u003eの８\u003cruby\u003e割\u003crt\u003eわり\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e捨\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eてられ、\u003cruby\u003e残\u003crt\u003eのこ\u003c/rt\u003e\u003c/ruby\u003eりの２\u003cruby\u003e割\u003crt\u003eわり\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e古着\u003crt\u003eふるぎ\u003c/rt\u003e\u003c/ruby\u003eとして\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eるか、ぞうきんにするしかなかったそうだ。しかし、\u003cruby\u003e最近\u003crt\u003eさいきん\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e古\u003crt\u003eふる\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e服\u003crt\u003eふく\u003c/rt\u003e\u003c/ruby\u003eから「\u003cruby\u003e新\u003crt\u003eあたら\u003c/rt\u003e\u003c/ruby\u003eしい\u003cruby\u003e糸\u003crt\u003eいと\u003c/rt\u003e\u003c/ruby\u003e」を\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eる\u003cruby\u003e技術\u003crt\u003eぎじゅつ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e考\u003crt\u003eかんが\u003c/rt\u003e\u003c/ruby\u003eえられた。この\u003cruby\u003e糸\u003crt\u003eいと\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e使\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eって、\u003cruby\u003e最新\u003crt\u003eさいしん\u003c/rt\u003e\u003c/ruby\u003eのデザイン（\u003cruby\u003e注\u003crt\u003eちゅう\u003c/rt\u003e\u003c/ruby\u003e２）の\u003cruby\u003e新\u003crt\u003eあたら\u003c/rt\u003e\u003c/ruby\u003eしい\u003cruby\u003e服\u003crt\u003eふく\u003c/rt\u003e\u003c/ruby\u003eに③\u003cu\u003e\u003cruby\u003e生\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eまれ\u003cruby\u003e変\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eわらせる\u003c/u\u003eのだ。この\u003cruby\u003e技術\u003crt\u003eぎじゅつ\u003c/rt\u003e\u003c/ruby\u003eのおかげで、\u003cruby\u003e古\u003crt\u003eふる\u003c/rt\u003e\u003c/ruby\u003eいものからそれより\u003cruby\u003e価値\u003crt\u003eかち\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e高\u003crt\u003eたか\u003c/rt\u003e\u003c/ruby\u003eいものを\u003cruby\u003e作\u003crt\u003eつく\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e出\u003crt\u003eだ\u003c/rt\u003e\u003c/ruby\u003eすことも\u003cruby\u003e可能\u003crt\u003eかのう\u003c/rt\u003e\u003c/ruby\u003eになったのである。これは④\u003cu\u003eすばらしいこと\u003c/u\u003eだと\u003cruby\u003e思\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eう。\u003c/p\u003e\u003cp\u003e\u003cruby\u003e今\u003crt\u003eいま\u003c/rt\u003e\u003c/ruby\u003eまで、\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e古\u003crt\u003eふる\u003c/rt\u003e\u003c/ruby\u003eいものを\u003cruby\u003e捨\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eてるのはもったいないという\u003cruby\u003e気持\u003crt\u003eきも\u003c/rt\u003e\u003c/ruby\u003eちがしていた。でも、\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e古\u003crt\u003eふる\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e服\u003crt\u003eふく\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e新\u003crt\u003eあたら\u003c/rt\u003e\u003c/ruby\u003eしい\u003cruby\u003e流行\u003crt\u003eりゅうこう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e服\u003crt\u003eふく\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e生\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eまれるかもしれないと\u003cruby\u003e考\u003crt\u003eかんが\u003c/rt\u003e\u003c/ruby\u003eえたら、うれしくなってきた。\u003c/p\u003e\u003cp class=\"annotation-text\"\u003e（注１）衣料品メーカー：ここでは、衣服を作って売る会社。\u003cbr\u003e（注２）デザイン：ここでは、服を美しく見せるために考えられた形、色など\u003c/p\u003e",
        "fullTranslation":  "Trong nhà tôi có rất nhiều (1) quần áo đang nằm ngủ yên trong tủ. Đó là những bộ quần áo không còn mặc tới do bị chật kích cỡ hoặc do lỗi mốt thời trang. Những bộ đồ đã lỗi mốt thì dù có muốn đem tặng cho người thân hay bạn bè cũng chẳng ai muốn lấy, còn các tiệm bán đồ cũ (second-hand) cũng từ chối thu mua. Cứ đắn đo tiếc của không nỡ vứt đi, số lượng quần áo không mặc tới trong nhà tôi lại ngày một chất đống nhiều thêm.\n\nThế nhưng hôm trước, tôi vừa biết đến một hãng sản xuất hàng may mặc có triển khai (2) một dịch vụ vô cùng đặc biệt: Hễ khách hàng đem quần áo cũ không mặc đến cửa hàng của hãng, họ sẽ tặng một phiếu giảm giá (voucher) để sử dụng mua hàng tại chính chuỗi cửa hàng đó. Làm như thế này, nhà cửa vừa được dọn dẹp ngăn nắp, mà lại vừa có thể dùng phiếu giảm giá để mua đồ mới với giá rẻ hơn.\n\nVậy những bộ quần áo cũ mà khách hàng mang đến cửa hàng sẽ được xử lý ra sao? Trước đây, khoảng 80% quần áo cũ đều bị vứt vào bãi rác, còn 20% còn lại chỉ có thể bán lại làm đồ cũ giá bèo hoặc cắt ra làm giẻ lau sàn. Thế nhưng gần đây, các nhà khoa học đã phát minh ra công nghệ tái chế tạo ra \u0027sợi dệt mới\u0027 từ chính quần áo cũ. Người ta dùng loại sợi mới này để (3) tái sinh thành những bộ quần áo thời trang mới toanh mang kiểu dáng thiết kế hiện đại nhất. Nhờ công nghệ đột phá này, việc tạo ra những sản phẩm có giá trị cao hơn từ những thứ đồ cũ kỹ đã trở nên hoàn toàn khả thi. Tôi thấy đây thực sự là (4) một điều vô cùng tuyệt vời.\n\nTừ trước đến nay, tôi luôn có tâm lý tiếc nuối khi phải vứt bỏ những món đồ cũ. Nhưng giờ đây, khi nghĩ đến việc từ những bộ quần áo cũ kỹ của mình có thể sẽ tái sinh thành những bộ cánh thời trang sành điệu mới, tôi lại cảm thấy vô cùng vui sướng và phấn khởi.",
        "vocabulary":  [
                           {
                               "word":  "眠っている服",
                               "hiragana":  "ねむっているふく",
                               "meaning":  "Quần áo xếp xó / Nằm ngủ yên trong tủ không dùng"
                           },
                           {
                               "word":  "流行遅れ",
                               "hiragana":  "りゅうこうおくれ",
                               "meaning":  "Lỗi thời / Lỗi mốt"
                           },
                           {
                               "word":  "もったいない",
                               "hiragana":  "もったいない",
                               "meaning":  "Lãng phí / Uổng phí / Tiếc của"
                           },
                           {
                               "word":  "割引券",
                               "hiragana":  "わりびきけん",
                               "meaning":  "Phiếu giảm giá (coupon/voucher)"
                           },
                           {
                               "word":  "ぞうきん",
                               "hiragana":  "ぞうきん",
                               "meaning":  "Giẻ lau nhà / Giẻ lau bàn"
                           },
                           {
                               "word":  "生まれ変わる",
                               "hiragana":  "うまれかわる",
                               "meaning":  "Được tái sinh / Lột xác thành diện mạo mới"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜うちに / 〜ている間に",
                                 "meaning":  "Trong khi / Trong lúc đang mải..."
                             },
                             {
                                 "pattern":  "〜し〜し",
                                 "meaning":  "Vừa... lại vừa... (liệt kê lý do/lợi ích)"
                             },
                             {
                                 "pattern":  "〜しかない",
                                 "meaning":  "Chỉ còn cách là... / Không còn lựa chọn nào khác ngoài..."
                             },
                             {
                                 "pattern":  "〜のおかげで",
                                 "meaning":  "Nhờ có... (mang lại thành quả tốt đẹp)"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：①「眠っている服」というのは、どのような服か。",
                              "options":  [
                                              "寝るときに着ている服",
                                              "もう着なくなってしまった服",
                                              "売るためにしまってある服",
                                              "捨てようと思っている服"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "寝るときに着ている服",
                                                          "meaning":  "Quần áo ngủ.",
                                                          "analysis":  "Sai: Hiểu nhầm theo nghĩa đen của chữ 眠る."
                                                      },
                                                      {
                                                          "option":  "もう着なくなってしまった服",
                                                          "meaning":  "Những bộ quần áo đã không còn mặc đến nữa (do chật hoặc lỗi mốt) bị xếp xó trong tủ.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với giải thích: \u0027サイズが合わなくなったり、流行が変わったりして、もう着なくなったものだ\u0027."
                                                      },
                                                      {
                                                          "option":  "売るためにしまってある服",
                                                          "meaning":  "Quần áo cất để đem bán.",
                                                          "analysis":  "Sai: Tiệm đồ cũ cũng không mua."
                                                      },
                                                      {
                                                          "option":  "捨てようと思っている服",
                                                          "meaning":  "Quần áo định vứt đi.",
                                                          "analysis":  "Sai: Tác giả tiếc không nỡ vứt (\u0027捨てるのはもったいない\u0027)."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「私の家には眠っている服がたくさんある。サイズが合わなくなったり、流行が変わったりして、もう着なくなったものだ。」",
                              "explanation":  "Đáp án 2 đúng. \u0027Quần áo ngủ trong tủ\u0027 là hình ảnh ẩn dụ chỉ những bộ trang phục bị cất xó lâu ngày không đụng tới vì không còn vừa vặn hoặc đã lỗi thời theo năm tháng."
                          },
                          {
                              "id":  2,
                              "question":  "問2：②「こんなサービス」とあるが、古い服を店に持っていくと、どんなサービスが受けられるか。",
                              "options":  [
                                              "代わりにその店の割引券がもらえる。",
                                              "代わりに家の中の片付けをしてもらえる。",
                                              "持っていった服を買ってもらえる。",
                                              "持っていった服を新しい服に交換してもらえる。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "代わりにその店の割引券がもらえる。",
                                                          "meaning":  "Được tặng phiếu giảm giá dùng mua hàng tại chính chuỗi cửa hàng đó.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với mô tả: \u0027このメーカーの店に着なくなった服を持っていくと、その店で使える割引券をくれるのだ\u0027."
                                                      },
                                                      {
                                                          "option":  "代わりに家の中の片付けをしてもらえる。",
                                                          "meaning":  "Được nhân viên đến dọn dẹp nhà giúp.",
                                                          "analysis":  "Sai: Mang đồ đi bỏ thì nhà tự gọn gàng, không phải có dịch vụ dọn hộ."
                                                      },
                                                      {
                                                          "option":  "持っていった服を買ってもらえる。",
                                                          "meaning":  "Cửa hàng mua lại bằng tiền mặt.",
                                                          "analysis":  "Sai: Cửa hàng tặng phiếu giảm giá chứ không trả tiền mặt."
                                                      },
                                                      {
                                                          "option":  "持っていった服を新しい服に交換してもらえる。",
                                                          "meaning":  "Đổi trực tiếp lấy quần áo mới.",
                                                          "analysis":  "Sai: Nhận phiếu giảm giá để mua hàng rẻ hơn."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「このメーカーの店に着なくなった服を持っていくと、その店で使える割引券をくれるのだ。」",
                              "explanation":  "Đáp án 1 đúng. Khách hàng mang quần áo cũ đến trả cho nhà sản xuất sẽ nhận được voucher/phiếu ưu đãi giảm giá áp dụng khi mua các sản phẩm mới tại cửa hàng."
                          },
                          {
                              "id":  3,
                              "question":  "問3：何を③「生まれ変わらせる」のか。",
                              "options":  [
                                              "古い服",
                                              "新しい糸",
                                              "技術",
                                              "割引券"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "古い服",
                                                          "meaning":  "Những bộ quần áo cũ kỹ.",
                                                          "analysis":  "ĐÚNG: Quần áo cũ được thu hồi, qua công nghệ tái chế tạo thành sợi mới để \u0027tái sinh thành những bộ quần áo thời trang kiểu dáng mới nhất\u0027 (\u0027この糸を使って、最新のデザインの新しい服に生まれ変わらせるのだ... 古いものからそれより価値の高いものを作り出す\u0027)."
                                                      },
                                                      {
                                                          "option":  "新しい糸",
                                                          "meaning":  "Sợi dệt mới.",
                                                          "analysis":  "Sai: Sợi dệt là vật liệu trung gian dùng để may thành đồ mới."
                                                      },
                                                      {
                                                          "option":  "技術",
                                                          "meaning":  "Công nghệ.",
                                                          "analysis":  "Sai: Công nghệ là phương tiện."
                                                      },
                                                      {
                                                          "option":  "割引券",
                                                          "meaning":  "Phiếu giảm giá.",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「しかし、最近、古い服から「新しい糸」を作る技術が考えられた。この糸を使って、最新のデザインの新しい服に生まれ変わらせるのだ。」",
                              "explanation":  "Đáp án 1 đúng. Đối tượng được \u0027tái sinh\u0027 (lột xác thành hình hài mới) chính là những bộ quần áo cũ, từ chỗ là rác thải nay được chế biến thành sợi dệt để tạo nên những trang phục thời thượng mới."
                          },
                          {
                              "id":  4,
                              "question":  "問4：④「すばらしいこと」とあるが、どのような点がすばらしいのか。",
                              "options":  [
                                              "昔流行した形の服を店に置いて、もう一度流行させる点",
                                              "古い服をきれいにして、新しい流行の服に見せる点",
                                              "古いものの中に価値を見つけて、そのままの良さを大切にする点",
                                              "価値の低いものを利用して、それより価値の高いものを生み出す点"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "昔流行した形の服を店に置いて、もう一度流行させる点",
                                                          "meaning":  "Làm mốt cũ thịnh hành lại.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "古い服をきれいにして、新しい流行の服に見せる点",
                                                          "meaning":  "Tẩy rửa đồ cũ cho giống đồ mới.",
                                                          "analysis":  "Sai: Tái chế thành sợi dệt mới hoàn toàn."
                                                      },
                                                      {
                                                          "option":  "古いものの中に価値を見つけて、そのままの良さを大切にする点",
                                                          "meaning":  "Giữ nguyên vẹn nét đẹp của đồ cũ.",
                                                          "analysis":  "Sai: Đồ cũ được biến đổi công nghệ cao."
                                                      },
                                                      {
                                                          "option":  "価値の低いものを利用して、それより価値の高いものを生み出す点",
                                                          "meaning":  "Tận dụng những thứ phế liệu giá trị thấp (quần áo cũ) để tạo ra những sản phẩm có giá trị gia tăng cao hơn nhiều (quần áo thời trang mới - Upcycling).",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với lý giải: \u0027この技術のおかげで、古いものからそれより価値の高いものを作り出すことも可能になったのである。これはすばらしいことだと思う\u0027."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「この技術のおかげで、古いものからそれより価値の高いものを作り出すことも可能になったのである。これはすばらしいことだと思う。」",
                              "explanation":  "Đáp án 4 đúng. Điểm tuyệt vời mang tính đột phá của công nghệ tái chế này là nâng tầm giá trị (Upcycling) – biến những phế thải quần áo cũ bỏ đi thành nguồn nguyên liệu quý giá để sản xuất ra những sản phẩm thời trang chất lượng cao."
                          }
                      ]
    }
],
        "thongtin": [
    {
        "id":  "dokkai-n3-thongtin-01",
        "level":  "N3",
        "category":  "thongtin",
        "categoryName":  "Tìm thông tin (情報検索)",
        "lessonNumber":  1,
        "title":  "わかば市運動公園 ご利用案内 (Thông báo sử dụng Công viên thể thao Wakaba)",
        "timeLimit":  300,
        "passage":  "\u003cdiv class=\"dokkai-notice-box\"\u003e\u003ch3 class=\"notice-title text-center\"\u003e\u003cruby\u003e市\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e運動\u003crt\u003eうんどう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e公園\u003crt\u003eこうえん\u003c/rt\u003e\u003c/ruby\u003e　ご\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e案内\u003crt\u003eあんない\u003c/rt\u003e\u003c/ruby\u003e\u003c/h3\u003e\u003cp class=\"notice-subtitle text-center\"\u003eわかば\u003cruby\u003e市\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e運動\u003crt\u003eうんどう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e公園\u003crt\u003eこうえん\u003c/rt\u003e\u003c/ruby\u003e、どなたでもご\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eになれます！\u003c/p\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e【ご\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e方法\u003crt\u003eほうほう\u003c/rt\u003e\u003c/ruby\u003e】\u003c/h4\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e● \u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみの\u003cruby\u003e受付\u003crt\u003eうけつけ\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e日\u003crt\u003eび\u003c/rt\u003e\u003c/ruby\u003eの１か\u003cruby\u003e月\u003crt\u003eげつ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eから、\u003cruby\u003e電話\u003crt\u003eでんわ\u003c/rt\u003e\u003c/ruby\u003eとインターネットで\u003cruby\u003e行\u003crt\u003eおこな\u003c/rt\u003e\u003c/ruby\u003eいます。\u003cbr\u003eなお、\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみは１８\u003cruby\u003e歳\u003crt\u003eさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e以上\u003crt\u003eいじょう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003eがしてください。\u003c/li\u003e\u003cli\u003e● \u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003eは、１つのグループで\u003cruby\u003e運動場\u003crt\u003eうんどうじょう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e全体\u003crt\u003eぜんたい\u003c/rt\u003e\u003c/ruby\u003eまたは\u003cruby\u003e体育館\u003crt\u003eたいいくかん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e全体\u003crt\u003eぜんたい\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003eです。\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e当日\u003crt\u003eとうじつ\u003c/rt\u003e\u003c/ruby\u003eまでに\u003cruby\u003e受付\u003crt\u003eうけつけ\u003c/rt\u003e\u003c/ruby\u003eでお\u003cruby\u003e支払\u003crt\u003eしはら\u003c/rt\u003e\u003c/ruby\u003eいください。\u003c/li\u003e\u003cli\u003e● わかば\u003cruby\u003e市民\u003crt\u003eしみん\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e割引\u003crt\u003eわりびき\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eできますので、\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみのときにお\u003cruby\u003e知\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eらせください。\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e支払\u003crt\u003eしはら\u003c/rt\u003e\u003c/ruby\u003eわれるときに\u003cruby\u003e住所\u003crt\u003eじゅうしょ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e証明\u003crt\u003eしょうめい\u003c/rt\u003e\u003c/ruby\u003eできるものをいただきます。\u003c/li\u003e\u003cli\u003e● \u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみをキャンセルする\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e早\u003crt\u003eはや\u003c/rt\u003e\u003c/ruby\u003eめにご\u003cruby\u003e連絡\u003crt\u003eれんらく\u003c/rt\u003e\u003c/ruby\u003eください。３\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eよりキャンセル\u003cruby\u003e料\u003crt\u003eりょう\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e発生\u003crt\u003eはっせい\u003c/rt\u003e\u003c/ruby\u003eしますので、ご\u003cruby\u003e注意\u003crt\u003eちゅうい\u003c/rt\u003e\u003c/ruby\u003eください。\u003cbr\u003eキャンセル\u003cruby\u003e料\u003crt\u003eりょう\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e前日\u003crt\u003eぜんじつ\u003c/rt\u003e\u003c/ruby\u003eまでは５０％、\u003cruby\u003e当日\u003crt\u003eとうじつ\u003c/rt\u003e\u003c/ruby\u003eは１００％になります。\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4 class=\"text-center\"\u003e【ご\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e（１\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e）】\u003c/h4\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003cthead\u003e\u003ctr\u003e\u003cth colspan=\"3\" rowspan=\"2\"\u003e\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth colspan=\"3\"\u003e\u003cruby\u003e運動場\u003crt\u003eうんどうじょう\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth rowspan=\"2\"\u003e\u003cruby\u003e体育館\u003crt\u003eたいいくかん\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e\u003csmall\u003e9:00〜22:00\u003c/small\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e早朝\u003crt\u003eそうちょう\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e\u003csmall\u003e7:00〜9:00\u003c/small\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e昼間\u003crt\u003eちゅうかん\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e\u003csmall\u003e9:00〜17:00\u003c/small\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e夜間\u003crt\u003eやかん\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e\u003csmall\u003e17:00〜22:00\u003c/small\u003e\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003cth rowspan=\"2\"\u003e\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth rowspan=\"2\"\u003e\u003cruby\u003e市民\u003crt\u003eしみん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e平日\u003crt\u003eへいじつ\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd rowspan=\"2\"\u003e600\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e800\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e1,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e1,200\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e土\u003crt\u003eど\u003c/rt\u003e\u003c/ruby\u003e・\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e・\u003cruby\u003e祝日\u003crt\u003eしゅくじつ\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e1,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e1,200\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e1,400\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth rowspan=\"2\"\u003e\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth rowspan=\"2\"\u003e\u003cruby\u003e市民\u003crt\u003eしみん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e以外\u003crt\u003eいがい\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e平日\u003crt\u003eへいじつ\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd rowspan=\"2\"\u003e800\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e1,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e1,200\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e1,400\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e土\u003crt\u003eど\u003c/rt\u003e\u003c/ruby\u003e・\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e・\u003cruby\u003e祝日\u003crt\u003eしゅくじつ\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e1,200\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e1,400\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e1,600\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003cp class=\"notice-note\"\u003e＊１、２\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e昼間\u003crt\u003eちゅうかん\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e夜間\u003crt\u003eやかん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e運動場\u003crt\u003eうんどうじょう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e使用\u003crt\u003eしよう\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003eは２００\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003eずつ\u003cruby\u003e割引\u003crt\u003eわりびき\u003c/rt\u003e\u003c/ruby\u003eします。\u003c/p\u003e\u003c/div\u003e\u003cdiv class=\"notice-footer text-right\"\u003e\u003cp\u003eわかば\u003cruby\u003e市\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e運動\u003crt\u003eうんどう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e公園\u003crt\u003eこうえん\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e\u003cruby\u003e電話\u003crt\u003eでんわ\u003c/rt\u003e\u003c/ruby\u003e：(012) 345-6789 (9:00〜20:00)\u003cbr\u003ehttp://www.wakaba.sp.com\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
        "fullTranslation":  "【HƯỚNG DẪN SỬ DỤNG CÔNG VIÊN THỂ THAO THÀNH PHỐ WAKABA】\nCông viên thể thao Wakaba hân hạnh chào đón tất cả mọi người!\n\n■ PHƯƠNG THỨC SỬ DỤNG:\n● Tiếp nhận đăng ký: Bắt đầu từ trước ngày sử dụng 1 tháng, tiếp nhận qua điện thoại và internet. Lưu ý: Người đứng tên đăng ký phải từ 18 tuổi trở lên.\n● Mức phí: Là mức phí áp dụng cho 1 nhóm thuê toàn bộ sân vận động hoặc toàn bộ nhà thi đấu thể chất. Vui lòng thanh toán tại quầy lễ tân muộn nhất vào ngày sử dụng.\n● Cư dân thành phố Wakaba được áp dụng mức giá ưu đãi (giảm giá), vui lòng thông báo lúc đăng ký. Khi thanh toán tiền, vui lòng xuất trình giấy tờ chứng minh địa chỉ cư trú.\n● Trường hợp hủy đăng ký, xin vui lòng liên hệ sớm. Phí hủy sẽ phát sinh từ 3 ngày trước ngày sử dụng: Hủy đến trước ngày sử dụng chịu phí 50%, hủy đúng ngày sử dụng chịu phí 100%.\n\n■ THỜI GIAN VÀ MỨC PHÍ SỬ DỤNG (CHO 1 GIỜ):\n[Sân vận động - 運動場]:\n- Sáng sớm (7:00〜9:00): Cư dân 600 yên | Ngoài cư dân 800 yên.\n- Ban ngày (9:00〜17:00):\n  + Cư dân: Ngày thường 800 yên / Thứ 7, CN, Lễ 1,000 yên.\n  + Ngoài cư dân: Ngày thường 1,000 yên / Thứ 7, CN, Lễ 1,200 yên.\n- Buổi tối (17:00〜22:00):\n  + Cư dân: Ngày thường 1,000 yên / Thứ 7, CN, Lễ 1,200 yên.\n  + Ngoài cư dân: Ngày thường 1,200 yên / Thứ 7, CN, Lễ 1,400 yên.\n\n[Nhà thi đấu thể chất - 体育館 (9:00〜22:00)]:\n- Cư dân: Ngày thường 1,200 yên / Thứ 7, CN, Lễ 1,400 yên.\n- Ngoài cư dân: Ngày thường 1,400 yên / Thứ 7, CN, Lễ 1,600 yên.\n\n※ Lưu ý đặc biệt: Trường hợp sử dụng sân vận động vào ban ngày và buổi tối trong tháng 1 và tháng 2 sẽ được giảm giá 200 yên cho mỗi giờ.\n\nCông viên thể thao thành phố Wakaba\nĐiện thoại: (012) 345-6789 (9:00〜20:00) | Website: http://www.wakaba.sp.com",
        "vocabulary":  [
                           {
                               "word":  "運動公園",
                               "hiragana":  "うんどうこうえん",
                               "meaning":  "Công viên thể thao"
                           },
                           {
                               "word":  "市民以外",
                               "hiragana":  "しみんいがい",
                               "meaning":  "Người ngoài thành phố / Không phải cư dân"
                           },
                           {
                               "word":  "祝日",
                               "hiragana":  "しゅくじつ",
                               "meaning":  "Ngày lễ quốc gia"
                           },
                           {
                               "word":  "割引",
                               "hiragana":  "わりびき",
                               "meaning":  "Giảm giá / Chiết khấu"
                           },
                           {
                               "word":  "持参する",
                               "hiragana":  "じさんする",
                               "meaning":  "Mang theo bên mình"
                           },
                           {
                               "word":  "キャンセル料",
                               "hiragana":  "きゃんせるりょう",
                               "meaning":  "Phí hủy đăng ký"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜から",
                                 "meaning":  "Bắt đầu từ thời điểm... (bắt đầu nhận đơn từ trước 1 tháng)"
                             },
                             {
                                 "pattern":  "〜までに",
                                 "meaning":  "Trước hạn chót... / Muộn nhất là vào thời điểm..."
                             },
                             {
                                 "pattern":  "〜ずつ",
                                 "meaning":  "Từng... một / Mỗi lần... (200円ずつ: giảm 200 yên mỗi giờ)"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：チャンさんは、わかば市運動公園の運動場で、友達とサッカーをしたいと考えている。2月11日の日曜日、午前10時から午後2時まで利用したい。チャンさんも友達もわかば市民ではない場合、1時間の利用料金はいくらか。",
                              "options":  [
                                              "800円",
                                              "1,000円",
                                              "1,200円",
                                              "1,400円"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "800円",
                                                          "meaning":  "800 yên.",
                                                          "analysis":  "Sai: Đây là giá ngày thường (1,000円 - 200円) hoặc giá sáng sớm."
                                                      },
                                                      {
                                                          "option":  "1,000円",
                                                          "meaning":  "1,000 yên.",
                                                          "analysis":  "ĐÚNG: Khớp hoàn toàn: Đối tượng \u0027市民以外\u0027 + Thời gian \u0027日曜日\u0027 (Chủ nhật) + Khung giờ \u0027午前10時〜午後2時\u0027 (昼間 9:00〜17:00) tại \u0027運動場\u0027 có giá gốc là 1,200円/giờ. Kèm theo quy định giảm giá mùa đông: \u0027＊1、2月の昼間と夜間に運動場を使用する場合は200円ずつ割引します\u0027, ngày 11/2 thuộc tháng 2 nên được giảm 200円 $\\rightarrow 1,200円 - 200円 = 1,000円$/giờ."
                                                      },
                                                      {
                                                          "option":  "1,200円",
                                                          "meaning":  "1,200 yên.",
                                                          "analysis":  "Sai: Mức giá gốc trên bảng chưa tính giảm giá 200円 của tháng 2."
                                                      },
                                                      {
                                                          "option":  "1,400円",
                                                          "meaning":  "1,400 yên.",
                                                          "analysis":  "Sai: Nhầm sang khung giờ ban đêm (夜間) hoặc nhầm sang mức phí nhà thể chất (体育館)."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「【市民以外・土日祝日・運動場・昼間】＝1,200円。注釈：「＊1、2月の昼間と夜間に運動場を使用する場合は200円ずつ割引します。」→ 1,200円 - 200円 = 1,000円。」",
                              "explanation":  "Đáp án 2 đúng (1,000円). \n- Bước 1: Tra bảng giá cho đối tượng không phải công dân (市民以外) vào ngày Chủ nhật (日曜日) tại Sân vận động (運動場) khung giờ 10:00 - 14:00 (thuộc ban ngày 昼間 9:00 - 17:00) $\\rightarrow$ Giá gốc là 1,200円/giờ.\n- Bước 2: Đọc dòng chú thích sao (＊) bên dưới bảng: \u0027Trong tháng 1 và tháng 2, thuê sân vận động vào ban ngày và ban đêm được giảm 200円/giờ\u0027. Vì ngày 11/2 thuộc tháng 2 nên được giảm 200円 $\\rightarrow$ Mức phí thực tế = 1,200円 - 200円 = 1,000円/giờ."
                          },
                          {
                              "id":  2,
                              "question":  "問2：わかば市運動公園の利用を申し込む場合、必ずしなければならないことは何か。",
                              "options":  [
                                              "利用日の1か月前までに申し込まなければならない。",
                                              "18歳以上の人が申し込まなければならない。",
                                              "申し込みのときに、料金を払わなければならない。",
                                              "申し込みのときに、住所を証明するものを持参しなければならない。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "利用日の1か月前までに申し込まなければならない。",
                                                          "meaning":  "Phải đăng ký muộn nhất trước ngày sử dụng 1 tháng.",
                                                          "analysis":  "Sai: Bài viết nêu \u00271か月前から\u0027 (bắt đầu nhận đơn TỪ 1 tháng trước, không phải hạn chót までに)."
                                                      },
                                                      {
                                                          "option":  "18歳以上の人が申し込まなければならない。",
                                                          "meaning":  "Người đứng ra đăng ký bắt buộc phải từ 18 tuổi trở lên.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với quy định bắt buộc ở mục 1: \u0027なお、申し込みは18歳以上の方がしてください\u0027 (Lưu ý: việc đăng ký phải do người từ 18 tuổi trở lên thực hiện)."
                                                      },
                                                      {
                                                          "option":  "申し込みのときに、料金を払わなければならない。",
                                                          "meaning":  "Phải nộp tiền ngay lúc đăng ký.",
                                                          "analysis":  "Sai: Tiền nộp muộn nhất vào ngày sử dụng tại quầy lễ tân (\u0027利用当日までに受付でお支払いください\u0027)."
                                                      },
                                                      {
                                                          "option":  "申し込みのときに、住所を証明するものを持参しなければならない。",
                                                          "meaning":  "Phải mang giấy tờ chứng minh địa chỉ lúc đăng ký.",
                                                          "analysis":  "Sai: Giấy tờ chứng minh địa chỉ chỉ cần mang theo khi thanh toán để hưởng ưu đãi công dân (\u0027料金を支払われるときに住所を証明できるものをお持ちください\u0027), không phải nộp khi đăng ký."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「なお、申し込みは18歳以上の方がしてください。」",
                              "explanation":  "Đáp án 2 đúng. Quy định bắt buộc khi tiến hành thủ tục đăng ký là người đứng tên đại diện đăng ký thuê sân/nhà thể chất phải đủ từ 18 tuổi trở lên."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-thongtin-02",
        "level":  "N3",
        "category":  "thongtin",
        "categoryName":  "Tìm thông tin (情報検索)",
        "lessonNumber":  2,
        "title":  "XYZ旅行社 2月の旅行案内 (Hướng dẫn tour du lịch tháng 2 Công ty XYZ)",
        "timeLimit":  300,
        "passage":  "\u003cdiv class=\"dokkai-notice-box\"\u003e\u003ch3 class=\"notice-title text-center\"\u003eXYZ\u003cruby\u003e旅行社\u003crt\u003eりょこうしゃ\u003c/rt\u003e\u003c/ruby\u003e２\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e旅行\u003crt\u003eりょこう\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e東京\u003crt\u003eとうきょう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e出発\u003crt\u003eしゅっぱつ\u003c/rt\u003e\u003c/ruby\u003e）\u003cruby\u003e案内\u003crt\u003eあんない\u003c/rt\u003e\u003c/ruby\u003e\u003c/h3\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e１．スキー\u003cruby\u003e旅行\u003crt\u003eりょこう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e他\u003crt\u003eほか\u003c/rt\u003e\u003c/ruby\u003e\u003c/h4\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003cthead\u003e\u003ctr\u003e\u003cth style=\"width:8%;\"\u003e番号\u003c/th\u003e\u003cth\u003e\u003cruby\u003e旅行\u003crt\u003eりょこう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e名\u003crt\u003eめい\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e出発\u003crt\u003eしゅっぱつ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e日\u003crt\u003eび\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e）\u003c/th\u003e\u003cth\u003e\u003cruby\u003e特徴\u003crt\u003eとくちょう\u003c/rt\u003e\u003c/ruby\u003e・\u003cruby\u003e宿泊\u003crt\u003eしゅくはく\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e①\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cruby\u003e飛行機\u003crt\u003eひこうき\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e行\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eく\u003cruby\u003e北海道\u003crt\u003eほっかいどう\u003c/rt\u003e\u003c/ruby\u003eスキーの\u003cruby\u003e旅\u003crt\u003eたび\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e４\u003cruby\u003e日間\u003crt\u003eにっかん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e４\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e、１８\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e、２５\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e金\u003crt\u003eきん\u003c/rt\u003e\u003c/ruby\u003e）\u003c/td\u003e\u003ctd\u003e42,000\u003c/td\u003e\u003ctd class=\"text-left\"\u003e・\u003cruby\u003e温泉\u003crt\u003eおんせん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e旅館\u003crt\u003eりょかん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e泊\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eまります\u003cbr\u003e・スキー\u003cruby\u003e用具\u003crt\u003eようぐ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e貸出\u003crt\u003eかしだし\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e有料\u003crt\u003eゆうりょう\u003c/rt\u003e\u003c/ruby\u003eです\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e②\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cruby\u003e新幹線\u003crt\u003eしんかんせん\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e行\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eく\u003cruby\u003e丸山\u003crt\u003eまるやま\u003c/rt\u003e\u003c/ruby\u003eスキー\u003cruby\u003e場\u003crt\u003eじょう\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e４\u003cruby\u003e日間\u003crt\u003eにっかん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e４\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e、１８\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e、２５\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e金\u003crt\u003eきん\u003c/rt\u003e\u003c/ruby\u003e）\u003c/td\u003e\u003ctd\u003e28,000\u003c/td\u003e\u003ctd class=\"text-left\"\u003e・お\u003cruby\u003e泊\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eまりは\u003cruby\u003e温泉\u003crt\u003eおんせん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e旅館\u003crt\u003eりょかん\u003c/rt\u003e\u003c/ruby\u003eです\u003cbr\u003e・スキー\u003cruby\u003e用具\u003crt\u003eようぐ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e無料\u003crt\u003eむりょう\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e借\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eりられます\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e③\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003eバス\u003cruby\u003e旅行\u003crt\u003eりょこう\u003c/rt\u003e\u003c/ruby\u003e \u003cruby\u003e花見山\u003crt\u003eはなみやま\u003c/rt\u003e\u003c/ruby\u003eスキー\u003cruby\u003e場\u003crt\u003eじょう\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e３\u003cruby\u003e日間\u003crt\u003eにっかん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e４\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e、１８\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e、２５\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e金\u003crt\u003eきん\u003c/rt\u003e\u003c/ruby\u003e）\u003c/td\u003e\u003ctd\u003e21,000\u003c/td\u003e\u003ctd class=\"text-left\"\u003e・\u003cruby\u003e金曜日\u003crt\u003eきんようび\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e夜\u003crt\u003eよる\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e出発\u003crt\u003eしゅっぱつ\u003c/rt\u003e\u003c/ruby\u003e。ビジネスホテル\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e・スキー\u003cruby\u003e用具\u003crt\u003eようぐ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e無料\u003crt\u003eむりょう\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e借\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eりられます\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e④\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003eバス\u003cruby\u003e旅行\u003crt\u003eりょこう\u003c/rt\u003e\u003c/ruby\u003e \u003cruby\u003e河口湖\u003crt\u003eかわぐちこ\u003c/rt\u003e\u003c/ruby\u003eスケートの\u003cruby\u003e日\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e６\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e、２０\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e、２７\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e）\u003c/td\u003e\u003ctd\u003e9,800\u003c/td\u003e\u003ctd class=\"text-left\"\u003e・\u003cruby\u003e大型\u003crt\u003eおおがた\u003c/rt\u003e\u003c/ruby\u003eバスでの\u003cruby\u003e日帰り\u003crt\u003eひがえり\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e旅行\u003crt\u003eりょこう\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e・ホテルのランチと\u003cruby\u003e温泉\u003crt\u003eおんせん\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e楽\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eしめます。\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e２．\u003cruby\u003e沖縄\u003crt\u003eおきなわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e旅行\u003crt\u003eりょこう\u003c/rt\u003e\u003c/ruby\u003e\u003c/h4\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003cthead\u003e\u003ctr\u003e\u003cth style=\"width:8%;\"\u003e番号\u003c/th\u003e\u003cth\u003e\u003cruby\u003e旅行\u003crt\u003eりょこう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e名\u003crt\u003eめい\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e出発\u003crt\u003eしゅっぱつ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e日\u003crt\u003eび\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e）\u003c/th\u003e\u003cth\u003e\u003cruby\u003e特徴\u003crt\u003eとくちょう\u003c/rt\u003e\u003c/ruby\u003e・\u003cruby\u003e設備\u003crt\u003eせつび\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e⑤\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003eゆっくり\u003cruby\u003e沖縄\u003crt\u003eおきなわ\u003c/rt\u003e\u003c/ruby\u003e ３\u003cruby\u003e日間\u003crt\u003eにっかん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e５\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e、１９\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e、２６\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e土\u003crt\u003eど\u003c/rt\u003e\u003c/ruby\u003e）\u003c/td\u003e\u003ctd\u003e29,000\u003c/td\u003e\u003ctd class=\"text-left\"\u003e・\u003cruby\u003e夕食\u003crt\u003eゆうしょく\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e沖縄\u003crt\u003eおきなわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e料理\u003crt\u003eりょうり\u003c/rt\u003e\u003c/ruby\u003eのバイキングです\u003cbr\u003e・レンタカーが\u003cruby\u003e無料\u003crt\u003eむりょう\u003c/rt\u003e\u003c/ruby\u003eです\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e⑥\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003eみんなで\u003cruby\u003e沖縄\u003crt\u003eおきなわ\u003c/rt\u003e\u003c/ruby\u003e ４\u003cruby\u003e日間\u003crt\u003eにっかん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e４\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e、１８\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e、２５\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e金\u003crt\u003eきん\u003c/rt\u003e\u003c/ruby\u003e）\u003c/td\u003e\u003ctd\u003e48,000\u003c/td\u003e\u003ctd class=\"text-left\"\u003e・ホテルには\u003cruby\u003e屋内\u003crt\u003eおくない\u003c/rt\u003e\u003c/ruby\u003eプールがあります\u003cbr\u003e・レンタカーが\u003cruby\u003e無料\u003crt\u003eむりょう\u003c/rt\u003e\u003c/ruby\u003eです\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003cp class=\"notice-subtitle\"\u003e（このほかにも、お\u003cruby\u003e楽\u003crt\u003eたの\u003c/rt\u003e\u003c/ruby\u003eしみいただける\u003cruby\u003e旅行\u003crt\u003eりょこう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e多数\u003crt\u003eたすう\u003c/rt\u003e\u003c/ruby\u003eご\u003cruby\u003e用意\u003crt\u003eようい\u003c/rt\u003e\u003c/ruby\u003eしております。）\u003c/p\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e● お\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみは\u003cruby\u003e旅行社\u003crt\u003eりょこうしゃ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e窓口\u003crt\u003eまどぐち\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e電話\u003crt\u003eでんわ\u003c/rt\u003e\u003c/ruby\u003e、メールで、\u003cruby\u003e出発\u003crt\u003eしゅっぱつ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e日\u003crt\u003eび\u003c/rt\u003e\u003c/ruby\u003eの\u003cstrong\u003e１\u003cruby\u003e週間\u003crt\u003eしゅうかん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eまで\u003c/strong\u003eにお\u003cruby\u003e願\u003crt\u003eねが\u003c/rt\u003e\u003c/ruby\u003eいします。\u003c/li\u003e\u003cli\u003e● \u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003eのお\u003cruby\u003e支払\u003crt\u003eしはら\u003c/rt\u003e\u003c/ruby\u003eいは、\u003cruby\u003e銀行\u003crt\u003eぎんこう\u003c/rt\u003e\u003c/ruby\u003eまたはコンビニの\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e出発\u003crt\u003eしゅっぱつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cstrong\u003e５\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eまで\u003c/strong\u003eにお\u003cruby\u003e願\u003crt\u003eねが\u003c/rt\u003e\u003c/ruby\u003eいします。\u003c/li\u003e\u003cli\u003e● \u003cruby\u003e旅行社\u003crt\u003eりょこうしゃ\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e直接\u003crt\u003eちょくせつ\u003c/rt\u003e\u003c/ruby\u003eお\u003cruby\u003e支払\u003crt\u003eしはら\u003c/rt\u003e\u003c/ruby\u003eいされる\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e出発\u003crt\u003eしゅっぱつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cstrong\u003e３\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eまで\u003c/strong\u003eにお\u003cruby\u003e願\u003crt\u003eねが\u003c/rt\u003e\u003c/ruby\u003eいします。\u003c/li\u003e\u003cli\u003e● お\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみのキャンセルには、キャンセル\u003cruby\u003e料\u003crt\u003eりょう\u003c/rt\u003e\u003c/ruby\u003eがかかります。\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e",
        "fullTranslation":  "【HƯỚNG DẪN TOUR DU LỊCH THÁNG 2 (KHỞI HÀNH TỪ TOKYO) - CÔNG TY DU LỊCH XYZ】\n\n１．TOUR TRƯỢT TUYẾT \u0026 TOUR KHÁC:\n① Du lịch trượt tuyết Hokkaido bằng máy bay (4 ngày):\n- Ngày khởi hành: Ngày 4, 18, 25 (Thứ 6)\n- Giá: 42,000 yên\n- Đặc điểm: Nghỉ tại quán trọ suối nước nóng (Onsen Ryokan). Mượn dụng cụ trượt tuyết có tính phí (trả phí).\n\n② Tour trượt tuyết bãi trượt Maruyama bằng tàu Shinkansen (4 ngày):\n- Ngày khởi hành: Ngày 4, 18, 25 (Thứ 6)\n- Giá: 28,000 yên\n- Đặc điểm: Chỗ ở là quán trọ suối nước nóng (Onsen Ryokan). Mượn dụng cụ trượt tuyết MIỄN PHÍ.\n\n③ Tour xe buýt bãi trượt Hanamiyama (3 ngày):\n- Ngày khởi hành: Ngày 4, 18, 25 (Thứ 6)\n- Giá: 21,000 yên\n- Đặc điểm: Khởi hành tối thứ Sáu. Nghỉ tại khách sạn thương gia (Business Hotel). Mượn dụng cụ trượt tuyết MIỄN PHÍ.\n\n④ Tour xe buýt Ngày hội trượt băng hồ Kawaguchi:\n- Ngày khởi hành: Ngày 6, 20, 27 (Chủ nhật)\n- Giá: 9,800 yên\n- Đặc điểm: Du lịch đi về trong ngày bằng xe buýt lớn. Thưởng thức bữa trưa tại khách sạn và tắm suối nước nóng.\n\n２．TOUR DU LỊCH OKINAWA:\n⑤ Thong thả nghỉ dưỡng Okinawa (3 ngày):\n- Ngày khởi hành: Ngày 5, 19, 26 (Thứ 7) | Giá: 29,000 yên\n- Đặc điểm: Bữa tối là tiệc buffet món ăn Okinawa. Miễn phí thuê xe ô tô tự lái (Rent-a-car).\n\n⑥ Mọi người cùng vui vẻ ở Okinawa (4 ngày):\n- Ngày khởi hành: Ngày 4, 18, 25 (Thứ 6) | Giá: 48,000 yên\n- Đặc điểm: Khách sạn có bể bơi trong nhà. Miễn phí thuê xe ô tô tự lái (Rent-a-car).\n\n(Ngoài ra, chúng tôi còn chuẩn bị rất nhiều tour du lịch hấp dẫn khác phục vụ quý khách.)\n● Đăng ký tour: Tại quầy giao dịch của công ty, qua điện thoại hoặc email, muộn nhất trước ngày khởi hành 1 tuần.\n● Thanh toán: Qua ngân hàng hoặc cửa hàng tiện lợi: Muộn nhất trước ngày khởi hành 5 ngày.\n● Thanh toán trực tiếp tại công ty du lịch: Muộn nhất trước ngày khởi hành 3 ngày.\n● Hủy đăng ký tour sẽ phát sinh phí hủy theo quy định.",
        "vocabulary":  [
                           {
                               "word":  "温泉旅館",
                               "hiragana":  "おんせんりょかん",
                               "meaning":  "Quán trọ suối nước nóng truyền thống Nhật Bản"
                           },
                           {
                               "word":  "スキー用具",
                               "hiragana":  "すきーようぐ",
                               "meaning":  "Dụng cụ trượt tuyết"
                           },
                           {
                               "word":  "貸出",
                               "hiragana":  "かしだし",
                               "meaning":  "Cho mượn / Cho thuê"
                           },
                           {
                               "word":  "有料",
                               "hiragana":  "ゆうりょう",
                               "meaning":  "Có tính phí / Phải trả tiền"
                           },
                           {
                               "word":  "無料",
                               "hiragana":  "むりょう",
                               "meaning":  "Miễn phí"
                           },
                           {
                               "word":  "日帰り",
                               "hiragana":  "ひがえり",
                               "meaning":  "Đi về trong ngày"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜たいと思っている",
                                 "meaning":  "Đang ấp ủ dự định / Rất mong muốn làm gì..."
                             },
                             {
                                 "pattern":  "〜までに",
                                 "meaning":  "Trước hạn chót... / Muộn nhất vào thời điểm..."
                             },
                             {
                                 "pattern":  "〜場合",
                                 "meaning":  "Trong trường hợp... / Nếu..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：リンさんは、スキーをしたいと思っている。スキー用具を持っていないので、無料で用具を借りられる旅行がいい。また、ぜひ温泉旅館に泊まりたいと思っている。リンさんの希望に合うのは、どの旅行か。",
                              "options":  [
                                              "①",
                                              "②",
                                              "③",
                                              "④"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "①",
                                                          "meaning":  "Tour ①: 飛行機で行く北海道スキーの旅 4日間",
                                                          "analysis":  "Sai: Tour này tuy có ở suối nước nóng (温泉旅館) nhưng mượn dụng cụ trượt tuyết phải trả phí (スキー用具の貸出は有料です), không đáp ứng yêu cầu mượn miễn phí của Linh."
                                                      },
                                                      {
                                                          "option":  "②",
                                                          "meaning":  "Tour ②: 新幹線で行く丸山スキー場 4日間",
                                                          "analysis":  "ĐÚNG: Thỏa mãn trọn vẹn cả 2 nguyện vọng: Chỗ ở là quán trọ suối nước nóng (\u0027お泊まりは温泉旅館です\u0027) VÀ được mượn dụng cụ trượt tuyết hoàn toàn miễn phí (\u0027スキー用具が無料で借りられます\u0027)."
                                                      },
                                                      {
                                                          "option":  "③",
                                                          "meaning":  "Tour ③: バス旅行 花見山スキー場 3日間",
                                                          "analysis":  "Sai: Tour này mượn dụng cụ miễn phí nhưng chỗ ở lại là khách sạn thương gia (ビジネスホテル利用), không phải quán trọ suối nước nóng."
                                                      },
                                                      {
                                                          "option":  "④",
                                                          "meaning":  "Tour ④: バス旅行 河口湖スケートの日",
                                                          "analysis":  "Sai: Đây là tour đi trượt băng (スケート) và là tour đi về trong ngày (日帰り旅行), không phải đi trượt tuyết qua đêm."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「② 新幹線で行く丸山スキー場 4日間：・お泊まりは温泉旅館です ・スキー用具が無料で借りられます」",
                              "explanation":  "Đáp án ② đúng (Phương án 2). Bạn Linh có 2 tiêu chí bắt buộc: (1) Mượn dụng cụ trượt tuyết miễn phí và (2) Ở quán trọ suối nước nóng. Đối chiếu 4 tour: Tour ① mất phí mượn dụng cụ, tour ③ ở khách sạn thương gia, tour ④ đi trượt băng trong ngày. Chỉ duy nhất Tour ② đáp ứng đầy đủ cả hai điều kiện trên."
                          },
                          {
                              "id":  2,
                              "question":  "問2：キムさんは、「みんなで沖縄4日間」の2月25日出発の旅行に参加する。料金を旅行社で支払う場合、いつまでに払わなければならないか。",
                              "options":  [
                                              "2月18日",
                                              "2月20日",
                                              "2月22日",
                                              "2月25日"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "2月18日",
                                                          "meaning":  "Ngày 18 tháng 2.",
                                                          "analysis":  "Sai: Đây là hạn chót nộp đơn đăng ký tour (trước ngày khởi hành 1 tuần: 25 - 7 = 18)."
                                                      },
                                                      {
                                                          "option":  "2月20日",
                                                          "meaning":  "Ngày 20 tháng 2.",
                                                          "analysis":  "Sai: Đây là hạn thanh toán nếu trả qua ngân hàng hoặc cửa hàng tiện lợi (trước 5 ngày: 25 - 5 = 20)."
                                                      },
                                                      {
                                                          "option":  "2月22日",
                                                          "meaning":  "Ngày 22 tháng 2.",
                                                          "analysis":  "ĐÚNG: Theo quy định ở mục lưu ý: \u0027旅行社で直接お支払いされる場合、出発の3日前までにお願いします\u0027 (Thanh toán trực tiếp tại công ty du lịch thì muộn nhất trước ngày khởi hành 3 ngày). Ngày khởi hành là 25/2 $\\rightarrow$ Hạn chót thanh toán là ngày 22/2 (25 - 3 = 22)."
                                                      },
                                                      {
                                                          "option":  "2月25日",
                                                          "meaning":  "Ngày 25 tháng 2.",
                                                          "analysis":  "Sai: Đây là ngày khởi hành của chuyến đi (出発日)."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「・旅行社で直接お支払いされる場合、出発の3日前までにお願いします。」（出発日：2月25日 → 25 - 3 = 22日）",
                              "explanation":  "Đáp án 3 đúng (2月22日). \n- Ngày khởi hành của tour là ngày 25 tháng 2.\n- Hình thức thanh toán: Trực tiếp tại công ty du lịch (旅行社で直接お支払い).\n- Quy định: Phải thanh toán muộn nhất trước 3 ngày (出発の3日前まで).\n- Tính toán: 25 - 3 = 22, do đó hạn chót thanh toán là ngày 22 tháng 2."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-thongtin-03",
        "level":  "N3",
        "category":  "thongtin",
        "categoryName":  "Tìm thông tin (情報検索)",
        "lessonNumber":  3,
        "title":  "不用品をお売りください (Thu mua đồ cũ - Cửa hàng đồ cũ Aoshima)",
        "timeLimit":  300,
        "passage":  "\u003cdiv class=\"dokkai-notice-box\"\u003e\u003ch3 class=\"notice-title text-center\"\u003e\u003cruby\u003e不用品\u003crt\u003eふようひん\u003c/rt\u003e\u003c/ruby\u003eをお\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eりください\u003c/h3\u003e\u003cp class=\"notice-subtitle text-center\"\u003eご\u003cruby\u003e自宅\u003crt\u003eじたく\u003c/rt\u003e\u003c/ruby\u003eやオフィスで\u003cruby\u003e不用\u003crt\u003eふよう\u003c/rt\u003e\u003c/ruby\u003eになったものをお\u003cruby\u003e売\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eりください。\u003cbr\u003e\u003cstrong\u003e１\u003cruby\u003e点\u003crt\u003eてん\u003c/rt\u003e\u003c/ruby\u003eでも\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e取\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eります。\u003c/strong\u003e\u003c/p\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e● \u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e取\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e可能\u003crt\u003eかのう\u003c/rt\u003e\u003c/ruby\u003eな\u003cruby\u003e品物\u003crt\u003eしなもの\u003c/rt\u003e\u003c/ruby\u003e：\u003cruby\u003e以下\u003crt\u003eいか\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e中\u003crt\u003eなか\u003c/rt\u003e\u003c/ruby\u003eでひどい\u003cruby\u003e汚\u003crt\u003eよご\u003c/rt\u003e\u003c/ruby\u003eれや、\u003cruby\u003e大\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eきな\u003cruby\u003e傷\u003crt\u003eきず\u003c/rt\u003e\u003c/ruby\u003eなどがないもの\u003c/h4\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd style=\"font-weight:bold; font-size:1.05rem; padding: 1rem;\"\u003e\u003cruby\u003e家具\u003crt\u003eかぐ\u003c/rt\u003e\u003c/ruby\u003e・\u003cruby\u003e電気\u003crt\u003eでんき\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e製品\u003crt\u003eせいひん\u003c/rt\u003e\u003c/ruby\u003e・\u003cruby\u003e衣服\u003crt\u003eいふく\u003c/rt\u003e\u003c/ruby\u003e・\u003cruby\u003e生活\u003crt\u003eせいかつ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e用品\u003crt\u003eようひん\u003c/rt\u003e\u003c/ruby\u003e・オフィス\u003cruby\u003e用品\u003crt\u003eようひん\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e\u003cruby\u003e器具\u003crt\u003eきぐ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e用品\u003crt\u003eようひん\u003c/rt\u003e\u003c/ruby\u003e・おもちゃ・\u003cruby\u003e楽器\u003crt\u003eがっき\u003c/rt\u003e\u003c/ruby\u003eなど\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e・\u003cruby\u003e使用\u003crt\u003eしよう\u003c/rt\u003e\u003c/ruby\u003eしている\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003eは、クリーニングしてあるもの\u003c/li\u003e\u003cli\u003e・\u003cstrong\u003e\u003cruby\u003e食器\u003crt\u003eしょっき\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e料理\u003crt\u003eりょうり\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e用具\u003crt\u003eようぐ\u003c/rt\u003e\u003c/ruby\u003eは、１\u003cruby\u003e度\u003crt\u003eど\u003c/rt\u003e\u003c/ruby\u003eも\u003cruby\u003e使用\u003crt\u003eしよう\u003c/rt\u003e\u003c/ruby\u003eしていないもの\u003c/strong\u003e\u003c/li\u003e\u003cli\u003e・\u003cruby\u003e電気\u003crt\u003eでんき\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e製品\u003crt\u003eせいひん\u003c/rt\u003e\u003c/ruby\u003e、おもちゃ、\u003cruby\u003e楽器\u003crt\u003eがっき\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e使用\u003crt\u003eしよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e可能\u003crt\u003eかのう\u003c/rt\u003e\u003c/ruby\u003eなもの\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e【ご\u003cruby\u003e注意\u003crt\u003eちゅうい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e事項\u003crt\u003eじこう\u003c/rt\u003e\u003c/ruby\u003e】\u003c/h4\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e＊ \u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e取\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eりのときは、\u003cruby\u003e免許証\u003crt\u003eめんきょしょう\u003c/rt\u003e\u003c/ruby\u003e、パスポートなどの\u003cruby\u003e写真\u003crt\u003eしゃしん\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e付\u003crt\u003eつ\u003c/rt\u003e\u003c/ruby\u003eいている\u003cruby\u003e証明書\u003crt\u003eしょうめいしょ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e確認\u003crt\u003eかくにん\u003c/rt\u003e\u003c/ruby\u003eします。\u003c/li\u003e\u003cli\u003e＊ １８\u003cruby\u003e歳\u003crt\u003eさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e未満\u003crt\u003eみまん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003eからは\u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e取\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eることができません。\u003c/li\u003e\u003cli\u003e＊ \u003cruby\u003e買\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e取\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eれなかった\u003cruby\u003e品物\u003crt\u003eしなもの\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e置\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eいていくことも\u003cruby\u003e可能\u003crt\u003eかのう\u003c/rt\u003e\u003c/ruby\u003eです。\u003cruby\u003e私\u003crt\u003eわたし\u003c/rt\u003e\u003c/ruby\u003eたちで\u003cruby\u003e捨\u003crt\u003eす\u003c/rt\u003e\u003c/ruby\u003eてます。（\u003cruby\u003e有料\u003crt\u003eゆうりょう\u003c/rt\u003e\u003c/ruby\u003eになる\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003eもあります。）\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e【ご\u003cruby\u003e来店\u003crt\u003eらいてん\u003c/rt\u003e\u003c/ruby\u003eになれない、お\u003cruby\u003e客様\u003crt\u003eきゃくさま\u003c/rt\u003e\u003c/ruby\u003eへのご\u003cruby\u003e案内\u003crt\u003eあんない\u003c/rt\u003e\u003c/ruby\u003e】\u003c/h4\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e● \u003cruby\u003e品物\u003crt\u003eしなもの\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e多数\u003crt\u003eたすう\u003c/rt\u003e\u003c/ruby\u003eある\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003e、または\u003cruby\u003e重\u003crt\u003eおも\u003c/rt\u003e\u003c/ruby\u003eくて\u003cruby\u003e運\u003crt\u003eはこ\u003c/rt\u003e\u003c/ruby\u003eべない\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003eは、ご\u003cruby\u003e希望\u003crt\u003eきぼう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e日時\u003crt\u003eにちじ\u003c/rt\u003e\u003c/ruby\u003eにご\u003cruby\u003e自宅\u003crt\u003eじたく\u003c/rt\u003e\u003c/ruby\u003eやオフィスまでうかがいます。ご\u003cruby\u003e希望\u003crt\u003eきぼう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003eは、\u003cstrong\u003e\u003cruby\u003e前日\u003crt\u003eぜんじつ\u003c/rt\u003e\u003c/ruby\u003eまでにお\u003cruby\u003e電話\u003crt\u003eでんわ\u003c/rt\u003e\u003c/ruby\u003eでご\u003cruby\u003e予約\u003crt\u003eよやく\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003eをお\u003cruby\u003e願\u003crt\u003eねが\u003c/rt\u003e\u003c/ruby\u003eいします。\u003c/li\u003e\u003cli\u003e● \u003cruby\u003e品物\u003crt\u003eしなもの\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e郵送\u003crt\u003eゆうそう\u003c/rt\u003e\u003c/ruby\u003eでも\u003cruby\u003e受\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eけ\u003cruby\u003e付\u003crt\u003eつ\u003c/rt\u003e\u003c/ruby\u003eけます。ご\u003cruby\u003e希望\u003crt\u003eきぼう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003eは、\u003cstrong\u003eまず、お\u003cruby\u003e電話\u003crt\u003eでんわ\u003c/rt\u003e\u003c/ruby\u003eでご\u003cruby\u003e連絡\u003crt\u003eれんらく\u003c/rt\u003e\u003c/ruby\u003eください。ご\u003cruby\u003e連絡\u003crt\u003eれんらく\u003c/rt\u003e\u003c/ruby\u003eがなかった\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e受\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eけ\u003cruby\u003e取\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eることができません。\u003c/strong\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-footer text-right\"\u003e\u003cp\u003e\u003cstrong\u003eリサイクル\u003cruby\u003e青島屋\u003crt\u003eあおしまや\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003cbr\u003e\u003cruby\u003e秋中市\u003crt\u003eあきなか\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e大田町\u003crt\u003eおおたまち\u003c/rt\u003e\u003c/ruby\u003e1-2-3（\u003cruby\u003e大田\u003crt\u003eおおた\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e小学校\u003crt\u003eしょうがっこう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003e）\u003cbr\u003e\u003cruby\u003e電話\u003crt\u003eでんわ\u003c/rt\u003e\u003c/ruby\u003e：012-345-6789　Fax：012-345-6790\u003cbr\u003e\u003cruby\u003e定休日\u003crt\u003eていきゅうび\u003c/rt\u003e\u003c/ruby\u003e：\u003cruby\u003e毎週\u003crt\u003eまいしゅう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e水曜日\u003crt\u003eすいようび\u003c/rt\u003e\u003c/ruby\u003e　\u003cruby\u003e営業時間\u003crt\u003eえいぎょうじかん\u003c/rt\u003e\u003c/ruby\u003e：10:00〜20:00\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
        "fullTranslation":  "【HÃY BÁN LẠI ĐỒ DÙNG KHÔNG DÙNG TỚI CHO CHÚNG TÔI】\nXin hãy bán lại những đồ dùng không cần đến tại nhà riêng hoặc văn phòng của quý khách.\nDù chỉ 1 món chúng tôi cũng thu mua!\n\n■ MẶT HÀNG CÓ THỂ THU MUA:\nNhững đồ nằm trong danh mục dưới đây không có vết bẩn nghiêm trọng hay vết trầy xước lớn:\n- Đồ nội thất (bàn ghế, tủ), đồ điện gia dụng, quần áo, đồ dùng sinh hoạt, đồ dùng văn phòng.\n- Dụng cụ thể thao, đồ chơi, nhạc cụ, v.v.\n* Đồ đã qua sử dụng: Bắt buộc phải được giặt là / vệ sinh sạch sẽ.\n* Bát đĩa, dụng cụ nấu ăn: BẮT BUỘC PHẢI LÀ ĐỒ CHƯA TỪNG QUA SỬ DỤNG LẦN NÀO.\n* Đồ điện tử gia dụng, đồ chơi, nhạc cụ: Phải là đồ vẫn còn hoạt động, sử dụng được bình thường.\n\n■ LƯU Ý KHI THU MUA:\n* Khi thu mua, chúng tôi sẽ kiểm tra giấy tờ tùy thân có dán ảnh (bằng lái xe, hộ chiếu...).\n* Không thu mua đồ từ người dưới 18 tuổi.\n* Với các món đồ không thu mua được, quý khách có thể gửi lại cửa hàng. Chúng tôi sẽ tiêu hủy / vứt rác giúp quý khách (có trường hợp phát sinh phí vứt rác).\n\n■ HƯỚNG DẪN DÀNH CHO KHÁCH HÀNG KHÔNG ĐẾN TRỰC TIẾP ĐƯỢC CỬA HÀNG:\n● Nếu có nhiều đồ hoặc đồ cồng kềnh nặng không chở được: Chúng tôi sẽ đến tận nhà hoặc văn phòng theo ngày giờ quý khách yêu cầu. Vui lòng gọi điện đặt lịch trước muộn nhất vào ngày hôm trước.\n● Thu mua qua đường bưu điện: Quý khách có thể gửi bưu điện. Tuy nhiên, trước tiên BẮT BUỘC PHẢI GỌI ĐIỆN THOẠI THÔNG BÁO CHO CHÚNG TÔI. Trường hợp không liên hệ trước, chúng tôi sẽ từ chối tiếp nhận kiện hàng.\n\nCửa hàng đồ cũ Aoshimaya\nĐịa chỉ: 1-2-3 Ootamachi, thành phố Akinaka (Trước trường tiểu học Oota)\nĐiện thoại: 012-345-6789 | Fax: 012-345-6790\nNgày nghỉ định kỳ: Thứ Tư hàng tuần | Giờ mở cửa: 10:00〜20:00",
        "vocabulary":  [
                           {
                               "word":  "不用品",
                               "hiragana":  "ふようひん",
                               "meaning":  "Đồ dùng không cần đến / Đồ dư thừa"
                           },
                           {
                               "word":  "買い取る",
                               "hiragana":  "かいとる",
                               "meaning":  "Thu mua lại đồ cũ"
                           },
                           {
                               "word":  "料理用具",
                               "hiragana":  "りょうりようぐ",
                               "meaning":  "Dụng cụ nấu ăn (nồi, chảo, dao, thớt...)"
                           },
                           {
                               "word":  "未満",
                               "hiragana":  "みまん",
                               "meaning":  "Dưới / Chưa đủ (18歳未満: dưới 18 tuổi)"
                           },
                           {
                               "word":  "郵送",
                               "hiragana":  "ゆうそう",
                               "meaning":  "Gửi qua đường bưu điện"
                           },
                           {
                               "word":  "定休日",
                               "hiragana":  "ていきゅうび",
                               "meaning":  "Ngày nghỉ định kỳ của cửa hàng"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜ことになった",
                                 "meaning":  "Đã có quyết định / Được sắp xếp sẽ làm gì..."
                             },
                             {
                                 "pattern":  "〜未満",
                                 "meaning":  "Dưới mức... (không tính mốc đó)"
                             },
                             {
                                 "pattern":  "〜場合",
                                 "meaning":  "Trong trường hợp... / Nếu..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：ナターシャさんは大学を卒業して帰国することになったので、不用品を売りたいと考えている。次の中で、この店に売れる可能性がないものはどれか。",
                              "options":  [
                                              "まだ一度も着ていないシャツ",
                                              "少ししか使っていない鍋",
                                              "2年間ずっと使っているテレビ",
                                              "時々ひいているギター"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "まだ一度も着ていないシャツ",
                                                          "meaning":  "Chiếc áo sơ mi chưa mặc lần nào.",
                                                          "analysis":  "Sai (Món này bán được): Quần áo chưa mặc lần nào đáp ứng hoàn hảo tiêu chí không vết bẩn/hư hỏng."
                                                      },
                                                      {
                                                          "option":  "少ししか使っていない鍋",
                                                          "meaning":  "Chiếc nồi chỉ mới dùng một chút xíu.",
                                                          "analysis":  "ĐÚNG: Khớp với quy định cấm đồ dùng bếp đã qua sử dụng: \u0027・食器、料理用具は、一度も使用していないもの\u0027 (Bát đĩa, dụng cụ nấu bếp bắt buộc phải chưa từng dùng lần nào). Chiếc nồi thuộc nhóm dụng cụ nấu nướng (料理用具), dù chỉ mới dùng một ít (\u0027少ししか使っていない\u0027) thì cũng đã là đồ dùng rồi nên cửa hàng KHÔNG THU MUA (không có khả năng bán được)."
                                                      },
                                                      {
                                                          "option":  "2年間ずっと使っているテレビ",
                                                          "meaning":  "Chiếc ti vi đã dùng liên tục trong 2 năm.",
                                                          "analysis":  "Sai (Món này bán được): Đồ điện gia dụng (電気製品) dùng 2 năm nhưng vẫn hoạt động tốt (\u0027使用可能なもの\u0027) thì hoàn toàn được thu mua."
                                                      },
                                                      {
                                                          "option":  "時々ひいているギター",
                                                          "meaning":  "Cây đàn guitar thỉnh thoảng vẫn gảy.",
                                                          "analysis":  "Sai (Món này bán được): Nhạc cụ (楽器) vẫn còn chơi được (\u0027使用可能なもの\u0027) thì cửa hàng vẫn thu mua."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「・食器、料理用具は、一度も使用していないもの」",
                              "explanation":  "Đáp án 2 đúng (少ししか使っていない鍋). Cửa hàng có quy định đặc biệt nghiêm ngặt đối với nhóm dụng cụ ăn uống và nấu nướng: \u0027Bát đĩa, dụng cụ nấu ăn phải là đồ CHƯA TỪNG SỬ DỤNG LẦN NÀO\u0027. Nồi (鍋) là dụng cụ nấu ăn, dù chỉ mới dùng một chút thì cũng không đạt tiêu chuẩn và không thể bán được cho cửa hàng."
                          },
                          {
                              "id":  2,
                              "question":  "問2：この店に不用品を売るとき、必ずしなければならないことは何か。",
                              "options":  [
                                              "品物を売る場合は、自分で品物を店まで運ぶ。",
                                              "品物が売れなかった場合は、その品物を持って帰る。",
                                              "品物を郵便で送る場合は、先に店に電話をする。",
                                              "品物を持っていく場合は、前日までに予約する。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "品物を売る場合は、自分で品物を店まで運ぶ。",
                                                          "meaning":  "Nếu bán đồ thì phải tự chở đồ đến cửa hàng.",
                                                          "analysis":  "Sai: Cửa hàng có dịch vụ đến tận nhà lấy đồ nặng/nhiều hoặc cho phép gửi bưu điện, không bắt buộc phải tự chở."
                                                      },
                                                      {
                                                          "option":  "品物が売れなかった場合は、その品物を持って帰る。",
                                                          "meaning":  "Nếu đồ không bán được thì phải mang về.",
                                                          "analysis":  "Sai: Có thể để lại cửa hàng nhờ vứt hộ (\u0027買い取れなかった品物は、店に置いていくことも可能です\u0027)."
                                                      },
                                                      {
                                                          "option":  "品物を郵便で送る場合は、先に店に電話をする。",
                                                          "meaning":  "Nếu gửi đồ qua bưu điện, bắt buộc phải gọi điện cho cửa hàng trước.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác với điều kiện bắt buộc ở mục gửi bưu điện: \u0027品物は郵送でも受け付けます。ご希望の方は、まず、お電話でご連絡ください。ご連絡がなかった場合は、受け取ることができません\u0027 (Nếu không liên hệ trước bằng điện thoại thì cửa hàng sẽ không tiếp nhận)."
                                                      },
                                                      {
                                                          "option":  "品物を持っていく場合は、前日までに予約する。",
                                                          "meaning":  "Nếu tự mang đồ đến thì phải đặt lịch trước ngày hôm trước.",
                                                          "analysis":  "Sai: Đặt trước ngày hôm trước chỉ áp dụng khi yêu cầu cửa hàng đến tận nhà thu gom đồ (\u0027ご自宅やオフィスまでうかがいます\u0027), tự mang đến cửa hàng trong giờ mở cửa không cần đặt trước."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「品物は郵送でも受け付けます。ご希望の方は、まず、お電話でご連絡ください。ご連絡がなかった場合は、受け取ることができません。」",
                              "explanation":  "Đáp án 3 đúng. Quy định bắt buộc khi gửi đồ bán qua đường bưu điện là khách hàng phải gọi điện thoại thông báo trước cho cửa hàng, nếu gửi mà không liên hệ trước thì cửa hàng sẽ từ chối nhận."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-thongtin-04",
        "level":  "N3",
        "category":  "thongtin",
        "categoryName":  "Tìm thông tin (情報検索)",
        "lessonNumber":  4,
        "title":  "安見市内のパーティー会場案内 (Hướng dẫn địa điểm tổ chức tiệc thành phố Yasumi)",
        "timeLimit":  300,
        "passage":  "\u003cdiv class=\"dokkai-notice-box\"\u003e\u003ch3 class=\"notice-title text-center\"\u003e\u003cruby\u003e安見\u003crt\u003eやすみ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e市内\u003crt\u003eしない\u003c/rt\u003e\u003c/ruby\u003eのパーティー\u003cruby\u003e会場\u003crt\u003eかいじょう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e案内\u003crt\u003eあんない\u003c/rt\u003e\u003c/ruby\u003e\u003c/h3\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e① \u003cruby\u003e安見\u003crt\u003eやすみ\u003c/rt\u003e\u003c/ruby\u003eホール：\u003cruby\u003e新\u003crt\u003eあたら\u003c/rt\u003e\u003c/ruby\u003eしいビルなので、きれいです。\u003c/h4\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003ctbody\u003e\u003ctr\u003e\u003cth style=\"width:25%;\"\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e8:00〜23:00（\u003cruby\u003e定休日\u003crt\u003eていきゅうび\u003c/rt\u003e\u003c/ruby\u003e：\u003cruby\u003e毎月\u003crt\u003eまいつき\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e第\u003crt\u003eだい\u003c/rt\u003e\u003c/ruby\u003e3\u003cruby\u003e月曜日\u003crt\u003eげつようび\u003c/rt\u003e\u003c/ruby\u003e）\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e人数\u003crt\u003eにんずう\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e\u003cruby\u003e最大\u003crt\u003eさいだい\u003c/rt\u003e\u003c/ruby\u003e100\u003cruby\u003e名\u003crt\u003eめい\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e1\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e1,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e料理\u003crt\u003eりょうり\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e1\u003cruby\u003e人\u003crt\u003eり\u003c/rt\u003e\u003c/ruby\u003e2,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003eから（\u003cstrong\u003e\u003cruby\u003e必\u003crt\u003eかなら\u003c/rt\u003e\u003c/ruby\u003eず\u003cruby\u003e料理\u003crt\u003eりょうり\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e注文\u003crt\u003eちゅうもん\u003c/rt\u003e\u003c/ruby\u003eしてください\u003c/strong\u003e）\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e交通\u003crt\u003eこうつう\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e\u003cruby\u003e安見\u003crt\u003eやすみ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e徒歩\u003crt\u003eとほ\u003c/rt\u003e\u003c/ruby\u003e30\u003cruby\u003e分\u003crt\u003eぷん\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e無料\u003crt\u003eむりょう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駐車場\u003crt\u003eちゅうしゃじょう\u003c/rt\u003e\u003c/ruby\u003eあり\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e② \u003cruby\u003e花\u003crt\u003eはな\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003e：ばらの\u003cruby\u003e花\u003crt\u003eはな\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e有名\u003crt\u003eゆうめい\u003c/rt\u003e\u003c/ruby\u003eな\u003cruby\u003e西公園\u003crt\u003eにしこうえん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e中\u003crt\u003eなか\u003c/rt\u003e\u003c/ruby\u003eにあります。\u003c/h4\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003ctbody\u003e\u003ctr\u003e\u003cth style=\"width:25%;\"\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e11:00〜20:00（\u003cstrong\u003e\u003cruby\u003e定休日\u003crt\u003eていきゅうび\u003c/rt\u003e\u003c/ruby\u003e：\u003cruby\u003e木曜日\u003crt\u003eもくようび\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e、\u003cruby\u003e祝日\u003crt\u003eしゅくじつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e水曜日\u003crt\u003eすいようび\u003c/rt\u003e\u003c/ruby\u003e）\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e人数\u003crt\u003eにんずう\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e10〜50\u003cruby\u003e名\u003crt\u003eめい\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e\u003cruby\u003e無料\u003crt\u003eむりょう\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e料理\u003crt\u003eりょうり\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e1\u003cruby\u003e人\u003crt\u003eり\u003c/rt\u003e\u003c/ruby\u003e1,500\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003eから（\u003cstrong\u003e\u003cruby\u003e飲\u003crt\u003eの\u003c/rt\u003e\u003c/ruby\u003eみ\u003cruby\u003e物\u003crt\u003eもの\u003c/rt\u003e\u003c/ruby\u003eだけの\u003cruby\u003e注文\u003crt\u003eちゅうもん\u003c/rt\u003e\u003c/ruby\u003eでも\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eできます\u003c/strong\u003e）\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e交通\u003crt\u003eこうつう\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e\u003cruby\u003e安見\u003crt\u003eやすみ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e徒歩\u003crt\u003eとほ\u003c/rt\u003e\u003c/ruby\u003e15\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e西公園\u003crt\u003eにしこうえん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e駐車場\u003crt\u003eちゅうしゃじょう\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e有料\u003crt\u003eゆうりょう\u003c/rt\u003e\u003c/ruby\u003e）あり\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e③ レストラン\u003cruby\u003e海\u003crt\u003eうみ\u003c/rt\u003e\u003c/ruby\u003e　パーティールーム：カラオケが\u003cruby\u003e無料\u003crt\u003eむりょう\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eできます\u003c/h4\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003ctbody\u003e\u003ctr\u003e\u003cth style=\"width:25%;\"\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e11:00〜22:00（\u003cruby\u003e定休日\u003crt\u003eていきゅうび\u003c/rt\u003e\u003c/ruby\u003e：\u003cruby\u003e火曜日\u003crt\u003eかようび\u003c/rt\u003e\u003c/ruby\u003e）、\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eは4\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eまで\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e人数\u003crt\u003eにんずう\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e10〜30\u003cruby\u003e名\u003crt\u003eめい\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e\u003cruby\u003e無料\u003crt\u003eむりょう\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e料理\u003crt\u003eりょうり\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e1\u003cruby\u003e人\u003crt\u003eり\u003c/rt\u003e\u003c/ruby\u003e3,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003eから（\u003cstrong\u003e\u003cruby\u003e必\u003crt\u003eかなら\u003c/rt\u003e\u003c/ruby\u003eず\u003cruby\u003e料理\u003crt\u003eりょうり\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e注文\u003crt\u003eちゅうもん\u003c/rt\u003e\u003c/ruby\u003eしてください\u003c/strong\u003e）\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e交通\u003crt\u003eこうつう\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e\u003cruby\u003e安見\u003crt\u003eやすみ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e徒歩\u003crt\u003eとほ\u003c/rt\u003e\u003c/ruby\u003e10\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e無料\u003crt\u003eむりょう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駐車場\u003crt\u003eちゅうしゃじょう\u003c/rt\u003e\u003c/ruby\u003e（15\u003cruby\u003e台\u003crt\u003eだい\u003c/rt\u003e\u003c/ruby\u003e）あり\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e④ \u003cruby\u003e市民\u003crt\u003eしみん\u003c/rt\u003e\u003c/ruby\u003eセンター：コンサートにも\u003cruby\u003e使\u003crt\u003eつか\u003c/rt\u003e\u003c/ruby\u003eえます。\u003c/h4\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003ctbody\u003e\u003ctr\u003e\u003cth style=\"width:25%;\"\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e11:00〜21:00（\u003cruby\u003e定休日\u003crt\u003eていきゅうび\u003c/rt\u003e\u003c/ruby\u003e：\u003cruby\u003e月曜日\u003crt\u003eげつようび\u003c/rt\u003e\u003c/ruby\u003e）、\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eは4\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eまで\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e人数\u003crt\u003eにんずう\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e\u003cruby\u003e最大\u003crt\u003eさいだい\u003c/rt\u003e\u003c/ruby\u003e40\u003cruby\u003e名\u003crt\u003eめい\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e1\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e1,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e料理\u003crt\u003eりょうり\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e\u003cstrong\u003e\u003cruby\u003e注文\u003crt\u003eちゅうもん\u003c/rt\u003e\u003c/ruby\u003eはできません（\u003cruby\u003e必要\u003crt\u003eひつよう\u003c/rt\u003e\u003c/ruby\u003eな\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e者\u003crt\u003eしゃ\u003c/rt\u003e\u003c/ruby\u003eがご\u003cruby\u003e用意\u003crt\u003eようい\u003c/rt\u003e\u003c/ruby\u003eください）\u003c/strong\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e交通\u003crt\u003eこうつう\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003ctd\u003e\u003cruby\u003e安見\u003crt\u003eやすみ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e徒歩\u003crt\u003eとほ\u003c/rt\u003e\u003c/ruby\u003e20\u003cruby\u003e分\u003crt\u003eぷん\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e市役所\u003crt\u003eしやくしょ\u003c/rt\u003e\u003c/ruby\u003eのとなり）、\u003cruby\u003e市役所\u003crt\u003eしやくしょ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e駐車場\u003crt\u003eちゅうしゃじょう\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e有料\u003crt\u003eゆうりょう\u003c/rt\u003e\u003c/ruby\u003e）あり\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e",
        "fullTranslation":  "【HƯỚNG DẪN ĐỊA ĐIỂM TỔ CHỨC TIỆC TRONG THÀNH PHỐ YASUMI】\n\n① HỘI TRƯỜNG YASUMI (安見ホール):\n- Đặc điểm: Tòa nhà mới nên rất đẹp, sạch sẽ.\n- Thời gian: 8:00〜23:00 (Nghỉ định kỳ: Thứ Hai tuần thứ 3 mỗi tháng).\n- Số lượng người: Tối đa 100 người.\n- Mức phí: 1,000 yên / 1 giờ.\n- Đồ ăn: Từ 2,000 yên/người (BẮT BUỘC PHẢI ĐẶT MÓN ĂN).\n- Đi lại: Đi bộ 30 phút từ ga Yasumi, có bãi đỗ xe miễn phí.\n\n② NHÀ HOA (花の家):\n- Đặc điểm: Nằm trong công viên Tây nổi tiếng với hoa hồng.\n- Thời gian: 11:00〜20:00 (Nghỉ định kỳ: Thứ Năm; nếu rơi vào ngày lễ thì nghỉ thứ Tư).\n- Số lượng người: 10 đến 50 người.\n- Mức phí: Miễn phí thuê phòng.\n- Đồ ăn: Từ 1,500 yên/người (Chỉ gọi đồ uống không cũng được phục vụ).\n- Đi lại: Đi bộ 15 phút từ ga Yasumi, có bãi đỗ xe có phí ở công viên Tây.\n\n③ PHÒNG TIỆC NHÀ HÀNG BIỂN (レストラン海 パーティールーム):\n- Đặc điểm: Sử dụng Karaoke miễn phí.\n- Thời gian: 11:00〜22:00 (Nghỉ định kỳ: Thứ Ba), thời gian sử dụng tối đa 4 tiếng.\n- Số lượng người: 10 đến 30 người.\n- Mức phí: Miễn phí thuê phòng.\n- Đồ ăn: Từ 3,000 yên/người (BẮT BUỘC PHẢI ĐẶT MÓN ĂN).\n- Đi lại: Đi bộ 10 phút từ ga Yasumi, có bãi xe miễn phí (15 chỗ).\n\n④ TRUNG TÂM CÔNG DÂN (市民センター):\n- Đặc điểm: Dùng được cho cả các buổi biểu diễn hòa nhạc.\n- Thời gian: 11:00〜21:00 (Nghỉ định kỳ: Thứ Hai), thời gian sử dụng tối đa 4 tiếng.\n- Số lượng người: Tối đa 40 người.\n- Mức phí: 1,000 yên / 1 giờ.\n- Đồ ăn: Không phục vụ đặt món tại chỗ (Nếu cần người sử dụng tự mang theo/chuẩn bị).\n- Đi lại: Đi bộ 20 phút từ ga Yasumi (cạnh tòa thị chính), bãi xe có phí ở tòa thị chính.",
        "vocabulary":  [
                           {
                               "word":  "読書クラブ",
                               "hiragana":  "どくしょくらぶ",
                               "meaning":  "Câu lạc bộ đọc sách"
                           },
                           {
                               "word":  "交流会",
                               "hiragana":  "こうりゅうかい",
                               "meaning":  "Buổi giao lưu"
                           },
                           {
                               "word":  "徒歩",
                               "hiragana":  "とほ",
                               "meaning":  "Đi bộ"
                           },
                           {
                               "word":  "定休日",
                               "hiragana":  "ていきゅうび",
                               "meaning":  "Ngày nghỉ định kỳ"
                           },
                           {
                               "word":  "無料駐車場",
                               "hiragana":  "むりょうちゅうしゃじょう",
                               "meaning":  "Bãi đỗ xe miễn phí"
                           },
                           {
                               "word":  "注文",
                               "hiragana":  "ちゅうもん",
                               "meaning":  "Đặt hàng / Gọi món"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜程度 / 〜ぐらい",
                                 "meaning":  "Khoảng chừng... (30名程度: khoảng 30 người)"
                             },
                             {
                                 "pattern":  "〜以内",
                                 "meaning":  "Trong vòng... trở lại (20分以内: trong 20 phút trở lại, 2000円以内: từ 2,000 yên trở xuống)"
                             },
                             {
                                 "pattern":  "〜だけ",
                                 "meaning":  "Chỉ duy nhất..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：原さんは、来週の木曜日の午後に読書クラブの活動を行う会場を探している。参加者は30名程度で、料理は必要ないので、飲み物だけ買って持っていきたい。原さんの希望に合う会場はいくつか。",
                              "options":  [
                                              "1つ",
                                              "2つ",
                                              "3つ",
                                              "4つ"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "1つ",
                                                          "meaning":  "1 địa điểm.",
                                                          "analysis":  "ĐÚNG: Chỉ có duy nhất Địa điểm ④ (市民センター) đáp ứng: (1) Thứ Năm mở cửa (chỉ nghỉ thứ Hai), (2) Chứa được 30 người (tối đa 40 người), (3) Cho phép tự mang đồ uống vào (\u0027注文はできません。必要な場合は利用者がご用意ください\u0027). Ba địa điểm còn lại đều bị loại: ① và ③ bắt buộc phải gọi món ăn (\u0027必ず料理を注文してください\u0027), còn ② thì đóng cửa nghỉ định kỳ vào thứ Năm (\u0027定休日：木曜日\u0027)."
                                                      },
                                                      {
                                                          "option":  "2つ",
                                                          "meaning":  "2 địa điểm.",
                                                          "analysis":  "Sai: Đã nhầm lẫn thêm một địa điểm khác."
                                                      },
                                                      {
                                                          "option":  "3つ",
                                                          "meaning":  "3 địa điểm.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "4つ",
                                                          "meaning":  "4 địa điểm.",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「④ 市民センター：利用時間 11:00〜21:00 (定休日：月曜日)、利用人数 最大40名、料理 注文はできません（必要な場合は利用者がご用意ください）」",
                              "explanation":  "Đáp án 1 đúng (1つ - 1 địa điểm). \n- Kiểm tra yêu cầu của Hara: Cần hội trường chiều Thứ Năm, khoảng 30 người, không ăn món mà tự mua nước mang vào.\n+ ① 安見ホール: Loại vì bắt buộc phải gọi món ăn (\u0027必ず料理を注文してください\u0027).\n+ ② 花の家: Loại vì đóng cửa nghỉ định kỳ vào Thứ Năm (\u0027定休日：木曜日\u0027).\n+ ③ レストラン海: Loại vì bắt buộc phải gọi món ăn (\u0027必ず料理を注文してください\u0027).\n+ ④ 市民センター: Thỏa mãn trọn vẹn (mở thứ Năm, sức chứa 40 người $\\ge 30$, không bán đồ ăn và cho phép người dùng tự chuẩn bị mang vào).\nVậy chỉ có duy nhất 1 địa điểm phù hợp."
                          },
                          {
                              "id":  2,
                              "question":  "問2：マイさんは、友達から「交流会の会場を探してほしい」と下のメモを渡された。友達の希望に合う会場はどれか。\nメモ:\n・来週の土曜日のお昼\n・人数は20人ぐらい\n・安見駅から歩いて20分以内\n・料理は2,000円以内で会場で注文したい",
                              "options":  [
                                              "①",
                                              "②",
                                              "③",
                                              "④"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "①",
                                                          "meaning":  "Địa điểm ①: 安見ホール",
                                                          "analysis":  "Sai: Đi bộ mất 30 phút (\u0027安見駅から徒歩30分\u0027), vượt quá yêu cầu 20 phút trở lại."
                                                      },
                                                      {
                                                          "option":  "②",
                                                          "meaning":  "Địa điểm ②: 花の家",
                                                          "analysis":  "ĐÚNG: Khớp toàn bộ 4 điều kiện trong memo: (1) Mở cửa trưa Thứ Bảy (11:00〜20:00), (2) Sức chứa 10〜50 người (đủ cho 20 người), (3) Đi bộ 15 phút (\u0027徒歩15分\u0027 $\\le 20$ phút), (4) Đặt món ăn tại chỗ giá 1,500円/người (\u00271人1,500円から\u0027 $\\le 2,000$ yên)."
                                                      },
                                                      {
                                                          "option":  "③",
                                                          "meaning":  "Địa điểm ③: レストラン海",
                                                          "analysis":  "Sai: Giá đồ ăn từ 3,000 yên/người (\u00271人3,000円から\u0027), vượt quá mức ngân sách 2,000 yên."
                                                      },
                                                      {
                                                          "option":  "④",
                                                          "meaning":  "Địa điểm ④: 市民センター",
                                                          "analysis":  "Sai: Không phục vụ đặt món ăn tại chỗ (\u0027注文はできません\u0027), không đáp ứng yêu cầu muốn đặt món tại hội trường."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「② 花の家：利用時間 11:00〜20:00 (土曜日営業)、利用人数 10〜50名、料理 1人1,500円から、交通 安見駅から徒歩15分」",
                              "explanation":  "Đáp án ② đúng (Phương án 2). \n- Điều kiện ghi nhớ của bạn Mai:\n+ Thời gian: Trưa thứ Bảy\n+ Số người: Khoảng 20 người\n+ Khoảng cách: Đi bộ $\\le 20$ phút từ ga Yasumi\n+ Đồ ăn: Đặt tại hội trường với giá $\\le 2,000$ yên/người.\n- Đối chiếu: ① Đi bộ 30 phút (quá xa); ③ Giá ăn 3,000 yên (quá đắt); ④ Không đặt được món ăn. Chỉ có ② 花の家 đáp ứng hoàn hảo (đi bộ 15 phút, giá ăn 1,500 yên, chứa được 50 người, mở trưa thứ Bảy)."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-thongtin-05",
        "level":  "N3",
        "category":  "thongtin",
        "categoryName":  "Tìm thông tin (情報検索)",
        "lessonNumber":  5,
        "title":  "ABCクレジットカード会員様限定 レストラン案内 (Ưu đãi nhà hàng dành cho chủ thẻ ABC)",
        "timeLimit":  300,
        "passage":  "\u003cdiv class=\"dokkai-notice-box\"\u003e\u003ch3 class=\"notice-title text-center\"\u003e*** ABCクレジットカード\u003cruby\u003e会員\u003crt\u003eかいいん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e皆様\u003crt\u003eみなさま\u003c/rt\u003e\u003c/ruby\u003eへ ***\u003c/h3\u003e\u003cp class=\"notice-subtitle text-center\"\u003eABCクレジットカードをお\u003cruby\u003e持\u003crt\u003eも\u003c/rt\u003e\u003c/ruby\u003eちの\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003eに、12\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e1\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e〜12\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e21\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003eまでの3\u003cruby\u003e週間\u003crt\u003eしゅうかん\u003c/rt\u003e\u003c/ruby\u003e、レストラン\u003cruby\u003e特別\u003crt\u003eとくべつ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e価格\u003crt\u003eかかく\u003c/rt\u003e\u003c/ruby\u003eメニューをご\u003cruby\u003e用意\u003crt\u003eようい\u003c/rt\u003e\u003c/ruby\u003eいたしました。\u003c/p\u003e\u003cdiv class=\"notice-section\"\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e＊ ご\u003cruby\u003e予約\u003crt\u003eよやく\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e各店\u003crt\u003eかくてん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e直接\u003crt\u003eちょくせつ\u003c/rt\u003e\u003c/ruby\u003eお\u003cruby\u003e電話\u003crt\u003eでんわ\u003c/rt\u003e\u003c/ruby\u003eください。\u003c/li\u003e\u003cli\u003e＊ ご\u003cruby\u003e予約\u003crt\u003eよやく\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時\u003crt\u003eじ\u003c/rt\u003e\u003c/ruby\u003eに、ABCクレジットカード\u003cruby\u003e会員\u003crt\u003eかいいん\u003c/rt\u003e\u003c/ruby\u003eであることをお\u003cruby\u003e知\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eらせください。\u003c/li\u003e\u003cli\u003e＊ キャンセル\u003cruby\u003e料\u003crt\u003eりょう\u003c/rt\u003e\u003c/ruby\u003eは、\u003cstrong\u003eご\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e日\u003crt\u003eび\u003c/rt\u003e\u003c/ruby\u003eの4\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eまでは\u003cruby\u003e無料\u003crt\u003eむりょう\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e、\u003cstrong\u003e3\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e前日\u003crt\u003eぜんじつ\u003c/rt\u003e\u003c/ruby\u003eまでは20%\u003c/strong\u003e、\u003cstrong\u003e\u003cruby\u003e当日\u003crt\u003eとうじつ\u003c/rt\u003e\u003c/ruby\u003e100%\u003c/strong\u003eとなります。\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e【\u003cruby\u003e森王\u003crt\u003eもりおう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e近\u003crt\u003eちか\u003c/rt\u003e\u003c/ruby\u003eくのお\u003cruby\u003e店\u003crt\u003eみせ\u003c/rt\u003e\u003c/ruby\u003e】\u003c/h4\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003cthead\u003e\u003ctr\u003e\u003cth style=\"width:6%;\"\u003eNo.\u003c/th\u003e\u003cth\u003e\u003cruby\u003e店名\u003crt\u003eてんめい\u003c/rt\u003e\u003c/ruby\u003e・\u003cruby\u003e料理\u003crt\u003eりょうり\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e特別\u003crt\u003eとくべつ\u003c/rt\u003e\u003c/ruby\u003eランチ\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e定休日\u003crt\u003eていきゅうび\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e交通\u003crt\u003eこうつう\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e1\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cstrong\u003e「レストラン\u003cruby\u003e泉\u003crt\u003eいずみ\u003c/rt\u003e\u003c/ruby\u003e」\u003c/strong\u003e\u003cbr\u003e\u003csmall\u003eおいしいフランス\u003cruby\u003e料理\u003crt\u003eりょうり\u003c/rt\u003e\u003c/ruby\u003e\u003c/small\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e・コースA: 2,800\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e(\u003cruby\u003e平日\u003crt\u003eへいじつ\u003c/rt\u003e\u003c/ruby\u003e) / 3,300\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e(\u003cruby\u003e土日\u003crt\u003eどにち\u003c/rt\u003e\u003c/ruby\u003e)\u003cbr\u003e・コースB: 3,500\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e(\u003cruby\u003e平日\u003crt\u003eへいじつ\u003c/rt\u003e\u003c/ruby\u003e) / \u003cstrong\u003e4,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e(\u003cruby\u003e土日\u003crt\u003eどにち\u003c/rt\u003e\u003c/ruby\u003e)\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e水曜日\u003crt\u003eすいようび\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e森王\u003crt\u003eもりおう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e徒歩\u003crt\u003eとほ\u003c/rt\u003e\u003c/ruby\u003e8\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e2\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cstrong\u003e「さくら\u003cruby\u003e屋\u003crt\u003eや\u003c/rt\u003e\u003c/ruby\u003e」\u003c/strong\u003e\u003cbr\u003e\u003csmall\u003e\u003cruby\u003e天\u003crt\u003eてん\u003c/rt\u003e\u003c/ruby\u003eぷら・さしみなどの\u003cruby\u003e定食\u003crt\u003eていしょく\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e和食\u003crt\u003eわしょく\u003c/rt\u003e\u003c/ruby\u003e）\u003c/small\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e2,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e(\u003cruby\u003e平日\u003crt\u003eへいじつ\u003c/rt\u003e\u003c/ruby\u003e) / 2,500\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e(\u003cruby\u003e土日\u003crt\u003eどにち\u003c/rt\u003e\u003c/ruby\u003e)\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e水曜日\u003crt\u003eすいようび\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e森王\u003crt\u003eもりおう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003eから\u003cstrong\u003e\u003cruby\u003e徒歩\u003crt\u003eとほ\u003c/rt\u003e\u003c/ruby\u003e5\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e3\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cstrong\u003e「すし\u003cruby\u003e大海\u003crt\u003eたいかい\u003c/rt\u003e\u003c/ruby\u003e」\u003c/strong\u003e\u003cbr\u003e\u003csmall\u003e\u003cruby\u003e新鮮\u003crt\u003eしんせん\u003c/rt\u003e\u003c/ruby\u003eな\u003cruby\u003e魚\u003crt\u003eさかな\u003c/rt\u003e\u003c/ruby\u003eのすし\u003c/small\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e2,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e(\u003cruby\u003e平日\u003crt\u003eへいじつ\u003c/rt\u003e\u003c/ruby\u003e) / 2,400\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e(\u003cruby\u003e土日\u003crt\u003eどにち\u003c/rt\u003e\u003c/ruby\u003e)\u003c/td\u003e\u003ctd\u003e\u003cstrong\u003e\u003cruby\u003e月曜日\u003crt\u003eげつようび\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e森王\u003crt\u003eもりおう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e徒歩\u003crt\u003eとほ\u003c/rt\u003e\u003c/ruby\u003e3\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e4\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cstrong\u003e「ふじ」\u003c/strong\u003e\u003cbr\u003e\u003csmall\u003e\u003cruby\u003e和食\u003crt\u003eわしょく\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e専門店\u003crt\u003eせんもんてん\u003c/rt\u003e\u003c/ruby\u003e\u003c/small\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e2,700\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e(\u003cruby\u003e平日\u003crt\u003eへいじつ\u003c/rt\u003e\u003c/ruby\u003e) / 3,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e(\u003cruby\u003e土日\u003crt\u003eどにち\u003c/rt\u003e\u003c/ruby\u003e)\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e木曜日\u003crt\u003eもくようび\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e森王\u003crt\u003eもりおう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003eから\u003cstrong\u003e\u003cruby\u003e徒歩\u003crt\u003eとほ\u003c/rt\u003e\u003c/ruby\u003e15\u003cruby\u003e分\u003crt\u003eふん\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e",
        "fullTranslation":  "【KÍNH GỬI QUÝ HỘI VIÊN THẺ TÍN DỤNG ABC】\nDành tặng cho quý khách sở hữu thẻ tín dụng ABC thực đơn ưu đãi đặc biệt tại các nhà hàng trong 3 tuần từ ngày 1/12 đến ngày 21/12.\n\n■ QUY ĐỊNH CHUNG:\n* Đặt bàn: Vui lòng gọi điện thoại trực tiếp đến từng nhà hàng.\n* Khi đặt bàn: Vui lòng thông báo quý khách là hội viên thẻ tín dụng ABC.\n* Phí hủy bàn (キャンセル料):\n  - Đến trước ngày sử dụng 4 ngày: MIỄN PHÍ.\n  - Từ 3 ngày trước đến ngày hôm trước: Chịu phí 20%.\n  - Đúng ngày sử dụng: Chịu phí 100%.\n\n■ CÁC NHÀ HÀNG GẦN GA MORIOU:\n1. 「Nhà hàng Izumi (レストラン泉)」:\n- Thưởng thức món Pháp (フランス料理) tuyệt hảo ngắm cảnh đẹp.\n- Giá: Course A: 2,800 yên (Ngày thường) / 3,300 yên (Thứ 7, CN); Course B: 3,500 yên (Ngày thường) / 4,000 yên (Thứ 7, CN).\n- Nghỉ: Thứ Tư | Đi lại: Đi bộ 8 phút từ ga Moriou.\n\n2. 「Quán Sakuraya (さくら屋)」:\n- Cơm suất Teishoku phong phú như Tempura, Sashimi... (Món Nhật).\n- Giá: 2,000 yên (Ngày thường) / 2,500 yên (Thứ 7, CN).\n- Nghỉ: Thứ Tư | Đi lại: Đi bộ 5 phút từ ga Moriou.\n\n3. 「Sushi Oomi (すし大海)」:\n- Thưởng thức Sushi hải sản tươi sống đánh bắt tại vùng biển gần.\n- Giá: 2,000 yên (Ngày thường) / 2,400 yên (Thứ 7, CN).\n- Nghỉ: Thứ Hai | Đi lại: Đi bộ 3 phút từ ga Moriou.\n\n4. 「Quán Fuji (ふじ)」:\n- Cửa hàng chuyên món Nhật (和食). Món ăn đặc sản toàn quốc thay đổi theo ngày.\n- Giá: 2,700 yên (Ngày thường) / 3,000 yên (Thứ 7, CN).\n- Nghỉ: Thứ Năm | Đi lại: Đi bộ 15 phút từ ga Moriou.",
        "vocabulary":  [
                           {
                               "word":  "会員",
                               "hiragana":  "かいいん",
                               "meaning":  "Hội viên / Thành viên"
                           },
                           {
                               "word":  "特別価格",
                               "hiragana":  "とくべつかかく",
                               "meaning":  "Giá ưu đãi đặc biệt"
                           },
                           {
                               "word":  "キャンセル料",
                               "hiragana":  "きゃんせるりょう",
                               "meaning":  "Phí hủy bàn / Phí hủy dịch vụ"
                           },
                           {
                               "word":  "和食",
                               "hiragana":  "わしょく",
                               "meaning":  "Món ăn truyền thống Nhật Bản"
                           },
                           {
                               "word":  "フランス料理",
                               "hiragana":  "ふらんすりょうり",
                               "meaning":  "Món ăn Pháp"
                           },
                           {
                               "word":  "前日",
                               "hiragana":  "ぜんじつ",
                               "meaning":  "Ngày hôm trước"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜のうちに",
                                 "meaning":  "Trong lúc / Trong ngày hôm nay (今日のうちに: ngay trong ngày hôm nay)"
                             },
                             {
                                 "pattern":  "〜前日",
                                 "meaning":  "Ngày hôm trước của ngày diễn ra sự kiện"
                             },
                             {
                                 "pattern":  "〜以内",
                                 "meaning":  "Trong vòng... trở lại (10分以内: trong 10 phút trở lại)"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：フイクさんは、明日の12月14日(土)に友達と三人で「レストラン泉」に行こうと思い、特別ランチコースBを三人分予約していた。友達一人が行けなくなったので、今日のうちに一人分をキャンセルしたい。キャンセル料はどうなるか。",
                              "options":  [
                                              "3,500円を払う。",
                                              "3,500円の20%を払う。",
                                              "4,000円を払う。",
                                              "4,000円の20%を払う。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "3,500円を払う。",
                                                          "meaning":  "Trả 3,500 yên.",
                                                          "analysis":  "Sai: 3,500円 là giá ngày thường (平日), và hủy trước ngày đi không phải chịu 100%."
                                                      },
                                                      {
                                                          "option":  "3,500円の20%を払う。",
                                                          "meaning":  "Trả 20% của 3,500 yên.",
                                                          "analysis":  "Sai: 3,500円 là giá ngày thường (平日). Ngày sử dụng là thứ Bảy (12月14日(土)) nên giá suất ăn là 4,000円."
                                                      },
                                                      {
                                                          "option":  "4,000円を払う。",
                                                          "meaning":  "Trả 4,000 yên.",
                                                          "analysis":  "Sai: Mức 100% (4,000円) chỉ áp dụng khi hủy đúng ngày sử dụng (当日)."
                                                      },
                                                      {
                                                          "option":  "4,000円の20%を払う。",
                                                          "meaning":  "Trả 20% của 4,000 yên.",
                                                          "analysis":  "ĐÚNG: Khớp chính xác cả 2 yếu tố: (1) Giá suất ăn đặc biệt Course B vào ngày thứ Bảy (土日) là 4,000円/người; (2) Thời điểm hủy là ngày hôm nay (\u0027今日のうちに\u0027), tức là trước 1 ngày so với ngày dùng bữa ngày mai (\u0027明日の12月14日(土)\u0027 $\\rightarrow$ 前日). Quy định hủy từ 3 ngày trước đến ngày hôm trước chịu phí 20% (\u00273日前から前日までは20%\u0027) $\\rightarrow$ Mức phí hủy phải trả là 20% của 4,000円."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「1. レストラン泉：特別ランチコースB 4000円(土日)。キャンセル規定：『3日前から前日までは20%』」",
                              "explanation":  "Đáp án 4 đúng (4,000円の20%を払う。). \n- Ngày đặt bàn: 12月14日 (Thứ Bảy - 土曜日) $\\rightarrow$ Giá của gói \u0027特別ランチコースB\u0027 vào ngày thứ Bảy/Chủ nhật là 4,000円.\n- Thời điểm hủy: Ngày hôm nay (trước ngày hẹn ngày mai 1 ngày $\\rightarrow$ 前日).\n- Quy định phí hủy: Hủy từ 3 ngày trước đến trước 1 ngày (前日) chịu phí 20% $\\rightarrow$ Phí hủy là 20% của 4,000円."
                          },
                          {
                              "id":  2,
                              "question":  "問2：パクさんは、12月16日 (月) に友達と一緒に昼ご飯を食べに行こうと思っている。和食が食べられるお店で、森王駅から歩いて10分以内のところがいい。パクさんの希望に合うのはどのレストランか。",
                              "options":  [
                                              "1",
                                              "2",
                                              "3",
                                              "4"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "1",
                                                          "meaning":  "Nhà hàng 1: レストラン泉",
                                                          "analysis":  "Sai: Đây là nhà hàng món Pháp (フランス料理), Park muốn ăn món Nhật (和食)."
                                                      },
                                                      {
                                                          "option":  "2",
                                                          "meaning":  "Nhà hàng 2: さくら屋",
                                                          "analysis":  "ĐÚNG: Khớp toàn bộ 3 điều kiện: (1) Món Nhật (和食: 天ぷら、さしみなど), (2) Đi bộ 5 phút từ ga Moriou (\u0027徒歩5分\u0027 $\\le 10$ phút), (3) Ngày 16/12 là thứ Hai (月曜日) nhà hàng mở cửa bình thường (chỉ nghỉ thứ Tư \u0027定休日：水曜日\u0027)."
                                                      },
                                                      {
                                                          "option":  "3",
                                                          "meaning":  "Nhà hàng 3: すし大海",
                                                          "analysis":  "Sai: Đóng cửa nghỉ định kỳ vào thứ Hai (\u0027定休日：月曜日\u0027), trong khi Park đi ăn vào thứ Hai 12月16日(月)."
                                                      },
                                                      {
                                                          "option":  "4",
                                                          "meaning":  "Nhà hàng 4: ふじ",
                                                          "analysis":  "Sai: Đi bộ mất 15 phút (\u0027徒歩15分\u0027), vượt quá yêu cầu 10 phút trở lại."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「2. さくら屋：天ぷら、さしみなど（和食）、定休日：水曜日（月曜日営業）、交通：森王駅から徒歩5分」",
                              "explanation":  "Đáp án 2 đúng (Nhà hàng 2: さくら屋). \n- Nhu cầu của Park: Ăn trưa thứ Hai (16/12), ăn món Nhật (和食), đi bộ từ ga $\\le 10$ phút.\n+ Nhà hàng 1: Món Pháp (Loại).\n+ Nhà hàng 2 (さくら屋): Món Nhật (Tempura/Sashimi), mở thứ Hai (nghỉ thứ Tư), đi bộ 5 phút $\\rightarrow$ Thỏa mãn 100%.\n+ Nhà hàng 3 (すし大海): Nghỉ thứ Hai (Loại).\n+ Nhà hàng 4 (ふじ): Đi bộ 15 phút, quá xa (Loại)."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-thongtin-06",
        "level":  "N3",
        "category":  "thongtin",
        "categoryName":  "Tìm thông tin (情報検索)",
        "lessonNumber":  6,
        "title":  "丸岩駅 自転車置き場 利用案内 (Hướng dẫn sử dụng Bãi gửi xe đạp ga Maruiwa)",
        "timeLimit":  300,
        "passage":  "\u003cdiv class=\"dokkai-notice-box\"\u003e\u003ch3 class=\"notice-title text-center\"\u003e\u003cruby\u003e丸岩\u003crt\u003eまるいわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003e　\u003cruby\u003e自転車\u003crt\u003eじてんしゃ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e置\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eき\u003cruby\u003e場\u003crt\u003eば\u003c/rt\u003e\u003c/ruby\u003e　ご\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e案内\u003crt\u003eあんない\u003c/rt\u003e\u003c/ruby\u003e\u003c/h3\u003e\u003cdiv class=\"notice-section\"\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e● \u003cstrong\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e者\u003crt\u003eしゃ\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e：\u003cruby\u003e通勤\u003crt\u003eつうきん\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e通学\u003crt\u003eつうがく\u003c/rt\u003e\u003c/ruby\u003eなどで\u003cruby\u003e丸岩\u003crt\u003eまるいわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003eをご\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eされる\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003e\u003c/li\u003e\u003cli\u003e● \u003cstrong\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e期間\u003crt\u003eきかん\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e：1\u003cruby\u003e年間\u003crt\u003eねんかん\u003c/rt\u003e\u003c/ruby\u003e 1\u003cruby\u003e台\u003crt\u003eだい\u003c/rt\u003e\u003c/ruby\u003e 9,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e（\u003cstrong\u003e\u003cruby\u003e学生\u003crt\u003eがくせい\u003c/rt\u003e\u003c/ruby\u003eは、5,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e）\u003c/li\u003e\u003cli\u003e● \u003cstrong\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e：6:00〜24:00\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e● \u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみ\u003cruby\u003e方法\u003crt\u003eほうほう\u003c/rt\u003e\u003c/ruby\u003e\u003c/h4\u003e\u003cdiv class=\"notice-subbox\" style=\"background:rgba(255,255,255,0.03); padding:0.8rem; border-radius:8px; margin-bottom:0.8rem;\"\u003e\u003ch5\u003e【\u003cruby\u003e初\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめての\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003e】\u003c/h5\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e・ご\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eには、お\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみが\u003cruby\u003e必要\u003crt\u003eひつよう\u003c/rt\u003e\u003c/ruby\u003eです。\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみ\u003cruby\u003e用紙\u003crt\u003eようし\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e丸岩\u003crt\u003eまるいわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e市役所\u003crt\u003eしやくしょ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交通\u003crt\u003eこうつう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e安全\u003crt\u003eあんぜん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e課\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e丸岩\u003crt\u003eまるいわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e自転車\u003crt\u003eじてんしゃ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e置\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eき\u003cruby\u003e場\u003crt\u003eば\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e管理人\u003crt\u003eかんりにん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e室\u003crt\u003eしつ\u003c/rt\u003e\u003c/ruby\u003eにおいてあります。\u003c/li\u003e\u003cli\u003e・\u003cruby\u003e毎月\u003crt\u003eまいつき\u003c/rt\u003e\u003c/ruby\u003e1\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003eからご\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e開始\u003crt\u003eかいし\u003c/rt\u003e\u003c/ruby\u003eできます。\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e開始\u003crt\u003eかいし\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e希望\u003crt\u003eきぼう\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e月\u003crt\u003eつき\u003c/rt\u003e\u003c/ruby\u003eの\u003cstrong\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e月\u003crt\u003eつき\u003c/rt\u003e\u003c/ruby\u003e15\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003eまでに\u003c/strong\u003e、\u003cstrong\u003eお\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみ\u003cruby\u003e用紙\u003crt\u003eようし\u003c/rt\u003e\u003c/ruby\u003eと1\u003cruby\u003e年分\u003crt\u003eねんぶん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003eを、\u003cruby\u003e丸岩\u003crt\u003eまるいわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e市役所\u003crt\u003eしやくしょ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交通\u003crt\u003eこうつう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e安全\u003crt\u003eあんぜん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e課\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eにお\u003cruby\u003e持\u003crt\u003eも\u003c/rt\u003e\u003c/ruby\u003eちください。\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-subbox\" style=\"background:rgba(255,255,255,0.03); padding:0.8rem; border-radius:8px;\"\u003e\u003ch5\u003e【\u003cruby\u003e続\u003crt\u003eつづ\u003c/rt\u003e\u003c/ruby\u003eけてご\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eされる\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003e】\u003c/h5\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e・\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e期間\u003crt\u003eきかん\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e終了\u003crt\u003eしゅうりょう\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e月\u003crt\u003eつき\u003c/rt\u003e\u003c/ruby\u003eの\u003cstrong\u003e10\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003eまでに\u003c/strong\u003e、\u003cstrong\u003e1\u003cruby\u003e年分\u003crt\u003eねんぶん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003eを\u003cruby\u003e丸岩\u003crt\u003eまるいわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e市役所\u003crt\u003eしやくしょ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交通\u003crt\u003eこうつう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e安全\u003crt\u003eあんぜん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e課\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eでお\u003cruby\u003e支払\u003crt\u003eしはら\u003c/rt\u003e\u003c/ruby\u003eいください。\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cp class=\"notice-note\"\u003e※ \u003cruby\u003e受付\u003crt\u003eうけつけ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e：\u003cruby\u003e丸岩\u003crt\u003eまるいわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e市役所\u003crt\u003eしやくしょ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交通\u003crt\u003eこうつう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e安全\u003crt\u003eあんぜん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e課\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e平日\u003crt\u003eへいじつ\u003c/rt\u003e\u003c/ruby\u003e 9:00〜17:00）／ \u003cruby\u003e丸岩\u003crt\u003eまるいわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e駅\u003crt\u003eえき\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e自転車\u003crt\u003eじてんしゃ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e置\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eき\u003cruby\u003e場\u003crt\u003eば\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e管理人\u003crt\u003eかんりにん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e室\u003crt\u003eしつ\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e毎日\u003crt\u003eまいにち\u003c/rt\u003e\u003c/ruby\u003e 7:00〜21:00）\u003c/p\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e● ご\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e時\u003crt\u003eとき\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e注意\u003crt\u003eちゅうい\u003c/rt\u003e\u003c/ruby\u003e\u003c/h4\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e・\u003cstrong\u003e\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e以外\u003crt\u003eいがい\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e自転車\u003crt\u003eじてんしゃ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e入\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eれたり\u003cruby\u003e出\u003crt\u003eだ\u003c/rt\u003e\u003c/ruby\u003eしたりすることはできません。\u003c/strong\u003e\u003c/li\u003e\u003cli\u003e・\u003cruby\u003e自転車\u003crt\u003eじてんしゃ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e置\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eき\u003cruby\u003e場\u003crt\u003eば\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eをお\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみになった\u003cruby\u003e方\u003crt\u003eかた\u003c/rt\u003e\u003c/ruby\u003eには、\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e者\u003crt\u003eしゃ\u003c/rt\u003e\u003c/ruby\u003eマークをお\u003cruby\u003e渡\u003crt\u003eわた\u003c/rt\u003e\u003c/ruby\u003eしします。\u003c/li\u003e\u003cli\u003e・\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e者\u003crt\u003eしゃ\u003c/rt\u003e\u003c/ruby\u003eマークは、\u003cstrong\u003e\u003cruby\u003e必\u003crt\u003eかなら\u003c/rt\u003e\u003c/ruby\u003eず\u003cruby\u003e自転車\u003crt\u003eじてんしゃ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e後\u003crt\u003eうし\u003c/rt\u003e\u003c/ruby\u003eろの\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eやすい\u003cruby\u003e場所\u003crt\u003eばしょ\u003c/rt\u003e\u003c/ruby\u003eに\u003c/strong\u003e\u003cruby\u003e付\u003crt\u003eつ\u003c/rt\u003e\u003c/ruby\u003eけてください。\u003c/li\u003e\u003cli\u003e・\u003cruby\u003e自転車\u003crt\u003eじてんしゃ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e置\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eき\u003cruby\u003e場\u003crt\u003eば\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e内\u003crt\u003eない\u003c/rt\u003e\u003c/ruby\u003eでは、\u003cstrong\u003e\u003cruby\u003e決\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eめられた\u003cruby\u003e場所\u003crt\u003eばしょ\u003c/rt\u003e\u003c/ruby\u003eに\u003c/strong\u003e\u003cruby\u003e自転車\u003crt\u003eじてんしゃ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e置\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eいてください。\u003c/li\u003e\u003cli\u003e・\u003cruby\u003e自転車\u003crt\u003eじてんしゃ\u003c/rt\u003e\u003c/ruby\u003eには\u003cruby\u003e必\u003crt\u003eかなら\u003c/rt\u003e\u003c/ruby\u003eず\u003cruby\u003e鍵\u003crt\u003eかぎ\u003c/rt\u003e\u003c/ruby\u003eをかけてください。\u003c/li\u003e\u003cli\u003e・\u003cruby\u003e自転車\u003crt\u003eじてんしゃ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e置\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eき\u003cruby\u003e場\u003crt\u003eば\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e内\u003crt\u003eない\u003c/rt\u003e\u003c/ruby\u003eでは、\u003cstrong\u003e\u003cruby\u003e自転車\u003crt\u003eじてんしゃ\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e降\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eりて\u003cruby\u003e押\u003crt\u003eお\u003c/rt\u003e\u003c/ruby\u003eして\u003cruby\u003e通行\u003crt\u003eつうこう\u003c/rt\u003e\u003c/ruby\u003eしてください。\u003c/strong\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-footer text-right\"\u003e\u003cp\u003e\u003cruby\u003e丸岩\u003crt\u003eまるいわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e市役所\u003crt\u003eしやくしょ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交通\u003crt\u003eこうつう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e安全\u003crt\u003eあんぜん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e課\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003eTEL: 021-543-9875　FAX: 021-543-9876\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
        "fullTranslation":  "【HƯỚNG DẪN SỬ DỤNG BÃI ĐỖ XE ĐẠP GA MARUIWA】\n\n■ THÔNG TIN CHUNG:\n● Đối tượng sử dụng: Người sử dụng ga Maruiwa để đi làm, đi học...\n● Thời hạn và mức phí: 1 năm là 9,000 yên / 1 xe (Học sinh/Sinh viên là 5,000 yên).\n● Thời gian hoạt động: 6:00〜24:00.\n\n■ PHƯƠNG THỨC ĐĂNG KÝ:\n【Dành cho người đăng ký lần đầu】:\n- Bắt buộc phải làm thủ tục đăng ký. Mẫu đơn đăng ký có tại Phòng An toàn Giao thông Tòa thị chính Maruiwa, hoặc Phòng quản lý bãi giữ xe ga Maruiwa.\n- Bắt đầu sử dụng từ ngày 1 hàng tháng. Vui lòng mang ĐƠN ĐĂNG KÝ VÀ TIỀN PHÍ 1 NĂM đến Phòng An toàn Giao thông Tòa thị chính trước ngày 15 của tháng trước tháng muốn bắt đầu.\n【Dành cho người tiếp tục gia hạn sử dụng】:\n- Vui lòng đến nộp TIỀN PHÍ SỬ DỤNG 1 NĂM tại Phòng An toàn Giao thông Tòa thị chính trước ngày 10 của tháng hết hạn sử dụng (không cần nộp lại đơn).\n※ Thời gian tiếp nhận: Phòng An toàn Giao thông (Ngày thường 9:00〜17:00) / Phòng quản lý bãi xe (Hàng ngày 7:00〜21:00).\n\n■ LƯU Ý KHI SỬ DỤNG BÃI XE:\n- Ngoài giờ hoạt động (sau 24:00 đến trước 6:00 sáng hôm sau), KHÔNG THỂ gửi vào hoặc lấy xe đạp ra.\n- Người đăng ký sẽ được cấp Tem chứng nhận người dùng (利用者マーク).\n- Tem chứng nhận người dùng BẮT BUỘC PHẢI DÁN Ở PHÍA SAU xe đạp tại vị trí dễ nhìn thấy.\n- Trong bãi xe, phải để xe đúng vị trí quy định.\n- Phải luôn luôn khóa xe cẩn thận.\n- Trong khuôn viên bãi xe, BẮT BUỘC PHẢI XUỐNG XE VÀ DẮT BỘ khi di chuyển.",
        "vocabulary":  [
                           {
                               "word":  "自転車置き場",
                               "hiragana":  "じてんしゃおきば",
                               "meaning":  "Bãi đỗ / Bãi gửi xe đạp"
                           },
                           {
                               "word":  "通勤・通学",
                               "hiragana":  "つうきん・つうがく",
                               "meaning":  "Đi làm / Đi học"
                           },
                           {
                               "word":  "利用者マーク",
                               "hiragana":  "りようしゃまーく",
                               "meaning":  "Tem chứng nhận người sử dụng"
                           },
                           {
                               "word":  "管理人室",
                               "hiragana":  "かんりにんしつ",
                               "meaning":  "Phòng bảo vệ / Phòng ban quản lý"
                           },
                           {
                               "word":  "通行する",
                               "hiragana":  "つうこうする",
                               "meaning":  "Đi lại / Lưu thông"
                           },
                           {
                               "word":  "降りて押す",
                               "hiragana":  "おりておす",
                               "meaning":  "Xuống xe và dắt bộ"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜てある / 〜においてある",
                                 "meaning":  "Được đặt sẵn ở..."
                             },
                             {
                                 "pattern":  "〜以外",
                                 "meaning":  "Ngoại trừ... / Ngoài..."
                             },
                             {
                                 "pattern":  "〜て通行する",
                                 "meaning":  "Làm hành động gì đó rồi di chuyển (降りて押して通行: xuống xe dắt bộ)"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：大学生のイムさんは、現在丸岩駅の自転車置き場を利用している。今月で利用期間が終わるが、来月からも続けて利用したい場合、どうしなければならないか。",
                              "options":  [
                                              "今月10日までに、5,000円を市役所交通安全課に持っていく。",
                                              "今月10日までに、9,000円を市役所交通安全課に持っていく。",
                                              "今月15日までに、申し込み用紙と5,000円を市役所交通安全課に持っていく。",
                                              "今月15日までに、申し込み用紙と9,000円を市役所交通安全課に持っていく。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "今月10日までに、5,000円を市役所交通安全課に持っていく。",
                                                          "meaning":  "Mang 5,000 yên đến Phòng An toàn Giao thông Tòa thị chính trước ngày 10 tháng này.",
                                                          "analysis":  "ĐÚNG: Khớp toàn bộ các quy định gia hạn: (1) Nhóm tiếp tục sử dụng (\u0027続けて利用される方\u0027) phải nộp trước ngày 10 của tháng hết hạn (\u0027終了する月の10日までに\u0027) và không cần nộp lại đơn đăng ký; (2) Địa điểm nộp là Phòng An toàn Giao thông Tòa thị chính (\u0027市役所交通安全課\u0027); (3) Vì Im là sinh viên đại học (\u0027大学生\u0027) nên mức phí ưu đãi học sinh/sinh viên là 5,000円/năm (\u0027学生は、5,000円\u0027)."
                                                      },
                                                      {
                                                          "option":  "今月10日までに、9,000円を市役所交通安全課に持っていく。",
                                                          "meaning":  "Mang 9,000 yên đến Phòng An toàn Giao thông Tòa thị chính trước ngày 10 tháng này.",
                                                          "analysis":  "Sai: 9,000円 là mức giá của người lớn đi làm thông thường, Im là sinh viên nên được hưởng mức 5,000円."
                                                      },
                                                      {
                                                          "option":  "今月15日までに、申し込み用紙と5,000円を市役所交通安全課に持っていく。",
                                                          "meaning":  "Mang đơn đăng ký và 5,000 yên đến Phòng An toàn Giao thông trước ngày 15 tháng này.",
                                                          "analysis":  "Sai: Hạn ngày 15 và việc nộp kèm đơn đăng ký (\u0027申し込み用紙\u0027) chỉ dành cho người đăng ký mới lần đầu (\u0027初めての方\u0027)."
                                                      },
                                                      {
                                                          "option":  "今月15日までに、申し込み用紙と9,000円を市役所交通安全課に持っていく。",
                                                          "meaning":  "Mang đơn đăng ký và 9,000 yên đến Phòng An toàn Giao thông trước ngày 15 tháng này.",
                                                          "analysis":  "Sai: Cả thời hạn (15日), hồ sơ (申し込み用紙) và mức phí (9,000円) đều sai đối với trường hợp sinh viên gia hạn."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「料金：1年間1台 9,000円（学生は、5,000円）。続けて利用される方：利用期間が終了する月の10日までに、1年分の利用料金を丸岩市役所交通安全課でお支払いください。」",
                              "explanation":  "Đáp án 1 đúng (今月10日までに、5,000円を市役所交通安全課に持っていく。). \n- Im là sinh viên đại học (大学生) $\\rightarrow$ Mức phí là 5,000 yên.\n- Im muốn tiếp tục gia hạn (続けて利用) $\\rightarrow$ Theo quy định mục \u0027続けて利用される方\u0027, chỉ cần nộp tiền phí 1 năm trước ngày 10 của tháng hết hạn tại Phòng An toàn Giao thông Tòa thị chính (không cần nộp lại đơn đăng ký)."
                          },
                          {
                              "id":  2,
                              "question":  "問2：丸岩駅の自転車置き場を利用するときに、気をつけなければならないことは何か。",
                              "options":  [
                                              "自転車置き場から自転車を出せない時間がある。",
                                              "利用者マークは、自転車の前に付ける。",
                                              "どこに自転車を置いてもいいが、かぎをかける。",
                                              "自転車置き場内で自転車に乗るときは、ゆっくり走る。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "自転車置き場から自転車を出せない時間がある。",
                                                          "meaning":  "Có khoảng thời gian không thể lấy xe đạp ra khỏi bãi gửi xe.",
                                                          "analysis":  "ĐÚNG: Thời gian hoạt động của bãi xe là 6:00〜24:00, và mục lưu ý ghi rõ: \u0027利用時間以外に自転車を入れたり出したりすることはできません\u0027 (Ngoài giờ quy định thì không thể đưa xe vào hoặc lấy xe ra $\\rightarrow$ tức là từ 24:00 đến 6:00 sáng không thể lấy xe ra)."
                                                      },
                                                      {
                                                          "option":  "利用者マークは、自転車の前に付ける。",
                                                          "meaning":  "Dán tem chứng nhận người dùng ở phía trước xe đạp.",
                                                          "analysis":  "Sai: Quy định bắt buộc phải dán ở PHÍA SAU xe (\u0027必ず自転車の後ろの見やすい場所に付けてください\u0027)."
                                                      },
                                                      {
                                                          "option":  "どこに自転車を置いてもいいが、かぎをかける。",
                                                          "meaning":  "Để xe ở đâu cũng được miễn là khóa xe.",
                                                          "analysis":  "Sai: Bắt buộc phải để đúng nơi quy định (\u0027決められた場所に自転車を置いてください\u0027), không được tùy tiện để ở đâu cũng được."
                                                      },
                                                      {
                                                          "option":  "自転車置き場内で自転車に乗るときは、ゆっくり走る。",
                                                          "meaning":  "Khi đi xe trong bãi xe thì phải chạy chậm.",
                                                          "analysis":  "Sai: Quy định bắt buộc phải XUỐNG XE VÀ DẮT BỘ (\u0027自転車から降りて押して通行してください\u0027), cấm hoàn toàn việc ngồi trên xe đạp chạy trong bãi xe."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「利用時間：6:00〜24:00。注意：・利用時間以外に自転車を入れたり出したりすることはできません。」",
                              "explanation":  "Đáp án 1 đúng (自転車置き場から自転車を出せない時間がある。). Bãi đỗ xe mở cửa từ 6:00 đến 24:00 và quy định cấm lấy hoặc gửi xe ngoài khung giờ này. Vì vậy trong khoảng thời gian từ sau 24:00 đêm đến trước 6:00 sáng hôm sau, người dùng sẽ không thể lấy xe ra được."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-thongtin-07",
        "level":  "N3",
        "category":  "thongtin",
        "categoryName":  "Tìm thông tin (情報検索)",
        "lessonNumber":  7,
        "title":  "日本語クラス参加者のお知らせ (Thông báo tham gia các lớp học tiếng Nhật)",
        "timeLimit":  300,
        "passage":  "\u003cdiv class=\"dokkai-notice-box\"\u003e\u003ch3 class=\"notice-title text-center\"\u003e\u003cruby\u003e日本語\u003crt\u003eにほんご\u003c/rt\u003e\u003c/ruby\u003eクラス\u003cruby\u003e参加\u003crt\u003eさんか\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e者\u003crt\u003eしゃ\u003c/rt\u003e\u003c/ruby\u003eのお\u003cruby\u003e知\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eらせ\u003c/h3\u003e\u003cdiv class=\"notice-section\"\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e● \u003cstrong\u003e【\u003cruby\u003e期間\u003crt\u003eきかん\u003c/rt\u003e\u003c/ruby\u003e】\u003c/strong\u003e：2015\u003cruby\u003e年\u003crt\u003eねん\u003c/rt\u003e\u003c/ruby\u003e2\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e2\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e月\u003crt\u003eげつ\u003c/rt\u003e\u003c/ruby\u003e）〜 5\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e23\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e土\u003crt\u003eど\u003c/rt\u003e\u003c/ruby\u003e）　\u003cruby\u003e週\u003crt\u003eしゅう\u003c/rt\u003e\u003c/ruby\u003e1\u003cruby\u003e回\u003crt\u003eかい\u003c/rt\u003e\u003c/ruby\u003e　\u003cruby\u003e全\u003crt\u003eぜん\u003c/rt\u003e\u003c/ruby\u003e15\u003cruby\u003e回\u003crt\u003eかい\u003c/rt\u003e\u003c/ruby\u003e\u003c/li\u003e\u003cli\u003e● \u003cstrong\u003e【\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e】\u003c/strong\u003e：5,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/li\u003e\u003cli\u003e● \u003cstrong\u003e【レベル】\u003c/strong\u003e：\u003cbr\u003e・\u003cstrong\u003e\u003cruby\u003e初級\u003crt\u003eしょきゅう\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e：\u003cruby\u003e初\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめて\u003cruby\u003e日本語\u003crt\u003eにほんご\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e勉強\u003crt\u003eべんきょう\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e・\u003cstrong\u003e\u003cruby\u003e中級\u003crt\u003eちゅうきゅう\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e：\u003cruby\u003e日常\u003crt\u003eにちじょう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e生活\u003crt\u003eせいかつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e会話\u003crt\u003eかいわ\u003c/rt\u003e\u003c/ruby\u003eがだいたいできる\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003cthead\u003e\u003ctr\u003e\u003cth rowspan=\"2\"\u003e\u003cruby\u003eクラス\u003crt\u003eくらす\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e名\u003crt\u003eめい\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth rowspan=\"2\"\u003eレベル\u003c/th\u003e\u003cth colspan=\"4\"\u003e\u003cruby\u003e内容\u003crt\u003eないよう\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth colspan=\"2\"\u003e\u003cruby\u003e日時\u003crt\u003eにちじ\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth\u003e\u003cruby\u003e話\u003crt\u003eはな\u003c/rt\u003e\u003c/ruby\u003eす\u003c/th\u003e\u003cth\u003e\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eく\u003c/th\u003e\u003cth\u003e\u003cruby\u003e書\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eく\u003c/th\u003e\u003cth\u003e\u003cruby\u003e読\u003crt\u003eよ\u003c/rt\u003e\u003c/ruby\u003eむ\u003c/th\u003e\u003cth\u003e\u003cruby\u003e曜日\u003crt\u003eようび\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd\u003e\u003cruby\u003e日本語\u003crt\u003eにほんご\u003c/rt\u003e\u003c/ruby\u003e1\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e初級\u003crt\u003eしょきゅう\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e〇\u003c/td\u003e\u003ctd\u003e〇\u003c/td\u003e\u003ctd\u003e〇\u003c/td\u003e\u003ctd\u003e〇\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e土\u003crt\u003eど\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e15:00〜17:00\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cruby\u003e日本語\u003crt\u003eにほんご\u003c/rt\u003e\u003c/ruby\u003e2\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e中級\u003crt\u003eちゅうきゅう\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e〇\u003c/td\u003e\u003ctd\u003e〇\u003c/td\u003e\u003ctd\u003e〇\u003c/td\u003e\u003ctd\u003e〇\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e金\u003crt\u003eきん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e15:00〜17:00\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cruby\u003e会話\u003crt\u003eかいわ\u003c/rt\u003e\u003c/ruby\u003e1\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e初級\u003crt\u003eしょきゅう\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e＊\u003c/td\u003e\u003ctd\u003e＊\u003c/td\u003e\u003ctd\u003e✕\u003c/td\u003e\u003ctd\u003e✕\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e木\u003crt\u003eもく\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e19:00〜21:00\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cruby\u003e会話\u003crt\u003eかいわ\u003c/rt\u003e\u003c/ruby\u003e2\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e中級\u003crt\u003eちゅうきゅう\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e＊\u003c/td\u003e\u003ctd\u003e＊\u003c/td\u003e\u003ctd\u003e✕\u003c/td\u003e\u003ctd\u003e✕\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e木\u003crt\u003eもく\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e15:00〜17:00\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cruby\u003e会話\u003crt\u003eかいわ\u003c/rt\u003e\u003c/ruby\u003e3\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e中級\u003crt\u003eちゅうきゅう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e以上\u003crt\u003eいじょう\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e＊\u003c/td\u003e\u003ctd\u003e＊\u003c/td\u003e\u003ctd\u003e✕\u003c/td\u003e\u003ctd\u003e□\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e土\u003crt\u003eど\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e19:00〜21:00\u003c/td\u003e\u003c/tr\u003e\u003ctr style=\"background:rgba(0, 243, 255, 0.1);\"\u003e\u003ctd\u003e\u003cstrong\u003eニュースについて\u003cruby\u003e話\u003crt\u003eはな\u003c/rt\u003e\u003c/ruby\u003eそう\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e中級\u003crt\u003eちゅうきゅう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e以上\u003crt\u003eいじょう\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e\u003cstrong\u003e＊\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e＊\u003c/td\u003e\u003ctd\u003e□\u003c/td\u003e\u003ctd\u003e✕\u003c/td\u003e\u003ctd\u003e\u003cstrong\u003e\u003cruby\u003e水\u003crt\u003eすい\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e\u003cstrong\u003e19:00〜21:00\u003c/strong\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cruby\u003e小説\u003crt\u003eしょうせつ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e読\u003crt\u003eよ\u003c/rt\u003e\u003c/ruby\u003eもう\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e中級\u003crt\u003eちゅうきゅう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e以上\u003crt\u003eいじょう\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e□\u003c/td\u003e\u003ctd\u003e✕\u003c/td\u003e\u003ctd\u003e□\u003c/td\u003e\u003ctd\u003e＊\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e金\u003crt\u003eきん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e19:00〜21:00\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003cp class=\"notice-note\"\u003e【\u003cruby\u003e記号\u003crt\u003eきごう\u003c/rt\u003e\u003c/ruby\u003e】＊：\u003cruby\u003e中心\u003crt\u003eちゅうしん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e勉強\u003crt\u003eべんきょう\u003c/rt\u003e\u003c/ruby\u003eします　〇：\u003cruby\u003e勉強\u003crt\u003eべんきょう\u003c/rt\u003e\u003c/ruby\u003eします　□：すこし\u003cruby\u003e勉強\u003crt\u003eべんきょう\u003c/rt\u003e\u003c/ruby\u003eします　✕：\u003cruby\u003e勉強\u003crt\u003eべんきょう\u003c/rt\u003e\u003c/ruby\u003eしません\u003c/p\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e● 【お\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみ\u003cruby\u003e方法\u003crt\u003eほうほう\u003c/rt\u003e\u003c/ruby\u003e】\u003c/h4\u003e\u003cp\u003e\u003cruby\u003e名前\u003crt\u003eなまえ\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e住所\u003crt\u003eじゅうしょ\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e電話\u003crt\u003eでんわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e番号\u003crt\u003eばんごう\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e希望\u003crt\u003eきぼう\u003c/rt\u003e\u003c/ruby\u003eクラス\u003cruby\u003e名\u003crt\u003eめい\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e書\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eいて、\u003cruby\u003e下\u003crt\u003eした\u003c/rt\u003e\u003c/ruby\u003eのメールアドレスに\u003cruby\u003e送\u003crt\u003eおく\u003c/rt\u003e\u003c/ruby\u003eってください。\u003cbr\u003e\u003cstrong\u003e\u003cruby\u003e受付\u003crt\u003eうけつけ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e後\u003crt\u003eご\u003c/rt\u003e\u003c/ruby\u003e、レベルを\u003cruby\u003e決\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eめるためのインタビューをします。\u003c/strong\u003eセンターからメールを\u003cruby\u003e送\u003crt\u003eおく\u003c/rt\u003e\u003c/ruby\u003eりますので、\u003cruby\u003e指定\u003crt\u003eしてい\u003c/rt\u003e\u003c/ruby\u003eした\u003cruby\u003e日\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e受\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eけてください。\u003cruby\u003e指定\u003crt\u003eしてい\u003c/rt\u003e\u003c/ruby\u003eした\u003cruby\u003e日\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e来\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eられない\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e別\u003crt\u003eべつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e日\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e受\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eけてもらいますので、ご\u003cruby\u003e連絡\u003crt\u003eれんらく\u003c/rt\u003e\u003c/ruby\u003eください。\u003c/p\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e● 【ご\u003cruby\u003e注意\u003crt\u003eちゅうい\u003c/rt\u003e\u003c/ruby\u003e】\u003c/h4\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e・インタビューの\u003cruby\u003e結果\u003crt\u003eけっか\u003c/rt\u003e\u003c/ruby\u003eによって、\u003cruby\u003e希望\u003crt\u003eきぼう\u003c/rt\u003e\u003c/ruby\u003eするクラスを\u003cruby\u003e受\u003crt\u003eう\u003c/rt\u003e\u003c/ruby\u003eけられない\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003eがあります。\u003c/li\u003e\u003cli\u003e・\u003cruby\u003e希望\u003crt\u003eきぼう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e者\u003crt\u003eしゃ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e少\u003crt\u003eすく\u003c/rt\u003e\u003c/ruby\u003eない\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003e、クラスが\u003cruby\u003e開\u003crt\u003eひら\u003c/rt\u003e\u003c/ruby\u003eかれないことがあります。\u003c/li\u003e\u003cli\u003e・\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003eは\u003cstrong\u003eクラス\u003cruby\u003e開始\u003crt\u003eかいし\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e日\u003crt\u003eび\u003c/rt\u003e\u003c/ruby\u003eまで\u003c/strong\u003eにお\u003cruby\u003e支払\u003crt\u003eしはら\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e下\u003crt\u003eくだ\u003c/rt\u003e\u003c/ruby\u003eさい。\u003cruby\u003e一度\u003crt\u003eいちど\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e支払\u003crt\u003eしはら\u003c/rt\u003e\u003c/ruby\u003eった\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e理由\u003crt\u003eりゆう\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e関係\u003crt\u003eかんけい\u003c/rt\u003e\u003c/ruby\u003eなくお\u003cruby\u003e返\u003crt\u003eかえ\u003c/rt\u003e\u003c/ruby\u003eしできません。\u003c/li\u003e\u003cli\u003e・\u003cruby\u003e連絡\u003crt\u003eれんらく\u003c/rt\u003e\u003c/ruby\u003eをしないで\u003cstrong\u003e２\u003cruby\u003e回\u003crt\u003eかい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e以上\u003crt\u003eいじょう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e欠席\u003crt\u003eけっせき\u003c/rt\u003e\u003c/ruby\u003eした\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e、それ\u003cruby\u003e以降\u003crt\u003eいこう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e出席\u003crt\u003eしゅっせき\u003c/rt\u003e\u003c/ruby\u003eをお\u003cruby\u003e断\u003crt\u003eことわ\u003c/rt\u003e\u003c/ruby\u003eりすることがあります。\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-footer text-right\"\u003e\u003cp\u003e\u003cstrong\u003e\u003cruby\u003e関東市\u003crt\u003eかんとうし\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e国際\u003crt\u003eこくさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交流\u003crt\u003eこうりゅう\u003c/rt\u003e\u003c/ruby\u003eセンター\u003c/strong\u003e\u003cbr\u003e\u003cruby\u003e電話\u003crt\u003eでんわ\u003c/rt\u003e\u003c/ruby\u003e：01-5678-98760（\u003cruby\u003e平日\u003crt\u003eへいじつ\u003c/rt\u003e\u003c/ruby\u003e：13:00〜21:30）\u003cbr\u003eE-メール：kokusai@nanto_city.com\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
        "fullTranslation":  "【THÔNG BÁO DÀNH CHO HỌC VIÊN THAM GIA LỚP HỌC TIẾNG NHẬT】\n\n■ THÔNG TIN CHUNG:\n● Thời gian: Từ 2/2/2015 (Thứ 2) đến 23/5/2015 (Thứ 7) — Mỗi tuần 1 buổi (Tổng cộng 15 buổi).\n● Học phí: 5,000 yên toàn khóa.\n● Trình độ:\n  - Sơ cấp (初級): Dành cho người lần đầu tiên học tiếng Nhật.\n  - Trung cấp (中級): Dành cho người đại khái có thể giao tiếp trong đời sống hàng ngày.\n\n■ BẢNG CÁC LỚP HỌC:\n- Tiếng Nhật 1 (Sơ cấp): Học cả 4 kỹ năng | Thứ 7 (15:00〜17:00)\n- Tiếng Nhật 2 (Trung cấp): Học cả 4 kỹ năng | Thứ 6 (15:00〜17:00)\n- Hội thoại 1 (Sơ cấp): Trọng tâm Nói \u0026 Nghe | Thứ 5 (19:00〜21:00)\n- Hội thoại 2 (Trung cấp): Trọng tâm Nói \u0026 Nghe | Thứ 5 (15:00〜17:00)\n- Hội thoại 3 (Trung cấp trở lên): Trọng tâm Nói \u0026 Nghe, đọc một chút | Thứ 7 (19:00〜21:00)\n- Cùng nói về tin tức (ニュースについて話そう - Trung cấp trở lên): TRỌNG TÂM NÓI \u0026 NGHE, viết một ít | Thứ 4 (19:00〜21:00)\n- Cùng đọc tiểu thuyết (小説を読もう - Trung cấp trở lên): Trọng tâm Đọc, nói/viết một ít | Thứ 6 (19:00〜21:00)\n\n■ PHƯƠNG THỨC ĐĂNG KÝ:\nGửi email ghi rõ họ tên, địa chỉ, số điện thoại, lớp mong muốn tới hòm thư trung tâm.\nSau khi tiếp nhận, BẮT BUỘC PHẢI THAM GIA PHỎNG VẤN ĐỂ XẾP TRÌNH ĐỘ theo lịch hẹn của trung tâm.\n\n■ CÁC ĐIỀU CẦN LƯU Ý:\n- Tùy kết quả phỏng vấn, có trường hợp không được xếp vào đúng lớp nguyện vọng.\n- Nếu số người đăng ký quá ít, lớp học có thể sẽ không được mở (bị hủy).\n- Học phí phải nộp muộn nhất trước ngày khai giảng. Tiền đã nộp sẽ không được hoàn trả vì bất kỳ lý do gì.\n- Nếu vắng mặt không phép từ 2 lần trở lên, trung tâm có thể từ chối cho tiếp tục tham gia khóa học.",
        "vocabulary":  [
                           {
                               "word":  "日常生活",
                               "hiragana":  "にちじょうせいかつ",
                               "meaning":  "Đời sống hàng ngày"
                           },
                           {
                               "word":  "インタビュー",
                               "hiragana":  "いんたびゅー",
                               "meaning":  "Phỏng vấn (xếp lớp)"
                           },
                           {
                               "word":  "以降",
                               "hiragana":  "いこう",
                               "meaning":  "Sau thời điểm... (18時以降: sau 18 giờ)"
                           },
                           {
                               "word":  "初級・中級",
                               "hiragana":  "しょきゅう・ちゅうきゅう",
                               "meaning":  "Sơ cấp / Trung cấp"
                           },
                           {
                               "word":  "開かれない",
                               "hiragana":  "ひらかれない",
                               "meaning":  "Không được tổ chức / Bị hủy lớp"
                           },
                           {
                               "word":  "欠席する",
                               "hiragana":  "けっせきする",
                               "meaning":  "Vắng mặt / Nghỉ học"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜中心に",
                                 "meaning":  "Lấy... làm trọng tâm / Tập trung chủ yếu vào..."
                             },
                             {
                                 "pattern":  "〜以降",
                                 "meaning":  "Kể từ sau mốc thời gian..."
                             },
                             {
                                 "pattern":  "〜お断りする",
                                 "meaning":  "Từ chối (không cho phép tham gia)"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：エンさんは日常生活の会話はだいたいできるが、もっと上手に話せるようになりたいので、話す練習が中心のクラスを受けたいと思っている。月曜日から金曜日の18時以降のクラスしか受けられないが、エンさんの希望に合うクラスはいくつあるか。",
                              "options":  [
                                              "1つ",
                                              "2つ",
                                              "3つ",
                                              "4つ"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "1つ",
                                                          "meaning":  "1 lớp.",
                                                          "analysis":  "ĐÚNG: Chỉ có duy nhất 1 lớp là 「ニュースについて話そう」 thỏa mãn tất cả tiêu chí: (1) Trình độ \u0027中級以上\u0027 (vì En đã giao tiếp hàng ngày đại khái tốt); (2) Trọng tâm luyện nói \u0027話す\u0027 là ký hiệu ＊ (中心に勉強します); (3) Lịch học là Thứ Tư (\u0027水\u0027) lúc 19:00〜21:00 (thuộc ngày thường Thứ 2〜Thứ 6 và sau 18:00). Các lớp khác đều bị loại: 会話1 (Sơ cấp), 会話2 (học lúc 15:00 chiều), 会話3 (học vào Thứ Bảy), 小説を読もう (trọng tâm là Đọc chứ không phải Nói)."
                                                      },
                                                      {
                                                          "option":  "2つ",
                                                          "meaning":  "2 lớp.",
                                                          "analysis":  "Sai: Đã nhầm thêm lớp 会話2 (học buổi chiều trước 18h) hoặc 会話3 (học thứ 7)."
                                                      },
                                                      {
                                                          "option":  "3つ",
                                                          "meaning":  "3 lớp.",
                                                          "analysis":  "Sai."
                                                      },
                                                      {
                                                          "option":  "4つ",
                                                          "meaning":  "4 lớp.",
                                                          "analysis":  "Sai."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「ニュースについて話そう：レベル 中級以上、内容 話す＊、日時 水 19:00〜21:00」",
                              "explanation":  "Đáp án 1 đúng (1つ - 1 lớp). \n- Trình độ của En: Đã giao tiếp hàng ngày được $\\rightarrow$ Chọn lớp 中級 hoặc 中級以上.\n- Nội dung: Trọng tâm là luyện nói $\\rightarrow$ Cột \u0027話す\u0027 phải có dấu ＊.\n- Thời gian: Ngày thường (Thứ 2 đến Thứ 6) sau 18:00 $\\rightarrow$ Khung giờ 19:00〜21:00.\n- Đối chiếu bảng: Lớp duy nhất thỏa mãn cả 3 điều kiện là lớp 『ニュースについて話そう』 (Thứ 4, 19:00〜21:00, 中級以上, Nói ＊)."
                          },
                          {
                              "id":  2,
                              "question":  "問2：日本語クラスに参加したいと思っている人が気をつけなければならないことは何か。",
                              "options":  [
                                              "クラスに参加するには、インタビューを受けなければならない。",
                                              "希望者が少ない場合、クラスの時間が変わる可能性がある。",
                                              "料金は、インタビューを受ける日に支払わなければならない。",
                                              "一度でも連絡しないで欠席すると、続けて参加できなくなる。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "クラスに参加するには、インタビューを受けなければならない。",
                                                          "meaning":  "Để tham gia lớp học, bắt buộc phải trải qua phỏng vấn.",
                                                          "analysis":  "ĐÚNG: Theo hướng dẫn mục đăng ký: \u0027受付後、レベルを決めるためのインタビューをします。センターからメールを送りますので。指定した日に受けてください\u0027 (Sau khi tiếp nhận đơn, bắt buộc phải tham gia phỏng vấn để xác định trình độ)."
                                                      },
                                                      {
                                                          "option":  "希望者が少ない場合、クラスの時間が変わる可能性がある。",
                                                          "meaning":  "Nếu ít người đăng ký thì có khả năng giờ học của lớp sẽ thay đổi.",
                                                          "analysis":  "Sai: Quy định nêu nếu ít người đăng ký thì lớp sẽ \u0027không được mở/bị hủy\u0027 (\u0027クラスが開かれない\u0027), chứ không phải đổi giờ học."
                                                      },
                                                      {
                                                          "option":  "料金は、インタビューを受ける日に支払わなければならない。",
                                                          "meaning":  "Tiền học phí phải nộp vào đúng ngày phỏng vấn.",
                                                          "analysis":  "Sai: Học phí được nộp muộn nhất trước ngày khai giảng (\u0027料金はクラス開始日までお支払い下さい\u0027)."
                                                      },
                                                      {
                                                          "option":  "一度でも連絡しないで欠席すると、続けて参加できなくなる。",
                                                          "meaning":  "Dù chỉ 1 lần nghỉ học không báo trước cũng sẽ không được tiếp tục tham gia.",
                                                          "analysis":  "Sai: Chỉ khi nghỉ không phép từ 2 lần trở lên (\u00272回以上欠席した場合\u0027) mới bị từ chối cho học tiếp."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「申し込み方法：受付後、レベルを決めるためのインタビューをします。」",
                              "explanation":  "Đáp án 1 đúng (クラスに参加するには、インタビューを受けなければならない。). Quy trình bắt buộc đối với tất cả học viên sau khi nộp đơn đăng ký là phải tham gia buổi phỏng vấn xác định trình độ theo lịch của trung tâm."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-thongtin-08",
        "level":  "N3",
        "category":  "thongtin",
        "categoryName":  "Tìm thông tin (情報検索)",
        "lessonNumber":  8,
        "title":  "自然教室に参加しませんか (Trải nghiệm lớp học tự nhiên Thành phố Aoyama)",
        "timeLimit":  300,
        "passage":  "\u003cdiv class=\"dokkai-notice-box\"\u003e\u003ch3 class=\"notice-title text-center\"\u003e\u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e教室\u003crt\u003eきょうしつ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e参加\u003crt\u003eさんか\u003c/rt\u003e\u003c/ruby\u003eしませんか\u003c/h3\u003e\u003cp class=\"notice-subtitle text-center\"\u003e\u003cruby\u003e青山\u003crt\u003eあおやま\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e市\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003eでは、\u003cruby\u003e夏休\u003crt\u003eなつやす\u003c/rt\u003e\u003c/ruby\u003eみ\u003cruby\u003e期間\u003crt\u003eきかん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e中\u003crt\u003eなか\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e遊\u003crt\u003eあそ\u003c/rt\u003e\u003c/ruby\u003eんだり\u003cruby\u003e勉強\u003crt\u003eべんきょう\u003c/rt\u003e\u003c/ruby\u003eしたりする\u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e教室\u003crt\u003eきょうしつ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e開\u003crt\u003eひら\u003c/rt\u003e\u003c/ruby\u003eきます。ぜひ\u003cruby\u003e親子\u003crt\u003eおやこ\u003c/rt\u003e\u003c/ruby\u003eでご\u003cruby\u003e参加\u003crt\u003eさんか\u003c/rt\u003e\u003c/ruby\u003eください。\u003c/p\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e【\u003cruby\u003e日帰\u003crt\u003eひがえ\u003c/rt\u003e\u003c/ruby\u003eりプログラム】\u003csmall\u003e（\u003cruby\u003e期間\u003crt\u003eきかん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e中\u003crt\u003eちゅう\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e毎日\u003crt\u003eまいにち\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e行\u003crt\u003eおこな\u003c/rt\u003e\u003c/ruby\u003eっています。\u003cstrong\u003e\u003cruby\u003e予約\u003crt\u003eよやく\u003c/rt\u003e\u003c/ruby\u003eはいりません。\u003c/strong\u003e）\u003c/small\u003e\u003c/h4\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003cthead\u003e\u003ctr\u003e\u003cth style=\"width:50%;\"\u003e① \u003cruby\u003e森\u003crt\u003eもり\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e歩\u003crt\u003eある\u003c/rt\u003e\u003c/ruby\u003eこう\u003c/th\u003e\u003cth style=\"width:50%;\"\u003e② \u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e観察\u003crt\u003eかんさつ\u003c/rt\u003e\u003c/ruby\u003eしよう\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd class=\"text-left\"\u003e\u003cruby\u003e地図\u003crt\u003eちず\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eながら、\u003cruby\u003e森林\u003crt\u003eしんりん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e散歩\u003crt\u003eさんぽ\u003c/rt\u003e\u003c/ruby\u003eコースを\u003cruby\u003e散歩\u003crt\u003eさんぽ\u003c/rt\u003e\u003c/ruby\u003eします。\u003cbr\u003e・\u003cruby\u003e期間\u003crt\u003eきかん\u003c/rt\u003e\u003c/ruby\u003e：8\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e1\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e〜15\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e・\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e：\u003cruby\u003e大人\u003crt\u003eおとな\u003c/rt\u003e\u003c/ruby\u003e800\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e　\u003cruby\u003e子\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eども600\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e・\u003cruby\u003e集合\u003crt\u003eしゅうごう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e：\u003cruby\u003e初級\u003crt\u003eしょきゅう\u003c/rt\u003e\u003c/ruby\u003eコース \u003cruby\u003e午前\u003crt\u003eごぜん\u003c/rt\u003e\u003c/ruby\u003e9\u003cruby\u003e時\u003crt\u003eじ\u003c/rt\u003e\u003c/ruby\u003e／\u003cruby\u003e上級\u003crt\u003eじょうきゅう\u003c/rt\u003e\u003c/ruby\u003eコース \u003cruby\u003e午後\u003crt\u003eごご\u003c/rt\u003e\u003c/ruby\u003e1\u003cruby\u003e時\u003crt\u003eじ\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e観察\u003crt\u003eかんさつ\u003c/rt\u003e\u003c/ruby\u003eノートを\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eながら、\u003cruby\u003e鳥\u003crt\u003eとり\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e動物\u003crt\u003eどうぶつ\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e花\u003crt\u003eはな\u003c/rt\u003e\u003c/ruby\u003eなどを\u003cruby\u003e観察\u003crt\u003eかんさつ\u003c/rt\u003e\u003c/ruby\u003eします。\u003cbr\u003e・\u003cruby\u003e期間\u003crt\u003eきかん\u003c/rt\u003e\u003c/ruby\u003e：8\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e16\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e〜31\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e・\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e：\u003cruby\u003e大人\u003crt\u003eおとな\u003c/rt\u003e\u003c/ruby\u003e600\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e　\u003cruby\u003e子\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eども300\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e・\u003cruby\u003e集合\u003crt\u003eしゅうごう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e：\u003cruby\u003e午前\u003crt\u003eごぜん\u003c/rt\u003e\u003c/ruby\u003e10\u003cruby\u003e時\u003crt\u003eじ\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003cp class=\"notice-note\"\u003e● お\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみ\u003cruby\u003e方法\u003crt\u003eほうほう\u003c/rt\u003e\u003c/ruby\u003e：\u003cstrong\u003e\u003cruby\u003e当日\u003crt\u003eとうじつ\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e受付\u003crt\u003eうけつけ\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e直接\u003crt\u003eちょくせつ\u003c/rt\u003e\u003c/ruby\u003eお\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみください。\u003c/strong\u003e\u003c/p\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e【1\u003cruby\u003e泊\u003crt\u003eぱく\u003c/rt\u003e\u003c/ruby\u003e2\u003cruby\u003e日\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eプログラム】\u003csmall\u003e（\u003cstrong\u003e1\u003cruby\u003e週間\u003crt\u003eしゅうかん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eまでに\u003cruby\u003e予約\u003crt\u003eよやく\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e必要\u003crt\u003eひつよう\u003c/rt\u003e\u003c/ruby\u003eです。\u003c/strong\u003e）\u003c/small\u003e\u003c/h4\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003cthead\u003e\u003ctr\u003e\u003cth style=\"width:50%;\"\u003e③ \u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e遊\u003crt\u003eあそ\u003c/rt\u003e\u003c/ruby\u003eぼう\u003c/th\u003e\u003cth style=\"width:50%;\"\u003e④ \u003cruby\u003e星空\u003crt\u003eほしぞら\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e観察\u003crt\u003eかんさつ\u003c/rt\u003e\u003c/ruby\u003eしよう\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd class=\"text-left\"\u003e\u003cruby\u003e湖\u003crt\u003eみずうみ\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e小船\u003crt\u003eこぶね\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e乗\u003crt\u003eの\u003c/rt\u003e\u003c/ruby\u003eったり、\u003cruby\u003e魚\u003crt\u003eさかな\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e捕\u003crt\u003eと\u003c/rt\u003e\u003c/ruby\u003eったり、\u003cruby\u003e森\u003crt\u003eもり\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e木\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e登\u003crt\u003eのぼ\u003c/rt\u003e\u003c/ruby\u003eったりします。\u003cbr\u003e・\u003cruby\u003e日時\u003crt\u003eにちじ\u003c/rt\u003e\u003c/ruby\u003e：\u003cstrong\u003e8\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e15\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e〜16\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003cbr\u003e・\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e：\u003cstrong\u003e\u003cruby\u003e大人\u003crt\u003eおとな\u003c/rt\u003e\u003c/ruby\u003e10,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e　\u003cruby\u003e子\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eども7,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cruby\u003e昼\u003crt\u003eひる\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e星\u003crt\u003eほし\u003c/rt\u003e\u003c/ruby\u003eについての\u003cruby\u003e話\u003crt\u003eはなし\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e聞\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eき、\u003cruby\u003e夜\u003crt\u003eよる\u003c/rt\u003e\u003c/ruby\u003eは\u003cruby\u003e星\u003crt\u003eほし\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e観察\u003crt\u003eかんさつ\u003c/rt\u003e\u003c/ruby\u003eします。\u003cbr\u003e・\u003cruby\u003e日時\u003crt\u003eにちじ\u003c/rt\u003e\u003c/ruby\u003e：8\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e17\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e〜18\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003cbr\u003e・\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003e：\u003cstrong\u003e\u003cruby\u003e大人\u003crt\u003eおとな\u003c/rt\u003e\u003c/ruby\u003e12,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e　\u003cruby\u003e子\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eども9,000\u003cruby\u003e円\u003crt\u003eえん\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003cp class=\"notice-note\"\u003e● お\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみ\u003cruby\u003e方法\u003crt\u003eほうほう\u003c/rt\u003e\u003c/ruby\u003e：\u003cruby\u003e電話\u003crt\u003eでんわ\u003c/rt\u003e\u003c/ruby\u003eでご\u003cruby\u003e予約\u003crt\u003eよやく\u003c/rt\u003e\u003c/ruby\u003eください。\u003cruby\u003e料金\u003crt\u003eりょうきん\u003c/rt\u003e\u003c/ruby\u003eのお\u003cruby\u003e振\u003crt\u003eふ\u003c/rt\u003e\u003c/ruby\u003eり\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみ\u003cruby\u003e確認\u003crt\u003eかくにん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e後\u003crt\u003eご\u003c/rt\u003e\u003c/ruby\u003e、\u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003eから\u003cruby\u003e詳\u003crt\u003eくわ\u003c/rt\u003e\u003c/ruby\u003eしい\u003cruby\u003e案内\u003crt\u003eあんない\u003c/rt\u003e\u003c/ruby\u003eをお\u003cruby\u003e送\u003crt\u003eおく\u003c/rt\u003e\u003c/ruby\u003eりします。\u003c/p\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e● お\u003cruby\u003e支払\u003crt\u003eしはら\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e方法\u003crt\u003eほうほう\u003c/rt\u003e\u003c/ruby\u003e\u003c/h4\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e・\u003cstrong\u003e\u003cruby\u003e日帰\u003crt\u003eひがえ\u003c/rt\u003e\u003c/ruby\u003eりプログラムは、\u003cruby\u003e当日\u003crt\u003eとうじつ\u003c/rt\u003e\u003c/ruby\u003e、お\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみと\u003cruby\u003e一緒\u003crt\u003eいっしょ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e現金\u003crt\u003eげんきん\u003c/rt\u003e\u003c/ruby\u003eでお\u003cruby\u003e支払\u003crt\u003eしはら\u003c/rt\u003e\u003c/ruby\u003eいください。\u003c/strong\u003e\u003c/li\u003e\u003cli\u003e・\u003cstrong\u003e1\u003cruby\u003e泊\u003crt\u003eぱく\u003c/rt\u003e\u003c/ruby\u003e2\u003cruby\u003e日\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eプログラムは、お\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみの\u003cruby\u003e後\u003crt\u003eのち\u003c/rt\u003e\u003c/ruby\u003e3\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e以内\u003crt\u003eいない\u003c/rt\u003e\u003c/ruby\u003eに、\u003cruby\u003e以下\u003crt\u003eいか\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e銀行\u003crt\u003eぎんこう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e口座\u003crt\u003eこうざ\u003c/rt\u003e\u003c/ruby\u003eにお\u003cruby\u003e振込\u003crt\u003eふりこ\u003c/rt\u003e\u003c/ruby\u003eみください。\u003c/strong\u003e\u003cbr\u003e\u003csmall\u003e\u003cruby\u003e大山\u003crt\u003eおおやま\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e銀行\u003crt\u003eぎんこう\u003c/rt\u003e\u003c/ruby\u003e \u003cruby\u003e青山\u003crt\u003eあおやま\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e支店\u003crt\u003eしてん\u003c/rt\u003e\u003c/ruby\u003e \u003cruby\u003e普通\u003crt\u003eふつう\u003c/rt\u003e\u003c/ruby\u003e 1548697 \u003cruby\u003e青山\u003crt\u003eあおやま\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e市\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003e\u003c/small\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-footer text-right\"\u003e\u003cp\u003e\u003cstrong\u003e\u003cruby\u003e予約\u003crt\u003eよやく\u003c/rt\u003e\u003c/ruby\u003e・\u003cruby\u003e連絡\u003crt\u003eれんらく\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e先\u003crt\u003eさき\u003c/rt\u003e\u003c/ruby\u003e：\u003cruby\u003e青山\u003crt\u003eあおやま\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e市\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e自然\u003crt\u003eしぜん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e家\u003crt\u003eいえ\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e（\u003cruby\u003e電話\u003crt\u003eでんわ\u003c/rt\u003e\u003c/ruby\u003e：05-1123-4555）\u003cbr\u003e\u003cruby\u003e青山\u003crt\u003eあおやま\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e市\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e青\u003crt\u003eあお\u003c/rt\u003e\u003c/ruby\u003eい\u003cruby\u003e町\u003crt\u003eまち\u003c/rt\u003e\u003c/ruby\u003e2-1\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
        "fullTranslation":  "【THÔNG BÁO THAM GIA LỚP HỌC TRẢI NGHIỆM TỰ NHIÊN】\nNhà Tự nhiên Thành phố Aoyama tổ chức các lớp học tự nhiên vui chơi và học tập giữa thiên nhiên trong kỳ nghỉ hè. Rất mong các bậc phụ huynh và con em cùng tham gia!\n\n■ CHƯƠNG TRÌNH ĐI VỀ TRONG NGÀY (日帰りプログラム):\n(Diễn ra hàng ngày trong suốt thời gian tổ chức. KHÔNG CẦN ĐẶT TRƯỚC).\n① Cùng đi dạo trong rừng (森を歩こう):\n- Nội dung: Vừa xem bản đồ vừa đi dạo theo tuyến đường rừng.\n- Thời gian: Từ 1/8 đến 15/8.\n- Mức phí: Người lớn 800 yên / Trẻ em 600 yên.\n- Giờ tập trung: Khóa sơ cấp: 9:00 sáng / Khóa nâng cao: 1:00 chiều.\n② Cùng quan sát tự nhiên (自然を観察しよう):\n- Nội dung: Dùng sổ quan sát thiên nhiên ngắm chim muông, muông thú, hoa cỏ...\n- Thời gian: Từ 16/8 đến 31/8.\n- Mức phí: Người lớn 600 yên / Trẻ em 300 yên.\n- Giờ tập trung: 10:00 sáng.\n* Cách đăng ký: Đăng ký trực tiếp tại quầy lễ tân của Nhà Tự nhiên vào đúng ngày tham gia.\n\n■ CHƯƠNG TRÌNH 2 NGÀY 1 ĐÊM (1泊2日プログラム):\n(BẮT BUỘC PHẢI ĐẶT TRƯỚC MUỘN NHẤT 1 TUẦN).\n③ Cùng vui chơi với tự nhiên (自然と遊ぼう):\n- Nội dung: Chèo thuyền nhỏ trên hồ, bắt cá, trèo cây trong rừng...\n- Thời gian: Ngày 15/8 đến 16/8.\n- Mức phí: Người lớn 10,000 yên / Trẻ em 7,000 yên.\n④ Cùng quan sát bầu trời sao (星空を観察しよう):\n- Nội dung: Ban ngày nghe thuyết trình về các chòm sao, ban đêm ngắm sao.\n- Thời gian: Ngày 17/8 đến 18/8.\n- Mức phí: Người lớn 12,000 yên / Trẻ em 9,000 yên.\n* Cách đăng ký: Gọi điện thoại đặt trước. Sau khi trung tâm xác nhận tiền chuyển khoản sẽ gửi hướng dẫn chi tiết.\n\n■ PHƯƠNG THỨC THANH TOÁN:\n● Chương trình đi về trong ngày: Nộp tiền mặt trực tiếp cùng lúc đăng ký vào đúng ngày tham gia.\n● Chương trình 2 ngày 1 đêm: Chuyển khoản vào tài khoản ngân hàng trong vòng 3 ngày sau khi đăng ký.",
        "vocabulary":  [
                           {
                               "word":  "自然教室",
                               "hiragana":  "しぜんきょうしつ",
                               "meaning":  "Lớp học trải nghiệm thiên nhiên dã ngoại"
                           },
                           {
                               "word":  "日帰り",
                               "hiragana":  "ひがえり",
                               "meaning":  "Đi về trong ngày (không qua đêm)"
                           },
                           {
                               "word":  "1泊2日",
                               "hiragana":  "いっぱくふつか",
                               "meaning":  "2 ngày 1 đêm (có nghỉ trọ qua đêm)"
                           },
                           {
                               "word":  "散歩コース",
                               "hiragana":  "さんぽこーす",
                               "meaning":  "Tuyến đường đi dạo bộ"
                           },
                           {
                               "word":  "銀行振り込み",
                               "hiragana":  "ぎんこうふりこみ",
                               "meaning":  "Chuyển khoản qua ngân hàng"
                           },
                           {
                               "word":  "星空",
                               "hiragana":  "ほしぞら",
                               "meaning":  "Bầu trời đầy sao"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜の間",
                                 "meaning":  "Trong khoảng thời gian từ... đến..."
                             },
                             {
                                 "pattern":  "〜泊まれる",
                                 "meaning":  "Có thể nghỉ trọ / qua đêm được"
                             },
                             {
                                 "pattern":  "〜以下",
                                 "meaning":  "Từ mức... trở xuống (10,000円以下: từ 10,000 yên trở xuống, bao gồm cả 10,000 yên)"
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：ヤンさん夫婦は息子を連れて自然教室に参加しようと思っている。家族で相談した内容をメモにしたが、ヤンさん家族の希望に合っている自然教室はどれか。\nヤンさんのメモ:\n・8月14日から18日の間\n・自然の中で過ごす時間を作りたい\n・泊まれるプログラムがいい\n・大人一人の料金を10,000円以下にしたい",
                              "options":  [
                                              "①",
                                              "②",
                                              "③",
                                              "④"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "①",
                                                          "meaning":  "Chương trình ①: 森を歩こう",
                                                          "analysis":  "Sai: Đây là chương trình đi về trong ngày (日帰りプログラム), không có lưu trú qua đêm."
                                                      },
                                                      {
                                                          "option":  "②",
                                                          "meaning":  "Chương trình ②: 自然を観察しよう",
                                                          "analysis":  "Sai: Đây là chương trình đi về trong ngày (日帰りプログラム), không có lưu trú qua đêm."
                                                      },
                                                      {
                                                          "option":  "③",
                                                          "meaning":  "Chương trình ③: 自然と遊ぼう",
                                                          "analysis":  "ĐÚNG: Khớp toàn bộ 3 điều kiện trong memo: (1) Thời gian 8月15日〜16日 nằm trong khoảng 14/8 đến 18/8; (2) Là chương trình 1泊2日 (có lưu trú qua đêm \u0027泊まれる\u0027); (3) Giá người lớn là 10,000円 (\u0027大人10,000円\u0027 $\\le 10,000$ yên)."
                                                      },
                                                      {
                                                          "option":  "④",
                                                          "meaning":  "Chương trình ④: 星空を観察しよう",
                                                          "analysis":  "Sai: Giá người lớn là 12,000 yên (\u0027大人12,000円\u0027), vượt quá mức yêu cầu 10,000 yên trở xuống."
                                                      }
                                                  ],
                              "answer":  2,
                              "evidence":  "「③ 自然と遊ぼう：1泊2日プログラム、日時：8月15日〜16日、料金：大人10,000円 子ども7,000円」",
                              "explanation":  "Đáp án ③ đúng (Phương án 3). \n- Nhu cầu của gia đình Yang:\n+ Thời gian: Từ 14/8 đến 18/8\n+ Hình thức: Chương trình có qua đêm (1泊2日プログラム)\n+ Chi phí người lớn: $\\le 10,000$ yên/người.\n- Đối chiếu 4 chương trình:\n+ ① \u0026 ②: Đi về trong ngày (Loại).\n+ ③ (自然と遊ぼう): 1泊2日, ngày 15-16/8, giá người lớn 10,000 yên $\\rightarrow$ Thỏa mãn 100%.\n+ ④ (星空を観察しよう): Giá người lớn 12,000 yên, vượt quá 10,000 yên (Loại)."
                          },
                          {
                              "id":  2,
                              "question":  "問2：「森を歩こう」のプログラムに参加したい人は、どうしなければならないか。",
                              "options":  [
                                              "自然教室の1週間前までに電話で予約をして、料金は銀行振り込みで支払う。",
                                              "自然教室の当日に申し込みをして、3日以内に料金を銀行振り込みで支払う。",
                                              "自然教室の前日までに電話で予約をして、料金は当日現金で支払う。",
                                              "自然教室の当日に申し込みをして、同時に料金を現金で支払う。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "自然教室の1週間前までに電話で予約をして、料金は銀行振り込みで支払う。",
                                                          "meaning":  "Đặt trước qua điện thoại 1 tuần trước và thanh toán bằng chuyển khoản.",
                                                          "analysis":  "Sai: Đây là quy trình của chương trình qua đêm (1泊2日プログラム)."
                                                      },
                                                      {
                                                          "option":  "自然教室の当日に申し込みをして、3日以内に料金を銀行振り込みで支払う。",
                                                          "meaning":  "Đăng ký vào đúng ngày và chuyển khoản ngân hàng trong 3 ngày.",
                                                          "analysis":  "Sai: Chuyển khoản ngân hàng trong 3 ngày chỉ dành cho chương trình 1泊2日."
                                                      },
                                                      {
                                                          "option":  "自然教室の前日までに電話で予約をして、料金は当日現金で支払う。",
                                                          "meaning":  "Đặt trước bằng điện thoại trước ngày diễn ra 1 ngày và trả tiền mặt vào đúng ngày.",
                                                          "analysis":  "Sai: Chương trình này không cần đặt trước (\u0027予約はいりません\u0027)."
                                                      },
                                                      {
                                                          "option":  "自然教室の当日に申し込みをして、同時に料金を現金で支払う。",
                                                          "meaning":  "Đăng ký vào đúng ngày tham gia và thanh toán tiền mặt cùng lúc đó.",
                                                          "analysis":  "ĐÚNG: \u0027森を歩こう\u0027 là chương trình đi về trong ngày (日帰り). Theo quy định: \u0027当日、自然の家の受付で直接お申込みください\u0027 VÀ \u0027日帰りプログラムは、当日、お申し込みと一緒に現金でお支払いください\u0027 (Đăng ký trực tiếp tại quầy vào đúng ngày và trả tiền mặt cùng lúc khi đăng ký)."
                                                      }
                                                  ],
                              "answer":  3,
                              "evidence":  "「日帰りプログラム：当日、自然の家の受付で直接お申込みください。支払い方法：日帰りプログラムは、当日、お申し込みと一緒に現金でお支払いください。」",
                              "explanation":  "Đáp án 4 đúng (自然教室の当日に申し込みをして、同時に料金を現金で支払う。). Chương trình \u0027森を歩こう\u0027 thuộc loại chương trình đi về trong ngày (日帰りプログラム), người tham gia không cần đặt trước mà đến đăng ký trực tiếp tại quầy lễ tân vào đúng ngày tham gia và thanh toán bằng tiền mặt ngay lúc đăng ký."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-thongtin-09",
        "level":  "N3",
        "category":  "thongtin",
        "categoryName":  "Tìm thông tin (情報検索)",
        "lessonNumber":  9,
        "title":  "留学生の皆さん、国際交流授業に参加しませんか (Mời lưu học sinh tham gia tiết học giao lưu quốc tế)",
        "timeLimit":  300,
        "passage":  "\u003cdiv class=\"dokkai-notice-box\"\u003e\u003ch3 class=\"notice-title text-center\"\u003e\u003cruby\u003e留学生\u003crt\u003eりゅうがくせい\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e皆\u003crt\u003eみな\u003c/rt\u003e\u003c/ruby\u003eさん、\u003cruby\u003e国際\u003crt\u003eこくさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交流\u003crt\u003eこうりゅう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e参加\u003crt\u003eさんか\u003c/rt\u003e\u003c/ruby\u003eしませんか\u003c/h3\u003e\u003cp class=\"notice-subtitle\"\u003e\u003cruby\u003e以下\u003crt\u003eいか\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e学校\u003crt\u003eがっこう\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e国際\u003crt\u003eこくさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交流\u003crt\u003eこうりゅう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e参加\u003crt\u003eさんか\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e留学生\u003crt\u003eりゅうがくせい\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e募集\u003crt\u003eぼしゅう\u003c/rt\u003e\u003c/ruby\u003eしています。\u003cbr\u003e\u003cruby\u003e国際\u003crt\u003eこくさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交流\u003crt\u003eこうりゅう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003eでは、\u003cruby\u003e留学生\u003crt\u003eりゅうがくせい\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e小\u003crt\u003eしょう\u003c/rt\u003e\u003c/ruby\u003e・\u003cruby\u003e中学校\u003crt\u003eちゅうがっこう\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e高校\u003crt\u003eこうこう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e行\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eって、\u003cruby\u003e自分\u003crt\u003eじぶん\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e国\u003crt\u003eくに\u003c/rt\u003e\u003c/ruby\u003eやふるさとの\u003cruby\u003e文化\u003crt\u003eぶんか\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e紹介\u003crt\u003eしょうかい\u003c/rt\u003e\u003c/ruby\u003eしたり、\u003cruby\u003e生徒\u003crt\u003eせいと\u003c/rt\u003e\u003c/ruby\u003eたちとゲームをしたりします。ぜひご\u003cruby\u003e参加\u003crt\u003eさんか\u003c/rt\u003e\u003c/ruby\u003eください。\u003c/p\u003e\u003cdiv class=\"notice-section\"\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003cthead\u003e\u003ctr\u003e\u003cth style=\"width:6%;\"\u003e番号\u003c/th\u003e\u003cth\u003e\u003cruby\u003e日時\u003crt\u003eにちじ\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e学校\u003crt\u003eがっこう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e名\u003crt\u003eめい\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e使用\u003crt\u003eしよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e言語\u003crt\u003eげんご\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみ\u003cruby\u003e締\u003crt\u003eし\u003c/rt\u003e\u003c/ruby\u003eめ\u003cruby\u003e切\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eり\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr style=\"background:rgba(0, 243, 255, 0.1);\"\u003e\u003ctd\u003e\u003cstrong\u003e①\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cstrong\u003e10\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e21\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e金\u003crt\u003eきん\u003c/rt\u003e\u003c/ruby\u003e）\u003cbr\u003e13:25〜15:15\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e\u003cstrong\u003e\u003cruby\u003e南台\u003crt\u003eみなみだい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e中学校\u003crt\u003eちゅうがっこう\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e\u003cstrong\u003e\u003cruby\u003e日本語\u003crt\u003eにほんご\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e8\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e22\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e月\u003crt\u003eげつ\u003c/rt\u003e\u003c/ruby\u003e）\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e②\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e11\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e22\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e火\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003e）\u003cbr\u003e10:40〜12:00\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e七川\u003crt\u003eななかわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e小学校\u003crt\u003eしょうがっこう\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e日本語\u003crt\u003eにほんご\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e9\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e21\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e水\u003crt\u003eすい\u003c/rt\u003e\u003c/ruby\u003e）\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e③\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e12\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e16\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e金\u003crt\u003eきん\u003c/rt\u003e\u003c/ruby\u003e）\u003cbr\u003e\u003cstrong\u003e10:40〜12:00\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e西村山\u003crt\u003eにしむらやま\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e高校\u003crt\u003eこうこう\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e日本語\u003crt\u003eにほんご\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e10\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e17\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e月\u003crt\u003eげつ\u003c/rt\u003e\u003c/ruby\u003e）\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e④\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e12\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e20\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e火\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003e）\u003cbr\u003e10:40〜12:00\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e七川南\u003crt\u003eななかわみなみ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e高校\u003crt\u003eこうこう\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e\u003cruby\u003e英語\u003crt\u003eえいご\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd\u003e10\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e20\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e（\u003cruby\u003e木\u003crt\u003eもく\u003c/rt\u003e\u003c/ruby\u003e）\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003cp class=\"notice-note\"\u003e※ \u003cruby\u003e日常\u003crt\u003eにちじょう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e会話\u003crt\u003eかいわ\u003c/rt\u003e\u003c/ruby\u003eぐらいの\u003cruby\u003e日本語\u003crt\u003eにほんご\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e大丈夫\u003crt\u003eだいじょうぶ\u003c/rt\u003e\u003c/ruby\u003eです。\u003c/p\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e● \u003cruby\u003e募集\u003crt\u003eぼしゅう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e要項\u003crt\u003eようこう\u003c/rt\u003e\u003c/ruby\u003e＆\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみ\u003c/h4\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e・\u003cstrong\u003e\u003cruby\u003e募集\u003crt\u003eぼしゅう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e人数\u003crt\u003eにんずう\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e：\u003cruby\u003e各\u003crt\u003eかく\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e学校\u003crt\u003eがっこう\u003c/rt\u003e\u003c/ruby\u003e 4〜6\u003cruby\u003e人\u003crt\u003eにん\u003c/rt\u003e\u003c/ruby\u003e\u003c/li\u003e\u003cli\u003e・\u003cstrong\u003eお\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみ\u003c/strong\u003e：\u003cruby\u003e以下\u003crt\u003eいか\u003c/rt\u003e\u003c/ruby\u003eのことを\u003cruby\u003e書\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eいて、メールでお\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみください。\u003cbr\u003e\u003csmall\u003ea \u003cruby\u003e名前\u003crt\u003eなまえ\u003c/rt\u003e\u003c/ruby\u003e　b \u003cruby\u003e学生\u003crt\u003eがくせい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e番号\u003crt\u003eばんごう\u003c/rt\u003e\u003c/ruby\u003e　c \u003cruby\u003e学部\u003crt\u003eがくぶ\u003c/rt\u003e\u003c/ruby\u003e　d \u003cruby\u003e出身\u003crt\u003eしゅっしん\u003c/rt\u003e\u003c/ruby\u003e　e \u003cruby\u003e電話\u003crt\u003eでんわ\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e番号\u003crt\u003eばんごう\u003c/rt\u003e\u003c/ruby\u003e　f メールアドレス\u003c/small\u003e\u003c/li\u003e\u003cli\u003e・\u003cruby\u003e小学校\u003crt\u003eしょうがっこう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e行\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eく\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e学校\u003crt\u003eがっこう\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e用意\u003crt\u003eようい\u003c/rt\u003e\u003c/ruby\u003eされる\u003cruby\u003e昼\u003crt\u003eひる\u003c/rt\u003e\u003c/ruby\u003eご\u003cruby\u003e飯\u003crt\u003eはん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e生徒\u003crt\u003eせいと\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e一緒\u003crt\u003eいっしょ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e食\u003crt\u003eた\u003c/rt\u003e\u003c/ruby\u003eべることもできます。\u003cruby\u003e希望\u003crt\u003eきぼう\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eは、お\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみのメールにそのことを\u003cruby\u003e書\u003crt\u003eか\u003c/rt\u003e\u003c/ruby\u003eいてください。\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e● 【ご\u003cruby\u003e注意\u003crt\u003eちゅうい\u003c/rt\u003e\u003c/ruby\u003e】\u003c/h4\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e・\u003cstrong\u003e\u003cruby\u003e大学\u003crt\u003eだいがく\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e休\u003crt\u003eやす\u003c/rt\u003e\u003c/ruby\u003eんで\u003cruby\u003e参加\u003crt\u003eさんか\u003c/rt\u003e\u003c/ruby\u003eすることになる\u003cruby\u003e国際\u003crt\u003eこくさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交流\u003crt\u003eこうりゅう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003eにお\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみすることはできません。\u003c/strong\u003e\u003c/li\u003e\u003cli\u003e・これまで\u003cruby\u003e国際\u003crt\u003eこくさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交流\u003crt\u003eこうりゅう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e参加\u003crt\u003eさんか\u003c/rt\u003e\u003c/ruby\u003eしたことがある\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eもお\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみできますが、お\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみが\u003cruby\u003e多\u003crt\u003eおお\u003c/rt\u003e\u003c/ruby\u003eかった\u003cruby\u003e場合\u003crt\u003eばあい\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e初\u003crt\u003eはじ\u003c/rt\u003e\u003c/ruby\u003eめての\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e行\u003crt\u003eい\u003c/rt\u003e\u003c/ruby\u003eってもらいます。\u003c/li\u003e\u003cli\u003e・\u003cruby\u003e質問\u003crt\u003eしつもん\u003c/rt\u003e\u003c/ruby\u003eがある\u003cruby\u003e人\u003crt\u003eひと\u003c/rt\u003e\u003c/ruby\u003eは、\u003cstrong\u003e\u003cruby\u003e国際\u003crt\u003eこくさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交流\u003crt\u003eこうりゅう\u003c/rt\u003e\u003c/ruby\u003eセンターにご\u003cruby\u003e連絡\u003crt\u003eれんらく\u003c/rt\u003e\u003c/ruby\u003eください\u003c/strong\u003e。\u003cruby\u003e必要\u003crt\u003eひつよう\u003c/rt\u003e\u003c/ruby\u003eがあれば\u003cruby\u003e国際\u003crt\u003eこくさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交流\u003crt\u003eこうりゅう\u003c/rt\u003e\u003c/ruby\u003eセンターから\u003cruby\u003e各\u003crt\u003eかく\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e学校\u003crt\u003eがっこう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e質問\u003crt\u003eしつもん\u003c/rt\u003e\u003c/ruby\u003eします。\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-footer text-right\"\u003e\u003cp\u003e\u003cstrong\u003eお\u003cruby\u003e申\u003crt\u003eもう\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e込\u003crt\u003eこ\u003c/rt\u003e\u003c/ruby\u003eみ・ご\u003cruby\u003e質問\u003crt\u003eしつもん\u003c/rt\u003e\u003c/ruby\u003e：\u003c/strong\u003e\u003cbr\u003e\u003cruby\u003e葉月\u003crt\u003eはづき\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e大学\u003crt\u003eだいがく\u003c/rt\u003e\u003c/ruby\u003e \u003cruby\u003e国際\u003crt\u003eこくさい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e交流\u003crt\u003eこうりゅう\u003c/rt\u003e\u003c/ruby\u003eセンター（\u003cruby\u003e山村\u003crt\u003eやまむら\u003c/rt\u003e\u003c/ruby\u003e）\u003cbr\u003ekouryuu@hazuki-u.ac.jp\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
        "fullTranslation":  "【KÍNH GỬI CÁC BẠN LƯU HỌC SINH: THAM GIA TIẾT HỌC GIAO LƯU QUỐC TẾ】\nCác trường học dưới đây đang tuyển lưu học sinh tham gia tiết học giao lưu quốc tế.\nTại tiết học này, các bạn lưu học sinh sẽ đến các trường Tiểu học, THCS hoặc THPT để giới thiệu văn hóa quê hương đất nước hoặc chơi trò chơi cùng học sinh. Rất mong các bạn nhiệt tình tham gia!\n\n■ DANH SÁCH CÁC TRƯỜNG TUYỂN TÌNH NGUYỆN VIÊN:\n① Trường THCS Minamidai (南台中学校):\n- Ngày giờ: 21/10 (Thứ 6) 13:25〜15:15 (Buổi chiều)\n- Ngôn ngữ: Tiếng Nhật (日本語) | Hạn đăng ký: 22/8 (Thứ 2)\n\n② Trường Tiểu học Nanakawa (七川小学校):\n- Ngày giờ: 22/11 (Thứ 3) 10:40〜12:00 (Buổi sáng)\n- Ngôn ngữ: Tiếng Nhật (日本語) | Hạn đăng ký: 21/9 (Thứ 4)\n\n③ Trường THPT Nishimurayama (西村山高校):\n- Ngày giờ: 16/12 (Thứ 6) 10:40〜12:00 (Buổi sáng)\n- Ngôn ngữ: Tiếng Nhật (日本語) | Hạn đăng ký: 17/10 (Thứ 2)\n\n④ Trường THPT Nanakawa Minami (七川南高校):\n- Ngày giờ: 20/12 (Thứ 3) 10:40〜12:00 (Buổi sáng)\n- Ngôn ngữ: Tiếng Anh (英語) | Hạn đăng ký: 20/10 (Thứ 5)\n※ Trình độ tiếng Nhật giao tiếp hàng ngày là có thể tham gia.\n\n■ QUY ĐỊNH \u0026 ĐĂNG KÝ:\n● Số lượng tuyển: Mỗi trường từ 4 đến 6 người.\n● Cách đăng ký: Gửi email gồm (a Họ tên, b Mã sinh viên, c Khoa, d Quê quán, e Số điện thoại, f Email).\n● Với người đến trường tiểu học, có thể cùng ăn bữa trưa do trường chuẩn bị với các em học sinh. Ai có nguyện vọng vui lòng ghi rõ vào email đăng ký.\n\n■ LƯU Ý BẮT BUỘC:\n- KHÔNG ĐƯỢC PHÉP ĐĂNG KÝ nếu việc tham gia làm bạn phải nghỉ các tiết học tại trường đại học.\n- Người từng tham gia trước đây vẫn được đăng ký, tuy nhiên nếu quá đông sẽ ưu tiên người tham gia lần đầu.\n- Mọi thắc mắc vui lòng liên hệ Trung tâm Giao lưu Quốc tế. Không tự ý liên hệ trực tiếp cho các trường.\n\nTrung tâm Giao lưu Quốc tế Đại học Hazuki (Phụ trách: Yamamura)\nEmail: kouryuu@hazuki-u.ac.jp",
        "vocabulary":  [
                           {
                               "word":  "国際交流授業",
                               "hiragana":  "こくさいこうりゅうじゅぎょう",
                               "meaning":  "Tiết học giao lưu văn hóa quốc tế"
                           },
                           {
                               "word":  "使用言語",
                               "hiragana":  "しようげんご",
                               "meaning":  "Ngôn ngữ sử dụng"
                           },
                           {
                               "word":  "締め切り",
                               "hiragana":  "しめきり",
                               "meaning":  "Hạn chót"
                           },
                           {
                               "word":  "都合がいい",
                               "hiragana":  "つごうがいい",
                               "meaning":  "Thuận tiện / Rảnh rỗi"
                           },
                           {
                               "word":  "休む",
                               "hiragana":  "やすむ",
                               "meaning":  "Nghỉ học / Vắng mặt"
                           },
                           {
                               "word":  "生徒",
                               "hiragana":  "せいと",
                               "meaning":  "Học sinh (cấp 2, cấp 3)"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜によって",
                                 "meaning":  "Tùy thuộc vào..."
                             },
                             {
                                 "pattern":  "〜ことになる",
                                 "meaning":  "Dẫn đến kết quả là... / Thành ra là..."
                             },
                             {
                                 "pattern":  "〜なければ〜ない",
                                 "meaning":  "Nếu không... thì không thể..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "問1：タニットさんは、国際交流授業に参加したいと思っている。中学校か高校で行われるもので、使用言語に日本語が指定されているものがいい。都合がいいのは火曜の午前か金曜の午後である。タニットさんの希望に合う国際交流授業はどれか。",
                              "options":  [
                                              "①だけ",
                                              "①と②だけ",
                                              "①と③だけ",
                                              "①と③と④"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "①だけ",
                                                          "meaning":  "Chỉ có ①.",
                                                          "analysis":  "ĐÚNG: Khớp toàn bộ 3 điều kiện của Tanit: (1) Cấp học là THCS (\u0027南台中学校\u0027); (2) Ngôn ngữ chỉ định là Tiếng Nhật (\u0027日本語\u0027); (3) Thời gian diễn ra vào Chiều Thứ Sáu 13:25〜15:15 (\u0027金曜の午後\u0027). Các trường còn lại đều bị loại: ② là trường tiểu học (七川小学校); ③ diễn ra vào Sáng Thứ Sáu 10:40〜12:00 (金曜の午前 - Tanit chỉ rảnh chiều thứ Sáu); ④ sử dụng Tiếng Anh (英語 - Tanit yêu cầu tiếng Nhật)."
                                                      },
                                                      {
                                                          "option":  "①と②だけ",
                                                          "meaning":  "Chỉ có ① và ②.",
                                                          "analysis":  "Sai: ② là trường tiểu học (\u0027七川小学校\u0027), Tanit chỉ muốn tham gia trường THCS hoặc THPT (\u0027中学校か高校\u0027)."
                                                      },
                                                      {
                                                          "option":  "①と③だけ",
                                                          "meaning":  "Chỉ có ① và ③.",
                                                          "analysis":  "Sai: ③ diễn ra vào Sáng Thứ Sáu 10:40〜12:00 (\u0027金曜の午前\u0027), trong khi Tanit chỉ rảnh vào Chiều Thứ Sáu (\u0027金曜の午後\u0027) hoặc Sáng Thứ Ba."
                                                      },
                                                      {
                                                          "option":  "①と③と④",
                                                          "meaning":  "Cả ①, ③ và ④.",
                                                          "analysis":  "Sai: ④ sử dụng Tiếng Anh (\u0027英語\u0027), không khớp yêu cầu Tiếng Nhật của Tanit."
                                                      }
                                                  ],
                              "answer":  0,
                              "evidence":  "「① 10月21日(金) 13:25〜15:15 (金曜の午後)、南台中学校 (中学校)、使用言語：日本語」",
                              "explanation":  "Đáp án 1 đúng (①だけ). \n- Điều kiện của Tanit:\n+ Cấp học: Trường THCS (中学校) hoặc THPT (高校) $\\rightarrow$ Loại ② (Tiểu học).\n+ Ngôn ngữ: Tiếng Nhật (日本語) $\\rightarrow$ Loại ④ (sử dụng Tiếng Anh).\n+ Thời gian rảnh: Sáng Thứ 3 hoặc Chiều Thứ 6 $\\rightarrow$ Loại ③ (vì diễn ra vào Sáng Thứ 6 lúc 10:40〜12:00).\nDo đó chỉ có duy nhất trường ① (南台中学校 - Chiều Thứ Sáu, Tiếng Nhật) là phù hợp."
                          },
                          {
                              "id":  2,
                              "question":  "問2：国際交流授業への参加を申し込もうと思っている人が、注意しなければならないことはどれか。",
                              "options":  [
                                              "小学校に行く場合は、昼ご飯も生徒と一緒に食べなければならない。",
                                              "大学の授業を休まなければ参加できないものに申し込むことはできない。",
                                              "これまでに国際交流授業に参加したことがある人は申し込むことができない。",
                                              "質問がある場合は、各学校に直接連絡して確認しなければならない。"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "小学校に行く場合は、昼ご飯も生徒と一緒に食べなければならない。",
                                                          "meaning":  "Trường hợp đến trường tiểu học thì bắt buộc phải ăn trưa cùng học sinh.",
                                                          "analysis":  "Sai: Việc ăn trưa cùng học sinh tiểu học là tự chọn, có thể ăn (\u0027食べることもできます\u0027), không bắt buộc."
                                                      },
                                                      {
                                                          "option":  "大学の授業を休まなければ参加できないものに申し込むことはできない。",
                                                          "meaning":  "Không được đăng ký chương trình nào mà nếu tham gia thì phải nghỉ học ở trường đại học.",
                                                          "analysis":  "ĐÚNG: Khớp nguyên văn lưu ý đầu tiên: \u0027大学の授業を休んで参加することになる国際交流授業に申し込むことはできません\u0027 (Không được phép đăng ký tiết học giao lưu quốc tế nếu điều đó khiến bạn phải nghỉ tiết học tại trường đại học)."
                                                      },
                                                      {
                                                          "option":  "これまでに国際交流授業に参加したことがある人は申し込むことができない。",
                                                          "meaning":  "Người đã từng tham gia trước đây thì không được đăng ký.",
                                                          "analysis":  "Sai: Người từng tham gia vẫn được đăng ký (\u0027参加したことがある人も申し込めますが\u0027)."
                                                      },
                                                      {
                                                          "option":  "質問がある場合は、各学校に直接連絡して確認しなければならない。",
                                                          "meaning":  "Nếu có câu hỏi thì phải liên hệ trực tiếp với từng trường.",
                                                          "analysis":  "Sai: Mọi thắc mắc phải liên hệ với Trung tâm Giao lưu Quốc tế (\u0027国際交流センターに連絡してください\u0027), không được liên hệ trực tiếp cho các trường."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「注意：・大学の授業を休んで参加することになる国際交流授業に申し込むことはできません。」",
                              "explanation":  "Đáp án 2 đúng (大学の授業を休まなければ参加できないものに申し込むことはできない。). Quy định lưu ý nêu rõ sinh viên tuyệt đối không được đăng ký các buổi giao lưu diễn ra trùng với giờ học chính khóa ở trường đại học mà dẫn đến việc phải nghỉ học."
                          }
                      ]
    },
    {
        "id":  "dokkai-n3-thongtin-10",
        "level":  "N3",
        "category":  "thongtin",
        "categoryName":  "Tìm thông tin (情報検索)",
        "lessonNumber":  10,
        "title":  "新聞をつくって、発表しよう！ (Cùng làm báo và thuyết trình nào!)",
        "timeLimit":  300,
        "passage":  "\u003cdiv class=\"dokkai-notice-box\"\u003e\u003cdiv class=\"text-right\"\u003e\u003csmall\u003e\u003cruby\u003e東山\u003crt\u003eひがしやま\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e大学\u003crt\u003eだいがく\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e日本語\u003crt\u003eにほんご\u003c/rt\u003e\u003c/ruby\u003eセンター　\u003cruby\u003e日本語\u003crt\u003eにほんご\u003c/rt\u003e\u003c/ruby\u003eAクラス\u003cbr\u003e\u003cruby\u003e後期\u003crt\u003eこうき\u003c/rt\u003e\u003c/ruby\u003e　\u003cruby\u003e月曜\u003crt\u003eげつよう\u003c/rt\u003e\u003c/ruby\u003e2\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e目\u003crt\u003eめ\u003c/rt\u003e\u003c/ruby\u003e\u003c/small\u003e\u003c/div\u003e\u003ch3 class=\"notice-title text-center\"\u003e\u003cruby\u003e新聞\u003crt\u003eしんぶん\u003c/rt\u003e\u003c/ruby\u003eをつくって、\u003cruby\u003e発表\u003crt\u003eはっぴょう\u003c/rt\u003e\u003c/ruby\u003eしよう！\u003c/h3\u003e\u003cdiv class=\"notice-section\"\u003e\u003cul class=\"notice-list\"\u003e\u003cli\u003e● \u003cstrong\u003e\u003cruby\u003e活動\u003crt\u003eかつどう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e内容\u003crt\u003eないよう\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e：10\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e30\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003eから12\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e18\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003eまでの7\u003cruby\u003e回\u003crt\u003eかい\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003eでは、4つのグループに\u003cruby\u003e分\u003crt\u003eわ\u003c/rt\u003e\u003c/ruby\u003eかれて\u003cruby\u003e新聞\u003crt\u003eしんぶん\u003c/rt\u003e\u003c/ruby\u003eをつくります。グループごとに\u003cruby\u003e興味\u003crt\u003eきょうみ\u003c/rt\u003e\u003c/ruby\u003eのあることを\u003cruby\u003e調\u003crt\u003eしら\u003c/rt\u003e\u003c/ruby\u003eべたり、インタビューをしたりします。\u003cruby\u003e最後\u003crt\u003eさいご\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e回\u003crt\u003eかい\u003c/rt\u003e\u003c/ruby\u003eには、\u003cruby\u003e完成\u003crt\u003eかんせい\u003c/rt\u003e\u003c/ruby\u003eした\u003cruby\u003e新聞\u003crt\u003eしんぶん\u003c/rt\u003e\u003c/ruby\u003eをクラスで\u003cruby\u003e発表\u003crt\u003eはっぴょう\u003c/rt\u003e\u003c/ruby\u003eしてもらいます。\u003c/li\u003e\u003cli\u003e● \u003cstrong\u003e\u003cruby\u003e活動\u003crt\u003eかつどう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e場所\u003crt\u003eばしょ\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e：201\u003cruby\u003e教室\u003crt\u003eきょうしつ\u003c/rt\u003e\u003c/ruby\u003eとコンピューター\u003cruby\u003e室\u003crt\u003eしつ\u003c/rt\u003e\u003c/ruby\u003e（スケジュールの\u003cruby\u003e表\u003crt\u003eひょう\u003c/rt\u003e\u003c/ruby\u003eで☆★マークの\u003cruby\u003e付\u003crt\u003eつ\u003c/rt\u003e\u003c/ruby\u003eいている\u003cruby\u003e日\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eに、コンピューター\u003cruby\u003e室\u003crt\u003eしつ\u003c/rt\u003e\u003c/ruby\u003eが\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eできます。）\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e【コンピューター\u003cruby\u003e室\u003crt\u003eしつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e割\u003crt\u003eわ\u003c/rt\u003e\u003c/ruby\u003e】\u003c/h4\u003e\u003cp class=\"notice-subtitle\"\u003e※ コンピューター\u003cruby\u003e室\u003crt\u003eしつ\u003c/rt\u003e\u003c/ruby\u003eは、\u003cruby\u003e使用\u003crt\u003eしよう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e前半\u003crt\u003eぜんはん\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e後半\u003crt\u003eこうはん\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e分\u003crt\u003eわ\u003c/rt\u003e\u003c/ruby\u003eけ、2グループずつ\u003cruby\u003e使用\u003crt\u003eしよう\u003c/rt\u003e\u003c/ruby\u003eします。\u003c/p\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003cthead\u003e\u003ctr\u003e\u003cth\u003eマーク\u003c/th\u003e\u003cth\u003e\u003cruby\u003e前半\u003crt\u003eぜんはん\u003c/rt\u003e\u003c/ruby\u003e 10:50〜11:25\u003c/th\u003e\u003cth\u003e\u003cruby\u003e後半\u003crt\u003eこうはん\u003c/rt\u003e\u003c/ruby\u003e 11:25〜12:00\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e☆の\u003cruby\u003e日\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003eグループA、B\u003c/td\u003e\u003ctd\u003e\u003cstrong\u003eグループC、D\u003c/strong\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e★の\u003cruby\u003e日\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e\u003cstrong\u003eグループC、D\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003eグループA、B\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003cp class=\"notice-note\"\u003e※ コンピューター\u003cruby\u003e室\u003crt\u003eしつ\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e利用\u003crt\u003eりよう\u003c/rt\u003e\u003c/ruby\u003eする\u003cruby\u003e日\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eも、\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e最初\u003crt\u003eさいしょ\u003c/rt\u003e\u003c/ruby\u003eと\u003cruby\u003e最後\u003crt\u003eさいご\u003c/rt\u003e\u003c/ruby\u003eには201\u003cruby\u003e室\u003crt\u003eしつ\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e集\u003crt\u003eあつ\u003c/rt\u003e\u003c/ruby\u003eまって\u003cruby\u003e下\u003crt\u003eくだ\u003c/rt\u003e\u003c/ruby\u003eさい。\u003c/p\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e【スケジュール】\u003c/h4\u003e\u003cdiv class=\"table-responsive\"\u003e\u003ctable class=\"dokkai-table\"\u003e\u003cthead\u003e\u003ctr\u003e\u003cth style=\"width:8%;\"\u003e\u003cruby\u003e回\u003crt\u003eかい\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth style=\"width:22%;\"\u003e\u003cruby\u003e月日\u003crt\u003eがっぴ\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth\u003e\u003cruby\u003e活動\u003crt\u003eかつどう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e内容\u003crt\u003eないよう\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003cth style=\"width:25%;\"\u003eコンピューター\u003cruby\u003e室\u003crt\u003eしつ\u003c/rt\u003e\u003c/ruby\u003e\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd\u003e1\u003c/td\u003e\u003ctd\u003e10\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e30\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003eグループを\u003cruby\u003e決\u003crt\u003eき\u003c/rt\u003e\u003c/ruby\u003eめ、テーマについて\u003cruby\u003e話\u003crt\u003eはな\u003c/rt\u003e\u003c/ruby\u003eし\u003cruby\u003e合\u003crt\u003eあ\u003c/rt\u003e\u003c/ruby\u003eう。\u003c/td\u003e\u003ctd\u003eー\u003c/td\u003e\u003c/tr\u003e\u003ctr style=\"background:rgba(0, 243, 255, 0.1);\"\u003e\u003ctd\u003e2\u003c/td\u003e\u003ctd\u003e\u003cstrong\u003e11\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e6\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cruby\u003e各\u003crt\u003eかく\u003c/rt\u003e\u003c/ruby\u003eグループで\u003cruby\u003e新聞\u003crt\u003eしんぶん\u003c/rt\u003e\u003c/ruby\u003eをつくる。\u003c/td\u003e\u003ctd\u003e\u003cstrong\u003e☆\u003c/strong\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e3\u003c/td\u003e\u003ctd\u003e\u003cstrong\u003e11\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e13\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cruby\u003e各\u003crt\u003eかく\u003c/rt\u003e\u003c/ruby\u003eグループで\u003cruby\u003e新聞\u003crt\u003eしんぶん\u003c/rt\u003e\u003c/ruby\u003eをつくる。\u003c/td\u003e\u003ctd\u003e★\u003c/td\u003e\u003c/tr\u003e\u003ctr style=\"color:#f87171;\"\u003e\u003ctd\u003eー\u003c/td\u003e\u003ctd\u003e\u003cstrong\u003e11\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e20\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cstrong\u003e\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003eはありません。（\u003cruby\u003e休講\u003crt\u003eきゅうこう\u003c/rt\u003e\u003c/ruby\u003e）\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003eー\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e4\u003c/td\u003e\u003ctd\u003e\u003cstrong\u003e11\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e27\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003c/strong\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cruby\u003e各\u003crt\u003eかく\u003c/rt\u003e\u003c/ruby\u003eグループで\u003cruby\u003e新聞\u003crt\u003eしんぶん\u003c/rt\u003e\u003c/ruby\u003eをつくる。\u003c/td\u003e\u003ctd\u003e☆\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e5\u003c/td\u003e\u003ctd\u003e12\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e4\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cruby\u003e各\u003crt\u003eかく\u003c/rt\u003e\u003c/ruby\u003eグループで\u003cruby\u003e新聞\u003crt\u003eしんぶん\u003c/rt\u003e\u003c/ruby\u003eをつくる。\u003c/td\u003e\u003ctd\u003e★\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e6\u003c/td\u003e\u003ctd\u003e12\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e11\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cruby\u003e各\u003crt\u003eかく\u003c/rt\u003e\u003c/ruby\u003eグループで\u003cruby\u003e新聞\u003crt\u003eしんぶん\u003c/rt\u003e\u003c/ruby\u003eをつくる。\u003c/td\u003e\u003ctd\u003eー\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e7\u003c/td\u003e\u003ctd\u003e12\u003cruby\u003e月\u003crt\u003eがつ\u003c/rt\u003e\u003c/ruby\u003e18\u003cruby\u003e日\u003crt\u003eにち\u003c/rt\u003e\u003c/ruby\u003e\u003c/td\u003e\u003ctd class=\"text-left\"\u003e\u003cruby\u003e新聞\u003crt\u003eしんぶん\u003c/rt\u003e\u003c/ruby\u003eをクラス\u003cruby\u003e内\u003crt\u003eない\u003c/rt\u003e\u003c/ruby\u003eで\u003cruby\u003e発表\u003crt\u003eはっぴょう\u003c/rt\u003e\u003c/ruby\u003eし、\u003cruby\u003e教室\u003crt\u003eきょうしつ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e外\u003crt\u003eそと\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e壁\u003crt\u003eかべ\u003c/rt\u003e\u003c/ruby\u003eにはる。\u003c/td\u003e\u003ctd\u003eー\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"notice-section\"\u003e\u003ch4\u003e● 【インタビューについて】\u003c/h4\u003e\u003cp\u003eインタビューは\u003cstrong\u003e\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e時間\u003crt\u003eじかん\u003c/rt\u003e\u003c/ruby\u003eに\u003c/strong\u003e\u003cruby\u003e行\u003crt\u003eおこな\u003c/rt\u003e\u003c/ruby\u003eってください。\u003cbr\u003e\u003cstrong\u003eインタビューを\u003cruby\u003e行\u003crt\u003eおこな\u003c/rt\u003e\u003c/ruby\u003eう\u003cruby\u003e日\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eの1\u003cruby\u003e回\u003crt\u003eかい\u003c/rt\u003e\u003c/ruby\u003e\u003cruby\u003e前\u003crt\u003eまえ\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e授業\u003crt\u003eじゅぎょう\u003c/rt\u003e\u003c/ruby\u003eの\u003cruby\u003e日\u003crt\u003eひ\u003c/rt\u003e\u003c/ruby\u003eにインタビューの\u003cruby\u003e案\u003crt\u003eあん\u003c/rt\u003e\u003c/ruby\u003eを\u003cruby\u003e見\u003crt\u003eみ\u003c/rt\u003e\u003c/ruby\u003eせてください。\u003c/strong\u003e\u003cruby\u003e内容\u003crt\u003eないよう\u003c/rt\u003e\u003c/ruby\u003eや\u003cruby\u003e方法\u003crt\u003eほうほう\u003c/rt\u003e\u003c/ruby\u003eに\u003cruby\u003e問題\u003crt\u003eもんだい\u003c/rt\u003e\u003c/ruby\u003eがないか、\u003cruby\u003e確認\u003crt\u003eかくにん\u003c/rt\u003e\u003c/ruby\u003eします。\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
        "fullTranslation":  "【TRUNG TÂM TIẾNG NHẬT ĐẠI HỌC HIGASHIYAMA - LỚP TIẾNG NHẬT A】\nHọc kỳ 2 - Tiết 2 thứ Hai\nĐỀ TÀI: CÙNG LÀM BÁO VÀ THUYẾT TRÌNH NÀO!\n\n■ NỘI DUNG HOẠT ĐỘNG:\nTrong 7 buổi học từ 30/10 đến 18/12, lớp sẽ chia thành 4 nhóm để làm báo tường. Từng nhóm sẽ tìm hiểu chủ đề quan tâm hoặc đi phỏng vấn. Buổi học cuối cùng các nhóm sẽ thuyết trình tờ báo hoàn chỉnh trước lớp.\n\n■ ĐỊA ĐIỂM HOẠT ĐỘNG:\nPhòng học 201 và Phòng máy tính (Vào các ngày có đánh dấu ☆ hoặc ★ trong bảng lịch trình, các nhóm được sử dụng phòng máy tính).\n\n■ PHÂN CHIA THỜI GIAN DÙNG PHÒNG MÁY TÍNH:\n- Ngày có dấu ☆:\n  + Nửa đầu (10:50〜11:25): Nhóm A, Nhóm B\n  + Nửa sau (11:25〜12:00): Nhóm C, Nhóm D\n- Ngày có dấu ★:\n  + Nửa đầu (10:50〜11:25): Nhóm C, Nhóm D\n  + Nửa sau (11:25〜12:00): Nhóm A, Nhóm B\n* Lưu ý: Cả những ngày sử dụng phòng máy tính, đầu giờ và cuối giờ vẫn phải tập trung tại phòng 201.\n\n■ LỊCH TRÌNH CỤ THỂ:\n- Buổi 1 (30/10): Chọn nhóm, thảo luận đề tài.\n- Buổi 2 (6/11): Làm báo tại các nhóm (Phòng máy: ☆).\n- Buổi 3 (13/11): Làm báo tại các nhóm (Phòng máy: ★).\n- Ngày 20/11: NGHỈ HỌC (Không có tiết học).\n- Buổi 4 (27/11): Làm báo tại các nhóm (Phòng máy: ☆).\n- Buổi 5 (4/12): Làm báo tại các nhóm (Phòng máy: ★).\n- Buổi 6 (11/12): Làm báo tại các nhóm.\n- Buổi 7 (18/12): Thuyết trình báo trong lớp và dán lên tường ngoài hành lang.\n\n■ QUY ĐỊNH VỀ PHỎNG VẤN:\n- Phỏng vấn phải thực hiện trong giờ học.\n- BẮT BUỘC PHẢI TRÌNH BẢN DỰ THẢO KẾ HOẠCH PHỎNG VẤN CHO GIÁO VIÊN VÀO BUỔI HỌC LIỀN TRƯỚC 1 BUỔI (1回前の授業の日) so với ngày định phỏng vấn để giáo viên duyệt.",
        "vocabulary":  [
                           {
                               "word":  "前半・後半",
                               "hiragana":  "ぜんはん・こうはん",
                               "meaning":  "Nửa đầu / Nửa sau"
                           },
                           {
                               "word":  "時間割",
                               "hiragana":  "じかんわり",
                               "meaning":  "Thời khóa biểu / Phân chia khung giờ"
                           },
                           {
                               "word":  "インタビュー案",
                               "hiragana":  "いんたびゅーあん",
                               "meaning":  "Bản dự thảo kế hoạch phỏng vấn"
                           },
                           {
                               "word":  "1回前",
                               "hiragana":  "いっかいまえ",
                               "meaning":  "Buổi học liền trước (1 buổi trước)"
                           },
                           {
                               "word":  "発表する",
                               "hiragana":  "はっぴょうする",
                               "meaning":  "Thuyết trình / Báo cáo"
                           },
                           {
                               "word":  "休講",
                               "hiragana":  "きゅうこう",
                               "meaning":  "Nghỉ học / Không có tiết học"
                           }
                       ],
        "grammarNotes":  [
                             {
                                 "pattern":  "〜ごとに",
                                 "meaning":  "Từng... một (グループごとに: từng nhóm một)"
                             },
                             {
                                 "pattern":  "〜回前",
                                 "meaning":  "Trước đó... lần (1回前: 1 buổi học trước)"
                             },
                             {
                                 "pattern":  "〜によって",
                                 "meaning":  "Tùy theo..."
                             }
                         ],
        "questions":  [
                          {
                              "id":  1,
                              "question":  "1. トンさんは、「新聞をつくって、発表しよう!」のグループ活動でグループCになった。グループCが、いちばん早くコンピューター室を利用できるのは何月何日の何時からか。",
                              "options":  [
                                              "11月6日の10:50から",
                                              "11月6日の11:25から",
                                              "11月13日の10:50から",
                                              "11月13日の11:25から"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "11月6日の10:50から",
                                                          "meaning":  "Từ 10:50 ngày 6 tháng 11.",
                                                          "analysis":  "Sai: Khung giờ nửa đầu 10:50〜11:25 của ngày 6/11 (☆) dành cho nhóm A và nhóm B."
                                                      },
                                                      {
                                                          "option":  "11月6日の11:25から",
                                                          "meaning":  "Từ 11:25 ngày 6 tháng 11.",
                                                          "analysis":  "ĐÚNG: Ngày sớm nhất phòng máy tính mở cửa là ngày 11月6日 (ký hiệu ☆). Theo bảng phân chia giờ của ngày ☆: Nhóm A, B dùng nửa đầu (10:50〜11:25), nhóm C, D dùng nửa sau (11:25〜12:00) $\\rightarrow$ Nhóm C được dùng phòng máy tính sớm nhất từ 11:25 ngày 6 tháng 11."
                                                      },
                                                      {
                                                          "option":  "11月13日の10:50から",
                                                          "meaning":  "Từ 10:50 ngày 13 tháng 11.",
                                                          "analysis":  "Sai: Ngày 13/11 tuy nhóm C dùng từ 10:50 nhưng diễn ra muộn hơn ngày 6/11."
                                                      },
                                                      {
                                                          "option":  "11月13日の11:25から",
                                                          "meaning":  "Từ 11:25 ngày 13 tháng 11.",
                                                          "analysis":  "Sai: Ngày 13/11 (★) nhóm C dùng nửa đầu từ 10:50, và muộn hơn ngày 6/11."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「11月6日：☆の日 → ☆の日の後半（11:25〜12:00）：グループC、D」",
                              "explanation":  "Đáp án 2 đúng (11月6日の11:25から). \n- Ngày đầu tiên phòng máy tính được mở là ngày 11月6日 (ký hiệu ☆).\n- Trong ngày ☆, thời gian sử dụng được chia làm 2 ca: Nửa đầu (10:50〜11:25) cho nhóm A và B; Nửa sau (11:25〜12:00) cho nhóm C và D.\n- Do đó, nhóm C sẽ được sử dụng phòng máy tính sớm nhất vào ngày 6/11 từ 11:25."
                          },
                          {
                              "id":  2,
                              "question":  "2. グレイグさんたちのグループは、11月27日の授業時間中にインタビューを行いたいと考えている。いつ先生にインタビューの案を見せなければならないか。",
                              "options":  [
                                              "11月6日",
                                              "11月13日",
                                              "11月20日",
                                              "11月27日"
                                          ],
                              "optionsAnalysis":  [
                                                      {
                                                          "option":  "11月6日",
                                                          "meaning":  "Ngày 6 tháng 11.",
                                                          "analysis":  "Sai: Đây là 2 buổi học trước ngày 27/11."
                                                      },
                                                      {
                                                          "option":  "11月13日",
                                                          "meaning":  "Ngày 13 tháng 11.",
                                                          "analysis":  "ĐÚNG: Quy định nêu: \u0027インタビューを行う日の1回前の授業の日にインタビューの案を見せてください\u0027 (Phải trình bản kế hoạch phỏng vấn vào buổi học liền trước 1 buổi so với ngày phỏng vấn). Ngày phỏng vấn là ngày 27/11 (buổi 4). Nhìn vào bảng lịch trình, ngày 20/11 nghỉ học (\u002711月20日 授業はありません\u0027), do đó buổi học liền trước buổi ngày 27/11 chính là buổi ngày 11月13日."
                                                      },
                                                      {
                                                          "option":  "11月20日",
                                                          "meaning":  "Ngày 20 tháng 11.",
                                                          "analysis":  "Sai: Ngày 20/11 không có tiết học (\u0027授業はありません\u0027)."
                                                      },
                                                      {
                                                          "option":  "11月27日",
                                                          "meaning":  "Ngày 27 tháng 11.",
                                                          "analysis":  "Sai: Đây là ngày diễn ra phỏng vấn, kế hoạch phải trình trước đó 1 buổi học."
                                                      }
                                                  ],
                              "answer":  1,
                              "evidence":  "「インタビューを行う日の1回前の授業の日にインタビューの案を見せてください。11月20日：授業はありません。→ 11月27日の1回前の授業は11月13日」",
                              "explanation":  "Đáp án 2 đúng (11月13日). \n- Quy định: Phải cho giáo viên xem bản kế hoạch phỏng vấn vào buổi học liền trước (1回前の授業の日) của ngày đi phỏng vấn.\n- Nhóm Craig dự định phỏng vấn vào buổi ngày 27/11. \n- Vì ngày 20/11 nghỉ học (không có tiết), nên buổi học diễn ra liền trước ngày 27/11 chính là ngày 13/11."
                          }
                      ]
    }
]
    }
};

// ==========================================================================
// DOKKAI CONTROLLER CLASS & UI ENGINE
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initDokkai();
    }, 100);
});

function initDokkai() {
    let currentLevel = 'N3';
    let currentSkill = 'dientu';
    let currentLessonIndex = 0;
    let currentFilter = 'all'; // 'all', 'done', 'undone'
    let timerInterval = null;
    let currentMobileView = 'passage'; // 'passage', 'questions', 'split'

    function setMobileView(mode) {
        currentMobileView = mode;
        const contentArea = document.getElementById('dokkai-content-area');
        const switcherBtns = document.querySelectorAll('#dokkai-mobile-view-switcher .dokkai-view-tab-btn');

        if (contentArea) {
            contentArea.classList.remove('dokkai-mode-passage', 'dokkai-mode-questions', 'dokkai-mode-split');
            contentArea.classList.add(`dokkai-mode-${mode}`);
        }

        switcherBtns.forEach(btn => {
            if (btn.dataset.view === mode) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Load completed lessons from localStorage
    const getCompletedList = () => {
        try {
            const raw = localStorage.getItem(DOKKAI_STORAGE_DONE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    };

    const isLessonDone = (lessonId) => {
        return getCompletedList().includes(lessonId);
    };

    const toggleLessonDone = (lessonId) => {
        let list = getCompletedList();
        const idx = list.indexOf(lessonId);
        if (idx > -1) {
            list.splice(idx, 1);
        } else {
            list.push(lessonId);
        }
        try {
            localStorage.setItem(DOKKAI_STORAGE_DONE_KEY, JSON.stringify(list));
        } catch (e) {}
        renderLessonTabs();
        renderDokkaiLesson();
    };

    // DOM Elements
    const levelTabs = document.querySelectorAll('#dokkai-level-tabs .level-tab');
    const skillTabs = document.querySelectorAll('#dokkai-skill-tabs .level-tab');
    const lessonTabsContainer = document.getElementById('dokkai-lesson-tabs');
    const passageContainer = document.getElementById('dokkai-passage-container');
    const questionsContainer = document.getElementById('dokkai-questions-container');
    const dokkaiTitle = document.getElementById('dokkai-title');

    if (!passageContainer || !questionsContainer) return;

    // Ensure Highlighter Tools exist
    let highlightTools = document.querySelector('.dokkai-passage .highlighter-tools');
    if (!highlightTools) {
        highlightTools = document.createElement('div');
        highlightTools.className = 'highlighter-tools';
        document.querySelector('.dokkai-passage').appendChild(highlightTools);
    }

    // ── Render Lesson Tabs & Filter Bar ────────────────────────────────────
    function getSortedLessons() {
        const levelData = dokkaiDataset[currentLevel] || {};
        const rawLessons = levelData[currentSkill] || [];
        return rawLessons.slice().sort((a, b) => {
            const numA = parseInt(a.lessonNumber || (a.id ? a.id.replace(/\D+/g, '') : 0)) || 0;
            const numB = parseInt(b.lessonNumber || (b.id ? b.id.replace(/\D+/g, '') : 0)) || 0;
            return numA - numB;
        });
    }

    function renderLessonTabs() {
        if (!lessonTabsContainer) return;
        const lessons = getSortedLessons();

        lessonTabsContainer.innerHTML = '';

        if (lessons.length === 0) {
            lessonTabsContainer.innerHTML = `<span style="color:#888; padding: 0.4rem 1rem; font-size: 0.95rem;"><i class="fa-solid fa-hourglass-half"></i> Dữ liệu đang được cập nhật...</span>`;
            return;
        }

        // Filter Bar Wrapper
        const filterWrapper = document.createElement('div');
        filterWrapper.className = 'dokkai-filter-bar-wrapper';

        // Filter Pills: All / Undone / Done
        const completedList = getCompletedList();
        const totalCount = lessons.length;
        const doneCount = lessons.filter(l => completedList.includes(l.id)).length;
        const pct = Math.round((doneCount / totalCount) * 100);

        filterWrapper.innerHTML = `
            <div class="dokkai-filter-left">
                <div class="dokkai-progress-pill" title="Tiến độ bài học đã hoàn thành">
                    <i class="fa-solid fa-circle-check text-neon-cyan"></i>
                    <span>Đã làm: <strong>${doneCount}/${totalCount}</strong> (${pct}%)</span>
                </div>
                <div class="dokkai-status-filters">
                    <button class="dokkai-filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">Tất cả (${totalCount})</button>
                    <button class="dokkai-filter-btn ${currentFilter === 'undone' ? 'active' : ''}" data-filter="undone">Chưa làm (${totalCount - doneCount})</button>
                    <button class="dokkai-filter-btn ${currentFilter === 'done' ? 'active' : ''}" data-filter="done">Đã làm (${doneCount})</button>
                </div>
            </div>
            <div class="dokkai-lesson-pills" id="dokkai-pills-list"></div>
        `;

        const pillsList = filterWrapper.querySelector('#dokkai-pills-list');

        lessons.forEach((lesson, index) => {
            const isDone = completedList.includes(lesson.id);

            // Filter out if doesn't match
            if (currentFilter === 'done' && !isDone) return;
            if (currentFilter === 'undone' && isDone) return;

            const pill = document.createElement('button');
            pill.className = `dokkai-lesson-pill ${index === currentLessonIndex ? 'active' : ''} ${isDone ? 'is-done' : ''}`;
            pill.innerHTML = `
                <span class="pill-check-icon"><i class="fa-solid ${isDone ? 'fa-check' : 'fa-circle-notch'}"></i></span>
                <span class="pill-num">Bài ${lesson.lessonNumber || (index + 1)}</span>
                <span class="pill-status-dot"></span>
            `;
            pill.title = `${lesson.title} - ${isDone ? 'Đã làm' : 'Chưa làm'}`;

            pill.addEventListener('click', () => {
                currentLessonIndex = index;
                renderLessonTabs();
                renderDokkaiLesson();
            });

            pillsList.appendChild(pill);
        });

        // Filter status button listeners
        filterWrapper.querySelectorAll('.dokkai-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentFilter = btn.dataset.filter;
                renderLessonTabs();
            });
        });

        lessonTabsContainer.appendChild(filterWrapper);
    }

    // ── Render Current Dokkai Lesson ───────────────────────────────────────
    function renderDokkaiLesson() {
        const lessons = getSortedLessons();
        const lesson = lessons[currentLessonIndex];

        if (!lesson) {
            if (dokkaiTitle) dokkaiTitle.textContent = "Bài Đọc Hiểu";
            passageContainer.innerHTML = `
                <div class="dokkai-empty-state">
                    <i class="fa-solid fa-book-open-reader"></i>
                    <h3>Chưa có dữ liệu bài đọc</h3>
                    <p>Các bài đọc cho kỹ năng này đang được ban biên tập cập nhật.</p>
                </div>
            `;
            questionsContainer.innerHTML = '';
            return;
        }

        const isDone = isLessonDone(lesson.id);

        // Header Title with Action Controls
        if (dokkaiTitle) {
            dokkaiTitle.innerHTML = `
                <div class="dokkai-title-row">
                    <div class="dokkai-title-text">
                        <span class="dokkai-badge-skill">${getSkillName(currentSkill)}</span>
                        <span>Bài ${lesson.lessonNumber || (currentLessonIndex + 1)}: ${lesson.title}</span>
                    </div>
                    <div class="dokkai-header-actions">
                        <button class="dokkai-done-toggle-btn ${isDone ? 'is-done' : ''}" id="btn-toggle-lesson-done">
                            <i class="fa-solid ${isDone ? 'fa-square-check' : 'fa-square'}"></i>
                            <span>${isDone ? 'Đã làm' : 'Đánh dấu đã làm'}</span>
                        </button>
                    </div>
                </div>
            `;

            const toggleDoneBtn = document.getElementById('btn-toggle-lesson-done');
            if (toggleDoneBtn) {
                toggleDoneBtn.onclick = () => toggleLessonDone(lesson.id);
            }
        }

        // Update question count badge in mobile switcher
        const qCountEl = document.getElementById('dokkai-q-count');
        if (qCountEl) qCountEl.textContent = (lesson.questions && lesson.questions.length) ? lesson.questions.length : 0;

        // Render Passage Content
        passageContainer.innerHTML = `
            <div class="dokkai-passage-body">
                ${lesson.passage}
            </div>

            <!-- Mobile Action: Go to Questions -->
            <div class="dokkai-passage-bottom-actions">
                <button type="button" class="btn-primary dokkai-goto-questions-btn" id="btn-goto-questions">
                    <i class="fa-solid fa-clipboard-question"></i>
                    <span>Làm Câu Hỏi Ngay (${lesson.questions ? lesson.questions.length : 0} câu) ➔</span>
                </button>
            </div>

            <!-- Extra Tools: Translation & Vocab -->
            <div class="dokkai-extra-tools">
                <div class="dokkai-extra-buttons">
                    <button class="btn-primary btn-outline btn-small" id="btn-toggle-translation">
                        <i class="fa-solid fa-language"></i> <span id="lbl-trans">Hiện Bản Dịch Tiếng Việt</span>
                    </button>
                    <button class="btn-primary btn-outline btn-small" id="btn-toggle-vocab">
                        <i class="fa-solid fa-book-bookmark"></i> Từ Vựng & Ngữ Pháp
                    </button>
                </div>

                <!-- Full Translation Box -->
                <div class="dokkai-translation-box" id="dokkai-translation-box" style="display:none;">
                    <div class="translation-header"><i class="fa-solid fa-circle-info text-neon-cyan"></i> Bản Dịch Toàn Văn:</div>
                    <div class="translation-text">${(lesson.fullTranslation || 'Chưa có bản dịch.').replace(/\n/g, '<br><br>')}</div>
                </div>

                <!-- Vocab & Grammar Drawer -->
                <div class="dokkai-vocab-drawer" id="dokkai-vocab-drawer" style="display:none;">
                    ${renderVocabAndGrammar(lesson)}
                </div>
            </div>
        `;

        // Action button to jump to questions
        const gotoQBtn = document.getElementById('btn-goto-questions');
        if (gotoQBtn) {
            gotoQBtn.onclick = () => {
                setMobileView('questions');
                const questionsEl = document.getElementById('dokkai-questions-container');
                if (questionsEl) {
                    questionsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };
        }

        // Render Highlighter Tools
        highlightTools.innerHTML = `
            <div class="highlighter-group">
                <button class="tool-btn highlight-btn active" data-color="yellow" title="Bút dạ quang bôi vàng">
                    <i class="fa-solid fa-highlighter" style="color: #ffd700;"></i> Bôi Vàng
                </button>
                <button class="tool-btn highlight-btn" data-color="cyan" title="Bút dạ quang bôi xanh cyan">
                    <i class="fa-solid fa-highlighter" style="color: #00f3ff;"></i> Bôi Cyan
                </button>
                <button class="tool-btn highlight-btn" data-color="pink" title="Bút dạ quang bôi hồng">
                    <i class="fa-solid fa-highlighter" style="color: #ff4d6d;"></i> Bôi Hồng
                </button>
                <button class="tool-btn highlight-btn" data-color="transparent" title="Xóa đánh dấu đoạn bôi">
                    <i class="fa-solid fa-eraser"></i> Xóa Bôi
                </button>
            </div>
            <div class="dokkai-timer-group">
                <i class="fa-solid fa-clock text-neon-cyan"></i>
                <span class="dokkai-timer-display" id="dokkai-timer-val">06:00</span>
                <button class="btn-icon-small" id="btn-dokkai-timer-toggle" title="Bắt đầu / Dừng"><i class="fa-solid fa-play"></i></button>
                <button class="btn-icon-small" id="btn-dokkai-timer-reset" title="Đặt lại"><i class="fa-solid fa-rotate-left"></i></button>
            </div>
        `;

        setupHighlighter();
        setupTimer(lesson.timeLimit || 360);

        // Toggle Translation
        const btnTrans = document.getElementById('btn-toggle-translation');
        const boxTrans = document.getElementById('dokkai-translation-box');
        const lblTrans = document.getElementById('lbl-trans');
        if (btnTrans && boxTrans) {
            btnTrans.onclick = () => {
                const isHidden = boxTrans.style.display === 'none';
                boxTrans.style.display = isHidden ? 'block' : 'none';
                lblTrans.textContent = isHidden ? 'Ẩn Bản Dịch Tiếng Việt' : 'Hiện Bản Dịch Tiếng Việt';
            };
        }

        // Toggle Vocab
        const btnVocab = document.getElementById('btn-toggle-vocab');
        const boxVocab = document.getElementById('dokkai-vocab-drawer');
        if (btnVocab && boxVocab) {
            btnVocab.onclick = () => {
                boxVocab.style.display = boxVocab.style.display === 'none' ? 'block' : 'none';
            };
        }

        // Render Questions
        renderQuestions(lesson);

        // Bind interactive cloze blanks in passage to scroll & highlight corresponding question
        const clozeBlanks = passageContainer.querySelectorAll('.cloze-blank');
        clozeBlanks.forEach(blank => {
            blank.addEventListener('click', () => {
                const qid = blank.dataset.qid;
                if (!qid) return;
                if (window.innerWidth <= 768) {
                    setMobileView('questions');
                }
                setTimeout(() => {
                    const targetCard = document.getElementById(`dokkai-qcard-${qid}`);
                    if (targetCard) {
                        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        targetCard.classList.add('highlight-focus');
                        setTimeout(() => targetCard.classList.remove('highlight-focus'), 2500);
                    }
                }, 120);
            });
        });
    }

    // ── Helper: Render Vocab & Grammar ─────────────────────────────────────
    function renderVocabAndGrammar(lesson) {
        let html = '';
        if (lesson.vocabulary && lesson.vocabulary.length > 0) {
            html += `
                <div class="vocab-section">
                    <h4><i class="fa-solid fa-book-bookmark text-neon-cyan"></i> Từ vựng trọng tâm:</h4>
                    <div class="vocab-grid">
                        ${lesson.vocabulary.map(v => `
                            <div class="vocab-item">
                                <span class="v-word">${v.word}</span>
                                <span class="v-hira">${v.hiragana}</span>
                                <span class="v-mean">${v.meaning}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        if (lesson.grammarNotes && lesson.grammarNotes.length > 0) {
            html += `
                <div class="grammar-section" style="margin-top: 1rem;">
                    <h4><i class="fa-solid fa-bars-staggered text-neon-purple"></i> Ngữ pháp then chốt:</h4>
                    <div class="grammar-grid">
                        ${lesson.grammarNotes.map(g => `
                            <div class="grammar-item">
                                <span class="g-pat">${g.pattern}</span>: <span class="g-mean">${g.meaning}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        return html;
    }

    // ── Render Questions List ──────────────────────────────────────────────
    function renderQuestions(lesson) {
        questionsContainer.innerHTML = '';
        if (!lesson.questions || lesson.questions.length === 0) {
            questionsContainer.innerHTML = `<p style="color:#888; text-align:center; padding: 2rem;">Chưa có câu hỏi.</p>`;
            return;
        }

        const headerEl = document.createElement('div');
        headerEl.className = 'dokkai-questions-header';
        headerEl.innerHTML = `
            <h3><i class="fa-solid fa-clipboard-question text-neon-cyan"></i> Câu Hỏi Trắc Nghiệm (${lesson.questions.length} câu)</h3>
            <span class="dokkai-hint-badge"><i class="fa-solid fa-lightbulb"></i> Chọn đáp án để xem giải thích</span>
        `;
        questionsContainer.appendChild(headerEl);

        lesson.questions.forEach((q, qIndex) => {
            const qCard = document.createElement('div');
            qCard.className = 'dokkai-qcard glass-panel';
            qCard.id = `dokkai-qcard-${q.id || (qIndex + 1)}`;

            let optionsHtml = '';
            q.options.forEach((opt, optIndex) => {
                optionsHtml += `
                    <button type="button" class="dokkai-opt-btn" data-opt-idx="${optIndex}">
                        <span class="opt-num">${optIndex + 1}</span>
                        <span class="opt-text">${opt}</span>
                    </button>
                `;
            });

            // Render Options Analysis List (Giải thích ý nghĩa cả 4 đáp án)
            let optionsAnalysisHtml = '';
            if (q.optionsAnalysis && q.optionsAnalysis.length > 0) {
                optionsAnalysisHtml = `
                    <div class="feedback-options-meaning-box">
                        <div class="f-section-title"><i class="fa-solid fa-list-check text-neon-cyan"></i> 1. Ý nghĩa & Phân tích 4 lựa chọn:</div>
                        <ul class="feedback-options-list">
                            ${q.optionsAnalysis.map((item, idx) => `
                                <li class="opt-meaning-item ${idx === q.answer ? 'is-correct-target' : ''}">
                                    <div class="opt-meaning-header">
                                        <span class="opt-tag">${idx + 1}</span>
                                        <strong class="opt-name">${item.option}</strong>
                                        ${idx === q.answer ? '<span class="correct-badge"><i class="fa-solid fa-check"></i> ĐÁP ÁN ĐÚNG</span>' : ''}
                                    </div>
                                    <div class="opt-meaning-text"><span class="lbl-sub">Nghĩa:</span> ${item.meaning}</div>
                                    ${item.analysis ? `<div class="opt-analysis-text"><span class="lbl-sub">Nhận xét:</span> ${item.analysis}</div>` : ''}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
            } else {
                // Fallback nếu chưa có optionsAnalysis chi tiết
                optionsAnalysisHtml = `
                    <div class="feedback-options-meaning-box">
                        <div class="f-section-title"><i class="fa-solid fa-list-check text-neon-cyan"></i> 1. Các lựa chọn:</div>
                        <ul class="feedback-options-list">
                            ${q.options.map((opt, idx) => `
                                <li class="opt-meaning-item ${idx === q.answer ? 'is-correct-target' : ''}">
                                    <span class="opt-tag">${idx + 1}</span> <strong>${opt}</strong> ${idx === q.answer ? '(Đáp án đúng)' : ''}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
            }

            // Thứ tự hiển thị theo đúng yêu cầu:
            // 1. Giải thích nghĩa của cả 4 đáp án
            // 2. Đáp án đúng & Trạng thái lựa chọn
            // 3. Dẫn chứng trong bài đọc
            // 4. Phân tích giải thích chi tiết
            qCard.innerHTML = `
                <div class="dokkai-qcard-header">
                    <span class="dokkai-q-badge">${q.blankLabel || `Câu ${qIndex + 1}`}</span>
                    <div class="dokkai-q-text">${q.question}</div>
                </div>
                <div class="dokkai-options-list">
                    ${optionsHtml}
                </div>
                <div class="dokkai-q-feedback" style="display:none;">
                    <!-- 1. Giải thích nghĩa của cả 4 đáp án -->
                    ${optionsAnalysisHtml}

                    <!-- 2. Đáp án đúng & Trạng thái lựa chọn -->
                    <div class="feedback-status-box">
                        <div class="f-section-title"><i class="fa-solid fa-bullseye text-neon-cyan"></i> 2. Kết quả & Đáp án chính xác:</div>
                        <div class="feedback-status"></div>
                        <div class="feedback-correct-answer">
                            Đáp án đúng: <strong class="text-neon-cyan">[ ${q.answer + 1} ] ${q.options[q.answer]}</strong>
                        </div>
                    </div>

                    <!-- 3. Dẫn chứng trích từ bài đọc -->
                    <div class="feedback-evidence-box">
                        <div class="f-section-title"><i class="fa-solid fa-quote-left text-neon-yellow"></i> 3. Dẫn chứng trong bài đọc:</div>
                        <div class="evidence-text"></div>
                    </div>

                    <!-- 4. Phân tích giải thích chi tiết -->
                    <div class="feedback-explanation-box">
                        <div class="f-section-title"><i class="fa-solid fa-circle-info text-neon-purple"></i> 4. Phân tích giải thích chi tiết:</div>
                        <div class="explanation-text"></div>
                    </div>
                </div>
            `;

            // Handle Option Click
            const optBtns = qCard.querySelectorAll('.dokkai-opt-btn');
            const feedbackBox = qCard.querySelector('.dokkai-q-feedback');
            const statusEl = qCard.querySelector('.feedback-status');
            const evidenceEl = qCard.querySelector('.evidence-text');
            const explanationEl = qCard.querySelector('.explanation-text');

            optBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const chosenIdx = parseInt(btn.dataset.optIdx);
                    const isCorrect = (chosenIdx === q.answer);

                    optBtns.forEach(b => b.classList.remove('selected', 'is-correct', 'is-wrong'));
                    btn.classList.add('selected');

                    if (isCorrect) {
                        btn.classList.add('is-correct');
                        statusEl.innerHTML = `<span class="feedback-alert alert-correct"><i class="fa-solid fa-circle-check"></i> CHÍNH XÁC! Bạn đã chọn đúng đáp án [ ${chosenIdx + 1} ].</span>`;
                    } else {
                        btn.classList.add('is-wrong');
                        statusEl.innerHTML = `<span class="feedback-alert alert-wrong"><i class="fa-solid fa-circle-xmark"></i> CHƯA CHÍNH XÁC. Bạn đã chọn [ ${chosenIdx + 1} ].</span>`;
                        if (optBtns[q.answer]) optBtns[q.answer].classList.add('is-correct');
                    }

                    evidenceEl.textContent = q.evidence || 'Xem lại mạch văn trong bài đọc.';
                    explanationEl.textContent = q.explanation || 'Không có giải thích thêm.';
                    feedbackBox.style.display = 'block';
                });
            });

            questionsContainer.appendChild(qCard);
        });
    }

    // ── Highlighter Logic ──────────────────────────────────────────────────
    function setupHighlighter() {
        let currentColor = 'yellow';
        const btns = highlightTools.querySelectorAll('.highlight-btn');
        btns.forEach(b => {
            b.onclick = () => {
                btns.forEach(btn => btn.classList.remove('active'));
                b.classList.add('active');
                currentColor = b.dataset.color;
            };
        });

        passageContainer.onmouseup = () => {
            const sel = window.getSelection();
            if (!sel || sel.isCollapsed || !sel.rangeCount) return;

            const selectedText = sel.toString().trim();
            if (!selectedText) return;

            const range = sel.getRangeAt(0);
            if (!passageContainer.contains(range.commonAncestorContainer)) return;

            if (currentColor === 'transparent') {
                // Remove highlight if selected inside a highlight span
                const node = sel.anchorNode.parentElement;
                if (node && node.classList.contains('text-highlight')) {
                    const text = node.textContent;
                    node.replaceWith(document.createTextNode(text));
                }
            } else {
                const span = document.createElement('span');
                span.className = `text-highlight hl-${currentColor}`;
                try {
                    range.surroundContents(span);
                } catch (e) {
                    console.warn("Không thể bôi qua nhiều thẻ HTML:", e);
                }
            }
            sel.removeAllRanges();
        };
    }

    // ── Timer Logic ────────────────────────────────────────────────────────
    function setupTimer(totalSeconds) {
        if (timerInterval) clearInterval(timerInterval);
        timerSeconds = totalSeconds;
        let isRunning = false;

        const displayEl = document.getElementById('dokkai-timer-val');
        const toggleBtn = document.getElementById('btn-dokkai-timer-toggle');
        const resetBtn = document.getElementById('btn-dokkai-timer-reset');

        const updateDisplay = () => {
            if (!displayEl) return;
            const m = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
            const s = (timerSeconds % 60).toString().padStart(2, '0');
            displayEl.textContent = `${m}:${s}`;
            if (timerSeconds <= 60 && timerSeconds > 0) {
                displayEl.classList.add('text-neon-red');
            } else {
                displayEl.classList.remove('text-neon-red');
            }
        };

        updateDisplay();

        if (toggleBtn) {
            toggleBtn.onclick = () => {
                if (isRunning) {
                    clearInterval(timerInterval);
                    isRunning = false;
                    toggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                } else {
                    isRunning = true;
                    toggleBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                    timerInterval = setInterval(() => {
                        if (timerSeconds > 0) {
                            timerSeconds--;
                            updateDisplay();
                        } else {
                            clearInterval(timerInterval);
                            isRunning = false;
                            toggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                            alert('⏱ Đã hết thời gian làm bài đọc hiểu!');
                        }
                    }, 1000);
                }
            };
        }

        if (resetBtn) {
            resetBtn.onclick = () => {
                if (timerInterval) clearInterval(timerInterval);
                isRunning = false;
                timerSeconds = totalSeconds;
                if (toggleBtn) toggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                updateDisplay();
            };
        }
    }

    function getSkillName(key) {
        const map = {
            'dientu': 'Điền từ',
            'doanvan': 'Đoản văn',
            'trungvan': 'Trung văn',
            'truongvan': 'Trường văn',
            'thongtin': 'Tìm thông tin'
        };
        return map[key] || 'Đọc hiểu';
    }

    // ── Level & Skill Event Listeners ──────────────────────────────────────
    levelTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            levelTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentLevel = tab.dataset.level || 'N3';
            currentLessonIndex = 0;
            renderLessonTabs();
            renderDokkaiLesson();
        });
    });

    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            skillTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentSkill = tab.dataset.skill || 'dientu';
            currentLessonIndex = 0;
            renderLessonTabs();
            renderDokkaiLesson();
        });
    });

    // ── Mobile View Switcher & Quick Passage Modal Event Listeners ──────────
    const switcherBtns = document.querySelectorAll('#dokkai-mobile-view-switcher .dokkai-view-tab-btn');
    switcherBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const viewMode = btn.dataset.view || 'passage';
            setMobileView(viewMode);
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            const contentArea = document.getElementById('dokkai-content-area');
            if (contentArea) contentArea.classList.remove('dokkai-mode-passage', 'dokkai-mode-questions', 'dokkai-mode-split');
        } else {
            setMobileView(currentMobileView || 'passage');
        }
    });

    // Initial render
    renderLessonTabs();
    renderDokkaiLesson();

    // Default to 'passage' view on mobile
    if (window.innerWidth <= 768) {
        setMobileView('passage');
    }
}
