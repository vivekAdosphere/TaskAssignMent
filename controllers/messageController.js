/* --> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <---

File Name : messageController.js
File Description : This file has functions for every controller.

---> Required Dependencies <---
Installed Dependencies : 

User Defined Dependencies :
1) messageSenders ("../services/messageSenders")
2) mapNames ("../configuration/mapNames")
3) mapToLocalDB ("../services/mapToLocalDB")
4) languageChooser ("../language/languageChooser")
5) utilities ("../utilities/utilities")
6) payloadStorage ("../utilities/payloadStorage")

---> Function Definitions <---
1) handlePostbackMessage

--> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <--- */

const mapNames = require("../configuration/mapNames");
const { clearMaps } = require("../utilities/utilities")
const { MapToLocal } = require("../services/mapToLocalDB");
const languageChooser = require("../language/languageChooser");
const { demoQuickReply, demoWebview } = require("../utilities/payloadStorage")
const { sendTextMessage, sendQuickReplyMessage, sendWebviewTemplate } = require("../services/messageSenders");

// Map Variables
let flowPathIndicator = new MapToLocal(mapNames.flowPathIndicator)
let userData = new MapToLocal(mapNames.userData)
let selectedCommunicationLanguage = new MapToLocal(mapNames.selectedCommunicationLanguage)

/**
 * 
 * @param {string} senderID 
 * @description Sets default value for local database
 */
let setDefaultMapValues = (senderID) => {
    flowPathIndicator.set(senderID, "1")
    userData.set(senderID, {})
}

/**
 * 
 * @param {string} senderID 
 * @param {string} key 
 * @param {object} value 
 * @returns 
 * @description Helps to update database in dynamic way
 */
let userDataUpdator = (senderID, key, value) => {
    let dictValues = userData.get(senderID, value)
    dictValues[key] = value
    userData.set(senderID, dictValues)
    return;
}

/**
 * 
 * @param {string} senderID 
 * @description Starting Covnersation Handler
 */
exports.initConversationHandler = async (senderID) => {
    clearMaps(senderID)
    await sendQuickReplyMessage(senderID, demoQuickReply())
}

/**
 * 
 * @param {string} senderID 
 * @param {string} message 
 * @description Introduction Message Handler
 */
exports.introductionMessageHandler = async (senderID, message) => {
    await sendTextMessage(senderID, languageChooser(senderID).welcomeMessage)
}

/**
 * 
 * @param {string} senderID 
 * @param {string} message 
 * @description Other Text message Handler
 */
exports.otherTextMessageHandler = async (senderID, message) => {
    clearMaps(senderID)
    await sendTextMessage(senderID, languageChooser(senderID).invalidInputMessage)
}

// Optional for webview testing
exports.webviewHandler = async (senderID) => {
    await sendWebviewTemplate(senderID, demoWebview(senderID))
}