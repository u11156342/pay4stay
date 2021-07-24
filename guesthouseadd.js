$("form").submit(function(e){
    var form = $(this);
    $.ajax({
        url   : form.attr('action'),
        type  : form.attr('method'),
        data  : form.serialize(),

        //todo fix this up
        success: function(response){
            alert(response);
        }
    });
    return false;
});