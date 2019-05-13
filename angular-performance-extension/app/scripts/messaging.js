function isBackgroundConnectable() {
    let port = chrome.runtime.connect();
    if (port) {
        port.disconnect();
        return true;
    }
    return false;
}

// This sends event to the background page
// where it can be relayed to the inspected page
function sendEventToBackgroundPage(message) {
    if (!isBackgroundConnectable()) {
        console.error('Chrome extension has been reloaded. Please refresh the page');
        return;
    }
    try {
        message.tabId = chrome.devtools.inspectedWindow.tabId;
        chrome.runtime.sendMessage(message);
    } catch (e) {
        if (
            e.message.match(/Invocation of form runtime\.connect/) &&
            e.message.match(/doesn't match definition runtime\.connect/)
        ) {
            console.error('Chrome extension has been reloaded. Please refresh the page');
        } else {
            throw(e);
        }
    }
}

// todo - just for a demo will be part of Angular Stats App
document.querySelector('#startProfiling').addEventListener('click', function() {
    sendEventToBackgroundPage({action: "startProfiling"});
}, false);


