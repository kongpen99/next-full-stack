'use client'

import { useState } from "react";

export default function DataBinding() {
    const [name, setName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [listColors, setListCoLors] = useState(['red', 'green', 'blue']);
    const [selectedColor, setSelectedColor] = useState('');

    return (
        <div>
            <input type="text" value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2"
            />
            <input
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                className="border border-gray-300 rounded-md px-4 py-2"
            />
            <select value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2">
                {listColors.map((color) => (
                    <option key={color} value={color}>
                        {color}
                    </option>
                ))}
            </select>
            <p>คุณกำลังพิมพ์: {name}</p>
            <p>คุณกำลังเลือกสี: {selectedColor}</p>
            <p>คุณกำลังเลือกสถานะ: {isAdmin ? 'Admin' : 'User'}</p>
        </div>
    )
}