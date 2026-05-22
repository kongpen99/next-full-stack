import { NextResponse } from "next/server";

let users = [
    { id: 1, name: "John " },
    { id: 2, name: "Jane " },
    { id: 3, name: "Bob " },
];

// GET /api/users/[id] รับค่า id จาก url
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const user = users.find((u) => u.id === parseInt(id)); //ทำการค้นหา

    return NextResponse.json(user); //ทำการตอบกลับ
}
// PUT /api/users/[id] รับค่า id จาก url และ body
export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await req.json();
    const index = users.findIndex((u) => u.id === parseInt(id)); //ทำการค้นหา

    if (index === -1) return NextResponse.json({}, { status: 404 });
    users[index].name = body.name;
    return NextResponse.json(users[index]); //ทำการตอบกลับ
}

// DELETE /api/users/[id] รับค่า id จาก url และ body
export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    users = users.filter((u) => u.id !== parseInt(id)); //ทำการกรอง
    return NextResponse.json({ message: "User deleted" }); //ทำการตอบกลับ


}


