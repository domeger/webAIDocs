---
sidebar_position: 2
---

# Prototyping for Production with Navigator

Navigator is a **versatile visual editor** that allows you to create, run, and deploy AI Flows with ease. Its lean interface lets users express complex logic with a high degree of customization.

This guide will help you get started building simple Flows and gradually move toward more advanced setups.

---

## ▶️ Run Your First Flow

The best way to start using Navigator is to build a simple Flow that uses your computer’s **camera input** and sends it directly to a visual **output**.

### 🔧 Steps

1. **Open the Element Drawer**  
   Click the **Element Drawer** in the bottom left of the canvas and search for the **Camera Element**.

2. **Add Camera Element**  
   The Camera Element serves as a video input. Navigator should detect your default computer camera and label it as **"My Webcam"**.

3. **Add Output Preview**  
   Go back to the Element Drawer and add the **"Output Preview"** element to the right side of the Camera Element on the canvas.

4. **Connect Elements**  
   Click and drag from the **connector dot** on the right of the Camera Element to the **left connector dot** of the Output Preview.

5. **Run the Flow**  
   Click the **Run** button in the top right corner of the canvas.  
   Navigator will install any required dependencies (*first-time only*). Once the spinner changes to a red **Pause** button, the flow is running.

6. **Open the Preview**  
   Click **Open** in the Output Preview element to display the video feed from your webcam.

7. **Stop the Flow**  
   To stop, simply click the **Pause** button.

> ⏱ Note: The first run may take longer due to dependency installation. Future runs will be faster.

---

## 🧠 Run a First Inference

Now let’s step it up and build a basic **Object Detection Flow** that uses your webcam and runs real-time inference with a YOLO-based model.

### 🛠 Steps

1. **Start from Your First Flow**  
   Reuse the Flow you just created.

2. **Add the Object Detector**  
   Open the Element Drawer and search for **"Object Detector"**, then drag it onto the canvas.

   - The Object Detector uses **YOLO** to identify objects.
   - It takes video frames as input and outputs **annotated frames** (bounding boxes, labels, confidence scores).

3. **Rewire the Flow**
   - Connect the **Camera Element → Object Detector**
   - Connect the **Object Detector → Output Preview**

4. **Assign Devices**
   - Make sure all elements (Camera, Object Detector, Output Preview) have **your computer assigned**.

5. **Run the Inference Flow**
   - Click **Run** in the top right corner.
   - Click **Open** in the Output Preview to view the results.
   - Watch as YOLO detects and labels objects in real-time from your webcam feed.

---

Now you're ready to experiment further and expand into more advanced flows. Happy prototyping!
