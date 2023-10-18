import Image from 'next/image';
import Link from 'next/link';
import { socials } from "@/content/socials";
import { useState } from "react";

export function Home() {
  const [useIcon, setUseIcon] = useState(true)

  return (
    <div className="flex flex-wrap h-full w-full">
      {/* Left Panel */}
      <div className="flex relative justify-center items-center w-1/3">
        <div className="absolute rounded-full w-44 h-44 bg-white shadow-[0px_6px_14px_1px_rgba(0,0,0,0.53),0px_0px_4px_0px_rgba(0,0,0,0.14)] border-1 border-solid border-gray-500 bg-gradient-to-b from-slate-50 to-gray-300"></div>
        <div className="absolute rounded-full w-40 h-40 bg-black border-1 border-white overflow-hidden">
          <Image src="/images/etc/profile.jpg" alt="Rudy" width={800} height={800} />
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-col justify-center items-start gap-8 w-2/3 text-white ">
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium">Rodolfo Sandoval</h1>
          <h2 className="text-base font-light">version 1.0.3</h2>
        </div>
        <div className="flex flex-col text-xl max-w-lg">
          <h1 className="font-medium">About Me</h1>
          <h2 className="font-light text-base">I have a strong background in both computer science and graphic design. I have been utilizing these skills for over eight years, both in my studies and in professional settings. I am particularly passionate about projects that merge these two fields.</h2>
        </div>
        <div className="flex flex-col text-xl">
          <h1 className="font-medium">Resume</h1>
          <div className="flex pt-1 gap-6">
            <div>
              <h2 className="font-light text-base">Technical</h2>
              <div className="flex gap-2 pt-1">
                <Link href="/docs/r_sandoval_tech_resume_web.pdf" target="_blank" download="Sandoval Resume">
                  <button className="nav-btn !px-4 !py-1 rounded bg-black/30 hover:bg-black/60 whitespace-nowrap" ><span className="font-light text-base">.pdf</span></button>
                </Link>
                <Link href="/docs/r_sandoval_tech_resume_web.docx" target="_blank" download="Sandoval Resume">
                  <button className="nav-btn !px-4 !py-1 rounded bg-black/30 hover:bg-black/60 whitespace-nowrap" ><span className="font-light text-base">.docx</span></button>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="font-light text-base">Visual</h2>
              <div className="flex gap-2 pt-1">
                <Link href="/docs/r_sandoval_visual_resume_web.pdf" target="_blank" download="Sandoval Resume Visual">
                  <button className="nav-btn !px-4 !py-1 rounded bg-black/30 hover:bg-black/60 whitespace-nowrap" ><span className="font-light text-base">.pdf</span></button>
                </Link>
                <Link href="/docs/r_sandoval_visual_resume_web.docx" target="_blank" download="Sandoval Resume Visual">
                  <button className="nav-btn !px-4 !py-1 rounded bg-black/30 hover:bg-black/60 whitespace-nowrap" ><span className="font-light text-base">.docx</span></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-xl">
          <h1 className="font-medium">Find Me</h1>
          <div className="flex gap-4" >
            {socials.map((social) => {
              const { id, name, icon, url, alt } = social
              if (name !== 'X/Twitter')
                return (
                  <Link data-tip={name} key={id} href={url} target="_blank" className="tooltip" >
                    <div className=" text-4xl mt-2 text-white hover:opacity-50 transition-all duration-500">
                      {icon}
                    </div>
                  </Link>
                )
              if (useIcon)
                return (
                  <Link data-tip={name} key={id} href={url} target="_blank" className="tooltip" onMouseEnter={() => setUseIcon(false)} >
                    <div className=" text-4xl mt-2 text-white hover:opacity-50 transition-all duration-500">
                      {icon}
                    </div>
                  </Link>
                )
              return (
                <Link data-tip={name} key={id} href={url} target="_blank" className="tooltip" onMouseLeave={() => setUseIcon(true)}>
                  <div className=" text-4xl mt-2 text-white hover:opacity-50 transition-all duration-500">
                    {alt}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}