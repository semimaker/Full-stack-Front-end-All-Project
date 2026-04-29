/*버튼이 눌렸을 때 콜백을 하겠다는 기능. (팝업 기능)*/
const loginform = document.querySelector("#loginform");/*입력란에 아무것도 입력되지 않으면 error 전달.*/
const loginInput = document.querySelector("#loginform input"); //html의 요소를 가져옴.
const greetingHeader = document.querySelector("#greeting");
loginform.addEventListener("submit", getName);
/*버튼이 눌렸을 때 콜백을 하겠다는 기능. (팝업 기능)*/

/*로그인 창 및 버튼 출력 기능*/
function getName(event) {
    event.preventDefault();

    const username = loginInput.value; //로그인 인풋의 한 변수, 값이 여기로 반환.
    loginform.style.display = "none";
    //alert("username : " + username); 이름 입력시 이러한 내용으로 창 출력.

    greetingHeader.innerHTML = "안녕하세요!" + username + "님";

    localStorage.setItem("myusername", username); //입력된 이름 및 문장이 기억되도록 하기 위함.
}

/* 입력된 값을 지우고 다시 돌리는 과정. */
const stored_username = localStorage.getItem("myusername"); //myusername값을 const 쪽으로 받아오는 것;
if (stored_username === null) { } //stored_username이 없음
else {
    loginform.style.display = "none";
    greetingHeader.innerHTML = "안녕하세요!" + stored_username + "님";
}// 저장된 값을 Application - storage - local storage - file:/// 순으로 이동하여 삭제한 후 F5로 재실행.


/*자동적으로 글씨 띄어쓰기 알아서 조절
: file - prefrence - setting - 'format on save' - 체크박스 체크
DOCUMENT : <body>, <table> 등 여러 요소들을 포함하고 있으며, 
웹페이지에 관련된 모든 요소들을 골라서 사용 가능.
https://developer.mozilla.org/ko/docs/Web/API/Document
*/

