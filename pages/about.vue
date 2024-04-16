<template>
  <div id="about">
    <v-img
      :src="require('@/assets/index/MainBanner_1.png')"
      class="banner d-flex justify-center align-center"
    >
      <h1 class="text-center text-h2 my-12 py-12 white--text">About Us</h1>
    </v-img>
    <v-container>
      <v-row class="mt-12">
        <v-col class="pa-12" cols="12" sm="6" md="7">
          <div class="text-h3">Our Missions</div>
          <p
            class="text-h5 grey--text text--darken-1 mt-5 pr-12"
            style="line-height: 1.7"
          >
            We believe that good lighting has the power to accentuate the
            ambience, quality and serenity of spaces. Our excellent
            craftsmanship displayed in our comprehensive range of lighting
            products seeks to bring harmony to your house and office spaces.
            Modern electricals strive to offer the perfect products and designs
            that reflect your individuality and elegance.
          </p>
        </v-col>
        <v-col>
          <v-img
            :aspect-ratio="1"
            :src="require('@/assets/index/about1.jpg')"
            style="
              box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
              border-radius: 10px;
            "
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="mt-12">
        <v-col>
          <v-img
            :aspect-ratio="1"
            :src="require('@/assets/index/about2.jpg')"
            style="
              box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
              border-radius: 10px;
            "
          ></v-img>
        </v-col>
        <v-col class="pa-12" cols="12" sm="6" md="7">
          <div class="text-h3">Our Vision</div>
          <p
            class="text-h5 grey--text text--darken-1 mt-5 pr-12"
            style="line-height: 1.7"
          >
            The legacy of modern electricals is built on its founding values of
            Quality, Uniqueness, Affordability and Service. We are a
            customer-oriented, value-driven firm that has carved out an identity
            on these four pillars. Our exclusive designs speak for themselves as
            they embody a panache that sets us apart in the market.
          </p>
          <!-- <v-img
            :src="require('@/assets/about3.webp')"
            height="200"
            style="
              box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
              border-radius: 10px;
            "
            contain
          ></v-img> -->
        </v-col>
      </v-row>
      <!-- <div class="mt-12 pt-12">
        <div class="text-uppercase red--text text-center">
          Don’t hear from us only.
        </div>
        <div class="text-uppercase red--text text-center mt-1">
          Listen to our customers too.
        </div>
      </div> -->
      <!-- <div class="mt-12">
        <div class="text-center">
          <v-avatar size="70">
            <v-img :src="require('@/assets/tes1.webp')"></v-img>
          </v-avatar>
          <div class="text-subtitle-2 mt-3">Mark Collins</div>
          <div class="font-bold">Arizona</div>
          <div class="mt-12 mx-auto" style="width: 50vw">
            <p>
              “To be honest, this is one of the best interior store. They have a
              lot of things for you to explore. The price is reasonable and
              customer service is dedicated.”
            </p>
          </div>
        </div>
      </div> -->
      <!-- <div class="mt-12 pa-12 mx-12">
        <div
          class="
            d-flex
            justify-sm-space-between
            flex-wrap
            justify-center
            text-center
          "
        >
          <div>
            <div class="text-h2 red--text mt-12 mx-12">236</div>
            <div class="grey--text">Design Awards</div>
          </div>
          <div>
            <div class="text-h2 red--text mt-12 mx-12">5204</div>
            <div class="grey--text">Satisfied Customers</div>
          </div>
          <div>
            <div class="text-h2 red--text mt-12 mx-12">143</div>
            <div class="grey--text">On Media</div>
          </div>
          <div>
            <div class="text-h2 red--text mt-12 mx-12">1592</div>
            <div class="grey--text">Happy Feedbacks</div>
          </div>
        </div>
      </div> -->
    </v-container>
    <!-- <div class="grey lighten-4 pb-12">
      <v-container>
        <div class="text-h4 text-center text-capitalize pt-12">
          Meet Our Team
        </div>
        <div class="d-flex mt-12 flex-wrap justify-center">
          <v-card v-for="i in 4" :key="i" class="mx-4 my-4" flat>
            <v-img :src="require(`@/assets/team${i}.webp`)"></v-img>
            <v-card-text>
              <div class="text-center font-bold">Jennifer Barret</div>
              <div class="grey--text text-center">CEO / Co-founder</div>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </div> -->
  </div>
</template>

<script>
export default {
  head: {
    title: 'About',
  },
  data() {
    return {
      sort: 'Sort by Price',
    }
  },
  computed: {
    base_url() {
      return this.$store.state.base_url
    },
    products() {
      return this.$store.state.products
    },
  },
}
</script>
