---
sidebar_position: 3
---


# Building a Dataset: Image Classification

## 📚 Overview

Once you've determined that an **Image Classifier** is the right approach for your use case, it's time to gather and prepare your dataset for training.  
We'll walk through the process using the example of **classifying art supplies** from the _Use Cases & AI Architecture_ document.

---

## ✅ Define the Classes

Start by identifying the **categories** your model should predict. Begin with broad classes and iterate to more specific ones over time.

### 🎨 Example Hierarchy:

- **Broad Classes:**  
  - Item Use: Drawing Supply, Painting Supply, Sculpting Supply
- **Granular Classes:**  
  - Item Type: Paint Brush, Pencil, Paint, Canvas, Marker, Clay
- **More Granular Classes:**  
  - Paint Brush Type: Flat, Round, Filbert, Fan, Mottler, Oval

> Start simple, prove the model with a smaller dataset, and expand as needed.

---

## 📸 Collect the Data

Ensure your dataset **represents real-world scenarios**. If you already have data, review it for coverage and quality.

### 🔍 Key Considerations:

- **Lighting conditions** (natural, artificial, mixed)
- **Image resolution and clarity**
- **Camera angles and distances**
- **Background variety**
- **Different product models and configurations**

---

## 🧼 Audit the Data

### 🔄 Remove Duplicates:

- Eliminate identical or near-identical images.
- Example: Two paint brushes with same tip and color but different brands — keep just one.

### 🧾 Format Consistency:

- Ensure consistent file formats (e.g., convert all to `.jpg`)
- Ensure images are roughly similar in **size** (height × width)

---

## 🗂️ Structure the Data

Divide your dataset into:

- `training/` – 80% of total images
- `test/` – 20% of total images

> 🧠 Make sure each class has **balanced representation** in both sets.

### 🧪 Example for Item Type:

- `20` Paint Brush images  
- `20` Pencil images  
- `20` Canvas images  
- `20` Paint images  
...and so on.

---

## 📁 Organize the Dataset

Organize your data into structured folders to support smooth training:

### 📂 Training Folder

```
training/
├── pencils/
├── brushes/
├── paints/
├── canvases/
```

Each subfolder contains images **only** for that class.

### 📂 Test Folder

```
test/
├── pencils/
├── brushes/
├── paints/
├── canvases/
```

Same structure as training, used to evaluate model performance.

### 📂 Validation Folder (Optional)

```
validation/
├── pencils/
├── brushes/
├── paints/
├── canvases/
```

Some tools support an optional validation set. Use the same structure if required.

> 📌 Improper organization may lead to incorrect training or model creation errors.

---

Now that your dataset is well-prepared and organized, you're ready to move on to training your Image Classifier model!

