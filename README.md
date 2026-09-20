 # Interactive Productivity Dashboard

 This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

 ## TODO: Future Enhancements
- [X] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [X] Add a weekly task goal calculator

## Weekly Task Goals
The Weekly Task Goals feature calculates a user's total weekly task targets by taking their expected daily goal, multiplying it across five standard workdays, and adding any additional weekly bonus tasks. Users input their details into the interactive form, and results are updated dynamically on the dashboard without reloading the page.

## Imperial/Metric Converter
The Imperial/Metric Converter is an interactive dashboard utility designed to convert measurements seamlessly between Imperial units and the Metric system. Users select a conversion and enter a measurement value to calculate conversions among inches, feet, yards, miles, centimeters, meters, and kilometers.

### Pseudocode
BEGIN MetricConverter
    // Step 1: Prompt the user to choose the conversion first
    DISPLAY "Select conversion type:
        1. Inches to Centimeters (cm)
        2. Feet to Centimeters (cm)
        3. Yards to Meters (m)
        4. Miles to Kilometers (km)
        5. Centimeters to Inches (in)
        6. Centimeters to Feet (ft)
        7. Meters to Yards (yd)
        8. Kilometers to Miles (mi)"
    INPUT selectedConversion

    // Step 2: Prompt the user for the numeric quantity
    DISPLAY "Enter the value to convert:"
    INPUT rawValue

    // Step 3: Convert input to a numeric value
    SET numericValue = CONVERT_TO_NUMBER(rawValue)

    // Step 4: Validate that input is a valid number
    IF numericValue IS NOT A NUMBER THEN
        DISPLAY "Please enter a valid numeric value."
    ELSE
        // Step 5: Evaluate conversion and calculate result
        IF selectedConversion EQUALS "Inches to Centimeters (cm)" THEN
            SET result = numericValue * 2.54
            SET fromUnit = "inches"
            SET toUnit = "centimeters"
        ELSE IF selectedConversion EQUALS "Feet to Centimeters (cm)" THEN
            SET result = numericValue * 30.48
            SET fromUnit = "feet"
            SET toUnit = "centimeters"
        ELSE IF selectedConversion EQUALS "Yards to Meters (m)" THEN
            SET result = numericValue * 0.91
            SET fromUnit = "yards"
            SET toUnit = "meters"
        ELSE IF selectedConversion EQUALS "Miles to Kilometers (km)" THEN
            SET result = numericValue * 1.61
            SET fromUnit = "miles"
            SET toUnit = "kilometers"
        ELSE IF selectedConversion EQUALS "Centimeters to Inches (in)" THEN
            SET result = numericValue * 0.39
            SET fromUnit = "centimeters"
            SET toUnit = "inches"
        ELSE IF selectedConversion EQUALS "Centimeters to Feet (ft)" THEN
            SET result = numericValue * 0.0328
            SET fromUnit = "centimeters"
            SET toUnit = "feet"
        ELSE IF selectedConversion EQUALS "Meters to Yards (yd)" THEN
            SET result = numericValue * 1.09
            SET fromUnit = "meters"
            SET toUnit = "yards"
        ELSE IF selectedConversion EQUALS "Kilometers to Miles (mi)" THEN
            SET result = numericValue * 0.62
            SET fromUnit = "kilometers"
            SET toUnit = "miles"
        ELSE
            DISPLAY "Invalid conversion option selected."
        END IF

        // Step 6: Format to two decimal places and display output
        SET formattedResult = FORMAT_DECIMAL(result, 2)
        DISPLAY numericValue + " " + fromUnit + " = " + formattedResult + " " + toUnit
    END IF
END MetricConverter

### Generated Logic
document.addEventListener("DOMContentLoaded", function () {
  var startBtn = document.getElementById("start-converter-btn");

  if (startBtn) {
    startBtn.addEventListener("click", function () {
      // Metric Converter
      // Step 1: Prompt user to choose the conversion
      var selectedConversion = prompt("Select conversion type:\n1. Inches to Centimeters (cm)\n2. Feet to Centimeters (cm)\n3. Yards to Meters (m)\n4. Miles to Kilometers (km)\n5. Centimeters to Inches (in)\n6. Centimeters to Feet (ft)\n7. Meters to Yards (yd)\n8. Kilometers to Miles (mi)");

      // Step 2: Prompt user for the numeric value
      var rawValue = prompt("Enter the value to convert:");

      // Step 3: Convert input to a numeric value
      var numericValue = Number(rawValue);

      // Step 4: Validate that input is a valid number
      if (isNaN(numericValue)) {
        alert("Please enter a valid numeric value.");
      } else {
        var result;
        var fromUnit = "";
        var toUnit = "";
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
          alert("Invalid conversion option selected.");
        }

        // Step 6: Format to two decimal places and display output
        if (fromUnit !== "" && toUnit !== "") {
          var formattedResult = Math.round(result * 100) / 100;
          alert(numericValue + " " + fromUnit + " = " + formattedResult + " " + toUnit);
        }
      }
    });
  }
});

