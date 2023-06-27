import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 2;

  strong {
    color: #f0bcdf;
    font-size: 10rem;
  }

  p {
    font-weight: 500;
    text-align: center;
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: #ffcb39;
  margin-bottom: 2rem;
`;

export const MessageText = styled.p`
  max-width: 500px;
  margin-bottom: 4rem;
`;

export const ButtonBackHome = styled(Link)`
  background-color: transparent;
  border: 1px solid #ffcb39;
  border-radius: 2px;
  color: inherit;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.5rem 0.75rem;
  text-decoration: none;

  &:hover {
    background-color: #ffcb39;
    transition: all 0.4s ease;
  }
`;
