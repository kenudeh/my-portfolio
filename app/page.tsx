'use client'
import Image from "next/image";
import { socialLinks } from "./config"
import { useState } from "react";

export default function Page() {

  const [activeTab, setActiveTab] = useState<'docs' | 'api'>('docs')

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
          <p>A technical writer with a developer’s mindset—I bridge the gap between how things work and how people need to use them.
          </p>
          <br></br>
          <p>
          Refined through documenting open-source projects, maintaining a tech blog, and creating docs for personal tools, I specialize in:
          </p>

        <br></br>
        <ul>
          <li>Designing maintainable docs with modern workflows (Git, CI/CD, Static site generators)
          </li>
          <br></br>
          <li>Writing public docs that drive adoption (tutorials, integration guides, FAQs)
          </li>
          <br></br>
          <li>Crafting interactive API docs with executable examples
          </li>
        </ul>
        <br /> <b />
        <p>I believe great docs don’t just explain—they convert readers into productive users.</p>
        </div>
      </div>
      <br></br>

      <div className="buttonDiv">
        <a href="https://drive.google.com/file/d/1TneHBIcsk03iWsnVz_6i78-qJhVo9rtt/view?usp=sharing" className="anchorTag" target="_blank">
          {/* <button type="button" className="CVButton">
            Download my CV
          </button> */}
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

        {/* Tabs */}
        <div className="flex gap-4 mb-4">
          <button
            className={`px-4 py-2 border rounded ${activeTab === 'docs' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
            onClick={() => setActiveTab('docs')}
          >
            Documentation
          </button>
          <button
            className={`px-4 py-2 border rounded ${activeTab === 'api' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
            onClick={() => setActiveTab('api')}
          >
            APIs
          </button>
        </div>

        {/* Documentation Tab */}
        {activeTab === 'docs' && (
          <div className="Docs space-y-12">
            {/* Ai Tracker */}
            <div className="Convert">
              <a href="https://www.aitracker.io/help" target="_blank">
                <p><b>AI Tracker</b></p>
              </a>
              <a href="https://www.aitracker.io/help" target="_blank">
                <Image
                  src="/aitracker_docs.png"
                  alt="AI Tracker"
                  unoptimized
                  width={560}
                  height={360}
                  className="project"
                />
              </a>
              <p>
              
              </p>

              <p>
              AI Tracker is a directory of AI developer tools. I authored the help center content, which covered the directory's features and how things work, how to submit a new tool, and how to update a tool listing.
                <br /><br />

                I also wrote an internal Swagger (OpenAPI) file for the API endpoints, which allowed the frontend team access to proper API documentation for easier integration.
                <br /><br />

                <span className="text-[#0e8d7d] font-medium">
                  Tools & Technologies:</span> HTML, OpenAPI
              </p>
            </div>

            {/* Convert */}
            <div className="Convert">
              <a href="https://docs.convert.com.ng" target="_blank">
                <p className="text-[#0e8d7d] font-semibold text-lg">Convert</p>
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
                In this project, I worked on improving user experience and developer efficiency through documentation. I created user guides that simplifies the onboarding process, making it easier for users to understand and use the platform's core features.
                <br /><br />
                Furthermore, I wrote internal documentation, which the frontend team relies on as they work towards the product's launching.
                <br /><br />
                <span className="text-[#0e8d7d] font-medium">Tools & Technologies:</span> OpenAPI, Markdown, Mintlify
              </p>
            </div>


            {/* Dolphin Flashcards */}
            <div className="Dolphin">
              <a href="http://docs.dolphinflashcards.com" target="_blank">
                <p className="text-[#0e8d7d] font-semibold text-lg">Dolphin Flashcards</p>
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
                I designed and implemented the information architecture for the Dolphin Flashcards' documentation platform. Being an OpenSource project, I created onboarding contents for future contributors to the project and also setup the API reference section for a wholistic view of the availaible endpoints.
                <br /><br />

                <span className="text-[#0e8d7d] font-medium">Tools & Technologies:</span> Mintlify, OpenAPI, MDX
              </p>
            </div>


            {/* Snapnames */}
            <div className="Snapnames">
              <a href="https://curious-druid-05e915.netlify.app" target="_blank">
                <p className="text-[#0e8d7d] font-semibold text-lg">SnapNames</p>
              </a>
              <a href="https://curious-druid-05e915.netlify.app" target="_blank">
                <Image
                  src="/snapnames.png"
                  alt="SnapNames App"
                  unoptimized
                  width={560}
                  height={360}
                  className="project"
                />
              </a>
              <p className="content">
                For this sample project, I created a detailed user guide for SnapNames - a domain name back-ordering service - using the static site generator, MKDocs.
                <br /><br />
                <span className="text-[#0e8d7d] font-medium">Tools & Technologies:</span> MKDocs, Markdown
              </p>
            </div>


          </div>
        )}

        {/* API Tab */}
        {activeTab === 'api' && (
          <div className="API">
            <h3 className="text-[#0e8d7d] font-semibold text-lg">Convert API</h3>
            <p>
              I designed and implemented the API for this airtime-to-cash conversion platform. Built with Django and Django REST Framework (DRF), this API powers the app's key features, including airtime sales order creation, balance retrieval, cash withdrawal requests, cash deposits, and transaction logging. I used an SQL database for persistent data storage and JWT authentication for securing API endpoints.
              <br /><br />
              <span className="text-[#0e8d7d] font-medium">Tools & Technologies:</span> Django, Django REST Framework, MySQL, JWT
            </p>
          </div>
        )}
    </div>
   


      
    </section>
  );
}
