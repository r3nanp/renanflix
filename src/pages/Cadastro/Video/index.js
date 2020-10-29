/* eslint-disable array-callback-return */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import useForm from '../../../Hooks/useForm'

import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo() {
  const history = useHistory()
  const [categorias, setCategorias] = useState([])

  const categoryTitles = categorias.map(({ titulo }) => titulo)

  const { handleChange, values, videoValidate } = useForm({
    initialValues: {
      titulo: 'Arctic Monkeys',
      url: 'https://www.youtube.com/watch?v=bpOSxM0rNPM',
      categoria: 'Indie Music',
    },
  })

  function handleSubmit(event) {
    event.preventDefault()
    videoValidate()
    const categoriaEscolhida = categorias.find(categoria => {
      categoria.titulo === values.categoria
    })

    videosRepository
      .create({
        titulo: values.titulo,
        url: values.url,
        categoriaId: categoriaEscolhida.id,
      })
      .then(() => {
        <p>Cadastrado com sucesso!</p>
        history.push('/')
      })
  }

  useEffect(() => {
    categoriasRepository.getAll().then(response => {
      setCategorias(response)
    })
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form
        onSubmit={handleSubmit}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          suggestions={categoryTitles}
          onChange={handleChange}
        />

        <br />
        <button type="submit">Cadastrar</button>
      </form>

      <br />
      <br />

      <Button to="/cadastro/categoria">Cadastrar Categoria</Button>
    </PageDefault>
  )
}

export default CadastroVideo
