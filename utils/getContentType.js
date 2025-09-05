export function getContentType(ext) {
  const types = {
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "iamge/svg+xml",
  };

  return types[ext] || "text/html";
}
