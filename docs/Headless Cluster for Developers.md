---
sidebar_position: 9
---

# Deploying an Headless webAI Cluster Using the CLI

This guide walks through how to set up an **8-node distributed LLM cluster** using the `webAI CLI`. It covers everything from SSH key generation to deploying a scaled AI model across multiple machines.

---

## 📋 Prerequisites

- 8 machines (Mac or Linux preferred) on the **same subnet/LAN**
- All machines must have:
  - Internet access
  - SSH enabled
  - Xcode Command Line Tools installed (for macOS: `xcode-select --install`)
- One machine will be designated as the **controller**
- The rest will be **workers**

---

## 🔐 Step 1: Generate SSH Key (on Controller)

Open terminal on your controller machine:

```bash
ssh-keygen -t ed25519 -C "webai@controller"
```

- Press `Enter` to accept default file location (`~/.ssh/id_ed25519`)
- Leave the passphrase empty (optional)

---

## 📬 Step 2: Copy SSH Key to Each Worker Node

Replace `user` and `IP` with actual usernames and IPs of your workers:

```bash
ssh-copy-id user@192.168.1.101
ssh-copy-id user@192.168.1.102
ssh-copy-id user@192.168.1.103
ssh-copy-id user@192.168.1.104
ssh-copy-id user@192.168.1.105
ssh-copy-id user@192.168.1.106
ssh-copy-id user@192.168.1.107
```

> 💡 If `ssh-copy-id` is not available on your system:
```bash
cat ~/.ssh/id_ed25519.pub | ssh user@192.168.1.101 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

---

## ✅ Step 3: Verify SSH Connectivity

Ensure passwordless access works:

```bash
ssh user@192.168.1.101
```

Repeat for all nodes to confirm access.

---

## 📁 Step 4: Unpack webAI CLI

On the controller:

```bash
unzip webai-cli.zip
cd Headless
```

Ensure the folder structure looks like:

```
Headless/
├── rtctl
├── ips.yaml
└── runtime/
```

---

## 🛠️ Step 5: Configure `ips.yaml`

Edit the `ips.yaml` file to define your cluster layout:

```yaml
controller: 192.168.1.100
workers:
- user@192.168.1.101
- user@192.168.1.102
- user@192.168.1.103
- user@192.168.1.104
- user@192.168.1.105
- user@192.168.1.106
- user@192.168.1.107
```

- Replace `user` with the actual username on each node.
- Comment out any line with `#` to disable a node.

---

## 🚀 Step 6: Start the Cluster

Run from within the `Headless/` directory:

```bash
# Start controller
./rtctl start controller

# Start all workers
./rtctl start workers --from-file ips.yaml --controller-ip 192.168.1.100
```

---

## 🤖 Step 7: Run a Model

### To see all available models:
```bash
./rtctl run model --list
```

### To run a scaled (distributed) model:
```bash
./rtctl run scaled -f ips.yaml --model mlx-community/Meta-Llama-3.1-8B-Instruct-4bit
```

---

## 💬 Step 8: Interact with the Model

Once the model is running:

```bash
./rtctl run chat "What's the fastest land animal?"
```

You’ll see performance stats like:
- `ttft` (Time to First Token)
- `tps` (Tokens Per Second)

---

## 🧹 Step 9: Tear Down the Cluster

To stop the running model:

```bash
./rtctl stop scaled
```

To stop the workers:

```bash
./rtctl stop workers -f ips.yaml
```

To stop the controller:

```bash
./rtctl stop controller
```

(Optional full cleanup)

```bash
./rtctl clean -f ips.yaml
```

---

## 🧠 Tips

- Use a private network or VLAN for optimal performance.
- You can mix Wi-Fi, Ethernet, and Thunderbolt — but Thunderbolt is preferred when available.
- Use `./rtctl status -f ips.yaml` to check cluster health.

---

