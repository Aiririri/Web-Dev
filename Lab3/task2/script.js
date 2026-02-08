'use strict';

const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

const createTaskElement = (taskText) => {
  const listItem = document.createElement('li');
  listItem.className = 'task-item';

  const taskContent = document.createElement('div');
  taskContent.className = 'task-content';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskLabel = document.createElement('span');
  taskLabel.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-btn';
  deleteButton.setAttribute('aria-label', 'Delete task');

  deleteButton.innerHTML = `
   <svg
     xmlns="http://www.w3.org/2000/svg"
     width="18"
     height="18"
     viewBox="0 0 24 24"
     fill="currentColor">
     <path d="M9 3V4H4V6H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6Z"/>
   </svg>
`;

  
  checkbox.addEventListener('change', () => {
    taskLabel.classList.toggle('completed');
  });

  
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(listItem);
  });

  taskContent.appendChild(checkbox);
  taskContent.appendChild(taskLabel);

  listItem.appendChild(taskContent);
  listItem.appendChild(deleteButton);

  return listItem;
};

const handleAddTask = (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const newTask = createTaskElement(taskText);
  taskList.appendChild(newTask);

  taskInput.value = '';
  taskInput.focus();
};

todoForm.addEventListener('submit', handleAddTask);
