import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

dict_pos = text.find('dictionary:')
print("dictionary pos:", dict_pos)
# find next key
kaiwa_pos = text.find('kaiwa:', dict_pos)
dict_str = text[dict_pos:kaiwa_pos].strip().rstrip(',')
# Let's see first 500 chars of dict_str
print("First 500 chars of dictionary:")
print(dict_str[:500])
