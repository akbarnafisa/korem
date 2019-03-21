<template>
  <div class="gallery row my-5 my-md-7">
    <div
      v-for="(data, index) in images"
      :key="index"
      class=" col-6 col-md-4 mb-5"
    >
      <div
        class="image"
        :style="`backgroundImage:  url('${data.gambar}')`"
      >
      </div>
    </div>
    <div
      v-if="showButton"
      class="flex-center w-100 mt-5"
    >
      <nuxt-link
        class="btn btn--medium primary"
        to="/galeri"
      >Seluruh Gambar</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      required: true,
      type: Array,
    },
  },
  computed: {
    showButton () {
      const routeName = this.$route.name
      return routeName.includes("artikel-id") || routeName.includes('index');
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  .image {
    background-size: cover;
    height: 30vw;
    max-height: 275px;
  }
}
</style>