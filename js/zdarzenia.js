document.addEventListener('DOMContentLoaded', function() {
//    tutaj nazwy funkcji, odpalane przy danym zdarzeniu
    
    changeColor();
    hoverLinks();
//    zmienCos();
    wcisnijPodnies();
//    zmienBackground();
    wypiszZInputa()
})

window.addEventListener('resize', function() {
    zmienCos();
})
window.addEventListener('scroll', function () {
    
})


function changeColor() {
//    tworze zmienna, trzyma tablicez elementami o klasie
    var linki = document.getElementsByClassName('link');
    for(var i=0; i < linki.length; i++) {
        linki[i].style.color = 'red';
    }
}

function hoverLinks() {
    var linki = document.getElementsByClassName('link');
    
    for(var i=0; i < linki.length; i++) {
        linki[i].style.transition = 'all 0.4s';
    
        linki[i].addEventListener('mouseover', function() {
            this.style.color = 'blue';
            
        })
        linki[i].addEventListener('mouseover', function() {
            this.style.color = 'red';
        })
        linki[i].addEventListener('click', function(e) {
            e.preventDefault();
            this.style.fontSize = '25px';
        })
    }
}
//console.log(window.outerWidth);

function zmienCos() {
    if (window.outerWidth < 768) {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'initial';
    }
}
function wcisnijPodnies() {
    var inputs = document.querySelectorAll('#form input');
//    console.log(inputs);
    for(var i=0; i<inputs.length; i++) {
        inputs[i].addEventListener('keydown', function() {
            this.style.background = 'green';
        })
        inputs[i].addEventListener('keyup', function() {
            this.style.background = 'initial';
        })
        
        
    }
}

function zmienBackground(){
    document.body.addEventListener('touchmove', function()
                                  {
        this.style.background = 'black'
    })
}
function wypiszZInputa() {
    var inputy = document.querySelectorAll('#form input');
    for(var i=0; i < inputy.length; i++) {
        inputy[i].addEventListener('change', function() {
                 
        console.log(this.value);
    })
}
}

function wypiszDokonsoli(){
    console.log('123');
}

var form = document.getElementById('form');

//przypisaniefunkcji do eventu po samej nazwie (nie uzywamy nawiasów)

form.addEventListener('click', wypiszDokonsoli);
form.removeEventListener('click', wypiszDokonsoli);


var btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
    console.log(e.type);
    e.stopPropagation();
})

window.addEventListener('mousemove', function(e){
//    var x = e.clientX;
//    var y = e.clientY;
    
    console.log(e.type);
//    console.log(y);
})


document.body.addEventListener('click', function(){
    console.log('kliknieto body');
})

document.querySelector



