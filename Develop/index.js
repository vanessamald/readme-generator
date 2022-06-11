console.log('Hello Node!');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const  renderLicenseSection = require('./utils/generateMarkdown');

//const { renderLicenseBadge } = require('./utils/generateMarkdown');
//const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input

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
        choices: ['MIT', 'Apache', 'Apache2', 'GPL', 'Other']
       // validate: choices => {
           // if (choices == 'Other') {
                //return '';
            //}
        //}
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
    


}) => {
    
    const generateTemplate = 
        `# ${title}
        ## Description
        ${Description}

        ## Table of Contents
        [Description]
        [Contribution]
        [installation]
        [Usage]
        [Tests]
        [License]
        [Questions]

        ## Credits
        ${Contribution}
        ## Installation
        ${Installation}
        ## Usage
        ${Usage}
        ## Tests
        ${Tests}

        ![badge](https://img.shields.io/badge/license-${license}-${color})

        ## Questions:
        * Github:[${git}](https://github.com/${git})
        * Email: ${email}
        * Deployed Application: `;
        writeToFile(title, generateTemplate);

});
//const questions = [

//];

// TODO: Create a function to write README file
function writeToFile(title, data) {
    fs.writeFileSync(`./${title}.md`, (data), (err) => {
        if (err) {
            console.log(err);
        } else {
       console.log('Your README has been created');
}})
};

// TODO: Create a function to initialize app
function init() {
  
}

// Function call to initialize app
init();

module.exports = writeToFile;