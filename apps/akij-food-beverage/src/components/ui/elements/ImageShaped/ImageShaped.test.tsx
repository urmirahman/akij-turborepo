import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import * as stories from "./ImageShaped.stories";

const composedStories = composeStories(stories);

describe("<ImageShaped/>", () => {
  it.each(Object.entries(composedStories))("%s", (_, Story) => {
    render(<Story />);

    expect(screen.queryByRole("img")).toBeInTheDocument();
  });
});
