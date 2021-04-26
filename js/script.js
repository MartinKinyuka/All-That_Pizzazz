$(document).ready(function(){
  $("#submission").on("click",function(){
    var size =$("#size option:selected").val();
    var toppings =$("#toppings option:selected").val();
    var crust =$("#crust option:selected").val();
  
$("#orderTable").toggle();
    
    
$("#sizes").html(size)
$("#tops").html(toppings)
$("#crusts").html(crust)
    
   
  })
})
