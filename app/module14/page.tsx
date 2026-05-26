'use client';

import { useActionState } from "react";
import { caLculate, CaLculatorState, } from "./action";


const initialState: CaLculatorState = {
    result: null,
    error: null,
    number1: '',
    number2: '',
    operator: '+'
};

export default function caLculatePage() {
    const [state, formAction, isPending] = useActionState(caLculate, initialState);
    return (
        <div className="flex flex-col item-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Calculator</h1>
                <form action={formAction} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="number1" className="block text-sm font-medium">Number 1</label>
                        <input type="text" id="number1" name="number1" className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="number2" className="block text-sm font-medium">Number 2</label>
                        <input type="text" id="number2" name="number2" className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="operator" className="block text-sm font-medium">Operator</label>
                        <select id="operator" name="operator" className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                        </select>
                    </div>
                    <button type="submit" disabled={isPending} className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">
                        {isPending ? 'Calculating...' : 'Calculate'}
                    </button>
                </form>
                {state.result !== null && (
                    <div className="mt-4 p-4 bg-green-500  transition-all duration-300 rounded-lg">
                        <p className="text-lg font-medium">Result: {state.result}</p>
                    </div>
                )}
                {state.error !== null && (
                    <div className="mt-4 p-4 bg-red-500 rounded-lg">
                        <p className="text-lg font-medium">Error: {state.error}</p>
                    </div>
                )}
            </div>

        </div>

    )
}