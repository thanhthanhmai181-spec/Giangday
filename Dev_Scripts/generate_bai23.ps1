param()

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$comparisonHtml = @"
<table class='grammar-comparison-table' style='width:100%;border-collapse:collapse;margin-bottom:1.5rem;background:#fdfaf6;color:#111;border-radius:8px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,0.2);border:2px solid #222;'><thead><tr><th colspan='3' style='border:1px solid #333;padding:1.2rem;font-size:1.4rem;font-weight:800;color:#ff4d4f;text-align:center;font-family:"Noto Sans JP",sans-serif;'>Bảng Phân Biệt Các Phó Từ Đi Kèm Phủ Định & Mẫu Liệt Kê (Bài 23)</th></tr><tr style='background:#f0eae1;font-weight:bold;'><td style='border:1px solid #333;padding:0.8rem;text-align:center;width:26%;color:#b30000;'>Cấu trúc</td><td style='border:1px solid #333;padding:0.8rem;text-align:center;width:34%;color:#b30000;'>Bản chất & Sắc thái phủ định</td><td style='border:1px solid #333;padding:0.8rem;text-align:center;color:#b30000;'>Ý nghĩa & Ví dụ tiêu biểu</td></tr></thead><tbody><tr><td style='border:1px solid #333;padding:0.8rem;font-family:"Noto Sans JP",sans-serif;font-weight:800;color:#d97706;text-align:center;'>〜も〜ば〜も<br>〜も〜たら〜も</td><td style='border:1px solid #333;padding:0.8rem;text-align:center;font-weight:600;'><b>Liệt kê song hành:</b> Cùng tồn tại cả mặt A lẫn mặt B (vừa tốt vừa xấu, có cái này có cả cái kia)</td><td style='border:1px solid #333;padding:0.8rem 1rem;'><b>Có A, cũng có cả B...</b><br><em>VD: 良い人もいれば、悪い人もいる。<br>VD: 漫画もあれば、小説もある。</em></td></tr><tr><td style='border:1px solid #333;padding:0.8rem;font-family:"Noto Sans JP",sans-serif;font-weight:800;color:#2563eb;text-align:center;'>まったく...ない</td><td style='border:1px solid #333;padding:0.8rem;text-align:center;font-weight:600;'><b>Phủ định triệt để (100%):</b> Hoàn toàn không có chút hiểu biết, năng lực hay sự quan tâm nào</td><td style='border:1px solid #333;padding:0.8rem 1rem;'><b>Hoàn toàn... không</b><br><em>VD: あの説明は全くわからない。<br>VD: スポーツに全く興味がない。</em></td></tr><tr><td style='border:1px solid #333;padding:0.8rem;font-family:"Noto Sans JP",sans-serif;font-weight:800;color:#059669;text-align:center;'>すこしも...ない</td><td style='border:1px solid #333;padding:0.8rem;text-align:center;font-weight:600;'><b>Phủ định số lượng/mức độ:</b> Dù chỉ một chút xíu (chút mệt, chút hiểu) cũng không hề có</td><td style='border:1px solid #333;padding:0.8rem 1rem;'><b>Một chút cũng... không</b><br><em>VD: 運動しても少しも疲れない。<br>VD: その話は少しもわからない。</em></td></tr><tr><td style='border:1px solid #333;padding:0.8rem;font-family:"Noto Sans JP",sans-serif;font-weight:800;color:#7c3aed;text-align:center;'>そんなに...ない</td><td style='border:1px solid #333;padding:0.8rem;text-align:center;font-weight:600;'><b>Giảm nhẹ mức độ so với kỳ vọng:</b> Không nhiều / không khó / không đắt đến mức như đã nghĩ</td><td style='border:1px solid #333;padding:0.8rem 1rem;'><b>Không... đến mức như thế</b><br><em>VD: このテストはそんなに難しくない。<br>VD: 価格はそんなに高くない。</em></td></tr><tr><td style='border:1px solid #333;padding:0.8rem;font-family:"Noto Sans JP",sans-serif;font-weight:800;color:#dc2626;text-align:center;'>けっして...ない</td><td style='border:1px solid #333;padding:0.8rem;text-align:center;font-weight:600;'><b>Ý chí / Cam kết tuyệt đối:</b> Quyết tâm cao độ hoặc lời hứa son sắt không bao giờ vi phạm</td><td style='border:1px solid #333;padding:0.8rem 1rem;'><b>Quyết không / Tuyệt đối không...</b><br><em>VD: 彼は決して諦めない。<br>VD: その日を決して忘れない。</em></td></tr><tr><td style='border:1px solid #333;padding:0.8rem;font-family:"Noto Sans JP",sans-serif;font-weight:800;color:#b45309;text-align:center;'>めったに...ない</td><td style='border:1px solid #333;padding:0.8rem;text-align:center;font-weight:600;'><b>Tần suất cực thấp:</b> Rất hiếm khi xảy ra hành động (hầu như không gặp, không dùng)</td><td style='border:1px solid #333;padding:0.8rem 1rem;'><b>Hiếm khi / Hầu như không...</b><br><em>VD: 彼とはめったに会わない。<br>VD: この部屋はめったに使わない。</em></td></tr></tbody></table><div style='background:#fdfaf6;border:2px solid #222;border-radius:12px;padding:1.5rem;margin-top:2rem;box-shadow:0 6px 20px rgba(0,0,0,0.15);color:#111;'><div style='text-align:center;margin-bottom:1.5rem;border-bottom:3px solid #ff4d4f;padding-bottom:0.8rem;'><h3 style='margin:0;font-size:1.6rem;color:#b30000;font-family:"Noto Sans JP",sans-serif;'>🎌 BẢNG TỔNG HỢP SẮC THÁI CÁC PHÓ TỪ ĐI KÈM PHỦ ĐỊNH 🎌</h3><span style='font-size:1rem;color:#555;font-weight:600;display:block;margin-top:0.3rem;'>So sánh mức độ & ngữ cảnh sử dụng giữa: まったく, 少しも, そんなに, 決して, めったに</span></div><div style='display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;'><div style='border:2px solid #2563eb;border-radius:10px;overflow:hidden;background:#fff;'><div style='background:#dbeafe;color:#1e40af;font-weight:800;font-size:1.1rem;padding:0.6rem;text-align:center;border-bottom:2px solid #2563eb;'>まったく...ない</div><div style='padding:0.8rem;background:#eff6ff;text-align:center;'><b style='color:#2563eb;'>Phủ định triệt để (100%)</b><br><span style='font-size:0.85rem;color:#64748b;'>Hoàn toàn không biết, không có hứng thú</span></div></div><div style='border:2px solid #059669;border-radius:10px;overflow:hidden;background:#fff;'><div style='background:#d1fae5;color:#065f46;font-weight:800;font-size:1.1rem;padding:0.6rem;text-align:center;border-bottom:2px solid #059669;'>すこしも...ない</div><div style='padding:0.8rem;background:#ecfdf5;text-align:center;'><b style='color:#059669;'>Mức độ tối thiểu là 0</b><br><span style='font-size:0.85rem;color:#64748b;'>Một chút mệt mỏi cũng không có</span></div></div><div style='border:2px solid #7c3aed;border-radius:10px;overflow:hidden;background:#fff;'><div style='background:#ede9fe;color:#5b21b6;font-weight:800;font-size:1.1rem;padding:0.6rem;text-align:center;border-bottom:2px solid #7c3aed;'>そんなに...ない</div><div style='padding:0.8rem;background:#f5f3ff;text-align:center;'><b style='color:#7c3aed;'>Không quá mức như nghĩ</b><br><span style='font-size:0.85rem;color:#64748b;'>Không khó, không đắt đến mức đó</span></div></div><div style='border:2px solid #dc2626;border-radius:10px;overflow:hidden;background:#fff;'><div style='background:#fee2e2;color:#991b1b;font-weight:800;font-size:1.1rem;padding:0.6rem;text-align:center;border-bottom:2px solid #dc2626;'>けっして...ない</div><div style='padding:0.8rem;background:#fef2f2;text-align:center;'><b style='color:#dc2626;'>Ý chí / Cam kết tuyệt đối</b><br><span style='font-size:0.85rem;color:#64748b;'>Quyết không từ bỏ, tuyệt đối không quên</span></div></div><div style='border:2px solid #b45309;border-radius:10px;overflow:hidden;background:#fff;'><div style='background:#fef3c7;color:#92400e;font-weight:800;font-size:1.1rem;padding:0.6rem;text-align:center;border-bottom:2px solid #b45309;'>めったに...ない</div><div style='padding:0.8rem;background:#fffbeb;text-align:center;'><b style='color:#b45309;'>Tần suất rất hiếm</b><br><span style='font-size:0.85rem;color:#64748b;'>Hiếm khi gặp, hầu như không dùng</span></div></div></div></div>
"@

