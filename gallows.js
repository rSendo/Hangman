var hasla = [
  "Terry Goodkind",
  "Miecz prawdy",
  "Pierwsza Spowiedniczka",
  "Spowiedniczka",
  "Pierwsze prawo magii",
  "Kamień łez",
  "Bractwo czystej krwi",
  "Świątynia wichrów",
  "Dusza ognia",
  "Nadzieja pokonanych",
  "Filary świata",
  "Bezbronne imperium",
  "Pożoga",
  "Fantom",
  "Wróżebna machina",
  "Trzecie królestwo",
  "Skradzione dusze",
  "Dług wdzięczności",
];

var x = Math.floor((Math.random() * hasla.length));

var haslo = hasla[x]
haslo = haslo.toUpperCase();


var dlugosc = haslo.length;
var ile_bledow = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var win = new Audio("win.wav");
var fail = new Audio("fail.wav");

var haslo1 = "";

for (i=0; i<dlugosc; i++) {
        if(haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
        else haslo1 = haslo1 + "-";
    }

function wypisz_haslo() {
        document.getElementById("password").innerHTML = haslo1;
}

function pokazHaslo() {
    document.getElementById('password').innerHTML = haslo;
}
function ukryjHaslo() {
    document.getElementById('password').innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";


function start() {
   var tresc_diva = "";
   for (i=0; i<=34; i++) {
       var element = "lit" + i;
       tresc_diva = tresc_diva + '<div class="litera" id="'+element+'" onclick="sprawdz('+i+')">'+litery[i]+'</div>';
       if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>'
   }
    document.getElementById("alphabet").innerHTML = tresc_diva;
    
    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak) {
    if (miejsce > this.length -1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr) {
    var trafiona = false;
    for(i=0; i<dlugosc; i++) {
        if (haslo.charAt(i) == litery[nr])
            {
                haslo1 = haslo1.ustawZnak(i,litery[nr]);
                trafiona = true;
            }
    }
    if(trafiona == true) {
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300"; 
        document.getElementById(element).style.color = "#00C000";     
        document.getElementById(element).style.border = "3px solid #00C000";   
        document.getElementById(element).style.cursor = "default"; 
        
        wypisz_haslo();
    }
    else {
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";    
        document.getElementById(element).style.color = "#C00000";     
        document.getElementById(element).style.border = "3px solid #C00000"; 
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
        
    //błąd
        ile_bledow++;
      var obraz = "img/g"+ile_bledow+".png";
       
      var obrazek = document.getElementById("gallows").innerHTML = "<img src='"+obraz+"' alt=''/>";
       

    }
    //wygrana
    if (haslo == haslo1) {
       win.play(); document.getElementById("alphabet").innerHTML = 'Wygrana! Podano hasło: <br />'+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}
    
    //przegrana
    if (ile_bledow>=9) {
         fail.play();
        document.getElementById("alphabet").innerHTML = 'Przegrana! Prawidłowe hasło to: <br />'+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }
}