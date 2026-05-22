import { NextResponse } from "next/server";

let users = [
    { id: 1, name: "John " },
    { id: 2, name: "Jane " },
    { id: 3, name: "Bob " },
];
export async function GET() {
    return NextResponse.json(users);

}

export async function POST(req: Request) {
    const body = await req.json();
    const newUser = {
        id: Date.now(),
        name: body.name,
    }
    users.push(newUser);
    return NextResponse.json(newUser);
}
