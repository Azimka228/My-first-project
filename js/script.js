
window.addEventListener('scroll', () => {
    let ScrollDistance = window.scrollY;



    document.querySelectorAll("section").forEach((el, i) => {
        if (el.offsetTop - document.querySelector(".header_nav").clientHeight <= ScrollDistance) {
            document.querySelectorAll(".header_nav a").forEach((el) => {
                if (el.classList.contains("active")) {
                    el.classList.remove("active");
                }
            });

            document.querySelectorAll(".header_nav li")[i].querySelector("a").classList.add("active")
        }
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const prev = document.getElementById('btn_prev'),
        next = document.getElementById('btn_next'),
        slides = document.querySelectorAll('.main_content'),
        Main = document.querySelector('.main'),
        PTags = document.querySelectorAll(".tag");

    let index = 0;
    const activeSlide = n => {
        for (slide of slides) {
            slide.classList.remove('selected');

        }
        slides[n].classList.add('selected');
    }

    const nextSlide = () => {
        if (index == slides.length - 1) {
            index = 0;
            activeSlide(index);

        } else {
            index++;
            activeSlide(index);
        }
    }
    const prevslide = () => {
        if (index == 0) {
            index = slides.length - 1;
            activeSlide(index);
        } else {
            index--;
            activeSlide(index);
        }
    }
    next.addEventListener('click', nextSlide)
    prev.addEventListener('click', prevslide)
    /* slider bg*/
    document.querySelector('.main__arrow-right').onclick = function () {
        if (Main.classList.contains("main_bg")) {
            Main.classList.remove("main_bg")
        } else {
            Main.classList.add("main_bg")
        }
    }
    document.querySelector('.main__arrow-left').onclick = function () {
        if (Main.classList.contains("main_bg")) {
            Main.classList.remove("main_bg")
        } else {
            Main.classList.add("main_bg")
        }

    }

    /* chips */
    function func() {
        for (let i = 0; i < PTags.length; i ++){
            PTags[i].className = ("tag");
        }

        this.classList.add("tag_active");
    }

    for(let i = 0; i < PTags.length; i++){
        PTags[i].onclick = func;
    }
});