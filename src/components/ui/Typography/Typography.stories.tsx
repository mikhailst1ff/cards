import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/Typography/Typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      // options: ['h1', 'h2', 'h3', 'h4'],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'Anyway text',
    variant: 'h1',
  },
}
export const Link1: Story = {
  args: {
    as: 'a',
    children: 'Anyway text',
    variant: 'link1',
  },
}
