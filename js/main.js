var canvasArray;
function createRandomCanvas(){
    let canvasContainer = document.querySelector("#canvasContainer");
    removeChildren(canvasContainer);

    let randomN = Math.floor(getRandomNumber(3,5));
    canvasArray = [];

    for(var i=1; i<= randomN; i++){
        let canvas = document.createElement("CANVAS");
        canvas.setAttribute("id", "canvas-"+i);
        canvasContainer.appendChild(canvas);
        canvas = new fabric.Canvas("canvas-"+i);
        canvasArray.push(canvas);
    }
    addCanvasId(randomN);
}

function generateShapes(){
    let e1 = document.querySelector("#canvasSelect");
    let e2 = document.querySelector("#shapesDropDown");

    let selectedCanvas = e1.options[e1.selectedIndex].value;
    let selectedShape = e2.options[e2.selectedIndex].value;
    
    let can = canvasArray[parseInt(selectedCanvas.split("-")[1]) - 1];
    var shape;

    if(can.getObjects().length > 7){
        window.alert("Maximun number of shapes in Canvas can be 8;");
        return false;
    }

    var left = can.getObjects().length * 65 +20;
    var top = 20;

    if(can.getObjects().length > 3){
        top = can.getHeight()/2 + 10;
        left = (can.getObjects().length - 4) *65 +20;
    }

    switch(selectedShape){
        case "rectangle":
        shape = new fabric.Rect({
            fill: 'red', width: 50, height: 50, top:top, left:left
        });
        break;
        case "triangle":
        shape = new fabric.Triangle({
            fill: 'blue', width: 50, height: 50, top:top, left:left
        });
        break;
        case "circle":
        shape = new fabric.Circle({
            fill: 'green', radius:25 , top:top, left:left
        });
        break;
    }

    can.add(shape);


}

function addCanvasId(_rnd){
   let canvasSelect = document.querySelector("#canvasSelect");
   removeChildren(canvasSelect);

   for(var i=1; i<= _rnd; i++){
       canvasSelect.options[canvasSelect.options.length] = new Option('Canvas '+i,'canvas-'+i);
   }
}

function removeChildren(_par){
    while(_par.hasChildNodes()){
        _par.removeChild(_par.firstChild);
    }
}

function getRandomNumber(_min,_max){
    return (Math.random()*(_max-_min+1)+_min);
}