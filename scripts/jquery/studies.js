// jQuery(document).ready(function(){
//   alert("Hello!");
// });

$(function(){
  alert("Hello!");
  var tds = $('td');
  var highlighteds = $('.highlighted');
  var myTd = $('#my-td');
  $('td').on('click' , function (event){
    event.preventDefault();
    $('.highlighted').removeClass('highlighted');
    $(this).addClass('highlighted');
  });
});
