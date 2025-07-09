# 🌊 Node.js 24 Web Streams Demo

This project showcases how to use the **Web Streams API** in **Node.js 24** to read, transform, and write large files efficiently using native streams.

## 📂 Files

- `generate-big-file.js` – Creates a large dummy file for testing
- `stream-transform.js` – Reads the file, transforms it (to uppercase), and writes output
- `hello.txt` – A small sample file for simple testing

## 🚀 How to Run

1. Ensure you're using **Node.js v24+**
2. Run the generator to create a test file:
    ```bash
    node generate-big-file.js
    ```
3. Run the stream pipeline:
    ```bash
    node stream-transform.js
    ```
