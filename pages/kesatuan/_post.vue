<template>
  <div class="container mw-4 section-header">
    <h4 class="text-center text-title h3-sm h2-md text-center">{{article.judul}}</h4>
    <p class="text-center pt-1 text-grey text-pre-wrap text-center">{{article.date}}</p>
    <div class="text-center py-4">
      <img
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
    if (store.state.news.list === null) {
      await store.dispatch("kesatuan/FETCH_KESATUAN");
    }
    return {
      article: store.getters["kesatuan/GET_KESATUAN"](route.params.post)
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

.text-title {
  font-weight: 700;
}

.text-grey {
  color: $black50;
  font-weight: 700;
}
</style>