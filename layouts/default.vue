<template>
  <v-app>
    <v-app-bar
      dense
      app
      extension-height="80"
      absolute
      flat
      color="transparent"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        color="white"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
      <div
        v-if="
          !(
            $vuetify.breakpoint.mdAndUp ||
            ($vuetify.breakpoint.smAndDown && !search)
          )
        "
      >
        <v-text-field
          v-model="searchQuery"
          placeholder="Search by Product Name"
          name="search"
          hide-details="true"
          dark
        ></v-text-field>
      </div>
      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.smAndDown" right>
        <v-btn icon small @click="clickSearch">
          <v-icon color="white">mdi-magnify</v-icon>
        </v-btn>
        <v-badge
          v-model="showBadge"
          :content="wishlist.length"
          overlap
          color="green"
        >
          <v-btn icon to="/wishlist" small>
            <v-icon color="white">mdi-shopping</v-icon>
          </v-btn>
        </v-badge>
      </div>
      <!-- start -->
      <template v-if="$vuetify.breakpoint.mdAndUp" #extension>
        <div style="width: 100vw" class="d-flex align-center justify-center">
          <img
            style="width: 200px; height: 200px"
            src="@/assets/index/logo.svg"
            alt="logo"
          />
          <v-spacer></v-spacer>
          <div
            style="width: 800px"
            class="d-flex align-center mx-auto grey lighten-2 rounded-xl"
          >
            <nav class="mx-4">
              <v-btn
                v-for="(nav, i) in navs"
                :key="i"
                text
                :to="nav.to"
                class="mx-3"
                >{{ nav.title }}</v-btn
              >
            </nav>
            <v-spacer></v-spacer>
            <div v-if="search">
              <v-text-field
                v-model="searchQuery"
                placeholder="Search by Product Name"
                name="search"
                hide-details="true"
              ></v-text-field>
            </div>
            <v-spacer v-if="search"></v-spacer>
            <div>
              <v-btn icon @click="clickSearch">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-badge
                v-model="showBadge"
                :content="wishlist.length"
                overlap
                color="green"
              >
                <v-btn icon to="/wishlist">
                  <v-icon>mdi-shopping</v-icon>
                </v-btn>
              </v-badge>
            </div>
          </div>
        </div>
      </template>
      <!-- end -->
    </v-app-bar>

    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      app
    >
      <div class="pa-4">
        <div class="text-h4">Menu</div>
      </div>
      <v-list>
        <v-list-item v-for="(nav, i) in navs" :key="i" :to="nav.to">
          <v-list-item-content>
            <v-list-item-title>{{ nav.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main app class="pt-0">
      <Nuxt></Nuxt>
    </v-main>

    <div id="footer" class="mt-12">
      <v-container>
        <v-row>
          <v-col class="pr-6" cols="12" md="3">
            <img src="@/assets/index/logo.svg" alt="logo" />
            <p class="grey--text mt-3">
              With an experience of 15 years built on providing unique, tasteful
              and customized interior and outdoor lighting, Modern electricals
              pride on adding elegant dimensions to your spaces and life. Our
              lights turn dim corners and desolate paths into warmly lit and
              positive spaces. We are a one-stop-shop for every lighting product
              needed to make your surroundings look pleasing, elegant and
              aesthetic.
            </p>
            <div class="social-links">
              <v-btn
                icon
                target="_blank"
                href="https://www.facebook.com/Modern-Electricals-100856504596394/"
                ><v-icon color="red">mdi-facebook</v-icon></v-btn
              >
              <v-btn
                icon
                target="_blank"
                href="https://instagram.com/modernelectricals_"
                ><v-icon color="red">mdi-instagram</v-icon></v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" md="3" class="d-flex flex-column align-start">
            <v-btn text disabled class="font-weight-bold">Shop</v-btn>
            <v-btn text link to="/store">Products</v-btn>
            <v-btn text to="/wishlist">Wishlist</v-btn>
          </v-col>
          <v-col cols="12" md="3" class="d-flex flex-column align-start">
            <v-btn text disabled class="font-weight-bold">Help</v-btn>
            <v-btn text to="/contact">Contact</v-btn>
            <v-btn text to="/about">About</v-btn>
            <v-btn text>FAQs</v-btn>
            <v-btn text>Terms and Conditions</v-btn>
            <v-btn text>Privacy Policy</v-btn>
          </v-col>
          <v-col cols="12" md="3">
            <v-btn text disabled class="font-weight-bold">Contact Us</v-btn>
            <!-- <v-text-field
              v-model="nlEmail"
              label="Email"
              name="Email"
              rounded
              outlined
              class="grey lighten-4"
              hide-details
              dense
            >
              <template #append>
                <v-btn
                  icon
                  style="position: relative; top: -5px"
                  @click="sendNewsletterRequest"
                  ><v-icon color="red">mdi-send</v-icon></v-btn
                >
              </template>
            </v-text-field> -->
            <p class="mt-6">
              We are always at your service! For more details about the products
              and the pricing please reach out to
            </p>
            <p>+91 94977 50701</p>
            <p class="mb-1">MODERN ELECTRICALS KUTTANELLUR</p>
            <span class="text-caption font-weight-bold grey--text"
              >Service Rd, Eravimangalam, Thrissur, Kerala 680014</span
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-footer>
      <div
        style="width: 100%"
        class="d-flex flex-wrap align-center justify-center"
      >
        Copyright © 2021 | Modern Electrical

        <div class="d-flex flex-wrap justify-center">
          <v-btn text class="d-block">Privacy Policy</v-btn>
          <v-btn text class="d-block">Terms of Services</v-btn>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      nlEmail: '',
      drawer: false,
      search: false,
      searchQuery: '',
      navs: [
        {
          title: 'Home',
          to: '/',
        },
        {
          title: 'Store',
          to: '/store',
        },
        {
          title: 'About',
          to: '/about',
        },
        {
          title: 'Contact',
          to: '/contact',
        },
      ],
      showBadge: false,
    }
  },
  computed: {
    wishlist() {
      return this.$store.state.wishlist
    },
  },
  watch: {
    wishlist() {
      this.badgeRender()
    },
    searchQuery() {
      this.$store.commit('setSQ', this.searchQuery)
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
    this.badgeRender()
  },
  methods: {
    badgeRender() {
      this.showBadge = this.wishlist.length > 0
    },
    async sendNewsletterRequest() {
      try {
        await this.$store.dispatch('sendNewsletterRequest', {
          email: this.nlEmail,
        })
        alert('Thank you for subscribing.')
      } catch (err) {
        alert(err)
      }
    },
    clickSearch() {
      if (!this.search) this.$router.push('/store')
      this.search = !this.search
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap');

#app {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}
</style>
