var hasla = {
    informatyka: [
      "Dopóty dysk dane nosi póki mu bootsector nie padnie",
      "Jeden Celeron kompa nie czyni",
      "Nie wywołuj przerwań z BIOSu",
      "Mądry Polak po errorze",
      "Jak trwoga to do serwisu",
      "Nie wszystko dioda co się świeci",
      "Gdzie dysków sześć tam dużo formatowania",
      "Komu w drogę temu laptop",
      "Co dwie kopie to nie jedna",
      "Nie taki deamon straszny jak go killują",
      "Tam gdzie deamon mówi shutdown",
      "Z próżnego i recover nie odzyska",
      "Nie resetuj drugiemu co tobie nie miło",
      "Nie chwal systemu przed pierwszym padem",
      "Co wolno Adminowi to nie Użytkownikowi",
      "UPeeSy strzelają, Admin baty znosi",
      "Gdyby Pani nie skakała to by kabli nie wyrwała",
      "Ciągnie się jak backup nad ranem",
      "Bajt Ci w port",
      "Użytkownika myśl nie tyka",
      "Jedni wkładają śmieci do kubła inni do sieci"
    ],
    polskie: [
      "Aby do wiosny",
      "Aksamity atłasy sławy nie czynią",
      "Albo rybki albo akwarium",
      "Ambroży w grudniu uprawia ugory",
      "Apetyt rośnie w miarę jedzenia",
      "Atak jest najlepszą obroną",
      "Bez matki nie ma chatki",
      "Bogatemu to i byk się ocieli",
      "Bo pić trzeba umieć",
      "Cieszyć się jak Ruski z roweru",
      "Co łysemu po grzebieniu",
      "Czyj nasiew tego plon",
      "Dla głupiego każdy dzień święto",
      "Dobry początek to połowa roboty",
      "Głupota ludzka nie ma granic",
      "I kwaśne jabłko robak toczy",
      "Jajko mądrzejsze od kury",
      "Jak cię widzą, tak cię piszą",
      "Jak krew w piach",
      "Jaka praca taka płaca",
      "Jaki pan taki kram",
      "Każda krowa swoje cielę liże",
      "Każde grabie do siebie grabią",
      "Każdy kogut na swych śmieciach śmielszy",
      "Kochanego ciała nigdy za wiele",
      "Kto rano wstaje ten jest niewyspany",
      "Lepiej byle jak siedzieć niż dobrze stać",
      "Lepiej dosadzić niż przesadzić",
      "Lepiej się ukłonić głowie niż ogonowi",
      "Lepsza jedna panna niż cztery wdowy",
      "Lepszy funt rozumu niż cetnar dowcipu",
      "Ładna buzia to połowa posagu",
      "Łatwo być hojnym z cudzego",
      "Łyżka dziegciu beczkę miodu zepsuje",
      "Mówił dziad do obrazu a ten do niego ani razu",
      "Na głupiej głowie i włos się nie utrzyma",
      "Najgorszy jest diabeł wtenczas kiedy się modli.",
      "Nic mu nie będzie, bo głupi",
      "Nie masz cwaniaka nad Warszawiaka",
      "Prawdziwa wiedza to znajomość przyczyn",
      "Rozmówił się jak gęś z prosięciem",
      "Skleroza nie choroba tylko nogi bolą",
      "Słowo się rzekło kobyłka u płota",
      "Swojego nie puszczaj po cudze nie sięgaj",
      "Szlachcic na zagrodzie równy wojewodzie",
      "Tanie kupisz psom wyrzucisz",
      "Trud człowieczy czas niweczy",
      "Tylko trzewik wie że pończocha dziurawa",
      "Ubogiemu łacniej być dobrym",
      "Ucieka świńskim truchtem",
      "Uczepił się jak pchła kożucha",
      "Wielki jak brzoza a głupi jak koza",
      "Wysoki do nieba a głupi jak trzeba",
      "Zrób komu dobrze to ci da po ziobrze",
      "Mów do dupy to cię osra",
      "Pasuje jak kij do dupy",
      "Śpiewa jakby mu sierp z dupy ciągnął",
      "Wyżej dupy nie podskoczysz"
    ],     
    koty: [
      "Bodaj tak kot płakał",
      "Jak kot z pęcherzem lata",
      "Jeden kot stada myszy się nie boi",
      "Kot się myje będzie deszcz",
      "Nie dla kota sadło",
      "Pierwsze koty za płoty",
      "Wstyd kota w ogon",
      "Gdy kota myszy nie czują śmiało sobie tańcują",
      "Gdzie czuje kota tam mysz nie chrobota",
      "Każdy kot w nocy czarny",
      "Wykręcić kota ogonem",
      "Sprawić kocią muzykę",
      "Pytali się kotka czy śmietanka słodka",
      "Hałaśliwy kot nigdy nie schwyci myszy",
      "Kiedy kot odchodzi mysz wraca",
      "Zwąchał kot kiełbasę a nie zwąchał kija",
      "Kucharz zawinił kota ukarali",
      "Kotkowi żart a myszce śmierć",
      "Kota na myszy na zające charta",
      "Nie ciągnij kota za ogon to cię nie zadrapie",
      "Iść kocią łapką",
      "Gadałby kotek ale język krotek"
    ]
}

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var win = new Audio("win.wav");
var fail = new Audio("fail.wav");

