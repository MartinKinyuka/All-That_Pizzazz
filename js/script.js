$(document).ready(function(){
  $("#submission").on("click",function(){
    var size =$("#size option:selected").data("pick");
    var toppings =$("#toppings option:selected").data("pick");
    var crust =$("#crust option:selected").data("pick");
    var a = parseInt($("#size option:selected").val());
    var b = parseInt($("#toppings option:selected").val());
    var c = parseInt($("#crust option:selected").val());
    var cost = a+b+c
var newCost = [];
newCost.push(cost);
    
  
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
    newCost.push(cost); 
  
  $('#orderTable').append($('<tr>')
    .append($('<td>').append(size))
    .append($('<td>').append(toppings))
    .append($('<td>').append(crust))
    .append($('<td>').append(cost))
    
    
  )
  
})

$("#processOrder").on("click",function(){
  $("#orderTable").show();
  $("#mainDelivery").show();
  $("#processOrder").hide();
  $("#completeOrder").show();
  $("#total").show();
  var pizzaTotal = 0;
for (var i = 0; i < newCost.length; i++) {
    pizzaTotal += newCost[i] << 0;
}
$("#pizzaTotal").html(pizzaTotal);
  

    
  
  

})
    
   
  })
})
$(document).ready(function(){
  $("#delivery").on("click",function(){
    $("#deliveryDetails").show();
    $("#total").hide();
    $("#totalCost").show();
    $("#zaTotal").html(pizzaTotal);
    


  })
})
$(document).ready(function(){
  $("#send").on("click",function(){
    alert("Your order has been received and is being processed");
  })
})
$(document).ready(function(){
  $("#completeOrder").on("click",function(){
    alert("Your order has been received and is being processed");
    location.reload();
  })
})
$(document).ready(function(){
  $("#cancelOrder").on("click",function(){
    alert("You are about to cancel your order.Proceed?");
    location.reload();
  })
})