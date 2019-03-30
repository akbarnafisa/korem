<template>
  <div
    :style="`backgroundImage: linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url('http://cdn2.tstatic.net/kaltim/foto/bank/images/sertijab-di-korem_20171223_144832.jpg')`"
    class="header section-3 flex-center text-center px-4"
  >
    <div class="mw-3 white">
      <h4 class="white text-shadow h3-sm mb-0 mw-3">KOMANDO RESOR MILITER Korem 064/Maulana Yusuf</h4>
      <!-- <p class="text-shadow mt-0">
        <i>{{data.desc}}</i>
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    windowWidth () {
      return this.$store.getters.windowWidth;
    }
  }
};
</script>

<style scoped>
.section-3 {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 350px;
}
@media (max-width: 576px) {
  .section-3 {
    margin-top: 60px;
  }
}
</style>