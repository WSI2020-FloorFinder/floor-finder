// This scapper gets only the name and address from the IIT directory

const {DEBUG, NODE_ENV} = process.env;

const { JSDOM } = require('jsdom');
let unique_office = []
async function officeScraper(url) {
    const res = await fetch(url);
    const html = await res.text();
    const { document } = (new JSDOM(html)).window;
    let offices = []
    document.querySelectorAll('span').forEach(e => {
        if(e.textContent.includes('Michael Paul')){
            offices.push(e.textContent.replace(/\n/g, ' '));
        }
    })
    
    offices.forEach(office => {
        if(!unique_office.includes(office)){
            unique_office.push(office)
        }
    })
    
    return unique_office;
    
}

module.exports = {
    officeScraper
  };