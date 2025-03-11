# Node.js Backend (Simple API)

Steps to Run:
1. Install Node.js if not already installed.
2. Create a new directory and initialize it with npm init -y.
3. Install express using npm install express.
4. Save the above code as server.js.
5. Start the server using node server.js. It will run on http://localhost:5000.


# Node.js Front End
Start the Node.jsBackend:
1. Run node server.js in your terminal. Make sure the server is running at http://localhost:5000.
2. Create a React App:
   In a new directory, create a React app using:
   <pre>
     npx create-react-app node.js_frontend
     cd my-app
   </pre>
3. Run the React App:
   Start the React app with: npm start

# Enable CORS in Your Node.js Backend
1. Install the cors Middleware:
   In your Node.jsapp, install the CORS library: <b>npm install cors</b>
2. Add CORS to Your Server Code:
   Modify your server.js file to include the CORS middleware:
<pre>
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
</pre>
3. Optional: Restrict Allowed Origins:
   <pre>
     app.use(cors({ origin: "http://localhost:3000" }));
   </pre>
