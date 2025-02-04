var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var buttonElement = document.querySelector("button");
var numResults = [];
var textResults = [];
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return +a + +b;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener("click", function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result1 = add(num1, num2);
    var result2 = add(+num1, +num2);
    numResults.push(result1);
    textResults.push(result2);
    printResult({ val: result1, timestamp: new Date() });
    console.log(result1);
    console.log(result2);
    console.log(numResults, textResults);
});
