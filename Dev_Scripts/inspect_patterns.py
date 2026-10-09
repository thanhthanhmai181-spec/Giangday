import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find all instances of 'particles:', 'vocab:', 'conjugation:'
sections = ['particles', 'vocab', 'conjugation']
for s in sections:
    count = text.count(f'"{s}":') + text.count(f"'{s}':") + text.count(f"{s}:")
    print(f"Key '{s}' occurrences: {count}")

# Let's inspect the formats of exercise items
# Regex matching { ... question ... options ... answer ... }
# Some might have hint before or after answer
item_regex = re.compile(
    r'\{\s*(?:["\']?question["\']?)\s*:\s*(?P<q>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,'
    r'\s*(?:["\']?options["\']?)\s*:\s*(?P<opts>\[.*?\])\s*,'
    r'\s*(?:["\']?answer["\']?)\s*:\s*(?P<ans>\d+)'
    r'(?P<rest>.*?)\}',
    re.DOTALL
)

matches = list(item_regex.finditer(text))
print(f"Total exercise items matched by item_regex: {len(matches)}")

# Check if there are other orderings, like options before question or answer before options
alt_regex = re.compile(
    r'\{\s*(?:["\']?options["\']?)\s*:\s*(?P<opts>\[.*?\])\s*,'
    r'\s*(?:["\']?question["\']?)\s*:\s*(?P<q>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,'
    r'\s*(?:["\']?answer["\']?)\s*:\s*(?P<ans>\d+)'
    r'(?P<rest>.*?)\}',
    re.DOTALL
)
alt_matches = list(alt_regex.finditer(text))
print(f"Total alt exercise items: {len(alt_matches)}")

# Check hint before answer
hint_before_regex = re.compile(
    r'\{\s*(?:["\']?question["\']?)\s*:\s*(?P<q>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,'
    r'\s*(?:["\']?hint["\']?)\s*:\s*(?P<hint>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')\s*,'
    r'\s*(?:["\']?options["\']?)\s*:\s*(?P<opts>\[.*?\])\s*,'
    r'\s*(?:["\']?answer["\']?)\s*:\s*(?P<ans>\d+)'
    r'(?P<rest>.*?)\}',
    re.DOTALL
)
hint_matches = list(hint_before_regex.finditer(text))
print(f"Total hint-before items: {len(hint_matches)}")
