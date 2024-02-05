import prisma from "../../../lib/prisma";
export default async function POST(req: Request) {
  const res = await req.json();
  let userId= "a49e4fa9-d7a6-44c2-810b-3ed68c95b546"
  const { name, priority, description } = res;

  try {
    const res = await prisma.jobs.create({
      data: { name, priority, description, userId },
    });
  } catch (error) {}
}
