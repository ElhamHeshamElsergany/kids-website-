function allowdrop(eve) {
    eve.preventDefault();
}


function drag(eve) {
    eve.dataTransfer.setData("btn", eve.target.id);

}

var arrayOfValues = new Array();

function drop(eve) {
    eve.preventDefault();
    var data = eve.dataTransfer.getData("btn")
    var entered = document.getElementById(data);
    entered.setAttribute("style", "background-color: #b3c5e6;")
    entered.setAttribute("style", "width:60px;")
    eve.target.appendChild(entered);

    var dragedButton = entered.value;
    // console.log(dragedButton);
    //catch value 
    arrayOfValues.push(dragedButton);
    value = "";

    for (var x = 0; x < arrayOfValues.length; x++) {
        value += arrayOfValues[x];

    }
    console.log(value);

}


function loadImage() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "learn.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            append(JSON.parse(xhr.responseText))
        }

        else {

            var imag = document.getElementById("showImage");
            imag.src = "images/tryagain1.jpg";


        }
    }
    xhr.send();
}

function append(Data) {
    for (std of Data["mydata"]) {
        if (std.id == value) {
            var url = std.img;
            var imag = document.getElementById("showImage");
            imag.src = url;
            console.log(url);



        }

    }
}

function reset(eve) {
    var Div = document.querySelectorAll(".btn")
    for (var x = 0; x < Div.length - 1; X++) {
        var button = document.createElement("input");
        button.type = "button"
        button.value = Div[x].value;
        document.getElementById("reset").appendChild("button")

    }


}

// function getchar(eve) {
//     var val = document.getElementById("list").value;
//     var char1= document.getElementById("char")
//     char1.value = val;

// }




function addchar(eve) {
     var newbutton = document.createElement("input")
     newbutton.type="button"
     newbutton.draggable="true"
     newbutton.id="newbtn";
     newbutton.value=" ";
     newbutton.style.backgroundColor=" rgb(204, 208, 243)";
     newbutton.style.borderColor="rgb(74, 87, 231)";
     newbutton.style.borderRadius="30px" 
    var position = document.getElementById("reset");
    position.appendChild(newbutton);  

}


function getchar(eve) {
var val = document.getElementById("list").value;
var button = document.getElementById("newbtn");
button.value=val;



}


function loadWindwo() {
    location.reload();
}


function getrandomColor() {
    var char = '0123456789ABCDEF'
    var color = "#"
    for (let x = 0; x < 6; x++) {

        color += char[Math.floor(Math.random() * 16)]
    }

    return color;
}




var Layer_1 = document.getElementById("Layer_1").addEventListener("mousedown", function () {
    var color = getrandomColor();
    this.style.fill = color

    var circ1 = document.getElementById("circ1");
    circ1.style.fill = color
    circ1.style.stroke = color


}
)





var Layer_2 = document.getElementById("Layer_2").addEventListener("mousedown", function () {
    var color = getrandomColor();
    this.style.fill = color

    var circ2 = document.getElementById("circ2");
    circ2.style.fill = color
    circ2.style.stroke = color

}
)




var Layer_3 = document.getElementById("Layer_3").addEventListener("mousedown", function () {
    var color = getrandomColor();
    this.style.fill = color

    var circ2 = document.getElementById("circ3");
    circ3.style.fill = color
    circ3.style.stroke = colo
}
)




var Layer_4 = document.getElementById("Layer_4").addEventListener("mousedown", function () {
    var color = getrandomColor();
    this.style.fill = color

    var circ4 = document.getElementById("circ4");
    circ4.style.fill = color
    circ4.style.stroke = color

}
)













