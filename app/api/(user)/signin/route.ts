import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    // Perform your authentication logic here
    if (username === 'admin' && password === 'password') {
        return NextResponse.json({ message: 'Login successful' }, { status: 200 });
    } else {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
}