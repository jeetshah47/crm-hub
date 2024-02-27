import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex flex-1 gap-4 justify-center ">
      <ul
        className={`${pathname.includes("/app/dashboard") ? "text-primary-blue font-semibold  border-b-2 border-b-primary-blue" : ""} `}
      >
        <Link href={"/app/dashboard"}>Dashboard</Link>
      </ul>
      <ul
        className={`${pathname.includes("/app/jobs") ? "text-primary-blue font-semibold  border-b-2 border-b-primary-blue" : ""} `}
      >
        <Link href={"/app/jobs"}>Jobs</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
