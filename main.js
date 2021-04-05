const navSlide = () => {
    var menu = document.querySelector(".main-list");
    var menucontainer = document.querySelector(".menu-container");
    var open = document.querySelector(".open");
    var close = document.querySelector(".close");

    open.addEventListener('click', function() {
        menu.classList.add('main-list-active');
        menucontainer.classList.add('menu-container-active');
        close.style.display = "block";
        this.style.display = "none";
    });

    close.addEventListener('click', function() {
        menu.classList.remove('main-list-active');
        menucontainer.classList.remove('menu-container-active');
        open.style.display ="block";
        this.style.display = "none";
    });
}

navSlide();