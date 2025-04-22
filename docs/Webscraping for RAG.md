---
sidebar_position: 10
---


# Developer Guide: Website Crawler and PDF Generator

## 📄 Overview

This Python script crawls a website, searches for specific **keywords** within each page, and generates **PDFs** for pages that match. It's ideal for archiving web content, documentation, or collecting research material within domain boundaries.

---

## 🚀 Features

- ✅ Domain and path constraint enforcement
- ✅ Depth-limited crawling
- ✅ PDF generation for matched pages
- ✅ English language detection (skips non-English content)
- ✅ Hierarchical and unique PDF file naming
- ✅ Timeout safety with user prompts
- ✅ Duplicate URL detection and avoidance
- ✅ Random delays between page visits
- ✅ Visual progress via the `rich` library
- ✅ Full CLI-based configuration

---

## ⚙️ Requirements

Before using the script, install the required dependencies:

```bash
pip install playwright langdetect rich
python -m playwright install chromium
```

---

## 🧑‍💻 Usage

```bash
python website_crawler.py \
  --url https://example.com \
  --start_path /docs \
  --depth 2 \
  --output ./pdf_output \
  --keywords "security" "policy" "compliance"
```

### Example (Real-world Usage)

```bash
python crawler.py \
  --depth 10 \
  --output "/Users/yourname/Documents/PDFs/iPad Pro 13-inch (M4)" \
  --keywords iPad \
  --url https://support.apple.com/guide/ipad/ \
  --start_path ipad-pro-13-inch-m4-ipad0b29e50c/ipados
```

---

## 📥 Command-Line Arguments

| Argument        | Required | Description |
|----------------|----------|-------------|
| `--url`         | ✅        | Base domain (e.g., `https://example.com`) |
| `--start_path`  | ✅        | Path relative to base URL (e.g., `/docs/start`) |
| `--depth`       | ❌        | Max crawl depth (0 = unlimited, default = 0) |
| `--output`      | ❌        | Folder for PDFs (`default: ./output_pdfs`) |
| `--keywords`    | ✅        | List of keywords to search (case-insensitive) |

---

## 🧠 How It Works

1. **Start from a given URL**
2. **Crawl** pages recursively within the same domain and under the path constraint
3. **Skip pages** not written in English
4. **Search for keywords** in the visible body text
5. **Generate PDF** if keywords are found
6. **Queue internal links** to crawl next
7. Repeat until:
   - Max depth is reached
   - No new pages
   - 10-minute timeout prompts for continuation

---

## 🗂 PDF Naming Convention

PDFs are named using this pattern:

```
L2_from_P123456_path_to_page.pdf
```

Where:
- `L2` = Page depth level
- `from_P123456` = Parent page's unique ID
- `path_to_page` = Cleaned version of the URL path

This naming structure maintains a **clear hierarchy** of how pages link to each other.

---

## 🔄 Example Output

Saved PDFs are stored in the specified output directory (default: `output_pdfs/`).  
Each PDF represents a crawled page that:
- Matches your keyword(s)
- Is in English
- Is within the same domain/path

---

## ⚠️ Notes

- Ensure your target site allows crawling (respect `robots.txt`).
- This script does not handle JavaScript-heavy SPA sites optimally.
- Consider reducing depth for large websites or rate-limiting your crawl frequency.

---
