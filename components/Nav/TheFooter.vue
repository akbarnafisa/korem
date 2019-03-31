<template>
  <footer class="footer">
    <!-- <div class="footer-top">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-md-6 flex-center h5 text-center mb-4 mb-md-0">Kunjungi Juga Halaman Penjual Resmi Kami</div>
          <div class="affiliates col-md-6 flex-items justify-content-around">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="footer-bottom py-5 py-md-7">
      <div class="container py-5 py-md-7 white">
        <div class="row">
          <div class="col-md-2 col-12 mb-6">
            <nuxt-link
              aria-label="go"
              style="display:block;text-align:center;width:100%"
              to="/"
            >
              <img class="logo" src="https://gateway.serph.network/ipfs/QmYdcHvc4CgYbinUC8zDBhCS3gaXoVpDxe2xx8XNTnEmUP" />
            </nuxt-link>
          </div>
          <div class="col-md-2 col-6 mb-6 text-center text-md-left">
            <h5>Navigasi</h5>
            <div>
              <nuxt-link
                aria-label="go"
                to="/"
              >Home</nuxt-link>
            </div>
            <div>
              <nuxt-link
                aria-label="go"
                to="/berita"
              >Berita</nuxt-link>
            </div>
            <div>
              <nuxt-link
                aria-label="go"
                to="/galeri"
              >Galeri</nuxt-link>
            </div>
            <div>
              <nuxt-link
                aria-label="go"
                to="/kesatuan"
              >Kesatuan</nuxt-link>
            </div>
            <div>
              <a
                aria-label="go"
                href="http://rekrutmen-tni.mil.id" target="_blank"
              >Masuk TNI</a>
            </div>
          </div>
          <div class="col-md-2 col-6 mb-6 text-center text-md-left">
            <h5>Profil</h5>
            <div
              v-for="data in nav"
              :key="data.link"
            >
              <nuxt-link
                :to="`/profil/${data.link}`"
              >
                {{data.name}}
              </nuxt-link>
            </div>
          </div>
          <div class="col-md-6 col-12 mb-6 px-lg-5 text-center text-md-right">
            <h5>Korem 064 Maulana Yusuf</h5>
            <p>Jl. Maulana Yusuf No. 9 Serang Banten</p>
            <!-- <no-ssr>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    name="dataframe"
                    title="dataframe"
                  >
                    <script
                      async
                      defer
                      type="text/javascript"
                    >
                    window.frames["dataframe"].window.location.replace(
                      "https://maps.google.com/maps?q=korem%20064%20maulana%20yusuf&t=&z=19&ie=UTF8&iwloc=&output=embed"
                    );
                    </script>
                  </iframe>
                </div>
                <style>
                .mapouter {
                  text-align: right;
                  height: 100%;
                  width: 100%;
                }

                .gmap_canvas {
                  overflow: hidden;
                  background: none !important;
                  height: 100%;
                  width: 100%;
                }
                </style>
              </div>
            </no-ssr> -->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    nav () {
      return this.$store.state.profil.nav || []
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  .footer-top {
    background-color: $primary10;
    padding: 36px 0px;
    box-shadow: 0px -8px 20px rgba(0, 0, 0, 0.025);
    .affiliates {
      div {
        width: 150px;
        height: 75px;
        background-color: $white;
      }
    }
    @include media(md) {
      padding: 0;
      height: 100px;
    }
  }
  .footer-bottom {
    background-color: $black80;
    .logo {
      width: 100%;
      max-width: 120px;
      margin-bottom: 16px;
    }
    a {
      color: $lightgrey;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: .15px;
      display: inline-block;
      margin-bottom: 8px;
      width: 65px;
      &:hover {
        text-decoration: underline;
      }
    }
    h5 {
      color: $white;
      font-weight: 600;
      letter-spacing: .25px;
    }
    p {
      line-height: 1.75;
      font-size: 14px;
      color: $lightgrey;
    }
  }
}
.rate__wrapper a {
  display: block;
  width: initial;
  margin-bottom: 0;
  line-height: 1;
  text-decoration: underline;
}
</style>