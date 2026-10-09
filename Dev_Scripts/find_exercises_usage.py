import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Search for any references to .exercises, particles, conjugation, translation
lines = text.splitlines()
for idx, l in enumerate(lines):
    if 'exercises' in l and not l.strip().startswith('exercises:'):
        print(f"L{idx+1}: {l.strip()}")
