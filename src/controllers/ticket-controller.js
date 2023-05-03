const { createNotification } = require("../services/email-service")


const create = async (req,res)=>{
    try{
        const response = await createNotification(req.body);
        return res.status(201).json({
            success: true,
            data : response,
            message : "successfully registered an email reminder",
            error : {}
        })
    }catch(error){
        return res.status(500).json({
            success : false,
            data : {},
            message : "unable to register an email reminder",
            error : error
        })
    }
}

module.exports = {
    create
}