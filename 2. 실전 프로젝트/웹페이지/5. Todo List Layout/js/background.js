//이미지요소 제작
const backgrounding = document.createElement("img");
//이미지를 하나 만들고 백그라운드 변수 안에 반환.
backgrounding.src = "img/bg_img.jpg"; //이미지요소들을 포함
backgrounding.id = "backgroundImage";
document.body.appendChild(backgrounding);