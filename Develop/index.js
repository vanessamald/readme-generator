console.log('Hello Node!');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.prompt([ 
    
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },
    {   
        type: 'input',
        message: "What are the requirements?",
        name: "instructions"
        
    },
    //{
        //type: 'list',
        //message: "What languages did you use?",
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
])
.then(answers => console.log(answers));

//const questions = [

//];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
    //fs.writeFile(`./${fileName}.md`, data, (err) => {
        //if (err) {
            //console.log(err);
       // }
    //})
//};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
