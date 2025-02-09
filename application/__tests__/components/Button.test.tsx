import RootLayout from "@/app/layout";
import Button from "@/component/util/button/Button";
import "@app/globals.css";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "next/app";

// Execute Tests
describe("Button", () => {
  it("renders the correct text", () => {
    const texts = ["Apple", "Banana", "Cantelope"];
    for (let text of texts) {
      render(<Button>{text}</Button>);
      const elements = screen.getAllByText(text);
      expect(elements.length).toBeGreaterThan(0);
    }
  });
  it("renders the correct color scheme class name", async () => {
    const colorSchemes = ["", "default", "white", "black"];
    for (let colorScheme of colorSchemes) {
      const text = colorScheme.toUpperCase() + "_X";
      render(<Button colorScheme={colorScheme || undefined}>{text}</Button>);
      let element = screen.getByText(text);
      expect(element.classList).toContain(
        `color-scheme-${colorScheme || "default"}`,
      );
    }
  });
  it("renders the correct variant class name", async () => {
    const variants = ["", "default", "small"];
    for (let variant of variants) {
      const text = variant.toUpperCase() + "_X";
      render(<Button variant={variant || undefined}>{text}</Button>);
      let element = screen.getByText(text);
      expect(element.classList).toContain(`variant-${variant || "default"}`);
    }
  });
});
