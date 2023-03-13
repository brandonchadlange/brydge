import { Form, Formik } from "formik";
import { cloneElement, ReactElement } from "react";

type FormControl = {
  initialValues: any;
};

type AppFormProps = {
  initialValues: any;
  children: ReactElement[];
};

const AppForm = (props: AppFormProps) => {
  return (
    <Formik initialValues={props.initialValues} onSubmit={() => {}}>
      {({ errors, setFieldValue, values, setFieldTouched }) => (
        <Form>
          {/* {props.children.map((e) =>
            cloneElement(e, { setFieldValue, setFieldTouched })
          )} */}
        </Form>
      )}
    </Formik>
  );
};

export default AppForm;
