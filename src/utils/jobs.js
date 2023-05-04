const cron = require('node-cron');


const { fetchPendingEmails, updateTicket } = require('../services/email-service');
const sender = require('../config/emailConfig');

const setupJobs = ()=>{
    cron.schedule('*/5 * * * *', async ()=>{
        const response = await fetchPendingEmails();
        response.forEach(email => {
            sender.sendMail({
                to : email.recepientEmail,
                subject : email.subject,
                text : email.content
            }, async (err, data)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                    await updateTicket(email.id, {status: 'SUCCESS'});
                }
            })
        })
    })
}

module.exports = setupJobs;