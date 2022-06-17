/* --> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <---

File Name : textMessageController.js
File Description : This file controls every text message coming from user.

---> Required Dependencies <---
Installed Dependencies : 

User Defined Dependencies :
1) messageSenders ("../services/messageSenders")
2) mapNames ("../configuration/mapNames")
3) mapToLocalDB ("../services/mapToLocalDB")
4) languageChooser ("../language/languageChooser")
5) utilities ("../utilities/utilities")
6) messageController ("./messageController")

---> Function Definitions <---
1) handleTextMessage

--> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <--- */

// Dependencies
const mapNames = require("../configuration/mapNames");
const { clearMaps } = require("../utilities/utilities")
const { MapToLocal } = require("../services/mapToLocalDB");
const languageChooser = require("../language/languageChooser");
const { sendTextMessage, sendQuickReplyMessage,sendWebviewTemplate } = require("../services/messageSenders");
const { otherTextMessageHandler, initConversationHandler, introductionMessageHandler, webviewHandler } = require("./messageController")

// Map Variables
let flowPathIndicator = new MapToLocal(mapNames.flowPathIndicator)
let userData = new MapToLocal(mapNames.userData)
let selectedCommunicationLanguage = new MapToLocal(mapNames.selectedCommunicationLanguage)

/**
 * 
 * @param {string} senderID 
 * @param {string} message 
 * @description Handles Text Messages
 */
exports.handleTextMessage = async (senderID, message) => {

    // Optional for webview testing
    if ((message).toLowerCase() === "webview") {
        webviewHandler(senderID)
    }
    else if (languageChooser(senderID).initiateConversationMessages.includes(message)) {
        initConversationHandler(senderID, message)
    }
    else if (flowPathIndicator.has(senderID)) {
        const currentPathIndex = flowPathIndicator.get(senderID)
        
        switch (currentPathIndex) {
            case "1":
                introductionMessageHandler(senderID, message)
                break
            default:
                await sendTextMessage(senderID, languageChooser(senderID).somethingWentWrong)
        }
    }
    else {
        otherTextMessageHandler(senderID, message)
    }
}