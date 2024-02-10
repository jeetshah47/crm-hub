import prisma from "../../../../lib/prisma";
import { PaymentRequestParams } from "./types/PaymentApiType";
export async function GET(req: Request) {
  try {
    const payment = await prisma.payments.findMany({});
    if (!payment?.length) return Response.json({ message: "No Jobs Found" });

    return Response.json({ data: payment, message: "Task Listed" });
  } catch (error) {
    return Response.json({ message: "error-payment-code" });
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const { jobId, detail, method, amount } = body;
  try {
    const payment = await prisma.payments.create({
      data: {
        jobId: jobId,
        detail: detail,
        method: method,
        amount: amount,
      },
    });

    return Response.json({ message: "Payment Created", data: payment });
  } catch (error) {
    return Response.json({ message: "error-payment-code", error: error });
  }
}

export async function PATCH(req: Request, { params }: PaymentRequestParams) {
  const body = await req.json();
  const { taskList } = body;
  try {
    const payment = await prisma.payments.update({
      where: {
        id: params.paymentId,
      },
      data: taskList,
    });
    return Response.json({ message: "Payment Updated", data: payment });
  } catch (error) {
    return Response.json({ message: "error-payment-code", error: error });
  }
}

export async function DELETE(req: Request, { params }: PaymentRequestParams) {
  try {
    const payment = await prisma.payments.delete({
      where: {
        id: params.paymentId,
      },
    });
    return Response.json({ message: "Payment Deleted", data: payment });
  } catch (error) {
    return Response.json({ message: "error-payment-code", error: error });
  }
}
