// Then let's create our getRepositories function and initiate our XHR request.
// function getRepositories() {
//   const req = new XMLHttpRequest()
//   req.open("GET", 'https://api.github.com/users/octocat/repos')
//   req.send()
// }

// The second part of XHR is handling the response once we've made the request. We do this by defining an event listener on the request to listen for the load event, which will tell us that the request is complete. We'll give this listener a callback function, which is simply a function that will get called when the event fires.
// function showRepositories(event, data) {
//   //this is set to the XMLHttpRequest object that fired the event
//   console.log(this.responseText)
// }


function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}


function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}

function getCommits(el) {
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  req.addEventListener("load", showCommits)
  req.open("GET", 'https://api.github.com/repos/octocat/' + name + '/commits')
  req.send()
}

function showCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("commits").innerHTML = commitsList
}
