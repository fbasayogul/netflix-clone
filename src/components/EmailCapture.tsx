import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function EmailCapture() {
  return (
    <div className="flex w-full items-center gap-x-2 pt-4 max-sm:flex-col max-sm:gap-5">
      <Input
        className="flex h-14 w-full min-w-50 items-center rounded border-[#767676] bg-[#161616b3] text-base font-semibold placeholder:text-base placeholder:font-semibold placeholder:text-[#c0c0c0] max-md:h-12"
        placeholder="E-Posta adresi"
      />
      <Button className="h-14 rounded px-6! text-2xl text-white max-xl:text-lg max-md:h-12">
        <span className="font-bold">Başlayın</span>
        <RightArrow />
      </Button>
    </div>
  )
}

export const RightArrow = () => {
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
