interface Theme {
  colors: {
    active: string;
    activeFont: string;
    font: string;
    background: string;
    roundBtns?: string;
  };
}

interface PaginationProps<T> {
  initialPage: number;
  pageSize: number;
  items: T[];
  onChangePage: (chunk: T[]) => void;
  theme?: Theme;
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

export type {PaginationProps, PagerProps, State, Theme};
