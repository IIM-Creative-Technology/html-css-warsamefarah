$(document).ready(function(){
    $('.chkbtn').click(function(){
        $('ul').toggleClass('show')
    });
});


const button = document.querySelector('.btn2')

button.addEventListener('click', () => {

    const div = document.querySelector('main>div')
    div.style.display = 'none'

    document.querySelector('main').innerHTML = "<h1>À voté ! Bonne chance :)</h1>"
})
