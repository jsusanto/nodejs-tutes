import React, { useState, useEffect, useCallback  } from "react";
import UserPosts from "./useEffect/UserPosts";
import ExpensiveCalculation from "./useMemo/ExpensiveCalculation";
import ChildButton from "./useMemo/ChildButton"
import DynamicDropdownWithFetch from "./DynamicDropdownWithFetch/DynamicDropdownWithFetch"
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

  //************************************************************************ */
  // Example useCallback
  const [count, setCount] = useState(0);

  // Memoize the increment function using useCallback
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array ensures the function is memoized
  //************************************************************************ */

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
            <hr/>
            <h1>useCallback Example</h1>
            <p>Count: {count}</p>
            <ChildButton onIncrement={handleIncrement} />
            <hr/>
            <DynamicDropdownWithFetch/>
      </div>
  );
}

export default App;
