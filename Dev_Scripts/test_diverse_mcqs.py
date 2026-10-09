import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

g_start = text.find('grammarMapData:')
g_end = text.find('// --- NGỮ PHÁP LOGIC ---', g_start)
g_text = text[g_start:g_end]

# Let's inspect 20 random MCQs from different parts of grammarMapData
item_regex = re.compile(
    r'\{\s*(?:["\']?question["\']?)\s*:\s*(?P<q>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,'
    r'\s*(?:["\']?options["\']?)\s*:\s*(?P<opts>\[[^\]]*\])\s*,'
    r'\s*(?:["\']?answer["\']?)\s*:\s*(?P<ans>\d+)'
    r'(?P<rest>[^}]*)\}',
    re.DOTALL
)

matches = list(item_regex.finditer(g_text))
print(f"Total MCQs: {len(matches)}")

indices = [0, 5, 20, 50, 100, 200, 300, 500, 800, 1000, 1200, 1500, 1800]
for idx in indices:
    m = matches[idx]
    q = json.loads(m.group('q'))
    opts = json.loads(m.group('opts').replace("'", '"'))
    ans = int(m.group('ans'))
    print(f"\n[MCQ {idx+1}]")
    print(f"  Q: {q}")
    print(f"  Opts: {opts}")
    print(f"  Ans: {ans} ({opts[ans]})")
