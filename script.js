let answer = "";

let display = document.getElementById("display");

display.focus();

document.addEventListener("click", () => {
    display.focus();
});

function addNumber(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  let display = document.getElementById("display");

  answer = eval(display.value);

  display.value = answer;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");

  display.value = display.value.slice(0, -1);
}

function showAnswer() {
  document.getElementById("display").value += answer;
  console.log(display.value);

}

 display.addEventListener("keydown", (event) => {
   if (event.key === "Escape") {
     clearDisplay();
   }
 });

 document.addEventListener("keydown", (event) => {
     if (event.key === "Enter") {
         calculate();
      }

      console.log(event.key);

       if (
        !("0123456789+-*/.".includes(event.key)) &&
        event.key !== "Enter" &&
        event.key !== "Backspace" &&
        event.key !== "Escape"
    ) {
        event.preventDefault();
        display.focus();
    }
  });



