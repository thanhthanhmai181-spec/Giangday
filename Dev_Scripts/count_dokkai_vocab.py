import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('dokkai.js', 'r', encoding='utf-8') as f:
    text = f.read()

words = re.findall(r'"word":\s*"(.*?)",\s*"hiragana":\s*"(.*?)",\s*"meaning":\s*"(.*?)"', text)
print(f"Total vocabulary items in dokkai.js: {len(words)}")
for w, h, m in words[:10]:
    print(f"  {w} ({h}): {m}")
