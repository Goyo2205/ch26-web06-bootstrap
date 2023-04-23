console.log("Hola desde un script externo");

function changeColor(color){
    const refName = getReferenceFullName();
    refName.style.color = color;
}

function getReferenceFullName(){
    return document.getElementById("name")
}

function changeColorParagraph(color, refObj){
    console.log(refObj);
    refObj.style.color = color;
}
function resetColor(color){
    const refObjs = document.getElementsByClassName("text-color")
    console.log(refObjs);
    for (let i = 0; i < refObjs.length; i++) {
        const element = refObjs[i];
        element.style.color = "black"
    }
    
}