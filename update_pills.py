import os
import re

NEW_PILL_CLASS = "inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6"
NEW_PILL_CLASS_INLINE = "inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit"

def process_file(filepath):
    if not filepath.endswith('.tsx'): return
    if 'report' in filepath: return
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original = content
    
    # regex for <span class="..." >...</span>
    # We look for <span or <div, className="..."
    # use DOTALL to match across newlines
    pattern = re.compile(r'<(span|div)\s+className="([^"]+)"\s*>(.*?)</\1>', re.DOTALL)
    
    def replacer(match):
        tag = match.group(1)
        cls = match.group(2)
        inner = match.group(3)
        
        # Check if it has pill traits
        if 'rounded-full' in cls and 'uppercase' in cls and ('bg-[' in cls or 'bg-olive' in cls):
            if 'absolute' in cls or 'hover:' in cls or 'bg-[#EAEDDE]' in cls:
                return match.group(0)
            
            # Remove inner span dot
            cleaned_inner = re.sub(r'<span\s+className="[^"]*w-[\d\.]+[^"]*rounded-full[^"]*"\s*(?:></span>|/>)', '', inner, flags=re.DOTALL).strip()
            cleaned_inner = cleaned_inner.upper()
            
            target_class = NEW_PILL_CLASS if 'mb-' in cls else NEW_PILL_CLASS_INLINE
            return f'<{tag} className="{target_class}">\n  {cleaned_inner}\n</{tag}>'
            
        return match.group(0)
        
    content = pattern.sub(replacer, content)
    
    # Specific targeted replaces just in case:
    specifics = [
        ("SUCCESS STORIES (TESTIMONIALS)", NEW_PILL_CLASS),
        ("50+ SUCCESS STORIES", NEW_PILL_CLASS),
        ("STUDENT EXPERIENCES", NEW_PILL_CLASS),
        ("EPICQUEST INTELLECT HUB", NEW_PILL_CLASS_INLINE),
        ("FELLOWSHIP MILESTONES", NEW_PILL_CLASS),
    ]
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Updated", filepath)

for root, dirs, files in os.walk('app'):
    for file in files:
        process_file(os.path.join(root, file))

print("Done")
