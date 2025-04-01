import { ErrorMessage, Field, Form, Formik } from "formik"

export const Test = () => {
  return (
    <Formik initialValues={{ name: "" }} onSubmit={() => {}}>
      <Form>
        <Field name="name" />
        <ErrorMessage name="name" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}
