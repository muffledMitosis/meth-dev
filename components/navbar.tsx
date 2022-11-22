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

function generateLinks(pages: string[], pathname: any) {
  let links = pages.map(page => {

    const route = page == base ? "/" : page.toLowerCase();
    const color =
      (pathname == "/" + page.toLowerCase() ||
        (page == base && pathname == "/"))
        ? "text-white" : "text-not-selected";

    const elem = (
      <Link
        className={color + ""}
        href={route}
        key={page}>
        {page}
      </Link>
    );

    return elem;
  });

  return links;
}

function socials() {
  return (
    <div className="flex">
      <Link href="https://www.linkedin.com/in/methm/">
        <AiOutlineLinkedin className="text-2xl text-white" />
      </Link>
      <div className="w-8" />
      <Link href="https://github.com/muffledMitosis">
        <AiFillGithub className="text-2xl text-white" />
      </Link>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center my-10">
      <div className="flex w-2/3 justify-evenly">
        {generateLinks(pages, pathname)}
        {socials()}
      </div>
    </div>
  );
}
