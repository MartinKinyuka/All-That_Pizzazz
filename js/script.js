$(document).ready(function(){
  $("#submission").on("click",function(){
    var size =$("#size option:selected").data("pick");
    var toppings =$("#toppings option:selected").data("pick");
    var crust =$("#crust option:selected").data("pick");
    var a = parseInt($("#size option:selected").val());
    var b = parseInt($("#toppings option:selected").val());
    var c = parseInt($("#crust option:selected").val());
    var cost = a+b+c
    
  
$("#orderTable").show();
$("#processButtons").show();
$("#add").show();
$("#submission").hide();
$("#totalCost").hide()


    
    
$("#sizes").html(size)
$("#tops").html(toppings)
$("#crusts").html(crust)
$("#cost").html(cost)

$("#add").on("click", function(){
  var size =$("#size option:selected").data("pick");
    var toppings =$("#toppings option:selected").data("pick");
    var crust =$("#crust option:selected").data("pick");
    var a = parseInt($("#size option:selected").val());
    var b = parseInt($("#toppings option:selected").val());
    var c = parseInt($("#crust option:selected").val());
    var cost = a+b+c
  
  
  $('#orderTable').append($('<tr>')
    .append($('<td>').append(size))
    .append($('<td>').append(toppings))
    .append($('<td>').append(crust))
    .append($('<td>').append(cost))
    
    
  )
  
})

$("#processOrder").on("click",function(){
  $("#orderTable").show();
  $("#mainDelivery").show()
  

    
  
  

})
    
   
  })
})
$(document).ready(function(){
  $("#delivery").on("click",function(){
    $("#deliveryDetails").show();
  })
})
$(document).ready(function(){
  $("#send").on("click",function(){
    alert("Your order has been received and is being processed");
  })
})