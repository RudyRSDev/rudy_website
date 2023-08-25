import Image from "next/image";
import { album } from "@/content/album";
import { aboutNav } from "@/content/aboutNav";
import { facts } from "@/content/facts";
import { topMovies } from "@/content/media/topMovies";
import { topShows } from "@/content/media/topShows";
import { topAnime } from "@/content/media/topAnime";
import { topGames } from "@/content/media/topGames";
import { MediaPoster } from "../media/MediaPoster";

export function About() {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      {/* Logo */}
      <div className="w-4/5 mt-6">
        <Image src="/images/etc/logo_wide.png" alt="Rudy" width={1342} height={578} />
      </div>

      {/* Navitation */}
      <h1 className="text-white text-xl font-medium mt-6">Learn More About Me</h1>
      <div className="flex flex-wrap w-2/3 justify-center my-3 gap-1">
        {aboutNav.map((nav) => {
          const { id, name, url } = nav
          return (
            <a key={id} href={url} className=" text-white">
              <button className="nav-btn rounded bg-black/30 hover:bg-black/60 whitespace-nowrap" >{name}</button>
            </a>
          )
        })}
      </div>

      {/* Fun Facts */}
      <h1 className="text-white text-xl font-medium mt-24" id="fun-facts">Fun Facts</h1>
      <div className="flex flex-col w-4/5 bg-black/30 rounded overflow-hidden mt-6">
        <div className="flex w-full"><div className="text-right w-8 bg-black/30 pr-2 py-1">#</div></div>
        {facts.map((fact) => {
          const { id, text } = fact
          return (
            <div key={id} className={`flex items-center w-full ${(id % 2) === 0 ? '' : 'bg-black/30'}`}>
              <div className="text-right w-8 bg-black/30 pr-2 py-1">
                {id}
              </div>
              <div className="text-white line-clamp-1 hover:line-clamp-2 pl-2">
                {text}
              </div>
            </div>
          )
        })}
      </div>

      {/* Album */}
      <h1 className="text-white text-xl font-medium mt-24" id="album">Picture Album</h1>
      <div className="carousel carousel-center max-w-2xl p-4 mt-6 space-x-4 bg-black/30 rounded-box h-[24rem]">
        {album.map((photo) => {
          const { id, url } = photo
          return (
            <div key={id} id={`slide-${id}`} className="carousel-item">
              <img src={url} className="rounded-box" />
            </div>
          )
        })}
      </div>
      <div className="max-w-2xl my-4 gap-4">
        {album.map((photo) => {
          const { id } = photo
          return (
            <a key={id} href={`#slide-${id}`} className="mx-1 text-white">
              <button className="w-12 h-12 bg-black/30 rounded-full hover:-translate-y-3 transition-all duration-500" >{id}</button>
            </a>
          )
        })}
      </div>

      {/* Top Movies */}
      <h1 className="text-white text-xl font-medium mt-24" id="movies">Top Movies</h1>
      <div className="flex max-w-xl bg-black/30 rounded overflow-hidden mt-6 p-8 gap-8 overflow-x-auto">
        {topMovies.map((movie) => {
          const { id, name, image, rating } = movie
          return (
            <MediaPoster key={id} id={id} name={name} image={image} rating={rating} />
          )
        })}
      </div>

      {/* Top TV Shows */}
      <h1 className="text-white text-xl font-medium mt-24" id="tv-shows">Top TV Shows</h1>
      <div className="flex max-w-xl bg-black/30 rounded overflow-hidden mt-6 p-8 gap-8 overflow-x-auto">
        {topShows.map((show) => {
          const { id, name, image, rating } = show
          return (
            <MediaPoster key={id} id={id} name={name} image={image} rating={rating} />
          )
        })}
      </div>

      {/* Top Anime */}
      <h1 className="text-white text-xl font-medium mt-24" id="anime">Top Anime</h1>
      <div className="flex max-w-xl bg-black/30 rounded overflow-hidden mt-6 p-8 gap-8 overflow-x-auto">
        {topAnime.map((anime) => {
          const { id, name, image, rating } = anime
          return (
            <MediaPoster key={id} id={id} name={name} image={image} rating={rating} />
          )
        })}
      </div>

      {/* Top Games */}
      <h1 className="text-white text-xl font-medium mt-24" id="games">Top Games</h1>
      <div className="flex max-w-xl bg-black/30 rounded overflow-hidden mt-6 p-8 gap-8 overflow-x-auto">
        {topGames.map((game) => {
          const { id, name, image, rating } = game
          return (
            <MediaPoster key={id} id={id} name={name} image={image} rating={rating} />
          )
        })}
      </div>
    </div>
  );
}