let sections = document.querySelectorAll("section");
let section_arr = Array.from(sections);
let lis = document.querySelectorAll("#scrollBtn>li");
let lis_arr = Array.from(lis);
let posArr = [0, 100, 1100, 2063, 2399];
// 푸터는 수작업
// console.log(posArr); //[0, 100, 1100, 2063, 3063]

window.addEventListener("scroll",()=>{
    let scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    console.log(scroll)
    section_arr.map((el, index)=>{
        if(scroll >= posArr[index]){
            for (const el of lis_arr) {
                el.classList.remove("on");
            }
            lis_arr[index].classList.add("on");
            for (const el of section_arr) {
                el.classList.remove("on");
            }section_arr[index].classList.add("on");
        }
    })
})
console.log(posArr.length);
console.log(posArr);

lis.forEach((el,index) => {
    el.addEventListener("click",()=>{
        window.scrollTo({top:posArr[index], behavior:"smooth"})
    }) 
});