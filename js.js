$(function(){
    const tomb=[];
    const apiVegpont="https://pokeapi.co/api/v2/pokemon/";
    const myAsszinkron=new MyAsszinkron();

    const szuloElem = $("table");
    const sablonElem = $(".sablon");

    sablonElem.remove();
    
    
    $("button").on("click", function(){
        let szam=Math.floor(Math.random() * 1000)+1;
        myAsszinkron.getAdat(apiVegpont+szam,tomb,megjelenit, hiba);
    });

    function megjelenit(tomb){
        console.log(tomb);
        $("h2").html(tomb.forms.name);
        $("img").attr("src",tomb.sprites.front_default);
        $("img").attr("attr",tomb.forms.name);
    }

    function hiba(){
        $("h2").html("Hiba!");
        $("img").attr("src","https://c.tenor.com/-n8JvVIqBXkAAAAM/dddd.gif");
        $("img").attr("alt","hiba");
    }

    $("#lista").on("click", function(){
        tomb.forEach(function (adat) {
            let ujElem = sablonElem.clone().appendTo(szuloElem);
            const pokemon = new Task(ujElem, adat);
            console.log(adat);
        });
    });

});
