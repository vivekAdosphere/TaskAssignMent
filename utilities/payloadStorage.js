/* --> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <---

File Name : payloadStorage.js
File Description : This file includes payload for template messages such as quick_reply, webview etc.

---> Required Dependencies <---
Installed Dependencies : 

User Defined Dependencies : 
1) config.js ("../configuration/config")

---> Function Definitions <---
1) demoQuickReply

--> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <--- */

// Dependencies
const config = require("../configuration/config");

// Config Variables
const SERVER_URL = config.SERVER_URL;

/**
 * @description Quick Reply Payload
 * @returns {object}
 */
exports.demoQuickReply = () => { // Bot Introduction
    return {
        "text": "Please click on 'Start' to initiate the conversation",
        "quick_replies": [
            {
                "content_type": "text",
                "title": "Start",
                "payload": "Start",
            }
        ]
    };
};

// Optional for webview testing
exports.demoWebview = (senderID) => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "Please select the date",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": SERVER_URL + "/ask-demowebview",
                        "title": "Select",
                        "webview_height_ratio": "tall", //display on mobile
                        "messenger_extensions": true,
                        "webview_share_button": "hide"
                    },
                ],
            },
        }
    };
}