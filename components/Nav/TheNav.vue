<template>
  <nav>
    <div class="nav-desktop">
      <nuxt-link
        to='/'
        class="nav-left  logo "
      >
        <img
          src="https://korem101antasari.mil.id/media/2018/03/logo-korem.png"
          alt="logo"
        >
      </nuxt-link>
      <div class="nav-right  ">
        <no-ssr>
          <div class="nav-items">
            Profil
            <div class="dropdown">
              <nuxt-link
                v-for="data in profilNav"
                :key="data.link"
                :to="`/profil/${data.link}`"
              >
                {{data.name}}
              </nuxt-link>
            </div>
          </div>
        </no-ssr>
        <nuxt-link :to="'/berita'">
          Berita
        </nuxt-link>
        <nuxt-link :to="'/galeri'">
          Galeri
        </nuxt-link>
        <no-ssr>
          <div class="nav-items">
            Kesatuan
            <div class="dropdown">
              <nuxt-link
                v-for="data in profilKesatuan"
                :key="data.link"
                :to="`/kesatuan/${data.link}`"
              >
                {{data.name}}
              </nuxt-link>
            </div>
          </div>
        </no-ssr>
        <nuxt-link :to="'/masuk-tni'">
          Masuk TNI
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    profilNav () {
      return this.$store.state.profil.nav || []
    },
    profilKesatuan () {
      return this.$store.state.kesatuan.nav || []
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  max-width: 1229px;
  padding: 0 64px;
  height: 80px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  z-index: 9999;

  .nav-desktop {
    display: flex;
    align-items: center;
    width: 100%;

    .nav-left {
      img {
        width: 85px;
      }
    }

    .nav-right {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      a,
      .nav-items {
        color: $black60;
        font-weight: 700;
        margin-left: 32px;
        padding: 30px 16px;
        position: relative;

        &.nuxt-link-active {
          color: $primary50;
          &:after {
            @include media(md) {
              content: "";
            }
            height: 2px;
            width: 100%;
            background-color: $primary50;
            position: absolute;
            bottom: 0px;
            left: 0;
          }
        }
        &:hover {
          color: $primary50;

          .dropdown {
            display: flex;
          }
        }
      }
    }
    .dropdown {
      display: none;
      flex-direction: column;
      background: white;
      padding: 8px;
      position: absolute;
      left: 0;
      bottom: -128px;
      z-index: 2;

      a {
        padding: 8px 16px;
        margin-left: 0;
        min-width: 200px;
      }
    }
  }
}
</style>


