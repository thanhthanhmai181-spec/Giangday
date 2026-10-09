import sys, re, json, random
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

g_start = text.find('grammarMapData:')
g_end = text.find('// --- NGỮ PHÁP LOGIC ---', g_start)
if g_end == -1:
    g_end = text.find('function initNguphap', g_start)

grammar_text = text[g_start:g_end]
print(f"Grammar text length: {len(grammar_text)}")

item_regex = re.compile(
    r'\{\s*(?:["\']?question["\']?)\s*:\s*(?P<q>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,'
    r'\s*(?:["\']?options["\']?)\s*:\s*(?P<opts>\[[^\]]*\])\s*,'
    r'\s*(?:["\']?answer["\']?)\s*:\s*(?P<ans>\d+)'
    r'(?P<rest>[^}]*)\}',
    re.DOTALL
)

matches = list(item_regex.finditer(grammar_text))
print(f"Total exercise items found: {len(matches)}")

random.seed(20260908)

new_grammar_parts = []
last_idx = 0

old_dist = {}
new_dist = {}

for i, m in enumerate(matches):
    start, end = m.span()
    new_grammar_parts.append(grammar_text[last_idx:start])
    
    q_str = m.group('q')
    opts_str = m.group('opts')
    ans_int = int(m.group('ans'))
    rest_str = m.group('rest')
    
    old_dist[ans_int] = old_dist.get(ans_int, 0) + 1
    
    opts_cleaned = opts_str.replace("'", '"')
    try:
        opts = json.loads(opts_cleaned)
    except Exception:
        opts = [x.strip().strip('"').strip("'") for x in opts_str.strip('[]').split(',')]
    
    correct_val = opts[ans_int]
    
    # Shuffle options randomly
    new_opts = list(opts)
    random.shuffle(new_opts)
    new_ans = new_opts.index(correct_val)
    
    new_dist[new_ans] = new_dist.get(new_ans, 0) + 1
    
    # Verify correctness
    assert new_opts[new_ans] == correct_val, f"Verification failed for Q{i}: {correct_val} vs {new_opts[new_ans]}"
    assert len(new_opts) == len(opts), f"Length changed for Q{i}"
    
    new_opts_json = json.dumps(new_opts, ensure_ascii=False)
    
    # Preserve indent/structure
    new_item = f'{{ question: {q_str}, options: {new_opts_json}, answer: {new_ans}{rest_str} }}'
    new_grammar_parts.append(new_item)
    
    last_idx = end

new_grammar_parts.append(grammar_text[last_idx:])
new_grammar_text = ''.join(new_grammar_parts)

print("\n--- DISTRIBUTION STATS ---")
print(f"Old distribution: {old_dist}")
print(f"New distribution: {new_dist}")

# Reassemble the full script.js
new_full_text = text[:g_start] + new_grammar_text + text[g_end:]

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(new_full_text)

print("\nSuccessfully updated script.js with randomized and balanced options/answers!")
