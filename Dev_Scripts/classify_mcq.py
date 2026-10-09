import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

g_start = text.find('grammarMapData:')
g_end = text.find('// --- NGỮ PHÁP LOGIC ---', g_start)
g_text = text[g_start:g_end]

item_regex = re.compile(
    r'\{\s*(?:["\']?question["\']?)\s*:\s*(?P<q>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,'
    r'\s*(?:["\']?options["\']?)\s*:\s*(?P<opts>\[[^\]]*\])\s*,'
    r'\s*(?:["\']?answer["\']?)\s*:\s*(?P<ans>\d+)'
    r'(?P<rest>[^}]*)\}',
    re.DOTALL
)

matches = list(item_regex.finditer(g_text))
print(f"Total MCQ questions: {len(matches)}")

# Let's see what kinds of options we have
single_char_opts = 0
particle_opts = 0
word_opts = 0

for m in matches:
    opts = json.loads(m.group('opts').replace("'", '"'))
    avg_len = sum(len(re.sub(r'<[^>]*>', '', o)) for o in opts) / len(opts)
    if avg_len <= 1.5:
        single_char_opts += 1
    elif avg_len <= 4:
        particle_opts += 1
    else:
        word_opts += 1

print(f"Single char/particle (<=1.5 chars): {single_char_opts}")
print(f"Short phrases/particles (<=4 chars): {particle_opts}")
print(f"Words/conjugations (>4 chars): {word_opts}")
