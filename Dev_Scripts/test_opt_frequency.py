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

# Collect all unique options
unique_opts = {}
for m in matches:
    opts = json.loads(m.group('opts').replace("'", '"'))
    q = m.group('q')
    ans = int(m.group('ans'))
    for idx, o in enumerate(opts):
        clean_o = re.sub(r'<[^>]*>', '', o).strip()
        if clean_o not in unique_opts:
            unique_opts[clean_o] = []
        unique_opts[clean_o].append((q, idx == ans))

print(f"Total unique clean options: {len(unique_opts)}")

# Sort by frequency
freq = sorted(unique_opts.items(), key=lambda x: len(x[1]), reverse=True)
print("\nTop 40 most frequent options:")
for o, occ in freq[:40]:
    print(f"  '{o}': {len(occ)} occurrences")
