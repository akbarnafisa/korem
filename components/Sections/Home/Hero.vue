<template>
  <div class="hero">
    <div
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

  .hero-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
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
    }

    .text-desc {
      font-size: 24px;
      margin-bottom: 32px;
    }
  }
}
</style>