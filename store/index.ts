import { ActionTree, MutationTree } from 'vuex'
import {
  getProducts,
  sendContactMessage,
  sendNewsletterRequest,
  sendQuoteRequest,
} from '~/api/cms'

export const state = () => ({
  base_url: 'https://api.modernelectricals.org',
  loading: false,
  products: [] as Array<Record<string, any>>,
  wishlist: [] as Array<Record<string, any>>,
  searchQuery: '',
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setLoading: (state, isLoading) => (state.loading = isLoading),
  setProducts: (state, products) => (state.products = products),
  addToWishlist: (state, product) => state.wishlist.push(product),
  removeFromWishlist: (state, product) =>
    (state.wishlist = state.wishlist.filter((p) => p.id !== product.id)),
  setSQ: (state, sq) => (state.searchQuery = sq),
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchProducts(ctx) {
    const products = await getProducts()
    ctx.commit('setProducts', products)
  },
  sendContactMessage(_, data) {
    return sendContactMessage(data)
  },
  sendQuoteRequest(_, data) {
    return sendQuoteRequest(data)
  },
  sendNewsletterRequest(_, data) {
    return sendNewsletterRequest(data)
  },
}
