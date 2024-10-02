/* eslint-disable jest/no-mocks-import */
import { configure, fireEvent, render, screen } from "@testing-library/react";
import { BreedsSelect, BreedsSelectProps } from "./BreedsSelect";
import { breedsMock } from "./__mocks__/mocks";
import userEvent from "@testing-library/user-event";

configure({ testIdAttribute: "id" });

const defaultProps: BreedsSelectProps = {
  breeds: breedsMock,
  selectedBreed: "",
  setSelectedBreed: jest.fn(),
};

const buildTest = (props: BreedsSelectProps = defaultProps) => {
  render(<BreedsSelect {...props} />);

  return {
    breedsSelect: () => screen.getByTestId("breeds-select"),
    menuItems: () => screen.getAllByTestId(/breeds-select-item-/),
  };
};

describe("BreedsSelect", () => {
  it("renders", () => {
    const { breedsSelect, menuItems } = buildTest();

    expect(breedsSelect()).toBeVisible();
    userEvent.click(breedsSelect(), { bubbles: true });
    expect(menuItems()).toHaveLength(breedsMock.length);
  });
});
