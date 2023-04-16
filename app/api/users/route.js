import { NextResponse } from "next/server";
const data = require("@data.json");

export async function GET() {
  console.log("API CALLED");
  return NextResponse.json({ ...data });
}
