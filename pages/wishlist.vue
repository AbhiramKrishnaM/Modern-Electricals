<template>
  <div id="wishlist">
    <v-dialog v-model="showDialog">
      <v-card>
        <v-card-title> Request Quote </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="form.name"
            label="Name"
            name="Name"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            label="Email"
            name="Email"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="form.phone"
            label="Phone"
            name="Phone"
            outlined
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="sendQuote">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container>
      <div class="text-h3 text-center mb-12">Wishlist</div>
      <v-card
        v-for="(product, i) in wishlist"
        :key="i"
        outlined
        class="my-6 mx-auto"
        width="600"
      >
        <div class="d-flex flex-wrap flex-md-nowrap">
          <v-img
            :src="base_url + product.images[0].url"
            height="250"
            width="250"
          ></v-img>
          <v-card-text>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ product.description }}</v-card-subtitle>
            <v-btn
              outlined
              class="mt-1 ml-3"
              color="grey"
              small
              @click="removeFromWishlist(product)"
              ><v-icon left>mdi-delete</v-icon>Remove from Wishlist</v-btn
            >
          </v-card-text>
        </div>
      </v-card>
      <v-btn
        color="red"
        rounded
        class="mx-auto d-block mt-6"
        dark
        @click="showDialog = true"
        >Get Quote</v-btn
      >
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      showDialog: false,
    }
  },
  computed: {
    base_url() {
      return this.$store.state.base_url
    },
    wishlist() {
      return this.$store.state.wishlist
    },
  },
  methods: {
    removeFromWishlist(product) {
      this.$store.commit('removeFromWishlist', product)
    },
    async sendQuote() {
      try {
        await this.$store.dispatch(
          'sendQuoteRequest',
          Object.assign({}, this.form, {
            products: this.wishlist.map((p) => p.id),
          })
        )
        alert(
          'Thank you for contacting us. We will get in touch with you shortly'
        )
      } catch (err) {
        alert(err)
      }
    },
  },
}
</script>

<style>
#wishlist {
  padding-top: 200px;
}
</style>
