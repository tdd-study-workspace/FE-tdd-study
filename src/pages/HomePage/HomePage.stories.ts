import type { Meta, StoryFn } from '@storybook/vue3';
import HomePage from './HomePage.vue';

export default {
  title: 'Page/Home',
  component: HomePage,
} as Meta<typeof HomePage>;

const Template: StoryFn<typeof HomePage> = args => ({
  components: { HomePage },
  setup() {
    return { args };
  },
  template: '<home-page v-bind="args" />',
});

export const Default = Template.bind({});
