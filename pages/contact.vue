<template>
  <div id="store">
    <v-img
      :src="require('@/assets/index/MainBanner_1.png')"
      class="banner d-flex justify-center align-center"
    >
      <h1 class="text-center text-h2 my-12 py-12 white--text">Contact Us</h1>
    </v-img>
    <v-container class="py-12 px-12">
      <v-row>
        <v-col cols="12" md="4">
          <div class="d-flex">
            <v-img
              :src="require('@/assets/phone.png')"
              max-width="30"
              max-height="30"
              contain
              class="mr-6"
            ></v-img>
            <div>
              <div class="grey--text">Phone Number</div>
              <div class="text-h5">+91 94977 50701</div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="d-flex">
            <v-img
              :src="require('@/assets/add.png')"
              max-width="30"
              max-height="30"
              contain
              class="mr-6"
            ></v-img>
            <div>
              <div class="grey--text">Address</div>
              <div class="text-h5">MODERN ELECTRICALS KUTTANELLUR</div>
              <div class="grey--text">
                Service Rd, Eravimangalam, Thrissur, Kerala 680014
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="d-flex">
            <v-img
              :src="require('@/assets/email.png')"
              max-width="30"
              max-height="30"
              contain
              class="mr-6"
            ></v-img>
            <div>
              <div class="grey--text">Email</div>
              <div class="text-h5">modernelectricalsthrissur@gmail.com</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="my-12">
      <iframe
        id="map"
        height="450"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBdwFiHBtYOWTo8bvpCUW1NfVN69p15S_Q
    &q=MODERN ELECTRICALS KUTTANELLUR, Service Rd, Eravimangalam, Thrissur, Kerala 680014"
      >
      </iframe>
      <iframe
        id="map"
        class="mt-8"
        height="450"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBdwFiHBtYOWTo8bvpCUW1NfVN69p15S_Q
    &q=Modern Electricals, Chettuphuzha Building, Kuruppam Rd, opposite Gardu Hotel, Thrissur, Kerala 680001"
      >
      </iframe>
    </div>
    <v-container style="width: 70vw">
      <div class="my-12 text-center">
        <div class="text-h5">Leave Your Message</div>
        <div class="grey--text mt-3">
          Feel free to contact with us by using the form below
        </div>
        <v-form class="mt-12">
          <div class="d-flex">
            <v-text-field
              v-model="form.Name"
              label="Name"
              name="name"
              solo
              class="mr-2 rounded-lg"
            ></v-text-field>
            <v-text-field
              v-model="form.Email"
              label="Email"
              name="email"
              solo
              class="ml-2 rounded-lg"
            ></v-text-field>
          </div>
          <v-text-field
            v-model="form.Subject"
            label="Subject"
            name="Subject"
            solo
            class="rounded-lg"
          ></v-text-field>
          <v-textarea
            v-model="form.Message"
            label="Message"
            name="Message"
            solo
            class="rounded-lg"
          ></v-textarea>
          <div class="mt-4">
            <v-btn rounded color="red" dark depressed @click="sendMessage"
              >Send Us</v-btn
            >
          </div>
        </v-form>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: 'Sort by Price',
      form: {},
    }
  },
  head: {
    title: 'Contact Us',
  },
  computed: {
    base_url() {
      return this.$store.state.base_url
    },
    products() {
      return this.$store.state.products
    },
  },
  methods: {
    async sendMessage() {
      try {
        await this.$store.dispatch('sendContactMessage', this.form)
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

<style lang="scss">
iframe#map {
  border: 0;
  width: 70vw;
  margin: auto;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: block;
}
</style>
