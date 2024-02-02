import prisma from "../../../../lib/prisma";
export async function POST(req: Request) {
  try {
    const res = await req.json();
    const { email, password, first_name, last_name } = res;

    if (!email || !password)
      return Response.json({ message: "Email and Password required" });

    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name, 
      }
    });

    if (user == null) {
      return Response.json({ data: null, message: "User not created !!" });
    }
    return Response.json({ data: user, message: "User created successfully"});
  } catch (error) {
    return Response.json({ messsage: "error" });
  }
}
