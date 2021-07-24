$("form").submit(function (e) {

    var response = grecaptcha.getResponse();

    if (response.length == 0) {
        alert("Please complete the captcha.");
    }
    else {


    }

    // var form = $(this);
    // $.ajax({
    //     url: form.attr('action'),
    //     type: form.attr('method'),
    //     data: form.serialize(),
    //
    //     //todo fix this up
    //     success: function (response) {
    //         alert(response);
    //     }
    // });

});

