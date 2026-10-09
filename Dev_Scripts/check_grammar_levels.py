import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

g_start = text.find('grammarMapData:')
g_end = text.find('// --- NGỮ PHÁP LOGIC ---', g_start)
g_text = text[g_start:g_end]

lines = g_text.splitlines()
for idx, line in enumerate(lines):
    m = re.match(r'^\s*["\']?(N[1-5])["\']?\s*:\s*\[', line)
    if m:
        print(f"Line {idx+1}: {m.group(0)}")
