<template>
  <div>
    <Hero :data="hero" />
    <div class="container">
      <section class="section">
        <h3 class="section-title fw-700 h2-sm">
          Berita Terbaru
        </h3>
        <news-list :articles="articles" />
      </section>

      <section class="section">
        <h3 class="section-title fw-700 h2-sm">
          Galeri
        </h3>
        <gallery-list :images="images" />
      </section>
    </div>
  </div>
</template>


<script>
import Hero from '@/components/Sections/Home/Hero'
import NewsList from '@/components/Sections/News/NewsList'
import GalleryList from '@/components/Sections/Gallery/GalleryList'

export default {
  components: {
    Hero,
    NewsList,
    GalleryList
  },
  async asyncData ({ store }) {
    if (store.state.home.beranda === null) {
      await store.dispatch("home/FETCH_PAGE");
    }

    if (store.state.news.list === null) {
      await store.dispatch("news/FETCH_NEWS");
    }

    if (store.state.gallery.gallery === null) {
      await store.dispatch("gallery/FETCH_DATA");
    }
  },
  computed: {
    hero () {
      return this.$store.state.home.beranda
    },
    images () {
      return this.$store.state.gallery.gallery
    },
    articles () {
      return this.$store.state.news.list
    }
  }
}
</script>

<style scoped>
</style>