import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/solid-router"
import { Suspense } from "solid-js"
import { HydrationScript } from "solid-js/web"
import styleCss from "../app.css?url"

export const Route = createRootRoute({
  head: () => ({
    links: [
      { rel: "stylesheet", href: styleCss },
    ],
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HeadContent FOUC Repro" },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head />
      <body>
        <HeadContent />
        <Suspense>
          <Outlet />
        </Suspense>
        <Scripts />
        <HydrationScript />
      </body>
    </html>
  )
}
