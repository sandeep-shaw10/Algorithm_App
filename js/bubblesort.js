//BUBBLE SORT COMPLETE
//MIT LICENSE 2020 SANDEEP SHAW


var amt=20, speed=250;
let valArray = [];
var loop;


$(document).ready(function(){
    $("#b_amount").on("input", function(){
        amt = this.value
     });
    
     $("#b_speed").on("input", function(){
        speed = (1001-this.value)/amt
     });
    
    //console.log(amt+", "+speed)


    //Main soting sode==================
    $("#bubble-t").click(function(){
        //console.log("BUBBLE SORT TYPE")
        var length = valArray.length, i, j;
        for(i = 0; i < length-1; i++){
            for(j=0; j < length-i-1; j++){
                if (valArray[j]>valArray[j+1]){
                    swap(valArray,j,j+1)
                }
                //console.log("SORT : "+valArray)
            }
        }
        //console.log(valArray)
    });

    //Checking styles
    $("#bubble-s").click(function(){
        //console.log("BUBBLE SORT SORT")
        $.each(valArray, function(i,valArray){
            setTimeout(function(){
                //console.log(valArray)
                $(".chart-bar:nth-child("+(i+1)+")").css("background-color",  "#cc83ee");
            }, i*100)
        });

      });

    //Function to generate data
    $("#bubble-g").click(function(){
        generateData()
      });

    //Bubble sort visualization  
    $("#bubble-f").click(function(){
        //console.log("BUBBLE SORT SPEED")
        $("#b_amount").prop('disabled', true);
        $("#b_speed").prop('disabled', true);
        $("#bubble-g").prop('disabled', true);
        $("#bubble-f").prop('disabled', true);
        var c = 0;
        var swap = false;
        for (let i = 0; i < amt-1; i++) {
            for(let j = 0; j<amt-i-1; j++){
                c += 1
                if(valArray[j]>valArray[j+1]){
                    swap = true
                    task(c,i,j,swap)
                    let temp = valArray[j]
                    valArray[j] = valArray[j+1]
                    valArray[j+1] = temp
                }else{
                    swap = false
                    task(c,i,j,swap)
                }
            }
        }
        ////console.log(valArray)
      });

    //To stop the sorting      
    $("#bubble-x").click(function(){
        //console.log("BUBBLE SORT STOP")
        terminate = 1
      });

  });


//Triggers when screen resolution changes
$( window ).resize(function() {
    let divWidth =  $(".chart-bubble").width();
    let margin = 0.1 * divWidth
    let widFactor = ((divWidth - margin)/amt) + "px";
    $(".chart-bar").css("margin-left", margin/amt);
    $(".chart-bar").css("margin-right", margin/amt);
    $(".chart-bar").css("width", widFactor);
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
function generateData(){
    $(".chart-bubble").empty();
        let divWidth =  $(".chart-bubble").width();
        let margin = 0.1 * divWidth
        let max = 5;
        //min value 5 - max value 1000 Generating Random
        //console.log(divWidth)
        for(i=0;i<amt;i++){
            valArray[i] = getRndInteger(10, 1000);
            if(max < valArray[i]){
                max = valArray[i];
            }
        }
        //console.log("MAXIUM NUMBER = ",max)
        for(i=0;i<amt;i++){
            let lenFactor = 95 * (valArray[i]/max)
            let widFactor = ((divWidth - margin)/amt)
            $('.chart-bubble').prepend('<div class="chart-bar" style="height : '+ lenFactor +'%; width : '+ widFactor +'px; "></div>')
        }
        //console.log("BUBBLE SORT AMOUNT",amt)
        $(".chart-bar").css("margin-left", margin/amt);
        $(".chart-bar").css("margin-right", margin/amt);
        valArray = valArray.reverse()
        //console.log(valArray)
}

//Visualizing the bars
function task(time,i,j,swap){
    loop = setTimeout(function(){
            //#1c2237
        //representing the unsorted array
        for(let m=0;m<amt-i;m++){
            $(".chart-bar:nth-child("+(m+1)+")").css("background-color",  " #66ffb5");
        }
       // $(".chart-bar").css("background-color",  "#66ffb5");

        //Swapping the data
        if(swap == true){
            let x = $(".chart-bar:nth-child("+(j+1)+")").height();
            let y = $(".chart-bar:nth-child("+(j+2)+")").height();
            $(".chart-bar:nth-child("+(j+1)+")").css("height",  y);
            $(".chart-bar:nth-child("+(j+2)+")").css("height",  x);
            ////console.log(i+"+"+j+"___ "+swap+" : ("+j+","+(j+1)+") :"+x+" "+y)
            //Representing unsorted array
        }

        //Red bar to high light the swap
        $(".chart-bar:nth-child("+(j+1)+")").css("background-color",  " #ff3333");
        $(".chart-bar:nth-child("+(j+2)+")").css("background-color",  " #ff3333");

        if(amt == i+j+2){
            $(".chart-bar:nth-child("+(amt-i)+")").css("background-color",  "#1c2237");
            ////console.log(i+" + "+j+" qwerty")
        }

        if(i == amt-2 && j==0){
            $(".chart-bar").css("background-color",  "#1c2237");
            ////console.log(i+","+j)
            $("#b_amount").prop('disabled', false);
            $("#b_speed").prop('disabled', false);
            $("#bubble-g").prop('disabled', false);
            $("#bubble-f").prop('disabled', false);
        }
    }, speed*time);
}


//Open screen
generateData()

