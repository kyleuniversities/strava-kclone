import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginPromptPage from "@/page/login-prompt/LoginPromptPage";

describe("Login Page", () => {
  it("renders the title", () => {
    render(<LoginPromptPage />);
    const titleElements = screen.getAllByText("Community-Powered Motivation");
    expect(titleElements);
  });
});
