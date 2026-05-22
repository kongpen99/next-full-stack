'use client';

import { useEffect } from "react";

export default function UseEffect() {
    useEffect(() => {
        console.log("UseEffect");
    }, []);
    return (
        <h1>UseEffect</h1>
    );
}