---
sidebar_position: 6
---

# Deploying & Using Clusters

## 🧩 Deploying an AI Model in a Cluster

Navigator's **Canvas** is ideal for designing and testing AI Flows. However, flows run only while Navigator is open on your machine. To make your flows **persistent and production-ready**, use **Clusters**.

### ✅ Requirements

- Navigator installed
- A created Flow in Canvas
- One or more computers running the **webAI Runtime Agent**
- Input devices (e.g., cameras), if needed by your Flow

---

## 🧠 Understanding Clusters

- **Navigator** is the UI for creating/managing Flows and deploying them.
- **webAI Runtime Agent** executes the Flows.
- A **Cluster** is a hub that connects computers and devices for running AI Flows.

> ✅ Cluster Controllers are managed via the Runtime Agent and allow for persistent deployments — even if your Navigator UI is closed.

---

## 📦 What is a Deployment?

- On Canvas, you **run** Flows.  
- In a Cluster, you **deploy** Flows.

Deployments are the unit of execution in Clusters. You can create, stop, and restart them.  
Deployments require a **Cluster**, which can be hosted locally or connected to remotely.

---

## ✏️ Connecting to a Cluster & Creating a Deployment

### 🖼️ 1. Design Your Flow

Start by designing your Flow in **Canvas**. Navigator will auto-assign your local devices for quick testing.

---

### 💾 2. Save a Version of Your Flow

When you're ready to deploy:

- Click the three-dot **context menu** on your project
- Select **"Save for Deployment"**

To review or manage saved versions:

- Click context menu → **"View Canvas Versions"**
- You can **rename** or **delete** versions here

---

### 🌐 3. Create or Connect to a Cluster

- Click the **Network** button (bottom left)
- Go to the **Clusters** tab
- Click **Add Cluster → Host a new Cluster** to use your local Runtime Agent

To connect to an existing Cluster:

- Navigator detects Clusters on the same (virtual) network
- Connect directly via IP address if available

---

### 🎥 4. Set Up Your Devices

Navigator differentiates between:

- **Nodes**: Computers running webAI Runtime Agent
- **Input Devices**: (e.g., cameras)

To provision devices:

- Go to your Cluster → **Devices tab**
- Click **Add Node** or **Add Input Device**

Provisioned devices are shared with all users connected to the Cluster.

---

### 🚀 5. Create a Deployment

To create a Deployment:

1. Go to your desired Cluster and click **Create Deployment**
2. Enter:
   - Deployment **name** and **description**
   - Select the **Canvas Version** to deploy
3. Assign devices to each Element:
   - Cameras → provisioned Input Devices
   - AI Elements (e.g., Person Detector) → provisioned Computers
4. Click **Deploy**

✅ Your Flow is now live in the Cluster and will continue running even when Navigator is closed.

---

Now you’re ready to scale your AI Flows into production using Clusters and persistent Deployments.
