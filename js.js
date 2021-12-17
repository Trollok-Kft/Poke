$(function () {
  const tomb = [];
  const tombbb = [];
  const apiVegpont = "https://pokeapi.co/api/v2/pokemon/";
  const myAsszinkron = new MyAsszinkron();
  myAsszinkron.getAdat(apiVegpont, tomb, aktPokemon, hiba);

  const szuloElem = $("aside");
  const sablonElem = $(".sablon");
  sablonElem.remove();

  const szulo = $("section");
  const sablon = $(".elem");

  function aktPokemon(poke) {
    for (let i = 1; i < 51; i++) {
      /* let api = apiVegpont + i; */
      myAsszinkron.getAdat(apiVegpont + i, tombbb, megjelenit, hiba);
      tombbb.push(poke);
      console.log(tombbb);
    }
  }

  function hiba() {
    $("h2").html("Hiba!");
    $("img").attr("src", "https://c.tenor.com/-n8JvVIqBXkAAAAM/dddd.gif");
    $("img").attr("alt", "hiba");
  }

  function torol() {
    $("article").empty();
    $("section").empty();
    $("aside").empty();
  }

  $("#uj").on("click", function () {
    let szam = Math.floor(Math.random() * 1000) + 1;
    myAsszinkron.getAdat(apiVegpont + szam, tomb, megjelenit, hiba);
  });

  function megjelenit(tomb) {
    console.log(tomb);
    torol();
    $("article").append("<h2></2>");
    $("article").append('<img src="" alt="">');
    $("article h2").html(tomb.name);
    $("article img").attr("src", tomb.sprites.front_default);
    $("article img").attr("attr", tomb.forms.name);
  }

  //ne nyúlj hozzá!!
  $("#lista").on("click", function () {
    console.log("vvv");
    $("article").empty();
    $("section").empty();
    tombbb.forEach(function (adat) {
      console.log("vmi");
      let ujElem = sablonElem.clone().appendTo(szuloElem);
      const pokemon = new Pokemon(ujElem, adat);
    });
  });

  function betolt() {
    $("section").append('<div class="elem">');
    $(".elem").append("<h2></h2>");
    $(".elem").append('<img src="" alt="">');
    $(".elem").append('<p class="m" src="" alt="">');
  }

  $("#rendez").click(() => {
    console.log(":(");
    torol();
    $("section").append('<button class="nevRendez">Név</button>');
    $("section").append('<button class="magassagRendez">Magasság</button>');

    $(".nevRendez").click(() => {
      betolt();

      tombbb.sort((a, b) => {
        return Number(a.name > b.name) - 0.5;
      });
      tombbb.forEach(function (adat) {
        console.log("vmi");
        let ujElem = sablon.clone().appendTo(szulo);
        const pokemon = new Pokemon(ujElem, adat);
      });
    });

    $(".magassagRendez").click(function () {
      tombbb.sort((a, b) => {
        return Number(a.height > b.height) - 0.5;
      });
      tombbb.forEach(function (adat) {
        console.log("vmi");
        let ujElem = sablon.clone().appendTo(szulo);
        const pokemon = new Pokemon(ujElem, adat);
      });
    });
  });

  $("#nevKeres").click(() => {
    tombbb.forEach(function (adat) {
      $(".nev").append(
        "<option value=" + adat.name + ">" + adat.name + "</option>"
      );
      console.log(adat);
    });
    myAsszinkron.getAdat(apiVegpont, tomb, megjelenit, hiba);
  });
});
