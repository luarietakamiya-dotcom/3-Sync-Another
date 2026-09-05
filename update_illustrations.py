"""illustrations フォルダの画像一覧を更新します。"""
from pathlib import Path
from urllib.parse import quote
import json

root = Path(__file__).resolve().parent
folder = root / 'illustrations'
images = sorted(p for p in folder.iterdir() if p.suffix.lower() in {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'})
if not images:
    raise SystemExit('illustrations フォルダに画像を入れてください。')
urls = ['illustrations/' + quote(p.name) for p in images]
(folder / 'slides.js').write_text('window.illustrationSlides = ' + json.dumps(urls) + ';\n', encoding='utf-8')
print(f'{len(images)}枚の画像を登録しました。')
