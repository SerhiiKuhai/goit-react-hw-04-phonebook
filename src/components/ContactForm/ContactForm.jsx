import React, { useState } from 'react';
import { Button } from 'components/Button/Button.styled';
import { FormContact } from 'components/Form/Form.styled';
import { InputContact } from 'components/Form/Input.styled';
import { LabelContact } from 'components/Form/Label.styled';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);

    setName('');
    setNumber('');
  };

  return (
    <>
      <FormContact onSubmit={handleSubmit}>
        <LabelContact htmlFor="inputName">Name</LabelContact>
        <InputContact
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="inputName"
          value={name}
          onChange={handleChange}
        />
        <LabelContact htmlFor="inputNumber">Number</LabelContact>
        <InputContact
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="inputNumber"
          value={number}
          onChange={handleChange}
        />
        <Button type="submit">Add contact</Button>
      </FormContact>
    </>
  );
}
