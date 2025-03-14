import React, { useState, useEffect, useCallback  } from "react";
import UserPosts from "./useEffect/UserPosts";
import ExpensiveCalculation from "./useMemo/ExpensiveCalculation";
import ChildButton from "./useMemo/ChildButton"
import DynamicDropdownWithFetch from "./DynamicDropdownWithFetch/DynamicDropdownWithFetch"
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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

  // Run npm install for a better UI
  // e.g $npm install react-bootstrap bootstrap
  // Open modal dialog
  const [show, setShow] = useState(false);

  //************************************************************************ */
  // Open modal dialog with simple form

    const [isOpen, setIsOpen] = useState(false); // State for controlling pop-up visibility
    const [formData, setFormData] = useState({ name: "", email: "" }); // State for form data

    // Open the pop-up
    const openPopup = () => setIsOpen(true);

    // Close the pop-up
    const closePopup = () => setIsOpen(false);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Close the pop-up after submission
        closePopup();
    };
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

            <hr/>
            <Button variant="primary" onClick={() => setShow(true)}>
                Open Dialog
            </Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Pop-Up Dialog</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is a React-Bootstrap dialog box!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <hr/>
            <div className="App">
                <h1>React Pop-Up Form</h1>
                <button onClick={openPopup} className="open-popup-btn">
                    Open Form
                </button>

                {/* Pop-up Window */}
                {isOpen && (
                    <div className="popup-overlay">
                        <div className="popup-box">
                            <h2>Simple Form</h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Name: </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Email: </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="submit-btn">
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={closePopup}
                                    className="close-popup-btn"
                                >
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
      </div>

      
  );
}

export default App;
