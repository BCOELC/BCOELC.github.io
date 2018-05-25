<template>
  <section>
    <div class="mosh-breadcumb-area" style="background-image: url(/img/header.png);">
      <div class="container h-100">
          <div class="row h-100 align-items-center">
              <div class="col-12">
                  <div class="bradcumbContent">
                      <h2>Student Organizations</h2>
                  </div>
              </div>
          </div>
      </div>
    </div>

    <section class="mosh--services-area section_padding_100">
        <div class="container">
            <div class="row">

                <a
                  v-for="org in orgs"
                  :key="org.name"
                  :href="org.website"
                  target="_blank"
                  class="col-12 col-sm-6 col-md-4 organization"
                >
                    <div class="single-feature-area">
                        <div class="feature-icon mb-15">
                          <div class="logo-container">
                            <img :src="`/img/organizations/${org.image}`" :alt="org.name">
                          </div>
                        </div>
                        <div class="feature-content">
                            <h4>{{ org.name }}</h4>
                            <p>{{ org.description }}</p>
                        </div>
                    </div>
                </a>

            </div>
        </div>

    </section>
  </section>

  
</template>

<script>
export default {
  computed: {
    orgs() {
      const orgs = this.$store.state.orgs;

      orgs.sort((a, b) => {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      });

      return orgs;
    }
  }
};
</script>

<style scoped>
.logo-container {
  height: 150px;
  display: flex;
  justify-content: center;
}

.logo-container img {
  max-height: 100%;
  max-width: 100%;
  align-self: center;
}

.feature-content p {
  margin-bottom: 0px;
}
</style>
