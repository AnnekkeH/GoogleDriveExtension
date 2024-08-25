chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) { // no clue how this stuff works
  if (tabs[0].url.includes("https://drive.google.com/drive/")){  // if the URL is a google drive page
    console.log("god should fear me"); // print // TODO: this is where the actual actions go
  } else {
    console.log("god has won"); // print
  }
}); // this function should probably go into background or the service worker cuz of what it does

