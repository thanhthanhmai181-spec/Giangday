import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

# Sample test for building the explanation resolver
particles_dict = {
    "は": "Trợ từ chủ đề câu (thì, là, ở)",
    "が": "Trợ từ chỉ chủ ngữ, tác nhân, đối tượng của tính từ/thể khả năng",
    "を": "Trợ từ chỉ tân ngữ trực tiếp (đối tượng bị tác động)",
    "に": "Trợ từ chỉ thời gian, nơi chốn đến/tồn tại, mục đích, đối tượng tiếp nhận",
    "で": "Trợ từ chỉ nơi diễn ra hành động, phương tiện, cách thức, nguyên nhân",
    "へ": "Trợ từ chỉ hướng di chuyển (về phía, hướng tới)",
    "と": "Trợ từ 'và' (liệt kê toàn bộ), hoặc 'cùng với', nội dung trích dẫn",
    "も": "Trợ từ 'cũng', hoặc nhấn mạnh 'đến mức / ngay cả'",
    "から": "Trợ từ 'từ' (thời gian, địa điểm) hoặc 'vì/do' (nguyên nhân)",
    "まで": "Trợ từ 'đến', 'cho đến' (thời gian, địa điểm)",
    "までに": "Trợ từ 'trước khi / muộn nhất là' (hạn chót thực hiện)",
    "より": "Trợ từ so sánh 'hơn so với'",
    "ほど": "Trợ từ 'đến mức', 'như là', 'chừng / khoảng'",
    "ばかり": "Trợ từ 'toàn là', 'chỉ toàn', hoặc 'vừa mới xong'",
    "だけ": "Trợ từ 'chỉ' (giới hạn phạm vi, mức độ)",
    "しか": "Trợ từ 'chỉ' (luôn đi với thể phủ định 〜しか...ない)",
    "なら": "Nếu là (điều kiện giả định)",
    "でも": "Dù là / hay là / ngay cả...",
    "こそ": "Chính là / nhất định (nhấn mạnh)",
    "さえ": "Ngay cả / thậm chí..."
}

print(f"Particles defined: {len(particles_dict)}")
