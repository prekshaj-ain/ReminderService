const cron = require('node-cron');
const { fetchPendingEmails } = require('../services/email-service');

const setupJobs = ()=>{
    cron.schedule('*/5 * * * *', async ()=>{
        const response = await fetchPendingEmails();
        console.log(response);
    })
}

module.exports = setupJobs;