<template>
  <div class="row">
    <nuxt-link
      aria-label="go"
      v-for="(article, index) in articles"
      :key="index"
      class="card__item col-md-6 col-lg-4 my-5 my-md-7"
      :to="`/berita/${article.link}`"
    >
      <div class="card__image-wrapper">
        <div
          :style="`backgroundImage: url('${article.gambar}')`"
          class="card__image"
        />
      </div>
      <p class="card__title mt-4 fw-500">{{ article.judul }}</p>
      <h6 class="card__date fw-700">{{article.date}}</h6>
      <p class="card__desc">{{article.desc.slice(0,100)}}...</p>
      <!-- <nuxt-link :to="article.link" class="mt-6">
        <BaseButton text="View More" type="small"/>
      </nuxt-link>-->
    </nuxt-link>
    <div
      v-if="articlesPage"
      class="flex-center w-100 mt-5"
    >
      <nuxt-link
        class="btn btn--medium primary"
        to="/artikel"
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
    articlesPage () {
      const routeName = this.$route.name
      return routeName.includes("artikel-id") || routeName.includes('index');
    }
  }
};
</script>

<style lang="scss"scoped>
.card__item {
  &:hover .card__image {
    transform: scale(1.05);
  }
  .card__image-wrapper {
    overflow: hidden;
    .card__image {
      height: 260px;
      width: 100%;
      background-size: cover;
      background-position: center center;
      transition: transform 0.3s ease;
    }
  }
  .card__title {
    color: $primary60;
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: 700;
    line-height: 1.35;
    @include media(sm) {
      font-size: 20px;
    }
  }
}
</style>