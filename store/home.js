import {
  ContentService
} from '~/utils/api.service'
import extractImage from '~/utils/extractImage'

export const state = () => ({
  beranda: null,
})

export const mutations = {
  SET_BERANDA (state, payload) {
    state.beranda = payload
  }
}

export const actions = {
  FETCH_PAGE ({ commit }) {
    return new Promise((resolve, reject) => {
      ContentService.get('beranda')
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
          })[0]
          commit('SET_BERANDA', data)
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })

    })
  }
}