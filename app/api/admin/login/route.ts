import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password === process.env.ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("adminAuth", "true", {
      httpOnly: true,
      path: "/",
      sameSite: "strict",
    });
    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
