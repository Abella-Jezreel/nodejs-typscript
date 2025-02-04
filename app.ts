const num1Element = document.getElementById("num1")! as HTMLInputElement;
const num2Element = document.getElementById("num2")! as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

function add(a: number, b: number) {
  return a + b;
}

buttonElement.addEventListener("click", function () {
  const num1 = num1Element.value;
  const num2 = num2Element.value;

  const result = add(+num1, +num2);
  console.log(result);
});
