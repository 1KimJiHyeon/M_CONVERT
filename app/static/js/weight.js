$(".menu-opener").click(function(){
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
});

function Convert_oz(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputoz").innerHTML = parseInt(valNum) * 28.34952325 +("g") ;
}

function Convert_lb(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputlb").innerHTML = parseInt(valNum) * 453.59237 +("g") ;
}

function Convert_st(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputst").innerHTML = parseInt(valNum) * 6350.29318 +("g") ;
}

function Convert_qtr(valNum) {
  if (!valNum){
    valNum = 0
  }
  document.getElementById("outputqtr").innerHTML = parseInt(valNum) * 12700.58636 +("g") ;
}