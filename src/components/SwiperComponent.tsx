import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Navigation, Pagination, Scrollbar } from "swiper/modules"
import { usePopularMovies } from "@/hooks/usePopularMovies"
import { Dialog, DialogTrigger } from "./ui/dialog"
import { useState, useEffect } from "react"
import { environment } from "@/lib/environment"
import MovieDialogContent from "./MovieDialogContent"

export default function SwiperComponent() {
  const [selectedMovie, setSelectedMovie] = useState<any>(null)
  const [blur, setBlur] = useState<boolean>(false)
  const { data: movies, isLoading, error } = usePopularMovies()

  useEffect(() => {
    if (!blur) return

    const t = setTimeout(() => {
      setBlur(false)
    }, 450)

    return () => clearTimeout(t)
  }, [blur])

  return (
    <>
      {isLoading && <div>Yükleniyor...</div>}
      {error && <div>Hata: {(error as Error).message}</div>}

      {!isLoading && !error && (
        <Dialog>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            modules={[Pagination, Navigation, Scrollbar]}
            navigation
            scrollbar={{ draggable: true }}
            className="mySwiper relative! py-5! pl-5!"
          >
            {movies?.map((item, index) => (
              <SwiperSlide key={item.id} className="max-sm:min-w-32">
                <DialogTrigger
                  asChild
                  onClick={() => {
                    setSelectedMovie(item)
                    setBlur(true)
                  }}
                >
                  <div className="relative h-auto cursor-pointer rounded-lg transition-transform duration-200 ease-in-out hover:scale-105">
                    <img
                      className="h-[clamp(10rem,20vw,22rem)] w-full rounded-lg object-cover"
                      src={`${environment.imageBaseUrl}/${item.poster_path}`}
                    />
                    <p className="absolute bottom-14 -left-5 text-[clamp(4rem,10vw,8rem)] leading-10 font-extrabold text-black [-webkit-text-stroke:1px_white] max-lg:bottom-8 max-md:-left-3 max-sm:bottom-5">
                      {index + 1}
                    </p>
                  </div>
                </DialogTrigger>
              </SwiperSlide>
            ))}
          </Swiper>
          <MovieDialogContent blur={blur} selectedMovie={selectedMovie} />
        </Dialog>
      )}
    </>
  )
}
