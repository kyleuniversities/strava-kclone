import DashboardPage from "@/page/dashboard/DashboardPage";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Dashboard Page", () => {
  it("renders the user name", () => {
    render(<DashboardPage />);
    const elements = screen.getAllByText("Kyle Humphrey");
    expect(elements.length).toBeGreaterThan(0);
  });
  it("renders the Clubs Text", () => {
    render(<DashboardPage />);
    const elements = screen.getAllByText(/Clubs/);
    expect(elements.length).toBeGreaterThan(0);
  });
  it("renders the Strava Logo twice", () => {
    render(<DashboardPage />);
    const elements = screen.getAllByText("STRAVA");
    expect(elements.length).toEqual(2);
  });
});
