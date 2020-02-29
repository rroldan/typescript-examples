 export function convert(decimalNumber :number): string {
      const result = "";

     if (decimalNumber === 1){
         return "I";
     }

     if (decimalNumber < 5){
         return convert(1) + convert(decimalNumber - 1);
     }

     if (decimalNumber === 5){
         return "V";
     }
}

