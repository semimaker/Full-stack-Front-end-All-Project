//DOM오소 연결을 시켜줘야 한다.
const screen = document.getElementById("screen");//태그 1개만을 가져와서 변수에 담는다.
const buttons = document.querySelectorAll("button");//태그 여러 개를 리스트 형태로 변수에 담는다.

//let currentInput = ""; //아무것도 없음.

const operatorRegex = /^(\d+|\*\*|[+\-*/])$/; //사칙연산자 정규표현식
const numberRegex = /[0-9]/g; //숫자를 구별하는 정규표현식

function appendToScreen(value){
    screen.value += value;
}//input 태그 화면에 숫자 또는 연산자를 추가하는 함수

//화면 초기화 함수
function clearScreen(){
    screen.value = "";//빈 인풋값.
}

//연산 수행 함수 
function calculate(operator, numbers){
    const [num1, num2] = numbers.map(Number);
    //numbers에다가 배열로 된 데이터들을 넣을 거임.(숫자와 연산자.)
    //numbers.map(Number); => Number안에 있는 배열데이터를 숫자화.

    switch(operator){
        case "+": return num1 + num2;
        case  "-":return num1 - num2;
        case "*":return num1 * num2;
        case "/": return num2 !== 0 ? num1 / num2 : "Error"; 
            //삼항조건식
            //num2 !=(True), num1/num2;
            //num2 != 0, False;
        default:
            return "";
    }        
}

//버튼 클릭하는 함수를 처리한다.
function handleButtonClick(event){
    console.log(event);
    event.preventDefault(); //새로고침 방지.
    const buttonText = event.target.innerText;

    if(numberRegex.test(buttonText)==true){
        appendToScreen(buttonText);
    }else if(operatorRegex.test(buttonText)==true){
        appendToScreen(buttonText);
    }
}

function initializeButtonListeners(){
    buttons.forEach((button)=>{
     button.addEventListener("click",handleButtonClick);
     //console.log(buttonCheck);   
    })
}

//계산기 기능 실행
initializeButtonListeners();

function handleResultClick(){
   const screenValue = screen.value;

   if(screenValue.includes("+")){
    const[num1, num2] = screenValue.split("+");
    screen.value = calculate("+",[num1, num2]);
   }else if(screenValue.includes("-")){
    const[num1, num2] = screenValue.split("-");
    screen.value = calculate("-",[num1, num2]);
   }else if(screenValue.includes("*")){
    const[num1, num2] = screenValue.split("*");
    screen.value = calculate("*",[num1, num2]);
   }else if(screenValue.includes("/")){
    const[num1, num2] = screenValue.split("/");
    screen.value = calculate("/",[num1, num2]);
   }
}

//초기화 버튼을 클릭시 화면을 초기화하는 기능을 만들어줄께요.
document.getElementById("resetButton").addEventListener("click", function(){
    clearScreen();
})

//"=" 버튼 클릭시 계산 실행
document.getElementById("result").addEventListener("click", handleResultClick);


initializeButtonListeners();