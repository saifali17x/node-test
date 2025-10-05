import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  console.log(`Request for: ${req.url}`);

  let filePath = "";
  let contentType = "text/html";

  // Set content type based on file extension
  if (req.url.endsWith(".css")) {
    contentType = "text/css";
  } else if (req.url.endsWith(".js")) {
    contentType = "text/javascript";
  } else if (req.url.endsWith(".png")) {
    contentType = "image/png";
  } else if (req.url.endsWith(".jpg") || req.url.endsWith(".jpeg")) {
    contentType = "image/jpeg";
  } else if (req.url.endsWith(".svg")) {
    contentType = "image/svg+xml";
  }

  // Routing
  if (req.url === "/" || req.url === "/index.html") {
    filePath = path.join(__dirname, "index.html");
  } else if (req.url === "/about.html") {
    filePath = path.join(__dirname, "about.html");
  } else if (req.url === "/contact.html") {
    filePath = path.join(__dirname, "contact.html");
  } else if (req.url === "/styles.css") {
    filePath = path.join(__dirname, "styles.css");
  } else {
    // Check if the file exists in our directory
    const requestedFile = path.join(__dirname, req.url);
    if (fs.existsSync(requestedFile)) {
      filePath = requestedFile;
    } else {
      filePath = path.join(__dirname, "404.html");
      contentType = "text/html";
    }
  }

  // --- Unified file reading logic ---
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Try to serve 404.html if available
      fs.readFile(path.join(__dirname, "404.html"), (err404, data404) => {
        if (err404) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Server error.");
        } else {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(data404);
        }
      });
    } else {
      const statusCode = filePath.includes("404.html") ? 404 : 200;
      res.writeHead(statusCode, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
