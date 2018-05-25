<template>
  <section class="welcome_area clearfix" id="home2" style="">
    <div class="hero-slides2">
      <div class="single-hero-slide d-flex justify-content-center">
        <div class="hero-slide-content text-center">
          <h2 class="title">BCOE LC</h2>
          <h4>Bourns College of Engineering Leadership Council</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  color: #fff;
  font-size: 12em;
  font-weight: bold;
  font-family: Helvetica;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
}
.single-hero-slide {
  display: flex;
  align-items: center;
}
.hero-slide-content {
  margin-bottom: 500px;
}

@media (max-width: 500px) {
  .title {
    font-size: 5em;
  }
  .hero-slide-content {
    margin-bottom: 0px;
  }
}

@media (max-width: 1024px) {
  .title {
    font-size: 5em;
  }
  .hero-slide-content {
    margin-bottom: 0px;
  }
}
</style>
