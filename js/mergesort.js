//MERGE SORT COMPLETE
//MIT LICENSE 2020 SANDEEP SHAW


var amt5=20, speed5=37.55;
let mergeArray = []
var loop5;


$(document).ready(function(){
    $("#m_amount").on("input", function(){
        amt5 = this.value
        $("#m_amount_val").text(this.value);
        mergeArray = generateMergeData(amt5,[])
     });
    
     $("#m_speed").on("input", function(){
        speed5 = (1001-this.value)/amt5
        $("#m_speed_val").text(this.value);
     });
    
    //console.log(amt5+", "+speed5)

    //Bubble sort visualization  
    $("#merge-f").click(function(){
        //console.log("BUBBLE SORT SPEED5")
        //console.log(amt5)
        //console.log("SORT : ",mergeArray)
        $("#m_amount").prop('disabled', true);
        $("#m_speed").prop('disabled', true);
        $("#merge-g").prop('disabled', true);
        $("#merge-f").prop('disabled', true);
        var c = 0;
        var swap = false;
        for (let i = 0; i < amt5-1; i++) {
            for(let j = 0; j<amt5-i-1; j++){
                //c += 1
                if(mergeArray[j]>mergeArray[j+1]){
                    swap = true
                    //task5(c,i,j,swap)
                    let temp = mergeArray[j]
                    mergeArray[j] = mergeArray[j+1]
                    mergeArray[j+1] = temp
                }else{
                    swap = false
                    //task5(c,i,j,swap)
                }
                task5(c,i,j,swap)
            }
        }
        //console.log(mergeArray)
      });
  });


//Triggers when screen resolution changes
$( window ).resize(function() {
    let divWidth =  $(".chart-merge").width();
    let margin = 0.1 * divWidth
    let widFactor = ((divWidth - margin)/amt5) + "px";
    $(".chart-bar4").css("margin-left", margin/amt5);
    $(".chart-bar4").css("margin-right", margin/amt5);
    $(".chart-bar4").css("width", widFactor);
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
function generateMergeData(amt5, mergeArray1){
    $(".chart-merge").empty();
        let divWidth =  $(".chart-merge").width();
        let margin = 0.1 * divWidth
        let max = 5;
        //min value 5 - max value 1000 Generating Random
        //console.log(divWidth)
        for(i=0;i<amt5;i++){
            mergeArray1[i] = getRndInteger(10, 1000);
            if(max < mergeArray1[i]){
                max = mergeArray1[i];
            }
        }
        //console.log("MAXIUM NUMBER = ",max)
        for(i=0;i<amt5;i++){
            let lenFactor = 95 * (mergeArray1[i]/max)
            let widFactor = ((divWidth - margin)/amt5)
            $('.chart-merge').prepend('<div class="chart-bar4" style="height : '+ lenFactor +'%; width : '+ widFactor +'px; "></div>')
        }
        //console.log("BUBBLE SORT AMOUNT",amt5)
        $(".chart-bar4").css("margin-left", margin/amt5);
        $(".chart-bar4").css("margin-right", margin/amt5);
        mergeArray1 = mergeArray1.reverse()
        //console.log(mergeArray1)

        mergeArray = mergeArray1

        return mergeArray1
}

//Visualizing the bars
function task5(time,i,j,swap){
    loop5 = setTimeout(function(){
            //#ffffff
        //representing the unsorted array
        for(let m=0;m<amt5-i;m++){
            $(".chart-bar4:nth-child("+(m+1)+")").css("background-color",  " #66ffb5");
        }
       // $(".chart-bar4").css("background-color",  "#66ffb5");

        //Swapping the data
        if(swap == true){
            let x = $(".chart-bar4:nth-child("+(j+1)+")").height();
            let y = $(".chart-bar4:nth-child("+(j+2)+")").height();
            $(".chart-bar4:nth-child("+(j+1)+")").css("height",  y);
            $(".chart-bar4:nth-child("+(j+2)+")").css("height",  x);
            ////console.log(i+"+"+j+"___ "+swap+" : ("+j+","+(j+1)+") :"+x+" "+y)
            //Representing unsorted array
        }

        //Red bar to high light the swap
        $(".chart-bar4:nth-child("+(j+1)+")").css("background-color",  " #ff3333");
        $(".chart-bar4:nth-child("+(j+2)+")").css("background-color",  " #ff3333");

        if(amt5 == i+j+2){
            $(".chart-bar4:nth-child("+(amt5-i)+")").css("background-color",  "#ffffff");
            ////console.log(i+" + "+j+" qwerty")
        }

        if(i == amt5-2 && j==0){
            $(".chart-bar4").css("background-color",  "#ffffff");
            ////console.log(i+","+j)
            $("#m_amount").prop('disabled', false);
            $("#m_speed").prop('disabled', false);
            $("#merge-g").prop('disabled', false);
            $("#merge-f").prop('disabled', false);
        }
    }, speed5*time);
}


//Open screen
generateMergeData(20, [])

//console.log(quickcount)
$("#m_amount_val").text("20");
$("#m_speed_val").text("250");
