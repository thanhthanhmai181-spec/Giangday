import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'answer:\s*205[^\d]', text)
if m:
    start = max(0, m.start() - 300)
    end = min(len(text), m.end() + 300)
    print("MATCH 205:")
    print(text[start:end])
else:
    print("Not found")
