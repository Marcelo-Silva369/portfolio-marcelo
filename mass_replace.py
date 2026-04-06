import os

directory = 'c:\\Users\\marce\\OneDrive\\Documentos\\GITHUB REPOSITÓRIO\\portfolio-marcelo\\src'
replacements = {
    'green-200': 'cyan-200',
    'green-300': 'cyan-300',
    'green-400': 'blue-400',
    'green-500': 'blue-500',
    'green-600': 'blue-600',
    'green-700': 'blue-700',
    'emerald-500': 'cyan-400',
    'emerald-600': 'cyan-500',
    '#4ade80': '#3b82f6',
    '#60a5fa': '#22d3ee',
    '74,222,128': '59,130,246'
}

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for old, new in replacements.items():
                new_content = new_content.replace(old, new)
                
            if new_content != content:
                print(f'Updated {filepath}')
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
