import { session } from "@/lib/session";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get("name");
    const user = await session().get("user");
    if (user) {
      const result = await axios
        .get(`https://api.bbroi.com${path}`, {
          headers: { Authorization: `${user.IdToken}` },
        })
        .then((res) => res.data);
      return NextResponse.json({ ...result });
    } else return NextResponse.json({ status: 300 });
  } catch (error) {
    return NextResponse.json({ status: error?.status, message: error.message });
  }
}

export async function DELETE(req) {
  try {
    const user = await session().get("user");
    if (user) {
      return NextResponse.json({ isAuth: true });
    } else return NextResponse.json({ isAuth: false });
  } catch (error) {
    return NextResponse.json({ isAuth: false });
  }
}