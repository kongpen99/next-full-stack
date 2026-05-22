//route.ts
//GET api/crud/user
//POST api/crud/user


import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

//GET api/crud/user
export async function GET() {
    const users = await prisma.user.findMany();  //ดึงข้อมูลทั้งหมด
    return NextResponse.json(users);
}

//POST api/crud/user
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const newUser = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
            }
        });
        return NextResponse.json({ success: true, user: newUser });

    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to create user' + error },
            { status: 500 });
    }
}