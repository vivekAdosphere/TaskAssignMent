/* --> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <---

File Name : config.js
File Description : This file contains configuration data

--> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <--- */

require("dotenv").config();

module.exports = {
    // Local Server Configuration
    SERVER_URL: process.env.DEBUG === "true" ? process.env.LOCAL_SERVER_URL : process.env.PRODUCTION_SERVER_URL,

    // Production Server Configuration
    // SERVER_URL: ""

    // Workplace Configurations
    API_BASE_URL: process.env.API_BASE_URL,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    APP_ID: process.env.APP_ID,
    APP_SECRET: process.env.APP_SECRET,
    VERIFICATION_TOKEN: process.env.VERIFICATION_TOKEN,
    workplaceInstanceUrl: process.env.WORKPLACE_INSTANCE_URL,

    // AWS Configurations
    TABLE_NAME: process.env.AWS_TABLE_NAME,
    REGION: process.env.AWS_REGION,
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,

    // Express Application Configurations
    PORT: process.env.PORT || 5001,

    // Webhook Authentication Password
    webhookRouteVerificationPassword: process.env.WEBHOOK_ROUTE_VERIFICATION_PASSWORD
}