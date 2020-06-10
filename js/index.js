
// why does this only list the first 30 repositories when I change "octocat" to "s-blais" or another user? Where is that limitation set? 

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/meg-gutshall/repos');
  req.send();
}

function showRepositories() {
  // note "this" context is set by the function that calls this function
  const repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(repo => 
      '<li>' + 
      repo.name + 
      ' - <a href="#" data-repo="' +
      repo.name +
      '" onclick="getCommits(this)">Get Commits</a></li>'
      )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  const name = el.dataset.repo; // from data-repo attribute in <a>
  const req = new XMLHttpRequest();
  req.addEventListener('load', showCommits);
  req.open('GET', 'https://api.github.com/repos/meg-gutshall/' + name + '/commits');
  req.send();
}

function showCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
      '<li><strong>' +
      commit.author.login +
      '</strong> -' +
      commit.commit.message +
      '</li>'
    )
  .join('')}</ul>`;
  document.getElementById("commits").innerHTML = commitsList;
}