'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineLinkedin, AiFillGithub, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const base = 'Home';

const pages: string[] = [
  'Home',
  'About',
  'Blog',
  'Dashboard',
];

function generateLinks(pages: string[], pathname: any, isMobile: boolean) {
  let links = pages.map(page => {

    const route = page == base ? "/" : page.toLowerCase();
    const color =
      (pathname == "/" + page.toLowerCase() ||
        (page == base && pathname == "/"))
        ? "text-white" : "text-not-selected";

    const elem = (
      <Link
        className={color + " " + (isMobile ? " mb-2 text-lg" : "")}
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
  const [closed, setClosed] = useState(true);

  return (
    <div>
      <div className="hidden md:visible md:flex justify-center my-10">
        <div className="flex w-2/3 justify-evenly">
          {generateLinks(pages, pathname, false)}
          {socials()}
        </div>
      </div>
      <GiHamburgerMenu className={(!closed ? "hidden" : "visible") + " text-3xl absolute text-white md:hidden visible right-1 top-1"} onClick={() => setClosed(!closed)} />
      <div className={(closed ? "hidden" : "visible") + " z-50 bg-dark-background w-1/2 h-screen md:hidden absolute right-0 shadow-2xl"}>
        <AiOutlineClose className="text-3xl absolute text-white md:hidden visible right-1 top-1" onClick={() => setClosed(!closed)} />
        <div className="mt-2 ml-4">
          <div className="flex flex-col bg-dark-background mt-8">
            {generateLinks(pages, pathname, true)}
          </div>
        </div>
      </div>
    </div>
  );
}
