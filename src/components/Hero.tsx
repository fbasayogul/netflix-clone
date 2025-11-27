import EmailCapture from "./EmailCapture"
import Header from "./Header"

export default function Hero() {
  return (
    <section className="relative z-1 mx-auto h-[clamp(40rem,50vw,55rem)] w-full max-w-480">
      <div className="h-30 max-md:pt-2.5 max-sm:px-5">
        <Header />
      </div>
      <img
        src="/assets/images/netflix-background.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="border-primary absolute -bottom-0.5 z-5 h-10 w-full rounded-t-[100%] border-t-2 bg-black" />
      <div
        className="absolute -bottom-11 left-1/2 z-10 mx-auto h-20 w-full -translate-x-1/2"
        style={{
          background:
            "radial-gradient(50% 500% at 50% -420%, #4061e766 80%, rgba(0, 0, 0, 0.1) 100%), transparent",
        }}
      />
      <div className="border-primary absolute inset-0 bg-linear-to-t from-black/85 to-black/60 min-[120rem]:border-x-2" />
      <div className="absolute top-0 flex h-full w-full items-center justify-center">
        <div className="relative z-2 flex w-[clamp(27rem,40vw,36rem)] flex-col items-center max-md:px-5">
          <h1 className="text-center text-6xl leading-18 font-black text-white max-xl:text-4xl max-xl:leading-12 max-md:text-3xl max-md:leading-10">
            Sınırsız film, dizi ve çok daha fazlası
          </h1>
          <p className="pt-5 text-center text-xl font-semibold text-white max-xl:text-base">
            189,99 TL ile başlayan fiyatlarla. İstediğiniz zaman iptal
            edebilirsiniz.
          </p>
          <h3 className="pt-8 text-center text-base font-semibold text-white">
            İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak
            için tek yapmanız gereken e-posta adresinizi girmek.
          </h3>
          <EmailCapture />
        </div>
      </div>
    </section>
  )
}
