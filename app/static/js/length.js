$(".menu-opener").click(function(){
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
});

function Convert_in(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputin").innerHTML = parseInt(valNum) * 2.54 +("cm");
}

function Convert_ft(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputft").innerHTML = parseInt(valNum) * 30.48 +("cm") ;
}

function Convert_yd(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputyd").innerHTML = parseInt(valNum)  * 91.44 +("cm") ;
}

function Convert_ch(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputch").innerHTML = parseInt(valNum) * 2011.68 +("cm") ;
}

function Convert_fur(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputfur").innerHTML = parseInt(valNum)  * 20116.8 +("cm") ;
}

function Convert_mile(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputmile").innerHTML = parseInt(valNum) * 160934.4+("cm");
}

function Convert_lea(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputlea").innerHTML = parseInt(valNum)  * 482803.2 +("cm") ;
}
