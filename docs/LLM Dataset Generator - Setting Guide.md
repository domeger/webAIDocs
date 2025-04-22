---
sidebar_position: 19
---


# LLM Dataset Generator – Settings Guide

This module creates high-quality datasets to fine-tune or evaluate large language models. Ideal for supervised fine-tuning (SFT), retrieval-augmented generation (RAG), Q&A generation, or prompt training.

---

## ⚙️ Main Settings Breakdown

### 🔹 Element Name
- Default: `LLM Dataset Generator`
- Description: Logical name for this step in your pipeline. No need to change unless duplicating elements.

---

### 🔢 Version
- Example: `0.7.25`
- Description: Choose the specific version for feature support or bug fixes. Newer versions include richer prompt handling and multi-model support.

---

### 💻 Running On
- Example: `Worker phx-node-02`
- Description: Select which device the task runs on — helpful in multi-node environments.

**Use Case Example:**
- Assign to GPU-capable nodes if embedding, or to cheaper CPU nodes if only generating Q&A text.

---

### 📝 Topic
- Description: A short topic prompt that sets the subject of generated examples.

**Examples:**
- `How to use APIs in Python`
- `Insurance claim workflows`
- `SQL for finance professionals`

> This topic will guide the LLM in producing relevant prompts and completions.

---

### 📁 References Folder Path (Optional)
- Use if you want the generator to build the dataset from a curated folder of documents.

**Use Case:**
- In RAG workflows: Feed documentation, policies, or manuals to generate contextual Q&A pairs.

---

### 📤 Output Folder Path
- Required: Where the final JSONL/CSV dataset will be saved.

> Make sure this is a writable location and used by downstream components.

---

### 🔐 API Keys
Choose which LLMs you want to use for generation. You can use one or many.

| API Type           | Use Case                                              |
|--------------------|--------------------------------------------------------|
| **Groq Inference** | Fast, low-latency prompt/response generation           |
| **OpenAI**         | High-quality completions (GPT-4, GPT-3.5)             |
| **Claude**         | Long-context prompts (e.g., full docs, PDFs)          |
| **Gemini**         | Multimodal or Google-aligned reasoning tasks          |

---

## 📦 Dataset Size
- Example: `25`
- Description: Number of Q&A or prompt/completion pairs to generate.

**Use Cases:**
- Small scale prototyping: `10–25`
- Prompt evaluation: `50–100`
- Fine-tuning (start): `500–1000+`

> Adjust based on time, budget, and training needs.

---

## 🧠 Use Case Templates

| Use Case                 | Topic Example                         | Dataset Size | Notes                                      |
|--------------------------|----------------------------------------|--------------|---------------------------------------------|
| Customer Support Bot     | `Ecommerce order issues`              | `100`        | Use real tickets in `References` folder     |
| RAG QA Benchmark         | `HR policy documents`                 | `50`         | Pair with embeddings + chunking             |
| Developer Assistant      | `Python scripting best practices`     | `25`         | Ideal for lightweight internal tools        |
| Banking AI Assistant     | `Mortgage loan application FAQs`      | `100+`       | Claude API handles long-form references     |
| Educational Tutor        | `Intro to machine learning concepts`  | `75`         | Use OpenAI or Gemini for higher creativity  |

