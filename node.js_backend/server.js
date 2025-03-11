const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Sample API endpoint
app.get("/api/posts", (req, res) => {
    res.json([
        { id: 1, title: "First Post" },
        { id: 2, title: "Second Post" },
    ]);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
