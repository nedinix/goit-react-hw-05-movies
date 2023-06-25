import { Field, Form, Formik } from 'formik';
import { Outlet, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    console.log(e.target.search);
    // setSearchParams({ name: e.target.search.value });
  };

  return (
    <section>
      <h2>Movies</h2>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="search" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Outlet />
    </section>
  );
};
