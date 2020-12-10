//MERGE SORT COMPLETE
//MIT LICENSE 2020 SANDEEP SHAW


var amt6=20, speed6=37.55;
let heapArray = []
var loop5;


$(document).ready(function(){
    $("#h_amount").on("input", function(){
        amt6 = this.value
        $("#h_amount_val").text(this.value);
        heapArray = generateHeapData(amt6,[])
     });
    
     $("#h_speed").on("input", function(){
        speed6 = (1001-this.value)/amt6
        $("#h_speed_val").text(this.value);
     });
    
    //console.log(amt6+", "+speed6)

    //Bubble sort visualization  
    $("#heap-f").click(function(){
        //console.log("BUBBLE SORT SPEED6")
        //console.log(amt6)
        //console.log("SORT : ",heapArray)
        $("#h_amount").prop('disabled', true);
        $("#h_speed").prop('disabled', true);
        $("#heap-g").prop('disabled', true);
        $("#heap-f").prop('disabled', true);
        var c = 0;
        var swap = false;
        for (let i = 0; i < amt6-1; i++) {
            for(let j = 0; j<amt6-i-1; j++){
                //c += 1
                if(heapArray[j]>heapArray[j+1]){
                    swap = true
                    //task6(c,i,j,swap)
                    let temp = heapArray[j]
                    heapArray[j] = heapArray[j+1]
                    heapArray[j+1] = temp
                }else{
                    swap = false
                    //task6(c,i,j,swap)
                }
                task6(c,i,j,swap)
            }
        }
        //console.log(heapArray)
      });
  });


//Triggers when screen resolution changes
$( window ).resize(function() {
    let divWidth =  $(".chart-heap").width();
    let margin = 0.1 * divWidth
    let widFactor = ((divWidth - margin)/amt6) + "px";
    $(".chart-bar5").css("margin-left", margin/amt6);
    $(".chart-bar5").css("margin-right", margin/amt6);
    $(".chart-bar5").css("width", widFactor);
});

//Function to generate random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Function to swap the nmber
function swap(arr,a,b){
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

//Data generate
function generateHeapData(amt6, heapArray1){
    $(".chart-heap").empty();
        let divWidth =  $(".chart-heap").width();
        let margin = 0.1 * divWidth
        let max = 5;
        //min value 5 - max value 1000 Generating Random
        //console.log(divWidth)
        for(i=0;i<amt6;i++){
            heapArray1[i] = getRndInteger(10, 1000);
            if(max < heapArray1[i]){
                max = heapArray1[i];
            }
        }
        //console.log("MAXIUM NUMBER = ",max)
        for(i=0;i<amt6;i++){
            let lenFactor = 95 * (heapArray1[i]/max)
            let widFactor = ((divWidth - margin)/amt6)
            $('.chart-heap').prepend('<div class="chart-bar5" style="height : '+ lenFactor +'%; width : '+ widFactor +'px; "></div>')
        }
        //console.log("BUBBLE SORT AMOUNT",amt6)
        $(".chart-bar5").css("margin-left", margin/amt6);
        $(".chart-bar5").css("margin-right", margin/amt6);
        heapArray1 = heapArray1.reverse()
        //console.log(heapArray1)

        heapArray = heapArray1

        return heapArray1
}

//Visualizing the bars
function task6(time,i,j,swap){
    loop5 = setTimeout(function(){
            //#ffffff
        //representing the unsorted array
        for(let m=0;m<amt6-i;m++){
            $(".chart-bar5:nth-child("+(m+1)+")").css("background-color",  " #66ffb5");
        }
       // $(".chart-bar5").css("background-color",  "#66ffb5");

        //Swapping the data
        if(swap == true){
            let x = $(".chart-bar5:nth-child("+(j+1)+")").height();
            let y = $(".chart-bar5:nth-child("+(j+2)+")").height();
            $(".chart-bar5:nth-child("+(j+1)+")").css("height",  y);
            $(".chart-bar5:nth-child("+(j+2)+")").css("height",  x);
            ////console.log(i+"+"+j+"___ "+swap+" : ("+j+","+(j+1)+") :"+x+" "+y)
            //Representing unsorted array
        }

        //Red bar to high light the swap
        $(".chart-bar5:nth-child("+(j+1)+")").css("background-color",  " #ff3333");
        $(".chart-bar5:nth-child("+(j+2)+")").css("background-color",  " #ff3333");

        if(amt6 == i+j+2){
            $(".chart-bar5:nth-child("+(amt6-i)+")").css("background-color",  "#ffffff");
            ////console.log(i+" + "+j+" qwerty")
        }

        if(i == amt6-2 && j==0){
            $(".chart-bar5").css("background-color",  "#ffffff");
            ////console.log(i+","+j)
            $("#h_amount").prop('disabled', false);
            $("#h_speed").prop('disabled', false);
            $("#heap-g").prop('disabled', false);
            $("#heap-f").prop('disabled', false);
        }
    }, speed6*time);
}


//Open screen
generateHeapData(20, [])

//console.log(quickcount)
$("#h_amount_val").text("20");
$("#h_speed_val").text("250");
