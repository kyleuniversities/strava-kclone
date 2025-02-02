import ClubsSearchPage from "@/page/clubs-search/ClubsSearchPage";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Clubs Search Page", () => {
  it("renders the create club text", () => {
    render(<ClubsSearchPage />);
    const elements = screen.getAllByText(/Create Club/);
    expect(elements.length).toBeGreaterThan(0);
  });
  it("renders the My Segments Text", () => {
    render(<ClubsSearchPage />);
    const elements = screen.getAllByText(/My Segments/);
    expect(elements.length).toBeGreaterThan(0);
  });
  it("renders the Strava Logo twice", () => {
    render(<ClubsSearchPage />);
    const elements = screen.getAllByText("STRAVA");
    expect(elements.length).toEqual(2);
  });
});
