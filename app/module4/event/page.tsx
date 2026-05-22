'use client';

import { useState } from "react";

export default function Event() {
    const [name, setName] = useState('');
    return (
        <div>
            <h1>Input</h1>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2"
            />
            <button
                onClick={() => setName(' ')}
                className="bg-blue-500 rounded-lg px-4 py-2 ms-3  mt-3
                hover:bg-red-600 cursor-pointer"
            >
                Clear
            </button>
            <p className="mt-3">คุณกำลังพิมพ์: {name}</p>

        </div>
    )
}  