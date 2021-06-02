const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
  .prompt([
    {
      name: 'Name',
      message: 'What is your name?',
      type: 'input'
    }
  ])
  .then (answers => {
    console.log(`Answer is: ${chalk.blue(answers.Name)}`)
  })
  .catch(err => console.error(err))