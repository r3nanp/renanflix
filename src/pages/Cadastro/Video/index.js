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
import Span from '../../../components/Span'
import useForm from '../../../Hooks/useForm'

import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo() {
  const history = useHistory()
  const [categorias, setCategorias] = useState([])
  const [videoErrors, setVideoErrors] = useState({})

  const categoryTitles = categorias.map(({ titulo }) => titulo)

  const { handleChange, valores, handleBlur, videoValidate } = useForm({
    valoresIniciais: {
      titulo: 'Arctic Monkeys',
      url: 'https://www.youtube.com/watch?v=bpOSxM0rNPM',
      categoria: 'Indie Music',
    },
  })

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer)
    })
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          setVideoErrors(videoValidate(valores))
          const categoriaEscolhida = categorias.find((categoria) => {
            categoria.titulo === valores.categoria;
          });

          videosRepository
            .create({
              titulo: valores.titulo,
              url: valores.url,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              <p>Cadastrado com sucesso!</p>;
              history.push('/')
            })
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={valores.titulo}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={valores.url}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {videoErrors.url && <Span>{videoErrors.url}</Span>}

        <FormField
          label="Categoria"
          name="categoria"
          value={valores.categoria}
          onBlur={handleBlur}
          suggestions={categoryTitles}
          onChange={handleChange}
        />
        {videoErrors.categoria && <Span>{videoErrors.categoria}</Span>} 

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
