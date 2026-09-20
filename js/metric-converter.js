// Function to execute Imperial / Metric conversions
function performConversion(event) {
  // Prevent page refresh on form submission
  event.preventDefault();

  // Capture numeric input value and convert using parseFloat()
  var rawValue = document.getElementById("convert-value").value;
  var numericValue = parseFloat(rawValue);

  // Target select element by tag name and get selected option value
  var selectElements = document.getElementsByTagName("select");
  var converterSelect = selectElements[0]; // First select on the form
  var selectedIndex = converterSelect.selectedIndex;
  var selectedConversion = converterSelect.options[selectedIndex].value;

  // Target output container
  var resultDisplay = document.getElementById("converter-result");

  // Validate numeric input
  if (isNaN(numericValue)) {
    resultDisplay.innerHTML = "Please enter a valid numeric value.";
    return;
  }

  var result = 0;
  var fromUnit = "";
  var toUnit = "";

  // Perform calculation based on selected index value
  if (selectedConversion == "1") {
    result = numericValue * 2.54;
    fromUnit = "inches";
    toUnit = "centimeters";
  } else if (selectedConversion == "2") {
    result = numericValue * 30.48;
    fromUnit = "feet";
    toUnit = "centimeters";
  } else if (selectedConversion == "3") {
    result = numericValue * 0.91;
    fromUnit = "yards";
    toUnit = "meters";
  } else if (selectedConversion == "4") {
    result = numericValue * 1.61;
    fromUnit = "miles";
    toUnit = "kilometers";
  } else if (selectedConversion == "5") {
    result = numericValue * 0.39;
    fromUnit = "centimeters";
    toUnit = "inches";
  } else if (selectedConversion == "6") {
    result = numericValue * 0.0328;
    fromUnit = "centimeters";
    toUnit = "feet";
  } else if (selectedConversion == "7") {
    result = numericValue * 1.09;
    fromUnit = "meters";
    toUnit = "yards";
  } else if (selectedConversion == "8") {
    result = numericValue * 0.62;
    fromUnit = "kilometers";
    toUnit = "miles";
  } else {
    resultDisplay.innerHTML = "Invalid conversion option selected.";
    return;
  }

  // Format to two decimal places and render using innerHTML
  if (fromUnit !== "" && toUnit !== "") {
    var formattedResult = result.toFixed(2);
    resultDisplay.innerHTML = numericValue + " " + fromUnit + " is " + formattedResult + " " + toUnit;
  }
}

// Attach event listener once DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  var convertBtn = document.getElementById("convert-btn");
  if (convertBtn) {
    convertBtn.addEventListener("click", performConversion);
  }
});