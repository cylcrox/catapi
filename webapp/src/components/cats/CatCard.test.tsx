import { configure, fireEvent, render, screen } from "@testing-library/react";
import { CatCard, CatsCardProps } from "./CatCard";

configure({ testIdAttribute: "id" });

const defaultProps: CatsCardProps = {
  id: "xnzzM6MBI",
  altText: "Cat alt text",
  breed: "Cat Breed",
  favorite: false,
  imageUrl: "https://fake_image_url.jpg",
  toggleFavorite: jest.fn(),
};

const buildTest = (props: CatsCardProps = defaultProps) => {
  render(<CatCard {...props} />);

  return {
    image: () => screen.getByTestId(`card_image_${props.id}`),
    breed: () => screen.getByText(`Breed: ${props.breed}`),
    favoriteButton: () => screen.getByTestId(`toggleFavorite-${props.id}`),
  };
};

describe("CatsCard", () => {
  it("renders", () => {
    const { image, breed, favoriteButton } = buildTest();

    expect(image()).toBeDefined();
    expect(breed()).toBeDefined();
    expect(favoriteButton()).toBeDefined();
  });

  it("toggles favorite", () => {
    const { favoriteButton } = buildTest();

    fireEvent.click(favoriteButton());

    expect(defaultProps.toggleFavorite).toHaveBeenCalledTimes(1);
  });
});
