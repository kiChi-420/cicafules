fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => document.getElementById('content').innerHTML = JSON.stringify(json));