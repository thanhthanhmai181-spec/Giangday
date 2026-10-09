import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

# Let's inspect unique options and build an initial mapping
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
print(f"Total MCQs: {len(matches)}")
