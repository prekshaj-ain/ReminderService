const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const sendBasicEmail = async (mailFrom,mailTo,mailSubject,mailBody)=>{
    try{
        const response = await sender.sendMail({
            from : mailFrom,
            to : mailTo,
            subject : mailSubject,
            text : mailBody
        });
        console.log(response);
    }catch(error){
        console.log(error);
    }

}
const repo = new TicketRepository();

const fetchPendingEmails = async (timestamp)=>{
    try{
        const response = await repo.get({status : 'PENDING'});
        return response;
    }catch(error){
        throw error;
    }
}

const createNotification = async (data)=>{
    try{
        const response = await repo.create(data);
        return response;
    }catch(error){
        throw error;
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification
}