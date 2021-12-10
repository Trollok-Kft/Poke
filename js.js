$(function () {
    const tomb = [];
    const tombbb = [];
    const apiVegpont = "https://pokeapi.co/api/v2/pokemon/";
    const myAsszinkron = new MyAsszinkron();
    myAsszinkron.getAdat(apiVegpont, tomb, beolvas, hiba);

    function beolvas(tomb) {
        console.log(tomb.results[0].url);
        tomb.results.forEach(element => {
            $.ajax(
                {
                    url: element.url,
                    success: function (r) {
                         console.log(r);
                         tombbb.push(r);
                         console.log(tombbb);
                        }
                });
        });
    }

    function hiba() {
        $("h2").html("Hiba!");
        $("img").attr("src", "https://c.tenor.com/-n8JvVIqBXkAAAAM/dddd.gif");
        $("img").attr("alt", "hiba");
    }

    $("#uj").on("click", function () {
        let szam = Math.floor(Math.random() * 1000) + 1;
        
    });


    $("#rendez").click(() => {
        $("section").append("<ul>");
        $("section").append('<li><button id="uj">Név</button></li>');
        $("section").append('<li><button id="uj">Magasság</button></li>');
    });

    const szuloElem = $("body");
    const sablonElem = $(".sablon");

    sablonElem.remove();

    //ne nyúlj hozzá!!
    $("#lista").on("click", function () {
        tombbb.forEach(function (adat) {
            console.log("vmi");
            let ujElem = sablonElem.clone().appendTo(szuloElem);
            const pokemon = new Pokemon(ujElem, adat);
        });
    });
    

});
