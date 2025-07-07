let display = document.getElementById("display");
let lastAnswer = ""; // stores last calculated result

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
    lastAnswer = result;
  } catch (e) {
    display.value = "Error";
  }
}

function useAns() {
  display.value += lastAnswer.toString(); // insert Ans into expression
}

// ✅ BONUS: Keyboard Support
document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    event.preventDefault(); // prevent form submission
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  } else if (key.toLowerCase() === "a") {
    useAns(); // Press 'a' key to trigger Ans
  }
});
