import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination } from "swiper/modules"
import { usePopularMovies } from "@/hooks/usePopularMovies"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"
import { useState, useEffect } from "react"
import { environment } from "@/lib/environment"
import clsx from "clsx"
import { Button } from "./ui/button"
import { RightArrow } from "./EmailCapture"

export default function SwiperComponent() {
  const [selectedMovie, setSelectedMovie] = useState<any>(null)
  const [blur, setBlur] = useState<boolean>(false)
  const { data: movies, isLoading, error } = usePopularMovies()

  useEffect(() => {
    if (!blur) return

    const t = setTimeout(() => {
      setBlur(false)
    }, 2000)

    return () => clearTimeout(t)
  }, [blur])

  console.log("blur: ", blur)
  console.log("selectedMovie: ", selectedMovie)

  return (
    <>
      {isLoading && <div>Yükleniyor...</div>}
      {error && <div>Hata: {(error as Error).message}</div>}

      {!isLoading && !error && (
        <Dialog>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper py-5! pl-5!"
          >
            {movies?.map((item, index) => (
              <SwiperSlide key={item.id}>
                <DialogTrigger
                  asChild
                  onClick={() => {
                    ;(setSelectedMovie(item), setBlur(true))
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
          <DialogContent className="w-full max-w-[667px] bg-[#161616] p-0">
            {selectedMovie && (
              <div className="h-fit">
                <div className="relative">
                  <div
                    className={clsx(
                      "flex h-full max-h-96 flex-wrap rounded-t-lg pt-[56%]",
                      blur ? "blur-xl" : null,
                    )}
                    style={{
                      background: `url(${environment.imageBaseUrl}/${selectedMovie.poster_path})`,
                    }}
                  />
                  <div className="to-100%% absolute inset-0 bottom-0 bg-linear-to-tr from-[#161616]" />
                  <DialogTitle className="absolute bottom-2 px-10 text-4xl">
                    {selectedMovie.title}
                  </DialogTitle>
                </div>
                <div className="px-10 pt-4 pb-10">
                  <ul className="flex items-center gap-x-2">
                    {selectedMovie.genre_ids.map((id: number) => (
                      <li className="rounded bg-[#414141] p-1 text-sm font-semibold text-[#ffffffb3]">
                        {id}
                      </li>
                    ))}
                  </ul>
                  <p className="pt-5 text-base text-white">
                    Ufak bir kasabada küçük bir çocuk kaybolunca, gizli
                    deneyler, korkutucu doğaüstü güçler ve tuhaf bir küçük kızın
                    da parçası olduğu bir gizem ortaya çıkar.
                  </p>
                  <Button className="mt-10 h-14 rounded px-6! text-2xl text-white max-xl:text-lg max-md:h-12">
                    <span className="font-bold">Haydi Başlayın</span>
                    <RightArrow />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
