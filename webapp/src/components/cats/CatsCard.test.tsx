import { configure, render, screen } from "@testing-library/react";
import { CatsCard, CatsCardProps } from "./CatsCard";

configure({ testIdAttribute: "id" })

const defaultProps: CatsCardProps = {
  id: "xnzzM6MBI",
  altText: "Cat alt text",
  breed: "Cat Breed",
  favorite: false,
  imageUrl: "https://fake_image_url.jpg",
};

const buildTest = (props: CatsCardProps = defaultProps) => {
  render(<CatsCard {...props} />);

  return {
    image: () => screen.getByTestId(`card_image_${props.id}`),
    breed: () => screen.getByText(props.breed),
    favorite: () => screen.getByTestId(`favorite_cat_${props.id}`),
  };
};

describe("CatsCard", () => {
  it("renders", () => {
    const { image, breed, favorite } = buildTest();

    expect(image()).toBeDefined();
    expect(breed()).toBeDefined();
    expect(favorite()).toBeDefined();
  });
});
