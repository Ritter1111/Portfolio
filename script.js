var colorArray = ["#FFEFD5", "#90EE90", "#E6E6FA", "#BA55D3", "#87CEFA", "#808080", "#FFFFFF", "#FFA07A"];
var i = 0;

function changeColor(){
    document.body.style.background = colorArray[i];
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }
}