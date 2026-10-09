import sys, re, json, random
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

g_start = text.find('grammarMapData:')
g_end = text.find('// --- NGỮ PHÁP LOGIC ---', g_start)
if g_end == -1:
    g_end = text.find('function initNguphap', g_start)

grammar_text = text[g_start:g_end]

item_regex = re.compile(
    r'\{\s*(?:["\']?question["\']?)\s*:\s*(?P<q>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,'
    r'\s*(?:["\']?options["\']?)\s*:\s*(?P<opts>\[[^\]]*\])\s*,'
    r'\s*(?:["\']?answer["\']?)\s*:\s*(?P<ans>\d+)'
    r'(?P<rest>[^}]*)\}',
    re.DOTALL
)

matches = list(item_regex.finditer(grammar_text))
print(f"Total verified exercise items: {len(matches)}")

dist = {}
errors = 0
for i, m in enumerate(matches):
    q = m.group('q')
    opts_str = m.group('opts')
    ans = int(m.group('ans'))
    dist[ans] = dist.get(ans, 0) + 1
    
    opts_cleaned = opts_str.replace("'", '"')
    try:
        opts = json.loads(opts_cleaned)
        if ans < 0 or ans >= len(opts):
            print(f"Error: Answer out of bounds at Q{i}: ans={ans}, opts={opts}")
            errors += 1
    except Exception as e:
        print(f"Error parsing Q{i}: {e}")
        errors += 1

print(f"Total errors: {errors}")
print(f"Verified Answer Distribution: {dist}")

# Print 10 diverse samples
print("\n--- SAMPLE QUESTIONS ---")
indices = [0, 10, 50, 100, 250, 500, 750, 1000, 1500, 1800]
for idx in indices:
    if idx < len(matches):
        m = matches[idx]
        q = m.group('q')
        opts = json.loads(m.group('opts').replace("'", '"'))
        ans = int(m.group('ans'))
        print(f"Q[{idx+1}]: {q}")
        print(f"    Options: {opts}")
        print(f"    Correct Choice: Option {ans+1} -> '{opts[ans]}'\n")
