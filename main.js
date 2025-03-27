//carousel slick jquery
$('document').ready(function () {
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
})

//clique button rss
const button = document.querySelector('.menuButton')

button.addEventListener('click', () => {
    alert("Não há nada para ver aqui.")
})

// button.addEventListener('click', function(e){
//     e.preventDefault

//     let nome = prompt('Me fale qual seu nome')

//     if(nome == 'Marcelo'|| nome == 'marcelo'){
//         let confirma = confirm('Mereço um dez?')
//         if(confirma == true){
//             alert('Vlw fessor')
//         }else if(confirma != true){
//             alert('ai não')
//         }
//     }else if(nome == 'Davih' || nome == 'Leo'){
//         alert('É o brabo')
//     }else{
//         alert('O que se quer aq ')
//     }

// })
