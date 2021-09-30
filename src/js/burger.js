// let menuBtn = document.querySelector(".header__burger");
// let menu = document.querySelector(".content");
// menuBtn.addEventListener("click", () => {

//     menuBtn.classList.toggle("active");
//     menu.classList.toggle("active");

//     if (menu.classList.contains("active")) {
//         document.querySelector('header').style.overflow = "hidden";
//         menu.style.display = "grid";
//     } else {
//         document.querySelector('header').style.overflow = "";
//         menu.style.display = "none";
//     }
// });
document.addEventListener("DOMContentLoaded", (e) => {
    let body = document.body;
    let header = document.querySelector('.header__body');
    let menuBtn = document.querySelector(".header__burger");
    let menu = document.querySelector(".content");

    menuBtn.addEventListener('click', () => {
        body.classList.toggle('lock');
        header.classList.toggle('active');
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');

        if (menu.classList.contains('active')) {
            menu.style.display = 'grid';
            menu.style.animation = 'moveWindowLeft 0.3s 1';
            menu.style.left = '0';
        } else {
            menu.style.animation = 'moveWindowRight 0.3s 1';

            setTimeout(() => {
                menu.style.display = 'none';
            }, 300);
        }
    })
})
