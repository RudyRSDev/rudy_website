import { FaStar } from "react-icons/fa6";
import Image from "next/image";

interface MediaPosterProps {
  id: number;
  name: string;
  image: string;
  rating: number;
}

export const MediaPoster = (props: MediaPosterProps) => {
  const { id, name, image, rating } = props;

  return (
    <div className="flex relative object-contain w-48">
      <img src={image} className="rounded" />
      <div className="absolute flex flex-col text-white rounded bg-black/60 h-full w-full p-3 opacity-0 hover:opacity-100 transition-all duration-500">
        <h1 className="font-semibold">
          {name}
        </h1>
        <div className="flex items-center">
          <FaStar /> <h1 className="pl-1">{rating}/10</h1>
        </div>
      I</div>
    </div>
  )
}