import prisma from "../../../../lib/prisma";
export async function POST(req: Request) {
  try {
    const res = await req.json();
    const { email, password } = res;

    if (!email || !password)
      return Response.json({ message: "Email and Password required" });

    const user = await prisma.user.findFirst({
      where: {
        email: email,
        password: password,
      },
    });

    if (user == null) {
      return Response.json({ data: null, message: "User not found !!" });
    }
    return Response.json({ data: user, message: "User Found !!" });
  } catch (error) {
    return Response.json({ messsage: "error" });
  }
}
