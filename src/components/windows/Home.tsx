import Image from 'next/image';
import Link from 'next/link';
import { socials } from "@/content/socials";

export function Home() {

  return (
    <div className="flex h-full">
      <div className="flex relative overflow-hidden justify-center items-center h-full w-1/3">
        <div className="absolute rounded-full w-60 h-60 bg-white shadow-[0px_6px_14px_1px_rgba(0,0,0,0.53),0px_0px_4px_0px_rgba(0,0,0,0.14)] border-1 border-solid border-gray-500 bg-gradient-to-b from-slate-50 to-gray-300"></div>
        <div className="absolute rounded-full w-56 h-56 bg-black border-1 border-white overflow-hidden">
          <Image src="/logo.jpg" alt="Rudy" width={800} height={600} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start h-full pr-16 w-2/3 gap-8 text-white">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl font-medium">Rodolfo Sandoval</h1>
          <h2 className="text-lg font-light">version 1.0.3</h2>
        </div>
        <div className="flex flex-col justify-start items-start text-xl">
          <h1 className="font-medium">About Me</h1>
          <h2 className="font-light">I have a strong background in both computer science and graphic design. I have been utilizing these skills for over eight years, both in my studies and in professional settings. I am particularly passionate about projects that merge these two fields.</h2>
        </div>
        <div className="flex flex-col justify-start items-start text-xl">
          <h1 className="font-medium">Resume</h1>
          <div className="flex gap-4 mt-2">
            <Link href="/visual_resume_sandoval.pdf" target="_blank" download="Sandoval Resume Visual">
              <button className="os-btn"><h1 className="h-auto p-0">Visual</h1></button>
            </Link>
            <button className="os-btn">Technical</button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start text-xl">
          <h1 className="font-medium">Find Me</h1>
          <div className="flex gap-4" >
            {socials.map((social) => {
              const { id, name, icon, url } = social
              return (
                <Link key={id} href={url} target="_blank">
                  <div 
                    data-tip={name}
                    className="tooltip text-4xl mt-2 text-white hover:text-white/50 transition-all duration-500"
                  >
                    {icon}
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
