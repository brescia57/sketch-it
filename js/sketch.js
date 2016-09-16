$(document).ready(function(){
  var gridNumber = 16;
  var gridSize = 600/gridNumber;

  var funnel = function(){
  for(var i =0; i<(gridNumber*gridNumber); i++){
    $('#container').append("<div class = 'grid'></div>");
  }
  }
  funnel();

  var space = function(){
    $('.grid').hover(function(){
      $(this).addClass('highlight');
    });
  }
  space();

  $('#restart').click(function(){
    var newAmount = prompt("How many would you like?", 30);

    if(newAmount <= 600){
      $('.grid').remove();
      gridNumber = newAmount;
      funnel();
    } else{
      funnel();
      space();
    }
    $('.grid').css({"width": 600/newAmount, "height": 900/newAmount });
      space();
  });
});
