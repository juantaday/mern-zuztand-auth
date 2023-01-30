import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


export const isAuthorize =(req:Request, res:Response, next:NextFunction)=>{
   
    const authHeader= req.headers.authorization;
    if (!authHeader) return res.status(401).json({message:`Unauthorized`});

    const lentToken =authHeader.split(' ');

    if (lentToken.length != 2) return res.status(401).json({message:`Unauthorized`});
  
    var token:string =lentToken[1];

    if (token.length == 2) return res.status(401).json({message:`Unauthorized`});

    jwt.verify(token, "secret",(err, user)=>{
        if (err)return res.status(401).json({message:`Unauthorized`});
        
        req.user =user;
        
        next();
    });

 
};