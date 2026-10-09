# 🚀 Antigravity Project Handover: Gamified Japanese Learning App

Chào Antigravity! Đây là tài liệu tóm tắt toàn bộ bối cảnh, logic cấu trúc và quy trình làm việc chuẩn của dự án "Ứng dụng học tiếng Nhật Gamification" để bạn có thể tiếp quản và hỗ trợ User một cách chuẩn xác và mượt mà nhất.

---

## 1. Tổng quan dự án (Project Overview)
- **Mục tiêu:** Xây dựng một Web App học tiếng Nhật (Kanji, Từ vựng, Ngữ pháp, Đọc hiểu, Nghe hiểu N5-N3) trên nền tảng Single Page Application (SPA).
- **Tech Stack:** Thuần HTML, CSS (Vanilla), JS (Vanilla). Không dùng Framework.
- **Tính năng cốt lõi:** 
  - **Bản đồ học tập (Treasure Map)** trực quan, cuộn ngang với hiệu ứng Parallax.
  - **Flashcard 3D & Trình chiếu bài giảng** chi tiết chứa từ vựng, Hán tự, Ngữ pháp, ý nghĩa, và ví dụ.
  - **Ngữ pháp tương tác toàn màn hình:** Lý thuyết -> 5 Slide ví dụ ảnh (bấm mở nghĩa/furigana) -> 4 Dạng bài tập (Điền trợ từ, Chọn từ vựng, Chia thể, Dịch câu) kèm bảng phân biệt cấu trúc tương đồng.
  - **Tích hợp Text-to-Speech (SpeechSynthesis API)** để phát âm tiếng Nhật chuẩn.
  - **Chức năng Switch Tab & Switch Level (N5, N4, N3)** và ẩn/hiện Sidebar.

## 2. Tiêu chuẩn UI/UX & Sở thích của User
- **Giao diện:** Thiết kế theo phong cách **Glassmorphism** (kính mờ), Dark theme.
- **Màu sắc chủ đạo:** Tông màu tối, sử dụng màu **Vàng kim (`#ffd700`)** làm màu nhấn (highlight) cho các thành phần quan trọng (tiêu đề, tên node, từ loại) và **Xanh Neon (`#00f3ff`)**.
- **Quy tắc hiển thị văn bản:**
  - **TUYỆT ĐỐI KHÔNG sử dụng Romaji** ở bất kỳ đâu.
  - Luôn highlight từ loại (VD: `[Danh từ]`, `[Động từ]`, `[Tính từ đuôi な]`) bằng màu vàng kim.
  - **BẮT BUỘC** sử dụng thẻ `<ruby>` và `<rt>` chuẩn xác để hiển thị Furigana cho TẤT CẢ các từ vựng và câu ví dụ tiếng Nhật. (VD: `<ruby>漢字<rt>かんじ</rt></ruby>`).
- **Layout Bản đồ:** Đã xử lý CSS (trong `.map-background` và `.treasure-map-area`) để map tự động mở rộng theo chiều ngang (width: max-content), các node (bài học) xếp so le (ziczac) và background được cố định (fixed) để tạo hiệu ứng Parallax khi cuộn. KHÔNG được phá vỡ cấu trúc CSS này.

## 3. Cấu trúc thư mục & Tệp tin quan trọng
- `index.html`: Chứa khung giao diện chính. Có cơ chế **Cache Busting** (`script.js?v=...` và `styles.css?v=...`) bắt buộc phải tăng version mỗi khi cập nhật file js/css.
- `styles.css`: Chứa toàn bộ CSS.
- `script.js`: Chứa data gốc (`db`: `vocab`, `kanjiData`, `grammarMapData`, `dokkaiData`, `choukaiData`, `kaiwaData`) và logic hiển thị.
- `assets/`: Thư mục chứa hình ảnh chung (ảnh nền, icon bản đồ, ảnh từ vựng).
- `Ngữ pháp N3/`: Thư mục chứa ảnh ví dụ minh họa ngữ pháp N3 (`N3_Ngữ pháp_X.1.png` -> `X.5.png`).
- `Hán tự N3/`: Thư mục chứa ảnh minh họa Kanji N3 (`N3_hán tự_...`).
- `Dev_Scripts/`: Bộ công cụ tự động hóa, kiểm tra cú pháp và script hỗ trợ.
- `backups/`: Thư mục lưu trữ các bản sao lưu code an toàn.

## 4. Tiến độ hiện tại của các phân hệ (Current Status)
- **Từ vựng N3:** Đã hoàn thành **đủ toàn bộ 30 bài** (880+ từ vựng từ ID 1 đến 880+ trong `db.vocab`).
- **Hán tự N3:** 333 chữ Hán tự, 42 bài tài liệu PDF.
- **Ngữ pháp N3:**
  - Đã nạp vào `script.js`: **Bài 1 đến Bài 9** (34 cấu trúc).
  - Đã có đầy đủ ảnh minh họa trong `Ngữ pháp N3/` từ **Bài 1 đến Bài 35**.
  - **Nhiệm vụ tiếp theo:** Thêm ngữ pháp từ **Bài 10 trở đi** bằng bộ công cụ `add_grammar_lesson.ps1` hoặc Skill `n3-grammar-manager`.

## 5. Quy trình thêm Ngữ Pháp Chuẩn Không Lỗi (SOP)
1. **Chuẩn bị file JSON bài học:** Tạo file theo mẫu `Dev_Scripts/templates/lesson_template.json`.
2. **Kiểm tra cú pháp & tính toàn vẹn (Validate):**
   ```powershell
   powershell -NoProfile -ExecutionPolicy Unrestricted -File .\Dev_Scripts\validate_grammar.ps1 -JsonFile path_to_file.json
   ```
3. **Thêm vào hệ thống (Safe Inject):**
   ```powershell
   powershell -NoProfile -ExecutionPolicy Unrestricted -File .\Dev_Scripts\add_grammar_lesson.ps1 -JsonFile path_to_file.json
   ```
   *Công cụ sẽ tự động sao lưu `script.js` vào `backups/`, kiểm tra dữ liệu, chèn bài học vào đúng vị trí UTF-8, xác thực JavaScript và tự động tăng số version cache trong `index.html`.*
