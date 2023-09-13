// de83d8100c1ab661b2edfb277fd1c2b9


var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
// 교통정보를 보게하는 버튼
const t = document.querySelectorAll(".traffic li");
console.log(t); //[li, li.on]
const t_on = document.querySelectorAll(".traffic li")[0]; //0번쨰 인덱스에 있는 거
// 교통정보 끄는 버튼
const t_off = document.querySelectorAll(".traffic li")[1];

var options = {
    center: new kakao.maps.LatLng(37.3848444, 126.858996), //지도의 중심좌표.
    level: 3
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴



t_on.addEventListener("click",(e)=>{
    e.preventDefault();
    if(t_on.classList.contains("on")) return;
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    t_on.classList.add("on");
    t_off.classList.remove("on");
})

t_off.addEventListener("click",(e)=>{
    e.preventDefault();
    if(t_off.classList.contains("on")) return;
    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);  
    t_off.classList.add("on");
    t_on.classList.remove("on");
})

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.3848444, 126.858996); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);