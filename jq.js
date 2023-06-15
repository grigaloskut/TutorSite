jQuery(document).ready(function () {
     
    $("#phone").mask("+7(999) 999-99-99"); 
   
  
   jQuery('.form_button').click( function() {
       var form = jQuery(this).closest('form');
       
       if ( form.valid() ) {
           form.css('opacity','.5');
           var actUrl = form.attr('action');

           jQuery.ajax({
               url: actUrl,
               type: 'post',
               dataType: 'html',
               data: form.serialize(),
               success: function(data) {
                   form.html(data);
                   form.css('opacity','1');
                   //form.find('.status').html('форма отправлена успешно');
                   //$('#myModal').modal('show') // для бутстрапа
                   form.find('.status').html('Добро пожаловать в мою команду');
               },
               error:	 function() {
                    form.find('.status').html('серверная ошибка');
               }
           });
       }
   });


});