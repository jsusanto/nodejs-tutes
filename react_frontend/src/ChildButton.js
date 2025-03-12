import React from "react";

function ChildButton({ onIncrement }) {
    console.log("ChildButton rendered!");
    return (
        <button onClick={onIncrement}>Increment Count</button>
    );
}

export default React.memo(ChildButton); // Memoize the child component to prevent unnecessary renders
