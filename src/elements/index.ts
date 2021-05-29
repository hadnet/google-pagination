import styled, {css} from 'styled-components';
import {hexToRgb} from '../utils';

const FormatBase = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  list-style: none;
  color: ${({theme}) => theme.colors.font};
  height: 25px;
  margin: 2px 0;
  padding: 0 4px;
  font-family: sans-serif;
`;

const LinkBase = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  font-size: 10px;
  cursor: pointer;
  user-select: none;
`;

const ItemBase = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
`;

export const MidStrip = styled.ul`
  ${FormatBase};
  background-color: ${({theme}) => theme.colors.background};
`;

export const LeftStrip = styled.ul`
  ${FormatBase};
  & > li > a {
    background-color: ${({theme}) => theme.colors.roundBtns};
  }
`;

export const RightStrip = styled.ul`
  ${FormatBase};
  & > li > a {
    background-color: ${({theme}) => theme.colors.roundBtns};
  }
`;

export const Prev = styled.li`
  margin: 2px !important;
`;

export const Next = Prev;

export const First = styled.li`
  ${ItemBase};
`;

export const Last = First;

export const Item = First;

export const Link = styled.a`
  ${LinkBase};
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: ${({theme}) => theme.colors.background};
  transition: all 0.2s;
  &:hover {
    width: 25px;
    height: 25px;
    background-color: ${({theme}) => theme.colors.active};
    color: ${({theme}) => theme.colors.activeFont} !important;
`;

export const ItemLink = styled.a<{active?: boolean}>`
  ${LinkBase};
  transition: all 0.2s;
  &:hover {
    color: ${({active, theme}) => (active ? '#fff' : theme.colors.active)} !important;
  }
  ${({active}) =>
    active &&
    css`
      width: 25px;
      height: 25px;
      box-shadow: 0 0 8px 4px
        ${({theme}) => {
          const {r, g, b} = hexToRgb(theme.colors.active);
          return `rgba(${r}, ${g}, ${b}, 0.25)`;
        }};
      background-color: ${({theme}) => theme.colors.active};
      color: ${({theme}) => theme.colors.activeFont} !important;
    `}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
