import {ApiResponse} from "../utils/api-response.js"
import { asyncHandler } from "../utils/async-handler.js"


/*
const healthCheck = (req,res)=>{
    try{
       
        res.status(200).json(
            new ApiResponse(200, {message: "Server is runing"})
        )

    }catch(error){
        console.error('HealthCheck error:', error)
        res.status(500).json(
            new ApiResponse(500, {message: 'Internal server error'})
        )
    }
}
    */

const healthCheck = asyncHandler(async(req,res)=>{
    res.status(200).json(
        new ApiResponse(200, {message: "Server is running"})
    )
})


export {healthCheck}