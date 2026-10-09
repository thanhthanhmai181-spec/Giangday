import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

g_start = text.find('grammarMapData:')
g_end = text.find('// --- NGỮ PHÁP LOGIC ---', g_start)
g_text = text[g_start:g_end]

# Inspect question fields
# Match { ... question ... }
item_regex = re.compile(
    r'\{\s*(?:["\']?question["\']?)\s*:\s*(?P<q>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,'
    r'\s*(?:["\']?options["\']?)\s*:\s*(?P<opts>\[[^\]]*\])\s*,'
    r'\s*(?:["\']?answer["\']?)\s*:\s*(?P<ans>\d+)'
    r'(?P<rest>[^}]*)\}',
    re.DOTALL
)

matches = list(item_regex.finditer(g_text))
print(f"Total multiple-choice matches: {len(matches)}")
for i in range(min(5, len(matches))):
    print(f"MCQ {i+1}: {matches[i].group(0)}")

# Check translation items
trans_regex = re.compile(r'\{\s*(?:["\']?vi["\']?)\s*:\s*(?P<vi>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,\s*(?:["\']?jp["\']?)\s*:\s*(?P<jp>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')(?P<rest>[^}]*)\}', re.DOTALL)
t_matches = list(trans_regex.finditer(g_text))
print(f"\nTotal translation matches: {len(t_matches)}")
for i in range(min(5, len(t_matches))):
    print(f"Trans {i+1}: {t_matches[i].group(0)}")

# Also check what other keys exist in db:
db_keys = re.findall(r'(\b[a-zA-Z0-9_]+)\s*:\s*\{', text[:g_start])
print(f"\nDB keys before grammarMapData: {db_keys[:15]}")
