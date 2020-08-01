/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import { useState } from 'react';

function useForm({ valoresIniciais }) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [valores, setValores] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(infos) {
    setValue(
      infos.target.getAttribute('name'),
      infos.target.value,
    );
  }

  function handleBlur(event) {
    const fieldName = event.target.getAttribute('name');
    console.log(fieldName);
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    });
  }

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    valores,
    errors,
    setErrors,
    handleBlur,
    handleChange,
    clearForm,
  };
}

export default useForm;
