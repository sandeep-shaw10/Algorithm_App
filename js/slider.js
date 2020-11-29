$(document).ready(function(){
        //Slider=============================
        let x = $("#b_amount").value
        let y = $("#b_speed").value
    
        if(x==undefined){x = 20}
        if(y==undefined){y = 850}
    
        $("#b_amount_val").html(x)
        $("#b_speed_val").html(y)
    
        $("#b_amount").on("input", function(){
           $("#b_amount_val").html(this.value) 
        });
    
        $("#b_speed").on("input", function(){
           $("#b_speed_val").html(this.value)
        });
        //End of Slider======================
});