# BBQ Master - Sign-Up Server

This project is a simple Node.js web server that serves a sign-up page for a "BBQ Master" webinar.

## Project Structure

- `server.js`: The main entry point for the Node.js server.
- `public/`: This directory contains all the static assets.
  - `index.html`: The main HTML file for the sign-up page.
  - `style.css`: The stylesheet for the sign-up page.
  - `images/`: Contains images used on the page.
- `utils/`: This directory contains utility functions for the server.
  - `serveStatic.js`: A utility to serve static files.
  - `getContentType.js`: A utility to get the content type of a file.
  - `sendResponse.js`: A utility to send a response to the client.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yk-david/Sign-Up-component-BBQ-Master.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Sign-Up-component-BBQ-Master
   ```
3. There are no dependencies to install for this project.

### Running the Server

To start the server, run the following command:

```bash
node server.js
```

The server will start on port 8000. You can access the sign-up page by navigating to `http://localhost:8000` in your web browser.
