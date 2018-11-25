function getIssues() {const repo = 'javascript-fetch-lab';

const token = `e4d578c9675c96af08f90c581e0f83823ed63d1e`;

fetch(`/api.github.com/repos/spinosevic/${repo}/issues`, {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json())
    .then(json => showResults(json));

}

function showIssues(json) {
}

function createIssue() {
  const repo = 'javascript-fetch-lab';

  const token = `e4d578c9675c96af08f90c581e0f83823ed63d1e`;

  fetch(`/api.github.com/repos/spinosevic/${repo}/issues`, {
    method: /post/,
    title: "test",
    body: "test body",
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
      .then(json => showResults(json));

}

function showResults(json) {

}

function forkRepo() {


  const repo = 'learn-co-curriculum/javascript-fetch-lab';

  const token = `e4d578c9675c96af08f90c581e0f83823ed63d1e`;

  fetch(`/api.github.com/repos/${repo}/forks`, {
    method: /post/,
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
      .then(json => showResults(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
