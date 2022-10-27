const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const teamMembers = [];

const basicQuestions = [{
  type: 'input',
  name: 'name',
  message: 'What is the name? ',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter the name!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'id',
  message: 'What is the id? ',
  validate: idInput => {
    if (idInput) {
      return true;
    } else {
      console.log('Please enter the employee Id!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'email',
  message: 'What is the email? ',
  validate: emailInput => {
    if (emailInput) {
      return true;
    } else {
      console.log('Please enter the email!');
      return false;
    }
  }
}]
