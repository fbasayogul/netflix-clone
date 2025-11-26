import { Button } from "./ui/button"

export default function Header() {
  return (
    <header className="relative z-10 container mx-auto flex h-[clamp(3rem,5vw,5.5rem)] w-full items-center justify-between bg-transparent">
      <img
        src="/assets/images/netflixLogo.svg"
        className="h-[clamp(1.5rem,3vw,2.5rem)]"
      />
      <Button className="bg-primary rounded text-sm font-semibold text-white">
        Oturum Aç
      </Button>
    </header>
  )
}
