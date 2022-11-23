window.addEventListener('load',()=>{
    const form = document.querySelector('#form')
    const input = document.querySelector('#input')
    const list = document.querySelector('#task')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()

        const task = input.value;
        console.log(task)
        if(task.length===0){
            alert("Please Enter Valid Task")
            return;
        }
        const task_list = document.createElement('div');
        task_list.classList.add('task-container');

        const task_li= document.createElement('div');
        
        const task_input = document.createElement('input')
        task_input.classList.add('list-input')
        task_input.value = task
        task_input.setAttribute("readonly", "readonly")


        const task_edit = document.createElement('button')
        task_edit.classList.add("submit")
        task_edit.innerHTML = "edit"

        const task_delete = document.createElement('button')
        task_delete.classList.add("submit")
        task_delete.innerHTML = "delete"


        input.value = "";

        task_edit.addEventListener('click', ()=>{
            if(task_edit.innerText.toLowerCase() === 'edit')
            {
                task_input.removeAttribute('readonly');
                task_input.focus();
                task_edit.innerText= 'save'
            }
            else{
                task_input.setAttribute('readonly', 'readonly')
                task_edit.innerText = 'edit'
            }
        })

        task_delete.addEventListener('click', ()=>{
            list.removeChild(task_list)
        })

        task_li.appendChild(task_input)
        task_li.appendChild(task_edit)
        task_li.appendChild(task_delete)
        task_list.appendChild(task_li);
        list.appendChild(task_list)

    })
   
    console.log(form)
})
