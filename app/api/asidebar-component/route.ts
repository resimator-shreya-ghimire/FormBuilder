import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const id = Number(url.searchParams.get('id'));

    const data = await import("./data.json");
    console.log('idata', data.default);

    const filteredData = data.default.find((item: any) => item.id === id);
    console.log('filteredData', filteredData);

    return NextResponse.json(filteredData);
}
