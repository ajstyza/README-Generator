// requires npm libraries/packages
const fs = require('fs');
const inquirer = require('inquirer');

//array of questions to add usiner inputs to MD template
const questions = [{
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?'
        },
        {
           type: 'input',
           name: 'contents',
           message: 'Provide a table of contents if your project requires.'
       },
       {
        type: 'input',
        name: 'description',
        message: 'Describe your project'
        },
       {
            type: 'input',
            name: 'description',
            message: 'Describe your project'
        },

       {
           type: 'input',
           name: 'install',
           message: 'How do you install your project?'
       },
       {
           type: 'input',
           name: 'purpose',
           message: 'Describe the purpose of your project.'
       },
       {
           type: 'input',
           name: 'contributors',
           message: 'List project contributors and their github links.'
       },
       {
           type: 'input',
           name: 'instructions',
           message: 'Provide test instructions about your project.'
       },
      {   
          type: 'checkbox',
          name: 'license',
          message: 'Select repository license, e.g., MIT',
          choices: ['MIT', 'academic free', 'creative commons']
       },
   
  ];
  //initializing function
    function init() {
        inquirer.prompt(questions)
        .then((data) => {
            console.log(data);
                writeToFile(data);
        })

        
};
    
//function to generate markdown template with user input varibales
function generateMarkDown(data) {
return `# ${data.project}
          
## Table of Contents
* [Description](#Description)
* [Installation](#install)
* [Usage](#Purpose)
* [Contributing](#Contributors)
* [Tests](#Instructions)
* * [Licenses](#License)
    
## Description
${data.description}
      
## Installation
${data.install}
      
## Purpose
${data.purpose}
      
## Contributors
${data.contributors}
      
## Instructions
${data.instructions}
        
## License
${data.license}`           
        };

//function to create file using input information and template
        function writeToFile(data) {
            fs.writeFile("README.md", generateMarkDown(data, null, '\t'), (err) =>
                err ? console.log(err) : console.log('file created sucessfully'))   
        };

//calling init function
init(); 
