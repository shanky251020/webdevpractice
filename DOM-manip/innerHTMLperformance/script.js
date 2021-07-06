window.onload = function()      //Fires immediately after the browser loads the object.
{
    let num = document.getElementById('num')
    let list = document.getElementById('list')
    let print = document.getElementById('print')
    // Now we have to check how much time it takes to print as per the performance check to do so use new date concept 
    // new Date() -- we gets the date with time
    // new Date().getTime() -- we gets the epoch time
    print.onclick = function()  // Fires when the user clicks the left mouse button on the object
    {
        let start = new Date().getTime()
        let n = parseInt(num.value) 
        // alternative
        let listHTML = ""
        for(let i =1;i<=n;i++)
        {
             listHTML += '<li>'+ i + '</li>' // We are not directly printing into dom , it improved the performance as we are just keeping the value and it is not printing again and again 
          //  list.innerHTML += '<li>' + i + '</li>' costly
          
        // below syntax boosts the performance
        /*  let item = document.createElement('li')
          item.innerText = i;
          list.appendChild(item); */
        }
        list.innerHTML = listHTML;
        console.log(new Date().getTime() - start)
     // Now we can see with larger input many things in our page gets slow 
     // Editing inner html is very costly because browser has to read and construct string again and again
    }
}