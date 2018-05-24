<template>
    <header class="header_area clearfix">
        <div class="container-fluid h-100">
            <div class="row h-100">
    
                <div class="col-12 h-100">
                    <div class="menu_area h-100">
                        <nav class="navbar h-100 navbar-expand-lg align-items-center">
    
                            <nuxt-link class="navbar-brand" to="/">
                                <img src="~/assets/img/core-img/bcoelc.png" alt="logo">
                            </nuxt-link>
    
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mosh-navbar" aria-controls="mosh-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
    
                            <div class="collapse navbar-collapse justify-content-end" id="mosh-navbar">
                                <ul class="navbar-nav animated" id="nav">
                                    <nuxt-link
                                        v-for="link in links"
                                        :key="link.name"
                                        tag="li"
                                        class="nav-item" 
                                        :to="link.link" 
                                        exact

                                    >
                                        <a class="nav-link">{{ link.name }}</a>
                                    </nuxt-link>
                                </ul>
    
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  data: function() {
    return {
      links: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'About',
          link: '/about'
        },
        {
          name: 'Organizations',
          link: '/organizations'
        },
        {
          name: 'Resources',
          link: '/resources'
        }
      ]
    };
  }
};
</script>

<style>
</style>
