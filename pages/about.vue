<template>
  <section>
    <div class="mosh-breadcumb-area" style="background-image: url(/img/header.png);">
      <div class="container h-100">
          <div class="row h-100 align-items-center">
              <div class="col-12">
                  <div class="bradcumbContent">
                      <h2>About</h2>
                  </div>
              </div>
          </div>
      </div>
    </div>

    <section class="mosh--services-area section_padding_100">
        <div class="container">
            <div class="row text-center">
              <div class="col-md-12">

                <section class="mb-100">
                  <h2>About the BCOE Leadership Council</h2>
                  <img src="/img/students/students.jpg" style="width: 60%;">
                  <p>
                    Our goal is to continue the excellence that BCOE organizations are known for and to increase collaboration among the organizations.
                  </p>
                </section>

                <h2>LC Executive Board</h2>
                <p>The LC Executive Board is an elected group composed of former/current officers of the member organizations. Elections are held in Spring Quarter.</p>
                
                <div class="row">

                  <div
                    class="col-md-4"
                    v-for="person in board"
                    :key="person.name"
                  >
                    <div class="single-team-slide text-center">

                      <div class="team-thumbnail">
                        <img :src="`/img/lcboard/${person.image}`" :alt="person.name">
                      </div>

                      <div class="team-meta-info">
                        <h4>{{ person.name }}</h4>
                        <span>{{ person.position }}</span>
                        <a class="" :href="`mailto:${person.email}`">Contact</a>
                      </div>
                    </div>
                  </div>

                </div>
                
              </div>
            </div>
        </div>

    </section>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      board: [
        {
          name: 'Jacob Poole',
          position: 'President',
          email: 'jpool003@ucr.edu',
          image: 'jacob.jpg'
        },
        {
          name: 'Albert Fernandez',
          position: 'Vice-President',
          email: 'afern017@ucr.edu',
          image: 'albert.jpg'
        },
        {
          name: 'Jessica Leon',
          position: 'Secretary',
          email: 'jleon015@ucr.edu',
          image: 'jessica.jpg'
        },
        {
          name: 'Jose Gutierrez',
          position: 'Webmaster',
          email: 'jguti046@ucr.edu',
          image: 'jose.jpg'
        },
        {
          name: 'Neal Goyal',
          position: 'Treasurer',
          email: 'ngoya001@ucr.edu',
          image: 'neal.jpg'
        }
      ]
    };
  }
};
</script>

<style scoped>
.team-meta-info span {
  margin-bottom: 10px !important;
}
</style>
