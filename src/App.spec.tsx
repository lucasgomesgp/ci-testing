import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("Should be able to show info", () => {
    const { getByText } = render(<App />);
    expect(getByText("CI Testing")).toBeInTheDocument();
  });
});
