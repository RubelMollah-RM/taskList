// Define UI Element....

const form = document.querySelector('#task_form');
const taskAdd = document.querySelector('#task_input');
const filterTask = document.querySelector('#task_filter');
const taskList = document.querySelector('ul');
const clearAllTask = document.querySelector('#clear_all_task');


// Define Event Listener...

form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearAllTask.addEventListener('click', clearTask);




//Define Funection...

function addTask(e) {
    e.preventDefault();
    if (taskAdd.value === '') {
        // alert('At first enter a new task..');
    }
    else{
        let li = document.createElement('li');
        let taskInput = document.createTextNode(taskAdd.value + " ");
        li.appendChild(taskInput);
        taskList.appendChild(li);
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'X';
        link.style.textDecoration = 'none';
        link.style.backgroundColor = 'red';
        link.style.color = 'white';
        link.style.paddingLeft = '15px';
        link.style.paddingRight = '15px';
        link.style.paddingTop = '8px';
        link.style.paddingBottom = '8px';
        link.style.borderRadius = '5px';
        link.style.marginLeft = '10px';
        li.appendChild(link);
        taskAdd.value = '';
    }
};

//Remove task from list

function removeTask (e){
    if(e.target.hasAttribute('href')){
        if(confirm("Are you sure ?")){
            let element = e.target.parentElement;
            element.remove();
        }
    }
};

// Clear All Task...

function clearTask (e){
    taskList.innerHTML = " ";
}