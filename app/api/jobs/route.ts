import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { JobRequest, JobRequestParams } from "./types/JobRequest";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const jobs = await prisma.jobs.findMany({});
    if (!jobs?.length) return NextResponse.json({ message: "No Jobs Found" });
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ message: "error-job-code" }, { status: 404 });
  }
}

export async function POST(req: NextRequest, res: NextApiResponse) {
  let userId = "a49e4fa9-d7a6-44c2-810b-3ed68c95b546";
  let body: any;
  try {
    body = await req.json();
    console.log(body);
  } catch (error) {
    return NextResponse.json({ error: "Invalid" }, { status: 400 });
  }

  const { name, priority, description } = body;

  if (!name || !priority || !description) {
    return NextResponse.json({
      status: 404,
      message: "Missing Required Parameters",
    });
  }
  try {
    const res = await prisma.jobs.create({
      data: { name, priority, description, userId },
    });

    return NextResponse.json({ message: "Job Created", data: res }, {status: 201});
  } catch (error) {
    return NextResponse.json({ message: "Job Failed", error: error }, {status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: JobRequestParams) {
  const body = await req.json();
  try {
    const { name, priority, description, status } = body;

    const res = await prisma.jobs.update({
      where: {
        id: params.jobId,
      },
      data: { name, priority, description },
    });

    return NextResponse.json({ message: "Job Updated", data: res }, {status: 200});
  } catch (error) {
    return NextResponse.json({ message: "Job Failed", error: error }, {status: 500});
  }
}

// expor async function DELETE(req: NextRequest, { params }: {params: { jobId: number}}) {
//   async
// }
