// 헤더 변수
const gnb_li = document.querySelectorAll("#gnb>li");

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

// 헤더 부분
gnb_li.forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
        const sub = e.currentTarget.querySelector(".sub");
        let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
        sub.style.height = "0";
        
        let back = document.querySelector(".back");
        back.style.height = "0";
        
        if (isBlock == "none") {
            sub.style.display = "block";
            back.style.display = "block";
            let subHeight = sub.scrollHeight;
            sub.style.height = subHeight + "px";
            back.style.height = subHeight + "px";
        }
    });
});
gnb_li.forEach((el) => {
    el.addEventListener("mouseleave", (e) => {
        const sub = e.currentTarget.querySelector(".sub");
        let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
        sub.style.height = "0";

        let back = document.querySelector(".back");
        back.style.height = "0";
        
        if (isBlock == "block") {
            sub.style.display = "0";
            sub.addEventListener("transitionend", function end() {
                sub.removeEventListener("transitionend", end);
                sub.style.display = "none";
                back.style.display = "none";
            });
        }
    });
});

// 배너부분
startRolling();

function startRolling() {
    timer = setInterval(rolling, interval);
    active(num);
}

function active(index) {
    for (let el of panels) el.classList.remove("on");
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
        for (const el of btnNews) {
            el.classList.remove("on");
        } el.classList.add("on");
        
        // 박스 on
        for (const el of boxNews) {
            el.classList.remove("on");
        }
        boxNews[index].classList.add("on");
        
        for (const el of newsHone) {
            el.classList.remove("on");
        }newsHone[index].classList.add("on");

        setTimeout(() => {
            for (let el of boxNews) el.classList.remove("active");
            boxNews[index].classList.add("active");
        }, 0);
    })
})
