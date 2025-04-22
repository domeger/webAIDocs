---
sidebar_position: 13
---


# Thunderbolt 5 Setup and Cluster Deployment with webAI

---

## 🔌 Thunderbolt 5 Daisy Chain: Overview

The following guide explains how to configure **Thunderbolt 5** daisy-chain connections using multiple Mac Minis and a MacBook.

### 💡 Image Explanation

The setup includes:
- **Three Mac Minis**
- **One MacBook**
- Devices are connected using Thunderbolt (USB-C) ports.
- The connection forms a **Thunderbolt Daisy Chain**, where devices are linked sequentially.

### ⚙️ Key Points:
- Each Mac Mini is connected through Thunderbolt ports in a sequence.
- The MacBook initiates the chain at the top.
- Thunderbolt 5 supports up to **40Gbps** transfer speeds per connection.

---

## 🧰 Before You Start

- Use **Thunderbolt 5-rated cables** (40Gbps or higher).
- Cables should be **under 2 meters** for best performance.
- Ensure each Mac has **Thunderbolt 5 compatible ports**.

---

## 🔍 Verify Thunderbolt 5 Ports

### 🔎 From macOS GUI:

1. Click  → **About This Mac**
2. Click **More Info...**
3. Scroll and click **System Report**
4. Go to **Thunderbolt/USB4**
5. Check the **Thunderbolt Version**

### 💻 Using Terminal:

```bash
system_profiler SPThunderboltDataType
```

Look for `Thunderbolt Version` in the output.

---

## 🔗 Thunderbolt 5 Setup Instructions

### Step 1: Identify Devices

- **Device A**: MacBook
- **Device B**: Mac Mini (top)
- **Device C**: Mac Mini (middle)
- **Device D**: Mac Mini (bottom)

### Step 2: Connect MacBook to First Mac Mini

- Use Thunderbolt 5 cable.
- MacBook port → Port 1A on **Mac Mini (top)**.

### Step 3: First Mac Mini → Second Mac Mini

- Port 1B (Mac Mini top) → Port 2B (Mac Mini middle)

### Step 4: Second Mac Mini → Third Mac Mini

- Port 1C (Mac Mini middle) → Port 2C (Mac Mini bottom)

### Step 5: Power On & Configure

- Power on all devices.
- Enable **Thunderbolt Bridge** in:
  - **System Settings → Network → Thunderbolt Bridge**

### Step 6: Verify Connectivity

- Go to **System Report → Thunderbolt**
- Ensure 40Gbps connections and all devices are visible.
- Transfer a file to test connectivity and speed.

---

## 🌐 Thunderbolt Bridge Network Configuration

### ✅ Step 1: Physical Connection

Ensure Thunderbolt 5 cables are securely connected in the correct order.

### ✅ Step 2: Enable Thunderbolt Bridge

- Open **System Settings → Network**
- Add **Thunderbolt Bridge** if missing:
  - Click `(…)` → **Add Service** → **Thunderbolt Bridge**

### ✅ Step 3: Auto IP Configuration

- Select **Thunderbolt Bridge**
- Under **Configure IPv4**, choose:
  - `Using DHCP with manual address` and leave blank **OR**
  - `Using DHCP` for a 169.254.x.x IP

### ✅ Step 4: Set Network Priority

- Open `(…)` menu → **Set Service Order**
- Move **Thunderbolt Bridge** to the top.

### ✅ Step 5: Final Check

- Ensure each Thunderbolt Bridge has a `169.254.x.x` IP
- Test with `ping` or file transfer

---

## 🧠 Deploying a webAI Flow via Cluster

### ✅ Prerequisites

- webAI Navigator is installed
- A flow is designed in **Canvas**
- At least one node running **webAI Runtime Agent**
- Input devices (e.g., cameras), if needed

---

### 🪄 Step-by-Step Deployment Instructions

#### Step 1: Design Your Flow

- Open Canvas and build your AI Flow.
- Elements will auto-assign your computer and camera.

#### Step 2: Save Flow Version

- Click on **three dots** in your project
- Select **"Save for Deployment"**
- To manage saved versions:
  - Click **"View Canvas Versions"**

#### Step 3: Create or Connect to a Cluster

- Click **Network → Clusters**
- Choose **"Add Cluster" → Host a new Cluster**

To connect to an existing one:
- Navigator will detect local clusters
- You can also connect via IP address

[Cluster Setup Documentation](https://support.webai.com/hc/en-us/articles/37491152329363-Deploying-Using-Clusters)

---

#### Step 4: Set Up Devices

In the **Devices** tab of the Cluster:

- **Nodes** = Machines with the Runtime Agent
- **Input Devices** = Cameras

Provision devices by clicking **Add Node** or **Add Input Device**

---

#### Step 5: Create a Deployment

- Click **New Deployment** in the cluster
- Fill in:
  - Name & Description
  - Select your saved Canvas Version

Assign devices:
- Cameras → Input Devices
- AI Components → Provisioned Computers

Click **Build** to finalize deployment.



