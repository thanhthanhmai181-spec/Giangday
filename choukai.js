/**
 * CHOUKAI (NGHE HIá»‚U) JITI / JLPT ENGINE
 * Há»— trá»£ cÃ¡c phÃ¢n mÃ´n nghe hiá»ƒu: Nghe tráº£ lá»i (nghe_traloi), Nghe chá»§ Ä‘á» (nghe_chude),
 * Nghe há»i (nghe_hoi), Nghe pháº£n xáº¡ (nghe_phanxa).
 */

const CHOUKAI_STORAGE_DONE_KEY = 'jiti_choukai_completed_lessons';

const choukaiDataset = {
    "N5": {
        "nghe_traloi": [],
        "nghe_chude": [],
        "nghe_hoi": [],
        "nghe_phanxa": []
    },
    "N4": {
        "nghe_traloi": [],
        "nghe_chude": [],
        "nghe_hoi": [],
        "nghe_phanxa": []
    },
    "N3": {
        "nghe_traloi": [
{
                "id": "choukai-n3-nghe_traloi-01",
                "level": "N3",
                "category": "nghe_traloi",
                "categoryName": "Nghe trả lời (課題理解)",
                "lessonNumber": 1,
                "title": "Bài 1: Luyện nghe hiểu trả lời (課題理解 第1回)",
                "description": "Dạng bài nghe hiểu yêu cầu hành động (課題理解): Lắng nghe câu hỏi trước, nắm bắt tình huống, nghe nội dung hội thoại và chọn hành động tiếp theo cần thực hiện.",
                "questions": [
                    {
                        "id": 1,
                        "subId": "1番",
                        "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai1/1.mp3",
                        "question": "1番：<ruby>市役所<rt>しやくしょ</rt></ruby>で、<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、この<ruby>後<rt>あと</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。",
                        "questionVi": "Tại tòa thị chính, một người đàn ông và một người phụ nữ đang nói chuyện. Người đàn ông sau đây phải làm việc gì?",
                        "options": [
                            "マイクをかりに<ruby>行<rt>い</rt></ruby>く",
                            "<ruby>森<rt>もり</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>にメールを<ruby>送<rt>おく</rt></ruby>る",
                            "<ruby>森<rt>もり</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に<ruby>電話<rt>でんわ</rt></ruby>をかける",
                            "スピーカーをかりに<ruby>行<rt>い</rt></ruby>く"
                        ],
                        "optionsAnalysis": [
                            {
                                "option": "マイクをかりに行く",
                                "meaning": "Đi mượn micro.",
                                "analysis": "Sai: Người phụ nữ (trưởng phòng) nói tiện đường đi việc khác nên sẽ tự đi mượn ('市民課に新しいのがあるはずだから、借りてきます。ちょうど今から別の用で行くところですから')."
                            },
                            {
                                "option": "森先生にメールを送る",
                                "meaning": "Gửi email cho thầy Mori.",
                                "analysis": "Sai: Ban đầu người đàn ông định gửi email, nhưng người phụ nữ bảo không biết bao giờ thầy mới đọc được nên yêu cầu gọi điện thoại ('メールはいつ見てもらえるかわからないから、電話でお願いします')."
                            },
                            {
                                "option": "森先生に電話をかける",
                                "meaning": "Gọi điện thoại cho thầy Mori.",
                                "analysis": "ĐÚNG: Người phụ nữ nhờ người đàn ông kiểm tra lại tài liệu với thầy Mori qua điện thoại ('講演していただく森先生に、前に送ってもらったものでいいか、確認しておいてくれますか... メールはいつ見てもらえるかわからないから、電話でお願いします')."
                            },
                            {
                                "option": "スピーカーをかりに行く",
                                "meaning": "Đi mượn loa.",
                                "analysis": "Sai: Loa đã được người đàn ông kiểm tra trước đó cùng với micro rồi, không bị hỏng để phải đi mượn ('それはさっきマイクの確認と一緒にしました')."
                            }
                        ],
                        "answer": 2,
                        "evidence": "「女：当日配る資料だけど、講演していただく森先生に、前に送ってもらったものでいいか、確認しておいてくれますか。男：わかりました。すぐメールします。女：いえ、メールはいつ見てもらえるかわからないから、電話でお願いします。男：あ、はい。」",
                        "explanation": "Đáp án đúng là 3 (森先生に電話をかける).\n- Trưởng phòng (nữ) nhờ nhân viên nam xác nhận lại tài liệu với thầy Mori.\n- Ban đầu anh nam định gửi email, nhưng trưởng phòng yêu cầu gọi điện thoại vì sợ gửi mail thầy không kịp đọc.\n- Micro thì trưởng phòng tiện đường tự đi mượn, loa thì anh nam đã kiểm tra xong rồi.",
                        "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>課長<rt>かちょう</rt></ruby>、<ruby>来週<rt>らいしゅう</rt></ruby><ruby>行<rt>おこな</rt></ruby>う<ruby>経済<rt>けいざい</rt></ruby>セミナーの<ruby>件<rt>けん</rt></ruby>ですが、さっき<ruby>見<rt>み</rt></ruby>てみたら、<ruby>当日<rt>とうじつ</rt></ruby><ruby>使<rt>つか</rt></ruby>う<ruby>予定<rt>よてい</rt></ruby>のマイクが1<ruby>本<rt>ほん</rt></ruby><ruby>壊<rt>こわ</rt></ruby>れていたんです。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> そう。<ruby>確<rt>たし</rt></ruby>か、<ruby>市民<rt>しみん</rt></ruby><ruby>課<rt>か</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しいのがあるはずだから、<ruby>借<rt>か</rt></ruby>りてきます。ちょうど<ruby>今<rt>いま</rt></ruby>から<ruby>別<rt>べつ</rt></ruby>の<ruby>用<rt>よう</rt></ruby>で<ruby>行<rt>い</rt></ruby>くところですから。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> ありがとうございます。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> あ、<ruby>当日<rt>とうじつ</rt></ruby><ruby>配<rt>くば</rt></ruby>る<ruby>資料<rt>しりょう</rt></ruby>だけど、<ruby>講演<rt>こうえん</rt></ruby>していただく<ruby>森<rt>もり</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に、<ruby>前<rt>まえ</rt></ruby>に<ruby>送<rt>おく</rt></ruby>ってもらったものでいいか、<ruby>確認<rt>かくにん</rt></ruby>しておいてくれますか。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> わかりました。すぐメールします。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> いえ、メールはいつ<ruby>見<rt>み</rt></ruby>てもらえるかわからないから、<strong><ruby>電話<rt>でんわ</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。</strong><br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> あ、はい。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> それから、スピーカーも<ruby>一応<rt>いちおう</rt></ruby><ruby>音<rt>おと</rt></ruby>が<ruby>出<rt>de</rt></ruby>るか<ruby>確認<rt>かくにん</rt></ruby>して、だめだったら<ruby>市民<rt>しみん</rt></ruby><ruby>課<rt>か</rt></ruby>に<ruby>借<rt>か</rt></ruby>りに<ruby>行<rt>い</rt></ruby>ってくださいね。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> それはさっきマイクの<ruby>確認<rt>かくにん</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>にしました。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> そうですか。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、この<ruby>後<rt>あと</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。</p>",
                        "scriptVi": "Nam: Trưởng phòng, về buổi hội thảo kinh tế tuần tới, ban nãy em xem lại thì thấy có 1 chiếc micro dự định dùng trong ngày hôm đó bị hỏng ạ.\nNữ: Thế à. Hình như bên Phòng Dân sự có cái mới đấy, tôi sẽ đi mượn. Tiện thể giờ tôi cũng đang chuẩn bị sang bên đó có việc khác.\nNam: Em cảm ơn ạ.\nNữ: À này, còn tài liệu phát trong ngày hôm đó, cậu xác nhận lại với thầy Mori - người sẽ diễn thuyết giúp chúng ta - xem tài liệu thầy gửi hôm trước đã được chưa nhé.\nNam: Vâng ạ. Em sẽ gửi email ngay.\nNữ: Không, email thì chẳng biết lúc nào thầy mới đọc được, nên cậu làm ơn gọi điện thoại nhé.\nNam: À, vâng ạ.\nNữ: Với lại, cậu cũng kiểm tra qua xem loa có phát ra tiếng không, nếu hỏng thì hãy đi sang Phòng Dân sự mượn nhé.\nNam: Cái đó thì ban nãy em đã kiểm tra cùng lúc với micro rồi ạ.\nNữ: Vậy à.\nCâu hỏi: Người đàn ông sau đây phải làm việc gì?"
                    },
                    {
                        "id": 2,
                        "subId": "2番",
                        "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai1/2.mp3",
                        "question": "2番：<ruby>会社<rt>かいしゃ</rt></ruby>で、<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、この<ruby>後<rt>あと</rt></ruby>まず、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。",
                        "questionVi": "Tại công ty, một người đàn ông và một người phụ nữ đang nói chuyện. Người phụ nữ sau đây đầu tiên phải làm việc gì?",
                        "options": [
                            "カードを<ruby>買<rt>か</rt></ruby>う",
                            "プレゼントをご<ruby>用意<rt>ようい</rt></ruby>する",
                            "レストランをよやくする",
                            "ぶちょうに<ruby>予定<rt>よてい</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く"
                        ],
                        "optionsAnalysis": [
                            {
                                "option": "カードを買う",
                                "meaning": "Mua thiệp chúc mừng.",
                                "analysis": "ĐÚNG: Người đàn ông nhờ nữ nhân viên đi mua thiệp và chuyền tay cho mọi người viết lời nhắn từ ngày mai, nên việc đầu tiên cô phải làm là đi mua thiệp ('カード買って、みんなに回してメッセージを書いてもらって... 明日からでも回し始めないとね')."
                            },
                            {
                                "option": "プレゼントを用意する",
                                "meaning": "Chuẩn bị quà tặng.",
                                "analysis": "Sai: Người đàn ông nói bản thân anh ấy sẽ chuẩn bị quà ('プレゼントは私が何か用意しておくよ')."
                            },
                            {
                                "option": "レストランをよやくする",
                                "meaning": "Đặt nhà hàng.",
                                "analysis": "Sai: Việc đặt nhà hàng chỉ tiến hành sau khi đã chốt ngày cụ thể ('日が決まったら予約しておきます')."
                            },
                            {
                                "option": "ぶちょうに予定を聞く",
                                "meaning": "Hỏi lịch trình của trưởng phòng.",
                                "analysis": "Sai: Người đàn ông sẽ hỏi trưởng phòng vào tuần tới khi ông ấy đi công tác về ('来週、部長が出張から戻られたら、ご予定を伺ってみるよ')."
                            }
                        ],
                        "answer": 0,
                        "evidence": "「男：悪いんだけど、カード買って、みんなに回してメッセージを書いてもらって。女：わかりました。男：人数多くて時間かかるかもしれないから、明日からでも回し始めないとね。」",
                        "explanation": "Đáp án đúng là 1 (カードを買う).\n- Người nam giao việc: 'Mua thiệp rồi chuyền tay cho mọi người viết lời chúc, mai bắt đầu chuyền luôn vì đông người'. Do đó việc đầu tiên người nữ phải làm là đi mua thiệp.\n- Quà thì người nam tự chuẩn bị, hỏi lịch trưởng phòng thì người nam tuần sau sẽ hỏi, đặt nhà hàng thì đợi chốt ngày mới đặt.",
                        "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>鈴木<rt>すずき</rt></ruby>さん、<ruby>来月<rt>らいげつ</rt></ruby>、<ruby>田中<rt>たなか</rt></ruby><ruby>部長<rt>ぶちょう</rt></ruby>が<ruby>海外<rt>かいがい</rt></ruby>の<ruby>支店<rt>してん</rt></ruby>に<ruby>移<rt>うつ</rt></ruby>られることになったの、<ruby>聞<rt>き</rt></ruby>いた？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> はい。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>部長<rt>ぶちょう</rt></ruby>には<ruby>色々<rt>いろいろ</rt></ruby>お<ruby>世話<rt>せわ</rt></ruby>になったし、<ruby>最後<rt>さいご</rt></ruby>に<ruby>食事<rt>しょくじ</rt></ruby><ruby>会<rt>かい</rt></ruby>をしようと<ruby>思<rt>おも</rt></ruby>うんだけど。その<ruby>時<rt>とき</rt></ruby>、プレゼントと<ruby>一緒<rt>いっしょ</rt></ruby>にカードを<ruby>渡<rt>わた</rt></ruby>したいんだ。<strong><ruby>悪<rt>わる</rt></ruby>いんだけど、カード<ruby>買<rt>か</rt></ruby>って、みんなに<ruby>回<rt>まわ</rt></ruby>してメッセージを<ruby>書<rt>か</rt></ruby>いてもらって。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> わかりました。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>人数<rt>にんずう</rt></ruby><ruby>多<rt>おお</rt></ruby>くて<ruby>時間<rt>じかん</rt></ruby>かかるかもしれないから、<strong><ruby>明日<rt>あした</rt></ruby>からでも<ruby>回<rt>まわ</rt></ruby>し<ruby>始<rt>はじ</rt></ruby>めないとね。</strong>プレゼントは<ruby>私<rt>わたし</rt></ruby>が<ruby>何<rt>なに</rt></ruby>かご<ruby>用意<rt>ようい</rt></ruby>しておくよ。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> はい。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> それから、<ruby>食事<rt>しょくじ</rt></ruby><ruby>会<rt>かい</rt></ruby>の<ruby>場所<rt>ばしょ</rt></ruby>だね。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>私<rt>わたし</rt></ruby>、いいレストラン<ruby>知<rt>し</rt></ruby>っているので、<ruby>日<rt>ひ</rt></ruby>が<ruby>決<rt>き</rt></ruby>まったら<ruby>予約<rt>よやく</rt></ruby>しておきます。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> ありがとう。<ruby>来週<rt>らいしゅう</rt></ruby>、<ruby>部長<rt>ぶちょう</rt></ruby>が<ruby>出張<rt>しゅっちょう</rt></ruby>から<ruby>戻<rt>もど</rt></ruby>られたら、ご<ruby>予定<rt>よてい</rt></ruby>を<ruby>伺<rt>うかが</rt></ruby>ってみるよ。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> わかりました。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、この<ruby>後<rt>あと</rt></ruby>まず、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。</p>",
                        "scriptVi": "Nam: Suzuki, cô đã nghe chuyện tháng tới Trưởng phòng Tanaka chuyển công tác sang chi nhánh nước ngoài chưa?\nNữ: Dạ em nghe rồi ạ.\nNam: Trưởng phòng đã giúp đỡ chúng ta rất nhiều, nên tôi định tổ chức một bữa tiệc ăn uống chia tay. Lúc đó tôi muốn tặng thiệp cùng với quà. Phiền cô mua tấm thiệp rồi chuyền tay cho mọi người viết lời nhắn nhé.\nNữ: Vâng ạ.\nNam: Mọi người đông nên có thể mất thời gian, phải chuyền tay từ ngày mai mới kịp. Quà thì tôi sẽ tự chuẩn bị.\nNữ: Vâng.\nNam: Tiếp theo là địa điểm tổ chức tiệc ăn uống nhỉ.\nNữ: Em biết nhà hàng rất ổn, khi nào chốt ngày em sẽ đặt bàn trước ạ.\nNam: Cảm ơn cô. Tuần tới khi trưởng phòng đi công tác về, tôi sẽ hỏi lịch của ngài ấy.\nNữ: Vâng ạ.\nCâu hỏi: Người phụ nữ sau đây đầu tiên phải làm việc gì?"
                    },
                    {
                        "id": 3,
                        "subId": "3番",
                        "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai1/3.mp3",
                        "question": "3番：<ruby>日本語<rt>にほんご</rt></ruby><ruby>学校<rt>がっこう</rt></ruby>の<ruby>教室<rt>きょうしつ</rt></ruby>で、<ruby>先生<rt>せんせい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>学生<rt>がくせい</rt></ruby>は、この<ruby>後<rt>あと</rt></ruby>まず、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。",
                        "questionVi": "Trong phòng học trường tiếng Nhật, giáo viên đang nói chuyện. Học sinh sau đây đầu tiên phải làm việc gì?",
                        "options": [
                            "はっぴょうをする",
                            "<ruby>漢字<rt>かんじ</rt></ruby>のテストをうける",
                            "<ruby>作文<rt>さくぶん</rt></ruby>を<ruby>書<rt>か</rt></ruby>く",
                            "きょうかしょの<ruby>問題<rt>もんだい</rt></ruby>をとく"
                        ],
                        "optionsAnalysis": [
                            {
                                "option": "はっぴょうをする",
                                "meaning": "Thuyết trình về sở thích.",
                                "analysis": "Sai: Giáo viên thông báo việc thuyết trình dời sang buổi học ngày mai ('それは明日の授業でしてもらいます')."
                            },
                            {
                                "option": "漢字のテストをうける",
                                "meaning": "Làm bài kiểm tra Hán tự.",
                                "analysis": "Sai: Hôm nay không có bài kiểm tra Kanji ('いつもやっている漢字テストは、今日ありません')."
                            },
                            {
                                "option": "作文を書く",
                                "meaning": "Viết bài cảm nghĩ (văn cảm nghĩ).",
                                "analysis": "ĐÚNG: Giáo viên yêu cầu học sinh viết bài cảm tưởng khoảng 400 chữ về câu chuyện đã đọc hôm qua vào tờ giấy Genkouyoushi ('原稿用紙を配りますから、感想を400字ぐらいで書いてください... じゃあ、始めましょう')."
                            },
                            {
                                "option": "きょうかしょの問題をとく",
                                "meaning": "Giải bài tập trong sách giáo khoa.",
                                "analysis": "Sai: Đây là bài tập về nhà hôm qua, ngày mai mới nộp cho cô Nakamura ('それは明日、中村先生に出してください')."
                            }
                        ],
                        "answer": 2,
                        "evidence": "「先生：原稿用紙を配りますから、感想を400字ぐらいで書いてください。それから、昨日宿題が出ましたね。教科書の練習問題。それは明日、中村先生に出してください。じゃあ、始めましょう。」",
                        "explanation": "Đáp án đúng là 3 (作文を書く).\n- Giáo viên dạy thay thông báo: Thuyết trình dời sang mai, kiểm tra Kanji hôm nay không có, bài tập SGK mai nộp cho cô Nakamura.\n- Nhiệm vụ học sinh phải làm ngay trong tiết học này là nhận giấy và viết bài cảm nghĩ khoảng 400 chữ.",
                        "scriptJp": "<p><strong><ruby>先生<rt>せんせい</rt></ruby>：</strong> <ruby>今日<rt>きょう</rt></ruby>は、<ruby>中村<rt>なかむら</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>が<ruby>急<rt>きゅう</rt></ruby>な<ruby>用<rt>よう</rt></ruby>でいらっしゃらないので、<ruby>代<rt>か</rt></ruby>わりに<ruby>私<rt>わたし</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。この<ruby>時間<rt>じかん</rt></ruby>は、<ruby>一人<rt>ひとり</rt></ruby>ずつ<ruby>自分<rt>じぶん</rt></ruby>の<ruby>趣味<rt>しゅみ</rt></ruby>について<ruby>発表<rt>はっぴょう</rt></ruby>をする<ruby>予定<rt>よてい</rt></ruby>でしたが、それは<ruby>明日<rt>あした</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>でしてもらいます。いつもやっている<ruby>漢字<rt>かんじ</rt></ruby>テストは、<ruby>今日<rt>きょう</rt></ruby>ありません。ええ、<ruby>昨日<rt>きのう</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>で<ruby>物語<rt>ものがたり</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みましたね。<strong><ruby>原稿<rt>げんこう</rt></ruby><ruby>用紙<rt>ようし</rt></ruby>を<ruby>配<rt>くば</rt></ruby>りますから、<ruby>感想<rt>かんそう</rt></ruby>を400<ruby>字<rt>じ</rt></ruby>ぐらいで<ruby>書<rt>か</rt></ruby>いてください。</strong>それから、<ruby>昨日<rt>きのう</rt></ruby><ruby>宿題<rt>しゅくだい</rt></ruby>が<ruby>出<rt>で</rt></ruby>ましたね。<ruby>教科書<rt>きょうかしょ</rt></ruby>の<ruby>練習<rt>れんしゅう</rt></ruby><ruby>問題<rt>もんだい</rt></ruby>。それは<ruby>明日<rt>あした</rt></ruby>、<ruby>中村<rt>なかむら</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に<ruby>出<rt>だ</rt></ruby>してください。じゃあ、<ruby>始<rt>はじ</rt></ruby>めましょう。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>学生<rt>がくせい</rt></ruby>は、この<ruby>後<rt>あと</rt></ruby>まず、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。</p>",
                        "scriptVi": "Giáo viên: Hôm nay cô Nakamura có việc bận đột xuất không đến được nên tôi đến dạy thay. Giờ học này theo kế hoạch từng em sẽ thuyết trình về sở thích, nhưng việc đó để ngày mai nhé. Bài kiểm tra Hán tự hàng ngày hôm nay không có. Nào, hôm qua các em đã đọc truyện rồi đúng không. Bây giờ tôi sẽ phát giấy viết văn, các em hãy viết bài cảm nghĩ khoảng 400 chữ nhé. Còn bài tập về nhà hôm qua là bài tập trong SGK thì ngày mai hãy nộp cho cô Nakamura. Nào, chúng ta bắt đầu làm thôi.\nCâu hỏi: Học sinh sau đây đầu tiên phải làm việc gì?"
                    },
                    {
                        "id": 4,
                        "subId": "4番",
                        "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai1/4.mp3",
                        "question": "4番：スーパーで、<ruby>店長<rt>てんちょう</rt></ruby>と<ruby>女<rt>おanna</rt></ruby>の<ruby>店員<rt>てんいん</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>女<rt>おんな</rt></ruby>の<ruby>店員<rt>てんいん</rt></ruby>は、この<ruby>後<rt>あと</rt></ruby>まず、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。",
                        "questionVi": "Tại siêu thị, cửa hàng trưởng và nữ nhân viên đang nói chuyện. Nữ nhân viên sau đây đầu tiên phải làm việc gì?",
                        "options": [
                            "<ruby>店<rt>みせ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>をそうじする",
                            "<ruby>林<rt>はやし</rt></ruby>くんに<ruby>品物<rt>しなもの</rt></ruby>の<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>える",
                            "<ruby>林<rt>はやし</rt></ruby>くんにレジの<ruby>仕事<rt>しごと</rt></ruby>を<ruby>教<rt>おし</rt></ruby>える",
                            "おとしものをかいしゅうする"
                        ],
                        "optionsAnalysis": [
                            {
                                "option": "店の前をそうじする",
                                "meaning": "Dọn dẹp phía trước cửa hàng.",
                                "analysis": "Sai: Bạn Hayashi đang quét dọn và sắp xong rồi ('今、林くんには店の前を掃除してもらってるんだけど、もう終わる頃だから')."
                            },
                            {
                                "option": "林くんに品物の場所を教える",
                                "meaning": "Chỉ cho bạn Hayashi vị trí bày bán hàng hóa trong tiệm.",
                                "analysis": "ĐÚNG: Cửa hàng trưởng yêu cầu nữ nhân viên việc đầu tiên ngay lúc này là chỉ cho Hayashi vị trí hàng hóa ('もう終わる頃だから、店のどこにどんな商品が並んでいるのか、教えてあげて')."
                            },
                            {
                                "option": "林くんにレジの仕事を教える",
                                "meaning": "Dạy công việc thu ngân cho Hayashi.",
                                "analysis": "Sai: Việc hướng dẫn thu ngân sẽ thực hiện vào buổi chiều ('午後はレジの仕事の説明をお願い')."
                            },
                            {
                                "option": "おとしものをかいしゅうする",
                                "meaning": "Thu gom đồ đạc khách làm rơi.",
                                "analysis": "Sai: Việc này thực hiện sau khi đóng cửa tiệm ('閉店後の店の中の確認... お客様の落とし物の回収とか')."
                            }
                        ],
                        "answer": 1,
                        "evidence": "「男：今、林くんには店の前を掃除してもらってるんだけど、もう終わる頃だから、店のどこにどんな商品が並んでいるのか、教えてあげて。女：はい。」",
                        "explanation": "Đáp án đúng là 2 (林くんに品物の場所を教える).\n- Cửa hàng trưởng phân công: Hayashi quét dọn trước cửa tiệm sắp xong, việc đầu tiên Yamada cần làm là dẫn cậu ấy đi chỉ vị trí các mặt hàng trong tiệm.\n- Việc dạy thu ngân để buổi chiều, việc kiểm tra nhặt đồ rơi để sau khi đóng cửa tiệm.",
                        "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>山田<rt>やまだ</rt></ruby>さん、おはよう。ちょっといい？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> はい、<ruby>店長<rt>てんちょう</rt></ruby>。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>新<rt>あたら</rt></ruby>しくバイトに<ruby>入<rt>はい</rt></ruby>った<ruby>林<rt>はやし</rt></ruby>くんのことなんだけど、<ruby>山田<rt>やまだ</rt></ruby>さんが<ruby>指導<rt>しどう</rt></ruby><ruby>係<rt>がかり</rt></ruby>になって、<ruby>色々<rt>いろいろ</rt></ruby><ruby>教<rt>おし</rt></ruby>えてあげてほしいんだ。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> え？<ruby>私<rt>わたし</rt></ruby>がですか？<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> うん、よろしく<ruby>頼<rt>たの</rt></ruby>むよ。<ruby>今<rt>いま</rt></ruby>、<ruby>林<rt>はやし</rt></ruby>くんには<ruby>店<rt>みせ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>を<ruby>掃除<rt>そうじ</rt></ruby>してもらってるんだけど、もう<ruby>終<rt>お</rt></ruby>わる<ruby>頃<rt>ころ</rt></ruby>だから、<strong><ruby>店<rt>みせ</rt></ruby>のどこにどんな<ruby>商品<rt>しょうひん</rt></ruby>が<ruby>並<rt>なら</rt></ruby>んでいるのか、<ruby>教<rt>おし</rt></ruby>えてあげて。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> はい。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> それから、<ruby>午後<rt>ごご</rt></ruby>はレジの<ruby>仕事<rt>しごと</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>い。<ruby>彼<rt>かれ</rt></ruby>にはできるだけ<ruby>早<rt>はや</rt></ruby>くレジを<ruby>覚<rt>おぼ</rt></ruby>えてもらいたいんだ。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> わかりました。<ruby>閉店<rt>へいてん</rt></ruby><ruby>後<rt>ご</rt></ruby>の<ruby>店<rt>みせ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>も、<ruby>一緒<rt>いっしょ</rt></ruby>にしたほうがいいですか？お<ruby>客様<rt>きゃくさま</rt></ruby>の<ruby>落<rt>お</rt></ruby>とし<ruby>物<rt>もの</rt></ruby>の<ruby>回収<rt>かいしゅう</rt></ruby>とか。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> そうだね。それもお<ruby>願<rt>ねが</rt></ruby>いするよ。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>店員<rt>てんいん</rt></ruby>は、この<ruby>後<rt>あと</rt></ruby>まず、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。</p>",
                        "scriptVi": "Nam: Yamada, chào buổi sáng. Tôi nói chuyện chút được không?\nNữ: Vâng, thưa cửa hàng trưởng.\nNam: Về bạn Hayashi mới vào làm thêm, tôi muốn Yamada làm người hướng dẫn, chỉ bảo cho cậu ấy nhiều điều nhé.\nNữ: Ơ, em ạ?\nNam: Ừ, trông cậy vào cô nhé. Hiện giờ Hayashi đang dọn dẹp trước cửa hàng, cũng sắp xong rồi đấy, cô hãy chỉ cho cậu ấy biết hàng hóa nằm ở đâu trong cửa hàng nhé.\nNữ: Vâng ạ.\nNam: Sau đó, đến chiều thì hướng dẫn công việc thu ngân giúp tôi. Tôi muốn cậu ấy nhanh chóng thạo việc thu ngân.\nNữ: Em hiểu rồi ạ. Sau khi đóng cửa có cần cùng kiểm tra cửa hàng không ạ? Như là thu gom đồ khách làm rơi chẳng hạn.\nNam: Ừ đúng rồi. Việc đó cũng nhờ cô nhé.\nCâu hỏi: Nữ nhân viên sau đây đầu tiên phải làm việc gì?"
                    },
                    {
                        "id": 5,
                        "subId": "5番",
                        "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai1/5.mp3",
                        "question": "5番：ゴルフ<ruby>教室<rt>きょうしつ</rt></ruby>で、<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>受付<rt>うけつけ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、この<ruby>後<rt>あと</rt></ruby>、どのクラスに<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みますか。",
                        "questionVi": "Tại lớp dạy đánh golf, một người đàn ông và nhân viên lễ tân đang nói chuyện. Người đàn ông sau đây sẽ đăng ký lớp nào?",
                        "options": [
                            "<ruby>入門<rt>にゅうもん</rt></ruby>クラス",
                            "しょきゅうクラス",
                            "ちゅうきゅうクラス",
                            "じょうきゅうクラス"
                        ],
                        "optionsAnalysis": [
                            {
                                "option": "入門クラス",
                                "meaning": "Lớp Nhập môn.",
                                "analysis": "Sai: Dành cho người chưa từng chơi golf bao giờ, người đàn ông này trước đây đã từng chơi rồi ('以前やってました')."
                            },
                            {
                                "option": "しょきゅうクラス",
                                "meaning": "Lớp Sơ cấp.",
                                "analysis": "Sai: Lớp thấp hơn Thượng cấp 1 bậc là lớp Trung cấp."
                            },
                            {
                                "option": "ちゅうきゅうクラス",
                                "meaning": "Lớp Trung cấp.",
                                "analysis": "ĐÚNG: Người đàn ông định đăng ký lớp Thượng cấp (上級) vì từng tham gia giải thành phố, nhưng do lớp Thượng cấp đã hết chỗ ('今定員がいっぱいになってました'), nhân viên gợi ý chuyển sang lớp thấp hơn 1 bậc ('一つ下のクラス' = Trung cấp '中級') và người đàn ông đồng ý ('そうします')."
                            },
                            {
                                "option": "じょうきゅうクラス",
                                "meaning": "Lớp Thượng cấp.",
                                "analysis": "Sai: Lớp này hiện tại đã kín chỗ/đủ sĩ số ('定員がいっぱい')."
                            }
                        ],
                        "answer": 2,
                        "evidence": "「女：上級は市の大会を目標に頑張っている方が多いですよ。男：市の大会ですか。昔はよく出てたんですけど、しばらくやってないし。女：あ、すみません。このクラス、今定員がいっぱいになってました。一つ下のクラスから始めてみてはいかがですか。男：そうですね。そうします。」",
                        "explanation": "Đáp án đúng là 3 (ちゅうきゅうクラス).\n- Người đàn ông có kinh nghiệm chơi golf → Loại lớp Nhập môn (入門).\n- Anh ấy định chọn Thượng cấp (上級) nhưng lớp này đã hết chỗ.\n- Nhân viên khuyên chọn lớp thấp hơn 1 bậc (一つ下のクラス = Trung cấp 中級), anh ấy đồng ý chọn lớp này.",
                        "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> あの、すみません。ゴルフのレッスンに<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みたいんですが、どのクラスにすればいいのかよくわからなくて。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> はい。クラスは<ruby>全部<rt>ぜんぶ</rt></ruby>で<ruby>四<rt>よっ</rt></ruby>つありますが、ゴルフは<ruby>初<rt>はじ</rt></ruby>めてですか？<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> いえ、<ruby>以前<rt>いぜん</rt></ruby>やってました。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> ああ、そうですか。では、<ruby>入門<rt>にゅうもん</rt></ruby>は<ruby>初<rt>はじ</rt></ruby>めての<ruby>方<rt>かた</rt></ruby>のクラスなので、<ruby>経験<rt>けいけん</rt></ruby><ruby>者<rt>しゃ</rt></ruby>の<ruby>方<rt>かた</rt></ruby>はそれ<ruby>以外<rt>いがい</rt></ruby>の<ruby>初級<rt>しょきゅう</rt></ruby>、<ruby>中級<rt>ちゅうきゅう</rt></ruby>、<ruby>上級<rt>じょうきゅう</rt></ruby>の<ruby>三<rt>みっ</rt></ruby>つの<ruby>中<rt>なか</rt></ruby>からお<ruby>選<rt>えら</rt></ruby>びください。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> それぞれ、どんなことをするんでしょうか。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>初級<rt>しょきゅう</rt></ruby>は<ruby>入門<rt>にゅうもん</rt></ruby>クラスで<ruby>習<rt>なら</rt></ruby>った<ruby>基本的<rt>きほんてき</rt></ruby>な<ruby>打<rt>う</rt></ruby>ち<ruby>方<rt>かた</rt></ruby>をしっかり<ruby>身<rt>み</rt></ruby>につけるクラスです。<ruby>中級<rt>ちゅうきゅう</rt></ruby>は<ruby>基礎<rt>きそ</rt></ruby>を<ruby>身<rt>み</rt></ruby>につけた<ruby>人<rt>ひと</rt></ruby>が<ruby>色々<rt>いろいろ</rt></ruby>な<ruby>技術<rt>ぎじゅつ</rt></ruby>を<ruby>学<rt>まな</rt></ruby>ぶクラスです。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> はい。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>上級<rt>じょうきゅう</rt></ruby>は<ruby>市<rt>し</rt></ruby>の<ruby>大会<rt>たいかい</rt></ruby>を<ruby>目標<rt>もくひょう</rt></ruby>に<ruby>頑張<rt>がんば</rt></ruby>っている<ruby>方<rt>かた</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いですよ。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>市<rt>し</rt></ruby>の<ruby>大会<rt>たいかい</rt></ruby>ですか。<ruby>昔<rt>むかし</rt></ruby>はよく<ruby>出<rt>で</rt></ruby>てたんですけど、しばらくやってないし。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> あ、すみません。このクラス、<ruby>今<rt>いま</rt></ruby><ruby>定員<rt>ていいん</rt></ruby>がいっぱいになってました。<strong><ruby>一<rt>ひと</rt></ruby>つ<ruby>下<rt>した</rt></ruby>のクラスから<ruby>始<rt>はじ</rt></ruby>めてみてはいかがですか。</strong><br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <strong>そうですね。そうします。</strong><br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、この<ruby>後<rt>あと</rt></ruby>、どのクラスに<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みますか。</p>",
                        "scriptVi": "Nam: Xin lỗi, tôi muốn đăng ký học đánh golf nhưng không rõ nên chọn lớp nào.\nNữ: Vâng. Có tất cả 4 lớp, anh mới chơi golf lần đầu phải không ạ?\nNam: Không, trước đây tôi từng chơi rồi.\nNữ: À thế ạ. Lớp Nhập môn là dành cho người mới bắt đầu, nên người đã có kinh nghiệm xin hãy chọn trong 3 lớp còn lại: Sơ cấp, Trung cấp, Thượng cấp.\nNam: Từng lớp học những gì vậy ạ?\nNữ: Sơ cấp là lớp rèn luyện thành thạo các cú đánh cơ bản đã học ở lớp nhập môn. Trung cấp là lớp dành cho người đã vững cơ bản học các kỹ thuật đa dạng.\nNam: Vâng.\nNữ: Thượng cấp thì nhiều người đặt mục tiêu thi đấu giải thành phố.\nNam: Giải thành phố à. Xưa tôi hay tham gia lắm, nhưng lâu rồi không chơi...\nNữ: À xin lỗi anh. Lớp Thượng cấp này hiện tại đã hết chỗ rồi ạ. Anh thử bắt đầu từ lớp thấp hơn 1 bậc xem sao ạ?\nNam: Ừ nhỉ. Tôi sẽ chọn lớp đó.\nCâu hỏi: Người đàn ông sau đây sẽ đăng ký lớp nào?"
                    },
                    {
                        "id": 6,
                        "subId": "6番",
                        "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai1/6.mp3",
                        "question": "6番：お<ruby>城<rt>しろ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>で、<ruby>案内<rt>あんない</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。これからお<ruby>城<rt>しろ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>を<ruby>見学<rt>けんがく</rt></ruby>する<ruby>人<rt>ひと</rt></ruby>は、<ruby>入<rt>い</rt></ruby>り<ruby>口<rt>ぐち</rt></ruby>で<ruby>靴<rt>くつ</rt></ruby>を<ruby>脱<rt>ぬ</rt></ruby>いだ<ruby>後<rt>あと</rt></ruby>、<ruby>靴<rt>くつ</rt></ruby>をどうしますか。",
                        "questionVi": "Trước lâu đài, người hướng dẫn đang nói chuyện. Những người chuẩn bị vào tham quan bên trong lâu đài sau khi cởi giày ở lối vào thì sẽ làm gì với đôi giày?",
                        "options": [
                            "ふくろに<ruby>入<rt>い</rt></ruby>れて<ruby>持<rt>も</rt></ruby>って<ruby>歩<rt>ある</rt></ruby>く",
                            "<ruby>係<rt>かかり</rt></ruby>りの<ruby>人<rt>ひと</rt></ruby>にわたす",
                            "<ruby>入<rt>い</rt></ruby>り<ruby>口<rt>ぐち</rt></ruby>のたなに<ruby>入<rt>い</rt></ruby>れる",
                            "<ruby>入<rt>い</rt></ruby>り<ruby>口<rt>ぐち</rt></ruby>のすみにおく"
                        ],
                        "optionsAnalysis": [
                            {
                                "option": "ふくろに入れて持って歩く",
                                "meaning": "Cho giày vào túi nilon và cầm theo khi đi tham quan.",
                                "analysis": "ĐÚNG: Người hướng dẫn yêu cầu cởi giày, cho vào túi được phát ở cửa và cầm theo người để tránh rơi đất cát ('靴は入り口で脱いで、土が落ちないように袋に入れてお持ちください')."
                            },
                            {
                                "option": "係りの人にわたす",
                                "meaning": "Giao giày cho nhân viên giữ hộ.",
                                "analysis": "Sai: Nhân viên chỉ phát túi ('袋は入り口でお渡しします') chứ không giữ giày."
                            },
                            {
                                "option": "入り口のたなに入れる",
                                "meaning": "Để giày vào kệ ở lối vào.",
                                "analysis": "Sai: Vì lối vào và lối ra khác nhau nên hôm nay cấm để giày vào kệ ('入り口と出口が違いますので... これは本日はお使いにならないようにしてください')."
                            },
                            {
                                "option": "入り口のすみにおく",
                                "meaning": "Để giày lại ở góc lối vào.",
                                "analysis": "Sai: Người hướng dẫn yêu cầu tuyệt đối không để giày lại ở góc lối vào ('脱いだ靴を入り口の隅に置いていかないようにお願いします')."
                            }
                        ],
                        "answer": 0,
                        "evidence": "「男：靴は入り口で脱いで、土が落ちないように袋に入れてお持ちください。袋は入り口でお渡しします。...入り口と出口が違いますので、入り口に靴を置く棚がございますが、これは本日はお使いにならないようにしてください。また、脱いだ靴を入り口の隅に置いていかないようにお願いします。」",
                        "explanation": "Đáp án đúng là 1 (ふくろに入れて持って歩く).\n- Do hôm nay đông khách và tham quan đường một chiều (cửa vào và cửa ra khác nhau), khách tham quan phải cho giày vào túi nilon được phát tại lối vào và tự cầm theo người suốt chuyến tham quan.\n- Tuyệt đối không dùng kệ giày và không để giày ở góc lối vào.",
                        "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>皆様<rt>みなさま</rt></ruby>、これからお<ruby>城<rt>しろ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>を<ruby>見学<rt>けんがく</rt></ruby>していただきますが、<strong><ruby>靴<rt>くつ</rt></ruby>は<ruby>入<rt>い</rt></ruby>り<ruby>口<rt>ぐち</rt></ruby>で<ruby>脱<rt>ぬ</rt></ruby>いで、<ruby>土<rt>つち</rt></ruby>が<ruby>落<rt>お</rt></ruby>ちないように<ruby>袋<rt>ふくろ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れてお<ruby>持<rt>も</rt></ruby>ちください。</strong><ruby>袋<rt>ふくろ</rt></ruby>は<ruby>入<rt>い</rt></ruby>り<ruby>口<rt>ぐち</rt></ruby>でお<ruby>渡<rt>わた</rt></ruby>しします。<ruby>本日<rt>ほんじつ</rt></ruby>は<ruby>大変<rt>たいへん</rt></ruby><ruby>混雑<rt>こんざつ</rt></ruby>しているため、<ruby>見学<rt>けんがく</rt></ruby><ruby>通路<rt>つうろ</rt></ruby>は<ruby>一方<rt>いっぽう</rt></ruby><ruby>通行<rt>つうこう</rt></ruby>になっております。<ruby>入<rt>い</rt></ruby>り<ruby>口<rt>ぐち</rt></ruby>と<ruby>出口<rt>でぐち</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>いますので、<ruby>入<rt>い</rt></ruby>り<ruby>口<rt>ぐち</rt></ruby>に<ruby>靴<rt>くつ</rt></ruby>を<ruby>置<rt>お</rt></ruby>く<ruby>棚<rt>たな</rt></ruby>がございますが、<strong>これは<ruby>本日<rt>ほんじつ</rt></ruby>はお<ruby>使<rt>つか</rt></ruby>いにならないようにしてください。また、<ruby>脱<rt>ぬ</rt></ruby>いだ<ruby>靴<rt>くつ</rt></ruby>を<ruby>入<rt>い</rt></ruby>り<ruby>口<rt>ぐち</rt></ruby>の<ruby>隅<rt>すみ</rt></ruby>に<ruby>置<rt>お</rt></ruby>いていかないようにお<ruby>願<rt>ねが</rt></ruby>いします。</strong><br><strong><ruby>問<rt>と</rt></ruby>い：</strong> これからお<ruby>城<rt>しろ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>を<ruby>見学<rt>けんがく</rt></ruby>する<ruby>人<rt>ひと</rt></ruby>は、<ruby>入<rt>い</rt></ruby>り<ruby>口<rt>ぐち</rt></ruby>で<ruby>靴<rt>くつ</rt></ruby>を<ruby>脱<rt>ぬ</rt></ruby>いだ<ruby>後<rt>あと</rt></ruby>、<ruby>靴<rt>くつ</rt></ruby>をどうしますか。</p>",
                        "scriptVi": "Người hướng dẫn: Thưa quý vị, sau đây quý vị sẽ vào tham quan bên trong lâu đài. Giày xin quý vị cởi ra ở lối vào, cho vào túi nilong và cầm theo người để đất cát không rơi ra ngoài. Túi chúng tôi sẽ phát tại lối vào. Hôm nay do rất đông khách nên tuyến đường tham quan là đường một chiều. Cổng vào và cổng ra khác nhau, nên mặc dù ở cổng vào có giá để giày, nhưng hôm nay xin quý vị đừng sử dụng. Ngoài ra, xin quý vị đừng để giày lại ở góc lối vào nhé.\nCâu hỏi: Những người chuẩn bị vào tham quan bên trong lâu đài sau khi cởi giày ở lối vào thì sẽ làm gì với đôi giày?"
                    }
                ]
            },
{
  "id": "choukai-n3-nghe_traloi-02",
  "level": "N3",
  "category": "nghe_traloi",
  "categoryName": "Nghe trả lời (課題理解)",
  "lessonNumber": 2,
  "title": "Bài 2: Luyện nghe hiểu trả lời (課題理解 第2回)",
  "description": "Dạng bài nghe hiểu yêu cầu hành động (課題理解): Lắng nghe câu hỏi trước, quan sát hình ảnh minh họa (nếu có), nắm bắt tình huống và chọn hành động chính xác.",
  "questions": [
    {
      "id": 7,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai2/7.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_traloi/bai2/1.jpg",
      "question": "1番：うちで<ruby>夫<rt>おっと</rt></ruby>と<ruby>妻<rt>つま</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>妻<rt>つま</rt></ruby>は<ruby>何<rt>なに</rt></ruby>を<ruby>買<rt>か</rt></ruby>いに<ruby>行<rt>い</rt></ruby>きますか。",
      "questionVi": "Ở nhà, người chồng và người vợ đang nói chuyện. Người vợ sẽ đi mua cái gì?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "Hình 1 (Hộp cơm 1 tầng thon dài)",
          "meaning": "Chỉ mua hộp cơm 1 tầng thon dài.",
          "analysis": "Sai: Người chồng nói hộp cơm 1 tầng đựng được ít thức ăn, chiều sẽ đói nên muốn loại 2 tầng ('2段になってて重ねられるタイプのがいいな。1段だと入れられる量が少なくて...')."
        },
        {
          "option": "Hình 2 (Hộp cơm 1 tầng + Bình nước)",
          "meaning": "Mua hộp cơm 1 tầng thon dài cùng với bình nước.",
          "analysis": "Sai: Chồng muốn loại 2 tầng và không mua bình nước lần này."
        },
        {
          "option": "Hình 3 (Hộp cơm 2 tầng thon dài)",
          "meaning": "Mua hộp cơm 2 tầng thon dài (không mua bình nước).",
          "analysis": "ĐÚNG: Người chồng muốn hộp cơm thon dài loại 2 tầng xếp chồng lên nhau ('細長い形... 2段になってて重ねられるタイプ'). Về bình nước, người chồng bảo lần này chưa cần ('あるといいなと思うけど、今回はいいよ'). Do đó người vợ chỉ mua hộp cơm 2 tầng."
        },
        {
          "option": "Hình 4 (Hộp cơm 2 tầng + Bình nước)",
          "meaning": "Mua hộp cơm 2 tầng thon dài và bình nước.",
          "analysis": "Sai: Người chồng đã từ chối mua bình nước trong lần này ('今回はいいよ')."
        }
      ],
      "answer": 2,
      "evidence": "「夫：2段になってて重ねられるタイプのがいいな。1段だと入れられる量が少なくて、夕方にはお腹空いちゃうかもしれないから。妻：わかった。前に水筒欲しいって言ってたけど、それも一緒に買っとく？夫：あるといいなと思うけど、今回はいいよ。妻：わかった。」",
      "explanation": "Đáp án đúng là Hình 3 (細長い2段のお弁当箱).\n- Người chồng muốn đổi sang hộp cơm dáng thon dài (để dễ cho vào cặp đi làm) và chọn loại 2 tầng xếp chồng lên nhau vì loại 1 tầng quá ít thức ăn.\n- Khi người vợ hỏi có mua thêm bình giữ nhiệt (水筒) không, người chồng bảo: 'Có thì tốt nhưng lần này thôi khỏi' (今回はいいよ).\n- Vì vậy người vợ chỉ đi mua hộp cơm 2 tầng thon dài (Hình 3).",
      "scriptJp": "<p><strong><ruby>夫<rt>おっと</rt></ruby>：</strong> <ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>持<rt>も</rt></ruby>っていってるお<ruby>弁当<rt>べんとう</rt></ruby><ruby>箱<rt>ばこ</rt></ruby>、<ruby>形<rt>かたち</rt></ruby>が<ruby>通勤<rt>つうきん</rt></ruby><ruby>用<rt>よう</rt></ruby>のカバンに<ruby>入<rt>い</rt></ruby>れにくくて、<strong><ruby>細長<rt>ほそなが</rt></ruby>い<ruby>形<rt>かたち</rt></ruby>のが<ruby>欲<rt>ほ</rt></ruby>しいんだ。</strong><br><strong><ruby>妻<rt>つま</rt></ruby>：</strong> あ、じゃあ、<ruby>明日<rt>あした</rt></ruby>デパートの<ruby>近<rt>ちか</rt></ruby>くに<ruby>行<rt>い</rt></ruby>く<ruby>用事<rt>ようじ</rt></ruby>があるから、<ruby>買<rt>か</rt></ruby>ってきてあげる。<br><strong><ruby>夫<rt>おっと</rt></ruby>：</strong> えー？<br><strong><ruby>妻<rt>つま</rt></ruby>：</strong> うん。<br><strong><ruby>夫<rt>おっと</rt></ruby>：</strong> <strong>2<ruby>段<rt>だん</rt></ruby>になってて<ruby>重<rt>かさ</rt></ruby>ねられるタイプのがいいな。</strong>1<ruby>段<rt>だん</rt></ruby>だと<ruby>入<rt>い</rt></ruby>れられる<ruby>量<rt>りょう</rt></ruby>が<ruby>少<rt>すく</rt></ruby>なくて、<ruby>夕方<rt>ゆうがた</rt></ruby>にはお<ruby>腹<rt>なか</rt></ruby><ruby>空<rt>す</rt></ruby>いちゃうかもしれないから。<br><strong><ruby>妻<rt>つま</rt></ruby>：</strong> わかった。<ruby>前<rt>まえ</rt></ruby>に<ruby>水筒<rt>すいとう</rt></ruby><ruby>欲<rt>ほ</rt></ruby>しいって<ruby>言<rt>い</rt></ruby>ってたけど、それも<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>買<rt>か</rt></ruby>っとく？<br><strong><ruby>夫<rt>おっと</rt></ruby>：</strong> あるといいなと<ruby>思<rt>おも</rt></ruby>うけど、<strong><ruby>今回<rt>こんかい</rt></ruby>はいいよ。</strong><br><strong><ruby>妻<rt>つま</rt></ruby>：</strong> わかった。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>妻<rt>つま</rt></ruby>は<ruby>何<rt>なに</rt></ruby>を<ruby>買<rt>か</rt></ruby>いに<ruby>行<rt>い</rt></ruby>きますか。</p>",
      "scriptVi": "Chồng: Hộp cơm anh mang đi làm hình dáng hơi khó nhét vào cặp đi làm, anh muốn loại dáng thon dài cơ.\nVợ: À, thế mai em có việc đi gần trung tâm thương mại, để em mua về cho.\nChồng: Thật hả em?\nVợ: Vâng.\nChồng: Anh thích loại 2 tầng xếp chồng lên nhau nhé. Loại 1 tầng thì đựng được ít thức ăn, chiều muộn sợ lại bị đói.\nVợ: Em hiểu rồi. Hôm trước anh bảo muốn mua bình nước giữ nhiệt nữa, em mua luôn một thể nhé?\nChồng: Có thì cũng tốt đấy nhưng lần này thôi khỏi cần em ạ.\nVợ: Vâng, em biết rồi.\nCâu hỏi: Người vợ sẽ đi mua cái gì?"
    },
    {
      "id": 8,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai2/8.mp3",
      "question": "2番：<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>受付<rt>うけつけ</rt></ruby>で<ruby>男<rt>おtoko</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>受付<rt>うけつけ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はどこで<ruby>山本<rt>やまもと</rt></ruby><ruby>部長<rt>ぶちょう</rt></ruby>を<ruby>待<rt>ま</rt></ruby>ちますか。",
      "questionVi": "Tại quầy lễ tân công ty, một người đàn ông và nhân viên lễ tân đang nói chuyện. Người đàn ông sẽ đợi Trưởng phòng Yamamoto ở đâu?",
      "options": [
        "<ruby>工場<rt>こうじょう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>",
        "かいぎしつ",
        "ロビー",
        "おうせつしつ"
      ],
      "optionsAnalysis": [
        {
          "option": "工場の中",
          "meaning": "Bên trong nhà xưởng/nhà máy.",
          "analysis": "Sai: Khi Trưởng phòng Yamamoto đến thì nhân viên mới dẫn khách vào xem nhà xưởng ('山本が到着しましたら、すぐに工場の方にご案内しますので')."
        },
        {
          "option": "かいぎしつ",
          "meaning": "Phòng họp.",
          "analysis": "Sai: Cuộc họp và tài liệu chuẩn bị trong phòng tiếp khách chứ không phải phòng họp chung."
        },
        {
          "option": "ロビー",
          "meaning": "Sảnh chờ.",
          "analysis": "Sai: Ban đầu người đàn ông định đợi ở sảnh chờ, nhưng nhân viên lễ tân đã mời vào phòng tiếp khách ở phía trong sảnh."
        },
        {
          "option": "おうせつしつ",
          "meaning": "Phòng tiếp khách (応接室).",
          "analysis": "ĐÚNG: Nhân viên lễ tân mời khách vào phòng tiếp khách ở phía trong sảnh chờ, nơi đã chuẩn bị sẵn tài liệu và trà ('ロビーの奥に応接室がございまして、本日の会議の資料とお茶をご用意しておりますので、そちらで')."
        }
      ],
      "answer": 3,
      "evidence": "「男：あ、そうですか。では、ロビーで待ちます。受付：あ、いえ。ロビーの奥に応接室がございまして、本日の会議の資料とお茶をご用意しておりますので、そちらで。山本が到着しましたら、すぐに工場の方にご案内しますので。男：あ、はい。よろしくお願いします。」",
      "explanation": "Đáp án đúng là 4 (おうせつしつ - 応接室).\n- Trưởng phòng Yamamoto bị tắc đường nên về muộn.\n- Người đàn ông định đợi ở sảnh chờ (ロビー), nhưng lễ tân mời vào phòng tiếp khách ở phía trong (ロビーの奥の応接室) vì đã chuẩn bị sẵn trà và tài liệu họp ở đó.",
      "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> あの、さくら<ruby>工業<rt>こうぎょう</rt></ruby>の<ruby>森田<rt>もりた</rt></ruby>と<ruby>申<rt>もう</rt></ruby>しますが、<ruby>営業<rt>えいぎょう</rt></ruby>の<ruby>山本<rt>やまもと</rt></ruby><ruby>部長<rt>ぶちょう</rt></ruby>、いらっしゃいますか。<ruby>今日<rt>きょう</rt></ruby>は<ruby>工場<rt>こうじょう</rt></ruby>の<ruby>見学<rt>けんがく</rt></ruby>と<ruby>会議<rt>かいぎ</rt></ruby>で<ruby>伺<rt>うかが</rt></ruby>いました。<br><strong><ruby>受付<rt>うけつけ</rt></ruby>：</strong> はい、<ruby>森田<rt>もりた</rt></ruby><ruby>様<rt>さま</rt></ruby>、<ruby>伺<rt>うかが</rt></ruby>っております。<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ございませんが、<ruby>山本<rt>やまもと</rt></ruby>は<ruby>外出<rt>がいしゅつ</rt></ruby><ruby>先<rt>さき</rt></ruby>からこちらに<ruby>戻<rt>もど</rt></ruby>るのが、<ruby>交通<rt>こうつう</rt></ruby><ruby>渋滞<rt>じゅうたい</rt></ruby>で<ruby>少々<rt>しょうしょう</rt></ruby><ruby>遅<rt>おく</rt></ruby>れておりまして。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> あ、そうですか。では、ロビーで<ruby>待<rt>ま</rt></ruby>ちます。<br><strong><ruby>受付<rt>うけつけ</rt></ruby>：</strong> あ、いえ。<strong>ロビーの<ruby>奥<rt>おく</rt></ruby>に<ruby>応接<rt>おうせつ</rt></ruby><ruby>室<rt>しつ</rt></ruby>がございまして、<ruby>本日<rt>ほんじつ</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>の<ruby>資料<rt>しりょう</rt></ruby>とお<ruby>茶<rt>ちゃ</rt></ruby>をご<ruby>用意<rt>ようい</rt></ruby>しておりますので、そちらで。</strong><ruby>山本<rt>やまもと</rt></ruby>が<ruby>到着<rt>とうちゃく</rt></ruby>しましたら、すぐに<ruby>工場<rt>こうじょう</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>にご<ruby>案内<rt>あんない</rt></ruby>しますので。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> あ、はい。よろしくお<ruby>願<rt>ねが</rt></ruby>いします。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はどこで<ruby>山本<rt>やまもと</rt></ruby><ruby>部長<rt>ぶちょう</rt></ruby>を<ruby>待<rt>ま</rt></ruby>ちますか。</p>",
      "scriptVi": "Nam: Xin chào, tôi là Morita bên công ty Công nghiệp Sakura, xin hỏi Trưởng phòng kinh doanh Yamamoto có ở đây không ạ? Hôm nay tôi đến theo lịch tham quan nhà máy và họp.\nLễ tân: Vâng, thưa ngài Morita, chúng tôi đã nhận được thông tin. Thành thật xin lỗi ngài, Trưởng phòng Yamamoto trên đường từ ngoài trở về công ty đang bị kẹt xe nên sẽ đến muộn một chút ạ.\nNam: À vậy sao. Thế tôi ngồi đợi ở sảnh nhé.\nLễ tân: Dạ không, phía trong sảnh có phòng tiếp khách, chúng tôi đã chuẩn bị sẵn tài liệu cuộc họp hôm nay và nước trà ở đó rồi ạ, xin mời ngài vào đó. Khi nào Trưởng phòng Yamamoto đến, chúng tôi sẽ dẫn ngài đi tham quan nhà xưởng ngay ạ.\nNam: Vâng, cảm ơn cô.\nCâu hỏi: Người đàn ông sẽ đợi Trưởng phòng Yamamoto ở đâu?"
    },
    {
      "id": 9,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai2/9.mp3",
      "question": "3番：<ruby>大学<rt>だいがく</rt></ruby>の<ruby>研究<rt>けんきゅう</rt></ruby><ruby>室<rt>しつ</rt></ruby>で<ruby>先生<rt>せんせい</rt></ruby>と<ruby>女<rt>おんな</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>女<rt>おんな</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>は<ruby>来週<rt>らいしゅう</rt></ruby><ruby>来<rt>く</rt></ruby>る<ruby>留学生<rt>りゅうがくせい</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えますか。",
      "questionVi": "Trong phòng nghiên cứu trường đại học, thầy giáo và nữ sinh đang nói chuyện. Nữ sinh sẽ hướng dẫn điều gì cho lưu học sinh đến vào tuần tới?",
      "options": [
        "<ruby>食堂<rt>しょくどう</rt></ruby>の<ruby>利用<rt>りよう</rt></ruby><ruby>方法<rt>ほうほう</rt></ruby>",
        "<ruby>学生<rt>がくせい</rt></ruby><ruby>課<rt>か</rt></ruby>へのしょるいの<ruby>出<rt>だ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>",
        "<ruby>学生<rt>がくせい</rt></ruby><ruby>課<rt>か</rt></ruby>のけいじばんの<ruby>見<rt>み</rt></ruby><ruby>方<rt>かた</rt></ruby>",
        "としょかんの<ruby>利用<rt>りよう</rt></ruby><ruby>方法<rt>ほうほう</rt></ruby>"
      ],
      "optionsAnalysis": [
        {
          "option": "食堂の利用方法",
          "meaning": "Cách sử dụng và ăn uống tại nhà ăn (cách gọi món).",
          "analysis": "ĐÚNG: Thầy giáo nhờ nữ sinh hướng dẫn lưu học sinh cách sử dụng nhà ăn trong giờ nghỉ trưa ('まずは食堂の使い方。注文の仕方とか... ついでにお昼も一緒に')."
        },
        {
          "option": "学生課へのしょるいの出し方",
          "meaning": "Cách nộp giấy tờ cho Phòng Công tác sinh viên.",
          "analysis": "Sai: Do Phòng sinh viên nghỉ trưa 12h-13h và 13h nữ sinh có tiết học, thầy giáo đã đổi sang nhờ người khác hướng dẫn phần này ('学生課の方は掲示板と一緒に他の人にお願いするからいいよ')."
        },
        {
          "option": "学生課のけいじばんの見方",
          "meaning": "Cách xem bảng thông báo của Phòng sinh viên.",
          "analysis": "Sai: Việc này được thầy chuyển cho người khác phụ trách cùng với Phòng sinh viên."
        },
        {
          "option": "としょかんの利用方法",
          "meaning": "Cách sử dụng thư viện.",
          "analysis": "Sai: Thư viện đã có nhân viên hướng dẫn riêng nên không cần nữ sinh chỉ dẫn ('図書館も、あ、あそこは案内係がいるからいいね')."
        }
      ],
      "answer": 0,
      "evidence": "「先生：まずは食堂の使い方。注文の仕方とか、初めての人にはわかりにくいだろうからね。ついでにお昼も一緒に。...学生：あの、先生。学生課は12時から1時まで昼休みです。すみません、私1時から授業がありまして... 先生：そっか。じゃあ、学生課の方は掲示板と一緒に他の人にお願いするからいいよ。それじゃ、よろしくね。」",
      "explanation": "Đáp án đúng là 1 (食堂の利用方法).\n- Thầy giáo ban đầu nhờ nữ sinh dẫn lưu học sinh đi xem nhà ăn (食堂) và phòng sinh viên (学生課). Thư viện thì đã có nhân viên hướng dẫn riêng.\n- Do phòng sinh viên đóng cửa nghỉ trưa từ 12h-13h, mà 13h nữ sinh lại có tiết học, thầy giáo nói sẽ nhờ người khác phụ trách phòng sinh viên và bảng tin.\n- Vì vậy nữ sinh chỉ cần hướng dẫn cách sử dụng nhà ăn (食堂の使い方).",
      "scriptJp": "<p><strong><ruby>先生<rt>せんせい</rt></ruby>：</strong> あ、<ruby>森<rt>もり</rt></ruby>さん。<ruby>来週<rt>らいしゅう</rt></ruby>からうちのゼミに<ruby>交換<rt>こうかん</rt></ruby><ruby>留学生<rt>りゅうがくせい</rt></ruby>が<ruby>入<rt>はい</rt></ruby>るって<ruby>前<rt>まえ</rt></ruby>に<ruby>話<rt>はな</rt></ruby>したけど、<ruby>月曜<rt>げつよう</rt></ruby>の12<ruby>時<rt>じ</rt></ruby>にここに来ることになったよ。それで、<ruby>昼休<rt>ひるやす</rt></ruby>みに<ruby>案内<rt>あんない</rt></ruby>とかちょっと<ruby>手伝<rt>てつだ</rt></ruby>ってもらえない？<br><strong><ruby>学生<rt>がくせい</rt></ruby>：</strong> はい。<br><strong><ruby>先生<rt>せんせい</rt></ruby>：</strong> <strong>まずは<ruby>食堂<rt>しょくどう</rt></ruby>の<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>。<ruby>注文<rt>ちゅうもん</rt></ruby>の<ruby>仕<rt>し</rt></ruby><ruby>方<rt>かた</rt></ruby>とか、<ruby>初<rt>はじ</rt></ruby>めての<ruby>人<rt>ひと</rt></ruby>にはわかりにくいだろうからね。<ruby>序<rt>つい</rt></ruby>でにお<ruby>昼<rt>ひる</rt></ruby>も<ruby>一緒<rt>いっしょ</rt></ruby>に。</strong><br><strong><ruby>学生<rt>がくせい</rt></ruby>：</strong> はい、<ruby>誘<rt>さそ</rt></ruby>ってみます。<br><strong><ruby>先生<rt>せんせい</rt></ruby>：</strong> それと、<ruby>学生<rt>がくせい</rt></ruby><ruby>課<rt>か</rt></ruby><ruby>案内<rt>あんない</rt></ruby>して、<ruby>書類<rt>しょるい</rt></ruby>の<ruby>出<rt>だ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>とか、<ruby>掲示<rt>けいじ</rt></ruby><ruby>板<rt>ばん</rt></ruby>に<ruby>貼<rt>は</rt></ruby>ってあるお<ruby>知<rt>し</rt></ruby>らせの<ruby>見<rt>み</rt></ruby><ruby>方<rt>かた</rt></ruby>とかいろいろ<ruby>教<rt>おし</rt></ruby>えてあげて。<ruby>図書館<rt>としょかん</rt></ruby>も、あ、あそこは<ruby>案内<rt>あんない</rt></ruby><ruby>係<rt>がかり</rt></ruby>がいるからいいね。じゃ、<ruby>食堂<rt>しょくどう</rt></ruby>と<ruby>学生<rt>がくせい</rt></ruby><ruby>課<rt>か</rt></ruby>、<ruby>頼<rt>たの</rt></ruby>んだよ。<br><strong><ruby>学生<rt>がくせい</rt></ruby>：</strong> あの、<ruby>先生<rt>せんせい</rt></ruby>。<ruby>学生<rt>がくせい</rt></ruby><ruby>課<rt>か</rt></ruby>は12<ruby>時<rt>じ</rt></ruby>から1<ruby>時<rt>じ</rt></ruby>まで<ruby>昼休<rt>ひるやす</rt></ruby>みです。すみません、<ruby>私<rt>わたし</rt></ruby>1<ruby>時<rt>じ</rt></ruby>から<ruby>授業<rt>じゅぎょう</rt></ruby>がありまして、2<ruby>時<rt>じ</rt></ruby><ruby>半<rt>はん</rt></ruby><ruby>過<rt>す</rt></ruby>ぎには<ruby>戻<rt>もど</rt></ruby>れますが。<br><strong><ruby>先生<rt>せんせい</rt></ruby>：</strong> <strong>そっか。じゃあ、<ruby>学生<rt>がくせい</rt></ruby><ruby>課<rt>か</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>は<ruby>掲示<rt>けいじ</rt></ruby><ruby>板<rt>ばん</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>他<rt>ほか</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>にお<ruby>願<rt>ねが</rt></ruby>いするからいいよ。それじゃ、よろしくね。</strong><br><strong><ruby>学生<rt>がくせい</rt></ruby>：</strong> はい。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>は<ruby>来週<rt>らいしゅう</rt></ruby><ruby>来<rt>く</rt></ruby>る<ruby>留学生<rt>りゅうがくせい</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えますか。</p>",
      "scriptVi": "Thầy giáo: À, Mori này. Thầy từng nói tuần sau nhóm seminar của mình sẽ có sinh viên trao đổi, bạn ấy sẽ đến đây lúc 12 giờ trưa thứ Hai. Em có thể giúp thầy dẫn bạn ấy đi tham quan vào giờ nghỉ trưa được không?\nNữ sinh: Dạ vâng ạ.\nThầy giáo: Trước tiên là cách sử dụng nhà ăn nhé. Cách gọi món này nọ đối với người mới lần đầu chắc sẽ khó hiểu, tiện thể rủ bạn ấy ăn trưa cùng luôn.\nNữ sinh: Vâng, em sẽ rủ bạn ấy.\nThầy giáo: Với lại dẫn bạn ấy qua Phòng sinh viên, chỉ cho bạn ấy cách nộp giấy tờ và cách đọc thông báo dán trên bảng tin nhé. Còn thư viện thì ở đó có nhân viên hướng dẫn rồi nên thôi. Vậy thầy nhờ em phụ trách nhà ăn và Phòng sinh viên nhé.\nNữ sinh: Dạ thưa thầy, Phòng sinh viên nghỉ trưa từ 12 giờ đến 1 giờ. Mà 1 giờ em lại có tiết học, phải sau 2 giờ rưỡi em mới quay lại được ạ.\nThầy giáo: Thế à. Vậy thì Phòng sinh viên với bảng thông báo thầy sẽ nhờ bạn khác, em không cần lo phần đó nữa. Nhờ em phần nhà ăn nhé.\nNữ sinh: Vâng ạ.\nCâu hỏi: Nữ sinh sẽ hướng dẫn điều gì cho lưu học sinh đến vào tuần tới?"
    },
    {
      "id": 10,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai2/10.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_traloi/bai2/2.jpg",
      "question": "4番：<ruby>今日<rt>きょう</rt></ruby>オープンするレストランで、<ruby>女<rt>おんな</rt></ruby>の<ruby>店員<rt>てんいん</rt></ruby>と<ruby>店長<rt>てんちょう</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>女<rt>おんな</rt></ruby>の<ruby>店員<rt>てんいん</rt></ruby>はこの<ruby>後<rt>あと</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。",
      "questionVi": "Tại nhà hàng khai trương hôm nay, nữ nhân viên và quản lý nhà hàng đang nói chuyện. Nữ nhân viên sau đây phải làm việc gì?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "Hình 1 (Xếp ghế ra ngoài cho khách ngồi)",
          "meaning": "Xếp ghế ra ngoài cho khách ngồi đợi.",
          "analysis": "Sai: Nhân viên đã chủ động mang ghế ra ngoài cho khách ngồi từ trước đó rồi ('椅子はもうお出しして、座っていただいています')."
        },
        {
          "option": "Hình 2 (Mang trà lạnh mời khách)",
          "meaning": "Bê trà lạnh ra mời khách đang ngồi chờ bên ngoài.",
          "analysis": "ĐÚNG: Cửa hàng trưởng dặn trời nóng nên hãy mang trà lạnh ra mời khách đang đợi ('今日暑いから、待ってる方に冷たいお茶をお出しして... さっき言ったこと、頼んだよ')."
        },
        {
          "option": "Hình 3 (Gọi điện thoại đặt thêm rau)",
          "meaning": "Gọi điện thoại đặt giao thêm rau.",
          "analysis": "Sai: Cửa hàng trưởng bảo khi nào thấy sắp thiếu rau thì mới báo để gọi đặt sau ('足りなくなりそうだったら早めに言ってね')."
        },
        {
          "option": "Hình 4 (Đi ngân hàng đổi tiền lẻ)",
          "meaning": "Đi ngân hàng đổi tiền lẻ.",
          "analysis": "Sai: Cửa hàng trưởng sẽ tự mình đi ngân hàng đổi tiền lẻ ('ちょっと銀行で両替してくる')."
        }
      ],
      "answer": 1,
      "evidence": "「店長：立ったまま待っていただくのは申し訳ないから、椅子を外に並べて。それから、今日暑いから、待ってる方に冷たいお茶をお出しして。店員：はい。あの、椅子はもうお出しして、座っていただいています。店長：そう、ありがとう。...じゃ、さっき言ったこと、頼んだよ。ちょっと銀行で両替してくる。」",
      "explanation": "Đáp án đúng là Hình 2 (待ってる方に冷たいお茶をお出しする).\n- Khách đã đến xếp hàng trước giờ mở cửa. Cửa hàng trưởng bảo xếp ghế và mời trà lạnh.\n- Nhân viên báo ghế đã xếp ra ngoài cho khách ngồi rồi. Cửa hàng trưởng dặn tiếp: 'Vậy việc tôi vừa nói nhờ cô nhé' (tức là mang trà lạnh ra mời khách).\n- Đổi tiền lẻ thì cửa hàng trưởng tự đi ngân hàng.",
      "scriptJp": "<p><strong><ruby>店員<rt>てんいん</rt></ruby>：</strong> <ruby>店長<rt>てんちょう</rt></ruby>、<ruby>開店<rt>かいてん</rt></ruby>まで1<ruby>時間<rt>じかん</rt></ruby>ありますが、もう<ruby>外<rt>そと</rt></ruby>で<ruby>待<rt>ま</rt></ruby>っていらっしゃるお<ruby>客様<rt>きゃくさま</rt></ruby>がいます。<br><strong><ruby>店長<rt>てんちょう</rt></ruby>：</strong> もう？<ruby>立<rt>た</rt></ruby>ったまま<ruby>待<rt>ま</rt></ruby>っていただくのは<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ないから、<ruby>椅子<rt>いす</rt></ruby>を<ruby>外<rt>そと</rt></ruby>に<ruby>並<rt>なら</rt></ruby>べて。それから、<ruby>今日<rt>きょう</rt></ruby><ruby>暑<rt>あつ</rt></ruby>いから、<strong><ruby>待<rt>ま</rt></ruby>ってる<ruby>方<rt>かた</rt></ruby>に<ruby>冷<rt>つめ</rt></ruby>たいお<ruby>茶<rt>ちゃ</rt></ruby>をお<ruby>出<rt>だ</rt></ruby>しして。</strong><br><strong><ruby>店員<rt>てんいん</rt></ruby>：</strong> はい。あの、<ruby>椅子<rt>いす</rt></ruby>はもうお<ruby>出<rt>だ</rt></ruby>しして、<ruby>座<rt>すわ</rt></ruby>っていただいています。<br><strong><ruby>店長<rt>てんちょう</rt></ruby>：</strong> そう、ありがとう。<br><strong><ruby>店員<rt>てんいん</rt></ruby>：</strong> <ruby>女性<rt>じょせい</rt></ruby>のお<ruby>客様<rt>きゃくさま</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いみたいです。<br><strong><ruby>店長<rt>てんちょう</rt></ruby>：</strong> じゃあ、サラダの<ruby>注文<rt>ちゅうもん</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いかもしれないね。<ruby>野菜<rt>やさい</rt></ruby>、<ruby>多<rt>おお</rt></ruby>めに<ruby>準備<rt>じゅんび</rt></ruby>したんだけど、<ruby>足<rt>た</rt></ruby>りなくなりそうだったら<ruby>早<rt>はや</rt></ruby>めに<ruby>言<rt>い</rt></ruby>ってね。<ruby>電話<rt>でんわ</rt></ruby>で<ruby>注文<rt>ちゅうもん</rt></ruby>して<ruby>届<rt>とど</rt></ruby>けてもらうから。<br><strong><ruby>店員<rt>てんいん</rt></ruby>：</strong> わかりました。<br><strong><ruby>店長<rt>てんちょう</rt></ruby>：</strong> <strong>じゃ、さっき<ruby>言<rt>い</rt></ruby>ったこと、<ruby>頼<rt>たの</rt></ruby>んだよ。ちょっと<ruby>銀行<rt>ぎんこう</rt></ruby>で<ruby>両替<rt>りょうがえ</rt></ruby>してくる。</strong>お<ruby>釣<rt>つ</rt></ruby>り<ruby>用<rt>よう</rt></ruby>の<ruby>小銭<rt>こぜに</rt></ruby>、<ruby>多<rt>おお</rt></ruby>めにご<ruby>用意<rt>ようい</rt></ruby>しといた<ruby>方<rt>ほう</rt></ruby>がよさそうだからね。<br><strong><ruby>店員<rt>てんいん</rt></ruby>：</strong> はい。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>店員<rt>てんいん</rt></ruby>はこの<ruby>後<rt>あと</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。</p>",
      "scriptVi": "Nhân viên: Cửa hàng trưởng, còn 1 tiếng nữa mới mở cửa nhưng ngoài cửa đã có khách đứng đợi rồi ạ.\nCửa hàng trưởng: Đã có rồi à? Để khách đứng đợi thì áy náy quá, cô đem ghế ra ngoài xếp đi. Với lại hôm nay trời nóng, cô mang trà lạnh ra mời những khách đang đợi nhé.\nNhân viên: Vâng ạ. À, ghế thì em đã mang ra xếp cho khách ngồi rồi ạ.\nCửa hàng trưởng: Thế à, cảm ơn cô nhé.\nNhân viên: Có vẻ có nhiều khách nữ ạ.\nCửa hàng trưởng: Vậy chắc sẽ có nhiều khách gọi món salad. Rau thì tôi đã chuẩn bị nhiều hơn rồi, nhưng nếu thấy sắp thiếu thì nhớ báo sớm nhé, tôi sẽ gọi điện đặt giao thêm.\nNhân viên: Vâng, em hiểu rồi ạ.\nCửa hàng trưởng: Vậy việc ban nãy tôi dặn nhờ cô nhé. Tôi đi ngân hàng đổi ít tiền lẻ đây, nên chuẩn bị sẵn nhiều tiền xu lẻ để thối cho khách.\nNhân viên: Vâng ạ.\nCâu hỏi: Nữ nhân viên sau đây phải làm việc gì?"
    },
    {
      "id": 11,
      "subId": "5番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai2/11.mp3",
      "question": "5番：<ruby>学校<rt>がっこう</rt></ruby>のダンス<ruby>部<rt>ぶ</rt></ruby>で<ruby>男<rt>おとこ</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>と<ruby>女<rt>おんな</rt></ruby>の<ruby>先輩<rt>せんぱい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>男<rt>おとこ</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>はまず、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。",
      "questionVi": "Tại câu lạc bộ khiêu vũ của trường, một nam sinh và nữ tiền bối đang nói chuyện. Nam sinh trước tiên phải làm việc gì?",
      "options": [
        "いんさつした<ruby>紙<rt>かみ</rt></ruby>をとりに行く",
        "<ruby>学校<rt>がっこう</rt></ruby>の<ruby>外<rt>そと</rt></ruby>でパンフレットをくばる",
        "<ruby>紙<rt>かみ</rt></ruby>をホチキスでとめる",
        "ゆかをかたづける"
      ],
      "optionsAnalysis": [
        {
          "option": "いんさつした紙をとりに行く",
          "meaning": "Đi sang phòng photocopy lấy số giấy đã in xong.",
          "analysis": "ĐÚNG: Tiền bối nhờ nam sinh trước tiên sang phòng in lấy phần tài liệu đã in xong mang về ('その前に、残りの印刷ができてるはずだから、コピー室行って取ってきてくれない？')."
        },
        {
          "option": "学校の外でパンフレットをくばる",
          "meaning": "Ra ngoài cổng trường phát tờ rơi.",
          "analysis": "Sai: Sau khi in và dập ghim xong toàn bộ tờ rơi thì mới cùng nhau ra ngoài phát ('全部終わったら、外に出て配ろう')."
        },
        {
          "option": "紙をホチキスでとめる",
          "meaning": "Dập ghim từng tập giấy tờ rơi.",
          "analysis": "Sai: Việc dập ghim làm sau khi đi lấy giấy in về ('戻ったらホチキスで留めるの、手伝って')."
        },
        {
          "option": "ゆかをかたづける",
          "meaning": "Dọn dẹp giấy rơi trên sàn nhà.",
          "analysis": "Sai: Nữ tiền bối làm rơi chồng giấy xuống sàn nên chị ấy sẽ tự ở lại dọn ('私、片付けないといけないから')."
        }
      ],
      "answer": 0,
      "evidence": "「男：じゃあ、みんなと一緒にホチキス留めしますね。先輩：うん。あ、その前に、残りの印刷ができてるはずだから、コピー室行って取ってきてくれない？今行こうとしてたんだけど、そこの机に重ねといた紙の山、床に落としちゃって。私、片付けないといけないから、お願い。で、戻ったらホチキスで留めるの、手伝って。男：わかりました。」",
      "explanation": "Đáp án đúng là 1 (いんさつした紙をとりに行く).\n- Nam sinh đến muộn định vào dập ghim giấy cùng mọi người ngay.\n- Tiền bối bảo: 'Trước đó, chắc phần in còn lại đã xong rồi, em sang phòng in lấy về giúp chị nhé' (その前に... コピー室行って取ってきてくれない？).\n- Tiền bối bị làm rơi chồng giấy xuống sàn nên phải ở lại dọn.\n- Vì vậy việc đầu tiên nam sinh phải làm là đi lấy giấy in ở phòng copy.",
      "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>遅<rt>おく</rt></ruby>くなってすみません。<ruby>今日<rt>きょう</rt></ruby>は<ruby>発表<rt>はっぴょう</rt></ruby><ruby>会<rt>かい</rt></ruby>の<ruby>案内<rt>あんない</rt></ruby>のパンフレットを<ruby>印刷<rt>いんさつ</rt></ruby>して、<ruby>学校<rt>がっこう</rt></ruby>の<ruby>外<rt>そと</rt></ruby>で<ruby>配<rt>くば</rt></ruby>るんですよね。<br><strong><ruby>先輩<rt>せんぱい</rt></ruby>：</strong> うん。もうみんな<ruby>集<rt>あつ</rt></ruby>まって<ruby>始<rt>はじ</rt></ruby>めてるから、すぐ<ruby>手伝<rt>てつだ</rt></ruby>って。えっとね、<ruby>印刷<rt>いんさつ</rt></ruby>は3<ruby>分<rt>ぶん</rt></ruby>の2くらい<ruby>終<rt>お</rt></ruby>わって、<ruby>今<rt>いま</rt></ruby>みんなで1<ruby>部<rt>ぶ</rt></ruby>ずつホチキスで<ruby>留<rt>と</rt></ruby>めてるところ。<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>終<rt>お</rt></ruby>わったら、<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>で</rt></ruby>て<ruby>配<rt>くば</rt></ruby>ろう。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> じゃあ、みんなと<ruby>一緒<rt>いっしょ</rt></ruby>にホチキス<ruby>留<rt>ど</rt></ruby>めしますね。<br><strong><ruby>先輩<rt>せんぱい</rt></ruby>：</strong> うん。<strong>あ、その<ruby>前<rt>まえ</rt></ruby>に、<ruby>残<rt>のこ</rt></ruby>りの<ruby>印刷<rt>いんさつ</rt></ruby>ができてるはずだから、コピー<ruby>室<rt>しつ</rt></ruby><ruby>行<rt>い</rt></ruby>って<ruby>取<rt>と</rt></ruby>ってきてくれない？</strong><ruby>今<rt>いま</rt></ruby><ruby>行<rt>い</rt></ruby>こうとしてたんだけど、そこの<ruby>机<rt>つくえ</rt></ruby>に<ruby>重<rt>かさ</rt></ruby>ねといた<ruby>紙<rt>かみ</rt></ruby>の<ruby>山<rt>やま</rt></ruby>、<ruby>床<rt>ゆか</rt></ruby>に<ruby>落<rt>お</rt></ruby>としちゃって。<ruby>私<rt>わたし</rt></ruby>、<ruby>片付<rt>かたづ</rt></ruby>けないといけないから、お<ruby>願<rt>ねが</rt></ruby>い。で、<ruby>戻<rt>もど</rt></ruby>ったらホチキスで<ruby>留<rt>と</rt></ruby>めるの、<ruby>手伝<rt>てつだ</rt></ruby>って。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> わかりました。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>男<rt>おとこ</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>はまず、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。</p>",
      "scriptVi": "Nam sinh: Em xin lỗi vì đến muộn ạ. Hôm nay mình in tờ rơi giới thiệu buổi biểu diễn rồi ra ngoài trường phát phải không chị?\nTiền bối: Ừ. Mọi người tập trung làm từ nãy rồi, em vào phụ ngay nhé. In ấn thì xong khoảng 2/3 rồi, mọi người đang dập ghim từng bản một. Khi nào xong hết thì cùng ra ngoài phát.\nNam sinh: Dạ vậy em dập ghim cùng mọi người luôn nhé.\nTiền bối: Ừ. À nhưng trước đó, phần in còn lại chắc xong rồi đấy, em sang phòng photocopy lấy về giúp chị được không? Chị định đi lấy nhưng lại lỡ tay làm rơi chồng giấy xếp trên bàn xuống sàn. Chị phải dọn dẹp đã nên nhờ em nhé. Lấy về rồi thì phụ dập ghim sau.\nNam sinh: Vâng ạ.\nCâu hỏi: Nam sinh trước tiên phải làm việc gì?"
    },
    {
      "id": 12,
      "subId": "6番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai2/12.mp3",
      "question": "6番：<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>で<ruby>先生<rt>せんせい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>学生<rt>がくせい</rt></ruby>はこの<ruby>後<rt>あと</rt></ruby>、まず<ruby>何<rt>なに</rt></ruby>をしますか。",
      "questionVi": "Trong giờ học tiếng Nhật, giáo viên đang nói chuyện. Học sinh sau đây trước tiên sẽ làm việc gì?",
      "options": [
        "<ruby>寺<rt>てら</rt></ruby>についてのビデオを<ruby>見<rt>み</rt></ruby>る",
        "<ruby>寺<rt>てら</rt></ruby>についていろいろ<ruby>調<rt>しら</rt></ruby>べる",
        "<ruby>寺<rt>てら</rt></ruby>について<ruby>知<rt>し</rt></ruby>っていることを<ruby>書<rt>か</rt></ruby>く",
        "<ruby>寺<rt>てら</rt></ruby>についてとなりの<ruby>人<rt>ひと</rt></ruby>と<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>う"
      ],
      "optionsAnalysis": [
        {
          "option": "寺についてのビデオを見る",
          "meaning": "Xem video giới thiệu về các ngôi chùa.",
          "analysis": "Sai: Việc xem video thực hiện sau khi đã viết ghi chú xong ('ビデオを見る前にお寺について知っていることを... 続いてビデオを見て')."
        },
        {
          "option": "寺についていろいろ調べる",
          "meaning": "Tìm hiểu nhiều điều về chùa.",
          "analysis": "Sai: Đây là việc giáo viên nhắc đến như kinh nghiệm trước đây của một số bạn chứ không phải nhiệm vụ trong lớp."
        },
        {
          "option": "寺について知っていることを書く",
          "meaning": "Viết ghi chú ra giấy những điều mình đã biết về chùa.",
          "analysis": "ĐÚNG: Giáo viên phát giấy và yêu cầu trước khi xem video hãy ghi chú lại những gì mình biết về chùa trong khoảng 5 phút ('これから紙を配りますから、ビデオを見る前にお寺について知っていることを5分くらいでメモしてください')."
        },
        {
          "option": "寺についてとなりの人と話し合う",
          "meaning": "Thảo luận với bạn ngồi bên cạnh về chùa.",
          "analysis": "Sai: Việc thảo luận cặp đôi diễn ra sau khi đã xem xong video ('その後で... 隣の人と話し合いましょう')."
        }
      ],
      "answer": 2,
      "evidence": "「先生：これから紙を配りますから、ビデオを見る前にお寺について知っていることを5分くらいでメモしてください。続いてビデオを見て、その後で最初にメモしたこと、ビデオを見て新しく発見したことについて、隣の人と話し合いましょう。」",
      "explanation": "Đáp án đúng là 3 (寺について知っていることを書く).\n- Giáo viên phổ biến trình tự tiết học:\n  1. Phát giấy để học sinh ghi chú những điều đã biết về chùa trong 5 phút (trước khi xem video).\n  2. Xem video giới thiệu về chùa.\n  3. Thảo luận với bạn bên cạnh về những điều đã ghi chú và những phát hiện mới sau khi xem video.\n- Vì vậy việc đầu tiên học sinh làm là ghi ra giấy những điều mình đã biết về chùa.",
      "scriptJp": "<p><strong><ruby>先生<rt>せんせい</rt></ruby>：</strong> えー、<ruby>今日<rt>きょう</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>のお<ruby>寺<rt>てら</rt></ruby>を<ruby>紹介<rt>しょうかい</rt></ruby>するビデオを<ruby>見<rt>み</rt></ruby>ます。<ruby>日本<rt>にほん</rt></ruby>はお<ruby>寺<rt>てら</rt></ruby>がたくさんあるので、いろいろ<ruby>調<rt>しら</rt></ruby>べたり、<ruby>行<rt>い</rt></ruby>ってみたりした<ruby>人<rt>ひと</rt></ruby>もいると<ruby>思<rt>おも</rt></ruby>います。<strong>これから<ruby>紙<rt>かみ</rt></ruby>を<ruby>配<rt>くば</rt></ruby>りますから、ビデオを<ruby>見<rt>み</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>にお<ruby>寺<rt>てら</rt></ruby>について<ruby>知<rt>し</rt></ruby>っていることを5<ruby>分<rt>ふん</rt></ruby>くらいでメモしてください。</strong><ruby>続<rt>つづ</rt></ruby>いてビデオを<ruby>見<rt>み</rt></ruby>て、その<ruby>後<rt>あと</rt></ruby>で<ruby>最初<rt>さいしょ</rt></ruby>にメモしたこと、ビデオを<ruby>見<rt>み</rt></ruby>て<ruby>新<rt>あたら</rt></ruby>しく<ruby>発見<rt>はっけん</rt></ruby>したことについて、<ruby>隣<rt>となり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>いましょう。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>学生<rt>がくせい</rt></ruby>はこの<ruby>後<rt>あと</rt></ruby>、まず<ruby>何<rt>なに</rt></ruby>をしますか。</p>",
      "scriptVi": "Giáo viên: Nào, hôm nay chúng ta sẽ xem một đoạn video giới thiệu về các ngôi chùa ở Nhật Bản. Ở Nhật có rất nhiều chùa nên chắc cũng có bạn đã tìm hiểu hoặc đã từng đi thăm rồi. Bây giờ thầy sẽ phát giấy, trước khi xem video các em hãy ghi chú lại những điều mình biết về chùa trong khoảng 5 phút nhé. Tiếp theo chúng ta sẽ xem video, sau đó các em hãy thảo luận với bạn ngồi bên cạnh về những điều mình đã ghi chú ban đầu cùng những điều mới phát hiện ra sau khi xem video nhé.\nCâu hỏi: Học sinh sau đây trước tiên sẽ làm việc gì?"
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_traloi-03",
  "level": "N3",
  "category": "nghe_traloi",
  "categoryName": "Nghe trả lời (課題理解)",
  "lessonNumber": 3,
  "title": "Bài 3: Luyện nghe hiểu trả lời (課題理解 第3回)",
  "description": "Dạng bài nghe hiểu yêu cầu hành động (課題理解): Lắng nghe câu hỏi trước, nắm bắt tình huống, phân tích phương án hành động và chọn đáp án chính xác nhất.",
  "questions": [
    {
      "id": 13,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai3/13.mp3",
      "question": "1番：<ruby>大学<rt>だいがく</rt></ruby>で、<ruby>男<rt>おとこ</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>と<ruby>女<rt>おんな</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>女<rt>おんな</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>は、<ruby>国際<rt>こくさい</rt></ruby><ruby>交流<rt>こうりゅう</rt></ruby><ruby>会<rt>かい</rt></ruby>で<ruby>何<rt>なに</rt></ruby>をしますか。",
      "questionVi": "Ở trường đại học, một nam sinh và một nữ sinh đang nói chuyện. Nữ sinh sẽ làm gì tại buổi giao lưu quốc tế?",
      "options": [
        "<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>う",
        "ピアノをひく",
        "ギターをひく",
        "バイオリンをひく"
      ],
      "optionsAnalysis": [
        {
          "option": "歌を歌う",
          "meaning": "Hát.",
          "analysis": "Sai: Những người tham gia buổi giao lưu sẽ hát theo ban nhạc ('参加者みんなに歌ってもらおう')."
        },
        {
          "option": "ピアノをひく",
          "meaning": "Chơi đàn piano.",
          "analysis": "ĐÚNG: Nữ sinh ngày nhỏ từng học đàn piano, nam sinh thuyết phục cô đệm piano vì bài hát đơn giản và cô đã đồng ý ('鈴木さん、ピアノやってたんだよね？... 鈴木さんもやってよ... 曲は簡単なのにするから... はい')."
        },
        {
          "option": "ギターをひく",
          "meaning": "Chơi đàn guitar.",
          "analysis": "Sai: Nam sinh sẽ chơi guitar ('僕がギターやるし')."
        },
        {
          "option": "バイオリンをひく",
          "meaning": "Chơi đàn violin.",
          "analysis": "Sai: Bạn Sato sẽ chơi violin ('佐藤くんにバイオリンを頼むから')."
        }
      ],
      "answer": 1,
      "evidence": "「男：鈴木さん、ピアノやってたんだよね？女：ええ。子供の頃習ってましたけど、もう……。男：僕がギターやるし、佐藤くんにバイオリンを頼むから、鈴木さんもやってよ。昔習ってたんだったら、練習すれば思い出すよ。...曲は簡単なのにするから。じゃあ、練習日が決まったら知らせるよ。女：はい。」",
      "explanation": "Đáp án đúng là 2 (ピアノをひく).\n- Nam sinh phân công: Nam chơi guitar, Sato chơi violin, khán giả tham gia sẽ cùng hát theo.\n- Bạn nữ (Suzuki) ngày xưa từng học piano nên được rủ chơi đàn piano. Dù hơi ngại vì lâu chưa chơi nhưng khi nam sinh bảo bài dễ và sẽ luyện tập cùng nhau thì cô đã đồng ý (はい).",
      "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>鈴木<rt>すずき</rt></ruby>さん、<ruby>今度<rt>こんど</rt></ruby>の<ruby>国際<rt>こくさい</rt></ruby><ruby>交流<rt>こうりゅう</rt></ruby><ruby>会<rt>かい</rt></ruby>で、<ruby>僕<rt>ぼく</rt></ruby>たちのクラブはみんなが<ruby>知<rt>し</rt></ruby>っている<ruby>曲<rt>きょく</rt></ruby>を<ruby>演奏<rt>えんそう</rt></ruby>しようって<ruby>決<rt>き</rt></ruby>まったよね。<ruby>僕<rt>ぼく</rt></ruby>たちが<ruby>演奏<rt>えんそう</rt></ruby>して、<ruby>参加<rt>さんか</rt></ruby><ruby>者<rt>しゃ</rt></ruby>みんなに<ruby>歌<rt>うた</rt></ruby>ってもらおうって。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> はい。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <strong><ruby>鈴木<rt>すずき</rt></ruby>さん、ピアノやってたんだよね？</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> ええ。<ruby>子供<rt>こども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby><ruby>習<rt>なら</rt></ruby>ってましたけど、もう……。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <strong><ruby>僕<rt>ぼく</rt></ruby>がギターやるし、<ruby>佐藤<rt>さとう</rt></ruby>くんにバイオリンを<ruby>頼<rt>たの</rt></ruby>むから、<ruby>鈴木<rt>すずき</rt></ruby>さんもやってよ。</strong><ruby>昔<rt>むかし</rt></ruby><ruby>習<rt>なら</rt></ruby>ってたんだったら、<ruby>練習<rt>れんしゅう</rt></ruby>すれば<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>すよ。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> うーん、<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>下手<rt>へた</rt></ruby>なんですよ。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>大丈夫<rt>だいじょうぶ</rt></ruby>。<ruby>曲<rt>きょく</rt></ruby>は<ruby>簡単<rt>かんたん</rt></ruby>なのにするから。じゃあ、<ruby>練習<rt>れんしゅう</rt></ruby><ruby>日<rt>び</rt></ruby>が<ruby>決<rt>き</rt></ruby>まったら<ruby>知<rt>し</rt></ruby>らせるよ。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> はい。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>は、<ruby>国際<rt>こくさい</rt></ruby><ruby>交流<rt>こうりゅう</rt></ruby><ruby>会<rt>かい</rt></ruby>で<ruby>何<rt>なに</rt></ruby>をしますか。</p>",
      "scriptVi": "Nam sinh: Suzuki này, ở buổi giao lưu quốc tế sắp tới, câu lạc bộ của mình đã quyết định sẽ biểu diễn các bài nhạc mà ai cũng biết đúng không. Tụi mình sẽ đàn còn tất cả người tham gia sẽ hát theo.\nNữ sinh: Vâng ạ.\nNam sinh: Suzuki trước đây từng học chơi piano phải không?\nNữ sinh: Vâng, hồi bé em có học nhưng mà lâu rồi...\nNam sinh: Anh sẽ chơi guitar, còn violin thì anh nhờ Sato, nên Suzuki cũng tham gia đệm đàn nhé. Từng học rồi thì tập lại là nhớ ra ngay ấy mà.\nNữ sinh: Ưm, nhưng em chơi dở thật sự luôn đó ạ.\nNam sinh: Không sao đâu. Anh sẽ chọn những bài nhạc đơn giản thôi. Vậy khi nào chốt ngày tập anh sẽ báo nhé.\nNữ sinh: Vâng ạ.\nCâu hỏi: Nữ sinh sẽ làm gì tại buổi giao lưu quốc tế?"
    },
    {
      "id": 14,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai3/14.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_traloi/bai3/3.jpg",
      "question": "2番：<ruby>洋服<rt>ようふく</rt></ruby>の<ruby>会社<rt>かいしゃ</rt></ruby>で、<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、どこを<ruby>書<rt>か</rt></ruby>き<ruby>直<rt>なお</rt></ruby>しますか。",
      "questionVi": "Tại công ty thời trang may mặc, người phụ nữ và người đàn ông đang nói chuyện. Người phụ nữ sẽ vẽ lại/sửa lại vị trí nào?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "Hình 1 (Cổ áo - 襟)",
          "meaning": "Cổ áo khoác.",
          "analysis": "Sai: Cổ áo to và có thể tháo lắp linh hoạt, trưởng phòng thấy ổn ('襟は大きめだね... つけたり外したりできるようにしました... そう')."
        },
        {
          "option": "Hình 2 (Cúc áo - ボタン)",
          "meaning": "Hàng cúc/khuy áo.",
          "analysis": "Sai: Khuy áo thu nhỏ theo xu hướng thời trang đã được duyệt ('ボタンは小さくしたんだね... 流行を意識しました')."
        },
        {
          "option": "Hình 3 (Tay áo - 袖)",
          "meaning": "Cổ tay áo / Ống tay áo.",
          "analysis": "ĐÚNG: Trưởng phòng nhận xét phần ống tay áo trông hơi đơn điệu/trống trải và yêu cầu sáng tạo thêm chi tiết vào đó ('だけど、袖のところ、ちょっと寂しいな。ここ、もうちょっと工夫してみて')."
        },
        {
          "option": "Hình 4 (Túi áo - ポケット)",
          "meaning": "Túi áo khoác ngoài.",
          "analysis": "Sai: Trưởng phòng khen kiểu dáng túi áo đẹp ('このポケットの形、いいね')."
        }
      ],
      "answer": 2,
      "evidence": "「男：このポケットの形、いいね。だけど、袖のところ、ちょっと寂しいな。ここ、もうちょっと工夫してみて。女：わかりました。...男：そう。じゃあ、書き直したらまた見せてね。女：はい。」",
      "explanation": "Đáp án đúng là Hình 3 (袖 - Tay áo).\n- Trưởng phòng khen kiểu dáng túi áo (Hình 4) và tán thành ý tưởng khuy nhỏ (Hình 2), cổ áo to tháo rời được (Hình 1).\n- Riêng phần tay áo (袖 - Hình 3) thì bị chê là hơi trống trải (ちょっと寂しい) và yêu cầu thiết kế thêm chi tiết rồi vẽ lại (書き直したらまた見せてね).\n- Do đó vị trí cần vẽ lại là phần tay áo (Hình 3).",
      "scriptJp": "<p><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>課長<rt>かちょう</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しいコートのアイデア<ruby>書<rt>か</rt></ruby>いてみたので、<ruby>見<rt>み</rt></ruby>ていただけますか？<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> うーん。ボタンは<ruby>小<rt>ちい</rt></ruby>さくしたんだね。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> はい、<ruby>流行<rt>りゅうこう</rt></ruby>を<ruby>意識<rt>いしき</rt></ruby>しました。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> そう。このポケットの<ruby>形<rt>かたち</rt></ruby>、いいね。<strong>だけど、<ruby>袖<rt>そで</rt></ruby>のところ、ちょっと<ruby>寂<rt>さび</rt></ruby>しいな。ここ、もうちょっと<ruby>工夫<rt>くふう</rt></ruby>してみて。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> わかりました。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>襟<rt>えり</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きめだね。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> はい、つけたり<ruby>外<rt>はず</rt></ruby>したりできるようにしました。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> そう。じゃあ、<strong><ruby>書<rt>か</rt></ruby>き<ruby>直<rt>なお</rt></ruby>したらまた<ruby>見<rt>み</rt></ruby>せてね。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> はい。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、どこを<ruby>書<rt>か</rt></ruby>き<ruby>直<rt>なお</rt></ruby>しますか。</p>",
      "scriptVi": "Nữ: Trưởng phòng, em đã phác thảo ý tưởng cho chiếc áo khoác mới, nhờ trưởng phòng xem giúp em với ạ?\nNam: Ừm. Cúc áo em làm nhỏ lại nhỉ.\nNữ: Dạ vâng, em chú trọng theo xu hướng thịnh hành ạ.\nNam: Ừ. Dáng túi này đẹp đấy. Nhưng mà phần ống tay áo trông hơi đơn điệu quá. Chỗ này em thử tạo thêm điểm nhấn sáng tạo chút xem.\nNữ: Vâng, em hiểu rồi ạ.\nNam: Cổ áo thì dáng to nhỉ.\nNữ: Dạ, em thiết kế để có thể tháo ra lắp vào linh hoạt ạ.\nNam: Ừ. Vậy khi nào vẽ sửa lại xong thì mang cho tôi xem nhé.\nNữ: Vâng ạ.\nCâu hỏi: Người phụ nữ sẽ vẽ lại/sửa lại vị trí nào?"
    },
    {
      "id": 15,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai3/15.mp3",
      "question": "3番：<ruby>講演<rt>こうえん</rt></ruby><ruby>会<rt>かい</rt></ruby>の<ruby>会場<rt>かいじょう</rt></ruby>で、<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、まず<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。",
      "questionVi": "Tại hội trường buổi diễn thuyết, một người phụ nữ và một người đàn ông đang nói chuyện. Người đàn ông trước tiên phải làm việc gì?",
      "options": [
        "しりょうをうけつけに<ruby>運<rt>はこ</rt></ruby>ぶ",
        "しりょうをさんかしゃの<ruby>机<rt>つくえ</rt></ruby>におく",
        "ビデオを<ruby>会場<rt>かいじょう</rt></ruby>に<ruby>運<rt>はこ</rt></ruby>ぶ",
        "ビデオのいちを<ruby>決<rt>き</rt></ruby>める"
      ],
      "optionsAnalysis": [
        {
          "option": "しりょうをうけつけに運ぶ",
          "meaning": "Mang tài liệu ra quầy lễ tân.",
          "analysis": "Sai: Ban đầu định phát ở lễ tân nhưng đã đổi phương án sang đặt sẵn lên bàn ('受付で配る予定だったんだけど、参加者の机の上に置いておくことになった')."
        },
        {
          "option": "しりょうをさんかしゃの机におく",
          "meaning": "Đặt tài liệu lên bàn của người tham dự.",
          "analysis": "ĐÚNG: Người phụ nữ nhờ người nam đi đặt tài liệu lên từng bàn của người tham gia trước khi hội trường đông đúc và bận rộn ('参加者の机の上に置いておくことになったから、忙しくなる前にやっておいてもらえますか')."
        },
        {
          "option": "ビデオを会場に運ぶ",
          "meaning": "Vận chuyển máy quay phim tới hội trường.",
          "analysis": "Sai: Máy quay phim đã được mang tới hội trường từ trước rồi ('ビデオは会場に運んであるから')."
        },
        {
          "option": "ビデオのいちを決める",
          "meaning": "Quyết định vị trí đặt máy quay phim.",
          "analysis": "Sai: Việc này khoảng 1 tiếng nữa khi diễn giả Yamamoto đến thì mới hỏi ý kiến thầy ('1時間くらいしたら、いらっしゃるから')."
        }
      ],
      "answer": 1,
      "evidence": "「女：その資料、受付で配る予定だったんだけど、参加者の机の上に置いておくことになったから、忙しくなる前にやっておいてもらえますか？男：わかりました。...女：ビデオは会場に運んであるから、先生がいらっしゃったら、どこから撮ればいいかお聞きして。1時間くらいしたら、いらっしゃるから。男：あ、ビデオの位置ですね。わかりました。」",
      "explanation": "Đáp án đúng là 2 (しりょうをさんかしゃの机におく).\n- Người phụ nữ giao việc: 'Tài liệu đổi kế hoạch sang đặt sẵn trên bàn người tham gia, anh làm trước khi bận rộn nhé' -> Người nam nhận lời làm ngay.\n- Máy quay thì đã mang đến rồi, còn chọn góc đặt máy quay thì phải đợi 1 tiếng nữa thầy Yamamoto đến mới hỏi được.\n- Vì vậy việc người nam phải làm đầu tiên là đặt tài liệu lên bàn người tham dự.",
      "scriptJp": "<p><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>本田<rt>ほんだ</rt></ruby>さん、<ruby>午後<rt>ごご</rt></ruby>の<ruby>山本<rt>やまもと</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の<ruby>講演<rt>こうえん</rt></ruby><ruby>会<rt>かい</rt></ruby>だけど、<ruby>資料<rt>しりょう</rt></ruby>のコピーはできていますか？<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> はい、<ruby>準備<rt>じゅんび</rt></ruby>してあります。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> その<ruby>資料<rt>しりょう</rt></ruby>、<ruby>受付<rt>うけつけ</rt></ruby>で<ruby>配<rt>くば</rt></ruby>る<ruby>予定<rt>よてい</rt></ruby>だったんだけど、<strong><ruby>参加<rt>さんか</rt></ruby><ruby>者<rt>しゃ</rt></ruby>の<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>置<rt>お</rt></ruby>いておくことになったから、<ruby>忙<rt>いそが</rt></ruby>しくなる<ruby>前<rt>まえ</rt></ruby>にやっておいてもらえますか？</strong><br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> わかりました。あの、<ruby>今日<rt>きょう</rt></ruby>の<ruby>講演<rt>こうえん</rt></ruby>はビデオで<ruby>撮<rt>と</rt></ruby>るんですよね？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> うん。<ruby>ビデオ<rt>びでお</rt></ruby>は<ruby>会場<rt>かいじょう</rt></ruby>に<ruby>運<rt>はこ</rt></ruby>んであるから、<ruby>先生<rt>せんせい</rt></ruby>がいらっしゃったら、どこから<ruby>撮<rt>と</rt></ruby>ればいいかお<ruby>聞<rt>き</rt></ruby>きして。1<ruby>時間<rt>じかん</rt></ruby>くらいしたら、いらっしゃるから。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> あ、ビデオの<ruby>位置<rt>いち</rt></ruby>ですね。わかりました。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、まず<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。</p>",
      "scriptVi": "Nữ: Anh Honda, về buổi diễn thuyết chiều nay của thầy Yamamoto, tài liệu đã photo xong chưa anh?\nNam: Vâng, tôi đã chuẩn bị sẵn rồi.\nNữ: Số tài liệu đó ban đầu định phát ở bàn lễ tân, nhưng giờ đổi thành đặt sẵn lên bàn của người tham gia rồi, anh làm trước khi hội trường bận rộn nhé?\nNam: Vâng, tôi hiểu rồi. À, buổi diễn thuyết hôm nay có quay video lại đúng không chị?\nNữ: Ừ. Máy quay thì đã chuyển tới hội trường rồi, khi nào thầy đến thì anh hỏi thầy xem nên quay từ góc nào nhé. Khoảng 1 tiếng nữa thầy mới tới.\nNam: À, vị trí đặt máy quay đúng không ạ. Tôi rõ rồi.\nCâu hỏi: Người đàn ông trước tiên phải làm việc gì?"
    },
    {
      "id": 16,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai3/16.mp3",
      "question": "4番：<ruby>大学<rt>だいがく</rt></ruby>で、ダンス<ruby>部<rt>ぶ</rt></ruby>の<ruby>男<rt>おとこ</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>と<ruby>女<rt>おんな</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>女<rt>おんな</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>は、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。",
      "questionVi": "Ở trường đại học, một nam sinh và một nữ sinh thuộc CLB khiêu vũ đang nói chuyện. Nữ sinh phải làm việc gì?",
      "options": [
        "ぶいんにメールを<ruby>送<rt>おく</rt></ruby>る",
        "<ruby>何<rt>なに</rt></ruby>をおどるか<ruby>決<rt>き</rt></ruby>める",
        "<ruby>人数<rt>にんずう</rt></ruby>をかくにんする",
        "お<ruby>茶<rt>ちゃ</rt></ruby>とおかしを<ruby>買<rt>か</rt></ruby>う"
      ],
      "optionsAnalysis": [
        {
          "option": "ぶいんにメールを送る",
          "meaning": "Gửi email thông báo cho toàn thể thành viên CLB.",
          "analysis": "Sai: Nam sinh là chủ nhiệm CLB nên quyết định sẽ đích thân tự gửi email thông báo ban đầu ('最初のメールは、部長の僕から出した方がいいよね')."
        },
        {
          "option": "何をおどるか決める",
          "meaning": "Quyết định sẽ nhảy bài gì.",
          "analysis": "Sai: Nam sinh đã quyết định chọn bài nhảy từng vô địch giải mùa hè ('夏の大会で優勝した時のダンスにしよう')."
        },
        {
          "option": "人数をかくにんする",
          "meaning": "Xác nhận số lượng người sẽ tham gia.",
          "analysis": "ĐÚNG: Nam sinh yêu cầu mọi người gửi thư hồi đáp cho nữ sinh (Mori) và nhờ cô tổng hợp, xác nhận sĩ số ('返事は森さんに送ってもらうようにするから、人数の確認をお願い... わかった')."
        },
        {
          "option": "お茶とおかしを買う",
          "meaning": "Đi mua trà và bánh kẹo.",
          "analysis": "Sai: Đợi sau khi xác nhận rõ số người tham gia thì mới tính tiếp có liên hoan mua bánh kẹo hay không ('何をするかは、人数がわかってから決めよう')."
        }
      ],
      "answer": 2,
      "evidence": "「男：あ、やっぱり最初のメールは、部長の僕から出した方がいいよね。来られるかどうか、返事は森さんに送ってもらうようにするから、人数の確認をお願い。女：わかった。...男：何をするかは、人数がわかってから決めよう。」",
      "explanation": "Đáp án đúng là 3 (人数をかくにんする).\n- Nam sinh (trưởng CLB) nói bạn Kato sắp nghỉ, cần tổ chức buổi nhảy chia tay.\n- Bài nhảy đã được chọn (bài vô địch mùa hè).\n- Email ban đầu thì trưởng CLB sẽ tự gửi đi, nhưng hồi âm tham gia sẽ gửi về cho bạn nữ (Mori) nên Mori có nhiệm vụ kiểm tra và xác nhận sĩ số người đến (人数の確認をお願い -> わかった).\n- Bánh kẹo ăn uống thì chờ biết sĩ số mới quyết định.",
      "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>森<rt>もり</rt></ruby>さん、<ruby>加藤<rt>かとう</rt></ruby>くんが<ruby>今月<rt>こんげつ</rt></ruby>でダンス<ruby>部<rt>ぶ</rt></ruby>をやめるって<ruby>聞<rt>き</rt></ruby>いた？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> うん、お<ruby>家<rt>うち</rt></ruby>の<ruby>事情<rt>じじょう</rt></ruby>なんだってね。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>今月<rt>こんげつ</rt></ruby><ruby>末<rt>まつ</rt></ruby>の<ruby>練習<rt>れんしゅう</rt></ruby><ruby>日<rt>び</rt></ruby>が、<ruby>加藤<rt>かとう</rt></ruby>くんが<ruby>来<rt>く</rt></ruby>るの<ruby>最後<rt>さいご</rt></ruby>になるから、みんなで<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>踊<rt>おど</rt></ruby>りたいね。<ruby>悪<rt>わる</rt></ruby>いけど、<ruby>部員<rt>ぶいん</rt></ruby>のみんなにメールで<ruby>連絡<rt>れんらく</rt></ruby>を<ruby>回<rt>まわ</rt></ruby>してくれる？「<ruby>必<rt>かなら</rt></ruby>ず<ruby>来<rt>き</rt></ruby>て」って。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> わかった。<ruby>何<rt>なに</rt></ruby>を<ruby>踊<rt>おど</rt></ruby>るか<ruby>決<rt>き</rt></ruby>めなくちゃね。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> うん、<ruby>夏<rt>なつ</rt></ruby>の<ruby>大会<rt>たいかい</rt></ruby>で<ruby>優勝<rt>ゆうしょう</rt></ruby>した<ruby>時<rt>とき</rt></ruby>のダンスにしよう。<strong>あ、やっぱり<ruby>最初<rt>さいしょ</rt></ruby>のメールは、<ruby>部長<rt>ぶちょう</rt></ruby>の<ruby>僕<rt>ぼく</rt></ruby>から<ruby>出<rt>だ</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がいいよね。<ruby>来<rt>こ</rt></ruby>られるかどうか、<ruby>返事<rt>へんじ</rt></ruby>は<ruby>森<rt>もり</rt></ruby>さんに<ruby>送<rt>おく</rt></ruby>ってもらうようにするから、<ruby>人数<rt>にんずう</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>い。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> わかった。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>終<rt>お</rt></ruby>わった<ruby>後<rt>あと</rt></ruby>で、みんなで<ruby>何<rt>なに</rt></ruby>かしたいね。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> うん。お<ruby>茶<rt>ちゃ</rt></ruby>とかお<ruby>菓子<rt>かし</rt></ruby>、<ruby>買<rt>か</rt></ruby>っておこうか？<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>何<rt>なに</rt></ruby>をするかは、<ruby>人数<rt>にんずう</rt></ruby>がわかってから<ruby>決<rt>き</rt></ruby>めよう。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>は、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。</p>",
      "scriptVi": "Nam sinh: Mori này, em nghe tin bạn Kato tháng này sẽ rời CLB khiêu vũ chưa?\nNữ sinh: Dạ em nghe rồi, hình như là do việc gia đình.\nNam sinh: Buổi tập cuối tháng này là buổi cuối cùng Kato đến, nên anh muốn mọi người cùng nhau nhảy một buổi. Phiền em gửi email thông báo cho tất cả thành viên trong CLB là 'Nhất định phải đến' nhé?\nNữ sinh: Vâng. Mình cũng phải chọn xem sẽ nhảy bài gì nữa nhỉ.\nNam sinh: Ừ, lấy bài nhảy hồi tụi mình vô địch giải mùa hè đi. À mà, email đầu tiên chắc do anh làm trưởng CLB gửi thì tốt hơn. Anh sẽ bảo mọi người gửi hồi âm xem có đến được không cho em, nhờ em kiểm tra và chốt sĩ số nhé.\nNữ sinh: Vâng, em hiểu rồi.\nNam sinh: Sau khi nhảy xong anh cũng muốn tụi mình tổ chức gì đó cùng nhau.\nNữ sinh: Vâng. Em mua sẵn trà với bánh kẹo nhé?\nNam sinh: Làm gì thì để biết chính xác số người tham gia rồi tính sau em ạ.\nCâu hỏi: Nữ sinh phải làm việc gì?"
    },
    {
      "id": 17,
      "subId": "5番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai3/17.mp3",
      "question": "5番：<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が、<ruby>駅<rt>えき</rt></ruby>に<ruby>電話<rt>でんわ</rt></ruby>しています。<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はどうしますか。",
      "questionVi": "Người phụ nữ đang gọi điện thoại đến nhà ga. Người phụ nữ sẽ làm gì?",
      "options": [
        "<ruby>今日<rt>きょう</rt></ruby>、<ruby>山川<rt>やまかわ</rt></ruby><ruby>駅<rt>えき</rt></ruby>のまどぐちに<ruby>行<rt>い</rt></ruby>く",
        "<ruby>今日<rt>きょう</rt></ruby>、<ruby>南<rt>みなみ</rt></ruby><ruby>駅<rt>えき</rt></ruby>のわすれものセンターに<ruby>行<rt>い</rt></ruby>く",
        "<ruby>明日<rt>あした</rt></ruby>、<ruby>山川<rt>やまかわ</rt></ruby><ruby>駅<rt>えき</rt></ruby>のまどぐちに<ruby>行<rt>い</rt></ruby>く",
        "<ruby>明日<rt>あした</rt></ruby>、<ruby>南<rt>みなみ</rt></ruby><ruby>駅<rt>えき</rt></ruby>のわすれもののセンターに<ruby>行<rt>い</rt></ruby>く"
      ],
      "optionsAnalysis": [
        {
          "option": "今日、山川駅のまどぐちに行く",
          "meaning": "Hôm nay đến quầy phục vụ ga Yamakawa.",
          "analysis": "Sai: Người phụ nữ nói hôm nay dù thế nào cũng không thể đi được ('今日はどうしても行けない')."
        },
        {
          "option": "今日、南駅のわすれものセンターに行く",
          "meaning": "Hôm nay đến trung tâm đồ thất lạc ga Minami.",
          "analysis": "Sai: Trong ngày hôm nay đồ vẫn ở ga Yamakawa, sang ngày mai mới chuyển sang ga Minami."
        },
        {
          "option": "明日、山川駅のまどぐちに行く",
          "meaning": "Ngày mai đến quầy phục vụ ga Yamakawa.",
          "analysis": "Sai: Từ ngày hôm sau, đồ thất lạc bắt buộc phải chuyển sang trung tâm đồ thất lạc ở ga Minami chứ không giữ lại ga Yamakawa ('翌日以降、忘れ物はすべて南駅で受け取っていただくことになってるんですよ')."
        },
        {
          "option": "明日、南駅のわすれもののセンターに行く",
          "meaning": "Ngày mai đến trung tâm đồ thất lạc ở ga Minami.",
          "analysis": "ĐÚNG: Do hôm nay không thể đi lấy được và ngày mai đồ bị chuyển sang trung tâm ga Minami nên cô ấy chấp nhận ngày mai sẽ đến ga Minami để lấy lại vé tháng ('翌日以降、忘れ物はすべて南駅で... 今日はどうしても行けないので、仕方ないですね。わかりました')."
        }
      ],
      "answer": 3,
      "evidence": "「男：今日中でしたら、この山川駅の窓口でお預かりしているんですが、次の日からは全部、南駅の忘れ物センターに移すことになっていますので、明日以降は南駅に取りに行ってください。...翌日以降、忘れ物はすべて南駅で受け取っていただくことになってるんですよ。女：そうですか。今日はどうしても行けないので、仕方ないですね。わかりました。」",
      "explanation": "Đáp án đúng là 4 (明日、南駅のわすれもののセンターに行く).\n- Người phụ nữ làm rơi vé tháng ở ga Yamakawa và ga đã nhặt được.\n- Quy định: Trong ngày thì lấy ở ga Yamakawa, nhưng sang ngày hôm sau thì đồ bị chuyển về Trung tâm đồ thất lạc ga Minami (南駅の忘れ物センター).\n- Vì hôm nay cô không thể đi lấy được, cô đồng ý ngày mai sẽ sang ga Minami để nhận lại vé.",
      "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> はい、<ruby>山川<rt>やまかわ</rt></ruby><ruby>駅<rt>えき</rt></ruby>です。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> すみません。<ruby>今日<rt>きょう</rt></ruby>、<ruby>山川<rt>やまかわ</rt></ruby><ruby>駅<rt>えき</rt></ruby>を<ruby>出<rt>で</rt></ruby>た<ruby>後<rt>あと</rt></ruby>、<ruby>定期<rt>ていき</rt></ruby><ruby>券<rt>けん</rt></ruby>がないことに<ruby>気<rt>き</rt></ruby>づいたんです。<ruby>駅<rt>えき</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くの<ruby>交番<rt>こうばん</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってみたんですが、なくて……。あ、<ruby>青木<rt>あおき</rt></ruby>ひろこと<ruby>申<rt>もう</rt></ruby>します。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>定期<rt>ていき</rt></ruby><ruby>券<rt>けん</rt></ruby>ですね。ちょっと<ruby>待<rt>ま</rt></ruby>ってください。……ああ、<ruby>届<rt>とど</rt></ruby>いてますよ。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> よかったー！ないと<ruby>困<rt>こま</rt></ruby>るので、<ruby>明日<rt>あした</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>、<ruby>伺<rt>うかが</rt></ruby>います。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <strong><ruby>今日<rt>きょう</rt></ruby><ruby>中<rt>じゅう</rt></ruby>でしたら、この<ruby>山川<rt>やまかわ</rt></ruby><ruby>駅<rt>えき</rt></ruby>の<ruby>窓口<rt>まどぐち</rt></ruby>でお<ruby>預<rt>あず</rt></ruby>かりしているんですが、<ruby>次<rt>つぎ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>からは<ruby>全部<rt>ぜんぶ</rt></ruby>、<ruby>南<rt>みなみ</rt></ruby><ruby>駅<rt>えき</rt></ruby>の<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>センターに<ruby>移<rt>うつ</rt></ruby>すことになっていますので、<ruby>明日<rt>あした</rt></ruby><ruby>以降<rt>いこう</rt></ruby>は<ruby>南<rt>みなみ</rt></ruby><ruby>駅<rt>えき</rt></ruby>に<ruby>取<rt>と</rt></ruby>りに<ruby>行<rt>い</rt></ruby>ってください。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> え？<ruby>明日<rt>あした</rt></ruby>、<ruby>山川<rt>やまかわ</rt></ruby><ruby>駅<rt>えき</rt></ruby>に<ruby>行<rt>い</rt></ruby>くので、<ruby>置<rt>お</rt></ruby>いておいていただけませんか？<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありません。<strong><ruby>翌日<rt>よくじつ</rt></ruby><ruby>以降<rt>いこう</rt></ruby>、<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>はすべて<ruby>南<rt>みなみ</rt></ruby><ruby>駅<rt>えき</rt></ruby>でお<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>りいただくことになってるんですよ。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> そうですか。<strong><ruby>今日<rt>きょう</rt></ruby>はどうしても<ruby>行<rt>い</rt></ruby>けないので、<ruby>仕方<rt>しかた</rt></ruby>ないですね。わかりました。</strong><br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はどうしますか。</p>",
      "scriptVi": "Nhân viên: Vâng, ga Yamakawa xin nghe.\nNữ: Xin lỗi anh, hôm nay sau khi ra khỏi ga Yamakawa tôi mới nhận ra là bị mất vé tháng. Tôi có ra đồn công an gần ga nhưng không thấy... Tôi tên là Aoki Hiroko ạ.\nNhân viên: Vé tháng phải không ạ. Xin chị đợi một lát... À, có người nhặt được đem nộp ở đây rồi chị nhé.\nNữ: May quá! Không có vé thì bất tiện lắm nên sáng mai tôi sẽ ghé ga lấy ạ.\nNhân viên: Nếu trong ngày hôm nay thì ga Yamakawa chúng tôi có giữ tại quầy, nhưng sang ngày mai toàn bộ đồ thất lạc sẽ chuyển về Trung tâm đồ thất lạc ở ga Minami, nên từ ngày mai trở đi xin chị sang ga Minami nhận nhé.\nNữ: Ơ? Ngày mai tôi có việc qua ga Yamakawa, ga giữ lại giúp tôi có được không ạ?\nNhân viên: Thành thật xin lỗi chị. Từ ngày hôm sau trở đi toàn bộ đồ thất lạc đều bắt buộc phải nhận tại ga Minami ạ.\nNữ: Vậy sao. Hôm nay tôi bận việc không thể nào đi được nên đành chịu vậy. Tôi hiểu rồi ạ.\nCâu hỏi: Người phụ nữ sẽ làm gì?"
    },
    {
      "id": 18,
      "subId": "6番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai3/18.mp3",
      "question": "6番：カルチャーセンターの<ruby>話<rt>はな</rt></ruby>し<ruby>方<rt>かた</rt></ruby><ruby>教室<rt>きょうしつ</rt></ruby>で、<ruby>先生<rt>せんせい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>参加<rt>さんか</rt></ruby><ruby>者<rt>しゃ</rt></ruby>は<ruby>今日<rt>きょう</rt></ruby>、<ruby>隣<rt>となり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>のスピーチを<ruby>聞<rt>き</rt></ruby>いて、<ruby>何<rt>なに</rt></ruby>をしますか。",
      "questionVi": "Tại lớp học kỹ năng nói chuyện ở trung tâm văn hóa, giáo viên đang nói chuyện. Hôm nay sau khi nghe bài phát biểu của người ngồi bên cạnh, học viên sẽ làm gì?",
      "options": [
        "ことばの<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>をなおす",
        "ないようについて<ruby>質問<rt>しつもん</rt></ruby>する",
        "しせいについて<ruby>注意<rt>ちゅうい</rt></ruby>する",
        "<ruby>話<rt>はな</rt></ruby>すはやさをチェックする"
      ],
      "optionsAnalysis": [
        {
          "option": "ことばの使い方をなおす",
          "meaning": "Sửa cách dùng từ ngữ.",
          "analysis": "Sai: Việc sửa cách dùng từ ngữ đã hoàn thành trong buổi học tuần trước ('先週は、話したいことを書いて、言葉の使い方も直しましたね')."
        },
        {
          "option": "ないようについて質問する",
          "meaning": "Đặt câu hỏi về nội dung bài nói.",
          "analysis": "ĐÚNG: Giáo viên yêu cầu học viên hôm nay sau khi nghe người bên cạnh nói thì bắt buộc phải đặt câu hỏi về nội dung bài phát biểu đó ('相手の話を聞いて、内容について何か必ず質問してください')."
        },
        {
          "option": "しせいについて注意する",
          "meaning": "Nhắc nhở và chú ý về tư thế đứng.",
          "analysis": "Sai: Nội dung tư thế đứng sang tuần sau mới học ('立ち方など、姿勢については来週やります')."
        },
        {
          "option": "話すはやさをチェックする",
          "meaning": "Kiểm tra tốc độ nói chuyện.",
          "analysis": "Sai: Tốc độ nói thì về nhà tự bấm đồng hồ kiểm tra ('話す速さは、うちで時計を見ながらチェックしてくださいね')."
        }
      ],
      "answer": 1,
      "evidence": "「先生：今日は、隣の人と二人で練習をします。お互いに準備した内容を話しましょう。相手の話を聞いて、内容について何か必ず質問してください。質問を考えることが、自分のスピーチをよくするヒントにもなりますよ。立ち方など、姿勢については来週やります。話す速さは、うちで時計を見ながらチェックしてくださいね。」",
      "explanation": "Đáp án đúng là 2 (ないようについて質問する).\n- Giáo viên phân chia lộ trình:\n  - Tuần trước: Viết nội dung và sửa cách dùng từ (言葉の使い方).\n  - Tuần tới: Luyện tư thế đứng (姿勢).\n  - Về nhà: Tự xem đồng hồ đo tốc độ nói (話す速さ).\n  - Hôm nay: Luyện tập cặp đôi, sau khi nghe người bên cạnh nói thì nhất định phải đặt câu hỏi về nội dung (内容について何か必ず質問してください).",
      "scriptJp": "<p><strong><ruby>先生<rt>せんせい</rt></ruby>：</strong> <ruby>今日<rt>きょう</rt></ruby>は、<ruby>先週<rt>せんしゅう</rt></ruby>に<ruby>続<rt>つづ</rt></ruby>き、スピーチの<ruby>練習<rt>れんしゅう</rt></ruby>をします。<ruby>先週<rt>せんしゅう</rt></ruby>は、<ruby>話<rt>はな</rt></ruby>したいことを<ruby>書<rt>か</rt></ruby>いて、<ruby>言葉<rt>ことば</rt></ruby>の<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>も<ruby>直<rt>なお</rt></ruby>しましたね。<strong><ruby>今日<rt>きょう</rt></ruby>は、<ruby>隣<rt>となり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>で<ruby>練習<rt>れんしゅう</rt></ruby>をします。お<ruby>互<rt>たが</rt></ruby>いに<ruby>準備<rt>じゅんび</rt></ruby>した<ruby>内容<rt>ないよう</rt></ruby>を<ruby>話<rt>はな</rt></ruby>しましょう。<ruby>相手<rt>あいて</rt></ruby>の<ruby>話<rt>はな</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いて、<ruby>内容<rt>ないよう</rt></ruby>について<ruby>何<rt>なに</rt></ruby>か<ruby>必<rt>かなら</rt></ruby>ず<ruby>質問<rt>しつもん</rt></ruby>してください。</strong><ruby>質問<rt>しつもん</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えることが、<ruby>自分<rt>じぶん</rt></ruby>のスピーチをよくするヒントにもなりますよ。<ruby>立<rt>た</rt></ruby>ち<ruby>方<rt>かた</rt></ruby>など、<ruby>姿勢<rt>しせい</rt></ruby>については<ruby>来週<rt>らいしゅう</rt></ruby>やります。<ruby>話<rt>はな</rt></ruby>す<ruby>速<rt>はや</rt></ruby>さは、うちで<ruby>時計<rt>とけい</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながらチェックしてくださいね。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>参加<rt>さんか</rt></ruby><ruby>者<rt>しゃ</rt></ruby>は<ruby>今日<rt>きょう</rt></ruby>、<ruby>隣<rt>となり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>のスピーチを<ruby>聞<rt>き</rt></ruby>いて、<ruby>何<rt>なに</rt></ruby>をしますか。</p>",
      "scriptVi": "Giáo viên: Hôm nay chúng ta tiếp tục buổi luyện tập phát biểu tuần trước nhé. Tuần trước các em đã viết nội dung muốn nói và sửa cách dùng từ rồi. Hôm nay chúng ta sẽ luyện tập theo cặp hai người với bạn ngồi cạnh. Các em hãy lần lượt nói nội dung mình đã chuẩn bị nhé. Khi lắng nghe bạn nói, các em hãy nhớ bắt buộc phải đặt câu hỏi về nội dung cho bạn. Việc suy nghĩ câu hỏi cũng sẽ là gợi ý để các em hoàn thiện bài phát biểu của chính mình đấy. Còn tư thế như cách đứng thì tuần sau chúng ta sẽ học. Tốc độ nói thì về nhà các em hãy vừa nhìn đồng hồ vừa kiểm tra nhé.\nCâu hỏi: Hôm nay sau khi nghe bài phát biểu của người ngồi bên cạnh, học viên sẽ làm gì?"
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_traloi-04",
  "level": "N3",
  "category": "nghe_traloi",
  "categoryName": "Nghe trả lời (課題理解)",
  "lessonNumber": 4,
  "title": "Bài 4: Luyện nghe hiểu trả lời (課題理解 第4回)",
  "description": "Dạng bài nghe hiểu yêu cầu hành động và nắm bắt nguyên nhân, mục đích (課題理解): Lắng nghe câu hỏi, phân tích lý do, mục đích và lựa chọn đáp án chính xác nhất.",
  "questions": [
    {
      "id": 19,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai4/19.mp3",
      "question": "1番：<ruby>大学<rt>だいがく</rt></ruby>の<ruby>事務所<rt>じむしょ</rt></ruby>で<ruby>事務所<rt>じむしょ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>学生<rt>がくせい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>事務所<rt>じむしょ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はこの<ruby>学生<rt>がくせい</rt></ruby>のことでどんなことを<ruby>心配<rt>しんぱい</rt></ruby>していますか。",
      "questionVi": "Tại văn phòng trường đại học, một nhân viên văn phòng và một sinh viên đang nói chuyện. Nhân viên văn phòng lo lắng điều gì về bạn sinh viên này?",
      "options": [
        "レポートがよくできていなかったこと",
        "アルバイトをしすぎていること",
        "<ruby>奨学金<rt>しょうがくきん</rt></ruby>のおうぼに<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わないこと",
        "<ruby>体<rt>からだ</rt></ruby>の<ruby>調子<rt>ちょうし</rt></ruby>がわるそうなこと"
      ],
      "optionsAnalysis": [
        {
          "option": "レポートがよくできていなかったこと",
          "meaning": "Việc bài báo cáo làm chưa tốt.",
          "analysis": "Sai: Nhân viên nói rõ nỗi lo không phải là về bài báo cáo ('私の心配はレポートのことじゃなくてね')."
        },
        {
          "option": "アルバイトをしすぎていること",
          "meaning": "Việc đi làm thêm quá nhiều / quá sức.",
          "analysis": "ĐÚNG: Nhân viên lo lắng sinh viên đi làm thêm quá nhiều dẫn đến quá bận rộn, đi học muộn, vắng tiết và dễ kiệt sức ('ちょっと忙しすぎるんじゃない？上田さんからはアルバイトのせいだって聞いてるけど... 体を壊したら大変だから、無理しないように')."
        },
        {
          "option": "奨学金のおうぼに間に合わないこと",
          "meaning": "Việc không kịp nộp hồ sơ xin học bổng.",
          "analysis": "Sai: Sinh viên đã thi học bổng nhưng bị trượt chứ không phải không kịp hạn nộp."
        },
        {
          "option": "体の調子がわるそうなこと",
          "meaning": "Việc trông tình trạng sức khỏe hiện tại có vẻ xấu.",
          "analysis": "Sai: Nhân viên nhắc nhở chung là đừng làm quá sức kẻo hại sức khỏe trong tương lai, còn nguyên nhân cốt lõi lo lắng là do em làm thêm quá nhiều."
        }
      ],
      "answer": 1,
      "evidence": "「職員：私の心配はレポートのことじゃなくてね。学生：あ、はい。職員：ちょっと忙しすぎるんじゃない？上田さんからはアルバイトのせいだって聞いてるけど。学生：ああ、はい。実はそうなんです。先日の奨学金の試験、落ちてしまいましたので。職員：そう。でも、体を壊したら大変だから、無理しないように。」",
      "explanation": "Đáp án đúng là 2 (アルバイトをしすぎていること).\n- Nhân viên văn phòng nhận thấy sinh viên gần đây hay đi muộn, vắng mặt trên lớp.\n- Nhân viên giải thích mối lo thực sự của mình là sinh viên quá bận rộn do làm thêm quá nhiều (アルバイトのせい / 忙しすぎる) sau khi thi trượt học bổng, đồng thời dặn dò đừng làm quá sức ảnh hưởng sức khỏe.",
      "scriptJp": "<p><strong><ruby>職員<rt>しょくいん</rt></ruby>：</strong> <ruby>加藤<rt>かとう</rt></ruby>さん、<ruby>最近<rt>さいきん</rt></ruby><ruby>授業<rt>じゅぎょう</rt></ruby>で<ruby>遅刻<rt>ちこく</rt></ruby>や<ruby>欠席<rt>けっせき</rt></ruby>することがあるみたいだけど。レポートも<ruby>上田<rt>うえだ</rt></ruby>さんに<ruby>出<rt>だ</rt></ruby>してもらったみたいだし。<br><strong><ruby>学生<rt>がくせい</rt></ruby>：</strong> あ、はい。でも、レポートはしっかり<ruby>自分<rt>じぶん</rt></ruby>で<ruby>書<rt>か</rt></ruby>きました。<br><strong><ruby>職員<rt>しょくいん</rt></ruby>：</strong> <strong><ruby>私<rt>わたし</rt></ruby>の<ruby>心配<rt>しんぱい</rt></ruby>はレポートのことじゃなくてね。</strong><br><strong><ruby>学生<rt>がくせい</rt></ruby>：</strong> あ、はい。<br><strong><ruby>職員<rt>しょくいん</rt></ruby>：</strong> <strong>ちょっと<ruby>忙<rt>いそが</rt></ruby>しすぎるんじゃない？<ruby>上田<rt>うえだ</rt></ruby>さんからはアルバイトのせいだって<ruby>聞<rt>き</rt></ruby>いてるけど。</strong><br><strong><ruby>学生<rt>がくせい</rt></ruby>：</strong> ああ、はい。<ruby>実<rt>じつ</rt></ruby>はそうなんです。<ruby>先日<rt>せんじつ</rt></ruby>の<ruby>奨学<rt>しょうがく</rt></ruby><ruby>金<rt>きん</rt></ruby>の<ruby>試験<rt>しけん</rt></ruby>、<ruby>落<rt>お</rt></ruby>ちてしまいましたので。<br><strong><ruby>職員<rt>しょくいん</rt></ruby>：</strong> そう。でも、<strong><ruby>体<rt>からだ</rt></ruby>を<ruby>壊<rt>こわ</rt></ruby>したら<ruby>大変<rt>たいへん</rt></ruby>だから、<ruby>無理<rt>むり</rt></ruby>しないように。</strong><br><strong><ruby>学生<rt>がくせい</rt></ruby>：</strong> <ruby>分<rt>わ</rt></ruby>かりました。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>事務所<rt>じむしょ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はこの<ruby>学生<rt>がくせい</rt></ruby>のことでどんなことを<ruby>心配<rt>しんぱい</rt></ruby>していますか。</p>",
      "scriptVi": "Nhân viên: Kato này, gần đây em có vẻ hay đi học muộn và nghỉ học nhỉ. Báo cáo cũng thấy nhờ bạn Ueda nộp hộ nữa.\nSinh viên: Dạ vâng, nhưng báo cáo là do chính em tự tay viết nghiêm túc đấy ạ.\nNhân viên: Điều tôi lo lắng không phải là chuyện bài báo cáo.\nSinh viên: Dạ vâng.\nNhân viên: Em có đang quá bận rộn không? Tôi nghe Ueda nói là do em đi làm thêm nhiều.\nSinh viên: Dạ vâng, thật ra đúng là như vậy ạ. Do đợt rồi em thi trượt học bổng nên phải đi làm thêm.\nNhân viên: Ra là vậy. Nhưng mà nếu làm kiệt sức tổn hại cơ thể thì khổ lắm, đừng gắng gượng quá nhé.\nSinh viên: Vâng, em hiểu rồi ạ.\nCâu hỏi: Nhân viên văn phòng lo lắng điều gì về bạn sinh viên này?"
    },
    {
      "id": 20,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai4/20.mp3",
      "question": "2番：テレビでアナウンサーがある<ruby>旅館<rt>りょかん</rt></ruby>について<ruby>話<rt>はな</rt></ruby>しています。この<ruby>旅館<rt>りょかん</rt></ruby>で<ruby>外国<rt>がいこく</rt></ruby>からの<ruby>客<rt>きゃく</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えたのはどうしてだと<ruby>言<rt>い</rt></ruby>っていますか。",
      "questionVi": "Trên truyền hình, phát thanh viên đang nói về một quán trọ truyền thống (ryokan). Quán trọ này lượng khách nước ngoài tăng lên là vì lý do gì?",
      "options": [
        "<ruby>外国<rt>がいこく</rt></ruby><ruby>語<rt>ご</rt></ruby>のパンフレットをおいたから",
        "ようしきのベッドをへやに<ruby>入<rt>い</rt></ruby>れたから",
        "<ruby>全部<rt>ぜんぶ</rt></ruby>のへやをたたみにかえたから",
        "<ruby>日本<rt>にほん</rt></ruby><ruby>料理<rt>りょうり</rt></ruby>の<ruby>教室<rt>きょうしつ</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めたから"
      ],
      "optionsAnalysis": [
        {
          "option": "外国語のパンフレットをおいたから",
          "meaning": "Vì đặt tờ rơi bằng tiếng nước ngoài.",
          "analysis": "Sai: Đây là xu hướng chung ở nhiều điểm du lịch được MC nhắc đến ('外国語のパンフレットを置いている観光地も多いですよね')."
        },
        {
          "option": "ようしきのベッドをへやに入れたから",
          "meaning": "Vì đổi sang phòng kiểu Tây và kê thêm giường.",
          "analysis": "Sai: Ryokan này làm ngược lại hoàn toàn so với các nơi khác làm phòng kiểu Tây."
        },
        {
          "option": "全部のへやをたたみにかえたから",
          "meaning": "Vì đã chuyển đổi toàn bộ phòng sang trải chiếu Tatami kiểu Nhật.",
          "analysis": "ĐÚNG: Năm ngoái ryokan này đã đổi tất cả các phòng thành phòng trải chiếu Tatami, thu hút rất đông khách nước ngoài muốn trải nghiệm văn hóa truyền thống Nhật Bản ('こちらでは去年、すべての部屋を畳にしました。すると、日本文化に興味を持つ外国の方にお客さんが増加しました')."
        },
        {
          "option": "日本料理の教室を始めたから",
          "meaning": "Vì đã mở lớp dạy nấu món ăn Nhật.",
          "analysis": "Sai: Lớp học nấu ăn Nhật Bản là kế hoạch dự định tổ chức trong thời gian tới chứ chưa diễn ra ('今後は日本料理の教室も開かれるそうです')."
        }
      ],
      "answer": 2,
      "evidence": "「アナウンサー：最近では外国の方が泊まりやすいよう、部屋を洋式にしてベッドを置くところがある一方、こちらでは去年、すべての部屋を畳にしました。すると、日本文化に興味を持つ外国の方が多く、お客さんが増加しました。」",
      "explanation": "Đáp án đúng là 3 (全部のへやをたたみにかえたから).\n- Trong khi nhiều nơi đổi sang phòng kiểu phương Tây để khách dễ ở, quán trọ 'Akai Ryokan' đã đổi toàn bộ các phòng sang trải chiếu Tatami truyền thống (すべての部屋を畳にしました).\n- Nhờ vậy quán thu hút nhiều khách nước ngoài yêu thích văn hóa Nhật Bản và lượng khách tăng lên đáng kể.",
      "scriptJp": "<p><strong>アナウンサー：</strong> <ruby>今<rt>いま</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>では<ruby>海外<rt>かいがい</rt></ruby>からの<ruby>観光<rt>かんこう</rt></ruby><ruby>客<rt>きゃく</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えています。<ruby>外国<rt>がいこく</rt></ruby><ruby>語<rt>ご</rt></ruby>のパンフレットを<ruby>置<rt>お</rt></ruby>いている<ruby>観光<rt>かんこう</rt></ruby><ruby>地<rt>ち</rt></ruby>も<ruby>多<rt>おお</rt></ruby>いですよね。<ruby>今日<rt>きょう</rt></ruby>は<ruby>外国<rt>がいこく</rt></ruby>の<ruby>方<rt>かた</rt></ruby>に<ruby>人気<rt>にんき</rt></ruby>の「<ruby>赤<rt>あか</rt></ruby>い<ruby>旅館<rt>りょかん</rt></ruby>」に<ruby>来<rt>き</rt></ruby>ています。<ruby>最近<rt>さいきん</rt></ruby>では<ruby>外国<rt>がいこく</rt></ruby>の<ruby>方<rt>かた</rt></ruby>が<ruby>泊<rt>と</rt></ruby>まりやすいよう、<ruby>部屋<rt>へや</rt></ruby>を<ruby>洋式<rt>ようしき</rt></ruby>にしてベッドを<ruby>置<rt>お</rt></ruby>くところがある<ruby>一方<rt>いっぽう</rt></ruby>、<strong>こちらでは<ruby>去年<rt>きょねん</rt></ruby>、すべての<ruby>部屋<rt>へや</rt></ruby>を<ruby>畳<rt>たたみ</rt></ruby>にしました。すると、<ruby>日本<rt>にほん</rt></ruby><ruby>文化<rt>ぶんか</rt></ruby>に<ruby>興味<rt>きょうみ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ<ruby>外国<rt>がいこく</rt></ruby>の<ruby>方<rt>かた</rt></ruby>が<ruby>多<rt>おお</rt></ruby>く、お<ruby>客<rt>きゃく</rt></ruby>さんが<ruby>増加<rt>ぞうか</rt></ruby>しました。</strong><ruby>今後<rt>こんご</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby><ruby>料理<rt>りょうり</rt></ruby>の<ruby>教室<rt>きょうしつ</rt></ruby>も<ruby>開<rt>ひら</rt></ruby>かれるそうです。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> この<ruby>旅館<rt>りょかん</rt></ruby>で<ruby>外国<rt>がいこく</rt></ruby>からの<ruby>客<rt>きゃく</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えたのはどうしてだと<ruby>言<rt>い</rt></ruby>っていますか。</p>",
      "scriptVi": "Phát thanh viên: Hiện nay tại Nhật Bản lượng khách du lịch nước ngoài đang tăng cao. Nhiều điểm du lịch đã đặt sẵn các tờ rơi bằng tiếng nước ngoài. Hôm nay chúng tôi có mặt tại 'Akai Ryokan', một quán trọ rất được du khách nước ngoài ưa chuộng. Gần đây, trong khi có những nơi cải tạo phòng theo phong cách phương Tây và kê thêm giường để khách nước ngoài dễ ở, thì tại đây năm ngoái đã đổi toàn bộ các phòng sang trải chiếu Tatami. Kết quả là có rất nhiều du khách nước ngoài yêu thích văn hóa Nhật Bản đã đến nghỉ ngơi và lượng khách đã tăng lên rõ rệt. Trong thời gian tới, nghe nói quán trọ còn mở thêm các lớp học nấu món ăn Nhật nữa.\nCâu hỏi: Quán trọ này lượng khách nước ngoài tăng lên là vì lý do gì?"
    },
    {
      "id": 21,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai4/21.mp3",
      "question": "3番：ラジオで<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>生<rt>なま</rt></ruby>ゴミの<ruby>匂<rt>にお</rt></ruby>いを<ruby>防<rt>ふせ</rt></ruby>ぐためにどうしていますか。",
      "questionVi": "Trên đài phát thanh, một người phụ nữ đang nói chuyện. Người phụ nữ làm cách nào để khử/ngăn mùi rác thực phẩm tươi?",
      "options": [
        "ごみをかわかす",
        "ごみをこおらせる",
        "ごみにすをかける",
        "ごみをにわにうめる"
      ],
      "optionsAnalysis": [
        {
          "option": "ごみをかわかす",
          "meaning": "Làm khô rác thực phẩm (bọc báo phơi ngoài ban công).",
          "analysis": "ĐÚNG: Người phụ nữ gói rác vào giấy báo và đem ra ban công phơi khô để ngăn mùi ('新聞紙に包んでベランダで乾かすようにしています')."
        },
        {
          "option": "ごみをこおらせる",
          "meaning": "Đóng băng rác trong tủ đông.",
          "analysis": "Sai: Người phụ nữ ngại để rác chung với thực phẩm trong ngăn đá ('生ゴミを食べ物と一緒に冷凍庫に入れるのはちょっと……と思ってしまうので')."
        },
        {
          "option": "ごみにすをかける",
          "meaning": "Rưới giấm ăn lên rác.",
          "analysis": "Sai: Người phụ nữ không thích mùi chua của giấm ('私は酢の酸っぱい匂いが苦手だし')."
        },
        {
          "option": "ごみをにわにうめる",
          "meaning": "Chôn rác trong sân vườn.",
          "analysis": "Sai: Người phụ nữ sống ở căn hộ chung cư nên không có sân vườn để chôn rác ('私のようにアパートに住んでると、それは無理ですからね')."
        }
      ],
      "answer": 0,
      "evidence": "「女：私は酢の酸っぱい匂いが苦手だし、生ゴミを食べ物と一緒に冷凍庫に入れるのはちょっと……と思ってしまうので、新聞紙に包んでベランダで乾かすようにしています。」",
      "explanation": "Đáp án đúng là 1 (ごみをかわかす).\n- Người phụ nữ phân tích các phương pháp: không thích mùi giấm chua, ngại để rác vào ngăn đá cùng đồ ăn, sống ở chung cư không có sân vườn để chôn rác.\n- Do đó phương pháp cô lựa chọn thực hiện là gói rác vào báo và phơi khô ngoài ban công (新聞紙に包んでベランダで乾かす).",
      "scriptJp": "<p><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>料理<rt>りょうり</rt></ruby>の<ruby>時<rt>とき</rt></ruby>や<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>残<rt>のこ</rt></ruby>りで<ruby>出<rt>で</rt></ruby>る<ruby>生<rt>なま</rt></ruby>ゴミ。<ruby>夏<rt>なつ</rt></ruby>は<ruby>匂<rt>にお</rt></ruby>いが<ruby>気<rt>き</rt></ruby>になりますね。<ruby>匂<rt>にお</rt></ruby>いを<ruby>防<rt>ふせ</rt></ruby>ぐには、<ruby>生<rt>なま</rt></ruby>ゴミをよく<ruby>乾<rt>かわ</rt></ruby>かす、<ruby>凍<rt>こお</rt></ruby>らせる、<ruby>調味<rt>ちょうみ</rt></ruby><ruby>料<rt>りょう</rt></ruby>の<ruby>酢<rt>す</rt></ruby>をかけて<ruby>匂<rt>にお</rt></ruby>いを<ruby>消<rt>け</rt></ruby>すなどの<ruby>方法<rt>ほうほう</rt></ruby>があります。<strong><ruby>私<rt>わたし</rt></ruby>は<ruby>酢<rt>す</rt></ruby>の<ruby>酸<rt>す</rt></ruby>っぱい<ruby>匂<rt>にお</rt></ruby>いが<ruby>苦手<rt>にがて</rt></ruby>だし、<ruby>生<rt>なま</rt></ruby>ゴミを<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>冷凍<rt>れいとう</rt></ruby><ruby>庫<rt>こ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れるのはちょっと……と<ruby>思<rt>おも</rt></ruby>ってしまうので、<ruby>新聞<rt>しんぶん</rt></ruby><ruby>紙<rt>し</rt></ruby>に<ruby>包<rt>つつ</rt></ruby>んでベランダで<ruby>乾<rt>かわ</rt></ruby>かすようにしています。</strong><ruby>家<rt>いえ</rt></ruby>に<ruby>庭<rt>にわ</rt></ruby>があれば、<ruby>庭<rt>にわ</rt></ruby>に<ruby>埋<rt>う</rt></ruby>めてしまうっていうのが<ruby>簡単<rt>かんたん</rt></ruby>だし、リサイクルにもなっていいんですが、<ruby>私<rt>わたし</rt></ruby>のようにアパートに<ruby>住<rt>す</rt></ruby>んでると、それは<ruby>無理<rt>むり</rt></ruby>ですからね。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>生<rt>なま</rt></ruby>ゴミの<ruby>匂<rt>にお</rt></ruby>いを<ruby>防<rt>ふせ</rt></ruby>ぐためにどうしていますか。</p>",
      "scriptVi": "Người phụ nữ: Rác hữu cơ sinh hoạt phát sinh khi nấu ăn hoặc từ thức ăn thừa vào mùa hè rất dễ bốc mùi khó chịu. Để khử mùi hôi, có các cách như phơi thật khô rác, làm đông đá trong tủ đông, hoặc rưới giấm ăn lên để khử mùi. Với tôi thì tôi không chịu được mùi chua của giấm, còn việc bỏ rác vào chung tủ đông với đồ ăn thì thấy hơi ngại, vì vậy tôi thường gói rác vào giấy báo rồi đem ra ban công phơi khô. Nếu nhà có sân vườn thì chôn rác xuống đất vừa nhanh vừa tái chế tốt, nhưng với người ở chung cư như tôi thì không thể làm cách đó được.\nCâu hỏi: Người phụ nữ làm cách nào để khử/ngăn mùi rác thực phẩm tươi?"
    },
    {
      "id": 22,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai4/22.mp3",
      "question": "4番：ラジオでアナウンサーと<ruby>作家<rt>さっか</rt></ruby>の<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>最近<rt>さいきん</rt></ruby><ruby>山<rt>やま</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>っている<ruby>一番<rt>いちばん</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。",
      "questionVi": "Trên đài phát thanh, phát thanh viên và một nam nhà văn đang nói chuyện. Mục đích chính gần đây khi leo núi của người đàn ông này là gì?",
      "options": [
        "<ruby>花<rt>はな</rt></ruby>をかんさつするため",
        "<ruby>小説<rt>しょうせつ</rt></ruby>のアイデアを<ruby>考<rt>かんが</rt></ruby>えるため",
        "<ruby>息子<rt>むすこ</rt></ruby>にじしんをつけさせるため",
        "<ruby>家族<rt>かぞく</rt></ruby>との<ruby>会話<rt>かいわ</rt></ruby>をふやすため"
      ],
      "optionsAnalysis": [
        {
          "option": "花をかんさつするため",
          "meaning": "Để quan sát hoa cỏ trên núi.",
          "analysis": "Sai: Đây là sở thích trước đây khi ông leo núi một mình ('以前から1人で山にはよく登っていたんですよ。花を観察したりしながら')."
        },
        {
          "option": "小説のアイデアを考えるため",
          "meaning": "Để tìm cảm hứng / ý tưởng viết tiểu thuyết.",
          "analysis": "Sai: Đây cũng là mục đích trước đây khi ông đi một mình ('自然の中にいると、小説のアイデアがどんどん湧いてきましてね... 私が山に登る目的は変わりましたが')."
        },
        {
          "option": "息子にじしんをつけさせるため",
          "meaning": "Để giúp con trai xây dựng sự tự tin qua trải nghiệm leo núi.",
          "analysis": "ĐÚNG: Khoảng nửa năm trước, ông nghe nói trải nghiệm kiên trì leo núi tới cùng rất tốt cho việc giáo dục con và muốn tạo cơ hội cho con trai có thêm tự tin nên đã rủ con cùng leo núi ('最後まで諦めないで山に登るという経験を繰り返すことが、子供の教育にいい... 前から何か自信になるような経験を与えてやりたいと思っていたので')."
        },
        {
          "option": "家族との会話をふやすため",
          "meaning": "Để tăng tương tác trò chuyện với gia đình.",
          "analysis": "Sai: Đây là hiệu quả vui mừng đạt được thêm sau các chuyến đi chứ không phải mục đích chính ban đầu ('以前より家族の会話も増えたような気がしますよ')."
        }
      ],
      "answer": 2,
      "evidence": "「作家：でも、半年くらい前に、最後まで諦めないで山に登るという経験を繰り返すことが、子供の教育にいいということを聞きましてね。それで、息子を誘ってみたんです。前から何か自信になるような経験を与えてやりたいと思っていたので。今では山に行く時はいつも一緒です。私が山に登る目的は変わりましたが……」",
      "explanation": "Đáp án đúng là 3 (息子にじしんをつけさせるため).\n- Trước đây: Nhà văn leo núi một mình để ngắm hoa và tìm ý tưởng viết tiểu thuyết.\n- Gần đây (từ nửa năm trước): Ông chuyển mục đích leo núi sang việc rèn luyện sự tự tin cho cậu con trai bằng trải nghiệm kiên trì leo núi tới cùng (自信になるような経験を与えてやりたい).\n- Do đó mục đích chính gần đây là giúp con trai có thêm sự tự tin.",
      "scriptJp": "<p><strong>アナウンサー：</strong> <ruby>皆<rt>みな</rt></ruby>さんこんにちは。<ruby>今日<rt>きょう</rt></ruby>お<ruby>話<rt>はな</rt></ruby>ししてくださるのは、<ruby>作家<rt>さっか</rt></ruby>の<ruby>山本<rt>やまもと</rt></ruby><ruby>大介<rt>だいすけ</rt></ruby>さんです。<ruby>早速<rt>さっそく</rt></ruby>ですが<ruby>山本<rt>やまもと</rt></ruby>さん、<ruby>休日<rt>きゅうじつ</rt></ruby>はどのように<ruby>過<rt>す</rt></ruby>ごしていらっしゃるんですか？<br><strong><ruby>作家<rt>さっか</rt></ruby>：</strong> <ruby>最近<rt>さいきん</rt></ruby>は、よく<ruby>息子<rt>むすこ</rt></ruby>と<ruby>山<rt>やま</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>りますね。<br><strong>アナウンサー：</strong> <ruby>山<rt>やま</rt></ruby>に？<br><strong><ruby>作家<rt>さっか</rt></ruby>：</strong> ええ。<ruby>以前<rt>いぜん</rt></ruby>から1<ruby>人<rt>り</rt></ruby>で<ruby>山<rt>やま</rt></ruby>にはよく<ruby>登<rt>のぼ</rt></ruby>っていたんですよ。<ruby>花<rt>はな</rt></ruby>を<ruby>観察<rt>かんさつ</rt></ruby>したりしながら、1<ruby>人<rt>り</rt></ruby>で<ruby>山道<rt>やまみち</rt></ruby>を<ruby>歩<rt>ある</rt></ruby>いていると<ruby>飽<rt>あ</rt></ruby>きなくて。<ruby>自然<rt>しぜん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>にいると、<ruby>小説<rt>しょうせつ</rt></ruby>のアイデアがどんどん<ruby>湧<rt>わ</rt></ruby>いてきましてね。<br><strong>アナウンサー：</strong> なるほど。<br><strong><ruby>作家<rt>さっか</rt></ruby>：</strong> でも、<ruby>半年<rt>はんとし</rt></ruby>くらい<ruby>前<rt>まえ</rt></ruby>に、<strong><ruby>最後<rt>さいご</rt></ruby>まで<ruby>諦<rt>あきら</rt></ruby>めないで<ruby>山<rt>やま</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>るという<ruby>経験<rt>けいけん</rt></ruby>を<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>すことが、<ruby>子供<rt>こども</rt></ruby>の<ruby>教育<rt>きょういく</rt></ruby>にいいということを<ruby>聞<rt>き</rt></ruby>きましてね。それで、<ruby>息子<rt>むすこ</rt></ruby>を<ruby>誘<rt>さそ</rt></ruby>ってみたんです。<ruby>前<rt>まえ</rt></ruby>から<ruby>何<rt>なに</rt></ruby>か<ruby>自信<rt>じしん</rt></ruby>になるような<ruby>経験<rt>けいけん</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えてやりたいと<ruby>思<rt>おも</rt></ruby>っていたので。</strong><ruby>今<rt>いま</rt></ruby>では<ruby>山<rt>やま</rt></ruby>に<ruby>行<rt>い</rt></ruby>く<ruby>時<rt>とき</rt></ruby>はいつも<ruby>一緒<rt>いっしょ</rt></ruby>です。<strong><ruby>私<rt>わたし</rt></ruby>が<ruby>山<rt>やま</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>る<ruby>目的<rt>もくてき</rt></ruby>は<ruby>変<rt>か</rt></ruby>わりましたが</strong>、やっぱり<ruby>山<rt>やま</rt></ruby>はいいなと<ruby>思<rt>おも</rt></ruby>います。うちに<ruby>帰<rt>かえ</rt></ruby>って<ruby>山<rt>やま</rt></ruby>の<ruby>話<rt>はな</rt></ruby>をしていると、<ruby>妻<rt>つま</rt></ruby>も<ruby>入<rt>はい</rt></ruby>ってきてね。<ruby>以前<rt>いぜん</rt></ruby>より<ruby>家族<rt>かぞく</rt></ruby>の<ruby>会話<rt>かいわ</rt></ruby>も<ruby>増<rt>ふ</rt></ruby>えたような<ruby>気<rt>き</rt></ruby>がしますよ。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>最近<rt>さいきん</rt></ruby><ruby>山<rt>やま</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>っている<ruby>一番<rt>いちばん</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。</p>",
      "scriptVi": "Phát thanh viên: Xin chào quý vị và các bạn. Khách mời trò chuyện với chúng ta hôm nay là nhà văn Yamamoto Daisuke. Không để quý vị chờ lâu, thưa anh Yamamoto, ngày nghỉ anh thường trải qua như thế nào ạ?\nNhà văn: Dạo gần đây tôi thường cùng con trai đi leo núi.\nPhát thanh viên: Đi leo núi ạ?\nNhà văn: Vâng. Trước đây tôi cũng hay leo núi một mình. Vừa đi vừa ngắm hoa cỏ, đi bộ trên đường mòn một mình không hề biết chán. Ở giữa thiên nhiên, ý tưởng viết tiểu thuyết cứ tuôn trào dồi dào.\nPhát thanh viên: Ra là vậy.\nNhà văn: Nhưng khoảng nửa năm trước, tôi nghe nói trải nghiệm kiên trì leo núi tới cùng mà không bỏ cuộc rất tốt cho việc giáo dục con trẻ. Thế là tôi rủ con trai cùng đi. Bởi từ trước tôi đã luôn muốn cho cháu trải nghiệm điều gì đó giúp cháu xây dựng sự tự tin. Giờ đây hễ đi leo núi là hai bố con lại đi cùng nhau. Mục đích leo núi của tôi giờ đã thay đổi, nhưng tôi vẫn thấy leo núi thật tuyệt vời. Về nhà kể chuyện leo núi thì vợ tôi cũng tham gia cùng, tôi cảm thấy không khí trò chuyện gia đình cũng vui vẻ và nhiều hơn trước kia.\nCâu hỏi: Mục đích chính gần đây khi leo núi của người đàn ông này là gì?"
    },
    {
      "id": 23,
      "subId": "5番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai4/23.mp3",
      "question": "5番：<ruby>電話<rt>でんわ</rt></ruby>で<ruby>夫<rt>おっと</rt></ruby>と<ruby>妻<rt>つま</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。2<ruby>人<rt>ふたり</rt></ruby>は<ruby>今日<rt>きょう</rt></ruby>の<ruby>晩<rt>ばん</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>をどうしますか。",
      "questionVi": "Qua điện thoại, hai vợ chồng đang nói chuyện. Hai người sẽ giải quyết bữa tối hôm nay như thế nào?",
      "options": [
        "レストランに<ruby>行<rt>い</rt></ruby>ってピザを<ruby>食<rt>た</rt></ruby>べる",
        "<ruby>家<rt>いえ</rt></ruby>でピザを<ruby>作<rt>つく</rt></ruby>って<ruby>食<rt>た</rt></ruby>べる",
        "ピザ<ruby>屋<rt>や</rt></ruby>のはいたつのピザを<ruby>食<rt>た</rt></ruby>べる",
        "レストランの<ruby>持<rt>も</rt></ruby>ち<ruby>帰<rt>かえ</rt></ruby>りのピザを<ruby>食<rt>た</rt></ruby>べる"
      ],
      "optionsAnalysis": [
        {
          "option": "レストランに行ってピザを食べる",
          "meaning": "Đến ăn trực tiếp tại nhà hàng.",
          "analysis": "Sai: Người vợ từ chối vì hôm nay thứ Sáu quán đông và cô muốn được nghỉ ngơi thoải mái ở nhà ('金曜日だし混んでるんじゃない？それに、今日はうちでゆっくりしたい気分')."
        },
        {
          "option": "家でピザを作って食べる",
          "meaning": "Tự làm pizza ăn tại nhà.",
          "analysis": "Sai: Người vợ thấy làm pizza khó và phải đi mua nguyên liệu phiền phức nên gạt bỏ phương án này."
        },
        {
          "option": "ピザ屋のはいたつのピザを食べる",
          "meaning": "Gọi tiệm pizza giao hàng tận nơi.",
          "analysis": "Sai: Ban đầu người vợ định gọi giao hàng, nhưng sau đó nhớ ra nhà hàng mới có bán mang về nên đổi ý."
        },
        {
          "option": "レストランの持ち帰りのピザを食べる",
          "meaning": "Mua pizza mang về (take-out) từ nhà hàng mới mở để ăn tại nhà.",
          "analysis": "ĐÚNG: Người vợ đề xuất đặt pizza mang về ở nhà hàng mới rồi nhờ chồng ghé lấy trên đường đi làm về, ăn thử ở nhà trước ('確かあの新しいレストラン、持ち帰りもできるはず。帰りに取りに寄ってくれるなら... まずはうちで食べてみて... 男：うん、わかった')."
        }
      ],
      "answer": 3,
      "evidence": "「女：確かあの新しいレストラン、持ち帰りもできるはず。帰りに取りに寄ってくれるなら、私注文しとくけど、どう？男：うーん、取りに行くのはいいんだけど、せっかく新しくできたレストランだし、それなら店で食べない？女：まずはうちで食べてみて、美味しかったら次、食べに行こうよ。男：うん、わかった。」",
      "explanation": "Đáp án đúng là 4 (レストランの持ち帰りのピザを食べる).\n- Chồng rủ ra tiệm ăn -> Vợ muốn ở nhà ăn pizza cho thoải mái.\n- Chồng bảo tự làm pizza -> Vợ ngại khó và phiền.\n- Cuối cùng vợ đề xuất đặt món mang về (持ち帰り) từ nhà hàng pizza mới mở, chồng tiện đường đi làm về ghé lấy về ăn tại nhà -> Cả hai đồng ý phương án này.",
      "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> もしもし、<ruby>今日<rt>きょう</rt></ruby><ruby>仕事<rt>しごと</rt></ruby><ruby>早<rt>はや</rt></ruby>く<ruby>終<rt>お</rt></ruby>わるから、<ruby>外<rt>そと</rt></ruby>で<ruby>夕飯<rt>ゆうはん</rt></ruby><ruby>食<rt>た</rt></ruby>べない？<ruby>近所<rt>きんじょ</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しくできたレストラン、ピザが<ruby>美味<rt>おい</rt></ruby>しいらしいって<ruby>言<rt>い</rt></ruby>ってたろ？<ruby>行<rt>い</rt></ruby>ってみようよ。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> うーん、ピザはいいんだけど、<ruby>金曜日<rt>きんようび</rt></ruby>だし<ruby>混<rt>こ</rt></ruby>んでるんじゃない？それに、<ruby>今日<rt>きょう</rt></ruby>はうちでゆっくりしたい<ruby>気分<rt>きぶん</rt></ruby>。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> そっか。なんかピザが<ruby>食<rt>た</rt></ruby>べたくなっちゃったから、うちで<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>作<rt>つく</rt></ruby>ろうよ。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> ピザって<ruby>作<rt>つく</rt></ruby>るの<ruby>難<rt>むずか</rt></ruby>しくない？<ruby>材料<rt>ざいりょう</rt></ruby>も<ruby>買<rt>か</rt></ruby>いに<ruby>行<rt>い</rt></ruby>かなきゃいけないし。<ruby>面倒<rt>めんどう</rt></ruby>くさいから、どこかピザ<ruby>屋<rt>や</rt></ruby>に<ruby>注文<rt>ちゅうもん</rt></ruby>して<ruby>配達<rt>はいたつ</rt></ruby>してもらおうよ。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> わかった。じゃあ<ruby>注文<rt>ちゅうもん</rt></ruby>しといてね。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <strong>あ、ちょっと<ruby>待<rt>ま</rt></ruby>って。<ruby>確<rt>たし</rt></ruby>かあの<ruby>新<rt>あたら</rt></ruby>しいレストラン、<ruby>持<rt>も</rt></ruby>ち<ruby>帰<rt>かえ</rt></ruby>りもできるはず。<ruby>帰<rt>かえ</rt></ruby>りに<ruby>取<rt>と</rt></ruby>りに<ruby>寄<rt>よ</rt></ruby>ってくれるなら、<ruby>私<rt>わたし</rt></ruby><ruby>注文<rt>ちゅうもん</rt></ruby>しとくけど、どう？</strong><br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> うーん、<ruby>取<rt>と</rt></ruby>りに<ruby>行<rt>い</rt></ruby>くのはいいんだけど、せっかく<ruby>新<rt>あたら</rt></ruby>しくできたレストランだし、それなら<ruby>店<rt>みせ</rt></ruby>で<ruby>食<rt>た</rt></ruby>べない？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <strong>まずはうちで<ruby>食<rt>た</rt></ruby>べてみて、<ruby>美味<rt>おい</rt></ruby>しかったら<ruby>次<rt>つぎ</rt></ruby>、<ruby>食<rt>た</rt></ruby>べに<ruby>行<rt>い</rt></ruby>こうよ。</strong><br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <strong>うん、わかった。</strong><br><strong><ruby>問<rt>と</rt></ruby>い：</strong> 2<ruby>人<rt>ふたり</rt></ruby>は<ruby>今日<rt>きょう</rt></ruby>の<ruby>晩<rt>ばん</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>をどうしますか。</p>",
      "scriptVi": "Chồng: Alo em à, hôm nay anh xong việc sớm, hay tụi mình đi ăn tối ở ngoài nhé? Nhà hàng mới mở gần nhà mình nghe nói pizza ngon lắm em từng bảo đúng không? Đi thử đi em.\nVợ: Ưm, pizza thì được đấy nhưng hôm nay là thứ Sáu chắc đông lắm. Với lại hôm nay em chỉ muốn ở nhà nghỉ ngơi thoải mái thôi.\nChồng: Thế à. Tự nhiên anh lại thèm pizza quá, hay tụi mình cùng làm ở nhà ăn đi.\nVợ: Pizza tự làm khó lắm anh ơi, lại phải đi mua nguyên liệu nữa. Phiền lắm, hay là đặt tiệm pizza nào đó ship về đi anh.\nChồng: Ừ thế cũng được, vậy em đặt nhé.\nVợ: À đợi chút đã anh. Hình như nhà hàng mới mở đó có cho mua mang về đấy. Nếu trên đường về anh ghé qua lấy được thì để em gọi điện đặt trước, anh thấy sao?\nChồng: Ừm, ghé lấy thì được thôi, nhưng mất công nhà hàng mới mở, hay là vào tiệm ăn luôn đi em?\nVợ: Cứ ăn thử ở nhà trước đã anh, nếu ngon thì lần sau tụi mình ra tiệm ăn sau.\nChồng: Ừ, thế cũng được.\nCâu hỏi: Hai người sẽ giải quyết bữa tối hôm nay như thế nào?"
    },
    {
      "id": 24,
      "subId": "6番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai4/24.mp3",
      "question": "6番：<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>女<rt>おんな</rt></ruby>の<ruby>社員<rt>しゃいん</rt></ruby>と<ruby>課長<rt>かちょう</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>課長<rt>かちょう</rt></ruby>はどうして<ruby>朝日<rt>あさひ</rt></ruby><ruby>電器<rt>でんき</rt></ruby>のプリンターを<ruby>買<rt>か</rt></ruby>うことにしましたか。",
      "questionVi": "Tại công ty, một nữ nhân viên và trưởng phòng đang nói chuyện. Tại sao trưởng phòng lại quyết định chọn mua máy in của hãng Điện khí Asahi?",
      "options": [
        "<ruby>小<rt>ちい</rt></ruby>さくてどこにでもおけるから",
        "きれいにいんさつできるから",
        "インクだいが<ruby>安<rt>やす</rt></ruby>いから",
        "<ruby>紙<rt>かみ</rt></ruby>を<ruby>一度<rt>いちど</rt></ruby>にたくさん<ruby>入<rt>い</rt></ruby>れておけるから"
      ],
      "optionsAnalysis": [
        {
          "option": "小さくてどこにでもおけるから",
          "meaning": "Vì kích thước nhỏ gọn, đặt ở vị trí nào cũng vừa.",
          "analysis": "Sai: Đây là ưu điểm của máy in Kawada chứ không phải máy Asahi ('川田のは、前のプリンターより小さいので、ほかの場所にも置ける')."
        },
        {
          "option": "きれいにいんさつできるから",
          "meaning": "Vì in ấn đẹp, chất lượng sắc nét.",
          "analysis": "ĐÚNG: Trưởng phòng quyết định chọn Asahi vì máy in ấn rất đẹp dù tiền mực có đắt hơn đôi chút ('インク代が少しくらい高くても、印刷が綺麗なのにしよう。朝日の方')."
        },
        {
          "option": "インクだいが安いから",
          "meaning": "Vì chi phí mực in rẻ.",
          "analysis": "Sai: Máy in Asahi tiền mực in đắt hơn máy thông thường ('その代わりインク代は少し高くなりそうですが')."
        },
        {
          "option": "紙を一度にたくさん入れておけるから",
          "meaning": "Vì có thể nạp được nhiều giấy cùng lúc.",
          "analysis": "Sai: Cả hai máy đều có khay giấy tương đương máy cũ, không nạp được nhiều hơn ('どちらも前のプリンターと同じくらいです')."
        }
      ],
      "answer": 1,
      "evidence": "「課長：インク代が少しくらい高くても、印刷が綺麗なのにしよう。朝日の方。...じゃあ、朝日の頼むよ。女：はい。」",
      "explanation": "Đáp án đúng là 2 (きれいにいんさつできるから).\n- Giữa 2 hãng: Kawada (nhỏ gọn) và Asahi (to hơn 1 chút, mực đắt hơn nhưng in rất đẹp).\n- Trưởng phòng kết luận: 'Dù tiền mực có hơi đắt một chút nhưng hãy chọn loại in đẹp. Lấy loại của hãng Asahi nhé'.",
      "scriptJp": "<p><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>課長<rt>かちょう</rt></ruby>、<ruby>営業<rt>えいぎょう</rt></ruby><ruby>部<rt>ぶ</rt></ruby>で<ruby>新<rt>あたら</rt></ruby>しく<ruby>買<rt>か</rt></ruby>うプリンターのことなんですが。<br><strong><ruby>課長<rt>かちょう</rt></ruby>：</strong> うん。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>川田<rt>かわだ</rt></ruby><ruby>電器<rt>でんき</rt></ruby>と<ruby>朝日<rt>あさひ</rt></ruby><ruby>電器<rt>でんき</rt></ruby>の<ruby>製品<rt>せいひん</rt></ruby>にいいのが1<ruby>台<rt>だい</rt></ruby>ずつありましたので、どちらか<ruby>選<rt>えら</rt></ruby>んでください。<br><strong><ruby>課長<rt>かちょう</rt></ruby>：</strong> うん。どっちも<ruby>前<rt>まえ</rt></ruby>のプリンター<ruby>置<rt>お</rt></ruby>いてたとこに<ruby>置<rt>お</rt></ruby>けるサイズなんだよね？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> はい、どちらも<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。<ruby>川田<rt>かわだ</rt></ruby>のは、<ruby>前<rt>まえ</rt></ruby>のプリンターより<ruby>小<rt>ちい</rt></ruby>さいので、ほかの<ruby>場所<rt>ばしょ</rt></ruby>にも<ruby>置<rt>お</rt></ruby>けると<ruby>思<rt>おも</rt></ruby>います。<ruby>朝日<rt>あさひ</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>は、<ruby>川田<rt>かわだ</rt></ruby>のよりひと<ruby>回<rt>まわ</rt></ruby>り<ruby>大<rt>おお</rt></ruby>きいんですけど、<strong><ruby>綺麗<rt>きれい</rt></ruby>に<ruby>印刷<rt>いんさつ</rt></ruby>できるのが<ruby>特徴<rt>とくちょう</rt></ruby>です。</strong>その<ruby>代<rt>か</rt></ruby>わりインク<ruby>代<rt>だい</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>高<rt>たか</rt></ruby>くなりそうですが。<br><strong><ruby>課長<rt>かちょう</rt></ruby>：</strong> <strong>インク<ruby>代<rt>だい</rt></ruby>が<ruby>少<rt>すこ</rt></ruby>しくらい<ruby>高<rt>たか</rt></ruby>くても、<ruby>印刷<rt>いんさつ</rt></ruby>が<ruby>綺麗<rt>きれい</rt></ruby>なのにしよう。<ruby>朝日<rt>あさひ</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>。</strong>あ、1<ruby>度<rt>ど</rt></ruby>に<ruby>入<rt>い</rt></ruby>れておける<ruby>紙<rt>かみ</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>はどうなの？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> どちらも<ruby>前<rt>まえ</rt></ruby>のプリンターと<ruby>同<rt>おな</rt></ruby>じくらいです。<br><strong><ruby>課長<rt>かちょう</rt></ruby>：</strong> じゃあ、あまりたくさん<ruby>入<rt>はい</rt></ruby>らないんだね。<ruby>もっと<rt>もっと</rt></ruby><ruby>入<rt>はい</rt></ruby>る<ruby>方<rt>ほう</rt></ruby>が<ruby>実用的<rt>じつようてき</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>ってたけど、そういうのはサイズも<ruby>大<rt>おお</rt></ruby>きくなっちゃうんだろうな。<strong>じゃあ、<ruby>朝日<rt>あさひ</rt></ruby>のを<ruby>頼<rt>たの</rt></ruby>むよ。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> はい。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>課長<rt>かちょう</rt></ruby>はどうして<ruby>朝日<rt>あさひ</rt></ruby><ruby>電器<rt>でんき</rt></ruby>のプリンターを<ruby>買<rt>か</rt></ruby>うことにしましたか。</p>",
      "scriptVi": "Nữ: Trưởng phòng, về chiếc máy in mới định mua cho phòng kinh doanh ạ.\nTrưởng phòng: Ừ.\nNữ: Có 2 mẫu rất tốt của hãng Điện khí Kawada và Điện khí Asahi, nhờ trưởng phòng chọn giúp 1 chiếc ạ.\nTrưởng phòng: Ừ. Cả 2 máy kích thước đều đặt vừa chỗ kê máy in cũ đúng không cô?\nNữ: Dạ vâng, cả hai đều vừa ạ. Mẫu của Kawada nhỏ hơn máy cũ nên có thể kê chỗ khác nữa. Còn mẫu của Asahi thì to hơn của Kawada một chút, nhưng có ưu điểm nổi bật là in rất đẹp và sắc nét ạ. Bù lại thì tiền mực in sẽ hơi đắt hơn một chút.\nTrưởng phòng: Dù tiền mực có hơi đắt một chút thì mình vẫn nên chọn loại in đẹp. Lấy mẫu của Asahi đi nhé. À, lượng giấy nạp một lần thì thế nào cô?\nNữ: Cả 2 mẫu đều tương đương máy cũ thôi ạ.\nTrưởng phòng: Vậy là không nạp được nhiều giấy lắm nhỉ. Tôi nghĩ nạp được nhiều giấy hơn thì tiện hơn, nhưng loại đó chắc kích thước máy cũng to lên. Vậy cô đặt mua mẫu của Asahi giúp tôi nhé.\nNữ: Vâng ạ.\nCâu hỏi: Tại sao trưởng phòng lại quyết định chọn mua máy in của hãng Điện khí Asahi?"
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_traloi-05",
  "level": "N3",
  "category": "nghe_traloi",
  "categoryName": "Nghe trả lời (課題理解)",
  "lessonNumber": 5,
  "title": "Bài 5: Luyện nghe hiểu trả lời (課題理解 第5回)",
  "description": "Dạng bài nghe hiểu yêu cầu nắm bắt chi tiết, nguyên nhân, mục đích và phương thức thực hiện (課題理解): Lắng nghe câu hỏi, phân tích ngữ cảnh hội thoại và chọn đáp án chính xác nhất.",
  "questions": [
    {
      "id": 25,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai5/25.mp3",
      "question": "1番：<ruby>結婚式<rt>けっこんしき</rt></ruby>で<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>がスピーチをしています。<ruby>結婚<rt>けっこん</rt></ruby>した<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>はどうやって<ruby>知<rt>し</rt></ruby>り<ruby>合<rt>あ</rt></ruby>ったと<ruby>言<rt>い</rt></ruby>っていますか。",
      "questionVi": "Tại lễ cưới, một người đàn ông đang phát biểu chúc mừng. Hai người kết hôn quen biết nhau qua cách thức nào?",
      "options": [
        "<ruby>高校<rt>こうこう</rt></ruby>の<ruby>友人<rt>ゆうじん</rt></ruby>からしょうかいしてもらった",
        "<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>食事<rt>しょくじ</rt></ruby><ruby>会<rt>かい</rt></ruby>で<ruby>知<rt>し</rt></ruby>り<ruby>合<rt>あ</rt></ruby>った",
        "インターネットのサイトで<ruby>知<rt>し</rt></ruby>り<ruby>合<rt>あ</rt></ruby>った",
        "スキー<ruby>教室<rt>きょうしつ</rt></ruby>で<ruby>知<rt>し</rt></ruby>り<ruby>合<rt>あ</rt></ruby>った"
      ],
      "optionsAnalysis": [
        {
          "option": "高校の友人からしょうかいしてもらった",
          "meaning": "Được bạn thân từ thời cấp 3 giới thiệu.",
          "analysis": "Sai: Người phát biểu là bạn cấp 3 của chú rể Kimura chứ không phải người mai mối ('木村君は高校の時からの友人です')."
        },
        {
          "option": "会社の食事会で知り合った",
          "meaning": "Quen biết nhau tại bữa ăn của công ty.",
          "analysis": "Sai: Đây là những lần chú rể đi ăn sau giờ làm và kể cho bạn mình nghe về cô dâu ('菜穂子さんのことは、会社帰りに食事に行った時によく聞いていました')."
        },
        {
          "option": "インターネットのサイトで知り合った",
          "meaning": "Quen biết nhau qua trang web trên mạng internet.",
          "analysis": "ĐÚNG: Cả hai có chung sở thích trượt tuyết và đã làm quen với nhau qua trang web về trượt tuyết trên internet ('共通の趣味はスキーで、インターネットのスキーのサイトで知り合い')."
        },
        {
          "option": "スキー教室で知り合った",
          "meaning": "Quen biết nhau tại lớp dạy trượt tuyết.",
          "analysis": "Sai: Lớp trượt tuyết là nơi hai người lần đầu gặp mặt trực tiếp ngoài đời sau khi đã quen qua mạng ('初めて会ったのはスキー場のスキー教室だったそうです')."
        }
      ],
      "answer": 2,
      "evidence": "「男：木村君と菜穂子さんの共通の趣味はスキーで、インターネットのスキーのサイトで知り合い、初めて会ったのはスキー場のスキー教室だったそうです。」",
      "explanation": "Đáp án đúng là 3 (インターネットのサイトで知り合った).\n- Người phát biểu kể lại: Cô dâu và chú rể có chung sở thích trượt tuyết và đã quen biết nhau qua trang web về trượt tuyết trên internet (インターネットのスキーのサイトで知り合い).\n- Lần đầu tiên gặp nhau trực tiếp là tại lớp học trượt tuyết ở khu trượt tuyết.",
      "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>木村<rt>きむら</rt></ruby><ruby>君<rt>くん</rt></ruby>、<ruby>菜穂子<rt>なほこ</rt></ruby>さん、ご<ruby>結婚<rt>けっこん</rt></ruby>おめでとうございます。<ruby>木村<rt>きむら</rt></ruby><ruby>君<rt>くん</rt></ruby>は<ruby>高校<rt>こうこう</rt></ruby>の<ruby>時<rt>とき</rt></ruby>からの<ruby>友人<rt>ゆうじん</rt></ruby>です。<ruby>菜穂子<rt>なほこ</rt></ruby>さんのことは、<ruby>会社<rt>かいしゃ</rt></ruby><ruby>帰<rt>がえ</rt></ruby>りに<ruby>食事<rt>しょくじ</rt></ruby>に<ruby>行<rt>い</rt></ruby>った<ruby>時<rt>とき</rt></ruby>によく<ruby>聞<rt>き</rt></ruby>いていました。<ruby>木村<rt>きむら</rt></ruby><ruby>君<rt>くん</rt></ruby>と<ruby>菜穂子<rt>なほこ</rt></ruby>さんの<ruby>共通<rt>きょうつう</rt></ruby>の<ruby>趣味<rt>しゅみ</rt></ruby>はスキーで、<strong>インターネットのスキーのサイトで<ruby>知<rt>し</rt></ruby>り<ruby>合<rt>あ</rt></ruby>い</strong>、<ruby>初<rt>はじ</rt></ruby>めて<ruby>会<rt>あ</rt></ruby>ったのはスキー<ruby>場<rt>じょう</rt></ruby>のスキー<ruby>教室<rt>きょうしつ</rt></ruby>だったそうです。<ruby>素敵<rt>すてき</rt></ruby>ですね。<ruby>木村<rt>きむら</rt></ruby><ruby>君<rt>くん</rt></ruby>、<ruby>菜穂子<rt>なほこ</rt></ruby>さん、どうぞお<ruby>幸<rt>しあわ</rt></ruby>せに。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>結婚<rt>けっこん</rt></ruby>した<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>はどうやって<ruby>知<rt>し</rt></ruby>り<ruby>合<rt>あ</rt></ruby>ったと<ruby>言<rt>い</rt></ruby>っていますか。</p>",
      "scriptVi": "Người đàn ông: Chúc mừng hạnh phúc Kimura và Nahoko nhé. Kimura là bạn thân từ thời cấp ba của tôi. Về Nahoko thì tôi thường được nghe cậu ấy tâm sự mỗi khi hai đứa rủ nhau đi ăn sau giờ làm. Sở thích chung của Kimura và Nahoko là trượt tuyết, hai người đã quen biết nhau qua một trang web về trượt tuyết trên mạng, và lần đầu tiên gặp mặt trực tiếp là tại lớp học trượt tuyết ở khu trượt tuyết. Thật tuyệt vời đúng không quý vị. Chúc Kimura và Nahoko mãi mãi hạnh phúc nhé.\nCâu hỏi: Hai người kết hôn quen biết nhau qua cách thức nào?"
    },
    {
      "id": 26,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai5/26.mp3",
      "question": "2番：<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はどうして<ruby>最近<rt>さいきん</rt></ruby>、<ruby>水泳<rt>すいえい</rt></ruby><ruby>教室<rt>きょうしつ</rt></ruby>に<ruby>通<rt>かよ</rt></ruby>い<ruby>始<rt>はじ</rt></ruby>めましたか。",
      "questionVi": "Một người đàn ông và một người phụ nữ đang nói chuyện. Tại sao dạo gần đây người phụ nữ bắt đầu đi học bơi?",
      "options": [
        "<ruby>水泳<rt>すいえい</rt></ruby>のきそを<ruby>習<rt>なら</rt></ruby>いたいから",
        "<ruby>体力<rt>たいりょく</rt></ruby>をつけたいから",
        "ながいきょりを<ruby>泳<rt>およ</rt></ruby>ぎたいから",
        "<ruby>友<rt>とも</rt></ruby>だちを<ruby>作<rt>つく</rt></ruby>りたいから"
      ],
      "optionsAnalysis": [
        {
          "option": "水泳のきそを習いたいから",
          "meaning": "Vì muốn học kỹ năng bơi cơ bản.",
          "analysis": "Sai: Cô ấy nói từ nhỏ đã từng học bơi cơ bản rồi ('子供の頃、水泳の基礎は習ったことあるんだけど')."
        },
        {
          "option": "体力をつけたいから",
          "meaning": "Vì muốn nâng cao và rèn luyện thể lực.",
          "analysis": "ĐÚNG: Sau khi đi làm thấy sức khỏe giảm sút nên cô đi bơi để rèn luyện thể lực, tăng sức đề kháng và đỡ mệt mỏi ('社会人になって体力がなくなったみたいで。泳ぐと風邪ひかなくなったり、疲れにくくなったりするかと思って')."
        },
        {
          "option": "ながいきょりを泳ぎたいから",
          "meaning": "Vì muốn bơi cự ly dài.",
          "analysis": "Sai: Bơi được cự ly dài là kết quả đạt được sau một thời gian đi học chứ không phải lý do ban đầu ('最近は長い距離を楽に泳げるようになって、通ってよかったと思ってるんだ')."
        },
        {
          "option": "友だちを作りたいから",
          "meaning": "Vì muốn kết thêm bạn bè.",
          "analysis": "Sai: Kết thêm bạn cũng là điều vui mừng có được thêm trong quá trình đi học ('会社員も多くて、友達もできたよ')."
        }
      ],
      "answer": 1,
      "evidence": "「女：子供の頃、水泳の基礎は習ったことあるんだけど、社会人になって体力がなくなったみたいで。泳ぐと風邪ひかなくなったり、疲れにくくなったりするかと思って。男：ああ、水泳は体が丈夫になるって言うからね。」",
      "explanation": "Đáp án đúng là 2 (体力をつけたいから).\n- Người phụ nữ giải thích lý do đi học bơi: Từ khi đi làm thấy thể lực giảm sút (体力がなくなった), đi bơi sẽ giúp cơ thể khỏe khoắn hơn, tránh bị cảm cúm và bớt mệt mỏi.\n- Bơi cự ly dài và có thêm bạn bè là kết quả vui mừng sau quá trình luyện tập.",
      "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>青木<rt>あおき</rt></ruby>さん、<ruby>最近<rt>さいきん</rt></ruby><ruby>水泳<rt>すいえい</rt></ruby><ruby>教室<rt>きょうしつ</rt></ruby>に<ruby>通<rt>かよ</rt></ruby>ってるんだって？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> うん。<ruby>子供<rt>こども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>、<ruby>水泳<rt>すいえい</rt></ruby>の<ruby>基礎<rt>きそ</rt></ruby>は<ruby>習<rt>なら</rt></ruby>ったことあるんだけど、<strong><ruby>社会<rt>しゃかい</rt></ruby><ruby>人<rt>じん</rt></ruby>になって<ruby>体力<rt>たいりょく</rt></ruby>がなくなったみたいで。<ruby>泳<rt>およ</rt></ruby>ぐと<ruby>風邪<rt>かぜ</rt></ruby>ひかなくなったり、<ruby>疲<rt>つか</rt></ruby>れにくくなったりするかと<ruby>思<rt>おも</rt></ruby>って。</strong><br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> ああ、<ruby>水泳<rt>すいえい</rt></ruby>は<ruby>体<rt>からだ</rt></ruby>が<ruby>丈夫<rt>じょうぶ</rt></ruby>になるって<ruby>言<rt>い</rt></ruby>うからね。<ruby>教室<rt>きょうしつ</rt></ruby>は<ruby>楽<rt>たの</rt></ruby>しい？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> うん、<ruby>最近<rt>さいきん</rt></ruby>は<ruby>長<rt>なが</rt></ruby>い<ruby>距離<rt>きょり</rt></ruby>を<ruby>楽<rt>らく</rt></ruby>に<ruby>泳<rt>およ</rt></ruby>げるようになって、<ruby>通<rt>かよ</rt></ruby>ってよかったと<ruby>思<rt>おも</rt></ruby>ってるんだ。<br><strong><ruby>男<rt>おとco</rt></ruby>：</strong> いつ<ruby>通<rt>かよ</rt></ruby>ってるの？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>平日<rt>へいじつ</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>。<ruby>会社<rt>かいしゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>も<ruby>多<rt>おお</rt></ruby>くて、<ruby>友達<rt>ともだち</rt></ruby>もできたよ。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> それはいいね。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はどうして<ruby>最近<rt>さいきん</rt></ruby>、<ruby>水泳<rt>すいえい</rt></ruby><ruby>教室<rt>きょうしつ</rt></ruby>に<ruby>通<rt>かよ</rt></ruby>い<ruby>始<rt>はじ</rt></ruby>めましたか。</p>",
      "scriptVi": "Nam: Aoki này, nghe nói dạo này cậu đang đi học bơi à?\nNữ: Ừ. Hồi nhỏ mình từng học bơi cơ bản rồi, nhưng từ khi đi làm thấy sức khỏe giảm sút quá. Mình nghĩ đi bơi sẽ giúp ít bị ốm vặt với đỡ mệt mỏi hơn.\nNam: À, người ta vẫn bảo bơi lội giúp cơ thể dẻo dai khỏe mạnh mà. Lớp học có vui không?\nNữ: Ừ, dạo này mình đã bơi cự ly dài một cách dễ dàng rồi, thấy đi học thật là đáng giá.\nNam: Cậu đi học vào lúc nào vậy?\nNữ: Các buổi tối ngày thường. Có nhiều dân văn phòng đi học lắm, mình cũng kết thêm được bạn nữa.\nNam: Thế thì tốt quá rồi.\nCâu hỏi: Tại sao dạo gần đây người phụ nữ bắt đầu đi học bơi?"
    },
    {
      "id": 27,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai5/27.mp3",
      "question": "3番：テレビでアナウンサーがアンケートの<ruby>結果<rt>けっか</rt></ruby>について<ruby>話<rt>はな</rt></ruby>しています。アナウンサーは<ruby>今年<rt>ことし</rt></ruby>、<ruby>男<rt>おとこ</rt></ruby>の<ruby>子<rt>こ</rt></ruby>が<ruby>将来<rt>しょうらい</rt></ruby>なりたいものの1<ruby>位<rt>い</rt></ruby>は<ruby>何<rt>なん</rt></ruby>だったと<ruby>言<rt>い</rt></ruby>っていますか。<ruby>男<rt>おとこ</rt></ruby>の<ruby>子<rt>こ</rt></ruby>です。",
      "questionVi": "Trên truyền hình, phát thanh viên đang nói về kết quả khảo sát. Phát thanh viên nói nghề nghiệp tương lai xếp hạng 1 của các bé trai năm nay là gì?",
      "options": [
        "かがくしゃ",
        "<ruby>小学校<rt>しょうがっこう</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>",
        "けいさつかん",
        "<ruby>医者<rt>いしゃ</rt></ruby>"
      ],
      "optionsAnalysis": [
        {
          "option": "かがくしゃ",
          "meaning": "Nhà khoa học.",
          "analysis": "Sai: Số lượng bé trai muốn làm nhà khoa học tăng nhanh nhưng chưa phải vị trí số 1 ('男の子では、科学者になりたいという子が去年から急に増えました')."
        },
        {
          "option": "小学校の先生",
          "meaning": "Giáo viên tiểu học.",
          "analysis": "Sai: Đây là vị trí số 1 của các bé gái năm nay ('女の子では去年に続き1位の「小学校の先生」')."
        },
        {
          "option": "けいさつかん",
          "meaning": "Cảnh sát (警察官).",
          "analysis": "ĐÚNG: Nghề nghiệp xếp vị trí số 1 được các bé trai bình chọn nhiều nhất năm nay là Cảnh sát ('これに対し男の子は、「警察官」でした')."
        },
        {
          "option": "医者",
          "meaning": "Bác sĩ.",
          "analysis": "Sai: Bác sĩ là vị trí số 1 của cả nam và nữ từ 10 năm trước ('このアンケート、10年前は男女とも「医者」が1位でしたが')."
        }
      ],
      "answer": 2,
      "evidence": "「アナウンサー：今回一番多かった答えは、女の子では去年に続き1位の「小学校の先生」。これに対し男の子は、「警察官」でした。」",
      "explanation": "Đáp án đúng là 3 (けいさつかん - 警察官).\n- Khảo sát ước mơ tương lai của 1000 học sinh tiểu học:\n  - Bé gái: Hạng 1 là Giáo viên tiểu học (小学校の先生).\n  - Bé trai: Hạng 1 nhiều nhất là Cảnh sát (警察官).\n- Bác sĩ là vị trí số 1 của 10 năm trước.",
      "scriptJp": "<p><strong>アナウンサー：</strong> <ruby>大人<rt>おとな</rt></ruby>になったら<ruby>何<rt>なに</rt></ruby>になりたいですか。<ruby>今年<rt>ことし</rt></ruby>も<ruby>小学生<rt>しょうがくせい</rt></ruby>の<ruby>男女<rt>だんじょ</rt></ruby><ruby>約<rt>やく</rt></ruby>1000<ruby>人<rt>にん</rt></ruby>にアンケートをした<ruby>結果<rt>けっか</rt></ruby>が<ruby>発表<rt>はっぴょう</rt></ruby>されました。<ruby>女<rt>おんな</rt></ruby>の<ruby>子<rt>こ</rt></ruby>ではケーキ<ruby>屋<rt>や</rt></ruby>が<ruby>人気<rt>にんき</rt></ruby>で、10<ruby>位<rt>い</rt></ruby>から2<ruby>位<rt>い</rt></ruby>になりました。<ruby>一方<rt>いっぽう</rt></ruby>、<ruby>男<rt>おとこ</rt></ruby>の<ruby>子<rt>こ</rt></ruby>では、<ruby>科学<rt>かがく</rt></ruby><ruby>者<rt>しゃ</rt></ruby>になりたいという<ruby>子<rt>こ</rt></ruby>が<ruby>去年<rt>きょねん</rt></ruby>から<ruby>急<rt>きゅう</rt></ruby>に<ruby>増<rt>ふ</rt></ruby>えました。<ruby>今回<rt>こんかい</rt></ruby><ruby>一番<rt>いちばん</rt></ruby><ruby>多<rt>おお</rt></ruby>かった<ruby>答<rt>こた</rt></ruby>えは、<ruby>女<rt>おんな</rt></ruby>の<ruby>子<rt>こ</rt></ruby>では<ruby>去年<rt>きょねん</rt></ruby>に<ruby>続<rt>つづ</rt></ruby>き1<ruby>位<rt>い</rt></ruby>の「<ruby>小学校<rt>しょうがっこう</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>」。<strong>これに<ruby>対<rt>たい</rt></ruby>し<ruby>男<rt>おとこ</rt></ruby>の<ruby>子<rt>こ</rt></ruby>は、「<ruby>警察<rt>けいさつ</rt></ruby><ruby>官<rt>かん</rt></ruby>」でした。</strong>このアンケート、10<ruby>年<rt>ねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>は<ruby>男女<rt>だんじょ</rt></ruby>とも「<ruby>医者<rt>いしゃ</rt></ruby>」が1<ruby>位<rt>い</rt></ruby>でしたが、<ruby>最近<rt>さいきん</rt></ruby>は<ruby>変<rt>か</rt></ruby>わってきているようです。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> アナウンサーは<ruby>今年<rt>ことし</rt></ruby>、<ruby>男<rt>おとこ</rt></ruby>の<ruby>子<rt>こ</rt></ruby>が<ruby>将来<rt>しょうらい</rt></ruby>なりたいものの1<ruby>位<rt>い</rt></ruby>は<ruby>何<rt>なん</rt></ruby>だったと<ruby>言<rt>い</rt></ruby>っていますか。</p>",
      "scriptVi": "Phát thanh viên: Lớn lên bạn muốn làm nghề gì? Năm nay kết quả khảo sát khoảng 1000 học sinh tiểu học cả nam lẫn nữ lại vừa được công bố. Ở các bé gái, nghề làm bánh kem rất được yêu thích, tăng từ hạng 10 lên hạng 2. Mặt khác ở các bé trai, số lượng bé muốn trở thành nhà khoa học tăng đột biến so với năm ngoái. Câu trả lời nhiều nhất lần này ở các bé gái tiếp tục là vị trí số 1 của năm ngoái: 'Giáo viên tiểu học'. Trái lại đối với các bé trai, vị trí số 1 là 'Cảnh sát'. Cuộc khảo sát này 10 năm trước cả nam lẫn nữ đều có vị trí số 1 là 'Bác sĩ', nhưng gần đây xu hướng dường như đã thay đổi.\nCâu hỏi: Phát thanh viên nói nghề nghiệp tương lai xếp hạng 1 của các bé trai năm nay là gì?"
    },
    {
      "id": 28,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai5/28.mp3",
      "question": "4番：<ruby>携帯<rt>けいたい</rt></ruby><ruby>電話<rt>でんわ</rt></ruby>で<ruby>夫<rt>おっと</rt></ruby>と<ruby>妻<rt>つま</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>夫<rt>おっと</rt></ruby>はどうして<ruby>今日<rt>きょう</rt></ruby>、<ruby>帰<rt>かえ</rt></ruby>りが<ruby>遅<rt>おく</rt></ruby>くなると<ruby>言<rt>い</rt></ruby>っていますか。",
      "questionVi": "Qua điện thoại di động, người chồng và người vợ đang nói chuyện. Tại sao người chồng nói hôm nay sẽ về muộn?",
      "options": [
        "<ruby>雨<rt>あめ</rt></ruby>で<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>止<rt>と</rt></ruby>まっているから",
        "かいぎがあるから",
        "<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>夕飯<rt>ゆうはん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べに<ruby>行<rt>い</rt></ruby>くから",
        "<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>をして<ruby>帰<rt>かえ</rt></ruby>るから"
      ],
      "optionsAnalysis": [
        {
          "option": "雨で電車が止まっているから",
          "meaning": "Vì trời mưa lớn tàu điện bị dừng hoạt động.",
          "analysis": "Sai: Người vợ hỏi thăm xem tàu có dừng không, nhưng người chồng bảo chưa rõ tình hình tàu điện ('電車のことはよくわからないけど')."
        },
        {
          "option": "かいぎがあるから",
          "meaning": "Vì sau đó có cuộc họp ở công ty.",
          "analysis": "ĐÚNG: Người chồng nói hôm nay về muộn vì sau giờ này còn có cuộc họp ('今日は帰りが遅くなりそうなんだ。この後会議があるから')."
        },
        {
          "option": "会社の人と夕飯を食べに行くから",
          "meaning": "Vì đi ăn tối cùng đồng nghiệp trong công ty.",
          "analysis": "Sai: Người chồng dặn vợ chuẩn bị phần cơm tối cho mình vì anh không ăn ngoài mà về nhà ăn ('僕の分も用意しておいて。食べないで帰るから')."
        },
        {
          "option": "買い物をして帰るから",
          "meaning": "Vì ghé mua sắm đồ trước khi về.",
          "analysis": "Sai: Người vợ bảo hôm nay không cần mua gì ('今日は特に必要なものないよ')."
        }
      ],
      "answer": 1,
      "evidence": "「夫：電車のことはよくわからないけど、今日は帰りが遅くなりそうなんだ。この後会議があるから。妻：そっか。大変だね。」",
      "explanation": "Đáp án đúng là 2 (かいぎがあるから).\n- Người chồng gọi điện báo: Vẫn đang ở công ty và hôm nay sẽ về muộn vì lát nữa có cuộc họp (この後会議があるから).\n- Cơm tối anh không ăn ngoài mà về nhà ăn, mua sắm thì vợ bảo không cần mua gì.",
      "scriptJp": "<p><strong><ruby>夫<rt>おっと</rt></ruby>：</strong> はい、もしもし。<br><strong><ruby>妻<rt>つま</rt></ruby>：</strong> <ruby>今<rt>いま</rt></ruby>どこ？すごい<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ってるけど、<ruby>帰<rt>かえ</rt></ruby>りの<ruby>電車<rt>でんしゃ</rt></ruby>、<ruby>止<rt>と</rt></ruby>まってない？<br><strong><ruby>夫<rt>おっと</rt></ruby>：</strong> ああ、<ruby>今<rt>いま</rt></ruby>まだ<ruby>会社<rt>かいしゃ</rt></ruby>。<ruby>電車<rt>でんしゃ</rt></ruby>のことはよくわからないけど、<strong><ruby>今日<rt>きょう</rt></ruby>は<ruby>帰<rt>かえ</rt></ruby>りが<ruby>遅<rt>おく</rt></ruby>くなりそうなんだ。この<ruby>後<rt>あと</rt></ruby><ruby>会議<rt>かいぎ</rt></ruby>があるから。</strong><br><strong><ruby>妻<rt>つま</rt></ruby>：</strong> そっか。<ruby>大変<rt>たいへん</rt></ruby>だね。<ruby>夕飯<rt>ゆうはん</rt></ruby>、<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>食<rt>た</rt></ruby>べてくる？<br><strong><ruby>夫<rt>おっと</rt></ruby>：</strong> いや、<ruby>僕<rt>ぼく</rt></ruby>の<ruby>分<rt>ぶん</rt></ruby>もご<ruby>用意<rt>ようい</rt></ruby>しておいて。<ruby>食<rt>た</rt></ruby>べないで<ruby>帰<rt>かえ</rt></ruby>るから。<br><strong><ruby>妻<rt>つま</rt></ruby>：</strong> わかった。<br><strong><ruby>夫<rt>おっと</rt></ruby>：</strong> なんか<ruby>買<rt>か</rt></ruby>うものがあれば、<ruby>帰<rt>かえ</rt></ruby>りにスーパーに<ruby>寄<rt>よ</rt></ruby>って<ruby>帰<rt>かえ</rt></ruby>るけど。<br><strong><ruby>妻<rt>つま</rt></ruby>：</strong> <ruby>今日<rt>きょう</rt></ruby>は<ruby>特<rt>とく</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>なものないよ。ありがとう。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>夫<rt>おっと</rt></ruby>はどうして<ruby>今日<rt>きょう</rt></ruby>、<ruby>帰<rt>かえ</rt></ruby>りが<ruby>遅<rt>おく</rt></ruby>くなると<ruby>言<rt>い</rt></ruby>っていますか。</p>",
      "scriptVi": "Chồng: Alo em à.\nVợ: Anh đang ở đâu đấy? Ngoài trời đang mưa to lắm, tàu điện về nhà có bị dừng không anh?\nChồng: À, anh vẫn đang ở công ty. Tàu bè thế nào anh cũng chưa rõ, nhưng hôm nay chắc anh về muộn đấy em. Vì sau giờ này anh còn có cuộc họp.\nVợ: Thế à anh. Vất vả quá nhỉ. Anh có đi ăn tối cùng mọi người ở công ty không?\nChồng: Không, em cứ chuẩn bị cơm phần anh nhé. Anh không ăn ở ngoài mà về nhà ăn.\nVợ: Em biết rồi.\nChồng: Có cần mua gì không để trên đường về anh ghé siêu thị mua cho?\nVợ: Hôm nay không cần mua gì đâu anh. Cảm ơn anh nhé.\nCâu hỏi: Tại sao người chồng nói hôm nay sẽ về muộn?"
    },
    {
      "id": 29,
      "subId": "5番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai5/29.mp3",
      "question": "5番：ラジオで<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>小学校<rt>しょうがっこう</rt></ruby>を<ruby>卒業<rt>そつぎょう</rt></ruby>した<ruby>時<rt>とき</rt></ruby>、<ruby>箱<rt>はこ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>入<rt>い</rt></ruby>れたと<ruby>言<rt>い</rt></ruby>っていますか。",
      "questionVi": "Trên đài phát thanh, một người phụ nữ đang nói chuyện. Người phụ nữ nói khi tốt nghiệp tiểu học, cô đã bỏ món đồ gì vào chiếc hộp kỷ niệm?",
      "options": [
        "100<ruby>点<rt>てん</rt></ruby>まんてんのテスト",
        "<ruby>友<rt>とも</rt></ruby>だちと<ruby>写<rt>うつ</rt></ruby>っている<ruby>写真<rt>しゃしん</rt></ruby>",
        "<ruby>好<rt>す</rt></ruby>きな<ruby>歌手<rt>かしゅ</rt></ruby>のCD",
        "<ruby>自分<rt>じぶん</rt></ruby>への<ruby>手紙<rt>てがみ</rt></ruby>"
      ],
      "optionsAnalysis": [
        {
          "option": "100点まんてんのテスト",
          "meaning": "Bài kiểm tra đạt điểm 100 tuyệt đối.",
          "analysis": "Sai: Đây là món đồ của những bạn học sinh khác bỏ vào ('100点満点のテストや... 入れていた人もいました')."
        },
        {
          "option": "友だちと写っている写真",
          "meaning": "Bức ảnh chụp kỷ niệm cùng bạn bè.",
          "analysis": "Sai: Đây cũng là món đồ của những người khác."
        },
        {
          "option": "好きな歌手のCD",
          "meaning": "Đĩa CD của ca sĩ mình yêu thích.",
          "analysis": "Sai: Món đồ của người khác bỏ vào."
        },
        {
          "option": "自分への手紙",
          "meaning": "Lá thư viết gửi cho chính bản thân mình trong tương lai.",
          "analysis": "ĐÚNG: Người phụ nữ là một trong những người đã viết thư gửi cho chính mình, hỏi rằng 'Mày đã trở thành ca sĩ chưa?' ('自分自身への手紙を入れた人もいましたが、私もその一人で、そこには「歌手になっていますか」とありました')."
        }
      ],
      "answer": 3,
      "evidence": "「女：自分自身への手紙を入れた人もいましたが、私もその一人で、そこには「歌手になっていますか」とありました。その頃、歌手に憧れていたんです。」",
      "explanation": "Đáp án đúng là 4 (自分への手紙).\n- Người phụ nữ kể lại sự kiện mở hộp kỷ niệm tốt nghiệp chôn 20 năm dưới sân trường.\n- Cô chia sẻ mình đã viết một lá thư gửi cho chính bản thân mình trong tương lai (自分自身への手紙), bên trong ghi câu hỏi 'Đã trở thành ca sĩ chưa?' vì lúc nhỏ rất hâm mộ nghề ca sĩ.",
      "scriptJp": "<p><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>私<rt>わたし</rt></ruby>の<ruby>卒業<rt>そつぎょう</rt></ruby>した<ruby>小学校<rt>しょうがっこう</rt></ruby>には、「<ruby>卒業<rt>そつぎょう</rt></ruby><ruby>記念<rt>きねん</rt></ruby>の<ruby>箱<rt>はこ</rt></ruby>」というものがあり、<ruby>生徒<rt>せいと</rt></ruby>それぞれが<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>で</rt></ruby>のものを<ruby>一<rt>ひと</rt></ruby>つずつ<ruby>箱<rt>はこ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れ、20<ruby>年間<rt>ねんかん</rt></ruby><ruby>校庭<rt>こうてい</rt></ruby>に<ruby>埋<rt>う</rt></ruby>めておくんです。<ruby>先日<rt>せんじつ</rt></ruby>、<ruby>卒業<rt>そつぎょう</rt></ruby>して20<ruby>年<rt>ねん</rt></ruby>が<ruby>経<rt>た</rt></ruby>ち、<ruby>卒業<rt>そつぎょう</rt></ruby><ruby>記念<rt>きねん</rt></ruby>の<ruby>箱<rt>はこ</rt></ruby>を<ruby>開<rt>あ</rt></ruby>けました。100<ruby>点<rt>てん</rt></ruby><ruby>満点<rt>まんてん</rt></ruby>のテストや、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>撮<rt>と</rt></ruby>った<ruby>写真<rt>しゃしん</rt></ruby>、<ruby>好<rt>す</rt></ruby>きな<ruby>歌手<rt>かしゅ</rt></ruby>のCDを<ruby>入<rt>い</rt></ruby>れていた<ruby>人<rt>ひと</rt></ruby>もいました。<strong><ruby>自分<rt>じぶん</rt></ruby><ruby>自身<rt>じしん</rt></ruby>への<ruby>手紙<rt>てがみ</rt></ruby>を<ruby>入<rt>い</rt></ruby>れた<ruby>人<rt>ひと</rt></ruby>もいましたが、<ruby>私<rt>わたし</rt></ruby>もその<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>で、そこには「<ruby>歌手<rt>かしゅ</rt></ruby>になっていますか」とありました。</strong>その<ruby>頃<rt>ころ</rt></ruby>、<ruby>歌手<rt>かしゅ</rt></ruby>に<ruby>憧<rt>あこが</rt></ruby>れていたんです。<ruby>結局<rt>けっきょく</rt></ruby>、<ruby>歌手<rt>かしゅ</rt></ruby>にはなりきれませんでしたが、<ruby>今<rt>いま</rt></ruby>、<ruby>曲<rt>きょく</rt></ruby>を<ruby>作<rt>つく</rt></ruby>るお<ruby>仕事<rt>しごと</rt></ruby>を<ruby>楽<rt>たの</rt></ruby>しんでいます。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>小学校<rt>しょうがっこう</rt></ruby>を<ruby>卒業<rt>そつぎょう</rt></ruby>した<ruby>時<rt>とき</rt></ruby>、<ruby>箱<rt>はこ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>入<rt>い</rt></ruby>れたと<ruby>言<rt>い</rt></ruby>っていますか。</p>",
      "scriptVi": "Người phụ nữ: Ở trường tiểu học tôi từng theo học có một chiếc 'Hộp kỷ niệm tốt nghiệp'. Mỗi học sinh sẽ bỏ một món đồ kỷ niệm vào hộp rồi chôn dưới sân trường trong 20 năm. Hôm trước, tròn 20 năm sau ngày tốt nghiệp, chúng tôi đã mở chiếc hộp kỷ niệm đó ra. Có bạn bỏ bài kiểm tra 100 điểm, có bạn bỏ ảnh chụp cùng bạn bè, hay đĩa CD của ca sĩ yêu thích. Cũng có người bỏ vào lá thư viết cho chính bản thân mình, và tôi cũng là một trong số đó. Trong thư tôi viết 'Cậu đã trở thành ca sĩ chưa?'. Hồi ấy tôi rất ngưỡng mộ và mơ ước làm ca sĩ. Rốt cuộc thì tôi không trở thành ca sĩ, nhưng hiện tại tôi đang rất vui với công việc sáng tác âm nhạc.\nCâu hỏi: Người phụ nữ nói khi tốt nghiệp tiểu học, cô đã bỏ món đồ gì vào chiếc hộp kỷ niệm?"
    },
    {
      "id": 30,
      "subId": "6番",
      "audioSrc": "assets/audio/choukai/n3/nghe_traloi/bai5/30.mp3",
      "question": "6番：<ruby>市役所<rt>しやくしょ</rt></ruby>で<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。<ruby>次<rt>つぎ</rt></ruby>の<ruby>国際<rt>こくさい</rt></ruby><ruby>交流<rt>こうりゅう</rt></ruby><ruby>会<rt>かい</rt></ruby>で<ruby>何<rt>なに</rt></ruby>をすることにしましたか。",
      "questionVi": "Tại tòa thị chính, một người đàn ông và một người phụ nữ đang nói chuyện. Trong buổi giao lưu quốc tế sắp tới, hai người đã quyết định sẽ tổ chức hoạt động gì?",
      "options": [
        "スポーツをする",
        "<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る",
        "<ruby>国<rt>くに</rt></ruby>のことばを<ruby>教<rt>おし</rt></ruby>え<ruby>合<rt>あ</rt></ruby>う",
        "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>う"
      ],
      "optionsAnalysis": [
        {
          "option": "スポーツをする",
          "meaning": "Chơi thể thao / tổ chức ngày hội thể thao.",
          "analysis": "ĐÚNG: Cả hai thống nhất chọn đại hội thể thao vì mọi người có thể cổ vũ, tương tác và trò chuyện tự nhiên với nhau ('じゃあ、スポーツ大会は？応援したり声を掛け合ったり、話す機会も自然にできるんじゃない？... 今回はそれにしよう')."
        },
        {
          "option": "料理を作る",
          "meaning": "Làm món ăn / mở lớp học nấu ăn.",
          "analysis": "Sai: Lớp nấu ăn được thống nhất để dành ý tưởng cho một dịp khác sau này ('いつかの機会のためにアイデアをとっておいたら？')."
        },
        {
          "option": "国のことばを教え合う",
          "meaning": "Dạy tiếng của đất nước mình cho nhau (lớp hội thoại).",
          "analysis": "Sai: Hoạt động này năm ngoái vừa tổ chức xong ('それは同じようなことを去年のやったばかりなんだ')."
        },
        {
          "option": "日本語の歌を歌う",
          "meaning": "Hát các ca khúc tiếng Nhật (hội thi hát karaoke).",
          "analysis": "Sai: Hoạt động hát karaoke trước đây từng làm nhưng mọi người không có thời gian giao lưu trò chuyện nhiều ('留学生と街の人が話す時間がとれなくて、あまり交流にならなかった')."
        }
      ],
      "answer": 0,
      "evidence": "「女：じゃあ、スポーツ大会は？応援したり声を掛け合ったり、話す機会も自然にできるんじゃない？男：そうだね。意外と交流できそうだよね。今回はそれにしよう。」",
      "explanation": "Đáp án đúng là 1 (スポーツをする).\n- Hai người cùng bàn bạc ý tưởng cho buổi giao lưu quốc tế:\n  - Lớp học tiếng: năm ngoái vừa làm xong.\n  - Hát karaoke: ít cơ hội trò chuyện trực tiếp.\n  - Lớp nấu ăn: để dành cho dịp khác.\n  - Đại hội thể thao (スポーツ大会): vừa cổ vũ vừa giao lưu tự nhiên -> Cả hai quyết định chọn phương án này (今回はそれにしよう).",
      "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>留学生<rt>りゅうがくせい</rt></ruby>と<ruby>街<rt>まち</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>参加<rt>さんか</rt></ruby>する<ruby>国際<rt>こくさい</rt></ruby><ruby>交流<rt>こうりゅう</rt></ruby><ruby>会<rt>かい</rt></ruby>、<ruby>次<rt>つぎ</rt></ruby><ruby>何<rt>なに</rt></ruby>をするかそろそろ<ruby>決<rt>き</rt></ruby>めないといけないんだけど、<ruby>何<rt>なに</rt></ruby>かいいアイデアない？<ruby>僕<rt>ぼく</rt></ruby>はスポーツ<ruby>大会<rt>たいかい</rt></ruby>か<ruby>料理<rt>りょうり</rt></ruby><ruby>教室<rt>きょうしつ</rt></ruby>が<ruby>面白<rt>おもしろ</rt></ruby>そうだなって<ruby>思<rt>おも</rt></ruby>ってるんだけど。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> うーん、<ruby>交流<rt>こうりゅう</rt></ruby><ruby>会<rt>かい</rt></ruby>ね。<ruby>例<rt>たと</rt></ruby>えば、<ruby>日本人<rt>にほんじん</rt></ruby>は<ruby>留学生<rt>りゅうがくせい</rt></ruby>に<ruby>日本語<rt>にほんご</rt></ruby>を、<ruby>留学生<rt>りゅうがくせい</rt></ruby>は<ruby>日本人<rt>にほんじん</rt></ruby>に<ruby>国<rt>くに</rt></ruby>の<ruby>言葉<rt>ことば</rt></ruby>を<ruby>教<rt>おし</rt></ruby>える「<ruby>会話<rt>かいわ</rt></ruby><ruby>教室<rt>きょうしつ</rt></ruby>」とかはどう？<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> あー、それは<ruby>同<rt>おな</rt></ruby>じようなことを<ruby>去年<rt>きょねん</rt></ruby>のやったばかりなんだ。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> そう……<ruby>確<rt>たし</rt></ruby>か<ruby>前<rt>まえ</rt></ruby>に<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>う「カラオケ<ruby>大会<rt>たいかい</rt></ruby>」もやったことあるよね。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> うん、<ruby>楽<rt>たの</rt></ruby>しかったんだけど、<ruby>留学生<rt>りゅうがくせい</rt></ruby>と<ruby>街<rt>まち</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>話<rt>はな</rt></ruby>す<ruby>時間<rt>じかん</rt></ruby>がとれなくて、あまり<ruby>交流<rt>こうりゅう</rt></ruby>にならなかったんだよね。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <strong>じゃあ、スポーツ<ruby>大会<rt>たいかい</rt></ruby>は？<ruby>応援<rt>おうえん</rt></ruby>したり<ruby>声<rt>こえ</rt></ruby>を<ruby>掛<rt>か</rt></ruby>け<ruby>合<rt>あ</rt></ruby>ったり、<ruby>話<rt>はな</rt></ruby>す<ruby>機会<rt>きかい</rt></ruby>も<ruby>自然<rt>しぜん</rt></ruby>にできるんじゃない？</strong><br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <strong>そうだね。<ruby>意外<rt>いがい</rt></ruby>と<ruby>交流<rt>こうりゅう</rt></ruby>できそうだよね。<ruby>今回<rt>こんかい</rt></ruby>はそれにしよう。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>料理<rt>りょうり</rt></ruby><ruby>教室<rt>きょうしつ</rt></ruby>もたくさん<ruby>交流<rt>こうりゅう</rt></ruby>できそうだから、いつかの<ruby>機会<rt>きかい</rt></ruby>のためにアイデアをとっておいたら？<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> うん、ありがとう。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>次<rt>つぎ</rt></ruby>の<ruby>国際<rt>こくさい</rt></ruby><ruby>交流<rt>こうりゅう</rt></ruby><ruby>会<rt>かい</rt></ruby>で<ruby>何<rt>なに</rt></ruby>をすることにしましたか。</p>",
      "scriptVi": "Nam: Buổi giao lưu quốc tế giữa lưu học sinh và người dân thị trấn sắp tới mình phải quyết định xem sẽ làm gì rồi, em có ý tưởng gì hay không? Anh thấy tổ chức ngày hội thể thao hoặc lớp học nấu ăn có vẻ thú vị đấy.\nNữ: Ưm, buổi giao lưu nhỉ. Ví dụ như mở 'Lớp học đàm thoại', người Nhật dạy tiếng Nhật cho du học sinh, còn du học sinh dạy tiếng nước mình cho người Nhật thì sao anh?\nNam: À, hoạt động tương tự thế năm ngoái mình vừa mới tổ chức xong em ạ.\nNữ: Thế ạ... Hình như trước đây mình cũng từng tổ chức 'Hội thi hát Karaoke' các bài hát tiếng Nhật rồi đúng không anh?\nNam: Ừ, vui thì có vui nhưng du học sinh với người dân không có nhiều thời gian trò chuyện với nhau nên tính giao lưu chưa cao lắm.\nNữ: Vậy tổ chức ngày hội thể thao thì sao ạ? Cùng nhau cổ vũ, hò reo tương tác thì cơ hội trò chuyện cũng được tạo ra một cách tự nhiên đấy anh?\nNam: Ừ đúng rồi. Thể thao hóa ra lại giao lưu tốt ấy chứ. Lần này mình chọn hoạt động đó nhé.\nNữ: Lớp học nấu ăn cũng có nhiều cơ hội giao lưu, anh cứ giữ ý tưởng đó cho một dịp khác nhé?\nNam: Ừ, cảm ơn em.\nCâu hỏi: Trong buổi giao lưu quốc tế sắp tới, hai người đã quyết định sẽ tổ chức hoạt động gì?"
    }
  ]
}

        ],
        "nghe_chude": [
{
  "id": "choukai-n3-nghe_chude-01",
  "level": "N3",
  "category": "nghe_chude",
  "categoryName": "Nghe chủ đề (ポイント理解)",
  "lessonNumber": 1,
  "title": "Bài 1: Luyện nghe hiểu chủ đề (ポイント理解 第1回)",
  "description": "Dạng bài nghe hiểu chủ đề / điểm cốt lõi (ポイント理解): Lắng nghe câu hỏi và các lựa chọn trực tiếp từ file âm thanh. Bấm chọn 1, 2, 3 hoặc 4.",
  "questions": [
    {
      "id": 31,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai1/31.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 小鳥の世話で大変なこと",
          "meaning": "Những điều vất vả khi chăm sóc chú chim nhỏ.",
          "analysis": "Sai: Người bố nói chỉ có việc cắt móng là khó với trẻ nhỏ nên bố làm hộ, còn lại con trai chăm sóc đều đặn rất tốt chứ không than thở vất vả."
        },
        {
          "option": "2. 小鳥を飼って良かったこと",
          "meaning": "Những điều tốt đẹp / lợi ích có được sau khi nuôi chú chim nhỏ.",
          "analysis": "ĐÚNG: Người đàn ông chia sẻ con trai biết yêu thương chăm sóc động vật ('生き物を大切にする気持ちを持ってくれているようで、嬉しい'), gia đình trò chuyện nhiều hơn ('家族の会話も増えた気がします'), vẽ tranh xem chim như thành viên gia đình ('家族の絵を描く時には、必ずシロも入っている')."
        },
        {
          "option": "3. 小鳥につけた名前の意味",
          "meaning": "Ý nghĩa của cái tên đặt cho chú chim.",
          "analysis": "Sai: Chỉ nhắc tên là Shiro chứ không giải thích ý nghĩa nguồn gốc tên."
        },
        {
          "option": "4. 小鳥を上手に飼う方法",
          "meaning": "Phương pháp nuôi chim nhỏ giỏi / thuần thục.",
          "analysis": "Sai: Bài nói không chia sẻ phương pháp hay kỹ thuật nuôi chim."
        }
      ],
      "answer": 1,
      "evidence": "「男：きちんと世話を続けています。生き物を大切にする気持ちを持ってくれているようで、嬉しいです。...それから、シロを飼うようになってから、家族の会話も増えた気がします。...幼稚園などで家族の絵を描く時には、必ずシロも入っているんですよ。」",
      "explanation": "Đáp án đúng là 2 (小鳥を飼って良かったこと).\n- Câu hỏi trong audio: 「男の人は、何について話していますか。」 (Người đàn ông đang nói về điều gì?).\n- Người đàn ông chia sẻ về việc nuôi chim Shiro: con trai biết yêu thương sinh vật sống (rất vui), cả nhà trò chuyện nhiều hơn, con vẽ tranh gia đình luôn có mặt Shiro.\n- Tất cả những điều đó thể hiện những mặt tốt, niềm vui mang lại từ việc nuôi chim (小鳥を飼って良かったこと).",
      "scriptJp": "<p><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>佐藤<rt>さとう</rt></ruby>さんは、<ruby>小鳥<rt>ことり</rt></ruby>を<ruby>飼<rt>か</rt></ruby>っていらっしゃるそうですね。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> ええ、「シロ」という<ruby>名前<rt>なまえ</rt></ruby>なんです。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> いつ<ruby>頃<rt>ころ</rt></ruby>から<ruby>飼<rt>か</rt></ruby>っていらっしゃるんですか？<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> 2<ruby>年<rt>ねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>です。<ruby>長男<rt>ちょうなん</rt></ruby>が4<ruby>歳<rt>さい</rt></ruby>の<ruby>時<rt>とき</rt></ruby>、<ruby>自分<rt>じぶん</rt></ruby>で<ruby>世話<rt>せわ</rt></ruby>をするという<ruby>約束<rt>やくそく</rt></ruby>で。<ruby>最初<rt>さいしょ</rt></ruby>は<ruby>大変<rt>たいへん</rt></ruby>かと<ruby>思<rt>おも</rt></ruby>ったんですが、きちんと<ruby>世話<rt>せわ</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>けています。<strong><ruby>生<rt>い</rt></ruby>き<ruby>物<rt>もの</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にする<ruby>気持<rt>きも</rt></ruby>ちを<ruby>持<rt>も</rt></ruby>ってくれているようで、<ruby>嬉<rt>うれ</rt></ruby>しいです。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>小<rt>ちい</rt></ruby>さいお<ruby>子<rt>こ</rt></ruby>さんでも、<ruby>世話<rt>せわ</rt></ruby>ができるんですね。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> ええ。<ruby>爪<rt>つめ</rt></ruby>を<ruby>切<rt>き</rt></ruby>るとか、そういうことは<ruby>子供<rt>こども</rt></ruby>には<ruby>難<rt>むずか</rt></ruby>しいんで<ruby>私<rt>わたし</rt></ruby>がしますけどね。<strong>それから、シロを<ruby>飼<rt>か</rt></ruby>うようになってから、<ruby>家族<rt>かぞく</rt></ruby>の<ruby>会話<rt>かいわ</rt></ruby>も<ruby>増<rt>ふ</rt></ruby>えた<ruby>気<rt>き</rt></ruby>がします。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> そうですか。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <strong><ruby>幼稚園<rt>ようちえん</rt></ruby>などで<ruby>家族<rt>かぞく</rt></ruby>の<ruby>絵<rt>え</rt></ruby>を<ruby>描<rt>えが</rt></ruby>く<ruby>時<rt>とき</rt></ruby>には、<ruby>必<rt>かなら</rt></ruby>ずシロも<ruby>入<rt>はい</rt></ruby>っているんですよ。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> シロも<ruby>家族<rt>かぞく</rt></ruby>なんですね。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> そうですね。<ruby>私<rt>わたし</rt></ruby>たちが「シロ」と<ruby>名前<rt>なまえ</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>ぶと、いつも<ruby>可愛<rt>かわい</rt></ruby>い<ruby>声<rt>こえ</rt></ruby>で<ruby>答<rt>こた</rt></ruby>えるんです。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、<ruby>何<rt>なに</rt></ruby>について<ruby>話<rt>はな</rt></ruby>していますか。<br>1. <ruby>小鳥<rt>ことり</rt></ruby>の<ruby>世話<rt>せわ</rt></ruby>で<ruby>大変<rt>たいへん</rt></ruby>なこと<br>2. <ruby>小鳥<rt>ことり</rt></ruby>を<ruby>飼<rt>か</rt></ruby>って<ruby>良<rt>よ</rt></ruby>かったこと<br>3. <ruby>小鳥<rt>ことり</rt></ruby>につけた<ruby>名前<rt>なまえ</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby><br>4. <ruby>小鳥<rt>ことり</rt></ruby>を<ruby>上手<rt>じょうず</rt></ruby>に<ruby>飼<rt>か</rt></ruby>う<ruby>方法<rt>ほうほう</rt></ruby></p>",
      "scriptVi": "Nữ phát thanh viên: Nghe nói anh Sato đang nuôi một chú chim nhỏ phải không ạ?\nNam: Vâng, chú chim tên là Shiro.\nNữ: Anh nuôi từ khi nào vậy ạ?\nNam: Từ 2 năm trước. Khi con trai đầu lòng của tôi được 4 tuổi, cháu hứa là sẽ tự tay chăm sóc. Ban đầu tôi cứ ngỡ sẽ vất vả lắm, nhưng cháu vẫn duy trì chăm sóc rất chu đáo. Cháu biết yêu thương và trân trọng sinh vật sống nên tôi rất vui.\nNữ: Trẻ con nhỏ thế mà cũng chăm sóc được chim cơ ạ.\nNam: Vâng. Những việc như cắt móng thì khó với trẻ nhỏ nên tôi làm hộ cháu. Thêm nữa là từ khi nuôi Shiro, tôi cảm thấy gia đình trò chuyện với nhau nhiều hơn.\nNữ: Thế ạ.\nNam: Khi ở trường mẫu giáo vẽ tranh về gia đình, trong tranh của cháu lúc nào cũng có Shiro đấy.\nNữ: Shiro thực sự là một thành viên trong gia đình rồi nhỉ.\nNam: Vâng đúng vậy. Hễ chúng tôi gọi tên Shiro là chú chim lại cất tiếng hót líu lo đáp lời rất đáng yêu.\nCâu hỏi: Người đàn ông đang nói về điều gì?\n1. Những nỗi vất vả khi chăm sóc chim nhỏ\n2. Những điều tốt đẹp / lợi ích có được từ việc nuôi chim nhỏ\n3. Ý nghĩa của cái tên đặt cho chú chim nhỏ\n4. Cách nuôi chim nhỏ thuần thục"
    },
    {
      "id": 32,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai1/32.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. パーティーに招待してほしい",
          "meaning": "Muốn được mời tham gia bữa tiệc.",
          "analysis": "Sai: Người phụ nữ không có ý muốn được mời đi dự tiệc."
        },
        {
          "option": "2. 部屋でパーティーをしないでほしい",
          "meaning": "Yêu cầu tuyệt đối không được mở tiệc trong phòng.",
          "analysis": "Sai: Người phụ nữ nói mở tiệc thì cũng được nhưng vấn đề là giờ giấc ban đêm ('パーティーをするのはいいんですけど、ただ、時間がね')."
        },
        {
          "option": "3. 外国にいた時の話を聞いてほしい",
          "meaning": "Muốn người khác lắng nghe chuyện hồi mình ở nước ngoài.",
          "analysis": "Sai: Chuyện ở nước ngoài chỉ là câu chuyện xã giao người phụ nữ kể thêm."
        },
        {
          "option": "4. 夜遅くに騒がないでほしい",
          "meaning": "Mong đừng làm ồn ào, hò hét vào đêm khuya muộn.",
          "analysis": "ĐÚNG: Người phụ nữ phàn nàn tối qua hàng xóm tiệc tùng to tiếng làm cô khó ngủ ('皆さんちょっと声が大きくて、私、夜なかなか眠れなかったんですよ... パーティーをするのはいいんですけど、ただ、時間がね')."
        }
      ],
      "answer": 3,
      "evidence": "「女：でも、皆さんちょっと声が大きくて、私、夜なかなか眠れなかったんですよ。男：ああ、すみませんでした。...女：パーティーをするのはいいんですけど、ただ、時間がね。男：はい、気をつけます。」",
      "explanation": "Đáp án đúng là 4 (夜遅くに騒がないでほしい).\n- Câu hỏi trong audio: 「女の人が言いたいことは何ですか。」 (Điều người phụ nữ muốn nói là gì?).\n- Người phụ nữ nhắc nhở hàng xóm phòng bên: Tối qua tụ tập tiệc tùng nói chuyện to làm cô khó ngủ (夜なかなか眠れなかった), tổ chức tiệc thì được nhưng phải chú ý giờ giấc ban đêm (ただ、時間がね).\n- Do đó điều cô muốn nhắn nhủ là mong đừng làm ồn ào vào đêm muộn (夜遅くに騒がないでほしい).",
      "scriptJp": "<p><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>中村<rt>なかむら</rt></ruby>さん、こんばんは。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> あ、こんばんは。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>夕<rt>ゆう</rt></ruby>べはお<ruby>友達<rt>ともだち</rt></ruby>たくさん<ruby>来<rt>き</rt></ruby>てたのね。<ruby>賑<rt>にぎ</rt></ruby>やかでしたね。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> あ、はい。<ruby>昨日<rt>きのう</rt></ruby>はパーティーで。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <strong>でも、<ruby>皆<rt>みな</rt></ruby>さんちょっと<ruby>声<rt>こえ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きくて、<ruby>私<rt>わたし</rt></ruby>、<ruby>夜<rt>よる</rt></ruby>なかなか<ruby>眠<rt>ねむ</rt></ruby>れなかったんですよ。</strong><br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> ああ、すみませんでした。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> いいえ、パーティーって<ruby>楽<rt>たの</rt></ruby>しいですよね。<ruby>私<rt>わたし</rt></ruby>も<ruby>若<rt>わか</rt></ruby>い<ruby>頃<rt>ころ</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>とよくパーティーしてたからわかるんです。<ruby>外国<rt>がいこく</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいた<ruby>時<rt>とき</rt></ruby>のことなんですけどね。<strong>パーティーをするのはいいんですけど、ただ、<ruby>時間<rt>じかん</rt></ruby>がね。</strong><br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> はい、<ruby>気<rt>き</rt></ruby>をつけます。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>外国<rt>がいこく</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいらっしゃったんですか？よかったら<ruby>今度<rt>こんど</rt></ruby>、お<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてください。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> ええ、また<ruby>今度<rt>こんど</rt></ruby>ね。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>言<rt>い</rt></ruby>いたいことは<ruby>何<rt>なん</rt></ruby>ですか。<br>1. パーティーに<ruby>招待<rt>しょうたい</rt></ruby>してほしい<br>2. <ruby>部屋<rt>へや</rt></ruby>でパーティーをしないでほしい<br>3. <ruby>外国<rt>がいこく</rt></ruby>にいた<ruby>時<rt>とき</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてほしい<br>4. <ruby>夜<rt>よる</rt></ruby><ruby>遅<rt>おそ</rt></ruby>くに<ruby>騒<rt>さわ</rt></ruby>がないでほしい</p>",
      "scriptVi": "Nữ: Chào anh Nakamura.\nNam: À, chào chị.\nNữ: Tối qua bạn bè đến chơi đông vui quá anh nhỉ. Nhộn nhịp ghê cơ.\nNam: À vâng, tối qua tụi em tổ chức tiệc ạ.\nNữ: Cơ mà mọi người nói chuyện to tiếng quá làm tối qua tôi trằn trọc mãi không ngủ được đấy.\nNam: Ôi, em thành thật xin lỗi chị ạ.\nNữ: Không có gì, mở tiệc thì vui mà. Hồi trẻ tôi cũng hay tụ tập mở tiệc với bạn bè nên tôi hiểu. Hồi tôi còn sống ở nước ngoài ấy mà. Mở tiệc thì được thôi nhưng mà chỉ có điều là giờ giấc muộn quá anh à.\nNam: Dạ vâng, em sẽ chú ý hơn ạ.\nNam: Chị từng sống ở nước ngoài ạ? Nếu được thì bữa nào chị kể chuyện cho em nghe với nhé.\nNữ: Ừ, để bữa nào nhé.\nCâu hỏi: Điều người phụ nữ muốn nói là gì?\n1. Muốn được mời dự tiệc\n2. Muốn hàng xóm không được mở tiệc trong phòng\n3. Muốn người khác nghe chuyện hồi mình ở nước ngoài\n4. Mong đừng làm ồn ào vào đêm muộn"
    },
    {
      "id": 33,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai1/33.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 冬に病気が流行する理由",
          "meaning": "Lý do vì sao các bệnh lại lây lan bùng phát vào mùa đông.",
          "analysis": "Sai: Chỉ nhắc ngắn gọn virus là nguyên nhân chứ bài nói không phân tích sâu về lý do bùng phát."
        },
        {
          "option": "2. インフルエンザの治し方",
          "meaning": "Cách điều trị bệnh cảm cúm khi đã mắc.",
          "analysis": "Sai: Bài nói hướng dẫn cách phòng tránh và bảo vệ cơ thể chứ không hướng dẫn cách chữa trị thuốc men."
        },
        {
          "option": "3. 生活習慣が原因の病気",
          "meaning": "Các căn bệnh xuất phát từ nguyên nhân thói quen sinh hoạt.",
          "analysis": "Sai: Cảm cúm do virus gây ra chứ không phải bệnh do thói quen sinh hoạt."
        },
        {
          "option": "4. ウイルスから体を守る方法",
          "meaning": "Các phương pháp bảo vệ cơ thể khỏi virus gây bệnh.",
          "analysis": "ĐÚNG: Người phụ nữ hướng dẫn rửa tay, súc họng thường xuyên để ngăn virus xâm nhập, duy trì lối sống sinh hoạt điều độ để nâng cao sức đề kháng chống lại virus ('普段から手洗いやうがいをきちんと行い、ウイルスを体の中に取り込まないようにすることが大切です。また、生活習慣を意識し、規則正しい生活を送ると、ウイルスに対する体の力が強くなる')."
        }
      ],
      "answer": 3,
      "evidence": "「女：特に流行する冬は、普段から手洗いやうがいをきちんと行い、ウイルスを体の中に取り込まないようにすることが大切です。また、生活習慣を意識し、規則正しい生活を送ると、ウイルスに対する体の力が強くなることが期待できます。」",
      "explanation": "Đáp án đúng là 4 (ウイルスから体を守る方法).\n- Câu hỏi trong audio: 「女の人は、何について話していますか。」 (Người phụ nữ đang nói về điều gì?).\n- Bài nói tập trung vào các biện pháp phòng chống cảm cúm mùa đông: Rửa tay và súc họng để ngăn virus vào cơ thể, giữ nếp sống sinh hoạt điều độ để tăng cường sức đề kháng chống lại virus.\n- Tổng thể nội dung là các phương pháp bảo vệ cơ thể khỏi virus (ウイルスから体を守る方法).",
      "scriptJp": "<p><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>寒<rt>さむ</rt></ruby>くなってきましたね。<ruby>冬<rt>ふゆ</rt></ruby>は、インフルエンザが<ruby>流行<rt>りゅうこう</rt></ruby>する<ruby>季節<rt>きせつ</rt></ruby>です。これは、ウイルスが<ruby>原因<rt>げんいん</rt></ruby>です。インフルエンザは、<ruby>一年<rt>いちねん</rt></ruby><ruby>中<rt>じゅう</rt></ruby>いつでもかかる<ruby>可能性<rt>かのうせい</rt></ruby>がありますが、<strong><ruby>特<rt>とく</rt></ruby>に<ruby>流行<rt>りゅうこう</rt></ruby>する<ruby>冬<rt>ふゆ</rt></ruby>は、<ruby>普段<rt>ふだん</rt></ruby>から<ruby>手洗<rt>てあら</rt></ruby>いやうがいをきちんと<ruby>行<rt>おこな</rt></ruby>い、ウイルスを<ruby>体<rt>からだ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>込<rt>こ</rt></ruby>まないようにすることが<ruby>大切<rt>たいせつ</rt></ruby>です。また、<ruby>生活<rt>せいかつ</rt></ruby><ruby>習慣<rt>しゅうかん</rt></ruby>を<ruby>意識<rt>いしき</rt></ruby>し、<ruby>規則<rt>きそく</rt></ruby><ruby>正<rt>ただ</rt></ruby>しい<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>ると、ウイルスに<ruby>対<rt>たい</rt></ruby>する<ruby>体<rt>からだ</rt></ruby>の<ruby>力<rt>ちから</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>くなることが<ruby>期待<rt>きたい</rt></ruby>できます。</strong><br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は、<ruby>何<rt>なに</rt></ruby>について<ruby>話<rt>はな</rt></ruby>していますか。<br>1. <ruby>冬<rt>ふゆ</rt></ruby>に<ruby>病気<rt>びょうき</rt></ruby>が<ruby>流行<rt>りゅうこう</rt></ruby>する<ruby>理由<rt>りゆう</rt></ruby><br>2. インフルエンザの<ruby>治<rt>なお</rt></ruby>し<ruby>方<rt>かた</rt></ruby><br>3. <ruby>生活<rt>せいかつ</rt></ruby><ruby>習慣<rt>しゅうかん</rt></ruby>が<ruby>原因<rt>げんいん</rt></ruby>の<ruby>病気<rt>びょうき</rt></ruby><br>4. ウイルスから<ruby>体<rt>からだ</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る<ruby>方法<rt>ほうほう</rt></ruby></p>",
      "scriptVi": "Người phụ nữ: Trời bắt đầu trở lạnh rồi quý vị nhỉ. Mùa đông là mùa mà bệnh cúm mùa lây lan bùng phát, nguyên nhân là do virus. Cúm mùa có khả năng mắc phải vào bất kỳ thời điểm nào trong năm, nhưng đặc biệt vào mùa đông khi bệnh lây lan mạnh, điều quan trọng là quý vị cần duy trì thói quen rửa tay và súc họng thường xuyên để không để virus xâm nhập vào cơ thể. Ngoài ra, việc chú ý đến thói quen sinh hoạt và duy trì lối sống điều độ quy củ sẽ giúp tăng cường sức đề kháng của cơ thể chống lại virus.\nCâu hỏi: Người phụ nữ đang nói về điều gì?\n1. Lý do bệnh tật bùng phát vào mùa đông\n2. Cách chữa trị bệnh cảm cúm\n3. Các căn bệnh có nguyên nhân từ thói quen sinh hoạt\n4. Các phương pháp bảo vệ cơ thể khỏi virus"
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_chude-02",
  "level": "N3",
  "category": "nghe_chude",
  "categoryName": "Nghe chủ đề (ポイント理解)",
  "lessonNumber": 2,
  "title": "Bài 2: Luyện nghe hiểu chủ đề (ポイント理解 第2回)",
  "description": "Dạng bài nghe hiểu chủ đề / điểm cốt lõi (ポイント理解): Lắng nghe câu hỏi và các lựa chọn trực tiếp từ file âm thanh. Bấm chọn 1, 2, 3 hoặc 4.",
  "questions": [
    {
      "id": 34,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai2/34.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 動物園のお客さんの様子",
          "meaning": "Tình hình và dáng vẻ của khách tham quan vườn thú.",
          "analysis": "Sai: Chỉ nhắc mở đầu là có đông khách đến chứ bài nói không miêu tả hành vi hay thái độ của khách tham quan."
        },
        {
          "option": "2. この動物園が人気のある理由",
          "meaning": "Lý do vì sao vườn thú này lại được yêu thích và thu hút nhiều khách.",
          "analysis": "ĐÚNG: Phát thanh viên nêu bật các điểm hấp dẫn: khoảng cách với thú rất gần ngắm rõ mọi chuyển động ('動物との距離がとても近く... 近くでよく観察することができる'), được tự tay cho voi, ngựa ăn ('直接エサをやることもできる'), có sư tử con, và kết luận 'Thảo nào khách lại tụ tập đông đến vậy' ('お客さんが集まるのも納得ですね')."
        },
        {
          "option": "3. 動物の可愛らしさ",
          "meaning": "Sự đáng yêu của các con thú.",
          "analysis": "Sai: Bài nói giới thiệu các trải nghiệm thực tế tại vườn thú chứ không chỉ nói về sự đáng yêu."
        },
        {
          "option": "4. 今、特に人気のある動物",
          "meaning": "Con thú đặc biệt được yêu thích nhất hiện nay.",
          "analysis": "Sai: Có nhắc đến ngựa, voi, sư tử con nhưng không phân tích con nào hot nhất."
        }
      ],
      "answer": 1,
      "evidence": "「アナウンサー：青葉動物園は動物との距離がとても近く、動物の顔や体、動きなど、近くでよく観察することができるんです。...馬やゾウなどいろいろな動物に直接エサをやることもできるんですよ。お客さんが集まるのも納得ですね。」",
      "explanation": "Đáp án đúng là 2 (この動物園が人気のある理由).\n- Câu hỏi trong audio: 「アナウンサーは何について話していますか。」 (Phát thanh viên đang nói về điều gì?).\n- Phát thanh viên giới thiệu những điểm đặc sắc của vườn thú Aoba: Khoảng cách với thú rất gần, có thể trực tiếp cho động vật ăn, ngắm sư tử con. Cuối cùng kết luận việc khách đến đông là điều hoàn toàn dễ hiểu (お客さんが集まるのも納得ですね).\n- Do đó nội dung là lý do vườn thú này được yêu thích (この動物園が人気のある理由).",
      "scriptJp": "<p><strong>アナウンサー：</strong> <ruby>今日<rt>きょう</rt></ruby>は<ruby>青葉<rt>あおば</rt></ruby><ruby>動物<rt>どうぶつ</rt></ruby><ruby>園<rt>えん</rt></ruby>からお<ruby>伝<rt>つた</rt></ruby>えします。<ruby>多<rt>おお</rt></ruby>くのお<ruby>客<rt>きゃく</rt></ruby>さんが<ruby>来<rt>き</rt></ruby>ています。<ruby>青葉<rt>あおば</rt></ruby><ruby>動物<rt>どうぶつ</rt></ruby><ruby>園<rt>えん</rt></ruby>は<strong><ruby>動物<rt>どうぶつ</rt></ruby>との<ruby>距離<rt>きょり</rt></ruby>がとても<ruby>近<rt>ちか</rt></ruby>く、<ruby>動物<rt>どうぶつ</rt></ruby>の<ruby>顔<rt>かお</rt></ruby>や<ruby>体<rt>からだ</rt></ruby>、<ruby>動<rt>うご</rt></ruby>きなど、<ruby>近<rt>ちか</rt></ruby>くでよく<ruby>観察<rt>かんさつ</rt></ruby>することができるんです。</strong><ruby>予約<rt>よやく</rt></ruby>をすれば<ruby>係<rt>かかり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>案内<rt>あんない</rt></ruby>してくれて、<strong><ruby>馬<rt>うま</rt></ruby>やゾウなどいろいろな<ruby>動物<rt>どうぶつ</rt></ruby>に<ruby>直接<rt>ちょくせつ</rt></ruby>エサをやることもできるんですよ。お<ruby>客<rt>きゃく</rt></ruby>さんが<ruby>集<rt>あつ</rt></ruby>まるのも<ruby>納得<rt>なっとく</rt></ruby>ですね。</strong><ruby>今<rt>いま</rt></ruby>ならライオンの<ruby>赤<rt>あか</rt></ruby>ちゃんも<ruby>見<rt>み</rt></ruby>られるそうです。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> アナウンサーは<ruby>何<rt>なに</rt></ruby>について<ruby>話<rt>はな</rt></ruby>していますか。<br>1. <ruby>動物<rt>どうぶつ</rt></ruby><ruby>園<rt>えん</rt></ruby>のお<ruby>客<rt>きゃく</rt></ruby>さんの<ruby>様子<rt>ようす</rt></ruby><br>2. この<ruby>動物<rt>どうぶつ</rt></ruby><ruby>園<rt>えん</rt></ruby>が<ruby>人気<rt>にんき</rt></ruby>のある<ruby>理由<rt>りゆう</rt></ruby><br>3. <ruby>動物<rt>どうぶつ</rt></ruby>の<ruby>可愛<rt>かわい</rt></ruby>らしさ<br>4. <ruby>今<rt>いま</rt></ruby>、<ruby>特<rt>とく</rt></ruby>に<ruby>人気<rt>にんき</rt></ruby>のある<ruby>動物<rt>どうぶつ</rt></ruby></p>",
      "scriptVi": "Phát thanh viên: Hôm nay chúng tôi xin phát sóng từ Vườn thú Aoba. Đang có rất đông khách tham quan ghé thăm. Tại Vườn thú Aoba, khoảng cách với các loài động vật rất gần, quý vị có thể quan sát thật kỹ khuôn mặt, cơ thể và từng chuyển động của chúng ở cự ly gần. Nếu đặt hẹn trước, nhân viên hướng dẫn sẽ dẫn đường và quý vị có thể tự tay cho nhiều loài động vật như ngựa hay voi ăn trực tiếp. Thảo nào mà khách tham quan lại đổ về đây đông đến vậy. Hiện tại nghe nói quý vị còn có thể ngắm cả những chú sư tử con mới sinh nữa.\nCâu hỏi: Phát thanh viên đang nói về điều gì?\n1. Tình hình của khách tham quan vườn thú\n2. Lý do vườn thú này được yêu thích\n3. Sự đáng yêu của các con thú\n4. Con thú đặc biệt được yêu thích nhất hiện nay"
    },
    {
      "id": 35,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai2/35.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 授業で見る映画のストーリー",
          "meaning": "Cốt truyện của bộ phim sẽ xem trong tiết học.",
          "analysis": "Sai: Chỉ nhắc tên phim là 'Cho đến ngày tái ngộ' chứ không tóm tắt cốt truyện."
        },
        {
          "option": "2. 日本映画の特徴",
          "meaning": "Đặc điểm chung của nền điện ảnh Nhật Bản.",
          "analysis": "Sai: Không phân tích đặc trưng của phim Nhật."
        },
        {
          "option": "3. 映画に出てくる日本の習慣",
          "meaning": "Các phong tục tập quán Nhật Bản xuất hiện trong phim.",
          "analysis": "Sai: Việc học phong tục tập quán chỉ là một trong các lợi ích được nêu ra."
        },
        {
          "option": "4. 授業で映画を使う目的",
          "meaning": "Mục đích của việc sử dụng phim ảnh trong giảng dạy trên lớp.",
          "analysis": "ĐÚNG: Thầy giáo giải thích lý do cho xem phim: giúp học sinh cải thiện kỹ năng nghe tiếng Nhật đời thực ('映画は聞き取りの力を伸ばすのに大きな効果があります'), có thể lấy câu thoại để luyện đàm thoại, và học thêm văn hóa tập quán ('会話練習もできますし、その国の習慣や文化を学ぶこともできる')."
        }
      ],
      "answer": 3,
      "evidence": "「先生：教科書に出てる日本語は分かるけど、実際の生活の中での日本語は聞き取りが難しいという声を学生の皆さんから聞きます。映画は聞き取りの力を伸ばすのに大きな効果があります。映画に出てきた会話を使って会話練習もできますし、その国の習慣や文化を学ぶこともできるんです。」",
      "explanation": "Đáp án đúng là 4 (授業で映画を使う目的).\n- Câu hỏi trong audio: 「先生は何について話していますか。」 (Thầy giáo đang nói về điều gì?).\n- Thầy giáo thông báo tiết sau sẽ xem phim Nhật và giải thích các lợi ích: Nâng cao kỹ năng nghe hiểu tiếng Nhật thực tế, luyện tập giao tiếp qua các câu thoại trong phim, học hỏi văn hóa tập quán.\n- Toàn bộ nội dung nhằm nêu rõ mục đích của việc xem phim trong giờ học (授業で映画を使う目的).",
      "scriptJp": "<p><strong><ruby>先生<rt>せんせい</rt></ruby>：</strong> <ruby>来週<rt>らいしゅう</rt></ruby>のこの<ruby>授業<rt>じゅぎょう</rt></ruby>では、<ruby>日本<rt>にほん</rt></ruby>の<ruby>映画<rt>えいが</rt></ruby>「また<ruby>会<rt>あ</rt></ruby>う<ruby>日<rt>ひ</rt></ruby>まで」を<ruby>見<rt>み</rt></ruby>ます。えー、<ruby>時々<rt>ときどき</rt></ruby>、<ruby>教科書<rt>きょうかしょ</rt></ruby>に<ruby>出<rt>で</rt></ruby>てる<ruby>日本語<rt>にほんご</rt></ruby>は<ruby>分<rt>わ</rt></ruby>かるけど、<strong><ruby>実際<rt>じっさい</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>での<ruby>日本語<rt>にほんご</rt></ruby>は<ruby>聞<rt>き</rt></ruby>き<ruby>取<rt>と</rt></ruby>りが<ruby>難<rt>むずか</rt></ruby>しい</strong>という<ruby>声<rt>こえ</rt></ruby>を<ruby>学生<rt>がくせい</rt></ruby>の<ruby>皆<rt>みな</rt></ruby>さんから<ruby>聞<rt>き</rt></ruby>きます。<strong><ruby>映画<rt>えいが</rt></ruby>は<ruby>聞<rt>き</rt></ruby>き<ruby>取<rt>と</rt></ruby>りの<ruby>力<rt>ちから</rt></ruby>を<ruby>伸<rt>の</rt></ruby>ばすのに<ruby>大<rt>おお</rt></ruby>きな<ruby>効果<rt>こうか</rt></ruby>があります。<ruby>映画<rt>えいが</rt></ruby>に<ruby>出<rt>で</rt></ruby>てきた<ruby>会話<rt>かいわ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>会話<rt>かいわ</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>もできますし、その<ruby>国<rt>くに</rt></ruby>の<ruby>習慣<rt>しゅうかん</rt></ruby>や<ruby>文化<rt>ぶんか</rt></ruby>を<ruby>学<rt>まな</rt></ruby>ぶこともできるんです。</strong><br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>先生<rt>せんせい</rt></ruby>は<ruby>何<rt>なに</rt></ruby>について<ruby>話<rt>はな</rt></ruby>していますか。<br>1. <ruby>授業<rt>じゅぎょう</rt></ruby>で<ruby>見<rt>み</rt></ruby>る<ruby>映画<rt>えいが</rt></ruby>のストーリー<br>2. <ruby>日本<rt>にほん</rt></ruby><ruby>映画<rt>えいが</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby><br>3. <ruby>映画<rt>えいが</rt></ruby>に<ruby>出<rt>で</rt></ruby>てくる<ruby>日本<rt>にほん</rt></ruby>の<ruby>習慣<rt>しゅうかん</rt></ruby><br>4. <ruby>授業<rt>じゅぎょう</rt></ruby>で<ruby>映画<rt>えいが</rt></ruby>を<ruby>使<rt>つか</rt></ruby>う<ruby>目的<rt>もくてき</rt></ruby></p>",
      "scriptVi": "Thầy giáo: Trong tiết học này vào tuần tới, chúng ta sẽ xem bộ phim Nhật Bản có tựa đề 'Cho đến ngày tái ngộ'. Thầy thỉnh thoảng có nghe nhiều bạn học sinh chia sẻ rằng tiếng Nhật trong sách giáo khoa thì các em hiểu, nhưng tiếng Nhật trong đời sống thực tế thì nghe lại rất khó. Phim ảnh mang lại hiệu quả to lớn trong việc nâng cao kỹ năng nghe hiểu của các em. Chúng ta vừa có thể sử dụng các đoạn đối thoại trong phim để luyện giao tiếp, lại vừa có thể học hỏi thêm về văn hóa cũng như phong tục tập quán của đất nước đó nữa.\nCâu hỏi: Thầy giáo đang nói về điều gì?\n1. Cốt truyện của bộ phim sẽ xem trong giờ học\n2. Đặc điểm của điện ảnh Nhật Bản\n3. Các phong tục Nhật Bản xuất hiện trong phim\n4. Mục đích của việc sử dụng phim ảnh trong giờ học"
    },
    {
      "id": 36,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai2/36.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. ゴミを減らす工夫",
          "meaning": "Các mẹo và giải pháp sáng tạo để giảm thiểu lượng rác thải.",
          "analysis": "ĐÚNG: Cả hai trao đổi về cách giảm lượng rác thải sinh hoạt: tự pha trà mang theo thay vì mua chai/lon nước ngoài đường ('買わないでお茶とか自分で作るようにしたら、随分減らせたんですよ'), tự nấu ăn để giảm hộp xốp ('僕も料理すればお弁当の容器とか... なくなる'), rửa sạch rau củ nấu luôn cả vỏ để bớt rác hữu cơ ('野菜もよく洗って、皮も一緒に料理すればもっとゴミ少なくできますよ')."
        },
        {
          "option": "2. ゴミの種類多さ",
          "meaning": "Sự đa dạng và nhiều chủng loại của rác thải.",
          "analysis": "Sai: Không nói về việc có bao nhiêu loại rác."
        },
        {
          "option": "3. ゴミを出すときのルール",
          "meaning": "Các quy định và luật lệ khi mang rác đi vứt.",
          "analysis": "Sai: Hai người gặp nhau ở nơi vứt rác nhưng không bàn về quy định ngày giờ đổ rác."
        },
        {
          "option": "4. ゴミのリサイクル方法",
          "meaning": "Quy trình và cách thức tái chế rác thải.",
          "analysis": "Sai: Không bàn về việc tái chế rác trong nhà máy."
        }
      ],
      "answer": 0,
      "evidence": "「女：買わないでお茶とか自分で作るようにしたら、随分減らせたんですよ。男：あー、僕も料理すればお弁当の容器とか、ゴミで出すこともなくなるんですよね。女：料理するなら、野菜もよく洗って、皮も一緒に料理すればもっとゴミ少なくできますよ。」",
      "explanation": "Đáp án đúng là 1 (ゴミを減らす工夫).\n- Câu hỏi trong audio: 「二人は何について話していますか。」 (Hai người đang nói về điều gì?).\n- Cuộc đối thoại xoay quanh các phương pháp giảm lượng rác thải sinh hoạt hàng ngày: Tự pha trà uống để giảm chai lon, tự nấu ăn để giảm hộp cơm dùng một lần, nấu ăn dùng cả vỏ rau củ để giảm rác hữu cơ.\n- Toàn bộ nội dung là các mẹo giảm thiểu rác thải (ゴミを減らす工夫).",
      "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>山田<rt>やまだ</rt></ruby>さん、おはようございます。あれ？<ruby>山田<rt>やまだ</rt></ruby>さん、<ruby>出<rt>だ</rt></ruby>すゴミ<ruby>少<rt>すく</rt></ruby>ないですね。<ruby>僕<rt>ぼく</rt></ruby>はコンビニのお<ruby>弁当<rt>べんとう</rt></ruby>の<ruby>容器<rt>ようき</rt></ruby>とか、パンの<ruby>袋<rt>ふくろ</rt></ruby>とか、すぐ<ruby>溜<rt>た</rt></ruby>まっちゃって。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>私<rt>わたし</rt></ruby>も<ruby>前<rt>まえ</rt></ruby>はよく<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby><ruby>買<rt>か</rt></ruby>ってて、ペットボトルとか<ruby>缶<rt>かん</rt></ruby>のゴミが<ruby>結構<rt>けっこう</rt></ruby>あったんです。でも、<strong><ruby>買<rt>か</rt></ruby>わないでお<ruby>茶<rt>ちゃ</rt></ruby>とか<ruby>自分<rt>じぶん</rt></ruby>で<ruby>作<rt>つく</rt></ruby>るようにしたら、<ruby>随分<rt>ずいぶん</rt></ruby><ruby>減<rt>へ</rt></ruby>らせたんですよ。</strong><br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> あー、<strong><ruby>僕<rt>ぼく</rt></ruby>も<ruby>料理<rt>りょうり</rt></ruby>すればお<ruby>弁当<rt>べんとう</rt></ruby>の<ruby>容器<rt>ようき</rt></ruby>とか、ゴミで<ruby>出<rt>だ</rt></ruby>すこともなくなるんですよね。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <strong><ruby>料理<rt>りょうり</rt></ruby>するなら、<ruby>野菜<rt>やさい</rt></ruby>もよく<ruby>洗<rt>あら</rt></ruby>って、<ruby>皮<rt>かわ</rt></ruby>も<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>料理<rt>りょうり</rt></ruby>すればもっとゴミ<ruby>少<rt>すく</rt></ruby>なくできますよ。</strong><br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> なるほど。<ruby>僕<rt>ぼく</rt></ruby>も<ruby>頑張<rt>がんば</rt></ruby>ってみよう。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>は<ruby>何<rt>なに</rt></ruby>について<ruby>話<rt>はな</rt></ruby>していますか。<br>1. ゴミを<ruby>減<rt>へ</rt></ruby>らす<ruby>工夫<rt>くふう</rt></ruby><br>2. ゴミの<ruby>種類<rt>しゅるい</rt></ruby><ruby>多<rt>おお</rt></ruby>さ<br>3. ゴミを<ruby>出<rt>だ</rt></ruby>すときのルール<br>4. ゴミのリサイクル<ruby>方法<rt>ほうほう</rt></ruby></p>",
      "scriptVi": "Nam: Chào buổi sáng chị Yamada. Ơ kìa? Chị Yamada mang ít rác đi vứt ghê nhỉ. Em thì nào là hộp cơm tiện lợi, túi đựng bánh mì, tích lại cái là đầy ngay.\nNữ: Trước đây tôi cũng hay mua nước uống ngoài nên rác chai nhựa với vỏ lon nhiều lắm. Nhưng mà từ khi không mua ngoài nữa mà tự nấu trà mang theo thì lượng rác giảm hẳn đấy anh.\nNam: À, nếu em cũng tự nấu ăn thì mấy cái hộp đựng cơm hộp các thứ cũng chẳng còn để mà vứt đi nữa chị nhỉ.\nNữ: Nếu anh tự nấu ăn, rau củ rửa sạch rồi nấu luôn cả vỏ thì lượng rác còn giảm được nhiều hơn nữa đấy.\nNam: Ra là vậy. Để em cũng cố gắng thử xem sao.\nCâu hỏi: Hai người đang nói về điều gì?\n1. Các mẹo để giảm lượng rác thải\n2. Sự đa dạng của các loại rác\n3. Quy tắc khi mang rác đi đổ\n4. Phương pháp tái chế rác thải"
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_chude-03",
  "level": "N3",
  "category": "nghe_chude",
  "categoryName": "Nghe chủ đề (ポイント理解)",
  "lessonNumber": 3,
  "title": "Bài 3: Luyện nghe hiểu chủ đề (ポイント理解 第3回)",
  "description": "Dạng bài nghe hiểu chủ đề / điểm cốt lõi (ポイント理解): Lắng nghe câu hỏi và các lựa chọn trực tiếp từ file âm thanh. Bấm chọn 1, 2, 3 hoặc 4.",
  "questions": [
    {
      "id": 37,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai3/37.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 練習と同じように落ち着いてできた。",
          "meaning": "Đã thi đấu bình tĩnh y hệt như lúc tập luyện.",
          "analysis": "Sai: Vận động viên phủ nhận và nói tim đập thình thịch rất hồi hộp ('いや、全然そんなことないよ。ドキドキしてた')."
        },
        {
          "option": "2. 練習不足で失敗が多かった。",
          "meaning": "Do thiếu tập luyện nên mắc nhiều sai lầm.",
          "analysis": "Sai: Anh ấy đã nỗ lực tập luyện rất nhiều ('練習頑張ってきたけど')."
        },
        {
          "option": "3. 相手が弱く、簡単に勝てた。",
          "meaning": "Đối thủ yếu nên đã dễ dàng giành chiến thắng.",
          "analysis": "Sai: Đối thủ là người từng nhiều lần vô địch rất mạnh ('何度も優勝している選手が相手だったから')."
        },
        {
          "option": "4. 緊張したが、応援で頑張れた。",
          "meaning": "Dù rất hồi hộp căng thẳng nhưng nhờ sự cổ vũ của mọi người nên đã nỗ lực hết mình.",
          "analysis": "ĐÚNG: Anh chia sẻ bản thân rất hồi hộp, lúc bị dẫn điểm tưởng chừng bỏ cuộc, nhưng nghe tiếng hò reo cổ vũ của mọi người thì sức mạnh lại trào dâng để nỗ lực chiến thắng ('ドキドキしてた... 点数に差が出た時は、もうダメだと思ったけど、みんなの声が聞こえて、絶対負けられないと思ったんだ。そうしたら力が出てきて')."
        }
      ],
      "answer": 3,
      "evidence": "「男：ドキドキしてた。...何度も優勝している選手が相手だったから、点数に差が出た時は、もうダメだと思ったけど、みんなの声が聞こえて、絶対負けられないと思ったんだ。そうしたら力が出てきて。」",
      "explanation": "Đáp án đúng là 4 (緊張したが、応援で頑張れた).\n- Câu hỏi trong audio: 「男の選手は、試合についてどう言っていますか？」 (Vận động viên nam nói gì về trận đấu?).\n- Nam vận động viên chia sẻ: Anh rất hồi hộp (ドキドキしてた), đối thủ lại từng nhiều lần vô địch nên lúc bị dẫn điểm tưởng như thua cuộc. Nhưng nhờ nghe thấy tiếng hò reo cổ vũ của mọi người (みんなの声), anh được tiếp thêm sức mạnh để quyết tâm lội ngược dòng giành chiến thắng.",
      "scriptJp": "<p><strong><ruby>女<rt>おんな</rt></ruby>：</strong> お<ruby>疲<rt>つか</rt></ruby>れ<ruby>様<rt>さま</rt></ruby>。<ruby>勝<rt>か</rt></ruby>ってよかったね！すごく<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いているように<ruby>見<rt>み</rt></ruby>えたよ。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <strong>いや、<ruby>全然<rt>ぜんぜん</rt></ruby>そんなことないよ。ドキドキしてた。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> そうだったんだ、わからなかったよ。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>練習<rt>れんしゅう</rt></ruby><ruby>頑張<rt>がんば</rt></ruby>ってきたけど、<ruby>練習<rt>れんしゅう</rt></ruby>と<ruby>試合<rt>しあい</rt></ruby>は<ruby>違<rt>ちが</rt></ruby>うからね。<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>も<ruby>優勝<rt>ゆうしょう</rt></ruby>している<ruby>選手<rt>せんしゅ</rt></ruby>が<ruby>相手<rt>あいて</rt></ruby>だったから、<ruby>点数<rt>てんすう</rt></ruby>に<ruby>差<rt>さ</rt></ruby>が<ruby>出<rt>で</rt></ruby>た<ruby>時<rt>とき</rt></ruby>は、もうダメだと<ruby>思<rt>おも</rt></ruby>ったけど、<strong>みんなの<ruby>声<rt>こえ</rt></ruby>が<ruby>聞<rt>き</rt></ruby>こえて、<ruby>絶対<rt>ぜったい</rt></ruby><ruby>負<rt>ま</rt></ruby>けられないと<ruby>思<rt>おも</rt></ruby>ったんだ。そうしたら<ruby>力<rt>ちから</rt></ruby>が<ruby>出<rt>で</rt></ruby>てきて。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> そっか、<ruby>本当<rt>ほんとう</rt></ruby>によかったね。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>男<rt>おとこ</rt></ruby>の<ruby>選手<rt>せんしゅ</rt></ruby>は、<ruby>試合<rt>しあい</rt></ruby>についてどう<ruby>言<rt>い</rt></ruby>っていますか？<br>1. <ruby>練習<rt>れんしゅう</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じように<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いてできた。<br>2. <ruby>練習<rt>れんしゅう</rt></ruby><ruby>不足<rt>ふそく</rt></ruby>で<ruby>失敗<rt>しっぱい</rt></ruby>が<ruby>多<rt>おお</rt></ruby>かった。<br>3. <ruby>相手<rt>あいて</rt></ruby>が<ruby>弱<rt>よわ</rt></ruby>く、<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>勝<rt>か</rt></ruby>てた。<br>4. <ruby>緊張<rt>きんちょう</rt></ruby>したが、<ruby>応援<rt>おうえん</rt></ruby>で<ruby>頑張<rt>がんば</rt></ruby>れた。</p>",
      "scriptVi": "Nữ: Vất vả cho cậu rồi. Thắng trận tốt quá! Trông cậu thi đấu cực kỳ bình tĩnh luôn đấy.\nNam: Đâu có, hoàn toàn không phải vậy đâu. Tim tớ đập thình thịch hồi hộp muốn chết.\nNữ: Thế hả, nhìn ngoài chẳng nhận ra luôn.\nNam: Tớ đã tập luyện rất chăm chỉ, nhưng mà tập luyện với thi đấu thực tế khác hẳn nhau. Đối thủ lại là tay vợt từng nhiều lần vô địch, nên lúc bị cách biệt điểm số tớ đã ngỡ là toi rồi. Nhưng đúng lúc ấy nghe thấy tiếng hò reo cổ vũ của mọi người, tớ nghĩ nhất định không thể chịu thua được. Thế là sức mạnh lại tự nhiên trào dâng.\nNữ: Ra là vậy, thật là mừng cho cậu.\nCâu hỏi: Vận động viên nam nói gì về trận đấu?\n1. Đã thi đấu bình tĩnh như lúc tập luyện\n2. Do thiếu tập luyện nên mắc nhiều sai lầm\n3. Đối thủ yếu nên đã dễ dàng thắng trận\n4. Dù rất căng thẳng nhưng nhờ sự cổ vũ nên đã nỗ lực hết mình"
    },
    {
      "id": 38,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai3/38.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 猫をペットにする時の注意",
          "meaning": "Những điều cần lưu ý khi nuôi mèo làm thú cưng tại nhà.",
          "analysis": "Sai: Bài nói giới thiệu quán cà phê mèo cho người không nuôi được mèo chứ không hướng dẫn cách nuôi mèo ở nhà."
        },
        {
          "option": "2. 猫と一緒に過ごせる店",
          "meaning": "Quán cà phê nơi khách có thể cùng trải nghiệm, vui chơi và ở bên cạnh những chú mèo.",
          "analysis": "ĐÚNG: Phát thanh viên giới thiệu quán 'Mike' trước ga Midori: uống trà/cà phê, ngắm mèo ở cự ly gần ('さまざまな猫をすぐそばで見ることができます'), vuốt ve, chơi đùa cùng mèo ('自由に触ったり、一緒に遊ぶこともできます'), cho mèo ăn."
        },
        {
          "option": "3. 猫の好きなエサの種類",
          "meaning": "Các loại thức ăn mà loài mèo yêu thích.",
          "analysis": "Sai: Chỉ nhắc quán có chuẩn bị sẵn thức ăn cho mèo để khách cho ăn."
        },
        {
          "option": "4. 猫の名前の募集",
          "meaning": "Việc mở đợt bình chọn / kêu gọi đặt tên cho mèo.",
          "analysis": "Sai: Việc đặt tên chỉ là một hoạt động thú vị tại quán."
        }
      ],
      "answer": 1,
      "evidence": "「男：猫が好きだけど、何か理由があってペットとして飼うことができないという方。緑駅前の「ミケ」というお店では、コーヒーや紅茶を飲みながら、さまざまな猫をすぐそばで見ることができますよ。注意を守れば、自由に触ったり、一緒に遊ぶこともできます。」",
      "explanation": "Đáp án đúng là 2 (猫と一緒に過ごせる店).\n- Câu hỏi trong audio: 「アナウンサーは、何について話していますか？」 (Phát thanh viên đang nói về điều gì?).\n- Phát thanh viên giới thiệu quán cà phê 'Mike' dành cho những người yêu mèo: Vừa uống cà phê vừa ngắm mèo, vuốt ve, chơi đùa và cho mèo ăn.\n- Toàn bộ nội dung là giới thiệu một quán dịch vụ nơi mọi người có thể đến trải nghiệm cùng mèo (猫と一緒に過ごせる店).",
      "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>猫<rt>ねこ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きだけど、<ruby>何<rt>なに</rt></ruby>か<ruby>理由<rt>りゆう</rt></ruby>があってペットとして<ruby>飼<rt>か</rt></ruby>うことができないという<ruby>方<rt>かた</rt></ruby>。<strong><ruby>緑<rt>みどり</rt></ruby><ruby>駅<rt>えき</rt></ruby><ruby>前<rt>まえ</rt></ruby>の「ミケ」というお<ruby>店<rt>みせ</rt></ruby>では、コーヒーやお<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みながら、さまざまな<ruby>猫<rt>ねこ</rt></ruby>をすぐそばで<ruby>見<rt>み</rt></ruby>ることができますよ。<ruby>注意<rt>ちゅうい</rt></ruby>を<ruby>守<rt>まも</rt></ruby>れば、<ruby>自由<rt>じゆう</rt></ruby>に<ruby>触<rt>さわ</rt></ruby>ったり、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>遊<rt>あそ</rt></ruby>ぶこともできます。</strong>いろいろな<ruby>種類<rt>しゅるい</rt></ruby>のエサもあって、エサをやることも<ruby>可能<rt>かのう</rt></ruby>です。<ruby>人<rt>ひと</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れている<ruby>猫<rt>ねこ</rt></ruby>ばかりですので、<ruby>安心<rt>あんしん</rt></ruby>ですよ。<ruby>新<rt>あたら</rt></ruby>しい<ruby>猫<rt>ねこ</rt></ruby>が<ruby>入<rt>はい</rt></ruby>った<ruby>時<rt>とき</rt></ruby>には、<ruby>名前<rt>なまえ</rt></ruby>を<ruby>募集<rt>ぼしゅう</rt></ruby>することもあるそうです。<ruby>自分<rt>じぶん</rt></ruby>が<ruby>名前<rt>なまえ</rt></ruby>をつけた<ruby>猫<rt>ねこ</rt></ruby>がいると、<ruby>会<rt>あ</rt></ruby>いにいきたくなりますよね。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> アナウンサーは、<ruby>何<rt>なに</rt></ruby>について<ruby>話<rt>はな</rt></ruby>していますか？<br>1. <ruby>猫<rt>ねこ</rt></ruby>をペットにする<ruby>時<rt>とき</rt></ruby>の<ruby>注意<rt>ちゅうい</rt></ruby><br>2. <ruby>猫<rt>ねこ</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>過<rt>す</rt></ruby>ごせる<ruby>店<rt>みせ</rt></ruby><br>3. <ruby>猫<rt>ねこ</rt></ruby>の<ruby>好<rt>す</rt></ruby>きなエサの<ruby>種類<rt>しゅるい</rt></ruby><br>4. <ruby>猫<rt>ねこ</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>の<ruby>募集<rt>ぼしゅう</rt></ruby></p>",
      "scriptVi": "Phát thanh viên nam: Dành cho những quý vị rất thích mèo nhưng vì lý do nào đó không thể nuôi làm thú cưng tại nhà. Tại quán mang tên 'Mike' trước ga Midori, quý vị có thể vừa thưởng thức cà phê hay trà, vừa được ngắm nhìn nhiều chú mèo khác nhau ở ngay cự ly gần. Chỉ cần tuân thủ các lưu ý, quý vị có thể thoải mái vuốt ve hay cùng chơi đùa với chúng. Quán cũng có sẵn nhiều loại thức ăn để quý vị có thể tự tay cho mèo ăn. Toàn bộ là những chú mèo rất quấn và quen với người nên quý vị hoàn toàn có thể yên tâm. Khi có chú mèo mới đến, nghe nói quán còn mở đợt kêu gọi đặt tên nữa. Nếu có chú mèo do chính mình đặt tên thì ai cũng sẽ muốn đến thăm phải không quý vị.\nCâu hỏi: Phát thanh viên đang nói về điều gì?\n1. Những lưu ý khi nuôi mèo làm thú cưng\n2. Quán cà phê nơi có thể tận hưởng thời gian bên cạnh những chú mèo\n3. Các loại thức ăn mà loài mèo yêu thích\n4. Việc kêu gọi bình chọn đặt tên cho mèo"
    },
    {
      "id": 39,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai3/39.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 祭りの歴史",
          "meaning": "Lịch sử và nguồn gốc hình thành của lễ hội.",
          "analysis": "Sai: Chỉ nhắc đây là lần thứ 5 tổ chức chứ không nói sâu về lịch sử."
        },
        {
          "option": "2. 祭りをつくった理由",
          "meaning": "Nguyên nhân và lý do ban đầu sáng lập nên lễ hội.",
          "analysis": "Sai: Không nói về lý do tại sao người ta lại tạo ra lễ hội."
        },
        {
          "option": "3. 祭りによる効果",
          "meaning": "Những hiệu quả và tác động tích cực do lễ hội mang lại cho địa phương.",
          "analysis": "ĐÚNG: Phát thanh viên nêu rõ: Lễ hội giúp nhiều người biết đến thị trấn nhỏ hơn ('祭りでこの町を知る人も増えました'), khách du lịch đến tham quan quanh năm kể cả ngoài mùa lễ hội ('今では、祭り以外の時期にも観光に来る人が増えています'), giúp giới trẻ có cơ hội hiểu biết và gắn bó hơn với quê hương mình ('若者が自分たちの町について知る機会にもなっています')."
        },
        {
          "option": "4. 祭りに対する町の人たちの意見",
          "meaning": "Các ý kiến đánh giá của người dân trong thị trấn đối với lễ hội.",
          "analysis": "Sai: Không phỏng vấn hay trích dẫn ý kiến của người dân."
        }
      ],
      "answer": 2,
      "evidence": "「女：桜町は小さい町ですが、祭りでこの町を知る人も増えました。今では、祭り以外の時期にも観光に来る人が増えています。毎年、町の若者が中心になってこの祭りを行っていて、若者が自分たちの町について知る機会にもなっています。」",
      "explanation": "Đáp án đúng là 3 (祭りによる効果).\n- Câu hỏi trong audio: 「アナウンサーは、この祭りの何について話していますか？」 (Phát thanh viên đang nói về điều gì của lễ hội này?).\n- Phát thanh viên phân tích các lợi ích mà Lễ hội âm nhạc Sakura mang lại: Giúp thị trấn nhỏ được nhiều người biết đến, gia tăng lượng khách du lịch vào các mùa khác trong năm, tạo cơ hội cho giới trẻ địa phương tìm hiểu và gắn kết với quê hương.\n- Toàn bộ nội dung là các tác động/hiệu quả tích cực do lễ hội đem lại (祭りによる効果).",
      "scriptJp": "<p><strong>アナウンサー：</strong> <ruby>来月<rt>らいげつ</rt></ruby>8<ruby>日<rt>ようか</rt></ruby>から、<ruby>桜<rt>さくら</rt></ruby><ruby>町<rt>まち</rt></ruby>で<ruby>第<rt>だい</rt></ruby>5<ruby>回<rt>かい</rt></ruby>「<ruby>桜<rt>さくら</rt></ruby><ruby>音楽<rt>おんがく</rt></ruby><ruby>祭<rt>まつ</rt></ruby>り」が<ruby>行<rt>おこな</rt></ruby>われます。3<ruby>日間<rt>にちかん</rt></ruby>、<ruby>町<rt>まち</rt></ruby>の<ruby>公園<rt>こうえん</rt></ruby>やお<ruby>店<rt>みせ</rt></ruby>でクラシックやジャズなどが<ruby>演奏<rt>えんそう</rt></ruby>されるこの<ruby>祭<rt>まつ</rt></ruby>り。<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>楽<rt>たの</rt></ruby>しむために、<ruby>毎年<rt>まいとし</rt></ruby><ruby>多<rt>おお</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby>が<ruby>集<rt>あつ</rt></ruby>まります。<strong><ruby>桜<rt>さくら</rt></ruby><ruby>町<rt>まち</rt></ruby>は<ruby>小<rt>ちい</rt></ruby>さい<ruby>町<rt>まち</rt></ruby>ですが、<ruby>祭<rt>まつ</rt></ruby>りでこの<ruby>町<rt>まち</rt></ruby>を<ruby>知<rt>し</rt></ruby>る<ruby>人<rt>ひと</rt></ruby>も<ruby>増<rt>ふ</rt></ruby>えました。<ruby>今<rt>いま</rt></ruby>では、<ruby>祭<rt>まつ</rt></ruby>り<ruby>以外<rt>いがい</rt></ruby>の<ruby>時期<rt>じき</rt></ruby>にも<ruby>観光<rt>かんこう</rt></ruby>に<ruby>来<rt>く</rt></ruby>る<ruby>人<rt>ひと</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えています。<ruby>毎年<rt>まいとし</rt></ruby>、<ruby>町<rt>まち</rt></ruby>の<ruby>若者<rt>わかもの</rt></ruby>が<ruby>中心<rt>ちゅうしん</rt></ruby>になってこの<ruby>祭<rt>まつ</rt></ruby>りを<ruby>行<rt>おこな</rt></ruby>っていて、<ruby>若者<rt>わかもの</rt></ruby>が<ruby>自分<rt>じぶん</rt></ruby>たちの<ruby>町<rt>まち</rt></ruby>について<ruby>知<rt>し</rt></ruby>る<ruby>機会<rt>きかい</rt></ruby>にもなっています。</strong><br><strong><ruby>問<rt>と</rt></ruby>い：</strong> アナウンサーは、この<ruby>祭<rt>まつ</rt></ruby>りの<ruby>何<rt>なに</rt></ruby>について<ruby>話<rt>はな</rt></ruby>していますか？<br>1. <ruby>祭<rt>まつ</rt></ruby>りの<ruby>歴史<rt>れきし</rt></ruby><br>2. <ruby>祭<rt>まつ</rt></ruby>りをつくった<ruby>理由<rt>りゆう</rt></ruby><br>3. <ruby>祭<rt>まつ</rt></ruby>りによる<ruby>効果<rt>こうか</rt></ruby><br>4. <ruby>祭<rt>まつ</rt></ruby>りに<ruby>対<rt>たい</rt></ruby>する<ruby>町<rt>まち</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>たちの<ruby>意見<rt>いけん</rt></ruby></p>",
      "scriptVi": "Phát thanh viên nữ: Kể từ ngày 8 tháng sau, tại thị trấn Sakura sẽ diễn ra 'Lễ hội Âm nhạc Sakura' lần thứ 5. Trong suốt 3 ngày, các thể loại âm nhạc như cổ điển hay jazz sẽ được trình diễn tại các công viên và cửa hàng trong thị trấn. Hàng năm đều có rất đông người đổ về để cùng thưởng thức âm nhạc. Sakura là một thị trấn nhỏ, nhưng nhờ có lễ hội mà số người biết đến thị trấn đã tăng lên đáng kể. Hiện nay, ngay cả vào những khoảng thời gian ngoài mùa lễ hội, lượng khách đến du lịch cũng ngày một nhiều hơn. Hàng năm, giới trẻ trong thị trấn là lực lượng nòng cốt đứng ra tổ chức lễ hội này, và đây cũng chính là cơ hội quý báu để các bạn trẻ tìm hiểu và thêm yêu thị trấn của mình.\nCâu hỏi: Phát thanh viên đang nói về khía cạnh nào của lễ hội này?\n1. Lịch sử của lễ hội\n2. Lý do sáng lập ra lễ hội\n3. Những hiệu quả / tác động tích cực do lễ hội mang lại\n4. Ý kiến của người dân thị trấn đối với lễ hội"
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_chude-04",
  "level": "N3",
  "category": "nghe_chude",
  "categoryName": "Nghe chủ đề (ポイント理解)",
  "lessonNumber": 4,
  "title": "Bài 4: Luyện nghe hiểu chủ đề (ポイント理解 第4回)",
  "description": "Dạng bài nghe hiểu chủ đề / điểm cốt lõi (ポイント理解): Lắng nghe câu hỏi và các lựa chọn trực tiếp từ file âm thanh. Bấm chọn 1, 2, 3 hoặc 4.",
  "questions": [
    {
      "id": 40,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai4/40.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. マラソンの練習方法",
          "meaning": "Phương pháp và kỹ thuật luyện tập chạy marathon.",
          "analysis": "Sai: Chỉ nhắc đã tập được 1 tháng chứ không nói về phương pháp tập luyện cụ thể."
        },
        {
          "option": "2. マラソンによる体の変化",
          "meaning": "Những thay đổi của cơ thể sau khi chạy marathon.",
          "analysis": "Sai: Người nữ chỉ thừa nhận chạy bộ tốt cho sức khỏe chứ không kể về sự thay đổi cơ thể."
        },
        {
          "option": "3. マラソンを始めた理由",
          "meaning": "Lý do vì sao bắt đầu tập luyện và tham gia chạy marathon.",
          "analysis": "ĐÚNG: Người nữ giải thích bản thân vốn không giỏi chạy bền, nhưng được tiền bối trong công ty rủ tham gia giải đấu cùng, nghe kể thấy hào hứng nên quyết định thử sức ('会社の先輩にマラソンが好きな人がいて、一緒に大会に出ようって誘われて。話を聞いていたら、やってみてもいいかなって思ったんだ')."
        },
        {
          "option": "4. マラソン大会の結果",
          "meaning": "Kết quả của giải chạy marathon.",
          "analysis": "Sai: Giải chạy tuần sau mới diễn ra ('大会、来週なんだけど')."
        }
      ],
      "answer": 2,
      "evidence": "「女：会社の先輩にマラソンが好きな人がいて、一緒に大会に出ようって誘われて。話を聞いていたら、やってみてもいいかなって思ったんだ。」",
      "explanation": "Đáp án đúng là 3 (マラソンを始めた理由).\n- Câu hỏi trong audio: 「女の人は何について話していますか？」 (Người phụ nữ đang nói về điều gì?).\n- Người nam hỏi lý do người nữ bắt đầu chạy marathon. Người nữ chia sẻ mình vốn chạy dở, nhưng được tiền bối cùng công ty rủ tham gia giải chạy nên quyết định thử sức.\n- Toàn bộ nội dung là lý do bắt đầu chạy marathon (マラソンを始めた理由).",
      "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>最近<rt>さいきん</rt></ruby>、マラソンを<ruby>始<rt>はじ</rt></ruby>めたんだって？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> うん、1ヶ<ruby>月<rt>げつ</rt></ruby>くらい<ruby>前<rt>まえ</rt></ruby>から<ruby>練習<rt>れんしゅう</rt></ruby>してる。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> へえー、やっぱり<ruby>健康<rt>けんこう</rt></ruby>のため？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>確<rt>たし</rt></ruby>かに<ruby>体<rt>からだ</rt></ruby>にはいいと<ruby>思<rt>おも</rt></ruby>うけど、<ruby>本当<rt>ほんとう</rt></ruby>は<ruby>長<rt>なが</rt></ruby>く<ruby>走<rt>はし</rt></ruby>るの<ruby>苦手<rt>にがて</rt></ruby>だったんだ。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> え？じゃあどうして？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <strong><ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>先輩<rt>せんぱい</rt></ruby>にマラソンが<ruby>好<rt>す</rt></ruby>きな<ruby>人<rt>ひと</rt></ruby>がいて、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>大会<rt>たいかい</rt></ruby>に<ruby>出<rt>で</rt></ruby>ようって<ruby>誘<rt>さそ</rt></ruby>われて。<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いていたら、やってみてもいいかなって<ruby>思<rt>おも</rt></ruby>ったんだ。</strong><br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> そうなんだ。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>大会<rt>たいかい</rt></ruby>、<ruby>来週<rt>らいしゅう</rt></ruby>なんだけど。ゆっくりでもゴールできたらいいな。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>頑張<rt>がんば</rt></ruby>ってね。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>何<rt>なに</rt></ruby>について<ruby>話<rt>はな</rt></ruby>していますか？<br>1. マラソンの<ruby>練習<rt>れんしゅう</rt></ruby><ruby>方法<rt>ほうほう</rt></ruby><br>2. マラソンによる<ruby>体<rt>からだ</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby><br>3. マラソンを<ruby>始<rt>はじ</rt></ruby>めた<ruby>理由<rt>りゆう</rt></ruby><br>4. マラソン<ruby>大会<rt>たいかい</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby></p>",
      "scriptVi": "Nam: Dạo này nghe nói cậu bắt đầu tập chạy marathon à?\nNữ: Ừ, tớ luyện tập từ khoảng một tháng trước rồi.\nNam: Chà, chắc là để rèn luyện sức khỏe hả?\nNữ: Công nhận là tốt cho sức khỏe thật, nhưng thú thực trước giờ tớ chạy đường dài dở lắm.\nNam: Ơ? Thế sao tự nhiên lại chạy?\nNữ: Ở công ty có chị tiền bối rất mê chạy marathon, chị ấy rủ tớ cùng tham gia giải chạy. Nghe chị ấy kể chuyện truyền cảm hứng quá nên tớ nghĩ hay là mình cũng thử sức xem sao.\nNam: Ra là vậy.\nNữ: Giải chạy vào tuần sau rồi đấy. Dù chạy chậm nhưng hoàn thành về đến đích là tớ mãn nguyện rồi.\nNam: Cố lên nhé!\nCâu hỏi: Người phụ nữ đang nói về điều gì?\n1. Phương pháp luyện tập marathon\n2. Sự thay đổi của cơ thể nhờ marathon\n3. Lý do bắt đầu chạy marathon\n4. Kết quả của giải chạy marathon"
    },
    {
      "id": 41,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai4/41.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 遅れて出席する",
          "meaning": "Sẽ đến tham dự cuộc họp muộn hơn giờ bắt đầu.",
          "analysis": "ĐÚNG: Người nam giải thích lịch khám bệnh trùng ngày họp, 1h mới khám xong nên không thể kịp giờ bắt đầu cuộc họp lúc 1h30, nhưng phần báo cáo của anh ở cuối cuộc họp nên anh sẽ kịp đến dự phần đó ('1時半からの会議にはちょっと…… 会議の最後の方でこの間の出張の報告をすることになっているんですが、それまでには間に合うと思います')."
        },
        {
          "option": "2. 出席できない",
          "meaning": "Không thể tham dự cuộc họp (vắng mặt).",
          "analysis": "Sai: Anh ấy khẳng định sẽ kịp đến dự vào phần cuối cuộc họp."
        },
        {
          "option": "3. 時間を変えてほしい",
          "meaning": "Mong muốn dời / đổi giờ họp.",
          "analysis": "Sai: Anh ấy không yêu cầu đổi giờ họp của công ty."
        },
        {
          "option": "4. 進行の順番を変えてほしい",
          "meaning": "Mong muốn thay đổi thứ tự tiến trình cuộc họp.",
          "analysis": "Sai: Phần báo cáo của anh vốn dĩ đã được xếp ở cuối rồi nên anh không xin đổi thứ tự."
        }
      ],
      "answer": 0,
      "evidence": "「男：検査は1時に終わる予定なんですが、1時半からの会議にはちょっと……会議の最後の方でこの間の出張の報告をすることになっているんですが、それまでには間に合うと思います。課長：分かりました。」",
      "explanation": "Đáp án đúng là 1 (遅れて出席する).\n- Câu hỏi trong audio: 「男の人が会議について言いたいことは何ですか？」 (Điều người nam muốn trình bày về cuộc họp là gì?).\n- Người nam xin phép: Do lịch khám bệnh đến 1h mới xong nên sẽ không kịp đến dự từ đầu buổi họp lúc 1h30, nhưng anh sẽ kịp đến vào phần cuối cuộc họp để thực hiện phần báo cáo công tác của mình.\n- Do đó anh muốn thông báo sẽ đến dự họp muộn (遅れて出席する).",
      "scriptJp": "<p><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> あの、<ruby>課長<rt>かちょう</rt></ruby>。<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>のことでお<ruby>話<rt>はなし</rt></ruby>があるんですが。<br><strong><ruby>課長<rt>かちょう</rt></ruby>：</strong> ああ、<ruby>山田<rt>やまだ</rt></ruby>さん。どうしたの？<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>実<rt>じつ</rt></ruby>は、<ruby>腕<rt>うで</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>くて<ruby>昨日<rt>きのう</rt></ruby><ruby>病院<rt>びょういん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったんですが、<ruby>一応<rt>いちおう</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>をすることになりまして。<br><strong><ruby>課長<rt>かちょう</rt></ruby>：</strong> ええ。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> あの、それで、<ruby>検査<rt>けんさ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>が<ruby>選<rt>えら</rt></ruby>べなくて、<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>と<ruby>重<rt>かさ</rt></ruby>なってしまったんです。<strong><ruby>検査<rt>けんさ</rt></ruby>は1<ruby>時<rt>じ</rt></ruby>に<ruby>終<rt>お</rt></ruby>わる<ruby>予定<rt>よてい</rt></ruby>なんですが、1<ruby>時<rt>じ</rt></ruby><ruby>半<rt>はん</rt></ruby>からの<ruby>会議<rt>かいぎ</rt></ruby>にはちょっと……</strong><br><strong><ruby>課長<rt>かちょう</rt></ruby>：</strong> あ、そう。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <strong><ruby>会議<rt>かいぎ</rt></ruby>の<ruby>最後<rt>さいご</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>でこの<ruby>間<rt>あいだ</rt></ruby>の<ruby>出張<rt>しゅっちょう</rt></ruby>の<ruby>報告<rt>ほうこく</rt></ruby>をすることになっているんですが、それまでには<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うと<ruby>思<rt>おも</rt></ruby>います。</strong><br><strong><ruby>課長<rt>かちょう</rt></ruby>：</strong> <ruby>分<rt>わ</rt></ruby>かりました。<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>だといいですね。もし<ruby>検査<rt>けんさ</rt></ruby>に<ruby>時間<rt>じかん</rt></ruby>がかかって<ruby>欠席<rt>けっせき</rt></ruby>することになりそうだったら<ruby>連絡<rt>れんらく</rt></ruby>してください。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>会議<rt>かいぎ</rt></ruby>について<ruby>言<rt>い</rt></ruby>いたいことは<ruby>何<rt>なん</rt></ruby>ですか？<br>1. <ruby>遅<rt>おく</rt></ruby>れて<ruby>出席<rt>しゅっせき</rt></ruby>する<br>2. <ruby>出席<rt>しゅっせき</rt></ruby>できない<br>3. <ruby>時間<rt>じかん</rt></ruby>を<ruby>変<rt>か</rt></ruby>えてほしい<br>4. <ruby>進行<rt>しんこう</rt></ruby>の<ruby>順番<rt>じゅんばん</rt></ruby>を<ruby>変<rt>か</rt></ruby>えてほしい</p>",
      "scriptVi": "Nam: Dạ thưa Trưởng phòng, em có chuyện muốn thưa về cuộc họp tuần tới ạ.\nTrưởng phòng: À Yamada. Có chuyện gì thế em?\nNam: Dạ thực ra tay em bị đau nên hôm qua em có đi khám, bác sĩ chỉ định làm xét nghiệm kiểm tra ạ.\nTrưởng phòng: Ừ.\nNam: Dạ ngày xét nghiệm không tự chọn được nên bị trùng vào đúng hôm họp tuần sau ạ. Dự kiến xét nghiệm xong lúc 1 giờ, nhưng cuộc họp bắt đầu lúc 1 giờ rưỡi thì em e là khó kịp giờ từ đầu...\nTrưởng phòng: À thế à.\nNam: Phần báo cáo chuyến công tác vừa rồi của em được xếp ở cuối cuộc họp, nên em nghĩ đến lúc đó thì em sẽ kịp có mặt ạ.\nTrưởng phòng: Chị hiểu rồi. Mong là sức khỏe em không sao. Nếu xét nghiệm mất nhiều thời gian mà khả năng phải vắng mặt thì báo chị nhé.\nCâu hỏi: Điều người nam muốn trình bày về cuộc họp là gì?\n1. Sẽ đến tham dự muộn\n2. Không thể tham dự cuộc họp\n3. Muốn đổi giờ họp\n4. Muốn đổi thứ tự tiến trình cuộc họp"
    },
    {
      "id": 42,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai4/42.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 美しく見える歩き方",
          "meaning": "Dáng đi sao cho đẹp mắt và thanh lịch.",
          "analysis": "Sai: Bài nói tập trung vào việc giảm đau nhức xương khớp chứ không nói về dáng đi thẩm mỹ."
        },
        {
          "option": "2. 靴の正しい選び方",
          "meaning": "Phương pháp lựa chọn giày dép đúng cách.",
          "analysis": "Sai: Việc chọn giày chỉ được nhắc thoáng qua như một yếu tố phụ."
        },
        {
          "option": "3. 足の痛みと年齢の関係",
          "meaning": "Mối quan hệ giữa cơn đau chân và độ tuổi.",
          "analysis": "Sai: Tuổi tác chỉ được nhắc đến như một trong các nguyên nhân ban đầu."
        },
        {
          "option": "4. 体の痛みと歩く姿勢の関係",
          "meaning": "Mối quan hệ giữa các cơn đau trên cơ thể và tư thế khi đi bộ.",
          "analysis": "ĐÚNG: Người phụ nữ phân tích: việc chú ý và điều chỉnh tư thế đi bộ đúng cách ('歩く姿勢に気をつける') sẽ giúp làm thuyên giảm các cơn đau ở đầu gối hay thắt lưng ('膝や腰に痛み... 痛みが軽くなることがあります')."
        }
      ],
      "answer": 3,
      "evidence": "「女：歩き方を変えることで良くなることもあるんですよ。...歩く姿勢に気をつけるだけで痛みが軽くなることがあります。自分に合った靴を選ぶことも大事ですが、普段の歩き方にも注意してみましょう。」",
      "explanation": "Đáp án đúng là 4 (体の痛みと歩く姿勢の関係).\n- Câu hỏi trong audio: 「女の人は何について話していますか？」 (Người phụ nữ đang nói về điều gì?).\n- Bài nói giải thích: Những cơn đau ở khớp gối hay thắt lưng có thể được cải thiện bằng cách thay đổi dáng đi; chỉ cần chú ý tư thế khi đi bộ (歩く姿勢) là cơn đau có thể thuyên giảm.\n- Toàn bộ nội dung là mối liên hệ giữa cơn đau trên cơ thể và tư thế đi bộ (体の痛みと歩く姿勢の関係).",
      "scriptJp": "<p><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>皆<rt>みな</rt></ruby>さんは<ruby>歩<rt>ある</rt></ruby>いている<ruby>時<rt>とき</rt></ruby>に<strong><ruby>膝<rt>ひざ</rt></ruby>や<ruby>腰<rt>こし</rt></ruby>に<ruby>痛<rt>いた</rt></ruby>みを<ruby>感<rt>かん</rt></ruby>じる</strong>ことはありませんか？<ruby>痛<rt>いた</rt></ruby>みの<ruby>原因<rt>げんいん</rt></ruby>は<ruby>年齢<rt>ねんれい</rt></ruby>によるものもありますが、<strong><ruby>歩<rt>ある</rt></ruby>き<ruby>方<rt>かた</rt></ruby>を<ruby>変<rt>か</rt></ruby>えることで<ruby>良<rt>よ</rt></ruby>くなることもあるんですよ。</strong><ruby>普段<rt>ふだん</rt></ruby>、<ruby>自分<rt>じぶん</rt></ruby>がどのように<ruby>歩<rt>ある</rt></ruby>いているか<ruby>意識<rt>いしき</rt></ruby>している<ruby>人<rt>ひと</rt></ruby>は<ruby>少<rt>すく</rt></ruby>ないかもしれませんが、<strong><ruby>歩<rt>ある</rt></ruby>く<ruby>姿勢<rt>しせい</rt></ruby>に<ruby>気<rt>き</rt></ruby>をつけるだけで<ruby>痛<rt>いた</rt></ruby>みが<ruby>軽<rt>かる</rt></ruby>くなることがあります。</strong><ruby>自分<rt>じぶん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>った<ruby>靴<rt>くつ</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぶことも<ruby>大事<rt>だいじ</rt></ruby>ですが、<ruby>普段<rt>ふだん</rt></ruby>の<ruby>歩<rt>ある</rt></ruby>き<ruby>方<rt>かた</rt></ruby>にも<ruby>注意<rt>ちゅうい</rt></ruby>してみましょう。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>何<rt>なに</rt></ruby>について<ruby>話<rt>はな</rt></ruby>していますか？<br>1. <ruby>美<rt>うつく</rt></ruby>しく<ruby>見<rt>み</rt></ruby>える<ruby>歩<rt>ある</rt></ruby>き<ruby>方<rt>かた</rt></ruby><br>2. <ruby>靴<rt>くつ</rt></ruby>の<ruby>正<rt>ただ</rt></ruby>しい<ruby>選<rt>えら</rt></ruby>び<ruby>方<rt>かた</rt></ruby><br>3. <ruby>足<rt>あし</rt></ruby>の<ruby>痛<rt>いた</rt></ruby>みと<ruby>年齢<rt>ねんれい</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby><br>4. <ruby>体<rt>からだ</rt></ruby>の<ruby>痛<rt>いた</rt></ruby>みと<ruby>歩<rt>ある</rt></ruby>く<ruby>姿勢<rt>しせい</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby></p>",
      "scriptVi": "Người phụ nữ: Khi đi bộ, có bao giờ quý vị cảm thấy bị đau ở khớp gối hay thắt lưng không? Nguyên nhân của cơn đau có thể do tuổi tác, nhưng việc thay đổi dáng đi cũng có thể giúp cải thiện tình trạng này đấy ạ. Trong đời sống thường ngày, có lẽ ít ai để ý xem bản thân đang đi bộ như thế nào, tuy nhiên chỉ cần chú ý đến tư thế khi đi bộ là các cơn đau có thể thuyên giảm đáng kể. Việc chọn đôi giày vừa vặn phù hợp là rất quan trọng, nhưng chúng ta cũng hãy chú ý đến cả tư thế đi lại hàng ngày nữa nhé.\nCâu hỏi: Người phụ nữ đang nói về điều gì?\n1. Dáng đi sao cho đẹp mắt\n2. Cách chọn giày đúng chuẩn\n3. Mối quan hệ giữa đau chân và tuổi tác\n4. Mối quan hệ giữa cơn đau trên cơ thể và tư thế khi đi bộ"
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_chude-05",
  "level": "N3",
  "category": "nghe_chude",
  "categoryName": "Nghe chủ đề (ポイント理解)",
  "lessonNumber": 5,
  "title": "Bài 5: Luyện nghe hiểu chủ đề (ポイント理解 第5回)",
  "description": "Dạng bài nghe hiểu chủ đề / điểm cốt lõi (ポイント理解): Lắng nghe câu hỏi và các lựa chọn trực tiếp từ file âm thanh. Bấm chọn 1, 2, 3 hoặc 4.",
  "questions": [
    {
      "id": 43,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai5/43.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 読みやすく、期待した内容と同じだった。",
          "meaning": "Dễ đọc và nội dung đúng như kỳ vọng ban đầu.",
          "analysis": "Sai: Nam sinh nói nội dung khác xa so với tưởng tượng/kỳ vọng ban đầu ('想像してたのと違ったよ')."
        },
        {
          "option": "2. 読みやすいが、期待した内容と違った。",
          "meaning": "Dễ đọc nhưng nội dung lại khác với kỳ vọng ban đầu.",
          "analysis": "ĐÚNG: Nam sinh nhận xét sách dùng từ ngữ đơn giản nên dễ đọc làm sách nhập môn ('簡単な言葉で書いてあるから、入門の本としてはいい'), nhưng nội dung thì toàn những kiến thức căn bản đã biết rồi chứ không đúng như kỳ vọng ban đầu ('面白そうだと思って買ったんだけど、想像してたのと違ったよ... もう知っていることばかりで')."
        },
        {
          "option": "3. 読みにくいが、期待した内容と同じだった。",
          "meaning": "Khó đọc nhưng nội dung đúng như kỳ vọng ban đầu.",
          "analysis": "Sai: Sách dễ đọc và nội dung khác với kỳ vọng."
        },
        {
          "option": "4. 読みにくく、期待した内容とも違った。",
          "meaning": "Vừa khó đọc, nội dung lại vừa khác với kỳ vọng ban đầu.",
          "analysis": "Sai: Sách không hề khó đọc ('簡単な言葉で書いてある')."
        }
      ],
      "answer": 1,
      "evidence": "「男：面白そうだと思って買ったんだけど、想像してたのと違ったよ。...書いてあることが、基礎的なこととかもう知っていることばかりで。...簡単な言葉で書いてあるから、入門の本としてはいいと思うよ。」",
      "explanation": "Đáp án đúng là 2 (読みやすいが、期待した内容と違った).\n- Câu hỏi trong audio: 「男の学生はこの本について何と言っていますか。」 (Nam sinh nói gì về cuốn sách này?).\n- Nam sinh nhận xét: Cuốn sách dùng từ ngữ đơn giản, dễ đọc thích hợp cho người mới bắt đầu (読みやすい); tuy nhiên khi mua tưởng nội dung bí mật hấp dẫn nhưng đọc vào toàn kiến thức cơ bản đã biết rồi, khác hẳn tưởng tượng ban đầu (期待した内容と違った).",
      "scriptJp": "<p><strong><ruby>女<rt>おんな</rt></ruby>：</strong> この『<ruby>経済<rt>けいざい</rt></ruby><ruby>学<rt>がく</rt></ruby>の<ruby>秘密<rt>ひみつ</rt></ruby>』っていうの、<ruby>先輩<rt>せんぱい</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>ですか。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> うん、そう。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> どうですか。<ruby>私<rt>わたし</rt></ruby>が<ruby>最近<rt>さいきん</rt></ruby><ruby>読<rt>よ</rt></ruby>んだ<ruby>本<rt>ほん</rt></ruby>は、<ruby>文章<rt>ぶんしょう</rt></ruby>がわかりにくくて、<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>読<rt>よ</rt></ruby>みたくなくなっちゃったんですよね。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> それは<ruby>一応<rt>いちおう</rt></ruby>ないけど、<strong><ruby>面白<rt>おもしろ</rt></ruby>そうだと<ruby>思<rt>おも</rt></ruby>って<ruby>買<rt>か</rt></ruby>ったんだけど、<ruby>想像<rt>そうぞう</rt></ruby>してたのと<ruby>違<rt>ちが</rt></ruby>ったよ。</strong><br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> そうなんですか。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <ruby>書<rt>か</rt></ruby>いてあることが、<ruby>基礎<rt>きそ</rt></ruby><ruby>的<rt>てき</rt></ruby>なこととかもう<ruby>知<rt>し</rt></ruby>っていることばかりで。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>先輩<rt>せんぱい</rt></ruby>にとっては<ruby>秘密<rt>ひみつ</rt></ruby>じゃなかったんですね。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> <strong><ruby>簡単<rt>かんたん</rt></ruby>な<ruby>言葉<rt>ことば</rt></ruby>で<ruby>書<rt>か</rt></ruby>いてあるから、<ruby>入門<rt>にゅうもん</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>としてはいいと<ruby>思<rt>おも</rt></ruby>うよ。</strong><br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>男<rt>おとこ</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>はこの<ruby>本<rt>ほん</rt></ruby>について<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>っていますか。<br>1. <ruby>読<rt>よ</rt></ruby>みやすく、<ruby>期待<rt>きたい</rt></ruby>した<ruby>内容<rt>ないよう</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じだった。<br>2. <ruby>読<rt>よ</rt></ruby>みやすいが、<ruby>期待<rt>きたい</rt></ruby>した<ruby>内容<rt>ないよう</rt></ruby>と<ruby>違<rt>ちが</rt></ruby>った。<br>3. <ruby>読<rt>よ</rt></ruby>みにくいが、<ruby>期待<rt>きたい</rt></ruby>した<ruby>内容<rt>ないよう</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じだった。<br>4. <ruby>読<rt>よ</rt></ruby>みにくく、<ruby>期待<rt>きたい</rt></ruby>した<ruby>内容<rt>ないよう</rt></ruby>とも<ruby>違<rt>ちが</rt></ruby>った。</p>",
      "scriptVi": "Nữ sinh: Cuốn 'Bí mật của Kinh tế học' này là sách của tiền bối ạ?\nNam sinh: Ừ, đúng rồi em.\nNữ sinh: Đọc thế nào hả anh? Cuốn sách dạo này em đọc văn phong khó hiểu quá làm em đọc dở chừng là chẳng muốn đọc nữa.\nNam sinh: Cuốn này thì không đến nỗi khó hiểu như thế, anh thấy có vẻ hay nên mua nhưng nội dung lại khác hẳn so với tưởng tượng ban đầu của anh.\nNữ sinh: Thế ạ anh?\nNam sinh: Những điều viết trong sách toàn là những kiến thức cơ bản mà anh đã biết từ trước cả rồi.\nNữ sinh: Ra là đối với anh thì chẳng còn là bí mật gì nữa rồi.\nNam sinh: Sách viết bằng từ ngữ rất đơn giản, nên anh nghĩ làm sách nhập môn cho người mới bắt đầu thì rất tốt.\nCâu hỏi: Nam sinh nói gì về cuốn sách này?\n1. Dễ đọc và nội dung đúng như kỳ vọng ban đầu\n2. Dễ đọc nhưng nội dung lại khác với kỳ vọng ban đầu\n3. Khó đọc nhưng nội dung đúng như kỳ vọng ban đầu\n4. Vừa khó đọc, nội dung lại vừa khác với kỳ vọng ban đầu"
    },
    {
      "id": 44,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai5/44.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 壊れたカメラを直してほしい。",
          "meaning": "Muốn nhờ sửa hộ chiếc máy ảnh bị hỏng.",
          "analysis": "Sai: Máy ảnh của nữ sinh không kịp sửa trước cuối tuần."
        },
        {
          "option": "2. カメラを貸してほしい。",
          "meaning": "Muốn mượn máy ảnh của Kimura.",
          "analysis": "Sai: Khi Kimura đề nghị cho mượn máy, nữ sinh đã từ chối vì không quen dùng máy của người khác ('木村君のカメラだと撮り方とかよくわからないし')."
        },
        {
          "option": "3. 写真の撮り方を教えてほしい。",
          "meaning": "Muốn nhờ hướng dẫn cách chụp ảnh đẹp.",
          "analysis": "Sai: Nữ sinh không nhờ dạy cách chụp."
        },
        {
          "option": "4. 写真の係を代わってほしい。",
          "meaning": "Muốn nhờ Kimura đảm nhận thay nhiệm vụ chụp ảnh cho đoàn du lịch.",
          "analysis": "ĐÚNG: Nữ sinh nhận nhiệm vụ chụp ảnh nhưng máy hỏng, biết Kimura có sở thích và kỹ năng chụp ảnh đẹp nên muốn nhờ Kimura làm chân chụp ảnh thay mình ('木村君の方が撮るのが上手だと思うから、お願いできない？')."
        }
      ],
      "answer": 3,
      "evidence": "「女：実は、私旅行で皆の写真を撮る写真の係を引き受けてるんだ。でも、昨日私のカメラ壊れちゃって... 木村君のカメラだと撮り方とかよくわからないし、木村君の方が撮るのが上手だと思うから、お願いできない？男：そう？うん、わかった。」",
      "explanation": "Đáp án đúng là 4 (写真の係を代わってほしい).\n- Câu hỏi trong audio: 「女の学生が言いたいことは何ですか。」 (Điều nữ sinh muốn nói/nhờ vả là gì?).\n- Nữ sinh được giao nhiệm vụ chụp ảnh cho chuyến du lịch CLB nhưng máy ảnh bị hỏng. Khi Kimura định cho mượn máy, cô từ chối vì không thạo chụp máy lạ và khen Kimura chụp đẹp hơn, ngỏ ý nhờ Kimura làm chân chụp ảnh thay mình trong chuyến đi.\n- Do đó điều cô muốn là nhờ đổi người phụ trách chụp ảnh (写真の係を代わってほしい).",
      "scriptJp": "<p><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>木村<rt>きむら</rt></ruby><ruby>君<rt>くん</rt></ruby>、<ruby>週末<rt>しゅうまつ</rt></ruby>のクラブの<ruby>旅行<rt>りょこう</rt></ruby><ruby>行<rt>い</rt></ruby>く？<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> うん、<ruby>行<rt>い</rt></ruby>くよ。<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> ねえ、<ruby>木村<rt>きむら</rt></ruby><ruby>君<rt>くん</rt></ruby>って<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>るのが<ruby>趣味<rt>しゅみ</rt></ruby>だって<ruby>言<rt>い</rt></ruby>ってたよね。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> そうだけど、どうして？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>実<rt>じつ</rt></ruby>は、<ruby>私<rt>わたし</rt></ruby><ruby>旅行<rt>りょこう</rt></ruby>で<ruby>皆<rt>みな</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>る<ruby>写真<rt>しゃしん</rt></ruby>の<ruby>係<rt>かかり</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けてるんだ。でも、<ruby>昨日<rt>きのう</rt></ruby><ruby>私<rt>わたし</rt></ruby>のカメラ<ruby>壊<rt>こわ</rt></ruby>れちゃって、<ruby>週末<rt>しゅうまつ</rt></ruby>までに<ruby>直<rt>なお</rt></ruby>りそうにないんだ。それで、<ruby>悪<rt>わる</rt></ruby>いんだけど<ruby>木村<rt>きむら</rt></ruby><ruby>君<rt>くん</rt></ruby>に<ruby>頼<rt>たの</rt></ruby>みたいと<ruby>思<rt>おも</rt></ruby>って。<br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> ああ、<ruby>僕<rt>ぼく</rt></ruby><ruby>使<rt>つか</rt></ruby>ってないカメラがあるから<ruby>貸<rt>か</rt></ruby>そうか？<br><strong><ruby>女<rt>おんな</rt></ruby>：</strong> ありがとう。でも、<ruby>木村<rt>きむら</rt></ruby><ruby>君<rt>くん</rt></ruby>のカメラだと<ruby>撮<rt>と</rt></ruby>り<ruby>方<rt>かた</rt></ruby>とかよくわからないし、<strong><ruby>木村<rt>きむら</rt></ruby><ruby>君<rt>くん</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>が<ruby>撮<rt>と</rt></ruby>るのが<ruby>上手<rt>じょうず</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>うから、お<ruby>願<rt>ねが</rt></ruby>いできない？</strong><br><strong><ruby>男<rt>おとこ</rt></ruby>：</strong> そう？うん、わかった。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>が<ruby>言<rt>い</rt></ruby>いたいことは<ruby>何<rt>なん</rt></ruby>ですか。<br>1. <ruby>壊<rt>こわ</rt></ruby>れたカメラを<ruby>直<rt>なお</rt></ruby>してほしい。<br>2. カメラを<ruby>貸<rt>か</rt></ruby>してほしい。<br>3. <ruby>写真<rt>しゃしん</rt></ruby>の<ruby>撮<rt>と</rt></ruby>り<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてほしい。<br>4. <ruby>写真<rt>しゃしん</rt></ruby>の<ruby>係<rt>かかり</rt></ruby>を<ruby>代<rt>か</rt></ruby>わってほしい。</p>",
      "scriptVi": "Nữ sinh: Kimura này, cuối tuần này cậu có đi du lịch cùng CLB không?\nNam sinh: Ừ, tớ có đi chứ.\nNữ sinh: Này, trước cậu bảo sở thích của cậu là chụp ảnh đúng không nhỉ.\nNam sinh: Đúng rồi, sao thế cậu?\nNữ sinh: Thật ra tớ nhận chân phụ trách chụp ảnh cho mọi người trong chuyến đi này. Cơ mà hôm qua máy ảnh của tớ bị hỏng mất, chắc không kịp sửa trước cuối tuần. Thế nên tớ ngại quá nhưng muốn nhờ cậu một việc.\nNam sinh: À, tớ có chiếc máy ảnh không dùng đến, hay để tớ cho cậu mượn nhé?\nNữ sinh: Cảm ơn cậu nhé. Nhưng mà dùng máy ảnh của cậu thì tớ không quen chụp, với lại tớ thấy cậu chụp ảnh đẹp hơn nhiều, nên cậu nhận chân chụp ảnh thay tớ được không?\nNam sinh: Thế hả? Ừ, được thôi.\nCâu hỏi: Điều nữ sinh muốn nói/nhờ vả là gì?\n1. Muốn nhờ sửa máy ảnh bị hỏng\n2. Muốn mượn máy ảnh\n3. Muốn nhờ chỉ cách chụp ảnh\n4. Muốn nhờ nhận thay nhiệm vụ chụp ảnh"
    },
    {
      "id": 45,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_chude/bai5/45.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 秋に人気があるスポーツ",
          "meaning": "Môn thể thao được ưa chuộng vào mùa thu.",
          "analysis": "Sai: Đạp xe chỉ là hoạt động kết nối với dịch vụ của nhà trọ."
        },
        {
          "option": "2. 自転車旅行に便利な旅館",
          "meaning": "Nhà trọ truyền thống tiện lợi và lý tưởng cho người đi du lịch bằng xe đạp.",
          "analysis": "ĐÚNG: Người phụ nữ giới thiệu nhà trọ Yamakawa với hàng loạt tiện ích cho người đi xe đạp: nằm cạnh cung đường đạp xe nổi tiếng, ngồi nguyên trên xe đạp làm thủ tục check-in ('自転車に乗ったままチェックイン'), dắt xe để vào trong phòng ('自転車も部屋の中に置ける'), nhân viên tư vấn cung đường, có suối nước nóng ngâm mình sau khi đạp xe ('温泉で汗を流す')."
        },
        {
          "option": "3. サイクリングコースの選び方",
          "meaning": "Cách lựa chọn các cung đường đạp xe ngắm cảnh.",
          "analysis": "Sai: Bài nói không hướng dẫn tiêu chí chọn cung đường."
        },
        {
          "option": "4. 美しい景色が楽しめる温泉",
          "meaning": "Khu suối nước nóng có thể thưởng ngoạn cảnh đẹp.",
          "analysis": "Sai: Suối nước nóng chỉ là một tiện ích bổ trợ của nhà trọ này."
        }
      ],
      "answer": 1,
      "evidence": "「女：ここ山川旅館の近くには、人気のサイクリングコースがあり、この旅館では自転車に乗ったままチェックイン、自転車も部屋の中に置けるんです。旅館の方にサイクリングコースについて相談することもできます。」",
      "explanation": "Đáp án đúng là 2 (自転車旅行に便利な旅館).\n- Câu hỏi trong audio: 「女の人は何について話していますか。」 (Người phụ nữ đang nói về điều gì?).\n- Bài nói giới thiệu nhà trọ Yamakawa: Gần cung đường đạp xe nổi tiếng, cho phép ngồi trên xe làm check-in, mang xe đạp vào tận phòng, tư vấn lộ trình và có suối nước nóng thư giãn sau chặng đường dài.\n- Toàn bộ nội dung giới thiệu một nhà trọ vô cùng tiện lợi cho khách du lịch bằng xe đạp (自転車旅行に便利な旅館).",
      "scriptJp": "<p><strong><ruby>女<rt>おんな</rt></ruby>：</strong> <ruby>秋<rt>あき</rt></ruby>の<ruby>山<rt>やま</rt></ruby>。<ruby>赤<rt>あか</rt></ruby>や<ruby>黄色<rt>きいろ</rt></ruby>の<ruby>木<rt>き</rt></ruby>の<ruby>葉<rt>は</rt></ruby>がきれいですね。そんな<ruby>景色<rt>けしき</rt></ruby>を<ruby>楽<rt>たの</rt></ruby>しめる<ruby>旅行<rt>りょこう</rt></ruby>はいかがですか。<strong>ここ<ruby>山川<rt>やまかわ</rt></ruby><ruby>旅館<rt>りょかん</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くには、<ruby>人気<rt>にんき</rt></ruby>のサイクリングコースがあり、この<ruby>旅館<rt>りょかん</rt></ruby>では<ruby>自転車<rt>じてんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ったままチェックイン、<ruby>自転車<rt>じてんしゃ</rt></ruby>も<ruby>部屋<rt>へや</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>置<rt>お</rt></ruby>けるんです。<ruby>旅館<rt>りょかん</rt></ruby>の<ruby>方<rt>かた</rt></ruby>にサイクリングコースについて<ruby>相談<rt>そうだん</rt></ruby>することもできます。</strong><ruby>山<rt>やま</rt></ruby>を<ruby>走<rt>はし</rt></ruby>った<ruby>後<rt>あと</rt></ruby>、<ruby>温泉<rt>おんせん</rt></ruby>で<ruby>汗<rt>あせ</rt></ruby>を<ruby>流<rt>なが</rt></ruby>すのもまた<ruby>気持<rt>きも</rt></ruby>ちがよさそうですね。<br><strong><ruby>問<rt>と</rt></ruby>い：</strong> <ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>何<rt>なに</rt></ruby>について<ruby>話<rt>はな</rt></ruby>していますか。<br>1. <ruby>秋<rt>あき</rt></ruby>に<ruby>人気<rt>にんき</rt></ruby>があるスポーツ<br>2. <ruby>自転車<rt>じてんしゃ</rt></ruby><ruby>旅行<rt>りょこう</rt></ruby>に<ruby>便利<rt>べんり</rt></ruby>な<ruby>旅館<rt>りょかん</rt></ruby><br>3. サイクリングコースの<ruby>選<rt>えら</rt></ruby>び<ruby>方<rt>かた</rt></ruby><br>4. <ruby>美<rt>うつく</rt></ruby>しい<ruby>景色<rt>けしき</rt></ruby>が<ruby>楽<rt>たの</rt></ruby>しめる<ruby>温泉<rt>おんせん</rt></ruby></p>",
      "scriptVi": "Người phụ nữ: Núi rừng mùa thu. Từng tán lá cây chuyển sang màu đỏ, màu vàng thật là tuyệt đẹp quý vị nhỉ. Một chuyến du lịch để thưởng ngoạn khung cảnh hữu tình ấy thì sao quý vị nhỉ? Ngay gần Nhà trọ Yamakawa này có một cung đường đạp xe rất được yêu thích, và tại nhà trọ này quý vị có thể ngồi nguyên trên xe đạp để làm thủ tục nhận phòng (check-in), xe đạp cũng có thể mang để ngay trong phòng ngủ của mình. Quý vị cũng có thể nhờ nhân viên nhà trọ tư vấn về các cung đường đạp xe ngắm cảnh. Sau khi đạp xe chinh phục cung đường đồi núi, được ngâm mình trong làn suối nước nóng để xua tan mồ hôi và mệt mỏi thì thật sảng khoái biết bao.\nCâu hỏi: Người phụ nữ đang nói về điều gì?\n1. Môn thể thao được yêu thích vào mùa thu\n2. Nhà trọ tiện lợi cho chuyến du lịch bằng xe đạp\n3. Cách lựa chọn cung đường đạp xe\n4. Khu suối nước nóng có thể ngắm phong cảnh đẹp"
    }
  ]
}

        ],
        "nghe_hoi": [
{
  "id": "choukai-n3-nghe_hoi-01",
  "level": "N3",
  "category": "nghe_hoi",
  "categoryName": "Nghe hỏi (発話表現)",
  "lessonNumber": 1,
  "title": "Bài 1: Luyện nghe hiểu phát ngôn theo tranh (発話表現 第1回)",
  "description": "Dạng bài nghe hiểu phát ngôn tình huống theo hình ảnh minh họa (発話表現): Nhìn tranh, lắng nghe tình huống và câu hỏi trong file âm thanh. Bấm chọn câu đối đáp phù hợp nhất: 1, 2 hoặc 3.",
  "questions": [
    {
      "id": 46,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai1/46.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai1/4.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 傘、忘れてるよ。",
          "meaning": "Cậu quên ô kìa!",
          "analysis": "ĐÚNG: Bạn chuẩn bị ra về mà bỏ quên ô trên bàn nên dùng câu này để nhắc nhở bạn mang về ('傘、忘れてるよ')."
        },
        {
          "option": "2. 傘、持ってこなかったの？",
          "meaning": "Cậu đã không mang theo ô đến à?",
          "analysis": "Sai: Chiếc ô của bạn đang ở ngay trên bàn nên không thể hỏi là có mang đến hay không."
        },
        {
          "option": "3. 傘、ここに置いたら？",
          "meaning": "Cậu để ô ở đây thì sao?",
          "analysis": "Sai: Bạn đang chuẩn bị ra về, nói câu này là bảo bạn bỏ lại ô ở đây."
        }
      ],
      "answer": 0,
      "evidence": "「机の上に、友達の傘があります。友達は、今帰るところです。何と言いますか。→ 1. 傘、忘れてるよ。」",
      "explanation": "Đáp án đúng là 1 (傘、忘れてるよ).\n- Tình huống: Bạn chuẩn bị ra về nhưng chiếc ô của bạn vẫn còn để quên trên bàn.\n- Khi muốn nhắc nhở bạn mang ô theo kẻo quên, câu nói tự nhiên và chính xác nhất là: 「傘、忘れてるよ。」 (Cậu bỏ quên ô kìa!).",
      "scriptJp": "<p><ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に、<ruby>友達<rt>ともだち</rt></ruby>の<ruby>傘<rt>かさ</rt></ruby>があります。<ruby>友達<rt>ともだち</rt></ruby>は、<ruby>今<rt>いま</rt></ruby><ruby>帰<rt>かえ</rt></ruby>るところです。<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br><strong>1. <ruby>傘<rt>かさ</rt></ruby>、<ruby>忘<rt>わす</rt></ruby>れてるよ。</strong><br>2. <ruby>傘<rt>かさ</rt></ruby>、<ruby>持<rt>も</rt></ruby>ってこなかったの？<br>3. <ruby>傘<rt>かさ</rt></ruby>、ここに<ruby>置<rt>お</rt></ruby>いたら？</p>",
      "scriptVi": "Tình huống: Trên bàn có chiếc ô của bạn. Bạn đang chuẩn bị ra về. Trong tình huống này bạn sẽ nói gì?\n1. Cậu quên ô kìa!\n2. Cậu đã không mang theo ô đến à?\n3. Cậu để ô ở đây thì sao?"
    },
    {
      "id": 47,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai1/47.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai1/5.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. すみません。写真を撮っていただけませんか。",
          "meaning": "Xin lỗi, anh/chị có thể chụp giúp tôi một kiểu ảnh được không ạ?",
          "analysis": "ĐÚNG: Dùng mẫu kính ngữ nhờ vả lịch sự '〜ていただけませんか' khi muốn nhờ người lạ/người đi đường chụp ảnh giúp mình."
        },
        {
          "option": "2. あの、写真を撮ってもよろしいですか。",
          "meaning": "Xin lỗi, tôi chụp ảnh (ở đây / anh chị) có được phép không ạ?",
          "analysis": "Sai: Mẫu '〜てもよろしいですか' dùng để xin phép cho bản thân mình được thực hiện hành động."
        },
        {
          "option": "3. よければ、写真をお取りしましょうか。",
          "meaning": "Nếu được thì để tôi chụp ảnh giúp anh/chị nhé?",
          "analysis": "Sai: Mẫu khiêm nhường 'お〜しましょうか' dùng khi mình chủ động đề nghị giúp đỡ người khác."
        }
      ],
      "answer": 0,
      "evidence": "「写真を撮ってほしいです。近くにいる人に、何と言いますか。→ 1. すみません。写真を撮っていただけませんか。」",
      "explanation": "Đáp án đúng là 1 (すみません。写真を撮っていただけませんか).\n- Tình huống: Muốn nhờ người ở gần chụp ảnh giúp mình.\n- Khi muốn nhờ đối phương chụp ảnh giúp, ta dùng mẫu câu nhờ vả lịch sự: 「写真を撮っていただけませんか。」 (Chụp ảnh giúp tôi có được không ạ?).",
      "scriptJp": "<p><ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ってほしいです。<ruby>近<rt>ちか</rt></ruby>くにいる<ruby>人<rt>ひと</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br><strong>1. すみません。<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>っていただけませんか。</strong><br>2. あの、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ってもよろしいですか。<br>3. よければ、<ruby>写真<rt>しゃしん</rt></ruby>をお<ruby>取<rt>と</rt></ruby>りしましょうか。</p>",
      "scriptVi": "Tình huống: Bạn muốn người khác chụp ảnh giúp mình. Bạn sẽ nói gì với người ở gần đó?\n1. Xin lỗi, anh/chị có thể chụp giúp tôi một kiểu ảnh được không ạ?\n2. Xin lỗi, tôi chụp ảnh có được phép không ạ?\n3. Nếu được thì để tôi chụp ảnh cho anh/chị nhé?"
    },
    {
      "id": 48,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai1/48.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai1/6.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. ここ、行かなきゃいけない？",
          "meaning": "Chỗ này, có bắt buộc phải đi không vậy?",
          "analysis": "Sai: Thể hiện sự miễn cưỡng, bắt buộc chứ không phải rủ rê hào hứng."
        },
        {
          "option": "2. ここ、この前入ったよね。",
          "meaning": "Chỗ này, hôm nọ tụi mình đã vào rồi nhỉ.",
          "analysis": "Sai: Đây là quán mới phát hiện ra chứ không phải đã từng vào."
        },
        {
          "option": "3. ここ、ちょっと見ていかない？",
          "meaning": "Chỗ này, tụi mình ghé vào xem một chút không?",
          "analysis": "ĐÚNG: Dùng mẫu rủ rê thân mật '〜ていかない？' (ghé vào một lát không) rủ bạn cùng vào cửa hàng đẹp mới phát hiện."
        }
      ],
      "answer": 2,
      "evidence": "「おしゃれな店を見つけました。友達を誘って、一緒に入りたいです。何と言いますか。→ 3. ここ、ちょっと見ていかない？」",
      "explanation": "Đáp án đúng là 3 (ここ、ちょっと見ていかない？).\n- Tình huống: Phát hiện ra một cửa hàng rất đẹp/thời trang và muốn rủ bạn cùng ghé vào xem.\n- Mẫu câu rủ rê bạn bè thân thiết cùng ghé vào xem: 「ここ、ちょっと見ていかない？」 (Ghé vào đây xem một chút không cậu?).",
      "scriptJp": "<p>おしゃれな<ruby>店<rt>みせ</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけました。<ruby>友達<rt>ともだち</rt></ruby>を<ruby>誘<rt>さそ</rt></ruby>って、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>りたいです。<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>1. ここ、<ruby>行<rt>い</rt></ruby>かなきゃいけない？<br>2. ここ、この<ruby>前<rt>まえ</rt></ruby><ruby>入<rt>はい</rt></ruby>ったよね。<br><strong>3. ここ、ちょっと<ruby>見<rt>み</rt></ruby>ていかない？</strong></p>",
      "scriptVi": "Tình huống: Bạn nhìn thấy một cửa hàng rất thời thượng và đẹp đẽ. Bạn muốn rủ bạn mình cùng vào xem. Bạn sẽ nói gì?\n1. Chỗ này, có bắt buộc phải đi không?\n2. Chỗ này, hôm nọ tụi mình đã vào rồi nhỉ.\n3. Chỗ này, tụi mình ghé vào xem một chút không?"
    },
    {
      "id": 49,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai1/49.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai1/7.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. ぜひ、その辞書使って。",
          "meaning": "Cậu nhất định hãy dùng cuốn từ điển đó đi.",
          "analysis": "Sai: Đây là câu cho người khác mượn từ điển của mình."
        },
        {
          "option": "2. その辞書、ちょっと使わせてもらってもいい？",
          "meaning": "Cuốn từ điển đó, cậu cho tớ dùng một lát có được không?",
          "analysis": "ĐÚNG: Dùng mẫu sai khiến kết hợp xin phép '〜(さ)せてもらってもいい？' (Cho phép tớ dùng... được không) để mượn từ điển của bạn bè."
        },
        {
          "option": "3. その辞書、使ってみるといいよ。",
          "meaning": "Cậu thử dùng cuốn từ điển đó xem, tốt lắm đấy.",
          "analysis": "Sai: Đây là câu đưa ra lời khuyên cho bạn."
        }
      ],
      "answer": 1,
      "evidence": "「辞書を忘れたので、友達の辞書を借りたいです。何と言いますか。→ 2. その辞書、ちょっと使わせてもらってもいい？」",
      "explanation": "Đáp án đúng là 2 (その辞書、ちょっと使わせてもらってもいい？).\n- Tình huống: Quên mang từ điển nên muốn xin phép mượn dùng từ điển của bạn bè.\n- Khi muốn xin phép mượn dùng đồ của bạn bè, ta dùng thể sai khiến xin phép: 「その辞書、ちょっと使わせてもらってもいい？」 (Cho tớ mượn dùng một chút có được không?).",
      "scriptJp": "<p><ruby>辞書<rt>じしょ</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れたので、<ruby>友達<rt>ともだち</rt></ruby>の<ruby>辞書<rt>じしょ</rt></ruby>を<ruby>借<rt>か</rt></ruby>りたいです。<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>1. ぜひ、その<ruby>辞書<rt>じしょ</rt></ruby><ruby>使<rt>つか</rt></ruby>って。<br><strong>2. その<ruby>辞書<rt>じしょ</rt></ruby>、ちょっと<ruby>使<rt>つか</rt></ruby>わせてもらってもいい？</strong><br>3. その<ruby>辞書<rt>じしょ</rt></ruby>、<ruby>使<rt>つか</rt></ruby>ってみるといいよ。</p>",
      "scriptVi": "Tình huống: Vì bạn để quên từ điển nên muốn mượn từ điển của bạn mình. Bạn sẽ nói gì?\n1. Cậu nhất định hãy dùng cuốn từ điển đó đi.\n2. Cuốn từ điển đó, cậu cho tớ dùng một lát có được không?\n3. Cậu thử dùng cuốn từ điển đó xem, tốt lắm đấy."
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_hoi-02",
  "level": "N3",
  "category": "nghe_hoi",
  "categoryName": "Nghe hỏi (発話表現)",
  "lessonNumber": 2,
  "title": "Bài 2: Luyện nghe hiểu phát ngôn theo tranh (発話表現 第2回)",
  "description": "Dạng bài nghe hiểu phát ngôn tình huống theo hình ảnh minh họa (発話表現): Nhìn tranh, lắng nghe tình huống và câu hỏi trong file âm thanh. Bấm chọn câu đối đáp phù hợp nhất: 1, 2 hoặc 3.",
  "questions": [
    {
      "id": 50,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai2/50.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai2/8.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. あの、写真を撮ってもよろしいでしょうか。",
          "meaning": "Xin lỗi, tôi chụp ảnh có được phép không ạ?",
          "analysis": "Sai: Dùng để xin phép cho bản thân mình chụp ảnh."
        },
        {
          "option": "2. あの、写真を撮っていただけませんか。",
          "meaning": "Xin lỗi, anh/chị có thể chụp giúp chúng tôi một kiểu ảnh được không ạ?",
          "analysis": "ĐÚNG: Dùng mẫu nhờ vả lịch sự '〜ていただけませんか' khi muốn nhờ người xung quanh chụp ảnh giúp nhóm mình."
        },
        {
          "option": "3. あの、写真をお取りしましょうか。",
          "meaning": "Xin lỗi, để tôi chụp ảnh giúp anh/chị nhé?",
          "analysis": "Sai: Dùng khi chủ động đề nghị chụp ảnh giúp người khác."
        }
      ],
      "answer": 1,
      "evidence": "「自分たちの写真を撮ってほしいです。近くにいる人に何と言いますか。→ 2. あの、写真を撮っていただけませんか。」",
      "explanation": "Đáp án đúng là 2 (あの、写真を撮っていただけませんか).\n- Tình huống: Muốn nhờ người ở gần chụp ảnh giúp cho nhóm của mình.\n- Khi muốn nhờ đối phương chụp ảnh giúp, câu nói chuẩn mực và lịch sự là: 「あの、写真を撮っていただけませんか。」.",
      "scriptJp": "<p><ruby>自分<rt>じぶん</rt></ruby>たちの<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ってほしいです。<ruby>近<rt>ちか</rt></ruby>くにいる<ruby>人<rt>ひと</rt></ruby>に<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>1. あの、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ってもよろしいでしょうか。<br><strong>2. あの、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>っていただけませんか。</strong><br>3. あの、<ruby>写真<rt>しゃしん</rt></ruby>をお<ruby>取<rt>と</rt></ruby>りしましょうか。</p>",
      "scriptVi": "Tình huống: Bạn muốn người khác chụp ảnh giúp cho nhóm của mình. Bạn sẽ nói gì với người ở gần đó?\n1. Xin lỗi, tôi chụp ảnh có được phép không ạ?\n2. Xin lỗi, anh/chị có thể chụp giúp chúng tôi một kiểu ảnh được không ạ?\n3. Xin lỗi, để tôi chụp ảnh giúp anh/chị nhé?"
    },
    {
      "id": 51,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai2/51.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai2/9.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. ねえ、傘忘れてるんじゃない？",
          "meaning": "Này, hình như cậu bỏ quên ô kìa?",
          "analysis": "ĐÚNG: Dùng câu phỏng đoán/nhắc khéo '〜んじゃない？' để nhắc bạn bè mang ô theo kẻo quên."
        },
        {
          "option": "2. ねえ、傘持っていかないでよ。",
          "meaning": "Này, đừng mang ô đi mà!",
          "analysis": "Sai: Đây là câu bảo bạn đừng mang ô đi."
        },
        {
          "option": "3. ねえ、傘置いておかない？",
          "meaning": "Này, tụi mình để ô lại đây không?",
          "analysis": "Sai: Đây là câu rủ bạn để lại ô ở lớp."
        }
      ],
      "answer": 0,
      "evidence": "「友達が教室を出ます。椅子のところに友達の傘があります。何と言いますか。→ 1. ねえ、傘忘れてるんじゃない？」",
      "explanation": "Đáp án đúng là 1 (ねえ、傘忘れてるんじゃない？).\n- Tình huống: Bạn sắp bước ra khỏi lớp học mà chiếc ô của bạn vẫn còn ở cạnh ghế.\n- Nhắc nhở bạn bè mang theo ô kẻo quên: 「ねえ、傘忘れてるんじゃない？」 (Này, hình như cậu quên ô kìa?).",
      "scriptJp": "<p><ruby>友達<rt>ともだち</rt></ruby>が<ruby>教室<rt>きょうしつ</rt></ruby>を<ruby>出<rt>で</rt></ruby>ます。<ruby>椅子<rt>いす</rt></ruby>のところに<ruby>友達<rt>ともだち</rt></ruby>の<ruby>傘<rt>かさ</rt></ruby>があります。<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br><strong>1. ねえ、<ruby>傘<rt>かさ</rt></ruby><ruby>忘<rt>わす</rt></ruby>れてるんじゃない？</strong><br>2. ねえ、<ruby>傘<rt>かさ</rt></ruby><ruby>持<rt>も</rt></ruby>っていかないでよ。<br>3. ねえ、<ruby>傘<rt>かさ</rt></ruby><ruby>置<rt>お</rt></ruby>いておかない？</p>",
      "scriptVi": "Tình huống: Bạn chuẩn bị rời khỏi lớp học. Ở cạnh ghế có chiếc ô của bạn. Bạn sẽ nói gì?\n1. Này, hình như cậu bỏ quên ô kìa?\n2. Này, đừng mang ô đi mà!\n3. Này, tụi mình để ô lại đây không?"
    },
    {
      "id": 52,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai2/52.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai2/10.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. すみませんが、どちら様でしょうか。",
          "meaning": "Xin lỗi, quý khách là ai thế ạ?",
          "analysis": "Sai: Đây là câu người bán hàng/chủ tiệm hỏi danh tính của khách."
        },
        {
          "option": "2. あの、こちらはいかがですか。",
          "meaning": "Xin lỗi, món này / phía này thì thế nào ạ?",
          "analysis": "Sai: Đây là câu nhân viên mời chào khách."
        },
        {
          "option": "3. すみません、どなたかいらっしゃいませんか。",
          "meaning": "Xin lỗi, có ai ở đây không ạ?",
          "analysis": "ĐÚNG: Bước vào tiệm vắng người, dùng kính ngữ 'どなたかいらっしゃいませんか' để cất tiếng gọi nhân viên ra phục vụ."
        }
      ],
      "answer": 2,
      "evidence": "「店に入りましたが、店員がいません。店員を呼びたいです。何と言いますか。→ 3. すみません、どなたかいらっしゃいませんか。」",
      "explanation": "Đáp án đúng là 3 (すみません、どなたかいらっしゃいませんか).\n- Tình huống: Vào quán không thấy nhân viên nên muốn cất tiếng gọi nhân viên ra.\n- Câu gọi lịch sự tìm người trong quán: 「すみません、どなたかいらっしゃいませんか。」 (Xin lỗi, có ai ở đây không ạ?).",
      "scriptJp": "<p><ruby>店<rt>みせ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>りましたが、<ruby>店員<rt>てんいん</rt></ruby>がいません。<ruby>店員<rt>てんいん</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>びたいです。<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>1. すみませんが、どちら<ruby>様<rt>さま</rt></ruby>でしょうか。<br>2. あの、こちらはいかがですか。<br><strong>3. すみません、どなたかいらっしゃいませんか。</strong></p>",
      "scriptVi": "Tình huống: Bạn bước vào cửa hàng nhưng không thấy nhân viên đâu. Bạn muốn gọi nhân viên ra. Bạn sẽ nói gì?\n1. Xin lỗi, quý khách là ai thế ạ?\n2. Xin lỗi, món này thì thế nào ạ?\n3. Xin lỗi, có ai ở đây không ạ?"
    },
    {
      "id": 53,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai2/53.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai2/11.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 片付けていってくれませんか。",
          "meaning": "Chị có thể thu dọn cất đi giúp tôi được không?",
          "analysis": "Sai: Mình muốn dùng máy tính tiếp nên không cần cất đi."
        },
        {
          "option": "2. そのままにしておいてください。",
          "meaning": "Chị cứ để nguyên như vậy giúp tôi ạ.",
          "analysis": "ĐÚNG: Dùng mẫu duy trì nguyên trạng '〜ておく' (để nguyên đó) để bảo đối phương không cần dọn dẹp cất máy tính vì mình sắp sử dụng tiếp."
        },
        {
          "option": "3. パソコンを使ってもらえますか。",
          "meaning": "Chị có thể sử dụng chiếc máy tính giúp tôi được không?",
          "analysis": "Sai: Bản thân mình là người sẽ sử dụng máy tính."
        }
      ],
      "answer": 1,
      "evidence": "「会議が終わりました。女の人が片付けているパソコンを今から使います。何と言いますか。→ 2. そのままにしておいてください。」",
      "explanation": "Đáp án đúng là 2 (そのままにしておいてください).\n- Tình huống: Người phụ nữ đang dọn cất máy tính sau cuộc họp, nhưng mình chuẩn bị dùng tiếp chiếc máy đó.\n- Để bảo người khác không cần cất dọn mà cứ để nguyên trạng thái trên bàn: 「そのままにしておいてください。」 (Xin hãy cứ để nguyên như vậy ạ).",
      "scriptJp": "<p><ruby>会議<rt>かいぎ</rt></ruby>が<ruby>終<rt>お</rt></ruby>わりました。<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>片付<rt>かたづ</rt></ruby>けているパソコンを<ruby>今<rt>いま</rt></ruby>から<ruby>使<rt>つか</rt></ruby>います。<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>1. <ruby>片付<rt>かたづ</rt></ruby>けていってくれませんか。<br><strong>2. そのままにしておいてください。</strong><br>3. パソコンを<ruby>使<rt>つか</rt></ruby>ってもらえますか。</p>",
      "scriptVi": "Tình huống: Cuộc họp đã kết thúc. Bạn sắp sử dụng chiếc máy tính mà người phụ nữ đang thu dọn cất đi. Bạn sẽ nói gì?\n1. Chị có thể dọn dẹp cất đi giúp tôi không?\n2. Chị cứ để nguyên như vậy giúp tôi ạ.\n3. Chị có thể sử dụng máy tính giúp tôi được không?"
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_hoi-03",
  "level": "N3",
  "category": "nghe_hoi",
  "categoryName": "Nghe hỏi (発話表現)",
  "lessonNumber": 3,
  "title": "Bài 3: Luyện nghe hiểu phát ngôn theo tranh (発話表現 第3回)",
  "description": "Dạng bài nghe hiểu phát ngôn tình huống theo hình ảnh minh họa (発話表現): Nhìn tranh, lắng nghe tình huống và câu hỏi trong file âm thanh. Bấm chọn câu đối đáp phù hợp nhất: 1, 2 hoặc 3.",
  "questions": [
    {
      "id": 54,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai3/54.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai3/12.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 使い方、教えようか？",
          "meaning": "Cách sử dụng, để anh/chị chỉ cho nhé?",
          "analysis": "ĐÚNG: Tiền bối chủ động đề nghị hướng dẫn giúp đỡ hậu bối đang lúng túng dùng mẫu thân mật '〜(よ)うか'."
        },
        {
          "option": "2. これ、教えてくれる？",
          "meaning": "Cái này, em chỉ cho anh/chị được không?",
          "analysis": "Sai: Đây là câu tiền bối nhờ hậu bối chỉ cho mình."
        },
        {
          "option": "3. 使ってもいいよ。",
          "meaning": "Em dùng cũng được đấy.",
          "analysis": "Sai: Đây là câu cho phép đối phương sử dụng."
        }
      ],
      "answer": 0,
      "evidence": "「パソコンが使えなくて、後輩が困っています。後輩に何と言いますか？→ 1. 使い方、教えようか？」",
      "explanation": "Đáp án đúng là 1 (使い方、教えようか？).\n- Tình huống: Hậu bối đang lúng túng vì không biết dùng máy tính.\n- Khi tiền bối muốn chủ động đề nghị giúp đỡ, chỉ cách dùng cho hậu bối: 「使い方、教えようか？」 (Cách dùng thế nào, để anh chỉ cho nhé?).",
      "scriptJp": "<p>パソコンが<ruby>使<rt>つか</rt></ruby>えなくて、<ruby>後輩<rt>こうはい</rt></ruby>が<ruby>困<rt>こま</rt></ruby>っています。<ruby>後輩<rt>こうはい</rt></ruby>に<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか？<br><strong>1. <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>、<ruby>教<rt>おし</rt></ruby>えようか？</strong><br>2. これ、<ruby>教<rt>おし</rt></ruby>えてくれる？<br>3. <ruby>使<rt>つか</rt></ruby>ってもいいよ。</p>",
      "scriptVi": "Tình huống: Hậu bối đang gặp khó khăn vì không biết dùng máy tính. Bạn sẽ nói gì với hậu bối để giúp đỡ?\n1. Cách sử dụng, để anh/chị chỉ cho nhé?\n2. Cái này, em chỉ cho anh/chị được không?\n3. Em dùng cũng được đấy."
    },
    {
      "id": 55,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai3/55.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai3/13.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 卵を入れなくていいですか？",
          "meaning": "Không cho trứng vào có được không ạ?",
          "analysis": "Sai: Dùng khi người nấu hỏi xem có cần bỏ trứng vào không."
        },
        {
          "option": "2. このケーキは卵を使っていますか？",
          "meaning": "Bánh kem này có sử dụng trứng không ạ?",
          "analysis": "ĐÚNG: Khách hàng bị dị ứng muốn hỏi nhân viên tiệm bánh để xác nhận thành phần nguyên liệu của bánh có trứng hay không."
        },
        {
          "option": "3. 卵を食べなきゃならないんですか？",
          "meaning": "Bắt buộc phải ăn trứng sao ạ?",
          "analysis": "Sai: Hỏi có bắt buộc ăn trứng không."
        }
      ],
      "answer": 1,
      "evidence": "「アレルギーで、卵が食べられません。ケーキに卵が入っているかどうか知りたいです。店の人に何と言いますか？→ 2. このケーキは卵を使っていますか？」",
      "explanation": "Đáp án đúng là 2 (このケーキは卵を使っていますか？).\n- Tình huống: Bị dị ứng không ăn được trứng, muốn hỏi nhân viên xem bánh kem có chứa trứng không.\n- Câu hỏi thành phần nguyên liệu chuẩn xác: 「このケーキは卵を使っていますか？」 (Bánh kem này có dùng trứng không ạ?).",
      "scriptJp": "<p>アレルギーで、<ruby>卵<rt>たまご</rt></ruby>が<ruby>食<rt>た</rt></ruby>べられません。ケーキに<ruby>卵<rt>たまご</rt></ruby>が<ruby>入<rt>はい</rt></ruby>っているかどうか<ruby>知<rt>し</rt></ruby>りたいです。<ruby>店<rt>みせ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか？<br>1. <ruby>卵<rt>たまご</rt></ruby>を<ruby>入<rt>い</rt></ruby>れなくていいですか？<br><strong>2. このケーキは<ruby>卵<rt>たまご</rt></ruby>を<ruby>使<rt>つか</rt></ruby>っていますか？</strong><br>3. <ruby>卵<rt>たまご</rt></ruby>を<ruby>食<rt>た</rt></ruby>べなきゃならないんですか？</p>",
      "scriptVi": "Tình huống: Do bị dị ứng nên bạn không thể ăn trứng. Bạn muốn biết bánh kem có chứa trứng hay không. Bạn sẽ hỏi nhân viên quán như thế nào?\n1. Không cho trứng vào có được không ạ?\n2. Bánh kem này có sử dụng trứng không ạ?\n3. Bắt buộc phải ăn trứng sao ạ?"
    },
    {
      "id": 56,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai3/56.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai3/14.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. サインをもらってきてくださいませんか？",
          "meaning": "Trưởng phòng có thể đi xin chữ ký về giúp tôi được không ạ?",
          "analysis": "Sai: Đây là câu nhờ Trưởng phòng đi xin chữ ký của người khác mang về cho mình."
        },
        {
          "option": "2. こちらにサインをいただきたいんですが。",
          "meaning": "Em xin phép nhờ Trưởng phòng ký vào chỗ này giúp em ạ.",
          "analysis": "ĐÚNG: Dùng mẫu khiêm nhường và nhờ vả trang trọng '〜をいただきたいんですが' khi xin chữ ký của cấp trên."
        },
        {
          "option": "3. どちらにサインをいたしましょうか？",
          "meaning": "Tôi nên ký vào chỗ nào thì được ạ?",
          "analysis": "Sai: Dùng khi bản thân mình là người sẽ đặt bút ký."
        }
      ],
      "answer": 1,
      "evidence": "「書類に部長のサインが欲しいです。部長に何と言いますか？→ 2. こちらにサインをいただきたいんですが。」",
      "explanation": "Đáp án đúng là 2 (こちらにサインをいただきたいんですが).\n- Tình huống: Cần xin chữ ký của Trưởng phòng vào tài liệu.\n- Khi xin chữ ký của cấp trên, ta nói: 「こちらにサインをいただきたいんですが。」 (Em xin phép nhờ Trưởng phòng ký vào chỗ này giúp em ạ).",
      "scriptJp": "<p><ruby>書類<rt>しょるい</rt></ruby>に<ruby>部長<rt>ぶちょう</rt></ruby>のサインが<ruby>欲<rt>ほ</rt></ruby>しいです。<ruby>部長<rt>ぶちょう</rt></ruby>に<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか？<br>1. サインをもらってきてくださいませんか？<br><strong>2. こちらにサインをいただきたいんですが。</strong><br>3. どちらにサインをいたしましょうか？</p>",
      "scriptVi": "Tình huống: Bạn muốn xin chữ ký của Trưởng phòng vào tài liệu. Bạn sẽ nói gì với Trưởng phòng?\n1. Trưởng phòng có thể đi xin chữ ký về giúp tôi được không ạ?\n2. Em xin phép nhờ Trưởng phòng ký vào chỗ này giúp em ạ.\n3. Tôi nên ký vào chỗ nào thì được ạ?"
    },
    {
      "id": 57,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai3/57.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai3/15.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. ねえ、急がないと。",
          "meaning": "Này, tụi mình không nhanh chân lên là lỡ tàu đấy!",
          "analysis": "ĐÚNG: Tàu sắp lăn bánh chạy mất nên dùng mẫu giục giã '〜ないと' để giục bạn chạy nhanh lên tàu."
        },
        {
          "option": "2. さっき出発したところだよ。",
          "meaning": "Tàu vừa mới xuất phát tức thì đấy.",
          "analysis": "Sai: Tàu chưa chạy, mới chỉ sắp chạy thôi ('出発しそうです')."
        },
        {
          "option": "3. もう行っちゃったね。",
          "meaning": "Tàu đã đi mất rồi nhỉ.",
          "analysis": "Sai: Tàu chưa rời đi."
        }
      ],
      "answer": 0,
      "evidence": "「電車に乗ります。出発しそうです。友達に何と言いますか？→ 1. ねえ、急がないと。」",
      "explanation": "Đáp án đúng là 1 (ねえ、急がないと).\n- Tình huống: Chuẩn bị lên tàu điện mà tàu sắp sửa chạy mất.\n- Để giục bạn nhanh chân bước lên tàu kẻo muộn: 「ねえ、急がないと。」 (Này, phải nhanh lên thôi kẻo lỡ tàu!).",
      "scriptJp": "<p><ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ります。<ruby>出発<rt>しゅっぱつ</rt></ruby>しそうです。<ruby>友達<rt>ともだち</rt></ruby>に<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか？<br><strong>1. ねえ、<ruby>急<rt>いそ</rt></ruby>がないと。</strong><br>2. さっき<ruby>出発<rt>しゅっぱつ</rt></ruby>したところだよ。<br>3. もう<ruby>行<rt>い</rt></ruby>っちゃったね。</p>",
      "scriptVi": "Tình huống: Bạn chuẩn bị lên tàu điện. Tàu sắp sửa xuất phát rồi. Bạn sẽ nói gì để giục bạn mình?\n1. Này, tụi mình không nhanh lên là trễ đấy!\n2. Tàu vừa mới xuất phát tức thì đấy.\n3. Tàu đã đi mất rồi nhỉ."
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_hoi-04",
  "level": "N3",
  "category": "nghe_hoi",
  "categoryName": "Nghe hỏi (発話表現)",
  "lessonNumber": 4,
  "title": "Bài 4: Luyện nghe hiểu phát ngôn theo tranh (発話表現 第4回)",
  "description": "Dạng bài nghe hiểu phát ngôn tình huống theo hình ảnh minh họa (発話表現): Nhìn tranh, lắng nghe tình huống và câu hỏi trong file âm thanh. Bấm chọn câu đối đáp phù hợp nhất: 1, 2 hoặc 3.",
  "questions": [
    {
      "id": 58,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai4/58.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai4/16.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. あの、空いているとこありませんか？",
          "meaning": "Xin lỗi, có còn chỗ nào trống không ạ?",
          "analysis": "ĐÚNG: Bãi xe đông đúc, muốn hỏi nhân viên phụ trách xem còn vị trí trống nào để đỗ xe không."
        },
        {
          "option": "2. あの、ここに車を置くことにしませんか？",
          "meaning": "Xin lỗi, hay là tụi mình đỗ xe ở chỗ này nhé?",
          "analysis": "Sai: Dùng mẫu rủ rê '〜ことにしませんか' với người đi cùng chứ không dùng để hỏi nhân viên bãi xe."
        },
        {
          "option": "3. あの、ちょっと止まってもらえませんか？",
          "meaning": "Xin lỗi, anh có thể dừng xe lại một lát giúp tôi được không?",
          "analysis": "Sai: Dùng để yêu cầu người khác dừng xe lại."
        }
      ],
      "answer": 0,
      "evidence": "「駐車場がとても混んでいます。車が止められるかどうか分かりません。係の人に何と言いますか？→ 1. あの、空いているとこありませんか？」",
      "explanation": "Đáp án đúng là 1 (あの、空いているとこありませんか？).\n- Tình huống: Bãi đỗ xe đông đúc, muốn hỏi nhân viên xem còn chỗ đỗ xe trống không.\n- Câu hỏi tìm chỗ trống tự nhiên và lịch sự: 「あの、空いているとこありませんか？」 (Xin lỗi, có còn chỗ trống nào không ạ?).",
      "scriptJp": "<p><ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>がとても<ruby>混<rt>こ</rt></ruby>んでいます。<ruby>車<rt>くるま</rt></ruby>が<ruby>止<rt>と</rt></ruby>められるかどうか<ruby>分<rt>わ</rt></ruby>かりません。<ruby>係<rt>かかり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか？<br><strong>1. あの、<ruby>空<rt>あ</rt></ruby>いているとこありませんか？</strong><br>2. あの、ここに<ruby>車<rt>くるま</rt></ruby>を<ruby>置<rt>お</rt></ruby>くことにしませんか？<br>3. あの、ちょっと<ruby>止<rt>と</rt></ruby>まってもらえませんか？</p>",
      "scriptVi": "Tình huống: Bãi đỗ xe đang rất đông đúc. Bạn không biết liệu có còn chỗ đỗ xe được không. Bạn sẽ hỏi nhân viên phụ trách bãi xe như thế nào?\n1. Xin lỗi, có còn chỗ nào trống không ạ?\n2. Xin lỗi, mình quyết định để xe ở đây nhé?\n3. Xin lỗi, anh có thể dừng lại một lát giúp tôi được không?"
    },
    {
      "id": 59,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai4/59.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai4/17.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. ねえ、これもらいたいんだけど。",
          "meaning": "Này, tớ muốn xin chiếc này được không?",
          "analysis": "Sai: 'もらう' là xin luôn món đồ mang về chứ không phải mượn chơi thử."
        },
        {
          "option": "2. ねえ、ゲームやるんじゃない？",
          "meaning": "Này, chẳng phải là chơi game sao?",
          "analysis": "Sai: Dùng để phỏng đoán hành động của bạn."
        },
        {
          "option": "3. ねえ、このゲームやってみたい。",
          "meaning": "Này, trò game này tớ muốn chơi thử quá (cho tớ chơi thử nhé).",
          "analysis": "ĐÚNG: Dùng mẫu '〜てみたい' để bày tỏ sự hào hứng và ngỏ ý xin phép mượn bạn chơi thử trò game mới lạ."
        }
      ],
      "answer": 2,
      "evidence": "「友達のうちに見たことがないゲームがあります。今借りてやりたいです。何と言いますか？→ 3. ねえ、このゲームやってみたい。」",
      "explanation": "Đáp án đúng là 3 (ねえ、このゲームやってみたい).\n- Tình huống: Ở nhà bạn có bộ trò chơi mới lạ, muốn mượn bạn chơi thử ngay lúc đó.\n- Bày tỏ mong muốn chơi thử với bạn bè thân thiết: 「ねえ、このゲームやってみたい。」 (Này, trò này tớ muốn chơi thử quá!).",
      "scriptJp": "<p><ruby>友達<rt>ともだち</rt></ruby>のうちに<ruby>見<rt>み</rt></ruby>たことがないゲームがあります。<ruby>今<rt>いま</rt></ruby><ruby>借<rt>か</rt></ruby>りてやりたいです。<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか？<br>1. ねえ、これもらいたいんだけど。<br>2. ねえ、ゲームやるんじゃない？<br><strong>3. ねえ、このゲームやってみたい。</strong></p>",
      "scriptVi": "Tình huống: Ở nhà bạn có một trò chơi điện tử mà bạn chưa từng thấy bao giờ. Bạn muốn mượn chơi thử bây giờ. Bạn sẽ nói gì?\n1. Này, tớ muốn xin cái này được không?\n2. Này, chẳng phải là chơi game sao?\n3. Này, trò này tớ muốn chơi thử quá."
    },
    {
      "id": 60,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai4/60.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai4/18.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. どうやって予約するのか教えましょうか？",
          "meaning": "Để tôi chỉ cho anh/chị cách đặt vé nhé?",
          "analysis": "Sai: Đây là câu đề nghị mình chỉ cách làm cho nhân viên."
        },
        {
          "option": "2. 予約はどうすればいいんですか？",
          "meaning": "Việc đặt vé thì tôi phải thao tác / làm thế nào ạ?",
          "analysis": "ĐÚNG: Khách hàng không biết thao tác máy nên dùng mẫu '〜はどうすればいいんですか' để nhờ nhân viên cửa hàng hướng dẫn cách đặt vé."
        },
        {
          "option": "3. チケットを予約したらどうでしょうか？",
          "meaning": "Nếu đặt vé thì thế nào ạ?",
          "analysis": "Sai: Đây là câu đưa ra lời khuyên cho đối phương."
        }
      ],
      "answer": 1,
      "evidence": "「コンビニの機械でコンサートのチケットを予約します。使い方が分かりません。店員に何と言いますか？→ 2. 予約はどうすればいいんですか？」",
      "explanation": "Đáp án đúng là 2 (予約はどうすればいいんですか？).\n- Tình huống: Muốn đặt vé xem ca nhạc tại máy tự động của cửa hàng tiện lợi nhưng không biết cách sử dụng.\n- Để hỏi nhân viên cách thức thực hiện thao tác: 「予約はどうすればいいんですか？」 (Đặt vé thì tôi phải làm thế nào ạ?).",
      "scriptJp": "<p>コンビニの<ruby>機械<rt>きかい</rt></ruby>でコンサートのチケットを<ruby>予約<rt>よやく</rt></ruby>します。<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かりません。<ruby>店員<rt>てんいん</rt></ruby>に<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか？<br>1. どうやって<ruby>予約<rt>よやく</rt></ruby>するのか<ruby>教<rt>おし</rt></ruby>えましょうか？<br><strong>2. <ruby>予約<rt>よやく</rt></ruby>はどうすればいいんですか？</strong><br>3. チケットを<ruby>予約<rt>よやく</rt></ruby>したらどうでしょうか？</p>",
      "scriptVi": "Tình huống: Bạn muốn đặt vé buổi hòa nhạc bằng máy tự động ở cửa hàng tiện lợi. Bạn không biết cách sử dụng máy. Bạn sẽ nói gì với nhân viên?\n1. Để tôi chỉ cho anh/chị cách đặt vé nhé?\n2. Việc đặt vé thì tôi phải làm thế nào ạ?\n3. Nếu đặt vé thì thế nào ạ?"
    },
    {
      "id": 61,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai4/61.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai4/19.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 悪いんだけど、昨日のノートコピーさせて？",
          "meaning": "Ngại quá nhưng mà, cậu cho tớ photo cuốn vở hôm qua nhé?",
          "analysis": "ĐÚNG: Dùng thể sai khiến xin phép thân mật '〜させて' kết hợp từ ngữ mở lời lịch sự '悪いんだけど' để xin mượn photo vở bạn."
        },
        {
          "option": "2. あの、実はノートコピーするんだって。",
          "meaning": "À, thật ra nghe nói đi photo vở đấy.",
          "analysis": "Sai: Dùng mẫu truyền đạt '〜んだって' không phù hợp với việc xin mượn đồ."
        },
        {
          "option": "3. ねえ、このノートコピーしたかったらいいよ。",
          "meaning": "Này, nếu cậu muốn photo cuốn vở này thì cứ tự nhiên nhé.",
          "analysis": "Sai: Đây là câu cho phép bạn mượn photo vở của mình."
        }
      ],
      "answer": 0,
      "evidence": "「昨日授業を休んだので、友達のノートをコピーしたいです。何と言いますか？→ 1. 悪いんだけど、昨日のノートコピーさせて？」",
      "explanation": "Đáp án đúng là 1 (悪いんだけど、昨日のノートコピーさせて？).\n- Tình huống: Nghỉ học hôm qua nên muốn xin mượn vở của bạn để photo lại bài.\n- Mẫu xin phép bạn bè thân thiết: 「悪いんだけど、昨日のノートコピーさせて？」 (Ngại quá nhưng cậu cho tớ photo nhờ vở hôm qua nhé?).",
      "scriptJp": "<p><ruby>昨日<rt>きのう</rt></ruby><ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>休<rt>やす</rt></ruby>んだので、<ruby>友達<rt>ともだち</rt></ruby>のノートをコピーしたいです。<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか？<br><strong>1. <ruby>悪<rt>わる</rt></ruby>いんだけど、<ruby>昨日<rt>きのう</rt></ruby>のノートコピーさせて？</strong><br>2. あの、<ruby>実<rt>じつ</rt></ruby>はノートコピーするんだって。<br>3. ねえ、このノートコピーしたかったらいいよ。</p>",
      "scriptVi": "Tình huống: Hôm qua bạn nghỉ học nên muốn mượn vở của bạn để đi photo. Bạn sẽ xin phép như thế nào?\n1. Ngại quá nhưng mà, cậu cho tớ photo cuốn vở hôm qua nhé?\n2. À, thật ra nghe bảo đi photo vở đấy.\n3. Này, nếu cậu muốn photo cuốn vở này thì cứ tự nhiên nhé."
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_hoi-05",
  "level": "N3",
  "category": "nghe_hoi",
  "categoryName": "Nghe hỏi (発話表現)",
  "lessonNumber": 5,
  "title": "Bài 5: Luyện nghe hiểu phát ngôn theo tranh (発話表現 第5回)",
  "description": "Dạng bài nghe hiểu phát ngôn tình huống theo hình ảnh minh họa (発話表現): Nhìn tranh, lắng nghe tình huống và câu hỏi trong file âm thanh. Bấm chọn câu đối đáp phù hợp nhất: 1, 2 hoặc 3.",
  "questions": [
    {
      "id": 62,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai5/62.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai5/20.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 注文を聞いてもらえますか。",
          "meaning": "Quý khách có thể nghe gọi món giúp tôi được không ạ?",
          "analysis": "Sai: Dùng nhờ khách nghe gọi món giúp mình."
        },
        {
          "option": "2. ご注文はお決まりになりましたか。",
          "meaning": "Quý khách đã quyết định chọn món xong chưa ạ?",
          "analysis": "ĐÚNG: Nhân viên nhà hàng dùng tôn kính ngữ 'お決まりになりましたか' để hỏi khách hàng đã chọn xong món muốn gọi hay chưa."
        },
        {
          "option": "3. 注文してもよろしいですか。",
          "meaning": "Tôi gọi món có được phép không ạ?",
          "analysis": "Sai: Đây là câu khách hàng xin phép được gọi món."
        }
      ],
      "answer": 1,
      "evidence": "「レストランで客に注文を聞きます。客に何と言いますか。→ 2. ご注文はお決まりになりましたか。」",
      "explanation": "Đáp án đúng là 2 (ご注文はお決まりになりましたか).\n- Tình huống: Nhân viên nhà hàng hỏi khách xem đã chọn xong món để gọi chưa.\n- Câu hỏi gọi món chuẩn mực của nhân viên phục vụ: 「ご注文はお決まりになりましたか。」 (Dạ quý khách đã chọn xong món chưa ạ?).",
      "scriptJp": "<p>レストランで<ruby>客<rt>きゃく</rt></ruby>に<ruby>注文<rt>ちゅうもん</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きます。<ruby>客<rt>きゃく</rt></ruby>に<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>1. <ruby>注文<rt>ちゅうもん</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてもらえますか。<br><strong>2. ご<ruby>注文<rt>ちゅうもん</rt></ruby>はお<ruby>決<rt>き</rt></ruby>まりになりましたか。</strong><br>3. <ruby>注文<rt>ちゅうもん</rt></ruby>してもよろしいですか。</p>",
      "scriptVi": "Tình huống: Nhân viên nhà hàng hỏi khách chọn món. Bạn sẽ nói gì với khách?\n1. Quý khách có thể nghe gọi món giúp tôi được không?\n2. Quý khách đã quyết định chọn món xong chưa ạ?\n3. Tôi gọi món có được không ạ?"
    },
    {
      "id": 63,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai5/63.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai5/21.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 食べ物、やっちゃダメだよ。",
          "meaning": "Không được cho chim ăn thức ăn đâu đấy!",
          "analysis": "ĐÚNG: Dùng mẫu cấm đoán thân mật '〜ちゃダメだよ' để nhắc nhở và ngăn bạn không được cho chim ăn vì công viên cấm."
        },
        {
          "option": "2. 食べ物、気をつけてやってね。",
          "meaning": "Cậu cẩn thận khi cho ăn nhé.",
          "analysis": "Sai: Câu này lại khuyến khích cho chim ăn."
        },
        {
          "option": "3. 食べ物やるなって書いてないよ。",
          "meaning": "Người ta đâu có viết biển cấm cho ăn đâu.",
          "analysis": "Sai: Không mang ý nghĩa nhắc nhở bạn dừng hành động vi phạm quy định."
        }
      ],
      "answer": 0,
      "evidence": "「公園で鳥に食べ物をやってはいけません。友達が食べ物をやっているので注意します。何と言いますか。→ 1. 食べ物、やっちゃダメだよ。」",
      "explanation": "Đáp án đúng là 1 (食べ物、やっちゃダメだよ).\n- Tình huống: Công viên cấm cho chim ăn, thấy bạn đang cho chim ăn nên muốn nhắc nhở cảnh báo bạn.\n- Câu nhắc nhở bạn bè không được làm điều cấm: 「食べ物、やっちゃダメだよ。」 (Không được cho ăn đâu đấy!).",
      "scriptJp": "<p><ruby>公園<rt>こうえん</rt></ruby>で<ruby>鳥<rt>とり</rt></ruby>に<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>をやってはいけません。<ruby>友達<rt>ともだち</rt></ruby>が<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>をやっているので<ruby>注意<rt>ちゅうい</rt></ruby>します。<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br><strong>1. <ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>、やっちゃダメだよ。</strong><br>2. <ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>、<ruby>気<rt>き</rt></ruby>をつけてやってね。<br>3. <ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>やるなって<ruby>書<rt>か</rt></ruby>いてないよ。</p>",
      "scriptVi": "Tình huống: Trong công viên cấm cho chim ăn. Bạn của bạn đang cho chim ăn nên bạn muốn nhắc nhở. Bạn sẽ nói gì?\n1. Không được cho ăn đâu đấy!\n2. Cậu cẩn thận khi cho ăn nhé.\n3. Người ta đâu có viết là cấm cho ăn đâu."
    },
    {
      "id": 64,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai5/64.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai5/22.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 工場の中を案内していただきます。",
          "meaning": "Tôi được khách hướng dẫn tham quan nhà máy.",
          "analysis": "Sai: Dùng mẫu nhận sự hướng dẫn từ khách."
        },
        {
          "option": "2. 工場の中をご案内します。",
          "meaning": "Sau đây tôi xin phép hướng dẫn quý khách tham quan bên trong nhà máy.",
          "analysis": "ĐÚNG: Dùng khiêm nhường ngữ 'ご〜します' khi bản thân mình dẫn đường, hướng dẫn khách tham quan."
        },
        {
          "option": "3. 工場の中の案内をお願いします。",
          "meaning": "Nhờ khách hướng dẫn giúp tôi tham quan nhà máy.",
          "analysis": "Sai: Dùng nhờ đối phương hướng dẫn."
        }
      ],
      "answer": 1,
      "evidence": "「客に工場を案内します。何と言いますか。→ 2. 工場の中をご案内します。」",
      "explanation": "Đáp án đúng là 2 (工場の中をご案内します).\n- Tình huống: Hướng dẫn khách tham quan bên trong nhà máy.\n- Khi mình là người dẫn khách tham quan, dùng khiêm nhường ngữ: 「工場の中をご案内します。」 (Sau đây tôi xin phép hướng dẫn quý khách tham quan nhà máy).",
      "scriptJp": "<p><ruby>客<rt>きゃく</rt></ruby>に<ruby>工場<rt>こうじょう</rt></ruby>を<ruby>案内<rt>あんない</rt></ruby>します。<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>1. <ruby>工場<rt>こうじょう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>を<ruby>案内<rt>あんない</rt></ruby>していただきます。<br><strong>2. <ruby>工場<rt>こうじょう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>をご<ruby>案内<rt>あんない</rt></ruby>します。</strong><br>3. <ruby>工場<rt>こうじょう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>の<ruby>案内<rt>あんない</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。</p>",
      "scriptVi": "Tình huống: Bạn hướng dẫn khách tham quan nhà máy. Bạn sẽ nói gì với khách?\n1. Tôi được khách hướng dẫn tham quan nhà máy.\n2. Sau đây tôi xin phép hướng dẫn quý khách tham quan bên trong nhà máy.\n3. Nhờ khách hướng dẫn giúp tôi tham quan nhà máy."
    },
    {
      "id": 65,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_hoi/bai5/65.mp3",
      "imageSrc": "assets/images/choukai/n3/nghe_hoi/bai5/23.jpg",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. ねえ、写真撮って。",
          "meaning": "Này, chụp ảnh cho tớ với.",
          "analysis": "Sai: Đây là câu nhờ người khác chụp ảnh cho mình."
        },
        {
          "option": "2. 僕、写ってる？",
          "meaning": "Tớ có lọt vào trong ảnh không?",
          "analysis": "Sai: Đây là câu hỏi của người được chụp."
        },
        {
          "option": "3. みんな、こっち向いて。",
          "meaning": "Mọi người ơi, quay mặt về phía này / nhìn vào đây nào!",
          "analysis": "ĐÚNG: Người chụp ảnh muốn tất cả mọi người cùng hướng mắt và quay mặt về phía ống kính máy ảnh."
        }
      ],
      "answer": 2,
      "evidence": "「友達みんなの写真を撮ります。みんなにカメラの方を見てほしいです。何と言いますか。→ 3. みんな、こっち向いて。」",
      "explanation": "Đáp án đúng là 3 (みんな、こっち向いて).\n- Tình huống: Đang cầm máy chụp ảnh cho nhóm bạn, muốn mọi người nhìn về hướng máy ảnh.\n- Câu nói tự nhiên nhất khi chụp ảnh: 「みんな、こっち向いて。」 (Mọi người ơi, quay mặt về phía này nào!).",
      "scriptJp": "<p><ruby>友達<rt>ともだち</rt></ruby>みんなの<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ります。みんなにカメラの<ruby>方<rt>ほう</rt></ruby>を<ruby>見<rt>み</rt></ruby>てほしいです。<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>1. ねえ、<ruby>写真<rt>しゃしん</rt></ruby><ruby>撮<rt>と</rt></ruby>って。<br>2. <ruby>僕<rt>ぼく</rt></ruby>、<ruby>写<rt>うつ</rt></ruby>ってる？<br><strong>3. みんな、こっち<ruby>向<rt>む</rt></ruby>いて。</strong></p>",
      "scriptVi": "Tình huống: Bạn chụp ảnh cho tất cả bạn bè. Bạn muốn mọi người nhìn về phía máy ảnh. Bạn sẽ nói gì?\n1. Này, chụp ảnh cho tớ với.\n2. Tớ có lọt vào khung hình không?\n3. Mọi người ơi, quay mặt về hướng này nào!"
    }
  ]
}

        ],
        "nghe_phanxa": [
{
  "id": "choukai-n3-nghe_phanxa-01",
  "level": "N3",
  "category": "nghe_phanxa",
  "categoryName": "Nghe phản xạ (即時応答)",
  "lessonNumber": 1,
  "title": "Bài 1: Luyện nghe phản xạ tình huống tức thì (即時応答 第1回)",
  "description": "Dạng bài nghe phản xạ nhanh câu giao tiếp ngắn tức thì (即時応答): Lắng nghe câu nói và các phương án đối đáp trong file âm thanh. Bấm chọn câu phản hồi phù hợp nhất: 1, 2 hoặc 3.",
  "questions": [
    {
      "id": 66,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai1/66.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 6回目です。",
          "meaning": "Dạ là lần thứ 6 rồi ạ.",
          "analysis": "Sai: Dùng để đếm số lần ('6回目') chứ không phải đếm số lượng người."
        },
        {
          "option": "2. 6人です。",
          "meaning": "Dạ đi 6 người ạ.",
          "analysis": "ĐÚNG: Nhân viên hỏi số lượng khách '何名様でしょうか' nên trả lời số người là '6人です'."
        },
        {
          "option": "3. お客様です。",
          "meaning": "Là khách hàng ạ.",
          "analysis": "Sai: Không trả lời cho câu hỏi số lượng người."
        }
      ],
      "answer": 1,
      "evidence": "「いらっしゃいませ。何名様でしょうか。→ 2. 6人です。」",
      "explanation": "Đáp án đúng là 2 (6人です).\n- Lời thoại: Nhân viên nhà hàng chào đón và hỏi số lượng khách: 「いらっしゃいませ。何名様でしょうか。」 (Kính chào quý khách. Quý khách đi mấy người ạ?).\n- Trả lời số lượng người chính xác: 「6人です。」 (Dạ 6 người ạ).",
      "scriptJp": "<p>いらっしゃいませ。<ruby>何名<rt>なんめい</rt></ruby><ruby>様<rt>さま</rt></ruby>でしょうか。<br>1. 6<ruby>回目<rt>かいめ</rt></ruby>です。<br><strong>2. 6<ruby>人<rt>にん</rt></ruby>です。</strong><br>3. お<ruby>客様<rt>きゃくさま</rt></ruby>です。</p>",
      "scriptVi": "Nhân viên: Kính chào quý khách. Quý khách đi mấy vị ạ?\n1. Dạ lần thứ 6 rồi ạ.\n2. Dạ 6 người ạ.\n3. Là khách hàng ạ."
    },
    {
      "id": 67,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai1/67.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. そう、もう手伝わなくてもいいの？",
          "meaning": "Thế à, không cần giúp nữa à?",
          "analysis": "Sai: Hiểu nhầm người ta không cần giúp."
        },
        {
          "option": "2. ありがとう。じゃあ、お願いするね。",
          "meaning": "Cảm ơn nhé. Vậy nhờ cậu nhé.",
          "analysis": "Sai: Đây là câu của người đi nhờ vả người khác."
        },
        {
          "option": "3. ああ、少し後ならできるけど。",
          "meaning": "À, nếu lát nữa thì tôi có thể giúp được.",
          "analysis": "ĐÚNG: Đồng ý nhận lời giúp đỡ nhưng có kèm điều kiện về thời gian ('少し後ならできるけど')."
        }
      ],
      "answer": 2,
      "evidence": "「森さん、ちょっと書類の整理を手伝ってほしいんだけど。→ 3. ああ、少し後ならできるけど。」",
      "explanation": "Đáp án đúng là 3 (ああ、少し後ならできるけど).\n- Lời thoại: Đối phương nhờ vả: 「森さん、ちょっと書類の整理を手伝ってほしいんだけど。」 (Mori này, tôi muốn nhờ bạn phụ dọn tài liệu một chút).\n- Đáp lại lời nhờ vả: 「ああ、少し後ならできるけど。」 (À, nếu lát nữa thì tôi có thể giúp được đấy).",
      "scriptJp": "<p><ruby>森<rt>もり</rt></ruby>さん、ちょっと<ruby>書類<rt>しょるい</rt></ruby>の<ruby>整理<rt>せいり</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>ってほしいんだけど。<br>1. そう、もう<ruby>手伝<rt>てつだ</rt></ruby>わなくてもいいの？<br>2. ありがとう。じゃあ、お<ruby>願<rt>ねが</rt></ruby>いするね。<br><strong>3. ああ、<ruby>少<rt>すこ</rt></ruby>し<ruby>後<rt>あと</rt></ruby>ならできるけど。</strong></p>",
      "scriptVi": "Mori ơi, tôi muốn nhờ bạn phụ một tay sắp xếp lại tài liệu một chút.\n1. Thế à, không cần giúp nữa à?\n2. Cảm ơn nhé. Vậy nhờ cậu nhé.\n3. À, nếu lát nữa thì tôi làm được đấy."
    },
    {
      "id": 68,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai1/68.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. こちらこそ、またお会いしたいです。",
          "meaning": "Chính tôi mới là người vui, rất mong lại được gặp lại anh/chị.",
          "analysis": "ĐÚNG: Đáp lại lời bày tỏ niềm vui khi gặp gỡ 'お目にかかれて嬉しかったです' bằng cụm lịch sự 'こちらこそ、またお会いしたいです'."
        },
        {
          "option": "2. 私も楽しみにしております。",
          "meaning": "Tôi cũng đang rất mong chờ.",
          "analysis": "Sai: Dùng trước khi một sự kiện xảy ra chứ không dùng khi cuộc gặp đã kết thúc."
        },
        {
          "option": "3. では、どうぞご覧ください。",
          "meaning": "Vậy xin mời anh/chị xem ạ.",
          "analysis": "Sai: Dùng khi mời xem đồ/tài liệu."
        }
      ],
      "answer": 0,
      "evidence": "「鈴木さん、今日は、お目にかかれて嬉しかったです。→ 1. こちらこそ、またお会いしたいです。」",
      "explanation": "Đáp án đúng là 1 (こちらこそ、またお会いしたいです).\n- Lời thoại: Đối phương bày tỏ: 「鈴木さん、今日は、お目にかかれて嬉しかったです。」 (Anh Suzuki, hôm nay được gặp anh tôi rất vui ạ).\n- Đáp lại lịch sự: 「こちらこそ、またお会いしたいです。」 (Chính tôi mới phải nói lời cảm ơn, rất mong lại được gặp lại anh/chị).",
      "scriptJp": "<p><ruby>鈴木<rt>すずき</rt></ruby>さん、<ruby>今日<rt>きょう</rt></ruby>は、お<ruby>目<rt>め</rt></ruby>にかかれて<ruby>嬉<rt>うれ</rt></ruby>しかったです。<br><strong>1. こちらこそ、またお<ruby>会<rt>あ</rt></ruby>いしたいです。</strong><br>2. <ruby>私<rt>わたし</rt></ruby>も<ruby>楽<rt>たの</rt></ruby>しみにしております。<br>3. では、どうぞご<ruby>覧<rt>らん</rt></ruby>ください。</p>",
      "scriptVi": "Anh Suzuki, hôm nay được gặp anh tôi rất vui ạ.\n1. Chính tôi mới là người vui, rất mong được gặp lại anh.\n2. Tôi cũng đang rất mong chờ ạ.\n3. Vậy xin mời anh xem ạ."
    },
    {
      "id": 69,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai1/69.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. じゃあ、出るのは諦めます。",
          "meaning": "Vậy thì tôi sẽ từ bỏ việc tham gia.",
          "analysis": "Sai: Trái ngược với lời khuyên khuyến khích tham gia."
        },
        {
          "option": "2. はい、私も出てみたいと思っているんです。",
          "meaning": "Vâng, em cũng đang muốn thử tham gia đây ạ.",
          "analysis": "ĐÚNG: Đáp lại lời khuyên/gợi ý tham gia cuộc thi hùng biện bằng cách bày tỏ nguyện vọng tích cực của bản thân ('出てみたいと思っているんです')."
        },
        {
          "option": "3. 出てみたら いかがですか。",
          "meaning": "Anh/chị thử tham gia xem thế nào ạ?",
          "analysis": "Sai: Câu khuyên ngược lại người nói."
        }
      ],
      "answer": 1,
      "evidence": "「リンさん、日本語ずいぶん上手になってきたし、スピーチ大会に出てみたら？→ 2. はい、私も出てみたいと思っているんです。」",
      "explanation": "Đáp án đúng là 2 (はい、私も出てみたいと思っているんです).\n- Lời thoại: Được khen và khuyến khích tham gia cuộc thi hùng biện: 「リンさん、日本語ずいぶん上手になってきたし、スピーチ大会に出てみたら？」.\n- Phản hồi tích cực: 「はい、私も出てみたいと思っているんです。」 (Vâng, em cũng đang có ý định muốn thử tham gia đây ạ).",
      "scriptJp": "<p>リンさん、<ruby>日本語<rt>にほんご</rt></ruby>ずいぶん<ruby>上手<rt>じょうず</rt></ruby>になってきたし、スピーチ<ruby>大会<rt>たいかい</rt></ruby>に<ruby>出<rt>で</rt></ruby>てみたら？<br>1. じゃあ、<ruby>出<rt>で</rt></ruby>るのは<ruby>諦<rt>あきら</rt></ruby>めます。<br><strong>2. はい、<ruby>私<rt>わたし</rt></ruby>も<ruby>出<rt>で</rt></ruby>てみたいと<ruby>思<rt>おも</rt></ruby>っているんです。</strong><br>3. <ruby>出<rt>で</rt></ruby>てみたら いかがですか。</p>",
      "scriptVi": "Lin này, tiếng Nhật của bạn tiến bộ nhiều rồi đấy, hay là bạn thử tham gia cuộc thi hùng biện xem sao?\n1. Vậy thì tôi từ bỏ tham gia.\n2. Vâng, em cũng đang muốn thử tham gia đây ạ.\n3. Hay là bạn thử tham gia xem sao?"
    },
    {
      "id": 70,
      "subId": "5番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai1/70.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. どこで落としちゃったんだろう。",
          "meaning": "Không biết mình đã làm rơi ở đâu nhỉ?",
          "analysis": "Sai: Cúc áo chưa rơi mất mà chỉ sắp tuột ('取れそう')."
        },
        {
          "option": "2. 本当だ。全然気がつかなかったよ。",
          "meaning": "Thật này. Mình hoàn toàn không để ý thấy luôn.",
          "analysis": "ĐÚNG: Thừa nhận phát hiện của bạn và ngạc nhiên vì bản thân không nhận ra ('全然気がつかなかったよ')."
        },
        {
          "option": "3. 拾ってくれたの？ありがとう。",
          "meaning": "Cậu nhặt giúp mình đấy à? Cảm ơn nhé.",
          "analysis": "Sai: Cúc áo vẫn còn dính trên áo chứ chưa rớt xuống đất để nhặt."
        }
      ],
      "answer": 1,
      "evidence": "「あ、松本くん、シャツのボタンが取れそうだよ。→ 2. 本当だ。全然気がつかなかったよ。」",
      "explanation": "Đáp án đúng là 2 (本当だ。全然気がつかなかったよ).\n- Lời thoại: Được bạn nhắc: 「あ、松本くん、シャツのボタンが取れそうだよ。」 (Á, Matsumoto ơi, cúc áo sắp tuột kìa).\n- Phản hồi nhận ra: 「本当だ。全然気がつかなかったよ。」 (Đúng thật này. Tớ hoàn toàn chẳng để ý thấy luôn).",
      "scriptJp": "<p>あ、<ruby>松本<rt>まつもと</rt></ruby>くん、シャツのボタンが<ruby>取<rt>と</rt></ruby>れそうだよ。<br>1. どこで<ruby>落<rt>お</rt></ruby>としちゃったんだろう。<br><strong>2. <ruby>本当<rt>ほんとう</rt></ruby>だ。<ruby>全然<rt>ぜんぜん</rt></ruby><ruby>気<rt>き</rt></ruby>がつかなかったよ。</strong><br>3. <ruby>拾<rt>ひろ</rt></ruby>ってくれたの？ありがとう。</p>",
      "scriptVi": "Á, Matsumoto ơi, cúc áo sơ mi của cậu sắp bị tuột ra rồi kìa.\n1. Không biết mình làm rơi ở đâu nhỉ?\n2. Thật này. Mình hoàn toàn chẳng để ý thấy luôn.\n3. Cậu nhặt giúp mình đấy à? Cảm ơn nhé."
    },
    {
      "id": 71,
      "subId": "6番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai1/71.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. どこで聞いたの？",
          "meaning": "Em đã nghe được ở đâu thế?",
          "analysis": "Sai: Hiểu nhầm 'お聞きしたい' (muốn hỏi) thành nghe ngóng ở đâu."
        },
        {
          "option": "2. どの資料が欲しいの？",
          "meaning": "Em muốn lấy tài liệu nào?",
          "analysis": "Sai: Tài liệu đã nhận lúc nãy rồi ('さっきいただいた資料')."
        },
        {
          "option": "3. うん、どんなこと？",
          "meaning": "Ừ, có chuyện gì / vấn đề gì thế em?",
          "analysis": "ĐÚNG: Tiền bối đón nhận lời mở đầu xin hỏi của hậu bối một cách thân thiện ('うん、どんなこと？')."
        }
      ],
      "answer": 2,
      "evidence": "「先輩、さっきいただいた資料のことで、お聞きしたいことがあるんですが。→ 3. うん、どんなこと？」",
      "explanation": "Đáp án đúng là 3 (うん、どんなこと？).\n- Lời thoại: Hậu bối mở lời: 「先輩、さっきいただいた資料のことで、お聞きしたいことがあるんですが。」 (Tiền bối ơi, liên quan đến tài liệu lúc nãy em có điều muốn hỏi ạ).\n- Tiền bối lắng nghe: 「うん、どんなこと？」 (Ừ, chuyện gì thế em?).",
      "scriptJp": "<p><ruby>先輩<rt>せんぱい</rt></ruby>、さっきいただいた<ruby>資料<rt>しりょう</rt></ruby>のことで、お<ruby>聞<rt>き</rt></ruby>きしたいことがあるんですが。<br>1. どこで<ruby>聞<rt>き</rt></ruby>いたの？<br>2. どの<ruby>資料<rt>しりょう</rt></ruby>が<ruby>欲<rt>ほ</rt></ruby>しいの？<br><strong>3. うん、どんなこと？</strong></p>",
      "scriptVi": "Tiền bối ơi, về tài liệu nhận được lúc nãy em có điều muốn hỏi ạ.\n1. Em nghe được ở đâu thế?\n2. Em muốn tài liệu nào?\n3. Ừ, chuyện gì thế em?"
    },
    {
      "id": 72,
      "subId": "7番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai1/72.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. はい、では、早速いただきます。",
          "meaning": "Vâng, vậy tôi xin phép dùng ngay ạ.",
          "analysis": "ĐÚNG: Chủ nhà mời dùng khi món ăn còn nóng sốt ('冷めないうちにどうぞ'), khách đáp lại lịch sự '早速いただきます' (xin phép dùng ngay)."
        },
        {
          "option": "2. では、冷めてからいただく分ですね。",
          "meaning": "Vậy là phần để sau khi nguội mới ăn nhỉ.",
          "analysis": "Sai: Trái ngược với lời mời ăn khi đồ ăn còn nóng."
        },
        {
          "option": "3. 冷たい うちにいただきます。",
          "meaning": "Tôi xin phép dùng trong lúc nó đang lạnh ạ.",
          "analysis": "Sai: '冷たい' chỉ món ăn lạnh/ướp lạnh."
        }
      ],
      "answer": 0,
      "evidence": "「お料理、冷めないうちにどうぞ召し上がってください。→ 1. はい、では、早速いただきます。」",
      "explanation": "Đáp án đúng là 1 (はい、では、早速いただきます).\n- Lời thoại: Mời ăn khi còn nóng: 「お料理、冷めないうちにどうぞ召し上がってください。」.\n- Đáp lại lịch sự: 「はい、では、早速いただきます。」 (Vâng, vậy tôi xin phép thưởng thức ngay ạ).",
      "scriptJp": "<p>お<ruby>料理<rt>りょうり</rt></ruby>、<ruby>冷<rt>さ</rt></ruby>めないうちにどうぞ<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がってください。<br><strong>1. はい、では、<ruby>早速<rt>さっそく</rt></ruby>いただきます。</strong><br>2. では、<ruby>冷<rt>さ</rt></ruby>めてからいただく<ruby>分<rt>ぶん</rt></ruby>ですね。<br>3. <ruby>冷<rt>つめ</rt></ruby>たい うちにいただきます。</p>",
      "scriptVi": "Mời anh/chị dùng bữa ngay trong lúc đồ ăn còn chưa bị nguội ạ.\n1. Vâng, vậy tôi xin phép dùng ngay ạ.\n2. Vậy là phần đợi nguội mới ăn nhỉ.\n3. Tôi xin phép dùng khi nó đang lạnh ạ."
    },
    {
      "id": 73,
      "subId": "8番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai1/73.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 部屋に忘れ物しちゃったの？",
          "meaning": "Cậu để quên đồ trong phòng à?",
          "analysis": "Sai: Ở đây là quên khóa cửa chứ không phải để quên đồ."
        },
        {
          "option": "2. 帰って確かめたほうがいいんじゃない？",
          "meaning": "Chẳng phải nên quay về kiểm tra xem sao à?",
          "analysis": "ĐÚNG: Đưa ra lời khuyên hợp lý khi bạn lo sợ mình quên khóa cửa phòng ('帰って確かめたほうがいいんじゃない？')."
        },
        {
          "option": "3. かけてきたんなら大丈夫だね。",
          "meaning": "Nếu đã khóa cửa rồi thì yên tâm rồi nhỉ.",
          "analysis": "Sai: Tình huống là đang lo chưa khóa cửa."
        }
      ],
      "answer": 1,
      "evidence": "「あ、アパートの部屋の鍵、かけずに出来ちゃったかもしれない。→ 2. 帰って確かめたほうがいいんじゃない？」",
      "explanation": "Đáp án đúng là 2 (帰って確かめたほうがいいんじゃない？).\n- Lời thoại: Bạn lo lắng: 「あ、アパートの部屋の鍵、かけずに出来ちゃったかもしれない。」 (Á, hình như mình ra ngoài mà quên khóa cửa phòng rồi).\n- Khuyên bạn: 「帰って確かめたほうがいいんじゃない？」 (Cậu nên quay về kiểm tra xem sao đi).",
      "scriptJp": "<p>あ、アパートの<ruby>部屋<rt>へや</rt></ruby>の<ruby>鍵<rt>かぎ</rt></ruby>、かけずに<ruby>出<rt>で</rt></ruby>てきちゃったかもしれない。<br>1. <ruby>部屋<rt>へや</rt></ruby>に<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>しちゃったの？<br><strong>2. <ruby>帰<rt>かえ</rt></ruby>って<ruby>確<rt>たし</rt></ruby>かめたほうがいいんじゃない？</strong><br>3. かけてきたんなら<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>だね。</p>",
      "scriptVi": "A, hình như mình ra ngoài mà chưa khóa cửa phòng căn hộ rồi thì phải.\n1. Cậu để quên đồ trong phòng à?\n2. Chẳng phải nên quay về kiểm tra xem sao à?\n3. Nếu đã khóa rồi thì yên tâm rồi nhỉ."
    },
    {
      "id": 74,
      "subId": "9番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai1/74.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. ああ、今日中に終わらせないといけないんですね。",
          "meaning": "À, bắt buộc phải hoàn thành trong hôm nay ạ.",
          "analysis": "Sai: Đối phương bảo để mai làm cũng được ('明日にしても構わないよ')."
        },
        {
          "option": "2. 今日はちょっとお手伝いできないんですが。",
          "meaning": "Hôm nay tôi không giúp được ạ.",
          "analysis": "Sai: Mình đang là người dọn dẹp chứ không phải người từ chối giúp."
        },
        {
          "option": "3. すみません。じゃあ、今日はここまでにします。",
          "meaning": "Xin lỗi anh/chị. Vậy hôm nay em xin phép dừng tại đây ạ.",
          "analysis": "ĐÚNG: Tiếp nhận lời cho phép của đối phương và dừng công việc dọn dẹp hôm nay lại ('今日はここまでにします')."
        }
      ],
      "answer": 2,
      "evidence": "「棚の片付け、まだ終わってないみたいだけど、遅いし、それ、明日にしても構わないよ。→ 3. すみません。じゃあ、今日はここまでにします。」",
      "explanation": "Đáp án đúng là 3 (すみません。じゃあ、今日はここまでにします).\n- Lời thoại: Được bảo muộn rồi để mai làm tiếp: 「棚の片付け、まだ終わってないみたいだけど、遅いし、それ、明日にしても構わないよ。」.\n- Đáp lại: 「すみません。じゃあ、今日はここまでにします。」 (Em xin lỗi, vậy hôm nay em xin phép dừng tại đây ạ).",
      "scriptJp": "<p><ruby>棚<rt>たな</rt></ruby>の<ruby>片付<rt>かたづ</rt></ruby>け、まだ<ruby>終<rt>お</rt></ruby>わってないみたいだけど、<ruby>遅<rt>おそ</rt></ruby>いし、それ、<ruby>明日<rt>あした</rt></ruby>にしても<ruby>構<rt>かま</rt></ruby>わないよ。<br>1. ああ、<ruby>今日中<rt>きょうじゅう</rt></ruby>に<ruby>終<rt>お</rt></ruby>わらせないといけないんですね。<br>2. <ruby>今日<rt>きょう</rt></ruby>はちょっとお<ruby>手伝<rt>てつだ</rt></ruby>いできないんですが。<br><strong>3. すみません。じゃあ、<ruby>今日<rt>きょう</rt></ruby>はここまでにします。</strong></p>",
      "scriptVi": "Việc dọn kệ dường như chưa xong, nhưng muộn rồi, để sang ngày mai làm cũng không sao đâu.\n1. À, bắt buộc phải hoàn thành trong hôm nay ạ.\n2. Hôm nay tôi không thể giúp được ạ.\n3. Xin lỗi anh. Vậy hôm nay em xin phép dừng tại đây ạ."
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_phanxa-02",
  "level": "N3",
  "category": "nghe_phanxa",
  "categoryName": "Nghe phản xạ (即時応答)",
  "lessonNumber": 2,
  "title": "Bài 2: Luyện nghe phản xạ tình huống tức thì (即時応答 第2回)",
  "description": "Dạng bài nghe phản xạ nhanh câu giao tiếp ngắn tức thì (即時応答): Lắng nghe câu nói và các phương án đối đáp trong file âm thanh. Bấm chọn câu phản hồi phù hợp nhất: 1, 2 hoặc 3.",
  "questions": [
    {
      "id": 75,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai2/75.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. お茶はダメなの？",
          "meaning": "Trà thì không được à?",
          "analysis": "Sai: Đối phương đang hỏi xin trà hoặc đồ uống."
        },
        {
          "option": "2. なくてもいいよ。",
          "meaning": "Không có cũng được mà.",
          "analysis": "Sai: Đây là câu người đi xin đồ nói."
        },
        {
          "option": "3. 水ならあるけど。",
          "meaning": "Nếu là nước lọc thì tớ có đấy.",
          "analysis": "ĐÚNG: Trả lời đồ uống mình hiện có sẵn ('水ならあるけど') cho bạn đang khát khô cổ họng."
        }
      ],
      "answer": 2,
      "evidence": "「のどカラカラなんだけど、お茶か何か持ってない？→ 3. 水ならあるけど。」",
      "explanation": "Đáp án đúng là 3 (水ならあるけど).\n- Lời thoại: Bạn than khát và hỏi xin nước uống: 「のどカラカラなんだけど、お茶か何か持ってない？」 (Cổ họng tớ khô khốc rồi, cậu có mang theo trà hay gì không?).\n- Phản hồi có nước lọc: 「水ならあるけど。」 (Nếu là nước lọc thì tớ có đấy).",
      "scriptJp": "<p>のどカラカラなんだけど、お<ruby>茶<rt>ちゃ</rt></ruby>か<ruby>何<rt>なに</rt></ruby>か<ruby>持<rt>も</rt></ruby>ってない？<br>1. お<ruby>茶<rt>ちゃ</rt></ruby>はダメなの？<br>2. なくてもいいよ。<br><strong>3. <ruby>水<rt>みず</rt></ruby>ならあるけど。</strong></p>",
      "scriptVi": "Cổ họng tớ khô khốc hết cả rồi, cậu có mang theo trà hay đồ gì uống được không?\n1. Trà thì không được à?\n2. Không có cũng được mà.\n3. Nếu là nước lọc thì tớ có đấy."
    },
    {
      "id": 76,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai2/76.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 部長が伝えてくださるんですか。",
          "meaning": "Trưởng phòng sẽ truyền đạt giúp ạ?",
          "analysis": "Sai: Mình là người phải đi truyền đạt báo cáo cho Trưởng phòng."
        },
        {
          "option": "2. どうぞよろしくお願いします。",
          "meaning": "Xin nhờ anh/chị ạ.",
          "analysis": "Sai: Câu nhờ vả người khác."
        },
        {
          "option": "3. わかりました、報告します。",
          "meaning": "Tôi hiểu rồi, tôi sẽ báo cáo ạ.",
          "analysis": "ĐÚNG: Tiếp nhận chỉ thị nhắc nhở và cam kết sẽ báo cáo lại cho Trưởng phòng ('わかりました、報告します')."
        }
      ],
      "answer": 2,
      "evidence": "「今日の会議で出た意見は、部長にもきちんと伝えておくようにね。→ 3. わかりました、報告します。」",
      "explanation": "Đáp án đúng là 3 (わかりました、報告します).\n- Lời thoại: Được giao nhiệm vụ: 「今日の会議で出た意見は、部長にもきちんと伝えておくようにね。」 (Ý kiến trong cuộc họp hôm nay, nhớ báo cáo lại cẩn thận cho Trưởng phòng nhé).\n- Nhận lệnh chuẩn mực: 「わかりました、報告します。」 (Vâng tôi hiểu rồi, tôi sẽ báo cáo lại ngay ạ).",
      "scriptJp": "<p><ruby>今日<rt>きょう</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>で<ruby>出<rt>で</rt></ruby>た<ruby>意見<rt>いけん</rt></ruby>は、<ruby>部長<rt>ぶちょう</rt></ruby>にもきちんと<ruby>伝<rt>つた</rt></ruby>えておくようにね。<br>1. <ruby>部長<rt>ぶちょう</rt></ruby>が<ruby>伝<rt>つた</rt></ruby>えてくださるんですか。<br>2. どうぞよろしくお<ruby>願<rt>ねが</rt></ruby>いします。<br><strong>3. わかりました、<ruby>報告<rt>ほうこく</rt></ruby>します。</strong></p>",
      "scriptVi": "Những ý kiến đưa ra trong cuộc họp hôm nay, nhớ phải truyền đạt báo cáo lại cẩn thận cho Trưởng phòng đấy nhé.\n1. Trưởng phòng sẽ truyền đạt giúp ạ?\n2. Xin nhờ cậy anh ạ.\n3. Tôi hiểu rồi, tôi sẽ báo cáo ạ."
    },
    {
      "id": 77,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai2/77.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. すみません、そうしていただけますか。",
          "meaning": "Phiền anh, anh gọi giúp tôi như vậy được không ạ.",
          "analysis": "ĐÚNG: Khách hàng đồng ý nhận lời đề nghị giúp đỡ gọi taxi của nhân viên một cách lịch sự ('そうしていただけますか')."
        },
        {
          "option": "2. あの、私は呼んでおりませんが。",
          "meaning": "À, tôi đâu có gọi đâu ạ.",
          "analysis": "Sai: Nhân viên đang chủ động đề nghị gọi taxi giúp."
        },
        {
          "option": "3. 頼んでくださったんですか。ありがとう。",
          "meaning": "Bạn đã gọi hộ tôi rồi đấy à? Cảm ơn nhé.",
          "analysis": "Sai: Nhân viên mới chỉ đang đề nghị gọi chứ chưa gọi xong."
        }
      ],
      "answer": 0,
      "evidence": "「お客様、雨が降っておりますので、タクシーをお呼びいたしましょうか。→ 1. すみません、そうしていただけますか。」",
      "explanation": "Đáp án đúng là 1 (すみません、そうしていただけますか).\n- Lời thoại: Nhân viên đề nghị: 「お客様、雨が降っておりますので、タクシーをお呼びいたしましょうか。」 (Kính thưa quý khách, trời đang mưa để em gọi taxi giúp quý khách nhé ạ?).\n- Khách đồng ý lịch sự: 「すみません、そうしていただけますか。」 (Cảm phiền bạn gọi giúp tôi nhé).",
      "scriptJp": "<p>お<ruby>客様<rt>きゃくさま</rt></ruby>、<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っておりますので、タクシーをお<ruby>呼<rt>よ</rt></ruby>びいたしましょうか。<br><strong>1. すみません、そうしていただけますか。</strong><br>2. あの、<ruby>私<rt>わたし</rt></ruby>は<ruby>呼<rt>よ</rt></ruby>んでおりませんが。<br>3. <ruby>頼<rt>たの</rt></ruby>んでくださったんですか。ありがとう。</p>",
      "scriptVi": "Kính thưa quý khách, vì trời đang mưa nên để em gọi taxi giúp quý khách nhé ạ?\n1. Phiền bạn, bạn gọi giúp tôi như vậy được không ạ.\n2. À, tôi đâu có gọi đâu ạ.\n3. Bạn đã gọi hộ tôi rồi à? Cảm ơn nhé."
    },
    {
      "id": 78,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai2/78.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. え？前の方に何かあるんですか。",
          "meaning": "Hả? Phía đằng trước có cái gì à?",
          "analysis": "Sai: Hiểu nhầm '前' (trước đây) thành phía trước mặt."
        },
        {
          "option": "2. いえ、多分ないと思いますが。",
          "meaning": "Dạ không, tôi nghĩ là chắc chưa gặp đâu ạ.",
          "analysis": "ĐÚNG: Trả lời phủ nhận lịch sự câu hỏi liệu trước đây hai người đã từng gặp nhau ở đâu chưa ('お目にかかったことありませんか')."
        },
        {
          "option": "3. どこでなくしましたか。",
          "meaning": "Bạn đã làm mất ở đâu thế?",
          "analysis": "Sai: Không liên quan đến việc gặp mặt."
        }
      ],
      "answer": 1,
      "evidence": "「あの、前にどこかで、お目にかかったことありませんか。→ 2. いえ、多分ないと思いますが。」",
      "explanation": "Đáp án đúng là 2 (いえ、多分ないと思いますが).\n- Lời thoại: Người khác hỏi: 「あの、前にどこかで、お目にかかったことありませんか。」 (Xin lỗi, trước đây chúng ta đã từng gặp nhau ở đâu chưa nhỉ?).\n- Đáp lại lịch sự: 「いえ、多分ないと思いますが。」 (Dạ không, em nghĩ là chắc chưa đâu ạ).",
      "scriptJp": "<p>あの、<ruby>前<rt>まえ</rt></ruby>にどこかで、お<ruby>目<rt>め</rt></ruby>にかかったことありませんか。<br>1. え？<ruby>前<rt>まえ</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>に<ruby>何<rt>なに</rt></ruby>かあるんですか。<br><strong>2. いえ、<ruby>多分<rt>たぶん</rt></ruby>ないと<ruby>思<rt>おも</rt></ruby>いますが。</strong><br>3. どこでなくしましたか。</p>",
      "scriptVi": "Xin lỗi, trước đây có phải chúng ta đã từng gặp nhau ở đâu đó rồi không nhỉ?\n1. Hả? Phía trước có cái gì à?\n2. Dạ không, tôi nghĩ là chắc chưa gặp đâu ạ.\n3. Bạn đã làm mất ở đâu thế?"
    },
    {
      "id": 79,
      "subId": "5番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai2/79.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. じゃあ、アイスクリーム頼むよ。",
          "meaning": "Vậy thì nhờ cậu mua giúp que kem nhé.",
          "analysis": "ĐÚNG: Tiếp nhận lời đề nghị mua hộ đồ ở siêu thị của bạn và nhờ mua kem ('アイスクリーム頼むよ')."
        },
        {
          "option": "2. ついでに牛乳買ってきてよ。",
          "meaning": "Nhân tiện thì mua sữa mang về đi.",
          "analysis": "Sai: Dùng 'ついでに' khi mình tự đi nhờ mua thêm, không tự nhiên bằng câu 1."
        },
        {
          "option": "3. 悪いけど、今は行けないよ。",
          "meaning": "Ngại quá nhưng bây giờ tớ không đi được.",
          "analysis": "Sai: Người nói là người đi siêu thị chứ không rủ mình cùng đi."
        }
      ],
      "answer": 0,
      "evidence": "「スーパー行くけど、何か買ってこようか。→ 1. じゃあ、アイスクリーム頼むよ。」",
      "explanation": "Đáp án đúng là 1 (じゃあ、アイスクリーム頼むよ).\n- Lời thoại: Bạn ngỏ ý mua đồ hộ: 「スーパー行くけど、何か買ってこようか。」 (Tớ đi siêu thị đây, có cần mua giúp gì không?).\n- Nhờ bạn mua đồ: 「じゃあ、アイスクリーム頼むよ。」 (Vậy nhờ cậu mua giúp que kem nhé).",
      "scriptJp": "<p>スーパー<ruby>行<rt>い</rt></ruby>くけど、<ruby>何<rt>なに</rt></ruby>か<ruby>買<rt>か</rt></ruby>ってこようか。<br><strong>1. じゃあ、アイスクリーム<ruby>頼<rt>たの</rt></ruby>むよ。</strong><br>2. ついでに<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby><ruby>買<rt>か</rt></ruby>ってきてよ。<br>3. <ruby>悪<rt>わる</rt></ruby>いけど、<ruby>今<rt>いま</rt></ruby>は<ruby>行<rt>い</rt></ruby>けないよ。</p>",
      "scriptVi": "Tớ đi siêu thị đây, có cần tớ mua giúp cái gì mang về không?\n1. Vậy thì nhờ cậu mua giúp que kem nhé.\n2. Nhân tiện thì mua sữa mang về đi.\n3. Ngại quá nhưng bây giờ tớ không đi được."
    },
    {
      "id": 80,
      "subId": "6番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai2/80.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. え？いつ頃から？",
          "meaning": "Hả? Đóng từ tầm khoảng khi nào thế?",
          "analysis": "ĐÚNG: Bất ngờ khi nghe tin quán quen đóng cửa suốt từ dạo nọ đến giờ ('ずっと閉まってる') nên hỏi thời điểm bắt đầu đóng."
        },
        {
          "option": "2. え？そんなに早い時間に？",
          "meaning": "Hả? Đóng vào giờ sớm thế cơ à?",
          "analysis": "Sai: Hiểu nhầm giờ đóng cửa trong ngày."
        },
        {
          "option": "3. え？今日から休み？",
          "meaning": "Hả? Nghỉ từ hôm nay à?",
          "analysis": "Sai: Quán đã đóng cửa suốt một thời gian rồi ('ずっと閉まってる')."
        }
      ],
      "answer": 0,
      "evidence": "「前に一緒によく行った寿司屋、もうずっと閉まってるんだよ。→ 1. え？いつ頃から？」",
      "explanation": "Đáp án đúng là 1 (え？いつ頃から？).\n- Lời thoại: Bạn kể: 「前に一緒によく行った寿司屋、もうずっと閉まってるんだよ。」 (Quán sushi hồi trước tụi mình hay đi, đóng cửa suốt từ đợt nọ tới giờ rồi đấy).\n- Hỏi lại mốc thời gian: 「え？いつ頃から？」 (Hả? Đóng từ tầm khi nào thế?).",
      "scriptJp": "<p><ruby>前<rt>まえ</rt></ruby>に<ruby>一緒<rt>いっしょ</rt></ruby>によく<ruby>行<rt>い</rt></ruby>った<ruby>寿司屋<rt>すしや</rt></ruby>、もうずっと<ruby>閉<rt>し</rt></ruby>まってるんだよ。<br><strong>1. え？いつ<ruby>頃<rt>ごろ</rt></ruby>から？</strong><br>2. え？そんなに<ruby>早<rt>はや</rt></ruby>い<ruby>時間<rt>じかん</rt></ruby>に？<br>3. え？<ruby>今日<rt>きょう</rt></ruby>から<ruby>休<rt>やす</rt></ruby>み？</p>",
      "scriptVi": "Quán sushi hồi trước tụi mình hay đi cùng nhau ấy, đóng cửa suốt từ đợt nọ tới giờ rồi đấy.\n1. Hả? Đóng từ tầm khoảng khi nào thế?\n2. Hả? Vào giờ sớm thế cơ à?\n3. Hả? Nghỉ từ hôm nay à?"
    },
    {
      "id": 81,
      "subId": "7番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai2/81.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. え？僕、メール送ってないよ。",
          "meaning": "Hả? Tớ đâu có gửi email đâu.",
          "analysis": "Sai: Đối phương là người gửi mail."
        },
        {
          "option": "2. ごめん、受け取ったのに返事しなくて。",
          "meaning": "Xin lỗi cậu, tớ nhận được rồi mà lại chưa phản hồi lại.",
          "analysis": "ĐÚNG: Xác nhận đã nhận được email của bạn gửi hôm kia và xin lỗi vì chưa kịp hồi âm ('受け取ったのに返事しなくて')."
        },
        {
          "option": "3. いいよ、届けてあげるよ。",
          "meaning": "Được chứ, để tớ mang đến cho cậu.",
          "analysis": "Sai: Không liên quan đến việc nhận mail."
        }
      ],
      "answer": 1,
      "evidence": "「一昨日、資料をメールで送ったんだけど、届いてる？→ 2. ごめん、受け取ったのに返事しなくて。」",
      "explanation": "Đáp án đúng là 2 (ごめん、受け取ったのに返事しなくて).\n- Lời thoại: Bạn hỏi: 「一昨日、資料をメールで送ったんだけど、届いてる？」 (Hôm kia tớ gửi tài liệu qua mail rồi, cậu nhận được chưa?).\n- Xác nhận và xin lỗi: 「ごめん、受け取ったのに返事しなくて。」 (Xin lỗi cậu nhé, tớ nhận được rồi mà chưa kịp trả lời lại).",
      "scriptJp": "<p><ruby>一昨日<rt>おととい</rt></ruby>、<ruby>資料<rt>しりょう</rt></ruby>をメールで<ruby>送<rt>おく</rt></ruby>ったんだけど、<ruby>届<rt>とど</rt></ruby>いてる？<br>1. え？<ruby>僕<rt>ぼく</rt></ruby>、メール<ruby>送<rt>おく</rt></ruby>ってないよ。<br><strong>2. ごめん、<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>ったのに<ruby>返事<rt>へんじ</rt></ruby>しなくて。</strong><br>3. いいよ、<ruby>届<rt>とど</rt></ruby>けてあげるよ。</p>",
      "scriptVi": "Hôm kia, tôi đã gửi tài liệu qua email rồi, bạn đã nhận được chưa?\n1. Hả? Tôi đâu có gửi email đâu.\n2. Xin lỗi cậu, tớ nhận được rồi mà lại chưa phản hồi lại.\n3. Được chứ, để tớ mang đến cho cậu."
    },
    {
      "id": 82,
      "subId": "8番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai2/82.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 本当、量多いですね。",
          "meaning": "Đúng thật, lượng nhiều quá trời luôn ạ.",
          "analysis": "ĐÚNG: Đồng tình với nhận định phần ăn của quán này quá nhiều không thể ăn hết nổi ('本当、量多いですね')."
        },
        {
          "option": "2. ちょっと足りないですよね。",
          "meaning": "Hơi thiếu một chút nhỉ.",
          "analysis": "Sai: Trái ngược với cảm thán quá nhiều."
        },
        {
          "option": "3. じゃあ、一人で食べますか。",
          "meaning": "Vậy thì bạn ăn một mình nhé?",
          "analysis": "Sai: Không ăn hết được chứ không phải chia người ăn."
        }
      ],
      "answer": 0,
      "evidence": "「この店のカレー、これで一人前？こんなに食べられないですよね。→ 1. 本当、量多いですね。」",
      "explanation": "Đáp án đúng là 1 (本当、量多いですね).\n- Lời thoại: Bạn cảm thán suất ăn: 「この店のカレー、これで一人前？こんなに食べられないですよね。」 (Cà ri quán này ngần này là một suất á? Nhiều thế này ăn sao hết nhỉ).\n- Đồng tình: 「本当、量多いですね。」 (Công nhận, nhiều thật đấy ạ).",
      "scriptJp": "<p>この<ruby>店<rt>みせ</rt></ruby>のカレー、これで<ruby>一人前<rt>いちにんまえ</rt></ruby>？こんなに<ruby>食<rt>た</rt></ruby>べられないですよね。<br><strong>1. <ruby>本当<rt>ほんとう</rt></ruby>、<ruby>量<rt>りょう</rt></ruby><ruby>多<rt>おお</rt></ruby>いですね。</strong><br>2. ちょっと<ruby>足<rt>た</rt></ruby>りないですよね。<br>3. じゃあ、<ruby>一人<rt>ひとり</rt></ruby>で<ruby>食<rt>た</rt></ruby>べますか。</p>",
      "scriptVi": "Cà ri quán này, ngần này mà là một suất á? Nhiều thế này làm sao ăn hết nổi nhỉ.\n1. Đúng thật, lượng nhiều quá trời luôn ạ.\n2. Hơi thiếu một chút nhỉ.\n3. Vậy thì bạn ăn một mình nhé?"
    },
    {
      "id": 83,
      "subId": "9番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai2/83.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. うーん、それは残念だね。",
          "meaning": "Ừm, chuyện đó đáng tiếc thật nhỉ.",
          "analysis": "Sai: Thiếu sự thông cảm với người xin lỗi."
        },
        {
          "option": "2. ううん、気にしないで。",
          "meaning": "Không sao đâu, cậu đừng bận tâm nhé.",
          "analysis": "ĐÚNG: Đáp lại lời xin lỗi vì bận không đi chơi được bằng câu an ủi thân thiết 'ううん、気にしないで' (Đừng bận tâm nhé)."
        },
        {
          "option": "3. 本当にごめん。",
          "meaning": "Thật sự xin lỗi cậu nhé.",
          "analysis": "Sai: Mình là người rủ chứ không phải người thất hẹn."
        }
      ],
      "answer": 1,
      "evidence": "「昨日はせっかくボーリングに誘ってくれたのに、行けなくて悪かったね。→ 2. ううん、気にしないで。」",
      "explanation": "Đáp án đúng là 2 (ううん、気にしないで).\n- Lời thoại: Bạn xin lỗi vì thất hẹn: 「昨日はせっかくボーリングに誘ってくれたのに、行けなくて悪かったね。」 (Hôm qua cậu cất công rủ đi bowling mà tớ không đi được, ngại quá).\n- An ủi bạn: 「ううん、気にしないで。」 (Không sao đâu, cậu đừng để bụng nhé).",
      "scriptJp": "<p><ruby>昨日<rt>きのう</rt></ruby>はせっかくボーリングに<ruby>誘<rt>さそ</rt></ruby>ってくれたのに、<ruby>行<rt>い</rt></ruby>けなくて<ruby>悪<rt>わる</rt></ruby>かったね。<br>1. うーん、それは<ruby>残念<rt>ざんねん</rt></ruby>だね。<br><strong>2. ううん、<ruby>気<rt>き</rt></ruby>にしないで。</strong><br>3. <ruby>本当<rt>ほんとう</rt></ruby>にごめん。</p>",
      "scriptVi": "Hôm qua bạn cất công rủ tớ đi chơi bowling thế mà tớ lại không đi được, ngại với cậu quá.\n1. Ừm, chuyện đó đáng tiếc thật nhỉ.\n2. Không sao đâu, cậu đừng bận tâm nhé.\n3. Thật sự xin lỗi cậu nhé."
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_phanxa-03",
  "level": "N3",
  "category": "nghe_phanxa",
  "categoryName": "Nghe phản xạ (即時応答)",
  "lessonNumber": 3,
  "title": "Bài 3: Luyện nghe phản xạ tình huống tức thì (即時応答 第3回)",
  "description": "Dạng bài nghe phản xạ nhanh câu giao tiếp ngắn tức thì (即時応答): Lắng nghe câu nói và các phương án đối đáp trong file âm thanh. Bấm chọn câu phản hồi phù hợp nhất: 1, 2 hoặc 3.",
  "questions": [
    {
      "id": 84,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai3/84.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 見てもらえてよかったね。",
          "meaning": "Được người ta xem giúp thì tốt quá rồi nhỉ.",
          "analysis": "Sai: Dùng khi người khác đã được ai đó xem giúp."
        },
        {
          "option": "2. そんなに見たいの？",
          "meaning": "Em muốn xem đến mức đó cơ à?",
          "analysis": "Sai: Hậu bối nhờ tiền bối xem bài của mình chứ không phải hậu bối đòi xem."
        },
        {
          "option": "3. 僕でよければ。",
          "meaning": "Nếu là anh xem giúp được thì anh sẵn lòng.",
          "analysis": "ĐÚNG: Tiền bối khiêm tốn nhận lời xem giúp báo cáo cho hậu bối ('僕でよければ')."
        }
      ],
      "answer": 2,
      "evidence": "「田中先輩、レポート書いたんで、ちょっと見てほしいんですけど。→ 3. 僕でよければ。」",
      "explanation": "Đáp án đúng là 3 (僕でよければ).\n- Lời thoại: Hậu bối nhờ: 「田中先輩、レポート書いたんで、ちょっと見てほしいんですけど。」 (Anh Tanaka ơi, em vừa viết xong báo cáo, muốn nhờ anh xem qua giúp em một chút ạ).\n- Tiền bối nhận lời khiêm tốn: 「僕でよければ。」 (Nếu anh mà giúp được thì sẵn lòng thôi).",
      "scriptJp": "<p><ruby>田中<rt>たなか</rt></ruby><ruby>先輩<rt>せんぱい</rt></ruby>、レポート<ruby>書<rt>か</rt></ruby>いたんで、ちょっと<ruby>見<rt>み</rt></ruby>てほしいんですけど。<br>1. <ruby>見<rt>み</rt></ruby>てもらえてよかったね。<br>2. そんなに<ruby>見<rt>み</rt></ruby>たいの？<br><strong>3. <ruby>僕<rt>ぼく</rt></ruby>でよければ。</strong></p>",
      "scriptVi": "Nữ: Anh Tanaka tiền bối ơi, em vừa viết xong báo cáo, muốn nhờ anh xem qua giúp em một chút ạ.\n1. Được người ta xem giúp thì tốt quá rồi nhỉ.\n2. Em muốn xem đến mức đó cơ à?\n3. Nếu là anh giúp được thì anh sẵn lòng."
    },
    {
      "id": 85,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai3/85.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 留学先は、どこでもいいと思うよ。",
          "meaning": "Nơi du học thì tớ nghĩ ở đâu cũng tốt thôi.",
          "analysis": "Sai: Đối phương đang hỏi địa điểm lấy tờ rơi ('パンフレット')."
        },
        {
          "option": "2. うちの学部の事務室にあるよ。",
          "meaning": "Có ở văn phòng khoa của tụi mình đấy.",
          "analysis": "ĐÚNG: Chỉ rõ địa điểm có sẵn tờ rơi du học ('うちの学部の事務室にあるよ')."
        },
        {
          "option": "3. どこが人気があるか知らないな。",
          "meaning": "Chỗ nào được yêu thích thì tớ không biết đâu.",
          "analysis": "Sai: Không trả lời câu hỏi lấy tài liệu ở đâu."
        }
      ],
      "answer": 1,
      "evidence": "「ねえ、留学のパンフレットって、どこに行ったらもらえるか知ってる？→ 2. うちの学部の事務室にあるよ。」",
      "explanation": "Đáp án đúng là 2 (うちの学部の事務室にあるよ).\n- Lời thoại: Bạn hỏi chỗ lấy tài liệu: 「ねえ、留学のパンフレットって、どこに行ったらもらえるか知ってる？」 (Này, tờ rơi du học đi đâu lấy cậu có biết không?).\n- Chỉ dẫn cụ thể: 「うちの学部の事務室にあるよ。」 (Ở văn phòng khoa của tụi mình có đấy).",
      "scriptJp": "<p>ねえ、<ruby>留学<rt>りゅうがく</rt></ruby>のパンフレットって、どこに<ruby>行<rt>い</rt></ruby>ったらもらえるか<ruby>知<rt>し</rt></ruby>ってる？<br>1. <ruby>留学先<rt>りゅうがくさき</rt></ruby>は、どこでもいいと<ruby>思<rt>おも</rt></ruby>うよ。<br><strong>2. うちの<ruby>学部<rt>がくぶ</rt></ruby>の<ruby>事務室<rt>じむしつ</rt></ruby>にあるよ。</strong><br>3. どこが<ruby>人気<rt>にんき</rt></ruby>があるか<ruby>知<rt>し</rt></ruby>らないな。</p>",
      "scriptVi": "Nam: Này, tờ rơi thông tin du học thì đi đâu lấy cậu có biết không?\n1. Nơi du học thì tớ nghĩ ở đâu cũng tốt thôi.\n2. Có ở văn phòng khoa của tụi mình đấy.\n3. Chỗ nào được ưa chuộng thì tớ không biết đâu."
    },
    {
      "id": 86,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai3/86.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 先生と相談してくれたんだね、ありがとう。",
          "meaning": "Cậu đã đi hỏi thầy giúp tớ rồi à, cảm ơn nhé.",
          "analysis": "Sai: Bạn chỉ đang đưa ra lời khuyên chứ chưa đi hỏi giúp."
        },
        {
          "option": "2. そうだね、相談してみる。",
          "meaning": "Ừ nhỉ, để tớ thử đi xin ý kiến thầy xem sao.",
          "analysis": "ĐÚNG: Tiếp nhận lời khuyên đi trao đổi với thầy khi nghiên cứu bế tắc ('そうだね、相談してみる')."
        },
        {
          "option": "3. 相談するの、まだ早すぎるよね。",
          "meaning": "Hỏi ý kiến thì vẫn còn quá sớm nhỉ.",
          "analysis": "Sai: Nghiên cứu đang không thuận lợi nên không thể bảo là quá sớm."
        }
      ],
      "answer": 1,
      "evidence": "「研究、うまく進んでないんだってね。先生に相談したほうがいいんじゃない？→ 2. そうだね、相談してみる。」",
      "explanation": "Đáp án đúng là 2 (そうだね、相談してみる).\n- Lời thoại: Được bạn khuyên: 「研究、うまく進んでないんだってね。先生に相談したほうがいいんじゃない？」 (Nghiên cứu không thuận lợi nhỉ, hay là đi hỏi thầy xem sao?).\n- Nhận lời khuyên: 「そうだね、相談してみる。」 (Ừ nhỉ, để tớ thử đi hỏi thầy xem).",
      "scriptJp": "<p><ruby>研究<rt>けんきゅう</rt></ruby>、うまく<ruby>進<rt>すす</rt></ruby>んでないんだってね。<ruby>先生<rt>せんせい</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>したほうがいいんじゃない？<br>1. <ruby>先生<rt>せんせい</rt></ruby>と<ruby>相談<rt>そうだん</rt></ruby>してくれたんだね、ありがとう。<br><strong>2. そうだね、<ruby>相談<rt>そうだん</rt></ruby>してみる。</strong><br>3. <ruby>相談<rt>そうだん</rt></ruby>するの、まだ<ruby>早<rt>はや</rt></ruby>すぎるよね。</p>",
      "scriptVi": "Nữ: Nghe nói nghiên cứu không được thuận lợi nhỉ. Chẳng phải là cậu nên đi trao đổi xin ý kiến thầy giáo xem sao à?\n1. Cậu đã đi hỏi thầy giúp tớ rồi à, cảm ơn nhé.\n2. Ừ nhỉ, để tớ thử đi hỏi thầy xem sao.\n3. Đi hỏi ý kiến thì vẫn còn quá sớm nhỉ."
    },
    {
      "id": 87,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai3/87.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 自分でテーマ選んじゃいけないの？",
          "meaning": "Cậu không được tự chọn chủ đề à?",
          "analysis": "Sai: Bạn đang tự chọn nhưng mãi chưa chốt được."
        },
        {
          "option": "2. 何について話すか、テーマもう決まってるんだね。",
          "meaning": "Nói về cái gì thì chủ đề cậu đã chốt rồi nhỉ.",
          "analysis": "Sai: Trái ngược với tình trạng chưa quyết định được ('なかなか決められなくて')."
        },
        {
          "option": "3. テーマ決めるのって難しいよね。",
          "meaning": "Việc chọn chủ đề công nhận là khó thật nhỉ.",
          "analysis": "ĐÚNG: Đồng cảm và thấu hiểu khó khăn của bạn khi chọn chủ đề thi hùng biện ('テーマ決めるのって難しいよね')."
        }
      ],
      "answer": 2,
      "evidence": "「今度、スピーチ大会に出るんだけど、何について話したらいいか、テーマなかなか決められなくて。→ 3. テーマ決めるのって難しいよね。」",
      "explanation": "Đáp án đúng là 3 (テーマ決めるのって難しいよね).\n- Lời thoại: Bạn than thở: 「今度、スピーチ大会に出るんだけど、何について話したらいいか、テーマなかなか決められなくて。」 (Sắp tới thi hùng biện mà mãi tớ chưa chọn được chủ đề).\n- Thấu hiểu và chia sẻ: 「テーマ決めるのって難しいよね。」 (Việc chọn chủ đề công nhận khó thật đấy nhỉ).",
      "scriptJp": "<p><ruby>今度<rt>こんど</rt></ruby>、スピーチ<ruby>大会<rt>たいかい</rt></ruby>に<ruby>出<rt>で</rt></ruby>るんだけど、<ruby>何<rt>なに</rt></ruby>について<ruby>話<rt>はな</rt></ruby>したらいいか、テーマなかなか<ruby>決<rt>き</rt></ruby>められなくて。<br>1. <ruby>自分<rt>じぶん</rt></ruby>でテーマ<ruby>選<rt>えら</rt></ruby>んじゃいけないの？<br>2. <ruby>何<rt>なに</rt></ruby>について<ruby>話<rt>はな</rt></ruby>すか、テーマもう<ruby>決<rt>き</rt></ruby>まってるんだね。<br><strong>3. テーマ<ruby>決<rt>き</rt></ruby>めるのって<ruby>難<rt>むずか</rt></ruby>しいよね。</strong></p>",
      "scriptVi": "Nam: Sắp tới tớ tham gia cuộc thi hùng biện, nhưng nên nói về cái gì thì mãi mà tớ chưa chốt chọn được chủ đề.\n1. Cậu không được tự chọn chủ đề à?\n2. Nói về cái gì thì chủ đề cậu đã chốt rồi nhỉ.\n3. Việc chọn chủ đề công nhận là khó thật nhỉ."
    },
    {
      "id": 88,
      "subId": "5番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai3/88.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. もっと綺麗に片付けてね。",
          "meaning": "Cậu hãy dọn dẹp sạch sẽ hơn nữa nhé.",
          "analysis": "Sai: Tự nhiên lại đi bảo ngược lại đối phương dọn dẹp."
        },
        {
          "option": "2. うん、あとで片付けるよ。",
          "meaning": "Ừ, lát nữa tớ sẽ dọn dẹp.",
          "analysis": "ĐÚNG: Nhận lời nhắc nhở và hứa sẽ dọn dẹp bàn làm việc sau ('うん、あとで片付けるよ')."
        },
        {
          "option": "3. あ、片付けてくれたんだね。",
          "meaning": "A, cậu đã dọn dẹp giúp tớ rồi à.",
          "analysis": "Sai: Bàn vẫn đang bừa bộn ('机の上ひどいね')."
        }
      ],
      "answer": 1,
      "evidence": "「中村さん、机の上ひどいね。もう少し整理したらどう？→ 2. うん、あとで片付けるよ。」",
      "explanation": "Đáp án đúng là 2 (うん、あとで片付けるよ).\n- Lời thoại: Được nhắc nhở: 「中村さん、机の上ひどいね。もう少し整理したらどう？」 (Nakamura này, bàn bừa bộn quá, dọn lại một chút xem sao?).\n- Tiếp nhận: 「うん、あとで片付けるよ。」 (Ừ, lát nữa tớ sẽ dọn dẹp ngay).",
      "scriptJp": "<p><ruby>中村<rt>なかむら</rt></ruby>さん、<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>ひどいね。もう<ruby>少<rt>すこ</rt></ruby>し<ruby>整理<rt>せいり</rt></ruby>したらどう？<br>1. もっと<ruby>綺麗<rt>きれい</rt></ruby>に<ruby>片付<rt>かたづ</rt></ruby>けてね。<br><strong>2. うん、あとで<ruby>片付<rt>かたづ</rt></ruby>けるよ。</strong><br>3. あ、<ruby>片付<rt>かたづ</rt></ruby>けてくれたんだね。</p>",
      "scriptVi": "Nữ: Nakamura này, trên bàn của bạn bừa bộn kinh khủng đấy. Bạn dọn dẹp sắp xếp lại một chút xem sao?\n1. Cậu hãy dọn dẹp sạch sẽ hơn nữa nhé.\n2. Ừ, lát nữa tớ sẽ dọn dẹp.\n3. A, cậu đã dọn dẹp giúp tớ rồi à."
    },
    {
      "id": 89,
      "subId": "6番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai3/89.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. もう混んじゃってるの？",
          "meaning": "Đã đông nghẹt rồi á?",
          "analysis": "Sai: Người ta đang bảo đi lúc chưa đông ('混まないうちに')."
        },
        {
          "option": "2. えー、早く食べたいんだけど。",
          "meaning": "Hả, nhưng tớ muốn ăn sớm cơ.",
          "analysis": "Sai: Lời rủ chính là đi ăn sớm ngay lúc này."
        },
        {
          "option": "3. じゃあ、今から行こうか。",
          "meaning": "Thế thì tụi mình đi ngay bây giờ nhé.",
          "analysis": "ĐÚNG: Đồng ý đi ăn sớm ngay để tránh giờ cao điểm đông đúc ('じゃあ、今から行こうか')."
        }
      ],
      "answer": 2,
      "evidence": "「学校の食堂、昼の時間はいつも混むから、混まないうちに食べに行かない？→ 3. じゃあ、今から行こうか。」",
      "explanation": "Đáp án đúng là 3 (じゃあ、今から行こうか).\n- Lời thoại: Rủ đi ăn sớm: 「学校の食堂、昼の時間はいつも混むから、混まないうちに食べに行かない？」 (Nhà ăn trưa hay đông lắm, đi ăn lúc chưa đông không?).\n- Đồng ý đi ngay: 「じゃあ、今から行こうか。」 (Thế thì tụi mình đi ngay bây giờ nhé).",
      "scriptJp": "<p><ruby>学校<rt>がっこう</rt></ruby>の<ruby>食堂<rt>しょくどう</rt></ruby>、<ruby>昼<rt>ひる</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>はいつも<ruby>混<rt>こ</rt></ruby>むから、<ruby>混<rt>こ</rt></ruby>まないうちに<ruby>食<rt>た</rt></ruby>べに<ruby>行<rt>い</rt></ruby>かない？<br>1. もう<ruby>混<rt>こ</rt></ruby>んじゃってるの？<br>2. えー、<ruby>早<rt>はや</rt></ruby>く<ruby>食<rt>た</rt></ruby>べたいんだけど。<br><strong>3. じゃあ、<ruby>今<rt>いま</rt></ruby>から<ruby>行<rt>い</rt></ruby>こうか。</strong></p>",
      "scriptVi": "Nam: Nhà ăn của trường tầm giờ trưa lúc nào cũng đông, nên trong lúc chưa đông tụi mình đi ăn luôn không?\n1. Đã đông nghẹt rồi á?\n2. Hả, nhưng tớ muốn ăn sớm cơ.\n3. Thế thì tụi mình đi ngay bây giờ nhé."
    },
    {
      "id": 90,
      "subId": "7番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai3/90.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. ええ、構いませんよ。",
          "meaning": "Vâng, được chứ, không sao đâu ạ.",
          "analysis": "ĐÚNG: Đồng ý cho phép đối phương photo 1 bản tài liệu ('ええ、構いませんよ')."
        },
        {
          "option": "2. あ、コピーされたんですね。",
          "meaning": "A, anh đã photo rồi đấy à.",
          "analysis": "Sai: Đối phương mới đang xin phép chứ chưa photo."
        },
        {
          "option": "3. 私がコピーするんですか？",
          "meaning": "Tôi là người đi photo ạ?",
          "analysis": "Sai: Người nói xin tự mình đi photo ('コピーさせていただけませんか')."
        }
      ],
      "answer": 0,
      "evidence": "「山下さん、さっき見せていただいた資料、一部コピーさせていただけませんか？→ 1. ええ、構いませんよ。」",
      "explanation": "Đáp án đúng là 1 (ええ、構いませんよ).\n- Lời thoại: Xin phép photo: 「山下さん、さっき見せていただいた資料、一部コピーさせていただけませんか？」 (Chị Yamashita, tài liệu lúc nãy cho tôi xin phép photo 1 bản nhé?).\n- Cho phép: 「ええ、構いませんよ。」 (Vâng được chứ, không sao đâu ạ).",
      "scriptJp": "<p><ruby>山下<rt>やました</rt></ruby>さん、さっき<ruby>見<rt>み</rt></ruby>せていただいた<ruby>資料<rt>しりょう</rt></ruby>、<ruby>一部<rt>いちぶ</rt></ruby>コピーさせていただけませんか？<br><strong>1. ええ、<ruby>構<rt>かま</rt></ruby>いませんよ。</strong><br>2. あ、コピーされたんですね。<br>3. <ruby>私<rt>わたし</rt></ruby>がコピーするんですか？</p>",
      "scriptVi": "Nam: Chị Yamashita ơi, tài liệu chị cho tôi xem lúc nãy, chị cho phép tôi photo 1 bản có được không ạ?\n1. Vâng, được chứ, không sao đâu ạ.\n2. A, anh đã photo rồi đấy à.\n3. Tôi là người đi photo ạ?"
    },
    {
      "id": 91,
      "subId": "8番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai3/91.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. ハガキ出してきてくれない？",
          "meaning": "Cậu gửi giúp tớ tấm bưu thiếp với được không?",
          "analysis": "ĐÚNG: Nhờ bạn nhân tiện đi bưu điện gửi giúp tấm bưu thiếp ('ハガキ出してきてくれない？')."
        },
        {
          "option": "2. 郵便局は確か駅前にあるよ。",
          "meaning": "Bưu điện hình như ở trước ga đấy.",
          "analysis": "Sai: Bạn đang chuẩn bị đi rồi chứ không hỏi đường."
        },
        {
          "option": "3. ごめん、僕は一緒に行けないよ。",
          "meaning": "Xin lỗi, tớ không đi cùng cậu được.",
          "analysis": "Sai: Bạn không rủ mình cùng đi bưu điện."
        }
      ],
      "answer": 0,
      "evidence": "「今から郵便局に切手買いに行くけど、ついでに何かある？→ 1. ハガキ出してきてくれない？」",
      "explanation": "Đáp án đúng là 1 (ハガキ出してきてくれない？).\n- Lời thoại: Bạn ngỏ ý: 「今から郵便局に切手買いに行くけど、ついでに何かある？」 (Tớ chuẩn bị đi bưu điện mua tem, nhân tiện cậu có nhờ gì không?).\n- Nhờ gửi thiếp: 「ハガキ出してきてくれない？」 (Cậu gửi giúp tớ tấm bưu thiếp nhé?).",
      "scriptJp": "<p><ruby>今<rt>いま</rt></ruby>から<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>に<ruby>切手<rt>きって</rt></ruby><ruby>買<rt>か</rt></ruby>いに<ruby>行<rt>い</rt></ruby>くけど、ついでに<ruby>何<rt>なに</rt></ruby>かある？<br><strong>1. ハガキ<ruby>出<rt>だ</rt></ruby>してきてくれない？</strong><br>2. <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は<ruby>確<rt>たし</rt></ruby>か<ruby>駅前<rt>えきまえ</rt></ruby>にあるよ。<br>3. ごめん、<ruby>僕<rt>ぼく</rt></ruby>は<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>けないよ。</p>",
      "scriptVi": "Nữ: Bây giờ tớ chuẩn bị đi bưu điện mua tem đây, nhân tiện cậu có việc gì gửi gắm/nhờ không?\n1. Cậu gửi giúp tớ tấm bưu thiếp với được không?\n2. Bưu điện hình như ở trước ga đấy.\n3. Xin lỗi, tớ không đi cùng cậu được."
    },
    {
      "id": 92,
      "subId": "9番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai3/92.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 次は、予約してから行かなくちゃね。",
          "meaning": "Lần sau thì phải đặt bàn trước rồi hẵng đi nhé.",
          "analysis": "Sai: Hôm qua bạn đã đặt trước rồi ('予約して行った')."
        },
        {
          "option": "2. ゆっくり食事できてよかったね。",
          "meaning": "Được ăn uống thong thả thì tốt quá nhỉ.",
          "analysis": "Sai: Bị bắt chờ 30 phút là phiền toái chứ không phải thong thả."
        },
        {
          "option": "3. それじゃあ、予約した意味ないね。",
          "meaning": "Thế thì việc đặt trước chẳng có ý nghĩa gì rồi nhỉ.",
          "analysis": "ĐÚNG: Đồng tình với bức xúc của bạn khi đã đặt trước mà vẫn bị chờ gần 30 phút ('予約した意味ないね')."
        }
      ],
      "answer": 2,
      "evidence": "「昨日、レストラン予約して行ったんだけど、30分近くも待たされたよ。→ 3. それじゃあ、予約した意味ないね。」",
      "explanation": "Đáp án đúng là 3 (それじゃあ、予約した意味ないね).\n- Lời thoại: Bạn bức xúc: 「昨日、レストラン予約して行ったんだけど、30分近くも待たされたよ。」 (Hôm qua tớ đặt bàn trước thế mà vẫn bị chờ tận 30 phút).\n- Đồng cảm: 「それじゃあ、予約した意味ないね。」 (Thế thì việc đặt trước coi như vô nghĩa rồi nhỉ).",
      "scriptJp": "<p><ruby>昨日<rt>きのう</rt></ruby>、レストラン<ruby>予約<rt>よやく</rt></ruby>して<ruby>行<rt>い</rt></ruby>ったんだけど、30<ruby>分<rt>ぷん</rt></ruby><ruby>近<rt>ちか</rt></ruby>くも<ruby>待<rt>ま</rt></ruby>たされたよ。<br>1. <ruby>次<rt>つぎ</rt></ruby>は、<ruby>予約<rt>よやく</rt></ruby>してから<ruby>行<rt>い</rt></ruby>かなくちゃね。<br>2. ゆっくり<ruby>食事<rt>しょくじ</rt></ruby>できてよかったね。<br><strong>3. それじゃあ、<ruby>予約<rt>よやく</rt></ruby>した<ruby>意味<rt>いみ</rt></ruby>ないね。</strong></p>",
      "scriptVi": "Nam: Hôm qua, tớ đã đặt bàn nhà hàng trước rồi mới tới, thế mà bị bắt chờ tới gần 30 phút lận đấy.\n1. Lần sau, phải đặt bàn trước rồi hẵng đi nhé.\n2. Được ăn uống thong thả thì tốt quá rồi nhỉ.\n3. Thế thì việc đặt trước chẳng có ý nghĩa gì rồi nhỉ."
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_phanxa-04",
  "level": "N3",
  "category": "nghe_phanxa",
  "categoryName": "Nghe phản xạ (即時応答)",
  "lessonNumber": 4,
  "title": "Bài 4: Luyện nghe phản xạ tình huống tức thì (即時応答 第4回)",
  "description": "Dạng bài nghe phản xạ nhanh câu giao tiếp ngắn tức thì (即時応答): Lắng nghe câu nói và các phương án đối đáp trong file âm thanh. Bấm chọn câu phản hồi phù hợp nhất: 1, 2 hoặc 3.",
  "questions": [
    {
      "id": 93,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai4/93.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. わあー、本当に冷たそう。",
          "meaning": "Oa, trông lạnh thật đấy.",
          "analysis": "Sai: Món ăn nấu nóng sốt chứ không phải món lạnh."
        },
        {
          "option": "2. じゃあ、早速いただくね。",
          "meaning": "Vậy thì tớ xin phép thưởng thức ngay nhé.",
          "analysis": "ĐÚNG: Đáp lại lời mời ăn cơm khi còn nóng ('冷めないうちに食べて') bằng câu nhận lời bắt đầu dùng bữa ('早速いただくね')."
        },
        {
          "option": "3. ええー、まだ食べちゃだめ？",
          "meaning": "Hả, vẫn chưa được ăn cơ á?",
          "analysis": "Sai: Đối phương vừa bảo ăn đi mà."
        }
      ],
      "answer": 1,
      "evidence": "「はい、昼ご飯できたよ。冷めないうちに食べて。→ 2. じゃあ、早速いただくね。」",
      "explanation": "Đáp án đúng là 2 (じゃあ、早速いただくね).\n- Lời thoại: Mời ăn cơm nóng: 「はい、昼ご飯できたよ。冷めないうちに食べて。」 (Cơm trưa nấu xong rồi nè, mau ăn lúc còn nóng nhé).\n- Đáp lại: 「じゃあ、早速いただくね。」 (Vậy thì tớ xin phép thưởng thức ngay đây).",
      "scriptJp": "<p>はい、<ruby>昼<rt>ひる</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>できたよ。<ruby>冷<rt>さ</rt></ruby>めないうちに<ruby>食<rt>た</rt></ruby>べて。<br>1. わあー、<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>冷<rt>つめ</rt></ruby>たそう。<br><strong>2. じゃあ、<ruby>早速<rt>さっそく</rt></ruby>いただくね。</strong><br>3. ええー、まだ<ruby>食<rt>た</rt></ruby>べちゃだめ？</p>",
      "scriptVi": "Nam: Xong rồi nè, cơm trưa nấu xong rồi đây. Mau ăn trong lúc đồ ăn còn chưa bị nguội nhé.\n1. Oa, trông lạnh thật đấy.\n2. Vậy thì tớ xin phép thưởng thức ngay nhé.\n3. Hả, vẫn chưa được ăn cơ á?"
    },
    {
      "id": 94,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai4/94.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. うん、そうしようか。",
          "meaning": "Ừ, tụi mình làm vậy đi.",
          "analysis": "ĐÚNG: Đồng ý với lời đề xuất gọi điện thoại cho bạn Yamada đang đến muộn ('うん、そうしようか')."
        },
        {
          "option": "2. それは良くなかったね。",
          "meaning": "Chuyện đó đã không tốt rồi nhỉ.",
          "analysis": "Sai: Dùng để nhận xét một việc đã qua."
        },
        {
          "option": "3. 早く来た方がいいよ。",
          "meaning": "Nên đến sớm thì hơn đấy.",
          "analysis": "Sai: Không dùng với người đang đợi cùng mình."
        }
      ],
      "answer": 0,
      "evidence": "「山田君遅いね。電話した方がいいんじゃない？→ 1. うん、そうしようか。」",
      "explanation": "Đáp án đúng là 1 (うん、そうしようか).\n- Lời thoại: Đề xuất gọi điện: 「山田君遅いね。電話した方がいいんじゃない？」 (Yamada đến muộn nhỉ, hay là tụi mình gọi điện xem sao?).\n- Đồng ý: 「うん、そうしようか。」 (Ừ, tụi mình gọi điện cho cậu ấy đi).",
      "scriptJp": "<p><ruby>山田<rt>やまだ</rt></ruby><ruby>君<rt>くん</rt></ruby><ruby>遅<rt>おそ</rt></ruby>いね。<ruby>電話<rt>でんわ</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がいいんじゃない？<br><strong>1. うん、そうしようか。</strong><br>2. それは<ruby>良<rt>よ</rt></ruby>くなかったね。<br>3. <ruby>早<rt>はや</rt></ruby>く<ruby>来<rt>き</rt></ruby>た<ruby>方<rt>ほう</rt></ruby>がいいよ。</p>",
      "scriptVi": "Nữ: Bạn Yamada đến muộn nhỉ. Chẳng phải là tụi mình nên gọi điện thoại cho cậu ấy xem sao à?\n1. Ừ, tụi mình làm vậy đi.\n2. Chuyện đó đã không tốt rồi nhỉ.\n3. Nên đến sớm thì hơn đấy."
    },
    {
      "id": 95,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai4/95.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. もう戻ることにしました。",
          "meaning": "Tôi đã quyết định quay lại rồi.",
          "analysis": "Sai: Dùng cho việc di chuyển địa điểm."
        },
        {
          "option": "2. 元気になるといいですね。",
          "meaning": "Mong là anh sẽ khỏe lại thì tốt nhỉ.",
          "analysis": "Sai: Đây là câu chúc người khác mau khỏi bệnh."
        },
        {
          "option": "3. おかげさまで、もうすっかり。",
          "meaning": "Nhờ có chị hỏi thăm, tôi đã khỏe hẳn rồi ạ.",
          "analysis": "ĐÚNG: Mẫu câu lịch sự chuẩn mực để đáp lại lời hỏi thăm sức khỏe sau ốm ('おかげさまで、もうすっかり')."
        }
      ],
      "answer": 2,
      "evidence": "「森田さん、風邪はどうですか？調子は戻りましたか？→ 3. おかげさまで、もうすっかり。」",
      "explanation": "Đáp án đúng là 3 (おかげさまで、もうすっかり).\n- Lời thoại: Được hỏi thăm bệnh tình: 「森田さん、風邪はどうですか？調子は戻りましたか？」 (Anh Morita, bệnh cảm thế nào rồi, sức khỏe đã hồi phục chưa?).\n- Đáp lại lịch sự: 「おかげさまで、もうすっかり。」 (Cảm ơn chị đã hỏi thăm, nhờ trời tôi đã khỏi hẳn rồi ạ).",
      "scriptJp": "<p><ruby>森田<rt>もりた</rt></ruby>さん、<ruby>風邪<rt>かぜ</rt></ruby>はどうですか？<ruby>調子<rt>ちょうし</rt></ruby>は<ruby>戻<rt>もど</rt></ruby>りましたか？<br>1. もう<ruby>戻<rt>もど</rt></ruby>ることにしました。<br>2. <ruby>元気<rt>げんき</rt></ruby>になるといいですね。<br><strong>3. おかげさまで、もうすっかり。</strong></p>",
      "scriptVi": "Nữ: Anh Morita ơi, bệnh cảm cúm của anh thế nào rồi ạ? Sức khỏe của anh đã hồi phục lại chưa ạ?\n1. Tôi đã quyết định quay trở lại rồi.\n2. Mong là sẽ khỏe lại thì tốt nhỉ.\n3. Nhờ có chị hỏi thăm, tôi đã khỏi hẳn rồi ạ."
    },
    {
      "id": 96,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai4/96.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 今、あまり欲しくないな。",
          "meaning": "Bây giờ tớ không muốn mua lắm.",
          "analysis": "Sai: Đối phương rủ đi cùng chứ không bảo mình phải mua đồ."
        },
        {
          "option": "2. 明日なら暇なんだけど。",
          "meaning": "Nếu là ngày mai thì tớ rảnh đấy.",
          "analysis": "ĐÚNG: Khéo léo từ chối hôm nay và gợi ý hẹn sang ngày mai vì ngày mai mình rảnh rỗi ('明日なら暇なんだけど')."
        },
        {
          "option": "3. 一緒に行ってもらったらどう？",
          "meaning": "Cậu thử nhờ ai đó đi cùng xem thế nào?",
          "analysis": "Sai: Không tự nhiên khi bạn đang trực tiếp nhờ mình."
        }
      ],
      "answer": 1,
      "evidence": "「服を買いに行きたいんだけど、今日一緒に行ってくれない？→ 2. 明日なら暇なんだけど。」",
      "explanation": "Đáp án đúng là 2 (明日なら暇なんだけど).\n- Lời thoại: Rủ đi mua sắm: 「服を買いに行きたいんだけど、今日一緒に行ってくれない？」 (Tớ muốn đi mua quần áo, hôm nay cậu đi cùng tớ được không?).\n- Khéo hẹn sang mai: 「明日なら暇なんだけど。」 (Hôm nay thì bận, nhưng nếu là ngày mai thì tớ rảnh đấy).",
      "scriptJp": "<p><ruby>服<rt>ふく</rt></ruby>を<ruby>買<rt>か</rt></ruby>いに<ruby>行<rt>い</rt></ruby>きたいんだけど、<ruby>今日<rt>きょう</rt></ruby><ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってくれない？<br>1. <ruby>今<rt>いま</rt></ruby>、あまり<ruby>欲<rt>ほ</rt></ruby>しくないな。<br><strong>2. <ruby>明日<rt>あした</rt></ruby>なら<ruby>暇<rt>ひま</rt></ruby>なんだけど。</strong><br>3. <ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってもらったらどう？</p>",
      "scriptVi": "Nam: Tớ muốn đi mua quần áo, hôm nay cậu có thể đi cùng với tớ được không?\n1. Bây giờ tớ không muốn mua lắm.\n2. Nếu là ngày mai thì tớ rảnh đấy.\n3. Cậu thử nhờ ai đó đi cùng xem thế nào?"
    },
    {
      "id": 97,
      "subId": "5番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai4/97.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 報告、やっと完成したんですか？",
          "meaning": "Báo cáo cuối cùng cũng hoàn thành rồi ạ?",
          "analysis": "Sai: Hỏi ngược lại người đi kiểm tra mình."
        },
        {
          "option": "2. あ、できたので見ていただけますか？",
          "meaning": "A, em viết xong rồi, anh có thể xem qua giúp em được không ạ?",
          "analysis": "ĐÚNG: Xác nhận báo cáo đã hoàn thành và nhờ cấp trên/đồng nghiệp xem qua ('見ていただけますか')."
        },
        {
          "option": "3. 会議ならもう終わったみたいですよ。",
          "meaning": "Nếu là cuộc họp thì dường như đã kết thúc rồi đấy ạ.",
          "analysis": "Sai: Người ta hỏi viết xong báo cáo chưa chứ không hỏi cuộc họp."
        }
      ],
      "answer": 1,
      "evidence": "「佐藤さん、昨日の会議の報告、書き終わった？→ 2. あ、できたので見ていただけますか？」",
      "explanation": "Đáp án đúng là 2 (あ、できたので見ていただけますか？).\n- Lời thoại: Được hỏi tiến độ: 「佐藤さん、昨日の会議の報告、書き終わった？」 (Satou ơi, báo cáo cuộc họp hôm qua viết xong chưa?).\n- Xác nhận và nhờ xem: 「あ、できたので見ていただけますか？」 (A, em làm xong rồi, anh xem qua giúp em được không ạ?).",
      "scriptJp": "<p><ruby>佐藤<rt>さとう</rt></ruby>さん、<ruby>昨日<rt>きのう</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>の<ruby>報告<rt>ほうこく</rt></ruby>、<ruby>書<rt>か</rt></ruby>き<ruby>終<rt>お</rt></ruby>わった？<br>1. <ruby>報告<rt>ほうこく</rt></ruby>、やっと<ruby>完成<rt>かんせい</rt></ruby>したんですか？<br><strong>2. あ、できたので<ruby>見<rt>み</rt></ruby>ていただけますか？</strong><br>3. <ruby>会議<rt>かいぎ</rt></ruby>ならもう<ruby>終<rt>お</rt></ruby>わったみたいですよ。</p>",
      "scriptVi": "Nam: Satou ơi, bản báo cáo cuộc họp hôm qua cậu đã viết xong chưa?\n1. Báo cáo cuối cùng cũng hoàn thành rồi ạ?\n2. A, em viết xong rồi, anh có thể xem qua giúp em được không ạ?\n3. Nếu là cuộc họp thì dường như đã kết thúc rồi đấy ạ."
    },
    {
      "id": 98,
      "subId": "6番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai4/98.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. いつ連絡取ったの？",
          "meaning": "Em đã liên lạc khi nào thế?",
          "analysis": "Sai: Hậu bối đang hỏi xin số để liên lạc chứ chưa liên lạc."
        },
        {
          "option": "2. メールアドレスでいい？",
          "meaning": "Địa chỉ email thì có được không em?",
          "analysis": "ĐÚNG: Tiền bối hỏi lại xem cho địa chỉ email có được không để giúp hậu bối liên lạc ('メールアドレスでいい？')."
        },
        {
          "option": "3. 会って聞いてみたら？",
          "meaning": "Em gặp trực tiếp rồi hỏi xem sao?",
          "analysis": "Sai: Đang muốn gặp mà không có thông tin liên lạc."
        }
      ],
      "answer": 1,
      "evidence": "「先輩、田中さんに会いたいんですが、連絡先をご存じですか？→ 2. メールアドレスでいい？」",
      "explanation": "Đáp án đúng là 2 (メールアドレスでいい？).\n- Lời thoại: Hỏi xin thông tin liên lạc: 「先輩、田中さんに会いたいんですが、連絡先をご存じですか？」 (Tiền bối ơi, anh có biết thông tin liên lạc của anh Tanaka không ạ?).\n- Tiền bối hỗ trợ: 「メールアドレスでいい？」 (Cho địa chỉ email có được không em?).",
      "scriptJp": "<p><ruby>先輩<rt>せんぱい</rt></ruby>、<ruby>田中<rt>たなか</rt></ruby>さんに<ruby>会<rt>あ</rt></ruby>いたいんですが、<ruby>連絡先<rt>れんらくさき</rt></ruby>をご<ruby>存<rt>ぞん</rt></ruby>じですか？<br>1. いつ<ruby>連絡<rt>れんらく</rt></ruby><ruby>取<rt>と</rt></ruby>ったの？<br><strong>2. メールアドレスでいい？</strong><br>3. <ruby>会<rt>あ</rt></ruby>って<ruby>聞<rt>き</rt></ruby>いてみたら？</p>",
      "scriptVi": "Nam: Tiền bối ơi, em muốn gặp anh Tanaka, anh có biết thông tin liên lạc của anh ấy không ạ?\n1. Em đã liên lạc lúc nào thế?\n2. Địa chỉ email thì có được không em?\n3. Em thử gặp trực tiếp rồi hỏi xem sao?"
    },
    {
      "id": 99,
      "subId": "7番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai4/99.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. いいえ、違いますけど。",
          "meaning": "Dạ không, không phải tôi đâu ạ.",
          "analysis": "ĐÚNG: Trả lời phủ nhận đúng mực khi bị người khác hiểu nhầm mình là nhân viên cửa hàng ('いいえ、違いますけど')."
        },
        {
          "option": "2. それは分かりません。",
          "meaning": "Chuyện đó thì tôi không biết.",
          "analysis": "Sai: Mình có phải nhân viên không thì bản thân phải biết."
        },
        {
          "option": "3. 私はよく来ています。",
          "meaning": "Tôi rất hay đến đây.",
          "analysis": "Sai: Không trả lời trực tiếp cho câu hỏi có phải nhân viên không."
        }
      ],
      "answer": 0,
      "evidence": "「失礼ですが、こちらのお店の者でいらっしゃいますか？→ 1. いいえ、違いますけど。」",
      "explanation": "Đáp án đúng là 1 (いいえ、違いますけど).\n- Lời thoại: Bị hỏi nhầm: 「失礼ですが、こちらのお店の者でいらっしゃいますか？」 (Xin lỗi, có phải anh là nhân viên của quán này không ạ?).\n- Phủ nhận: 「いいえ、違いますけど。」 (Dạ không, tôi không phải nhân viên ở đây đâu ạ).",
      "scriptJp": "<p><ruby>失礼<rt>しつれい</rt></ruby>ですが、こちらのサロン（お<ruby>店<rt>みせ</rt></ruby>）の<ruby>者<rt>もの</rt></ruby>でいらっしゃいますか？<br><strong>1. いいえ、<ruby>違<rt>ちが</rt></ruby>いますけど。</strong><br>2. それは<ruby>分<rt>わ</rt></ruby>かりません。<br>3. <ruby>私<rt>わたし</rt></ruby>はよく<ruby>来<rt>き</rt></ruby>ています。</p>",
      "scriptVi": "Nam: Xin thất lễ, có phải anh/chị là nhân viên/người của cửa hàng này không ạ?\n1. Dạ không, không phải tôi đâu ạ.\n2. Chuyện đó thì tôi không biết.\n3. Tôi rất hay đến đây."
    },
    {
      "id": 100,
      "subId": "8番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai4/100.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. つい…… これから気をつけます。",
          "meaning": "Tớ lỡ miệng... Từ nay về sau tớ sẽ cẩn thận hơn.",
          "analysis": "ĐÚNG: Nhận lỗi vì đã lỡ lời với cấp trên và hứa từ nay sẽ cẩn thận chú ý lời ăn tiếng nói ('これから気をつけます')."
        },
        {
          "option": "2. 確かに私も意外でした。",
          "meaning": "Đúng thật tôi cũng thấy bất ngờ.",
          "analysis": "Sai: Tự mình nói lời xúc phạm mà lại bảo bất ngờ khi sếp giận."
        },
        {
          "option": "3. 部長は怒ってないんですか？",
          "meaning": "Trưởng phòng không nổi giận sao ạ?",
          "analysis": "Sai: Người ta vừa khẳng định Trưởng phòng nổi giận là đương nhiên."
        }
      ],
      "answer": 0,
      "evidence": "「田中さん、部長にあんなこと言って、部長が怒るのも当たり前だよ。→ 1. つい…… これから気をつけます。」",
      "explanation": "Đáp án đúng là 1 (つい…… これから気をつけます).\n- Lời thoại: Bị nhắc nhở: 「田中さん、部長にあんなこと言って、部長が怒るのも当たり前だよ。」 (Tanaka ơi, nói thế với sếp thì sếp giận là đương nhiên rồi).\n- Nhận lỗi: 「つい…… これから気をつけます。」 (Tớ lỡ miệng... Từ giờ tớ sẽ cẩn thận hơn).",
      "scriptJp": "<p><ruby>田中<rt>たなか</rt></ruby>さん、<ruby>部長<rt>ぶちょう</rt></ruby>にあんなこと<ruby>言<rt>い</rt></ruby>って、<ruby>部長<rt>ぶちょう</rt></ruby>が<ruby>怒<rt>おこ</rt></ruby>るのも<ruby>当<rt>あ</rt></ruby>たり<ruby>前<rt>まえ</rt></ruby>だよ。<br><strong>1. つい…… これから<ruby>気<rt>き</rt></ruby>をつけます。</strong><br>2. <ruby>確<rt>たし</rt></ruby>かに<ruby>私<rt>わたし</rt></ruby>も<ruby>意外<rt>いがい</rt></ruby>でした。<br>3. <ruby>部長<rt>ぶちょう</rt></ruby>は<ruby>怒<rt>おこ</rt></ruby>ってないんですか？</p>",
      "scriptVi": "Nam: Tanaka này, cậu nói những lời như thế với Trưởng phòng thì việc Trưởng phòng nổi giận là đương nhiên thôi.\n1. Tớ lỡ lời... Từ nay về sau tớ sẽ cẩn thận hơn.\n2. Đúng thật, tôi cũng thấy bất ngờ.\n3. Trưởng phòng không nổi giận sao ạ?"
    },
    {
      "id": 101,
      "subId": "9番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai4/101.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. え？もう並べてあるの？",
          "meaning": "Hả? Đã bày sẵn ra rồi á?",
          "analysis": "Sai: Đối phương mới đang đề xuất chuẩn bị bày thức ăn ra."
        },
        {
          "option": "2. え？始まってからだと遅いよ。",
          "meaning": "Hả? Bắt đầu rồi mới làm thì muộn đấy.",
          "analysis": "Sai: Người nói cũng đang muốn bày trước."
        },
        {
          "option": "3. え？ちょっと早くない？",
          "meaning": "Hả? Bày trước 1 tiếng như thế có hơi sớm quá không?",
          "analysis": "ĐÚNG: Băn khoăn khi bạn đề nghị bày sẵn thức ăn trước bữa tiệc tận 1 tiếng đồng hồ ('ちょっと早くない？')."
        }
      ],
      "answer": 2,
      "evidence": "「あと1時間でパーティー始まるから、もう料理並べとこうか。→ 3. え？ちょっと早くない？」",
      "explanation": "Đáp án đúng là 3 (え？ちょっと早くない？).\n- Lời thoại: Đề xuất bày món: 「あと1時間でパーティー始まるから、もう料理並べとこうか。」 (Còn 1 tiếng nữa tiệc bắt đầu, bày thức ăn sẵn ra nhé?).\n- Băn khoăn: 「え？ちょっと早くない？」 (Hả? Bày trước cả tiếng như thế có hơi sớm quá không?).",
      "scriptJp": "<p>あと1<ruby>時間<rt>じかん</rt></ruby>でパーティー<ruby>始<rt>はじ</rt></ruby>まるから、もう<ruby>料理<rt>りょうり</rt></ruby><ruby>並<rt>なら</rt></ruby>べとこうか。<br>1. え？もう<ruby>並<rt>なら</rt></ruby>べてあるの？<br>2. え？<ruby>始<rt>はじ</rt></ruby>まってからだと<ruby>遅<rt>おそ</rt></ruby>いよ。<br><strong>3. え？ちょっと<ruby>早<rt>はや</rt></ruby>くない？</strong></p>",
      "scriptVi": "Nam: Còn 1 tiếng nữa là tiệc bắt đầu rồi, hay là tụi mình bày sẵn đồ ăn ra trước nhé.\n1. Hả? Đã bày sẵn ra rồi á?\n2. Hả? Đợi tiệc bắt đầu rồi mới bày thì muộn đấy.\n3. Hả? Có hơi sớm quá không?"
    }
  ]
}
,
{
  "id": "choukai-n3-nghe_phanxa-05",
  "level": "N3",
  "category": "nghe_phanxa",
  "categoryName": "Nghe phản xạ (即時応答)",
  "lessonNumber": 5,
  "title": "Bài 5: Luyện nghe phản xạ tình huống tức thì (即時応答 第5回)",
  "description": "Dạng bài nghe phản xạ nhanh câu giao tiếp ngắn tức thì (即時応答): Lắng nghe câu nói và các phương án đối đáp trong file âm thanh. Bấm chọn câu phản hồi phù hợp nhất: 1, 2 hoặc 3.",
  "questions": [
    {
      "id": 102,
      "subId": "1番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai5/102.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. そうですか。じゃあ、また今度誘いますね。",
          "meaning": "Thế à. Vậy thì để lần tới anh/chị lại rủ em nhé.",
          "analysis": "ĐÚNG: Thông cảm và hẹn rủ đối phương vào dịp khác khi nghe họ xin lỗi vì bận không đi ngắm hoa được ('また今度誘いますね')."
        },
        {
          "option": "2. え？お花見やらないことになったんですか。",
          "meaning": "Hả? Hủy bỏ không tổ chức ngắm hoa nữa à?",
          "analysis": "Sai: Chỉ có người này bận không đi được chứ buổi ngắm hoa không bị hủy."
        },
        {
          "option": "3. 金曜日行けるんですね。",
          "meaning": "Thứ Sáu em đi được nhỉ.",
          "analysis": "Sai: Người ta vừa báo bận không đi được ('行けなくなっちゃいまして')."
        }
      ],
      "answer": 0,
      "evidence": "「あの、誘ってくださった金曜日のお花見ですけど、行けなくなっちゃいまして。→ 1. そうですか。じゃあ、また今度誘いますね。」",
      "explanation": "Đáp án đúng là 1 (そうですか。じゃあ、また今度誘いますね).\n- Lời thoại: Đối phương xin lỗi: 「あの、誘ってくださった金曜日のお花見ですけど、行けなくなっちゃいまして。」 (Về buổi ngắm hoa thứ Sáu được rủ, em bận không đi được mất rồi ạ).\n- Đáp lại: 「そうですか。じゃあ、また今度誘いますね。」 (Thế à. Vậy để lần tới mình lại rủ cậu nhé).",
      "scriptJp": "<p>あの、<ruby>誘<rt>さそ</rt></ruby>ってくださった<ruby>金曜日<rt>きんようび</rt></ruby>のお<ruby>花見<rt>はなみ</rt></ruby>ですけど、<ruby>行<rt>い</rt></ruby>けなくなっちゃいまして。<br><strong>1. そうですか。じゃあ、また<ruby>今度<rt>こんど</rt></ruby><ruby>誘<rt>さそ</rt></ruby>いますね。</strong><br>2. え？お<ruby>花見<rt>はなみ</rt></ruby>やらないことになったんですか。<br>3. <ruby>金曜日<rt>きんようび</rt></ruby><ruby>行<rt>い</rt></ruby>けるんですね。</p>",
      "scriptVi": "Dạ, về buổi ngắm hoa vào thứ Sáu mà anh/chị đã rủ em ấy ạ, em lại có việc bận nên không đi được mất rồi ạ.\n1. Thế à. Vậy thì để lần tới anh/chị lại rủ em nhé.\n2. Hả? Không tổ chức ngắm hoa nữa rồi à?\n3. Thứ Sáu em đi được nhỉ."
    },
    {
      "id": 103,
      "subId": "2番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai5/103.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. ありがとう。でも、大丈夫。",
          "meaning": "Cảm ơn cậu nhé. Nhưng tớ tự lo được / ổn rồi.",
          "analysis": "ĐÚNG: Cảm ơn và từ chối khéo léo khi đồng nghiệp chủ động ngỏ lời giúp đỡ chuẩn bị công tác ('ありがとう。でも、大丈夫')."
        },
        {
          "option": "2. え？何も手伝ってくれないの？",
          "meaning": "Hả? Cậu chẳng chịu giúp tớ cái gì à?",
          "analysis": "Sai: Đồng nghiệp đang hỏi có việc gì giúp được không mà lại trách."
        },
        {
          "option": "3. 何でも頼んで。",
          "meaning": "Cậu cứ nhờ tớ bất cứ việc gì nhé.",
          "analysis": "Sai: Mình là người được hỏi giúp chứ không phải người đề nghị giúp."
        }
      ],
      "answer": 0,
      "evidence": "「岡田さん、出張の準備、何か僕にできることある？→ 1. ありがとう。でも、大丈夫。」",
      "explanation": "Đáp án đúng là 1 (ありがとう。でも、大丈夫).\n- Lời thoại: Được đề nghị giúp: 「岡田さん、出張の準備、何か僕にできることある？」 (Okada ơi, chuẩn bị công tác có việc gì tớ giúp được không?).\n- Cảm ơn và từ chối khéo: 「ありがとう。でも、大丈夫。」 (Cảm ơn cậu nhé. Nhưng mình tự làm được rồi).",
      "scriptJp": "<p><ruby>岡田<rt>おかだ</rt></ruby>さん、<ruby>出張<rt>しゅっちょう</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>、<ruby>何<rt>なに</rt></ruby>か<ruby>僕<rt>ぼく</rt></ruby>にできることある？<br><strong>1. ありがとう。でも、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>。</strong><br>2. え？<ruby>何<rt>なに</rt></ruby>も<ruby>手伝<rt>てつだ</rt></ruby>ってくれないの？<br>3. <ruby>何<rt>なん</rt></ruby>でも<ruby>頼<rt>たの</rt></ruby>んで。</p>",
      "scriptVi": "Okada ơi, việc chuẩn bị cho chuyến công tác, có việc gì tớ có thể giúp được cậu không?\n1. Cảm ơn cậu nhé. Nhưng tớ tự lo được / ổn rồi.\n2. Hả? Cậu chẳng giúp tớ cái gì à?\n3. Cậu cứ nhờ tớ bất cứ việc gì nhé."
    },
    {
      "id": 104,
      "subId": "3番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai5/104.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 食事、美味しかったです。",
          "meaning": "Bữa ăn đã rất ngon miệng ạ.",
          "analysis": "Sai: Bữa ăn chưa diễn ra."
        },
        {
          "option": "2. 課長が行けないならまた今度。",
          "meaning": "Nếu Tổ trưởng không đi được thì để lần tới vậy.",
          "analysis": "Sai: Tổ trưởng chính là người rủ mọi người đi ăn."
        },
        {
          "option": "3. いいですね。私も行きます。",
          "meaning": "Hay quá ạ. Em cũng sẽ tham gia cùng ạ.",
          "analysis": "ĐÚNG: Hào hứng tiếp nhận và đồng ý tham gia bữa ăn do Tổ trưởng mời ('いいですね。私も行きます')."
        }
      ],
      "answer": 2,
      "evidence": "「中村さん、課長がみんなで一緒に食事でもどうかって。→ 3. いいですね。私も行きます。」",
      "explanation": "Đáp án đúng là 3 (いいですね。私も行きます).\n- Lời thoại: Được rủ đi ăn: 「中村さん、課長がみんなで一緒に食事でもどうかって。」 (Nakamura này, Tổ trưởng hỏi mọi người cùng đi ăn cơm thì sao đấy).\n- Đồng ý vui vẻ: 「いいですね。私も行きます。」 (Hay quá. Em cũng sẽ đi ạ).",
      "scriptJp": "<p><ruby>中村<rt>なかむら</rt></ruby>さん、<ruby>課長<rt>かちょう</rt></ruby>がみんなで<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>食事<rt>しょくじ</rt></ruby>でもどうかって。<br>1. <ruby>食事<rt>しょくじ</rt></ruby>、<ruby>美味<rt>おい</rt></ruby>しかったです。<br>2. <ruby>課長<rt>かちょう</rt></ruby>が<ruby>行<rt>い</rt></ruby>けないならまた<ruby>今度<rt>こんど</rt></ruby>。<br><strong>3. いいですね。<ruby>私<rt>わたし</rt></ruby>も<ruby>行<rt>い</rt></ruby>きます。</strong></p>",
      "scriptVi": "Nakamura này, Tổ trưởng hỏi là mọi người cùng nhau đi ăn cơm một bữa thì sao đấy.\n1. Bữa ăn đã rất ngon miệng ạ.\n2. Nếu Tổ trưởng không đi được thì để lần tới.\n3. Hay quá ạ. Em cũng đi cùng."
    },
    {
      "id": 105,
      "subId": "4番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai5/105.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. ニュースは見ないんですか。",
          "meaning": "Anh/chị không xem thời sự ạ?",
          "analysis": "Sai: Hỏi ngược lại người hỏi."
        },
        {
          "option": "2. え？何のニュースですか。",
          "meaning": "Hả? Có tin tức thời sự gì thế ạ?",
          "analysis": "ĐÚNG: Phản hồi tò mò hỏi lại nội dung thời sự khi được hỏi đã xem tin tức sáng nay chưa ('何のニュースですか')."
        },
        {
          "option": "3. まだお目にかかってません。",
          "meaning": "Vẫn chưa được gặp mặt ạ.",
          "analysis": "Sai: 'お目にかかる' dùng cho gặp người chứ không dùng xem TV."
        }
      ],
      "answer": 1,
      "evidence": "「森さん、今朝のテレビのニュース、ご覧になりましたか。→ 2. え？何のニュースですか。」",
      "explanation": "Đáp án đúng là 2 (え？何のニュースですか).\n- Lời thoại: Được hỏi xem thời sự: 「森さん、今朝のテレビのニュース、ご覧になりましたか。」 (Anh Mori, tin tức thời sự sáng nay anh đã xem chưa ạ?).\n- Hỏi lại nội dung: 「え？何のニュースですか。」 (Hả? Có tin gì thế ạ?).",
      "scriptJp": "<p><ruby>森<rt>もり</rt></ruby>さん、<ruby>今朝<rt>けさ</rt></ruby>のテレビのニュース、ご<ruby>覧<rt>らん</rt></ruby>になりましたか。<br>1. ニュースは<ruby>見<rt>み</rt></ruby>ないんですか。<br><strong>2. え？<ruby>何<rt>なん</rt></ruby>のニュースですか。</strong><br>3. まだお<ruby>目<rt>め</rt></ruby>にかかってません。</p>",
      "scriptVi": "Anh Mori ơi, bản tin thời sự sáng nay trên truyền hình anh đã xem chưa ạ?\n1. Anh không xem tin tức thời sự ạ?\n2. Hả? Có tin tức gì thế ạ?\n3. Vẫn chưa được gặp mặt ạ."
    },
    {
      "id": 106,
      "subId": "5番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai5/106.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 何かあったのかもしれないね。",
          "meaning": "Có khi lại xảy ra chuyện gì đột xuất rồi cũng nên nhỉ.",
          "analysis": "ĐÚNG: Đưa ra phỏng đoán hợp lý giải thích vì sao một người luôn đúng giờ lại đến muộn họp ('何かあったのかもしれないね')."
        },
        {
          "option": "2. いつも遅れてくるんだ。",
          "meaning": "Lúc nào anh ấy cũng đến muộn mà.",
          "analysis": "Sai: Trái ngược với câu khẳng định không bao giờ đến muộn ('遅れてくるはずない')."
        },
        {
          "option": "3. もう来てるの？いつも早いね。",
          "meaning": "Đã đến rồi cơ à? Lúc nào cũng sớm nhỉ.",
          "analysis": "Sai: Người đó chưa đến và đang bị muộn."
        }
      ],
      "answer": 0,
      "evidence": "「あれ？小林さんが会議に遅れてくるはずないんだけどね。→ 1. 何かあったのかもしれないね。」",
      "explanation": "Đáp án đúng là 1 (何かあったのかもしれないね).\n- Lời thoại: Thắc mắc: 「あれ？小林さんが会議に遅れてくるはずないんだけどね。」 (Lạ nhỉ, Kobayashi bình thường đâu có bao giờ đi họp muộn đâu).\n- Phỏng đoán: 「何かあったのかもしれないね。」 (Chắc là đã có sự cố gì rồi cũng nên nhỉ).",
      "scriptJp": "<p>あれ？<ruby>小林<rt>こばやし</rt></ruby>さんが<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>遅<rt>おく</rt></ruby>れてくるはずないんだけどね。<br><strong>1. <ruby>何<rt>なに</rt></ruby>かあったのかもしれないね。</strong><br>2. いつも<ruby>遅<rt>おく</rt></ruby>れてくるんだ。<br>3. もう<ruby>来<rt>き</rt></ruby>てるの？いつも<ruby>早<rt>はや</rt></ruby>いね。</p>",
      "scriptVi": "Ủa lạ nhỉ? Anh Kobayashi bình thường đâu có bao giờ đi họp muộn như thế này đâu.\n1. Có khi lại xảy ra chuyện gì đột xuất rồi cũng nên nhỉ.\n2. Lúc nào anh ấy cũng đến muộn mà.\n3. Đã đến rồi cơ à? Lúc nào cũng sớm nhỉ."
    },
    {
      "id": 107,
      "subId": "6番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai5/107.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 是非拝見させてください。",
          "meaning": "Xin nhất định hãy cho tôi xem với ạ.",
          "analysis": "Sai: Dùng khi mình muốn xem tài liệu của người khác."
        },
        {
          "option": "2. では、いただいておきます。",
          "meaning": "Vậy thì tôi xin phép nhận lấy ạ.",
          "analysis": "Sai: Đây là câu của người nhận quà/đồ."
        },
        {
          "option": "3. どうぞお持ちください。",
          "meaning": "Dạ xin mời quý khách cứ tự nhiên lấy mang về ạ.",
          "analysis": "ĐÚNG: Nhân viên lịch sự cho phép và mời khách lấy tờ rơi ('どうぞお持ちください')."
        }
      ],
      "answer": 2,
      "evidence": "「すみません、このパンフレット、いただいてもよろしいでしょうか。→ 3. どうぞお持ちください。」",
      "explanation": "Đáp án đúng là 3 (どうぞお持ちください).\n- Lời thoại: Khách xin tờ rơi: 「すみません、このパンフレット、いただいてもよろしいでしょうか。」 (Xin lỗi, tôi có thể xin tờ rơi này được không ạ?).\n- Nhân viên mời: 「どうぞお持ちください。」 (Dạ vâng xin mời quý khách cứ tự nhiên lấy ạ).",
      "scriptJp": "<p>すみません、このパンフレット、いただいてもよろしいでしょうか。<br>1. <ruby>是非<rt>ぜひ</rt></ruby><ruby>拝見<rt>はいけん</rt></ruby>させてください。<br>2. では、いただいておきます。<br><strong>3. どうぞお<ruby>持<rt>も</rt></ruby>ちください。</strong></p>",
      "scriptVi": "Xin lỗi, tôi có thể xin lấy tờ rơi này được không ạ?\n1. Xin nhất định hãy cho tôi xem với ạ.\n2. Vậy thì tôi xin phép nhận lấy ạ.\n3. Dạ xin mời quý khách cứ tự nhiên lấy ạ."
    },
    {
      "id": 108,
      "subId": "7番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai5/108.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. みんな来たいんだね。",
          "meaning": "Mọi người đều muốn đến nhỉ.",
          "analysis": "Sai: Trái ngược với tình trạng không ai đăng ký tham gia ('ちっとも人が集まらなくて')."
        },
        {
          "option": "2. たくさん集まってよかったよ。",
          "meaning": "Tập hợp được nhiều người thì tốt quá.",
          "analysis": "Sai: Không có người tham gia."
        },
        {
          "option": "3. それは困ったね。",
          "meaning": "Chuyện đó phiền toái / khó xử thật nhỉ.",
          "analysis": "ĐÚNG: Đồng cảm với khó khăn của hậu bối khi tiệc tuần sau không có ai đăng ký tham dự ('それは困ったね')."
        }
      ],
      "answer": 2,
      "evidence": "「先輩、来週のパーティー、ちっとも人が集まらなくて。→ 3. それは困ったね。」",
      "explanation": "Đáp án đúng là 3 (それは困ったね).\n- Lời thoại: Than thở: 「先輩、来週のパーティー、ちっとも人が集まらなくて。」 (Tiền bối ơi, tiệc tuần sau chẳng có ai đăng ký tham gia cả).\n- Đồng cảm chia sẻ: 「それは困ったね。」 (Thế thì gay go / khó xử thật nhỉ).",
      "scriptJp": "<p><ruby>先輩<rt>せんぱい</rt></ruby>、<ruby>来週<rt>らいしゅう</rt></ruby>のパーティー、ちっとも<ruby>人<rt>ひと</rt></ruby>が<ruby>集<rt>あつ</rt></ruby>まらなくて。<br>1. みんな<ruby>来<rt>き</rt></ruby>たいんだね。<br>2. たくさん<ruby>集<rt>あつ</rt></ruby>まってよかったよ。<br><strong>3. それは<ruby>困<rt>こま</rt></ruby>ったね。</strong></p>",
      "scriptVi": "Tiền bối ơi, bữa tiệc tuần sau chẳng có mấy ai đăng ký tham gia cả, em rầu quá.\n1. Mọi người đều muốn đến nhỉ.\n2. Tập hợp được đông đủ thì tốt quá rồi.\n3. Chuyện đó khó xử thật nhỉ."
    },
    {
      "id": 109,
      "subId": "8番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai5/109.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. 吉田さんって親切じゃないの？",
          "meaning": "Anh Yoshida không tốt bụng à?",
          "analysis": "Sai: Câu gốc đang khen anh Yoshida tốt bụng số 1."
        },
        {
          "option": "2. あんな人なかなかいないと思う。",
          "meaning": "Tớ nghĩ là người tốt như anh ấy hiếm gặp lắm.",
          "analysis": "ĐÚNG: Đồng tình với nhận định rằng Yoshida cực kỳ tốt bụng, hiếm ai bằng ('あんな人なかなかいないと思う')."
        },
        {
          "option": "3. 親切な人がすごく多いってこと？",
          "meaning": "Có nghĩa là người tốt bụng nhiều lắm à?",
          "analysis": "Sai: Hiểu sai ý nghĩa so sánh bậc nhất của '〜ほど…ない'."
        }
      ],
      "answer": 1,
      "evidence": "「吉田さんほど親切な人っていないよね。→ 2. あんな人なかなかいないと思う。」",
      "explanation": "Đáp án đúng là 2 (あんな人なかなかいないと思う).\n- Lời thoại: Khen ngợi: 「吉田さんほど親切な人っていないよね。」 (Hiếm có ai tốt bụng như anh Yoshida nhỉ).\n- Đồng tình: 「あんな人なかなかいないと思う。」 (Tớ cũng nghĩ người tuyệt vời như anh ấy hiếm gặp lắm).",
      "scriptJp": "<p><ruby>吉田<rt>よしだ</rt></ruby>さんほど<ruby>親切<rt>しんせつ</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>っていないよね。<br>1. <ruby>吉田<rt>よしだ</rt></ruby>さんって<ruby>親切<rt>しんせつ</rt></ruby>じゃないの？<br><strong>2. あんな<ruby>人<rt>ひと</rt></ruby>なかなかいないと<ruby>思<rt>おも</rt></ruby>う。</strong><br>3. <ruby>親切<rt>しんせつ</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>がすごく<ruby>多<rt>おお</rt></ruby>いってこと？</p>",
      "scriptVi": "Hiếm có ai tốt bụng và chu đáo như anh Yoshida nhỉ.\n1. Anh Yoshida không tốt bụng à?\n2. Tớ nghĩ là người tốt như anh ấy hiếm gặp lắm.\n3. Có nghĩa là người tốt bụng nhiều lắm à?"
    },
    {
      "id": 110,
      "subId": "9番",
      "audioSrc": "assets/audio/choukai/n3/nghe_phanxa/bai5/110.mp3",
      "question": "",
      "questionVi": "",
      "options": [
        "1",
        "2",
        "3"
      ],
      "optionsAnalysis": [
        {
          "option": "1. あ、少し前につけました。",
          "meaning": "A, em đã bật từ lúc nãy một lát rồi ạ.",
          "analysis": "ĐÚNG: Báo cáo với cấp trên là mình đã chu đáo đi bật máy sưởi phòng họp trước rồi ('あ、少し前につけました')."
        },
        {
          "option": "2. すぐ消します。すみません。",
          "meaning": "Em sẽ tắt ngay ạ. Xin lỗi anh/chị.",
          "analysis": "Sai: Cấp trên bảo bật máy sưởi chứ không bảo tắt."
        },
        {
          "option": "3. まだついていましたか。",
          "meaning": "Vẫn đang bật từ nãy giờ ạ?",
          "analysis": "Sai: Cấp trên đang chỉ thị đi bật."
        }
      ],
      "answer": 0,
      "evidence": "「池田さん、もうすぐお客様来るから、先に会議室の暖房、つけといて。→ 1. あ、少し前につけました。」",
      "explanation": "Đáp án đúng là 1 (あ、少し前につけました).\n- Lời thoại: Chỉ thị bật sưởi: 「池田さん、もうすぐお客様来るから、先に会議室の暖房、つけといて。」 (Ikeda ơi, khách sắp đến, đi bật sưởi phòng họp trước đi nhé).\n- Báo cáo đã làm xong: 「あ、少し前につけました。」 (A, em đã bật trước lúc nãy rồi ạ).",
      "scriptJp": "<p><ruby>池田<rt>いけだ</rt></ruby>さん、もうすぐお<ruby>客様<rt>きゃくさま</rt></ruby><ruby>来<rt>く</rt></ruby>るから、<ruby>先<rt>さき</rt></ruby>に<ruby>会議室<rt>かいぎしつ</rt></ruby>の<ruby>暖房<rt>だんぼう</rt></ruby>、つけといて。<br><strong>1. あ、<ruby>少<rt>すこ</rt></ruby>し<ruby>前<rt>まえ</rt></ruby>につけました。</strong><br>2. すぐ<ruby>消<rt>け</rt></ruby>します。すみません。<br>3. まだついていましたか。</p>",
      "scriptVi": "Ikeda này, lát nữa khách sắp đến rồi, em đi bật máy sưởi trong phòng họp trước đi nhé.\n1. A, em đã bật từ lúc nãy một lát rồi ạ.\n2. Em sẽ tắt ngay ạ. Xin lỗi anh.\n3. Vẫn đang bật từ nãy giờ ạ?"
    }
  ]
}

        ]
    }
};

// ==========================================================================
// CONTROLLER & RENDER ENGINE
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initChoukai();
    }, 150);
});

function initChoukai() {
    let currentLevel = 'N3';
    let currentSkill = 'nghe_traloi';
    let currentLessonIndex = 0;
    let currentFilter = 'all'; // 'all', 'done', 'undone'
    
    // Audio tracking per question
    const activeAudios = {};

    // Load completed lessons from localStorage
    const getCompletedList = () => {
        try {
            const raw = localStorage.getItem(CHOUKAI_STORAGE_DONE_KEY);
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
            localStorage.setItem(CHOUKAI_STORAGE_DONE_KEY, JSON.stringify(list));
        } catch (e) {}
        renderLessonTabs();
        renderChoukaiLesson();
    };

    // DOM Elements
    const levelTabs = document.querySelectorAll('#choukai-level-tabs .level-tab');
    const skillTabs = document.querySelectorAll('#choukai-type-tabs .level-tab');
    const lessonTabsContainer = document.getElementById('choukai-lesson-tabs');
    const choukaiContentArea = document.getElementById('choukai-content-area');

    if (!choukaiContentArea) return;

    // Helper: Stop all playing audios
    function stopAllAudios() {
        Object.keys(activeAudios).forEach(k => {
            if (activeAudios[k]) {
                activeAudios[k].pause();
                activeAudios[k].currentTime = 0;
            }
        });
    }

    // ── Get Sorted Lessons ─────────────────────────────────────────────────
    function getSortedLessons() {
        const levelData = choukaiDataset[currentLevel] || {};
        const rawLessons = levelData[currentSkill] || [];
        return rawLessons.slice().sort((a, b) => {
            const numA = parseInt(a.lessonNumber || (a.id ? a.id.replace(/\D+/g, '') : 0)) || 0;
            const numB = parseInt(b.lessonNumber || (b.id ? b.id.replace(/\D+/g, '') : 0)) || 0;
            return numA - numB;
        });
    }

    // ── Sync Active Tab Styles ─────────────────────────────────────────────
    function syncTabsUI() {
        levelTabs.forEach(t => {
            if (t.dataset.level === currentLevel) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });

        skillTabs.forEach(t => {
            if (t.dataset.type === currentSkill) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });
    }

    // ── Render Lesson Tabs & Filter Bar ────────────────────────────────────
    function renderLessonTabs() {
        if (!lessonTabsContainer) return;
        const lessons = getSortedLessons();
        lessonTabsContainer.innerHTML = '';

        if (lessons.length === 0) {
            lessonTabsContainer.innerHTML = `<span style="color:#888; padding: 0.4rem 1rem; font-size: 0.95rem;"><i class="fa-solid fa-hourglass-half"></i> Dữ liệu bài nghe đang được ban biên tập cập nhật...</span>`;
            return;
        }

        const filterWrapper = document.createElement('div');
        filterWrapper.className = 'dokkai-filter-bar-wrapper';

        const completedList = getCompletedList();
        const totalCount = lessons.length;
        const doneCount = lessons.filter(l => completedList.includes(l.id)).length;
        const pct = Math.round((doneCount / totalCount) * 100) || 0;

        filterWrapper.innerHTML = `
            <div class="dokkai-filter-left">
                <div class="dokkai-progress-pill" title="Tiến độ bài nghe đã hoàn thành">
                    <i class="fa-solid fa-headphones text-neon-cyan"></i>
                    <span>Đã nghe: <strong>${doneCount}/${totalCount}</strong> (${pct}%)</span>
                </div>
                <div class="dokkai-status-filters">
                    <button class="dokkai-filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">Tất cả (${totalCount})</button>
                    <button class="dokkai-filter-btn ${currentFilter === 'undone' ? 'active' : ''}" data-filter="undone">Chưa làm (${totalCount - doneCount})</button>
                    <button class="dokkai-filter-btn ${currentFilter === 'done' ? 'active' : ''}" data-filter="done">Đã làm (${doneCount})</button>
                </div>
            </div>
            <div class="dokkai-lesson-pills" id="choukai-pills-list"></div>
        `;

        const pillsList = filterWrapper.querySelector('#choukai-pills-list');

        lessons.forEach((lesson, index) => {
            const isDone = completedList.includes(lesson.id);

            if (currentFilter === 'done' && !isDone) return;
            if (currentFilter === 'undone' && isDone) return;

            const pill = document.createElement('button');
            pill.className = `dokkai-lesson-pill ${index === currentLessonIndex ? 'active' : ''} ${isDone ? 'is-done' : ''}`;
            pill.innerHTML = `
                <span class="pill-check-icon"><i class="fa-solid ${isDone ? 'fa-check' : 'fa-headphones'}"></i></span>
                <span class="pill-num">Bài ${lesson.lessonNumber || (index + 1)}</span>
                <span class="pill-status-dot"></span>
            `;
            pill.title = `${lesson.title} - ${isDone ? 'Đã làm' : 'Chưa làm'}`;

            pill.addEventListener('click', () => {
                stopAllAudios();
                currentLessonIndex = index;
                renderLessonTabs();
                renderChoukaiLesson();
            });

            pillsList.appendChild(pill);
        });

        filterWrapper.querySelectorAll('.dokkai-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentFilter = btn.dataset.filter;
                renderLessonTabs();
            });
        });

        lessonTabsContainer.appendChild(filterWrapper);
    }

    // ── Render Current Choukai Lesson ──────────────────────────────────────
    function renderChoukaiLesson() {
        stopAllAudios();
        const lessons = getSortedLessons();
        const lesson = lessons[currentLessonIndex];

        if (!lesson) {
            choukaiContentArea.innerHTML = `
                <div class="dokkai-empty-state" style="padding: 3rem; text-align: center; color: #888;">
                    <i class="fa-solid fa-headphones-simple" style="font-size: 3rem; margin-bottom: 1rem; color: var(--neon-cyan);"></i>
                    <h3>Chưa có dữ liệu bài nghe</h3>
                    <p>Các bài luyện nghe cho dạng này đang được ban biên tập cập nhật.</p>
                </div>
            `;
            return;
        }

        const isDone = isLessonDone(lesson.id);

        choukaiContentArea.innerHTML = `
            <div class="choukai-lesson-header glass-panel mb-2">
                <div class="dokkai-title-row">
                    <div class="dokkai-title-text">
                        <span class="dokkai-badge-skill"><i class="fa-solid fa-headphones"></i> ${getChoukaiSkillName(currentSkill)}</span>
                        <span>${lesson.title}</span>
                    </div>
                    <div class="dokkai-header-actions">
                        <button class="dokkai-done-toggle-btn ${isDone ? 'is-done' : ''}" id="btn-toggle-choukai-done">
                            <i class="fa-solid ${isDone ? 'fa-square-check' : 'fa-square'}"></i>
                            <span>${isDone ? 'Đã hoàn thành' : 'Đánh dấu đã nghe'}</span>
                        </button>
                    </div>
                </div>
                ${lesson.description ? `<p class="choukai-desc-text"><i class="fa-solid fa-circle-info text-neon-cyan"></i> ${lesson.description}</p>` : ''}
            </div>

            <!-- Questions Grid/List -->
            <div class="choukai-questions-wrapper" id="choukai-questions-wrapper">
                <!-- Injected via JS -->
            </div>
        `;

        const toggleDoneBtn = document.getElementById('btn-toggle-choukai-done');
        if (toggleDoneBtn) {
            toggleDoneBtn.onclick = () => toggleLessonDone(lesson.id);
        }

        renderChoukaiQuestions(lesson);
    }

    // ── Render Questions with Audio Players, Images & 4-Step Feedback ──────
    function renderChoukaiQuestions(lesson) {
        const wrapper = document.getElementById('choukai-questions-wrapper');
        if (!wrapper) return;
        wrapper.innerHTML = '';

        if (!lesson.questions || lesson.questions.length === 0) {
            wrapper.innerHTML = `<p style="color:#888; text-align:center; padding: 2rem;">Chưa có câu hỏi cho bài nghe này.</p>`;
            return;
        }

        lesson.questions.forEach((q, qIndex) => {
            const card = document.createElement('div');
            card.className = 'choukai-qcard glass-panel mb-2';
            card.id = `choukai-qcard-${q.id || (qIndex + 1)}`;

            const isImageQuestion = !!q.imageSrc || (q.options && q.options.every(o => /^\d+$/.test(String(o).trim())));

            let optionsHtml = '';
            q.options.forEach((opt, optIndex) => {
                if (isImageQuestion) {
                    optionsHtml += `
                        <button type="button" class="choukai-opt-btn opt-btn-image-choice" data-opt-idx="${optIndex}">
                            <span class="opt-num">${optIndex + 1}</span>
                        </button>
                    `;
                } else {
                    optionsHtml += `
                        <button type="button" class="choukai-opt-btn" data-opt-idx="${optIndex}">
                            <span class="opt-num">${optIndex + 1}</span>
                            <span class="opt-text">${opt}</span>
                        </button>
                    `;
                }
            });

            // 1. Ý nghĩa & Phân tích 4 đáp án (optionsAnalysis)
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
            }

            card.innerHTML = `
                <div class="choukai-qcard-header">
                    <div class="q-badge-row">
                        <span class="choukai-sub-badge">${q.subId || `Câu ${qIndex + 1}`}</span>
                        <span class="choukai-q-hint"><i class="fa-solid fa-headphones"></i> Bấm Play để nghe câu hỏi & lời thoại</span>
                    </div>
                    
                    <!-- AUDIO PLAYER BAR -->
                    <div class="choukai-player-bar" id="player-bar-${q.id}">
                        <button class="btn-play-audio" id="btn-play-${q.id}" title="Nghe / Dừng">
                            <i class="fa-solid fa-play"></i>
                        </button>
                        <button class="btn-audio-rewind" id="btn-rewind-${q.id}" title="Tua lại 5 giây">
                            <i class="fa-solid fa-rotate-left"></i> 5s
                        </button>
                        
                        <div class="audio-track-wrapper">
                            <input type="range" class="audio-seek-slider" id="seek-${q.id}" value="0" min="0" max="100" step="0.1">
                            <div class="audio-time-row">
                                <span class="time-current" id="time-cur-${q.id}">00:00</span>
                                <span class="time-duration" id="time-dur-${q.id}">--:--</span>
                            </div>
                        </div>

                        <div class="audio-speed-group">
                            <button class="speed-pill active" data-speed="1.0">1.0x</button>
                            <button class="speed-pill" data-speed="1.25">1.25x</button>
                            <button class="speed-pill" data-speed="0.75">0.75x</button>
                        </div>
                    </div>

                    <div class="choukai-q-text mt-2">${q.question}</div>
                    ${q.questionVi ? `<div class="choukai-q-subtext text-secondary">${q.questionVi}</div>` : ''}

                    <!-- IMAGE PREVIEW (IF ANY) -->
                    ${q.imageSrc ? `
                    <div class="choukai-q-image-box">
                        <img src="${q.imageSrc}" alt="Hình minh họa câu hỏi ${q.subId || ''}" class="choukai-q-image" />
                    </div>
                    ` : ''}
                </div>

                <!-- 4 Options -->
                <div class="choukai-options-list ${isImageQuestion ? 'image-options-grid' : ''}">
                    ${optionsHtml}
                </div>

                <!-- Action Toolbar: Script Drawer Toggle -->
                <div class="choukai-actions-bar">
                    <button class="btn-primary btn-outline btn-small btn-toggle-script" id="btn-script-${q.id}">
                        <i class="fa-solid fa-file-audio"></i> <span class="script-btn-label">Hiện Lời Thoại (Script) & Dịch Nghĩa</span>
                    </button>
                </div>

                <!-- Script & Translation Drawer (Hidden by default) -->
                <div class="choukai-script-drawer" id="script-drawer-${q.id}" style="display: none;">
                    <div class="script-box-inner">
                        <div class="script-section">
                            <div class="script-title"><i class="fa-solid fa-volume-high text-neon-cyan"></i> Lời thoại gốc (Script tiếng Nhật):</div>
                            <div class="script-jp-body">${q.scriptJp || '<p>Đang cập nhật lời thoại...</p>'}</div>
                        </div>
                        <div class="script-section mt-2">
                            <div class="script-title"><i class="fa-solid fa-language text-neon-yellow"></i> Dịch nghĩa lời thoại tiếng Việt:</div>
                            <div class="script-vi-body">${(q.scriptVi || 'Đang cập nhật bản dịch...').replace(/\n/g, '<br>')}</div>
                        </div>
                    </div>
                </div>

                <!-- 4-Step Standard Feedback Area -->
                <div class="dokkai-q-feedback choukai-feedback" style="display:none;" id="feedback-${q.id}">
                    <!-- 1. Giải thích nghĩa của cả 4 đáp án -->
                    ${optionsAnalysisHtml}

                    <!-- 2. Đáp án đúng & Trạng thái lựa chọn -->
                    <div class="feedback-status-box">
                        <div class="f-section-title"><i class="fa-solid fa-bullseye text-neon-cyan"></i> 2. Kết quả & Đáp án chính xác:</div>
                        <div class="feedback-status"></div>
                        <div class="feedback-correct-answer">
                            Đáp án đúng: <strong class="text-neon-cyan">[ ${isImageQuestion ? `Hình ${q.answer + 1}` : `${q.answer + 1}. ${q.options[q.answer]}`} ]</strong>
                        </div>
                    </div>

                    <!-- 3. Dẫn chứng trong bài nghe -->
                    <div class="feedback-evidence-box">
                        <div class="f-section-title"><i class="fa-solid fa-quote-left text-neon-yellow"></i> 3. Dẫn chứng trong bài nghe:</div>
                        <div class="evidence-text">${q.evidence || 'Xem lại lời thoại trong phần Script.'}</div>
                    </div>

                    <!-- 4. Phân tích giải thích chi tiết -->
                    <div class="feedback-explanation-box">
                        <div class="f-section-title"><i class="fa-solid fa-circle-info text-neon-purple"></i> 4. Phân tích giải thích chi tiết:</div>
                        <div class="explanation-text">${(q.explanation || 'Chưa có giải thích chi tiết.').replace(/\n/g, '<br>')}</div>
                    </div>
                </div>
            `;

            // ── BIND AUDIO PLAYER EVENTS ────────────────────────────────────
            const audio = new Audio(q.audioSrc);
            activeAudios[q.id] = audio;

            const playBtn = card.querySelector(`#btn-play-${q.id}`);
            const rewindBtn = card.querySelector(`#btn-rewind-${q.id}`);
            const seekSlider = card.querySelector(`#seek-${q.id}`);
            const curTimeEl = card.querySelector(`#time-cur-${q.id}`);
            const durTimeEl = card.querySelector(`#time-dur-${q.id}`);
            const speedPills = card.querySelectorAll(`.speed-pill`);

            const formatTime = (secs) => {
                if (isNaN(secs)) return '00:00';
                const m = Math.floor(secs / 60).toString().padStart(2, '0');
                const s = Math.floor(secs % 60).toString().padStart(2, '0');
                return `${m}:${s}`;
            };

            audio.addEventListener('loadedmetadata', () => {
                durTimeEl.textContent = formatTime(audio.duration);
            });

            audio.addEventListener('timeupdate', () => {
                if (!isNaN(audio.duration) && audio.duration > 0) {
                    seekSlider.value = (audio.currentTime / audio.duration) * 100;
                    curTimeEl.textContent = formatTime(audio.currentTime);
                }
            });

            audio.addEventListener('ended', () => {
                playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                playBtn.classList.remove('is-playing');
            });

            playBtn.addEventListener('click', () => {
                if (audio.paused) {
                    // Pause other audios
                    Object.keys(activeAudios).forEach(otherId => {
                        if (otherId !== `${q.id}` && activeAudios[otherId] && !activeAudios[otherId].paused) {
                            activeAudios[otherId].pause();
                            const otherBtn = document.querySelector(`#btn-play-${otherId}`);
                            if (otherBtn) {
                                otherBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                                otherBtn.classList.remove('is-playing');
                            }
                        }
                    });

                    audio.play();
                    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                    playBtn.classList.add('is-playing');
                } else {
                    audio.pause();
                    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                    playBtn.classList.remove('is-playing');
                }
            });

            rewindBtn.addEventListener('click', () => {
                audio.currentTime = Math.max(0, audio.currentTime - 5);
            });

            seekSlider.addEventListener('input', () => {
                if (!isNaN(audio.duration)) {
                    audio.currentTime = (seekSlider.value / 100) * audio.duration;
                }
            });

            speedPills.forEach(pill => {
                pill.addEventListener('click', () => {
                    speedPills.forEach(p => p.classList.remove('active'));
                    pill.classList.add('active');
                    const speed = parseFloat(pill.dataset.speed) || 1.0;
                    audio.playbackRate = speed;
                });
            });

            // ── BIND SCRIPT TOGGLE ──────────────────────────────────────────
            const scriptBtn = card.querySelector(`#btn-script-${q.id}`);
            const scriptDrawer = card.querySelector(`#script-drawer-${q.id}`);
            const scriptBtnLabel = scriptBtn.querySelector('.script-btn-label');

            scriptBtn.addEventListener('click', () => {
                const isHidden = scriptDrawer.style.display === 'none';
                scriptDrawer.style.display = isHidden ? 'block' : 'none';
                scriptBtnLabel.textContent = isHidden ? 'Ẩn Lời Thoại (Script)' : 'Hiện Lời Thoại (Script) & Dịch Nghĩa';
                scriptBtn.classList.toggle('active', isHidden);
            });

            // ── BIND OPTION BUTTON CLICK ────────────────────────────────────
            const optBtns = card.querySelectorAll('.choukai-opt-btn');
            const feedbackBox = card.querySelector(`#feedback-${q.id}`);
            const statusEl = feedbackBox.querySelector('.feedback-status');

            optBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const chosenIdx = parseInt(btn.dataset.optIdx);
                    const isCorrect = (chosenIdx === q.answer);

                    optBtns.forEach(b => b.classList.remove('selected', 'is-correct', 'is-wrong'));
                    btn.classList.add('selected');

                    if (isCorrect) {
                        btn.classList.add('is-correct');
                        statusEl.innerHTML = `<span class="feedback-alert alert-correct"><i class="fa-solid fa-circle-check"></i> CHÍNH XÁC! Bạn đã chọn đúng đáp án [ ${isImageQuestion ? `Hình ${chosenIdx + 1}` : chosenIdx + 1} ].</span>`;
                    } else {
                        btn.classList.add('is-wrong');
                        statusEl.innerHTML = `<span class="feedback-alert alert-wrong"><i class="fa-solid fa-circle-xmark"></i> CHƯA CHÍNH XÁC. Bạn đã chọn [ ${isImageQuestion ? `Hình ${chosenIdx + 1}` : chosenIdx + 1} ].</span>`;
                        if (optBtns[q.answer]) optBtns[q.answer].classList.add('is-correct');
                    }

                    feedbackBox.style.display = 'block';
                });
            });

            wrapper.appendChild(card);
        });
    }

    function getChoukaiSkillName(key) {
        const map = {
            'nghe_traloi': 'Nghe trả lời (課題理解)',
            'nghe_chude': 'Nghe chủ đề (ポイント理解)',
            'nghe_hoi': 'Nghe hỏi (概要理解)',
            'nghe_phanxa': 'Nghe phản xạ (即時応答)'
        };
        return map[key] || 'Nghe hiểu';
    }

    // ── Level & Skill Event Listeners ──────────────────────────────────────
    levelTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            levelTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentLevel = tab.dataset.level || 'N3';
            currentLessonIndex = 0;
            syncTabsUI();
            renderLessonTabs();
            renderChoukaiLesson();
        });
    });

    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            skillTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentSkill = tab.dataset.type || 'nghe_traloi';
            currentLessonIndex = 0;
            syncTabsUI();
            renderLessonTabs();
            renderChoukaiLesson();
        });
    });

    // Initial render
    syncTabsUI();
    renderLessonTabs();
    renderChoukaiLesson();
}