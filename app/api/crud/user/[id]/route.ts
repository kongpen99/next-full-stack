// route.ts
// GET api/crud/user/[id]
// PUT api/crud/user/[id]
// DELETE api/crud/user/[id]


import { prisma } from '../../../../../lib/prisma';
import { NextResponse } from 'next/server';



//GET api/crud/user/[id] ดึงข้อมูลทีละ id ออกมาแสดง
export async function GET(Request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
        return NextResponse.json(user);

    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get user' + error },
            { status: 500 });
    }
}

//PUT api/crud/user/[id] แก้ไขข้อมูลทีละ id
export async function PUT(
    req: Request,
    { params }: { params: { id: string } }) {
    try {
        const { id } = await params;
        const body = await req.json();
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: {
                name: body.name,
                email: body.email,
            }
        });
        return NextResponse.json(updatedUser);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to update user' + error },
            { status: 500 });
    }
}

//DELETE api/crud/user/[id] ลบข้อมูลทีละ id
export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }) {
    try {
        const { id } = await params;
        const deletedUser = await prisma.user.delete({ where: { id: parseInt(id) } });
        return NextResponse.json(deletedUser);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to delete user' + error },
            { status: 500 });
    }
}
