window.onload = function(){
  var tds = document.getElementsByTagName('td');

  for ( var i = 0 ; i < tds.length  ; i++){
    tds[i].addEventListener('click', function(event){
      event.preventDefault();

      var highlighteds = document.getElementsByClassName('highlighted');

      for ( var i = highlighteds.length - 1 ; i >= 0 ; i--){
        highlighteds[i].classList.remove('highlighted');
      }

      this.classList.add('highlighted');
    });
  }


  var trs = document.getElementsByTagName('tr');
  var myTd = document.getElementById("my-td");

  for (var i = 0 ; i < trs.length  ; i++){
    trs[i].addEventListener('mouseover', function(event){
      event.preventDefault();

      var highlighteds = document.getElementsByClassName('highlighted');

      for ( var i = highlighteds.length - 1 ; i >= 0 ; i--){
        highlighteds[i].classList.remove('highlighted');
      }

      this.classList.add('highlighted');
    });
  }

//  function myFunction() {
//     console.log('TD');
//    event.preventDefault();
//     this.classList.add('highlighted');
//     console.log(event);
//   }
}
