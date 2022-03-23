'use strict';

const {officeScraper} = require('../lib/scraper');
let offices = []

let URL = 'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page='

for(let i = 0; i < 13; i++){
   let officesURL = URL + i;
   offices.push(officeScraper(officesURL))
}

console.log(offices);