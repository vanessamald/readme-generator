const data = require('../index');
const license = require('../index');
const writeToFile = require('../index');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


  
  if (license == MIT) {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if ( license == Apache) {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if ( license == GPLv2) {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  //if (license.length === 0) {
    //return ''
  //} else {
    //return `##License:
    //`${ renderLicenseBadge(license)}`
    //${ renderLicenseLink(license)}`
  //}
}


// TODO: Create a function to generate markdown for README
/*
function generateMarkdown(data) {
  return `# ${data.title}
        # ${title}
        ## Description:
        ${Description}
        ## Table of Contents:
        ## Credits:
        ${Contribution}
        ## Installation:
        ${Installation}
        ## Usage
        ${Usage}
        ## Tests:
        ${Tests}

        ${ renderLicenseSection }
        

        ## Questions:
        * Github:[${git}](https://github.com/${git})
        * Email: ${email}
        * Deployed Application: `;
        //writeToFile(title, generateMarkdown);
}
*/



module.exports = renderLicenseSection;