import sys, re, json, random
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    original_code = f.read()

# Regex to match individual exercise objects
item_regex = re.compile(
    r'\{\s*(?:["\']?question["\']?)\s*:\s*(?P<q>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,'
    r'\s*(?:["\']?options["\']?)\s*:\s*(?P<opts>\[.*?\])\s*,'
    r'\s*(?:["\']?answer["\']?)\s*:\s*(?P<ans>\d+)'
    r'(?P<rest>.*?)\}',
    re.DOTALL
)

matches = list(item_regex.finditer(original_code))
print(f"Total exercises found: {len(matches)}")

# Use a fixed seed for reproducible and completely randomized shuffling
random.seed(20260908)

new_code_parts = []
last_idx = 0

old_ans_dist = {}
new_ans_dist = {}

for i, m in enumerate(matches):
    start, end = m.span()
    new_code_parts.append(original_code[last_idx:start])
    
    q_str = m.group('q')
    opts_str = m.group('opts')
    ans_int = int(m.group('ans'))
    rest_str = m.group('rest')
    
    old_ans_dist[ans_int] = old_ans_dist.get(ans_int, 0) + 1
    
    # Parse options
    opts_cleaned = opts_str.replace("'", '"')
    try:
        opts = json.loads(opts_cleaned)
    except Exception:
        opts = [x.strip().strip('"').strip("'") for x in opts_str.strip('[]').split(',')]
    
    correct_val = opts[ans_int]
    
    # Fully shuffle options
    new_opts = list(opts)
    random.shuffle(new_opts)
    new_ans = new_opts.index(correct_val)
    
    new_ans_dist[new_ans] = new_ans_dist.get(new_ans, 0) + 1
    
    # Sanity checks
    assert new_opts[new_ans] == correct_val, f"Mismatch at {i}: {new_opts[new_ans]} != {correct_val}"
    assert len(new_opts) == len(opts), f"Length mismatch at {i}"
    
    # Format new options JSON string
    new_opts_json = json.dumps(new_opts, ensure_ascii=False)
    
    # Reconstruct the exercise item preserving hint and formatting
    new_item = f'{{ question: {q_str}, options: {new_opts_json}, answer: {new_ans}{rest_str} }}'
    new_code_parts.append(new_item)
    
    last_idx = end

new_code_parts.append(original_code[last_idx:])
transformed_code = ''.join(new_code_parts)

print("\n--- STATS ---")
print(f"Old Answer Distribution: {old_ans_dist}")
print(f"New Answer Distribution: {new_ans_dist}")

# Write updated content to script.js
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(transformed_code)

print("\nSuccessfully updated script.js!")
