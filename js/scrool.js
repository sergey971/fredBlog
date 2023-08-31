// document.addEventListener('DOMContentLoaded', function () {
//     const titleSection1 = document.querySelector('#section-1 h2');
//     const titleSection2 = document.querySelector('#section-2 h2');
//     const titleSection3 = document.querySelector('#section-3 h2');
//     const imgElements = document.querySelectorAll('.boxRight__list img');

//     function isElementInViewport(element) {
//         const rect = element.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     function updateArrows() {
//         if (isElementInViewport(titleSection1)) {
//             console.log('Title 1 is visible.');
//             // Здесь вы можете добавить код для поворота изображения влево для заголовка #section-1
//             imgElements[0].style.transform = 'rotate(-90deg)';
//         } else {
//             imgElements[0].style.transform = 'none';
//         }

//         if (isElementInViewport(titleSection2)) {
//             console.log('Title 2 is visible.');
//             imgElements[1].style.transform = 'rotate(-90deg)';
//             // Здесь вы можете добавить код для поворота изображения влево для заголовка #section-2
//         } else {
//             imgElements[1].style.transform = 'none';
//         }

//         if (isElementInViewport(titleSection3)) {
//             console.log('Title 3 is visible.');
//             imgElements[2].style.transform = 'rotate(-90deg)';
//             // Здесь вы можете добавить код для поворота изображения влево для заголовка #section-3
//         } else {
//             imgElements[2].style.transform = 'none';
//         }
//     }

//     window.addEventListener('scroll', updateArrows);

//     updateArrows(); // Вызов функции для установки начального состояния
// });

document.addEventListener('DOMContentLoaded', function () {
    const titles = document.querySelectorAll('h2');
    const imgElements = document.querySelectorAll('.boxRight__list img');

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateArrows() {
        titles.forEach((title, index) => {
            if (isElementInViewport(title)) {
                // console.log(`Title ${index + 1} is visible.`);
                imgElements[index].style.transform = 'rotate(-90deg)';
            } else {
                imgElements[index].style.transform = 'none';
            }
        });
    }

    window.addEventListener('scroll', updateArrows);

    updateArrows();
});

