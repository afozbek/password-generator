console.log("From Background");

chrome.browserAction.onClicked.addListener(extensionClicked);

chrome.tabs.onActivated.addListener(tabChanged);

function extensionClicked(tab) {
  console.log(tab);
  console.log("Extension Clicked");

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      message: "clicked_browser_action",
    });
  });
}

function tabChanged(tab) {
  console.log(tab);
  console.log("Tab Changed", tab.tabId);
}
