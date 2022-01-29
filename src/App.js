// import { GlobalStyle } from './components/GlobalStyle';
import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  number: Yup.number().required('Required'),
});
const ErrorText = styled.p`
  color: red;
`;
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name="name"
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  render() {
    return (
      <div>
        <Formik
          initialValues={{ name: '', number: '' }}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          <Form>
            <div>
              <h1>Phonebook</h1>
              <div>
                <label htmlFor="name">Name </label>
                <Field
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                <FormError name="name" />
              </div>
              <div>
                <label htmlFor="tel"> Number</label>
                <Field
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
                <FormError name="number" />
              </div>
              <button type="submit">Add contact</button>
            </div>
            <div>
              <h2>Contacts</h2>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }
}
export default App;
