import { edu } from "@/content/edu";

export function Education() {

  return (
    <div className="flex flex-col gap-12 items-center my-12">
        {edu.map((school) => {
          const { id, name, location, title, graduation, gpa, image } = school
          return (
            <div key={id} className="flex flex-col w-4/5 bg-black/30 p-12 rounded text-white">
              <div className="max-w-[24rem] p-4 bg-black/30 rounded">{image}</div>
              <h1 className="font-semibold text-3xl mt-4">{name}</h1>
              <h2 className="font-light opacity-75">Location: {location}</h2>
              <h2 className="mt-4 text-lg">Certificate: {title}</h2>
              <h2 className="text-lg">Graduation: {graduation}</h2>
              <h2 className="text-lg">GPA: {gpa}</h2>             
            </div>
          )
        })}
    </div>
  );
}
