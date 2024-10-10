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
      <div className="aboutme">
        <h1 className="mb-8 text-2xl font-medium tracking-tight">
          About Me 
        </h1>
        <div>
        I am a technical writer based in southeast Nigeria. My passion is simplifying complex information for the right audience. 
        With my fair understanding of programming concepts, I excel at:<br></br>
        <br></br>
        <ul>
          <li>Writing clear and concise API and developer-focused documentation.</li><br></br>
          <li>Strategizing and deciding the right tools and approach for publishing and maintaining documentation sites.</li><br></br>
          <li>Creating impactful content by applying best practices in metadata and information architecture.</li>
        </ul>
        </div>
      </div>
      <br></br>

      <div className="buttonDiv">
        <a href="https://drive.google.com/file/d/1zRh9g_2sHo7UC5B-OBW_D26CFoWEM6xj/view?usp=sharing" className="anchorTag" target="_blank">
          <button type="button" className="CVButton">
            Download my CV
          </button>
        </a>
      </div>
      <br></br>

      <div className="prose prose-neutral dark:prose-invert">
        <h2>Publications</h2>
        <p>
          Have a look at some of my musings:
        </p>
        <div className="writings">
            <ul>
              <li><a href="https://kenudeh.hashnode.dev/api-reference-overviews" target="_blank">API Reference Overviews: How much content is enough?</a></li>
              <li><a href="https://kenudeh.hashnode.dev/setting-up-a-docs-site-with-mintlify" target="_blank">Setting Up a Docs Site with Mintlify</a></li>
              <li><a href="https://kenudeh.hashnode.dev/an-overview-of-dependencies" target="_blank">An overview of Dependencies</a></li>
              <li><a href="https://kenudeh.hashnode.dev/failed-to-start-the-docker-engine-error" target="_blank">Fix Docker Engine Startup Errors on Windows</a></li>
            </ul>
        </div>
        <p>For more of my writing samples, check out <a href="https://kenudeh.hashnode.dev/" target="_blank">my blog.</a></p><br></br>
        
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <h2>Past Projects</h2>
        <p>
          <b>Dolphin Flashcards</b>
        </p>
        <a href="http://docs.dolphinflashcards.com" target="_blank">
          <Image
            src="/dolphin.png"
            alt="Dolphin Flashcard App"
            unoptimized
            width={560}
            height={360}
            className="project"
          />
        </a>
        <p>
          I designed and implemented the entire information architecture for the Dolphin Flashcards application. 
          Leveraging MDX components, I authored conceptual topics to help users become familiar with the product. 
          Additionally, I created an OpenAPI specification file, from which I generated the API reference through Mintlify.
        </p>
        
        <br></br>
        <div>
          <p>
            <b>SnapNames</b>
          </p>
          <a href="https://curious-druid-05e915.netlify.app" target="_blank">
          <Image
            src="/snapnames.png"
            alt="Dolphin Flashcard App"
            unoptimized
            width={560}
            height={360}
            className="project"
          />
        </a>
        <p className="content">
          For this sample project, I created a detailed user guide for Snapnames, a domain name back-ordering service. 
          I used MKDocs, a static site generator, to build the documentation site from Markdown files.  
        </p>
        </div>
        
      </div>
      <br></br>

      
    </section>
  );
}
