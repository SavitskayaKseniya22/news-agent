import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/ui/Button',
  component: Button,
  argTypes: {
    view: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'transparent'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'big'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    view: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    view: 'secondary',
    size: 'medium',
  },
};

export const Transparent: Story = {
  args: {
    children: 'Transparent Button',
    view: 'transparent',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    view: 'primary',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    view: 'primary',
    size: 'medium',
  },
};

export const Big: Story = {
  args: {
    children: 'Big Button',
    view: 'primary',
    size: 'big',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    view: 'primary',
    size: 'medium',
    disabled: true,
  },
};
