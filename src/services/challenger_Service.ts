

class Challeger_Service{

    challenger_01(data: object | any){

        const { salaN, salaS } = data;

        console.log(salaN);
        console.log(salaS);

        return data;
    }
}

export default new Challeger_Service;