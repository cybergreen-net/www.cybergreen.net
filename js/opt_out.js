$(document).ready(function(){
    $("button").click(
      function() {
        var yourdomain = 'cybergreen'; // Your freshdesk domain name. Ex., yourcompany
        var api_key = 'M4dUMsTh5QFJrMHs8je'; // Ref: https://support.freshdesk.com/support/solutions/articles/215517-how-to-find-your-api-key
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

        if(textStatus == 'success')
        {
          $('#response').append(`<div style='color: green;'>Thank you for your enquiry to opt out of The CyberGreen Institutes metric scanning, we would like to thank you for your patience and we hope that our scanning has not interfered with your business. Based on the information provided on the submitted form, we will block the following network(s): ${xhr.responseJSON.custom_fields.cidr}</div>`);

        }
        else
        {
          $('#response').append(`<div style='color: red;'>An error was encountered processing your request (ref# ${xhr.getResponseHeader('X-Request-Id')}).<br />The server responded with: </div>`);
          $('#response').append(`<pre></pre>`);
          $('#response pre:first').text(JSON.stringify(xhr.responseJSON, null, '\t'));
        }
            }
          }
        );
      }
    );
});

