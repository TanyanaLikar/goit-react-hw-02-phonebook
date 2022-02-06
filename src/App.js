// import { GlobalStyle } from './components/GlobalStyle';
import { Component } from 'react';

import styled from 'styled-components';
import Form from './components/Form/Form';

class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitHandler = data => {};

  render() {
    return <Form onSumbit={this.formSubmitHandler} />;
  }
}
export default App;
