console.log('Hello Node!');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const { generateMarkdown } = require('./utils/generateMarkdown');
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
    //{   
        //type: 'list',
        //message: "What are you including in your readme:",
        //choices: [''],
        //name: "Table of Contents"   
    //},
    {   
        type: 'input',
        message: "What are the steps required to install your project?",
        name: "Installation",
        validate: (value) => { if (value) {return true} else { return'return value to continue'}} 
    },
    {   
        type: 'input',
        message: "List of collaborators:",
        name: "Credits",
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
        type: 'input',
        message: "Questions:",
        name: "Questions",
        validate: (value) => { if (value) {return true} else { return'return value to continue'}} 
    },
    
    //{
        //type: 'list',
        //message: "What languages did you use?",
        //name: '',
        //choices: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'SQL'],
        //validate: (value) => { if (value) {return true}  else { return'return value to continue'}} 
    //},
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
    Credits,
    Tests,
    Questions,
    git,
    email

}) => {
    const generateMarkdown = 
        `# ${title}
        ## Description:
        ${Description}
        ## Table of Contents:
        ## Credits:
        ${Credits}
        ## Installation:
        ${Installation}
        ## Usage
        ${Usage}
        ## Tests:
        ${Tests}
        ## Questions:
        ${Questions}
        # Contact:
        * Github: ${git} 
        * Email: ${email}
        * Deployed Application: `;
        writeToFile(title, generateMarkdown);
        
      });
    
//console.log(answers));
//generateMarkdown;
//writeToFile();



//writeToFile(filename, data);
//(answers => console.log(answers));



//const questions = [

//];

// TODO: Create a function to write README file
function writeToFile(title, data) {
    fs.writeFileSync(`./${title}.md`, data, (err) => {
        
        if (err) {
            console.log(err);
        }
       console.log('Your README has been created');
    })
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
