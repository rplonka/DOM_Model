var btn = document.createElement('button');
var txt = document.createTextNode('kliknij mnie');
var title = document.createAttribute('title');

title.value = 'tytul';
btn.appendChild(txt);
btn.setAttributeNode(title);
document.body.appendChild(btn);
btn.setAttribute('class', 'wartosc');

//console.log(btn);

function stworzElement(element, text, atrybut, wartosc_atrybutu)
{
    this.element = element;
    this.text = text;
    this.atrybut= atrybut;
    this.wartosc_atrybutu=wartosc_atrybutu;
    
    var new_element = document.createElement(element);
    var new_text = document.createTextNode(text);
    var new_attr = document.createAttribute(atrybut);
    
    new_attr.value = wartosc_atrybutu;
    new_element.appendChild(new_text);
    new_element.setAttributeNode(new_attr);
    
    document.body.appendChild(new_element);

}

stworzElement('p', 'Lorem ipsum', 'class', 'paragraf');
stworzElement('div', 'Lorem ipsum', 'class', 'paragraf2');

var paragraf2 = document.querySelector('.paragraf2');
console.log(paragraf2);

document.body.removeChild(paragraf2);

var linki = document.getElementsByClassName('link');
linki[4].removeAttribute('class');

var klasa = linki[3].getAttributeNode('class');

linki[3].removeAttributeNode(klasa);


