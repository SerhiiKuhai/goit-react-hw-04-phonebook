import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button } from 'components/Button/Button.styled';
import { FormContact } from 'components/Form/Form.styled';
import { InputContact } from 'components/Form/Input.styled';
import { LabelContact } from 'components/Form/Label.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value, id: nanoid() });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <FormContact onSubmit={this.handleSubmit}>
          <LabelContact htmlFor="inputName">Name</LabelContact>
          <InputContact
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="inputName"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <LabelContact htmlFor="inputNumber">Number</LabelContact>
          <InputContact
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="inputNumber"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <Button type="submit">Add contact</Button>
        </FormContact>
      </>
    );
  }
}
