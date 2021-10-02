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

        if (window.screen.width <= 480) {
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
        }

        if (window.screen.width <= 1024 && window.screen.width >= 768) {
            if (menu.classList.contains('active')) {
                menu.style.display = 'grid';
                menu.style.animation = 'moveWindowLeft 0.3s 1';
                menu.style.left = '0';
            } else {
                menu.style.animation = 'moveWindowRight 0.3s 1';

                setTimeout(() => {
                    menu.style.display = 'grid';
                }, 300);
            }
        }
    })
})
