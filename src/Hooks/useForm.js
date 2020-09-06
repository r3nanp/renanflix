/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import { useState } from 'react';

function useForm({ valoresIniciais }) {
  const [touched, setTouchedFields] = useState(valoresIniciais);
  const [valores, setValores] = useState(valoresIniciais);

  function validate(valor) {
    const errors = {};

    if (!valor.nome) {
      errors.nome = 'Insira um nome válido'
    }

    if (!valor.descricao) {
      errors.descricao = 'Insira uma descrição válida'
    }

    return errors;
  }

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

  function handleBlur(infos) {
    const fieldName = infos.target.getAttribute('name');
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
    validate,
    handleBlur,
    handleChange,
    clearForm,
  };
}

export default useForm;
