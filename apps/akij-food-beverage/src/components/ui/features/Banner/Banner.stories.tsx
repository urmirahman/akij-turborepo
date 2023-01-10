import type { Meta, Story } from '@storybook/react'
import { default as Component } from './Banner'

export default {
  component: Component,
  title: 'Features/Banner',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: Story = (props) => <Component {...props} />

export const Default = Template.bind({})
Default.args = {}
