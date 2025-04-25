document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Form submitted successfully!");
    this.reset();
  });

  // To-Do List with Local Storage
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  function renderTodos() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${todo}
        <button class="delete-btn" onclick="deleteTask(${index})">✖</button>
      `;
      list.appendChild(li);
    });
  }

  function addTask() {
    const input = document.getElementById("todoInput");
    const value = input.value.trim();
    if (value) {
      todos.push(value);
      localStorage.setItem("todos", JSON.stringify(todos));
      input.value = "";
      renderTodos();
    }
  }

  function deleteTask(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
  }

  renderTodos();