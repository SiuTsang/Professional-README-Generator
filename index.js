const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")
const generatorMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the project about and please describe about your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install the project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What are the usages of the project',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Please list collaborators',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Please provide license information of the project',
    },
    {
      type: 'input',
      name: 'feature',
      message: 'What features are being used in this project?',
    },
  ];


function writeToFile(fileName, data){
  fs.writeFile(fileName, data, (err) => 
  err ? console.error(err) : console.log("commit logged!")
 ) 
};

function init(){
  inquirer.prompt(questions)
    .then(function(data){
      writeToFile("README.md", generatorMarkdown(data));
      console.log(data)
    })
};

init();