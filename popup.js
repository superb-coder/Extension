var emails;

$('#csv_files').change(function (evt){
    var file = evt.target.files[0];
    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function(result) {
            emails = result;
            alert("Emails are imported");
        }
    })
});

$("#run").click(function(){
    if(!emails) {
        alert("Emails are not imported or corrected. Please import again");
    }


    var selected_options = [];
    var options = $('.commands input[type="checkbox"]:checked');
    $.each(options, function(){
        selected_options.push($(this).attr("id"));
    });

    var selected_keywords = [];
    $.each(selected_options, function(index, value){
        var keyword_id = value+"_keyword";
        var keyword = $("#"+keyword_id).val();

        selected_keywords.push(keyword);
    });

    var importedEmails = emails.data;
    
    var emailInfos = [];
    var passwordInfos = [];
    var recoveryInfos = [];

    for(var i = 0; i < importedEmails.length; i++){
        if(importedEmails[i].email != undefined && importedEmails[i] != null) {
            emailInfos.push(importedEmails[i].email);
            passwordInfos.push(importedEmails[i].pass);
            recoveryInfos.push(importedEmails[i].recovery);
            // $("p#running_email").html(importedEmails[i].email);
            
        } else {
            continue;
        }
    }

    var count_of_emails = emailInfos.length;


});

$("#stop").click(function(){
    if(!emails) {
        alert("Emails are not imported or corrected. Please import again");
    }
});