/* eslint-disable linebreak-style */
import config from '../config'

const URL_CATEGORIES = `${config.URL}/categorias`

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async res => {
    if (res.ok) {
      const resposta = await res.json()
      return resposta
    }

    throw new Error('Não foi possível pegar os dados')
  })
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async res => {
    if (res.ok) {
      const resposta = await res.json()
      return resposta
    }

    throw new Error('Não foi possível pegar os dados')
  })
}

export default {
  getAllWithVideos,
  getAll,
}
