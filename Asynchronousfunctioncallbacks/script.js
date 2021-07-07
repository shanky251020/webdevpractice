function helloSayer(times,name,donesaying){
    let count =0;    
    let loopid = setInterval(() => {
       count++;
       console.log('hello'+name)
       if(count==times)
       {
           clearInterval(loopid)
           donesaying()
       } 
    }, 100);
    
    }
    
    helloSayer(3,'Arnav',()=>{
      helloSayer(4,'Prateek')
    })

  /*  o/p --- Hello Arnav 
              Hello Prateek
              Hello Arnav
              Hello Prateek
              Hello Arnav
              Hello Prateek
              Hello Prateek

  */