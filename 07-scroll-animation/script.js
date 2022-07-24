const boxes = document.querySelectorAll(".box");

let count = 0;
checkBoxes();
window.addEventListener('scroll', checkBoxes)

function checkBoxes(){
    const bottomBorder = 4 * window.innerHeight / 5;
    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop<bottomBorder){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
        
    })
}

