$(document).ready(function(){
   $('#contactForm').submit(function(event){
       event.preventDefault();
       var n = $('#name').val();
       var e = $('#email').val();
       var t = $('#msg').val();
       
       $.ajax({
                type: "POST",
                url: "php/contactForm.php",
                data: "name=" + n + "&email=" + e + "&msg=" + t,
                success: function (t) {
                    if(t === "success"){
                        $('.modal-header').html('<h4 style="color:green;">Сообщение отправлено</h4>');
                        $('.modal-body').html('<p class="text-center scm">Ваше сообщение было успешно отправлено!</p>');
                        $('#contModal').modal('toggle');
                    }
                    else{
                        $('.modal-header').html('<h4 style="color:red;">Ошибка</h4>');
                        $('.modal-body').html('<p class="text-center fcm">Произошла ошибка! Попробуйте чуть позже еще раз!</p>');
                        $('#contModal').modal('toggle');
                    }
                    
                }
            });
   });
});