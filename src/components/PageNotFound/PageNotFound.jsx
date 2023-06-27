import {
  Message,
  Title,
  MessageText,
  ButtonBackHome,
} from './PageNotFound.styled';
import { routes } from 'service/routes-service';

const PageNotFound = () => {
  return (
    <Message>
      <strong>404</strong>
      <Title>LOOKS LIKE YOU ARE LOST IN THE SPACE</Title>
      <MessageText>
        The page you are looking for might be removed or is temporally
        unavailable
      </MessageText>

      <ButtonBackHome to={routes.HOME}>GO BACK HOME</ButtonBackHome>
    </Message>
  );
};

export default PageNotFound;
