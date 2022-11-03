import type { Meta, StoryFn } from '@storybook/vue3';
import ArticlePage from './ArticlePage.vue';

export default {
  title: 'Page/Article',
  component: ArticlePage,
} as Meta<typeof ArticlePage>;

const Template: StoryFn<typeof ArticlePage> = args => ({
  components: { ArticlePage },
  setup() {
    return { args };
  },
  template: '<article-page v-bind="args"/>',
});

export const Default = Template.bind({});
