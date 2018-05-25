import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      orgs: [
        {
          name: 'Assocation for Computing Machinery',
          image: 'acm.png',
          website: 'http://acmucr.org',
          description:
            'The premier computer science student organization focusing on technical and professional development.'
        },
        {
          name: 'American Institute of Chemical Engineers',
          image: 'aiche.jpg',
          website: 'https://www.aicheucr.com/',
          description:
            "AIChE is the world's leading organization for chemical engineering professionals, with over 40,000 members from over 90 countries."
        },
        {
          name: 'The American Society of Mechanical Engineers',
          image: 'asme.png',
          website: 'http://ucrasme.wixsite.com/ucr-asme',
          description:
            'Our goal is to provide our students with various opportunities to network, acquire professional skills, and gain real-world experience that cannot be obtained in a traditional classroom setting.'
        },
        {
          name: 'Biomedical Engineering Society',
          image: 'bmes.jpg',
          website: 'https://sites.google.com/site/bmesatucr/',
          description:
            "The vision of the Biomedical Engineering Society (BMES) is to serve as the world's leading society of professionals devoted to developing and using engineering and technology to advance human and well being."
        },
        {
          name: 'Engineers without Borders',
          image: 'ewb.png',
          website: 'https://ewbatucr.weebly.com/',
          description:
            'Engineers Without Borders at UC Riverside supports community-driven development programs worldwide through the design and implementation of sustainable engineering projects, while fostering responsible leaders.'
        },
        {
          name: 'Institute of Electrical and Electronics Engineers',
          image: 'ieee.png',
          website: 'http://ieee.ee.ucr.edu/',
          description:
            'Our mission as the local chapter is to provide engineers with technical, social, and professional development in the engineering field.'
        },
        {
          name: 'Material Research Society',
          image: 'mrs.jpg',
          website: 'https://sites.google.com/site/mrsatucr/home',
          description:
            'We want to grow and develop the Materials Science and Engineering program at UC Riverside by advocating interdisciplinary research and discussion in the field of materials science.'
        },
        {
          name: 'National Society of Black Engineers',
          image: 'nsbe.png',
          website: 'http://www.engr.ucr.edu/~nsbe/',
          description:
            'To increase the number of culturally responsible Black engineers, who excel academically, succeed professionally, and positively impact the community.'
        },
        {
          name: 'Society of Automotive Engineers',
          image: 'sae.jpg',
          website: 'https://saeucr.org/',
          description:
            'Driven by the desire to learn and make race cars. The Students from University of California, Riverside began to construct F1 inspired race cars.'
        },
        {
          name: 'Society of Hispanic Professional Engineers',
          image: 'shpe.png',
          website: 'http://www.engr.ucr.edu/~shpe/',
          description:
            'Brought together by heritage, social responsibility and desire to improve the equality of all people through the use of science and technology.'
        },
        {
          name: 'Society of Women Engineers',
          image: 'swe.png',
          website: 'http://ucrswe.weebly.com/',
          description:
            'SWE-UCR is a non-profit, educational, service organization that is driven by members who are passionate about supporting women to achieve full potential in careers as engineers and leaders. We are an active club that hosts academic and professional events through out the year.'
        },
        {
          name: 'Theta Tau',
          image: 'thetatau.png',
          website: 'http://thetatauucr.com/',
          description: 'WE ARE ENGINEERS. WE ARE LEADERS. WE ARE BROTHERS.'
        },
        {
          name: 'Tau Beta Pi',
          image: 'taubetapi.jpg',
          website: 'http://tbp.ucr.edu/',
          description:
            'Tau Beta Pi is the only engineering honor society representing the entire engineering profession.'
        },
        {
          name: 'Women in Computing (ACM-W)',
          image: 'winc.jpg',
          website: 'http://winc.cs.ucr.edu/',
          description:
            'Our primary goal is to empower students to increase retention in the computing field.'
        },
        {
          name: 'Material Advantage',
          image: 'materialadvantage.jpg',
          website: 'https://www.facebook.com/MaterialAdvantageUCR/',
          description:
            'The student program for material science and engineering.'
        },
        {
          name: 'Gamespawn',
          image: 'gamespawn.jpg',
          website: 'https://gamespawn.github.io/Home/index.html',
          description:
            'We are a game development club. We work with everything game related.'
        },
        {
          name: 'Aerospace Systems',
          image: 'aerospacesystems.png',
          website: 'https://aerospacesystems.weebly.com/',
          description:
            'Aerospace Systems believes in its ability to change how the University of California Riverside​ and the community perceive space exploration. We dare to push boundaries and consider obstacles as opportunities.'
        },
        {
          name: 'Cyber@UCR',
          image: 'cyber.png',
          website: 'http://ucrcyber.org',
          description:
            'Cyber@UCR is the advancement of cybersecurity education  through competitions, and study.'
        }
      ],
      events: [
        {
          name: 'Citrus Hack',
          website: 'http://citrushack.com',
          image: 'citrushack.png'
        },
        {
          name: 'Bourns Engineering Day',
          website: 'http://www.engr.ucr.edu/~ssed/#/',
          image: 'bced.png'
        },
        {
          name: 'BioHack',
          website: 'http://biohackucr.com',
          image: 'biohack.png'
        },
        {
          name: 'Citrus Hack',
          website: 'http://cutiehack.com',
          image: 'cutiehack.png'
        }
      ]
    },
    mutations: {
      increment(state) {
        state.counter++;
      }
    }
  });
};

export default createStore;
