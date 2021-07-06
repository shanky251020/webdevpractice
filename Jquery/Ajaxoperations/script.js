
$(()=>{ 
let list = $('#people')
$('#fetch').click(function(){
$.get(`https://reqres.in/api/users?page=2`,(data)=>{     // for asynchronous call back function
for(let p of data.data)
{
    list.append(
       
        $(`<li>
        <img width='200' src="${p.avatar}">
        ${p.first_name}
        </li>`)
    )
}
})
})


})