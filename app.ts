const num1Element = document.getElementById("num1")! as HTMLInputElement;
const num2Element = document.getElementById("num2")! as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const numResults: Array<number> = [];
const textResults: Array<string> = [];

type NumOrString = number | string;
// The Result type is a union type that can hold either a number or a string, along with a timestamp.
type Result = { val: NumOrString; timestamp: Date };

// The ResultObj interface is used to define the structure of an object that holds a value
// (which can be a number or a string) and a timestamp.
interface ResultObj {
  val: NumOrString;
  timestamp: Date;
}

function add(a: NumOrString, b: NumOrString) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  }
  return +a + +b;
}

function printResult(resultObj: ResultObj) {
  console.log(resultObj.val);
}

buttonElement.addEventListener("click", function () {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result1 = add(num1, num2);
  const result2 = add(+num1, +num2);
  numResults.push(result1 as number);
  textResults.push(result2 as string);
  printResult({ val: result1 as number, timestamp: new Date() });
  console.log(result1);
  console.log(result2);
  console.log(numResults, textResults);
});
