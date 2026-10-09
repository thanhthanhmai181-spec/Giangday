import sys, re, json, random
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Find all exercise patterns
# e.g., { question: "...", options: ["...", "..."], answer: 0 }
# Note options might span across lines or contain single/double quotes
pattern = re.compile(r'\{\s*question:\s*(".*?"|\'.*?\')\s*,\s*options:\s*(\[.*?\])\s*,\s*answer:\s*(\d+)\s*\}', re.DOTALL)
matches = list(pattern.finditer(text))
print(f"Total exercises found with regex: {len(matches)}")

ans_dist = {}
for m in matches:
    ans = int(m.group(3))
    ans_dist[ans] = ans_dist.get(ans, 0) + 1

print("Answer distribution:", ans_dist)

# Show first 10
for i, m in enumerate(matches[:15]):
    print(f"[{i}] {m.group(0)}")
