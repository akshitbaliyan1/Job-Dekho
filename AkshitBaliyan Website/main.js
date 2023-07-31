
function myfunc() {
  document.getElementById("side-navbar").classList.toggle("change");
  document.body.classList.toggle("overflowhide");
}

function myfunc2(){
    document.getElementById("side-navbar").classList.remove("change");
  document.body.classList.remove("overflowhide");
  document.getElementById("display-button").classList.remove("display-buttonv");
  }

  function myfunc3(){
    document.getElementById("display-button").classList.toggle("display-buttonv");
  }
