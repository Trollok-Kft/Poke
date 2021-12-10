$(function () {
  const tomb = [];
  const apiVegpont = "https://pokeapi.co/api/v2/pokemon/";
  const myAsszinkron = new MyAsszinkron();

  const szuloElem = $("table");
  const sablonElem = $(".sablon");

  sablonElem.remove();

  $("#uj").on("click", function () {
    //console.log(":)");
    let szam = Math.floor(Math.random() * 1000) + 1;
    myAsszinkron.getAdat(apiVegpont + szam, tomb, megjelenit, hiba);
  });

  function megjelenit(tomb) {
    console.log(tomb);
    $("article").empty();
    $("section").empty();
    $("article").append("<h2></2>");
    $("article").append('<img src="" alt="">');
    $("article h2").html(tomb.name);
    $("article img").attr("src", tomb.sprites.front_default);
    $("article img").attr("attr", tomb.forms.name);
  }

  function hiba() {
    $("h2").html("Hiba!");
    $("img").attr("src", "https://c.tenor.com/-n8JvVIqBXkAAAAM/dddd.gif");
    $("img").attr("alt", "hiba");
  }

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

  $("#lista").on("click", function () {
    tomb.forEach(function (adat) {
      let ujElem = sablonElem.clone().appendTo(szuloElem);
      const pokemon = new Task(ujElem, adat);
      console.log(adat);
    });
  });
});
