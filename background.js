chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (typeof message === "object" && message.type === "showPageAction") {
        chrome.pageAction.show(sender.tab.id)
    }
    else if (typeof message === "object" && message.type === "addContact") {
        console.log("received")
        // chrome.tabs.create({url : "https://contacts.google.com"}, tab => {
        //     chrome.runtime.sendMessage(tab.id, { "name": message.name, "email": message.email })
        // })
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, {"type": "clickMoreInfo"})
        })
    }
})
