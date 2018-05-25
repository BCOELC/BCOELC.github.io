<template>
  <section class="mosh-clients-area section_padding_100 clearfix">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <div class="section-heading text-center">
                      <h2>Events</h2>
                      <p>From hackathons to STEM education</p>
                  </div>
              </div>

              <div class="col-12">
                  <div class="clients-logo-area d-sm-flex align-items-center justify-content-between">
                    <a v-for="event in events" :key="event.name" :href="event.website" target="_blank">
                      <img :src="`/img/events/${event.image}`" :alt="event.name" />
                    </a>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  computed: {
    events() {
      return this.$store.state.events;
    }
  }
};
</script>

<style>
</style>
