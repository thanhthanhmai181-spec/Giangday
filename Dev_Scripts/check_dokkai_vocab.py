import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('dokkai.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.findall(r'"vocabulary":\s*\[(.*?)\]', text, re.DOTALL)
print(f"Found {len(m)} vocabulary sections in dokkai.js")
if m:
    print("Sample vocabulary item:")
    print(m[0][:300])