$detailedStructure95 = @"
<div style='display:flex;flex-direction:column;gap:1.2rem;align-items:center;width:100%;max-width:540px;margin:0 auto;'><table style='width:100%;border-collapse:separate;border-spacing:0;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.4),0 0 0 1px rgba(255,255,255,0.1);text-align:left;font-family:"Noto Sans JP",sans-serif;'><thead><tr><th colspan='2' style='background:rgba(255,215,0,0.15);padding:0.5rem 1rem;font-size:0.95rem;color:#ffd700;text-align:center;border-bottom:1px solid rgba(255,255,255,0.1);'>〜も〜ば〜も ／ 〜も〜たら〜も (Có A, cũng có cả B)</th></tr></thead><tbody><tr><td style='background:rgba(255,215,0,0.12);border-right:1px solid rgba(255,255,255,0.15);border-bottom:1px solid rgba(255,255,255,0.1);padding:0.65rem 1rem;font-size:1.1rem;color:#ffd700;font-weight:800;text-align:center;width:40%;'>N1 も V1-ば</td><td style='background:rgba(255,77,79,0.08);border-bottom:1px solid rgba(255,255,255,0.1);padding:0.75rem 1.2rem;'><span style='color:#ff4d4f;font-weight:800;font-size:1.2rem;'>N2 も V2</span><span style='color:#ccc;font-size:0.85rem;display:block;margin-top:0.35rem;'>Người tốt cũng có mà người xấu cũng có</span></td></tr><tr><td style='background:rgba(255,215,0,0.08);border-right:1px solid rgba(255,255,255,0.15);border-bottom:1px solid rgba(255,255,255,0.1);padding:0.65rem 1rem;font-size:1.1rem;color:#ffd700;font-weight:800;text-align:center;'>N1 も A1-ければ</td><td style='background:rgba(255,77,79,0.08);border-bottom:1px solid rgba(255,255,255,0.1);padding:0.75rem 1.2rem;'><span style='color:#ff4d4f;font-weight:800;font-size:1.2rem;'>N2 も A2</span><span style='color:#ccc;font-size:0.85rem;display:block;margin-top:0.35rem;'>Món ngon cũng có, món dở cũng có</span></td></tr><tr><td style='background:rgba(255,215,0,0.05);border-right:1px solid rgba(255,255,255,0.15);border-bottom:1px solid rgba(255,255,255,0.1);padding:0.65rem 1rem;font-size:1.1rem;color:#ffd700;font-weight:800;text-align:center;'>N1 も A1/N-なら</td><td style='background:rgba(255,77,79,0.08);border-bottom:1px solid rgba(255,255,255,0.1);padding:0.75rem 1.2rem;'><span style='color:#ff4d4f;font-weight:800;font-size:1.2rem;'>N2 も A2/N2</span><span style='color:#ccc;font-size:0.85rem;display:block;margin-top:0.35rem;'>Lúc vui cũng có, lúc buồn cũng có</span></td></tr><tr><td style='background:rgba(255,215,0,0.03);border-right:1px solid rgba(255,255,255,0.15);padding:0.65rem 1rem;font-size:1.1rem;color:#ffd700;font-weight:800;text-align:center;'>N1 も V1-たら</td><td style='background:rgba(255,77,79,0.08);padding:0.75rem 1.2rem;'><span style='color:#ff4d4f;font-weight:800;font-size:1.2rem;'>N2 も V2</span><span style='color:#ccc;font-size:0.85rem;display:block;margin-top:0.35rem;'>Tiếng Anh nói được, tiếng Pháp cũng nói được</span></td></tr></tbody></table></div>
"@

$detailedStructure96 = @"
<div style='display:flex;flex-direction:column;gap:1.2rem;align-items:center;width:100%;max-width:540px;margin:0 auto;'><table style='width:100%;border-collapse:separate;border-spacing:0;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.4),0 0 0 1px rgba(255,255,255,0.1);text-align:left;font-family:"Noto Sans JP",sans-serif;'><thead><tr><th colspan='2' style='background:rgba(255,215,0,0.15);padding:0.5rem 1rem;font-size:0.95rem;color:#ffd700;text-align:center;border-bottom:1px solid rgba(255,255,255,0.1);'>まったく...ない (Hoàn toàn... không)</th></tr></thead><tbody><tr><td style='background:rgba(255,215,0,0.12);border-right:1px solid rgba(255,255,255,0.15);padding:0.85rem 1rem;font-size:1.3rem;color:#ffd700;font-weight:800;text-align:center;width:35%;'>まったく<br><span style='font-size:0.85rem;color:#aaa;'>(全く)</span></td><td style='background:rgba(255,77,79,0.08);padding:0.85rem 1.2rem;'><span style='color:#ff4d4f;font-weight:800;font-size:1.2rem;'>V-ない / A-くない / A-ではない / Nではない</span><span style='color:#ccc;font-size:0.85rem;display:block;margin-top:0.35rem;'>Phủ định tuyệt đối 100%, hoàn toàn không có một chút nào</span></td></tr></tbody></table></div>
"@

$detailedStructure97 = @"
<div style='display:flex;flex-direction:column;gap:1.2rem;align-items:center;width:100%;max-width:540px;margin:0 auto;'><table style='width:100%;border-collapse:separate;border-spacing:0;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.4),0 0 0 1px rgba(255,255,255,0.1);text-align:left;font-family:"Noto Sans JP",sans-serif;'><thead><tr><th colspan='2' style='background:rgba(255,215,0,0.15);padding:0.5rem 1rem;font-size:0.95rem;color:#ffd700;text-align:center;border-bottom:1px solid rgba(255,255,255,0.1);'>すこしも...ない (Một chút cũng... không)</th></tr></thead><tbody><tr><td style='background:rgba(255,215,0,0.12);border-right:1px solid rgba(255,255,255,0.15);padding:0.85rem 1rem;font-size:1.3rem;color:#ffd700;font-weight:800;text-align:center;width:35%;'>すこしも<br><span style='font-size:0.85rem;color:#aaa;'>(少しも)</span></td><td style='background:rgba(255,77,79,0.08);padding:0.85rem 1.2rem;'><span style='color:#ff4d4f;font-weight:800;font-size:1.2rem;'>V-ない / A-くない / A-ではない</span><span style='color:#ccc;font-size:0.85rem;display:block;margin-top:0.35rem;'>Dù chỉ một lượng cực nhỏ hay mức độ tối thiểu cũng không có</span></td></tr></tbody></table></div>
"@

$detailedStructure98 = @"
<div style='display:flex;flex-direction:column;gap:1.2rem;align-items:center;width:100%;max-width:540px;margin:0 auto;'><table style='width:100%;border-collapse:separate;border-spacing:0;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.4),0 0 0 1px rgba(255,255,255,0.1);text-align:left;font-family:"Noto Sans JP",sans-serif;'><thead><tr><th colspan='2' style='background:rgba(255,215,0,0.15);padding:0.5rem 1rem;font-size:0.95rem;color:#ffd700;text-align:center;border-bottom:1px solid rgba(255,255,255,0.1);'>そんなに...ない (Không... đến mức như thế)</th></tr></thead><tbody><tr><td style='background:rgba(255,215,0,0.12);border-right:1px solid rgba(255,255,255,0.15);padding:0.85rem 1rem;font-size:1.3rem;color:#ffd700;font-weight:800;text-align:center;width:35%;'>そんなに</td><td style='background:rgba(255,77,79,0.08);padding:0.85rem 1.2rem;'><span style='color:#ff4d4f;font-weight:800;font-size:1.2rem;'>V-ない / A-くない / A-ではない</span><span style='color:#ccc;font-size:0.85rem;display:block;margin-top:0.35rem;'>Mức độ không cao hay không nghiêm trọng như tưởng tượng</span></td></tr></tbody></table></div>
"@

$detailedStructure99 = @"
<div style='display:flex;flex-direction:column;gap:1.2rem;align-items:center;width:100%;max-width:540px;margin:0 auto;'><table style='width:100%;border-collapse:separate;border-spacing:0;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.4),0 0 0 1px rgba(255,255,255,0.1);text-align:left;font-family:"Noto Sans JP",sans-serif;'><thead><tr><th colspan='2' style='background:rgba(255,215,0,0.15);padding:0.5rem 1rem;font-size:0.95rem;color:#ffd700;text-align:center;border-bottom:1px solid rgba(255,255,255,0.1);'>けっして...ない (Quyết không / Tuyệt đối không...)</th></tr></thead><tbody><tr><td style='background:rgba(255,215,0,0.12);border-right:1px solid rgba(255,255,255,0.15);padding:0.85rem 1rem;font-size:1.3rem;color:#ffd700;font-weight:800;text-align:center;width:35%;'>けっして<br><span style='font-size:0.85rem;color:#aaa;'>(決して)</span></td><td style='background:rgba(255,77,79,0.08);padding:0.85rem 1.2rem;'><span style='color:#ff4d4f;font-weight:800;font-size:1.2rem;'>V-ない / A-くない / A-ではない / V-てはならない</span><span style='color:#ccc;font-size:0.85rem;display:block;margin-top:0.35rem;'>Ý chí sắt đá, cam kết tuyệt đối sẽ không thực hiện</span></td></tr></tbody></table></div>
"@

$detailedStructure100 = @"
<div style='display:flex;flex-direction:column;gap:1.2rem;align-items:center;width:100%;max-width:540px;margin:0 auto;'><table style='width:100%;border-collapse:separate;border-spacing:0;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.4),0 0 0 1px rgba(255,255,255,0.1);text-align:left;font-family:"Noto Sans JP",sans-serif;'><thead><tr><th colspan='2' style='background:rgba(255,215,0,0.15);padding:0.5rem 1rem;font-size:0.95rem;color:#ffd700;text-align:center;border-bottom:1px solid rgba(255,255,255,0.1);'>めったに...ない (Hiếm khi / Hầu như không)</th></tr></thead><tbody><tr><td style='background:rgba(255,215,0,0.12);border-right:1px solid rgba(255,255,255,0.15);padding:0.85rem 1rem;font-size:1.3rem;color:#ffd700;font-weight:800;text-align:center;width:35%;'>めったに</td><td style='background:rgba(255,77,79,0.08);padding:0.85rem 1.2rem;'><span style='color:#ff4d4f;font-weight:800;font-size:1.2rem;'>V-ない / N は めったにない</span><span style='color:#ccc;font-size:0.85rem;display:block;margin-top:0.35rem;'>Tần suất diễn ra sự việc cực kỳ thấp, gần như là không có</span></td></tr></tbody></table></div>
"@

