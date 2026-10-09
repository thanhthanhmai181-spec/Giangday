import sys, re, json, random
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    code = f.read()

# Let's inspect where grammarMapData is in script.js
g_pos = code.find('grammarMapData:')
if g_pos == -1:
    print("grammarMapData not found!")
    sys.exit(1)

print(f"Found grammarMapData at character {g_pos}")

# Let's test a regex that safely matches every exercise question object inside grammarMapData
# Exercises have format:
# {
#     question: "...",
#     options: ["...", "...", ...],
#     answer: 0,
#     hint: "..." (optional)
# }
# Or on a single line: { question: "...", options: ["...", ...], answer: 0 }

# Let's write a robust parser for exercise items
# We can find all matches of question, options, answer inside grammarMapData
