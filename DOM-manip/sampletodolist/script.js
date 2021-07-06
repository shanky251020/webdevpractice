window.onload = function(){
let addtask = document.getElementById('addtask')
let newtask = document.getElementById('newtask')
let todolist = document.getElementById('todolist')


addtask.onclick = function()
{
    
    /*
    todolist.innerHTML += '<p>${newtask.value}'</p>'
    */

   // This is high performance code we can do another way around but that is bit slow like above code.
    let li = document.createElement('li')
    li.innerText = newtask.value
    todolist.appendChild(li)

    let xbutton = document.createElement('button')  // lets create a remove element button
    xbutton.onclick = function(event)  // It takes a event 
    {
       console.log(event)    // We can check event by clicking on the xbutton
       event.target.parentElement.remove()  // This will remove the list item 
    }
    xbutton.innerText = '❌'
    li.appendChild(xbutton)
}
}
