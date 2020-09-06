/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react'

import useForm from '../../../Hooks/useForm'
import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'
import Span from '../../../components/Span'
import FormField from '../../../components/FormField'

import { Items, Heading } from './styles.js'

function Categoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const {
    handleChange,
    valores,
    clearForm,
    handleBlur,
    validate,
  } = useForm({
    valoresIniciais,
  })
  const [categorias, setCategorias] = useState([])
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://renanflix.herokuapp.com/categorias'
    fetch(URL).then(async res => {
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
        {valores.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(infos) {
          infos.preventDefault()
          setErrors(validate(valores.nome))
          setCategorias([...categorias, valores])

          clearForm()
        }}
      >
        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.nome && <Span>{errors.nome}</Span>}

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.descricao && <Span>{errors.descricao}</Span>}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button type="submit">Cadastrar</button>
      </form>
      
      <Heading>Categorias existentes</Heading>
      <Items>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>{categoria.titulo}</li>
        ))}
      </Items>

      <Button to="/">Home</Button>
    </PageDefault>
  )
}

export default Categoria
