// This scapper gets only the name and address from the IIT directory
const { JSDOM } = require('jsdom');

async function officeScraper(url) {
  const unique_office = [];
  const offices = [];

  for (let i = 0; i < url.length; i++) {
    const res = await fetch(url[i]);
    const html = await res.text();
    const { document } = new JSDOM(html).window;
    document.querySelectorAll('span').forEach((e) => {
      if (e.textContent.includes('Michael Paul')) {
        // The new change is this
        let office = {
          officeName: e.textContent.replace(/\n/g, ' ').split("Michael Paul Galvin Tower")[0],
          Location: e.textContent.replace(/\n/g, ' ').split("Michael Paul Galvin Tower")[1] 
        }
        offices.push(office);
      }
    });
  }

  offices.forEach((office) => {
    if (!unique_office.includes(office)) {
      unique_office.push(office);
    }
  });
  console.log(unique_office);
  return unique_office;
}

async function description(description_URL) {
  const descriptions = [];
  for (let i = 0; i < description_URL.length; i++) {
    const res = await fetch(description_URL[i]);
    const html = await res.text();
    const { document } = new JSDOM(html).window;
    if (description_URL[i] === 'https://afrotc.iit.edu/') {
      document.querySelectorAll('font').forEach((e) => {
        if (e.textContent.includes('Welcome to Air Force ROTC')) {
          descriptions.push(e.textContent);
        }
      });
    } else if (description_URL[i] === 'http://ethics.iit.edu/') {
      document.querySelectorAll('p').forEach((e) => {
        if (e.textContent.includes('Founded in 1976')) {
          descriptions.push(e.textContent);
        }
      });
    } else if (description_URL[i] === 'https://web.iit.edu/human-resources') {
      document.querySelectorAll('p').forEach((e) => {
        if (e.textContent.includes('The Office of Human Resources is')) {
          descriptions.push(e.textContent);
        }
      });
    } else if (description_URL[i] === 'https://www5.iit.edu/nrotc/') {
      document.querySelectorAll('p').forEach((e) => {
        if (e.textContent.includes('Our students, know as Midshipmen')) {
          descriptions.push(e.textContent);
        }
      });
    } else if (description_URL[i] === 'https://www.iit.edu/community-affairs') {
      document.querySelectorAll('p').forEach((e) => {
        if (e.textContent.includes('The university')) {
          descriptions.push(e.textContent);
        }
      });
    } else if (description_URL[i] === 'https://research.iit.edu/orcpd') {
      descriptions.push(
        document
          .querySelector('.field-item')
          .textContent.replace(/\n/g, ' ')
          .trim()
      );
    } else if (description_URL[i] === 'https://research.iit.edu/osrp') {
      descriptions.push(document.querySelector('address').textContent.trim());
    } else if (description_URL[i] === 'https://web.iit.edu/general-counsel') {
      descriptions.push(
        document
          .querySelector('.field-item')
          .textContent.replace(/\n/g, ' ')
          .trim()
      );
    } else if (
      description_URL[i] === 'https://www.iit.edu/president'
      || description_URL[i] === 'https://www.iit.edu/provost'
    ) {
      descriptions.push(
        document
          .querySelector('.checkerboard-item__description p')
          .textContent.replace(/\n/g, ' ')
          .trim()
      );
    } else if (description_URL[i] === 'https://www.iit.edu/title-ix') {
      descriptions.push(
        document.querySelector('.hero__content__inner p').textContent.trim()
      );
    } else if (
      description_URL[i] === 'https://web.iit.edu/student-employment/welcome'
    ) {
      document.querySelectorAll('.col-xs-12').forEach((e) => {
        if (
          e.textContent.includes(
            'The Student Employment Office (SEO) oversees on-campus'
          )
        ) {
          descriptions.push(e.textContent);
        }
      });
    } else if (description_URL[i] === 'https://web.iit.edu/ugaa') {
      descriptions.push(document.querySelector('.slide-body').textContent);
    } else if (description_URL[i] === 'https://web.iit.edu/gaa') {
      descriptions.push(
        'The Office of Graduate Academic Affairs is responsible for the implementation and enforcement of graduate academic policies, the completion of academic standing reviews, degree audits and degree conferrals, communication with and counseling of graduate students, and the identification of campus resources, as appropriate to graduate student needs.'
      );
    } else if (description_URL[i] === 'https://web.iit.edu/wiser') {
      document.querySelectorAll('p').forEach((e) => {
        if (e.textContent.includes('The Wanger Institute for Sustainable Energy Research (WISER) serves')) {
          descriptions.push(e.textContent);
        }
      });
    } else {
      descriptions.push(
        document.querySelector('.full-wysiwyg').textContent.trim()
      );
    }
  }
  console.log(descriptions);
  return descriptions;
}

module.exports = {
  officeScraper,
  description,
};