var haslo;
var haslo1;
var ile_bledow;

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

window.onload = start;

function start() {
    ustaw_plansze('koty');
}

function ustaw_plansze(category) {
    ile_bledow = 0;
    wypisz_litery();
    losuj_haslo(category);
    wypisz_haslo();
    pokaz_wisielca();
}

function wypisz_litery() {
    var tresc_diva = "";
    for (i=0; i<=34; i++) {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" id="'+element+'" onclick="sprawdz('+i+')">'+litery[i]+'</div>';
        if ((i+1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>'
    }
    document.getElementById("alphabet").innerHTML = tresc_diva; 
}

function losuj_haslo(category) {
    var x = Math.floor((Math.random() * hasla[category].length));
    haslo = hasla[category][x]
    haslo = haslo.toUpperCase();
    haslo1 = ""
    for (var i=0; i<haslo.length; i++) {
        if(haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
        else haslo1 = haslo1 + "-";
    }
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

function pokaz_wisielca() {
    var obraz = "img/g"+ile_bledow+".png";
    var obrazek = document.getElementById("gallows").innerHTML = "<img src='"+obraz+"' alt=''/>";
}

String.prototype.ustawZnak = function(miejsce, znak) {
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr) {
    var trafiona = false;
    for (var i=0; i<haslo.length; i++) {
        if (haslo.charAt(i) == litery[nr]) {
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
            trafiona = true;
        }
    }
    if (trafiona == true) {
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300"; 
        document.getElementById(element).style.color = "#00C000";     
        document.getElementById(element).style.border = "3px solid #00C000";   
        document.getElementById(element).style.cursor = "default"; 
        
        wypisz_haslo();
    } else {
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";    
        document.getElementById(element).style.color = "#C00000";     
        document.getElementById(element).style.border = "3px solid #C00000"; 
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
        
        //błąd
        ile_bledow++;
        pokaz_wisielca();
    }
    //wygrana
    if (haslo == haslo1) {
       win.play();
       document.getElementById("alphabet").innerHTML = 'Wygrana! Podano hasło: <br />'+haslo+'<br /><br /><span class="reset" onclick="ustaw_plansze(\'koty\')">JESZCZE RAZ?</span>';
    }
    
    //przegrana
    if (ile_bledow>=9) {
        fail.play();
        document.getElementById("alphabet").innerHTML = 'Przegrana! Prawidłowe hasło to: <br />'+haslo+'<br /><br /><span class="reset" onclick="ustaw_plansze(\'koty\')">JESZCZE RAZ?</span>';
    }
}
