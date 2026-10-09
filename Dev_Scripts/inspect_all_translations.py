import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

g_start = text.find('grammarMapData:')
g_end = text.find('// --- NGỮ PHÁP LOGIC ---', g_start)
g_text = text[g_start:g_end]

trans_regex = re.compile(r'\{\s*(?:["\']?vi["\']?)\s*:\s*(?P<vi>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,\s*(?:["\']?jp["\']?)\s*:\s*(?P<jp>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')(?P<rest>[^}]*)\}', re.DOTALL)
t_matches = list(trans_regex.finditer(g_text))
print(f"Total translation sentences: {len(t_matches)}")
for i in range(min(10, len(t_matches))):
    print(f"[{i+1}] VI: {t_matches[i].group('vi')}")
    print(f"     JP: {t_matches[i].group('jp')}")
