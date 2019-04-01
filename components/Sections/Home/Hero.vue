<template>
  <div class="hero">
    <video
      v-if="data.gambar.includes('video/mp4')"
      autoplay
      muted
      loop
      playsinline
      class="hero-image hero-video"
    >
      <source
        :src="data.gambar"
        type="video/mp4"
      >
      <source
        :src="toWebm"
        type="video/webm"
      >
      <source
        :src="toOgv"
        type="video/ogv"
      >
    </video>
    <div
      v-else
      class="hero-image"
      :style="`backgroundImage: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('${data.gambar}')`"
    />
    <div class="hero-text-wrapper">
      <div class="text-title">{{data.judul}}</div>
      <div class="text-desc">
        {{data.deskripsi}}
      </div>
      <nuxt-link to="/profil/sejarah">
        <button class="btn primary btn--medium large">
          Tentang Kami
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  computed: {
    toWebm() {
      const splittedUrl = this.data.gambar.split('/')
      const formatIdx = splittedUrl.findIndex((val) => val === 'mp4')
      splittedUrl[formatIdx] = 'webm'
      return splittedUrl.join('/')
    },

    toOgv() {
      const splittedUrl = this.data.gambar.split('/')
      const formatIdx = splittedUrl.findIndex((val) => val === 'mp4')
      splittedUrl[formatIdx] = 'ogv'
      return splittedUrl.join('/')
    }
  },

}
</script>

<style lang="scss" scoped>
.hero {
  width: 100vw;
  height: 90vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .hero-video {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  }

  .hero-image {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    background-position: center;
    background-size: cover;
  }

  .hero-text-wrapper {
    position: relative;
    z-index: 3;
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    max-width: $tablet;

    .text-title {
      font-size: 56px;
      color: white;
      font-weight: 700;
      text-shadow: 2px 2px rgba(0, 0, 0, 0.5) !important;
    }

    .text-desc {
      font-size: 24px;
      margin-bottom: 32px;
    }
  }
}
</style>