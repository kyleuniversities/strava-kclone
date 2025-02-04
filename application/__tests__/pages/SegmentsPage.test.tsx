import SegmentsPage from "@/page/segments/SegmentsPage";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Segments Page", () => {
  it("renders the description text", () => {
    render(<SegmentsPage />);
    const elements = screen.getAllByText(
      /You can star segments on Activity and Segment pages, as well as Segment search/,
    );
    expect(elements.length).toBeGreaterThan(0);
  });
  it("renders the My Routes Text", () => {
    render(<SegmentsPage />);
    const elements = screen.getAllByText(/My Routes/);
    expect(elements.length).toBeGreaterThan(0);
  });
  it("renders the Strava Logo twice", () => {
    render(<SegmentsPage />);
    const elements = screen.getAllByText("STRAVA");
    expect(elements.length).toEqual(2);
  });
});
