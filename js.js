$(function(){
    const tomb=[];
    const apiVegpont="https://pokeapi.co/api/v2/pokemon/";
    const myAsszinkron=new MyAsszinkron();
    
    
    $("button").on("click", function(){
        let szam=Math.floor(Math.random() * 1000)+1;
        myAsszinkron.getAdat(apiVegpont+szam,tomb,megjelenit, hiba);
    });

    function megjelenit(tomb){
        console.log(tomb);
        $("h2").html(tomb.name);
        $("img").attr("src",tomb.sprites.front_default);
        $("img").attr("attr",tomb.name);
    }

    function hiba(){
        $("h2").html("Hiba!");
        $("img").attr("src","https://c.tenor.com/-n8JvVIqBXkAAAAM/dddd.gif");
        $("img").attr("alt","hiba");
    }
});