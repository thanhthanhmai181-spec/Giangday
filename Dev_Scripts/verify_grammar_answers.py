import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Match all exercise objects: { question: "...", options: [...], answer: X ... }
# Note that some questions might have hints or formatting
# Let's use a regex to capture each { question: ..., options: [...], answer: ... }
# Or parse grammarMapData
pattern = re.compile(r'\{\s*(?:["\']?question["\']?):\s*(".*?"|\'.*?\')\s*,\s*(?:["\']?options["\']?):\s*(\[.*?\])\s*,\s*(?:["\']?answer["\']?):\s*(\d+)(.*?)\}', re.DOTALL)

matches = list(pattern.finditer(content))
print(f"Total exercise matches found: {len(matches)}")

# Let's inspect some samples
correct_options = []
for i, m in enumerate(matches):
    q = m.group(1)
    opts_raw = m.group(2)
    ans = int(m.group(3))
    # Parse options
    try:
        # replace single quotes with double quotes for json parse if needed
        opts_cleaned = opts_raw.replace("'", '"')
        opts = json.loads(opts_cleaned)
        correct_val = opts[ans]
        correct_options.append((q, opts, ans, correct_val))
    except Exception as e:
        print(f"Error parsing options for match {i}: {opts_raw} -> {e}")

print(f"Successfully parsed {len(correct_options)} questions.")
print("\nSample 15 questions with their correct answers:")
for i in range(min(15, len(correct_options))):
    q, opts, ans, cval = correct_options[i]
    print(f"Q{i+1}: {q}")
    print(f"   Options: {opts}")
    print(f"   Answer index: {ans} -> Correct Value: '{cval}'")
