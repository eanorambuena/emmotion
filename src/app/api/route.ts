import { NextResponse } from "next/server";

function getQueryParams(request: Request) {
    const url = new URL(request.url);
    const queryParams: any = {};
    url.searchParams.forEach((value, key) => {
        queryParams[key] = value;
    });
    return queryParams;
}

export async function GET(request: Request) {
    const params = getQueryParams(request);
    return NextResponse.json(params);
}