import React, { useState, useEffect } from "react";
import UserPosts from "./UserPosts";
import ExpensiveCalculation from "./ExpensiveCalculation";
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(1);

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

-          <br/>
          <h1>Dynamic User Posts</h1>
            <button onClick={() => setUserId(1)}>User 1</button>
            <button onClick={() => setUserId(2)}>User 2</button>
            <button onClick={() => setUserId(3)}>User 3</button>
            <UserPosts userId={userId} />

            <hr/>
            <ExpensiveCalculation/>
      </div>
  );
}

export default App;
