---
sidebar_position: 6
---

# Develper Guide: WebAI Use Case Script

## 📄 Overview

This Bash script automates the setup of a **WebAI project environment**, including:

- Creating a project and canvas
- Importing element packages (e.g., API and Document QnA)
- Fetching metadata (clusters, computers, elements)
- Updating the canvas with node connections
- Exporting environment variables (`CLUSTER_ID`, `CONNECTION_ID`) for downstream use

---

## 🧰 Requirements

Before using this script, ensure you have the following installed:

- `bash` (with `set -euo pipefail` support)
- `curl` for HTTP requests
- `jq` for working with JSON
- Local WebAI API running at `http://localhost:3001`
- Element packages located at:
  - `~/.webai/elements/packages/0aeaf0ae-ddd7-50e9-b36e-45519ab5ffb3.zip`
  - `~/.webai/elements/packages/37e08d91-5339-5e55-873c-a8d1d7606f7c.zip`

---

## ▶️ Running the Script

```bash
chmod +x setup-webai-env.sh
./setup-webai-env.sh
```

On success, it will output debug info and export `CLUSTER_ID` and `CONNECTION_ID` into your environment.

---

## 📌 Script Breakdown

### 1. **API Helper Function**

```bash
api_call <METHOD> <URL> [<DATA>]
```

A utility to simplify `curl` calls with proper headers.

---

### 2. **Create Project**

Creates a new WebAI project with a timestamped ID.

```json
POST /projects
{ "id": "test-project-...", "name": "Test Project" }
```

---

### 3. **Get First Connection and Cluster**

Fetches:

- First available **Connection ID**
- Associated **Cluster ID**

```bash
GET /connections
GET /connections/:connectionId/clusters
```

---

### 4. **Create Canvas**

Creates a basic canvas in the new project.

```json
POST /projects/:projectId/canvases
{
  "frameMethod": "someMethod",
  "name": "Test Canvas",
  "properties": { "nodes": [], "edges": [] }
}
```

---

### 5. **Import Element Packages**

Imports two elements:

- **API Element**
- **Document QnA Element**

```bash
POST /admin/elements/import
{ "path": "..." }
```

---

### 6. **Fetch All Elements**

Retrieves metadata for imported elements including:

- `id`
- `latestVersion`

```bash
GET /admin/elements
```

---

### 7. **Get Computers**

Fetches available computers in the cluster to determine `runningOn`.

```bash
GET /connections/:connectionId/clusters/:clusterId/computers
```

---

### 8. **Update Canvas**

Updates the canvas with two nodes:

- API Node
- Document QnA Node

Connects them via two edges:
- API → QnA
- QnA → API

```json
PUT /projects/:projectId/canvases/:canvasId
{ nodes: [...], edges: [...] }
```

---

### 9. **Export IDs**

Exports environment variables for reuse:

```bash
export CLUSTER_ID=...
export CONNECTION_ID=...
```

---

## 🔍 Notes

- Adjust the `"runningOn"` and `form` fields based on your environment if needed.
- You can add additional logic for multiple canvases, clusters, or custom frame methods.

---

## 🧪 Troubleshooting

| Issue | Solution |
|------|----------|
| `jq: command not found` | Install `jq`: `sudo apt install jq` or `brew install jq` |
| No cluster/computer found | Ensure WebAI backend is running and populated |
| Element import fails | Verify the file paths exist and have correct permissions |

---

## 💡 Customization Ideas

- Use `read` prompts for interactive project/canvas naming.
- Add `--verbose` or `--dry-run` options for safer execution.
- Extend to deploy actual nodes or test queries after setup.
