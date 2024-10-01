import { configure, render, screen } from "@testing-library/react";
import { CatsPage } from "./CatsPage";

configure({ testIdAttribute: "id" });

const buildTest = () => {
  render(<CatsPage />);

  return {
    catsContainer: () => screen.getByTestId("cats-container"),
  };
};

describe("CatsPage", () => {
  it("renders", () => {
    const { catsContainer } = buildTest();
    expect(catsContainer()).toBeVisible();
  });
});
