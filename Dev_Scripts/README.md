# 🛠 Hướng Dẫn Sử Dụng Bộ Công Cụ Quản Lý Ngữ Pháp N3 (Dev Tools)

Thư mục này chứa bộ công cụ chuẩn hóa để phát triển, quản lý và thêm các bài ngữ pháp vào ứng dụng mà không gây lỗi cú pháp hoặc làm hỏng dữ liệu.

---

## 📂 Danh mục tệp tin

| Tệp tin | Chức năng |
| :--- | :--- |
| **`templates/lesson_template.json`** | File mẫu chuẩn JSON cho 1 bài ngữ pháp (đầy đủ lý thuyết, 5 ví dụ Furigana, 4 dạng bài tập). |
| **`validate_grammar.ps1`** | Script thẩm định dữ liệu JSON, kiểm tra thẻ `<ruby>`, kiểm tra đường dẫn ảnh và độ toàn vẹn của `script.js`. |
| **`add_grammar_lesson.ps1`** | Công cụ nạp bài học an toàn: Tự động sao lưu -> Thẩm định -> Chèn UTF-8 -> Kiểm tra cú pháp -> Tự động phục hồi nếu lỗi -> Tăng Cache-busting. |
| **`antigravity_handover.md`** | Tài liệu bàn giao toàn diện về dự án. |
| **`all_vocab_30_lessons.json`** | Dữ liệu gốc hoàn chỉnh 30 bài từ vựng N3. |

---

## 🚀 Cách sử dụng nhanh

### 1. Kiểm tra tính toàn vẹn của file dữ liệu
```powershell
powershell -NoProfile -ExecutionPolicy Unrestricted -File .\Dev_Scripts\validate_grammar.ps1 -JsonFile .\Dev_Scripts\templates\lesson_template.json
```

### 2. Thêm bài học mới vào ứng dụng
```powershell
powershell -NoProfile -ExecutionPolicy Unrestricted -File .\Dev_Scripts\add_grammar_lesson.ps1 -JsonFile .\Dev_Scripts\templates\lesson_template.json
```
*(Hoặc thay bằng file JSON bài học mới mà bạn đã biên soạn).*
