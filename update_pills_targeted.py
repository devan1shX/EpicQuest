import os
import re

NEW_PILL_CLASS = "inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6"
NEW_PILL_CLASS_INLINE = "inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit"

files_to_fix = []

# Collect all tsx files
for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx') and 'report' not in file:
            files_to_fix.append(os.path.join(root, file))

targets = [
    ("Programme Deep Dive", NEW_PILL_CLASS),
    ("50+ SUCCESS STORIES", NEW_PILL_CLASS),
    ("SUCCESS STORIES (TESTIMONIALS)", NEW_PILL_CLASS),
    ("STUDENT EXPERIENCES", NEW_PILL_CLASS),
    ("EpicQuest Intellect Hub", NEW_PILL_CLASS_INLINE),
    ("FELLOWSHIP MILESTONES", NEW_PILL_CLASS),
]

for filepath in files_to_fix:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    for text, new_class in targets:
        # Look for the block containing this text.
        # It's usually <span className="...">\n <span ... />\n Text\n </span>
        # We can use a regex that looks backwards for `<span className="... rounded-full ... uppercase ...">`
        
        # A simpler regex: find the <span or <div, any characters (non-greedy), the text, and the closing tag
        # We must restrict to a reasonable length so it doesn't match across the whole file.
        pattern = re.compile(rf'<(span|div)\s+className="([^"]*rounded-full[^"]*uppercase[^"]*)"\s*>[\s\S]{{0,200}}?{re.escape(text)}\s*</\1>', re.IGNORECASE)
        
        def replacer(match):
            cls = match.group(2)
            if 'hover:' in cls or 'absolute' in cls or 'bg-[#EAEDDE]' in cls:
                return match.group(0)
                
            return f'<{match.group(1)} className="{new_class}">\n  {text.upper()}\n</{match.group(1)}>'
            
        content = pattern.sub(replacer, content)

    # Let's also do "Success Stories" in app/page.tsx line 602
    content = re.sub(r'<(span|div)\s+className="([^"]*rounded-full[^"]*uppercase[^"]*)"\s*>[\s\S]{0,200}?Success Stories\s*</\1>', 
        lambda m: m.group(0) if 'hover:' in m.group(2) or 'absolute' in m.group(2) or 'bg-[#EAEDDE]' in m.group(2) else f'<{m.group(1)} className="{NEW_PILL_CLASS}">\n  SUCCESS STORIES\n</{m.group(1)}>', 
        content, flags=re.IGNORECASE)

    # "Read Our Success Stories" in app/about/page.tsx
    content = re.sub(r'<(span|div)\s+className="([^"]*rounded-full[^"]*uppercase[^"]*)"\s*>[\s\S]{0,200}?Read Our Success Stories\s*</\1>', 
        lambda m: m.group(0) if 'hover:' in m.group(2) or 'absolute' in m.group(2) or 'bg-[#EAEDDE]' in m.group(2) else f'<{m.group(1)} className="{NEW_PILL_CLASS}">\n  READ OUR SUCCESS STORIES\n</{m.group(1)}>', 
        content, flags=re.IGNORECASE)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Updated", filepath)

print("Done")
