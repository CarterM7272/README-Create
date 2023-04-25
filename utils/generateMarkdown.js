// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ""

    licenseBadge = "![License Badge](https://shields.io/badge/license-" + license + "-yellow"

  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ""
  if (license == MIT) {
    licenseLink = "https://opensource.org/licenses/MIT"
  }
  else if (license == Apache) {
    licenseLink = "https://opensource.org/license/apache-2-0/"
  }
  else if (license == BSD) {
    licenseLink = "https://opensource.org/license/bsd-1-clause/"
  }
  else if (license == None) {
    licenseLink
  }
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

  ## Description

  ${data.description}

  ## Table of Contents

  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  

  ## Installation
  The following necessary dependencies must be installed to run the application: 
  ${data.installation}


  ## Usage
  Here is how I utilize this application:
  ${data.usage}

  ## License
  Here is a link of the license used:
  
  ${data.license}


  ## Contributing
  Here are some of the contributors of this project: 
  ${data.Username}

  ## Questions
  If you have any questions you can contact me at:

  https://github.com/${data.Username}

  You can also email me at:

  ${data.Email}

  `
  ;}

module.exports = generateMarkdown;
