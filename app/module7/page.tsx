'use client';

import { useState } from "react";

export default function Module7page() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [updateName, setUpdateName] = useState('');
    const [Id, setId] = useState('');
    const [oneUser, setOneUser] = useState(null);


    //GET call
    const load = async () => {
        const res = await fetch('/api/users');
        setUsers(await res.json());

    }
    //GET one 
    const loadOne = async () => {
        if (!Id) return alert('กรุณาใส่ Id');
        const res = await fetch(`/api/users/${Id}`);
        const data = await res.json();
        setOneUser(data);
    }
    //POST call
    const add = async () => {
        await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        load();
    }

    //PUT call
    const update = async () => {
        await fetch(`/api/users/${Id}`, {
            method: 'PUT',
            body: JSON.stringify({ name: updateName }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        load();
    }

    //DELETE call
    const remove = async () => {
        await fetch(`/api/users/${Id}`, {
            method: 'DELETE',
        });
        setOneUser(null);
        load();
    }
    return (
        <div style={{ padding: '30px' }}>
            <h1>Module 7 -API CRUD </h1>
            <button onClick={load} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Load Users
            </button>
            <pre className="bg-gray-300 mt-2 p-2 rounded-xl">{JSON.stringify(users, null, 2)}
            </pre>
            <h3>Load One user</h3>
            <input value={Id} onChange={e => setId(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md mr-2" />

            <button onClick={loadOne} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Load One
            </button>
            <pre className="bg-gray-300 mt-2 p-2 rounded-xl">{JSON.stringify(oneUser, null, 2)}
            </pre>
            <h3>Add User</h3>
            <input value={name} onChange={e => setName(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md mr-2" />
            <button onClick={add} className="bg-green-500  text-white font-bold py-2 px-4 rounded">
                Add
            </button>

            <h3>Update User</h3>
            <input value={Id} onChange={e => setId(e.target.value)}
                placeholder="Enter Id"
                className="px-4 py-2 border border-gray-300 rounded-md mr-2" />

            <input value={updateName} onChange={e => setUpdateName(e.target.value)}
                placeholder="Enter Name"
                className="px-4 py-2 border border-gray-300 rounded-md mr-2" />
            <button onClick={update} className="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
                Update
            </button>

            <h3>Delete User</h3>
            <input value={Id} onChange={e => setId(e.target.value)}
                className="px-4 py-2 border border-gray-400 rounded-md mr-2" />
            <button onClick={remove} className="bg-red-500  text-white font-bold py-2 px-4 rounded">
                Delete
            </button>

        </div>
    )
} 