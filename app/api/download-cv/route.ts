import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Path to the CV file in the public directory
    const filePath = path.join(process.cwd(), "public", "CV_Guillaume_Breon.pdf")

    // Read the file
    const fileBuffer = fs.readFileSync(filePath)

    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="CV_Guillaume_Breon.pdf"',
      },
    })
  } catch (error) {
    console.error("Error serving CV file:", error)
    return new NextResponse("File not found", { status: 404 })
  }
}

