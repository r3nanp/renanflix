/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import { Input, Wrapper, Label } from './styles';

function FormField({
  label, name, type, onChange, value,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  return (
    <Wrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
        />

        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </Wrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default FormField;
