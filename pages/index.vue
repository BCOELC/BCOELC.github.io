<template>
  <section>
    <hero />
    <student-organizations />
    <events />

  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import Hero from '~/components/Home/Hero';
import StudentOrganizations from '~/components/Home/StudentOrganizations';
import Events from '~/components/Home/Events';

export default {
  components: {
    AppLogo,
    Hero,
    StudentOrganizations,
    Events
  }
};
</script>

<style scoped>
#home2 {
  background-image: url(~/assets/img/bg-img/welcome-bg.png);
}
</style>
