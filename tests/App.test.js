import { test, describe } from "bun:test"
import { render, screen } from "@testing-library/react"
import App from "../src/App"

describe("render", () => {
  test("App renders", async () => {
    render(<App />)

    await screen.findByText("Vite + React")

    screen.getByText("Vite + React")
  })
})