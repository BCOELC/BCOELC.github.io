<template>
  <section class="mosh-service-area clearfix">
    <div class="container">
      <div class="row">
        <div class="col-12">
            <div class="section-heading text-center">
                <h2>Student Organizations</h2>
                <p>Over 15 member organizations</p>
            </div>
        </div>
        <div class="col-12 text-center">
            <org-slider />
            <nuxt-link to="/organizations" class="btn mosh-btn">Learn More about the Organizations</nuxt-link>
        </div>
    </div>
    </div>
</section>
</template>

<script>
import OrgSlider from './StudentOrganizationsSlider';

export default {
  components: {
    OrgSlider
  },
  computed: {}
};
</script>

<style>
</style>
