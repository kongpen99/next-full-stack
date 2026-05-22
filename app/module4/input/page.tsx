'use client';

import { useState } from "react";

export default function Input() {
    const [name, setName] = useState('');
    return (
        <div>
            <h1>Input</h1>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2"

            />
            <p>คุณกำลังพิมพ์: {name}</p>

        </div>
    );
}