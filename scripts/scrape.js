'use strict';

const {scraper} = require('../lib/scraper');

let officesURL = ['https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=0', 'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=1'
   ,'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=2', 'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=4'
   ,'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=5','https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=6'
   ,'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=7', 'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=8'
   , 'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=11', 'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=12'];

// This prints out all of the offices and their locations. 
// It prints it out sperately for each page. Later we will have to add to the more urls and fetch code to get the descriptions as well.
for(let i = 0; i < officesURL.length; i++){
   let offices = scraper(officesURL[i]);
   console.log(offices);
}
