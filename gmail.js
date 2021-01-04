chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if((msg.from === 'popup') && (msg.action === 'gmail_init') && (msg.subject === 'DOMInfo')){
        var domInfo = {
            loggedin: true
        };
        response(domInfo);
    }

    // Get the keyword
    if (msg.action == "send_keyword"){
        console.log("send keyword");
        console.log(msg.keyword);
        document.getElementById('gs_lc50').getElementsByTagName("input")[0].value=msg.keyword;
        document.getElementById("aso_search_form_anchor").getElementsByTagName("button")[3].click();
        response({alert: "changed keyword"});
    }
    if (msg.action == "addcontact") {
        console.log("add contact");
        var keyword_items = document.querySelectorAll(".yP");
        keyword_items.forEach(keyword_item => {
            if( keyword_item && keyword_item.getAttribute("name") && keyword_item.getAttribute("email")){
                keyword_item.dispatchEvent(new MouseEvent('mouseover', {bubbles: true}));
                contact.dispatchEvent(new MouseEvent('mouseover', {bubbles: true}))
                setTimeout(() => {
                    chrome.runtime.sendMessage({"type": "clickMoreInfo"})
                }, 2000)
            }
        })
        response({alert: "Contact add is done"});
    }
    if(msg.action == "addlabel"){
        console.log("add label");
        response({alert: "Adding Label Pressed"});
    }
    if(msg.action == "submitlabel"){
        console.log("submit label");
        console.log("Label", msg.label);

        // const items = document.getElementById(":1").getElementsByClassName("ae4 UI")[0].getElementsByClassName("zA yO");
        // items.forEach(item => {
        //     console.log("item", item);
            
        // });

        var selected_box = document.getElementsByClassName("T-Jo J-J5-Ji T-Jo-auq")[0]
        
    }

    
});

