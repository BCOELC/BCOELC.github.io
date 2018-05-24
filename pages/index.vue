<template>
  <section>
    <hero />
    <student-organizations />
    <section class="mosh-clients-area section_padding_100 clearfix">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading text-center">
                        <h2>Events</h2>
                    </div>
                </div>

                <div class="col-12">
                    <div class="clients-logo-area d-sm-flex align-items-center justify-content-between">
                        <a href="http://citrushack.com">
                            <img src="~/assets/img/events/citrushack.png" alt="Citrus Hack">
                        </a>
                        <a href="http://biohackucr.com">
                            <img class="biohack" src="~/assets/img/events/biohack.png" alt="BioHack">
                        </a>
                        <a href="http://cutiehack.com">
                            <img src="~/assets/img/events/cutiehack.png" alt="Cutie Hack">
                        </a>
                        <a href="#">
                            <img src="~/assets/img/events/bced.png" alt="Bourns College Engineering Day">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer-area clearfix">
        <div class="top-footer-area section_padding_100_0">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-100">
                            <a href="#" class="mb-50 d-block">
                                <img class="logo" src="~/assets/img/core-img/bcoelc.png" alt="">
                            </a>
                            <p>
                                The Bourns College of Engineering Leadership Council is the collaborating entity for the BCOE student organizations.
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-6">
                        <div class="single-footer-widget mb-100">
                            <h5>News</h5>
                            <div class="footer-single--blog-post">
                                <a href="http://csebcoe.ucr.acsitefactory.com/news/2018/05/22/four-cs-students-awarded-scholarships-attend-grace-hopper-celebration-conference"
                                    class="blog-post-date">
                                    <p>22 May, 2018</p>
                                </a>
                                <a href="http://csebcoe.ucr.acsitefactory.com/news/2018/05/22/four-cs-students-awarded-scholarships-attend-grace-hopper-celebration-conference"
                                    class="blog-post-title">
                                    <h6>[WinC] Four CS students awarded scholarships to attend the Grace Hopper Celebration Conference!</h6>
                                </a>
                            </div>
                            <div class="footer-single--blog-post">
                                <a href="http://csebcoe.ucr.acsitefactory.com/news/2018/05/18/acm-student-chapter-concludes-exciting-year" class="blog-post-date">
                                    <p>18 May, 2018</p>
                                </a>
                                <a href="http://csebcoe.ucr.acsitefactory.com/news/2018/05/18/acm-student-chapter-concludes-exciting-year" class="blog-post-title">
                                    <h6>[ACM] ACM student chapter concludes exciting year!</h6>
                                </a>
                            </div>
                            <div class="footer-single--blog-post">
                                <a href="http://csebcoe.ucr.acsitefactory.com/news/2018/05/16/more-300-students-33-colleges-compete-citrus-hack-2018" class="blog-post-date">
                                    <p>16 May, 2018</p>
                                </a>
                                <a href="http://csebcoe.ucr.acsitefactory.com/news/2018/05/16/more-300-students-33-colleges-compete-citrus-hack-2018" class="blog-post-title">
                                    <h6>[Citrus Hack] More than 300 students from 33 colleges compete in Citrus Hack 2018!</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-100">
                            <h5>Contact Info</h5>
                            <div class="footer-single-contact-info d-flex">
                                <div class="contact-icon">
                                    <img src="~/assets/img/core-img/map.png" alt="">
                                </div>
                                <p>Winston Chung 102</p>
                            </div>
                            <div class="footer-single-contact-info d-flex">
                                <div class="contact-icon">
                                    <img src="~/assets/img/core-img/message.png" alt="">
                                </div>
                                <p>office@yourbusiness.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom-area">
            <div class="container h-100">
                <div class="row h-100">
                    <div class="col-12 h-100">
                        <div class="footer-bottom-content h-100 d-md-flex justify-content-between align-items-center">
                            <div class="copyright-text">
                                <p>
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script> All rights reserved | Made with
                                    <i class="fa fa-heart-o" aria-hidden="true"></i> at UC Riverside
                                </p>
                            </div>
                            <div class="footer-social-info">
                                <a href="https://www.facebook.com/groups/bcoeucr/?ref=bookmarks">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="http://bcoeorgs.slack.com/">
                                    <i class="fa fa-slack" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/bcoelc/">
                                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import Hero from '~/components/Home/Hero';
import StudentOrganizations from '~/components/Home/StudentOrganizations';

export default {
  components: {
    AppLogo,
    Hero,
    StudentOrganizations
  }
};
</script>

<style scoped>
#home2 {
  background-image: url(~/assets/img/bg-img/welcome-bg.png);
}
</style>
