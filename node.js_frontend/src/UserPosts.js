import React, { useState, useEffect } from "react";

function UserPosts({ userId }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect with userId as a parameter
    useEffect(() => {
        if (!userId) return; // Prevent running if no userId is provided

        console.log(`Fetching posts for user: ${userId}`);
        setLoading(true);

        // Fetch posts for the given userId
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, [userId]); // Dependency array includes userId

    return (
        <div>
            <h2>User {userId}'s Posts</h2>
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

export default UserPosts;
