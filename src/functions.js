function colour_mix(rgb_colour1, rgb_colour2){
    //I decided to use a count system since order doesn't matter.
    //Easy to discern if theres invalid inputs as the color count should always be 2.
    let redCount = 0;
    let greenCount = 0;
    let blueCount = 0;
    let finalColour = "Error";
    
    if(rgb_colour1 == "red"){
        redCount++;
    }else if(rgb_colour1 == "blue"){
        blueCount++;
    }else if(rgb_colour1 == "green"){
        greenCount++;
    }

    if(rgb_colour2 == "red"){
        redCount++;
    }else if(rgb_colour2 == "blue"){
        blueCount++;
    }else if(rgb_colour2 == "green"){
        greenCount++;
    }

    if(redCount + greenCount + blueCount < 2){
        finalColour = "Error";
    }

    if(redCount == 1 && blueCount == 1){
        finalColour = "fuchsia";
    }else if(redCount == 1 && greenCount == 1){
        finalColour = "yellow";
    }else if(greenCount == 1 && blueCount == 1){
        finalColour = "aqua";
    }else if(redCount == 2){
        finalColour = "red";
    }else if(blueCount == 2){
        finalColour = "blue";
    }else if(greenCount == 2){
        finalColour = "green";
    }

    return(finalColour);
}

function largest_product(val1, val2, val3){
    let largeValue1 = 0;
    let largeValue2 = 0;
    let product = 0;

    if(val1 > val2){
        largeValue1 = val1;
    }else if(val1 < val2){
        largeValue1 = val2;
    }else if(val2 < val3){
        largeValue1 = val3;
    }

    if(largeValue1 == val1){

        if(val2 > val3){
            largeValue2 = val2;
        }else{
            largeValue2 = val3;
        }
        
    }else if(largeValue1 == val2){
        
        if(val1 > val3){
            largeValue2 = val1;
        }else{
            largeValue2 = val3;
        }

    }else if(largeValue1 == val3){
        
        if(val1 > val2){
            largeValue2 = val1;
        }else{
            largeValue2 = val2;
        }

    }

    product = largeValue1 * largeValue2;
    return(product);
}

function day_of_the_week(day_num){
    let day = "Not valid";

    if(day_num == 1){
        day = "Sunday";
    }else if(day_num == 2){
        day = "Monday";
    }else if(day_num == 3){
        day = "Tuesday";
    }else if(day_num == 4){
        day = "Wednesday";
    }else if(day_num == 5){
        day = "Thursday";
    }else if(day_num == 6){
        day = "Friday";
    }else if(day_num == 7){
        day = "Saturday";
    }

    return(day);
}

function pay_raise(status, years, salary){
    let new_salary = 0.0;

    if(years >= 10){

        if(status == 'F'){
            new_salary = salary * 1.05;
        }else{
            new_salary = salary * 1.03;
        }

    }else if(years < 4){

        if(status == 'F'){
            new_salary = salary * 1.015;
        }else{
            new_salary = salary * 1.01;
        }

    }else{
        new_salary = salary * 1.02;
    }

    return(new_salary);
}

function is_leap(year){
    /*
    -------------------------------------------------------
    Determines if a year is a leap year. Every year that is
    exactly divisible by four is a leap year, except for years
    that are exactly divisible by 100, but these centurial years
    are leap years if they are exactly divisible by 400. For
    example, the years 1700, 1800, and 1900 are not leap years,
    but the years 1600 and 2000 are.
    Use: result = is_leap(year)
    -------------------------------------------------------
    Parameters:
        year - a year (int > 0)
    Returns:
        result - True if year is a leap year,
            False otherwise (boolean)
    ------------------------------------------------------
    */

    let result = false;

    if(year % 4 == 0 && year % 100 != 0){
        result = true;
    }else if(year % 400 == 0 && year % 100 == 0){
        result = true;
    }else{
        result = false;
    }

    return(result);
}

export {colour_mix, largest_product, day_of_the_week, pay_raise, is_leap}