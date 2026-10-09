import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

g_start = text.find('grammarMapData:')
print(f"grammarMapData starts at index: {g_start}")

# Find where grammarMapData ends (before the next key in db or the closing of db)
# Let's see what follows grammarMapData
# We can search for the end of grammarMapData
# Let's look for functions or next section after grammarMapData
# e.g., 'renderDashboard' or 'initNguphap'
g_end = text.find('function initNguphap', g_start)
if g_end == -1:
    g_end = text.find('// --- NGỮ PHÁP LOGIC ---', g_start)
print(f"grammarMapData section ends around: {g_end}")

print(f"Length of grammarMapData text: {g_end - g_start}")
