import Header from "./Header"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <div className="relative z-1 h-[clamp(35rem,50vw,55rem)] w-full">
      <div className="h-30 max-md:pt-2.5 max-sm:px-5">
        <Header />
      </div>
      <img
        src="/assets/images/netflix-background.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="border-primary absolute -bottom-0.5 z-5 h-10 w-full rounded-t-[100%] border-t-2 bg-black"></div>
      <div
        className="absolute -bottom-11 left-1/2 z-10 mx-auto h-20 w-full -translate-x-1/2"
        style={{
          background:
            "radial-gradient(50% 500% at 50% -420%, #4061e766 80%, rgba(0, 0, 0, 0.1) 100%), transparent",
        }}
      ></div>
      <div className="absolute inset-0 bg-linear-to-t from-black/85 to-black/60" />
      <div className="absolute top-0 flex h-full w-full items-center justify-center">
        <div className="relative z-2 flex w-[clamp(27rem,40vw,36rem)] flex-col items-center">
          <h1 className="text-center text-6xl leading-18 font-extrabold text-white max-xl:text-4xl">
            Sınırsız film, dizi ve çok daha fazlası
          </h1>
          <p className="pt-5 text-center text-xl font-semibold text-white">
            189,99 TL ile başlayan fiyatlarla. İstediğiniz zaman iptal
            edebilirsiniz.
          </p>
          <Button className="mt-8 h-14 rounded px-6! text-2xl text-white">
            <span className="font-semibold">Kaydı Tamamla</span>
            <Arrow />
          </Button>
        </div>
      </div>
    </div>
  )
}

export const Arrow = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      className="size-6"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.59 12-7.3 7.3 1.42 1.4 8-8a1 1 0 0 0 0-1.4l-8-8-1.42 1.4z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
