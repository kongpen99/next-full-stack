'use client';

import { useState } from 'react';

export default function ClientSideCode() {

    const [customers, setCustomers] = useState([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' },
    ])
    return (
        <>
            <h1>ClientSideCode</h1>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>{customer.name}</li>
                ))}
            </ul>
        </>
    );
}
