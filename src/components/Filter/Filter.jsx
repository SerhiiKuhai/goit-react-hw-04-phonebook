import React from 'react';
import PropTypes from 'prop-types';
import { LabelContact } from 'components/Form/Label.styled';
import { InputContact } from 'components/Form/Input.styled';

export function Filter({ value, onChange }) {
  return (
    <LabelContact htmlFor="inputName">
      Find contacts by name
      <InputContact type="text" value={value} onChange={onChange} />
    </LabelContact>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
