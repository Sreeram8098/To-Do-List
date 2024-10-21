const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


function addTask() {
    const taskValue = taskInput.value.trim();
    
    if (taskValue !== "") {
        const li = document.createElement('li');
        li.textContent = taskValue;
        

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.style.marginRight = '10px';
        
       
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        
      
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        
       
        taskList.appendChild(li);
        

        taskInput.value = "";

       
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
    } else {
        alert("Please enter a task");
    }
}


addBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});