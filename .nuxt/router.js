import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _85178c8a = () => interopDefault(import('../pages/berita/index.vue' /* webpackChunkName: "pages/berita/index" */))
const _50635d9e = () => interopDefault(import('../pages/galeri/index.vue' /* webpackChunkName: "pages/galeri/index" */))
const _3adaeaac = () => interopDefault(import('../pages/kesatuan/index.vue' /* webpackChunkName: "pages/kesatuan/index" */))
const _4fd4bcce = () => interopDefault(import('../pages/masuk-tni/index.vue' /* webpackChunkName: "pages/masuk-tni/index" */))
const _201a43e8 = () => interopDefault(import('../pages/berita/_post.vue' /* webpackChunkName: "pages/berita/_post" */))
const _453894d7 = () => interopDefault(import('../pages/kesatuan/_post.vue' /* webpackChunkName: "pages/kesatuan/_post" */))
const _3abbabc6 = () => interopDefault(import('../pages/masuk-tni/_post.vue' /* webpackChunkName: "pages/masuk-tni/_post" */))
const _b3702386 = () => interopDefault(import('../pages/profil/_post.vue' /* webpackChunkName: "pages/profil/_post" */))
const _cdef525e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/berita",
      component: _85178c8a,
      name: "berita"
    }, {
      path: "/galeri",
      component: _50635d9e,
      name: "galeri"
    }, {
      path: "/kesatuan",
      component: _3adaeaac,
      name: "kesatuan"
    }, {
      path: "/masuk-tni",
      component: _4fd4bcce,
      name: "masuk-tni"
    }, {
      path: "/berita/:post",
      component: _201a43e8,
      name: "berita-post"
    }, {
      path: "/kesatuan/:post",
      component: _453894d7,
      name: "kesatuan-post"
    }, {
      path: "/masuk-tni/:post?",
      component: _3abbabc6,
      name: "masuk-tni-post"
    }, {
      path: "/profil/:post?",
      component: _b3702386,
      name: "profil-post"
    }, {
      path: "/",
      component: _cdef525e,
      name: "index"
    }],

    fallback: false
  })
}
