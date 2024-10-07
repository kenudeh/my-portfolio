import Image from "next/image";
import { socialLinks } from "./config";
import { FaMobileButton } from "react-icons/fa6";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        About Me 
      </h1>
      <p>
        A mechanical engineer-turned tech writer!
      </p>
      <br></br>

      <div className="prose prose-neutral dark:prose-invert">
        <h2>Publications</h2>
        <p>
          A clean, fast, and lightweight portfolio template built with Next.js,
          Vercel, and Tailwind CSS for optimal performance.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <h2>Past Projects</h2>
        <p>
          Dolphin Flashcards
        </p>
        <p>
          SnapNames
        </p>
      </div>

      <div className="CVButton">
        <a href="">
          <button type="button">
            Download my CV
          </button>
        </a>
      </div>
    </section>
  );
}
