function fun(x) {
    var url = "https://naslovi.net/vremenska-prognoza/" + x;
    document.getElementsByTagName("iframe")[0].src = url;
    switch (x) {
        case "beograd": window.open("../gradovi/beograd.html", "", "width=400px,height = 300px, top = 600px, left = 900px"); break;
        case "nis": window.open("../gradovi/nis.html", "", "width=400px, height=300px,top = 600px, left = 900px"); break;
        case "valjevo": window.open("../gradovi/valjevo.html", "", "width=400px,height = 300px, top = 600px, left = 900px"); break;
        case "bor": window.open("../gradovi/bor.html", "", "width=400px, height=300px,top = 600px, left = 900px"); break;
        case "pancevo": window.open("../gradovi/pancevo.html", "", "width=400px, height = 300px, top = 600px, left = 900px"); break;
        case "subotica": window.open("../gradovi/subotica.html", "", "width=400px, height = 300px, top = 600px, left = 900px"); break;
        case "vranje": window.open("../gradovi/vranje.html", "", "width=400px, height = 300px, top = 600px, left = 900px"); break;
        case "ruma": window.open("../gradovi/ruma.html", "", "width=400px, height = 300px, top = 600px, left = 900px"); break;
        case "cacak": window.open("../gradovi/cacak.html", "", "width=400px, height = 300px, top = 600px, left = 900px"); break;
        case "jagodina": window.open("../gradovi/jagodina.html", "", "width=400px, height = 300px, top = 600px, left = 900px"); break;
 }
}