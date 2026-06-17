import os

def fix_children():
    for root, dirs, files in os.walk('app'):
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if '{CHILDREN}' in content:
                    content = content.replace('{CHILDREN}', '{children}')
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Fixed {CHILDREN} in {filepath}")

fix_children()
