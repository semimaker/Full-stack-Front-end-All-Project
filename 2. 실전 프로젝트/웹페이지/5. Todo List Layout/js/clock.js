const header2 = document.querySelector("#clock")

function updateClock() {

    //console.log("updateClock is called");

    const curtime = new Date(); // curtime에 Date를 삽입.
    const timeString =
        String(curtime.getHours()).padStart(2, "0") + ":"
        + String(curtime.getMinutes()).padStart(2, "0") + ":"
        + String(curtime.getSeconds()).padStart(2, "0");
    //연,월,일 다 가져옴.
    //alert(timeString); //현재 시간 받아옴.
    //console.log(timeString); //합당한 값을 확인하고 싶다.
    header2.innerHTML = timeString;
}
updateClock(); //시계 호출.
setInterval(updateClock, 1000); //1000 = 1초

