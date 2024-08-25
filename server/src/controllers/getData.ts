import { Request, Response, RequestHandler } from "express";
import chatGptModel from "../models/chatGptModel";


type Params = {};
type ReqBody = {};
type ResBody = {}
type Query = {
    topic: string,
    wordNumber:string,
    style: string
}

const getData: RequestHandler<Params, ReqBody, ResBody, Query> = async (req, res)=>{
    const query = req.query;
    if(typeof query.topic === "undefined" || typeof query.wordNumber === "undefined" || typeof query.style === "undefined") {
        console.log(query);
        
        res.status(400).send("options not provided");
        return;
    };
    const data = await chatGptModel.getResponse(query.style, query.wordNumber, query.topic);
    res.send(data);
}

export default getData