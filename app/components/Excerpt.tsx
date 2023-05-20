import * as React from "react"

export function Excerpt({ children, fade }) {
  return (
    <blockquote
      className={`my-4 rounded-lg border px-8 font-normal not-italic ${
        fade ? "text-gray-500" : "text-gray-700"
      }`}
    >
      {children}
    </blockquote>
  )
}