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
        let officeName = '';
        const nameElement = articleElement.querySelector('h3');
        if (nameElement) {
          officeName = nameElement.textContent.trim();
        }
        try {
          const locationArray = locElement.textContent
            .split('\n')
            .filter((line) => line.trim());
          const address = [];
          switch (locationArray.length) {
            case 5:
            case 4:
              office.name = locationArray[0].trim();
              office.building = locationArray[1].trim();

              for (let j = 2; j < locationArray.length; j++) {
                address.push(locationArray[j].trim());
              }
              office.location = address.join(', ');

              break;
            case 3:
              if (officeName && locationArray[0].includes(officeName)) {
                office.name = locationArray[0].trim();
              } else {
                office.building = locationArray[0].trim();
              }
              office.location = `${locationArray[1].trim()}, ${locationArray[2].trim()}`;

              break;
            default:
              console.error('Unknown location structure', locationArray);
          }

          if (Object.keys(office).length) {
            if (!office.name && officeName) {
              office.name = officeName;
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

  // Populate missing building data by matching location
  const addressBuildingMap = {};
  offices.forEach(({ location, building }) => {
    if (building && location) {
      const address = location.split(',')[0].toLowerCase();
      if (!addressBuildingMap[address]) {
        addressBuildingMap[address] = [{ building, count: 1 }];
      } else {
        const mappedBuilding = addressBuildingMap[address].find(
          (foundBuilding) => foundBuilding.building === building
        );
        if (mappedBuilding) {
          mappedBuilding.count++;
        } else {
          console.log(
            `Buidling and address mis-matched for ${building} - ${address}`
          );
          addressBuildingMap[address].push({
            building,
            count: 1,
          });
        }
      }
    }
  });

  Object.keys(addressBuildingMap).forEach((address) => {
    if (addressBuildingMap[address].length > 1) {
      console.log(`Determing building name for ${address}`);
      // Sort by count - descending order
      addressBuildingMap[address].sort(
        ({ countA }, { countB }) => countB - countA
      );
    }
  });

  return offices.map((office) => {
    if (office.location) {
      const address = office.location.split(',')[0].toLowerCase();
      if (addressBuildingMap[address]) {
        if (office.building !== addressBuildingMap[address][0].building) {
          return {
            ...office,
            building: addressBuildingMap[address][0].building,
          };
        }
      }
    }
    return office;
  });
}

module.exports = {
  officeScraperV2,
};
