import { Request, Response } from "express";
import Challenger_Service from "../services/challenger_Service";
 
export default new class Challenger_Controllers{

    challenger_01(Request: Request, Response: Response){
        try {

            const { lista } = Request.body;
            
            const result = Challenger_Service.challenger_01(lista);
            
            
            return Response.status(200).json(result);
        } catch (error) {
            
            console.log(error);
            return Response.status(500).json({ err: error });
        }
    }
}