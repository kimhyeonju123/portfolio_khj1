// 헤더 변수
const ham_btn = document.querySelector(".ham_btn");
const menuOn = document.querySelector(".menuOn");
const x_btn = document.querySelector(".x_btn");

// 슬라이드 변수
const frame = document.querySelector(".frame");
const articles = frame.querySelectorAll("article");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const opens = frame.querySelectorAll(".open");
const closes = frame.querySelectorAll(".close");

// 뉴스 변수
const btnNews = document.querySelectorAll("#news>.inner>.wrap>nav>a");
const boxNews = document.querySelectorAll("#news>.inner>.wrap>div");
const newsHone = document.querySelectorAll("#news>.inner>h1");

// 배너 변수
const banner = document.querySelector("#banner");
const panels = banner.querySelectorAll(".panel>li");
const len = panels.length - 1;
let num = 0;
let timer = null;
const interval = 5000;

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

// 배너부분
startRolling();

function startRolling() {
    timer = setInterval(rolling, interval);
    active(num);
}

function active(index) {
    document.querySelector(".panel>li.on").classList.remove("on");
    panels[index].classList.add("on");
    num = index;
}

function rolling() {
    if (num < len) {
        num++;
    } else {
        num = 0;
    }
    active(num);
}



// 슬라이드 부분
for (let i = 0; i < 2; i++) {
    frame.prepend(frame.lastElementChild);
}
next.addEventListener("click", () => {
    frame.append(frame.firstElementChild);
})
prev.addEventListener("click", () => {
    frame.prepend(frame.lastElementChild);
})
opens.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.target.closest("article").classList.add("on");
        for (let ele of articles) !ele.classList.contains("on") && ele.classList.add("hide");
    })
})

closes.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.target.closest("article").classList.remove("on");
        for (let el of articles) el.classList.remove("hide");
    })
})

// 뉴스부분
btnNews.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        // 버튼 on
        document.querySelector("#news>.inner>.wrap>nav>a.on").classList.remove("on");
        btnNews[index].classList.add("on");

        // 박스 on
        document.querySelector("#news>.inner>.wrap>div.on").classList.remove("on");
        boxNews[index].classList.add("on");

        //h1 on
        document.querySelector("#news>.inner>h1.on").classList.remove("on");
        newsHone[index].classList.add("on");

        setTimeout(() => {
            document.querySelector("#news>.inner>.wrap>div.active").classList.remove("active");
            boxNews[index].classList.add("active");
        }, 0);
    })
})
