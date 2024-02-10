import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <p>Welcome to Crm hub Page</p>
      <Link className="text-primary-blue" href={"/app/jobs"}>Click Here to Continue</Link>
    </main>
  )
}
