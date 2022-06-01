
let res = 0;
let valor = 13195;

const calculateMayorFactorPrimo = (params) => {
    while (params != 1) {
        for (let index = 0; index < params; index++) {
            if(index % params == 0){
                console.log(index);
            }
        }
    }
    return 0;
} 

document.write('<br>Sumatoria: ',calculateMayorFactorPrimo(valor));