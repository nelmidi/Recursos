import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HuntyLogo from './HuntyLogo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'HuntyDesignSystem/HuntyLogo',
  component: HuntyLogo,
} as ComponentMeta<typeof HuntyLogo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HuntyLogo> = (args) => (
  <div className={args.theme == 'light' || args.theme == 'invert'? `bg-primary w-fit rounded-md p-1`: ''}><HuntyLogo {...args} /></div>

);

export const darkLogoWithoutLabel = Template.bind({});
darkLogoWithoutLabel.args = {
  id: 'logo',
  width: '99',
  height: '25',
  theme: 'dark',
  showLabel: false,
};
export const darkLogoWithLabel = Template.bind({});
darkLogoWithLabel.args = {
  id: 'logo',
  width: '99',
  height: '25',
  theme: 'dark',
  showLabel: true,
};
export const lightLogoWithoutLabel = Template.bind({});
lightLogoWithoutLabel.args = {
  id: 'logo',
  width: '99',
  height: '25',
  theme: 'light',
  showLabel: false,
};
export const lightLogoWithLabel = Template.bind({});
lightLogoWithLabel.args = {
  id: 'logo',
  width: '99',
  height: '25',
  theme: 'light',
  showLabel: true,
};

export const invertLogoWithLabel = Template.bind({});
invertLogoWithLabel.args = {
  id: 'logo',
  width: '99',
  height: '25',
  theme: 'invert',
  showLabel: true,
};
export const primaryLogoWithoutLabel = Template.bind({});
primaryLogoWithoutLabel.args = {
  id: 'logo',
  width: '99',
  height: '25',
  theme: 'primary',
  showLabel: false,
};
export const primaryLogoWithLabel = Template.bind({});
primaryLogoWithLabel.args = {
  id: 'logo',
  width: '99',
  height: '25',
  theme: 'primary',
  showLabel: true,
};
