const addBtn = document.getElementById('add-task');
const input = document.getElementById('input');
const taskContainer = document.getElementById('task-container');
const toggle = document.querySelector('.bx-chevrons-right');
const sidebar = document.querySelector('nav');

addBtn.addEventListener('click', () => {
    let task = document.createElement('div')
    task.classList.add("task")

    let li = document.createElement('li')
    li.innerText = `${input.value}`
    task.appendChild(li)

    if (input.value === "") {
        alert("請輸入內容!!!")
    } else {
        taskContainer.appendChild(task)
    }
    input.value = ""//輸入完重置

    let checkBtn = document.createElement('button')
    checkBtn.classList.add("checkBtn")
    checkBtn.innerHTML = `<i class="fa-regular fa-square"></i>`
    task.appendChild(checkBtn)

    let editBtn = document.createElement('button')
    editBtn.classList.add("editBtn")
    editBtn.innerText = `edit`
    task.appendChild(editBtn)

    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add("deleteBtn")
    deleteBtn.innerText = `del`
    task.appendChild(deleteBtn)

    let fixBtn = document.createElement('button')
    fixBtn.classList.add("fixBtn")
    fixBtn.innerText = `fix`
    task.appendChild(fixBtn)
    fixBtn.hidden = true

    checkBtn.addEventListener('click', () => {
        if (checkBtn.innerHTML === `<i class="fa-regular fa-square"></i>`) {
            checkBtn.innerHTML = `<i class="fa-regular fa-square-check"></i>`
            checkBtn.parentElement.style.backgroundColor = "darkgrey"
            checkBtn.style.backgroundColor = "red"
        } else {
            checkBtn.innerHTML = `<i class="fa-regular fa-square"></i>`
            checkBtn.parentElement.style.backgroundColor = "lightgrey"
            checkBtn.style.backgroundColor = "transparent"
        }
    });

    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentElement.remove()
    });

    editBtn.addEventListener('click', () => {
        let newinput = document.createElement('textarea')
        newinput.classList.add("textarea")
        let oldinput = li.innerText
        li.remove()
        newinput.value += oldinput
        deleteBtn.hidden = true
        editBtn.hidden = true
        fixBtn.hidden = false
        task.appendChild(newinput)
        
        fixBtn.addEventListener('click', () => {
            let currentinput = `${newinput.value}`
            newinput.remove()
            let newli = document.createElement('li')
            newli.innerText = currentinput
            task.appendChild(newli)
            deleteBtn.hidden = false
            editBtn.hidden = false
            fixBtn.hidden = true
        });
        
    })



});


toggle.addEventListener('click', () => {
    sidebar.classList.toggle("close");
});