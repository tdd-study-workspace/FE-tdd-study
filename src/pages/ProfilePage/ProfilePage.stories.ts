import type { Meta, StoryFn } from '@storybook/vue3';
import ProfilePage from './ProfilePage.vue';

export default {
  title: 'Page/Profile',
  component: ProfilePage,
} as Meta<typeof ProfilePage>;

const Template: StoryFn<typeof ProfilePage> = args => ({
  components: { ProfilePage },
  setup() {
    return { args };
  },
  template: '<profile-page v-bind="args"/>',
});

export const Default = Template.bind({});
