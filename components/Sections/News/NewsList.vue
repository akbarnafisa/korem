<template>
  <div class="row">
    <div class="col-12 col-md-6">
      <nuxt-link
        class="card__item"
        :to="`/berita/${latestArticle.link}`"
      >
        <div class="card__image-wrapper">
          <div
            :style="`backgroundImage: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.6)), url('${latestArticle.gambar}')`"
            class="card__image--main"
          >
            <div>
              <h5 class="card__date fw-600">{{latestArticle.date}}</h5>
              <p class="card__title--main fw-700">{{ latestArticle.judul }}</p>
              <p class="card__desc">{{latestArticle.desc.slice(0,100)}}...</p>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="col-12 col-md-6">
      <div class="row">
        <nuxt-link
          aria-label="go"
          v-for="(article, index) in otherArticles"
          :key="index"
          class="card__item col-12 col-md-6"
          :to="`/berita/${article.link}`"
        >
          <div class="card__image-wrapper">
            <div
              :style="`backgroundImage: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.6)), url('${article.gambar}')`"
              class="card__image"
            >
              <div>
                <h6 class="card__date fw-600">{{article.date}}</h6>
                <h5 class="card__title fw-700">{{ article.judul }}</h5>
              </div>
            </div>
            <!-- <p class="card__desc">{{article.desc.slice(0,100)}}...</p> -->
          </div>
        </nuxt-link>
      </div>
    </div>
    <div
      v-if="articlesPage"
      class="flex-center w-100 mt-5"
    >
      <nuxt-link
        class="btn btn--medium primary"
        to="/berita"
      >Seluruh Berita</nuxt-link>
    </div>
  </div>
</template>

<script>
// var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(event.toLocaleDateString('id-ID', options));
export default {
  props: {
    articles: { type: Array, required: true }
  },

  computed: {
    latestArticle() {
      return this.articles[0]
    },
    otherArticles() {
      return this.articles.slice(1, 5)
    },
    articlesPage () {
      const routeName = this.$route.name
      return routeName.includes("artikel-id") || routeName.includes('index');
    }
  }
};
</script>

<style lang="scss"scoped>
.card__item {
  display: block;
  padding-top: 20px;
  transition: all .5s;
}
.card__image-wrapper {
  overflow: hidden;
}
.card__image {
  padding: 16px;
  display: flex;
  align-items: flex-end;
  height: 260px;
  width: 100%;
  background-size: cover;
  background-position: center center;
  transition: transform 0.3s ease;
}
.card__image--main {
  padding: 16px;
  display: flex;
  align-items: flex-end;
  height: 540px;
  width: 100%;
  background-size: cover;
  background-position: center center;
  transition: transform 0.3s ease;
}
.card__title {
  color: #f9f9ff;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: .15px;
  overflow: hidden;
  max-height: 40px;
}
.card__title--main {
  color: #f9f9ff;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: .15px;
  overflow: hidden;
  max-height: 65px;
}
.card__date {
  color: #f9f9f9;
}
.card__desc {
  color:#f9f9f9;
}
</style>