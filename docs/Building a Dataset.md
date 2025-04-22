---
sidebar_position: 4
---


# Building a Dataset: Object Detection

## 📚 Overview

After deciding that an **Object Detector** is the right fit for your use case, it’s time to gather and prepare your training data. This guide walks you through the steps to build an effective dataset, using the example of detecting workers without proper protective equipment (PPE).

---

## ✅ Step 1: Define Your Detection Classes

Start by identifying the specific **objects** your model needs to detect. These classes must be relevant to your use case.

### 🧵 Example (PPE Detection):

- `Person wearing high-visibility vest`
- `Person without high-visibility vest`

> ⚠️ **Tip:** Detection accuracy depends on both the **quality** of your images and the **size** of the objects. Larger items like vests are easier to detect than small items like safety glasses.

---

## 📸 Step 2: Collect Representative Data

Your dataset should reflect the **real-world scenarios** where the model will be deployed.

### 💡 Data Collection Considerations:

- **Lighting Conditions:** Include bright, dim, natural, and artificial lighting
- **Image Quality:** Match the resolution used during deployment
- **Camera Angles:** Vary the perspectives and distances
- **Backgrounds:** Capture diverse environments
- **Negative Examples:** Include images with no target objects
- **Mixed Scenarios:** Use examples with both compliant and non-compliant cases

> 🧠 Example: For PPE detection, gather images of people both **with** and **without** high-visibility vests in your target work environment.

---

## 📁 Step 3: Organize Your Dataset

Organize your dataset into two main folders:

- `training/` – 80% of your data (used to train the model)
- `testing/` – 20% of your data (used to evaluate model accuracy)

> ✅ **Note:** No need for a separate validation folder — Navigator creates it automatically using the **Validation Split** setting in the Object Detection Trainer (default: 20%).

---

## ✏️ Step 4: Annotate Your Images

Annotation defines what the model should learn in each image.

### 📂 Folder Setup:
- Inside `training/`, create a subfolder named `annotations/`

### 🔧 Annotation Process:

- Use a tool that supports **bounding boxes** and exports to **COCO JSON** format  
  (e.g., **RectLabel Pro** for Mac)
- Draw precise bounding boxes around each target object
- Keep boxes tight to the object edges
- Label each box with the correct class name

### 📏 Best Practices:

- Stay consistent in your annotation style
- Include **all instances** of the target object in every image
- Make sure annotations are accurate and clean at object boundaries

Once all training images are properly annotated, you're ready to train your Object Detector.

---

## 🚀 Next Steps

Proceed to the **Object Detector training process** in Navigator using your annotated dataset to build and evaluate your model.

