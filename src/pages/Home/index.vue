<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommed />
    <Rank />
    <Like />
    <Floor v-for="carousel in floorLists" :key="carousel.id" :list="carousel" />

    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/components/ListContainer";
import TodayRecommed from "@/components/TodayRecommed";
import Rank from "@/components/Rank";
import Like from "@/components/Like";
import Floor from "@/components/Floor";
import Brand from "@/components/Brand";
import { mapState } from "vuex";

export default {
  name: "",
  components: {
    ListContainer,
    TodayRecommed,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    //this.$store.dispatch("getUserInfo");
  },
  computed: {
    ...mapState({
      floorLists: (state) => {
        return state.home.floorLists;
      },
    }),
  },
};
</script>

<style scoped lang="less">
</style>