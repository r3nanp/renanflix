import React from 'react';
import { Input } from './styles';

function FormField({ label, name, onChange, type, value }){
  return (
    <label>
      <span>{label}:</span>
      <Input name={name} type={type} onChange={onChange} value={value} />
    </label>
  );
}

export default FormField;