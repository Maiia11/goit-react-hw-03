import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short").max(50, "Too long").required('required'),
  number: Yup.string().min(3, "Too short").max(50, "Too long").required('required')
})



const initialValues = {
  name: "",
  number: ""
};


function ContactForm({onAdd}) {
  
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number

    } );
    actions.resetForm();

  }
  const nameFieldName = useId();
  const nameFieldNumber = useId();


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
      <Form >
        <div>
        <label htmlFor={nameFieldName}> Name </label>
          <Field type="text" name="name" id={nameFieldName} />
          <ErrorMessage name="name" component='span'/>
        </div>
        <div>
        <label htmlFor={nameFieldNumber}> Number </label> 
          <Field type="text" name="number" id={nameFieldNumber} />
         <ErrorMessage name="number" component="span"/>
          </div>
      <button type="submit">Add contact</button>
      </Form>
      </Formik>
  )
}

export default ContactForm