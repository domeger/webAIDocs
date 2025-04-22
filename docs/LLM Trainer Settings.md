
---
sidebar_position: 20
---
# LLM Trainer Settings – Configuration Guide

This element handles fine-tuning of a base language model (e.g., LLaMA 3, Mistral, Falcon) using a dataset you prepared. Commonly used for supervised fine-tuning (SFT) in domain-specific applications like customer support bots, RAG tuning, or assistant agents.

---

## ⚙️ General Settings

### 🔹 Element Name
- Default: `LLM Trainer`
- Optional renaming to distinguish between training jobs or versions.

---

### 🔢 Version
- Example: `0.7.25`
- Use the latest version for new features like quantized fine-tuning or compatibility with more model architectures.

---

### 💻 Running On
- Example: `Worker phx-node-02`
- Choose a GPU-enabled node with sufficient memory. Models like `LLaMA 3 8B` require 24GB+ VRAM.

---

### 🧠 Trained Artifact (Optional)
- Resume or continue fine-tuning from a previously saved checkpoint.
- Useful for multi-stage training or recovering from interruption.

---

### 🧬 Base Model Architecture
- Example: `LLaMA 3.1 8B Instruct`
- Select the model you wish to fine-tune. Match this to your downstream use case.

| Model                       | Use Case                                  |
|----------------------------|--------------------------------------------|
| `LLaMA 3.1 8B Instruct`     | Chatbot, RAG assistant, summarizer        |
| `Mistral 7B`                | Small efficient assistant or coder        |
| `Gemma` / `OpenChat`        | Lightweight open-source assistants         |

---

### 📂 Training Data Path
- Required. Directory containing `*.jsonl` or `*.csv` dataset.
- Make sure this matches the format used in the LLM Dataset Generator.

---

### 📁 Base Model Assets Path (Optional)
- Manually specify a model weight folder if using a custom checkpoint or local base model.

---

### 📊 Enable Metrics For Trained Model
- Turn **on** if you want to log loss, accuracy, or validation metrics.
- Useful for benchmarking or training comparison.

---

## 🧪 Advanced Training Settings

### 📦 Batch Size
- Controls how many examples are processed per iteration.

| Model Type     | Batch Size Example |
|----------------|--------------------|
| 7B–13B Models  | `2–8` (depending on GPU memory) |

> Smaller batches = more updates, better generalization  
> Larger batches = faster, more stable convergence

---

### 📉 Learning Rate
- Default: `0.0001`
- Controls how much the model adjusts weights per step.

| Use Case               | Suggested LR     |
|------------------------|------------------|
| Domain Adaptation      | `1e-4` to `5e-5`  |
| Instruction Tuning     | `5e-5` to `2e-5`  |
| Refinement / Polishing | `1e-5` or lower   |

---

### 🧮 Quantization Rank
- Example: `4`
- Use lower ranks to save memory (4-bit quantization is standard for QLoRA).

| Rank | Meaning              | When to Use                        |
|------|----------------------|-------------------------------------|
| 2    | Very memory efficient| Low-end GPUs or long context        |
| 4    | Balanced             | Recommended for most training       |
| 8    | Higher accuracy      | If GPU memory is not a concern      |

---

### 💾 Save Every N Iterations
- Example: `1`
- Controls checkpoint frequency (in training iterations, not epochs).
- Use `1` for prototyping or risky runs, `5+` for stable long runs.

---

### 🎲 Random Seed
- Example: `42`
- Ensures training reproducibility.

---

### 📦 Artifact Backup Save Path (Optional)
- Choose where to export checkpoints or final model after training.

---

## 🔍 Example Use Case Presets

| Use Case              | Model             | Batch | LR     | Quant Rank | Notes                          |
|-----------------------|-------------------|-------|--------|------------|--------------------------------|
| Customer Service Bot  | LLaMA 3.1 8B      | 4     | 1e-4   | 4          | Fast adaptation to ticket data |
| Healthcare QA Model   | Mistral 7B        | 2     | 5e-5   | 4          | Use medical references         |
| Legal Document Trainer| LLaMA 13B         | 1     | 1e-5   | 4 or 8      | Long, specific documents       |

---

> 💡 Tip: For production fine-tuning, start with a small dataset and larger LR. Then lower LR and train longer on full data for refinement.