$(".menu-opener").click(function(){
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
});

function Convert_pt(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputpt").innerHTML = parseInt(valNum) * 676.28044 + ("L") ;
}

function Convert_qt(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputqt").innerHTML = parseInt(valNum)* 1352.56088 + ("L") ;
}

function Convert_gal(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputgal").innerHTML = parseInt(valNum) * 5410.24352 + ("L")  ;
}