import re, pathlib
urls=set()
for path in pathlib.Path('reference').glob('*.html'):
    text=path.read_text(encoding='utf-8', errors='ignore')
    urls.update(re.findall(r'https://static\.wixstatic\.com/media/[^"\)]+', text))
for url in sorted(urls):
    print(url)
