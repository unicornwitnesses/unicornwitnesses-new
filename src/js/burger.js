let menuBtn = document.querySelector(".header__burger");
let menu = document.querySelector(".content");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");

    menu.classList.contains("active") ?
        (menu.style.display = "grid") :
        (menu.style.display = "none");

    document.getElementsByTagName("body")[0].style.overflow = "hidden";
});
