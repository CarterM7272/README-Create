// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs')
const createMarkdownFile = require('./utils/generateMarkdown')

const licenses = ['MIT', 'Apache', 'BSD', 'None']

// TODO: Create an array of questions for user input
const questions = [
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your Github?',
        name: 'username'
      },
      {
        type: 'input',
        message: "What is your email address?",
        name: 'email'
      },
      {
        type: 'input',
        message: "What is your project's name?",
        name: 'project-title'
      },
      {
        type: 'input',
        message: "Please write a short description of your project",
        name: 'project-description'
      },
      {
        type: 'list',
        message: "What kind of license should your project have?",
        name: 'license',
        choices: licenses
      },
      {
        type: 'input',
        message: "What command should be run to install dependencies",
        name: 'dependencies'
      }
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readMeFile = "README.md"
    fs.writeFile(function (err) {
      if(err) {
        console.log(err)
      } else {
        console.log (readMeFile + ' was created')
      }
    })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then (answers => writeToFile(createMarkdownFile(answers)))
}

// Function call to initialize app
init();
