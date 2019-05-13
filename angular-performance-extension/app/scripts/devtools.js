chrome.devtools.panels.create(
    "Angular Performance",
    "toast.png",
    "index.html", initialize);


/**
 * Panel initialization. The callback is executed when
 * the panel is initialized. But, the panel script is
 * executed when the panel is selected for the first time (by the user).
 */
function initialize(panel) {
    console.log("DevTools panel initialized");

    panel.onShown.addListener( (win) => {
        console.log("is shown");
    });

    panel.onHidden.addListener(function (win) {
      console.log("is hidden");
    });
}
