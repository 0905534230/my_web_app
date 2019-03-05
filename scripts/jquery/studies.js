// jQuery(document).ready(function(){
//   alert("Hello!");
// });

$(function(){
  alert("Hello!");
  var trs = $('tr');
  var highlighteds = $('.highlighted');
  var myTd = $('#my-td');
  $('tr').on('mouseover' , function (event){
    event.preventDefault();
    $('.highlighted').removeClass('highlighted');
    $(this).addClass('highlighted');
  });
//------------------//
$('td').on('mouseover', function(event) {
   event.preventDefault();
   $('#my-td').html('<span>' +
        $(this).text() +
        '</span>'
  );
});

$('td').on('mouseout', function(event) {
   event.preventDefault();
   $('#my-td').html(null);
});
//------------------//


});
