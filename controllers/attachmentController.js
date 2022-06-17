/* --> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <---

File Name : attachmentController.js
File Description : If response is attachment then this file do its work.

---> Required Dependencies <---
Installed Dependencies : 

User Defined Dependencies :
1) messageSenders ("../services/messageSenders")
2) mapNames ("../configuration/mapNames")
3) mapToLocalDB ("../services/mapToLocalDB")

---> Function Definitions <---
1) handleAttachmentMessage

--> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <--- */

const mapNames = require("../configuration/mapNames");
const { MapToLocal } = require("../services/mapToLocalDB");
const { sendTextMessage, sendQuickReplyMessage } = require("../services/messageSenders");

// Map Variable
let flowPathIndicator = new MapToLocal(mapNames.flowPathIndicator)
let userData = new MapToLocal(mapNames.userData)
let selectedCommunicationLanguage = new MapToLocal(mapNames.selectedCommunicationLanguage)

/**
 * 
 * @param {string} senderID 
 * @param {string} message 
 * @description Handles attachement message
 */
exports.handleAttachmentMessage = async (senderID, message) => {

}