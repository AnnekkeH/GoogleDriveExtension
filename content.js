chrome.runtime.onMessage.addListener(
  true,
  modify() // DONT KNOW IF THIS WILL WORK --- THIS USES CALLBACKS SO ITS OUT OF DATE
)

function modify(){
  console.log("please work for the love of god"); // prints regardless of the active tab so its not working somwehere FIX------------------------
}

// wait to get signal from background.js, when it does
// print something to console also