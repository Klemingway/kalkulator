function a0(){
    document.getElementById("pole").value += "0";
}

function a1(){
    document.getElementById("pole").value += "1";
}

function a2(){
    document.getElementById("pole").value += "2";
}

function a3(){
    document.getElementById("pole").value += "3";
}

function a4(){
    document.getElementById("pole").value += "4";
}

function a5(){
    document.getElementById("pole").value += "5";
}

function a6(){
    document.getElementById("pole").value += "6";
}
    
function a7(){
    document.getElementById("pole").value += "7";
}

function a8(){
    document.getElementById("pole").value += "8";
}

function a9(){
    document.getElementById("pole").value += "9";
}

function aminus(){
    document.getElementById("pole").value += "-";

}

function aplus(){
    document.getElementById("pole").value += "+";

}

function aslash(){
    document.getElementById("pole").value += "/";
}

function arazy(){
    document.getElementById("pole").value += "*";
}

function akropka(){
    document.getElementById("pole").value += ".";
}

function apierwiastek(){
    document.getElementById("pole").value = Math.sqrt(document.getElementById("pole").value);
}

function akassuj(){
    document.getElementById("pole").value = "";
}

function apottengi(){
    document.getElementById("pole").value += "";
}


function ausun(){
    const tekst = document.getElementById("pole").value;
    const tekst2 = tekst.slice(0, - 1);
    document.getElementById("pole").value = tekst2;
}

function arowna(){
    var wynik = document.getElementById("pole").value;
    let bruh = eval(wynik);
    document.getElementById("pole").value = bruh;
}
