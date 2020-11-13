$(document).ready(function () {
    // Object containing the validation rules
    var rules =
        {
            height: {
                required: true,
                number: true,
                digits: true,
                min: 59,
                max: 79
            },

            weight: {
                required: true,
                number: true,
                digits: true,
                min: 88,
                max: 353
            }
        };

    // Object containing the error messages
    var messages =
        {
            height: {
                required: "Please enter your height",
                number: "Only numbers allowed",
                digits: "No decimals allowed",
                min: "Enter a height between 59 and 79",
                max: "Enter a height between 59 and 79"
            },

            weight: {
                required: "Please enter your weight",
                number: "Only numbers allowed",
                digits: "No decimals allowed",
                min: "Enter a weight between 88 and 353",
                max: "Enter a weight between 88 and 353"
            }
        };


    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: rules,
            messages: messages
        }
    );


    var category;
    function runMyProgram() {
        /* Change the text of the <p> to
        state, for example, "You have registered Jane for grade 6 camp!"
        Use the name and grade the user provided in the form. */
        var height = parseInt($("#height").val());
        var weight = parseInt($("#weight").val());
        var BMI = (weight / (height * height)) * 703;
        BMI = parseFloat(BMI);

        if (BMI < 15)
        {
            category = "Very Severely Underweight";
        }
        else if (BMI >= 15 && BMI < 16)
        {
            category = "Severely Underweight";
        }
        else if (BMI >= 16 && BMI < 18.5)
        {
            category = "Underweight";
        }
        else if (BMI >= 18.5 && BMI < 25)
        {
            category = "Normal (Healthy Weight)";
        }
        else if (BMI >= 25 && BMI < 30)
        {
            category = "Overweight";
        }
        else if (BMI >= 30 && BMI < 35)
        {
            category = "Obese Class I (Moderately Obese)";
        }
        else if (BMI >= 35 && BMI < 40)
        {
            category = "Obese Class II (Severely Obese)";
        }
        else
        {
            category = "Obese Class III (Very Severely Obese)";
        }

        var BMI_DISPLAY = BMI.toFixed(1);
        $("#displayBMI").text(BMI_DISPLAY);
        $("#displayCategory").text(category);
    }
});