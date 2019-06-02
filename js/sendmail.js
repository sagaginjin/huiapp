$(document).ready(function() {
    
    $('#send-mail').click(function() {
        var customer = $('#customer').val();
        var address = $('#address').val();
        var message = $('#message').val();

        console.log(customer);
        console.log(address);
        console.log(message);

        $.ajax({
            type: "post",
            url: "../sendmail.php",
            data: {customer: customer, address: address, message: message},
            dataType: "dataType",
            success: function (response) {
                console.log(response);
            }
        })
        .done(function(data) {
            console.log(data);
        });
    });
    
});