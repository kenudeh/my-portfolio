import Image from "next/image";
import { socialLinks } from "./config"

export default function Page() {
  return (
    <section className="section">
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
        A mechanical engineer-turned tech writer. I excell at simplifying complex ideas for the right audience.  
      </p>
      <br></br>

      <div className="prose prose-neutral dark:prose-invert">
        <h2>Publications</h2>
        <p>
          Some of my writings:
        </p>
        <p>
          <a href="https://kenudeh.hashnode.dev/api-reference-overviews">API Reference Overviews</a><br></br>
          <a href="https://kenudeh.hashnode.dev/setting-up-a-docs-site-with-mintlify">Setting Up a Docs Site with Mintlify</a><br></br>
          <a href="https://kenudeh.hashnode.dev/an-overview-of-dependencies">An overview of Dependencies</a><br></br>
          <a href="https://kenudeh.hashnode.dev/failed-to-start-the-docker-engine-error">Fix Docker Engine Startup Errors on Windows</a>
        </p>
        <p>Visit <a href="">my blog</a> for more...</p>
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
      <br></br>

      <div className="buttonDiv">
        <a href="https://drive.google.com/file/d/1zRh9g_2sHo7UC5B-OBW_D26CFoWEM6xj/view?usp=sharing" className="anchorTag" target="_blank">
          <button type="button" className="CVButton">
            Download my CV
          </button>
        </a>
      </div>
    </section>
  );
}
