// $(window).resize(logScreenSize);

$(function(){
  // logScreenSize();
  resizeElements(['.my-button-people-name', '.my-button-jump-to-people'])
  if(!modernizr.mq('(min-width:576px)')){
    $('my-button-people-name').css('width' , '180px')
  }
  $('.my-button-people-name').on('click' , function(){
    // $(this).removeClass("btn-secondary").addClass('btn-danger');
    $(this).toggleClass('btn-secondary btn-danger');
    var $button =  $(this).closest('div').find('.my-button-people-name');
    $button.toggleClass('d-none');

    var id = $button.find('a').attr('href');
             $(id).toggleClass('d-none') ;
  });
});
