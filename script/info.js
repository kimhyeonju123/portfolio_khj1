// 헤더 변수
const gnb_li = document.querySelectorAll("#gnb>li");
const section = document.querySelector("section");

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