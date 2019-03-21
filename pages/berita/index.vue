<template>
  <div class="articles container">
    <section class="section-header">
      <h3 class="section-title fw-700 h2-sm ">
        Berita Terbaru
      </h3>
      <nuxt-link
        v-for="(data, index) in articles"
        :key="index + link"
        class="list grid grid-list"
        :to="'data.link'"
      >
        <div class="row no-gutters pt-5 mx-sm-4 mx-md-0">
          <div class="order-1 col-md-4 pr-md-3">
            <div class="list__title text-black text-title">{{data.judul}}</div>
            <h6 class="list__date fw-700">{{data.date}}</h6>
          </div>
          <div class=" order-3 order-md-2 col-md-4 pt-3  pt-md-0">
            <div class=" ">
              <p class="p-small">{{data.konten.slice(0,150)}}...</p>
            </div>
          </div>
          <div class="card__image-wrapper  order-2 order-md-3 col-md-4 pl-md-3 pt-4 pt-md-0">
            <div
              :style="`backgroundImage: url('${data.thumbnail}')`"
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
  data () {
    return {
      articles: [{
        date: 'Minggu, 17 Maret 2019',
        link: 'wew1',
        thumbnail: 'https://korem101antasari.mil.id/media/2019/02/WhatsApp-Image-2019-02-12-at-14.48.58-770x430.jpeg',
        judul: 'Pembukaan apel Dansat Tersebar Kodam Vl/Mulawarman TA 2019',
        konten: 'Banjarmasin. Guna mengantisipasi kerugian personel maupun materiil yang disebabkan Laka Lalin, Korem 101/Antasari bersama Den Pom Banjarmasin melaksanakan pemeriksaan kendaraan dinas baik roda dua maupun roda empat, bertempat di lapangan apel Makorem 101/Antasari. Kasi Intel Korem 101/Antasari yang memimpin pelaksanaan pemeriksaan kendaraan tersebut menyampaikan bahwa’ Pemeriksaan kendaraan anggota Korem secara rutin dilaksanakan setiap triwulan, pemeriksaan',

      },
      {
        date: 'Minggu, 17 Maret 2019',
        link: 'wew2',
        thumbnail: 'https://korem101antasari.mil.id/media/2019/02/WhatsApp-Image-2019-02-12-at-14.48.58-770x430.jpeg',
        judul: 'Pembukaan apel Dansat Tersebar Kodam Vl/Mulawarman TA 2019',
        konten: 'Banjarmasin. Guna mengantisipasi kerugian personel maupun materiil yang disebabkan Laka Lalin, Korem 101/Antasari bersama Den Pom Banjarmasin melaksanakan pemeriksaan kendaraan dinas baik roda dua maupun roda empat, bertempat di lapangan apel Makorem 101/Antasari. Kasi Intel Korem 101/Antasari yang memimpin pelaksanaan pemeriksaan kendaraan tersebut menyampaikan bahwa’ Pemeriksaan kendaraan anggota Korem secara rutin dilaksanakan setiap triwulan, pemeriksaan',

      },
      {
        date: 'Minggu, 17 Maret 2019',
        link: 'wew3',
        thumbnail: 'https://korem101antasari.mil.id/media/2019/02/WhatsApp-Image-2019-02-12-at-14.48.58-770x430.jpeg',
        judul: 'Pembukaan apel Dansat Tersebar Kodam Vl/Mulawarman TA 2019',
        konten: 'Banjarmasin. Guna mengantisipasi kerugian personel maupun materiil yang disebabkan Laka Lalin, Korem 101/Antasari bersama Den Pom Banjarmasin melaksanakan pemeriksaan kendaraan dinas baik roda dua maupun roda empat, bertempat di lapangan apel Makorem 101/Antasari. Kasi Intel Korem 101/Antasari yang memimpin pelaksanaan pemeriksaan kendaraan tersebut menyampaikan bahwa’ Pemeriksaan kendaraan anggota Korem secara rutin dilaksanakan setiap triwulan, pemeriksaan',

      },
      {
        date: 'Minggu, 17 Maret 2019',
        link: 'wew4',
        thumbnail: 'https://korem101antasari.mil.id/media/2019/02/WhatsApp-Image-2019-02-12-at-14.48.58-770x430.jpeg',
        judul: 'Pembukaan apel Dansat Tersebar Kodam Vl/Mulawarman TA 2019',
        konten: 'Banjarmasin. Guna mengantisipasi kerugian personel maupun materiil yang disebabkan Laka Lalin, Korem 101/Antasari bersama Den Pom Banjarmasin melaksanakan pemeriksaan kendaraan dinas baik roda dua maupun roda empat, bertempat di lapangan apel Makorem 101/Antasari. Kasi Intel Korem 101/Antasari yang memimpin pelaksanaan pemeriksaan kendaraan tersebut menyampaikan bahwa’ Pemeriksaan kendaraan anggota Korem secara rutin dilaksanakan setiap triwulan, pemeriksaan',

      },
      {
        date: 'Minggu, 17 Maret 2019',
        link: 'wew5',
        thumbnail: 'https://korem101antasari.mil.id/media/2019/02/WhatsApp-Image-2019-02-12-at-14.48.58-770x430.jpeg',
        judul: 'Pembukaan apel Dansat Tersebar Kodam Vl/Mulawarman TA 2019',
        konten: 'Banjarmasin. Guna mengantisipasi kerugian personel maupun materiil yang disebabkan Laka Lalin, Korem 101/Antasari bersama Den Pom Banjarmasin melaksanakan pemeriksaan kendaraan dinas baik roda dua maupun roda empat, bertempat di lapangan apel Makorem 101/Antasari. Kasi Intel Korem 101/Antasari yang memimpin pelaksanaan pemeriksaan kendaraan tersebut menyampaikan bahwa’ Pemeriksaan kendaraan anggota Korem secara rutin dilaksanakan setiap triwulan, pemeriksaan',

      },
      {
        date: 'Minggu, 17 Maret 2019',
        link: 'wew5',
        thumbnail: 'https://korem101antasari.mil.id/media/2019/02/WhatsApp-Image-2019-02-12-at-14.48.58-770x430.jpeg',
        judul: 'Pembukaan apel Dansat Tersebar Kodam Vl/Mulawarman TA 2019',
        konten: 'Banjarmasin. Guna mengantisipasi kerugian personel maupun materiil yang disebabkan Laka Lalin, Korem 101/Antasari bersama Den Pom Banjarmasin melaksanakan pemeriksaan kendaraan dinas baik roda dua maupun roda empat, bertempat di lapangan apel Makorem 101/Antasari. Kasi Intel Korem 101/Antasari yang memimpin pelaksanaan pemeriksaan kendaraan tersebut menyampaikan bahwa’ Pemeriksaan kendaraan anggota Korem secara rutin dilaksanakan setiap triwulan, pemeriksaan',

      }
      ]

    }
  },
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