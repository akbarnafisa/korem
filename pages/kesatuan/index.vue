<template>
  <div class="articles container">
    <section class="section-header">
      <h3 class="section-title fw-700 h2-sm ">
        Kesatuan
      </h3>
			<div class="row flex-wrap">
				<div class="col-12 col-md-6" v-for="(data, idx) in kesatuan" :key="idx">
					<nuxt-link
						class="card__item col-12 col-md-6"
						:to="`/kesatuan/${data.link}`"
					>
						<div class="card__image-wrapper">
							<div
								:style="`backgroundImage: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.6)), url('${data.gambar}')`"
								class="card__image"
							>
								<div>
									<h3 class="card__title fw-700">{{ data.judul }}</h3>
								</div>
							</div>
							<!-- <p class="card__desc">{{article.desc.slice(0,100)}}...</p> -->
						</div>
					</nuxt-link>
				</div>
			</div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData ({ store }) {
    if (store.state.kesatuan.list === null) {
      await store.dispatch("kesatuan/FETCH_KESATUAN");
    }
  },
  computed: {
    kesatuan () {
			console.log(this.$store.state.kesatuan.list)
      return this.$store.state.kesatuan.list
    }
  }
}
</script>

<style lang="scss" scoped>
.card__image-wrapper {
  overflow: hidden;
}
.card__image {
	padding: 32px;
  display: flex;
  align-items: flex-end;
  height: 260px;
  width: 100%;
  background-size: cover;
  background-position: center center;
  transition: transform 0.3s ease;
}
.card__title {
	text-align: center;
  color: #f9f9ff;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: .15px;
  // overflow: hidden;
  // max-height: 40px;
}
</style>