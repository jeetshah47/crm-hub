import prisma from "../../../../lib/prisma";
import { TaskParams } from "./types/TaskApiType";

export async function GET(req: Request) {
  try {
    const task = await prisma.task.findMany({});
    if (!task?.length) return Response.json({ message: "No Jobs Found" });

    return Response.json({ data: task, message: "Task Listed" });
  } catch (error) {
    return Response.json({ message: "error-task-code" });
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const { taskList } = body;
  try {
    const task = await prisma.task.createMany(taskList);
  } catch (error) {
    return Response.json({ message: "error-task-code", error: error });
  }
}

export async function PATCH(req: Request, { params }: TaskParams) {
  const body = await req.json();
  const { taskList } = body;
  try {
    const task = await prisma.task.update({
      where: {
        id: params.taskId,
      },
      data: taskList,
    });
    return Response.json({ message: "Task Updated", data: task });
  } catch (error) {
    return Response.json({ message: "error-task-code", error: error });
  }
}

export async function DELETE(req: Request, { params }: TaskParams) {
  try {
    const task = await prisma.task.delete({
      where: {
        id: params.taskId,
      },
    });
    return Response.json({ message: "Task Deleted", data: task });
  } catch (error) {
    return Response.json({ message: "error-task-code", error: error });
  }
}
