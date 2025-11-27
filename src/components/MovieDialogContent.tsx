import { DialogContent, DialogTitle } from "./ui/dialog"
import clsx from "clsx"
import { environment } from "@/lib/environment"
import { Button } from "./ui/button"
import { RightArrow } from "./EmailCapture"

interface MovieDialogContentProps {
  blur: boolean
  selectedMovie: any
}

export default function MovieDialogContent({
  blur,
  selectedMovie,
}: MovieDialogContentProps) {
  return (
    <DialogContent className="w-full bg-[#161616] p-0 md:max-w-[667px]!">
      {selectedMovie && (
        <div className="h-fit">
          <div className="relative overflow-hidden backdrop-opacity-0 duration-300 ease-in-out">
            <div
              className={clsx(
                "flex h-full max-h-96 flex-wrap rounded-t-lg bg-cover! bg-position-[top_center]! bg-no-repeat! pt-[55%] blur-xl transition duration-500",
                blur ? "blur-xl" : "blur-none!",
              )}
              style={{
                backgroundImage: `url(${environment.imageBaseUrl}/${selectedMovie.poster_path})`,
              }}
            />
            <div className="absolute inset-0 bottom-0 bg-linear-30 from-[#161616] to-100%" />
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
              Ufak bir kasabada küçük bir çocuk kaybolunca, gizli deneyler,
              korkutucu doğaüstü güçler ve tuhaf bir küçük kızın da parçası
              olduğu bir gizem ortaya çıkar.
            </p>
            <Button className="mt-10 h-14 rounded px-6! text-2xl text-white max-xl:text-lg max-md:h-12">
              <span className="font-bold">Haydi Başlayın</span>
              <RightArrow />
            </Button>
          </div>
        </div>
      )}
    </DialogContent>
  )
}
