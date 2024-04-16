<template>
  <div id="store">
    <v-img
      :src="require('@/assets/index/MainBanner_3.png')"
      class="banner d-flex justify-center align-center"
    >
      <h1 class="text-center text-h2 my-12 py-12 white--text">Store</h1>
    </v-img>
    <v-container>
      <div
        class="
          d-flex
          flex-wrap
          justify-center justify-lg-start
          align-center
          mt-12
        "
      >
        <div class="text-h5 pb-6">
          <span class="red--text">{{ products.length }} Products</span>
          Available
        </div>
        <v-select
          v-model="sort"
          outlined
          style="flex-grow: 0"
          :items="['Sort Products', 'Sort By Published Date', 'Sort By Name']"
          class="ml-sm-12"
          dense
        ></v-select>
        <v-select
          v-model="filter"
          outlined
          style="flex-grow: 0"
          :items="categories"
          class="ml-3"
          dense
        >
          <template #item="{ item }">
            <span style="text-transform: capitalize">{{
              item.split('_').join(' ')
            }}</span>
          </template>
          <template #selection="{ item }">
            <span style="text-transform: capitalize">{{
              item.split('_').join(' ')
            }}</span>
          </template>
        </v-select>
      </div>
      <div class="grid my-12">
        <div
          v-for="(product, i) in displayed"
          :key="i"
          @click="$router.push(`/product/${product.id}`)"
        >
          <v-img
            :src="base_url + product.images[0].url"
            width="160"
            height="160"
            class="mx-auto mb-3"
          ></v-img>
          <div class="text-h6">{{ product.name }}</div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import Fuse from 'fuse.js'

export default {
  head: {
    title: 'Store',
  },
  data() {
    return {
      sort: 'Sort Products',
      filter: 'Filter by Category',
    }
  },
  computed: {
    sq() {
      return this.$store.state.searchQuery
    },
    base_url() {
      return this.$store.state.base_url
    },
    products() {
      return this.$store.state.products
    },
    displayed() {
      let result = [...this.products]
      if (this.sq && this.sq !== '') {
        const options = {
          keys: ['name'],
        }
        const fuse = new Fuse(result, options)
        result = fuse.search(this.sq).map((p) => p.item)
      }
      if (this.filter !== 'Filter by Category') {
        result = result.filter((p) => p.category === this.filter)
      }
      if (this.sort !== 'Sort Products') {
        if (this.sort === 'Sort By Name') {
          result = result.sort((a, b) => a.name[0] > b.name[0])
        }
        if (this.sort === 'Sort By Published Date') {
          result = result.sort(
            (a, b) =>
              new Date(a.published_at).getTime() >
              new Date(b.published_at).getTime()
          )
        }
      }
      return result
    },
    categories() {
      return [
        'Filter by Category',
        ...new Set(this.products.map((p) => p.category)),
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  text-align: center;
  > div {
    .v-image {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
    padding: 12px min(24px, 1vw);
    transition: 0.6s;
  }
  > div:hover {
    background: #efefef;
    cursor: pointer;
  }
}
@media (max-width: 1264px) {
  .grid {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}
@media (max-width: 960px) {
  .grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}
@media (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
</style>
