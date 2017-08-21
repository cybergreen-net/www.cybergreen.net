$(document).ready(function(){
    $("button").click(
      function() {
        var yourdomain = 'cybergreen'; // Your freshdesk domain name. Ex., yourcompany
        var api_key = 'd1paV9JoT43X6GJ3N53F'; // Ref: https://support.freshdesk.com/support/solutions/articles/215517-how-to-find-your-api-key
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        ticket_data = {
      "description": "Please remove the following IP Address from CyberGreen Scanning",
      "subject": "Remove an IP Address from CyberGreen Scanning",
          "email": $('#email').val(),
          "custom_fields" : { "cidr" : $('#cidr').val() },
      "priority": 1,
      "status": 2
    };
        $.ajax(
          {
            url: "https://"+yourdomain+".freshdesk.com/api/v2/tickets",
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            headers: {
              "Authorization": "Basic " + btoa(api_key + ":x")
            },
            data: JSON.stringify(ticket_data),
            complete: function(xhr, textStatus) {

        $('#result').text(textStatus);
        $('#code').text(xhr.status);

        if(textStatus == 'success' && email.value.match(mailformat))
        {
          $('#response').append(`<div style='color: #0FB3FF;'>Based on the information provided, we will reveiw your request to be removed from the CyberGreen Scanning list at the following address(s): ${xhr.responseJSON.custom_fields.cidr}</div>`);
          $('#email').val("");
          $('#cidr').val("");
        }
        else
        {
          $('#response').append(`<div style='color: red;'> Please use a valid email and IP Address </div>`);
          request.abort();
          $('#email').val("");
          $('#cidr').val("");
          //$('#response').append(`<pre></pre>`);
          //$('#response').append("<pre>"+JSON.stringify(xhr.responseJSON, null, '\t')+"</pre>");
        }
            }
          }
        );
      }
    );
});

