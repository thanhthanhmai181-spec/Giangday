import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('choukai.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.findall(r'"vocab":\s*\[(.*?)\]', text, re.DOTALL)
print(f"Found {len(m)} vocab sections in choukai.js")
if m:
    print("Sample vocab item in choukai.js:")
    print(m[0][:300])
