$(document).ready(function(){
  $("#submission").on("click",function(){
    var size =$("#size option:selected").val();
    var toppings =$("#toppings option:selected").val();
    var crust =$("#crust option:selected").val();
  
$("#orderTable").show();
$("#processButtons").show();
$("#add").show();
$("#submission").hide();


    
    
$("#sizes").html(size)
$("#tops").html(toppings)
$("#crusts").html(crust)

$("#add").on("click", function(){
  var size =$("#size option:selected").val();
  var toppings =$("#toppings option:selected").val();
  var crust =$("#crust option:selected").val();
  
  $('#orderTable').append($('<tr>')
    .append($('<td>').append(size))
    .append($('<td>').append(toppings))
    .append($('<td>').append(crust))
    
  )
  
})
    
   
  })
})
