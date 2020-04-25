//Level 1

let arrOfTasks = [
    "Awake", 
    "Cleaning tooth",  
    "Breakfest",  
    "Go to work", 
    "Dinner", 
    "Work", 
];

let str = '';

for (let item of arrOfTasks){
    str = `${str}<li>${item}; <input id = "${item.replace(/\s/ig, '_')}" class="delBtn" type="button" value="x"></li>`;
}

let taskList = document.querySelector('.tasklist');
taskList.innerHTML = str;

const listElements = document.querySelectorAll("li"); // выбираем все элементы li в документе

const showHide = (element_id) => {
    if (document.getElementById(element_id)) { 
        var obj = document.getElementById(element_id); 
        if (obj.style.display != "block") { 
            obj.style.display = "block"; //Показываем элемент
        }
        else obj.style.display = "none"; //Скрываем элемент
    }
    else alert("Элемент с id: " + element_id + " не найден!"); 
}

const myFunc = (event) => {
    if(event.target.tagName === "LI") { 
        showHide(event.target.firstElementChild.id);
        let but = document.querySelector(`#${event.target.firstElementChild.id}`);
        but.addEventListener('click', () => {
            event.target.remove();
        } )
    }
};
    
taskList.addEventListener("mouseover", myFunc);
taskList.addEventListener("mouseout", myFunc);

//Add new Element Level 2
const newElement = () =>  {
    let newTask = document.querySelector('#taskInput').value;
    str = `${str}<li>${newTask}; <input id = "${newTask.replace(/\s/ig, '_')}" class="delBtn" type="button" value="x"></li>`;
    taskList.innerHTML = str;
}