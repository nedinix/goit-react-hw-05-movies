import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  align-items: flex-start;

  padding-left: 0;

  list-style-type: none;

  overflow-x: scroll;

  li {
    display: block;
  }

  li:not(:last-child) {
    margin-right: 12px;
  }

  img {
    display: block;
    width: 160px;
    height: auto;
  }
`;
