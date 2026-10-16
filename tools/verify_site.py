"""Fast stdlib-only checks for a directly published GitHub Pages site."""
from html.parser import HTMLParser
from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent / 'docs'

class Refs(HTMLParser):
    def __init__(self):
        super().__init__()
        self.paths = []
        self.scripts = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for key in ('src', 'href'):
            value = attrs.get(key)
            if value and not re.match(r'^(https?:|data:|#)', value):
                self.paths.append(value)
        if tag == 'script':
            self.scripts.append(attrs.get('src'))

page = root / 'index.html'
parser = Refs()
parser.feed(page.read_text(encoding='utf-8'))
assert len(parser.scripts) == 11, parser.scripts
assert all(script and script.startswith('scripts/') for script in parser.scripts)
assert parser.scripts[0] == 'scripts/assets.js'
assert parser.scripts[-1] == 'scripts/morph.js'
assets_js = (root / 'scripts/assets.js').read_text(encoding='utf-8')
paths = parser.paths + re.findall(r'assets/images/[\w.-]+\.webp', assets_js)
for path in paths:
    f = root / path
    assert f.is_file(), f'Missing: {path}'
    assert f.stat().st_size > 0, f'Empty: {path}'
assert len(set(re.findall(r'assets/images/[\w.-]+\.webp', assets_js))) == 17
assert (root / 'assets/audio/soundtrack.mp3').stat().st_size > 0
assert page.stat().st_size < 100_000, 'HTML should not contain embedded media'
assert 'base64,' not in page.read_text(encoding='utf-8')
print(f'OK: {len(parser.scripts)} JS modules, {len(set(paths))} local files, no embedded binary assets')
