import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

g_start = text.find('grammarMapData:')
g_end = text.find('// --- NGỮ PHÁP LOGIC ---', g_start)
if g_end == -1:
    g_end = text.find('function initNguphap', g_start)

grammar_text = text[g_start:g_end]
print(f"Grammar text length: {len(grammar_text)}")

# Let's match question items. Notice: options is [ ... ], without matching outside the question object.
# To avoid spanning across questions, we can match:
# {\s*question:\s*"[^"]*",\s*options:\s*\[[^\]]*\],\s*answer:\s*\d+[^}]*\}
item_regex = re.compile(
    r'\{\s*(?:["\']?question["\']?)\s*:\s*(?P<q>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,'
    r'\s*(?:["\']?options["\']?)\s*:\s*(?P<opts>\[[^\]]*\])\s*,'
    r'\s*(?:["\']?answer["\']?)\s*:\s*(?P<ans>\d+)'
    r'(?P<rest>[^}]*)\}',
    re.DOTALL
)

matches = list(item_regex.finditer(grammar_text))
print(f"Total exercise items found inside grammarMapData: {len(matches)}")

errors = 0
ans_dist = {}
for i, m in enumerate(matches):
    q = m.group('q')
    opts_str = m.group('opts')
    ans = int(m.group('ans'))
    ans_dist[ans] = ans_dist.get(ans, 0) + 1
    try:
        opts_cleaned = opts_str.replace("'", '"')
        opts = json.loads(opts_cleaned)
        if ans < 0 or ans >= len(opts):
            print(f"Index out of range at {i}: ans={ans}, opts={opts}")
            errors += 1
    except Exception as e:
        print(f"Parse error at {i}: {opts_str} -> {e}")
        errors += 1

print(f"Errors found: {errors}")
print(f"Answer distribution inside grammarMapData: {ans_dist}")

# Show the first 5 and last 5
print("\nFirst 5:")
for i in range(min(5, len(matches))):
    print(matches[i].group(0))

print("\nLast 5:")
for i in range(max(0, len(matches) - 5), len(matches)):
    print(matches[i].group(0))
