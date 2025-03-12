import React, { useState, useEffect } from "react";

function DynamicDropdownWithFetch() {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        // Simulate an API call
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                // Map data to extract required values
                const userNames = data.map((user) => user.name);
                setOptions(userNames);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []); // Empty dependency array ensures it runs once on component mount

    return (
        <div>
            <h1>Dynamic Dropdown with Fetch</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <select onChange={(e) => setInputValue(e.target.value)}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                
            )}
            <br/>
            <label>
                    Input Value (Drop Down onChange):
                    <input
                        type="text"
                        value={inputValue}
                        disabled="true"
                    />
            </label>
        </div>
    );
}

export default DynamicDropdownWithFetch;
