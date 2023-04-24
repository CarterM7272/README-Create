// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ""


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  # Description

  ${data.description}

  # Table of Contents
  [Installation](#installation)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)

  # Installation
  The following necessary dependencies must be installed to run the application ${data.installation}

  # Usage
  If you want to utilize this application, then refer to the following: ${data.usage}

  # License
  This project is licensed under the ${data.license} license.

  # Contributing
  Here are some of the contributors of this project ${data.contributing}

  # Tests
  The following is needed to run the test: ${data.test}

  `
  ;
}

module.exports = generateMarkdown;
