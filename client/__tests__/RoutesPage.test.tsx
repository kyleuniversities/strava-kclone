import RoutesPage from "@/page/routes/RoutesPage";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Routes Page", () => {
  it("renders the description text", () => {
    render(<RoutesPage />);
    const elements = screen.getAllByText(/Learn more about/);
    expect(elements.length).toBeGreaterThan(0);
  });
  it("renders the Training Calendar Text", () => {
    render(<RoutesPage />);
    const elements = screen.getAllByText(/Training Calendar/);
    expect(elements.length).toBeGreaterThan(0);
  });
  it("renders the Strava Logo twice", () => {
    render(<RoutesPage />);
    const elements = screen.getAllByText("STRAVA");
    expect(elements.length).toEqual(2);
  });
});
