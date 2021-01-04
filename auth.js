chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    var scriptOptions = message.scriptOptions;

    document.getElementById("identifierId").value = scriptOptions.gAddress;
    console.log("Email", scriptOptions.gAddress);
    document.getElementById("identifierNext").click();

    setTimeout(() => {
        document.getElementById("password").getElementsByTagName("input")[0].value = scriptOptions.gPassword;
        document.getElementById("passwordNext").getElementsByTagName("button")[0].click();
        // Forgot password...
        // Checking this script...

        chrome.tabs.executeScript({file: 'gmail.js'});
        
    }, 3000);

    
});

