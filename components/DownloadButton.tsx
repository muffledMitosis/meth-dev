import Link from "next/link";

export default function DownloadButton({ text }: { text: string }) {
  return (
    <Link href="/CV/cv_methmuni.pdf">
      <div className="hover:cursor-pointer
                      border rounded-lg md:py-2 md:px-2
                      py-1.5 px-1.5 text-sm md:text-base
                      text-white border-purple
                      fancy_download">
        {text}
      </div>
    </Link>
  );
}
