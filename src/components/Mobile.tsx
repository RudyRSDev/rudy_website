import Image from "next/image"
import Link from "next/link"
import { socials } from "@/content/socials"
import { IoWarning } from "react-icons/io5"


export default function Mobile() {
  return (
    <div className="flex justify-center items-center h-full w-screen">
      <div className=" flex flex-col items-center w-[90%] h-[95%] bg-black/40 rounded backdrop-blur-lg overflow-hidden">
        <div className="w-4/5 mt-6">
          <Image src="/images/etc/logo_wide.png" alt="Rudy" width={1342} height={578} />
        </div>
        <div className="flex flex-col justify-start px-6 gap-4 my-6 overflow-auto">
          {/* About Me */}
          <div className="flex flex-col text-xl text-white max-w-lg">
            <h1 className="font-medium">About Me</h1>
            <h2 className="font-light text-base">I have a strong background in both computer science and graphic design. I have been utilizing these skills for over eight years, both in my studies and in professional settings. I am particularly passionate about projects that merge these two fields.</h2>
          </div>

          {/* Resume */}
          <div className="flex flex-col text-xl text-white w-max pt-4">
            <h1 className="font-medium">Resume</h1>
            <div className="flex gap-4 mt-2">
              <Link href="/docs/visual_resume_sandoval.pdf" target="_blank" download="Sandoval Resume Visual">
                <button className="os-btn"><h1 className="h-auto p-0">Visual</h1></button>
              </Link>
              <button className="os-btn opacity-50">Technical</button>
            </div>
          </div>

          {/* Find Me */}
          <div className="flex flex-col text-xl text-white">
            <h1 className="font-medium">Find Me</h1>
            <div className="flex gap-4" >
              {socials.map((social) => {
                const { id, name, icon, url, alt } = social
                if (name !== 'X/Twitter')
                return (
                  <Link data-tip={name} key={id} href={url} target="_blank" className="tooltip" >
                    <div className=" text-2xl mt-2 text-white hover:opacity-50 transition-all duration-500">
                      {icon}
                    </div>
                  </Link>
                )
                return (
                  <Link data-tip={name} key={id} href={url} target="_blank" className="tooltip">
                    <div className=" text-2xl mt-2 text-white hover:opacity-50 transition-all duration-500">
                      {alt}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Warning */}
          <div>
            <div className="flex items-center text-white">
              <IoWarning className="text-xl" />
              <h1 className="font-medium text-xl"> Warning </h1>
            </div>
            <p className="text-white">Skills, Education, Projects can not be viewed on a mobile device feel free to download my resume or revisit on a desktop device.</p>
          </div>
        </div>
      </div>
    </div>
  )
}