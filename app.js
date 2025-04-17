var taskList = document.getElementById("taskList");

function createTask() {
  var input = document.getElementById("input");
  if (!input.value) {
    var notification = document.getElementById("notification");
    notification.style.display = "block";
    notification.innerHTML = "Please Enter Value First...";

    setTimeout(function () {
      notification.style.display = "none";
    }, 3000);
    return;
  }

  // Create Li Element
  var task = document.createElement("li");
  task.className = "task";

  // Create Sapn in li For Text

  var taskText = document.createElement("span");
  taskText.innerHTML = input.value;
  task.append(taskText);

  // Create Delete Button

  var delBtn = document.createElement("button");
  delBtn.innerHTML = '<i class="fas fa-trash"></i>';
  delBtn.setAttribute("onclick", "deleteTask(this)");

  // Create Edit Button
  var editBtn = document.createElement("button");
  editBtn.innerHTML = '<i class="fas fa-edit"></i>';
  editBtn.setAttribute("onclick", "editTask(this)");

  // Create Complete Button
  var CompleteBtn = document.createElement("button");
  CompleteBtn.innerHTML = `<i class="fas fa-check"></i>`;
  CompleteBtn.setAttribute("onclick", "completedTask(this)");

  task.append(editBtn);
  task.append(delBtn);
  task.append(CompleteBtn);

  taskList.append(task);
  input.value = "";
}

function deleteTask(delBtn) {
  delBtn.parentNode.remove();
}

function editTask(editBtn) {
  var li = editBtn.parentNode; 
  var taskText = li.querySelector("span");
  var currentText = taskText.textContent;

  var editValue = prompt("Please Enter Edit Value...", currentText);

  if (!editValue) {
    alert("Please enter a valid value");
    return;
  }

  taskText.textContent = editValue;
}


function completedTask(CompleteBtn) {
  var span =
    CompleteBtn.previousElementSibling.previousElementSibling
      .previousElementSibling;
  span.classList.add("liLine");
  console.log(span);
}
