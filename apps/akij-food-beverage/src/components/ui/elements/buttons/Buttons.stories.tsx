import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'ATOMS/button',
  component: Button,
} as ComponentMeta<typeof Button>

const BuyNow: ComponentStory<typeof Button> = () => <Button classname="primaryBtn" text={'Buy Now'} />

const SeeMore: ComponentStory<typeof Button> = () => <Button classname="outlineBtn" text={'See More'} />
