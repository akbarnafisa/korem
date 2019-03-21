import {
  ContentService
} from '~/utils/api.service'
import extractImage from '~/utils/extractImage'

export const state = () => ({
  gallery: null,
})

export const mutations = {
  SET_GALLERY (state, payload) {
    state.gallery = payload
  }
}

export const actions = {
  FETCH_DATA ({ commit }) {
    return new Promise((resolve, reject) => {
      ContentService.get('Galeri')
        .then((res) => {
          const data = res.data.data.map((v) => {
            const images = {
              gambar: v.gambar,
            };
            const image = extractImage(images, 'single')
            return {
              ...v,
              ...image
            }
          })
          commit('SET_GALLERY', data)
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })

    })
  }
}