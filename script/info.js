// 헤더 변수
const gnb_li = document.querySelectorAll("#gnb>li");
const section = document.querySelector("section");

// 헤더 부분
gnb_li.forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
        const sub = e.currentTarget.querySelector(".sub");
        let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
        // console.log(isBlock);
        sub.style.height = "0";

        if (isBlock == "none") {
            sub.style.display = "block";
            let subHeight = sub.scrollHeight;
            // console.log(subHeight); 
            sub.style.height = subHeight + "px";
        }
    });
});
gnb_li.forEach((el) => {
    el.addEventListener("mouseleave", (e) => {
        const sub = e.currentTarget.querySelector(".sub");
        let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
        sub.style.height = "0";

        if (isBlock == "block") {
            sub.style.display = "0";
            sub.addEventListener("transitionend", function end() {
                sub.removeEventListener("transitionend", end);

                sub.style.display = "none";
            });
        }
    });
});
