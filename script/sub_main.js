// 헤더 변수
const ham_btn = document.querySelector(".ham_btn");
const menuOn = document.querySelector(".menuOn");
const x_btn = document.querySelector(".x_btn");

// 배너 변수
const prev = document.querySelector(".subPrev");
const next = document.querySelector(".subNext");
const page = document.querySelectorAll(".inner .page");
const indexx = page.length - 1;
console.log(indexx);

// 헤더부분
ham_btn.addEventListener("click", (e) => {
    e.preventDefault();
    ham_btn.classList.add("del");
    x_btn.classList.add("on");
    menuOn.classList.add("on");
})

x_btn.addEventListener("click", (e) => {
    e.preventDefault();
    x_btn.classList.remove('on');
    ham_btn.classList.remove("del");
    menuOn.classList.remove("on");
})

// 배너 부분
let idx = 0;
next.addEventListener("click", (e) => {
    e.preventDefault();
    if (idx <= 3) {
        nextBtn();
    } else {
        return
    }
})
prev.addEventListener("click", (e) => {
    e.preventDefault();
    if (idx >= 1) {
        prevBtn();
    } else {
        return
    }

})

function nextBtn() {
    if (idx == 0) {
        page[idx].classList.add("on");
        page[idx].style.zIndex = 0;
    }
    if (idx == 1) {
        page[idx].classList.add("on");
        page[idx].style.zIndex = 1;
    }
    if (idx == 2) {
        page[idx].classList.add("on");
        page[idx].style.zIndex = 2;
    }
    if (idx == 3) {
        page[idx].classList.add("on");
        page[idx].style.zIndex = 5;
    }
    idx++;
}

function prevBtn() {
    idx--;
    if (idx == 0) {
        page[idx].classList.remove("on");
        page[idx].style.zIndex = 1;
    }

    if (idx == 1) {
        page[idx].classList.remove("on");
        page[idx].style.zIndex = 0;
    }
    if (idx == 2) {
        page[idx].classList.remove("on");
        page[idx].style.zIndex = -1;
    }
    if (idx == 3) {
        page[idx].classList.remove("on");
        page[idx].style.zIndex = -2;
    }
}
