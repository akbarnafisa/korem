<template>
  <div>
    <div class="nav-mobile" :class="{active: mobileNavActive}">
      <div class="container">
        <div class="row pt-7 mt-7">
          <div class="col-12 pt-7 mt-7">
            <div class="">
              <nuxt-link exact :to="'/'">
                Home
              </nuxt-link>
              <no-ssr>
                <a @click="toggleProfileDropdown" class="mobile-dropdown-parent">
                  Profil
                  <div class="pl-2" v-if="mobileNavProfileDropdown">
                    <nuxt-link
                      class="mobile-dropdown"
                      v-for="data in nav"
                      :key="data.link"
                      :to="`/profil/${data.link}`"
                    >
                      {{data.name}}
                    </nuxt-link>
                  </div>
                </a>
              </no-ssr>
            </div>
            <div class="">
              <nuxt-link :to="'/berita'">
                Berita
              </nuxt-link>
            </div>
            <div class="">
              <nuxt-link :to="'/galeri'">
                Galeri
              </nuxt-link>
            </div>
            <div class="">
              <nuxt-link :to="'/kesatuan'">
                Kesatuan
              </nuxt-link>
            </div>
            <div class="">
              <a href="http://rekrutmen-tni.mil.id" target="_blank">
                Masuk TNI
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <div class="nav-desktop">
        <div class="container">
          <nuxt-link
            to='/'
            class="nav-left logo"
          >
            <img
              src="https://gateway.serph.network/ipfs/QmdGL3uVQZ3RmenLkm3S9JdEyHsj6bWqFHh1PPwcamJiu4"
              alt="logo"
            >
          </nuxt-link>
          <div class="nav-right">
            <div class="d-flex d-md-none" @click="toggleMobileNav">
              <svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
            </div>
            <div class="d-none d-md-flex">
              <nuxt-link exact :to="'/'">
                Home
              </nuxt-link>
              <no-ssr>
                <a id="profile" @click="toggleProfileDropdown" class="dropdown-parent">
                  Profil
                  <div class="desktop-dropdown-content" v-if="mobileNavProfileDropdown">
                    <nuxt-link
                      class="desktop-dropdown"
                      v-for="data in nav"
                      :key="data.link"
                      :to="`/profil/${data.link}`"
                    >
                      {{data.name}}
                    </nuxt-link>
                  </div>
                </a>
              </no-ssr>
              <nuxt-link :to="'/berita'">
                Berita
              </nuxt-link>
              <nuxt-link :to="'/galeri'">
                Galeri
              </nuxt-link>
              <nuxt-link :to="'/kesatuan'">
                Kesatuan
              </nuxt-link>
              <a href="http://rekrutmen-tni.mil.id" target="_blank">
                Masuk TNI
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileNavActive: false,
      mobileNavProfileDropdown: false,
      bodyEl: null
    }
  },
  mounted() {
    const self = this
    this.bodyEl = document.querySelector('body')
    this.bodyEl.addEventListener('click', (e) => {
      if(e.target.id !== 'profile') {
        self.mobileNavProfileDropdown = false
      }
    })
  },
  watch:{
    $route (to, from){
      this.mobileNavActive = false
    }
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavActive = !this.mobileNavActive
    },
    toggleProfileDropdown() {
      this.mobileNavProfileDropdown = !this.mobileNavProfileDropdown
    }
  },
  computed: {
    nav () {
      return this.$store.state.profil.nav || []
    }
  }
}
</script>

<style lang="scss" scoped>
a.mobile-dropdown-parent:active,
a.mobile-dropdown-parent:hover {
  color: #f9f9f9 !important;
}
.nav-mobile {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translate3d(-100%, 0, 0);
  background-color: #1A1A1A;
  transition: all .5s;
}
.nav-mobile.active {
  transform: translate3d(0, 0, 0);
  transition: all .5s;
}
.nav-mobile a {
  display: block;
  font-weight: 600;
  font-size: 32px;
  margin: 16px 0px;
  color: #f9f9f9;
}
a.mobile-dropdown {
  font-size: 16px;
}
.desktop-dropdown {
  width: 120px;
  text-align: center;
  position: relative;  
}
.desktop-dropdown-content {
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.desktop-dropdown-content a{
  display: block !important;
  margin: 0 !important;
  padding: 8px !important;
  color: #1A1A1A;
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
    min-width: 150px;
  }
}

.nav-mobile-menu {
  position: relative;
  z-index: 10;
}
nav {
  z-index: 5;
  width: 100%;
  max-width: 1200px;
  height: 60px;
  // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1A1A1A;

  .nav-desktop {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
.nav-left {
  position: absolute;
  top: 0;
  img {
    width: 60px;
  }
}

.logo {
  margin: 0;
  padding: 8px;
  background: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.nav-right {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

a,
.nav-items {
  cursor: pointer;
  color: #f9f9f9;
  font-weight: 700;
  margin-left: 32px;
  padding: 0 8px;
  position: relative;

  &.nuxt-link-active,
  &:hover, {
    color: $primary50;
  }
}
</style>


