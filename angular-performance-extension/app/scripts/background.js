browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
});


/**
 * Receive messages from panel and relay to the content script.
 * This is for messages sent through 'chrome.runtime.sendMessage'.
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.action) {
        case "startProfiling":
            console.log("startProfiling");
            chrome.tabs.sendMessage(request.tabId, request);
            return true;
    }
});

