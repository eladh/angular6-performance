console.log("contentscript.js loaded !!!");

/**
 * injectScript - Inject internal script to available access to the `window`
 * @param  {type} file_path Local path of the internal script.
 * @param  {type} tag The tag as string, where the script will be append (default: 'body').
 */
function injectScript(file_path, tag) {
    let node = document.getElementsByTagName(tag)[0];
    let script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}

/**
 * Handle requests coming from the panel
 * (relayed through background script).
 */
chrome.runtime.onMessage.addListener(function(message) {

    switch (message.action) {
        case "startProfiling":
            injectScript(chrome.extension.getURL('scripts/performanceRecorder.js'), 'body');
            return true;
    }

    console.log("content-script: onMessage", message);
});

/// Add an event listener
document.addEventListener("profile-data", function(e) {
    chrome.runtime.sendMessage({action: "submitProfilingData" , data : e.detail});

});
