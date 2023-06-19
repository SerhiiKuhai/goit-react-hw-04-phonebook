import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from 'components/Todo/Todo';
import { Grid } from 'components/Grid/Grid.styled';

export function ContactList({ filtredContacts, onDeleteTodo }) {
  return (
    <Grid>
      {filtredContacts.map(contact => (
        <Todo
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </Grid>
  );
}

ContactList.propTypes = {
  filtredContacts: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
