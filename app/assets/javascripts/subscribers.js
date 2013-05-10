$(document).ready(function(){  
  var subscriberForm = $('#subscribe');
  var message = $('#message');

  subscriberForm.on('ajax:success', function(status, data, xhr){
    message.text('');
    $.each(data, function(index, value){
      message.append("<li>" + value + "</li>");
    })
  });


});