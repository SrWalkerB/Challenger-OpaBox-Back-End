import { Router } from 'express';
import challenger_Controllers from '../controllers/challenger_Controllers';

const challenger_Router = Router();

challenger_Router.post("/ordernaLista", challenger_Controllers.challenger_01);

challenger_Router.post("/interlace", challenger_Controllers.challenger_02);


export default challenger_Router;