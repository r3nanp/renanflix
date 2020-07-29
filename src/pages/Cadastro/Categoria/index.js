import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

import { Button } from './styles';

function Categoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);
  
  function setValue(chave, valor){
    setValores({
    ...valores,
    [chave]: valor,
    })  
  }

  function handleChange(infos){
    setValue(
      infos.target.getAttribute('name'),
      infos.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form onSubmit={function handleSubmit(infos){
        infos.preventDefault();
        setCategorias([
          ...categorias,
          valores
        ]);

        setValores(valoresIniciais);
      }}>

      <FormField
        label="Nome da categoria"
        type="text"
        name="nome"
        value={valores.nome}
        onChange={handleChange}
      />

      <FormField 
        label="Descrição"
        type="textarea"
        name="descricao"
        value={valores.nome}
        onChange={handleChange}
      />

      <FormField
        label="Cor"
        type="color"
        name="cor"
        value={valores.nome}
        onChange={handleChange}
      />

        <Button >
          Cadastrar
        </Button>
      </form>
      
      <ul>
          {categorias.map((categoria, indice) =>{
            return(
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
      </ul>

      <Link to="/">
        Home
      </Link>
    </PageDefault>
  );
}

export default Categoria;