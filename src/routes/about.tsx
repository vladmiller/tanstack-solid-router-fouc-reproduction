import { Link, createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/about")({
  component: About,
})

function About() {
  return (
    <div>
      <h1>Hello, page</h1>
      <Link to="/">Back to homepage</Link>
    </div>
  )
}
