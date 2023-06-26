import { Field, Form, Formik } from 'formik';

export const SearchMovie = ({ initialValues, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field type="text" name="searchQuery" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
