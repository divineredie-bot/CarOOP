let gearBoxInterval;
function carStartListener(){
    let rundomNumber = Math.random();

    if(rundomNumber > 0.5){
        carStarted()
    }
    else{
        carCannotBeStarted()
    }
}

function drawStatus(status){
    statusLabel.innerHTML =  status;
}

function devLog(message){
    console.log(message);
}

function carStarted(){
    drawStatus("Car have started");
    devLog("Car have started");

    startButton.classList.add("hide");

    gearBoxStarted()

    plannedCrushStarted();
}

function carCannotBeStarted(){
    devLog("Something wrong");
    drawStatus("Car can't started");
    drawStatus("Car can't started");}

function gearBoxStarted(){
    let gearBoxValue = 1;
    function incrementGearBoxValue(){

        gearBoxValueLabel.innerHTML = gearBoxValue;

        if (gearBoxValue < 5){
        gearBoxValue++;
        gearBoxValueLabel.innerHTML = gearBoxValue;
        }
        }
        
        gearBoxInterval = window.setInterval(incrementGearBoxValue, 1000);
}

function plannedCrushStarted(){
    function EngineCrushed(){
        devLog("engine crushed");
        drawStatus("Engine have crashed. Car have stopped");
        startButton.classList.remove("hide");
        gearBoxValueLabel.innerHTML = "N";
        clearInterval(gearBoxInterval);
        }
        window.setTimeout(EngineCrushed, 5000);


        
        devLog("we wait crush");
}


let startButton = document.querySelector("#start-car");
let statusLabel = document.querySelector("#status");
let gearBoxValueLabel = document.querySelector("#gear-box-value");
startButton.addEventListener("click", carStartListener);