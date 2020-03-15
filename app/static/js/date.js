/* When the input field receives input, convert the value from feet to meters */
function AfterDieToBuddhist(valNum) {
    document.getElementById("OutputBuddhist").innerHTML = parseInt(valNum) + 544 ;
  }

function AfterDieToDanki(valNum) {
  document.getElementById("OutputDanki").innerHTML = parseInt(valNum) + 2333 ;
  }


function SetCurrentYear(){
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById('InputAD').value = n;

  // document.getElementById('CurrentYear').valueAsDate = new Date();
  // var today = new Date();	
  // $("#CurrentYear").val(getYYYY(today));
  // document.getElementById('CurrnetYear').value= new Date().toISOString().slice(0, 7);
  
  // document.getElementById('CurrnetYear').valueAsDate = new Date();

};





// menu bar js
$(".menu-opener").click(function(){
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
});
// menu bar js end