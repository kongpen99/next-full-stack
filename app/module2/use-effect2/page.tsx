'use client';

import { useEffect, useState } from "react";
import UseEffect from "../use-effect/page";

export default function UseEffect2() {
    const [count, setCount] = useState<number>(0);
    const [customers, setCustomers] = useState<string[]>([]);
    const [customerCount, setCustomerCount] = useState<number>(0);

    useEffect(() => {
        console.log("UseEffect2");
    }, []);

    useEffect(() => {
        if (count > 0) {
            console.log("UseEffect2 count = " + count);
        }
    }, [count]);

    useEffect(() => { 
        setCustomerCount(customers.length);
    }, [customers]);


    const addCustomer = () => {
        const newCustomer = "Customer " + (customers.length + 1);
        setCustomers([...customers, newCustomer]);

    }

    return (
        <>
            <h1>UseEffect2</h1>
            <h2>Customer ทั้งหมด {customers.length} คน count = {customerCount}</h2>
            <button onClick={addCustomer} className="border border-green-500 px-4 py-2 rounded-full">
                Add Customer
            </button>
            <button
                className="bg-blue-500 px-4 py-2 rounded-full"
                onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
            <h2>Count = {count}</h2>

        </>
    );
}
