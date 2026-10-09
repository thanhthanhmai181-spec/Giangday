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
all_options = set()
for m in matches:
    opts = json.loads(m.group('opts').replace("'", '"'))
    for o in opts:
        # strip ruby tags if any
        clean_o = re.sub(r'<[^>]*>', '', o).strip()
        all_options.add(clean_o)

print(f"Total unique option strings across all 1884 questions: {len(all_options)}")
# Print first 50
print("First 50 unique options:")
print(list(all_options)[:50])
