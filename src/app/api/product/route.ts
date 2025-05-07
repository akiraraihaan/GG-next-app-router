import { NextResponse, NextRequest } from "next/server";

const data = [
  {
    id: 1,
    name: "sepatu super",
    price: 200,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2fb6ff59-aca1-4f1f-a836-0888d4f119a6/W+NIKE+V2K+RUN.png"
  },
  {
    id: 2,
    name: "sepatu kureng",
    price: 900,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8ecc919-b1f0-40d6-8f1d-b040480424c9/W+NIKE+V2K+RUN.png"
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