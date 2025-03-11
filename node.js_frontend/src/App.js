import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Fetch data from Node.js backend
      fetch("http://localhost:5000/api/posts")
          .then((response) => response.json())
          .then((data) => {
              setPosts(data);
              setLoading(false);
          })
          .catch((error) => console.error("Error fetching posts:", error));
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
      <div>
          <h1>Posts</h1>
          {loading ? (
              <p>Loading...</p>
          ) : (
              <ul>
                  {posts.map((post) => (
                      <li key={post.id}>{post.title}</li>
                  ))}
              </ul>
          )}
      </div>
  );
}

export default App;
