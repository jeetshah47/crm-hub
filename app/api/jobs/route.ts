import prisma from "../../../lib/prisma";
import { JobRequest, JobRequestParams } from "./types/JobRequest";

export async function GET(req: Request) {
  try {
    const jobs = await prisma.jobs.findMany({});
    if (!jobs?.length) return Response.json({ message: "No Jobs Found" });

    return Response.json(jobs);
  } catch (error) {
    return Response.json({ message: "error-job-code" });
  }
}

export async function POST(req: Request) {
  let userId = "a49e4fa9-d7a6-44c2-810b-3ed68c95b546";

  const body: JobRequest = await req.json();
  const { name, priority, description } = body;

  if (!name || !priority || !description) {
    return Response.json({
      status: 404,
      message: "Missing Required Parameters",
    });
  }
  try {
    const res = await prisma.jobs.create({
      data: { name, priority, description, userId },
    });

    return Response.json({ message: "Job Created", data: res });
  } catch (error) {
    return Response.json({ message: "Job Failed", error: error });
  }
}

export async function PATCH(req: Request, { params }: JobRequestParams) {
  const body = await req.json();
  try {
    const { name, priority, description, status } = body;

    const res = await prisma.jobs.update({
      where: {
        id: params.jobId,
      },
      data: { name, priority, description },
    });

    return Response.json({ message: "Job Updated", data: res });
  } catch (error) {
    return Response.json({ message: "Job Failed", error: error });
  }
}

// expor async function DELETE(req: Request, { params }: {params: { jobId: number}}) {
//   async
// }
