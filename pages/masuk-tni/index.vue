<template>
  <div class="articles container">
    <section class="section-header">
      <h3 class="section-title fw-700 h2-sm ">
        Pendaftaran TNI
      </h3>
      <nuxt-link
        v-for="(data) in articles"
        :key="data._id"
        class="list grid grid-list"
        :to="`masuk-tni/${data.link}`"
      >
        <div class="row no-gutters pt-5 mx-sm-4 mx-md-0">
          <div class="order-1 col-md-4 pr-md-3">
            <div class="list__title text-black text-title">{{data.judul}}</div>
            <h6 class="list__date fw-700">{{data.date}}</h6>
          </div>
          <div class=" order-3 order-md-2 col-md-4 pt-3  pt-md-0">
            <div class=" ">
              <p class="p-small">{{data.desc.slice(0,150)}}...</p>
            </div>
          </div>
          <div class="card__image-wrapper  order-2 order-md-3 col-md-4 pl-md-3 pt-4 pt-md-0">
            <div
              :style="`backgroundImage: url('${data.gambar}')`"
              class="card__image"
            />
          </div>
        </div>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData ({ store }) {
    if (store.state.pendaftaran.list === null) {
      await store.dispatch("pendaftaran/FETCH_DATA");
    }
  },
  computed: {
    articles () {
      return this.$store.state.pendaftaran.list
    }
  }
}
</script>

<style lang="scss" scoped>
.articles {
  .list {
    .list__title {
      color: $black80;
      font-size: 18px;
      margin-bottom: 8px;
      font-weight: 700;
      line-height: 1.35;
      transition: 0.3s opacity ease-in-out;
    }

    .list__date {
      color: $black60;
      font-size: 13px;
    }

    .card__image-wrapper {
      overflow: hidden;
      transition: 0.3s opacity ease-in-out;

      .card__image {
        height: 200px;
        width: 100%;
        background-size: cover;
        background-position: center center;
        transition: transform 0.3s ease;
      }
    }

    &:hover {
      .list__title {
        color: $primary50;
      }
      .card__image-wrapper {
        opacity: 0.6;
      }
    }
  }
}
</style>