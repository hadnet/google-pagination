import React from 'react';
import {DefaultTheme, ThemeProvider} from 'styled-components';
import {FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa';
import {Container, Last, First, LeftStrip, MidStrip, RightStrip, Next, Prev, Link, Item, ItemLink} from './elements';
import type {PaginationProps, State} from './Pagination.types';

const defaultTheme: DefaultTheme = {
  colors: {
    active: '#2778fa',
    activeFont: '#ffffff',
    background: '#f0f0f0',
    font: '#9f9fa1',
    roundBtns: '',
  },
};

export class Pagination<T> extends React.Component<PaginationProps<T>, State> {
  state: State = {
    pager: {},
  };

  static defaultProps = {
    initialPage: 1,
    theme: defaultTheme,
  };

  componentDidMount() {
    const {items, initialPage} = this.props;
    if (items.length) {
      this.setPage(initialPage);
    }
  }

  componentDidUpdate(prevProps: PaginationProps<T>) {
    const {items, initialPage} = this.props;
    if (items !== prevProps.items) {
      this.setPage(initialPage);
    }
  }

  setPage(page: number) {
    const {items, onChangePage} = this.props;
    let {pager} = this.state;
    if (page < 1 || page > (pager.totalPages ?? page + 1)) {
      return;
    }
    pager = this.getPager(items.length, page);
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex! + 1);
    this.setState({pager});
    onChangePage(pageOfItems);
  }

  getPager(totalItems: number, currentPage = 1, pageSize = 10) {
    const totalPages = Math.ceil(totalItems / pageSize);
    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    const pages = [...Array(endPage + 1 - startPage).keys()].map(i => startPage + i);
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    };
  }

  render() {
    const {pager} = this.state;
    const {theme} = this.props;
    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }
    return (
      <Container>
        <ThemeProvider theme={theme!}>
          <LeftStrip>
            <First>
              <Link onClick={() => this.setPage(1)}>
                <FaAngleDoubleLeft />
              </Link>
            </First>
            <Prev>
              <Link onClick={() => this.setPage(pager.currentPage! - 1)}>
                <FaAngleLeft />
              </Link>
            </Prev>
          </LeftStrip>
          <MidStrip>
            {pager.pages.map((page, index) => (
              <Item key={index}>
                <ItemLink active={pager.currentPage === page} onClick={() => this.setPage(page)}>
                  {page}
                </ItemLink>
              </Item>
            ))}
          </MidStrip>
          <RightStrip>
            <Next>
              <Link onClick={() => this.setPage(pager.currentPage! + 1)}>
                <FaAngleRight />
              </Link>
            </Next>
            <Last>
              <Link onClick={() => this.setPage(pager.totalPages!)}>
                <FaAngleDoubleRight />
              </Link>
            </Last>
          </RightStrip>
        </ThemeProvider>
      </Container>
    );
  }
}
