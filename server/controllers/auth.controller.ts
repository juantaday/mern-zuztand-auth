import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

export const loginHandle = async (req:Request, res:Response, next:NextFunction)=>{

    const token =jwt.sign({user:{id:125,user:'juan taday'}},'secret',{expiresIn : 60*60*60});
    res.status(200).json({token});
};

export const profileHandle = async (req:Request, res:Response, next:NextFunction)=>{
    
    return  res.status(200).json({message:'profile data',profile:req.user});
};