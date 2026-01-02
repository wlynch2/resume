    document.getElementById('fetchBtn').addEventListener('click', async function() {
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos');
        let data = await response.json();

        console.log('Fetched data:', data); // debug log

        let todoList = document.getElementById('todoList');
        todoList.innerHTML = ''; // Clear previous results

        data.slice(0, 10).forEach(todo => {
          let li = document.createElement('li');
          li.textContent = todo.title;
          todoList.appendChild(li);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });