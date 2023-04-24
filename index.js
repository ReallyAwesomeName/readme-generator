const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Provide a brief description of your project",
    },
    {
      type: "input",
      name: "installationInstructions",
      message: "Provide a brief explanation of how to install your project",
    },
    {
      type: "input",
      name: "usageInstructions",
      message: "Provide a brief explaination of how to use your project",
    },
  ])
  .then((data) => {
    // const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

    fs.writeFile(`./test_dir/README.md`, buildReadme(data), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

function buildReadme(data) {
  const readmeTemplate = `# ${data.projectTitle}

## Description

${data.projectDescription}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)

## Installation

${data.installationInstructions}

## Usage

${data.usageInstructions}
`;
  return readmeTemplate;
}
