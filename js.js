$(function () {
  const lista = [];
  const pokemonTomb = [];
  const apiVegpont = "https://pokeapi.co/api/v2/pokemon/";
  const myAsszinkron = new MyAsszinkron();

  myAsszinkron.getAdat(apiVegpont, lista, aktPokemon, hiba);

  const szuloElem = $("aside");
  const sablonElem = $(".sablon");
  sablonElem.remove();

  const szulo = $("section");
  const sablon = $(".elem");

  function aktPokemon(lista) {
    lista[0].results.forEach((element) => {
      myAsszinkron.getAdat(element.url, pokemonTomb, megjelenit, hiba);
    });
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
    let szam = Math.floor(Math.random() * pokemonTomb.length);
    egyMegjelenit(szam);
  });

  function megjelenit(tomb) {
    console.log(tomb);
    torol();
    tomb.forEach((element) => {
      let ujElem = sablonElem.clone().appendTo(szuloElem);
      const pokemon = new Pokemon(ujElem, element);
    });
  }

  function egyMegjelenit(sz) {
    torol();
    $("article").append("<h2></2>");
    $("article").append('<img src="" alt="">');
    console.log(Number(sz));
    $("article h2").html(pokemonTomb[Number(sz)].name);
    $("article img").attr("src", pokemonTomb[Number(sz)].sprites.front_default);
    $("article img").attr("attr", pokemonTomb[Number(sz)].forms.name);
  }

  //ne nyúlj hozzá!!
  $("#lista").on("click", function () {
    console.log("vvv");
    $("article").empty();
    $("section").empty();
    pokemonTomb.sort((a, b) => {
      return Number(a.name < b.name) - 0.5;
    });
    megjelenit(pokemonTomb);
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
    $("section").append('<button class="magassagRendez">Súly</button>');

    $(".nevRendez").click(() => {
      betolt();

      pokemonTomb.sort((a, b) => {
        return Number(a.name > b.name) - 0.5;
      });
      megjelenit(pokemonTomb);
    });

    $(".magassagRendez").click(function () {
      pokemonTomb.sort((a, b) => {
        return Number(a.weight > b.weight) - 0.5;
      });
      megjelenit(pokemonTomb);
    });
  });

  $("#nevKeres").click(() => {
    pokemonTomb.forEach(function (adat) {
      $(".nev").append(
        "<option value=" + adat.name + ">" + adat.name + "</option>"
      );
      console.log(adat);
    });
    for (let i = 0; i < pokemonTomb.length; i++) {
      if (pokemonTomb[i].name === $("option").val()) {
        egyMegjelenit(i);
      }
    }
  });

  $("select").change(()=>{
    console.log("mukszik");
    for (let i = 0; i < pokemonTomb.length; i++) {
      if (pokemonTomb[i].name === $("select").val()) {
        egyMegjelenit(i);
      }
    }
  });
});
