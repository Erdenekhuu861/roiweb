import axios from "axios";
import { session } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const result = await axios
      .post("https://api.bbroi.com/master/login", body)
      .then((res) => res.data);

    if (result.status === 200) {
      console.log("result ===>", result)
      await session().set("user", result.tokens);
      return NextResponse.json({
        status: result.status,
        message: result.message,
      });
    } else
      return NextResponse.json({
        status: result.status,
        message: result.message,
      });
  } catch (error) {
    return NextResponse.json({ status: error.status, message: error.message });
  }
}
