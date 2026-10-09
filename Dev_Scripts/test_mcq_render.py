import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

# Let's test generating explanation for 5 diverse questions and 5 translation questions
sample_ex = {
    "question": "<ruby>両親<rt>りょうしん</rt></ruby>が<ruby>元気<rt>げんき</rt></ruby>な（　　）、<ruby>家<rt>いえ</rt></ruby>を<ruby>建<rt>た</rt></ruby>ててあげたい。",
    "options": ["までに", "あいだに", "からに", "うちに"],
    "answer": 3
}
grammar_point = {
    "structure": "〜うちに",
    "meaning": "Trong khi, nhân lúc",
    "usage": "Dùng khi muốn tranh thủ làm việc gì đó trước khi trạng thái thay đổi."
}

print("Testing MCQ logic...")
# Options meaning
opt_meanings = {
    "までに": "Trước khi / muộn nhất là (hạn chót hoàn thành hành động)",
    "あいだに": "Trong lúc / trong khi (hành động ngắn diễn ra xen vào)",
    "からに": "Vì / Kể từ khi",
    "うちに": "Nhân lúc / trong khi (tranh thủ trước khi trạng thái thay đổi)"
}

print("Options meanings:")
for i, opt in enumerate(sample_ex["options"]):
    is_correct = (i == sample_ex["answer"])
    marker = "✓ [ĐÚNG]" if is_correct else " "
    print(f"  {i+1}. {opt} {marker} : {opt_meanings.get(opt)}")

print("\nReason:")
print(f"  Đáp án đúng là {sample_ex['answer']+1} ({sample_ex['options'][sample_ex['answer']]}).")
print(f"  Mẫu câu '{grammar_point['structure']}' ({grammar_point['meaning']}) kết hợp với tính từ đuôi na '元気な' thành '元気なうちに' (nhân lúc còn khỏe mạnh). {grammar_point['usage']}")
print("  Dịch câu: 'Nhân lúc bố mẹ còn khỏe mạnh, tôi muốn xây nhà cho bố mẹ.'")
