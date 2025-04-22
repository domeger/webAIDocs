---
sidebar_position: 6
---

# Creating a Local Expert LLM

If you want to create your own **subject matter expert** to solve your use case, training your own **local LLM** is the best way to go. This guide covers the entire process from dataset generation to deploying an inference-ready expert model.

---

## 📁 LLM Dataset Generation

Before generating your dataset:

- Gather all relevant documents in one folder
- Supported formats: `.pdf`, `.txt`, `.docx`

### 🔧 Steps:

1. **Create a New Canvas** in Navigator.
2. **Add the `LLM Dataset Generator` Element** from the Element Drawer.
3. **Open the Element Settings** and configure:
   - **Topic:** Any subject you want the LLM to focus on.
   - **References Folder Path:** Folder with your source documents.
   - **Output Folder Path:** Folder where generated dataset will be saved.
   - **Dataset Size:** Number of topics (Start with `5` for quick testing)

> Larger dataset sizes improve accuracy but increase generation time. Large datasets may take **several hours** to generate.

4. **Add API Keys:**
   - If using **Groq**, only one key is required.
   - For **OpenAI**, **Claude**, or **Gemini**, at least **two API keys** are needed to enable full evaluation.

5. Click **Run** to start the dataset generation.  
   > ⏳ Dependencies will be installed during the first run.

---

## 🏗️ LLM Model Training

Now that your dataset is ready, it's time to **train your LLM**.

### 🔧 Steps:

1. **Create a New Canvas**.
2. **Add the `LLM Trainer` Element**.
3. **Open the Element Settings** and configure:
   - **Dataset Folder Path:** Folder from the dataset generation step.
   - **Artifact Save Path:** Where your trained adapter will be saved.
   - **Base Model Assets Path:** Where to save the downloaded base model.
   - **Evaluator API Key:** Required for benchmarks (Groq, OpenAI, Claude, Gemini).
   - **Batch Size:** Recommended: `4` for testing

4. Leave other settings as default.

5. Click **Run** to begin training.  
   > ⏳ Training may take time depending on dataset size and hardware.

---

## 💬 LLM Model Inference

After training, you can deploy and chat with your local expert model.

### 🔧 Steps:

1. **Create a New Canvas**.
2. **Add the `LLM Chat` Element**.
3. **Configure Chat Settings:**
   - **Max Token:** `256` for testing
   - **Model Storage Path:** Path to the base model from training
   - **Model Adapter Folder Path:** Path to the trained adapter

4. **Add UI Elements:**
   - Drag `Prompt API` and `Response API` elements onto the canvas.
   - Connect `Prompt API → LLM Chat`
   - Connect `LLM Chat → Response API`

5. Verify the flow structure is correct.

6. Click **Run** to launch the LLM.  
   > ⏳ Dependencies may install on first run.

---

You’ve now built, trained, and deployed your very own local LLM expert. Happy prompting!
