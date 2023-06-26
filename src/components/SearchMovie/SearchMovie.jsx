import { Form, Formik } from 'formik';
import { ButtonStyled, FieldStyled, FormWrapper } from './SearchMovie.styled';

export const SearchMovie = ({ query, onSubmit }) => {
  const initialValues = {
    searchQuery: query ? query : '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <FormWrapper>
          <FieldStyled
            type="text"
            name="searchQuery"
            placeholder="Search movie by name"
          />
          <ButtonStyled type="submit">Search</ButtonStyled>
        </FormWrapper>
      </Form>
    </Formik>
  );
};
