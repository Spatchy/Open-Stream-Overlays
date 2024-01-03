import { test, describe } from "bun:test"
import { render, screen } from "@testing-library/react"
import Unit from "../../../src/components/Unit/Unit"

describe("render", () => {
  test("Unit renders unrecognised component error when component does not exist", async () => {
    render(<Unit body={[ { id: "test", component: "test" } ]} />)

    await screen.findByText("Error: Unrecognised component name: 'test'")

    screen.getByText("Error: Unrecognised component name: 'test'")
  })
})

describe("second render", () => {
  test("Unit renders no body error when body not passed in props", async () => {
    render(<Unit />)

    await screen.findByText("Error: No body field was provided")

    screen.getByText("Error: No body field was provided")
  })
})