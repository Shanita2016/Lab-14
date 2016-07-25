$(document).ready(function(){
  $('#navigation a').mouseenter(function(){
    $(this).fadeTo('slow', 0.25)
  });
  $('#navigation a').mouseleave(function(){
    $(this).fadeTo('slow', 1.0)
  });
  

});
