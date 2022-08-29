$(document).ready(function(){
    $('#name').on('blur', function(){
        var name = $(this).val().trim();
        if(name.length === 0){
            glyphRemove(this,'#ch_name');
            $('#name_info').html('<p class="inc_info_msg">Введите ваше имя!</p>');
        }
        else{
            glyphOk(this,'#ch_name');
            $('#name_info').html('');
        }
    });
        
    $('#email').on('blur', function(){
        var email = $(this).val().trim();
        if(email.length === 0){
            glyphRemove(this, '#ch_email');
            $('#email_info').html('<p class="inc_info_msg">Введите ваш email!</p>');
        }
        else if(!emailVal(email)){
            glyphRemove(this, '#ch_email');
            $('#email_info').html('<p class="inc_info_msg">Введите корректный email!</p>');
        }
        else{
            glyphOk(this, '#ch_email');
            $('#email_info').html('');
        }
    });
       
    $('#msg').on('blur',function(){
       if($(this).val().trim().length === 0){
            $('#msg').removeClass('msg_ok').addClass('msg_remove');
            $('#msg_info').html('<p class="inc_info_msg">Введите ваше сообщение!</p>');
        }
        else{
            $('#msg').removeClass('msg_remove').addClass('msg_ok');
            $('#msg_info').html('');
        }
    });
});

function glyphRemove(fieldId, parentId){
    $(parentId).removeClass('has-success has-feedback').addClass('has-error has-feedback');
    $(parentId + ' span').remove();
    $(fieldId).after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
}

function glyphOk(fieldId, parentId){
    $(parentId).removeClass('has-error has-feedback').addClass('has-success has-feedback');
    $(parentId + ' span').remove();
    $(fieldId).after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
}

function emailVal(email){
    var reg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(reg.test(email)){
        return true;
    }
    else{
        return false;
    }
}