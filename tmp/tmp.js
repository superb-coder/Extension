
// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
    // ...query for the active tab...
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage( tabs[0].id, { from: 'popup', action:'gmail_init', subject: 'DOMInfo' },
        function(response) {
            if (response.loggedin == undefined){
                alert("Please log in Gmail");
            }
            if(response.loggedin == true) {
                // Set the ui of alert;
                console.log(response.loggedin);
                $(".mail_form").hide();
                $(".label").hide();
                $(".mail_commands").show();           
            }
        });
    });
});



$("#mail_submit").click(function (){
    var address = document.getElementById("gmail").value;
    var password = document.getElementById("password").value;
    var recovery = document.getElementById("recovery").value;

    console.log("address", address);
    console.log("password", password);
    console.log("recovery", recovery);

    var signinURL = 'https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
    chrome.tabs.create({url : signinURL, active: false}, function(tab) {
        chrome.tabs.executeScript(tab.id, {file: 'auth.js'}, function (){
            chrome.tabs.sendMessage(tab.id, {
                scriptOptions: {gAddress: address, gPassword: password, gRecover: recovery}
            },response => {
                console.log(response);
            });
        });
    });
});

// Keyword change....
$("#keyword").change(function (e) {
    var keyword = $("#keyword").val();
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "send_keyword", keyword: keyword }, function(response){
            console.log(response);
        });
    });
});

$("#addcontact").click(function (){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "addcontact"}, function(response){
            alert(response.alert);
        });
    });
});

$("#addlabel").click(function (){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "addlabel"}, function (response){
            $(".mail_commands").hide();
            $(".mail_form").hide();
            $(".label").show();            
        })
    })
});

$("#submitcontact").click(function(){
    var label = $("#label").val();
    if(label == undefined || label == ""){
        alert ("Label is null, Please input label");
    } else {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "submitlabel", label: label}, function(response) {
                                
            });
        })
    }
});








