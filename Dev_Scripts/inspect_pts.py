import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

g_start = text.find('grammarMapData:')
g_end = text.find('// --- NGỮ PHÁP LOGIC ---', g_start)
g_text = text[g_start:g_end]

# Extract each grammar point
# Let's see how lessons are structured
print("Length of g_text:", len(g_text))

# Count questions inside g_text:
q_count = len(re.findall(r'question\s*:', g_text))
print("Total 'question:' in g_text:", q_count)

t_count = len(re.findall(r'translation\s*:', g_text))
print("Total 'translation:' in g_text:", t_count)

# Let's inspect the exercises structure of a few points
m_pts = re.finditer(r'structure\s*:\s*(?P<struct>".*?"|\'.*?\').*?exercises\s*:\s*\{(?P<ex>.*?)\n\s*\},?\s*\n', g_text, re.DOTALL)
pts = list(m_pts)
print("Total points matched with exercises:", len(pts))
for i in range(min(3, len(pts))):
    print(f"\nPoint {i+1}: {pts[i].group('struct')}")
    # count questions in this point
    ex_text = pts[i].group('ex')
    print("  particles:", len(re.findall(r'question\s*:', ex_text)))
    print("  translations:", len(re.findall(r'\{\s*vi\s*:', ex_text)))
