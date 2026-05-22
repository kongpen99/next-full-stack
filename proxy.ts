
// proxy/ts //

import { NextResponse } from "next/server"
import type { NextRequest, NextFetchEvent } from "next/server"

let count = 0;

export function proxy(req: NextRequest, event: NextFetchEvent) {
    count++;

    if (count > 5) {
        /*
        return new NextResponse(
            JSON.stringify({ error: "Too many requests" }),

            {
                status: 429,
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        */
    }
    return NextResponse.next();
}
export const config = {
    matcher: '/api/:path*',
}