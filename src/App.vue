<template>
  <div id="app">
    <Header />
    <router-view></router-view>

    <Footer v-show="foot" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Header, Footer },
  mounted() {
    //console.log(this);
    this.$store.dispatch("categoryList");
    this.$store.dispatch("bannerList");
    this.$store.dispatch("floorList");
  },
  computed: {
    foot() {
      return this.$route.meta.isFoot;
    },
  },
};
</script>

<style>
</style>
