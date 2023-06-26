import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;

  color: #434852;

  &.active {
    color: #2c9bdb;
  }
  &:not(:last-child) {
    margin-right: 8px;
  }
`;
