import { experience } from "@/content/experience";
import { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa6";
import Link from "next/link";

export function Experience() {
  const [active, setActive] = useState(0)

  const handleActive = (id: number) => {
    setActive(id)
  }

  return (
    <div className="flex h-full">
      {/* Left Navigation */}
      <div className="flex flex-col w-1/4 h-full bg-black/30 rounded overflow-y-auto">
        <h1 className="text-white text-2xl font-semibold pl-2 pt-2">Work</h1>
        {experience.filter(job => job.type === 'work').map((job) => {
          const { id, location } = job
          if (id === active)
            return (
              <div key={id} className="flex gap-4 text-white hover:bg-black/30 p-2 pl-4" onClick={() => handleActive(id)}>
                <div><FaFolderOpen className="text-2xl" /></div>
                <h1 className="font-medium line-clamp-1">{location}</h1>
              </div>
            )
          return (
            <div key={id} className="flex items-center gap-4 text-white hover:bg-black/30 p-2 pl-4" onClick={() => handleActive(id)}>
              <div><FaFolder className="text-2xl" /></div>
              <h1 className="font-light line-clamp-1">{location}</h1>
            </div>
          )
        })}
        <h1 className="text-white text-2xl font-semibold pl-2 pt-2">Other</h1>
        {experience.filter(job => job.type !== 'work').map((job) => {
          const { id, location } = job
          if (id === active)
            return (
              <div key={id} className="flex gap-4 text-white hover:bg-black/30 p-2 pl-4" onClick={() => handleActive(id)}>
                <div><FaFolderOpen className="text-2xl" /></div>
                <h1 className="font-medium line-clamp-1">{location}</h1>
              </div>
            )
          return (
            <div key={id} className="flex gap-4 text-white hover:bg-black/30 p-2 pl-4" onClick={() => handleActive(id)}>
              <div><FaFolder className="text-2xl" /></div>
              <h1 className="font-light line-clamp-1">{location}</h1>
            </div>
          )
        })}
      </div>

      
      <div className="flex flex-col w-3/4 px-12 pt-2">
        <h1 className={`text-2xl font-semibold text-white${active !== 0 ? ' hidden' : ''}`}>Select a Folder</h1>
        {experience.filter(job => job.id === active).map((job) => {
          const { id, location, title, date, number, address, desc, tasks, tech } = job
          return (
            <div key={id} className="flex flex-col text-white">
              <h1 className="text-3xl font-semibold">{location}</h1>
              <h2 className="font-light opacity-75">{date}</h2>
              <h2 className="font-light opacity-75">Location: {address}</h2>
              <h2 className="font-light opacity-75">Contact: {number}</h2>
              <p className="text-lg pt-4">{desc}</p>
              <h2 className="font-medium text-xl pt-4">Responsibilities:</h2>
              {tasks.map((task) => {
                return (
                  <div key={task} className="flex gap-2 pl-4">
                    <h1>-</h1>
                    <h1>{task}</h1>
                  </div>
                )
              })}
              <h2 className="font-medium text-xl pt-4">Technologies:</h2>
              <div className="flex flex-wrap">
                {tech.map((tech) => {
                  const { id, name, icon, url } = tech
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
