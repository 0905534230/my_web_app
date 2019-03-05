// jQuery(document).ready(function(){
//   alert("Hello!");
// });

$(function(){
  // $('tr').on('mouseover' , function (event){
  //   event.preventDefault();
  //   $('.highlighted').removeClass('highlighted');
  //   $(this).addClass('highlighted');
  // });
//------------------//
  $('td').on('mouseover', function(event) {
     event.preventDefault();
     $('#my-td').html(`<span class="my-td-span">${$(this).text()}</span>`);
  });

  $('td').on('mouseout', function(event) {
     event.preventDefault();
     $('#my-td').html(null);
  });
  //------------------//


});
