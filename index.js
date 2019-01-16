/*jshint esversion: 6 */

function showRepositories() {
  const res = JSON.parse(this.responseText);
  console.log(res);
  const repoList = `<ul>${res
    .map(r => '<li>' + r.name + '</li>')
    .join('')}</ul>`;


  document.getElementById('repositories').innerHTML = repoList;
}


function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}
