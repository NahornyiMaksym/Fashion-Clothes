// $(document).ready(function () {
//
//     $('.owl-carousel').owlCarousel({
//         loop: true,
//         margin: 0,
//         nav: true,
//         navText: ['', ' '],
//         center: true,
//         responsive: {
//             0: {
//                 items: 2.5
//             },
//
//             1000: {
//                 items: 2.5
//             }
//         }
//     });
//
//
// });






const ulCarousel = document.querySelector('.ul-carousel');
console.log(ulCarousel.lastElementChild);

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

function slideLeft () {
    ulCarousel.prepend(ulCarousel.lastElementChild);
}

function slideRight () {
    ulCarousel.append(ulCarousel.firstElementChild);
}


arrowLeft.addEventListener('click', slideLeft);

arrowRight.addEventListener('click', slideRight);




