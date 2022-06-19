console.log('Hello Node!');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const  generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseSection = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function questions() {
inquirer.prompt([ 
    
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: (value) => { if (value) {return true} else { return'return value to continue'}} 
    },
    {   
        type: 'input',
        message: "Write a short description: What was your motivation?",
        name: "Description",
        validate: (value) => { if (value) {return true} else { return'return value to continue'}} 
    },

    {   
        type: 'input',
        message: "What are the steps required to install your project?",
        name: "Installation",
        validate: (value) => { if (value) {return true} else { return'return value to continue'}} 
    },
    {   
        type: 'input',
        message: "List of collaborators:",
        name: "Contribution",
        validate: (value) => { if (value) {return true} else { return'return value to continue'}} 
    },
    {   
        type: 'input',
        message: "Provide instructions for usage:",
        name: "Usage",
        validate: (value) => { if (value) {return true} else { return'return value to continue'}} 
    },
    {   
        type: 'input',
        message: "Tests for your application:",
        name: "Tests",
        validate: (value) => { if (value) {return true} else { return'return value to continue'}} 
    },

    
    //{
        //type: 'checkbox',
        //message: "What languages did you use?",
        //name: '',
        //choices: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'SQL'],
        //validate: (value) => { if (value) {return true}  else { return'return value to continue'}} 
    //},
        {   
        type: 'checkbox',
        message: "What license do you want to include?",
        name: 'license',
        choices: ['MIT', 'Apache', 'Apache2', 'GPLv2', 'GPLv3', 'Mozilla', 'None']
        //validate: choices => {
           // if (choices.length > 1) {
               // return true;
                //}else {
                    //return 'Choice is not valid';
               
            //}
        //}
           
    },
    {   
        type: 'checkbox',
        message: "Choose a color for your license badge:",
        name: 'color',
        choices: ['brightgreen', 'blue', 'lightgrey', 'orange', 'yellow'],
    },
    {
        type: 'input',
        message: "Github username:",
        name: 'git',
        validate: (value) => { if (value) {return true}  else { return'return value to continue'}} 
    },
    {
        type: 'input',
        message: "Email:",
        name: 'email',
        validate: (value) => { if (value) {return true} else { return'return value to continue'}} 
    }

]
).then(({
    
    title,
    Description,
    Installation,
    Usage, 
    Contribution,
    Tests,
    license,
    color,
    git,
    email
//})

//)
//.then(( => {
    //writeToFile(data);

})=> {
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
writeToFile(generateTemplate);

//![badge](https://img.shields.io/badge/license-${license}-${color}) TESTING

});
}
//} // TESTING FUNCTION

//const questions = [

//];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync(`./README.md`, (data), generateMarkdown, (err) => {
        if (err) {
            console.log(err);
        } else {
       console.log('Your README has been created!');
}})
};
//inquirer.prompt();
// TODO: Create a function to initialize app
async function init() {
    try {
        await questions();
        //console.log('QUESTIONS ANSWERED');

        //await writeToFile(data);
  
    
} catch (error) {
    console.error();
}
}

// Function call to initialize app
init();

//questions(); // TESTING

//module.exports = writeToFile;