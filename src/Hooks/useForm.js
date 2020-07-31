/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(valoresIniciais) {
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

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    valores,
    handleChange,
    clearForm,
  };
}

export default useForm;
