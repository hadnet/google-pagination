import {DefaultTheme} from 'styled-components';

interface PaginationProps<T> {
  initialPage: number;
  items: T[];
  onChangePage: (chunk: T[]) => void;
  theme?: DefaultTheme;
}

type PagerProps =
  | 'totalItems'
  | 'currentPage'
  | 'pageSize'
  | 'totalPages'
  | 'startPage'
  | 'endPage'
  | 'startIndex'
  | 'endIndex'
  | 'pages';

interface State {
  pager: {
    [K in PagerProps]?: K extends 'pages' ? number[] : number;
  };
}

export type {PaginationProps, PagerProps, State, DefaultTheme};
