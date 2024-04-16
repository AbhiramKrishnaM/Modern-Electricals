<template>
  <div id="home">
    <v-carousel
      hide-delimiter-background
      vertical-delimiters
      height="clamp(55vh, 1080px)"
      cycle
    >
      <v-carousel-item v-for="(data, index) in bannerImages" :key="index">
        <v-img
          :src="require(`@/assets/index/${data.banner}`)"
          alt="jumbotron"
          class="banner d-flex align-center"
          position="center bottom"
        >
          <div class="my-12 py-12 white--text mx-auto call-to-action">
            {{ data.title }}
            <span style="display: block" class="sub mt-5">{{
              data.subTitle
            }}</span>
            <v-btn
              dark
              elevation="10"
              color="red rounded-xl pa-5 "
              class="cta"
              to="/about"
              >Read More</v-btn
            >
          </div>
        </v-img>
      </v-carousel-item>
    </v-carousel>

    <div class="container">
      <section id="welcome" class="pt-12 pb-6">
        <h3>Beauty you can afford</h3>
        <h2>Welcome to Modern Electricals</h2>
      </section>
      <section id="w-grid">
        <div class="item">
          <img src="@/assets/index/light1.svg" alt="who" />
          <h4>Unique and Customized Designs to Suit your taste</h4>
          <p>
            Modern electricals offer a wide array of indoor and outdoor lights
            which establish a unique identity to your spaces that are hard to
            ignore and impossible to resist. Each piece is meticulously crafted
            to make a statement and accentuate the beauty of its surroundings
            providing warmth and joy. Our lights will complement and reflect
            your personality and attitude.
          </p>
        </div>
        <div class="item">
          <img src="@/assets/index/light3.svg" alt="who" />
          <h4>Excellent Customer service</h4>
          <p>
            Modern Electricals have been built on the trust and respect of our
            many clients over the last 15 years. Our high-quality professional
            approach makes your journey of choosing the right lighting enjoyable
            and easy. We cater to your every need, from ideation and selection
            to their installation. We strive to deliver beyond your
            expectations.
          </p>
        </div>
        <div class="item">
          <img src="@/assets/index/light2.svg" alt="who" />
          <h4>Best pricing</h4>
          <p>
            Our range of products caters to every budget without compromising on
            style or quality. We offer the best quality products at an
            affordable price. Our products are sure to leave you spoilt for
            choices!
          </p>
        </div>
      </section>
      <section id="popular-grid" class="pb-12">
        <h2>Popular Products</h2>
        <div class="grid">
          <div v-for="(item, i) in featuredProducts" :key="i" class="item">
            <img :src="base_url + item.images[0].url" alt="product photo" />
            <div class="text-h6">{{ item.name }}</div>
          </div>
        </div>
      </section>
    </div>
    <div class="grey-container">
      <section id="category-grid">
        <div class="grid">
          <div
            v-for="(item, i) in categories"
            :key="i"
            class="item"
            :style="`background-image: url(${base_url + item.pic}); height: ${
              i % 4 === 0 || (i + 1) % 4 === 0 ? '400px' : '200px'
            }; background-position: center;`"
          >
            <h4>{{ item.text }}</h4>
            <v-btn text to="/store" dark>
              <v-icon>mdi-chevron-right</v-icon>
              Shop Now
            </v-btn>
          </div>
        </div>
        <!-- <div class="grid">
          <div
            v-for="(item, i) in categories[1]"
            :key="i"
            class="item"
            :style="`background-image: url(${item.pic}); height: ${
              i % 4 === 0 || (i + 1) % 4 === 0 ? '400px' : '200px'
            };`"
          >
            <h4>{{ item.text }}</h4>
            <v-btn text to="/products" dark>
              <v-icon>mdi-chevron-right</v-icon>
              Shop Now
            </v-btn>
          </div>
        </div> -->
      </section>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home',
  },
  data() {
    return {
      bannerImages: [
        {
          id: 0,
          title: 'Glimmering Wonders',
          subTitle: 'Lighting that reflects your style',
          banner: 'MainBanner_1.png',
        },
        {
          id: 1,
          title: 'Redefining elegance',
          subTitle: 'Lights that make heads turn',
          banner: 'MainBanner_2.png',
        },
        {
          id: 2,
          title: 'Glimmering Wonders',
          subTitle: 'Lights that make heads turn',
          banner: 'MainBanner_3.png',
        },
      ],
    }
  },
  computed: {
    base_url() {
      return this.$store.state.base_url
    },
    products() {
      return this.$store.state.products
    },
    featuredProducts() {
      return this.products.slice(0, 20)
    },
    categories() {
      return [...new Set(this.products.map((p) => p.category))].map((c) => ({
        text: c.split('_').join(' '),
        pic: this.products.find((p) => p.category === c).images[0].url,
      }))
    },
  },
}
</script>

<style lang="scss">
#home {
  .banner {
    .call-to-action {
      width: 60vw;
      font-size: 70px;
      font-weight: 900;
      .sub {
        font-size: 40px;
        font-weight: normal;
      }
    }
  }
  .container {
    box-sizing: border-box;
    padding: 24px;
    width: 100%;
    img {
      width: 100%;
    }
    #welcome {
      padding-top: 36px;
      text-align: center;
      h3 {
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 600;
      }
    }
    #w-grid {
      padding-top: 36px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 24px;
      text-align: center;
      .item {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
        background: linear-gradient(180deg, #fff, rgb(255, 250, 250));
        border-radius: 15px;
        padding: 80px 40px;
        margin: 0 min(40px, 0.1vw);
        img {
          width: min(200px, 50vw);
          height: 200px;
          margin-bottom: 10px;
          object-position: top;
        }
        h4 {
          min-height: 80px;
          margin-top: 0px;
          color: red;
          font-size: 1.3rem;
          font-weight: black;
        }
        p {
          text-align: justify;
        }
      }
    }
    #popular-grid {
      padding-top: 64px;
      text-align: center;
      h3 {
        color: rgba(0, 0, 0, 0.5);
        text-transform: uppercase;
      }
      .grid {
        margin: auto;
        max-width: 960px;
        padding-top: 36px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        .item {
          img {
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            width: 180px;
            height: 180px;
          }
        }
      }
    }
    #blog {
      padding-top: 64px;
      text-align: center;
      h3 {
        color: rgba(0, 0, 0, 0.5);
        text-transform: uppercase;
      }
      .grid {
        max-width: 900px;
        margin: 48px auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 24px;
        .item {
          h6 {
            text-transform: uppercase;
            color: rgba(0, 0, 0, 0.5);
          }
          a {
            color: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
  .grey-container {
    box-sizing: border-box;
    padding: 24px;
    margin: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    #category-grid {
      padding-top: 36px;
      .grid {
        margin: auto;
        max-width: 1000px;
        column-width: 450px;
        column-gap: 24px;
        .item {
          background-size: cover;
          width: 100%;
          margin: 12px;
          display: inline-block;
          padding: 24px;
          box-sizing: border-box;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          h4 {
            font-size: 2rem;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
            margin-top: 0;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}
@media (max-width: 960px) {
  #home {
    .banner {
      .call-to-action {
        text-align: center;
        font-size: 40px;
        font-weight: 900;
        .sub {
          font-size: 20px;
          font-weight: normal;
        }
      }
    }
    .container {
      #w-grid {
        grid-template-columns: 1fr;
        padding: 32px;
        h4 {
          padding-top: 16px;
          padding-bottom: 12px;
        }
      }
      #popular-grid {
        .grid {
          grid-template-columns: 1fr;
        }
      }
      #blog {
        .grid {
          grid-template-columns: 1fr;
        }
      }
    }
    .grey-container {
      #category-grid {
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          column-width: unset;
          column-gap: unset;
          .item {
            height: 200px !important;
          }
        }
      }
    }
  }
}
</style>
