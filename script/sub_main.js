// 헤더 변수
const gnb_li = document.querySelectorAll("#gnb>li");

// 배너 변수
const prev = document.querySelector(".subPrev");
const next = document.querySelector(".subNext");
const page = document.querySelectorAll(".inner .page");
const indexx = page.length - 1;
console.log(indexx);


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

// 배너 부분
let idx = 0;
next.addEventListener("click",(e)=>{
    e.preventDefault();
    if (idx <= 3) {
        nextBtn();
    }else{
        return
    }
})
prev.addEventListener("click",(e)=>{
    e.preventDefault();
    if(idx >= 1){
        prevBtn();
    }else{
        return
    }
    
})

function nextBtn() {
    if(idx == 0){
        page[idx].classList.add("on");
        page[idx].style.zIndex = 0;
    }
    if(idx == 1){
        page[idx].classList.add("on");
        page[idx].style.zIndex = 1;
    }
    if(idx == 2){
        page[idx].classList.add("on");
        page[idx].style.zIndex = 2;
    }
    if(idx == 3){
        page[idx].classList.add("on");
        page[idx].style.zIndex = 5;
    }
    idx++;
}

function prevBtn() {
    idx--;
    if(idx == 0){
        page[idx].classList.remove("on");            
        page[idx].style.zIndex = 1;
    }
    
    if(idx == 1){
        page[idx].classList.remove("on");
        page[idx].style.zIndex = 0;
    }
    if(idx == 2){
        page[idx].classList.remove("on");
        page[idx].style.zIndex = -1;
    }
    if(idx == 3){
        page[idx].classList.remove("on");
        page[idx].style.zIndex = -2;
    }
}
