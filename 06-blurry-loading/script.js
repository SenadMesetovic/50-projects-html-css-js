const bg = document.querySelector(".bg");
const percentage = document.querySelector(".percentage");

let count = 0;
function loading(){
    count++;
if(count>99){
    clearInterval(myinterval);
}

    bg.style.filter = `blur(${scale(count, 0, 100, 30,0)}px)`;
    percentage.style.opacity = `${scale(count,0,100,1,0)}`;
    percentage.innerHTML=`${count}%`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


myinterval = setInterval(loading,30);