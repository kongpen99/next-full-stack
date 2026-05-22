'use client'

import { useState } from "react";

export default function ArrayLength() {
    const [name, setName] = useState('');

    return (
        <div>
            <input type="text" value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2"
            />
            {name.length > 0 && <p>Hello: {name}</p>}
            {name === 'admin' ? <p>Admin</p> : <p>User</p>}
        </div>
    )
}


