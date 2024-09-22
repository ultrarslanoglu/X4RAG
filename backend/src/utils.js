// backend/src/utils.js
const axios = require('axios');

async function fetchGitHubData(query) {
  // GitHub API üzerinden veri alma
  const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
  return response.data.items.map(item => ({
    name: item.name,
    url: item.html_url,
    description: item.description,
  }));
}

module.exports = { fetchGitHubData };
