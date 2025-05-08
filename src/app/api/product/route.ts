import { NextResponse, NextRequest } from "next/server";
import { retrieveDataById, retrieveData } from "@/lib/firebase/service";

const data = [
  {
    id: 1,
    title: "Nike V2K Run",
    price: 1909000,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2fb6ff59-aca1-4f1f-a836-0888d4f119a6/W+NIKE+V2K+RUN.png"
  },
  {
    id: 2,
    title: "Nike Silverun",
    price: 2199000,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8ecc919-b1f0-40d6-8f1d-b040480424c9/W+NIKE+V2K+RUN.png"
  },
  {
    id: 3,
    title: "Nike V2K Run By You",
    price: 2199000,
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/af62dcd9-ce9d-4dd3-8d7a-01f8b5dbce3e/custom-v2k-run-shoes-by-you.png"
  }
];

export async function GET (request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (!detailProduct) {
      return NextResponse.json ({ status: 404, message: "Not Found" });
    }
    return NextResponse.json ({ status: 200, message: "Success", data: detailProduct });
  }

  const products = await retrieveData("products");
  
  return NextResponse.json ({ status: 200, message: "Success", data: products });
}