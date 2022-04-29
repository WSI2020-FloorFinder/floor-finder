// This scapper gets only the name and address from the IIT directory
const { JSDOM } = require('jsdom');
const { description } = require('./scraper');

async function officeScraperV2(
  directoryBase,
  start = 0,
  maxScrappingPages = 20
) {
  const offices = [];
  let pageCount = 0;
  while (pageCount < maxScrappingPages) {
    const res = await fetch(directoryBase + (start + pageCount));
    const html = await res.text();
    const { document } = new JSDOM(html).window;
    const articles = document.querySelectorAll('article');

    // exist if the page has no more results
    if (!articles.length) {
      console.log(`No more results for page ${start + pageCount}`);
      break;
    }

    for (let i = 0; i < articles.length; i++) {
      const articleElement = articles[i];
      const locElement = articleElement.querySelector('.location');
      if (locElement) {
        const office = {};
        try {
          const locationArray = locElement.textContent.split('\n');
          const address = [];
          switch (locationArray.length) {
            case 5:
            case 4:
              office.name = locationArray[0].trim();
              office.building = locationArray[1].trim();

              for (let j = 2; j < locationArray.length; j++) {
                address.push(locationArray[j].trim());
              }
              office.location = address.join(' ');

              break;
            case 3:
              office.building = locationArray[0].trim();
              office.location = `${locationArray[1].trim()} ${locationArray[2].trim()}`;

              break;
            default:
              console.error('Unknown location structure', locationArray);
          }

          if (Object.keys(office).length) {
            if (!office.name) {
              const nameElement = articleElement.querySelector('h3');
              if (nameElement) {
                office.name = nameElement.textContent.trim();
              }
            }

            const linkElement = articleElement.querySelector('h3 a');
            if (linkElement && linkElement.href) {
              office.url = linkElement.href;
            }

            const descriptionElement = articleElement.querySelector('h3 + p');
            if (descriptionElement) {
              office.description = descriptionElement.textContent.trim();
            } else if (office.url) {
              // fallback to use v1 to get description
              const [descriptionResult] = await description([office.url]);
              if (descriptionResult) {
                office.description = descriptionResult;
              } else {
                console.log(
                  `No description found for ${office.name} from ${linkElement.href}`
                );
              }
            } else {
              console.log(`No description link found for ${office.name}`);
            }

            const phoneElement = articleElement.querySelector('.phone');
            if (phoneElement) {
              office.phone = phoneElement.textContent.trim();
            }

            const emailElement = articleElement.querySelector('.email');
            if (emailElement) {
              office.email = emailElement.textContent.trim();
            }

            offices.push(office);
          }
        } catch (ex) {
          console.log(ex);
        }
      }
    }
    pageCount++;
  }

  return offices;
}

module.exports = {
  officeScraperV2,
};
