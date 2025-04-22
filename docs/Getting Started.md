---
sidebar_position: 1
---

# Use Cases and AI Architecture

## 🔍 Identifying Your First Use Case

Before jumping into Navigator, take some time to consider the problems that could be solved by AI. The possibilities are limitless. Here are a few examples to inspire your thinking:

- **Knowledge Search:**  
  You might have years of documentation to sift through. What if you had an expert AI, trained on those documents, that could answer your questions in seconds?

- **Safety Monitoring:**  
  As a safety compliance officer, what if your security cameras could alert you when someone isn't wearing proper protective equipment in designated areas?

- **Image Tagging:**  
  You might have a database of images that need tagging. What if AI could automatically tag them by type, color, material, etc., saving hours or days of manual work?

---

## 🧠 Use Case Solution Planning

Once you’ve identified a use case, break it down into incremental steps and build up from there.

### 🎨 Example: Art Supply Image Tagging

Let’s say you want to tag images of art supplies using Navigator.

1. **Define Your Labels:**  
   Start with general labels and refine:
   - **Item Color:** Red, Green, Blue, Black, White, etc.
   - **Item Use:** Drawing Supply, Painting Supply, Sculpting Supply, etc.
   - **Item Type:** Paint Brush, Pencil, Paint, Canvas, Clay, etc.

2. **Start Training:**
   - Begin with broad labels like **Item Use**.
   - Train the model to recognize Drawing vs Painting vs Sculpting Supplies.
   - Test it using a labeled test set and measure accuracy.

3. **Refine and Iterate:**
   - Adjust or retrain if performance isn't satisfactory.
   - Once confident, move to train another classifier on **Item Type**.
   - Repeat the process: Train → Test → Measure → Improve.

4. **Build Your Flow:**
   - Connect classifiers in sequence.
   - Ensure they maintain accuracy when used together.

5. **Expand as Needed:**
   - Add additional classifiers to complete your tagging system.

---

## 🏗️ AI Architecture – Which One Should I Use?

Once your use case is identified, how do you choose the right AI architecture?

### 📚 Large Language Models (LLMs)

Use when your data is **text-based**:

- PDFs
- Word documents (`.docx`)
- Plain text files (`.txt`)

**Best for:**  
Creating a text-based AI subject matter expert you can interact with using prompts. These models run locally.

---

### 🖼️ Computer Vision Models

Use when your data is **image-based**:

- Still images
- Pre-recorded videos

Computer vision can either classify or detect objects, depending on your needs.

#### 🔤 Classifiers

- Labels the **entire image**.
- Example: Is this a **HOT DOG** or **NOT HOT DOG**?

#### 🔍 Object Detectors

- Finds and labels **specific objects** in an image with bounding boxes.
- Example: Detect and draw a box around a **HOT DOG** in an image.
- More precise than classifiers — only the object is labeled, not the whole image.

---

Choose your architecture based on your data type and what you’re trying to achieve.
