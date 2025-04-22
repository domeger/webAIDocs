---
sidebar_position: 8
---


# Developer Guide: Data Ingestion + Natural Q&A

**Frames** are the standard data format in WebAI. They allow you to stream structured or unstructured data (like JSON from APIs) into WebAI, which then handles summarization, chunking, embedding, and vector indexing — making your data searchable and ready for natural language Q&A.

---

## ✅ What Is a Frame?

A `Frame` is a structured object with key fields:

| Field            | Description |
|------------------|-------------|
| `ndframe`        | Data payload (image, vector, or dummy placeholder) |
| `color_space`    | Usually `ColorFormat.RGB` |
| `headers`        | Metadata like `content_type`, `tag` |
| `other_data`     | Actual content — JSON, text, metadata |
| `frame_id`       | (Optional) Unique identifier |
| `rois`           | (Optional) Regions of interest for image use cases |

---

## 🚀 Step-by-Step: How to Use Frames

### 1️⃣ Pull or Prepare Your Data

Example from a weather API:

```json
{
  "condition": "Clear",
  "temp_f": 73,
  "humidity": 35,
  "wind_mph": 6
}
```

---

### 2️⃣ Add a Timestamp and Context

```python
from datetime import datetime
now = datetime.now()

timestamp = now.isoformat()
day = now.strftime("%Y-%m-%d")
```

---

### 3️⃣ Build the Frame

```python
import numpy as np
from element_framework.comms.messages import Frame, ColorFormat

frame = Frame(
    ndframe=np.zeros((1, 1, 3), dtype=np.uint8),
    color_space=ColorFormat.RGB,
    headers={
        "content_type": "application/json",
        "tag": "weather_observation"
    },
    other_data={
        "filename": f"weather_Austin_TX_{timestamp}",
        "timestamp": timestamp,
        "day": day,
        "city": "Austin",
        "state": "TX",
        "data": {
            "condition": "Clear",
            "temp_f": 73,
            "humidity": 35,
            "wind_mph": 6
        },
        "message": "As of 2:30 PM on April 4th, Austin weather is Clear, 73°F, humidity 35%, wind 6 mph."
    }
)
```

---

### 4️⃣ Yield the Frame in Your Element

```python
yield ctx.outputs.weather_data(frame)
```

---

## 🧠 How WebAI Uses the Frame

- **Vector search**: based on embedded `message` or auto-summarized JSON
- **Structured filtering**: using `city`, `day`, `tag`, etc.
- **Natural language Q&A**: WebAI can generate answers based on context

---

## 💬 Example Questions You Can Ask

### “What’s the current weather in Austin?”
- Filters `tag=weather_observation`, `city=Austin`
- Returns most recent `timestamp`

---

### “What was the average temperature today in Austin?”
- Filters all Frames from `day=today`
- Averages `temp_f` across `other_data["data"]`

---

### “Was it warmer this morning or this afternoon?”
- Compares temperature ranges by hour

---

### “Summarize the weather trend in Austin over the last 3 days.”
- Looks back by `timestamp`, returns natural summary

---

## ✅ Tips for Effective Frames

| Field                | Purpose |
|----------------------|---------|
| `timestamp`          | Enables time-aware queries |
| `day`                | Simplifies daily filtering |
| `city`, `state`      | Enables location-specific questions |
| `headers["tag"]`     | Use tags like `"weather_observation"`, `"alert"`, etc. |
| `other_data["message"]` | Improves search quality and natural answers |

---

## 🧪 Example Frame for Q&A

```json
{
  "ndframe": "np.zeros((1,1,3))",
  "color_space": "RGB",
  "headers": {
    "content_type": "application/json",
    "tag": "weather_observation"
  },
  "other_data": {
    "filename": "weather_Austin_TX_2025-04-04T14:30",
    "timestamp": "2025-04-04T14:30:00",
    "day": "2025-04-04",
    "city": "Austin",
    "state": "TX",
    "data": {
      "condition": "Clear",
      "temp_f": 73,
      "humidity": 35,
      "wind_mph": 6
    },
    "message": "As of 2:30 PM on April 4th, Austin weather is Clear, 73°F, humidity 35%, wind 6 mph."
  }
}
```

---

## ✅ Final Summary

- Use `Frame` to standardize data input into WebAI
- Include timestamps and location metadata for filtering
- Add a `message` or raw `data` to support natural Q&A
- WebAI will embed, chunk, and index for semantic search

---

## 🧩 Want More?

Need a template for:
- Crypto prices
- Financial data
- System alerts

Let us know and we’ll tailor one for your use case.
---

## 🪙 Example: Crypto Prices

Use case: Ingest hourly BTC/ETH prices from a crypto API.

```python
Frame(
    ndframe=np.zeros((1, 1, 3), dtype=np.uint8),
    color_space=ColorFormat.RGB,
    headers={
        "content_type": "application/json",
        "tag": "crypto_price"
    },
    other_data={
        "timestamp": "2025-04-04T14:00:00",
        "day": "2025-04-04",
        "symbol": "BTC",
        "exchange": "Coinbase",
        "price_usd": 67214.25,
        "volume": 24300000,
        "message": "At 2:00 PM on April 4th, BTC was trading at $67,214.25 on Coinbase with a volume of $24.3M."
    }
)
```

**Ask Questions Like:**
- “What’s the latest Bitcoin price?”
- “What was the average ETH price yesterday?”
- “How did crypto prices change over the last 3 days?”

---

## 💼 Example: Financial Data

Use case: Stream KPIs, earnings data, or internal finance metrics.

```python
Frame(
    ndframe=np.zeros((1, 1, 3)),
    color_space=ColorFormat.RGB,
    headers={
        "content_type": "application/json",
        "tag": "financial_metric"
    },
    other_data={
        "timestamp": "2025-04-04T09:00:00",
        "day": "2025-04-04",
        "metric": "Monthly Recurring Revenue",
        "value": 1250000,
        "currency": "USD",
        "message": "As of April 4th, Monthly Recurring Revenue (MRR) reached $1.25M."
    }
)
```

**Ask Questions Like:**
- “What is our current MRR?”
- “How has ARR changed over the quarter?”
- “Show me financial highlights for this month.”

---

## ⚠️ Example: System Alerts

Use case: Ingest system event data like service failures or resource limits.

```python
Frame(
    ndframe=None,
    color_space=ColorFormat.RGB,
    headers={
        "content_type": "system/event",
        "tag": "system_alert"
    },
    other_data={
        "timestamp": "2025-04-04T01:45:00",
        "day": "2025-04-04",
        "severity": "high",
        "service": "Payment Gateway",
        "status": "failure",
        "message": "High severity alert: Payment Gateway failed health check at 01:45 AM on April 4th."
    }
)
```

**Ask Questions Like:**
- “Did any high severity alerts happen today?”
- “What services failed last night?”
- “Summarize all system alerts for the past 24 hours.”