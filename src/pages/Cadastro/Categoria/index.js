/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react'

import config from '../../../config'

import useForm from '../../../Hooks/useForm'
import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'
import FormField from '../../../components/FormField'

import { Items, Heading } from './styles.js'

function Categoria() {
  
  function handleSubmit(event) {
    event.preventDefault()
    setCategorias([...categorias, values])

    clearForm()
  }

  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const { handleChange, values, clearForm } = useForm({
    initialValues,
  })

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch(`${config.URL}/categorias`).then(async res => {
      if (res.ok) {
        const resposta = await res.json()
        setCategorias(resposta)
        return
      }
      throw new Error('Não foi possível pegar os dados')
    })
  }, [])

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <Heading>Categorias existentes</Heading>
      <Items>
        {categorias.map(categoria => (
          <li key={`${categoria.titulo}`}>{categoria.titulo}</li>
        ))}
      </Items>

      <Button to="/">Home</Button>
    </PageDefault>
  )
}

export default Categoria
