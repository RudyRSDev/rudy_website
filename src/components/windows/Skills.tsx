import { useState } from "react";
import { skills } from "../../content/skills";
import Link from "next/link";

export function Skills() {
  const [filter, setFilter] = useState('All')

  const filters = ['All', 'Markup', 'Programming', 'Framework', 'Software', 'Platform']

  const handleFilter = (tag: string) => {
    setFilter(tag)
  }

  return (
    <div className="flex flex-wrap flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center nav-group my-4">
        {filters.map((tag) => {
          return (
            <button
              key={tag}
              className={`nav-btn ${filter === tag ? 'text-white bg-black/60' : ''}`}
              onClick={() => handleFilter(tag)}
            >
              {tag}
            </button>
          )
        })}
      </div>
      <div className="flex flex-wrap justify-center w-full px-14">
        {skills.map((skill) => {
          const { id, name, icon, tag, url } = skill
          if (filter === tag || filter === 'All')
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
  );
}
