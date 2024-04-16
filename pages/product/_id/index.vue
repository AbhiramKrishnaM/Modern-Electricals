<template>
  <div id="product">
    <v-container v-if="product">
      <v-row>
        <v-col cols="12" sm="6">
          <v-img :src="base_url + product.images[img_index].url"></v-img>
          <div class="d-flex">
            <v-img
              v-for="(image, i) in product.images"
              :key="i"
              :src="base_url + image.url"
              max-width="100"
              min-width="40"
              :aspect-ratio="1"
              class="ma-3 thumb"
              @click="img_index = i"
            ></v-img>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-h4 red--text mt-3">{{ product.name }}</div>
          <p class="mt-3">
            {{ product.description }}
          </p>
          <div
            class="text-subtitle-1 grey--text text-darken-2"
            style="text-transform: capitalize"
          >
            Category: {{ product.category.split('_').join(' ') }}
          </div>
          <v-btn
            rounded
            class="mt-5"
            dark
            :color="inWishlist ? 'grey' : 'red'"
            @click="toggleWishlist"
            ><v-icon left>mdi-shopping</v-icon>
            {{ inWishlist ? 'Remove from' : 'Add to' }} Wishlist</v-btn
          >
          <div class="text-h5 pt-5 pb-2">Product Information</div>
          <table>
            <tbody>
              <tr v-for="(item, i) in information" :key="i">
                <td class="font-weight-bold py-2 pr-4">{{ item.title }}</td>
                <td>{{ item.value }}</td>
              </tr>
            </tbody>
          </table>
        </v-col>
      </v-row>
      <div class="mt-12">
        <div class="text-h4 text-center grey--text">Related Products</div>
        <div class="d-flex justify-center my-12 text-center flex-wrap">
          <div
            v-for="(p, i) in related"
            :key="i"
            class="mx-6"
            @click="$router.push(`/product/${p.id}`)"
          >
            <v-img
              :src="base_url + p.images[0].url"
              width="180"
              height="180"
              class="mx-auto mb-3"
            ></v-img>
            <div class="text-h6">{{ p.name }}</div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: (this.product ?? {}).name,
    }
  },
  data() {
    return {
      img_index: 0,
    }
  },
  computed: {
    base_url() {
      return this.$store.state.base_url
    },
    product() {
      return this.$store.state.products.find((product) => {
        return product.id === Number(this.$route.params.id)
      })
    },
    information() {
      const { Material, Finish, Wattage, Dimension } = this.product
      return [
        { title: 'Material', value: Material },
        { title: 'Finish', value: Finish },
        { title: 'Wattage', value: Wattage },
        { title: 'Dimension', value: Dimension },
      ]
    },
    related() {
      return this.$store.state.products.filter((product) => {
        return product.category === this.product.category
      })
    },
    inWishlist() {
      return !!this.$store.state.wishlist.find(
        (product) => product.id === this.product.id
      )
    },
  },
  methods: {
    toggleWishlist() {
      if (this.inWishlist) {
        this.removeFromWishlist()
      } else {
        this.addToWishlist()
      }
    },
    addToWishlist() {
      this.$store.commit('addToWishlist', this.product)
    },
    removeFromWishlist() {
      this.$store.commit('removeFromWishlist', this.product)
    },
  },
}
</script>

<style lang="scss">
#product {
  padding-top: 200px;
}

.thumb {
  cursor: pointer;
}
.thumb:hover {
  border: solid 4px green;
}
@media (max-width: 600px) {
  #product {
    border-top: solid 50px rgba($color: #f85b5b, $alpha: 0.5);
    padding-top: 10px;
  }
}
</style>
