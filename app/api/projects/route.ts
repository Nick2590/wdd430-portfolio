import { getProjects } from "@/lib/projects-db";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const type = new URL(request.url).searchParams.get("type");
  return NextResponse.json(getProjects(type));
}