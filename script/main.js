// 슬라이드 변수
const frame = document.querySelector(".frame");
const section = document.querySelector("section"); //
const articles = frame.querySelectorAll("article");
let article_arr = Array.from(articles); //
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const opens = frame.querySelectorAll(".open");
const closes = frame.querySelectorAll(".close");

// 뉴스 변수
const btnNews = document.querySelectorAll("#news>.inner>.wrap>nav>a");
const boxNews = document.querySelectorAll("#news>.inner>.wrap>div");

// 슬라이드 부분
window.addEventListener("scroll",()=>{
    let scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    console.log(scroll);

    // article_arr.map((el, index)=>{
    //     if(scroll >= 1000){
    //         for (const el of article_arr) {
    //             el.classList.add("eee");
    //         }
    //     }
    // })
    console.log(section);
    if(scroll >= 850){ //
        section.classList.add("view");
    }else{
        section.classList.remove("view");
    }
    if(scroll > 1800){
        section.classList.remove("view");
    }
})

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
        
        setTimeout(() => {
            for (let el of boxNews) el.classList.remove("active");
            boxNews[index].classList.add("active");
        }, 0);
    })
})