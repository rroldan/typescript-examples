 export function convert(decimalNumber :number): string {
    const result = "";

    if (decimalNumber === 1){
         return "I";
    }

    if ( decimalNumber === 4) {
         return "IV";
    }

    if (decimalNumber < 5){
         return convert(1) + convert(decimalNumber - 1);
    }

     if (decimalNumber === 5){
         return "V";
    }

    if ( decimalNumber === 9) {
        return "IX";
    }

    if (decimalNumber > 5 && decimalNumber < 10){
         return convert(5) + convert(decimalNumber - 5)
    }

    if (decimalNumber === 10) {
         return "X";
    }

    if (decimalNumber > 10 && decimalNumber < 40) {
        return convert(10) + convert(decimalNumber - 10)
    }

    if (decimalNumber === 40) {
        return "XL";
    }

    if (decimalNumber > 40 && decimalNumber < 50) {
        return convert(40) + convert(decimalNumber - 40)
    }

    if (decimalNumber === 50) {
        return "L";
    }

    if (decimalNumber > 50 && decimalNumber < 90) {
        return convert(50) + convert(decimalNumber - 50)
    }

    if (decimalNumber === 90) {
        return "XC";
    }

    if (decimalNumber > 90 && decimalNumber < 100) {
        return convert(90) + convert(decimalNumber - 90)
    }

    if (decimalNumber === 100) {
        return "C";
    }

    if (decimalNumber > 100 && decimalNumber < 400) {
        return convert(100) + convert(decimalNumber - 100)
    }

    if (decimalNumber === 400) {
        return "CD";
    }

    if (decimalNumber > 400 && decimalNumber < 500) {
        return convert(400) + convert(decimalNumber - 400)
    }

    if (decimalNumber === 500) {
        return "D";
    }

    if (decimalNumber > 500 && decimalNumber < 900) {
        return convert(500) + convert(decimalNumber - 500)
    }

    if (decimalNumber === 900) {
        return "CM";
    }

    if (decimalNumber > 900 && decimalNumber < 1000) {
        return convert(900) + convert(decimalNumber - 900)
    }

    if (decimalNumber === 1000) {
        return "M";
    }

    if (decimalNumber > 1000) {
        return  "error exceeded max number range"
    }
}

