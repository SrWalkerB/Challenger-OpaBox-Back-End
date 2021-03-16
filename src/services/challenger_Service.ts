import { IChallengerInterlace, IChallengerSort } from "./challenger_Interfaces";

class Challeger_Service{

    challenger_01_Service(data: IChallengerSort){

        console.log(data.lista.salaN);
        console.log(data.lista.salaS);

        const sortSalaN = this.selectSort_Service(data.lista.salaN);
        const sortSalaS = this.selectSort_String_Service(data.lista.salaS);

        const listas = {
            salaN: sortSalaN,
            salaS: sortSalaS
        }

        return listas;
    }
    
    challenger_02_Service(data: IChallengerInterlace){
    
        const result = this.interlace({
            intervaloA: data.intervaloA,
            intervaloB: data.intervaloB
        });

        return result;
    }

    private selectSort_Service(data: Array<Number>){

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

    private selectSort_String_Service(data: Array<String>){
        return data.sort();
    }

    private interlace(data: IChallengerInterlace){
        let result = false;
        let n = data.intervaloA.length;

        for(let x = 0; x < n; x++){

            for(let i = 0; i < 2; i++){

                if(data.intervaloA[x] == data.intervaloB[i]){
                    return result = true;
                }
            }        
        }

        return result;
    }
}

export default new Challeger_Service;