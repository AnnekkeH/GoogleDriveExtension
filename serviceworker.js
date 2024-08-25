// need to have event listener registration up here because service workers turn off, up here means they can be found faster

chrome.tabs.onUpdated.addListener((tabId, tab) => { // checks every new tab

    if (tab.url && tab.url.includes("drive.google.com/")) { // if we are on google drive
      chrome.runtime.sendMessage( // send message to extension saying we are on the page
        message(true) // DOESNT SENT PROPERLY OR SENDS EARLY OR SMTH CUZ ITS PRINTING WITHOUT A GOOGLE DRIVE TAB
      )
    }
  })
  
  
// tabs permission in manifest only
// "grants an extension the ability to call tabs.query() against four sensitive properties on tabs.Tab instances: 
// url, pendingUrl, title, and favIconUrl."

// so should be something like tabs.query(url) or smth im reading
// need to check every time a new tab is opened or refreshed (refreshed cuz it changes if someone goes like search > drive > drive home)

// need to detect when on a google drive page here
// basically when active tab == drive.google.com
// then send message to content.js to do things
// for now, just send something to the console