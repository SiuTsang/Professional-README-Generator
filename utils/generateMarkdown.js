
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## URL
  [https://siutsang.github.io/${data.title}/](https://siutsang.github.io/${data.title}/)

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Features
  ${data.feature}
`;
}

module.exports = generateMarkdown;
