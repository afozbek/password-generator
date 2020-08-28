console.log("From Background");

chrome.browserAction.onClicked.addListener(extensionClicked);

chrome.tabs.onActivated.addListener(tabChanged);

function extensionClicked(tab) {
  chrome.tabs.sendMessage(tab.id, "BACKGROUND: I want to send a message");
}

function tabChanged(tab) {
  console.log(tab);
  console.log("Tab Changed", tab.tabId);
}
