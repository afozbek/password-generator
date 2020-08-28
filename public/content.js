console.log("Merhabalar, Furkan Özbek");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
}
