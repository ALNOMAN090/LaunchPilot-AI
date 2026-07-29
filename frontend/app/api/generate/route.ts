import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Missing GEMINI_API_KEY");
}

const ai = new GoogleGenAI({
  apiKey,
});

export async function POST(req: Request) {
  try {
    const { idea } = await req.json();

    if (!idea) {
      return NextResponse.json(
        { error: "Startup idea is required" },
        { status: 400 }
      );
    }

    const prompt = `
You are LaunchPilot AI, a startup expert.

Create a complete professional startup business plan.

Startup idea:
${idea}

Return the response in Markdown using the following structure:

# Startup Name

# Vision

# Problem

# Solution

# Target Customers

# Market Analysis

# Business Model

# Revenue Streams

# Marketing Strategy

# Competitors

# MVP Features

# Development Roadmap

# Risks

# Final Advice
`;

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    });

    return NextResponse.json({
      success: true,
      result: response.text,
    });
  } catch (error: any) {
    console.error("Gemini Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}
