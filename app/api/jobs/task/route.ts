import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { TaskParams } from "./types/TaskApiType";
import { Task } from "@prisma/client";

export async function GET(req: NextRequest) {
  try {
    const v = req.nextUrl.searchParams;
    const query = v.get("jobId");
    console.log(query);
    let task: Task;
    if (query && query?.length > 0) {
      task = await prisma.task.findMany({
        where: {
          jobId: query,
        },
      });
    } else {
      task = await prisma.task.findMany({});
    }
    if (!task?.length) return Response.json({ message: "No Jobs Found" });
    return Response.json({ data: task, message: "Task Listed" });
  } catch (error) {
    return Response.json({ message: "error-task-code" });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const taskList = body;
  console.log(body);

  try {
    const task = await prisma.task.createMany({
      data: [...taskList],
    });
    return NextResponse.json({ data: task, message: "Task Created" });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "error-task-code", error: error },
      { status: 500 }
    );
  }
}


export async function DELETE(req: Request, { params }: TaskParams) {
  try {
    const task = await prisma.task.delete({
      where: {
        id: params.task,
      },
    });
    return Response.json({ message: "Task Deleted", data: task });
  } catch (error) {
    return Response.json({ message: "error-task-code", error: error });
  }
}
