import os
import re
import ssl
import time
import subprocess
import urllib.request
from urllib.parse import urljoin, urlparse
from PIL import Image

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
BASE_URL = "https://ppid.pktj.ac.id"
OUT_DIR = r"public\assets\03_Proyek_Website_PPID_PKTJ"

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request(BASE_URL, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# Extract all links
found_links = set()
pattern = re.compile(r'href=[\'"]([^\'"]+)[\'"]')
for match in pattern.finditer(html):
    href = match.group(1).strip()
    if href.startswith('#') or href.startswith('javascript:') or href.startswith('mailto:') or href.startswith('tel:'):
        continue
    full_url = urljoin(BASE_URL, href)
    parsed = urlparse(full_url)
    if 'ppid.pktj.ac.id' in parsed.netloc:
        # Ignore static assets like images, pdfs, css, js
        path_lower = parsed.path.lower()
        if any(path_lower.endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.svg', '.css', '.js', '.pdf', '.ico']):
            continue
        clean_url = f"{parsed.scheme}://{parsed.netloc}{parsed.path}"
        if parsed.query:
            clean_url += f"?{parsed.query}"
        found_links.add(clean_url)

print(f"Total internal pages found on ppid.pktj.ac.id: {len(found_links)}")
for l in sorted(found_links):
    print(" -", l)
