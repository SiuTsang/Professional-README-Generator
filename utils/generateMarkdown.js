
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  # Description:
  ${data.description}

  # Installation:
  ${data.installation}

  # Usage:
  ${data.usage}

  # Contribution
  ${data.credits}

  # License
  ${data.license}

  # Features
  ${data.feature}
`;
}

module.exports = generateMarkdown;
