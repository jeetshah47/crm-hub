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
      },
    });
    if (user) {
      const data = await prisma.user.findFirst({
        where: {
          email: email,
          password: password,
        },
      });
      if (data == null) {
        return Response.json({ data: null, message: "Invalid Email/Password" });
      }
      return Response.json({ data: data, message: "User Found !!" });
    }

    else  {
      return Response.json({data: null, message: "User not found"});
    }
  } catch (error) {
    return Response.json({ messsage: "error" });
  }
}
