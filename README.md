# GigStart
GigStart is a music business app that allows fans to buy concert tickets in order to fund a band's potential show. Users pledge to buy tickets, and if the funding goal is not reached by a preset deadline, fans' money is refunded and the concert never happens. If the band's ticket sales goal is reached by the deadline, the fans' credit cards are charged and the concert happens on the scheduled date. At the time of funding, bands receive contact information for a venue correspondent, who then happily books the pre-funded event.

This project was built as our final project for class at The Iron Yard.  It was built using React.js on the front end and Ruby on Rails on the back end.

## Installation

- `npm install`
  - This will install the node dependencies for you, and will also install any bower components.
  - This will also run the gulp build process to create the dist folder.


## Listening for file changes:

If you have any scss or js files that you want to automatically transpile, then run the command:
`gulp watch`


## Build and watch

If you would like to build the `dist/` folder and then watch for file changes, then run the command:
`gulp`

This will run:
- watch
- lint
- babel
- sass

## Lint (JSCS) our Javascript

If you want to validate your Javascript code and it's style against the AirBnb style guide, then run the command:
`gulp lint`

## Compile SASS

If you want to compile your SASS (.scss files), then run the command:
`gulp sass`

## Transpile ES6 code to ES5

If you want to compile your ES6/ES7 (ES2015/17) Javascript code to ES5 to use new Javascript features now before the browser supports them, then run this command:
`gulp babel`

## Deploy your project to GitHub Pages

If you want to deploy your project (dist folder) to GitHub pages, then run this command:
`gulp deploy`
