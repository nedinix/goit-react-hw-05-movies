import { Outlet } from 'react-router-dom';
import { Container } from '../App';
import { HeaderStyled, NavLinkStyled } from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Container>
          <nav>
            <NavLinkStyled to="/">home</NavLinkStyled>
            <NavLinkStyled to="/movies">movies</NavLinkStyled>
          </nav>
        </Container>
      </HeaderStyled>
      <Outlet />
    </>
  );
};
