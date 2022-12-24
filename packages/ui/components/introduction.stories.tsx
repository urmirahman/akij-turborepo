import { Meta } from "@storybook/react";

export default {
  title: "Akij Design System/Introduction",
  parameters: {
    docs: {
      description: {
        component: "Introduction to the Akij atomic design.",
      },
    },
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export function Introduction() {
  return (
    <>
      <ol style={{ listStyle: "disclosure-closed", paddingLeft: "1rem" }}>
        <li>
          The &quot;<strong>Foundation</strong>&quot; contains all design
          tokens, and basically are global settings which is being used
          throughout all components for optimal consistency.
        </li>
        <li>
          The components themselves have been split up in a hierarchical way,
          similar to Atomic Design:
          <ol style={{ listStyle: "decimal", paddingLeft: "1.5rem" }}>
            <li>
              The &quot;<strong>Elements</strong>&quot; contain all reusable
              simple core components; think of headings, images, or buttons.
              (equal to Atoms in Atomic Design)
            </li>
            <li>
              The &quot;<strong>Modules</strong>&quot; contain all reusable more
              complex components; think of product tiles, modals, or a video
              player. (equal to Molecules in Atomic Design)
            </li>
            <li>
              The &quot;<strong>Features</strong>&quot; contain all main
              components which will be stacked to create pages. (equal to
              Organisms in Atomic Design)
            </li>
          </ol>
        </li>
      </ol>
    </>
  );
}
