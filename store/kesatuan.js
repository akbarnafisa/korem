import Vue from 'vue';
import {
  ContentService,
} from '~/utils/api.service'
import extractImage from '~/utils/extractImage'
import striptags from 'striptags'


export const state = () => ({
  list: null,
  keyList: {},
  page: null,

});

export const mutations = {
  SET_LISTS (state, payload) {
    state.list = payload;
  },
  SET_PAGE (state, payload) {
    state.page = payload;
  },
  SET_KEY_LIST (state, payload) {
    state.keyList = payload;
  },
  SET_NAV (state, payload) {
    state.nav = payload;
  }
};

export const actions = {
  FETCH_KESATUAN ({ commit }) {
    return new Promise((resolve, reject) => {
      ContentService.get('kesatuan', {
        _sort: '-createdAt'
      })
        .then(res => {
          let kv = {}
          const data = res.data.data.map((v, index) => {
            const images = {
              gambar: v.gambar,
            };
            const nextData = Array(3).fill(1)
              .map((v, i) => (i + index + 1) % res.data.data.length);
            const image = extractImage(images, 'single');
            const strip = striptags(v.kontent.slice(0, 200))
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date(v.createdAt).toLocaleDateString('id-ID', options)
            const link = v.judul.toLowerCase()
              .replace(/[^\w ]+/g, '')
              .replace(/ +/g, '-');
            kv = {
              ...kv,
              [link]: index
            };
            return {
              ...v,
              ...image,
              link,
              nextData,
              date,
              desc: strip,
            }
          })
          commit('SET_KEY_LIST', kv)
          commit('SET_LISTS', data)
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

};

export const getters = {
  GET_KESATUAN (state) {
    return (link) => {
      const key = state.keyList[link]
      return state.list[key]
    }
  }
};