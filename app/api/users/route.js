import { NextResponse } from "next/server";
const data = require("@data.json");

export async function GET() {
  return NextResponse.json({ ...data });
}
