/**
 * TODO: Múltiplos de 3 o 5 Encuentra la suma de todos los múltiplos de 3 o 5 por debajo de 1000.
 */
let res = 0;

const calcularMultiplos = () => {
    for (let index = 1; index < 10; index++) {
        if(index % 3 === 0 || index % 5 === 0){
            res += index;
            document.write(index + '<br>')
        }
    }
    return res;
}

document.write('<br>Sumatoria: ',calcularMultiplos());