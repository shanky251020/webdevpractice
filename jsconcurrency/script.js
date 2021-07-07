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

helloSayer(3,'Arnav')
helloSayer(4,'Prateek')
module.exports={
    helloSayer
}

/*
Hello Arnav
Hello prateek
Hello Arnav
Hello Prateek
Hello Arnav
Hello Prateek
Hello prateek
*/