/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import useForm from '../../../Hooks/useForm';
import FormField from '../../../components/FormField';

import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const form = useForm({
    valoresIniciais: {
      titulo: 'Arctic Monkeys',
      url: 'https://www.youtube.com/watch?v=bpOSxM0rNPM',
      categoria: 'Indie Music',
    },
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === form.valores.categoria;
        });

        videosRepository.create({
          titulo: form.titulo,
          url: form.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            <p>Cadastrado com sucesso!</p>;
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={form.valores.titulo}
          onBlur={form.handleBlur}
          onChange={form.handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={form.valores.url}
          onBlur={form.handleBlur}
          onChange={form.handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={form.valores.categoria}
          onBlur={form.handleBlur}
          suggestions={categoryTitles}
          onChange={form.handleChange}
        />

        <br />
        <button type="submit">
          Cadastrar
        </button>
      </form>

      <br />
      <br />

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
