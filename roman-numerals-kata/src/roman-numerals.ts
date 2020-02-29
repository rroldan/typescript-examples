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

    if (decimalNumber > 40 && decimalNumber < 49) {
        return convert(40) + convert(decimalNumber - 40)
    }

    if (decimalNumber === 50) {
        return "L";
    }
}

