# Floor Finder

## How to start the project

- Step 1: install [node.js](https://nodejs.org/en/download/)
- Step 2: `npm install`

## How to install MySQL

### For macOS

install mysql using Homebrew: `brew install mysql` then follow the instructions from brew

### For Windows

[MySQL Installer](https://dev.mysql.com/downloads/installer/)

## How to create a database in MySQL and a dev user

- Step 1: login MySQL from terminal: `mysql -uroot -p`
- Step 2: create a floor_finder database: `CREATE DATABASE floor_finder;`
- Step 3: creat a new user account: `CREATE USER ‘dev’@’localhost’ IDENTIFIED BY ‘your_password_here’;`
- Step 4: grant global privileges to a dev user connecting via localhost `GRANT ALL ON floor_finder.\* TO 'dev'@'localhost'`;

**_Now the database is ready to use._**

## Data setup

- Step 1: set up db password environment variable: `export DB_PASSWORD=your_password_here`
- Step 2: set up tables: `npm run mysql:setup`
- Step 3: populate the data using the web scraper

## How to run the web scraper

- Step 1: set up db password environment variable: `export DB_PASSWORD=your_password_here`
- Step 2: `npm run scrape`


## How to start the Express server

- Step 1: set up db password environment variable: `export DB_PASSWORD=your_password_here`
- Step 2: `npm start` or `npm run start:dev`
- Step 3: Open web browser and enter http://localhost:3000 to check the server status


## How to run linting

`npm run lint`

## API Example

### Search office

- Example: search with keyword `student` on the name and description fields: `http://localhost:3000/api/search?size=10&keyword=student&fields=name,description`
- Seachable fields: name, description, building, location, phone, and email (if `fields` is not passed, all seachable fields will be used).
