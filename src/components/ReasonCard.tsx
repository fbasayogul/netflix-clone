import type { Reason } from "./WhyJoinUs"

export default function ReasonCard({ title, content, icon }: Reason) {
  return (
    <div
      className="flex h-full min-h-42 flex-col rounded-2xl px-4 py-6 md:min-h-78"
      style={{
        background: "linear-gradient(149deg,#192247 0%,#210e17 96.86%)",
      }}
    >
      <h3 className="text-2xl font-semibold text-white max-md:text-xl">
        {" "}
        {title}{" "}
      </h3>
      <p className="flex flex-1 pt-4 text-base font-normal text-white/70 max-md:text-sm">
        {" "}
        {content}
      </p>
      <div className="flex w-full justify-end max-md:pt-5">
        <img src={`/assets/icons/${icon}.svg`} height={72} width={72} />
      </div>
    </div>
  )
}
