'use client';


import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
    email: string;
}

export default function UserCrud() {
    const [users, setUsers] = useState<User[]>([]); //any = คือตัวแปรที่สามารถเก็บข้อมูลได้ทุกชนิด
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [editId, setEditId] = useState<number | null>(null);

    const [searchId, setSearchId] = useState('');
    const [searchedUser, setSearchedUser] = useState<User | null>(null);


    // Exception Handling
    // 1. GET/api/crud (ดึงข้อมูล)
    const fetchUsers = async () => {
        try {
            const res = await fetch('/api/crud/user');
            if (!res.ok)
                throw new Error('Failed to fetch users');
            const data = await res.json();
            setUsers(data);

        } catch (error) {
            console.log(error);
            alert('Error fetching users');
        }
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    // 2. POST/api/crud/user (เพิ่มข้อมูล) 4. PUT/api/crud/user/[id] (แก้ไขข้อมูล) 

    const handLeSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const body = JSON.stringify({ name, email });
            const headers = { 'Content-Type': 'application/json' };

            if (editId) {
                // Update แก้ไขข้อมูล //
                const res = await fetch(`/api/crud/user/${editId}`, {
                    method: 'PUT',
                    headers: headers,
                    body: body
                });
                if (!res.ok) throw new Error('Failed to update user');
                alert('User updated successfully');
                setEditId(null);

            } else {
                // Create เพิ่มข้อมูล //
                const res = await fetch('/api/crud/user', {
                    method: 'POST',
                    headers: headers,
                    body: body
                });
                if (!res.ok) throw new Error('Failed to create user');
                alert('User created successfully');
            }
            setName(''); // ล้างค่า name
            setEmail(''); // ล้างค่า email
            fetchUsers(); // ดึงข้อมูลใหม่มาแสดง
        } catch (error) {
            console.log(error);
            alert('Error submitting user');
        }
    }

    //3.DELETE/api/crud/user/[id] (ลบข้อมูล)
    const handleDelete = async (id: number) => {
        if (!confirm('ยืนยันการลบข้อมูลหรือไม่?')) return; //ยืนยันการลบ
        try {
            const res = await fetch(`/api/crud/user/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Failed to delete user');
            alert('User deleted successfully');
            fetchUsers(); //ดึงข้อมูลใหม่มาแสดง
        } catch (error) {
            console.log(error);
            alert('Error deleting user');
        }
    }

    //5.GET/api/crud/user/[id] (ค้นหาข้อมูลทีละ id)
    const handleSearch = async () => {
        if (!searchId) return alert('กรุณากรอกรหัส ID'); //ถ้าไม่มีค่า searchId ให้ return
        try {
            const res = await fetch(`/api/crud/user/${searchId}`);
            if (!res.ok) throw new Error('ไม่พบข้อมูล User');
            const data = await res.json();
            setSearchedUser(data);
        } catch (error) {
            console.log(error);
            alert('Error searching user');
        }
    }

    return (
        <div className="p-10 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">User CRUD Example</h1>
            <div className="bg-gray-100 p-6 rounded-lg mb-8 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">
                    {editId ? 'Edit User' : 'Add User'}
                </h2>
                <form onSubmit={handLeSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-800 mb-1">
                            Name
                        </label>

                        {/*สร้างช่องกรอกข้อมูล  */}
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-2xl"
                            required
                            placeholder="กรุณากรอกชื่อ"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-800 mb-1">
                            Email
                        </label>

                        {/*สร้างช่องกรอกข้อมูล  */}
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-2xl"
                            required
                            placeholder="กรุณากรอกอีเมล"
                        />
                    </div>

                    {/*สร้างปุ่มบันทึก  */}
                    <div className="flex gap-4">
                        <button type="submit" className="px-4 py-2 bg-green-400 text-white rounded-2xl">
                            {editId ? 'Update' : 'Add'}
                        </button>

                        {editId && (
                            <button type="button"
                                className="px-4 py-2 bg-red-400 text-white rounded-2xl"
                                onClick={() => {
                                    setEditId(null);
                                    setName('');
                                    setEmail('');
                                }}>
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">All Users</h2>
                <div className="space-y-2">
                    {users.length === 0 && <p className="text-gray-500">No users found</p>}
                    {users.map(user => (
                        <div key={user.id}
                            className="flex items-center justify-between p-4 bg-white border border-gray-300 rounded-2xl">
                            <div>
                                <p className="font-semibold text-gray-800">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                            <div className="flex gap-2">

                                {/*สร้างปุ่มแก้ไข  */}
                                <button
                                    onClick={() => {
                                        setEditId(user.id);
                                        setName(user.name);
                                        setEmail(user.email);
                                    }}
                                    className="px-3 py-1 bg-yellow-400 text-white rounded-xl text-sm">
                                    Edit
                                </button>

                                {/*สร้างปุ่มลบ  */}
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="px-3 py-1 bg-red-400 text-white rounded-xl text-sm">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ค้นหาข้อมูลทีละ id */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Search User</h2>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                        className="w-full px-2 py-2 bg-white border border-gray-300 rounded-2xl"
                        required
                        placeholder="กรุณากรอกรหัส ID"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-4 py-2 bg-green-400 text-white rounded-2xl">
                        Search
                    </button>
                </div>

                {/* แสดงข้อมูลที่ค้นหา */}
                {searchedUser && (
                    <div className="bg-green-50 border border-green-400 p-2 mt-2 rounded-2xl text-green-800">
                        <p><strong>ID:</strong> {searchedUser.id}</p>
                        <p><strong>Name:</strong> {searchedUser.name}</p>
                        <p><strong>Email:</strong> {searchedUser.email}</p>
                    </div>
                )}
            </div>

        </div>
    );
}


