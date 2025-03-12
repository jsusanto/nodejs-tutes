import React, { useState, useMemo } from "react";

/*
Benefits of useMemo:
It avoids unnecessary recalculations, which can improve performance for expensive computations.

It minimizes re-renders of child components by caching computed values.
*/

function ExpensiveCalculation() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    // Simulate an expensive computation
    const computeSum = (num) => {
        console.log("Computing sum...");
        let sum = 0;
        for (let i = 0; i < 1e6; i++) {
            sum += num;
        }
        return sum;
    };

    // useMemo to memoize the result of computeSum
    const memoizedSum = useMemo(() => computeSum(count), [count]);

    return (
        <div>
            <h1>useMemo Example</h1>
            <p>
                Current Count: {count} <br />
                Computed Sum: {memoizedSum}
            </p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Increment Count
            </button>

            <p>
                <label>
                    Input Value (Unrelated to Computation):
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </label>
            </p>
        </div>
    );
}

export default ExpensiveCalculation;
