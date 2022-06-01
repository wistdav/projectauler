function isPalindrome(variable1, variable2) {
    let dato1 = parseInt(prompt('Digite el primer valor',variable1));
    let dato2 = parseInt(prompt('Digite el segundo valor',variable2));

    let res = dato1 * dato2;
    
    if(res !== 0) {
        let reverse = res.toString().split('').reverse().join('');
        if(res == reverse){
            return 'El producto '+ res+' es Palindrome';
        }else{
            return 'ERROR_NOT_PALINDROME ' + res;
        }
    }

}

document.write(isPalindrome());


/* document.write(isPalindrome('Sandalia'));
document.write(isPalindrome('9010'));
document.write(isPalindrome('Sofia'));
document.write(isPalindrome('Ana')); */