//javascript code
console.log('welcome class')

$(document).ready(function() {

    //Attach an event listener to the form's submit event
    $('#contactForm').submit(function(event) { 
        
        event.preventDefault(); 
        
        // Clear previous messages
        $('#page-message').html('');

        let formData = $(this).serialize();
        let actionUrl = $(this).attr('action');

        console.log(formData);
        console.log(actionUrl)

        //Make the AJAX request
        $.ajax({
            type: 'POST',  
            url: actionUrl, 
            data: formData,  
            dataType: 'json', 
            //encode: true
        })
        .done(function(data) {
            
            console.log('Success response:', data);

            if (data.has_error) {
                // Handle server-side validation errors
                $('#page-message').html('<span style="color: orange;">Error: ' + data.message + '</span>');      		
            } else {
            	$('#page-message').html('<span style="color: green;">' + data.message + '</span>');
                $('#contactForm')[0].reset(); 
            }

            $('#page-message').show();
        })
        .fail(function(jqXHR, textStatus, errorThrown) {            
            console.log('AJAX Error:', textStatus, errorThrown);
        });
    });
});

