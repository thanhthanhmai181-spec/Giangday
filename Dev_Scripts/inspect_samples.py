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

# Let's inspect 5 particles, 5 vocab, 5 conjugation
for i in [0, 1, 2, 10, 15, 20, 25, 30, 40, 50, 60, 70]:
    if i < len(matches):
        m = matches[i]
        print(f"Sample {i+1}:")
        print("  Q:", m.group('q'))
        print("  Opts:", m.group('opts'))
        print("  Ans:", m.group('ans'))
        print("  Rest:", m.group('rest'))

# Let's also inspect translations
trans_regex = re.compile(r'\{\s*(?:["\']?vi["\']?)\s*:\s*(?P<vi>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,\s*(?:["\']?jp["\']?)\s*:\s*(?P<jp>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')(?P<rest>[^}]*)\}', re.DOTALL)
t_matches = list(trans_regex.finditer(g_text))
print(f"\nTotal translations: {len(t_matches)}")
for i in range(min(5, len(t_matches))):
    print(f"Trans {i+1}:")
    print("  Vi:", t_matches[i].group('vi'))
    print("  Jp:", t_matches[i].group('jp'))
