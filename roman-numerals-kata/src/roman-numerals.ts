 export function convert(arabicNumber :number): string {
    let result = "";
    const conversions = [
        {arabic: 1000, roman: 'M'},
        {arabic: 900, roman: 'CM'},
        {arabic: 500, roman: 'D'},
        {arabic: 400, roman: 'CD'},
        {arabic: 100, roman: 'C'},
        {arabic: 90, roman: 'XC'},
        {arabic: 50, roman: 'L'},
        {arabic: 40, roman: 'XL'},
        {arabic: 10, roman: 'X'},
        {arabic: 9, roman: 'IX'},
        {arabic: 5, roman: 'V'},
        {arabic: 4, roman: 'IV'},
        {arabic: 1, roman: 'I'},
    ];

    if (arabicNumber > 1000) {
        return  "error exceeded max number range"
    }

    conversions.forEach((conversion: { arabic: number; roman: any; }) => {
        while (arabicNumber >= conversion.arabic) {
          result += conversion.roman
          arabicNumber -= conversion.arabic
        }
    })

    return result;
 }
