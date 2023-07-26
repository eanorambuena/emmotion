import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const name = url.searchParams.get("name") ?? "World";
    url.searchParams.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    return NextResponse.json({
        message: `Hello ${name}!`
    });
}