function getIssues() {
  return fetch('https://api.github.com/repos/ju-zp/javascript-fetch-lab/issues',{
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}

function showIssues(json) {
}

function createIssue() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const postData = { title: title, body: body };
  return fetch('https://api.github.com/repos/ju-zp/javascript-fetch-lab/issues',{
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues());
}

function showResults(json) {
  const resultEl = document.querySelector("#results");
  for(const data of json){
    const link = document.createElement('a');
    link.href = data.html_url;
    link.text = data.full_name;
    resultEl.appendChild(link);
    resultEl.innerHTML += "<br>";
  }
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  return fetch(`https://api.github.com/repos/${repo}/forks`,{
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
