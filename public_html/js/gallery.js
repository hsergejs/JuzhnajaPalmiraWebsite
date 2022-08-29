$(document).ready(function() {
    $('.img-thumbnail').click(function(){
        //$('.modal-body').empty();
        $('.modal-header').empty();
        var title = $(this).attr('alt');
        var src = $(this).attr('src');
        $('.modal-header').html('<h4><strong>' + title + '</strong></h4>');
        //$($(this).parents('div').html()).appendTo('.modal-body');
        $('.modal_img').attr('src',src);
        $('#gallery').modal('toggle');
        
    });
    
    
});