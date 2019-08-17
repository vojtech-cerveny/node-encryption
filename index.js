import inquirer from 'inquirer';
import { textTranformation, cipherNames } from './crypts/functions'

function inquirerInput(selected) {
  inquirer.prompt([
    {
      type: 'input',
      name: 'input',
      message: selected.mode == "Crypt my text!" ? "Type your text" : "Type your cipher",
    }
  ]).then(input => {
    const answers = {
      ...selected,
      ...input
    }
    console.log("Result: " + textTranformation(answers))
  });
}

inquirer.prompt([
  {
    type: 'list',
    name: 'crypt',
    message: 'What crypto do you want use?',
    choices: cipherNames
  },
  {
    type: 'list',
    name: 'mode',
    message: 'Do you want crypt or decrypt?',
    choices: [
      'Crypt my text!',
      'Decrypt cipher!'
    ]
  },
]).then(answers => {
  inquirerInput(answers);
});