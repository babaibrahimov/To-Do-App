function generate() {
    if(document.getElementById('taskInput').value.length == 0) {
        alert("Please Enter a Task");
    }
    else{
        document.getElementById('tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.getElementById('taskInput').value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;
    }
    
    
    var currentTasks = document.querySelectorAll(".delete");
    for (var i = 0; i< currentTasks.length; i++) {
        currentTasks[i].onclick = function() {
            this.parentNode.remove();
        }
    }
    document.getElementById('taskInput').value = ''
}
    
document.getElementById('add').onclick = generate