import { Request, Response } from "express";
import challenger_Service from "../services/challenger_Service";
 
export default new class Challenger_Controllers{

    challenger_01(Request: Request, Response: Response){
        try {

            const { lista } = Request.body;
            
            const result = challenger_Service.challenger_01_Service({
                lista: {
                    salaN: lista.salaN,
                    salaS: lista.salaS
                }
            });
            
            return Response.status(200).json(result);
        } catch (error) {
            
            console.log(error);
            return Response.status(500).json({ err: error });
        }
    }

    challenger_02(Request: Request, Response: Response){
        try {
            
            const { intervaloA, intervaloB } = Request.body;

            const result = challenger_Service.challenger_02_Service({
                intervaloA: intervaloA,
                intervaloB: intervaloB
            })
        
            return Response.status(200).json({ msg: result });
            
        } catch (error) {
            
            console.log(error);
            return Response.status(500).json({ err: error });
        }
    }
}