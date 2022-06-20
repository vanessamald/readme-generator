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
    },
    {
        type: 'input',
        message: 'Add a link to your deployed application:',
        name: 'deployed'
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
    git,
    email,
    deployed

// TODO: Create a function to generate markdown for README   
})=> {
const generateTemplate = 
`# ${title}
## Description
${Description}

## Table of Contents
* [Contribution](#credits)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

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


## Questions
* Github:[${git}](https://github.com/${git})
* Email: [email](${email})
## Deployed Application: 
${deployed} `;
writeToFile(title, generateTemplate);
});
}

// TODO: Create a function to write README file
function writeToFile( title, data) {
    fs.writeFileSync(`./${title}.md`, (data), generateMarkdown, (err) => {
        console.log('Your README has been created!');
        if (err) {
            console.log(err);      
    }})
};

// TODO: Create a function to initialize app
async function init() {
    try {
        await questions();   
    } catch (error) {
    console.error();
    }
}

// Function call to initialize app
init();