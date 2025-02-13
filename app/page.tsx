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
          <b className="header">About Me</b> 
        </h1>
        <div>
        I am a Django developer and technical writer, based in southeast Nigeria. My passion is simplifying complex information for the right audience. 
        With my understanding of programming concepts, I excel at:<br></br>
        <br></br>
        <ul>
          <li>Writing clear and concise developer-focused documentation, including API references and conceptual contents</li><br></br>
          <li>Strategizing and deciding the right tools and approach for publishing and maintaining documentation sites</li><br></br>
          <li>Creating impactful content by applying best practices in metadata and information architecture</li>
        </ul>
        </div>
      </div>
      <br></br>

      <div className="buttonDiv">
        <a href="https://drive.google.com/file/d/1TneHBIcsk03iWsnVz_6i78-qJhVo9rtt/view?usp=sharing" className="anchorTag" target="_blank">
          <button type="button" className="CVButton">
            Download my CV
          </button>
        </a>
      </div>
      <br></br>

      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="header"><b>Publications</b></h2>
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
        <h2 className="header"><b>Past Projects</b></h2>
          <div className="Docs">
            <h3 className="doc-header"><b>Documentation</b></h3>
         
            <div className="Convert">
                <a href="https://docs.convert.com.ng" target="_blank">
                  <p><b>Convert</b></p>
                </a>
                <a href="https://docs.convert.com.ng" target="_blank">
                  <Image
                    src="/convert.png"
                    alt="Convert App"
                    unoptimized
                    width={560}
                    height={360}
                    className="project"
                  />
                </a>
                <p>
                Convert is an online airtime-to-cash conversion platform. For this project, I worked on improving user experience and developer efficiency through documentation. I created user guides that simplified the onboarding process, making it easier for users to understand and utilize the platform's core features. 
                <br></br>

                <br></br>
                Furthermore, I developed an internal OpenAPI-compliant API documentation, which directly facilitated faster and more seamless integration by the frontend team. This documentation contributed to a more streamlined development cycle and an improved user experience.
                </p>
            </div>
            <br></br>
        
            <div className="Dolphin">
                <a href="http://docs.dolphinflashcards.com" target="_blank">
                   <p><b>Dolphin Flashcards</b></p>
                </a>
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
                I designed and implemented the information architecture for the Dolphin Flashcards' documentation site. Using MDX components, I created engaging onboarding contents that introduces users to the application's capabilities, and provides a quick start guide for contributors.
                <br></br>
                <br></br>
                I also wrote an OpenAPI specification file for the app's API, from which I generated comprehensive and interactive reference documentation using Mintlify. This effort enhanced the developer experience and helped maintain consistency throughout the documentation.
                </p>
            </div>
                <br></br>
            
            <div className="Snapnames">
              <p>
                <b><a href="https://curious-druid-05e915.netlify.app" target="_blank"><b>SnapNames</b></a></b>
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
                I used the static site generator, MKDocs, to build the documentation site from Markdown files.  
              </p>
            </div>
          </div>
          <br></br>

          <div className="API">
            <h3><b>APIs</b></h3>
            <p><b><a href="https://convert.com.ng" target="_blank">Convert API</a></b></p>
            <p>
              Designed and implemented the API for "Convert," an airtime-to-cash conversion platform.  Built with Django and Django REST Framework (DRF), this API powers the app's key features, including airtime sales order creation, balance retrieval, cash withdrawal requests, cash deposits, and transaction logging, using an SQL database for persistent data storage. JWT authentication was implemented to secure API endpoints.
            </p>
          </div>

      </div>
      <br></br>


      
    </section>
  );
}
