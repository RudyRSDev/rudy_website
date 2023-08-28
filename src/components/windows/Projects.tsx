import { projects } from "@/content/projects";
import Link from "next/link";
import { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa6";

export function Projects() {
  const [active, setActive] = useState(0)

  const handleActive = (id: number) => {
    setActive(id)
  }

  return (
    <div className="flex h-full">
      <div className="flex flex-col w-1/4 h-full bg-black/30 rounded overflow-y-auto">
        {/* Left Navigation */}
        {projects.map((project) => {
          const { id, name } = project
          if (id === active)
            return (
              <div key={id} className="flex gap-4 text-white hover:bg-black/30 p-2 pl-4" onClick={() => handleActive(id)}>
                <div><FaFolderOpen className="text-2xl" /></div>
                <h1 className="font-medium line-clamp-1">{name}</h1>
              </div>
            )
          return (
            <div key={id} className="flex items-center gap-4 text-white hover:bg-black/30 p-2 pl-4" onClick={() => handleActive(id)}>
              <div><FaFolder className="text-2xl" /></div>
              <h1 className="font-light line-clamp-1">{name}</h1>
            </div>
          )
        })}
      </div>

      {/* Right Panel */}
      <div className="flex flex-col w-3/4 px-12 pt-2">
        <div className={`flex justify-center items-center h-full text-2xl font-semibold text-white${active !== 0 ? ' hidden' : ''}`}>
          <h1>Select a Folder</h1>
        </div>
        {projects.filter(project => project.id === active).map((project) => {
          const { id, name, year, desc, links, images, tech } = project
          return (
            <div key={id} className="flex flex-col text-white">
              <h1 className="text-3xl font-semibold">{name}</h1>
              <h2 className="font-light opacity-75">{year}</h2>
              <p className="text-lg pt-4">{desc}</p>
              <div className="flex gap-4 mt-4">
                {links.map((link) => {
                  const { id, name, url } = link
                  return (
                    <a key={id} href={url} className=" text-white">
                      <button className="nav-btn rounded bg-black/30 hover:bg-black/60 whitespace-nowrap" >{name}</button>
                    </a>
                  )
                })}
              </div>
              <h2 className="font-medium text-xl pt-4">Technologies:</h2>
              <div className="flex flex-wrap">
                {tech.map((tech) => {
                  const { id, name, icon, url} = tech
                  if (url)
                    return (
                      <Link
                        key={id}
                        href={url}
                        target="_blank"
                        className="flex flex-col justify-center items-center w-32 h-32 text-white text-6xl bg-white/0 hover:bg-white/20 transition-all duration-500"
                      >
                        {icon}
                        <h1 className="font-base text-sm text-center pt-2">{name}</h1>
                      </Link>
                    )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
