/**
 * TODO: Sum of even of sequence Fibonnaci
 * 0 + 1 = 1
 * 1 + 1 = 2
 */

let res = 0;
let num_A = 0;
let num_B = 1;
let sum = 0;

const calculateFibonnaci = (n) =>{
    document.write('Sequence Fibonnaci' + '<br>')
    for (let index = 0; index < n; index++) {
        res =  num_A + num_B;
        num_A =  num_B;
        num_B = res; 
        document.write(res+ '<br>');
        if(res % 2 === 0){
//            document.write('Alerts');
            console.log('Alerts even values '+res + '<br>');
            sum +=  res;
        }
    }
    return sum;
}

document.write('Total is: ',calculateFibonnaci(10));