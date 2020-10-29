/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import { useState } from 'react'

export default function useForm({ initialValues }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  function videoValidate(value) {
    if (
      !value.url ||
      !value.url.includes('https://youtube.com') ||
      !value.url.includes('https://youtu.be')
    ) {
      errors.url = 'Insira uma url do Youtube válida!!'
    }

    if (!value.categoria) {
      errors.categoria = 'Insira uma categoria válida'
    }
    
    setErrors(errors)
  }

  function changeValues(key, index) {
    setValues({
      ...values,
      [key]: index,
    })
  }

  function handleChange(infos) {
    changeValues(infos.target.getAttribute('name'), infos.target.value)
  }

  function clearForm() {
    setValues(initialValues)
  }

  return {
    values,
    videoValidate,
    handleChange,
    clearForm,
  }
}
