import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination } from "swiper/modules"
import { usePopularMovies } from "@/hooks/usePopularMovies"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { useState } from "react"

export default function SwiperComponent() {
  const [selectedMovie, setSelectedMovie] = useState<any>(null)
  const { data: movies, isLoading, error } = usePopularMovies()

  if (isLoading) return <div>Yükleniyor...</div>
  if (error) return <div>Hata: {(error as Error).message}</div>

  return (
    <Dialog>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper py-5! pl-5!"
      >
        {movies?.map((item, index) => (
          <SwiperSlide key={item.id}>
            <DialogTrigger asChild onClick={() => setSelectedMovie(item)}>
              <div className="relative h-auto cursor-pointer rounded-lg transition-transform duration-200 ease-in-out hover:scale-105">
                <img
                  className="h-[clamp(10rem,20vw,25rem)] w-full rounded-lg object-cover"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
                <p className="absolute bottom-14 -left-5 text-[clamp(4rem,10vw,8rem)] leading-10 font-extrabold text-black [-webkit-text-stroke:1px_white] max-lg:bottom-8 max-md:-left-3 max-sm:bottom-5">
                  {index + 1}
                </p>
              </div>
            </DialogTrigger>
          </SwiperSlide>
        ))}
      </Swiper>
      <DialogContent>
        {selectedMovie && (
          <DialogHeader>
            <DialogTitle>{selectedMovie.title}</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        )}
      </DialogContent>
    </Dialog>
  )
}
