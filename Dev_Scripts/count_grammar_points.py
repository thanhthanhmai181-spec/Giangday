import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

g_start = text.find('grammarMapData:')
g_end = text.find('// --- NGỮ PHÁP LOGIC ---', g_start)
g_text = text[g_start:g_end]

# Find all items that have structure:
structs = re.findall(r'structure\s*:\s*(".*?"|\'.*?\')', g_text)
print(f"Total grammar points (structures): {len(structs)}")

# Find how many have exercises
has_ex = re.findall(r'exercises\s*:\s*\{', g_text)
print(f"Total points with exercises: {len(has_ex)}")
