const license = require('../index');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') {
    return ""
  }
  if (license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)`
  }
  if ( license == 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if ( license == 'GPLv2') {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  if ( license == 'GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if ( license == 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ""
  } else if (license == 'MIT') {
    return `https://opensource.org/licenses/MIT`
  } else if (license == 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license == 'GPLv2') {
    return `https://opensource.org/licenses/GPL-2.0`
  } else if (license == 'GPLv3') {
    return `https://opensource.org/licenses/GPL-3.0`
  } else if (license == 'Mozilla') {
    return `https://opensource.org/licenses/MPL-2.0`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
    } else {
  return `
  ${ renderLicenseBadge(license)}
  ${ renderLicenseLink(license)}`
  }
}


// TODO: Create a function to generate markdown for README
/*
function generateMarkdown(data) {
const badgeColor = color;
const generateTemplate = 
`# ${title}
## Description
${Description}

## Table of Contents
[Description]
[Contribution](#contribution)
[Installation](#installation)
[Usage](#usage)
[Tests](#tests)
[License](#license)
[Questions](#questions)

## Credits
${Contribution}
## Installation
${Installation}
## Usage
${Usage}
## Tests
${Tests}
## License
${renderLicenseSection(license)}

## Questions:
* Github:[${git}](https://github.com/${git})
* Email: (${email})
* Deployed Application: (https://${git}.github.io/${title}/) `;
writeToFile(title, generateTemplate);
}
*/



module.exports = renderLicenseSection;