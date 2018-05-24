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
          <no-ssr>
            <org-slider />
          </no-ssr>
            <nuxt-link to="/organizations" class="btn mosh-btn">Learn More about the Organizations</nuxt-link>
        </div>
    </div>
    </div>
</section>
</template>

<script>
import OrgSlider from './StudentOrganizationsSlider';
import NoSSR from 'vue-no-ssr';

export default {
  components: {
    OrgSlider,
    'no-ssr': NoSSR
  },
  computed: {}
};
</script>

<style>
</style>
