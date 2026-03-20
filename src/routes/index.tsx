import { Link, createFileRoute } from "@tanstack/solid-router"
import { createSignal } from "solid-js"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  const [count, setCount] = createSignal(0)

  function handleClick() {
    const next = count() + 1
    setCount(next)

    // Update URL search param via replaceState — triggers TanStack Router's
    // patched history, which causes HeadContent to re-render and recreate
    // the <link rel="stylesheet"> element, producing a visible FOUC.
    const url = new URL(window.location.href)
    url.searchParams.set("slide", String(next))
    window.history.replaceState(history.state, "", url)
  }

  return (
    <div>
      <h1>HeadContent FOUC Reproduction</h1>
      <p>Click the button and watch for a flash of unstyled content.</p>
      <p>The dark background will briefly disappear on each click in production builds.</p>
      <p>Count: {count()}</p>
      <button type="button" onClick={handleClick}>
        replaceState (triggers FOUC)
      </button>
      <p>
        <Link to="/about">Go to about page</Link>
      </p>
    </div>
  )
}
