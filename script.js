function changeResult(contents) {
    document.getElementById("result").innerHTML = contents;
}
function determinePricing(age) {
    if (age == NaN || age == "" || isNaN(parseInt(age))) {
        return("Please enter a number.");
    } else if (age < 5) {
        return("You are considered an INFANT and can enter for free.");
    } else if (age <= 12) {
        return("You are considered a JUNIOR and can enter at a discounted price.");
    } else if (age == 16) {
        return("You are exactly sixteen! If you show a school ID, transcript, driver's license, etc., you can enter at a heavily discounted rate. Age 16 is the best year of your life, so it's best to spend it here!")
    } else if (age <= 19) {
        return("You are considered a TEENAGER and can enter at a discounted price if you show a school ID, transcript, driver's license, etc. at the gate.");
    } else if (age < 65) {
        return("You are considered an ADULT and can enter at the regular price.");
    } else if (age >= 65) {
        return("You are considered a SENIOR and can enter at a discounted price.");
    } 
    console.log("Reached the end of the for loop without determining a price");
}