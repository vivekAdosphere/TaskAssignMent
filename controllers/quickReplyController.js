/* --> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <---

File Name : quickReplyController.js
File Description : This file controls every quick reply message response coming from user.

---> Required Dependencies <---
Installed Dependencies : 

User Defined Dependencies :
1) messageSenders ("../services/messageSenders")
2) mapNames ("../configuration/mapNames")
3) mapToLocalDB ("../services/mapToLocalDB")
4) messageController ("./messageController")

---> Function Definitions <---
1) handleQuickReplyMessage

--> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <--- */

// Dependencies
const mapNames = require("../configuration/mapNames");
const { MapToLocal } = require("../services/mapToLocalDB");
const { sendTextMessage, sendQuickReplyMessage } = require("../services/messageSenders");
const { otherTextMessageHandler, initConversationHandler, introductionMessageHandler } = require("./messageController")

// Map Variables
let flowPathIndicator = new MapToLocal(mapNames.flowPathIndicator)
let userData = new MapToLocal(mapNames.userData)
let selectedCommunicationLanguage = new MapToLocal(mapNames.selectedCommunicationLanguage)

/**
 * 
 * @param {string} senderID 
 * @param {object} quickReplyObject 
 * @description Handles Quick Reply Message
 */
exports.handleQuickReplyMessage = async (senderID, quickReplyObject) => {
    const payload = quickReplyObject.payload

    switch(payload) {
        case "Start":
            introductionMessageHandler(senderID)
            break
        default:
            await sendTextMessage(senderID, languageChooser(senderID).somethingWentWrong)
    }

}