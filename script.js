// Função para adicionar uma nova tarefa à lista
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var newTask = document.createElement('li');
        newTask.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="completeTask(this)">Concluir</button>
            <button onclick="deleteTask(this)">Excluir</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

// Função para marcar uma tarefa como concluída
function completeTask(element) {
    var task = element.parentElement;
    var taskText = task.querySelector('span');
    
    task.classList.toggle('completed');
    taskText.classList.toggle('strike');
}

// Função para excluir uma tarefa
function deleteTask(element) {
    var task = element.parentElement;
    task.classList.add('disintegrate');
    
    // Remover a tarefa após a conclusão da animação
    setTimeout(function() {
        task.remove();
    }, 500);
}
