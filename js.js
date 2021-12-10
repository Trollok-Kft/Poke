$(function () {
    const tomb = [];
    const tombbb = [];
    const apiVegpont = "https://pokeapi.co/api/v2/pokemon/";
    const myAsszinkron = new MyAsszinkron();
    myAsszinkron.getAdat(apiVegpont, tomb, beolvas, hiba);
  
    const szuloElem = $("aside");
    const sablonElem = $(".sablon");
    sablonElem.remove();
  
    function beolvas(tomb) {
      console.log(tomb.results[0].url);
      tomb.results.forEach((element) => {
        $.ajax({
          url: element.url,
          success: function (r) {
            console.log(r);
            tombbb.push(r);
            console.log(tombbb);
          },
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
      myAsszinkron.getAdat(apiVegpont + szam, tomb, megjelenit, hiba);
    });
  
    function megjelenit(tomb) {
      console.log(tomb);
      $("article").empty();
      $("section").empty();
      $("aside").empty();
      $("article").append("<h2></2>");
      $("article").append('<img src="" alt="">');
      $("article h2").html(tomb.name);
      $("article img").attr("src", tomb.sprites.front_default);
      $("article img").attr("attr", tomb.forms.name);
    }
  
    //ne nyúlj hozzá!!
    $("#lista").on("click", function () {
        $("article").empty();
      $("section").empty();
      tombbb.forEach(function (adat) {
        console.log("vmi");
        let ujElem = sablonElem.clone().appendTo(szuloElem);
        const pokemon = new Pokemon(ujElem, adat);
      });
    });
  
    $("#rendez").click(() => {
      console.log(":(");
      $("article").empty();
      $("section").empty();
      $("section").append('<button class="nevRendez">Név</button>');
      $("section").append('<button class="magassagRendez">Magasság</button>');
  
      $(".nevRendez").click(() => {
        console.log("nev");
        $("section").append('<div class="elem">');
        $(".elem").append("<h2>H</h2>");
        $(".elem").append('<img src="" alt="">');
      });
  
      $(".magassagRendez").click(function () {
        console.log("magassag");
      });
    });
  });