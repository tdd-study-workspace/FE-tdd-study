import type { Meta, StoryFn } from '@storybook/vue3';
import RealFooter from './RealFooter.vue';

export default {
  title: 'Footer',
  component: RealFooter,
} as Meta<typeof RealFooter>;

const Template: StoryFn<typeof RealFooter> = args => ({
  components: { RealFooter },
  setup() {
    return { args };
  },
  template: '<real-footer v-bind="args"/>',
});

export const Default = Template.bind({});
