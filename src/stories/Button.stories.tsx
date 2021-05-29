import React from 'react';
import {Story, Meta} from '@storybook/react';
import {Pagination} from '../Pagination';
import {PaginationProps} from '../Pagination.types';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    theme: {
      description: 'A theme object for pagination component. Values need to be in hex format.',
    },
    items: {
      description: 'An array of type T.',
    },
    initialPage: {
      description: 'Page number to start from.',
    },
    onChangePage: {
      description: 'Callback that returns the items for each page.',
    },
  },
} as Meta;

const defaultTheme: Story<PaginationProps<{id: number; name: string}>> = args => <Pagination {...args} />;

export const DefaultTheme = defaultTheme.bind({});
DefaultTheme.args = {
  items: [...Array(200).keys()].map(i => ({id: i + 1, name: `item ${i + 1}`})),
  initialPage: 1,
  onChangePage: chunk => console.log(chunk),
};
