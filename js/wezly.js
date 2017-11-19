var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);

//zwroci wezel rodzica
console.log(pierwszyDiv.parentNode);

//zwroci elemet rodzic
console.log(pierwszyDiv.parentElement);

//tablica wezlow dzieci
console.log(pierwszyDiv.childNodes);
//targetuje tylko elementy
console.log(pierwszyDiv.children);

//tablica wezlow dzieci
console.log(pierwszyDiv.childNodes[0]);

//targetuje pierwszy node
console.log(pierwszyDiv.firstChild);
//targetuje ostatni node
console.log(pierwszyDiv.lastChild);

var link = document.getElementById('link');
//targetpoprzedni node rodzenstwo
console.log(link.nextSibling.nodeType);

//target kolejy nod rodzenstwo
console.log(link.previousSibling);

//target kolejny element rodzenstwo
console.log(link.nextElementSibling);

//target poprzedni elemet rodzestwo
console.log(link.previousElementSibling);

//nodeType - okresla rodzaj wezla (numerycznie)

