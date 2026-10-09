import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

g_start = text.find('grammarMapData:')
g_end = text.find('// --- NGỮ PHÁP LOGIC ---', g_start)
g_text = text[g_start:g_end]

trans_regex = re.compile(r'\{\s*(?:["\']?vi["\']?)\s*:\s*(?P<vi>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,\s*(?:["\']?jp["\']?)\s*:\s*(?P<jp>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')(?P<rest>[^}]*)\}', re.DOTALL)
t_matches = list(trans_regex.finditer(g_text))

print(f"Total translation matches: {len(t_matches)}")

# Test extracting ruby tags and words from the first 10 translations
for i in range(10):
    vi = json.loads(t_matches[i].group('vi'))
    jp = json.loads(t_matches[i].group('jp'))
    
    # Extract ruby tags
    rubies = re.findall(r'<ruby>(.*?)<rt>(.*?)</rt></ruby>', jp)
    print(f"\n[{i+1}] VI: {vi}")
    print(f"     JP: {jp}")
    print(f"     Rubies: {rubies}")
