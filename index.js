// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs')
const createMarkdownFile = require('./utils/generateMarkdown')

const licenses = ['MIT', 'Apache', 'BSD', 'None']

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        message: 'What is your Github?',
        name: 'Username'
      },
      {
        type: 'input',
        message: "What is your email address?",
        name: 'Email'
      },
      {
        type: 'input',
        message: "What is your project's name?",
        name: 'title'
      },
      {
        type: 'input',
        message: "Please write a short description of your project",
        name: 'description'
      },
      {
        type: 'list',
        message: "What kind of license should your project have?",
        name: 'license',
        choices: licenses
      },
      {
        type: 'input',
        message: 'How would you like to utilize this application?',
        name: 'usage'
      },
      {
        type: 'input',
        message: 'How would you like to install this application?',
        name: 'installation'
      },
      {
        type: 'input',
        message: "What command should be run to install dependencies",
        name: 'Dependencies'
      }
];

// TODO: Create a function to write README file
function writeToFile(data) {
fs.writeFile('README.md', data, (error) => {
  if (error) throw error;
    console.log('README generated!')
})
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then (answers => writeToFile(createMarkdownFile(answers)))
}

// Function call to initialize app
init();
