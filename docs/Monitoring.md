---
sidebar_position: 11
---



# Developer Guide: Deploying `webai_monitoring` Prometheus Exporter on macOS

This guide walks you through deploying a Prometheus-compatible exporter on macOS (including M1/M2/M3), monitoring CPU, memory, disk I/O, network throughput, and simulated NPU/GPU stats.

---

## ✨ Features

- CPU usage & power
- Memory usage
- GPU usage (approximate) & power
- NPU usage & power (mocked)
- Disk read/write (bytes/sec + IOPS)
- Network send/receive (bytes/sec)

---

## ✅ Prerequisites

- macOS 13+ (Apple Silicon or Intel)
- Homebrew
- Python 3.9+
- Prometheus (local or remote)
- Grafana (for visualization)

---

## ⚙️ Installation

### 1. Create Project Directory

```bash
mkdir -p ~/webai_monitoring
cd ~/webai_monitoring
```

### 2. Save Exporter Script

Place your `webai_monitoring.py` script here.

### 3. Create Python Environment

```bash
python3 -m venv venv
source venv/bin/activate
pip install flask prometheus_client psutil
```

### 4. Run Exporter

```bash
sudo python webai_monitoring.py
```

Visit: [http://localhost:8000/metrics](http://localhost:8000/metrics)

---

## 📈 Connect to Prometheus

In your `prometheus.yml`:

```yaml
scrape_configs:
  - job_name: 'mac_metrics'
    static_configs:
      - targets: ['localhost:8000']
```

Then restart Prometheus:

```bash
brew services restart prometheus
```

---

## 📊 Grafana Visualization

Use metrics like:

- `mac_cpu_usage_percent`
- `mac_disk_read_iops`, `mac_disk_write_iops`
- `mac_net_recv_bytes_per_sec`, `mac_net_sent_bytes_per_sec`

### Recommended Units:
- `bytes/sec (IEC)` for disk/network
- `ops` for IOPS

---

## 🚀 Run as macOS Service

### 1. Create Launch Agent

Save this to `~/Library/LaunchAgents/com.webai.monitoring.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.webai.monitoring</string>

    <key>ProgramArguments</key>
    <array>
        <string>/Users/YOUR_USER/webai_monitoring/venv/bin/python3</string>
        <string>/Users/YOUR_USER/webai_monitoring/webai_monitoring.py</string>
    </array>

    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/tmp/webai_monitoring.log</string>
    <key>StandardErrorPath</key>
    <string>/tmp/webai_monitoring.err</string>
</dict>
</plist>
```

Replace `YOUR_USER` with your macOS username.

### 2. Load the Service

```bash
launchctl load ~/Library/LaunchAgents/com.webai.monitoring.plist
```

To stop:

```bash
launchctl unload ~/Library/LaunchAgents/com.webai.monitoring.plist
```

---

## 🧠 Tips

- For production, remove `sudo` if `powermetrics` isn't required
- Use `brew services` for Prometheus & Grafana auto-start
- Combine with temperature sensors like `mac_temp` later

---

## 🛡️ Security Notes

- Avoid running as root unless necessary
- Restrict access to `:8000/metrics` if used in multi-user setup
- Store logs in `/tmp` or a secure logging directory

---

## 📬 Need More?

This system is extensible! Add:
- Per-disk metrics
- App-specific CPU tracking
- Temp & fan stats from Swift binaries

Happy monitoring! 🚀
