

const collatz = (params) => {
let dato =  parseInt(prompt('Digite el valor de Collatz'));

    while (dato!= 1 ) {
        if(dato % 2 == 0){
            document.write(dato +', ');
            dato = dato / 2;
        }else{
            document.write(dato+', ');
            dato = (3*(dato) + 1);
        }
        if(dato == 1){
            document.write(dato);   
        }
    }
    return 0;
}

console.log(collatz());

