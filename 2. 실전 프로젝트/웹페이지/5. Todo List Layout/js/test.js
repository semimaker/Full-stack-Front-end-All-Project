let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let selectednumber = numbers.find(function (number) {
    console.log("number : " + number);
    return number % 3 === 0;
    //조건문을 적어주면 이를 만족하는 첫 요소부터 for loop로 만족.
}
);

console.log("sel number : " + selectednumber);