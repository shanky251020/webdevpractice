function helloSayer(times,name){
let count =0;    
let loopid = setInterval(() => {
   count++;
   console.log('hello'+name)
   if(count==times)
   {
       clearInterval(loopid)
   } 
}, 100);

}

helloSayer(3,'Shashank')
helloSayer(4,'Arnav')
/* o/p
helloShashank
helloArnav
helloShashank
helloArnav
helloShashank
helloArnav
helloArnav
*/
module.exports={
    helloSayer
}

