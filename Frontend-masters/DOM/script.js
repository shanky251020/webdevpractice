// The way that JavaScript and HTML/CSS interact with each other is a thing called the DOM, the document object model.
window.onload=function(){
const redSquare = document.querySelector('.red-square');
  redSquare.style.backgroundColor = 'limegreen';
  
}

/*We called a method on document. document is a globally available variable in the browser that you use to interact with the HTML and CSS. It a lot of methods that you can use. In this case, we're using the querySelector in which you pass in a CSS selector and it returns to you the first one of that matches selector that it finds (if you have many of them on the page, you get just the first one 
From there, we have a JavaScript pointer to the div.red-square tag stored in the redSquare variable which means we can start manipulating it.
We then use the style object which represents all the CSS styles that are being applied to that object at that time.
We then set the backgroundColor of that element. Notice it is backgroundColor and not background-color (camelCasing vs kebab-casing). This is how you interact with CSS via JavaScript. Anything that's kebab-cased like padding-right becomes camelCased, like paddingRight. While annoying, it'd be even more annoying if they didn't switch it since everything in JavaScript is camelCased.
We then just assign that to be whatever value we want. This works with any CSS property, eg: tag.style.marginBottom = '50px'.    
    */


// Here is a combined HTMl , css , js code below first of all it will not work(because it is js file) i just copied it because of the just remembering that these are the things 
/*
<ul>
  <li class="js-target">Unchanged</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
</ul>
<script>
  const elementsToChange = document.querySelectorAll('.js-target');
  for (let i = 0; i < elementsToChange.length; i++) {
    const currentElement = elementsToChange[i];
    currentElement.innerText = "Modified by JavaScript!";
  }
</script>

o/p
Modified by JavaScript!
Modified by JavaScript!
Won't Change
Modified by JavaScript!
Won't Change
Modified by JavaScript!
*/


// Event listeners 
//Event listener
/* const button = document.querySelector('.button')
button.addEventListener('click',function(){
    alert("Hey you just clicked me ")
}) */

/*
We grab the button via querySelector and store it in the JavaScript variable button.
We then call the addEventListener method on the button. This takes two parameters (no need to memorize this, you can always look it up): the name of the event you want respond to, which in this case is the click event, and a function that is called whenever that event happens. This function is often called a callback because it gets called back whenever the event happens.
We then call a function called alert. alert is a super, super annoying function that pops up a dialog window with whatever you call it with.
People often get confused seeing }); on the last line. The first } is closing the function, the second ) is closing the function call of addEventListener, and the ; ends the statement.
*/

/*  -- here is just another thing -- have a look - HTML ,css , js but remember it wont work in script.js file for faster rememebering of code i just pasted it it's not a good practice 
<input placeholder="type into me!" class="input-to-copy" />
<p class="p-to-copy-to">Nothing has happened yet.</p>
<script>
  const input = document.querySelector('.input-to-copy');
  const paragraph = document.querySelector('.p-to-copy-to');

  input.addEventListener("keyup", function() {
    paragraph.innerText  = input.value;
  });
</script>
*/

// Event Bubbling or delegation 

/*If you have a bunch of elements that you need to listen for events on, you could attach an event listener to each but that's a bit tedious to do. Instead what is sometimes easier to do is to use what's called event bubbling. When event fires on an element, after that "bubbles" up to its parent, and then its parent, and its parent, etc. until it's at the root element. */

/*
<div class="button-container">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
</div>
<script>
  document.querySelector('.button-container').addEventListener('click', function(event) {
    alert(`You clicked on button ${event.target.innerText}`);
  });
</script>

*/
