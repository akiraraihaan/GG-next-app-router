import { NextResponse, NextRequest } from "next/server";

const data = [
  {
    id: 1,
    name: "sepatu super",
    price: 200
  },
  {
    id: 2,
    name: "sepatu kureng",
    price: 900
  }
];

export async function GET (request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (!detailProduct) {
      return NextResponse.json ({ status: 404, message: "Not Found" });
    }
    return NextResponse.json ({ status: 200, message: "Success", data: detailProduct });
  }
  
  return NextResponse.json ({ status: 200, message: "Success", data });
}