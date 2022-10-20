import type { Meta, StoryFn } from '@storybook/vue3';
import RealHeader from './RealHeader.vue';

export default {
  title: 'Header',
  component: RealHeader,
} as Meta<typeof RealHeader>;

const Template: StoryFn<typeof RealHeader> = args => ({
  components: { RealHeader },
  setup() {
    return { args };
  },
  template: '<real-header v-bind="args" />',
});

export const Default = Template.bind({});
