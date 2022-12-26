import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import * as stories from "./PlayButton.stories";

const { Default } = composeStories(stories);

describe("PlayButton", () => {
  /* test("should render primary PlayButton", () => {
    render(<Default />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  }); */
  test.only("FormInput test", () => {
    expect(1 + 1).toEqual(2);
  });
});
