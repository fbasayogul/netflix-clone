import EmailCapture from "./EmailCapture"

export default function HomeEmailSection() {
  return (
    <section className="mx-auto mb-20 max-w-190 max-xl:max-w-160 max-md:mb-14">
      <h3 className="mb-4 text-center text-base text-white">
        İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için
        tek yapmanız gereken e-posta adresinizi girmek.
      </h3>
      <EmailCapture />
    </section>
  )
}
