const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');
const ApiRoutes = require('./routes/index'); 

const setupAndStartServer = async ()=>{
    // create the express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes)

    app.listen(PORT,async ()=>{
        console.log(`server started at ${PORT}`);
         
        // sending email
        // sendBasicEmail(
        //     "support@admin.com",
        //     "notificationmailer90@gmail.com",
        //     "This is testing mail",
        //     "Hey, how are you? I hope you like our support"
        // )
    })
}

setupAndStartServer();