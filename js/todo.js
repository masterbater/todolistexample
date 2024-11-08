async function fetchTasks() {
  const response = await fetch("api.php");
  const tasks = await response.json();
  document.getElementById("tasksContainer").innerHTML = tasks
    .map(
      (task) => `
        <div class="flex justify-between items-center p-2 border-b">
            <div>
                <input type="checkbox" ${
                  task.completed ? "checked" : ""
                } onclick="toggleComplete(${task.id}, ${
        task.completed ? 0 : 1
      })">
                <span class="${task.completed ? "line-through" : ""}">${
        task.name
      } (Priority: ${task.priority})</span>
            </div>
            <button onclick="showDeleteModal(${
              task.id
            })" class="text-red-500">Delete</button>
        </div>
    `
    )
    .join("");
}

async function addTask() {
  const name = document.getElementById("taskName").value;
  const priority = document.getElementById("taskPriority").value;

  // Validate that task name is not empty
  if (!name) {
    document.getElementById("errorMessage").classList.remove("hidden");
    return;
  }

  document.getElementById("errorMessage").classList.add("hidden");

  try {
    await fetch("api.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `name=${name}&priority=${priority}`,
    });
    fetchTasks();
    document.getElementById("taskName").value = "";
  } catch (error) {
    console.error("Error adding task:", error);
  }
}

async function deleteTask(id) {
  await fetch(`api.php?id=${id}`, { method: "DELETE" });
  fetchTasks();
}

async function toggleComplete(id, completed) {
  await fetch("api.php", {
    method: "PUT",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `id=${id}&completed=${completed}`,
  });
  fetchTasks();
}

let taskIdToDelete = null;

// Show the delete confirmation modal
function showDeleteModal(taskId) {
  taskIdToDelete = taskId;
  document.getElementById("deleteModal").classList.remove("hidden");
}

// Cancel the delete action
document.getElementById("cancelDelete").addEventListener("click", function () {
  document.getElementById("deleteModal").classList.add("hidden");
  taskIdToDelete = null;
});

// Confirm and delete the task
document
  .getElementById("confirmDelete")
  .addEventListener("click", async function () {
    if (taskIdToDelete !== null) {
      await fetch(`api.php?id=${taskIdToDelete}`, { method: "DELETE" });
      fetchTasks();
      document.getElementById("deleteModal").classList.add("hidden");
      taskIdToDelete = null;
    }
  });

document.addEventListener("DOMContentLoaded", fetchTasks);
