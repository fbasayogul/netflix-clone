import clsx from "clsx"
import React from "react"

export default function H2({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={clsx(
        "mb-6 text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-white",
        className,
      )}
    >
      {children}
    </h2>
  )
}
