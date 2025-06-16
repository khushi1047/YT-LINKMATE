# YTLinkMate - YouTube Description Link Tracker 🚀

YTLinkMate is a Chrome Extension that solves a real-world problem:
When you click a link from a YouTube video description and accidentally close the tab, it’s difficult to find that link in browser history.
YTLinkMate solves this by tracking and saving the clicked description links automatically.

---

## 📌 Features
- ✅ Tracks links clicked inside YouTube video descriptions.
- ✅ Automatically saves the clicked links with timestamps.
- ✅ Recovers links even if the new tab was accidentally closed.
- ✅ Stores up to the last 10 clicked links.
- ✅ Displays saved links in an easy-to-use popup.
- ✅ Works across YouTube’s dynamic single-page navigation using MutationObserver.

---

## 🛠️ Tech Stack
- Chrome Extension APIs
- Manifest v3
- JavaScript
- HTML/CSS

---

## 📂 Folder Structure
```
YTLinkMate/
├── manifest.json
├── content.js
├── popup.html
├── popup.js
└── icon.png
```

---

## 🚀 How to Install (Load Unpacked)
1. Go to `chrome://extensions` in Chrome.
2. Enable **Developer Mode.**
3. Click **Load Unpacked** and select the `YTLinkMate` folder.
4. Pin the extension to your Chrome toolbar.

---

## 🎥 How to Use
1. Open a YouTube video.
2. Click any link in the video description.
3. The extension will track the link and save it immediately.
4. Open the extension popup to see a list of recently clicked links.
5. Click on any saved link to reopen it instantly.

---

## ✅ Why This Project is Unique
- Solves a niche, real-world problem.
- There is no common Chrome extension that specifically tracks YouTube description link clicks.
- Uses manual click interception and dynamic page tracking with MutationObserver for reliability.

---

## 💻 Screenshots

![YTLinkMate Screenshot]("C:\Users\kushi\Pictures\Screenshots\Screenshot 2025-06-16 103144.png")
---

## 📝 Author
**Khushi Bansal**
A professional Chrome extension developer focused on solving real user frustrations with innovative tools.
