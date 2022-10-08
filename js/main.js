   // AXIOS GLOBALS
    axios.defaults.headers.common['X-Auth-Token'] =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    
    function getTodos() {

    //first way
    // axios({
    //     method: "get",
    //     url: "https://jsonplaceholder.typicode.com/todos",
    //     params: {_limit:5}
    // })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));

    //second way
    //axios
    //     .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    //     .then(res => showOutput(res))
    //     .catch(err => console.error(err));

    //third way
        axios.get("https://jsonplaceholder.typicode.com/todos", {params: {_limit:5}})
        .then(res => showOutput(res))
        .catch(err => console.error(err));

    }

  

  // POST REQUEST
       function addTodo() {

//     axios.post("https://jsonplaceholder.typicode.com/todos", {"title": "do coding",
//     "completed": false})
//     .then(res => showOutput(res))
//     .catch(err => console.error(err))

    axios({
        method: "post",
        url: "https://jsonplaceholder.typicode.com/todos",
        data: {"title": "do coding",
        "completed": false}
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err))
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios
        .patch("https://jsonplaceholder.typicode.com/todos/1", {
            title: "updatedtodo",
            completed: true
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err))
    }
  
  // DELETE REQUEST
  function removeTodo() {
    axios
        .delete("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => showOutput(res))
        .catch(err => console.error(err))
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    console.log('Simultaneous Request');
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    console.log('Custom Headers');
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }

  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }


// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('put').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('simrequest').addEventListener('click', getData);
document.getElementById('customheaders').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('errorhandling').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);