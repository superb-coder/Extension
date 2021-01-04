chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (typeof message === "object" && message.type === "clickMoreInfo") {
        const button = document.querySelector(".CwaK9")
        setTimeout(() => button.click(), 1000)
        setTimeout(() => {
            const button = document.querySelectorAll(".ENXG6")[2]
            setTimeout(() => button.click(), 1000)
        }, 5000)
    }
})