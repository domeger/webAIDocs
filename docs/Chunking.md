---
sidebar_position: 18
---

# Chunking Settings – Use Case Guide

A breakdown of how to configure chunking settings for optimal performance in search, retrieval, summarization, and embedding pipelines.

---

## ⚙️ Chunking Parameters Explained

| Setting                        | Description                                                |
|-------------------------------|------------------------------------------------------------|
| `Chunk Size`                  | Max size (in tokens or characters) for each chunk          |
| `Chunk Overlap`              | Overlapping size between chunks to preserve context        |
| `Minimum Characters per Sentence` | Prevents splitting tiny, noisy sentences                 |
| `Minimum Sentences per Chunk` | Prevents creation of unhelpful, short fragments            |

---

## 🧱 Chunk Size

**Controls the granularity of each chunk.**

| Use Case                 | Recommended Chunk Size |
|--------------------------|------------------------|
| Document Search          | `256–512`              |
| Chatbot Memory           | `128–256`              |
| Legal/Financial Docs     | `512–768`              |
| Code Embedding           | `128–256`              |
| Academic Papers          | `384–768`              |

> Example:  
> `Chunk Size = 512` → Includes ~2–3 paragraphs for better semantic understanding.

---

## 🔁 Chunk Overlap

**Adds shared characters between adjacent chunks to retain context.**

| Use Case               | Recommended Overlap |
|------------------------|---------------------|
| Question-Answer Bots   | `64–128`            |
| General Search         | `32–64`             |
| RAG Pipelines          | `128+`              |
| Speed-Critical Systems | `0` (no overlap)    |

> Example:  
> `Chunk Size = 256`, `Overlap = 64` → Smooth "sliding window."

---

## 🔤 Minimum Characters per Sentence

**Filters out fragmented or irrelevant sentences.**

| Use Case             | Recommended Min Characters |
|----------------------|----------------------------|
| General Text         | `50–64`                    |
| Technical Notes      | `30–40`                    |
| Spoken Dialogue      | `15–20`                    |

> Ensures each sentence carries meaningful information.

---

## 📏 Minimum Sentences per Chunk

**Prevents tiny, contextless chunks.**

| Use Case               | Recommended Min Sentences |
|------------------------|---------------------------|
| Support Logs           | `2–3`                     |
| Wikipedia-style Text   | `1`                       |
| Transcripts            | `3–5`                     |

> `1` = flexible chunking, `3+` = ensures more coherent units of thought.

---

## 🧠 Use Case Presets (Quick Reference)

| Use Case                     | Chunk Size | Overlap | Min Sentences | Notes                             |
|-----------------------------|------------|---------|----------------|-----------------------------------|
| Chatbots (FAQ)              | `256`      | `64`    | `1`            | Fast + good recall                |
| Search on Long Docs         | `512`      | `128`   | `2`            | Preserve topic continuity         |
| RAG Pipeline for QA         | `384`      | `128`   | `3`            | Chunks remain LLM-friendly        |
| Real-Time Summarization     | `128`      | `32`    | `1`            | Keeps results concise             |
| Support Transcripts         | `512`      | `64`    | `3`            | Captures complete interactions    |
| Legal/Policy Documents      | `768`      | `128`   | `2`            | Avoids mid-clause cuts            |
| Coding Documentation        | `256`      | `64`    | `1`            | Logical function or block splits  |

