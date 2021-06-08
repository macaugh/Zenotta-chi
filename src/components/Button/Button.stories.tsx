import { Story, Meta } from '@storybook/react';
import { STORYBOOK_VALS } from '../../utils';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      description: 'Either an outlined or a contained style'
    },
    mainColour: {
      description: 'Primary colour for handling the styling',
      control: {
        type: "color"
      }
    },
    textColour: {
      description: 'Text colour',
      control: {
        type: "color"
      }
    },
    disabled: {
      description: 'Whether the button is disabled or not'
    },
    onClick: {
      description: 'Function to trigger on button click'
    },
    loading: {
      description: 'Whether the button is loading or not'
    },
    loadingColour: {
      description: 'Colour of the loading icon',
      control: {
        type: "color"
      }
    },
  }
} as Meta;

const Template: Story<ButtonProps & { children: any }> = (args) => {
  return (
    <div style={{ width: 150 }}>
      <Button {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  mainColour: STORYBOOK_VALS.primary,
  children: "Click Me",
};

export const Outlined = Template.bind({});
Outlined.args = {
  mainColour: STORYBOOK_VALS.primary,
  children: "Click Me",
  variant: 'outlined'
};

export const Contained = Template.bind({});
Contained.args = {
  mainColour: STORYBOOK_VALS.primary,
  children: "Click Me",
  variant: 'contained'
};

export const Disabled = Template.bind({});
Disabled.args = {
  mainColour: STORYBOOK_VALS.primary,
  children: "Click Me",
  disabled: true
};