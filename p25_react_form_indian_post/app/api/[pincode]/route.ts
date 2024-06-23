import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { pincode } }: { params: { pincode: string } }
) {
  try {
    const response = await fetch(
      `https://api.postalpincode.in/pincode/${pincode}`
    );
    const result = await response.json();
    return NextResponse.json(result[0]);
  } catch (error) {
    console.log(error);

    return new NextResponse("Inter Error", { status: 500 });
  }
}
