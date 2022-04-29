const { officeScraperV2 } = require('../lib/scraperV2');
const Office = require('../models/office');

const DIRECTORY_BASE =
  'https://www.iit.edu/directory?organization_type=All&page=';

async function start() {
  const offices = await officeScraperV2(DIRECTORY_BASE);
  console.log(offices);
  for (let i = 0; i < offices.length; i++) {
    const office = Office.build(offices[i]);
    await office.save();
  }

  process.exit();
}

start();
