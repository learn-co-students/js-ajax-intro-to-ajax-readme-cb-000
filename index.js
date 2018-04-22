// Then let's create our getRepositories function and initiate our XHR request.
function getRepositories() {
  const req = new XMLHttpRequest()
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}

// The second part of XHR is handling the response once we've made the request. We do this by defining an event listener on the request to listen for the load event, which will tell us that the request is complete. We'll give this listener a callback function, which is simply a function that will get called when the event fires.
function showRepositories(event, data) {
  //this is set to the XMLHttpRequest object that fired the event
  console.log(this.responseText)
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}
