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
