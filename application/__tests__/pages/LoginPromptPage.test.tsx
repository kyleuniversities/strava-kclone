import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginPromptPage from "@/page/login-prompt/LoginPromptPage";

describe("Login Page", () => {
  it("renders the title", () => {
    render(<LoginPromptPage />);
    const elements = screen.getAllByText("Community-Powered Motivation");
    expect(elements.length).toBeGreaterThan(0);
  });
  it("renders the sign up with email text", () => {
    render(<LoginPromptPage />);
    const elements = screen.getAllByText("Sign Up With Email");
    expect(elements.length).toBeGreaterThan(0);
  });
  it("renders the Strava Logo twice", () => {
    render(<LoginPromptPage />);
    const elements = screen.getAllByText("STRAVA");
    expect(elements.length).toEqual(2);
  });
  it("renders the sign up with email text", async () => {
    render(<LoginPromptPage />);
    const element = screen.getByText("Sign Up With Email")
      .parentElement as HTMLElement;
    fireEvent.click(element);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const elements = screen.getAllByText("Kyle Humphrey");
    expect(elements.length).toBeGreaterThan(0);
  });
});
