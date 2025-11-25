import Hero from "@/components/Hero"
import Trending from "@/components/Trending"
import WhyJoinUs from "./components/WhyJoinUs"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="bg-black">
      <Hero />
      <div className="max-sm:px-5">
        <Trending />
        <WhyJoinUs />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}

export default App
