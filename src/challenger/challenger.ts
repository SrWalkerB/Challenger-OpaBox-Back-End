

/* const list = [6, 2 , 10, 3, 90, 1];
const listStrings = ["d", "v" , "h", "x", "a", "b"];

function select_Sort(data: Array<Number>){
    
    const n = data.length;
    
    for(let x = 0; x < n; x++){
        
        let min = x;

        for(let i = x+1; i < n; i++){
    
            if(data[min] > data[i]){
                min = i;
            }
        }
        
        if(data[x] > data[min]){

            const aux = data[x];
            data[x] = data[min];
            data[min] = aux;
        }

    }

    return data;
}

const list_ordenada = select_Sort(list)
const list_ordenadaStrings = listStrings.sort();

const lista = {
    list_ordenada,
    list_ordenadaStrings
}

console.log(lista); */


function Verificar_Intervalos(intervaloA: Array<Number>, intervaloB: Array<Number>){
    let result = false;
    let n = intervaloA.length;
    let number_verificaoes = intervaloA.length + intervaloB.length;

    for(let x = 0; x < n; x++){

        for(let i = 0; i < 2; i++){

            if(intervaloA[x] == intervaloB[i]){
                return result = true;
            }
        }        
    }

    return result;
}

/* intervalos A [20, 40] e B [ 10, 19 ] deve responder false 
intervalos A [20, 40] e B [ 10, 20 ] deve responder true 
intervalos A [10, 20] e B [ 20, 30 ] deve responder true 
intervalos A [10, 20] e B [ 40, 50 ] deve responder false */

const intervaloA = [10, 20];
const intervaloB = [40, 50];

const result = Verificar_Intervalos(intervaloA, intervaloB);

console.log(result);
