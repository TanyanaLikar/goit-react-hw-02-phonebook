import React, { Component } from 'react';
import { nanoid } from "nanoid";

class Form extends Component{
  nameInputId = nanoid.generate();
  numberInputId= nanoid.generate();

    state={
        name: '',
        number: '',
    };

    handleChange =event=>{
        const {name,value} = event.currentTarget;
        this.setState({[name]:value })
      };
      
      handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(); 
        this.reset();      
      };

      reset =() => {
        this.setState({name:'',number: ''});
      }

    render(){
      return (
        <form onSubmit={this.handleSubmit} >
          
            <h1>Phonebook</h1>
            
              <label htmlFor= {this.nameInputId}>Name 
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                id= {this.nameInputId}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              
              </label>
            
              <label htmlFor= {this.numberInputId}> Number
              <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                id={this.numberInputId}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              </label>           
            <button type="submit">Add contact</button>
           </form>
      
      )
    }
    
}
export default Form;
