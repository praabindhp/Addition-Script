// sudo apt install npm
// npm i init
// npm i jsonfile
// npm i moment
// npm i simple-git

const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';

// Edit Number Before The 'd'
const DATE = moment().format();

const data = {
    date: DATE
}

jsonfile.writeFile(FILE_PATH, data, ()=>{
    simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE }).push();
});

// node indexToday.js