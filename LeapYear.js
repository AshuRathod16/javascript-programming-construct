// Generating random years from 1990 t0 2030

function generateRandomYear(){
    return Math.round(Math.random() * 40 + 1990);
}

let year = generateRandomYear();
checkLeapYear(year);

function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}


   



