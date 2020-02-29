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
         return convert(5) + convert(decimalNumber -5)
     }

     if (decimalNumber === 10) {
         return "X";
     }

}

