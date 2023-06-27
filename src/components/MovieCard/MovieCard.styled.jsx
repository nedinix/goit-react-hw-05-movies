import styled from '@emotion/styled';
import { colors } from 'helpers';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 24px;
`;
export const PosterImage = styled.img`
  display: block;
  width: auto;
  height: 500px;
`;

export const DescriptionBlock = styled.div`
  padding-left: 24px;
`;

export const InfoWrapper = styled.div`
  /* border-top: 1px solid #bbb8b8; */
  /* border-bottom: 1px solid #bbb8b8; */
  background-color: #f3eeee;

  padding: 8px;
`;

export const InfoList = styled.ul`
  list-style-type: none;
  padding-left: 0;

  li a {
    color: ${colors.linkText};
  }

  li a:hover,
  li a:focus {
    color: ${colors.linkTextHover};
  }
`;
