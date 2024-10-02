import { configure, render, screen } from "@testing-library/react";
import { CatsPage } from "./CatsPage";
import { SnackbarContextWrapper } from "../components/generic/SnackbarContextProvider";

configure({ testIdAttribute: "id" });

jest.mock("../api/cats");
jest.mock("../api/breeds");

const buildTest = () => {
  render(
    <SnackbarContextWrapper>
      <CatsPage />
    </SnackbarContextWrapper>
  );

  return {
    catsContainer: () => screen.getByTestId("cats-container"),
    catsCards: () => screen.findAllByTestId(/cat-card-/),
  };
};

describe("CatsPage", () => {
  it("renders", async () => {
    const { catsContainer, catsCards } = buildTest();
    expect(catsContainer()).toBeVisible();
    expect(await catsCards()).toHaveLength(3);
  });
});
