// This scapper gets only the name and address from the IIT directory

const {DEBUG, NODE_ENV} = process.env;

const { JSDOM } = require('jsdom');

async function scraper(url) {
    const res = await fetch(url);
    const html = await res.text();
    const { document } = (new JSDOM(html)).window;
    let offices = []
    document.querySelectorAll('span').forEach(e => {
        if(e.textContent.includes('Michael Paul')){
            offices.push(e.textContent.replace(/\n/g, ' '));
        }
    })
    // set is used to remove any duplicates
    let unique_offices = new Set(offices);
    console.log(unique_offices );
}

module.exports = {
    scraper
  };