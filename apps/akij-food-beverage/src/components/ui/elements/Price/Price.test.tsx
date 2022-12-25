import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import * as stories from "./Price.stories";

const {
  Large,
  Medium,
  LargeWithStartingPrice,
  SmallWithRange,
  SmallWithWasPrice,
  MediumWithWasPrice,
} = composeStories(stories);

test("Price: Large", () => {
  render(<Large />);
  expect(screen.getByText("25.99 ৳")).toBeInTheDocument();
});

test("Price: Medium", () => {
  render(<Medium />);
  expect(screen.getByText("25.99 ৳")).toBeInTheDocument();
});

test("Price: Large with startingFrom", () => {
  render(<LargeWithStartingPrice />);
  expect(screen.getByText("Starting at ৳30 each")).toBeInTheDocument();
});

test("Price: Small with range", () => {
  render(<SmallWithRange />);
  expect(screen.getByText("৳24.99")).toBeInTheDocument();
  expect(screen.getByText("– ৳30.99")).toBeInTheDocument();
});

test("Price: Small with wasPrice", () => {
  render(<SmallWithWasPrice />);
  expect(screen.getByText("Price reduced to")).toBeInTheDocument();
  expect(screen.getByText("from the original price of")).toBeInTheDocument();
  expect(screen.getByText("26.99 ৳")).toBeInTheDocument();
  expect(screen.getByText("26.99 ৳")).toHaveStyle(
    "text-decoration: line-through"
  );
});

test("Price: Medium with wasPrice", () => {
  render(<MediumWithWasPrice />);
  expect(screen.getByText("Price reduced to")).toBeInTheDocument();
  expect(screen.getByText("from the original price of")).toBeInTheDocument();
  expect(screen.getByText("26.99 ৳")).toBeInTheDocument();
  expect(screen.getByText("26.99 ৳")).toHaveStyle(
    "text-decoration: line-through"
  );
});