$bai23 = [ordered]@{
    name = "Bài 23"
    x = 730
    y = 600
    comparison = $comparisonHtml
    items = @(
        # -------------------------------------------------------------
        # MẪU 95
        # -------------------------------------------------------------
        [ordered]@{
            structure = "〜も〜ば〜も / 〜も〜たら〜も"
            detailedStructure = $detailedStructure95
            meaning = "Có A, cũng có cả B"
            usage = "• <b>Ý nghĩa:</b> Biểu thị sự đa dạng của sự vật, sự việc khi có cả khía cạnh A lẫn khía cạnh B cùng tồn tại.<br>• <b>Đặc điểm:</b><br>&nbsp;&nbsp;+ Thường dùng để liệt kê hai mặt đối lập (tốt - xấu, vui - buồn) hoặc bổ sung phong phú cho nhau.<br>&nbsp;&nbsp;+ Mang sắc thái nhìn nhận sự việc khách quan và toàn diện.<br>• <b>Kết hợp:</b> <code>N1 も V1-ば / A1-ければ / A1/N1なら ＋ N2 も V2 / A2 / N2</code> hoặc <code>N1 も V1-たら ＋ N2 も V2</code>."
            explanation = "Dùng khi người nói muốn diễn tả tính chất đa chiều, sự phong phú hoặc những biến đổi đa dạng của cuộc sống/sự vật: có yếu tố A thì đồng thời cũng có cả yếu tố B."
            examples = @(
                [ordered]@{
                    jp = "<ruby>何処<rt>どこ</rt></ruby>の<ruby>国<rt>くに</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>でもいい<ruby>人<rt>ひと</rt></ruby>もいれば、<ruby>悪<rt>わる</rt></ruby>い<ruby>人<rt>ひと</rt></ruby>もいる。"
                    vi = "Người ở bất kỳ quốc gia nào thì cũng có người tốt, cũng có cả người xấu."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_95.1.png"
                },
                [ordered]@{
                    jp = "<ruby>日本料理<rt>にほんりょうり</rt></ruby>は<ruby>美味<rt>おい</rt></ruby>しいものもあれば、まずいものもある。"
                    vi = "Món ăn Nhật Bản thì cũng có món ngon, cũng có cả món dở."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_95.2.png"
                },
                [ordered]@{
                    jp = "この<ruby>本屋<rt>ほんや</rt></ruby>には、<ruby>漫画<rt>まんが</rt></ruby>もあれば、<ruby>小説<rt>しょうせつ</rt></ruby>もある。"
                    vi = "Ở hiệu sách này, truyện tranh cũng có mà tiểu thuyết cũng có."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_95.3.png"
                },
                [ordered]@{
                    jp = "<ruby>人生<rt>じんせい</rt></ruby>には、<ruby>嬉<rt>うれ</rt></ruby>しい<ruby>時<rt>とき</rt></ruby>もあれば、<ruby>悲<rt>かな</rt></ruby>しい<ruby>時<rt>とき</rt></ruby>もある。"
                    vi = "Trong cuộc sống, có những lúc vui mà cũng có cả những lúc buồn."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_95.4.png"
                },
                [ordered]@{
                    jp = "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>英語<rt>えいご</rt></ruby>も<ruby>話<rt>はな</rt></ruby>せれば、フランス<ruby>語<rt>ご</rt></ruby>も<ruby>話<rt>はな</rt></ruby>せる。"
                    vi = "Cô ấy tiếng Anh cũng nói được mà tiếng Pháp cũng nói được."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_95.5.png"
                }
            )
            exercises = [ordered]@{
                particles = @(
                    [ordered]@{
                        question = "このスーパーには<ruby>肉<rt>にく</rt></ruby>（　　）あれば、<ruby>新鮮<rt>しんせん</rt></ruby>な<ruby>魚<rt>さかな</rt></ruby>もある。"
                        options = @("も", "は", "が", "を")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>天気<rt>てんき</rt></ruby>は<ruby>晴<rt>は</rt></ruby>れの日も（　　）、<ruby>雨<rt>あめ</rt></ruby>の日もある。"
                        options = @("あれば", "あって", "あると", "あるなら")
                        answer = 0
                    },
                    [ordered]@{
                        question = "うちの<ruby>会社<rt>かいしゃ</rt></ruby>は<ruby>忙<rt>いそが</rt></ruby>しい<ruby>時期<rt>じき</rt></ruby>も（　　）、<ruby>暇<rt>ひま</rt></ruby>な<ruby>時期<rt>じき</rt></ruby>もある。"
                        options = @("あれば", "あるので", "あっても", "あるから")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>はピアノ（　　）<ruby>弾<rt>ひ</rt></ruby>ければ、ギターも<ruby>上手<rt>じょうず</rt></ruby>に<ruby>弾<rt>ひ</rt></ruby>ける。"
                        options = @("も", "に", "で", "へ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "この<ruby>町<rt>まち</rt></ruby>は<ruby>山<rt>やま</rt></ruby>もあれば、<ruby>綺麗<rt>きれい</rt></ruby>な<ruby>海<rt>うみ</rt></ruby>（　　）ある。"
                        options = @("も", "が", "は", "と")
                        answer = 0
                    }
                )
                vocab = @(
                    [ordered]@{
                        question = "<ruby>世<rt>よ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>には（　　）もいれば、<ruby>貧乏<rt>びんぼう</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>もいる。"
                        options = @("<ruby>金持<rt>かねも</rt></ruby>ち", "<ruby>信号<rt>しんごう</rt></ruby>", "<ruby>案内<rt>あんない</rt></ruby>", "<ruby>約束<rt>やくそく</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>旅行<rt>りょこう</rt></ruby>では（　　）こともあれば、<ruby>大変<rt>たいへん</rt></ruby>なこともある。"
                        options = @("<ruby>楽<rt>たの</rt></ruby>しい", "<ruby>不味<rt>まず</rt></ruby>い", "<ruby>痛<rt>いた</rt></ruby>い", "<ruby>暗<rt>くら</rt></ruby>い")
                        answer = 0
                    },
                    [ordered]@{
                        question = "この<ruby>公園<rt>こうえん</rt></ruby>には（　　）もあれば、きれいな<ruby>池<rt>いけ</rt></ruby>もある。"
                        options = @("<ruby>花壇<rt>かだん</rt></ruby>", "<ruby>財布<rt>さいふ</rt></ruby>", "<ruby>書類<rt>しょるい</rt></ruby>", "<ruby>履歴書<rt>りれきしょ</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>試験<rt>しけん</rt></ruby>には（　　）<ruby>問題<rt>もんだい</rt></ruby>もあれば、<ruby>難<rt>むずか</rt></ruby>しい<ruby>問題<rt>もんだい</rt></ruby>もある。"
                        options = @("<ruby>易<rt>やさ</rt></ruby>しい", "<ruby>重<rt>おも</rt></ruby>たい", "<ruby>苦<rt>にが</rt></ruby>い", "<ruby>臭<rt>くさ</rt></ruby>い")
                        answer = 0
                    },
                    [ordered]@{
                        question = "あの<ruby>店<rt>みせ</rt></ruby>は（　　）も<ruby>良<rt>よ</rt></ruby>ければ、サービスもすばらしい。"
                        options = @("<ruby>味<rt>あじ</rt></ruby>", "<ruby>事故<rt>じこ</rt></ruby>", "<ruby>故障<rt>こしょう</rt></ruby>", "<ruby>怪我<rt>けが</rt></ruby>")
                        answer = 0
                    }
                )
                conjugation = @(
                    [ordered]@{
                        question = "<ruby>酒<rt>さけ</rt></ruby>も（　　）、タバコも<ruby>吸<rt>す</rt></ruby>うという<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い。"
                        options = @("<ruby>飲<rt>の</rt></ruby>めば", "<ruby>飲<rt>の</rt></ruby>んだら", "<ruby>飲<rt>の</rt></ruby>むと", "<ruby>飲<rt>の</rt></ruby>むなら")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>値段<rt>ねだん</rt></ruby>も（　　）、<ruby>品質<rt>ひんしつ</rt></ruby>もいいのでよく<ruby>売<rt>う</rt></ruby>れる。"
                        options = @("<ruby>安<rt>やす</rt></ruby>ければ", "<ruby>安<rt>やす</rt></ruby>いなら", "<ruby>安<rt>やす</rt></ruby>いと", "<ruby>安<rt>やす</rt></ruby>かったら")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>部屋<rt>へや</rt></ruby>も（　　）、<ruby>駅<rt>えき</rt></ruby>からも<ruby>近<rt>ちか</rt></ruby>いので<ruby>便利<rt>べんり</rt></ruby>だ。"
                        options = @("<ruby>広<rt>ひろ</rt></ruby>ければ", "<ruby>広<rt>ひろ</rt></ruby>いなら", "<ruby>広<rt>ひろ</rt></ruby>いと", "<ruby>広<rt>ひろ</rt></ruby>くて")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>は<ruby>歌<rt>うた</rt></ruby>も（　　）、ダンスも<ruby>上手<rt>じょうず</rt></ruby>だ。"
                        options = @("<ruby>上手<rt>じょうず</rt></ruby>なら", "<ruby>上手<rt>じょうず</rt></ruby>ければ", "<ruby>上手<rt>じょうず</rt></ruby>いと", "<ruby>上手<rt>じょうず</rt></ruby>で")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>仕事<rt>しごと</rt></ruby>も（　　）、プライベートも<ruby>充実<rt>じゅうじつ</rt></ruby>している。"
                        options = @("<ruby>順調<rt>じゅんちょう</rt></ruby>なら", "<ruby>順調<rt>じゅんちょう</rt></ruby>ければ", "<ruby>順調<rt>じゅんちょう</rt></ruby>いなら", "<ruby>順調<rt>じゅんちょう</rt></ruby>くて")
                        answer = 0
                    }
                )
                translation = @(
                    [ordered]@{
                        vi = "Ở thành phố này, người giàu cũng có mà người nghèo cũng có."
                        jp = "この<ruby>街<rt>まち</rt></ruby>には<ruby>金持<rt>かねも</rt></ruby>ちもいれば、<ruby>貧乏<rt>びんぼう</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>もいる。"
                    },
                    [ordered]@{
                        vi = "Khách sạn này giá phòng vừa rẻ mà dịch vụ cũng rất tốt."
                        jp = "このホテルは<ruby>宿泊費<rt>しゅくはくひ</rt></ruby>も<ruby>安<rt>やす</rt></ruby>ければ、サービスもとてもいい。"
                    },
                    [ordered]@{
                        vi = "Công việc này vừa yêu cầu thể lực mà cũng cần cả sự kiên nhẫn."
                        jp = "この<ruby>仕事<rt>しごと</rt></ruby>は<ruby>体力<rt>たいりょく</rt></ruby>も<ruby>必要<rt>ひつよう</rt></ruby>なら、<ruby>忍耐力<rt>にんたいりょく</rt></ruby>も<ruby>必要<rt>ひつよう</rt></ruby>だ。"
                    },
                    [ordered]@{
                        vi = "Thực đơn hôm nay có cả món thịt và cũng có cả món cá."
                        jp = "<ruby>今日<rt>きょう</rt></ruby>のメニューには<ruby>肉料理<rt>にくりょうり</rt></ruby>もあれば、<ruby>魚料理<rt>さかなりょうり</rt></ruby>もある。"
                    },
                    [ordered]@{
                        vi = "Anh ấy học hành cũng giỏi mà thể thao cũng chơi rất cừ."
                        jp = "<ruby>彼<rt>かれ</rt></ruby>は<ruby>勉強<rt>べんきょう</rt></ruby>もできれば、スポーツもとても<ruby>得意<rt>とくい</rt></ruby>だ。"
                    }
                )
            }
        },

        # -------------------------------------------------------------
        # MẪU 96
        # -------------------------------------------------------------
        [ordered]@{
            structure = "まったく...ない"
            detailedStructure = $detailedStructure96
            meaning = "Hoàn toàn... không"
            usage = "• <b>Ý nghĩa:</b> Nhấn mạnh việc hoàn toàn không có một chút khả năng, trạng thái hay hiểu biết nào xảy ra.<br>• <b>Đặc điểm:</b><br>&nbsp;&nbsp;+ <code>まったく</code> luôn đi kèm thể phủ định (<code>〜ない</code>, <code>〜ません</code>).<br>&nbsp;&nbsp;+ Biểu thị mức độ 100% không có sự việc đó.<br>• <b>Kết hợp:</b> <code>まったく ＋ V-ない / A-くない / A-ではない / Nではない</code>."
            explanation = "Dùng để phủ định triệt để một sự việc, tính chất hay hiểu biết, cho thấy tỷ lệ hay mức độ xảy ra là bằng không (0%)."
            examples = @(
                [ordered]@{
                    jp = "あの<ruby>説明<rt>せつめい</rt></ruby>は<ruby>全<rt>まった</rt></ruby>くわからない。"
                    vi = "Bản giải thích đó tôi hoàn toàn không hiểu."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_96.1.png"
                },
                [ordered]@{
                    jp = "<ruby>彼<rt>かれ</rt></ruby>はスポーツに<ruby>全<rt>まった</rt></ruby>く<ruby>興味<rt>きょうみ</rt></ruby>がない。"
                    vi = "Anh ấy hoàn toàn không có hứng thú với thể thao."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_96.2.png"
                }
            )
            exercises = [ordered]@{
                particles = @(
                    [ordered]@{
                        question = "<ruby>事故<rt>じこ</rt></ruby>の<ruby>原因<rt>げんいん</rt></ruby>について、<ruby>私<rt>わたし</rt></ruby>はまったく（　　）。"
                        options = @("<ruby>知<rt>し</rt></ruby>らない", "<ruby>知<rt>し</rt></ruby>っている", "<ruby>知<rt>し</rt></ruby>りたい", "<ruby>知<rt>し</rt></ruby>るだろう")
                        answer = 0
                    },
                    [ordered]@{
                        question = "このパソコンはまったく（　　）しない。"
                        options = @("<ruby>動<rt>うご</rt></ruby>き", "<ruby>動<rt>うご</rt></ruby>く", "<ruby>動<rt>うご</rt></ruby>いた", "<ruby>動<rt>うご</rt></ruby>か")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>の<ruby>言<rt>い</rt></ruby>うことはまったく（　　）が<ruby>立<rt>た</rt></ruby>たない。"
                        options = @("<ruby>役<rt>やく</rt></ruby>", "<ruby>目<rt>め</rt></ruby>", "<ruby>気<rt>き</rt></ruby>", "<ruby>手<rt>て</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>私<rt>わたし</rt></ruby>はその<ruby>事件<rt>じけん</rt></ruby>にまったく（　　）がない。"
                        options = @("<ruby>関係<rt>かんけい</rt></ruby>", "<ruby>約束<rt>やくそく</rt></ruby>", "<ruby>案内<rt>あんない</rt></ruby>", "<ruby>準備<rt>じゅんび</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>は<ruby>酒<rt>さけ</rt></ruby>をまったく（　　）ない。"
                        options = @("<ruby>飲<rt>の</rt></ruby>ま", "<ruby>飲<rt>の</rt></ruby>み", "<ruby>飲<rt>の</rt></ruby>む", "<ruby>飲<rt>の</rt></ruby>め")
                        answer = 0
                    }
                )
                vocab = @(
                    [ordered]@{
                        question = "<ruby>夜<rt>よる</rt></ruby>になっても<ruby>外<rt>そと</rt></ruby>はまったく（　　）ない。"
                        options = @("<ruby>涼<rt>すず</rt></ruby>しく", "<ruby>甘<rt>あま</rt></ruby>く", "<ruby>辛<rt>から</rt></ruby>く", "<ruby>痛<rt>いた</rt></ruby>く")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>田中<rt>たなか</rt></ruby>さんの<ruby>噂<rt>うわさ</rt></ruby>はまったくの（　　）だ。"
                        options = @("<ruby>嘘<rt>うそ</rt></ruby>", "<ruby>夢<rt>ゆめ</rt></ruby>", "<ruby>味<rt>あじ</rt></ruby>", "<ruby>声<rt>こえ</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>の<ruby>態度<rt>たいど</rt></ruby>にはまったく（　　）がない。"
                        options = @("<ruby>反省<rt>はんせい</rt></ruby>", "<ruby>出発<rt>しゅっぱつ</rt></ruby>", "<ruby>到着<rt>とうちゃく</rt></ruby>", "<ruby>注文<rt>ちゅうもん</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "この<ruby>地域<rt>ちいき</rt></ruby>は<ruby>冬<rt>ふゆ</rt></ruby>でもまったく（　　）が<ruby>降<rt>ふ</rt></ruby>らない。"
                        options = @("<ruby>雪<rt>ゆき</rt></ruby>", "<ruby>火<rt>ひ</rt></ruby>", "<ruby>星<rt>ほし</rt></ruby>", "<ruby>煙<rt>けむり</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>試験<rt>しけん</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>にまったく（　　）していない。"
                        options = @("<ruby>満足<rt>まんぞく</rt></ruby>", "<ruby>我慢<rt>がまん</rt></ruby>", "<ruby>遠慮<rt>えんりょ</rt></ruby>", "<ruby>世話<rt>せわ</rt></ruby>")
                        answer = 0
                    }
                )
                conjugation = @(
                    [ordered]@{
                        question = "<ruby>今朝<rt>けさ</rt></ruby>からまったく<ruby>何<rt>なに</rt></ruby>も（　　）いない。"
                        options = @("<ruby>食<rt>た</rt></ruby>べて", "<ruby>食<rt>た</rt></ruby>べる", "<ruby>食<rt>た</rt></ruby>べた", "<ruby>食<rt>た</rt></ruby>べよう")
                        answer = 0
                    },
                    [ordered]@{
                        question = "この<ruby>問題<rt>もんだい</rt></ruby>はまったく（　　）ない。"
                        options = @("<ruby>難<rt>むずか</rt></ruby>しく", "<ruby>難<rt>むずか</rt></ruby>しい", "<ruby>難<rt>むずか</rt></ruby>しさ", "<ruby>難<rt>むずか</rt></ruby>し")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>はまったく（　　）ではない。"
                        options = @("<ruby>綺麗<rt>きれい</rt></ruby>", "<ruby>綺麗<rt>きれい</rt></ruby>な", "<ruby>綺麗<rt>きれい</rt></ruby>に", "<ruby>綺麗<rt>きれい</rt></ruby>さ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>準備<rt>じゅんび</rt></ruby>がまったく（　　）いないので<ruby>困<rt>こま</rt></ruby>った。"
                        options = @("できて", "できる", "できた", "できよう")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>の<ruby>意見<rt>いけん</rt></ruby>にはまったく（　　）できない。"
                        options = @("<ruby>賛成<rt>さんせい</rt></ruby>", "<ruby>賛成<rt>さんせい</rt></ruby>な", "<ruby>賛成<rt>さんせい</rt></ruby>に", "<ruby>賛成<rt>さんせい</rt></ruby>の")
                        answer = 0
                    }
                )
                translation = @(
                    [ordered]@{
                        vi = "Tôi hoàn toàn không nhớ gì về chuyện ngày hôm đó."
                        jp = "あの<ruby>日<rt>ひ</rt></ruby>のことはまったく<ruby>覚<rt>おぼ</rt></ruby>えていない。"
                    },
                    [ordered]@{
                        vi = "Căn phòng này hoàn toàn không có người ở."
                        jp = "この<ruby>部屋<rt>へや</rt></ruby>にはまったく<ruby>人<rt>ひと</rt></ruby>が<ruby>住<rt>す</rt></ruby>んでいない。"
                    },
                    [ordered]@{
                        vi = "Kế hoạch này hoàn toàn không có vấn đề gì cả."
                        jp = "この<ruby>計画<rt>けいかく</rt></ruby>にはまったく<ruby>問題<rt>もんだい</rt></ruby>がない。"
                    },
                    [ordered]@{
                        vi = "Tôi hoàn toàn không hề nghe thấy tin đồn đó."
                        jp = "その<ruby>噂<rt>うわさ</rt></ruby>はまったく<ruby>耳<rt>みみ</rt></ruby>にしていない。"
                    },
                    [ordered]@{
                        vi = "Anh ấy hoàn toàn không để ý đến lời khuyên của bác sĩ."
                        jp = "<ruby>彼<rt>かれ</rt></ruby>は<ruby>医者<rt>いしゃ</rt></ruby>のアドバイスをまったく<ruby>気<rt>き</rt></ruby>にしていない。"
                    }
                )
            }
        },

        # -------------------------------------------------------------
        # MẪU 97
        # -------------------------------------------------------------
        [ordered]@{
            structure = "すこしも...ない"
            detailedStructure = $detailedStructure97
            meaning = "Một chút cũng... không"
            usage = "• <b>Ý nghĩa:</b> Nhấn mạnh mức độ phủ định tuyệt đối (dù chỉ là một lượng nhỏ nhất cũng không có).<br>• <b>Đặc điểm:</b><br>&nbsp;&nbsp;+ <code>すこしも</code> luôn đi với dạng phủ định.<br>&nbsp;&nbsp;+ Nhấn mạnh vào số lượng, cảm giác, mức độ tối thiểu.<br>• <b>Kết hợp:</b> <code>すこしも ＋ V-ない / A-くない / A-ではない</code>."
            explanation = "Dùng khi người nói muốn khẳng định dứt khoát rằng ngay cả một lượng rất nhỏ của hành động/trạng thái cũng không hề xảy ra."
            examples = @(
                [ordered]@{
                    jp = "<ruby>昨日<rt>きのう</rt></ruby><ruby>運動<rt>うんどう</rt></ruby>しても<ruby>少<rt>すこ</rt></ruby>しも<ruby>疲<rt>つか</rt></ruby>れない。"
                    vi = "Hôm qua dù có vận động nhưng tôi không mệt một chút nào."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_97.1.png"
                },
                [ordered]@{
                    jp = "その<ruby>話<rt>はなし</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>しもわからない。"
                    vi = "Câu chuyện đó tôi không hiểu một chút nào."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_97.2.png"
                }
            )
            exercises = [ordered]@{
                particles = @(
                    [ordered]@{
                        question = "<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んだが、<ruby>熱<rt>ねつ</rt></ruby>はすこしも（　　）。"
                        options = @("<ruby>下<rt>さ</rt></ruby>がらない", "<ruby>下<rt>さ</rt></ruby>がる", "<ruby>下<rt>さ</rt></ruby>がった", "<ruby>下<rt>さ</rt></ruby>がりそうだ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>たばかりの<ruby>頃<rt>ころ</rt></ruby>は、<ruby>日本語<rt>にほんご</rt></ruby>がすこしも（　　）なかった。"
                        options = @("<ruby>話<rt>はな</rt></ruby>せ", "<ruby>話<rt>はな</rt></ruby>し", "<ruby>話<rt>はな</rt></ruby>す", "<ruby>話<rt>はな</rt></ruby>そう")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>は<ruby>昔<rt>むかし</rt></ruby>とすこしも（　　）いない。"
                        options = @("<ruby>変<rt>か</rt></ruby>わって", "<ruby>変<rt>か</rt></ruby>わる", "<ruby>変<rt>か</rt></ruby>わり", "<ruby>変<rt>か</rt></ruby>えた")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>痛<rt>いた</rt></ruby>みはすこしも（　　）ない。"
                        options = @("<ruby>感<rt>かん</rt></ruby>じ", "<ruby>感<rt>かん</rt></ruby>じる", "<ruby>感<rt>かん</rt></ruby>じた", "<ruby>感<rt>かん</rt></ruby>じよう")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>の<ruby>態度<rt>たいど</rt></ruby>はすこしも（　　）ではない。"
                        options = @("<ruby>丁寧<rt>ていねい</rt></ruby>", "<ruby>丁寧<rt>ていねい</rt></ruby>な", "<ruby>丁寧<rt>ていねい</rt></ruby>に", "<ruby>丁寧<rt>ていねい</rt></ruby>さ")
                        answer = 0
                    }
                )
                vocab = @(
                    [ordered]@{
                        question = "<ruby>一日中<rt>いちにちじゅう</rt></ruby><ruby>歩<rt>ある</rt></ruby>いたのに、すこしも（　　）を感じない。"
                        options = @("<ruby>疲労<rt>ひろう</rt></ruby>", "<ruby>合格<rt>ごうかく</rt></ruby>", "<ruby>連絡<rt>れんらく</rt></ruby>", "<ruby>相談<rt>そうだん</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>手術<rt>しゅじゅつ</rt></ruby>の<ruby>後<rt>あと</rt></ruby>もすこしも（　　）がなかった。"
                        options = @("<ruby>痛<rt>いた</rt></ruby>み", "<ruby>甘<rt>あま</rt></ruby>み", "<ruby>深<rt>ふか</rt></ruby>み", "<ruby>温<rt>あたた</rt></ruby>かみ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>何<rt>なに</rt></ruby>度も<ruby>注意<rt>ちゅうい</rt></ruby>されたのに、すこしも（　　）していない。"
                        options = @("<ruby>改善<rt>かいぜん</rt></ruby>", "<ruby>案内<rt>あんない</rt></ruby>", "<ruby>注文<rt>ちゅうもん</rt></ruby>", "<ruby>散歩<rt>さんぽ</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>にはすこしも（　　）がない。"
                        options = @("<ruby>説得力<rt>せっとくりょく</rt></ruby>", "<ruby>体重<rt>たいじゅう</rt></ruby>", "<ruby>視力<rt>しりょく</rt></ruby>", "<ruby>年齢<rt>ねんれい</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>失敗<rt>しっぱい</rt></ruby>してもすこしも（　　）を見せなかった。"
                        options = @("<ruby>後悔<rt>こうかい</rt></ruby>", "<ruby>観光<rt>かんこう</rt></ruby>", "<ruby>交通<rt>こうつう</rt></ruby>", "<ruby>歓迎<rt>かんげい</rt></ruby>")
                        answer = 0
                    }
                )
                conjugation = @(
                    [ordered]@{
                        question = "<ruby>寒<rt>さむ</rt></ruby>い<ruby>冬<rt>ふゆ</rt></ruby>なのにすこしも（　　）ない。"
                        options = @("<ruby>寒<rt>さむ</rt></ruby>く", "<ruby>寒<rt>さむ</rt></ruby>い", "<ruby>寒<rt>さむ</rt></ruby>さ", "<ruby>寒<rt>さむ</rt></ruby>ければ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "この<ruby>料理<rt>りょうり</rt></ruby>はすこしも（　　）ない。"
                        options = @("<ruby>辛<rt>から</rt></ruby>く", "<ruby>辛<rt>から</rt></ruby>い", "<ruby>辛<rt>から</rt></ruby>さ", "<ruby>辛<rt>から</rt></ruby>ければ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>はすこしも（　　）そうではない。"
                        options = @("<ruby>悲<rt>かな</rt></ruby>し", "<ruby>悲<rt>かな</rt></ruby>しい", "<ruby>悲<rt>かな</rt></ruby>しく", "<ruby>悲<rt>かな</rt></ruby>しむ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>事件<rt>じけん</rt></ruby>についてすこしも（　　）てくれない。"
                        options = @("<ruby>話<rt>はな</rt></ruby>し", "<ruby>話<rt>はな</rt></ruby>す", "<ruby>話<rt>はな</rt></ruby>せ", "<ruby>話<rt>はな</rt></ruby>そう")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>成績<rt>せいせき</rt></ruby>がすこしも（　　）ない。"
                        options = @("<ruby>伸<rt>の</rt></ruby>び", "<ruby>伸<rt>の</rt></ruby>ぶ", "<ruby>伸<rt>の</rt></ruby>ばす", "<ruby>伸<rt>の</rt></ruby>びた")
                        answer = 0
                    }
                )
                translation = @(
                    [ordered]@{
                        vi = "Dù đã uống thuốc nhưng tôi không thấy đỡ hơn một chút nào."
                        jp = "<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んだのに、すこしもよくならない。"
                    },
                    [ordered]@{
                        vi = "Tiếng ồn bên ngoài không làm tôi giảm tập trung một chút nào."
                        jp = "<ruby>外<rt>そと</rt></ruby>の<ruby>音<rt>おと</rt></ruby>はすこしも<ruby>集中<rt>しゅうちゅう</rt></ruby>の<ruby>邪魔<rt>じゃま</rt></ruby>にならない。"
                    },
                    [ordered]@{
                        vi = "Anh ấy dù bị chỉ trích nhưng không hề nao núng một chút nào."
                        jp = "<ruby>彼<rt>かれ</rt></ruby>は<ruby>批判<rt>ひはん</rt></ruby>されてもすこしも<ruby>動<rt>うご</rt></ruby>じない。"
                    },
                    [ordered]@{
                        vi = "Giá cả của mặt hàng này so với năm ngoái không giảm một chút nào."
                        jp = "この<ruby>商品<rt>しょうひん</rt></ruby>の<ruby>価格<rt>かかく</rt></ruby>は<ruby>去年<rt>きょねん</rt></ruby>と<ruby>比<rt>くら</rt></ruby>べてすこしも<ruby>安<rt>やす</rt></ruby>くならない。"
                    },
                    [ordered]@{
                        vi = "Tôi không cảm thấy hứng thú với kế hoạch đó một chút nào."
                        jp = "その<ruby>計画<rt>けいかく</rt></ruby>にはすこしも<ruby>気<rt>き</rt></ruby>が<ruby>進<rt>すす</rt></ruby>まない。"
                    }
                )
            }
        },

        # -------------------------------------------------------------
        # MẪU 98
        # -------------------------------------------------------------
        [ordered]@{
            structure = "そんなに...ない"
            detailedStructure = $detailedStructure98
            meaning = "Không... đến mức như thế"
            usage = "• <b>Ý nghĩa:</b> Biểu thị mức độ của sự việc không cao đến mức như người nói/người nghe tưởng tượng hoặc suy đoán trước đó.<br>• <b>Đặc điểm:</b><br>&nbsp;&nbsp;+ <code>そんなに</code> đi với thể phủ định để làm giảm nhẹ mức độ so với kỳ vọng.<br>&nbsp;&nbsp;+ Mang sắc thái 'thực tế vẫn ổn/không nghiêm trọng đến thế'.<br>• <b>Kết hợp:</b> <code>そんなに ＋ V-ない / A-くない / A-ではない</code>."
            explanation = "Dùng khi người nói muốn trấn an hoặc đính chính rằng sự việc trong thực tế dễ chịu, đơn giản hoặc nhẹ nhàng hơn nhiều so với suy nghĩ ban đầu."
            examples = @(
                [ordered]@{
                    jp = "このテストはそんなに<ruby>難<rt>むずか</rt></ruby>しくない。"
                    vi = "Bài kiểm tra này không khó đến mức như thế."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_98.1.png"
                },
                [ordered]@{
                    jp = "この<ruby>店<rt>みせ</rt></ruby>の<ruby>価格<rt>かかく</rt></ruby>はそんなに<ruby>高<rt>たか</rt></ruby>くない。"
                    vi = "Giá cả của cửa hàng này không đắt đến mức như thế."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_98.2.png"
                }
            )
            exercises = [ordered]@{
                particles = @(
                    [ordered]@{
                        question = "<ruby>心配<rt>しんぱい</rt></ruby>しなくても、そんなに（　　）ないですよ。"
                        options = @("<ruby>危<rt>あぶ</rt></ruby>なく", "<ruby>危<rt>あぶ</rt></ruby>ない", "<ruby>危<rt>あぶ</rt></ruby>なさ", "<ruby>危<rt>あぶ</rt></ruby>なければ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>今日<rt>きょう</rt></ruby>の<ruby>気温<rt>きおん</rt></ruby>はそんなに（　　）ない。"
                        options = @("<ruby>低<rt>ひく</rt></ruby>く", "<ruby>低<rt>ひく</rt></ruby>い", "<ruby>低<rt>ひく</rt></ruby>さ", "<ruby>低<rt>ひく</rt></ruby>ければ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "この<ruby>荷物<rt>にもつ</rt></ruby>はそんなに（　　）ない。"
                        options = @("<ruby>重<rt>おも</rt></ruby>く", "<ruby>重<rt>おも</rt></ruby>い", "<ruby>重<rt>おも</rt></ruby>さ", "<ruby>重<rt>おも</rt></ruby>ければ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>駅<rt>えき</rt></ruby>まではそんなに（　　）ない。"
                        options = @("<ruby>遠<rt>とお</rt></ruby>く", "<ruby>遠<rt>とお</rt></ruby>い", "<ruby>遠<rt>とお</rt></ruby>さ", "<ruby>遠<rt>とお</rt></ruby>ければ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>の<ruby>怪我<rt>けが</rt></ruby>はそんなに（　　）ではない。"
                        options = @("<ruby>深刻<rt>しんこく</rt></ruby>", "<ruby>深刻<rt>しんこく</rt></ruby>な", "<ruby>深刻<rt>しんこく</rt></ruby>に", "<ruby>深刻<rt>しんこく</rt></ruby>さ")
                        answer = 0
                    }
                )
                vocab = @(
                    [ordered]@{
                        question = "<ruby>今月<rt>こんげつ</rt></ruby>はそんなに（　　）が<ruby>多<rt>おお</rt></ruby>くない。"
                        options = @("<ruby>残業<rt>ざんぎょう</rt></ruby>", "<ruby>事故<rt>じこ</rt></ruby>", "<ruby>地震<rt>じしん</rt></ruby>", "<ruby>火事<rt>かじ</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "このアパートの（　　）はそんなに<ruby>高<rt>たか</rt></ruby>くない。"
                        options = @("<ruby>家賃<rt>やちん</rt></ruby>", "<ruby>給料<rt>きゅうりょう</rt></ruby>", "<ruby>貯金<rt>ちょきん</rt></ruby>", "<ruby>借金<rt>しゃっきん</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>はそんなに（　　）を<ruby>食<rt>た</rt></ruby>べない。"
                        options = @("<ruby>量<rt>りょう</rt></ruby>", "<ruby>線<rt>せん</rt></ruby>", "<ruby>角<rt>かど</rt></ruby>", "<ruby>橋<rt>はし</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "この<ruby>映画<rt>えいが</rt></ruby>はそんなに（　　）がよくない。"
                        options = @("<ruby>評判<rt>ひょうばん</rt></ruby>", "<ruby>信号<rt>しんごう</rt></ruby>", "<ruby>交差点<rt>こうさてん</rt></ruby>", "<ruby>踏切<rt>ふみきり</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "そんなに（　　）を出さなくても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>だ。"
                        options = @("<ruby>大声<rt>おおごえ</rt></ruby>", "<ruby>空気<rt>くうき</rt></ruby>", "<ruby>季節<rt>きせつ</rt></ruby>", "<ruby>景色<rt>けしき</rt></ruby>")
                        answer = 0
                    }
                )
                conjugation = @(
                    [ordered]@{
                        question = "<ruby>時間<rt>じかん</rt></ruby>はそんなに（　　）ないから<ruby>安心<rt>あんしん</rt></ruby>して。"
                        options = @("かから", "かかる", "かかり", "かかれば")
                        answer = 0
                    },
                    [ordered]@{
                        question = "そんなに（　　）なくてもいいですよ。"
                        options = @("<ruby>急<rt>いそ</rt></ruby>が", "<ruby>急<rt>いそ</rt></ruby>ぎ", "<ruby>急<rt>いそ</rt></ruby>ぐ", "<ruby>急<rt>いそ</rt></ruby>げ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "そんなに（　　）込まないでください。"
                        options = @("<ruby>落<rt>お</rt></ruby>ち", "<ruby>落<rt>お</rt></ruby>ちる", "<ruby>落<rt>お</rt></ruby>ちた", "<ruby>落<rt>お</rt></ruby>ちよう")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>はそんなに（　　）ない。"
                        options = @("<ruby>面白<rt>おもしろ</rt></ruby>く", "<ruby>面白<rt>おもしろ</rt></ruby>い", "<ruby>面白<rt>おもしろ</rt></ruby>さ", "<ruby>面白<rt>おもしろ</rt></ruby>ければ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "このパソコンはそんなに（　　）ではない。"
                        options = @("<ruby>不便<rt>ふべん</rt></ruby>", "<ruby>不便<rt>ふべん</rt></ruby>な", "<ruby>不便<rt>ふべん</rt></ruby>に", "<ruby>不便<rt>ふべん</rt></ruby>さ")
                        answer = 0
                    }
                )
                translation = @(
                    [ordered]@{
                        vi = "Công việc lần này không vất vả đến mức như tôi đã nghĩ."
                        jp = "<ruby>今度<rt>こんど</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>は<ruby>思<rt>おも</rt></ruby>ったほどそんなに<ruby>大変<rt>たいへん</rt></ruby>ではない。"
                    },
                    [ordered]@{
                        vi = "Thời tiết hôm nay không lạnh đến mức phải mặc áo khoác dày."
                        jp = "<ruby>今日<rt>きょう</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>は<ruby>厚<rt>あつ</rt></ruby>いコートを<ruby>着<rt>き</rt></ruby>るほどそんなに<ruby>寒<rt>さむ</rt></ruby>くない。"
                    },
                    [ordered]@{
                        vi = "Bạn không cần phải lo lắng đến mức như thế đâu."
                        jp = "そんなに<ruby>心配<rt>しんぱい</rt></ruby>しなくてもいいですよ。"
                    },
                    [ordered]@{
                        vi = "Chi phí sinh hoạt ở đây không đắt đỏ đến mức như lời đồn."
                        jp = "ここでの<ruby>生活費<rt>せいかつひ</rt></ruby>は<ruby>噂<rt>うわさ</rt></ruby>ほどそんなに<ruby>高<rt>たか</rt></ruby>くない。"
                    },
                    [ordered]@{
                        vi = "Đoạn đường từ đây đến thư viện không xa đến mức như thế."
                        jp = "ここから<ruby>図書館<rt>としょかん</rt></ruby>までの<ruby>道<rt>みち</rt></ruby>はそんなに<ruby>遠<rt>とお</rt></ruby>くない。"
                    }
                )
            }
        },

        # -------------------------------------------------------------
        # MẪU 99
        # -------------------------------------------------------------
        [ordered]@{
            structure = "けっして...ない"
            detailedStructure = $detailedStructure99
            meaning = "Quyết không / Tuyệt đối không..."
            usage = "• <b>Ý nghĩa:</b> Thể hiện ý chí vô cùng mạnh mẽ hoặc một lời hứa, lời khẳng định tuyệt đối sẽ không làm một việc gì đó.<br>• <b>Đặc điểm:</b><br>&nbsp;&nbsp;+ <code>けっして</code> luôn đi với dạng phủ định (<code>〜ない</code>, <code>〜てはならない</code>).<br>&nbsp;&nbsp;+ Mang tính quyết tâm cao độ, lời thề hoặc quy tắc bắt buộc.<br>• <b>Kết hợp:</b> <code>けっして ＋ V-ない / A-くない / A-ではない</code>."
            explanation = "Dùng khi người nói muốn tuyên bố một lập trường kiên định, cam kết không bao giờ từ bỏ hoặc không để sự việc tiêu cực xảy ra."
            examples = @(
                [ordered]@{
                    jp = "<ruby>彼<rt>かれ</rt></ruby>は<ruby>決<rt>けっ</rt></ruby>して<ruby>諦<rt>あきら</rt></ruby>めない。"
                    vi = "Anh ấy quyết không bao giờ từ bỏ."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_99.1.png"
                },
                [ordered]@{
                    jp = "<ruby>私<rt>わたし</rt></ruby>はその<ruby>日<rt>ひ</rt></ruby>を<ruby>決<rt>けっ</rt></ruby>して<ruby>忘<rt>わす</rt></ruby>れない。"
                    vi = "Tôi tuyệt đối sẽ không bao giờ quên ngày hôm đó."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_99.2.png"
                }
            )
            exercises = [ordered]@{
                particles = @(
                    [ordered]@{
                        question = "この<ruby>秘密<rt>ひみつ</rt></ruby>はけっして<ruby>誰<rt>だれ</rt></ruby>（　　）も<ruby>言<rt>い</rt></ruby>わないでください。"
                        options = @("に", "で", "を", "へ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "どんなに<ruby>辛<rt>つら</rt></ruby>くても、けっして（　　）ない。"
                        options = @("<ruby>逃<rt>に</rt></ruby>げ", "<ruby>逃<rt>に</rt></ruby>ぐ", "<ruby>逃<rt>に</rt></ruby>ぎ", "<ruby>逃<rt>に</rt></ruby>ごう")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>恩人<rt>おんじん</rt></ruby>への<ruby>感謝<rt>かんしゃ</rt></ruby>の<ruby>気持<rt>きも</rt></ruby>ちはけっして（　　）。"
                        options = @("<ruby>忘<rt>わす</rt></ruby>れない", "<ruby>忘<rt>わす</rt></ruby>れる", "<ruby>忘<rt>わす</rt></ruby>れた", "<ruby>忘<rt>わす</rt></ruby>れよう")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>はけっして<ruby>嘘<rt>うそ</rt></ruby>を（　　）ない<ruby>正直<rt>しょうじき</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>だ。"
                        options = @("つか", "つき", "つく", "つけ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "このルールはけっして<ruby>破<rt>やぶ</rt></ruby>っては（　　）。"
                        options = @("いけない", "いい", "ある", "おく")
                        answer = 0
                    }
                )
                vocab = @(
                    [ordered]@{
                        question = "けっして<ruby>他人<rt>たにん</rt></ruby>の（　　）を<ruby>笑<rt>わら</rt></ruby>ってはいけない。"
                        options = @("<ruby>失敗<rt>しっぱい</rt></ruby>", "<ruby>成功<rt>せいこう</rt></ruby>", "<ruby>合格<rt>ごうかく</rt></ruby>", "<ruby>勝利<rt>しょうり</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>夢<rt>ゆめ</rt></ruby>をけっして（　　）ないで<ruby>努力<rt>どりょく</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>ける。"
                        options = @("<ruby>捨<rt>す</rt></ruby>て", "<ruby>拾<rt>ひろ</rt></ruby>い", "<ruby>探<rt>さが</rt></ruby>し", "<ruby>集<rt>あつ</rt></ruby>め")
                        answer = 0
                    },
                    [ordered]@{
                        question = "けっして<ruby>自分<rt>じぶん</rt></ruby>の（　　）を<ruby>曲<rt>ま</rt></ruby>げない。"
                        options = @("<ruby>信念<rt>しんねん</rt></ruby>", "<ruby>切符<rt>きっぷ</rt></ruby>", "<ruby>財布<rt>さいふ</rt></ruby>", "<ruby>帽子<rt>ぼうし</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "この<ruby>約束<rt>やくそく</rt></ruby>はけっして（　　）にしてはならない。"
                        options = @("<ruby>無駄<rt>むだ</rt></ruby>", "<ruby>親切<rt>しんせつ</rt></ruby>", "<ruby>丁寧<rt>ていねい</rt></ruby>", "<ruby>便利<rt>べんり</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "どんな<ruby>誘惑<rt>ゆうわく</rt></ruby>にもけっして（　　）ない。"
                        options = @("<ruby>負<rt>ま</rt></ruby>け", "<ruby>勝<rt>か</rt></ruby>ち", "<ruby>喜<rt>よろこ</rt></ruby>び", "<ruby>笑<rt>わら</rt></ruby>い")
                        answer = 0
                    }
                )
                conjugation = @(
                    [ordered]@{
                        question = "この<ruby>事<rt>こと</rt></ruby>はけっして<ruby>他<rt>ほか</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に（　　）はいけません。"
                        options = @("<ruby>話<rt>はな</rt></ruby>して", "<ruby>話<rt>はな</rt></ruby>す", "<ruby>話<rt>はな</rt></ruby>した", "<ruby>話<rt>はな</rt></ruby>そう")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>の<ruby>行為<rt>こうい</rt></ruby>はけっして（　　）できるものではない。"
                        options = @("<ruby>許<rt>ゆる</rt></ruby>すことが", "<ruby>許<rt>ゆる</rt></ruby>した", "<ruby>許<rt>ゆる</rt></ruby>そう", "<ruby>許<rt>ゆる</rt></ruby>せば")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>無理<rt>むり</rt></ruby>なダイエットはけっして<ruby>体<rt>からだ</rt></ruby>に（　　）ない。"
                        options = @("<ruby>良<rt>よ</rt></ruby>く", "<ruby>良<rt>い</rt></ruby>い", "<ruby>良<rt>よ</rt></ruby>さ", "<ruby>良<rt>よ</rt></ruby>ければ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "その<ruby>道<rt>みち</rt></ruby>はけっして（　　）ではない。"
                        options = @("<ruby>安全<rt>あんぜん</rt></ruby>", "<ruby>安全<rt>あんぜん</rt></ruby>な", "<ruby>安全<rt>あんぜん</rt></ruby>に", "<ruby>安全<rt>あんぜん</rt></ruby>さ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>過去<rt>かこ</rt></ruby>の<ruby>過<rt>あやま</rt></ruby>ちをけっして（　　）てはならない。"
                        options = @("<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>し", "<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>す", "<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>せ", "<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>そう")
                        answer = 0
                    }
                )
                translation = @(
                    [ordered]@{
                        vi = "Tôi quyết không bao giờ phản bội lòng tin của bạn bè."
                        jp = "<ruby>友達<rt>ともだち</rt></ruby>の<ruby>信頼<rt>しんらい</rt></ruby>をけっして<ruby>裏切<rt>うらぎ</rt></ruby>らない。"
                    },
                    [ordered]@{
                        vi = "Dù khó khăn đến đâu, chúng ta tuyệt đối không được nản lòng."
                        jp = "どんなに<ruby>困難<rt>こんなん</rt></ruby>でも、けっしてくじけてはならない。"
                    },
                    [ordered]@{
                        vi = "Lời hứa này tôi tuyệt đối sẽ giữ đến cùng."
                        jp = "この<ruby>約束<rt>やくそく</rt></ruby>はけっして<ruby>最後<rt>さいご</rt></ruby>まで<ruby>守<rt>まも</rt></ruby>り<ruby>抜<rt>ぬ</rt></ruby>く。"
                    },
                    [ordered]@{
                        vi = "Bí mật này tuyệt đối không được tiết lộ ra bên ngoài."
                        jp = "この<ruby>秘密<rt>ひみつ</rt></ruby>はけっして<ruby>外部<rt>がいぶ</rt></ruby>に<ruby>漏<rt>も</rt></ruby>らしてはならない。"
                    },
                    [ordered]@{
                        vi = "Tôi quyết không lặp lại sai lầm tương tự một lần nữa."
                        jp = "<ruby>同<rt>おな</rt></ruby>じミスをけっして<ruby>二度<rt>にど</rt></ruby>と<ruby>起<rt>お</rt></ruby>こさない。"
                    }
                )
            }
        },

        # -------------------------------------------------------------
        # MẪU 100
        # -------------------------------------------------------------
        [ordered]@{
            structure = "めったに...ない"
            detailedStructure = $detailedStructure100
            meaning = "Hiếm khi / Hầu như không"
            usage = "• <b>Ý nghĩa:</b> Biểu thị tần suất của hành động hay sự việc xảy ra là rất hiếm, hầu như không có.<br>• <b>Đặc điểm:</b><br>&nbsp;&nbsp;+ <code>めったに</code> luôn đi với động từ thể phủ định (<code>V-ない</code>).<br>&nbsp;&nbsp;+ Nhấn mạnh vào tần suất cực kỳ thấp (vài tháng/vài năm một lần hoặc gần như không bao giờ).<br>• <b>Kết hợp:</b> <code>めったに ＋ V-ない / N は めったにない</code>."
            explanation = "Chỉ tần suất xảy ra của sự việc rất thấp, gần như là không có trong điều kiện thông thường."
            examples = @(
                [ordered]@{
                    jp = "<ruby>彼<rt>かれ</rt></ruby>とはめったに<ruby>会<rt>あ</rt></ruby>わない。"
                    vi = "Tôi hiếm khi gặp anh ấy."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_100.1.png"
                },
                [ordered]@{
                    jp = "この<ruby>部屋<rt>へや</rt></ruby>はめったに<ruby>使<rt>つか</rt></ruby>わない。"
                    vi = "Căn phòng này hầu như không sử dụng."
                    img = "Ngữ pháp N3/N3_Ngữ pháp_100.2.png"
                }
            )
            exercises = [ordered]@{
                particles = @(
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>は<ruby>忙<rt>いそが</rt></ruby>しくて、めったに<ruby>実家<rt>じっか</rt></ruby>（　　）<ruby>帰<rt>かえ</rt></ruby>らない。"
                        options = @("へ", "で", "を", "から")
                        answer = 0
                    },
                    [ordered]@{
                        question = "この<ruby>地域<rt>ちいき</rt></ruby>ではめったに<ruby>台風<rt>たいふう</rt></ruby>が（　　）。"
                        options = @("<ruby>来<rt>こ</rt></ruby>ない", "<ruby>来<rt>く</rt></ruby>る", "<ruby>来<rt>き</rt></ruby>た", "<ruby>来<rt>こ</rt></ruby>よう")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>社長<rt>しゃちょう</rt></ruby>が<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>現場<rt>げんば</rt></ruby>に<ruby>来<rt>く</rt></ruby>ることはめったに（　　）。"
                        options = @("ない", "ある", "あった", "あろう")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>はめったに（　　）を<ruby>言<rt>い</rt></ruby>わない<ruby>我慢強<rt>がまんづよ</rt></ruby>い<ruby>人<rt>ひと</rt></ruby>だ。"
                        options = @("<ruby>文句<rt>もんく</rt></ruby>", "<ruby>返事<rt>へんじ</rt></ruby>", "<ruby>挨拶<rt>あいさつ</rt></ruby>", "<ruby>質問<rt>しつもん</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "こんなチャンスはめったに（　　）よ。"
                        options = @("ない", "ある", "あった", "ありそう")
                        answer = 0
                    }
                )
                vocab = @(
                    [ordered]@{
                        question = "この<ruby>珍<rt>めずら</rt></ruby>しい（　　）はめったに<ruby>見<rt>み</rt></ruby>られない。"
                        options = @("<ruby>鳥<rt>とり</rt></ruby>", "<ruby>切符<rt>きっぷ</rt></ruby>", "<ruby>傘<rt>かさ</rt></ruby>", "<ruby>机<rt>つくえ</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>はめったに（　　）を<ruby>引<rt>ひ</rt></ruby>かない<ruby>健康<rt>けんこう</rt></ruby>な<ruby>体<rt>からだ</rt></ruby>だ。"
                        options = @("<ruby>風邪<rt>かぜ</rt></ruby>", "<ruby>電話<rt>でんわ</rt></ruby>", "<ruby>写真<rt>しゃしん</rt></ruby>", "<ruby>辞書<rt>じしょ</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>父<rt>ちち</rt></ruby>が（　　）を<ruby>作<rt>つく</rt></ruby>ることはめったにない。"
                        options = @("<ruby>料理<rt>りょうり</rt></ruby>", "<ruby>天気<rt>てんき</rt></ruby>", "<ruby>季節<rt>きせつ</rt></ruby>", "<ruby>自然<rt>しぜん</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>が（　　）することはめったにない。"
                        options = @("<ruby>遅刻<rt>ちこく</rt></ruby>", "<ruby>散歩<rt>さんぽ</rt></ruby>", "<ruby>掃除<rt>そうじ</rt></ruby>", "<ruby>買い物<rt>かいもの</rt></ruby>")
                        answer = 0
                    },
                    [ordered]@{
                        question = "めったにない（　　）だから、ぜひ<ruby>参加<rt>さんか</rt></ruby>したい。"
                        options = @("<ruby>機会<rt>きかい</rt></ruby>", "<ruby>機械<rt>きかい</rt></ruby>", "<ruby>季節<rt>きせつ</rt></ruby>", "<ruby>景色<rt>けしき</rt></ruby>")
                        answer = 0
                    }
                )
                conjugation = @(
                    [ordered]@{
                        question = "<ruby>私<rt>わたし</rt></ruby>は<ruby>外食<rt>がいしょく</rt></ruby>をめったに（　　）。"
                        options = @("しない", "する", "した", "しよう")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼<rt>かれ</rt></ruby>はめったに<ruby>怒<rt>おこ</rt></ruby>（　　）ない。"
                        options = @("ら", "り", "る", "れ")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>映画館<rt>えいがかん</rt></ruby>へはめったに（　　）ない。"
                        options = @("<ruby>行<rt>い</rt></ruby>か", "<ruby>行<rt>い</rt></ruby>き", "<ruby>行<rt>い</rt></ruby>く", "<ruby>行<rt>い</rt></ruby>け")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>彼女<rt>かのじょ</rt></ruby>はめったに<ruby>泣<rt>な</rt></ruby>（　　）ない<ruby>強<rt>つよ</rt></ruby>い<ruby>人<rt>ひと</rt></ruby>だ。"
                        options = @("か", "き", "く", "け")
                        answer = 0
                    },
                    [ordered]@{
                        question = "<ruby>最近<rt>さいきん</rt></ruby>はテレビをめったに（　　）なくなった。"
                        options = @("<ruby>見<rt>み</rt></ruby>", "<ruby>見<rt>み</rt></ruby>る", "<ruby>見<rt>み</rt></ruby>た", "<ruby>見<rt>み</rt></ruby>よう")
                        answer = 0
                    }
                )
                translation = @(
                    [ordered]@{
                        vi = "Ở vùng này vào mùa đông hiếm khi có tuyết rơi."
                        jp = "この<ruby>地域<rt>ちいき</rt></ruby>では<ruby>冬<rt>ふゆ</rt></ruby>でもめったに<ruby>雪<rt>ゆき</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>らない。"
                    },
                    [ordered]@{
                        vi = "Anh ấy là người rất điềm tĩnh, hiếm khi nổi giận."
                        jp = "<ruby>彼<rt>かれ</rt></ruby>はとても<ruby>穏<rt>おだ</rt></ruby>やかな<ruby>人<rt>ひと</rt></ruby>で、めったに<ruby>怒<rt>おこ</rt></ruby>らない。"
                    },
                    [ordered]@{
                        vi = "Cơ hội tốt như thế này thì hiếm khi có được."
                        jp = "このような<ruby>絶好<rt>ぜっこう</rt></ruby>のチャンスはめったにない。"
                    },
                    [ordered]@{
                        vi = "Dạo gần đây do bận rộn nên tôi hầu như không nấu ăn ở nhà."
                        jp = "<ruby>最近<rt>さいきん</rt></ruby>は<ruby>忙<rt>いそが</rt></ruby>しくて、めったに<ruby>自炊<rt>じすい</rt></ruby>しない。"
                    },
                    [ordered]@{
                        vi = "Tôi hiếm khi đi du lịch nước ngoài vào kỳ nghỉ."
                        jp = "<ruby>連休<rt>れんきゅう</rt></ruby>でもめったに<ruby>海外旅行<rt>かいがいりょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>かない。"
                    }
                )
            }
        }
    )
}

$jsonPath = Join-Path $PSScriptRoot "bai23.json"
$jsonString = $bai23 | ConvertTo-Json -Depth 10
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($jsonPath, $jsonString, $utf8NoBom)
Write-Output "Created bai23.json successfully."
