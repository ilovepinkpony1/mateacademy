document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;
function sliderLeft(){
    var polosa = document.getElementById('polosa');
    left = left - 148;
    if (left < -296){
        left = 0;
    }
    polosa.style.left = left+'px';

}


