<template>
  <section>
    <div class="mosh-breadcumb-area" style="background-image: url(/img/header.png);">
      <div class="container h-100">
          <div class="row h-100 align-items-center">
              <div class="col-12">
                  <div class="bradcumbContent">
                      <h2>Resources</h2>
                  </div>
              </div>
          </div>
      </div>
    </div>

    <section class="mosh--services-area section_padding_100">
        <div class="container">
            <div class="row">
              <div class="col-md-12">

                <section class="mb-100">
                  <h2>BCOE Contacts</h2>
                  <p>
                    Below are the staff members that support the BCOE organizations.
                  </p>
                </section>

                <div class="row">

                  <div
                    class="col-md-4"
                    v-for="person in staff"
                    :key="person.name"
                  >
                    <div class="single-team-slide text-center">

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

    <section class="mosh--services-area mb-100">
        <div class="container">
            <div class="row">
              <div class="col-md-12">

                <section class="mb-50">
                  <h2>Resources</h2>
                </section>

                <div class="panel single-accordion">
                  <h6>
                    <a role="button" class="collapsed" aria-expanded="true" aria-controls="funding" data-toggle="collapse" data-parent="#accordion" href="#funding">

                      Funding Guidelines
                      <span class="accor-open"><i class="fa fa-plus" aria-hidden="true"></i></span>
                      <span class="accor-close"><i class="fa fa-minus" aria-hidden="true"></i></span>

                    </a>
                  </h6>
                  <div id="funding" class="accordion-content collapse">
                      <p>
                        Funding proposals are due the fourth week of October. The College's Chief Financial Officer reviews all propoals and submits them to the Dean for final approval. Awards are announced the first week of November. Awards range in amount are are subject to approval guidelines.  
                      </p>
                      <p>
                        Requests may be submitted for the following activites and/or events:
                      </p>
                      <ul class="list-group">
                        <li class="list-group-item">
                          Guest speakers and development of connections with industry representatives and alumni
                        </li>
                        <li class="list-group-item">
                          Projects
                        </li>
                        <li class="list-group-item">
                          Participation in regional or national compeitions and conferences
                        </li>
                        <li class="list-group-item">
                          Leadership and professional development training
                        </li>
                        <li class="list-group-item">
                          Outreach activites for K-12
                        </li>
                      </ul>

                      <p>
                        Funding is not permitted for
                      </p>

                      <ul class="list-group">
                        <li class="list-group-item">
                          T-Shirts unless they are for events
                        </li>
                        <li class="list-group-item">
                          General organization operating expenses
                        </li>
                        <li class="list-group-item">
                          Refreshments for regular club meetings
                        </li>
                        <li class="list-group-item">
                          Gifts and awards (unless with special approval granted by the Professional Development Coordinator)
                        </li>
                        <li class="list-group-item">
                          Conference attendance for students with GPA's below 2.0, or non-engineering majors
                        </li>
                      </ul>
                  </div>
                </div>

                <div class="panel single-accordion">
                  <h6>
                    <a role="button" class="collapsed" aria-expanded="true" aria-controls="other" data-toggle="collapse" data-parent="#accordion" href="#rooms">

                      Room Reservations
                      <span class="accor-open"><i class="fa fa-plus" aria-hidden="true"></i></span>
                      <span class="accor-close"><i class="fa fa-minus" aria-hidden="true"></i></span>

                    </a>
                  </h6>
                  <div id="rooms" class="accordion-content collapse">
                      <p>
                        These rooms are available to reserve for student org events.
                      </p>
                      <ul class="list-group">
                        <li class="list-group-item">
                          <strong>WCH 202, WCH 203, WCH 205/206, Bourns A265, Bourns A171</strong><br />
                          Contact the Professonal Development Officer <br/>
                          Room availabilities can be found <a href="https://www.engr.ucr.edu/cgi-bin/conf_rooms/public/display.cgi">here</a>
                        </li>
                        <li class="list-group-item">
                          <strong>WCH 103</strong><br />
                          Contact BCOE's Safety & Facilities Coodinator
                        </li>
                        <li class="list-group-item">
                          <strong>Byte's Lobby and Patio</strong><br />
                          Contact Byte's Supervisor <a href="mailto:pam.trimble@ucr.edu">Pam Trimble</a>
                        </li>
                        <li class="list-group-item">
                          <strong>Chung Patio</strong><br />
                          Contact Richard Bain
                        </li>
                        <li class="list-group-item">
                          <strong>WCH 110, 117, 118, 129, 132, 133, 135, 136</strong><br />
                          Contact <a href="mailto:systems@cs.ucr.edu">CS Systems</a>
                        </li>
                        <li class="list-group-item">
                          <strong>WCH 121, 125, 126, 128, 109</strong><br />
                          Contact <a href="mailto:systems@ee.ucr.edu">EE Systems</a>
                        </li>
                        <li class="list-group-item">
                          <strong>WCH 232, 233</strong><br />
                          Contact <a href="mailto:systems@engr.ucr.edu">Engineering Systems</a>
                        </li>
                        <li class="list-group-item">
                          <strong>WCH 127 (ACM Clubroom)</strong><br />
                          Contact <a href="http://acmucr.org">ACM@UCR</a>
                        </li>
                        <li class="list-group-item">
                          <strong>WCH 221 (Solarium)</strong><br />
                          Contact <a href="mailto:ieee@ee.ucr.edu">IEEE</a>
                        </li>
                        <li class="list-group-item">
                          <strong>WCH 102 (LC Room)</strong><br />
                          You can make a reservation <a href="https://goo.gl/forms/KL68BIzQ3OPrmRZb2">here</a>
                        </li>
                        <li class="list-group-item">
                          <strong>Creat'R Lab</strong><br />
                          You can make a reservation <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6HNazWMykJJ_7g-PCiCg5HG4oo9oSxT6MUzPCwNVFoAMfPA/viewform?c=0&w=1">here</a>
                        </li>
                        <li class="list-group-item">
                          <strong>HUB Rooms</strong><br />
                          You can make a reservation <a href="https://reserve.ucr.edu/Default.aspx">here</a>
                        </li>
                      </ul>
                  </div>
                </div>
                
                <div class="panel single-accordion">
                  <h6>
                    <a role="button" class="collapsed" aria-expanded="true" aria-controls="other" data-toggle="collapse" data-parent="#accordion" href="#other">

                      Other Guidelines
                      <span class="accor-open"><i class="fa fa-plus" aria-hidden="true"></i></span>
                      <span class="accor-close"><i class="fa fa-minus" aria-hidden="true"></i></span>

                    </a>
                  </h6>
                  <div id="other" class="accordion-content collapse">
                      <p>
                        For other guides, please refer to the <a href="/storage/handbook-2018.pdf">policies handbook</a>.
                      </p>
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
      staff: [
        {
          name: 'Lupe Ruiz',
          position:
            'Transfer Initiatives & Professional Development Coordinator',
          email: 'gruiz@engr.ucr.edu',
          location: 'Student Services Building 1227',
          description:
            'Contact for events, approvals, room reservations, parking requests, event planning, and reimbursments'
        },
        {
          name: 'Richard Bain',
          position: 'Administrative Assistant III',
          email: 'rbain@engr.ucr.edu',
          location: 'Winston Chung Hall 446',
          description:
            'Processes approved purchases and provides access to engineering conference rooms'
        },
        {
          name: 'Jed Schwendiman',
          position: 'Director of Development',
          email: 'jed.schwendiman@ucr.edu',
          location: 'Winston Chung Hall 446',
          description:
            'Oversees strategic corporate relations, sponsorships, and donations'
        },
        {
          name: 'DuBron M. Rabb',
          position: 'Associate Director of Development',
          email: 'dubron.rabb@ucr.edu',
          location: 'Winston Chung Hall 446',
          description: 'Provies corporate, alumni, and sponsorship assistance'
        },
        {
          name: 'Elliot L. Emmer',
          position: 'Development Coordinator',
          email: 'elliot.emmer@ucr.edu',
          location: 'Winston Chung Hall 446',
          description: 'Provides coporate relations guidance'
        },
        {
          name: 'Maggie Souder',
          position: 'Safety & Facilities Coodinator',
          email: 'msouder@engr.ucr.edu',
          location: 'Winston Chung Hall 446',
          description: 'Assists with facilities and room usage'
        },
        {
          name: 'Robert Lopez',
          position: 'Safety & Facilities Assistant',
          email: 'lopezra@engr.ucr.edu',
          location: 'Winston Chung Hall 446',
          description: 'Supports the Safety & Facilities Coodinator'
        }
      ]
    };
  }
};
</script>

<style scoped>
.list-group {
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #737378;
}
</style>
