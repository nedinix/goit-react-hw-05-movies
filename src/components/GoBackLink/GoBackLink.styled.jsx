import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const LinkStyled = styled(Link)`
  padding: 8px;
  max-width: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: #fff;

  background-color: #646363;
  border: 1px solid transparent;
  border-radius: 2px;

  &:hover {
    color: #646363;
    background-color: #fff;
    border-color: #646363;
  }

  &:active {
    color: #fff;
    background-color: #e78310;
    border-color: transparent;
  }
`;
