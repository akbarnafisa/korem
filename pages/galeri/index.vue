<template>
  <div class="articles container">
    <section class="section-header">
      <h3 class="section-title fw-700 h2-sm ">
        Galeri
      </h3>
      <gallery-list :images="images" />
    </section>
  </div>
</template>

<script>
import GalleryList from '@/components/Sections/Gallery/GalleryList'
export default {
  async asyncData ({ store }) {
    if (store.state.gallery.gallery === null) {
      await store.dispatch("gallery/FETCH_DATA");
    }
  },
  components: {
    GalleryList
  },
  computed: {
    images () {
      return this.$store.state.gallery.gallery
    },
  }
}
</script>

<style scoped>
</style>