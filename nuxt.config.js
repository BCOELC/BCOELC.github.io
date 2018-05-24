module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'BCOE Leadership Council | UC Riverside',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'bcoelc&apos;s website'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: './js/jquery-2.2.4.min.js' },
      { src: './js/popper.min.js' },
      { src: './js/bootstrap.min.js' },
      { src: './js/plugins.js' },
      { src: './js/active.js' }
    ]
  },
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/style.css',
    '~/assets/css/animate.css',
    '~/assets/css/font-awesome.min.css',
    '~/assets/css/magnific-popup.css',
    '~/assets/css/owl.carousel.min.css',
    '~/assets/css/responsive.css'
  ],
  router: {
    linkActiveClass: 'active'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
