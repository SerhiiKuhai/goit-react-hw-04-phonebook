import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button.styled';
import { GridItem } from 'components/Grid/Grid.styled';

export class Todo extends Component {
  render() {
    const { name, number, id, onDeleteTodo } = this.props;

    return (
      <GridItem>
        {name} : {number}
        <Button onClick={() => onDeleteTodo(id)}>Delete</Button>
      </GridItem>
    );
  }
}

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
