<template>
  <div class="container mw-4 section-header">
    <h4 class="text-center text-title h3-sm h2-md">{{article.judul}}</h4>
    <p class="text-center pt-1 text-grey text-pre-wrap">{{article.date}}</p>
    <div class="py-4 text-center">
      <video
        v-if="article.gambar && article.gambar.includes('video/mp4')"
        autoplay
        muted
        loop
        controls
        class="article-video"
      >
        <source
          :src="article.gambar"
          type="video/mp4"
        >
      </video>
      <img
        v-else
        class="article-image"
        :src="article.gambar"
      />
    </div>
    <div
      class="article-content content text-semiblack"
      v-html="article.kontent"
    >
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ store, route }) {
    if (store.state.profil.list === null) {
      await store.dispatch("profil/FETCH_DATA")
    }
    return {
      article: store.getters["profil/GET_DATA"](route.params.post)
    };
  },
}
</script>

<style lang="scss" scoped>
.article-content * {
  word-break: break-word;
  word-wrap: break-word;
  letter-spacing: -0.3px;
}
.article-content a {
  color: $primary50;
}
.article-content a:hover {
  opacity: 0.8;
}
.article-content li {
  margin-top: 0.25rem;
}

.article-video {
  width: 100%;
}

.text-title {
  font-weight: 700;
}

.text-grey {
  color: $black50;
  font-weight: 700;
}
</style>