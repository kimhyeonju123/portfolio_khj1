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

        for (let ele of articles)
            !ele.classList.contains("on") && ele.classList.add("hide");
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
        
        setTimeout(() => {
            for (let el of boxNews) el.classList.remove("active");
            boxNews[index].classList.add("active");
        }, 0);
    })
})