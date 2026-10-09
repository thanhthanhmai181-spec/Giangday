import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

vocab_dict = {}

# 1. From dictionary in script.js
dict_pos = text.find('dictionary:')
kaiwa_pos = text.find('kaiwa:', dict_pos)
dict_str = text[dict_pos:kaiwa_pos]

# Match examples: <strong><ruby>学校<rt>がっこう</rt></ruby></strong> (Trường học)
examples = re.findall(r'<strong><ruby>(.*?)<rt>.*?</rt></ruby></strong>\s*\((.*?)\)', dict_str)
for word, mean in examples:
    vocab_dict[word] = mean

# Also match kanji meaning
kanjis = re.findall(r'"kanji":\s*"(.*?)".*?"meaning":\s*"(.*?)"', dict_str)
for k, m in kanjis:
    vocab_dict[k] = m

print(f"Collected from dictionary: {len(vocab_dict)} entries")

# 2. From dokkai.js
try:
    with open('dokkai.js', 'r', encoding='utf-8') as f:
        d_text = f.read()
    d_vocab = re.findall(r'\{\s*"word":\s*"(.*?)",\s*"reading":\s*"(.*?)",\s*"meaning":\s*"(.*?)"\s*\}', d_text)
    for w, r, m in d_vocab:
        clean_w = re.sub(r'<[^>]*>', '', w).strip()
        vocab_dict[clean_w] = m
        if r:
            vocab_dict[r] = m
    print(f"Total collected after dokkai.js: {len(vocab_dict)} entries")
except Exception as e:
    print("Error reading dokkai.js:", e)

# 3. From choukai.js
try:
    with open('choukai.js', 'r', encoding='utf-8') as f:
        c_text = f.read()
    c_vocab = re.findall(r'\{\s*"word":\s*"(.*?)",\s*"reading":\s*"(.*?)",\s*"meaning":\s*"(.*?)"\s*\}', c_text)
    for w, r, m in c_vocab:
        clean_w = re.sub(r'<[^>]*>', '', w).strip()
        vocab_dict[clean_w] = m
        if r:
            vocab_dict[r] = m
    print(f"Total collected after choukai.js: {len(vocab_dict)} entries")
except Exception as e:
    print("Error reading choukai.js:", e)
