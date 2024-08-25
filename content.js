// chromes example 

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) { // no clue how this stuff works
  if (tabs[0].url === "https://drive.google.com/drive/my-drive"){
    console.log("god should fear me");
  }
});



