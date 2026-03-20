import { createRouter } from "@tanstack/solid-router"
import { routeTree } from "./routeTree.gen"

export const getRouter = () => {
  const router = createRouter({ routeTree })
  return router
}
