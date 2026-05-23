//route.ts
//GET api/crud/user
//POST api/crud/user


import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const userSchema = z.object({
    name: z.string().trim(),
    email: z.email().trim(),
});

//GET api/crud/user
export async function GET() {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            userGroup: true,
        }
    });
    return NextResponse.json(users);
}

//POST api/crud/user
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const newUser = userSchema.parse(body);
        await prisma.user.create({
            data: newUser
        });
        return NextResponse.json({ success: true, user: newUser });

    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to create user' + error },
            { status: 500 });
    }
}