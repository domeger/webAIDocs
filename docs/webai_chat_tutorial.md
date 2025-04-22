---
sidebar_position: 7
---


# Developer Guide: Chat Integration Guide

This guide explains how to integrate the custom chat interface and backend API into the webAI platform. It walks through the components in `index.html` and `app.py`, explaining how they interact and how developers can extend or integrate them.

---

## Overview
This system is composed of:
- A **React-based chatbot UI** inside a static `index.html` (using TailwindCSS and Babel).
- A **Flask backend (`app.py`)** that interfaces with the WebAI API, processes user input, and returns assistant responses.

---

## Part 1: Frontend – `index.html`

### 1.1 Technologies Used
- **React 18** (via CDN)
- **TailwindCSS** for styling
- **Babel** for JSX support in-browser

### 1.2 Core Features
- Dynamic name/phone form
- React `useState`, `useEffect` for chat management
- `fetch('/submit')` call sends the user data and conversation history to the backend
- Deduplication logic to avoid repeated messages
- Typing animation during WebAI responses

### 1.3 Chat Flow
1. User inputs name and phone → clicks "Start"
2. App calls `/submit` API with empty history
3. WebAI responds with an initial greeting → shown in chat
4. User sends messages → sent to `/submit` along with conversation history
5. WebAI responds → appended to the chat

### 1.4 Code Highlights

```js
// Tracks chat messages
const [conversation, setConversation] = React.useState([]);

// Starts session with greeting
const handleStart = async () => {
  const res = await fetch("/submit", { method: "POST", body: JSON.stringify({ name, phone, conversation_history: [] }) });
  const data = await res.json();
  setConversation([{ role: "assistant", content: data.choices[0].message.content }]);
};

// Sends user message
const handleSend = async () => {
  const updatedConversation = [...conversation, { role: 'user', content: message }];
  setConversation(updatedConversation);
  const res = await fetch("/submit", { body: JSON.stringify({ name, phone, conversation_history: updatedConversation }) });
  const data = await res.json();
  const reply = data.choices[0].message.content;
  // Avoid duplicates
  if (reply && reply !== updatedConversation.at(-1)?.content) {
    setConversation([...updatedConversation, { role: 'assistant', content: reply }]);
  }
};
```

---

## Part 2: Backend – `app.py`

### 2.1 Technologies Used
- **Flask** for routing and API
- **Requests** to communicate with WebAI
- **Streaming support** for large responses

### 2.2 System Prompt Customization

```python
def build_english_system_prompt(name, phone):
    return {
        "role": "system",
        "content": f"""You are a professional assistant representing webAI Credit Union...
        The user is {name}, phone: {phone}..."""
    }
```

### 2.3 Streaming WebAI Response
The function `call_webai_stream()` handles:
- SSE-style JSON streaming
- Multiple message chunks
- Decoding them into a complete assistant message

### 2.4 Deduplication Logic (Optional)
To avoid greeting loops:

```python
if not history:
    messages.append({
        "role": "user",
        "content": f"Hi, my name is {name}. My phone number is {phone}."
    })
```

Only applied on the first user message.

### 2.5 API Endpoint: `/submit`

**Accepts:**

```json
{
  "name": "Jane Doe",
  "phone": "555-1234",
  "conversation_history": [
    { "role": "user", "content": "Hello" }
  ]
}
```

**Returns:**

```json
{
  "choices": [
    { "message": { "role": "assistant", "content": "Hi Jane, how can I help you today?" } }
  ]
}
```

---

## Part 3: Integration Instructions

### 3.1 Setting up Locally

```bash
pip install flask requests
python app.py
# visit http://localhost:5000
```

### 3.2 Deploying to webAI
- Place `index.html` into your hosted UI (or webAI CMS container)
- Use webAI's API key and update the endpoint if hosted differently
- Ensure TLS and domain config are matched

---

## Part 4: Customization Tips

- 🤖 Swap system prompt content for tone/policy changes
- 🌐 Translate prompt or UI to Spanish, Vietnamese, etc.
- 🗣️ Add speech-to-text frontends (WebSpeech API)
- 📊 Integrate CRM/contact logging via additional `/log` endpoints


