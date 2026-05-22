'use client';

import { useState } from "react";

export default function UseState() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>UseState count = {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </>
    );
} 