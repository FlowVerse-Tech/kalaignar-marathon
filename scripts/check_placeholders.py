import glob
import re

total_usages = 0
all_have_src = True

for f in glob.glob('src/**/*.tsx', recursive=True):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    matches = re.findall(r'<ImagePlaceholder\b([\s\S]*?)/>', c)
    if matches:
        print(f"=== {f} ({len(matches)} usages) ===")
        for i, m in enumerate(matches, 1):
            total_usages += 1
            has_src = 'src=' in m
            if not has_src:
                all_have_src = False
            label_m = re.search(r'label=([^\n/>]+)', m)
            src_m = re.search(r'src=([^\n/>]+)', m)
            label = label_m.group(1).strip() if label_m else "N/A"
            src_val = src_m.group(1).strip() if src_m else "MISSING"
            print(f"  [{i}] has_src: {has_src} | src: {src_val} | label: {label}")

print(f"\nTotal ImagePlaceholder usages across app: {total_usages}")
print(f"All have src: {all_have_src}")
