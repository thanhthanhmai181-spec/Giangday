import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's see what keys are defined in the main database object
m_db = re.search(r'const\s+db\s*=\s*\{(?P<body>.*?)\n\};', text, re.DOTALL)
if m_db:
    keys = re.findall(r'^\s*([a-zA-Z0-9_]+)\s*:', m_db.group('body'), re.MULTILINE)
    print("Top level keys in db:", keys)
else:
    print("db definition not matched with regex")
