<template>
  <div>
    <the-nav />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheNav from '@/components/Nav/TheNav'
import TheFooter from '@/components/Nav/TheFooter'
export default {
  components: {
    TheNav,
    TheFooter
  },
  created () {
    if (this.$store.state.profil.list === null) {
      this.$store.dispatch("profil/FETCH_DATA");
    }
    if (this.$store.state.kesatuan.list === null) {
      this.$store.dispatch("kesatuan/FETCH_DATA");
    }
  }
}
</script>
