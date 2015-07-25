$( document ).ready(function(){

  $('.getStats').on('click', function(e){
    e.preventDefault();

    $.get('/stats', function(data){
      $('#statsDisplay').html(data)
    })

  })

})