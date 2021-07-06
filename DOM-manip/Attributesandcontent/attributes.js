console.log(document); // It refers to whole document 
// console.log(document.getElementsByClassName('para')) // It refers to element by class name ,
// document.getElementsByClassName('para')[1]  --- It refers to second element 
// p2.innerText -- Gives only the text
// p2.innerHTML -- Gives the HTML without tags
//p2.outerHTML --- Gives the HTML with tags

// p2.innerText = 'Some new data' --- It changes the data 
//p2.innerText = "Hello <b> bold </b> data " -- It outputs as it is for to apply html next line refer
// p2.innerHTML='Hello <b>bold</b> data" o/p -- Hello bold data 
// p2.getAttribute('id') ----- Gives the id which is p2
//p2.getAttribute('class')  ---- Gives the class which is para
//p2.setAttribute('contenteditable',true)  -- It allows to edit data on browser
// p2.setAttribute('spellcheck',false) -- It removes the spell check
/* let i=document.getElementById('inpbox') 
 i.value -- Gives in case of user input the value which user is entering 
 i.validity -- check the value inside box is valid or not 
 */

