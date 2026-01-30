import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");

  if (!file) {
    return new NextResponse("File name missing", { status: 400 });
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    "pdfs",
    file
  );

  if (!fs.existsSync(filePath)) {
    return new NextResponse("File not found", { status: 404 });
  }

  const stream = fs.createReadStream(filePath);

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${file}"`,
    },
  });
}
