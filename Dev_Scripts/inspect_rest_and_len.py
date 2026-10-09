import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

item_regex = re.compile(
    r'\{\s*(?:["\']?question["\']?)\s*:\s*(?P<q>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,'
    r'\s*(?:["\']?options["\']?)\s*:\s*(?P<opts>\[.*?\])\s*,'
    r'\s*(?:["\']?answer["\']?)\s*:\s*(?P<ans>\d+)'
    r'(?P<rest>.*?)\}',
    re.DOTALL
)

matches = list(item_regex.finditer(text))
rest_types = set()
for m in matches:
    rest = m.group('rest').strip()
    if rest:
        rest_types.add(rest)

print(f"Non-empty rest fields count: {len(rest_types)}")
for r in list(rest_types)[:10]:
    print("REST SAMPLE:", repr(r))

# Let's check how many options each question has (e.g. 4 options, 3 options, etc.)
opt_len_dist = {}
for m in matches:
    opts_str = m.group('opts')
    try:
        opts_cleaned = opts_str.replace("'", '"')
        opts = json.loads(opts_cleaned)
        opt_len_dist[len(opts)] = opt_len_dist.get(len(opts), 0) + 1
    except Exception as e:
        print(f"Error parsing {opts_str}: {e}")

print("Options length distribution:", opt_len_dist)
