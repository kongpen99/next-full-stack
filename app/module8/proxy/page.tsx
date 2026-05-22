'use client';

import { useState } from "react";

export default function ProxyPage() {
    const [results, setResults] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const checkApi = async () => {
        setLoading(true);

        try {
            const res = await fetch('/api/users');
            const status = res.status;
            const text = status === 200 ? 'OK' : status === 429 ? 'Too Many Requests' : 'Error';
            setResults((prev) => [
                `${new Date().toLocaleTimeString()} - ${status} ${text}`,
                ...prev
            ]);

        } catch (error) {

            setResults((prev) => [
                `${new Date().toLocaleTimeString()} - Network Error`,
                ...prev
            ]);
        } finally {
            setLoading(false);
        }
    }
    const checkMultiple = async () => {
        setLoading(true);

        for (let i = 0; i < 7; i++) {
            await checkApi();
        }
        setLoading(false);
    }

    const clearResults = () => setResults([]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Proxy Test</h1>
            <div className="flex gap-4 mb-4">
                <button
                    onClick={checkApi}
                    disabled={loading}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                >
                    Check API
                </button>
                <button
                    onClick={checkMultiple}
                    disabled={loading}
                    className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300"
                >
                    Check Multiple
                </button>
                <button
                    onClick={clearResults}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Clear Results
                </button>
            </div>
            <div className="space-y-2">
                {results.map((result, index) => (
                    <div key={index} className="p-2 bg-gray-100 rounded">
                        {result}
                    </div>
                ))}
            </div>
        </div>
    );
}