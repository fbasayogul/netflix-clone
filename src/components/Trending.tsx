import H2 from "./H2"
import SwiperComponent from "./SwiperComponent"

export default function Trending() {
  return (
    <section className="container mx-auto mt-14 mb-20 max-md:mb-14">
      <H2>Gündemdekiler</H2>
      <SwiperComponent />
    </section>
  )
}
