/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import { useState } from 'react'

function useForm({ valoresIniciais }) {
  const [touched, setTouchedFields] = useState(valoresIniciais)
  const [valores, setValores] = useState(valoresIniciais)

  function validate(valor) {
    const errors = {}

    if (!valor.nome) {
      errors.nome = 'Insira um nome válido';
    }

    if (!valor.descricao) {
      errors.descricao = 'Insira uma descrição válida';
    }

    return errors;
  }

  function videoValidate(value) {
    const errors = {};

    if (
      !value.url ||
      !value.url.includes('https://youtube.com') ||
      !value.url.includes('https://youtu.be')
    ) {
      errors.url = 'Insira uma url do Youtube válida!!';
    }

    if (!value.categoria) {
      errors.categoria = 'Insira uma categoria válida';
    }

    return errors;
  }

  function setValue(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    })
  }

  function handleChange(infos) {
    setValue(infos.target.getAttribute('name'), infos.target.value)
  }

  function handleBlur(info) {
    const fieldName = info.target.getAttribute('name')
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    })
  }

  function clearForm() {
    setValores(valoresIniciais)
  }

  return {
    valores,
    validate,
    videoValidate,
    handleBlur,
    handleChange,
    clearForm,
  }
}

export default useForm
