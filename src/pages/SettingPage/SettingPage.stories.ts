import type { Meta, StoryFn } from '@storybook/vue3';
import SettingPage from './SettingPage.vue';

export default {
  title: 'Page/SettingPage',
  component: SettingPage,
} as Meta<typeof SettingPage>;

const Template: StoryFn<typeof SettingPage> = args => ({
  components: { SettingPage },
  setup() {
    return { args };
  },
  template: '<setting-page v-bind="args" />',
});

export const Default = Template.bind({});
