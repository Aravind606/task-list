const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector(".collection");
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks');

loadeventlistener();

function loadeventlistener() {
  //add task
  form.addEventListener('submit', addTask);
  //remove task 
  // taskList.addEventListener('click', removeTask);
  //clear task
  clearBtn.addEventListener('click', clearTask);
  //filter task
  filter.addEventListener('keyup', filterTask);
  //selected task
  taskList.addEventListener('click', selectedTask);
}


function addTask(e) {
  if (taskInput.value == '') {
    alert("add task");
  } else {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    //add remove icon
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = "fa fa-remove"><i>';
    li.appendChild(link);

    taskList.appendChild(li);

    taskInput.value = '';
    e.preventDefault();
    console.log(li);
    console.log(e.target);
  }

}
// var removecount = 0;

// function removeTask(e) {
//   if (e.target.parentElement.classList.contains('delete-item')) {
//     if (confirm('Are you Really want to remove')) {
//       e.target.parentElement.parentElement.remove();
//       console.log(e.target.parentElement.textContent);
//       removecount = 1;
//     }
//   }
//   if (removecount == 1) {
//     console.log("removed successfully");
//     removecount = 0;
//   }
//   // console.log(e.target);
// }

function clearTask(e) {
  //taskList.innerHTML = '';
  if (confirm('are you sure')) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
}

function filterTask(e) {
  var text = e.target.value.toLowerCase();
  var item = document.querySelectorAll('.collection-item');
  item.forEach(function (task) {
    var value = task.firstChild.textContent;
    //console.log(value);
    if (value.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })
  console.log(text);
}

function selectedTask(e) {
  console.log(e.target.parentElement.parentElement.textContent);
}