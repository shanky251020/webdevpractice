// In place of window.onload function in jquery we do like this

$(()=>{
$('#prepend').click(function(){
let text = $('#item').val()
$('#list').prepend(`<li>${text}</li>`)
})
$('#append').click(function(){
    let text = $('#item').val()
    $('#list').append(`<li>${text}</li>`)
    })
})