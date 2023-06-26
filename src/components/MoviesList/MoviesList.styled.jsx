import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors } from 'helpers';

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${colors.linkText};

  &:hover {
    color: ${colors.linkTextHover};
  }
`;

export const ListItemStyled = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ListStyled = styled.ul`
  margin: 0;
  padding-left: 18px;
  list-style-type: square;

  * {
    /* margin: 0; */
    /* padding: 0; */
  }
`;
