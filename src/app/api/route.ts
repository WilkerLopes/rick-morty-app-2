import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}

export async function HEAD(req: NextApiRequest) {}

export async function POST(req: NextApiRequest) {}

export async function PUT(req: NextApiRequest) {}

export async function DELETE(req: NextApiRequest) {}

export async function PATCH(req: NextApiRequest) {}
