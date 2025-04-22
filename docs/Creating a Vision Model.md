---
sidebar_position: 5
---


# Creating a Vision Model

If your use case requires a **vision-based solution**, training a **Computer Vision model** is the way to go. This guide walks you through the full process — from training your model to running inference — all **locally on your device**.

---

## 🏗️ Computer Vision Model Training

1. **Create a New Canvas**
   - Open Navigator and start a new canvas.

2. **Add a Trainer Element**
   - Open the **Element Drawer** and drag either:
     - `Object Detection Trainer`, or
     - `Classification Trainer`
   - Drop it onto the canvas.

3. **Configure the Trainer Element**
   - **Training Data Path:**  
     Use the folder selector to choose where your training data is stored.
     - For object detection: All images must be in the **same folder** and use the **COCO JSON format** for annotations.
   - **Output Artifact Path:**  
     Select the destination folder for your trained model artifacts.

4. **Leave All Other Settings as Default**

5. **Start Training**
   - Click the **Run** button on the canvas.

> ⏳ The first run may take a few minutes to download dependencies.

✅ Once training is complete, you’ll have a **selectable inference model** ready to use in future flows.

---

## 🤖 Computer Vision Model Inference

Use your newly trained model for inference by following these steps:

1. **Create a New Canvas**

2. **Add the Inference Element**
   - Drag the corresponding inference element to the canvas:
     - `Object Detection Inference`, or
     - `Classifier Inference`

3. **Configure Inference Settings**
   - Open the settings.
   - Select **your trained artifact** using either:
     - The **dropdown**, or
     - The **file selector** (but **not both**)

4. **Add Input Element**
   - Drag an input source:
     - `Camera Element`, or
     - `Media Loader Element`
   - Connect it to the **input side** of your inference element.

5. **Add Output Preview**
   - Drag the `Output Preview` element to the canvas.
   - Connect it to the **output side** of the inference element.

> ⚠️ If you're using a **Camera Element**, make sure an **input device** is configured under the **Devices tab**.

---

Now you're all set to create and run your own custom vision models locally!

