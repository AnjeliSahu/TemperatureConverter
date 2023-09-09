const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertToFButton = document.getElementById("convertToF");
const convertToCButton = document.getElementById("convertToC");

convertToFButton.addEventListener("click", () => {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9/5) + 32;
  fahrenheitInput.value = fahrenheit.toFixed(2);
});

convertToCButton.addEventListener("click", () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = (fahrenheit - 32) * 5/9;
  celsiusInput.value = celsius.toFixed(2);
});
