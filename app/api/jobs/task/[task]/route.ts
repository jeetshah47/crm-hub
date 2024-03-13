import { NextRequest } from "next/server";
import { TaskParams } from "../types/TaskApiType";
import prisma from '../../../../../lib/prisma';

export async function PATCH(req: NextRequest, { params }: TaskParams) {
    console.log(params.task);
    
    const body = await req.json();
    const taskList = body;
    try {
      const task = await prisma.task.update({
        where: {
          id: params.task,
        },
        data: taskList,
      });
      return Response.json({ message: "Task Updated", data: task });
    } catch (error) {
      console.log(error)
      return Response.json({ message: "error-task-code", error: error }, {status: 400});
    }
  }
  