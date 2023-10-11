// 배너 유튜브 변수
let vidList = document.querySelector(".vidList");
let key = "AIzaSyDaWo16cEje7ftd9bF_heih_RBi6QSU7EY";
//  베르나르 인터뷰 모음
let playlistId = "PLNCVsPGJtmt8lvwCwXTR31wX42XL2z3vn";
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}`;


// 배너 유튜브 부분

//ㅂㄹㄴㄹ
fetch(url)
    .then((data) => {
        return data.json();
    })
    .then((json) => {
        let items = json.items;
        let result = '';
        items.map((el) => {

            let title = el.snippet.title;
            if (title.length > 20) {
                title = title.substr(0, 20) + "...";
            }

            result += `
                <article>
                    <a href="${el.snippet.resourceId.videoId}" class="pic">
                        <img src="${el.snippet.thumbnails.medium.url}">
                    </a>

                    <div class="con">
                        <h2>${title}</h2>
                    </div>
                </article>
                `;
        })
        vidList.innerHTML = result;
    })

vidList.addEventListener("click", (e) => {

    e.preventDefault();

    if (!e.target.closest("a")) {
        return;
    }

    const vidId = e.target.closest("article").querySelector("a").getAttribute("href");

    let pop = document.createElement("figure");
    pop.classList.add("pop");

    pop.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${vidId}" frameborder = "0" width="100%" height="100%" allowfullscreen></iframe>
        <span class="btnClose">close</span>
    `;
    vidList.append(pop);
});

vidList.addEventListener("click", (e) => {
    const pop = vidList.querySelector(".pop");
    if (pop) {
        const close = pop.querySelector("span");
        if (e.target == close) pop.remove();
    }
})