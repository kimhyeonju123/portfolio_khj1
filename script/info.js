// 헤더 변수
const ham_btn = document.querySelector(".ham_btn");
const menuOn = document.querySelector(".menuOn");
const x_btn = document.querySelector(".x_btn");

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