<template>
  <carousel
    :per-page="3"
    :autoplay="true"
    :autoplayHoverPause="true"
    :navigationEnabled="true"
    :paginationEnabled="false"
    :scrollPerPage="false"
    :loop="true"
  >
    <slide class="slide" v-for="org in orgs" :key="org.name">
        <img :src="`/img/organizations/${org.image}`" />
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  data: function() {
    return {};
  },
  computed: {
    orgs() {
      return this.$store.state.orgs;
    }
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>
.slide {
  padding: 30px 25px;
  display: flex;
  justify-content: center;
}
.slide img {
  align-self: center;
}
</style>
