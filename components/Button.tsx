'use client';

import React from "react";

interface ButtonProps {

    children: React.ReactNode;
    message?: string;
}

export default function Button({ children, message }: ButtonProps) {
    const handleAlert = () => {
        alert(message || 'Default message');
    }
    return (
        <button
            onClick={() => handleAlert()}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            {children}
        </button>
    )
} 