'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';

const base = 'Home';

const pages: string[] = [
  'Home',
  'About',
  'Blog',
  'Dashboard',
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-screen flex justify-center mt-4">
      {pages.map(page => {

        const route = page == base ? "/" : page.toLowerCase();
        const color =
          (pathname == "/" + page.toLowerCase() ||
            (page == base && pathname == "/"))
            ? "text-white" : "text-not-selected";

        const elem = (
          <Link
            className={color + " mr-20"}
            href={route}
            key={page}>
            {page}
          </Link>
        );

        return elem;
      })}
      <div className="flex">
        <Link href="https://www.linkedin.com/in/methm/">
          <AiOutlineLinkedin className="text-2xl text-white" />
        </Link>
        <div className="w-8" />
        <Link href="https://github.com/muffledMitosis">
          <AiFillGithub className="text-2xl text-white" />
        </Link>
      </div>
    </div>
  );
}
