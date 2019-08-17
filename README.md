# De/crypt application in Node.js
* Small and easy to extend 
* Morse algorithm implemented so far
* Test framework Jest

## Installation
* Install latest [nodejs](https://nodejs.org/en/) 
* `npm install`

## Run
* `npm start`
* Run tests `npm test`

## Adding new algorithm
1. create new file from template `./crypts/algorithms/caesar.js` in same directory
2. create tests in `./tests/{your-new-algorithm}.test.js`
2. edit file `./crypts/algorithms/index.js` 
    * import your file 
    * add object into export