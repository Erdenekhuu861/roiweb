import { NextResponse } from "next/server";
import { session } from "@/lib/session";

export async function GET(req) {
  try {
    await session().set("user", null);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}